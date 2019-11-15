import { ZhugeDice12, ZhugeDice6, ZhugeDice9 } from '../../models';
import { getRandomInt, hideMouseCursor, hideNode, showMouseCursor, showNode } from '../../utils';
import { getDiceX } from './utils';
import EventType = cc.Node.EventType;
import Node = cc.Node;

const { ccclass, property } = cc._decorator;

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
  state: ZhugeDice6 | ZhugeDice9 | ZhugeDice12;

  start(): void {
    this.setClickEvents([this.dice6Clicked, this.dice9Clicked, this.dice12Clicked]);
    showMouseCursor();
  }

  update(dt: number): void {
    // console.log(this.state, this.dice.x, this.dice.y);
    // this.dice.x = this.getDiceX(this.state.dice);
  }

  onLoad(): void {
    console.log('onLoad');
    this.load({
      max: 9,
      dice: 6,
    });
    /*setTimeout(() => {
      this.load({
        max: 12,
        dice: 7,
      });
    }, 1000);*/
  }

  /**
   * 加载骰子控制器
   * @param minter
   */
  load(minter: ZhugeDice6 | ZhugeDice9 | ZhugeDice12): void {
    const fn = () => {
      this.state = minter;
      this.dice.x = this.getDiceX(this.state.dice);
      // this.dice.setPosition(cc.v2(this.getDiceX(this.state.dice), this.dice.y));
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

  private setClickEvents(elList: Node[]): void {
    elList.forEach((el) => this.setClickEvent(el));
  }

  /**
   * 设置算珠点击事件
   * @param el 算珠元素
   */
  private setClickEvent(el: Node): void {
    el.on(EventType.MOUSE_UP, () => {
      if (!this.enabled) {
        return;
      }
      switch (el) {
        case this.dice6Clicked: {
          hideNode(this.dice6Clicked);
          this.diceAction(6);
          break;
        }
        case this.dice9Clicked: {
          if (this.state.max >= 9) {
            hideNode(this.dice9Clicked);
            this.diceAction(9);
          }
          break;
        }
        case this.dice12Clicked: {
          if (this.state.max === 12) {
            hideNode(this.dice12Clicked);
            this.diceAction(12);
          }
          break;
        }
        default: {
        }
      }
    });

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
  }

  /**
   * 摇骰子
   * @param max 骰子最大值
   * @return 骰子数
   */
  private diceAction(max: number): number {
    const callback = cc.callFunc(() => {
      this.enabled = true;
      showMouseCursor();
    });

    const push = cc.moveTo(0.5, this.getDiceX(max), this.dice.y);
    const pull = cc.moveTo(0.5, this.getDiceX(1), this.dice.y);
    const diceNum = getRandomInt(1, max);
    const diceX = this.getDiceX(diceNum);
    const target = cc.moveTo(0.5, diceX, this.dice.y);
    const seq = cc.sequence(push, pull, target, callback); // .easing(cc.easeOut(2));
    this.dice.runAction(cc.speed(seq, 2));
    hideMouseCursor();
    this.enabled = false;

    return diceNum;
  }
}
