/**
 * 人物模型
 */
export interface Person {
  id: string;
  // 名称
  name: string;
  // 出场时间
  entryDate: string;
  // 退出时间
  exitDate: string;
  // 势力
  faction: string;
  // 位置
  position: string;
  // 统帅
  captain: number;
  // 武力
  strength: number;
  // 智力
  wisdom: number;
  // 体力
  life: number;
  // 当前体力
  currentLife: number;
  // 运输
  transport: number;
  // 陆战
  landBattle: number;
  // 水战
  waterBattle: number;
  // 山战
  mountainBattle: number;
  // 技能
  skill?: string;
  // 特长
  specialty?: string;
}
