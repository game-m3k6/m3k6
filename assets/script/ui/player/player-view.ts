import { ZhugeDice } from '../../models/minter';
import { IPlayer } from './player.interface';
import {Direction} from "../../models/road";

const { ccclass, property } = cc._decorator;

@ccclass
export default class PlayerView extends cc.Component implements IPlayer {

  animationComp: cc.Animation;

  direction: Direction;
  dice: ZhugeDice;
  name: string;

  onLoad () {
    this.animationComp = this.getComponent(cc.Animation);
    console.log(2)
  }

  start() {
    console.log(1)
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
