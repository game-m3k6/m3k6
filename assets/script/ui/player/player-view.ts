import { ZhugeDice } from '../../models/minter';
import { IPlayer } from './player.interface';

const { ccclass, property } = cc._decorator;

@ccclass
export default class PlayerView extends cc.Component implements IPlayer {
  @property({
    type: cc.Animation,
    tooltip: '角色站立效果',
  })
  left: cc.Animation = null;

  // LIFE-CYCLE CALLBACKS:

  // onLoad () {}

  start() {}

  dice: ZhugeDice;
  name: string;

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
