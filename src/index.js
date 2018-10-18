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

      .FSTree-node-list {
        margin: 0;
        padding: 0;
        margin-top: 15px;
        list-style-type: none;
      }

      .FSTree-node-list-item {
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
        color: white;
        background-color: #4c84ff;
      }

      .FSNode-wrap.FSNode-deselected {
        color: #5b6f9d;
      }

      .FSNode-node {
        user-select: none;
        cursor: default;
        transform: translateY(-2px);
      }

      .FSNode-descriptor {
        cursor: pointer;
        display: inline-block;
        white-space: nowrap;
      }

      .FSNode-icon {
        display: inline-block;
        text-align: right;
        line-height: 20px;
        width: 38px;
        height: 100%;
        user-select: none;
        font-weight: bold;
        transform: translateY(1px);
      }

      .FSNode-mode {
        transform: translateY(-0.5px);
        display: inline-block;
        width: 18px;
        height: 18px;
        line-height: 18px;
        text-align: center;
        font-weight: 800;
        margin-left: -26px;
        margin-right: 5px;
        border: 1px solid #5b6f9d;
        border-radius: 3px;
        background-color: white;
        color: #5b6f9d;
      }

      .FSNode-mode.FSNode-mode-a {
        color: #356611;
      }

      .FSNode-mode.FSNode-mode-d {
        color: #951b1b;
      }

      .FSNode-text {
        font-weight: bold;
        display: inline-block;
        line-height: 23px;
        height: 100%;
        user-select: none;
        text-overflow: ellipsis;
      }
    ` }} />
    <module.exports.FSTree {...props} />
  </div>
)

export default FSRoot
