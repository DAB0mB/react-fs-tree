import PropTypes from 'prop-types'
import React from 'react'

import { exports } from './module'
import Shapes from './shapes'

class FSTree extends React.Component {
  static propTypes = {
    depth: PropTypes.number,
    childNodes: PropTypes.arrayOf(Shapes.Node).isRequired,
    onSelect: PropTypes.func,
    onDeselect: PropTypes.func,
    onClose: PropTypes.func,
    onOpen: PropTypes.func,
  }

  static defaultProps = {
    depth: 0,
    onSelect: () => {},
    onDeselect: () => {},
    onClose: () => {},
    onOpen: () => {},
  }

  get depth() {
    return this._depth
  }

  get childComponents() {
    return [...this._childComponents]
  }

  constructor(props) {
    super(props)

    this._depth = props.depth
    this._childComponents = []

    this.state = {
      childNodes: props.childNodes
    }
  }

  componentWillUpdate() {
    this._childComponents = []
  }

  componentWillReceiveProps(props) {
    const state = {}
    let updated = false

    if (props.hasOwnProperty('childNodes')) {
      state.childNodes = props.childNodes
      updated = true
    }

    if (updated) {
      this.setState(state)
    }
  }

  render() {
    const { childNodes } = this.state

    return (
      <div className="FSTree">
        <ul className="FSTree-node-list">
          {childNodes.map((node) => (
            <li key={node.name} className="FSTree-node-list-item">
              <exports.FSNode
                ref={ref => ref && this._childComponents.push(ref)}
                node={node}
                depth={this._depth + 1}
                onSelect={this._onSelect}
                onDeselect={this._onDeselect}
                onClose={this._onClose}
                onOpen={this._onOpen}
              />
            </li>
          ))}
        </ul>
      </div>
    )
  }

  _onDeselect = (node, component) => {
    this.props.onDeselect(node, component)
  }

  _onSelect = (node, component) => {
    this.props.onSelect(node, component)
  }

  _onClose = (node, component) => {
    this.props.onClose(node, component)
  }

  _onOpen = (node, component) => {
    this.props.onOpen(node, component)
  }
}

exports.FSTree = FSTree
