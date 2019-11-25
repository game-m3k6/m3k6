import { log } from '../../common/logger';
import { PlayerState } from '../../models/player';
import {Direction, MapRoad, RoadNode, RouteNode, WalkDirection} from '../../models/road';
import { getWalkRouteLine } from '../../utils/route-helpers';
import { IPlayer } from './player.interface';
import ActionInterval = cc.ActionInterval;
import ActionInstant = cc.ActionInstant;

const { ccclass, property } = cc._decorator;

@ccclass
export default class PlayerView extends cc.Component implements IPlayer {
  animationComp: cc.Animation;
  state: PlayerState = {} as any;

  // 道路
  mapRoad: MapRoad;

  onLoad() {
    this.state.name = '曹操';
    this.animationComp = this.getComponent(cc.Animation);
    this.setDirection();
    /*setTimeout(() => {
      this.walk(1);
    }, 1000);*/
  }

  start() {}

  /**
   * 设置朝向
   * @param direction
   */
  setDirection(direction?: Direction) {
    this.state.direction = this.state.position.supportDirection[this.state.walkDesc ? 0 : 1];
    const direc = direction ? direction : this.state.direction;
    const direcClip = this.animationComp.getClips().find((c) => c.name === direc);
    if (direcClip) {
      log({ msg: `(${this.state.name})设置方向: ${direc}`, channel: '角色控制器' });
      this.state.direction = direc;
      this.animationComp.play(direcClip.name);
    }
  }

  /**
   * 设置行走朝向
   * @param direction
   */
  setWalkDirection(direction?: Direction) {
    this.state.direction = this.state.position.supportDirection[this.state.walkDesc ? 0 : 1];
    const direc = direction ? direction : this.state.direction;
    const walkDirection = `walk-${direc}` as WalkDirection;
    const direcClip = this.animationComp.getClips().find((c) => c.name === walkDirection);
    if (direcClip) {
      log({ msg: `(${this.state.name})设置行走方向: ${walkDirection}`, channel: '角色控制器' });
      this.animationComp.play(direcClip.name);
    }
  }

  /**
   * 设置位置
   * @param node 道路节点
   * @param direc 角色方向（可选）
   */
  setPosition(node: RoadNode, direc?: Direction) {
    log({ msg: `设置位置`, channel: '角色控制器', data: { node, direc } });
    const roadNode = this.findRoadCcNode(node.name);
    if (!direc) {
      this.state.direction = node.supportDirection[1];
    }
    this.state.position = node;
    this.node.setPosition(roadNode.getPosition());
  }

  findRoadCcNode(roadName: string): cc.Node {
    return cc.find(roadName, this.mapRoad.root);
  }

  /**
   * 行走
   * @param diceNum 骰子数
   */
  walk(diceNum: number) {
    const routeNodes = getWalkRouteLine(diceNum, this.state, this.mapRoad);
    log({ msg: `获取行走路径`, channel: '角色控制器', data: { routeNodes } });
    this.doWalkAction(routeNodes);
  }

  private doWalkAction(routeNodes: RouteNode[]): void {
    const actions: (ActionInterval | ActionInstant)[] = [];
    for (const routeNode of routeNodes) {
      const roadNode = this.findRoadCcNode(routeNode.node.name);
      this.setWalkDirection();
      const walkAction = cc.moveTo(1, roadNode.getPosition());
      const cb = cc.callFunc(() => {
        log({ msg: `走完当前路径`, channel: '角色控制器', data: { routeNode } });
        this.state.position = routeNode.node;
        routeNode.finish ? this.setDirection() : this.setWalkDirection();
      });
      actions.push(walkAction, cb);
    }

    this.node.runAction(cc.sequence(actions));
  }

  moveDown(moveSize: number): void {}

  moveDownOnWater(moveSize: number): void {}

  moveLeft(moveSize: number): void {}

  moveLeftOnWater(moveSize: number): void {}

  moveRight(moveSize: number): void {}

  moveRightOnWater(moveSize: number): void {}

  moveUp(moveSize: number): void {}

  moveUpOnWater(moveSize: number): void {}

  talk(msg: string): void {}

  // update (dt) {}
}
