import { ZhugeDice } from './minter';
import { Direction, RoadNode } from './road';

export interface PlayerState {
  name: string;
  dice: ZhugeDice;
  diceNum: number;
  position: RoadNode;
  // 角色方向
  direction: Direction;
}
