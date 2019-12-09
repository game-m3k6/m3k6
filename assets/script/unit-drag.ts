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
  public lordName: String = null;

  @property(cc.Node)
  lordWalk: cc.Node = null;

  anim: cc.Animation = null;

  @property(cc.Boolean)
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
    if (this.player1.getBoundingBoxToWorld().contains(this.node.getChildByName('head-img').convertToWorldSpaceAR(cc.v2(0, 0)))) {
      this.handlePlayNode(this.player1);
    } else if (this.player2.getBoundingBoxToWorld().contains(this.node.getChildByName('head-img').convertToWorldSpaceAR(cc.v2(0, 0)))) {
      this.handlePlayNode(this.player2);
    } else if (this.player3.getBoundingBoxToWorld().contains(this.node.getChildByName('head-img').convertToWorldSpaceAR(cc.v2(0, 0)))) {
      this.handlePlayNode(this.player3);
    } else if (this.player4.getBoundingBoxToWorld().contains(this.node.getChildByName('head-img').convertToWorldSpaceAR(cc.v2(0, 0)))) {
      this.handlePlayNode(this.player4);
    }
    hideNode(this.node.getChildByName('head-img'));
    this.node.getChildByName('head-img').position = this.origionHeadImgPosition;

    this.node.setPosition(this.node.x, 0);
  }

  handlePlayNode(playerNode: cc.Node) {
    //设置humanOrAi
    if (null == playerNode.getComponent(PlayerSelect).lordNode) {
      playerNode.getComponent(PlayerSelect).isAi = false;
      hideNode(playerNode.getChildByName("humanOrAi").getChildByName("human"));
      hideNode(playerNode.getChildByName("humanOrAi").getChildByName("ai"));
      showNode(playerNode.getChildByName("humanOrAi").getChildByName("human"));
    }
    

    //设置动画播放和头像显示
    var player1Frame = playerNode.getChildByName('head-img').getComponent(cc.Sprite);
    showNode(playerNode.getChildByName('head-img'));

    if (null != playerNode.getComponent(PlayerSelect).lordNode) {
      var lastLordNode = playerNode.getComponent(PlayerSelect).lordNode;
      hideNode(lastLordNode.getComponent(UnitDrag).lordWalk);
      showNode(lastLordNode);
      lastLordNode.getComponent(UnitDrag).animPlaying = false;
    }
    playerNode.getComponent(PlayerSelect).setLordNode(this.node);
    showNode(this.lordWalk);
    hideNode(this.node);
    this.animPlaying = true;
  }

  onMouseEnter(mouseEvent: EventMouse) {
    if (!this.animPlaying) {
      this.node.setPosition(this.node.x, 10);
    }
  }
}
