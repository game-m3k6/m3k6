import { map005Road } from '../../assets/script/data/map/map005-data';
import { PlayerState } from '../../assets/script/models/player';
import { MapRoad } from '../../assets/script/models/road';
import { getWalkRouteLine } from '../../assets/script/utils/route-helpers';
// this.mapRoad.roadNodes.find(o=>o.name === '11/11-03'),
describe('get-next-road-node', () => {
  it('正向走路', async () => {
    const diceNum = 12;
    const playerState = {
      position: map005Road.find((o) => o.name === '01/01-02'),
      name: '曹操',
    } as PlayerState;
    const mapRoad: MapRoad = {
      root: {} as any,
      roadNodes: map005Road,
    };
    const res = getWalkRouteLine(diceNum, playerState, mapRoad);
    expect(res).toEqual([
      {
        node: {
          name: '01/01-09',
          previous: '01/01-08',
          next: '01/01-10',
          supportDirection: ['bottom-right', 'top-right'],
          turn: true,
        },
        remainingDice: 5,
        duration: 0.7,
      },
      {
        node: {
          name: '01/01-14',
          previous: '01/01-13',
          next: '01/01-15',
          supportDirection: ['bottom-left', 'top-right'],
        },
        remainingDice: 0,
        duration: 0.5,
        finish: true,
      },
    ]);
  });
  it('反向走路', async () => {
    const diceNum = 12;
    const playerState = {
      position: map005Road.find((o) => o.name === '11/11-03'),
      name: '曹操',
      walkDesc: true,
    } as PlayerState;
    const mapRoad: MapRoad = {
      root: {} as any,
      roadNodes: map005Road,
    };
    const res = getWalkRouteLine(diceNum, playerState, mapRoad);
    expect(res).toEqual([
      {
        node: {
          name: '01/01-09',
          previous: '01/01-08',
          next: '01/01-10',
          supportDirection: ['bottom-right', 'top-right'],
          turn: true,
        },
        remainingDice: 5,
        duration: 0.7,
      },
      {
        node: {
          name: '01/01-14',
          previous: '01/01-13',
          next: '01/01-15',
          supportDirection: ['bottom-left', 'top-right'],
        },
        remainingDice: 0,
        duration: 0.5,
        finish: true,
      },
    ]);
  });
});
