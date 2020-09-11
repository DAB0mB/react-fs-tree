import PropTypes from 'prop-types'
import React from 'react'

import './fs-branch'
import './fs-node'
import { exports } from './module'
import Shapes from './shapes'

export const FSBranch = exports.FSBranch
export const FSNode = exports.FSNode

export class FSRoot extends React.Component {
  static propTypes = {
    childNodes: PropTypes.arrayOf(Shapes.Node),
    theme: Shapes.Theme,
    noninteractive: PropTypes.bool,
    onSelect: PropTypes.func,
    onDeselect: PropTypes.func,
    onClose: PropTypes.func,
    onOpen: PropTypes.func,
  }

  static defaultProps = {
    noninteractive: false,
    onSelect: () => {},
    onDeselect: () => {},
    onClose: () => {},
    onOpen: () => {},
  }

  get noninteractive() {
    return this.props.noninteractive
  }

  get childNodes() {
    return this._childNodes
  }

  get path() {
    return this._path
  }

  constructor(props) {
    super(props)

    this._path = '~'
    this._childNodes = []
  }

  componentWillUpdate() {
    this._childNodes = []
  }

  render() {
    const {
      primary = '#5b6f9d',
      selectedBackground = '#4c84ff',
      selectedText = '#ffffff',
      modeA = '#356611',
      modeD = '#951b1b',
    } = this.props.theme || {}

    return (
      <div className="FSRoot">
        <style dangerouslySetInnerHTML={{ __html: `
          .rfst-icon {
            display: inline-block;
            font-size: inherit;
            height: 16px;
            overflow: visible;
            vertical-align: -2px;
            margin-right: 5px;
          }

          .rfst-icon-file {
            width: 18px;
          }

          .rfst-icon-folder {
            width: 18px;
          }

          .rfst-icon-folder-open {
            width: 18px;
          }

          .rfst-icon-caret-right {
            width: 6px;
          }

          .rfst-icon-caret-down {
            width: 10px;
          }

          .FSRoot {
            margin-left: -18px;
          }

          .FSBranch-node-list {
            margin: 0;
            padding: 0;
            margin-top: 15px;
            list-style-type: none;
          }

          .FSBranch-node-list-item {
            margin-bottom: 15px;
          }

          .FSNode {
            width: 100%;
            height: 20px;
            display: inline-block;
          }

          .FSNode-wrap {
            height: 100%;
          }

          .FSNode-wrap.FSNode-selected {
            color: ${selectedText};
            background-color: ${selectedBackground};
          }

          .FSNode-wrap.FSNode-deselected {
            color: ${primary};
          }

          .FSNode-node {
            user-select: none;
            cursor: default;
            height: 100%;
          }

          .FSNode-descriptor {
            display: flex;
            align-items: center;
            white-space: nowrap;
            height: 100%;
          }

          .FSNode-icon {
            cursor: ${this.props.noninteractive ? 'default' : 'pointer'};
            width: 38px;
            height: 100%;
            user-select: none;
            font-weight: bold;
          }

          .FSNode-icon-context {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-end;
          }

          .FSNode-mode {
            display: inline-block;
            width: 18px;
            height: 18px;
            text-align: center;
            font-weight: 800;
            color: ${primary};
          }

          .FSNode-mode.FSNode-mode-a {
            color: ${modeA};
          }

          .FSNode-mode.FSNode-mode-d {
            color: ${modeD};
          }

          .FSNode-wrap.FSNode-selected .FSNode-mode {
            color: ${selectedText};
          }

          .FSNode-text {
            cursor: ${this.props.noninteractive ? 'default' : 'pointer'};
            font-weight: bold;
            display: inline-block;
            height: 100%;
            user-select: none;
            text-overflow: ellipsis;
          }
        ` }} />
        <FSBranch
          {...this.props}
          ref={ref => ref && (this._childNodes = ref._childNodes)}
          parentNode={this}
          root={this}
        />
      </div>
    )
  }
}

export default FSRoot
