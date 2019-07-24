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
        margin-right: 5px;
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
        width: 100%;
        overflow: scroll;
        height: 180px;
        border: 1px solid ${LESS_VARIABLES['emgray-darker']}; /*TODO*/
        margin-left: 0;
    }
    
    .react-em-tree .FSBranch-node-list {
        margin: 0;
        padding: 0;
        margin-top: 5px;
        list-style-type: none;
    }
    
    .react-em-tree .FSBranch-node-list-item {
        margin-bottom: 5px;
    }
    
    .react-em-tree .FSNode {
        width: 100%;
        height: 20px;
        display: inline-block;
    }
    
    .react-em-tree .FSNode-wrap {
        height: 100%;
    }
    
    .react-em-tree .FSNode-wrap.FSNode-selected {
        color: white;
        background-color: transparent;
    }
    
    .react-em-tree .FSNode-wrap.FSNode-selected > .FSNode-node > .FSNode-descriptor {
        background-color: #beebff;
        border-radius: 2px;
        box-shadow: inset 0 0 1px #999;
        padding: 2px 6px;
    }
    
    .react-em-tree .FSNode-wrap.FSNode-deselected {
        color: #5b6f9d;
    }
    
    .react-em-tree .FSNode-node {
        user-select: none;
        cursor: default;
        transform: translateY(-2px);
    }
    
    .react-em-tree .FSNode-descriptor {
        white-space: nowrap;
        display: inline-flex;
        padding: 2px 6px;
    }
    
    .react-em-tree .FSNode-icon {
        cursor: ${props.noninteractive? 'default' : "pointer"}
        display: inline-block;
        text-align: right;
        line-height: 20px;
        width: 38px;
        height: 100%;
        user-select: none;
        font-weight: bold;
        transform: translateY(2.5px);
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