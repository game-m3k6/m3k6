import EventType = cc.Node.EventType;
import { hideNode, showNode } from './utils';
import { GameScene } from './constants';
import Texture2D = cc.Texture2D;

const { ccclass, property } = cc._decorator;

@ccclass
export default class Map005 extends cc.Component {
  @property(cc.TiledMap)
  tiledMap: cc.TiledMap = null;

  @property(cc.Node)
  testNode: cc.Node = null;

  start() {
    const node = new cc.Node('city Node');
    const sprite = node.addComponent(cc.Sprite);
    node.parent = this.testNode;

    var t2 = cc.url.raw('resources/test.png');
    console.log(t2); // "resources/raw/textures/myTexture.png"
    // const url = cc.url.raw('resources/test.png');
    cc.loader.loadRes('test.png', (err: Error, texture) => {
      if (err) {
        console.log(err.message);
        return;
      }
      sprite.spriteFrame = new cc.SpriteFrame(texture);
      // self.myHeadFrame.spriteFrame = new cc.SpriteFrame(texture);
    });
    //debugger
    /*const texture2D = new Texture2D();
    texture2D.url = url;
    sprite.spriteFrame = new cc.SpriteFrame(texture2D);*/

    // sprite
    // const texture = cc.CCTextureCache.addImage("hello.png");

    this.node.on(EventType.MOUSE_DOWN, () => {
      console.log(this.tiledMap.getObjectGroups());
      // debugger
    });
  }
}
