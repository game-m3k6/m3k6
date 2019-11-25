import { ZhugeDice } from './minter';
import { Direction, RoadNode } from './road';

export interface PlayerState {
  name: string;
  dice: ZhugeDice;
  diceNum: number;
  direction: Direction;
  position: RoadNode;
  // 是否倒序走路（正序时使用next，倒序使用previous）
  walkDesc: boolean;
}
