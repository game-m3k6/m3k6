import EventType = cc.Node.EventType;

import { log } from '../../common/logger';
import { map005Road } from '../../data/map/map005-data';
import { Direction } from '../../models/road';
import { MinterView } from '../../ui/minter/minter-view';
import PlayerView from '../../ui/player/player-view';
import RoadView from '../../ui/road-view';

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
  road: RoadView = null;
  @property({
    type: cc.Node,
    tooltip: '城池图层',
  })
  cities: cc.Node = null;
  @property({
    type: cc.Camera,
    tooltip: '主视角',
  })
  mainCamera: cc.Camera = null;
  @property({
    type: cc.Camera,
    tooltip: '玩家1视角',
  })
  p1Camera: cc.Camera = null;
  @property({
    type: cc.Node,
    tooltip: '玩家1',
  })
  player1: cc.Node = null;

  minterComp: MinterView;
  playerComp: PlayerView;
  roadComp: RoadView;

  start(): void {
    // 初始化道路组件
    this.roadComp = this.road.getComponent('road-view');
    this.roadComp.init(map005Road);

    // 初始化玩家组件
    this.playerComp = this.player1.getComponent('player-view');
    const initName = '11/11-03'; // '11/11-03'
    this.playerComp.init({
      state: {
        name: '曹操',
        dice: { max: 12, dice: 6 },
        diceNum: 5,
        position: this.roadComp.getRoadNode(initName),
        direction: Direction.TopRight,
      },
      mapRoad: this.roadComp,
    });

    // 初始化控制器组件
    this.minterComp = this.minter.getComponent('minter-view');
    this.minterComp.onDice$.subscribe(
      (dice) => {
        console.log(`获得结果: ${dice}`);
        this.playerComp.walk(dice);
      },
      (error) => {
        log({ msg: `监听出错`, channel: '监听掷骰子结果', data: { error } });
      },
    );
    this.minterComp.mapRoad = this.roadComp;
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

  protected update(dt: number): void {
    this.mainCamera.node.setPosition(this.playerComp.node.getPosition());
  }

  protected async onLoad(): Promise<void> {
    /*setTimeout(() => {
      console.log('run...');
      const targetPosi = this.road.children[0].children[1]d.getPosition();
      targetPosi.y = targetPosi.y + 10;
      const t = cc.moveTo(1, targetPosi.x, targetPosi.y);
      this.player1.runAction(t);
    }, 1000);*/
    // this.mainCamera.node
    // this.mainCamera.node.x = this.player1.x;
    /* const node = new cc.Node('P1');
    const sprite = node.addComponent(cc.Sprite);
    node.parent = this.p1Camera.node;
    const atlas = await loadRes<cc.SpriteAtlas>('master000/master000', cc.SpriteAtlas);
    sprite.spriteFrame = atlas.getSpriteFrame('1-1');

    const clip = await loadRes<cc.AnimationClip>('master000/left');
    sprite.addComponent(cc.Animation);

    const animation = sprite.getComponent(cc.Animation);
    clip.wrapMode = cc.WrapMode.Loop;
    animation.addClip(clip);
    animation.play('left');*/
    //
    // debugger
    // debugger
    /*
    const node = new cc.Node('city Node');
    const sprite = node.addComponent(cc.Sprite);
    node.parent = this.p1Camera.node;
    sprite.spriteFrame = this.p1Atlas.getSpriteFrame('1-1');*/
    /*
    cc.loader.loadRes('master000/master000', cc.SpriteAtlas, (err: Error, atlas) => {
      if (err) {
        console.log(err.message);
        return;
      }
      sprite.spriteFrame = atlas.getSpriteFrame('1-1');
    });*/
    /*
    const animation = new cc.Animation();
    animation.*/
    // this.cities = this.node.getComponents('005')
    /*
    interval(1000).subscribe((i) => {
      this.label.string = i + '';
      log(`label设置:${i}`, '标签赋值处理');
    });*/
    // console.log(`map005 onLoad`);
  }
}
