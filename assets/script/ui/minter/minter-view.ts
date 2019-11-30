import EventType = cc.Node.EventType;

import { Subject } from 'rxjs';

import { log } from '../../common/logger';
import { ZhugeDice } from '../../models/minter';
import { getRandomInt } from '../../utils/get-random-int';
import { hideMouseCursor } from '../../utils/hide-mouse-cursor';
import { hideNode, showNode } from '../../utils/node-utils';
import { showMouseCursor } from '../../utils/show-mouse-cursor';
import RoadView from '../road-view';
import { getDiceX } from './internat/get-dice-x';

const { ccclass, property } = cc._decorator;

/**
 * 行为控制器
 */
@ccclass
export class MinterView extends cc.Component {
  @property({
    type: cc.Node,
    tooltip: '骰子滚动条的圆珠',
  })
  dice: cc.Node = null;

  @property({
    type: cc.Node,
    tooltip: '诸葛六算珠滚动条',
  })
  dice6Ind: cc.Node = null;

  @property({
    type: cc.Node,
    tooltip: '诸葛九算珠滚动条',
  })
  dice9Ind: cc.Node = null;

  @property({
    type: cc.Node,
    tooltip: '诸葛六算珠(点击状态)',
  })
  dice6Clicked: cc.Node = null;

  @property({
    type: cc.Node,
    tooltip: '诸葛九算珠',
  })
  dice9: cc.Node = null;

  @property({
    type: cc.Node,
    tooltip: '诸葛九算珠(点击状态)',
  })
  dice9Clicked: cc.Node = null;

  @property({
    type: cc.Node,
    tooltip: '诸葛十二算珠',
  })
  dice12: cc.Node = null;

  @property({
    type: cc.Node,
    tooltip: '诸葛十二算珠(点击状态)',
  })
  dice12Clicked: cc.Node = null;

  // 是否禁用事件
  enabled = true;
  state: ZhugeDice;
  // 道路
  mapRoad: RoadView;

  // 骰子事件
  readonly onDice$ = new Subject<number>();

  constructor() {
    super();
    this.state = {
      max: 9,
      dice: 6,
    };
  }

  start(): void {
    // 初始化诸葛算珠动作事件
    [this.dice6Clicked, this.dice9Clicked, this.dice12Clicked].forEach((el) => this.initActionEvent(el));
    // 显示默认鼠标样式
    showMouseCursor();
  }

  update(dt: number): void {
    // console.log(this.state, this.dice.x, this.dice.y);
    // this.dice.x = this.getDiceX(this.state.dice);
  }

  onLoad(): void {
    this.loadStatus({
      max: 12,
      dice: 6,
    });
  }
  protected onDestroy(): void {
    this.onDice$.complete();
  }

  disable(): void {
    this.enabled = false;
    hideMouseCursor();
  }

  enable(): void {
    this.enabled = true;
    showMouseCursor();
  }

  /**
   * 加载骰子控制器状态
   * @param minter
   */
  loadStatus(minter: ZhugeDice): void {
    log({ msg: '加载控制器状态', channel: '行为控制器', data: minter });
    const fn = () => {
      this.state = minter;
      this.dice.x = this.getDiceX(this.state.dice);
      switch (minter.max) {
        case 6: {
          showNode([this.dice6Ind]);
          hideNode([this.dice9, this.dice12]);
          break;
        }
        case 9: {
          showNode([this.dice9, this.dice9Ind]);
          hideNode([this.dice12, this.dice6Ind]);
          break;
        }
        case 12: {
          showNode([this.dice9, this.dice12]);
          hideNode([this.dice6Ind, this.dice9Ind]);
          break;
        }
        default: {
        }
      }
    };

    hideNode(this.node);
    this.scheduleOnce(() => {
      fn();
      showNode(this.node);
    });
  }

  /**
   * 获取骰子x位置
   * @param diceNum 骰子数（最小1、最大12）
   */
  private getDiceX(diceNum: number): number {
    return getDiceX(this.dice6Ind.x, diceNum);
  }

  /**
   * 设置算珠点击事件
   * @param el 算珠元素
   */
  private initActionEvent(el: cc.Node): void {
    // 注册鼠标释放事件
    el.on(EventType.MOUSE_UP, async () => {
      // 算珠不可用时，不继续执行
      if (!this.enabled) {
        return;
      }

      let maxNum;
      switch (el) {
        case this.dice6Clicked: {
          maxNum = 6;
          // 隐藏按下图片
          hideNode(this.dice6Clicked);
          break;
        }
        case this.dice9Clicked: {
          if (this.state.max >= 9) {
            maxNum = 9;
            hideNode(this.dice9Clicked);
          }
          break;
        }
        case this.dice12Clicked: {
          if (this.state.max === 12) {
            maxNum = 12;
            hideNode(this.dice12Clicked);
          }
          break;
        }
        default: {
        }
      }

      if (maxNum) {
        // 执行摇骰子动作
        const diceNum = await this.diceAction(maxNum);
        log({ msg: `掷骰子结果:${diceNum}`, channel: '行为控制器', data: { node: el.name } });
        this.onDice$.next(diceNum);
      }
    });

    // 注册鼠标按下事件
    el.on(EventType.MOUSE_DOWN, () => {
      if (!this.enabled) {
        return;
      }
      switch (el) {
        case this.dice6Clicked: {
          showNode(this.dice6Clicked);
          break;
        }
        case this.dice9Clicked: {
          if (this.state.max >= 9) {
            showNode(this.dice9Clicked);
          }
          break;
        }
        case this.dice12Clicked: {
          if (this.state.max === 12) {
            showNode(this.dice12Clicked);
          }
          break;
        }
        default: {
        }
      }
    });

    // 注册鼠标进入事件
    el.on(EventType.MOUSE_ENTER, () => {
      if (el === this.dice6Clicked || el === this.dice9Clicked || el === this.dice12Clicked) {
        showNode(this.mapRoad.floor);
      }
    });
    // 注册鼠标离开事件
    el.on(EventType.MOUSE_LEAVE, () => {
      if (el === this.dice6Clicked || el === this.dice9Clicked || el === this.dice12Clicked) {
        hideNode(this.mapRoad.floor);
      }
    });
  }

  /**
   * 执行摇骰子动作、并返回骰子数
   * @param max 骰子最大值
   * @return 骰子数
   */
  private async diceAction(max: number): Promise<number> {
    return new Promise((resolve) => {
      const diceNum = getRandomInt(1, max);
      const callback = cc.callFunc(() => {
        this.enable();
        resolve(diceNum);
      });

      const push = cc.moveTo(0.5, this.getDiceX(max), this.dice.y);
      const pull = cc.moveTo(0.5, this.getDiceX(1), this.dice.y);
      const diceX = this.getDiceX(diceNum);
      const target = cc.moveTo(0.5, diceX, this.dice.y);
      const seq = cc.sequence(push, pull, target, callback); // .easing(cc.easeOut(2));
      this.dice.runAction(cc.speed(seq, 2));
      this.disable();
    });
  }
}
