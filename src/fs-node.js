import PropTypes from 'prop-types'
import React from 'react'
import ReactDOM from 'react-dom'

import Icons from './icons'
import { exports } from './module'
import Shapes from './shapes'

class FSNode extends React.Component {
  static propTypes = {
    depth: PropTypes.number,
    node: Shapes.Node.isRequired,
    onSelect: PropTypes.func,
    onDeselect: PropTypes.func,
    onCollapse: PropTypes.func,
    onExpand: PropTypes.func,
  }

  get children() {
    return this._children && this._children.target
  }

  set children(children) {
    this._children = children
  }

  constructor(props) {
    super(props)

    this.depth = Number(props.depth) || 0

    this.state = {
      node: props.node
    }
  }

  render() {
    const { node } = this.state

    return (
      <div className="FSNode">
        <div className={this.getWrapClass()} style={this.getWrapStyle()}>
          <div className="FSNode-node" style={this.getNodeStyle()}>
            <div className="FSNode-descriptor">
              <div className="FSNode-icon" onClick={this.toggleCollapse}>{this.getIcon()}</div>
              <div className="FSNode-text" onClick={this.toggleSelection}>{node.name}</div>
            </div>
            {node.children && !node.collapsed && (
              <exports.FSTree
                ref={ref => this.children = ref}
                tree={node.children}
                depth={this.depth}
                onSelect={this.onSelect}
                onDeselect={this.onDeselect}
              />
            )}
          </div>
        </div>
      </div>
    )
  }

  select() {
    if (this.state.node.selected) return Promise.resolve()

    try {
      ReactDOM.findDOMNode(this)
    }
    // If not mounted, still perform operation on node
    catch (e) {
      const node = this.state.node
      node.selected = true

      return Promise.resolve()
    }

    return new Promise((resolve) => {
      this.setState({
        node: Object.assign(this.state.node, {
          selected: true
        })
      }, () => {
        if (typeof this.props.onSelect === 'function') {
          this.props.onSelect(this.state.node, this)
        }

        resolve()
      })
    })
  }

  deselect() {
    if (!this.state.node.selected) return Promise.resolve()

    try {
      ReactDOM.findDOMNode(this)
    }
    // If not mounted, still perform operation on node
    catch (e) {
      const node = this.state.node
      node.selected = false

      return Promise.resolve()
    }

    return new Promise((resolve) => {
      this.setState({
        node: Object.assign(this.state.node, {
          selected: false
        })
      }, () => {
        if (typeof this.props.onDeselect === 'function') {
          this.props.onDeselect(this.state.node, this)
        }

        resolve()
      })
    })
  }

  getSelectionPath() {
    if (this.state.node.selected) {
      return this.state.node.name
    }

    if (this.children) {
      const childSelectionPath = this.children.getSelectionPath()

      if (childSelectionPath) {
        return this.state.node.name + '/' + childSelectionPath
      }
    }
  }

  toggleSelection = () => {
    return this.state.node.selected ? this.deselect() : this.select()
  }

  getWrapClass() {
    const selected = this.state.node.selected ? 'FSNode-selected' : 'FSNode-deselected'

    return `FSNode-wrap ${selected}`
  }

  getDepthSize(depth = this.depth) {
    let padding = 38 * depth

    if (!this.state.node.children) {
      padding += 14
    }

    return padding + 'px'
  }

  getWrapStyle() {
    const translateX = this.getDepthSize(this.depth - 1)

    return {
      transform: `translateX(-${translateX})`,
      width: `calc(100% + ${translateX})`,
    }
  }

  getNodeStyle() {
    return {
      paddingLeft: this.getDepthSize(this.depth),
      zIndex: this.depth,
    }
  }

  getIcon() {
    const { node } = this.state

    if (!node.children) {
      switch (node.mode) {
        case 'a': return (
          <span onClick={this.toggleSelection}>
            <span className='FSNode-mode FSNode-mode-a'>A</span>
            <Icons.File />
          </span>
        )
        case 'd': return (
          <span onClick={this.toggleSelection}>
            <span className='FSNode-mode FSNode-mode-d'>D</span>
            <Icons.File />
          </span>
        )
        case 'm': return (
          <span onClick={this.toggleSelection}>
            <span className='FSNode-mode FSNode-mode-m'>M</span>
            <Icons.File />
          </span>
        )
        default: return <Icons.File onClick={this.toggleSelection} />
      }
    }

    return node.collapsed ? (
      <span>
        <Icons.CaretRight />
        <Icons.Folder />
      </span>
    ) : (
      <span>
        <Icons.CaretDown />
        <Icons.FolderOpen />
      </span>
    )
  }

  collapse() {
    if (this.state.node.collapsed) return

    this.setState({
      node: Object.assign(this.state.node, {
        collapsed: true
      })
    }, () => {
      if (typeof this.props.onCollapse === 'function') {
        this.props.onCollapse(this.state.node, this)
      }
    })
  }

  expand() {
    if (!this.state.node.collapsed) return

    this.setState({
      node: Object.assign(this.state.node, {
        collapsed: false
      })
    }, () => {
      if (typeof this.props.onExpand === 'function') {
        this.props.onExpand(this.state.node, this)
      }
    })
  }

  toggleCollapse = () => {
    if (!this.state.node.children) return

    return this.state.node.collapsed ? this.expand() : this.collapse()
  }

  onSelect = (node, component) => {
    if (typeof this.props.onSelect === 'function') {
      this.props.onSelect(node, component);
    }
  }

  onDeselect = (node, component) => {
    if (typeof this.props.onDeselect === 'function') {
      this.props.onDeselect(node, component);
    }
  }
}

exports.FSNode = FSNode
