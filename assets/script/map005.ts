import EventType = cc.Node.EventType;

const { ccclass, property } = cc._decorator;

@ccclass
export default class Map005 extends cc.Component {
  @property(cc.TiledMap)
  tiledMap: cc.TiledMap = null;

  start() {
    // const node = new cc.Node('city Node');
    // const sprite = node.addComponent(cc.Sprite);
    //debugger
    /*const texture2D = new Texture2D();
    texture2D.url = url;
    sprite.spriteFrame = new cc.SpriteFrame(texture2D);*/

    // sprite
    // const texture = cc.CCTextureCache.addImage("hello.png");

    this.node.on(EventType.MOUSE_DOWN, () => {
      // console.log(this.tiledMap.getObjectGroups());
      // debugger
    });
  }
}
