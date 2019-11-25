// 方向
export enum Direction {
  // 上左
  TopLeft = 'top-left',
  // 上右
  TopRight = 'top-right',
  // 下左
  BottomLeft = 'bottom-left',
  // 下右
  BottomRight = 'bottom-right',
}

// 行走方向
export enum WalkDirection {
  // 上左
  TopLeft = 'walk-top-left',
  // 上右
  TopRight = 'walk-top-right',
  // 下左
  BottomLeft = 'walk-bottom-left',
  // 下右
  BottomRight = 'walk-bottom-right',
}

export interface RoadNode {
  // 道路节点名称
  name: string;
  // 下一个节点名称
  next: string;
  // 前一个节点名称
  previous: string;
  // 支持的方向列表
  supportDirection: Direction[];
  // 转弯
  turn?: true;
  // 路径是否可变
  variable?: true;
}

export interface MapRoad {
  root: cc.Node;
  roadNodes: RoadNode[];
}
