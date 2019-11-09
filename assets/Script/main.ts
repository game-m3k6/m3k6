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

  @property(cc.AudioClip)
  audio: cc.AudioClip = null;

  start() {
    this.version.string = 'v0.1.0';
    this.initMenu();
    setMouseCursor(cc.game.canvas);
    cc.audioEngine.playEffect(this.audio, true);
  }

  onLoad() {
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
