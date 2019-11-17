import EventType = cc.Node.EventType;

import { GameScene } from './constants';
import { hideNode, showNode } from './utils/node-utils';

const { ccclass, property } = cc._decorator;

@ccclass
export class SelectMaster extends cc.Component {
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

  start(): void {
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
        default: {
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
        default: {
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
        default: {
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
