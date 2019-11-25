import { map005Road } from '../../../assets/script/data/map/map005-data';
import { PlayerState } from '../../../assets/script/models/player';
import { MapRoad } from '../../../assets/script/models/road';
import { findRoadNode, getWalkRouteLine } from '../../../assets/script/ui/player/internat/get-next-road-node';

describe('get-next-road-node', () => {
  it('确定行走道路', async () => {
    const diceNum = 2;
    const playerState = {
      direction: 'top-left',
      position: {
        name: '01/01-08',
        next: '01/01-09',
        previous: '01/01-07',
        supportDirection: ['top-left', 'bottom-right'],
      },
      name: '曹操',
    } as PlayerState;
    const mapRoad: MapRoad = {
      root: {} as any,
      roadNodes: map005Road,
    };
    const res = findRoadNode(diceNum, playerState, mapRoad);
    expect(res).toEqual({
      name: '01/01-10',
      next: '01/01-11',
      previous: '01/01-09',
      supportDirection: ['bottom-left', 'top-right'],
    });
  });

  it('获取路线', async () => {
    const diceNum = 12;
    const playerState = {
      direction: 'top-left',
      position: {
        name: '01/01-02',
        next: '01/01-03',
        previous: '01/01-01',
        supportDirection: ['top-left', 'bottom-right'],
      },
      name: '曹操',
    } as PlayerState;
    const mapRoad: MapRoad = {
      root: {} as any,
      roadNodes: map005Road,
    };
    const res = getWalkRouteLine(diceNum, playerState, mapRoad);
    expect(res).toEqual([
      {
        name: '01/01-09',
        next: '01/01-10',
        previous: '01/01-08',
        supportDirection: ['top-right', 'bottom-right'],
        turn: true,
      },
      {
        name: '01/01-14',
        next: '01/01-15',
        previous: '01/01-13',
        supportDirection: ['bottom-left', 'top-right'],
      },
    ]);
  });
});
