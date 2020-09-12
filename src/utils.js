export const walkTogether = (target, source, cb) => {
  target.forEach((targetNode) => {
    const sourceNode = source && source.find(n => n.name === targetNode.name)

    cb(targetNode, sourceNode)

    if (targetNode.childNodes) {
      walkTogether(targetNode.childNodes, sourceNode && sourceNode.childNodes, cb)
    }
  })
}

export const someNodes = (target, cb) => {
  return target.some((targetNode) => {
    if (cb(targetNode)) {
      return true
    }

    if (targetNode.childNodes) {
      return someNodes(targetNode.childNodes, cb)
    }
  })
}
