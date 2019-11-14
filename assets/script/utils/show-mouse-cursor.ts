export function showMouseCursor(): void {
  const path = cc.url.raw('resources/cursor.png');
  cc.game.canvas.style.cursor = `url('${path}'),auto`;
}
