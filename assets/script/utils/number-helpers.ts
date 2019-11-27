/**
 * 格式化数字，保留2位小数(四舍五入)
 * @param parm
 */
export function formatNumber(parm: number): number {
  return Math.round(parm * 100) / 100;
}
