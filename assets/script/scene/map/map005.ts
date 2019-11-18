import EventType = cc.Node.EventType;

import { interval } from 'rxjs';

import { log } from '../../common/logger';
import { MinterView } from '../../ui/minter/minter-view';
import { showNode } from '../../utils/node-utils';

// import { TiledObject } from './models';

const { ccclass, property } = cc._decorator;

/**
 * 交州之站地图
 */
@ccclass
export default class Map005 extends cc.Component {
  @property({
    type: cc.Node,
    tooltip: '玩家控制器',
  })
  minter: MinterView = null;
  @property({
    type: cc.Node,
    tooltip: '道路图层',
  })
  road: cc.Node = null;
  @property({
    type: cc.Node,
    tooltip: '城池图层',
  })
  cities: cc.Node = null;
  @property({
    type: cc.Camera,
    tooltip: '玩家1视角',
  })
  p1Camera: cc.Camera = null;

  minterComp: MinterView;

  start(): void {
    /*this.minterView.onDice$.subscribe((dice) => {
      console.log(`获得结果: ${dice}`);
    });*/
    // const node = new cc.Node('city Node');
    // const sprite = node.addComponent(cc.Sprite);
    // debugger
    /*const texture2D = new Texture2D();
    texture2D.url = url;
    sprite.spriteFrame = new cc.SpriteFrame(texture2D);*/

    // sprite
    // const texture = cc.CCTextureCache.addImage("hello.png");

    // const citys = this.tiledMap.getObjectGroup('城池对象').getObjects();
    /* const city = this.tiledMap.getObjectGroup('城池对象').getObject('朱崖城') as TiledObject;
    city.visible = false;
    const layer = this.tiledMap.getLayers()[0];
    layer.node.opacity = 0;
    layer.node.active = false;
    layer.getTextures()[0].destroy();*/

    /*
    const node = new cc.Node('city Node');
    const sprite = node.addComponent(cc.Sprite);
    console.log(node.getPosition());
   // node.setPosition(city.offset);
    node.parent = this.node;
    // node.setPosition(city.offset);
    console.log(node.getPosition());

    cc.loader.loadRes('test', (err: Error, texture) => {
      if (err) {
        console.log(err.message);
        return;
      }
      console.log(node.getPosition());
      sprite.spriteFrame = new cc.SpriteFrame(texture);
      // self.myHeadFrame.spriteFrame = new cc.SpriteFrame(texture);
    });


    console.log(1);
    this.tiledMap.getObjectGroup('城池对象')*/

    this.node.on(EventType.MOUSE_DOWN, () => {
      // console.log(this.tiledMap.getObjectGroups());
      // debugger
    });
  }

  protected onLoad(): void {
    this.minterComp = this.minter.getComponent('minter-view');
    this.minterComp.onDice$.subscribe((dice) => {
      console.log(`获得结果: ${dice}`);
    });
    this.minterComp.road = this.road;
    // this.cities = this.node.getComponents('005')
    /*
    interval(1000).subscribe((i) => {
      this.label.string = i + '';
      log(`label设置:${i}`, '标签赋值处理');
    });*/
    console.log(`map005 onLoad`);
  }
}
