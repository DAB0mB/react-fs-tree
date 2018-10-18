import PropTypes from 'prop-types'
import React from 'react'

import { exports } from './module'
import Shapes from './shapes'

class FSTree extends React.Component {
  static propTypes = {
    depth: PropTypes.number,
    children: PropTypes.arrayOf(Shapes.Node).isRequired,
    onSelect: PropTypes.func,
    onDeselect: PropTypes.func,
    onClose: PropTypes.func,
    onOpen: PropTypes.func,
  }

  constructor(props) {
    super(props)

    this.depth = Number(props.depth) || 0
    this.nodes = []

    this.state = {
      children: props.children
    }
  }

  componentWillUpdate() {
    this.nodes = []
  }

  componentWillReceiveProps(props) {
    const state = {}
    let updated = false

    if (props.hasOwnProperty('children')) {
      state.children = props.children
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
    const children = this.state.children

    return (
      <div className="FSTree">
        <ul className="FSTree-node-list">
          {children.map((node) => (
            <li key={node.name} className="FSTree-node-list-item">
              <exports.FSNode
                ref={ref => this.nodes.push(ref)}
                node={node}
                depth={this.depth + 1}
                onSelect={this.onSelect}
                onDeselect={this.onDeselect}
                onClose={this.onClose}
                onOpen={this.onOpen}
              />
            </li>
          ))}
        </ul>
      </div>
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

  onClose = (node, component) => {
    if (typeof this.props.onClose === 'function') {
      this.props.onClose(node, component);
    }
  }

  onOpen = (node, component) => {
    if (typeof this.props.onOpen === 'function') {
      this.props.onOpen(node, component);
    }
  }
}

exports.FSTree = FSTree
