export interface TiledObject {
  id: string;
  name: string;
  width: number;
  height: number;
  x: number;
  y: number;
  rotation: number;
  visible: boolean;
  type: number;
  offset: cc.Vec2;
  [attr: string]: any;
}
