import EventType = cc.Node.EventType;
import EventMouse = cc.Event.EventMouse;

import { GameScene } from './constants';
import PlayerSelect from './select-one-player';
import { hideNode, showNode } from './utils/node-utils';
import WinCondition from './win-condition';

const { ccclass, property } = cc._decorator;

/**
 * 群雄并起界面
 */
@ccclass
export class SelectOne extends cc.Component {
  @property({ type: cc.AudioClip })
  bgm: cc.AudioClip = null;

  ///node玩家1-4
  @property(cc.Node)
  nodePlayer1: cc.Node = null;
  @property(cc.Node)
  nodePlayer2: cc.Node = null;
  @property(cc.Node)
  nodePlayer3: cc.Node = null;
  @property(cc.Node)
  nodePlayer4: cc.Node = null;

  ///地图id
  selectedMapId: String = '';
  ///地图node
  @property(cc.Node)
  mapNode: cc.Node = null;
  mapIndex: number = 0;
  @property(cc.Node)
  mapNameNode: cc.Node = null;
  @property(cc.Node)
  mapInfoNode: cc.Node = null;
  @property(cc.Node)
  winConditions: cc.Node = null;

  ///确定 取消
  @property(cc.Node)
  ok: cc.Node = null;
  @property(cc.Node)
  cancel: cc.Node = null;

  @property({ type: cc.AudioClip })
  clickAudio: cc.AudioClip = null;

  @property(cc.Node)
  left: cc.Node = null;
  @property(cc.Node)
  right: cc.Node = null;

  //TODO bgm id
  // audioId = null;

  onLoad() {
    this.left.on(cc.Node.EventType.MOUSE_UP, this.btnLeftUp, this);
    this.right.on(cc.Node.EventType.MOUSE_UP, this.btnRightUp, this);
  }

  start() {
    this.setClickEvent(this.ok);
    this.setClickEvent(this.cancel);
    this.setClickEvent(this.left);
    this.setClickEvent(this.right);
    this.setClickEvent(this.nodePlayer1.getComponent(PlayerSelect).humanOrAi);
    this.setClickEvent(this.nodePlayer2.getComponent(PlayerSelect).humanOrAi);
    this.setClickEvent(this.nodePlayer3.getComponent(PlayerSelect).humanOrAi);
    this.setClickEvent(this.nodePlayer4.getComponent(PlayerSelect).humanOrAi);
    this.setClickEvent(this.winConditions);

    showNode(this.mapNode.children[0]);
    showNode(this.mapNameNode.children[0]);
    this.selectedMapId = this.mapNode.children[0].name;
    this.mapIndex = 0;
  }

  btnLeftUp(mouseUpEvent: EventMouse) {
    hideNode(this.left.getChildByName('left-click'));
  }

  btnRightUp(mouseUpEvent: EventMouse) {
    hideNode(this.right.getChildByName('right-click'));
  }

  private setClickEvent(el: cc.Node): void {
    el.on(EventType.MOUSE_DOWN, () => {
      switch (el) {
        case this.ok: {
          hideNode(this.ok);
          //封装界面场景玩家数据，加载对应游戏场景,后续根据返回值加载对应游戏场景
          this.generateGameInitData();
          cc.director.loadScene(GameScene.Map005);
          break;
        }
        case this.cancel: {
          hideNode(this.cancel);
          cc.director.loadScene(GameScene.Main);
          break;
        }
        case this.left: {
          showNode(this.left.getChildByName('left-click'));
          //隐藏原地图
          hideNode(this.mapNode.children[this.mapIndex]);
          hideNode(this.mapNameNode.children[this.mapIndex]);
          this.mapIndex--;
          if (this.mapIndex < 0) {
            this.mapIndex = this.mapNode.childrenCount - 1;
            if (this.mapIndex < 0) {
              this.mapIndex = 0;
            }
          }
          this.selectedMapId = this.mapNode.children[this.mapIndex].name;
          //加载地图描述信息
          this.loadMapInfosByMapId(this.selectedMapId);
          //展示地图和地图名称
          showNode(this.mapNode.children[this.mapIndex]);
          showNode(this.mapNameNode.children[this.mapIndex]);
          break;
        }
        case this.right: {
          showNode(this.right.getChildByName('right-click'));
          //隐藏原地图
          hideNode(this.mapNode.children[this.mapIndex]);
          hideNode(this.mapNameNode.children[this.mapIndex]);
          this.mapIndex++;
          if (this.mapIndex > this.mapNode.childrenCount - 1) {
            this.mapIndex = 0;
          }
          this.selectedMapId = this.mapNode.children[this.mapIndex].name;
          //加载地图描述信息
          this.loadMapInfosByMapId(this.selectedMapId);
          //展示地图和地图名称
          showNode(this.mapNode.children[this.mapIndex]);
          showNode(this.mapNameNode.children[this.mapIndex]);
          break;
        }
        default: {
        }
      }
      cc.audioEngine.playEffect(this.clickAudio, false);
    });
  }

  private loadMapInfosByMapId(selectedMapId: String): void {
    //todo:根据mapId获取信息和胜利条件信息
    this.mapInfoNode.getChildByName('size').getComponent(cc.Label).string = '待获取信息...';
    this.mapInfoNode.getChildByName('independent').getComponent(cc.Label).string = '待获取信息...';
    this.mapInfoNode.getChildByName('mapDesc').getComponent(cc.Label).string = '待获取信息...';
    this.mapInfoNode.getChildByName('citys').getComponent(cc.Label).string = '待获取信息...';

    this.winConditions
      .getChildByName('winConditionArea1')
      .getChildByName('condition')
      .getComponent(cc.Label).string = '待获取信息...';
    this.winConditions
      .getChildByName('winConditionArea2')
      .getChildByName('condition')
      .getComponent(cc.Label).string = '待获取信息...';
    this.winConditions
      .getChildByName('winConditionArea3')
      .getChildByName('condition')
      .getComponent(cc.Label).string = '待获取信息...';
    this.winConditions
      .getChildByName('winConditionArea4')
      .getChildByName('condition')
      .getComponent(cc.Label).string = '待获取信息...';
    this.winConditions
      .getChildByName('winConditionArea5')
      .getChildByName('condition')
      .getComponent(cc.Label).string = '待获取信息...';
    this.winConditions
      .getChildByName('winConditionArea6')
      .getChildByName('condition')
      .getComponent(cc.Label).string = '待获取信息...';
  }

  //todo:封装界面数据 后续需要封装成游戏数据模型，以初始化对应的游戏场景
  private generateGameInitData() {
    //所选择的场景地图id
    var selectedMapId = this.selectedMapId;
    //所选择的胜利条件
    var selectedWinCondition = this.winConditions.getComponent(WinCondition).selectCondition;
    //所选择的玩家角色
    var selectedRole: cc.Node[] = [];
    if (null != this.nodePlayer1.getComponent(PlayerSelect).lordNode) {
      selectedRole.push(this.nodePlayer1.getComponent(PlayerSelect).lordNode);
    }
    if (null != this.nodePlayer2.getComponent(PlayerSelect).lordNode) {
      selectedRole.push(this.nodePlayer1.getComponent(PlayerSelect).lordNode);
    }
    if (null != this.nodePlayer3.getComponent(PlayerSelect).lordNode) {
      selectedRole.push(this.nodePlayer1.getComponent(PlayerSelect).lordNode);
    }
    if (null != this.nodePlayer4.getComponent(PlayerSelect).lordNode) {
      selectedRole.push(this.nodePlayer1.getComponent(PlayerSelect).lordNode);
    }
  }
}
