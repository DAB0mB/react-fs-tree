import React from 'react'

import './fs-node'
import './fs-tree'
import module from './module'

const FSRoot = (props) => (
  <div className="FSRoot">
    <style dangerouslySetInnerHTML={{ __html: `
      .rfst-icon {
        display: inline-block;
        font-size: inherit;
        height: 1em;
        overflow: visible;
        vertical-align: -.125em;
        margin-right: 5px;
      }

      .rfst-icon-file {
        width: 1.125em;
      }

      .rfst-icon-folder {
        width: 1.125em;
      }

      .rfst-icon-folder-open {
        width: 1.125em;
      }

      .rfst-icon-caret-right {
        width: 0.375em;
      }

      .rfst-icon-caret-down {
        width: 0.625em;
      }

      .FSTree-node-list {
        margin: 0;
        padding: 0;
        margin-top: 15px;
        list-style-type: none;
      }

      .FSTree-node-list-item {
        margin-bottom: 15px;
      }
    ` }} />
    <module.exports.FSTree {...props} />
  </div>
)

export default FSRoot
