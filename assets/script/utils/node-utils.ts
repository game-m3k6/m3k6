export function showNode(node: cc.Node | cc.Node[]): void {
  if (node instanceof Array) {
    for (const n of node) {
      if (node) {
        n.opacity = 255;
      }
    }

    return;
  }

  if (node) {
    node.opacity = 255;
  }
}

export function hideNode(node: cc.Node | cc.Node[]): void {
  if (node instanceof Array) {
    for (const n of node) {
      if (node) {
        n.opacity = 0;
      }
    }

    return;
  }

  if (node) {
    node.opacity = 0;
  }
}
