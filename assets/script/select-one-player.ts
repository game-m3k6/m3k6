
const {ccclass, property} = cc._decorator;

@ccclass
export default class PlayerSelect extends cc.Component {

    @property(cc.Node)
    public lordNode : cc.Node = null;
    
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

    setLordNode(el : cc.Node){
        this.lordNode = el;
        
        //todo: 此处以后使用接口获取主公数据，加载
        var headImgFrame =  this.headImg.getComponent(cc.Sprite);
        if(this.lordNode.name == "lord-caocao"){
            this.lordName.getComponent(cc.Label).string = "曹操";
            //"/../.." 根目录为resources目录 头像路径
            cc.loader.loadRes("/master-head/caocao", cc.SpriteFrame, (err, spriteFrame) =>{
                headImgFrame.spriteFrame = spriteFrame;
            });
        }else if(this.lordNode.name == "lord-sunquan"){
            this.lordName.getComponent(cc.Label).string = "孙权";
            cc.loader.loadRes("/master-head/sunquan", cc.SpriteFrame, (err, spriteFrame) =>{
                headImgFrame.spriteFrame = spriteFrame;
            });
        }      
        
        this.nobility.getComponent(cc.Label).string = "骁骑校尉";
        this.gold.getComponent(cc.Label).string = "18000";
        this.army.getComponent(cc.Label).string = "12000";
        this.morale.getComponent(cc.Label).string = "60";
        this.prestige.getComponent(cc.Label).string = "200";
        this.retinue.getComponent(cc.Label).string = "7";
        this.city.getComponent(cc.Label).string = "0";    

    }

    
}