import PlayerSelect from './select-one-player';
import { hideNode, showNode } from './utils/node-utils';
import EventTouch = cc.Event.EventTouch;
import EventMouse = cc.Event.EventMouse;

const { ccclass, property } = cc._decorator;

@ccclass
export default class UnitDrag extends cc.Component {
  origionPosition: cc.Vec2 = null;
  origionHeadImgPosition: cc.Vec2 = null;
  @property(cc.Node)
  player1: cc.Node = null;
  @property(cc.Node)
  player2: cc.Node = null;
  @property(cc.Node)
  player3: cc.Node = null;
  @property(cc.Node)
  player4: cc.Node = null;
  @property(cc.String)
  lordName: String = '';

  anim: cc.Animation = null;

  @property(Boolean)
  public animPlaying: Boolean = false;

  onLoad() {
    this.origionPosition = this.node.position;
    this.origionHeadImgPosition = this.node.getChildByName('head-img').position;
    this.node.getChildByName('head-img').on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
    this.node.getChildByName('head-img').on(cc.Node.EventType.TOUCH_END, this.onTouchOver, this);

    this.node.on(cc.Node.EventType.MOUSE_ENTER, this.onMouseEnter, this);
    this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchOver, this);
    this.node.on(cc.Node.EventType.MOUSE_LEAVE, this.onTouchOver, this);
  }

  showImg() {
    showNode(this.node.getChildByName('head-img'));
  }

  onTouchMove(touchEvent: EventTouch) {
    if (this.animPlaying) {
      return;
    }
    let location = touchEvent.getLocation();
    this.node.getChildByName('head-img').position = this.node.convertToNodeSpaceAR(location);
    showNode(this.node.getChildByName('head-img'));
  }

  onTouchOver(touchEvent: EventTouch) {
    if (this.player1.getBoundingBoxToWorld().contains(this.node.getChildByName('head-img').convertToWorldSpace(cc.p(0, 0)))) {
      this.handlePlayNode(this.player1);
    } else if (this.player2.getBoundingBoxToWorld().contains(this.node.getChildByName('head-img').convertToWorldSpace(cc.p(0, 0)))) {
      this.handlePlayNode(this.player2);
    } else if (this.player3.getBoundingBoxToWorld().contains(this.node.getChildByName('head-img').convertToWorldSpace(cc.p(0, 0)))) {
      this.handlePlayNode(this.player3);
    } else if (this.player4.getBoundingBoxToWorld().contains(this.node.getChildByName('head-img').convertToWorldSpace(cc.p(0, 0)))) {
      this.handlePlayNode(this.player4);
    }
    hideNode(this.node.getChildByName('head-img'));
    this.node.getChildByName('head-img').position = this.origionHeadImgPosition;

    this.node.setPosition(this.node.x, 0);
  }

  handlePlayNode(playerNode: cc.Node) {
    this.anim = this.getComponent(cc.Animation);
    var player1Frame = playerNode.getChildByName('head-img').getComponent(cc.Sprite);
    showNode(playerNode.getChildByName('head-img'));

    if (null != playerNode.getComponent(PlayerSelect).lordNode) {
      var lastLordNode = playerNode.getComponent(PlayerSelect).lordNode;
      lastLordNode.getComponent(cc.Animation).stop();
      lastLordNode.getComponent(UnitDrag).animPlaying = false;
    }
    playerNode.getComponent(PlayerSelect).setLordNode(this.node);
    this.anim.play();
    this.animPlaying = true;
  }

  onMouseEnter(mouseEvent: EventMouse) {
    if (!this.animPlaying) {
      this.node.setPosition(this.node.x, 20);
    }
  }
}
