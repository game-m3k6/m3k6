import EventType = cc.Node.EventType;

import { hideNode, showNode } from './utils/node-utils';

const { ccclass, property } = cc._decorator;

@ccclass
export default class WinCondition extends cc.Component {
  @property(cc.Node)
  selectCondition: cc.Node = null; //当前选择的胜利调节

  @property(cc.Node)
  lastCondition: cc.Node = null; //上次选择的胜利条件

  @property(cc.Node)
  condition1: cc.Node = null;

  @property(cc.Node)
  condition2: cc.Node = null;

  @property(cc.Node)
  condition3: cc.Node = null;

  @property(cc.Node)
  condition4: cc.Node = null;

  @property(cc.Node)
  condition5: cc.Node = null;

  @property(cc.Node)
  condition6: cc.Node = null;

  start() {
    this.setClickEvent(this.condition1);
    this.setClickEvent(this.condition2);
    this.setClickEvent(this.condition3);
    this.setClickEvent(this.condition4);
    this.setClickEvent(this.condition5);
    this.setClickEvent(this.condition6);
  }

  private setClickEvent(el: cc.Node): void {
    el.on(EventType.MOUSE_DOWN, () => {
      if (null == this.lastCondition) {
        this.lastCondition = el;
      } else if (el != this.lastCondition) {
        hideNode(this.lastCondition.getChildByName('selectMark'));
      }

      this.selectCondition = el;
      this.lastCondition = el;
      showNode(this.selectCondition.getChildByName('selectMark'));
    });
  }
}
