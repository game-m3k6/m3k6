import { PlayerState } from '../models/player';
import { MapRoad, RoadNode } from '../models/road';

function getNextRoadNode(next: boolean, current: RoadNode, mapRoad: MapRoad): RoadNode {
  const nextNodeName = next ? current.next : current.previous;
  return mapRoad.roadNodes.find((o) => o.name === nextNodeName);
}

/**
 *  路径节点
 */
interface RouteNode {
  // 是否寻路结束
  finish?: boolean;
  // 寻路节点（遇到转弯时，为转弯节点）
  node: RoadNode;
  // 剩余点数（只在为完成寻路时有用）
  remainingDice: number;
}

/**
 * 获取直线道路节点
 *
 * @param diceNum 骰子数
 * @param position
 * @param walkDesc
 * @param mapRoad 地图
 */
export function getStraightRoadNode(diceNum: number, position: RoadNode, walkDesc: boolean, mapRoad: MapRoad): RouteNode {
  let node = position;
  const routeNode: RouteNode = { node, remainingDice: diceNum };

  for (let i = 0; i < diceNum; i++) {
    routeNode.remainingDice -= 1;
    routeNode.node = getNextRoadNode(!walkDesc, routeNode.node, mapRoad);
    // 是否为终点
    if (i === diceNum - 1) {
      routeNode.finish = true;
    } else if (routeNode.node.turn) {
      // 需要转弯时，跳出出来
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
export function getWalkRouteLine(diceNum: number, playerState: PlayerState, mapRoad: MapRoad): RoadNode[] {
  let routeNode = getStraightRoadNode(diceNum, playerState.position, playerState.walkDesc, mapRoad);
  const roadNodes = [routeNode.node];
  while (!routeNode.finish) {
    routeNode = getStraightRoadNode(routeNode.remainingDice, routeNode.node, playerState.walkDesc, mapRoad);
    roadNodes.push(routeNode.node);
  }

  return roadNodes;
}
