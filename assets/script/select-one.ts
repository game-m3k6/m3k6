
import EventType = cc.Node.EventType;

import { GameScene } from './constants';
import { hideNode, showNode } from './utils/node-utils';

const {ccclass, property} = cc._decorator;

/**
 * 群雄并起界面
 */
@ccclass
export class SelectOne extends cc.Component {
    @property({ type: cc.AudioClip })
    bgm: cc.AudioClip = null;

    ///node玩家1-4
    @property(cc.Node)
    nodePlayer1 : cc.Node = null;
    @property(cc.Node)
    nodePlayer2 : cc.Node = null;
    @property(cc.Node)
    nodePlayer3 : cc.Node = null;
    @property(cc.Node)
    nodePlayer4 : cc.Node = null;

    //lorad武将角色
    @property(cc.Node)
    nodeCaocao : cc.Node = null;

    ///地图id
    selectedMapId : String = "";
    ///地图node
    @property(cc.Node)
    mapNode : cc.Node = null;
    mapIndex : number = 0;
    @property(cc.Node)
    mapNameNode : cc.Node = null;


    ///确定 取消
    @property(cc.Node)
    ok: cc.Node = null;
    @property(cc.Node)
    cancel: cc.Node = null;

    @property({ type: cc.AudioClip })
    clickAudio: cc.AudioClip = null;

    @property(cc.Node)
    left: cc.Node = null;
    @property(cc.Node)
    right: cc.Node = null;



    ///bgm id
    audioId = null;




    start () {
        //this.audioId = cc.audioEngine.playEffect(this.bgm, true);

        this.setClickEvent(this.ok);
        this.setClickEvent(this.cancel);
        this.setClickEvent(this.left);
        this.setClickEvent(this.right);

        showNode(this.mapNode.children[0]);
        showNode(this.mapNameNode.children[0]);
        this.selectedMapId = this.mapNode.children[0].name;
        this.mapIndex = 0;
    }

    private setClickEvent(el: cc.Node): void {
        el.on(EventType.MOUSE_DOWN, () => {
          switch (el) {
            case this.ok: {
                
                hideNode(this.ok);
                //cc.audioEngine.stopEffect(this.audioId);
                cc.director.loadScene(GameScene.Map005);
                break;
            }
            case this.cancel: {
                hideNode(this.cancel);
                //cc.audioEngine.stopEffect(this.audioId);
                cc.director.loadScene(GameScene.Main);
                break;
            }
            case this.left: {
                showNode(this.left.getChildByName("left-click"));
                hideNode(this.mapNode.children[this.mapIndex]);
                hideNode(this.mapNameNode.children[this.mapIndex]);
                this.mapIndex--;
                if(this.mapIndex < 0){
                    this.mapIndex = this.mapNode.childrenCount -1;
                    if(this.mapIndex < 0){
                        this.mapIndex = 0;
                    }
                }
                this.selectedMapId = this.mapNode.children[this.mapIndex].name;
                showNode(this.mapNode.children[this.mapIndex]);
                showNode(this.mapNameNode.children[this.mapIndex]);
                break;
            }
            case this.right: {
                showNode(this.right.getChildByName("right-click"));
                hideNode(this.mapNode.children[this.mapIndex]);
                hideNode(this.mapNameNode.children[this.mapIndex]);
                this.mapIndex++;
                if(this.mapIndex > this.mapNode.childrenCount - 1){
                    this.mapIndex = 0;
                }
                this.selectedMapId = this.mapNode.children[this.mapIndex].name;
                showNode(this.mapNode.children[this.mapIndex]);
                showNode(this.mapNameNode.children[this.mapIndex]);
                break;                
            }
            default: {
            }            
          }
          cc.audioEngine.playEffect(this.clickAudio, false);
        });
    }
   
   
}
