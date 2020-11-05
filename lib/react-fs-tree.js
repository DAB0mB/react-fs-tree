module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSBranch", function() { return FSBranch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSNode", function() { return FSNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSRoot", function() { return FSRoot; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fs_branch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _fs_node__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _shapes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _assets_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;










const FSBranch = _module__WEBPACK_IMPORTED_MODULE_4__["exports"].FSBranch;
const FSNode = _module__WEBPACK_IMPORTED_MODULE_4__["exports"].FSNode;

let FSRoot = (_temp = _class = class FSRoot extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {

  get noninteractive() {
    return this.props.noninteractive;
  }

  get childNodes() {
    return this._childNodes;
  }

  get path() {
    return this._path;
  }

  constructor(props) {
    super(props);

    this._path = '~';
    this._childNodes = [];
  }

  componentWillUpdate() {
    this._childNodes = [];
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
      'div',
      { className: 'react-em-tree' },
      react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
        'div',
        { className: 'FSRoot' },
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('style', { dangerouslySetInnerHTML: { __html: Object(_assets_style__WEBPACK_IMPORTED_MODULE_6__["default"])(this.props) } }),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FSBranch, _extends({}, this.props, {
          ref: ref => ref && (this._childNodes = ref._childNodes),
          parentNode: this,
          root: this
        }))
      )
    );
  }
}, _class.propTypes = {
  childNodes: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape(_shapes__WEBPACK_IMPORTED_MODULE_5__["default"].node)),
  noninteractive: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  onSelect: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onDeselect: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onOpen: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  hasChildNodes: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  nodesCanToggle: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool
}, _class.defaultProps = {
  noninteractive: false,
  onSelect: () => {},
  onDeselect: () => {},
  onClose: () => {},
  onOpen: () => {}
}, _temp);

/* harmony default export */ __webpack_exports__["default"] = (FSRoot);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _shapes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
var _class, _temp;







let FSBranch = (_temp = _class = class FSBranch extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {

  get depth() {
    return this.props.depth;
  }

  get parentNode() {
    return this.props.parentNode;
  }

  get root() {
    return this.props.root;
  }

  get noninteractive() {
    return this.props.noninteractive;
  }

  get childNodes() {
    return [...this._childNodes];
  }

  get path() {
    return this._path;
  }

  constructor(props) {
    super(props);

    this._path = props.parentNode._path + '/';
    this._childNodes = [];
  }

  componentWillUpdate() {
    this._childNodes = [];
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
      'div',
      { className: 'FSBranch' },
      react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
        'ul',
        { className: 'FSBranch-node-list' },
        this.props.childNodes.map((node, i) => {
          const hasChildNodes = typeof node.hasChildNodes === "undefined" ? true : node.hasChildNodes;

          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            'li',
            { key: `${i}_${node.name}`, className: 'FSBranch-node-list-item' },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_module__WEBPACK_IMPORTED_MODULE_2__["exports"].FSNode, {
              ref: ref => ref && this._childNodes.push(ref),
              node: node,
              parentNode: this.props.parentNode,
              root: this.props.root,
              noninteractive: this.props.noninteractive,
              hasChildNodes: hasChildNodes,
              depth: this.props.depth + 1,
              onSelect: this.props.onSelect,
              onDeselect: this.props.onDeselect,
              onSelectChange: this.props.onSelectChange,
              onClose: this.props.onClose,
              onOpen: this.props.onOpen,
              onOpenChange: this.props.onOpenChange,
              nodesCanToggle: this.props.nodesCanToggle,
              index: i
            })
          );
        })
      )
    );
  }
}, _class.propTypes = {
  childNodes: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(_shapes__WEBPACK_IMPORTED_MODULE_3__["default"].Node).isRequired,
  parentNode: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.instanceOf(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component).isRequired,
  root: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.instanceOf(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component).isRequired,
  depth: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  noninteractive: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  onSelect: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onDeselect: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onSelectChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onOpen: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onOpenChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  hasChildNodes: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  nodesCanToggle: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool
}, _class.defaultProps = {
  depth: 0,
  noninteractive: false,
  onSelect: () => {},
  onDeselect: () => {},
  onSelectChange: () => {},
  onClose: () => {},
  onOpen: () => {},
  onOpenChange: () => {}
}, _temp);


