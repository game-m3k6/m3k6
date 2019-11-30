import { Subject, interval } from 'rxjs';

import { log } from '../common/logger';
import { DirectNode, Direction, RoadNode, RouteNode } from '../models/road';
import { randomDirection } from '../utils/route-helpers';
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

  readonly onChangeDirect$ = new Subject<RouteNode>();

  protected onDestroy(): void {
    this.onChangeDirect$.complete();
  }

  /**
   * 初始化道路组件
   * @param nodes
   */
  init(nodes: RoadNode[]): void {
    this.roadNodes = nodes;
    this.initDirectNodes();
    this.onChangeDirect$.subscribe(
      (routeNode) => {
        this.setDirectNodeDirection(routeNode.node.name, routeNode.direction);
        // 如果是中继路径，设置0.1秒后更改路标方向
        if (!routeNode.finish) {
          setTimeout(() => {
            const direction = randomDirection(routeNode.node.supportDirection.filter((o) => o !== routeNode.direction));
            this.setDirectNodeDirection(routeNode.node.name, direction);
          }, 100);
        }
      },
      (error) => {
        log({ msg: `监听出错`, channel: '监听路标变化事件', data: { error } });
      },
    );
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
      const animationComp = node.ccNode.getComponent(cc.Animation);
      const direcClip = animationComp.getClips().find((c) => c.name === direction);
      if (direcClip) {
        log({ msg: `(${name})设置道路方向: ${direction}`, channel: '道路控制器' });
        node.direction = direction;
        animationComp.play(direcClip.name);
      }
    }
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
          direction: randomDirection(variNode.supportDirection),
        };
        this.directNodes.push(directNode);
        this.setDirectNodeDirection(directNode.name, directNode.direction);
      }
    }
  }
}
