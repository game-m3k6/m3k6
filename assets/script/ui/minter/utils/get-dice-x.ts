/**
 * 获取骰子位置
 *
 * @param centerX 骰子进度条中心位置
 * @param diceNum 骰子数（最小1、最大12）
 */
export function getDiceX(centerX: number, diceNum: number): number {
  switch (diceNum) {
    case 1: {
      return centerX - 8 - 75 + 2;
    }
    case 2: {
      return centerX - 8 - 60 + 2;
    }
    case 3: {
      return centerX - 8 - 45 + 2;
    }
    case 4: {
      return centerX - 8 - 30 + 2;
    }
    case 5: {
      return centerX - 8 - 15 + 2;
    }
    case 6: {
      return centerX - 8 + 2;
    }
    case 7: {
      return centerX - 8 + 15;
    }
    case 8: {
      return centerX - 8 + 30;
    }
    case 9: {
      return centerX - 8 + 45;
    }
    case 10: {
      return centerX - 8 + 60 - 2;
    }
    case 11: {
      return centerX - 8 + 75 - 2;
    }
    case 12: {
      return centerX - 8 + 90 - 2;
    }
    default: {
      return 0;
    }
  }
}
