export function setMouseCursor(canvas: HTMLCanvasElement): void {
  const path = cc.url.raw('resources/cursor.png');
  canvas.style.cursor = `url('${path}'),auto`;
}