_module__WEBPACK_IMPORTED_MODULE_2__["exports"].FSBranch = FSBranch;

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exports", function() { return exports; });
const exports = {};

/* harmony default export */ __webpack_exports__["default"] = ({
  exports
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Node", function() { return Node; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);


const Node = (() => {
  const shape = {
    name: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
    opened: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.boolean,
    selected: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.boolean,
    mode: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['a', 'd', 'm'])
  };

  shape.childNodes = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape(shape));

  return prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape(shape);
})();

/* harmony default export */ __webpack_exports__["default"] = ({
  Node
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _shapes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;








let FSNode = (_temp = _class = class FSNode extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {

  get depth() {
    return this.props.depth;
  }

  get virtual() {
    return this.props.virtual;
  }

  get parentNode() {
    return this.props.parentNode;
  }

  get root() {
    return this.props.root;
  }

  get noninteractive() {
    return this.props.noninteractive;
  }

  get childNodes() {
    return [...this._childNodes];
  }

  get branchedOut() {
    return !!this.props.node.childNodes;
  }

  get path() {
    return this._path;
  }

  get name() {
    return this.props.node.name;
  }

  get opened() {
    return this.state.opened;
  }

  get selected() {
    return this.state.selected;
  }

  get physicalPath() {
    return this._physicalPath;
  }

  get subPath() {
    return this._subPath;
  }

  constructor(props) {
    super(props);

    this.handleSelection = e => {
      e.stopPropagation();
      this.toggleSelect();
    };

    this.handleToggleOpen = e => {
      e.stopPropagation();
      this.toggleOpen();
    };

    this._getWrapClass = () => {
      const selected = this.state.selected ? 'FSNode-selected' : 'FSNode-deselected';

      return `FSNode-wrap ${selected}`;
    };

    this._getDepthSize = (depth = this.depth) => {
      const baseSpacing = 16;
      const depthSize = 25;
      const padding = baseSpacing + depthSize * depth;
      return this.props.hasChildNodes && padding - depthSize || padding;
    };

    this._getWrapStyle = i => {
      const translateX = this._getDepthSize(this.depth - 1);
      const firstAtAll = this.props.depth === 1 && i === 0;

      const styles = {
        transform: `translateX(-${translateX})`,
        width: `calc(100% + ${translateX})`
      };

      return firstAtAll && _extends({}, styles, { border: 'none' }) || styles;
    };

    this._getNodeStyle = () => {
      return {
        paddingLeft: this._getDepthSize(this.depth),
        zIndex: this.depth
      };
    };

    this._getIcon = () => {
      const getIconType = () => {
        if (this._iconComponent) {
          return this._iconComponent;
        }
        const type = this._type.toLowerCase().charAt(0).toUpperCase() + this._type.toLowerCase().slice(1);
        const IconType = _icons__WEBPACK_IMPORTED_MODULE_2__["default"][type];
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(IconType, null);
      };
      const Caret = !this.state.opened ? _icons__WEBPACK_IMPORTED_MODULE_2__["default"].CaretClosed : _icons__WEBPACK_IMPORTED_MODULE_2__["default"].CaretOpen;

      if (!this.props.node.childNodes) {
        switch (this.state.mode) {
          case 'a':
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'span',
              { onClick: !this.props.noninteractive && (() => this.toggleSelect()) },
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                'span',
                { className: 'FSNode-mode FSNode-mode-a' },
                'A'
              ),
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_icons__WEBPACK_IMPORTED_MODULE_2__["default"].File, null)
            );
          case 'd':
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'span',
              { onClick: !this.props.noninteractive && (() => this.toggleSelect()) },
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                'span',
                { className: 'FSNode-mode FSNode-mode-d' },
                'D'
              ),
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_icons__WEBPACK_IMPORTED_MODULE_2__["default"].File, null)
            );
          case 'm':
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'span',
              { onClick: !this.props.noninteractive && (() => this.toggleSelect()) },
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                'span',
                { className: 'FSNode-mode FSNode-mode-m' },
                'M'
              ),
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_icons__WEBPACK_IMPORTED_MODULE_2__["default"].File, null)
            );
          default:
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_icons__WEBPACK_IMPORTED_MODULE_2__["default"].File, { onClick: !this.props.noninteractive && (() => this.toggleSelect()) });
        }
      } else if (!this.props.hasChildNodes) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          'span',
          null,
          getIconType()
        );
      }
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
        'span',
        null,
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Caret, null),
        getIconType()
      );
    };

    this._getAnchestorWorkFolder = anchestor => {
      if (anchestor._type === 'workFolder') {
        return anchestor;
      }

      return this._getAnchestorWorkFolder(anchestor.props.parentNode);
    };

    this._getWorkFolderPath = () => {
      return this.props.parentNode._path + '/' + this.props.node.name;
    };

    this._getSubWorkFodlerPath = () => {
      const anchestor = this._getAnchestorWorkFolder(this.props.parentNode);
      return anchestor.path;
    };

    this._getNodePath = () => {
      switch (this._type) {
        case 'workFolder':
          return this._getWorkFolderPath();
        case 'subWorkFolder':
          return this._getSubWorkFodlerPath();
        default:
          return '/';
      }
    };

    this._getSubPath = () => {
      return this._physicalPath.substr(this._path.length, this._physicalPath.length);
    };

    this._getNodeSubPath = () => {
      if (this._type === 'subWorkFolder') {
        return this._getSubPath();
      }
      return null;
    };

    this._composePhysicalPath = (node, path) => {
      const _physicalPath = `${node.props.node.name}${path && '/' + path}`;
      if (node.props.parentNode._type === 'workFolder') {
        return `${this._path}/${_physicalPath}`;
      }
      return this._composePhysicalPath(node.props.parentNode, _physicalPath);
    };

    this._getPhysicalPath = () => {
      switch (this._type) {
        case 'workFolder':
          return this._path;
        case 'subWorkFolder':
          return this._composePhysicalPath(this, '');
        default:
          return '/';
      }
    };

    this._type = props.node.type;
    this._iconComponent = props.node.IconComponent;
    this._path = this._getNodePath();
    this._physicalPath = this._getPhysicalPath();
    this._subPath = this._getNodeSubPath();
    this._childNodes = [];

    this.state = {
      node: props.node
    };

    if (props.virtual) {
      this._createVirtualChildNodes();
    }
  }

  componentDidMount() {
    this._mounted = true;
  }

  componentWillUpdate() {
    this._childNodes = [];
  }

  componentDidUpdate() {
    if (!this.state.opened) {
      this._createVirtualChildNodes();
    }
  }

  componentWillUnmount() {
    this._mounted = false;
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
      'div',
      { className: 'FSNode' },
      react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
        'div',
        { className: this._getWrapClass(), style: this._getWrapStyle(this.props.index) },
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          'div',
          { className: 'FSNode-node' },
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            'div',
            { className: 'FSNode-descriptor', onClick: !this.props.noninteractive ? this.handleSelection : undefined },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'div',
              { className: 'FSNode-descriptor-container', style: this._getNodeStyle() },
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                'div',
                { className: 'FSNode-icon', onClick: this.props.hasChildNodes ? this.handleToggleOpen : undefined },
                this._getIcon()
              ),
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                'div',
                { className: 'FSNode-text' },
                this.props.node.name
              )
            ),
            this.state.selected && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_icons__WEBPACK_IMPORTED_MODULE_2__["default"].Check, null)
          ),
          this.props.node.childNodes && this.state.opened && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_module__WEBPACK_IMPORTED_MODULE_3__["exports"].FSBranch, {
            ref: ref => ref && (this._childNodes = ref._childNodes),
            childNodes: this.props.node.childNodes,
            parentNode: this,
            root: this.props.root,
            depth: this.props.depth,
            noninteractive: this.props.noninteractive,
            onSelect: this.props.onSelect,
            onDeselect: this.props.onDeselect,
            onSelectChange: this.props.onSelectChange,
            onOpen: this.props.onOpen,
            onClose: this.props.onClose,
            onOpenChange: this.props.onOpenChange,
            nodesCanToggle: this.props.nodesCanToggle
          })
        )
      )
    );
  }

  select(onSelect = () => {}) {
    const callback = (resolve = Promise.resolve.bind(Promise)) => {
      this.props.onSelect(this);
      this.props.onSelectChange(this);
      onSelect(this);

      return resolve(this);
    };

    if (this.state.selected) return callback();

    if (!this._mounted) {
      const node = this.state;
      node.selected = true;

      return callback();
    }

    return new Promise(resolve => {
      if (this._mounted) {
        this.setState({
          node: Object.assign(this.state, {
            selected: true
          })
        }, () => {
          callback(resolve);
        });
        return;
      }
      callback(resolve);
    });
  }

  deselect(onDeselect = () => {}) {
    const callback = (resolve = Promise.resolve.bind(Promise)) => {
      this.props.onDeselect(this);
      this.props.onSelectChange(this);
      onDeselect(this);

      return resolve(this);
    };

    if (!this.state.selected) return callback();

    if (!this._mounted) {
      const node = this.state;
      node.selected = false;

      return callback();
    }

    return new Promise(resolve => {
      if (this._mounted) {
        this.setState({
          node: Object.assign(this.state, {
            selected: false
          })
        }, () => {
          callback(resolve);
        });
        return;
      }
      callback(resolve);
    });
  }

  toggleSelect(onToggle) {
    if (this.props.nodesCanToggle) {
      return this.state.selected ? this.deselect(onToggle) : this.select(onToggle);
    }
    this.select(onToggle);
  }

  close(onClose = () => {}) {
    const callback = (resolve = Promise.resolve.bind(Promise)) => {
      this.props.onClose(this);
      this.props.onOpenChange(this);
      onClose(this);

      return resolve(this);
    };

    if (!this.props.node.childNodes) return callback();
    if (!this.state.opened) return callback();

    return new Promise(resolve => {
      if (this._mounted) {
        this.setState({
          node: Object.assign(this.state, {
            opened: false
          })
        }, () => {
          callback(resolve);
        });
        return;
      }
      callback(resolve);
    });
  }

  open(onOpen = () => {}) {
    const callback = (resolve = Promise.resolve.bind(Promise)) => {
      this.props.onOpen(this);
      this.props.onOpenChange(this);
      onOpen(this);

      return resolve(this);
    };

    if (!this.props.node.childNodes) return callback();
    if (this.state.opened) return callback();

    return new Promise(resolve => {
      if (this._mounted) {
        this.setState({
          node: Object.assign(this.state, {
            opened: true
          })
        }, () => {
          callback(resolve);
        });
        return;
      }
      callback(resolve);
    });
  }

  toggleOpen(onToggle) {
    return this.state.opened ? this.close(onToggle) : this.open(onToggle);
  }

  _createVirtualChildNodes() {
    if (!this.props.node.childNodes) return;

    this.props.node.childNodes.forEach(node => {
      const ref = new FSNode({
        node,
        virtual: true,
        parentNode: this,
        root: this.props.root,
        depth: this.props.depth + 1,
        noninteractive: this.props.noninteractive,
        onSelect: this.props.onSelect,
        onDeselect: this.props.onDeselect,
        onSelectChange: this.props.onSelectChange,
        onOpen: this.props.onOpen,
        onClose: this.props.onClose,
        onOpenChange: this.props.onOpenChange
      });

      this._childNodes.push(ref);
    });
  }

}, _class.propTypes = {
  node: _shapes__WEBPACK_IMPORTED_MODULE_4__["default"].Node.isRequired,
  parentNode: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.instanceOf(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component).isRequired,
  root: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.instanceOf(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component).isRequired,
  depth: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  virtual: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  noninteractive: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  onSelect: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onDeselect: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onSelectChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onOpen: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onOpenChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  hasChildNodes: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  nodesCanToggle: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  index: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number
}, _class.defaultProps = {
  depth: 0,
  virtual: false,
  noninteractive: false,
  onSelect: () => {},
  onDeselect: () => {},
  onSelectChange: () => {},
  onClose: () => {},
  onOpen: () => {},
  onOpenChange: () => {},
  nodesCanToggle: true
}, _temp);


