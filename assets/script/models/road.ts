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

// 道路节点
export interface RoadNode {
  // 道路节点名称
  name: string;
  /**
   * 支持的下一个道路节点名称
   * （与supportDirection方向对应）
   */
  nodes: string[];
  /**
   * 支持的方向列表
   *  第一个元素为前一个节点名称
   *  第一个元素为下一个节点名称
   *  第三、四个元素为可变节点名称（可选项）
   */
  supportDirection: Direction[];
  // 转弯
  turn?: true;
  // 路径是否可变
  variable?: true;
}

// 路标
export interface DirectNode extends RoadNode {
  // 路标方向
  direction: Direction;
  ccNode: cc.Node;
}

/**
 *  路径节点（用于确定行走路径、行走动画持续时间）
 */
export interface RouteNode {
  // 是否寻路结束
  finish?: boolean;
  // 寻路节点（遇到转弯时，为转弯节点）
  node: RoadNode;
  // 持续时间（秒）
  duration: number;
  // 剩余点数（只在为完成寻路时有用）
  remainingDice: number;
  // 人物方向
  direction: Direction;
}
