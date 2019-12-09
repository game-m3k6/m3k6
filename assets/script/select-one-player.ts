
import EventType = cc.Node.EventType;
import { Lord } from './constants';
import { hideNode, showNode } from './utils/node-utils';
import UnitDrag from './unit-drag';

const {ccclass, property} = cc._decorator;


@ccclass
export default class PlayerSelect extends cc.Component {
    @property(cc.Node)
    public lordNode: cc.Node = null;
    @property(cc.Node)
    lordName : cc.Node = null;
    @property(cc.Node)
    headImg : cc.Node = null;
    @property(cc.Node)
    nobility : cc.Node = null; //官爵
    @property(cc.Node)
    gold : cc.Node = null;
    @property(cc.Node)
    army : cc.Node = null;
    @property(cc.Node)
    morale : cc.Node = null; //士气值
    @property(cc.Node)
    prestige : cc.Node = null; //声望值
    @property(cc.Node)
    retinue : cc.Node = null; //武将数
    @property(cc.Node)
    city : cc.Node = null;
    @property(cc.Node)
    desc : cc.Node = null;
    @property(cc.Node)
    humanOrAi : cc.Node = null;
    @property(cc.Boolean)
    public isAi : Boolean = false; //是否是Ai

    start () {
        this.setClickEvent(this.humanOrAi);
        //右键处理  取消角色选择
        this.setRightClickEvent(this.node);        
    }

    private setClickEvent(el: cc.Node): void {
        el.on(EventType.MOUSE_DOWN, () => {            
            this.isAi = !this.isAi;
            if(this.isAi){
                showNode(this.humanOrAi.getChildByName("ai"));
                hideNode(this.humanOrAi.getChildByName("human"));
            }else{
                showNode(this.humanOrAi.getChildByName("human"));
                hideNode(this.humanOrAi.getChildByName("ai"));
            }
        });
    }

    private setRightClickEvent(el: cc.Node): void {
        el.on(EventType.MOUSE_DOWN, this.handleRightClick, this);
    }

    
    handleRightClick(event) {
        let mouseType = event.getButton();
        if (mouseType === cc.Event.EventMouse.BUTTON_RIGHT) {            
            showNode(this.lordNode);
            hideNode(this.lordNode.getComponent(UnitDrag).lordWalk);
            this.lordNode.getComponent(UnitDrag).animPlaying = false;
            this.lordNode = null;
            hideNode(this.headImg);
            this.lordName.getComponent(cc.Label).string = "";
            this.nobility.getComponent(cc.Label).string = "";
            this.gold.getComponent(cc.Label).string = "";
            this.army.getComponent(cc.Label).string = "";
            this.morale.getComponent(cc.Label).string = "";
            this.prestige.getComponent(cc.Label).string = "";
            this.retinue.getComponent(cc.Label).string = "";
            this.city.getComponent(cc.Label).string = "";
            this.desc.getComponent(cc.Label).string = "";
            hideNode(this.humanOrAi.getChildByName("human"));
            hideNode(this.humanOrAi.getChildByName("ai"));
            this.isAi = false;
            
        }
    }



    setLordNode(el : cc.Node){
        this.lordNode = el;
        
        //todo: 此处以后使用接口获取主公模型数据，加载
        var headImgFrame =  this.headImg.getComponent(cc.Sprite);
        if(this.lordNode.name == Lord.Caocao){
            this.lordName.getComponent(cc.Label).string = "曹操";
        }else if(this.lordNode.name == Lord.Sunquan){
            this.lordName.getComponent(cc.Label).string = "孙权";            
        }else if(this.lordNode.name == Lord.Liubei){
            this.lordName.getComponent(cc.Label).string = "刘备";            
        }else if(this.lordNode.name == Lord.Liubiao){
            this.lordName.getComponent(cc.Label).string = "刘表";            
        }else if(this.lordNode.name == Lord.Menghuo){
            this.lordName.getComponent(cc.Label).string = "孟获";            
        }else if(this.lordNode.name == Lord.Shixie){
            this.lordName.getComponent(cc.Label).string = "士燮";            
        }else if(this.lordNode.name == Lord.Cheliji){
            this.lordName.getComponent(cc.Label).string = "彻里吉";           
        }else if(this.lordNode.name == Lord.Yuanshao){
            this.lordName.getComponent(cc.Label).string = "袁绍";            
        }else if(this.lordNode.name == Lord.Beimihu){
            this.lordName.getComponent(cc.Label).string = "卑弥呼";            
        }else if(this.lordNode.name == Lord.Yuanshu){
            this.lordName.getComponent(cc.Label).string = "袁术呼";            
        }else if(this.lordNode.name == Lord.Dongzhuo){
            this.lordName.getComponent(cc.Label).string = "董卓";            
        }
        //"/../.." 根目录为resources目录 头像路径
        cc.loader.loadRes("/master-head/" + this.lordNode.getComponent(UnitDrag).lordName, cc.SpriteFrame,(err, spriteFrame) =>{
            headImgFrame.spriteFrame = spriteFrame;
        });
        
        this.nobility.getComponent(cc.Label).string = "骁骑校尉";
        this.gold.getComponent(cc.Label).string = "18000";
        this.army.getComponent(cc.Label).string = "12000";
        this.morale.getComponent(cc.Label).string = "60";
        this.prestige.getComponent(cc.Label).string = "200";
        this.retinue.getComponent(cc.Label).string = "7";
        this.city.getComponent(cc.Label).string = "0";
        this.desc.getComponent(cc.Label).string = "主公介绍信息......";

    //todo: 此处以后使用接口获取主公数据，加载
    var headImgFrame = this.headImg.getComponent(cc.Sprite);
    if (this.lordNode.name == 'lord-caocao') {
      this.lordName.getComponent(cc.Label).string = '曹操';
      //"/../.." 根目录为resources目录 头像路径
      cc.loader.loadRes('/master-head/caocao', cc.SpriteFrame, (err, spriteFrame) => {
        headImgFrame.spriteFrame = spriteFrame;
      });
    } else if (this.lordNode.name == 'lord-sunquan') {
      this.lordName.getComponent(cc.Label).string = '孙权';
      cc.loader.loadRes('/master-head/sunquan', cc.SpriteFrame, (err, spriteFrame) => {
        headImgFrame.spriteFrame = spriteFrame;
      });
    }

    this.nobility.getComponent(cc.Label).string = '骁骑校尉';
    this.gold.getComponent(cc.Label).string = '18000';
    this.army.getComponent(cc.Label).string = '12000';
    this.morale.getComponent(cc.Label).string = '60';
    this.prestige.getComponent(cc.Label).string = '200';
    this.retinue.getComponent(cc.Label).string = '7';
    this.city.getComponent(cc.Label).string = '0';
  }
}
