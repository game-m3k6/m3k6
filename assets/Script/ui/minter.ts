import { getRandomInt, hideNode, showNode } from '../utils';
import EventType = cc.Node.EventType;

const { ccclass, property } = cc._decorator;

@ccclass
export class Minter extends cc.Component {
  @property({
    type: cc.Node,
    tooltip: '骰子滚动条的圆珠',
  })
  dice: cc.Node = null;

  @property({
    type: cc.Node,
    tooltip: '诸葛六算珠',
  })
  dice6Clicked: cc.Node = null;

  @property({
    type: cc.Node,
    tooltip: '诸葛六算珠滚动条',
  })
  dice6Ind: cc.Node = null;

  diceActionEnabled = true;

  // LIFE-CYCLE CALLBACKS:

  // onLoad () {}

  start() {
    console.log(this.dice6Ind.x);
    this.setClickEvent(this.dice6Clicked);
  }

  /**
   * 获取骰子x位置
   * @param diceNum 骰子数（最小1、最大12）
   */
  private getDiceX(diceNum: number) {
    // dice6Ind的x为进度条中心位置
    const indX = this.dice6Ind.x;
    console.log(`indX: ${indX}`);
    switch (diceNum) {
      case 1: {
        return indX - 8 - 75 - 2;
      }
      case 2: {
        return indX - 8 - 60;
      }
      case 3: {
        return indX - 8 - 45;
      }
      case 4: {
        return indX - 8 - 30;
      }
      case 5: {
        return indX - 8 - 15;
      }
      case 6: {
        return indX - 8;
      }
      case 7: {
        return indX - 8 + 15;
      }
      case 8: {
        return indX - 8 + 30;
      }
      case 9: {
        return indX - 8 + 45;
      }
      case 10: {
        return indX - 8 + 60 - 2;
      }
      case 11: {
        return indX - 8 + 75 - 2;
      }
      case 12: {
        return indX - 8 + 90 - 2;
      }
    }
  }
  private setClickEvent(el: cc.Node): void {
    el.on(EventType.MOUSE_UP, () => {
      switch (el) {
        case this.dice6Clicked: {
          hideNode(this.dice6Clicked);
          this.diceAction();
          break;
        }
      }
    });

    el.on(EventType.MOUSE_DOWN, () => {
      switch (el) {
        case this.dice6Clicked: {
          showNode(this.dice6Clicked);
          break;
        }
      }
    });
  }

  private diceAction(): void {
    if (!this.diceActionEnabled) {
      return;
    }
    this.diceActionEnabled = false;
    const callback = cc.callFunc(() => {
      this.diceActionEnabled = true;
    });

    const push = cc.moveTo(0.5, this.getDiceX(6), 0);
    const pull = cc.moveTo(0.5, this.getDiceX(1), 0);
    const diceX = this.getDiceX(getRandomInt(1, 6));
    const target = cc.moveTo(0.5, diceX, 0);
    const seq = cc.sequence(push, pull, target, callback); //.easing(cc.easeOut(2));;
    this.dice.runAction(cc.speed(seq, 2));
    // this.dice.runAction(seq);
  }

  // update (dt) {}
}
