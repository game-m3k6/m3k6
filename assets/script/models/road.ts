// 方向
export enum Direction {
  // 上左
  TopLeft,
  // 上右
  TopRight,
  // 下左
  BottomLeft,
  // 下右
  BottomRight,
}

export interface RoadNode {
  name: string;
  next: string;
  previous: string;
  supportDirection: Direction[];
  variable?: true;
}
