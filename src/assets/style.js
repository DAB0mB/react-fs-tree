import { LESS_VARIABLES } from './lessVariables';


const styles = props => (
    `
    /*
    * TREE
    */
    
    .react-em-tree .rfst-icon {
        display: inline-block;
        font-size: inherit;
        height: 16px;
        overflow: visible;
        vertical-align: -2px;
        margin-right: 7px;
    }
    
    .react-em-tree .rfst-icon-file {
        width: 18px;
    }
    
    .react-em-tree .rfst-icon-folder {
        width: 18px;
    }
    
    .react-em-tree .rfst-icon-folder-open {
        width: 18px;
    }
    
    .react-em-tree .rfst-icon-caret-right {
        width: 6px;
    }
    
    .react-em-tree .rfst-icon-caret-down {
        width: 10px;
    }
    
    .react-em-tree .FSRoot {
        font-family: "Source Sans Pro", Helvetica, Arial, sans-serif;
        font-size: 14px;
        width: 100%;
        overflow: auto;
        height: 150px;
        border: 1px solid ${LESS_VARIABLES['border-color']}; /*TODO*/
        margin-left: 0;
        padding: 0 10px;
    }
    
    .react-em-tree .FSBranch-node-list {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }
    
    .react-em-tree .FSNode {
        width: 100%;
        min-height: 20px;
        display: inline-block;
    }
    
    .react-em-tree .FSNode-wrap {
        height: 100%;
        border-top: 1px solid #efefef;
    }
    
    .react-em-tree .FSNode-wrap > .FSNode-node > .FSNode-descriptor:hover {
        background-color: #0F56BC;
    }

    .react-em-tree .FSNode-wrap > .FSNode-node > .FSNode-descriptor:hover .FSNode-text,
    .react-em-tree .FSNode-wrap > .FSNode-node > .FSNode-descriptor:hover .FSNode-icon,
    .react-em-tree .FSNode-wrap > .FSNode-node > .FSNode-descriptor:hover .FSNode-icon .branch-status,
    .react-em-tree .FSNode-wrap > .FSNode-node > .FSNode-descriptor:hover .node-check-icon,
    .react-em-tree .FSNode-wrap.FSNode-selected > .FSNode-node > .FSNode-descriptor:hover .FSNode-text,
    .react-em-tree .FSNode-wrap.FSNode-selected > .FSNode-node > .FSNode-descriptor:hover .FSNode-icon .branch-status,
    .react-em-tree .FSNode-wrap.FSNode-selected > .FSNode-node > .FSNode-descriptor:hover node-check-icon, 
    .react-em-tree .FSNode-wrap.FSNode-selected > .FSNode-node > .FSNode-descriptor:hover .FSNode-icon {
        color: #fff;
        fill: #fff;
    }

    .react-em-tree .FSNode-wrap.FSNode-selected {
        color: white;
        background-color: transparent;
    }
    
    .react-em-tree .FSNode-wrap.FSNode-selected > .FSNode-node > .FSNode-descriptor {
        color: #0F56BC;
    }

    .react-em-tree .FSNode-wrap.FSNode-selected > .FSNode-node > .FSNode-descriptor .FSNode-text {
        color: #0F56BC;
        font-weight: bold;
    }
    
    .react-em-tree .FSNode-wrap.FSNode-deselected {
        color: #777777;
    }
    
    .react-em-tree .FSNode-node {
        user-select: none;
        cursor: default;
    }
    
    .react-em-tree .FSNode-descriptor {
        white-space: nowrap;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        padding: 3px 0;
    }

    .react-em-tree .FSNode-descriptor-container {
        display: flex;
        flex-grow: 1;
    }
    
    .react-em-tree .FSNode-icon {
        cursor: ${props.noninteractive? 'default' : "pointer"}
        display: inline-block;
        text-align: right;
        line-height: 20px;
        height: 100%;
        user-select: none;
        font-weight: bold;
        transform: translateY(2.5px);
    }

    .react-em-tree .branch-status {
        margin-right: 10px;
        cursor: pointer;
        fill: #505050;
    }

    .react-em-tree .node-check-icon {
        color: #0F56BC;
        margin-right: 10px;
    }

    .react-em-tree .FSNode-mode {
        display: inline-block;
        width: 18px;
        height: 18px;
        line-height: 18px;
        text-align: center;
        font-weight: 800;
        margin-left: -26px;
        margin-right: -0.5px;
        color: #5b6f9d;
    }
    
    .react-em-tree .FSNode-mode.FSNode-mode-a {
        color: #356611;
    }
    
    .react-em-tree .FSNode-mode.FSNode-mode-d {
        color: #951b1b;
    }
    
    .react-em-tree .FSNode-wrap.FSNode-selected .FSNode-mode {
        color: white;
    }
    
    .react-em-tree .FSNode-text {
        cursor: ${props.noninteractive? 'default' : "pointer"}
        display: inline-block;
        line-height: 23px;
        height: 100%;
        user-select: none;
        text-overflow: ellipsis;
        color: ${LESS_VARIABLES['text-color']};
        font-weight: normal;
    }
    
    /*
    * NO RESULTS
    */
   .react-em-tree .no-results {
        width: 100%;
        overflow: scroll;
        height: 180px;
        border: 1px solid ${LESS_VARIABLES['emgray-darker']};
        margin-left: 0;
    }
    
    .react-em-tree .no-results p {
        padding: 20px;
        margin: 0;
    }

    `
)

export default styles;