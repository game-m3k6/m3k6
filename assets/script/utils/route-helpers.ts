import { PlayerState } from '../models/player';
import { DirectNode, Direction, RoadNode, RouteNode } from '../models/road';
import RoadView from '../ui/road-view';
import { getRandomInt } from './get-random-int';
import { formatNumber } from './number-helpers';

interface DirectionRoadNode {
  direction: Direction;
  roadNode: RoadNode;
}

/**
 * 获取下一个节点名（通过节点方向）
 * @param node 节点
 * @param direction 节点方向
 */
function getNextNodeNameFromDirection(node: RoadNode, direction: Direction): string {
  const index = node.supportDirection.findIndex((o) => o === direction);

  return node.nodes[index];
}

/**
 * 获取下一节点
 * @param direction 角色方向
 * @param current 当前位置节点
 * @param mapRoad 地图道路组件
 * @param isFirst 是否为当前人物起始点
 */
export function getNextDirectionRoadNode(
  direction: Direction,
  current: RouteNode,
  mapRoad: RoadView,
  isFirst?: boolean,
): DirectionRoadNode {
  // 获取下一节点
  const nextNodeName = getNextNodeNameFromDirection(current.node, direction);
  const nextNode = mapRoad.getRoadNode(nextNodeName);
  if (!nextNode) {
    debugger;
  }

  // 获取下一节点方向
  // 当下一节点为可变节点
  if (nextNode.variable) {
    // 需要变向时, 获取变向节点
    const directNode = mapRoad.getDirectNode(nextNode.name);
    // 获取变向方向
    const nextDirection = getVariableNextDirection(direction, directNode, current.finish);
    if (nextDirection) {
      direction = nextDirection;
    }
  } else if (nextNode.turn) {
    // 转弯节点时，重置方向
    const nextDirection = getTrunNextDirection(direction, nextNode.supportDirection);
    if (nextDirection) {
      direction = nextDirection;
    }
  }

  return {
    direction,
    roadNode: nextNode,
  };
}

/**
 * 获取直线道路节点
 *
 * @param diceNum 骰子数
 * @param direction 角色方向
 * @param position 当前位置节点
 * @param mapRoad 地图
 */
export function getStraightRoadNode(diceNum: number, direction: Direction, position: RoadNode, mapRoad: RoadView): RouteNode {
  const routeNode: RouteNode = { node: position, direction, remainingDice: diceNum, duration: 0 };

  for (let i = 0; i < diceNum; i++) {
    // 是否为终点
    if (i === diceNum - 1) {
      routeNode.finish = true;
    }
    routeNode.remainingDice -= 1;
    routeNode.duration = formatNumber(routeNode.duration + 0.1);
    const nextDirectionRoadNode = getNextDirectionRoadNode(direction, routeNode, mapRoad, i === 0);
    routeNode.node = nextDirectionRoadNode.roadNode;
    routeNode.direction = nextDirectionRoadNode.direction;

    // 当转弯或变向时，完结当前路径
    if (routeNode.node.turn || routeNode.node.variable) {
      break;
    }
  }

  return routeNode;
}

/**
 * 获取行走路线
 *
 * @param diceNum 骰子数
 * @param playerState 角色状态
 * @param mapRoad 地图
 */
export function getWalkRouteLine(diceNum: number, playerState: PlayerState, mapRoad: RoadView): RouteNode[] {
  let routeNode = getStraightRoadNode(diceNum, playerState.direction, playerState.position, mapRoad);
  const routeNodes = [routeNode];
  while (!routeNode.finish) {
    // 获取直线路径
    routeNode = getStraightRoadNode(routeNode.remainingDice, routeNode.direction, routeNode.node, mapRoad);
    routeNodes.push(routeNode);
  }

  return routeNodes;
}

/**
 * 随机方向
 * @param directions 支持的方向列表
 */
export function randomDirection(directions: Direction[]): Direction {
  // 取得随机位置
  const posi = getRandomInt(0, directions.length - 1);

  return directions[posi];
}

/**
 * 获取路标节点的下一个方向
 * @param direction 行走方向
 * @param directNode 路标节点
 * @param isStop 是否角色停在在变向节点
 */
export function getVariableNextDirection(direction: Direction, directNode: DirectNode, isStop: boolean): Direction | undefined {
  const isOppositeDirection = reverseDirection(directNode.direction) === direction;
  // 路过 && 与路标是反方向
  if (!isStop && isOppositeDirection) {
    const nextDirections = getNextDirection(direction, directNode.supportDirection);
    // 变换路标方向
    direction = randomDirection(nextDirections);
    directNode.direction = direction;
  }

  return directNode.direction;
}

/**
 * 获取转弯节点的下一个方向
 * @param direction 行走方向
 * @param supportDirection 节点支持的方向
 */
export function getTrunNextDirection(direction: Direction, supportDirection: Direction[]): Direction | undefined {
  const nextDirections = getNextDirection(direction, supportDirection);
  if (nextDirections.length === 1) {
    return nextDirections[0];
  }
}

/**
 * 获取下一个节点的方向
 * @param direction 行走方向
 * @param supportDirection 节点支持的方向
 */
export function getNextDirection(direction: Direction, supportDirection: Direction[]): Direction[] {
  const prevDirection = reverseDirection(direction);

  return supportDirection.filter((o) => o !== prevDirection);
}

/**
 * 翻转方向
 * @param direction 方向
 */
export function reverseDirection(direction: Direction): Direction {
  switch (direction) {
    case Direction.BottomLeft: {
      return Direction.TopRight;
    }
    case Direction.BottomRight: {
      return Direction.TopLeft;
    }
    case Direction.TopLeft: {
      return Direction.BottomRight;
    }
    case Direction.TopRight: {
      return Direction.BottomLeft;
    }
  }
}
