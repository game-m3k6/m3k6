import { map005Road } from '../../assets/script/data/map/map005-data';
import { PlayerState } from '../../assets/script/models/player';
import { Direction } from '../../assets/script/models/road';
import RoadView from '../../assets/script/ui/road-view';
import { getNextDirectionRoadNode, getWalkRouteLine } from '../../assets/script/utils/route-helpers';
import { MockRoadView } from '../mock/mock-road-view';

describe('route-helpers', () => {
  let mapRoad: RoadView;
  let playerState: PlayerState;

  beforeAll(() => {
    mapRoad = new MockRoadView() as any;
    mapRoad.init(map005Road);
    playerState = {
      name: '曹操',
      direction: Direction.TopRight,
      dice: { max: 12, dice: 6 },
      diceNum: 5,
      position: mapRoad.getRoadNode('10/10-04'),
    };
  });

  it('走路并转弯', async () => {
    const diceNum = 12;
    playerState.position = mapRoad.getRoadNode('01/01-02');
    playerState.direction = Direction.TopLeft;
    const res = getWalkRouteLine(diceNum, playerState, <any>mapRoad);
    expect(res).toEqual([
      {
        node: {
          name: '01/01-09',
          nodes: ['01/01-08', '01/01-10'],
          supportDirection: ['bottom-right', 'top-right'],
          turn: true,
        },
        direction: 'top-right',
        remainingDice: 5,
        duration: 0.7,
      },
      {
        node: {
          name: '01/01-14',
          nodes: ['01/01-13', '01/01-15'],
          supportDirection: ['bottom-left', 'top-right'],
        },
        direction: 'top-right',
        remainingDice: 0,
        duration: 0.5,
        finish: true,
      },
    ]);
  });
  it('走路并通过可变道路', async () => {
    const diceNum = 12;
    playerState.position = mapRoad.getRoadNode('11/11-03');
    playerState.direction = Direction.TopRight;
    const res = getWalkRouteLine(diceNum, playerState, mapRoad);
    expect(res.length >= 2).toBeTruthy();
  });
  it('走路并通过可变道路2', async () => {
    const diceNum = 10;
    playerState.position = mapRoad.getRoadNode('10/10-01');
    playerState.direction = Direction.TopRight;
    const res = getWalkRouteLine(diceNum, playerState, mapRoad);
    expect(res.length >= 2).toBeTruthy();
  });
  it('走路测试1', async () => {
    const diceNum = 9;
    playerState.position = mapRoad.getRoadNode('05/05-02');
    playerState.direction = Direction.TopRight;
    const res = getWalkRouteLine(diceNum, playerState, mapRoad);
    expect(res).toEqual([
      {
        node: {
          name: '05/05-11',
          nodes: ['05/05-10', '06/06-01'],
          supportDirection: ['bottom-left', 'bottom-right'],
          turn: true,
        },
        direction: 'bottom-right',
        remainingDice: 0,
        duration: 0.9,
        finish: true,
      },
    ]);
  });
  it('获取下一方向道路节点', async () => {
    const routeNode = {
      node: {
        name: '10/10-06',
        nodes: ['10/10-05', '05/05-01'],
        supportDirection: ['bottom-left', 'top-right'],
      },
      direction: 'top-right',
      remainingDice: 4,
      duration: 0.6,
    } as any;
    const direction = Direction.TopRight;
    const res = getNextDirectionRoadNode(direction, routeNode, mapRoad);
    console.log(res);
    // expect(res.length >= 2).toBeTruthy();
  });
});
