import { Direction, RoadNode } from '../../models/road';

export const map005Road: RoadNode[] = [
  {
    name: '01/01-01',
    nodes: ['11/11-10', '01/01-02'],
    supportDirection: [Direction.BottomRight, Direction.TopLeft],
  },
  {
    name: '01/01-02',
    nodes: ['01/01-01', '01/01-03'],
    supportDirection: [Direction.BottomRight, Direction.TopLeft],
  },
  {
    name: '01/01-03',
    nodes: ['01/01-02', '01/01-04'],
    supportDirection: [Direction.BottomRight, Direction.TopLeft],
  },
  {
    name: '01/01-04',
    nodes: ['01/01-03', '01/01-05'],
    supportDirection: [Direction.BottomRight, Direction.TopLeft],
  },
  {
    name: '01/01-05',
    nodes: ['01/01-04', '01/01-06'],
    supportDirection: [Direction.BottomRight, Direction.TopLeft],
  },
  {
    name: '01/01-06',
    nodes: ['01/01-05', '01/01-07'],
    supportDirection: [Direction.BottomRight, Direction.TopLeft],
  },
  {
    name: '01/01-07',
    nodes: ['01/01-06', '01/01-08'],
    supportDirection: [Direction.BottomRight, Direction.TopLeft],
  },
  {
    name: '01/01-08',
    nodes: ['01/01-07', '01/01-09'],
    supportDirection: [Direction.BottomRight, Direction.TopLeft],
  },
  {
    name: '01/01-09',
    nodes: ['01/01-08', '01/01-10'],
    supportDirection: [Direction.BottomRight, Direction.TopRight],
    turn: true,
  },
  {
    name: '01/01-10',
    nodes: ['01/01-09', '01/01-11'],
    supportDirection: [Direction.BottomLeft, Direction.TopRight],
  },
  {
    name: '01/01-11',
    nodes: ['01/01-10', '01/01-12'],
    supportDirection: [Direction.BottomLeft, Direction.TopRight],
  },
  {
    name: '01/01-12',
    nodes: ['01/01-11', '01/01-13'],
    supportDirection: [Direction.BottomLeft, Direction.TopRight],
  },
  {
    name: '01/01-13',
    nodes: ['01/01-12', '01/01-14'],
    supportDirection: [Direction.BottomLeft, Direction.TopRight],
  },
  {
    name: '01/01-14',
    nodes: ['01/01-13', '01/01-15'],
    supportDirection: [Direction.BottomLeft, Direction.TopRight],
  },
  {
    name: '01/01-15',
    nodes: ['01/01-14', '01/01-16'],
    supportDirection: [Direction.BottomLeft, Direction.TopRight],
  },
  {
    name: '01/01-16',
    nodes: ['01/01-15', '01/01-17'],
    supportDirection: [Direction.BottomLeft, Direction.TopRight],
  },
  {
    name: '01/01-17',
    nodes: ['01/01-16', '01/01-18'],
    supportDirection: [Direction.BottomLeft, Direction.TopRight],
  },
  {
    name: '01/01-18',
    nodes: ['01/01-17', '02/02-01'],
    supportDirection: [Direction.BottomLeft, Direction.BottomRight],
    turn: true,
  },
  {
    name: '02/02-01',
    nodes: ['01/01-18', '02/02-02'],
    supportDirection: [Direction.TopLeft, Direction.BottomRight],
  },
  {
    name: '02/02-02',
    nodes: ['02/02-01', '02/02-03'],
    supportDirection: [Direction.TopLeft, Direction.BottomRight],
  },
  {
    name: '02/02-03',
    nodes: ['02/02-02', '02/02-04'],
    supportDirection: [Direction.TopLeft, Direction.BottomRight],
  },
  {
    name: '02/02-04',
    nodes: ['02/02-03', '02/02-05'],
    supportDirection: [Direction.TopLeft, Direction.BottomRight],
  },
  {
    name: '02/02-05',
    nodes: ['02/02-04', '02/02-06'],
    supportDirection: [Direction.TopLeft, Direction.BottomRight],
  },
  {
    name: '02/02-06',
    nodes: ['02/02-05', '03/03-01'],
    supportDirection: [Direction.TopLeft, Direction.BottomRight],
  },
  {
    name: '03/03-01',
    nodes: ['02/02-06', '03/03-02'],
    supportDirection: [Direction.TopLeft, Direction.TopRight],
    turn: true,
  },
  {
    name: '03/03-02',
    nodes: ['03/03-01', '03/03-03'],
    supportDirection: [Direction.BottomLeft, Direction.TopRight],
  },
  {
    name: '03/03-03',
    nodes: ['03/03-02', '03/03-04'],
    supportDirection: [Direction.BottomLeft, Direction.TopRight],
  },
  {
    name: '03/03-04',
    nodes: ['03/03-03', '03/03-05'],
    supportDirection: [Direction.BottomLeft, Direction.TopRight],
  },
  {
    name: '03/03-05',
    nodes: ['03/03-04', '04/04-01'],
    supportDirection: [Direction.BottomLeft, Direction.BottomRight],
    turn: true,
  },
  {
    name: '04/04-01',
    nodes: ['03/03-05', '04/04-02'],
    supportDirection: [Direction.TopLeft, Direction.BottomRight],
  },
  {
    name: '04/04-02',
    nodes: ['04/04-01', '04/04-03'],
    supportDirection: [Direction.TopLeft, Direction.BottomRight],
  },
  {
    name: '04/04-03',
    nodes: ['04/04-02', '04/04-04'],
    supportDirection: [Direction.TopLeft, Direction.BottomRight],
  },
  {
    name: '04/04-04',
    nodes: ['04/04-03', '05/05-01'],
    supportDirection: [Direction.TopLeft, Direction.BottomRight],
  },
  {
    name: '05/05-01',
    nodes: ['04/04-04', '05/05-02', '10/10-06'],
    supportDirection: [Direction.TopLeft, Direction.TopRight, Direction.BottomLeft],
    variable: true,
  },
  {
    name: '05/05-02',
    nodes: ['05/05-01', '05/05-03'],
    supportDirection: [Direction.BottomLeft, Direction.TopRight],
  },
  {
    name: '05/05-03',
    nodes: ['05/05-02', '05/05-04'],
    supportDirection: [Direction.BottomLeft, Direction.TopRight],
  },
  {
    name: '05/05-04',
    nodes: ['05/05-03', '05/05-05'],
    supportDirection: [Direction.BottomLeft, Direction.TopRight],
  },
  {
    name: '05/05-05',
    nodes: ['05/05-04', '05/05-06'],
    supportDirection: [Direction.BottomLeft, Direction.TopRight],
  },
  {
    name: '05/05-06',
    nodes: ['05/05-05', '05/05-07'],
    supportDirection: [Direction.BottomLeft, Direction.TopRight],
  },
  {
    name: '05/05-07',
    nodes: ['05/05-06', '05/05-08'],
    supportDirection: [Direction.BottomLeft, Direction.TopRight],
  },
  {
    name: '05/05-08',
    nodes: ['05/05-07', '05/05-09'],
    supportDirection: [Direction.BottomLeft, Direction.TopRight],
  },
  {
    name: '05/05-09',
    nodes: ['05/05-08', '05/05-10'],
    supportDirection: [Direction.BottomLeft, Direction.TopRight],
  },
  {
    name: '05/05-10',
    nodes: ['05/05-09', '05/05-11'],
    supportDirection: [Direction.BottomLeft, Direction.TopRight],
  },
  {
    name: '05/05-11',
    nodes: ['05/05-10', '06/06-01'],
    supportDirection: [Direction.BottomLeft, Direction.BottomRight],
    turn: true,
  },
  {
    name: '06/06-01',
    nodes: ['05/05-11', '06/06-02'],
    supportDirection: [Direction.TopLeft, Direction.BottomRight],
  },
  {
    name: '06/06-02',
    nodes: ['06/06-01', '06/06-03'],
    supportDirection: [Direction.TopLeft, Direction.BottomRight],
  },
  {
    name: '06/06-03',
    nodes: ['06/06-02', '06/06-04'],
    supportDirection: [Direction.TopLeft, Direction.BottomRight],
  },
  {
    name: '06/06-04',
    nodes: ['06/06-03', '06/06-05'],
    supportDirection: [Direction.TopLeft, Direction.BottomRight],
  },
  {
    name: '06/06-05',
    nodes: ['06/06-04', '06/06-06'],
    supportDirection: [Direction.TopLeft, Direction.BottomRight],
  },
  {
    name: '06/06-06',
    nodes: ['06/06-05', '06/06-07'],
    supportDirection: [Direction.TopLeft, Direction.BottomRight],
  },
  {
    name: '06/06-07',
    nodes: ['06/06-06', '06/06-08'],
    supportDirection: [Direction.TopLeft, Direction.BottomRight],
  },
  {
    name: '06/06-08',
    nodes: ['06/06-07', '06/06-09'],
    supportDirection: [Direction.TopLeft, Direction.BottomRight],
  },
  {
    name: '06/06-09',
    nodes: ['06/06-08', '06/06-10'],
    supportDirection: [Direction.TopLeft, Direction.BottomRight],
  },
  {
    name: '06/06-10',
    nodes: ['06/06-09', '06/06-11'],
    supportDirection: [Direction.TopLeft, Direction.BottomRight],
  },
  {
    name: '06/06-11',
    nodes: ['06/06-10', '06/06-12'],
    supportDirection: [Direction.TopLeft, Direction.BottomRight],
  },
  {
    name: '06/06-12',
    nodes: ['06/06-11', '06/06-13'],
    supportDirection: [Direction.TopLeft, Direction.BottomLeft],
    turn: true,
  },
  {
    name: '06/06-13',
    nodes: ['06/06-12', '06/06-14'],
    supportDirection: [Direction.TopRight, Direction.BottomLeft],
  },
  {
    name: '06/06-14',
    nodes: ['06/06-13', '06/06-15'],
    supportDirection: [Direction.TopRight, Direction.BottomLeft],
  },
  {
    name: '06/06-15',
    nodes: ['06/06-14', '06/06-16'],
    supportDirection: [Direction.TopRight, Direction.BottomLeft],
  },
  {
    name: '06/06-16',
    nodes: ['06/06-15', '06/06-17'],
    supportDirection: [Direction.TopRight, Direction.BottomLeft],
  },
  {
    name: '06/06-17',
    nodes: ['06/06-16', '06/06-18'],
    supportDirection: [Direction.TopRight, Direction.BottomLeft],
  },
  {
    name: '06/06-18',
    nodes: ['06/06-17', '06/06-19'],
    supportDirection: [Direction.TopRight, Direction.BottomLeft],
  },
  {
    name: '06/06-19',
    nodes: ['06/06-18', '06/06-20'],
    supportDirection: [Direction.TopRight, Direction.BottomLeft],
  },
  {
    name: '06/06-20',
    nodes: ['06/06-19', '06/06-21'],
    supportDirection: [Direction.TopRight, Direction.BottomLeft],
  },
  {
    name: '06/06-21',
    nodes: ['06/06-20', '06/06-22'],
    supportDirection: [Direction.TopRight, Direction.BottomLeft],
  },
  {
    name: '06/06-22',
    nodes: ['06/06-21', '06/06-23'],
    supportDirection: [Direction.TopRight, Direction.TopLeft],
    turn: true,
  },
  {
    name: '06/06-23',
    nodes: ['06/06-22', '06/06-24'],
    supportDirection: [Direction.BottomRight, Direction.TopLeft],
  },
  {
    name: '06/06-24',
    nodes: ['06/06-23', '06/06-25'],
    supportDirection: [Direction.BottomRight, Direction.TopLeft],
  },
  {
    name: '06/06-25',
    nodes: ['06/06-24', '07/07-01'],
    supportDirection: [Direction.BottomRight, Direction.TopLeft],
  },
  {
    name: '07/07-01',
    nodes: ['06/06-25', '07/07-02'],
    supportDirection: [Direction.BottomRight, Direction.TopLeft],
  },
  {
    name: '07/07-02',
    nodes: ['07/07-01', '07/07-03'],
    supportDirection: [Direction.BottomRight, Direction.TopLeft],
  },
  {
    name: '07/07-03',
    nodes: ['07/07-02', '07/07-04'],
    supportDirection: [Direction.BottomRight, Direction.TopLeft],
  },
  {
    name: '07/07-04',
    nodes: ['07/07-03', '07/07-05'],
    supportDirection: [Direction.BottomRight, Direction.TopLeft],
  },
  {
    name: '07/07-05',
    nodes: ['07/07-04', '08/08-01'],
    supportDirection: [Direction.BottomRight, Direction.BottomLeft],
    turn: true,
  },
  {
    name: '08/08-01',
    nodes: ['07/07-05', '08/08-02'],
    supportDirection: [Direction.TopRight, Direction.BottomLeft],
  },
  {
    name: '08/08-02',
    nodes: ['08/08-01', '08/08-03'],
    supportDirection: [Direction.TopRight, Direction.BottomLeft],
  },
  {
    name: '08/08-03',
    nodes: ['08/08-02', '08/08-04'],
    supportDirection: [Direction.TopRight, Direction.BottomLeft],
  },
  {
    name: '08/08-04',
    nodes: ['08/08-03', '08/08-05'],
    supportDirection: [Direction.TopRight, Direction.BottomLeft],
  },
  {
    name: '08/08-05',
    nodes: ['08/08-04', '09/09-01'],
    supportDirection: [Direction.TopRight, Direction.BottomLeft],
  },
  {
    name: '09/09-01',
    nodes: ['08/08-05', '09/09-02'],
    supportDirection: [Direction.TopRight, Direction.TopLeft],
    turn: true,
  },
  {
    name: '09/09-02',
    nodes: ['09/09-01', '09/09-03'],
    supportDirection: [Direction.BottomRight, Direction.TopLeft],
  },
  {
    name: '09/09-03',
    nodes: ['09/09-02', '09/09-04'],
    supportDirection: [Direction.BottomRight, Direction.TopLeft],
  },
  {
    name: '09/09-04',
    nodes: ['09/09-03', '10/10-01'],
    supportDirection: [Direction.BottomRight, Direction.TopLeft],
  },
  {
    name: '10/10-01',
    nodes: ['09/09-04', '10/10-02', '11/11-01'],
    supportDirection: [Direction.BottomRight, Direction.TopRight, Direction.BottomLeft],
    variable: true,
  },
  {
    name: '10/10-02',
    nodes: ['10/10-01', '10/10-03'],
    supportDirection: [Direction.BottomLeft, Direction.TopRight],
  },
  {
    name: '10/10-03',
    nodes: ['10/10-02', '10/10-04'],
    supportDirection: [Direction.BottomLeft, Direction.TopRight],
  },
  {
    name: '10/10-04',
    nodes: ['10/10-03', '10/10-05'],
    supportDirection: [Direction.BottomLeft, Direction.TopRight],
  },
  {
    name: '10/10-05',
    nodes: ['10/10-04', '10/10-06'],
    supportDirection: [Direction.BottomLeft, Direction.TopRight],
  },
  {
    name: '10/10-06',
    nodes: ['10/10-05', '05/05-01'],
    supportDirection: [Direction.BottomLeft, Direction.TopRight],
  },
  {
    name: '11/11-01',
    nodes: ['10/10-01', '11/11-02'],
    supportDirection: [Direction.TopRight, Direction.BottomLeft],
  },
  {
    name: '11/11-02',
    nodes: ['11/11-01', '11/11-03'],
    supportDirection: [Direction.TopRight, Direction.BottomLeft],
  },
  {
    name: '11/11-03',
    nodes: ['11/11-02', '11/11-04'],
    supportDirection: [Direction.TopRight, Direction.BottomLeft],
  },
  {
    name: '11/11-04',
    nodes: ['11/11-03', '11/11-05'],
    supportDirection: [Direction.TopRight, Direction.BottomLeft],
  },
  {
    name: '11/11-05',
    nodes: ['11/11-04', '11/11-06'],
    supportDirection: [Direction.TopRight, Direction.BottomLeft],
  },
  {
    name: '11/11-06',
    nodes: ['11/11-05', '11/11-07'],
    supportDirection: [Direction.TopRight, Direction.BottomLeft],
  },
  {
    name: '11/11-07',
    nodes: ['11/11-06', '11/11-08'],
    supportDirection: [Direction.TopRight, Direction.TopLeft],
    turn: true,
  },
  {
    name: '11/11-08',
    nodes: ['11/11-07', '11/11-09'],
    supportDirection: [Direction.BottomRight, Direction.TopLeft],
  },
  {
    name: '11/11-09',
    nodes: ['11/11-08', '11/11-10'],
    supportDirection: [Direction.BottomRight, Direction.TopLeft],
  },
  {
    name: '11/11-10',
    nodes: ['11/11-09', '01/01-01'],
    supportDirection: [Direction.BottomRight, Direction.TopLeft],
  },
];
