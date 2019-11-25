/**
 * 游戏角色组件接口
 */
import { PlayerState } from '../../models/player';

export interface IPlayer {
  // 角色状态
  state: PlayerState;
  // 说话
  talk(msg: string): void;
  // 上移
  moveUp(moveSize: number): void;
  // 上移
  moveDown(moveSize: number): void;
  // 左移
  moveLeft(moveSize: number): void;
  // 右移
  moveRight(moveSize: number): void;
  // 上移(水面)
  moveUpOnWater(moveSize: number): void;
  // 上移(水面)
  moveDownOnWater(moveSize: number): void;
  // 左移(水面)
  moveLeftOnWater(moveSize: number): void;
  // 右移(水面)
  moveRightOnWater(moveSize: number): void;
}
