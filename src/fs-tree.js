import PropTypes from 'prop-types'
import React from 'react'

import { exports } from './module'
import Shapes from './shapes'

class FSTree extends React.Component {
  static propTypes = {
    childNodes: PropTypes.arrayOf(Shapes.Node).isRequired,
    parentNode: PropTypes.instanceOf(React.Component).isRequired,
    rootNode: PropTypes.instanceOf(React.Component).isRequired,
    depth: PropTypes.number,
    noninteractive: PropTypes.bool,
    onSelect: PropTypes.func,
    onDeselect: PropTypes.func,
    onClose: PropTypes.func,
    onOpen: PropTypes.func,
  }

  static defaultProps = {
    depth: 0,
    noninteractive: false,
    onSelect: () => {},
    onDeselect: () => {},
    onClose: () => {},
    onOpen: () => {},
  }

  get depth() {
    return this.props.depth
  }

  get parentNode() {
    return this.props.parentNode
  }

  get rootNode() {
    return this.props.rootNode
  }

  get noninteractive() {
    return this.props.noninteractive
  }

  get childNodes() {
    return [...this._childNodes]
  }

  get path() {
    return this._path
  }

  constructor(props) {
    super(props)

    this._path = props.parentNode._path + '/'
    this._childNodes = []

    this.state = {
      childNodes: props.childNodes
    }
  }

  componentWillUpdate() {
    this._childNodes = []
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
                ref={ref => ref && this._childNodes.push(ref)}
                node={node}
                parentNode={this}
                rootNode={this.rootNode}
                noninteractive={this.noninteractive}
                depth={this.depth + 1}
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

  _onDeselect = (node) => {
    this.props.onDeselect(node)
  }

  _onSelect = (node) => {
    this.props.onSelect(node)
  }

  _onClose = (node) => {
    this.props.onClose(node)
  }

  _onOpen = (node) => {
    this.props.onOpen(node)
  }
}

exports.FSTree = FSTree
