const { ccclass, property } = cc._decorator;

@ccclass
export class UnitAnimationPlay extends cc.Component {
  onLoad() {
    this.node.on(cc.Node.EventType.MOUSE_ENTER, this.onMouseEnter, this);
    this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchOver, this);
    this.node.on(cc.Node.EventType.MOUSE_LEAVE, this.onTouchOver, this);
  }

  onTouchOver(mouseEvent) {
    //this.node.setPosition(this.node.x,0);
  }

  onMouseEnter(mouseEvent) {
    // this.node.setPosition(this.node.x,20);
  }
}
