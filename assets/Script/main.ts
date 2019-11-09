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

  @property({ type: cc.AudioClip })
  bgm: cc.AudioClip = null;
  @property({ type: cc.AudioClip })
  clickAudio: cc.AudioClip = null;
  @property({ type: cc.AudioClip })
  moveAudio: cc.AudioClip = null;

  start() {
    this.version.string = 'v0.1.0';
    this.initMenu();
    setMouseCursor(cc.game.canvas);
    cc.audioEngine.playEffect(this.bgm, true);
  }

  onLoad() {}

  private initMenu(): void {
    this.setEvent(this.exitHover);
    this.setEvent(this.staffHover);
    this.setEvent(this.settingHover);
    this.setEvent(this.loadingHover);
    this.setEvent(this.stageHover);
    this.setEvent(this.storyHover);
  }

  private setEvent(el: cc.Node): void {
    this.setHoverEvent(el);
    this.setClickEvent(el);
  }

  private setHoverEvent(el: cc.Node): void {
    el.on(EventType.MOUSE_ENTER, () => {
      el.opacity = 255;
      cc.audioEngine.playEffect(this.moveAudio, false);
    });
    el.on(EventType.MOUSE_LEAVE, () => (el.opacity = 0));
  }

  private setClickEvent(el: cc.Node): void {
    el.on(EventType.MOUSE_DOWN, () => {
      switch (el) {
        case this.storyHover: {
          cc.director.loadScene('select-master');
          break;
        }
      }
      cc.audioEngine.playEffect(this.clickAudio, false);
    });
  }
}