_module__WEBPACK_IMPORTED_MODULE_3__["exports"].FSNode = FSNode;

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Folder", function() { return Folder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderOpen", function() { return FolderOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "File", function() { return File; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaretClosed", function() { return CaretClosed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaretOpen", function() { return CaretOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Workfolder", function() { return Workfolder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subworkfolder", function() { return Subworkfolder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Check", function() { return Check; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



const Folder = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
  "svg",
  _extends({}, props, { "aria-hidden": "true", "data-prefix": "fas", "data-icon": "folder", className: "rfst-icon rfst-icon-folder", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }),
  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { fill: "currentColor", d: "M464 128H272l-64-64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48z" })
);

const FolderOpen = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
  "svg",
  _extends({}, props, { "aria-hidden": "true", "data-prefix": "fas", "data-icon": "folder-open", className: "rfst-icon rfst-icon-folder-open", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512" }),
  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { fill: "currentColor", d: "M572.694 292.093L500.27 416.248A63.997 63.997 0 0 1 444.989 448H45.025c-18.523 0-30.064-20.093-20.731-36.093l72.424-124.155A64 64 0 0 1 152 256h399.964c18.523 0 30.064 20.093 20.73 36.093zM152 224h328v-48c0-26.51-21.49-48-48-48H272l-64-64H48C21.49 64 0 85.49 0 112v278.046l69.077-118.418C86.214 242.25 117.989 224 152 224z" })
);

const File = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
  "svg",
  _extends({}, props, { "aria-hidden": "true", "data-prefix": "fas", "data-icon": "file", className: "rfst-icon rfst-icon-file", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512" }),
  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { fill: "currentColor", d: "M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm160-14.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z" })
);

const CaretClosed = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
  "svg",
  _extends({}, props, { width: '1em', height: '1em', className: 'branch-status', viewBox: "0 0 285.3 499.8" }),
  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M7.2 59.65L195 249.85 7.2 440.05a44.94 44.94 0 000 48.8c14.4 14.6 33.7 14.6 48.1 0l226.4-229.3c4.8-4.9 4.8-14.6 0-19.5L55.3 10.95c-14.4-14.6-33.7-14.6-48.1 0a44.78 44.78 0 000 48.7z" })
);

const CaretOpen = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
  "svg",
  _extends({}, props, { width: '1em', height: '1em', className: 'branch-status', viewBox: "0 0 512 512" }),
  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M65.8 391.5L256 203.6l190.2 187.8c14.8 9.6 33.9 9.6 48.8 0 14.6-14.4 14.6-33.7 0-48.1L265.7 116.9c-4.9-4.8-14.6-4.8-19.5 0L17.1 343.4c-14.6 14.4-14.6 33.7 0 48.1 14.8 9.6 33.9 9.6 48.7 0z" })
);

