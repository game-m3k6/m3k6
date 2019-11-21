import { Person } from './person';

export class City {
  id: string;
  name: string;
  // 城市状态
  status: number;
  // 武将列表
  peoples: Person[];
  // 太守
  satrap: Person;
  // 军师
  counsellor: Person;
  // 人口
  population: number;
  // 民忠
  manChung: number;
  // 商业
  business: number;
}
