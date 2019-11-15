export function showNode(node: cc.Node | cc.Node[]): void {
  if (node instanceof Array) {
    for (const n of node) {
      n.opacity = 255;
    }

    return;
  }

  node.opacity = 255;
}

export function hideNode(node: cc.Node | cc.Node[]): void {
  if (node instanceof Array) {
    for (const n of node) {
      n.opacity = 0;
    }

    return;
  }

  node.opacity = 0;
}