const Workfolder = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
  "svg",
  _extends({}, props, { "aria-hidden": "true", "data-prefix": "fas", "data-icon": "folder", className: "rfst-icon rfst-icon-folder", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 64 64" }),
  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    "g",
    null,
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M64,20 L62.689,33.106 C61.456,31.485 59.94,30.103 58.454,28.719 L58.3,28.583 C57.428,27.858 56.348,27.427 55.161,27.427 C54.192,27.516 53.301,27.532 52.467,28.243 C52.263,27.121 51.699,26.091 50.804,25.373 C49.922,24.661 48.843,24.286 47.718,24.286 L42.557,24.286 C40.277,24.286 38.4,25.748 37.842,27.959 L37.78,28.239 C36.988,27.719 36.063,27.428 35.117,27.427 C33.207,27.417 32.191,28.185 30.108,30.242 C28.838,31.496 27.953,32.463 27.388,33.245 C26.777,34.129 26.421,35.04 26.421,36.122 C26.505,37.036 26.597,37.984 27.223,38.736 L27.193,38.741 C25.95,38.967 24.927,39.665 24.226,40.632 C23.624,41.464 23.281,42.455 23.281,43.513 L23.281,48.677 C23.271,49.74 23.626,50.789 24.29,51.656 C25.04,52.635 26.12,53.279 27.342,53.468 L27.366,53.472 C26.867,54.285 26.522,55.196 26.538,56.164 C26.539,57.18 26.842,58.167 27.438,59.009 C28.197,59.96 27.903,59.653 28.24,60 L4,60 L0,20 L64,20 z", fill: "currentColor" }),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M30,8 L32,12 L58,12 L60,16 L4,16 L8,8 L30,8 z", fill: "currentColor" }),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M27.281,48.674 L27.281,43.513 Q27.281,43.234 27.466,42.979 Q27.651,42.724 27.908,42.677 L32.234,42.026 Q32.559,40.955 33.14,39.888 Q32.211,38.562 30.653,36.679 Q30.421,36.401 30.421,36.122 Q30.421,35.89 30.63,35.588 Q31.234,34.752 32.919,33.088 Q34.604,31.424 35.117,31.427 Q35.419,31.427 35.721,31.658 L38.929,34.145 Q39.953,33.612 41.047,33.263 Q41.419,30.101 41.721,28.937 Q41.885,28.286 42.557,28.286 L47.719,28.286 Q48.044,28.286 48.289,28.484 Q48.534,28.682 48.557,28.984 L49.208,33.263 Q50.349,33.635 51.302,34.122 L54.604,31.635 Q54.812,31.427 55.161,31.427 Q55.463,31.427 55.742,31.658 Q58.742,34.427 59.578,35.612 Q59.742,35.797 59.742,36.122 Q59.742,36.401 59.557,36.656 Q59.208,37.145 58.372,38.203 Q57.536,39.26 57.117,39.841 Q57.721,41.002 58.07,42.12 L62.325,42.771 Q62.628,42.817 62.815,43.062 Q63.003,43.307 63,43.609 L63,48.771 Q63,49.049 62.815,49.305 Q62.63,49.56 62.349,49.607 L58.047,50.258 Q57.604,51.513 57.141,52.375 Q57.956,53.536 59.628,55.583 Q59.859,55.862 59.859,56.164 Q59.859,56.466 59.651,56.698 Q59.023,57.557 57.349,59.208 Q55.674,60.859 55.164,60.859 Q54.885,60.859 54.56,60.651 L51.351,58.141 Q50.328,58.674 49.234,59.023 Q48.862,62.185 48.56,63.349 Q48.396,64 47.724,64 L42.562,64 Q42.237,64 41.992,63.802 Q41.747,63.604 41.724,63.302 L41.073,59.023 Q39.932,58.651 38.979,58.164 L35.7,60.651 Q35.468,60.859 35.119,60.859 Q34.794,60.859 34.539,60.604 Q31.609,57.953 30.703,56.698 Q30.539,56.466 30.539,56.164 Q30.539,55.885 30.724,55.63 Q31.072,55.141 31.908,54.083 Q32.744,53.026 33.164,52.445 Q32.536,51.284 32.211,50.143 L27.955,49.515 Q27.653,49.469 27.466,49.224 Q27.278,48.979 27.281,48.677 z M39.185,46.14 Q39.185,48.604 40.929,50.349 Q42.674,52.094 45.138,52.094 Q47.601,52.094 49.346,50.349 Q51.091,48.604 51.091,46.14 Q51.091,43.677 49.346,41.932 Q47.601,40.187 45.138,40.187 Q42.674,40.187 40.929,41.932 Q39.185,43.677 39.185,46.14 z", fill: "currentColor" })
  )
);

