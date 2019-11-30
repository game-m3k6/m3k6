import { log } from '../../assets/script/common/logger';
import { DirectNode, Direction, RoadNode } from '../../assets/script/models/road';
import { randomDirection } from '../../assets/script/utils/route-helpers';

export class MockRoadView {
  // 道路数据节点列表
  roadNodes: RoadNode[] = [];
  // 路标节点列表
  directNodes: DirectNode[] = [];

  /**
   * 初始化道路组件
   * @param nodes
   */
  init(nodes: RoadNode[]): void {
    this.roadNodes = nodes;
    this.initDirectNodes();
  }

  /**
   * 获取道路节点
   * @param nodeName 道路名称
   */
  getRoadNode(nodeName: string): RoadNode {
    return this.roadNodes.find((o) => o.name === nodeName);
  }

  /**
   * 获取路标节点
   * @param nodeName 节点名称
   */
  getDirectNode(nodeName: string): DirectNode {
    return this.directNodes.find((o) => o.name === nodeName);
  }

  /**
   * 设置路标节点方向
   *
   * @param name 路标节点名称
   * @param direction 方向
   */
  setDirectNodeDirection(name: string, direction: Direction): void {
    const node = this.directNodes.find((o) => o.name === name);
    if (node) {
      log({ msg: `(${name})设置道路方向: ${direction}`, channel: '道路控制器' });
      node.direction = direction;
    }
  }

  /**
   * 初始化路标
   */
  private initDirectNodes(): void {
    // 初始化路标节点的方向
    const variNodes = this.roadNodes.filter((node) => node.variable);
    for (const variNode of variNodes) {
      const directNode = {
        ...variNode,
        direction: randomDirection(variNode.supportDirection),
      } as DirectNode;
      this.directNodes.push(directNode);
    }
  }
}
