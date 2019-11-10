import EventType = cc.Node.EventType;
import { hideNode, showNode } from './utils';
import { GameScene } from './constants';

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

  @property(cc.Node)
  ok: cc.Node = null;
  @property(cc.Node)
  cancel: cc.Node = null;

  start() {
    this.setSelectMasterEvent(this.nodeCao);
    this.setSelectMasterEvent(this.nodeSun);
    this.setSelectMasterEvent(this.nodeLiu);
    this.setClickEvent(this.ok);
    this.setClickEvent(this.cancel);
  }

  private setClickEvent(el: cc.Node): void {
    el.on(EventType.MOUSE_UP, () => {
      switch (el) {
        case this.ok: {
          hideNode(this.ok);
          cc.director.loadScene(GameScene.Map005);
          break;
        }
        case this.cancel: {
          hideNode(this.cancel);
          cc.director.loadScene(GameScene.Main);
          break;
        }
      }
      // cc.audioEngine.playEffect(this.clickAudio, false);
    });

    el.on(EventType.MOUSE_DOWN, () => {
      switch (el) {
        case this.ok: {
          showNode(this.ok);
          break;
        }
        case this.cancel: {
          showNode(this.cancel);
          break;
        }
      }
    });
  }

  private setSelectMasterEvent(el: cc.Node): void {
    el.on(EventType.MOUSE_DOWN, () => {
      switch (el) {
        case this.nodeCao: {
          this.checkCaoHandle();
          break;
        }
        case this.nodeSun: {
          this.checkSunHandle();
          break;
        }
        case this.nodeLiu: {
          this.checkLiuHandle();
          break;
        }
      }
    });
  }

  private checkCaoHandle(): void {
    showNode([this.goldCao, this.checkCao]);
    hideNode([this.goldSun, this.checkSun, this.goldLiu, this.checkLiu]);
  }

  private checkSunHandle(): void {
    showNode([this.goldSun, this.checkSun]);
    hideNode([this.goldCao, this.checkCao, this.goldLiu, this.checkLiu]);
  }

  private checkLiuHandle(): void {
    showNode([this.goldLiu, this.checkLiu]);
    hideNode([this.goldCao, this.checkCao, this.goldSun, this.checkSun]);
  }
}