const Subworkfolder = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
  "svg",
  _extends({}, props, { "aria-hidden": "true", "data-prefix": "fas", "data-icon": "sub-folder", className: "rfst-icon rfst-icon-sub-folder", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 512" }),
  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { fill: "currentColor", d: "M497.941 225.941L286.059 14.059A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v204.118a48 48 0 0 0 14.059 33.941l211.882 211.882c18.744 18.745 49.136 18.746 67.882 0l204.118-204.118c18.745-18.745 18.745-49.137 0-67.882zM112 160c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48zm513.941 133.823L421.823 497.941c-18.745 18.745-49.137 18.745-67.882 0l-.36-.36L527.64 323.522c16.999-16.999 26.36-39.6 26.36-63.64s-9.362-46.641-26.36-63.64L331.397 0h48.721a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882z" })
);

const Check = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
  "svg",
  _extends({}, props, { viewBox: "0 0 512 512", width: '1em', height: '1em', className: 'node-check-icon' }),
  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { fill: "currentColor", d: "M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" })
);

/* harmony default export */ __webpack_exports__["default"] = ({
  Folder,
  FolderOpen,
  File,
  CaretClosed,
  CaretOpen,
  Workfolder,
  Subworkfolder,
  Check
});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lessVariables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);


const styles = props => `
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
        border: 1px solid ${_lessVariables__WEBPACK_IMPORTED_MODULE_0__["LESS_VARIABLES"]['border-color']}; /*TODO*/
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
        cursor: ${props.noninteractive ? 'default' : "pointer"}
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
        cursor: ${props.noninteractive ? 'default' : "pointer"}
        display: inline-block;
        line-height: 23px;
        height: 100%;
        user-select: none;
        text-overflow: ellipsis;
        color: ${_lessVariables__WEBPACK_IMPORTED_MODULE_0__["LESS_VARIABLES"]['text-color']};
        font-weight: normal;
    }
    
    /*
    * NO RESULTS
    */
   .react-em-tree .no-results {
        width: 100%;
        overflow: scroll;
        height: 180px;
        border: 1px solid ${_lessVariables__WEBPACK_IMPORTED_MODULE_0__["LESS_VARIABLES"]['emgray-darker']};
        margin-left: 0;
    }
    
    .react-em-tree .no-results p {
        padding: 20px;
        margin: 0;
    }

    `;

