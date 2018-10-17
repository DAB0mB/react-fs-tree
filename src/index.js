import './fs-node'
import './fs-tree'
import module from './module'

export const FSNode = module.exports.FSNode
export const FSTree = module.exports.FSTree

FSTree.Node = FSNode

export default FSTree
