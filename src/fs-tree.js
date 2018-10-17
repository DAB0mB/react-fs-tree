import PropTypes from 'prop-types'
import React from 'react'

import { exports } from './module'
import Shapes from './shapes'

class FSTree extends React.Component {
  static propTypes = {
    depth: PropTypes.number,
    tree: PropTypes.arrayOf(Shapes.Node),
    onSelect: PropTypes.func,
    onDeselect: PropTypes.func,
    onCollapse: PropTypes.func,
    onExpand: PropTypes.func,
  }

  constructor(props) {
    super(props)

    this.depth = Number(props.depth) || 0
    this.nodes = []

    this.state = {
      tree: props.tree
    }
  }

  componentWillUpdate() {
    this.nodes = []
  }

  componentWillReceiveProps(props) {
    const state = {}
    let updated = false

    if (props.hasOwnProperty('tree')) {
      state.tree = props.tree
      updated = true
    }

    if (updated) {
      this.setState(state)
    }
  }

  getSnapshotBeforeUpdate() {
    this.nodes = []

    return null
  }

  getNodes() {
    return this.nodes
      .filter(Boolean)
      .map(({ target }) => target)
  }

  render() {
    const tree = this.state.tree

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          .FSTree ._nodes-list {
            margin: 0;
            padding: 0;
            margin-top: 15px;
            list-style-type: none;
          }

          .FSTree ._nodes-list-item {
            margin-top: 8px 0;
          }
        ` }} />
        <div className="FSTree">
          <ul className="_nodes-list">
            {tree.map((node) => (
              <li key={node.name} className="_nodes-list-item">
                <exports.FSNode
                  ref={ref => this.nodes.push(ref)}
                  node={node}
                  depth={this.depth + 1}
                  onSelect={this.onSelect}
                  onDeselect={this.onDeselect}
                  onCollapse={this.onCollapse}
                  onExpand={this.onExpand}
                />
              </li>
            ))}
          </ul>
        </div>
      </span>
    )
  }

  deselect() {
    this.getNodes().forEach((node) => {
      node.deselect()
    })
  }

  getSelectionPath() {
    const nodes = this.getNodes()

    for (let node of nodes) {
      const childSelectionPath = node.getSelectionPath()

      if (childSelectionPath) {
        return childSelectionPath
      }
    }
  }

  onDeselect = (node, component) => {
    if (typeof this.props.onDeselect === 'function') {
      this.props.onDeselect(node, component);
    }
  }

  onSelect = (node, component) => {
    if (typeof this.props.onSelect === 'function') {
      this.props.onSelect(node, component);
    }
  }

  onCollapse = (node, component) => {
    if (typeof this.props.onCollapse === 'function') {
      this.props.onCollapse(node, component);
    }
  }

  onExpand = (node, component) => {
    if (typeof this.props.onExpand === 'function') {
      this.props.onExpand(node, component);
    }
  }
}

exports.FSTree = FSTree
