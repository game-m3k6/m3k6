import { log } from '../common/logger';
import { DirectNode, Direction, RoadNode } from '../models/road';
import { getRandomInt } from '../utils/get-random-int';

const { ccclass, property } = cc._decorator;

@ccclass
export default class RoadView extends cc.Component {
  @property({
    type: cc.Node,
    tooltip: '地板提示节点',
  })
  floor: cc.Node = null;
  @property({
    type: cc.Node,
    tooltip: '路标节点',
  })
  direct: cc.Node = null;

  // 道路数据节点列表
  roadNodes: RoadNode[] = [];
  // 路标节点列表
  directNodes: DirectNode[] = [];

  onLoad() {}

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
   * 查找大佬节点cc组件
   * @param nodeName 道路名称
   */
  findRoadCcNode(nodeName: string): cc.Node {
    return cc.find(nodeName, this.floor);
  }

  /**
   * 初始化路标
   */
  private initDirectNodes(): void {
    // 初始化路标节点的方向
    const variNodes = this.roadNodes.filter((node) => node.variable);
    for (const variNode of variNodes) {
      const ccNode = cc.find(variNode.name, this.direct);
      if (ccNode) {
        const directNode: DirectNode = {
          ...variNode,
          ccNode,
          direction: this.randomDirection(variNode.supportDirection),
        };
        this.directNodes.push(directNode);
        this.setNodeDirection(directNode.name, directNode.direction);
      }
    }
  }

  /**
   * 随机方向
   * @param directions 支持的方向列表
   */
  private randomDirection(directions: Direction[]): Direction {
    // 取得随机位置
    const posi = getRandomInt(0, directions.length - 1);

    return directions[posi];
  }

  /**
   * 设置路标节点方向
   *
   * @param name 路标节点名称
   * @param dirction 方向
   */
  private setNodeDirection(name: string, dirction: Direction): void {
    const node = this.directNodes.find((o) => o.name === name);
    if (node) {
      const animationComp = node.ccNode.getComponent(cc.Animation);
      const direcClip = animationComp.getClips().find((c) => c.name === dirction);
      if (direcClip) {
        log({ msg: `(${name})设置道路方向: ${dirction}`, channel: '道路控制器' });
        node.direction = dirction;
        animationComp.play(direcClip.name);
      }
    }
  }
}