/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LESS_VARIABLES", function() { return LESS_VARIABLES; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * A collection of style variables
 * Please insert new values on alphabetical order.
 */

const colors = {
    'border-color': '#e0e0e0',
    'brand-primary': '#0F56BC',
    'brand-primary-lightest': '#F1F8FF',
    'emgray-darker': '#ccc',
    'emgray-light': 'rgba(153, 153, 153, .5)',
    'gray-light': '#777',
    'gray-bold': '#adadad',
    'greyish-brown': '#505050',
    'text-color': '#505050',
    silver: '#c0c0c0',
    'input-bg': '#ffffff',
    'input-border-focus': '#0F56BC',
    'brand-danger': '#f44336'
};

const fontSizeBase = 14;
const fontSansSerif = '"Source Sans Pro", Helvetica, Arial, sans-serif';
const fonts = {
    'font-family-sans-serif': fontSansSerif,
    'font-family-base': fontSansSerif,
    'font-size-base': `${fontSizeBase}px`,
    'font-size-large': `${fontSizeBase * 1.25}px`,
    'font-size-small': `${fontSizeBase * 0.85}px`
};

const LESS_VARIABLES = _extends({}, colors, fonts);

/***/ })
/******/ ]);
//# sourceMappingURL=react-fs-tree.js.map