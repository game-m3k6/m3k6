import EventType = cc.Node.EventType;
import { setMouseCursor } from './utils';

const { ccclass, property } = cc._decorator;

@ccclass
export default class Main extends cc.Component {
  @property(cc.Label)
  version: cc.Label = null;

  @property(cc.Node)
  exitHover: cc.Node = null;
  @property(cc.Node)
  staffHover: cc.Node = null;
  @property(cc.Node)
  settingHover: cc.Node = null;
  @property(cc.Node)
  loadingHover: cc.Node = null;
  @property(cc.Node)
  stageHover: cc.Node = null;
  @property(cc.Node)
  storyHover: cc.Node = null;

  start() {
    this.version.string = 'v0.1.0';
    this.initMenu();
    setMouseCursor(cc.game.canvas);
    // debugger
    // cc.game.canvas.
    /*cc.game.canvas.∏
    setTimeout(()=> {
      // debugger
      cc.game.canvas.style.cursor = "url('/res/import/ce/ce41cd0d-d754-49e4-afc0-e3dc17d1514b.png',auto)";
      cc.log('cursor： '+cc.game.canvas.style.cursor)
    },2000);*/

    // cc.canvas.style.cursor = "none";
    // cc.Canvas
  }

  onLoad() {
    // cc.game.canvas.style.cursor = "url('/res/import/ce/ce41cd0d-d754-49e4-afc0-e3dc17d1514b.png',auto)"
    // this.node.on(cc.Node.EventType.TOUCH_START, this.mouseStart, this);
    // this.node.on(cc.Node.EventType.TOUCH_END, this.mouseEnd, this);
  }

  private initMenu(): void {
    this.setHoverEvent(this.exitHover);
    this.setHoverEvent(this.staffHover);
    this.setHoverEvent(this.settingHover);
    this.setHoverEvent(this.loadingHover);
    this.setHoverEvent(this.stageHover);
    this.setHoverEvent(this.storyHover);
  }

  private setHoverEvent(el: cc.Node): void {
    el.on(EventType.MOUSE_ENTER, () => (el.opacity = 255));
    el.on(EventType.MOUSE_LEAVE, () => (el.opacity = 0));
  }
}
