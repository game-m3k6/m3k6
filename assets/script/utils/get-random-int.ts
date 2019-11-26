/**
 * 获取在 `min` 和 `max`之间的随机整数
 *
 * @param {number} min - 最小数
 * @param {number} max - 最大数
 * @return {number} a random integer
 */
export function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
