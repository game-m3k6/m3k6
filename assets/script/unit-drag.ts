import EventType = cc.Node.EventType;
import { hideNode, showNode } from './utils/node-utils';
import PlayerSelect from './select-one-player';

const {ccclass, property} = cc._decorator;

@ccclass
export default class UnitDrag extends cc.Component {

    origionPosition : cc.Vec2 = null;
    origionHeadImgPosition : cc.Vec2 = null;
    @property(cc.Node)
    player1 : cc.Node = null;
    @property(cc.Node)
    player2 : cc.Node = null;
    @property(cc.Node)
    player3 : cc.Node = null;
    @property(cc.Node)
    player4 : cc.Node = null;
    @property(String)
    lordName : String = "";

    anim : cc.Animation = null;

    @property(Boolean)
    public animPlaying : Boolean  = false;



    onLoad() {
        this.origionPosition = this.node.position;
        this.origionHeadImgPosition = this.node.getChildByName("head-img").position;
        //this.node.on(cc.Node.EventType.TOUCH_MOVE, this.showImg, this);
        //this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchOver, this);
        this.node.getChildByName("head-img").on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.getChildByName("head-img").on(cc.Node.EventType.TOUCH_END, this.onTouchOver, this);

        this.node.on(cc.Node.EventType.MOUSE_ENTER, this.onMouseEnter, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchOver, this);
        this.node.on(cc.Node.EventType.MOUSE_LEAVE, this.onTouchOver, this);

    }   
    
    showImg(touchEvent) {        
        showNode(this.node.getChildByName("head-img"));
    }
    
    onTouchMove(touchEvent) {
        if(this.animPlaying){
            return;
        }
        let location = touchEvent.getLocation();
        this.node.getChildByName("head-img").position = this.node.convertToNodeSpaceAR(location);
        showNode(this.node.getChildByName("head-img"));
    }

    onTouchOver(touchEvent) {       

        if(this.player1.getBoundingBoxToWorld().contains(this.node.getChildByName("head-img").convertToWorldSpace(cc.p(0,0)))){
            this.anim = this.getComponent(cc.Animation);
            var player1Frame = this.player1.getChildByName("head-img").getComponent(cc.Sprite);            
            cc.loader.loadRes("/master-head/" + this.lordName, cc.SpriteFrame, (err, spriteFrame) =>{
                //player1Frame.spriteFrame = spriteFrame;
            });

        
             showNode(this.player1.getChildByName("head-img"));
            
            if(null != this.player1.getComponent(PlayerSelect).lordNode){
                var lastLordNode = this.player1.getComponent(PlayerSelect).lordNode;
                lastLordNode.getComponent(cc.Animation).stop();
                lastLordNode.getComponent(UnitDrag).animPlaying = false;
                
                
            }
             this.player1.getComponent(PlayerSelect).setLordNode(this.node);
             this.anim.play();
             this.animPlaying = true;

             

        } 
        hideNode(this.node.getChildByName("head-img"));
        this.node.getChildByName("head-img").position = this.origionHeadImgPosition;
        
        this.node.setPosition(this.node.x,0);

    }

    onMouseEnter(mouseEvent) {       
        if(!this.animPlaying){
            this.node.setPosition(this.node.x,20);

        }
    }
    
}
