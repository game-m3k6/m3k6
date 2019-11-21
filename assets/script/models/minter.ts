export interface Dice {
  dice: number;
}

// 诸葛六算珠
export interface ZhugeDice6 extends Dice {
  max: 6;
}

// 诸葛九算珠
export interface ZhugeDice9 extends Dice {
  max: 9;
}

// 诸葛十二算珠
export interface ZhugeDice12 extends Dice {
  max: 12;
}

export type ZhugeDice = ZhugeDice6 | ZhugeDice9 | ZhugeDice12;
