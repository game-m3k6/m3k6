import EventType = cc.Node.EventType;
// import { TiledObject } from './models';

const { ccclass, property } = cc._decorator;

@ccclass
export default class Map005 extends cc.Component {
  @property(cc.TiledMap)
  tiledMap: cc.TiledMap = null;

  start(): void {
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

    console.log(1)
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
}
