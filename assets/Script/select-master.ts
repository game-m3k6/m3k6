import EventType = cc.Node.EventType;

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
  @property(cc.Node)
  nodeCao: cc.Node = null;
  @property(cc.Node)
  nodeSun: cc.Node = null;
  @property(cc.Node)
  nodeLiu: cc.Node = null;

  @property(cc.Node)
  goldCao: cc.Node = null;
  @property(cc.Node)
  goldSun: cc.Node = null;
  @property(cc.Node)
  goldLiu: cc.Node = null;

  @property(cc.Node)
  checkCao: cc.Node = null;
  @property(cc.Node)
  checkSun: cc.Node = null;
  @property(cc.Node)
  checkLiu: cc.Node = null;

  start() {
    this.setClickEvent(this.nodeCao);
    this.setClickEvent(this.nodeSun);
    this.setClickEvent(this.nodeLiu);
  }

  private setClickEvent(el: cc.Node): void {
    el.on(EventType.MOUSE_DOWN, () => {
      switch (el) {
        case this.nodeCao: {
          this.goldCao.opacity = 255;
          this.goldSun.opacity = 0;
          this.goldLiu.opacity = 0;
          this.checkCao.opacity = 255;
          this.checkSun.opacity = 0;
          this.checkLiu.opacity = 0;
          break;
        }
        case this.nodeSun: {
          this.goldCao.opacity = 0;
          this.goldSun.opacity = 255;
          this.goldLiu.opacity = 0;
          this.checkCao.opacity = 0;
          this.checkSun.opacity = 255;
          this.checkLiu.opacity = 0;
          break;
        }
        case this.nodeLiu: {
          this.goldCao.opacity = 0;
          this.goldSun.opacity = 0;
          this.goldLiu.opacity = 255;
          this.checkCao.opacity = 0;
          this.checkSun.opacity = 0;
          this.checkLiu.opacity = 255;
          break;
        }
      }
    });
  }
}
