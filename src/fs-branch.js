import PropTypes from 'prop-types'
import React from 'react'

import { exports } from './module'
import Shapes from './shapes'

class FSBranch extends React.Component {
  static propTypes = {
    childNodes: PropTypes.arrayOf(Shapes.Node).isRequired,
    parentNode: PropTypes.instanceOf(React.Component).isRequired,
    root: PropTypes.instanceOf(React.Component).isRequired,
    depth: PropTypes.number,
    noninteractive: PropTypes.bool,
    onSelect: PropTypes.func,
    onDeselect: PropTypes.func,
    onSelectChange: PropTypes.func,
    onClose: PropTypes.func,
    onOpen: PropTypes.func,
    onOpenChange: PropTypes.func,
  }

  static defaultProps = {
    depth: 0,
    noninteractive: false,
    onSelect: () => {},
    onDeselect: () => {},
    onSelectChange: () => {},
    onClose: () => {},
    onOpen: () => {},
    onOpenChange: () => {},
  }

  get depth() {
    return this.props.depth
  }

  get parentNode() {
    return this.props.parentNode
  }

  get root() {
    return this.props.root
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

    this.state = {
      childNodes: props.childNodes,
    }

    this._path = props.parentNode.path + '/'
    this._childNodes = []
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      childNodes: nextProps.childNodes,
    })
  }

  UNSAFE_componentWillUpdate() {
    this._childNodes = []
  }

  render() {
    return (
      <div className="FSBranch">
        <ul className="FSBranch-node-list">
          {this.state.childNodes.map((node, i) => (
            <li key={`${i}_${node.name}`} className="FSBranch-node-list-item">
              <exports.FSNode
                ref={ref => ref && this._childNodes.push(ref)}
                node={node}
                branch={this}
                parentNode={this.props.parentNode}
                root={this.props.root}
                noninteractive={this.props.noninteractive}
                depth={this.props.depth + 1}
                onSelect={this.props.onSelect}
                onDeselect={this.props.onDeselect}
                onSelectChange={this.props.onSelectChange}
                onClose={this.props.onClose}
                onOpen={this.props.onOpen}
                onOpenChange={this.props.onOpenChange}
              />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

exports.FSBranch = FSBranch
