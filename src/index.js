import PropTypes from 'prop-types'
import React from 'react'

import './fs-branch'
import './fs-node'
import { exports } from './module'
import Shapes from './shapes'
import styles from './assets/style';

export const FSBranch = exports.FSBranch
export const FSNode = exports.FSNode

export class FSRoot extends React.Component {
  static propTypes = {
    childNodes: PropTypes.arrayOf(PropTypes.shape(Shapes.node)),
    noninteractive: PropTypes.bool,
    onSelect: PropTypes.func,
    onDeselect: PropTypes.func,
    onClose: PropTypes.func,
    onOpen: PropTypes.func,
    hasChildNodes: PropTypes.bool
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
    return (
      <div className="FSRoot">
        <style dangerouslySetInnerHTML={{ __html: styles(this.props)}} />
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
