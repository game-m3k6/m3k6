export interface ZhugeDice {
  dice: number;
}

// 诸葛六算珠
export interface ZhugeDice6 extends ZhugeDice {
  max: 6;
}

// 诸葛九算珠
export interface ZhugeDice9 extends ZhugeDice {
  max: 9;
}

// 诸葛十二算珠
export interface ZhugeDice12 extends ZhugeDice {
  max: 12;
}
