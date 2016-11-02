webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _jsx2 = __webpack_require__(1);
	
	var _jsx3 = _interopRequireDefault(_jsx2);
	
	var _react = __webpack_require__(58);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(90);
	
	var _redux = __webpack_require__(227);
	
	var _reactRedux = __webpack_require__(240);
	
	var _reduxSaga = __webpack_require__(249);
	
	var _reduxSaga2 = _interopRequireDefault(_reduxSaga);
	
	var _Options = __webpack_require__(261);
	
	var _Options2 = _interopRequireDefault(_Options);
	
	var _Options3 = __webpack_require__(405);
	
	var _Options4 = _interopRequireDefault(_Options3);
	
	var _optionsSagas = __webpack_require__(498);
	
	var _optionsSagas2 = _interopRequireDefault(_optionsSagas);
	
	__webpack_require__(504);
	
	__webpack_require__(511);
	
	__webpack_require__(513);
	
	var _blockList = __webpack_require__(263);
	
	var _blockList2 = _interopRequireDefault(_blockList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_blockList2.default.init().then(function () {
	  var sagaMiddleware = (0, _reduxSaga2.default)();
	  var store = (0, _redux.createStore)(_Options2.default, (0, _redux.applyMiddleware)(sagaMiddleware));
	  sagaMiddleware.run(_optionsSagas2.default);
	  (0, _reactDom.render)((0, _jsx3.default)(_reactRedux.Provider, {
	    store: store
	  }, void 0, (0, _jsx3.default)(_Options4.default, {})), document.getElementById('OptionsApp'));
	});

/***/ },

/***/ 261:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _update = __webpack_require__(262);
	
	var _update2 = _interopRequireDefault(_update);
	
	var _blockList = __webpack_require__(263);
	
	var _blockList2 = _interopRequireDefault(_blockList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function reducer() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? {
	    dailySites: _blockList2.default.fetchTodayStats(),
	    sites: [],
	    message: '',
	    modalID: null
	  } : arguments[0];
	  var action = arguments[1];
	
	  switch (action.type) {
	    case 'ADD_SITE_SUCCEEDED':
	      return (0, _update2.default)(state, {
	        message: { $set: action.message }
	      });
	    case 'ADD_SITE_FAILED':
	      return (0, _update2.default)(state, {
	        message: { $set: action.e }
	      });
	    case 'SITE_FETCH_UNSUCCESSFUL':
	      return (0, _update2.default)(state, {
	        message: { $set: action.e }
	      });
	    case 'SITE_FETCH_SUCCESSFUL':
	      return (0, _update2.default)(state, {
	        sites: { $set: action.sites }
	      });
	    case 'OPEN_MODAL':
	      return (0, _update2.default)(state, {
	        modalID: { $set: action.modalID }
	      });
	    default:
	      return state;
	  }
	}
	
	exports.default = reducer;

/***/ },

/***/ 405:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _keys = __webpack_require__(406);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _jsx2 = __webpack_require__(1);
	
	var _jsx3 = _interopRequireDefault(_jsx2);
	
	var _getPrototypeOf = __webpack_require__(410);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(292);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(293);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(413);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(417);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(58);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(240);
	
	var _thoughtcrime = __webpack_require__(424);
	
	var _thoughtcrime2 = _interopRequireDefault(_thoughtcrime);
	
	var _AllOptions = __webpack_require__(425);
	
	var _AllOptions2 = _interopRequireDefault(_AllOptions);
	
	var _common = __webpack_require__(484);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var OptionsApp = function (_React$Component) {
	  (0, _inherits3.default)(OptionsApp, _React$Component);
	
	  function OptionsApp(props) {
	    (0, _classCallCheck3.default)(this, OptionsApp);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (OptionsApp.__proto__ || (0, _getPrototypeOf2.default)(OptionsApp)).call(this, props));
	
	    _this.state = {
	      selectedPage: 'Dash'
	    };
	    _this.onMenuClick = _this.onMenuClick.bind(_this);
	    return _this;
	  }
	
	  (0, _createClass3.default)(OptionsApp, [{
	    key: 'onMenuClick',
	    value: function onMenuClick(id) {
	      var _this2 = this;
	
	      return function (e) {
	        _this2.setState({ selectedPage: id });
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;
	
	      var Content = _AllOptions2.default[this.state.selectedPage];
	      return (0, _jsx3.default)('div', {
	        id: 'OptionsApp'
	      }, void 0, (0, _jsx3.default)('div', {
	        className: 'container-fluid'
	      }, void 0, (0, _jsx3.default)('div', {
	        className: 'row'
	      }, void 0, (0, _jsx3.default)('div', {
	        className: 'col-md-2'
	      }, void 0, (0, _jsx3.default)('img', {
	        src: _thoughtcrime2.default,
	        alt: '',
	        className: 'img-responsive center-block',
	        height: '128',
	        width: '128'
	      })), (0, _jsx3.default)('div', {
	        className: 'col-md-10 offset-md-2'
	      }, void 0, (0, _jsx3.default)('div', {
	        className: 'page-header text-center'
	      }, void 0, (0, _jsx3.default)('h1', {}, void 0, 'ThoughtCrime - ', (0, _jsx3.default)('small', {}, void 0, this.state.selectedPage))))), (0, _jsx3.default)('div', {
	        className: 'row'
	      }, void 0, (0, _jsx3.default)('div', {
	        className: 'col-md-2 sidebar'
	      }, void 0, (0, _jsx3.default)('ul', {
	        className: 'nav nav-sidebar nav-pills nav-stacked'
	      }, void 0, (0, _keys2.default)(_AllOptions2.default).map(function (item) {
	        var active = _this3.state.selectedPage === item ? 'active' : '';
	        return (0, _jsx3.default)('li', {
	          id: item,
	          role: 'presentation',
	          className: active,
	          onClick: _this3.onMenuClick(item)
	        }, item, (0, _jsx3.default)('a', {
	          href: '#'
	        }, void 0, item));
	      }))), (0, _jsx3.default)('div', {
	        className: 'col-md-10 main'
	      }, void 0, (0, _jsx3.default)(Content, {})))));
	    }
	  }]);
	  return OptionsApp;
	}(_react2.default.Component);
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    sites: state.sites,
	    message: state.message
	  };
	}, function (dispatch) {
	  return {
	    addSite: function addSite(site) {
	      return dispatch((0, _common.addSite)(site));
	    },
	    fetchSites: function fetchSites() {
	      return dispatch((0, _common.fetchSites)());
	    }
	  };
	})(OptionsApp);

/***/ },

/***/ 406:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(407), __esModule: true };

/***/ },

/***/ 407:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(408);
	module.exports = __webpack_require__(10).Object.keys;

/***/ },

/***/ 408:
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(272)
	  , $keys    = __webpack_require__(31);
	
	__webpack_require__(409)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },

/***/ 424:
/***/ function(module, exports) {

	module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTc5MiIgaGVpZ2h0PSIxNzkyIiB2aWV3Qm94PSIwIDAgMTc5MiAxNzkyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik03MDQgMTUzNmw5Ni00NDgtOTYtMTI4LTEyOC02NHptMjU2IDBsMTI4LTY0MC0xMjggNjQtOTYgMTI4em0xNjAtMTAxMHEtMi00LTQtNi0xMC04LTk2LTgtNzAgMC0xNjcgMTktNyAyLTIxIDJ0LTIxLTJxLTk3LTE5LTE2Ny0xOS04NiAwLTk2IDgtMiAyLTQgNiAyIDE4IDQgMjcgMiAzIDcuNSA2LjV0Ny41IDEwLjVxMiA0IDcuNSAyMC41dDcgMjAuNSA3LjUgMTcgOC41IDE3IDkgMTQgMTIgMTMuNSAxNCA5LjUgMTcuNSA4IDIwLjUgNCAyNC41IDJxMzYgMCA1OS0xMi41dDMyLjUtMzAgMTQuNS0zNC41IDExLjUtMjkuNSAxNy41LTEyLjVoMTJxMTEgMCAxNy41IDEyLjV0MTEuNSAyOS41IDE0LjUgMzQuNSAzMi41IDMwIDU5IDEyLjVxMTMgMCAyNC41LTJ0MjAuNS00IDE3LjUtOCAxNC05LjUgMTItMTMuNSA5LTE0IDguNS0xNyA3LjUtMTcgNy0yMC41IDcuNS0yMC41cTItNyA3LjUtMTAuNXQ3LjUtNi41cTItOSA0LTI3em00MTYgODc5cTAgMTIxLTczIDE5MHQtMTk0IDY5aC04NzRxLTEyMSAwLTE5NC02OXQtNzMtMTkwcTAtNjEgNC41LTExOHQxOS0xMjUuNSAzNy41LTEyMy41IDYzLjUtMTAzLjUgOTMuNS03NC41bC05MC0yMjBoMjE0cS0yMi02NC0yMi0xMjggMC0xMiAyLTMyLTE5NC00MC0xOTQtOTYgMC01NyAyMTAtOTkgMTctNjIgNTEuNS0xMzR0NzAuNS0xMTRxMzItMzcgNzYtMzcgMzAgMCA4NCAzMXQ4NCAzMSA4NC0zMSA4NC0zMXE0NCAwIDc2IDM3IDM2IDQyIDcwLjUgMTE0dDUxLjUgMTM0cTIxMCA0MiAyMTAgOTkgMCA1Ni0xOTQgOTYgNyA4MS0yMCAxNjBoMjE0bC04MiAyMjVxNjMgMzMgMTA3LjUgOTYuNXQ2NS41IDE0My41IDI5IDE1MS41IDggMTQ4LjV6Ii8+PC9zdmc+"

/***/ },

/***/ 425:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Dash = __webpack_require__(426);
	
	var _Dash2 = _interopRequireDefault(_Dash);
	
	var _Filtering = __webpack_require__(485);
	
	var _Filtering2 = _interopRequireDefault(_Filtering);
	
	var _Settings = __webpack_require__(496);
	
	var _Settings2 = _interopRequireDefault(_Settings);
	
	var _Statistics = __webpack_require__(497);
	
	var _Statistics2 = _interopRequireDefault(_Statistics);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  Dash: _Dash2.default,
	  Filtering: _Filtering2.default,
	  Settings: _Settings2.default,
	  Statistics: _Statistics2.default
	};

/***/ },

/***/ 426:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx2 = __webpack_require__(1);
	
	var _jsx3 = _interopRequireDefault(_jsx2);
	
	var _getPrototypeOf = __webpack_require__(410);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(292);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(293);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(413);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(417);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(58);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(240);
	
	var _SiteTable = __webpack_require__(427);
	
	var _SiteTable2 = _interopRequireDefault(_SiteTable);
	
	var _InputBar = __webpack_require__(483);
	
	var _InputBar2 = _interopRequireDefault(_InputBar);
	
	var _common = __webpack_require__(484);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Dash = function (_React$Component) {
	  (0, _inherits3.default)(Dash, _React$Component);
	
	  function Dash(props) {
	    (0, _classCallCheck3.default)(this, Dash);
	    return (0, _possibleConstructorReturn3.default)(this, (Dash.__proto__ || (0, _getPrototypeOf2.default)(Dash)).call(this, props));
	  }
	
	  (0, _createClass3.default)(Dash, [{
	    key: 'render',
	    value: function render() {
	      return (0, _jsx3.default)('div', {
	        className: 'row'
	      }, void 0, (0, _jsx3.default)('div', {
	        className: 'col-md-4 panel panel-default'
	      }, void 0, (0, _jsx3.default)('div', {
	        className: 'panel-heading'
	      }, void 0, (0, _jsx3.default)('h3', {
	        className: 'panel-title'
	      }, void 0, 'Add Pattern')), (0, _jsx3.default)('div', {
	        className: 'panel-body'
	      }, void 0, (0, _jsx3.default)(_InputBar2.default, {
	        addSite: this.props.addSite
	      }))), (0, _jsx3.default)('div', {
	        className: 'col-md-7 panel panel-default'
	      }, void 0, (0, _jsx3.default)('div', {
	        className: 'panel-heading'
	      }, void 0, (0, _jsx3.default)('h3', {
	        className: 'panel-title'
	      }, void 0, 'Daily Statistics')), (0, _jsx3.default)('div', {
	        className: 'panel-body'
	      }, void 0, (0, _jsx3.default)(_SiteTable2.default, {
	        sites: this.props.dailySites,
	        maxEntry: 10
	      }))));
	    }
	  }]);
	  return Dash;
	}(_react2.default.Component);
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    dailySites: state.dailySites,
	    message: state.message
	  };
	}, function (dispatch) {
	  return {
	    addSite: function addSite(site) {
	      return dispatch((0, _common.addSite)(site));
	    }
	  };
	})(Dash);

/***/ },

/***/ 427:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx2 = __webpack_require__(1);
	
	var _jsx3 = _interopRequireDefault(_jsx2);
	
	var _getPrototypeOf = __webpack_require__(410);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(292);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(293);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(413);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(417);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(58);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _fixedDataTable = __webpack_require__(428);
	
	__webpack_require__(478);
	
	var _SortableHeader = __webpack_require__(482);
	
	var _SortableHeader2 = _interopRequireDefault(_SortableHeader);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var SiteTable = function (_React$Component) {
	  (0, _inherits3.default)(SiteTable, _React$Component);
	
	  function SiteTable(props) {
	    (0, _classCallCheck3.default)(this, SiteTable);
	
	    // Default to Descending Order on timeSpent
	    var _this = (0, _possibleConstructorReturn3.default)(this, (SiteTable.__proto__ || (0, _getPrototypeOf2.default)(SiteTable)).call(this, props));
	
	    console.log(props);
	    _this.onHeaderClick = _this.onHeaderClick.bind(_this);
	    _this.state = {
	      sortBy: 'timeSpent',
	      order: 1,
	      sites: _this.sortProps(props.sites, 'timeSpent', 1)
	    };
	    return _this;
	  }
	
	  (0, _createClass3.default)(SiteTable, [{
	    key: 'onHeaderClick',
	    value: function onHeaderClick(column) {
	      var order = column === this.state.sortBy ? -this.state.order : 1;
	      this.setState({
	        sortBy: column,
	        order: order,
	        sites: this.sortProps(this.props.sites, column, order)
	      });
	    }
	  }, {
	    key: 'sortProps',
	    value: function sortProps(sites, sortBy, order) {
	      return sites.sort(function (a, b) {
	        if (a[sortBy] < b[sortBy]) {
	          return order * 1;
	        }
	        if (a[sortBy] > b[sortBy]) {
	          return order * -1;
	        }
	        return 0;
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var maxEntry = this.props.maxEntry;
	
	      var itemCount = this.state.sites.length < maxEntry ? this.state.sites.length : maxEntry;
	      var columnCount = 0;
	      var finishedColumns = [];
	      var finishedTable = void 0;
	      if (!itemCount) {
	        finishedTable = (0, _jsx3.default)('div', {}, void 0, 'Nothing to Show');
	      } else {
	        (function () {
	          var sites = _this2.state.sites;
	          var topTen = sites.slice(0, itemCount);
	
	          var _loop = function _loop(column) {
	            if (sites[0].hasOwnProperty(column)) {
	              columnCount += 1;
	              finishedColumns.push((0, _jsx3.default)(_fixedDataTable.Column, {
	                header: (0, _jsx3.default)(_SortableHeader2.default, {
	                  column: column,
	                  onHeaderClick: _this2.onHeaderClick
	                }),
	                cell: function cell(c) {
	                  return (0, _jsx3.default)(_fixedDataTable.Cell, {}, void 0, topTen[c.rowIndex][column]);
	                },
	                width: 200
	              }, column));
	            }
	          };
	
	          for (var column in sites[0]) {
	            _loop(column);
	          }
	          finishedTable = (0, _jsx3.default)(_fixedDataTable.Table, {
	            rowsCount: itemCount,
	            rowHeight: 30,
	            headerHeight: 30,
	            width: columnCount * 200,
	            height: (itemCount + 1) * 30 + 2
	          }, void 0, finishedColumns);
	        })();
	      }
	      return finishedTable;
	    }
	  }]);
	  return SiteTable;
	}(_react2.default.Component);
	
	exports.default = SiteTable;

/***/ },

/***/ 428:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(429);


/***/ },

/***/ 429:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule FixedDataTableRoot
	 */
	
	'use strict';
	
	var FixedDataTable = __webpack_require__(430);
	var FixedDataTableCellDefault = __webpack_require__(467);
	var FixedDataTableColumn = __webpack_require__(465);
	var FixedDataTableColumnGroup = __webpack_require__(464);
	
	var FixedDataTableRoot = {
	  Cell: FixedDataTableCellDefault,
	  Column: FixedDataTableColumn,
	  ColumnGroup: FixedDataTableColumnGroup,
	  Table: FixedDataTable
	};
	
	FixedDataTableRoot.version = '0.6.3';
	module.exports = FixedDataTableRoot;

/***/ },

/***/ 430:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule FixedDataTable.react
	 */
	
	/**
	 * TRANSITION SHIM
	 * This acts to provide an intermediate mapping from the old API to the new API
	 *
	 * Remove this entire file and replace the two lines in FixedDataTableRoot
	 * when ready to continue to the new API.
	 */
	
	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(431);
	
	var ReactChildren = React.Children;
	
	var PropTypes = React.PropTypes;
	
	// New Table API
	var Table = __webpack_require__(432);
	var Column = __webpack_require__(475);
	var ColumnGroup = __webpack_require__(476);
	
	// Transition Cell
	var TransitionCell = __webpack_require__(477);
	
	var NEXT_VERSION = '0.7.0';
	var DOCUMENTATION_URL = 'https://fburl.com/FixedDataTable-v0.6';
	
	var EMPTY_OBJECT = {};
	
	/**
	 * Notify in console that some prop has been deprecated.
	 */
	var notified = {};
	function notifyDeprecated(prop, reason) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (!notified[prop]) {
	      console.warn('`' + prop + '` will be DEPRECATED in version ' + NEXT_VERSION + ' of FixedDataTable and beyond. \n' + reason + '\n' + 'Read the docs at: ' + DOCUMENTATION_URL);
	      notified[prop] = true;
	    }
	  }
	}
	
	/**
	 * Data grid component with fixed or scrollable header and columns.
	 *
	 * This is currently in a transition mode, as the new API is used.
	 * DEPRECATED endpoints work, but will not be supported in later versions.
	 *
	 * The layout of the data table is as follows:
	 *
	 * ```
	 * +---------------------------------------------------+
	 * | Fixed Column Group    | Scrollable Column Group   |
	 * | Header                | Header                    |
	 * |                       |                           |
	 * +---------------------------------------------------+
	 * |                       |                           |
	 * | Fixed Header Columns  | Scrollable Header Columns |
	 * |                       |                           |
	 * +-----------------------+---------------------------+
	 * |                       |                           |
	 * | Fixed Body Columns    | Scrollable Body Columns   |
	 * |                       |                           |
	 * +-----------------------+---------------------------+
	 * |                       |                           |
	 * | Fixed Footer Columns  | Scrollable Footer Columns |
	 * |                       |                           |
	 * +-----------------------+---------------------------+
	 * ```
	 *
	 * - Fixed Column Group Header: These are the headers for a group
	 *   of columns if included in the table that do not scroll
	 *   vertically or horizontally.
	 *
	 * - Scrollable Column Group Header: The header for a group of columns
	 *   that do not move while scrolling vertically, but move horizontally
	 *   with the horizontal scrolling.
	 *
	 * - Fixed Header Columns: The header columns that do not move while scrolling
	 *   vertically or horizontally.
	 *
	 * - Scrollable Header Columns: The header columns that do not move
	 *   while scrolling vertically, but move horizontally with the horizontal
	 *   scrolling.
	 *
	 * - Fixed Body Columns: The body columns that do not move while scrolling
	 *   horizontally, but move vertically with the vertical scrolling.
	 *
	 * - Scrollable Body Columns: The body columns that move while scrolling
	 *   vertically or horizontally.
	 */
	var TransitionTable = React.createClass({
	  displayName: 'TransitionTable',
	
	  propTypes: {
	    /**
	     * Pixel width of table. If all columns do not fit,
	     * a horizontal scrollbar will appear.
	     */
	    width: PropTypes.number.isRequired,
	
	    /**
	     * Pixel height of table. If all rows do not fit,
	     * a vertical scrollbar will appear.
	     *
	     * Either `height` or `maxHeight` must be specified.
	     */
	    height: PropTypes.number,
	
	    /**
	     * Maximum pixel height of table. If all rows do not fit,
	     * a vertical scrollbar will appear.
	     *
	     * Either `height` or `maxHeight` must be specified.
	     */
	    maxHeight: PropTypes.number,
	
	    /**
	     * Pixel height of table's owner, this is used in a managed scrolling
	     * situation when you want to slide the table up from below the fold
	     * without having to constantly update the height on every scroll tick.
	     * Instead, vary this property on scroll. By using `ownerHeight`, we
	     * over-render the table while making sure the footer and horizontal
	     * scrollbar of the table are visible when the current space for the table
	     * in view is smaller than the final, over-flowing height of table. It
	     * allows us to avoid resizing and reflowing table when it is moving in the
	     * view.
	     *
	     * This is used if `ownerHeight < height` (or `maxHeight`).
	     */
	    ownerHeight: PropTypes.number,
	
	    overflowX: PropTypes.oneOf(['hidden', 'auto']),
	    overflowY: PropTypes.oneOf(['hidden', 'auto']),
	
	    /**
	     * Number of rows in the table.
	     */
	    rowsCount: PropTypes.number.isRequired,
	
	    /**
	     * Pixel height of rows unless `rowHeightGetter` is specified and returns
	     * different value.
	     */
	    rowHeight: PropTypes.number.isRequired,
	
	    /**
	     * If specified, `rowHeightGetter(index)` is called for each row and the
	     * returned value overrides `rowHeight` for particular row.
	     */
	    rowHeightGetter: PropTypes.func,
	
	    /**
	     * DEPRECATED
	     *
	     * To get rows to display in table, `rowGetter(index)`
	     * is called. `rowGetter` should be smart enough to handle async
	     * fetching of data and return temporary objects
	     * while data is being fetched.
	     */
	    rowGetter: PropTypes.func,
	
	    /**
	     * To get any additional CSS classes that should be added to a row,
	     * `rowClassNameGetter(index)` is called.
	     */
	    rowClassNameGetter: PropTypes.func,
	
	    /**
	     * Pixel height of the column group header.
	     */
	    groupHeaderHeight: PropTypes.number,
	
	    /**
	     * Pixel height of header.
	     */
	    headerHeight: PropTypes.number.isRequired,
	
	    /**
	     * DEPRECATED
	     *
	     * Function that is called to get the data for the header row.
	     * If the function returns null, the header will be set to the
	     * Column's label property.
	     */
	    headerDataGetter: PropTypes.func,
	
	    /**
	     * Pixel height of footer.
	     */
	    footerHeight: PropTypes.number,
	
	    /**
	     * DEPRECATED - use footerDataGetter instead.
	     * Data that will be passed to footer cell renderers.
	     */
	    footerData: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
	
	    /**
	     * DEPRECATED
	     *
	     * Function that is called to get the data for the footer row.
	     */
	    footerDataGetter: PropTypes.func,
	
	    /**
	     * Value of horizontal scroll.
	     */
	    scrollLeft: PropTypes.number,
	
	    /**
	     * Index of column to scroll to.
	     */
	    scrollToColumn: PropTypes.number,
	
	    /**
	     * Value of vertical scroll.
	     */
	    scrollTop: PropTypes.number,
	
	    /**
	     * Index of row to scroll to.
	     */
	    scrollToRow: PropTypes.number,
	
	    /**
	     * Callback that is called when scrolling starts with current horizontal
	     * and vertical scroll values.
	     */
	    onScrollStart: PropTypes.func,
	
	    /**
	     * Callback that is called when scrolling ends or stops with new horizontal
	     * and vertical scroll values.
	     */
	    onScrollEnd: PropTypes.func,
	
	    /**
	     * Callback that is called when `rowHeightGetter` returns a different height
	     * for a row than the `rowHeight` prop. This is necessary because initially
	     * table estimates heights of some parts of the content.
	     */
	    onContentHeightChange: PropTypes.func,
	
	    /**
	     * Callback that is called when a row is clicked.
	     */
	    onRowClick: PropTypes.func,
	
	    /**
	     * Callback that is called when a row is double clicked.
	     */
	    onRowDoubleClick: PropTypes.func,
	
	    /**
	     * Callback that is called when a mouse-down event happens on a row.
	     */
	    onRowMouseDown: PropTypes.func,
	
	    /**
	     * Callback that is called when a mouse-enter event happens on a row.
	     */
	    onRowMouseEnter: PropTypes.func,
	
	    /**
	     * Callback that is called when a mouse-leave event happens on a row.
	     */
	    onRowMouseLeave: PropTypes.func,
	
	    /**
	     * Callback that is called when resizer has been released
	     * and column needs to be updated.
	     *
	     * Required if the isResizable property is true on any column.
	     *
	     * ```
	     * function(
	     *   newColumnWidth: number,
	     *   dataKey: string,
	     * )
	     * ```
	     */
	    onColumnResizeEndCallback: PropTypes.func,
	
	    /**
	     * Whether a column is currently being resized.
	     */
	    isColumnResizing: PropTypes.bool
	  },
	
	  getInitialState: function getInitialState() {
	    // Throw warnings on deprecated props.
	    var state = {};
	    state.needsMigration = this._checkDeprecations();
	
	    return state;
	  },
	
	  _checkDeprecations: function _checkDeprecations() {
	    var needsMigration = false;
	
	    if (this.props.rowGetter) {
	      notifyDeprecated('rowGetter', 'Please use the cell API in Column to fetch data for your cells.');
	
	      // ROWGETTER??? You need to migrate.
	      needsMigration = true;
	    }
	
	    if (this.props.headerDataGetter) {
	      notifyDeprecated('headerDataGetter', 'Please use the header API in Column to ' + 'fetch data for your header cells.');
	    }
	
	    if (this.props.footerData) {
	      notifyDeprecated('footerData', 'Please use the footer API in Column to ' + 'fetch data for your footer cells.');
	    }
	
	    if (this.props.footerDataGetter) {
	      notifyDeprecated('footerDataGetter', 'Please use the footer API in Column to ' + 'fetch data for your footer cells.');
	    }
	
	    ReactChildren.forEach(this.props.children, function (child) {
	      if (!child || !child.props) {
	        return;
	      }
	
	      var props = child.props;
	
	      if (props.label) {
	        notifyDeprecated('label', 'Please use `header` instead.');
	      }
	
	      if (props.dataKey) {
	        notifyDeprecated('dataKey', 'Please use the `cell` API to pass in a dataKey');
	      }
	
	      if (props.cellRenderer) {
	        notifyDeprecated('cellRenderer', 'Please use the `cell` API to pass in a React Element instead.');
	      }
	
	      if (props.headerRenderer) {
	        notifyDeprecated('headerRenderer', 'Please use the `header` API to pass in a React Element instead.');
	      }
	
	      if (props.columnData) {
	        notifyDeprecated('columnData', 'Please pass data in through props to your header, cell or footer.');
	      }
	
	      if (props.groupHeaderRenderer) {
	        notifyDeprecated('groupHeaderRenderer', 'Please use the `header` API in ColumnGroup to ' + 'pass in a React Element instead of a function that creates one.');
	      }
	
	      if (props.groupHeaderData) {
	        notifyDeprecated('groupHeaderData', 'Please pass in any data through props to your header.');
	      }
	    });
	
	    return needsMigration;
	  },
	
	  // Wrapper for onRow callbacks, since we don't have rowData at that level.
	  _onRowAction: function _onRowAction(props, callback) {
	    if (!callback) {
	      return undefined;
	    }
	
	    return function (e, rowIndex) {
	      callback(e, rowIndex, props.rowGetter && props.rowGetter(rowIndex) || EMPTY_OBJECT);
	    };
	  },
	
	  _transformColumn: function _transformColumn(column, tableProps, key) {
	
	    var props = column.props;
	
	    if (column.type.__TableColumn__) {
	      // Constuct the cell to be used using the rowGetter
	      return React.createElement(Column, _extends({
	        key: 'column_' + key
	      }, props, {
	        header: React.createElement(TransitionCell, {
	          isHeaderCell: true,
	          label: props.label,
	          width: props.width,
	          dataKey: props.dataKey,
	          className: props.headerClassName,
	          columnData: props.columnData || EMPTY_OBJECT,
	          cellRenderer: props.headerRenderer,
	          headerDataGetter: tableProps.headerDataGetter
	        }),
	        columnKey: props.dataKey,
	        cell: React.createElement(TransitionCell, {
	          dataKey: props.dataKey,
	          className: props.cellClassName,
	          rowGetter: tableProps.rowGetter,
	          width: props.width,
	          columnData: props.columnData || EMPTY_OBJECT,
	          cellDataGetter: props.cellDataGetter,
	          cellRenderer: props.cellRenderer
	        }),
	        footer: React.createElement(TransitionCell, {
	          isFooterCell: true,
	          className: props.footerClassName,
	          dataKey: props.dataKey,
	          cellRenderer: props.footerRenderer,
	          footerDataGetter: tableProps.footerDataGetter,
	          footerData: tableProps.footerData || EMPTY_OBJECT
	        })
	      }));
	    }
	  },
	
	  _transformColumnGroup: function _transformColumnGroup(group, tableProps, key, labels) {
	    var _this = this;
	
	    var props = group.props;
	
	    var j = 0;
	    var columns = ReactChildren.map(props.children, function (child) {
	      j++;
	      return _this._transformColumn(child, tableProps, key + '_' + j);
	    });
	
	    return React.createElement(
	      ColumnGroup,
	      _extends({}, props, {
	        key: 'group_' + key,
	        header: React.createElement(TransitionCell, {
	          isHeaderCell: true,
	          label: group.props.label,
	          dataKey: key,
	          groupHeaderRenderer: props.groupHeaderRenderer,
	          groupHeaderLabels: labels,
	          groupHeaderData: props.columnGroupData || EMPTY_OBJECT
	        }) }),
	      columns
	    );
	  },
	
	  _convertedColumns: function _convertedColumns(needsMigration) {
	    var _this2 = this;
	
	    // If we don't need to migrate, map directly to the new API.
	    if (!needsMigration) {
	      return ReactChildren.map(this.props.children, function (child) {
	
	        if (!child) {
	          return null;
	        }
	
	        if (child.type.__TableColumn__) {
	          return React.createElement(Column, child.props);
	        }
	
	        if (child.type.__TableColumnGroup__) {
	          return React.createElement(ColumnGroup, child.props);
	        }
	      });
	    }
	
	    var tableProps = this.props;
	
	    // Otherwise, if a migration is needed, we need to transform each Column
	    // or ColumnGroup.
	    var i = 0;
	    return ReactChildren.map(this.props.children, function (child) {
	
	      if (!child) {
	        return null;
	      }
	
	      if (child.type.__TableColumn__) {
	        child = _this2._transformColumn(child, tableProps, i);
	      }
	
	      if (child.type.__TableColumnGroup__) {
	        // Since we apparently give an array of labels to groupHeaderRenderer
	        var labels = [];
	        ReactChildren.forEach(_this2.props.children, function (child) {
	          labels.push(child.props.label);
	        });
	
	        child = _this2._transformColumnGroup(child, tableProps, i, labels);
	      }
	
	      i++;
	      return child;
	    });
	  },
	
	  render: function render() {
	    var props = this.props;
	    return React.createElement(
	      Table,
	      _extends({}, props, {
	        onRowMouseDown: this._onRowAction(props, props.onRowMouseDown),
	        onRowClick: this._onRowAction(props, props.onRowClick),
	        onRowDoubleClick: this._onRowAction(props, props.onRowDoubleClick),
	        onRowMouseEnter: this._onRowAction(props, props.onRowMouseEnter),
	        onRowMouseLeave: this._onRowAction(props, props.onRowMouseLeave)
	      }),
	      this._convertedColumns(this.state.needsMigration)
	    );
	  }
	});
	
	module.exports = TransitionTable;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(60)))

/***/ },

/***/ 431:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule React
	 */
	
	'use strict';
	
	module.exports = __webpack_require__(58);

/***/ },

/***/ 432:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule FixedDataTableNew.react
	 * @typechecks
	 * @noflow
	 */
	
	/*eslint no-bitwise:1*/
	
	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(431);
	var ReactComponentWithPureRenderMixin = __webpack_require__(433);
	var ReactWheelHandler = __webpack_require__(434);
	var Scrollbar = __webpack_require__(442);
	var FixedDataTableBufferedRows = __webpack_require__(455);
	var FixedDataTableColumnResizeHandle = __webpack_require__(469);
	var FixedDataTableRow = __webpack_require__(460);
	var FixedDataTableScrollHelper = __webpack_require__(470);
	var FixedDataTableWidthHelper = __webpack_require__(472);
	
	var cx = __webpack_require__(449);
	var debounceCore = __webpack_require__(473);
	var emptyFunction = __webpack_require__(435);
	var invariant = __webpack_require__(454);
	var joinClasses = __webpack_require__(468);
	var shallowEqual = __webpack_require__(474);
	var translateDOMPositionXY = __webpack_require__(450);
	
	var PropTypes = React.PropTypes;
	
	var ReactChildren = React.Children;
	
	var EMPTY_OBJECT = {};
	var BORDER_HEIGHT = 1;
	var HEADER = 'header';
	var FOOTER = 'footer';
	var CELL = 'cell';
	
	/**
	 * Data grid component with fixed or scrollable header and columns.
	 *
	 * The layout of the data table is as follows:
	 *
	 * ```
	 * +---------------------------------------------------+
	 * | Fixed Column Group    | Scrollable Column Group   |
	 * | Header                | Header                    |
	 * |                       |                           |
	 * +---------------------------------------------------+
	 * |                       |                           |
	 * | Fixed Header Columns  | Scrollable Header Columns |
	 * |                       |                           |
	 * +-----------------------+---------------------------+
	 * |                       |                           |
	 * | Fixed Body Columns    | Scrollable Body Columns   |
	 * |                       |                           |
	 * +-----------------------+---------------------------+
	 * |                       |                           |
	 * | Fixed Footer Columns  | Scrollable Footer Columns |
	 * |                       |                           |
	 * +-----------------------+---------------------------+
	 * ```
	 *
	 * - Fixed Column Group Header: These are the headers for a group
	 *   of columns if included in the table that do not scroll
	 *   vertically or horizontally.
	 *
	 * - Scrollable Column Group Header: The header for a group of columns
	 *   that do not move while scrolling vertically, but move horizontally
	 *   with the horizontal scrolling.
	 *
	 * - Fixed Header Columns: The header columns that do not move while scrolling
	 *   vertically or horizontally.
	 *
	 * - Scrollable Header Columns: The header columns that do not move
	 *   while scrolling vertically, but move horizontally with the horizontal
	 *   scrolling.
	 *
	 * - Fixed Body Columns: The body columns that do not move while scrolling
	 *   horizontally, but move vertically with the vertical scrolling.
	 *
	 * - Scrollable Body Columns: The body columns that move while scrolling
	 *   vertically or horizontally.
	 */
	var FixedDataTable = React.createClass({
	  displayName: 'FixedDataTable',
	
	  propTypes: {
	
	    /**
	     * Pixel width of table. If all columns do not fit,
	     * a horizontal scrollbar will appear.
	     */
	    width: PropTypes.number.isRequired,
	
	    /**
	     * Pixel height of table. If all rows do not fit,
	     * a vertical scrollbar will appear.
	     *
	     * Either `height` or `maxHeight` must be specified.
	     */
	    height: PropTypes.number,
	
	    /**
	     * Maximum pixel height of table. If all rows do not fit,
	     * a vertical scrollbar will appear.
	     *
	     * Either `height` or `maxHeight` must be specified.
	     */
	    maxHeight: PropTypes.number,
	
	    /**
	     * Pixel height of table's owner, this is used in a managed scrolling
	     * situation when you want to slide the table up from below the fold
	     * without having to constantly update the height on every scroll tick.
	     * Instead, vary this property on scroll. By using `ownerHeight`, we
	     * over-render the table while making sure the footer and horizontal
	     * scrollbar of the table are visible when the current space for the table
	     * in view is smaller than the final, over-flowing height of table. It
	     * allows us to avoid resizing and reflowing table when it is moving in the
	     * view.
	     *
	     * This is used if `ownerHeight < height` (or `maxHeight`).
	     */
	    ownerHeight: PropTypes.number,
	
	    overflowX: PropTypes.oneOf(['hidden', 'auto']),
	    overflowY: PropTypes.oneOf(['hidden', 'auto']),
	
	    /**
	     * Number of rows in the table.
	     */
	    rowsCount: PropTypes.number.isRequired,
	
	    /**
	     * Pixel height of rows unless `rowHeightGetter` is specified and returns
	     * different value.
	     */
	    rowHeight: PropTypes.number.isRequired,
	
	    /**
	     * If specified, `rowHeightGetter(index)` is called for each row and the
	     * returned value overrides `rowHeight` for particular row.
	     */
	    rowHeightGetter: PropTypes.func,
	
	    /**
	     * To get any additional CSS classes that should be added to a row,
	     * `rowClassNameGetter(index)` is called.
	     */
	    rowClassNameGetter: PropTypes.func,
	
	    /**
	     * Pixel height of the column group header.
	     */
	    groupHeaderHeight: PropTypes.number,
	
	    /**
	     * Pixel height of header.
	     */
	    headerHeight: PropTypes.number.isRequired,
	
	    /**
	     * Pixel height of footer.
	     */
	    footerHeight: PropTypes.number,
	
	    /**
	     * Value of horizontal scroll.
	     */
	    scrollLeft: PropTypes.number,
	
	    /**
	     * Index of column to scroll to.
	     */
	    scrollToColumn: PropTypes.number,
	
	    /**
	     * Value of vertical scroll.
	     */
	    scrollTop: PropTypes.number,
	
	    /**
	     * Index of row to scroll to.
	     */
	    scrollToRow: PropTypes.number,
	
	    /**
	     * Callback that is called when scrolling starts with current horizontal
	     * and vertical scroll values.
	     */
	    onScrollStart: PropTypes.func,
	
	    /**
	     * Callback that is called when scrolling ends or stops with new horizontal
	     * and vertical scroll values.
	     */
	    onScrollEnd: PropTypes.func,
	
	    /**
	     * Callback that is called when `rowHeightGetter` returns a different height
	     * for a row than the `rowHeight` prop. This is necessary because initially
	     * table estimates heights of some parts of the content.
	     */
	    onContentHeightChange: PropTypes.func,
	
	    /**
	     * Callback that is called when a row is clicked.
	     */
	    onRowClick: PropTypes.func,
	
	    /**
	     * Callback that is called when a row is double clicked.
	     */
	    onRowDoubleClick: PropTypes.func,
	
	    /**
	     * Callback that is called when a mouse-down event happens on a row.
	     */
	    onRowMouseDown: PropTypes.func,
	
	    /**
	     * Callback that is called when a mouse-enter event happens on a row.
	     */
	    onRowMouseEnter: PropTypes.func,
	
	    /**
	     * Callback that is called when a mouse-leave event happens on a row.
	     */
	    onRowMouseLeave: PropTypes.func,
	
	    /**
	     * Callback that is called when resizer has been released
	     * and column needs to be updated.
	     *
	     * Required if the isResizable property is true on any column.
	     *
	     * ```
	     * function(
	     *   newColumnWidth: number,
	     *   columnKey: string,
	     * )
	     * ```
	     */
	    onColumnResizeEndCallback: PropTypes.func,
	
	    /**
	     * Whether a column is currently being resized.
	     */
	    isColumnResizing: PropTypes.bool
	  },
	
	  getDefaultProps: function getDefaultProps() /*object*/{
	    return {
	      footerHeight: 0,
	      groupHeaderHeight: 0,
	      headerHeight: 0,
	      scrollLeft: 0,
	      scrollTop: 0
	    };
	  },
	
	  getInitialState: function getInitialState() /*object*/{
	    var props = this.props;
	    var viewportHeight = (props.height === undefined ? props.maxHeight : props.height) - (props.headerHeight || 0) - (props.footerHeight || 0) - (props.groupHeaderHeight || 0);
	    this._scrollHelper = new FixedDataTableScrollHelper(props.rowsCount, props.rowHeight, viewportHeight, props.rowHeightGetter);
	    if (props.scrollTop) {
	      this._scrollHelper.scrollTo(props.scrollTop);
	    }
	    this._didScrollStop = debounceCore(this._didScrollStop, 200, this);
	
	    return this._calculateState(this.props);
	  },
	
	  componentWillMount: function componentWillMount() {
	    var scrollToRow = this.props.scrollToRow;
	    if (scrollToRow !== undefined && scrollToRow !== null) {
	      this._rowToScrollTo = scrollToRow;
	    }
	    var scrollToColumn = this.props.scrollToColumn;
	    if (scrollToColumn !== undefined && scrollToColumn !== null) {
	      this._columnToScrollTo = scrollToColumn;
	    }
	    this._wheelHandler = new ReactWheelHandler(this._onWheel, this._shouldHandleWheelX, this._shouldHandleWheelY);
	  },
	
	  _shouldHandleWheelX: function _shouldHandleWheelX( /*number*/delta) /*boolean*/{
	    if (this.props.overflowX === 'hidden') {
	      return false;
	    }
	
	    delta = Math.round(delta);
	    if (delta === 0) {
	      return false;
	    }
	
	    return delta < 0 && this.state.scrollX > 0 || delta >= 0 && this.state.scrollX < this.state.maxScrollX;
	  },
	
	  _shouldHandleWheelY: function _shouldHandleWheelY( /*number*/delta) /*boolean*/{
	    if (this.props.overflowY === 'hidden' || delta === 0) {
	      return false;
	    }
	
	    delta = Math.round(delta);
	    if (delta === 0) {
	      return false;
	    }
	
	    return delta < 0 && this.state.scrollY > 0 || delta >= 0 && this.state.scrollY < this.state.maxScrollY;
	  },
	
	  _reportContentHeight: function _reportContentHeight() {
	    var scrollContentHeight = this.state.scrollContentHeight;
	    var reservedHeight = this.state.reservedHeight;
	    var requiredHeight = scrollContentHeight + reservedHeight;
	    var contentHeight;
	    var useMaxHeight = this.props.height === undefined;
	    if (useMaxHeight && this.props.maxHeight > requiredHeight) {
	      contentHeight = requiredHeight;
	    } else if (this.state.height > requiredHeight && this.props.ownerHeight) {
	      contentHeight = Math.max(requiredHeight, this.props.ownerHeight);
	    } else {
	      contentHeight = this.state.height + this.state.maxScrollY;
	    }
	    if (contentHeight !== this._contentHeight && this.props.onContentHeightChange) {
	      this.props.onContentHeightChange(contentHeight);
	    }
	    this._contentHeight = contentHeight;
	  },
	
	  componentDidMount: function componentDidMount() {
	    this._reportContentHeight();
	  },
	
	  componentWillReceiveProps: function componentWillReceiveProps( /*object*/nextProps) {
	    var scrollToRow = nextProps.scrollToRow;
	    if (scrollToRow !== undefined && scrollToRow !== null) {
	      this._rowToScrollTo = scrollToRow;
	    }
	    var scrollToColumn = nextProps.scrollToColumn;
	    if (scrollToColumn !== undefined && scrollToColumn !== null) {
	      this._columnToScrollTo = scrollToColumn;
	    }
	
	    var newOverflowX = nextProps.overflowX;
	    var newOverflowY = nextProps.overflowY;
	    if (newOverflowX !== this.props.overflowX || newOverflowY !== this.props.overflowY) {
	      this._wheelHandler = new ReactWheelHandler(this._onWheel, newOverflowX !== 'hidden', // Should handle horizontal scroll
	      newOverflowY !== 'hidden' // Should handle vertical scroll
	      );
	    }
	
	    // In the case of controlled scrolling, notify.
	    if (this.props.ownerHeight !== nextProps.ownerHeight || this.props.scrollTop !== nextProps.scrollTop) {
	      this._didScrollStart();
	    }
	    this._didScrollStop();
	
	    this.setState(this._calculateState(nextProps, this.state));
	  },
	
	  componentDidUpdate: function componentDidUpdate() {
	    this._reportContentHeight();
	  },
	
	  render: function render() /*object*/{
	    var state = this.state;
	    var props = this.props;
	
	    var groupHeader;
	    if (state.useGroupHeader) {
	      groupHeader = React.createElement(FixedDataTableRow, {
	        key: 'group_header',
	        isScrolling: this._isScrolling,
	        className: joinClasses(cx('fixedDataTableLayout/header'), cx('public/fixedDataTable/header')),
	        width: state.width,
	        height: state.groupHeaderHeight,
	        index: 0,
	        zIndex: 1,
	        offsetTop: 0,
	        scrollLeft: state.scrollX,
	        fixedColumns: state.groupHeaderFixedColumns,
	        scrollableColumns: state.groupHeaderScrollableColumns,
	        onColumnResize: this._onColumnResize
	      });
	    }
	
	    var maxScrollY = this.state.maxScrollY;
	    var showScrollbarX = state.maxScrollX > 0 && state.overflowX !== 'hidden';
	    var showScrollbarY = maxScrollY > 0 && state.overflowY !== 'hidden';
	    var scrollbarXHeight = showScrollbarX ? Scrollbar.SIZE : 0;
	    var scrollbarYHeight = state.height - scrollbarXHeight - 2 * BORDER_HEIGHT - state.footerHeight;
	
	    var headerOffsetTop = state.useGroupHeader ? state.groupHeaderHeight : 0;
	    var bodyOffsetTop = headerOffsetTop + state.headerHeight;
	    scrollbarYHeight -= bodyOffsetTop;
	    var bottomSectionOffset = 0;
	    var footOffsetTop = props.maxHeight != null ? bodyOffsetTop + state.bodyHeight : bodyOffsetTop + scrollbarYHeight;
	    var rowsContainerHeight = footOffsetTop + state.footerHeight;
	
	    if (props.ownerHeight !== undefined && props.ownerHeight < state.height) {
	      bottomSectionOffset = props.ownerHeight - state.height;
	
	      footOffsetTop = Math.min(footOffsetTop, props.ownerHeight - state.footerHeight - scrollbarXHeight);
	
	      scrollbarYHeight = Math.max(0, footOffsetTop - bodyOffsetTop);
	    }
	
	    var verticalScrollbar;
	    if (showScrollbarY) {
	      verticalScrollbar = React.createElement(Scrollbar, {
	        size: scrollbarYHeight,
	        contentSize: scrollbarYHeight + maxScrollY,
	        onScroll: this._onVerticalScroll,
	        verticalTop: bodyOffsetTop,
	        position: state.scrollY
	      });
	    }
	
	    var horizontalScrollbar;
	    if (showScrollbarX) {
	      var scrollbarXWidth = state.width;
	      horizontalScrollbar = React.createElement(HorizontalScrollbar, {
	        contentSize: scrollbarXWidth + state.maxScrollX,
	        offset: bottomSectionOffset,
	        onScroll: this._onHorizontalScroll,
	        position: state.scrollX,
	        size: scrollbarXWidth
	      });
	    }
	
	    var dragKnob = React.createElement(FixedDataTableColumnResizeHandle, {
	      height: state.height,
	      initialWidth: state.columnResizingData.width || 0,
	      minWidth: state.columnResizingData.minWidth || 0,
	      maxWidth: state.columnResizingData.maxWidth || Number.MAX_VALUE,
	      visible: !!state.isColumnResizing,
	      leftOffset: state.columnResizingData.left || 0,
	      knobHeight: state.headerHeight,
	      initialEvent: state.columnResizingData.initialEvent,
	      onColumnResizeEnd: props.onColumnResizeEndCallback,
	      columnKey: state.columnResizingData.key
	    });
	
	    var footer = null;
	    if (state.footerHeight) {
	      footer = React.createElement(FixedDataTableRow, {
	        key: 'footer',
	        isScrolling: this._isScrolling,
	        className: joinClasses(cx('fixedDataTableLayout/footer'), cx('public/fixedDataTable/footer')),
	        width: state.width,
	        height: state.footerHeight,
	        index: -1,
	        zIndex: 1,
	        offsetTop: footOffsetTop,
	        fixedColumns: state.footFixedColumns,
	        scrollableColumns: state.footScrollableColumns,
	        scrollLeft: state.scrollX
	      });
	    }
	
	    var rows = this._renderRows(bodyOffsetTop);
	
	    var header = React.createElement(FixedDataTableRow, {
	      key: 'header',
	      isScrolling: this._isScrolling,
	      className: joinClasses(cx('fixedDataTableLayout/header'), cx('public/fixedDataTable/header')),
	      width: state.width,
	      height: state.headerHeight,
	      index: -1,
	      zIndex: 1,
	      offsetTop: headerOffsetTop,
	      scrollLeft: state.scrollX,
	      fixedColumns: state.headFixedColumns,
	      scrollableColumns: state.headScrollableColumns,
	      onColumnResize: this._onColumnResize
	    });
	
	    var topShadow;
	    var bottomShadow;
	    if (state.scrollY) {
	      topShadow = React.createElement('div', {
	        className: joinClasses(cx('fixedDataTableLayout/topShadow'), cx('public/fixedDataTable/topShadow')),
	        style: { top: bodyOffsetTop }
	      });
	    }
	
	    if (state.ownerHeight != null && state.ownerHeight < state.height && state.scrollContentHeight + state.reservedHeight > state.ownerHeight || state.scrollY < maxScrollY) {
	      bottomShadow = React.createElement('div', {
	        className: joinClasses(cx('fixedDataTableLayout/bottomShadow'), cx('public/fixedDataTable/bottomShadow')),
	        style: { top: footOffsetTop }
	      });
	    }
	
	    return React.createElement(
	      'div',
	      {
	        className: joinClasses(cx('fixedDataTableLayout/main'), cx('public/fixedDataTable/main')),
	        onWheel: this._wheelHandler.onWheel,
	        style: { height: state.height, width: state.width } },
	      React.createElement(
	        'div',
	        {
	          className: cx('fixedDataTableLayout/rowsContainer'),
	          style: { height: rowsContainerHeight, width: state.width } },
	        dragKnob,
	        groupHeader,
	        header,
	        rows,
	        footer,
	        topShadow,
	        bottomShadow
	      ),
	      verticalScrollbar,
	      horizontalScrollbar
	    );
	  },
	
	  _renderRows: function _renderRows( /*number*/offsetTop) /*object*/{
	    var state = this.state;
	
	    return React.createElement(FixedDataTableBufferedRows, {
	      isScrolling: this._isScrolling,
	      defaultRowHeight: state.rowHeight,
	      firstRowIndex: state.firstRowIndex,
	      firstRowOffset: state.firstRowOffset,
	      fixedColumns: state.bodyFixedColumns,
	      height: state.bodyHeight,
	      offsetTop: offsetTop,
	      onRowClick: state.onRowClick,
	      onRowDoubleClick: state.onRowDoubleClick,
	      onRowMouseDown: state.onRowMouseDown,
	      onRowMouseEnter: state.onRowMouseEnter,
	      onRowMouseLeave: state.onRowMouseLeave,
	      rowClassNameGetter: state.rowClassNameGetter,
	      rowsCount: state.rowsCount,
	      rowGetter: state.rowGetter,
	      rowHeightGetter: state.rowHeightGetter,
	      scrollLeft: state.scrollX,
	      scrollableColumns: state.bodyScrollableColumns,
	      showLastRowBorder: true,
	      width: state.width,
	      rowPositionGetter: this._scrollHelper.getRowPosition
	    });
	  },
	
	  /**
	   * This is called when a cell that is in the header of a column has its
	   * resizer knob clicked on. It displays the resizer and puts in the correct
	   * location on the table.
	   */
	  _onColumnResize: function _onColumnResize(
	  /*number*/combinedWidth,
	  /*number*/leftOffset,
	  /*number*/cellWidth,
	  /*?number*/cellMinWidth,
	  /*?number*/cellMaxWidth,
	  /*number|string*/columnKey,
	  /*object*/event) {
	    this.setState({
	      isColumnResizing: true,
	      columnResizingData: {
	        left: leftOffset + combinedWidth - cellWidth,
	        width: cellWidth,
	        minWidth: cellMinWidth,
	        maxWidth: cellMaxWidth,
	        initialEvent: {
	          clientX: event.clientX,
	          clientY: event.clientY,
	          preventDefault: emptyFunction
	        },
	        key: columnKey
	      }
	    });
	  },
	
	  _areColumnSettingsIdentical: function _areColumnSettingsIdentical(oldColumns, newColumns) {
	    if (oldColumns.length !== newColumns.length) {
	      return false;
	    }
	    for (var index = 0; index < oldColumns.length; ++index) {
	      if (!shallowEqual(oldColumns[index].props, newColumns[index].props)) {
	        return false;
	      }
	    }
	    return true;
	  },
	
	  _populateColumnsAndColumnData: function _populateColumnsAndColumnData(columns, columnGroups, oldState) {
	    var canReuseColumnSettings = false;
	    var canReuseColumnGroupSettings = false;
	
	    if (oldState && oldState.columns) {
	      canReuseColumnSettings = this._areColumnSettingsIdentical(columns, oldState.columns);
	    }
	    if (oldState && oldState.columnGroups && columnGroups) {
	      canReuseColumnGroupSettings = this._areColumnSettingsIdentical(columnGroups, oldState.columnGroups);
	    }
	
	    var columnInfo = {};
	    if (canReuseColumnSettings) {
	      columnInfo.bodyFixedColumns = oldState.bodyFixedColumns;
	      columnInfo.bodyScrollableColumns = oldState.bodyScrollableColumns;
	      columnInfo.headFixedColumns = oldState.headFixedColumns;
	      columnInfo.headScrollableColumns = oldState.headScrollableColumns;
	      columnInfo.footFixedColumns = oldState.footFixedColumns;
	      columnInfo.footScrollableColumns = oldState.footScrollableColumns;
	    } else {
	      var bodyColumnTypes = this._splitColumnTypes(columns);
	      columnInfo.bodyFixedColumns = bodyColumnTypes.fixed;
	      columnInfo.bodyScrollableColumns = bodyColumnTypes.scrollable;
	
	      var headColumnTypes = this._splitColumnTypes(this._selectColumnElement(HEADER, columns));
	      columnInfo.headFixedColumns = headColumnTypes.fixed;
	      columnInfo.headScrollableColumns = headColumnTypes.scrollable;
	
	      var footColumnTypes = this._splitColumnTypes(this._selectColumnElement(FOOTER, columns));
	      columnInfo.footFixedColumns = footColumnTypes.fixed;
	      columnInfo.footScrollableColumns = footColumnTypes.scrollable;
	    }
	
	    if (canReuseColumnGroupSettings) {
	      columnInfo.groupHeaderFixedColumns = oldState.groupHeaderFixedColumns;
	      columnInfo.groupHeaderScrollableColumns = oldState.groupHeaderScrollableColumns;
	    } else {
	      if (columnGroups) {
	        var groupHeaderColumnTypes = this._splitColumnTypes(this._selectColumnElement(HEADER, columnGroups));
	        columnInfo.groupHeaderFixedColumns = groupHeaderColumnTypes.fixed;
	        columnInfo.groupHeaderScrollableColumns = groupHeaderColumnTypes.scrollable;
	      }
	    }
	
	    return columnInfo;
	  },
	
	  _calculateState: function _calculateState( /*object*/props, /*?object*/oldState) /*object*/{
	    invariant(props.height !== undefined || props.maxHeight !== undefined, 'You must set either a height or a maxHeight');
	
	    var children = [];
	    ReactChildren.forEach(props.children, function (child, index) {
	      if (child == null) {
	        return;
	      }
	      invariant(child.type.__TableColumnGroup__ || child.type.__TableColumn__, 'child type should be <FixedDataTableColumn /> or ' + '<FixedDataTableColumnGroup />');
	      children.push(child);
	    });
	
	    var useGroupHeader = false;
	    if (children.length && children[0].type.__TableColumnGroup__) {
	      useGroupHeader = true;
	    }
	
	    var firstRowIndex = oldState && oldState.firstRowIndex || 0;
	    var firstRowOffset = oldState && oldState.firstRowOffset || 0;
	    var scrollX, scrollY;
	    if (oldState && props.overflowX !== 'hidden') {
	      scrollX = oldState.scrollX;
	    } else {
	      scrollX = props.scrollLeft;
	    }
	    if (oldState && props.overflowY !== 'hidden') {
	      scrollY = oldState.scrollY;
	    } else {
	      scrollState = this._scrollHelper.scrollTo(props.scrollTop);
	      firstRowIndex = scrollState.index;
	      firstRowOffset = scrollState.offset;
	      scrollY = scrollState.position;
	    }
	
	    if (this._rowToScrollTo !== undefined) {
	      scrollState = this._scrollHelper.scrollRowIntoView(this._rowToScrollTo);
	      firstRowIndex = scrollState.index;
	      firstRowOffset = scrollState.offset;
	      scrollY = scrollState.position;
	      delete this._rowToScrollTo;
	    }
	
	    var groupHeaderHeight = useGroupHeader ? props.groupHeaderHeight : 0;
	
	    if (oldState && props.rowsCount !== oldState.rowsCount) {
	      // Number of rows changed, try to scroll to the row from before the
	      // change
	      var viewportHeight = (props.height === undefined ? props.maxHeight : props.height) - (props.headerHeight || 0) - (props.footerHeight || 0) - (props.groupHeaderHeight || 0);
	      this._scrollHelper = new FixedDataTableScrollHelper(props.rowsCount, props.rowHeight, viewportHeight, props.rowHeightGetter);
	      var scrollState = this._scrollHelper.scrollToRow(firstRowIndex, firstRowOffset);
	      firstRowIndex = scrollState.index;
	      firstRowOffset = scrollState.offset;
	      scrollY = scrollState.position;
	    } else if (oldState && props.rowHeightGetter !== oldState.rowHeightGetter) {
	      this._scrollHelper.setRowHeightGetter(props.rowHeightGetter);
	    }
	
	    var columnResizingData;
	    if (props.isColumnResizing) {
	      columnResizingData = oldState && oldState.columnResizingData;
	    } else {
	      columnResizingData = EMPTY_OBJECT;
	    }
	
	    var columns;
	    var columnGroups;
	
	    if (useGroupHeader) {
	      var columnGroupSettings = FixedDataTableWidthHelper.adjustColumnGroupWidths(children, props.width);
	      columns = columnGroupSettings.columns;
	      columnGroups = columnGroupSettings.columnGroups;
	    } else {
	      columns = FixedDataTableWidthHelper.adjustColumnWidths(children, props.width);
	    }
	
	    var columnInfo = this._populateColumnsAndColumnData(columns, columnGroups, oldState);
	
	    if (this._columnToScrollTo !== undefined) {
	      // If selected column is a fixed column, don't scroll
	      var fixedColumnsCount = columnInfo.bodyFixedColumns.length;
	      if (this._columnToScrollTo >= fixedColumnsCount) {
	        var totalFixedColumnsWidth = 0;
	        var i, column;
	        for (i = 0; i < columnInfo.bodyFixedColumns.length; ++i) {
	          column = columnInfo.bodyFixedColumns[i];
	          totalFixedColumnsWidth += column.props.width;
	        }
	
	        var scrollableColumnIndex = Math.min(this._columnToScrollTo - fixedColumnsCount, columnInfo.bodyScrollableColumns.length - 1);
	
	        var previousColumnsWidth = 0;
	        for (i = 0; i < scrollableColumnIndex; ++i) {
	          column = columnInfo.bodyScrollableColumns[i];
	          previousColumnsWidth += column.props.width;
	        }
	
	        var availableScrollWidth = props.width - totalFixedColumnsWidth;
	        var selectedColumnWidth = columnInfo.bodyScrollableColumns[scrollableColumnIndex].props.width;
	        var minAcceptableScrollPosition = previousColumnsWidth + selectedColumnWidth - availableScrollWidth;
	
	        if (scrollX < minAcceptableScrollPosition) {
	          scrollX = minAcceptableScrollPosition;
	        }
	
	        if (scrollX > previousColumnsWidth) {
	          scrollX = previousColumnsWidth;
	        }
	      }
	      delete this._columnToScrollTo;
	    }
	
	    var useMaxHeight = props.height === undefined;
	    var height = Math.round(useMaxHeight ? props.maxHeight : props.height);
	    var totalHeightReserved = props.footerHeight + props.headerHeight + groupHeaderHeight + 2 * BORDER_HEIGHT;
	    var bodyHeight = height - totalHeightReserved;
	    var scrollContentHeight = this._scrollHelper.getContentHeight();
	    var totalHeightNeeded = scrollContentHeight + totalHeightReserved;
	    var scrollContentWidth = FixedDataTableWidthHelper.getTotalWidth(columns);
	
	    var horizontalScrollbarVisible = scrollContentWidth > props.width && props.overflowX !== 'hidden';
	
	    if (horizontalScrollbarVisible) {
	      bodyHeight -= Scrollbar.SIZE;
	      totalHeightNeeded += Scrollbar.SIZE;
	      totalHeightReserved += Scrollbar.SIZE;
	    }
	
	    var maxScrollX = Math.max(0, scrollContentWidth - props.width);
	    var maxScrollY = Math.max(0, scrollContentHeight - bodyHeight);
	    scrollX = Math.min(scrollX, maxScrollX);
	    scrollY = Math.min(scrollY, maxScrollY);
	
	    if (!maxScrollY) {
	      // no vertical scrollbar necessary, use the totals we tracked so we
	      // can shrink-to-fit vertically
	      if (useMaxHeight) {
	        height = totalHeightNeeded;
	      }
	      bodyHeight = totalHeightNeeded - totalHeightReserved;
	    }
	
	    this._scrollHelper.setViewportHeight(bodyHeight);
	
	    // The order of elements in this object metters and bringing bodyHeight,
	    // height or useGroupHeader to the top can break various features
	    var newState = _extends({
	      isColumnResizing: oldState && oldState.isColumnResizing
	    }, columnInfo, props, {
	
	      columns: columns,
	      columnGroups: columnGroups,
	      columnResizingData: columnResizingData,
	      firstRowIndex: firstRowIndex,
	      firstRowOffset: firstRowOffset,
	      horizontalScrollbarVisible: horizontalScrollbarVisible,
	      maxScrollX: maxScrollX,
	      maxScrollY: maxScrollY,
	      reservedHeight: totalHeightReserved,
	      scrollContentHeight: scrollContentHeight,
	      scrollX: scrollX,
	      scrollY: scrollY,
	
	      // These properties may overwrite properties defined in
	      // columnInfo and props
	      bodyHeight: bodyHeight,
	      height: height,
	      groupHeaderHeight: groupHeaderHeight,
	      useGroupHeader: useGroupHeader
	    });
	
	    return newState;
	  },
	
	  _selectColumnElement: function _selectColumnElement( /*string*/type, /*array*/columns) /*array*/{
	    var newColumns = [];
	    for (var i = 0; i < columns.length; ++i) {
	      var column = columns[i];
	      newColumns.push(React.cloneElement(column, {
	        cell: type ? column.props[type] : column.props[CELL]
	      }));
	    }
	    return newColumns;
	  },
	
	  _splitColumnTypes: function _splitColumnTypes( /*array*/columns) /*object*/{
	    var fixedColumns = [];
	    var scrollableColumns = [];
	    for (var i = 0; i < columns.length; ++i) {
	      if (columns[i].props.fixed) {
	        fixedColumns.push(columns[i]);
	      } else {
	        scrollableColumns.push(columns[i]);
	      }
	    }
	    return {
	      fixed: fixedColumns,
	      scrollable: scrollableColumns
	    };
	  },
	
	  _onWheel: function _onWheel( /*number*/deltaX, /*number*/deltaY) {
	    if (this.isMounted()) {
	      if (!this._isScrolling) {
	        this._didScrollStart();
	      }
	      var x = this.state.scrollX;
	      if (Math.abs(deltaY) > Math.abs(deltaX) && this.props.overflowY !== 'hidden') {
	        var scrollState = this._scrollHelper.scrollBy(Math.round(deltaY));
	        var maxScrollY = Math.max(0, scrollState.contentHeight - this.state.bodyHeight);
	        this.setState({
	          firstRowIndex: scrollState.index,
	          firstRowOffset: scrollState.offset,
	          scrollY: scrollState.position,
	          scrollContentHeight: scrollState.contentHeight,
	          maxScrollY: maxScrollY
	        });
	      } else if (deltaX && this.props.overflowX !== 'hidden') {
	        x += deltaX;
	        x = x < 0 ? 0 : x;
	        x = x > this.state.maxScrollX ? this.state.maxScrollX : x;
	        this.setState({
	          scrollX: x
	        });
	      }
	
	      this._didScrollStop();
	    }
	  },
	
	  _onHorizontalScroll: function _onHorizontalScroll( /*number*/scrollPos) {
	    if (this.isMounted() && scrollPos !== this.state.scrollX) {
	      if (!this._isScrolling) {
	        this._didScrollStart();
	      }
	      this.setState({
	        scrollX: scrollPos
	      });
	      this._didScrollStop();
	    }
	  },
	
	  _onVerticalScroll: function _onVerticalScroll( /*number*/scrollPos) {
	    if (this.isMounted() && scrollPos !== this.state.scrollY) {
	      if (!this._isScrolling) {
	        this._didScrollStart();
	      }
	      var scrollState = this._scrollHelper.scrollTo(Math.round(scrollPos));
	      this.setState({
	        firstRowIndex: scrollState.index,
	        firstRowOffset: scrollState.offset,
	        scrollY: scrollState.position,
	        scrollContentHeight: scrollState.contentHeight
	      });
	      this._didScrollStop();
	    }
	  },
	
	  _didScrollStart: function _didScrollStart() {
	    if (this.isMounted() && !this._isScrolling) {
	      this._isScrolling = true;
	      if (this.props.onScrollStart) {
	        this.props.onScrollStart(this.state.scrollX, this.state.scrollY);
	      }
	    }
	  },
	
	  _didScrollStop: function _didScrollStop() {
	    if (this.isMounted() && this._isScrolling) {
	      this._isScrolling = false;
	      this.setState({ redraw: true });
	      if (this.props.onScrollEnd) {
	        this.props.onScrollEnd(this.state.scrollX, this.state.scrollY);
	      }
	    }
	  }
	});
	
	var HorizontalScrollbar = React.createClass({
	  displayName: 'HorizontalScrollbar',
	
	  mixins: [ReactComponentWithPureRenderMixin],
	  propTypes: {
	    contentSize: PropTypes.number.isRequired,
	    offset: PropTypes.number.isRequired,
	    onScroll: PropTypes.func.isRequired,
	    position: PropTypes.number.isRequired,
	    size: PropTypes.number.isRequired
	  },
	
	  render: function render() /*object*/{
	    var outerContainerStyle = {
	      height: Scrollbar.SIZE,
	      width: this.props.size
	    };
	    var innerContainerStyle = {
	      height: Scrollbar.SIZE,
	      position: 'absolute',
	      overflow: 'hidden',
	      width: this.props.size
	    };
	    translateDOMPositionXY(innerContainerStyle, 0, this.props.offset);
	
	    return React.createElement(
	      'div',
	      {
	        className: joinClasses(cx('fixedDataTableLayout/horizontalScrollbar'), cx('public/fixedDataTable/horizontalScrollbar')),
	        style: outerContainerStyle },
	      React.createElement(
	        'div',
	        { style: innerContainerStyle },
	        React.createElement(Scrollbar, _extends({}, this.props, {
	          isOpaque: true,
	          orientation: 'horizontal',
	          offset: undefined
	        }))
	      )
	    );
	  }
	});
	
	module.exports = FixedDataTable;
	// isColumnResizing should be overwritten by value from props if
	// avaialble

/***/ },

/***/ 433:
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactComponentWithPureRenderMixin
	 */
	
	'use strict';
	
	/**
	 * Performs equality by iterating through keys on an object and returning
	 * false when any key has values which are not strictly equal between
	 * objA and objB. Returns true when the values of all keys are strictly equal.
	 *
	 * @return {boolean}
	 */
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }
	  var key;
	  // Test for A's keys different from B.
	  for (key in objA) {
	    if (objA.hasOwnProperty(key) && (!objB.hasOwnProperty(key) || objA[key] !== objB[key])) {
	      return false;
	    }
	  }
	  // Test for B's keys missing from A.
	  for (key in objB) {
	    if (objB.hasOwnProperty(key) && !objA.hasOwnProperty(key)) {
	      return false;
	    }
	  }
	  return true;
	}
	
	/**
	 * If your React component's render function is "pure", e.g. it will render the
	 * same result given the same props and state, provide this Mixin for a
	 * considerable performance boost.
	 *
	 * Most React components have pure render functions.
	 *
	 * Example:
	 *
	 *   var ReactComponentWithPureRenderMixin =
	 *     require('ReactComponentWithPureRenderMixin');
	 *   React.createClass({
	 *     mixins: [ReactComponentWithPureRenderMixin],
	 *
	 *     render: function() {
	 *       return <div className={this.props.className}>foo</div>;
	 *     }
	 *   });
	 *
	 * Note: This only checks shallow equality for props and state. If these contain
	 * complex data structures this mixin may have false-negatives for deeper
	 * differences. Only mixin to components which have simple props and state, or
	 * use `forceUpdate()` when you know deep data structures have changed.
	 */
	var ReactComponentWithPureRenderMixin = {
	  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
	    return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
	  }
	};
	
	module.exports = ReactComponentWithPureRenderMixin;

/***/ },

/***/ 434:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * This is utility that hanlds onWheel events and calls provided wheel
	 * callback with correct frame rate.
	 *
	 * @providesModule ReactWheelHandler
	 * @typechecks
	 */
	
	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var emptyFunction = __webpack_require__(435);
	var normalizeWheel = __webpack_require__(436);
	var requestAnimationFramePolyfill = __webpack_require__(440);
	
	var ReactWheelHandler = (function () {
	  /**
	   * onWheel is the callback that will be called with right frame rate if
	   * any wheel events happened
	   * onWheel should is to be called with two arguments: deltaX and deltaY in
	   * this order
	   */
	
	  function ReactWheelHandler(
	  /*function*/onWheel,
	  /*boolean|function*/handleScrollX,
	  /*boolean|function*/handleScrollY,
	  /*?boolean|?function*/stopPropagation) {
	    _classCallCheck(this, ReactWheelHandler);
	
	    this._animationFrameID = null;
	    this._deltaX = 0;
	    this._deltaY = 0;
	    this._didWheel = this._didWheel.bind(this);
	    if (typeof handleScrollX !== 'function') {
	      handleScrollX = handleScrollX ? emptyFunction.thatReturnsTrue : emptyFunction.thatReturnsFalse;
	    }
	
	    if (typeof handleScrollY !== 'function') {
	      handleScrollY = handleScrollY ? emptyFunction.thatReturnsTrue : emptyFunction.thatReturnsFalse;
	    }
	
	    if (typeof stopPropagation !== 'function') {
	      stopPropagation = stopPropagation ? emptyFunction.thatReturnsTrue : emptyFunction.thatReturnsFalse;
	    }
	
	    this._handleScrollX = handleScrollX;
	    this._handleScrollY = handleScrollY;
	    this._stopPropagation = stopPropagation;
	    this._onWheelCallback = onWheel;
	    this.onWheel = this.onWheel.bind(this);
	  }
	
	  _createClass(ReactWheelHandler, [{
	    key: 'onWheel',
	    value: function onWheel( /*object*/event) {
	      var normalizedEvent = normalizeWheel(event);
	      var deltaX = this._deltaX + normalizedEvent.pixelX;
	      var deltaY = this._deltaY + normalizedEvent.pixelY;
	      var handleScrollX = this._handleScrollX(deltaX, deltaY);
	      var handleScrollY = this._handleScrollY(deltaY, deltaX);
	      if (!handleScrollX && !handleScrollY) {
	        return;
	      }
	
	      this._deltaX += handleScrollX ? normalizedEvent.pixelX : 0;
	      this._deltaY += handleScrollY ? normalizedEvent.pixelY : 0;
	      event.preventDefault();
	
	      var changed;
	      if (this._deltaX !== 0 || this._deltaY !== 0) {
	        if (this._stopPropagation()) {
	          event.stopPropagation();
	        }
	        changed = true;
	      }
	
	      if (changed === true && this._animationFrameID === null) {
	        this._animationFrameID = requestAnimationFramePolyfill(this._didWheel);
	      }
	    }
	  }, {
	    key: '_didWheel',
	    value: function _didWheel() {
	      this._animationFrameID = null;
	      this._onWheelCallback(this._deltaX, this._deltaY);
	      this._deltaX = 0;
	      this._deltaY = 0;
	    }
	  }]);
	
	  return ReactWheelHandler;
	})();
	
	module.exports = ReactWheelHandler;

/***/ },

/***/ 435:
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule emptyFunction
	 */
	
	"use strict";
	
	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}
	
	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	function emptyFunction() {}
	
	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};
	
	module.exports = emptyFunction;

/***/ },

/***/ 436:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule normalizeWheel
	 * @typechecks
	 */
	
	'use strict';
	
	var UserAgent_DEPRECATED = __webpack_require__(437);
	
	var isEventSupported = __webpack_require__(438);
	
	// Reasonable defaults
	var PIXEL_STEP = 10;
	var LINE_HEIGHT = 40;
	var PAGE_HEIGHT = 800;
	
	/**
	 * Mouse wheel (and 2-finger trackpad) support on the web sucks.  It is
	 * complicated, thus this doc is long and (hopefully) detailed enough to answer
	 * your questions.
	 *
	 * If you need to react to the mouse wheel in a predictable way, this code is
	 * like your bestest friend. * hugs *
	 *
	 * As of today, there are 4 DOM event types you can listen to:
	 *
	 *   'wheel'                -- Chrome(31+), FF(17+), IE(9+)
	 *   'mousewheel'           -- Chrome, IE(6+), Opera, Safari
	 *   'MozMousePixelScroll'  -- FF(3.5 only!) (2010-2013) -- don't bother!
	 *   'DOMMouseScroll'       -- FF(0.9.7+) since 2003
	 *
	 * So what to do?  The is the best:
	 *
	 *   normalizeWheel.getEventType();
	 *
	 * In your event callback, use this code to get sane interpretation of the
	 * deltas.  This code will return an object with properties:
	 *
	 *   spinX   -- normalized spin speed (use for zoom) - x plane
	 *   spinY   -- " - y plane
	 *   pixelX  -- normalized distance (to pixels) - x plane
	 *   pixelY  -- " - y plane
	 *
	 * Wheel values are provided by the browser assuming you are using the wheel to
	 * scroll a web page by a number of lines or pixels (or pages).  Values can vary
	 * significantly on different platforms and browsers, forgetting that you can
	 * scroll at different speeds.  Some devices (like trackpads) emit more events
	 * at smaller increments with fine granularity, and some emit massive jumps with
	 * linear speed or acceleration.
	 *
	 * This code does its best to normalize the deltas for you:
	 *
	 *   - spin is trying to normalize how far the wheel was spun (or trackpad
	 *     dragged).  This is super useful for zoom support where you want to
	 *     throw away the chunky scroll steps on the PC and make those equal to
	 *     the slow and smooth tiny steps on the Mac. Key data: This code tries to
	 *     resolve a single slow step on a wheel to 1.
	 *
	 *   - pixel is normalizing the desired scroll delta in pixel units.  You'll
	 *     get the crazy differences between browsers, but at least it'll be in
	 *     pixels!
	 *
	 *   - positive value indicates scrolling DOWN/RIGHT, negative UP/LEFT.  This
	 *     should translate to positive value zooming IN, negative zooming OUT.
	 *     This matches the newer 'wheel' event.
	 *
	 * Why are there spinX, spinY (or pixels)?
	 *
	 *   - spinX is a 2-finger side drag on the trackpad, and a shift + wheel turn
	 *     with a mouse.  It results in side-scrolling in the browser by default.
	 *
	 *   - spinY is what you expect -- it's the classic axis of a mouse wheel.
	 *
	 *   - I dropped spinZ/pixelZ.  It is supported by the DOM 3 'wheel' event and
	 *     probably is by browsers in conjunction with fancy 3D controllers .. but
	 *     you know.
	 *
	 * Implementation info:
	 *
	 * Examples of 'wheel' event if you scroll slowly (down) by one step with an
	 * average mouse:
	 *
	 *   OS X + Chrome  (mouse)     -    4   pixel delta  (wheelDelta -120)
	 *   OS X + Safari  (mouse)     -  N/A   pixel delta  (wheelDelta  -12)
	 *   OS X + Firefox (mouse)     -    0.1 line  delta  (wheelDelta  N/A)
	 *   Win8 + Chrome  (mouse)     -  100   pixel delta  (wheelDelta -120)
	 *   Win8 + Firefox (mouse)     -    3   line  delta  (wheelDelta -120)
	 *
	 * On the trackpad:
	 *
	 *   OS X + Chrome  (trackpad)  -    2   pixel delta  (wheelDelta   -6)
	 *   OS X + Firefox (trackpad)  -    1   pixel delta  (wheelDelta  N/A)
	 *
	 * On other/older browsers.. it's more complicated as there can be multiple and
	 * also missing delta values.
	 *
	 * The 'wheel' event is more standard:
	 *
	 * http://www.w3.org/TR/DOM-Level-3-Events/#events-wheelevents
	 *
	 * The basics is that it includes a unit, deltaMode (pixels, lines, pages), and
	 * deltaX, deltaY and deltaZ.  Some browsers provide other values to maintain
	 * backward compatibility with older events.  Those other values help us
	 * better normalize spin speed.  Example of what the browsers provide:
	 *
	 *                          | event.wheelDelta | event.detail
	 *        ------------------+------------------+--------------
	 *          Safari v5/OS X  |       -120       |       0
	 *          Safari v5/Win7  |       -120       |       0
	 *         Chrome v17/OS X  |       -120       |       0
	 *         Chrome v17/Win7  |       -120       |       0
	 *                IE9/Win7  |       -120       |   undefined
	 *         Firefox v4/OS X  |     undefined    |       1
	 *         Firefox v4/Win7  |     undefined    |       3
	 *
	 */
	function normalizeWheel( /*object*/event) /*object*/{
	  var sX = 0,
	      sY = 0,
	      // spinX, spinY
	  pX = 0,
	      pY = 0; // pixelX, pixelY
	
	  // Legacy
	  if ('detail' in event) {
	    sY = event.detail;
	  }
	  if ('wheelDelta' in event) {
	    sY = -event.wheelDelta / 120;
	  }
	  if ('wheelDeltaY' in event) {
	    sY = -event.wheelDeltaY / 120;
	  }
	  if ('wheelDeltaX' in event) {
	    sX = -event.wheelDeltaX / 120;
	  }
	
	  // side scrolling on FF with DOMMouseScroll
	  if ('axis' in event && event.axis === event.HORIZONTAL_AXIS) {
	    sX = sY;
	    sY = 0;
	  }
	
	  pX = sX * PIXEL_STEP;
	  pY = sY * PIXEL_STEP;
	
	  if ('deltaY' in event) {
	    pY = event.deltaY;
	  }
	  if ('deltaX' in event) {
	    pX = event.deltaX;
	  }
	
	  if ((pX || pY) && event.deltaMode) {
	    if (event.deltaMode == 1) {
	      // delta in LINE units
	      pX *= LINE_HEIGHT;
	      pY *= LINE_HEIGHT;
	    } else {
	      // delta in PAGE units
	      pX *= PAGE_HEIGHT;
	      pY *= PAGE_HEIGHT;
	    }
	  }
	
	  // Fall-back if spin cannot be determined
	  if (pX && !sX) {
	    sX = pX < 1 ? -1 : 1;
	  }
	  if (pY && !sY) {
	    sY = pY < 1 ? -1 : 1;
	  }
	
	  return { spinX: sX,
	    spinY: sY,
	    pixelX: pX,
	    pixelY: pY };
	}
	
	/**
	 * The best combination if you prefer spinX + spinY normalization.  It favors
	 * the older DOMMouseScroll for Firefox, as FF does not include wheelDelta with
	 * 'wheel' event, making spin speed determination impossible.
	 */
	normalizeWheel.getEventType = function () /*string*/{
	  return UserAgent_DEPRECATED.firefox() ? 'DOMMouseScroll' : isEventSupported('wheel') ? 'wheel' : 'mousewheel';
	};
	
	module.exports = normalizeWheel;

/***/ },

/***/ 437:
/***/ function(module, exports) {

	/**
	 * Copyright 2004-present Facebook. All Rights Reserved.
	 *
	 * @providesModule UserAgent_DEPRECATED
	 */
	
	/**
	 *  Provides entirely client-side User Agent and OS detection. You should prefer
	 *  the non-deprecated UserAgent module when possible, which exposes our
	 *  authoritative server-side PHP-based detection to the client.
	 *
	 *  Usage is straightforward:
	 *
	 *    if (UserAgent_DEPRECATED.ie()) {
	 *      //  IE
	 *    }
	 *
	 *  You can also do version checks:
	 *
	 *    if (UserAgent_DEPRECATED.ie() >= 7) {
	 *      //  IE7 or better
	 *    }
	 *
	 *  The browser functions will return NaN if the browser does not match, so
	 *  you can also do version compares the other way:
	 *
	 *    if (UserAgent_DEPRECATED.ie() < 7) {
	 *      //  IE6 or worse
	 *    }
	 *
	 *  Note that the version is a float and may include a minor version number,
	 *  so you should always use range operators to perform comparisons, not
	 *  strict equality.
	 *
	 *  **Note:** You should **strongly** prefer capability detection to browser
	 *  version detection where it's reasonable:
	 *
	 *    http://www.quirksmode.org/js/support.html
	 *
	 *  Further, we have a large number of mature wrapper functions and classes
	 *  which abstract away many browser irregularities. Check the documentation,
	 *  grep for things, or ask on javascript@lists.facebook.com before writing yet
	 *  another copy of "event || window.event".
	 *
	 */
	
	'use strict';
	
	var _populated = false;
	
	// Browsers
	var _ie, _firefox, _opera, _webkit, _chrome;
	
	// Actual IE browser for compatibility mode
	var _ie_real_version;
	
	// Platforms
	var _osx, _windows, _linux, _android;
	
	// Architectures
	var _win64;
	
	// Devices
	var _iphone, _ipad, _native;
	
	var _mobile;
	
	function _populate() {
	  if (_populated) {
	    return;
	  }
	
	  _populated = true;
	
	  // To work around buggy JS libraries that can't handle multi-digit
	  // version numbers, Opera 10's user agent string claims it's Opera
	  // 9, then later includes a Version/X.Y field:
	  //
	  // Opera/9.80 (foo) Presto/2.2.15 Version/10.10
	  var uas = navigator.userAgent;
	  var agent = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(uas);
	  var os = /(Mac OS X)|(Windows)|(Linux)/.exec(uas);
	
	  _iphone = /\b(iPhone|iP[ao]d)/.exec(uas);
	  _ipad = /\b(iP[ao]d)/.exec(uas);
	  _android = /Android/i.exec(uas);
	  _native = /FBAN\/\w+;/i.exec(uas);
	  _mobile = /Mobile/i.exec(uas);
	
	  // Note that the IE team blog would have you believe you should be checking
	  // for 'Win64; x64'.  But MSDN then reveals that you can actually be coming
	  // from either x64 or ia64;  so ultimately, you should just check for Win64
	  // as in indicator of whether you're in 64-bit IE.  32-bit IE on 64-bit
	  // Windows will send 'WOW64' instead.
	  _win64 = !!/Win64/.exec(uas);
	
	  if (agent) {
	    _ie = agent[1] ? parseFloat(agent[1]) : agent[5] ? parseFloat(agent[5]) : NaN;
	    // IE compatibility mode
	    if (_ie && document && document.documentMode) {
	      _ie = document.documentMode;
	    }
	    // grab the "true" ie version from the trident token if available
	    var trident = /(?:Trident\/(\d+.\d+))/.exec(uas);
	    _ie_real_version = trident ? parseFloat(trident[1]) + 4 : _ie;
	
	    _firefox = agent[2] ? parseFloat(agent[2]) : NaN;
	    _opera = agent[3] ? parseFloat(agent[3]) : NaN;
	    _webkit = agent[4] ? parseFloat(agent[4]) : NaN;
	    if (_webkit) {
	      // We do not add the regexp to the above test, because it will always
	      // match 'safari' only since 'AppleWebKit' appears before 'Chrome' in
	      // the userAgent string.
	      agent = /(?:Chrome\/(\d+\.\d+))/.exec(uas);
	      _chrome = agent && agent[1] ? parseFloat(agent[1]) : NaN;
	    } else {
	      _chrome = NaN;
	    }
	  } else {
	    _ie = _firefox = _opera = _chrome = _webkit = NaN;
	  }
	
	  if (os) {
	    if (os[1]) {
	      // Detect OS X version.  If no version number matches, set _osx to true.
	      // Version examples:  10, 10_6_1, 10.7
	      // Parses version number as a float, taking only first two sets of
	      // digits.  If only one set of digits is found, returns just the major
	      // version number.
	      var ver = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(uas);
	
	      _osx = ver ? parseFloat(ver[1].replace('_', '.')) : true;
	    } else {
	      _osx = false;
	    }
	    _windows = !!os[2];
	    _linux = !!os[3];
	  } else {
	    _osx = _windows = _linux = false;
	  }
	}
	
	var UserAgent_DEPRECATED = {
	
	  /**
	   *  Check if the UA is Internet Explorer.
	   *
	   *
	   *  @return float|NaN Version number (if match) or NaN.
	   */
	  ie: function ie() {
	    return _populate() || _ie;
	  },
	
	  /**
	   * Check if we're in Internet Explorer compatibility mode.
	   *
	   * @return bool true if in compatibility mode, false if
	   * not compatibility mode or not ie
	   */
	  ieCompatibilityMode: function ieCompatibilityMode() {
	    return _populate() || _ie_real_version > _ie;
	  },
	
	  /**
	   * Whether the browser is 64-bit IE.  Really, this is kind of weak sauce;  we
	   * only need this because Skype can't handle 64-bit IE yet.  We need to remove
	   * this when we don't need it -- tracked by #601957.
	   */
	  ie64: function ie64() {
	    return UserAgent_DEPRECATED.ie() && _win64;
	  },
	
	  /**
	   *  Check if the UA is Firefox.
	   *
	   *
	   *  @return float|NaN Version number (if match) or NaN.
	   */
	  firefox: function firefox() {
	    return _populate() || _firefox;
	  },
	
	  /**
	   *  Check if the UA is Opera.
	   *
	   *
	   *  @return float|NaN Version number (if match) or NaN.
	   */
	  opera: function opera() {
	    return _populate() || _opera;
	  },
	
	  /**
	   *  Check if the UA is WebKit.
	   *
	   *
	   *  @return float|NaN Version number (if match) or NaN.
	   */
	  webkit: function webkit() {
	    return _populate() || _webkit;
	  },
	
	  /**
	   *  For Push
	   *  WILL BE REMOVED VERY SOON. Use UserAgent_DEPRECATED.webkit
	   */
	  safari: function safari() {
	    return UserAgent_DEPRECATED.webkit();
	  },
	
	  /**
	   *  Check if the UA is a Chrome browser.
	   *
	   *
	   *  @return float|NaN Version number (if match) or NaN.
	   */
	  chrome: function chrome() {
	    return _populate() || _chrome;
	  },
	
	  /**
	   *  Check if the user is running Windows.
	   *
	   *  @return bool `true' if the user's OS is Windows.
	   */
	  windows: function windows() {
	    return _populate() || _windows;
	  },
	
	  /**
	   *  Check if the user is running Mac OS X.
	   *
	   *  @return float|bool   Returns a float if a version number is detected,
	   *                       otherwise true/false.
	   */
	  osx: function osx() {
	    return _populate() || _osx;
	  },
	
	  /**
	   * Check if the user is running Linux.
	   *
	   * @return bool `true' if the user's OS is some flavor of Linux.
	   */
	  linux: function linux() {
	    return _populate() || _linux;
	  },
	
	  /**
	   * Check if the user is running on an iPhone or iPod platform.
	   *
	   * @return bool `true' if the user is running some flavor of the
	   *    iPhone OS.
	   */
	  iphone: function iphone() {
	    return _populate() || _iphone;
	  },
	
	  mobile: function mobile() {
	    return _populate() || _iphone || _ipad || _android || _mobile;
	  },
	
	  nativeApp: function nativeApp() {
	    // webviews inside of the native apps
	    return _populate() || _native;
	  },
	
	  android: function android() {
	    return _populate() || _android;
	  },
	
	  ipad: function ipad() {
	    return _populate() || _ipad;
	  }
	};
	
	module.exports = UserAgent_DEPRECATED;

/***/ },

/***/ 438:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule isEventSupported
	 */
	
	'use strict';
	
	var ExecutionEnvironment = __webpack_require__(439);
	
	var useHasFeature;
	if (ExecutionEnvironment.canUseDOM) {
	  useHasFeature = document.implementation && document.implementation.hasFeature &&
	  // always returns true in newer browsers as per the standard.
	  // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
	  document.implementation.hasFeature('', '') !== true;
	}
	
	/**
	 * Checks if an event is supported in the current execution environment.
	 *
	 * NOTE: This will not work correctly for non-generic events such as `change`,
	 * `reset`, `load`, `error`, and `select`.
	 *
	 * Borrows from Modernizr.
	 *
	 * @param {string} eventNameSuffix Event name, e.g. "click".
	 * @param {?boolean} capture Check if the capture phase is supported.
	 * @return {boolean} True if the event is supported.
	 * @internal
	 * @license Modernizr 3.0.0pre (Custom Build) | MIT
	 */
	function isEventSupported(eventNameSuffix, capture) {
	  if (!ExecutionEnvironment.canUseDOM || capture && !('addEventListener' in document)) {
	    return false;
	  }
	
	  var eventName = 'on' + eventNameSuffix;
	  var isSupported = (eventName in document);
	
	  if (!isSupported) {
	    var element = document.createElement('div');
	    element.setAttribute(eventName, 'return;');
	    isSupported = typeof element[eventName] === 'function';
	  }
	
	  if (!isSupported && useHasFeature && eventNameSuffix === 'wheel') {
	    // This is the only way to test support for the `wheel` event in IE9+.
	    isSupported = document.implementation.hasFeature('Events.wheel', '3.0');
	  }
	
	  return isSupported;
	}
	
	module.exports = isEventSupported;

/***/ },

/***/ 439:
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ExecutionEnvironment
	 */
	
	/*jslint evil: true */
	
	'use strict';
	
	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	
	/**
	 * Simple, lightweight module assisting with the detection and context of
	 * Worker. Helps avoid circular dependencies and allows code to reason about
	 * whether or not they are in a Worker, even if they never include the main
	 * `ReactWorker` dependency.
	 */
	var ExecutionEnvironment = {
	
	  canUseDOM: canUseDOM,
	
	  canUseWorkers: typeof Worker !== 'undefined',
	
	  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),
	
	  canUseViewport: canUseDOM && !!window.screen,
	
	  isInWorker: !canUseDOM // For now, this is true - might change in the future.
	
	};
	
	module.exports = ExecutionEnvironment;

/***/ },

/***/ 440:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule requestAnimationFramePolyfill
	 */
	
	'use strict';
	
	var emptyFunction = __webpack_require__(435);
	var nativeRequestAnimationFrame = __webpack_require__(441);
	
	var lastTime = 0;
	
	/**
	 * Here is the native and polyfill version of requestAnimationFrame.
	 * Please don't use it directly and use requestAnimationFrame module instead.
	 */
	var requestAnimationFrame = nativeRequestAnimationFrame || function (callback) {
	  var currTime = Date.now();
	  var timeDelay = Math.max(0, 16 - (currTime - lastTime));
	  lastTime = currTime + timeDelay;
	  return global.setTimeout(function () {
	    callback(Date.now());
	  }, timeDelay);
	};
	
	// Works around a rare bug in Safari 6 where the first request is never invoked.
	requestAnimationFrame(emptyFunction);
	
	module.exports = requestAnimationFrame;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 441:
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule nativeRequestAnimationFrame
	 */
	
	"use strict";
	
	var nativeRequestAnimationFrame = global.requestAnimationFrame || global.webkitRequestAnimationFrame || global.mozRequestAnimationFrame || global.oRequestAnimationFrame || global.msRequestAnimationFrame;
	
	module.exports = nativeRequestAnimationFrame;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 442:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Scrollbar.react
	 * @typechecks
	 */
	
	'use strict';
	
	var DOMMouseMoveTracker = __webpack_require__(443);
	var Keys = __webpack_require__(446);
	var React = __webpack_require__(431);
	var ReactDOM = __webpack_require__(447);
	var ReactComponentWithPureRenderMixin = __webpack_require__(433);
	var ReactWheelHandler = __webpack_require__(434);
	
	var cssVar = __webpack_require__(448);
	var cx = __webpack_require__(449);
	var emptyFunction = __webpack_require__(435);
	var translateDOMPositionXY = __webpack_require__(450);
	
	var PropTypes = React.PropTypes;
	
	var UNSCROLLABLE_STATE = {
	  position: 0,
	  scrollable: false
	};
	
	var FACE_MARGIN = parseInt(cssVar('scrollbar-face-margin'), 10);
	var FACE_MARGIN_2 = FACE_MARGIN * 2;
	var FACE_SIZE_MIN = 30;
	var KEYBOARD_SCROLL_AMOUNT = 40;
	
	var _lastScrolledScrollbar = null;
	
	var Scrollbar = React.createClass({
	  displayName: 'Scrollbar',
	
	  mixins: [ReactComponentWithPureRenderMixin],
	
	  propTypes: {
	    contentSize: PropTypes.number.isRequired,
	    defaultPosition: PropTypes.number,
	    isOpaque: PropTypes.bool,
	    orientation: PropTypes.oneOf(['vertical', 'horizontal']),
	    onScroll: PropTypes.func,
	    position: PropTypes.number,
	    size: PropTypes.number.isRequired,
	    trackColor: PropTypes.oneOf(['gray']),
	    zIndex: PropTypes.number,
	    verticalTop: PropTypes.number
	  },
	
	  getInitialState: function getInitialState() /*object*/{
	    var props = this.props;
	    return this._calculateState(props.position || props.defaultPosition || 0, props.size, props.contentSize, props.orientation);
	  },
	
	  componentWillReceiveProps: function componentWillReceiveProps( /*object*/nextProps) {
	    var controlledPosition = nextProps.position;
	    if (controlledPosition === undefined) {
	      this._setNextState(this._calculateState(this.state.position, nextProps.size, nextProps.contentSize, nextProps.orientation));
	    } else {
	      this._setNextState(this._calculateState(controlledPosition, nextProps.size, nextProps.contentSize, nextProps.orientation), nextProps);
	    }
	  },
	
	  getDefaultProps: function getDefaultProps() /*object*/{
	    return {
	      defaultPosition: 0,
	      isOpaque: false,
	      onScroll: emptyFunction,
	      orientation: 'vertical',
	      zIndex: 99
	    };
	  },
	
	  render: function render() /*?object*/{
	    if (!this.state.scrollable) {
	      return null;
	    }
	
	    var size = this.props.size;
	    var mainStyle;
	    var faceStyle;
	    var isHorizontal = this.state.isHorizontal;
	    var isVertical = !isHorizontal;
	    var isActive = this.state.focused || this.state.isDragging;
	    var faceSize = this.state.faceSize;
	    var isOpaque = this.props.isOpaque;
	    var verticalTop = this.props.verticalTop || 0;
	
	    var mainClassName = cx({
	      'ScrollbarLayout/main': true,
	      'ScrollbarLayout/mainVertical': isVertical,
	      'ScrollbarLayout/mainHorizontal': isHorizontal,
	      'public/Scrollbar/main': true,
	      'public/Scrollbar/mainOpaque': isOpaque,
	      'public/Scrollbar/mainActive': isActive
	    });
	
	    var faceClassName = cx({
	      'ScrollbarLayout/face': true,
	      'ScrollbarLayout/faceHorizontal': isHorizontal,
	      'ScrollbarLayout/faceVertical': isVertical,
	      'public/Scrollbar/faceActive': isActive,
	      'public/Scrollbar/face': true
	    });
	
	    var position = this.state.position * this.state.scale + FACE_MARGIN;
	
	    if (isHorizontal) {
	      mainStyle = {
	        width: size
	      };
	      faceStyle = {
	        width: faceSize - FACE_MARGIN_2
	      };
	      translateDOMPositionXY(faceStyle, position, 0);
	    } else {
	      mainStyle = {
	        top: verticalTop,
	        height: size
	      };
	      faceStyle = {
	        height: faceSize - FACE_MARGIN_2
	      };
	      translateDOMPositionXY(faceStyle, 0, position);
	    }
	
	    mainStyle.zIndex = this.props.zIndex;
	
	    if (this.props.trackColor === 'gray') {
	      mainStyle.backgroundColor = cssVar('fbui-desktop-background-light');
	    }
	
	    return React.createElement(
	      'div',
	      {
	        onFocus: this._onFocus,
	        onBlur: this._onBlur,
	        onKeyDown: this._onKeyDown,
	        onMouseDown: this._onMouseDown,
	        onWheel: this._wheelHandler.onWheel,
	        className: mainClassName,
	        style: mainStyle,
	        tabIndex: 0 },
	      React.createElement('div', {
	        ref: 'face',
	        className: faceClassName,
	        style: faceStyle
	      })
	    );
	  },
	
	  componentWillMount: function componentWillMount() {
	    var isHorizontal = this.props.orientation === 'horizontal';
	    var onWheel = isHorizontal ? this._onWheelX : this._onWheelY;
	
	    this._wheelHandler = new ReactWheelHandler(onWheel, this._shouldHandleX, // Should hanlde horizontal scroll
	    this._shouldHandleY // Should handle vertical scroll
	    );
	  },
	
	  componentDidMount: function componentDidMount() {
	    this._mouseMoveTracker = new DOMMouseMoveTracker(this._onMouseMove, this._onMouseMoveEnd, document.documentElement);
	
	    if (this.props.position !== undefined && this.state.position !== this.props.position) {
	      this._didScroll();
	    }
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    this._nextState = null;
	    this._mouseMoveTracker.releaseMouseMoves();
	    if (_lastScrolledScrollbar === this) {
	      _lastScrolledScrollbar = null;
	    }
	    delete this._mouseMoveTracker;
	  },
	
	  scrollBy: function scrollBy( /*number*/delta) {
	    this._onWheel(delta);
	  },
	
	  _shouldHandleX: function _shouldHandleX( /*number*/delta) /*boolean*/{
	    return this.props.orientation === 'horizontal' ? this._shouldHandleChange(delta) : false;
	  },
	
	  _shouldHandleY: function _shouldHandleY( /*number*/delta) /*boolean*/{
	    return this.props.orientation !== 'horizontal' ? this._shouldHandleChange(delta) : false;
	  },
	
	  _shouldHandleChange: function _shouldHandleChange( /*number*/delta) /*boolean*/{
	    var nextState = this._calculateState(this.state.position + delta, this.props.size, this.props.contentSize, this.props.orientation);
	    return nextState.position !== this.state.position;
	  },
	
	  _calculateState: function _calculateState(
	  /*number*/position,
	  /*number*/size,
	  /*number*/contentSize,
	  /*string*/orientation) /*object*/{
	    if (size < 1 || contentSize <= size) {
	      return UNSCROLLABLE_STATE;
	    }
	
	    var stateKey = position + '_' + size + '_' + contentSize + '_' + orientation;
	    if (this._stateKey === stateKey) {
	      return this._stateForKey;
	    }
	
	    // There are two types of positions here.
	    // 1) Phisical position: changed by mouse / keyboard
	    // 2) Logical position: changed by props.
	    // The logical position will be kept as as internal state and the `render()`
	    // function will translate it into physical position to render.
	
	    var isHorizontal = orientation === 'horizontal';
	    var scale = size / contentSize;
	    var faceSize = size * scale;
	
	    if (faceSize < FACE_SIZE_MIN) {
	      scale = (size - FACE_SIZE_MIN) / (contentSize - size);
	      faceSize = FACE_SIZE_MIN;
	    }
	
	    var scrollable = true;
	    var maxPosition = contentSize - size;
	
	    if (position < 0) {
	      position = 0;
	    } else if (position > maxPosition) {
	      position = maxPosition;
	    }
	
	    var isDragging = this._mouseMoveTracker ? this._mouseMoveTracker.isDragging() : false;
	
	    // This function should only return flat values that can be compared quiclky
	    // by `ReactComponentWithPureRenderMixin`.
	    var state = {
	      faceSize: faceSize,
	      isDragging: isDragging,
	      isHorizontal: isHorizontal,
	      position: position,
	      scale: scale,
	      scrollable: scrollable
	    };
	
	    // cache the state for later use.
	    this._stateKey = stateKey;
	    this._stateForKey = state;
	    return state;
	  },
	
	  _onWheelY: function _onWheelY( /*number*/deltaX, /*number*/deltaY) {
	    this._onWheel(deltaY);
	  },
	
	  _onWheelX: function _onWheelX( /*number*/deltaX, /*number*/deltaY) {
	    this._onWheel(deltaX);
	  },
	
	  _onWheel: function _onWheel( /*number*/delta) {
	    var props = this.props;
	
	    // The mouse may move faster then the animation frame does.
	    // Use `requestAnimationFrame` to avoid over-updating.
	    this._setNextState(this._calculateState(this.state.position + delta, props.size, props.contentSize, props.orientation));
	  },
	
	  _onMouseDown: function _onMouseDown( /*object*/event) {
	    var nextState;
	
	    if (event.target !== ReactDOM.findDOMNode(this.refs.face)) {
	      // Both `offsetX` and `layerX` are non-standard DOM property but they are
	      // magically available for browsers somehow.
	      var nativeEvent = event.nativeEvent;
	      var position = this.state.isHorizontal ? nativeEvent.offsetX || nativeEvent.layerX : nativeEvent.offsetY || nativeEvent.layerY;
	
	      // MouseDown on the scroll-track directly, move the center of the
	      // scroll-face to the mouse position.
	      var props = this.props;
	      position /= this.state.scale;
	      nextState = this._calculateState(position - this.state.faceSize * 0.5 / this.state.scale, props.size, props.contentSize, props.orientation);
	    } else {
	      nextState = {};
	    }
	
	    nextState.focused = true;
	    this._setNextState(nextState);
	
	    this._mouseMoveTracker.captureMouseMoves(event);
	    // Focus the node so it may receive keyboard event.
	    ReactDOM.findDOMNode(this).focus();
	  },
	
	  _onMouseMove: function _onMouseMove( /*number*/deltaX, /*number*/deltaY) {
	    var props = this.props;
	    var delta = this.state.isHorizontal ? deltaX : deltaY;
	    delta /= this.state.scale;
	
	    this._setNextState(this._calculateState(this.state.position + delta, props.size, props.contentSize, props.orientation));
	  },
	
	  _onMouseMoveEnd: function _onMouseMoveEnd() {
	    this._nextState = null;
	    this._mouseMoveTracker.releaseMouseMoves();
	    this.setState({ isDragging: false });
	  },
	
	  _onKeyDown: function _onKeyDown( /*object*/event) {
	    var keyCode = event.keyCode;
	
	    if (keyCode === Keys.TAB) {
	      // Let focus move off the scrollbar.
	      return;
	    }
	
	    var distance = KEYBOARD_SCROLL_AMOUNT;
	    var direction = 0;
	
	    if (this.state.isHorizontal) {
	      switch (keyCode) {
	        case Keys.HOME:
	          direction = -1;
	          distance = this.props.contentSize;
	          break;
	
	        case Keys.LEFT:
	          direction = -1;
	          break;
	
	        case Keys.RIGHT:
	          direction = 1;
	          break;
	
	        default:
	          return;
	      }
	    }
	
	    if (!this.state.isHorizontal) {
	      switch (keyCode) {
	        case Keys.SPACE:
	          if (event.shiftKey) {
	            direction = -1;
	          } else {
	            direction = 1;
	          }
	          break;
	
	        case Keys.HOME:
	          direction = -1;
	          distance = this.props.contentSize;
	          break;
	
	        case Keys.UP:
	          direction = -1;
	          break;
	
	        case Keys.DOWN:
	          direction = 1;
	          break;
	
	        case Keys.PAGE_UP:
	          direction = -1;
	          distance = this.props.size;
	          break;
	
	        case Keys.PAGE_DOWN:
	          direction = 1;
	          distance = this.props.size;
	          break;
	
	        default:
	          return;
	      }
	    }
	
	    event.preventDefault();
	
	    var props = this.props;
	    this._setNextState(this._calculateState(this.state.position + distance * direction, props.size, props.contentSize, props.orientation));
	  },
	
	  _onFocus: function _onFocus() {
	    this.setState({
	      focused: true
	    });
	  },
	
	  _onBlur: function _onBlur() {
	    this.setState({
	      focused: false
	    });
	  },
	
	  _blur: function _blur() {
	    if (this.isMounted()) {
	      try {
	        this._onBlur();
	        ReactDOM.findDOMNode(this).blur();
	      } catch (oops) {
	        // pass
	      }
	    }
	  },
	
	  _setNextState: function _setNextState( /*object*/nextState, /*?object*/props) {
	    props = props || this.props;
	    var controlledPosition = props.position;
	    var willScroll = this.state.position !== nextState.position;
	    if (controlledPosition === undefined) {
	      var callback = willScroll ? this._didScroll : undefined;
	      this.setState(nextState, callback);
	    } else if (controlledPosition === nextState.position) {
	      this.setState(nextState);
	    } else {
	      // Scrolling is controlled. Don't update the state and let the owner
	      // to update the scrollbar instead.
	      if (nextState.position !== undefined && nextState.position !== this.state.position) {
	        this.props.onScroll(nextState.position);
	      }
	      return;
	    }
	
	    if (willScroll && _lastScrolledScrollbar !== this) {
	      _lastScrolledScrollbar && _lastScrolledScrollbar._blur();
	      _lastScrolledScrollbar = this;
	    }
	  },
	
	  _didScroll: function _didScroll() {
	    this.props.onScroll(this.state.position);
	  }
	});
	
	Scrollbar.KEYBOARD_SCROLL_AMOUNT = KEYBOARD_SCROLL_AMOUNT;
	Scrollbar.SIZE = parseInt(cssVar('scrollbar-size'), 10);
	
	module.exports = Scrollbar;

/***/ },

/***/ 443:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * This class listens to events on the document and then updates a react
	 * component through callbacks.
	 * Please note that captureMouseMove must be called in
	 * order to initialize listeners on mousemove and mouseup.
	 * releaseMouseMove must be called to remove them. It is important to
	 * call releaseMouseMoves since mousemove is expensive to listen to.
	 *
	 * @providesModule DOMMouseMoveTracker
	 * @typechecks
	 */
	
	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var EventListener = __webpack_require__(444);
	
	var cancelAnimationFramePolyfill = __webpack_require__(445);
	var requestAnimationFramePolyfill = __webpack_require__(440);
	
	var DOMMouseMoveTracker = (function () {
	  /**
	   * onMove is the callback that will be called on every mouse move.
	   * onMoveEnd is called on mouse up when movement has ended.
	   */
	
	  function DOMMouseMoveTracker(
	  /*function*/onMove,
	  /*function*/onMoveEnd,
	  /*DOMElement*/domNode) {
	    _classCallCheck(this, DOMMouseMoveTracker);
	
	    this._isDragging = false;
	    this._animationFrameID = null;
	    this._domNode = domNode;
	    this._onMove = onMove;
	    this._onMoveEnd = onMoveEnd;
	    this._onMouseMove = this._onMouseMove.bind(this);
	    this._onMouseUp = this._onMouseUp.bind(this);
	    this._didMouseMove = this._didMouseMove.bind(this);
	  }
	
	  /**
	   * This is to set up the listeners for listening to mouse move
	   * and mouse up signaling the movement has ended. Please note that these
	   * listeners are added at the document.body level. It takes in an event
	   * in order to grab inital state.
	   */
	
	  _createClass(DOMMouseMoveTracker, [{
	    key: 'captureMouseMoves',
	    value: function captureMouseMoves( /*object*/event) {
	      if (!this._eventMoveToken && !this._eventUpToken) {
	        this._eventMoveToken = EventListener.listen(this._domNode, 'mousemove', this._onMouseMove);
	        this._eventUpToken = EventListener.listen(this._domNode, 'mouseup', this._onMouseUp);
	      }
	
	      if (!this._isDragging) {
	        this._deltaX = 0;
	        this._deltaY = 0;
	        this._isDragging = true;
	        this._x = event.clientX;
	        this._y = event.clientY;
	      }
	      event.preventDefault();
	    }
	
	    /**
	     * These releases all of the listeners on document.body.
	     */
	  }, {
	    key: 'releaseMouseMoves',
	    value: function releaseMouseMoves() {
	      if (this._eventMoveToken && this._eventUpToken) {
	        this._eventMoveToken.remove();
	        this._eventMoveToken = null;
	        this._eventUpToken.remove();
	        this._eventUpToken = null;
	      }
	
	      if (this._animationFrameID !== null) {
	        cancelAnimationFramePolyfill(this._animationFrameID);
	        this._animationFrameID = null;
	      }
	
	      if (this._isDragging) {
	        this._isDragging = false;
	        this._x = null;
	        this._y = null;
	      }
	    }
	
	    /**
	     * Returns whether or not if the mouse movement is being tracked.
	     */
	  }, {
	    key: 'isDragging',
	    value: function isDragging() /*boolean*/{
	      return this._isDragging;
	    }
	
	    /**
	     * Calls onMove passed into constructor and updates internal state.
	     */
	  }, {
	    key: '_onMouseMove',
	    value: function _onMouseMove( /*object*/event) {
	      var x = event.clientX;
	      var y = event.clientY;
	
	      this._deltaX += x - this._x;
	      this._deltaY += y - this._y;
	
	      if (this._animationFrameID === null) {
	        // The mouse may move faster then the animation frame does.
	        // Use `requestAnimationFramePolyfill` to avoid over-updating.
	        this._animationFrameID = requestAnimationFramePolyfill(this._didMouseMove);
	      }
	
	      this._x = x;
	      this._y = y;
	      event.preventDefault();
	    }
	  }, {
	    key: '_didMouseMove',
	    value: function _didMouseMove() {
	      this._animationFrameID = null;
	      this._onMove(this._deltaX, this._deltaY);
	      this._deltaX = 0;
	      this._deltaY = 0;
	    }
	
	    /**
	     * Calls onMoveEnd passed into constructor and updates internal state.
	     */
	  }, {
	    key: '_onMouseUp',
	    value: function _onMouseUp() {
	      if (this._animationFrameID) {
	        this._didMouseMove();
	      }
	      this._onMoveEnd();
	    }
	  }]);
	
	  return DOMMouseMoveTracker;
	})();
	
	module.exports = DOMMouseMoveTracker;

/***/ },

/***/ 444:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule EventListener
	 * @typechecks
	 */
	
	'use strict';
	
	var emptyFunction = __webpack_require__(435);
	
	/**
	 * Upstream version of event listener. Does not take into account specific
	 * nature of platform.
	 */
	var EventListener = {
	  /**
	   * Listen to DOM events during the bubble phase.
	   *
	   * @param {DOMEventTarget} target DOM element to register listener on.
	   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
	   * @param {function} callback Callback function.
	   * @return {object} Object with a `remove` method.
	   */
	  listen: function listen(target, eventType, callback) {
	    if (target.addEventListener) {
	      target.addEventListener(eventType, callback, false);
	      return {
	        remove: function remove() {
	          target.removeEventListener(eventType, callback, false);
	        }
	      };
	    } else if (target.attachEvent) {
	      target.attachEvent('on' + eventType, callback);
	      return {
	        remove: function remove() {
	          target.detachEvent('on' + eventType, callback);
	        }
	      };
	    }
	  },
	
	  /**
	   * Listen to DOM events during the capture phase.
	   *
	   * @param {DOMEventTarget} target DOM element to register listener on.
	   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
	   * @param {function} callback Callback function.
	   * @return {object} Object with a `remove` method.
	   */
	  capture: function capture(target, eventType, callback) {
	    if (target.addEventListener) {
	      target.addEventListener(eventType, callback, true);
	      return {
	        remove: function remove() {
	          target.removeEventListener(eventType, callback, true);
	        }
	      };
	    } else {
	      if (process.env.NODE_ENV !== 'production') {
	        console.error('Attempted to listen to events during the capture phase on a ' + 'browser that does not support the capture phase. Your application ' + 'will not receive some events.');
	      }
	      return {
	        remove: emptyFunction
	      };
	    }
	  },
	
	  registerDefault: function registerDefault() {}
	};
	
	module.exports = EventListener;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(60)))

/***/ },

/***/ 445:
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule cancelAnimationFramePolyfill
	 */
	
	/**
	 * Here is the native and polyfill version of cancelAnimationFrame.
	 * Please don't use it directly and use cancelAnimationFrame module instead.
	 */
	"use strict";
	
	var cancelAnimationFrame = global.cancelAnimationFrame || global.webkitCancelAnimationFrame || global.mozCancelAnimationFrame || global.oCancelAnimationFrame || global.msCancelAnimationFrame || global.clearTimeout;
	
	module.exports = cancelAnimationFrame;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 446:
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Keys
	 */
	
	"use strict";
	
	module.exports = {
	  BACKSPACE: 8,
	  TAB: 9,
	  RETURN: 13,
	  ALT: 18,
	  ESC: 27,
	  SPACE: 32,
	  PAGE_UP: 33,
	  PAGE_DOWN: 34,
	  END: 35,
	  HOME: 36,
	  LEFT: 37,
	  UP: 38,
	  RIGHT: 39,
	  DOWN: 40,
	  DELETE: 46,
	  COMMA: 188,
	  PERIOD: 190,
	  A: 65,
	  Z: 90,
	  ZERO: 48,
	  NUMPAD_0: 96,
	  NUMPAD_9: 105
	};

/***/ },

/***/ 447:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOM
	 */
	
	'use strict';
	
	module.exports = __webpack_require__(90);

/***/ },

/***/ 448:
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule cssVar
	 * @typechecks
	 */
	
	"use strict";
	
	var CSS_VARS = {
	  'scrollbar-face-active-color': '#7d7d7d',
	  'scrollbar-face-color': '#c2c2c2',
	  'scrollbar-face-margin': '4px',
	  'scrollbar-face-radius': '6px',
	  'scrollbar-size': '15px',
	  'scrollbar-size-large': '17px',
	  'scrollbar-track-color': 'rgba(255, 255, 255, 0.8)',
	  'fbui-white': '#fff',
	  'fbui-desktop-background-light': '#f6f7f8'
	};
	
	/**
	 * @param {string} name
	 */
	function cssVar(name) {
	  if (CSS_VARS.hasOwnProperty(name)) {
	    return CSS_VARS[name];
	  }
	
	  throw new Error('cssVar' + '("' + name + '"): Unexpected class transformation.');
	}
	
	cssVar.CSS_VARS = CSS_VARS;
	
	module.exports = cssVar;

/***/ },

/***/ 449:
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule cx
	 */
	
	'use strict';
	
	var slashReplaceRegex = /\//g;
	var cache = {};
	
	function getClassName(className) {
	  if (cache[className]) {
	    return cache[className];
	  }
	
	  cache[className] = className.replace(slashReplaceRegex, '_');
	  return cache[className];
	}
	
	/**
	 * This function is used to mark string literals representing CSS class names
	 * so that they can be transformed statically. This allows for modularization
	 * and minification of CSS class names.
	 *
	 * In static_upstream, this function is actually implemented, but it should
	 * eventually be replaced with something more descriptive, and the transform
	 * that is used in the main stack should be ported for use elsewhere.
	 *
	 * @param string|object className to modularize, or an object of key/values.
	 *                      In the object case, the values are conditions that
	 *                      determine if the className keys should be included.
	 * @param [string ...]  Variable list of classNames in the string case.
	 * @return string       Renderable space-separated CSS className.
	 */
	function cx(classNames) {
	  var classNamesArray;
	  if (typeof classNames == 'object') {
	    classNamesArray = Object.keys(classNames).filter(function (className) {
	      return classNames[className];
	    });
	  } else {
	    classNamesArray = Array.prototype.slice.call(arguments);
	  }
	
	  return classNamesArray.map(getClassName).join(' ');
	}
	
	module.exports = cx;

/***/ },

/***/ 450:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule translateDOMPositionXY
	 * @typechecks
	 */
	
	'use strict';
	
	var BrowserSupportCore = __webpack_require__(451);
	
	var getVendorPrefixedName = __webpack_require__(452);
	
	var TRANSFORM = getVendorPrefixedName('transform');
	var BACKFACE_VISIBILITY = getVendorPrefixedName('backfaceVisibility');
	
	var translateDOMPositionXY = (function () {
	  if (BrowserSupportCore.hasCSSTransforms()) {
	    var ua = global.window ? global.window.navigator.userAgent : 'UNKNOWN';
	    var isSafari = /Safari\//.test(ua) && !/Chrome\//.test(ua);
	    // It appears that Safari messes up the composition order
	    // of GPU-accelerated layers
	    // (see bug https://bugs.webkit.org/show_bug.cgi?id=61824).
	    // Use 2D translation instead.
	    if (!isSafari && BrowserSupportCore.hasCSS3DTransforms()) {
	      return function ( /*object*/style, /*number*/x, /*number*/y) {
	        style[TRANSFORM] = 'translate3d(' + x + 'px,' + y + 'px,0)';
	        style[BACKFACE_VISIBILITY] = 'hidden';
	      };
	    } else {
	      return function ( /*object*/style, /*number*/x, /*number*/y) {
	        style[TRANSFORM] = 'translate(' + x + 'px,' + y + 'px)';
	      };
	    }
	  } else {
	    return function ( /*object*/style, /*number*/x, /*number*/y) {
	      style.left = x + 'px';
	      style.top = y + 'px';
	    };
	  }
	})();
	
	module.exports = translateDOMPositionXY;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 451:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule BrowserSupportCore
	 */
	
	'use strict';
	
	var getVendorPrefixedName = __webpack_require__(452);
	
	var BrowserSupportCore = {
	  /**
	   * @return {bool} True if browser supports css animations.
	   */
	  hasCSSAnimations: function hasCSSAnimations() {
	    return !!getVendorPrefixedName('animationName');
	  },
	
	  /**
	   * @return {bool} True if browser supports css transforms.
	   */
	  hasCSSTransforms: function hasCSSTransforms() {
	    return !!getVendorPrefixedName('transform');
	  },
	
	  /**
	   * @return {bool} True if browser supports css 3d transforms.
	   */
	  hasCSS3DTransforms: function hasCSS3DTransforms() {
	    return !!getVendorPrefixedName('perspective');
	  },
	
	  /**
	   * @return {bool} True if browser supports css transitions.
	   */
	  hasCSSTransitions: function hasCSSTransitions() {
	    return !!getVendorPrefixedName('transition');
	  }
	};
	
	module.exports = BrowserSupportCore;

/***/ },

/***/ 452:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getVendorPrefixedName
	 * @typechecks
	 */
	
	'use strict';
	
	var ExecutionEnvironment = __webpack_require__(439);
	
	var camelize = __webpack_require__(453);
	var invariant = __webpack_require__(454);
	
	var memoized = {};
	var prefixes = ['Webkit', 'ms', 'Moz', 'O'];
	var prefixRegex = new RegExp('^(' + prefixes.join('|') + ')');
	var testStyle = ExecutionEnvironment.canUseDOM ? document.createElement('div').style : {};
	
	function getWithPrefix(name) {
	  for (var i = 0; i < prefixes.length; i++) {
	    var prefixedName = prefixes[i] + name;
	    if (prefixedName in testStyle) {
	      return prefixedName;
	    }
	  }
	  return null;
	}
	
	/**
	 * @param {string} property Name of a css property to check for.
	 * @return {?string} property name supported in the browser, or null if not
	 * supported.
	 */
	function getVendorPrefixedName(property) {
	  var name = camelize(property);
	  if (memoized[name] === undefined) {
	    var capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
	    if (prefixRegex.test(capitalizedName)) {
	      invariant(false, 'getVendorPrefixedName must only be called with unprefixed' + 'CSS property names. It was called with %s', property);
	    }
	    memoized[name] = name in testStyle ? name : getWithPrefix(capitalizedName);
	  }
	  return memoized[name];
	}
	
	module.exports = getVendorPrefixedName;

/***/ },

/***/ 453:
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule camelize
	 * @typechecks
	 */
	
	"use strict";
	
	var _hyphenPattern = /-(.)/g;
	
	/**
	 * Camelcases a hyphenated string, for example:
	 *
	 *   > camelize('background-color')
	 *   < "backgroundColor"
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function camelize(string) {
	  return string.replace(_hyphenPattern, function (_, character) {
	    return character.toUpperCase();
	  });
	}
	
	module.exports = camelize;

/***/ },

/***/ 454:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule invariant
	 */
	
	"use strict";
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	var invariant = function invariant(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error('Invariant Violation: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};
	
	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(60)))

/***/ },

/***/ 455:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule FixedDataTableBufferedRows.react
	 * @typechecks
	 */
	
	'use strict';
	
	var React = __webpack_require__(431);
	var FixedDataTableRowBuffer = __webpack_require__(456);
	var FixedDataTableRow = __webpack_require__(460);
	
	var cx = __webpack_require__(449);
	var emptyFunction = __webpack_require__(435);
	var joinClasses = __webpack_require__(468);
	var translateDOMPositionXY = __webpack_require__(450);
	
	var PropTypes = React.PropTypes;
	
	var FixedDataTableBufferedRows = React.createClass({
	  displayName: 'FixedDataTableBufferedRows',
	
	  propTypes: {
	    isScrolling: PropTypes.bool,
	    defaultRowHeight: PropTypes.number.isRequired,
	    firstRowIndex: PropTypes.number.isRequired,
	    firstRowOffset: PropTypes.number.isRequired,
	    fixedColumns: PropTypes.array.isRequired,
	    height: PropTypes.number.isRequired,
	    offsetTop: PropTypes.number.isRequired,
	    onRowClick: PropTypes.func,
	    onRowDoubleClick: PropTypes.func,
	    onRowMouseDown: PropTypes.func,
	    onRowMouseEnter: PropTypes.func,
	    onRowMouseLeave: PropTypes.func,
	    rowClassNameGetter: PropTypes.func,
	    rowsCount: PropTypes.number.isRequired,
	    rowHeightGetter: PropTypes.func,
	    rowPositionGetter: PropTypes.func.isRequired,
	    scrollLeft: PropTypes.number.isRequired,
	    scrollableColumns: PropTypes.array.isRequired,
	    showLastRowBorder: PropTypes.bool,
	    width: PropTypes.number.isRequired
	  },
	
	  getInitialState: function getInitialState() /*object*/{
	    this._rowBuffer = new FixedDataTableRowBuffer(this.props.rowsCount, this.props.defaultRowHeight, this.props.height, this._getRowHeight);
	    return {
	      rowsToRender: this._rowBuffer.getRows(this.props.firstRowIndex, this.props.firstRowOffset)
	    };
	  },
	
	  componentWillMount: function componentWillMount() {
	    this._staticRowArray = [];
	  },
	
	  componentDidMount: function componentDidMount() {
	    setTimeout(this._updateBuffer, 1000);
	  },
	
	  componentWillReceiveProps: function componentWillReceiveProps( /*object*/nextProps) {
	    if (nextProps.rowsCount !== this.props.rowsCount || nextProps.defaultRowHeight !== this.props.defaultRowHeight || nextProps.height !== this.props.height) {
	      this._rowBuffer = new FixedDataTableRowBuffer(nextProps.rowsCount, nextProps.defaultRowHeight, nextProps.height, this._getRowHeight);
	    }
	    if (this.props.isScrolling && !nextProps.isScrolling) {
	      this._updateBuffer();
	    } else {
	      this.setState({
	        rowsToRender: this._rowBuffer.getRows(nextProps.firstRowIndex, nextProps.firstRowOffset)
	      });
	    }
	  },
	
	  _updateBuffer: function _updateBuffer() {
	    if (this.isMounted()) {
	      this.setState({
	        rowsToRender: this._rowBuffer.getRowsWithUpdatedBuffer()
	      });
	    }
	  },
	
	  shouldComponentUpdate: function shouldComponentUpdate() /*boolean*/{
	    // Don't add PureRenderMixin to this component please.
	    return true;
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    this._staticRowArray.length = 0;
	  },
	
	  render: function render() /*object*/{
	    var props = this.props;
	    var rowClassNameGetter = props.rowClassNameGetter || emptyFunction;
	    var rowPositionGetter = props.rowPositionGetter;
	
	    var rowsToRender = this.state.rowsToRender;
	    this._staticRowArray.length = rowsToRender.length;
	
	    for (var i = 0; i < rowsToRender.length; ++i) {
	      var rowIndex = rowsToRender[i];
	      var currentRowHeight = this._getRowHeight(rowIndex);
	      var rowOffsetTop = rowPositionGetter(rowIndex);
	
	      var hasBottomBorder = rowIndex === props.rowsCount - 1 && props.showLastRowBorder;
	
	      this._staticRowArray[i] = React.createElement(FixedDataTableRow, {
	        key: i,
	        isScrolling: props.isScrolling,
	        index: rowIndex,
	        width: props.width,
	        height: currentRowHeight,
	        scrollLeft: Math.round(props.scrollLeft),
	        offsetTop: Math.round(rowOffsetTop),
	        fixedColumns: props.fixedColumns,
	        scrollableColumns: props.scrollableColumns,
	        onClick: props.onRowClick,
	        onDoubleClick: props.onRowDoubleClick,
	        onMouseDown: props.onRowMouseDown,
	        onMouseEnter: props.onRowMouseEnter,
	        onMouseLeave: props.onRowMouseLeave,
	        className: joinClasses(rowClassNameGetter(rowIndex), cx('public/fixedDataTable/bodyRow'), cx({
	          'fixedDataTableLayout/hasBottomBorder': hasBottomBorder,
	          'public/fixedDataTable/hasBottomBorder': hasBottomBorder
	        }))
	      });
	    }
	
	    var firstRowPosition = props.rowPositionGetter(props.firstRowIndex);
	
	    var style = {
	      position: 'absolute',
	      pointerEvents: props.isScrolling ? 'none' : 'auto'
	    };
	
	    translateDOMPositionXY(style, 0, props.firstRowOffset - firstRowPosition + props.offsetTop);
	
	    return React.createElement(
	      'div',
	      { style: style },
	      this._staticRowArray
	    );
	  },
	
	  _getRowHeight: function _getRowHeight( /*number*/index) /*number*/{
	    return this.props.rowHeightGetter ? this.props.rowHeightGetter(index) : this.props.defaultRowHeight;
	  }
	});
	
	module.exports = FixedDataTableBufferedRows;

/***/ },

/***/ 456:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule FixedDataTableRowBuffer
	 * @typechecks
	 */
	
	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var IntegerBufferSet = __webpack_require__(457);
	
	var clamp = __webpack_require__(459);
	var invariant = __webpack_require__(454);
	var MIN_BUFFER_ROWS = 3;
	var MAX_BUFFER_ROWS = 6;
	
	// FixedDataTableRowBuffer is a helper class that executes row buffering
	// logic for FixedDataTable. It figures out which rows should be rendered
	// and in which positions.
	
	var FixedDataTableRowBuffer = (function () {
	  function FixedDataTableRowBuffer(
	  /*number*/rowsCount,
	  /*number*/defaultRowHeight,
	  /*number*/viewportHeight,
	  /*?function*/rowHeightGetter) {
	    _classCallCheck(this, FixedDataTableRowBuffer);
	
	    invariant(defaultRowHeight !== 0, "defaultRowHeight musn't be equal 0 in FixedDataTableRowBuffer");
	
	    this._bufferSet = new IntegerBufferSet();
	    this._defaultRowHeight = defaultRowHeight;
	    this._viewportRowsBegin = 0;
	    this._viewportRowsEnd = 0;
	    this._maxVisibleRowCount = Math.ceil(viewportHeight / defaultRowHeight) + 1;
	    this._bufferRowsCount = clamp(Math.floor(this._maxVisibleRowCount / 2), MIN_BUFFER_ROWS, MAX_BUFFER_ROWS);
	    this._rowsCount = rowsCount;
	    this._rowHeightGetter = rowHeightGetter;
	    this._rows = [];
	    this._viewportHeight = viewportHeight;
	
	    this.getRows = this.getRows.bind(this);
	    this.getRowsWithUpdatedBuffer = this.getRowsWithUpdatedBuffer.bind(this);
	  }
	
	  _createClass(FixedDataTableRowBuffer, [{
	    key: 'getRowsWithUpdatedBuffer',
	    value: function getRowsWithUpdatedBuffer() /*array*/{
	      var remainingBufferRows = 2 * this._bufferRowsCount;
	      var bufferRowIndex = Math.max(this._viewportRowsBegin - this._bufferRowsCount, 0);
	      while (bufferRowIndex < this._viewportRowsBegin) {
	        this._addRowToBuffer(bufferRowIndex, this._viewportRowsBegin, this._viewportRowsEnd - 1);
	        bufferRowIndex++;
	        remainingBufferRows--;
	      }
	      bufferRowIndex = this._viewportRowsEnd;
	      while (bufferRowIndex < this._rowsCount && remainingBufferRows > 0) {
	        this._addRowToBuffer(bufferRowIndex, this._viewportRowsBegin, this._viewportRowsEnd - 1);
	        bufferRowIndex++;
	        remainingBufferRows--;
	      }
	      return this._rows;
	    }
	  }, {
	    key: 'getRows',
	    value: function getRows(
	    /*number*/firstRowIndex,
	    /*number*/firstRowOffset) /*array*/{
	      var top = firstRowOffset;
	      var totalHeight = top;
	      var rowIndex = firstRowIndex;
	      var endIndex = Math.min(firstRowIndex + this._maxVisibleRowCount, this._rowsCount);
	
	      this._viewportRowsBegin = firstRowIndex;
	      while (rowIndex < endIndex || totalHeight < this._viewportHeight && rowIndex < this._rowsCount) {
	        this._addRowToBuffer(rowIndex, firstRowIndex, endIndex - 1);
	        totalHeight += this._rowHeightGetter(rowIndex);
	        ++rowIndex;
	        // Store index after the last viewport row as end, to be able to
	        // distinguish when there are no rows rendered in viewport
	        this._viewportRowsEnd = rowIndex;
	      }
	
	      return this._rows;
	    }
	  }, {
	    key: '_addRowToBuffer',
	    value: function _addRowToBuffer(
	    /*number*/rowIndex,
	    /*number*/firstViewportRowIndex,
	    /*number*/lastViewportRowIndex) {
	      var rowPosition = this._bufferSet.getValuePosition(rowIndex);
	      var viewportRowsCount = lastViewportRowIndex - firstViewportRowIndex + 1;
	      var allowedRowsCount = viewportRowsCount + this._bufferRowsCount * 2;
	      if (rowPosition === null && this._bufferSet.getSize() >= allowedRowsCount) {
	        rowPosition = this._bufferSet.replaceFurthestValuePosition(firstViewportRowIndex, lastViewportRowIndex, rowIndex);
	      }
	      if (rowPosition === null) {
	        // We can't reuse any of existing positions for this row. We have to
	        // create new position
	        rowPosition = this._bufferSet.getNewPositionForValue(rowIndex);
	        this._rows[rowPosition] = rowIndex;
	      } else {
	        // This row already is in the table with rowPosition position or it
	        // can replace row that is in that position
	        this._rows[rowPosition] = rowIndex;
	      }
	    }
	  }]);
	
	  return FixedDataTableRowBuffer;
	})();
	
	module.exports = FixedDataTableRowBuffer;

/***/ },

/***/ 457:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule IntegerBufferSet
	 * @typechecks
	 */
	
	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var Heap = __webpack_require__(458);
	
	var invariant = __webpack_require__(454);
	
	// Data structure that allows to store values and assign positions to them
	// in a way to minimize changing positions of stored values when new ones are
	// added or when some values are replaced. Stored elements are alwasy assigned
	// a consecutive set of positoins startin from 0 up to count of elements less 1
	// Following actions can be executed
	// * get position assigned to given value (null if value is not stored)
	// * create new entry for new value and get assigned position back
	// * replace value that is furthest from specified value range with new value
	//   and get it's position back
	// All operations take amortized log(n) time where n is number of elements in
	// the set.
	
	var IntegerBufferSet = (function () {
	  function IntegerBufferSet() {
	    _classCallCheck(this, IntegerBufferSet);
	
	    this._valueToPositionMap = {};
	    this._size = 0;
	    this._smallValues = new Heap([], // Initial data in the heap
	    this._smallerComparator);
	    this._largeValues = new Heap([], // Initial data in the heap
	    this._greaterComparator);
	
	    this.getNewPositionForValue = this.getNewPositionForValue.bind(this);
	    this.getValuePosition = this.getValuePosition.bind(this);
	    this.getSize = this.getSize.bind(this);
	    this.replaceFurthestValuePosition = this.replaceFurthestValuePosition.bind(this);
	  }
	
	  _createClass(IntegerBufferSet, [{
	    key: 'getSize',
	    value: function getSize() /*number*/{
	      return this._size;
	    }
	  }, {
	    key: 'getValuePosition',
	    value: function getValuePosition( /*number*/value) /*?number*/{
	      if (this._valueToPositionMap[value] === undefined) {
	        return null;
	      }
	      return this._valueToPositionMap[value];
	    }
	  }, {
	    key: 'getNewPositionForValue',
	    value: function getNewPositionForValue( /*number*/value) /*number*/{
	      invariant(this._valueToPositionMap[value] === undefined, "Shouldn't try to find new position for value already stored in BufferSet");
	      var newPosition = this._size;
	      this._size++;
	      this._pushToHeaps(newPosition, value);
	      this._valueToPositionMap[value] = newPosition;
	      return newPosition;
	    }
	  }, {
	    key: 'replaceFurthestValuePosition',
	    value: function replaceFurthestValuePosition(
	    /*number*/lowValue,
	    /*number*/highValue,
	    /*number*/newValue) /*?number*/{
	      invariant(this._valueToPositionMap[newValue] === undefined, "Shouldn't try to replace values with value already stored value in " + "BufferSet");
	
	      this._cleanHeaps();
	      if (this._smallValues.empty() || this._largeValues.empty()) {
	        // Threre are currently no values stored. We will have to create new
	        // position for this value.
	        return null;
	      }
	
	      var minValue = this._smallValues.peek().value;
	      var maxValue = this._largeValues.peek().value;
	      if (minValue >= lowValue && maxValue <= highValue) {
	        // All values currently stored are necessary, we can't reuse any of them.
	        return null;
	      }
	
	      var valueToReplace;
	      if (lowValue - minValue > maxValue - highValue) {
	        // minValue is further from provided range. We will reuse it's position.
	        valueToReplace = minValue;
	        this._smallValues.pop();
	      } else {
	        valueToReplace = maxValue;
	        this._largeValues.pop();
	      }
	      var position = this._valueToPositionMap[valueToReplace];
	      delete this._valueToPositionMap[valueToReplace];
	      this._valueToPositionMap[newValue] = position;
	      this._pushToHeaps(position, newValue);
	
	      return position;
	    }
	  }, {
	    key: '_pushToHeaps',
	    value: function _pushToHeaps( /*number*/position, /*number*/value) {
	      var element = {
	        position: position,
	        value: value
	      };
	      // We can reuse the same object in both heaps, because we don't mutate them
	      this._smallValues.push(element);
	      this._largeValues.push(element);
	    }
	  }, {
	    key: '_cleanHeaps',
	    value: function _cleanHeaps() {
	      // We not usually only remove object from one heap while moving value.
	      // Here we make sure that there is no stale data on top of heaps.
	      this._cleanHeap(this._smallValues);
	      this._cleanHeap(this._largeValues);
	      var minHeapSize = Math.min(this._smallValues.size(), this._largeValues.size());
	      var maxHeapSize = Math.max(this._smallValues.size(), this._largeValues.size());
	      if (maxHeapSize > 10 * minHeapSize) {
	        // There are many old values in one of heaps. We nned to get rid of them
	        // to not use too avoid memory leaks
	        this._recreateHeaps();
	      }
	    }
	  }, {
	    key: '_recreateHeaps',
	    value: function _recreateHeaps() {
	      var sourceHeap = this._smallValues.size() < this._largeValues.size() ? this._smallValues : this._largeValues;
	      var newSmallValues = new Heap([], // Initial data in the heap
	      this._smallerComparator);
	      var newLargeValues = new Heap([], // Initial datat in the heap
	      this._greaterComparator);
	      while (!sourceHeap.empty()) {
	        var element = sourceHeap.pop();
	        // Push all stil valid elements to new heaps
	        if (this._valueToPositionMap[element.value] !== undefined) {
	          newSmallValues.push(element);
	          newLargeValues.push(element);
	        }
	      }
	      this._smallValues = newSmallValues;
	      this._largeValues = newLargeValues;
	    }
	  }, {
	    key: '_cleanHeap',
	    value: function _cleanHeap( /*object*/heap) {
	      while (!heap.empty() && this._valueToPositionMap[heap.peek().value] === undefined) {
	        heap.pop();
	      }
	    }
	  }, {
	    key: '_smallerComparator',
	    value: function _smallerComparator( /*object*/lhs, /*object*/rhs) /*boolean*/{
	      return lhs.value < rhs.value;
	    }
	  }, {
	    key: '_greaterComparator',
	    value: function _greaterComparator( /*object*/lhs, /*object*/rhs) /*boolean*/{
	      return lhs.value > rhs.value;
	    }
	  }]);
	
	  return IntegerBufferSet;
	})();
	
	module.exports = IntegerBufferSet;

/***/ },

/***/ 458:
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Heap
	 * @typechecks
	 * @preventMunge
	 */
	
	'use strict';
	
	/*
	 * @param {*} a
	 * @param {*} b
	 * @return {boolean}
	 */
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function defaultComparator(a, b) {
	  return a < b;
	}
	
	var Heap = (function () {
	  function Heap(items, comparator) {
	    _classCallCheck(this, Heap);
	
	    this._items = items || [];
	    this._size = this._items.length;
	    this._comparator = comparator || defaultComparator;
	    this._heapify();
	  }
	
	  /*
	   * @return {boolean}
	   */
	
	  _createClass(Heap, [{
	    key: 'empty',
	    value: function empty() {
	      return this._size === 0;
	    }
	
	    /*
	     * @return {*}
	     */
	  }, {
	    key: 'pop',
	    value: function pop() {
	      if (this._size === 0) {
	        return;
	      }
	
	      var elt = this._items[0];
	
	      var lastElt = this._items.pop();
	      this._size--;
	
	      if (this._size > 0) {
	        this._items[0] = lastElt;
	        this._sinkDown(0);
	      }
	
	      return elt;
	    }
	
	    /*
	     * @param {*} item
	     */
	  }, {
	    key: 'push',
	    value: function push(item) {
	      this._items[this._size++] = item;
	      this._bubbleUp(this._size - 1);
	    }
	
	    /*
	     * @return {number}
	     */
	  }, {
	    key: 'size',
	    value: function size() {
	      return this._size;
	    }
	
	    /*
	     * @return {*}
	     */
	  }, {
	    key: 'peek',
	    value: function peek() {
	      if (this._size === 0) {
	        return;
	      }
	
	      return this._items[0];
	    }
	  }, {
	    key: '_heapify',
	    value: function _heapify() {
	      for (var index = Math.floor((this._size + 1) / 2); index >= 0; index--) {
	        this._sinkDown(index);
	      }
	    }
	
	    /*
	     * @parent {number} index
	     */
	  }, {
	    key: '_bubbleUp',
	    value: function _bubbleUp(index) {
	      var elt = this._items[index];
	      while (index > 0) {
	        var parentIndex = Math.floor((index + 1) / 2) - 1;
	        var parentElt = this._items[parentIndex];
	
	        // if parentElt < elt, stop
	        if (this._comparator(parentElt, elt)) {
	          return;
	        }
	
	        // swap
	        this._items[parentIndex] = elt;
	        this._items[index] = parentElt;
	        index = parentIndex;
	      }
	    }
	
	    /*
	     * @parent {number} index
	     */
	  }, {
	    key: '_sinkDown',
	    value: function _sinkDown(index) {
	      var elt = this._items[index];
	
	      while (true) {
	        var leftChildIndex = 2 * (index + 1) - 1;
	        var rightChildIndex = 2 * (index + 1);
	        var swapIndex = -1;
	
	        if (leftChildIndex < this._size) {
	          var leftChild = this._items[leftChildIndex];
	          if (this._comparator(leftChild, elt)) {
	            swapIndex = leftChildIndex;
	          }
	        }
	
	        if (rightChildIndex < this._size) {
	          var rightChild = this._items[rightChildIndex];
	          if (this._comparator(rightChild, elt)) {
	            if (swapIndex === -1 || this._comparator(rightChild, this._items[swapIndex])) {
	              swapIndex = rightChildIndex;
	            }
	          }
	        }
	
	        // if we don't have a swap, stop
	        if (swapIndex === -1) {
	          return;
	        }
	
	        this._items[index] = this._items[swapIndex];
	        this._items[swapIndex] = elt;
	        index = swapIndex;
	      }
	    }
	  }]);
	
	  return Heap;
	})();
	
	module.exports = Heap;

/***/ },

/***/ 459:
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule clamp
	 * @typechecks
	 */
	
	/**
	 * Clamps (or clips or confines) the value to be between min and max.
	 * @param {number} value
	 * @param {number} min
	 * @param {number} max
	 * @return {number}
	 */
	"use strict";
	
	function clamp(value, min, max) {
	  if (value < min) {
	    return min;
	  }
	  if (value > max) {
	    return max;
	  }
	  return value;
	}
	
	module.exports = clamp;

/***/ },

/***/ 460:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule FixedDataTableRow.react
	 * @typechecks
	 */
	
	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(431);
	var FixedDataTableCellGroup = __webpack_require__(461);
	
	var cx = __webpack_require__(449);
	var joinClasses = __webpack_require__(468);
	var translateDOMPositionXY = __webpack_require__(450);
	
	var PropTypes = React.PropTypes;
	
	/**
	 * Component that renders the row for <FixedDataTable />.
	 * This component should not be used directly by developer. Instead,
	 * only <FixedDataTable /> should use the component internally.
	 */
	var FixedDataTableRowImpl = React.createClass({
	  displayName: 'FixedDataTableRowImpl',
	
	  propTypes: {
	
	    isScrolling: PropTypes.bool,
	
	    /**
	     * Array of <FixedDataTableColumn /> for the fixed columns.
	     */
	    fixedColumns: PropTypes.array.isRequired,
	
	    /**
	     * Height of the row.
	     */
	    height: PropTypes.number.isRequired,
	
	    /**
	     * The row index.
	     */
	    index: PropTypes.number.isRequired,
	
	    /**
	     * Array of <FixedDataTableColumn /> for the scrollable columns.
	     */
	    scrollableColumns: PropTypes.array.isRequired,
	
	    /**
	     * The distance between the left edge of the table and the leftmost portion
	     * of the row currently visible in the table.
	     */
	    scrollLeft: PropTypes.number.isRequired,
	
	    /**
	     * Width of the row.
	     */
	    width: PropTypes.number.isRequired,
	
	    /**
	     * Fire when a row is clicked.
	     */
	    onClick: PropTypes.func,
	
	    /**
	     * Fire when a row is double clicked.
	     */
	    onDoubleClick: PropTypes.func,
	
	    /**
	     * Callback for when resizer knob (in FixedDataTableCell) is clicked
	     * to initialize resizing. Please note this is only on the cells
	     * in the header.
	     * @param number combinedWidth
	     * @param number leftOffset
	     * @param number cellWidth
	     * @param number|string columnKey
	     * @param object event
	     */
	    onColumnResize: PropTypes.func
	  },
	
	  render: function render() /*object*/{
	    var style = {
	      width: this.props.width,
	      height: this.props.height
	    };
	
	    var className = cx({
	      'fixedDataTableRowLayout/main': true,
	      'public/fixedDataTableRow/main': true,
	      'public/fixedDataTableRow/highlighted': this.props.index % 2 === 1,
	      'public/fixedDataTableRow/odd': this.props.index % 2 === 1,
	      'public/fixedDataTableRow/even': this.props.index % 2 === 0
	    });
	
	    var fixedColumnsWidth = this._getColumnsWidth(this.props.fixedColumns);
	    var fixedColumns = React.createElement(FixedDataTableCellGroup, {
	      key: 'fixed_cells',
	      isScrolling: this.props.isScrolling,
	      height: this.props.height,
	      left: 0,
	      width: fixedColumnsWidth,
	      zIndex: 2,
	      columns: this.props.fixedColumns,
	      onColumnResize: this.props.onColumnResize,
	      rowHeight: this.props.height,
	      rowIndex: this.props.index
	    });
	    var columnsShadow = this._renderColumnsShadow(fixedColumnsWidth);
	    var scrollableColumns = React.createElement(FixedDataTableCellGroup, {
	      key: 'scrollable_cells',
	      isScrolling: this.props.isScrolling,
	      height: this.props.height,
	      left: this.props.scrollLeft,
	      offsetLeft: fixedColumnsWidth,
	      width: this.props.width - fixedColumnsWidth,
	      zIndex: 0,
	      columns: this.props.scrollableColumns,
	      onColumnResize: this.props.onColumnResize,
	      rowHeight: this.props.height,
	      rowIndex: this.props.index
	    });
	
	    return React.createElement(
	      'div',
	      {
	        className: joinClasses(className, this.props.className),
	        onClick: this.props.onClick ? this._onClick : null,
	        onDoubleClick: this.props.onDoubleClick ? this._onDoubleClick : null,
	        onMouseDown: this.props.onMouseDown ? this._onMouseDown : null,
	        onMouseEnter: this.props.onMouseEnter ? this._onMouseEnter : null,
	        onMouseLeave: this.props.onMouseLeave ? this._onMouseLeave : null,
	        style: style },
	      React.createElement(
	        'div',
	        { className: cx('fixedDataTableRowLayout/body') },
	        fixedColumns,
	        scrollableColumns,
	        columnsShadow
	      )
	    );
	  },
	
	  _getColumnsWidth: function _getColumnsWidth( /*array*/columns) /*number*/{
	    var width = 0;
	    for (var i = 0; i < columns.length; ++i) {
	      width += columns[i].props.width;
	    }
	    return width;
	  },
	
	  _renderColumnsShadow: function _renderColumnsShadow( /*number*/left) /*?object*/{
	    if (left > 0) {
	      var className = cx({
	        'fixedDataTableRowLayout/fixedColumnsDivider': true,
	        'fixedDataTableRowLayout/columnsShadow': this.props.scrollLeft > 0,
	        'public/fixedDataTableRow/fixedColumnsDivider': true,
	        'public/fixedDataTableRow/columnsShadow': this.props.scrollLeft > 0
	      });
	      var style = {
	        left: left,
	        height: this.props.height
	      };
	      return React.createElement('div', { className: className, style: style });
	    }
	  },
	
	  _onClick: function _onClick( /*object*/event) {
	    this.props.onClick(event, this.props.index);
	  },
	
	  _onDoubleClick: function _onDoubleClick( /*object*/event) {
	    this.props.onDoubleClick(event, this.props.index);
	  },
	
	  _onMouseDown: function _onMouseDown( /*object*/event) {
	    this.props.onMouseDown(event, this.props.index);
	  },
	
	  _onMouseEnter: function _onMouseEnter( /*object*/event) {
	    this.props.onMouseEnter(event, this.props.index);
	  },
	
	  _onMouseLeave: function _onMouseLeave( /*object*/event) {
	    this.props.onMouseLeave(event, this.props.index);
	  }
	});
	
	var FixedDataTableRow = React.createClass({
	  displayName: 'FixedDataTableRow',
	
	  propTypes: {
	
	    isScrolling: PropTypes.bool,
	
	    /**
	     * Height of the row.
	     */
	    height: PropTypes.number.isRequired,
	
	    /**
	     * Z-index on which the row will be displayed. Used e.g. for keeping
	     * header and footer in front of other rows.
	     */
	    zIndex: PropTypes.number,
	
	    /**
	     * The vertical position where the row should render itself
	     */
	    offsetTop: PropTypes.number.isRequired,
	
	    /**
	     * Width of the row.
	     */
	    width: PropTypes.number.isRequired
	  },
	
	  render: function render() /*object*/{
	    var style = {
	      width: this.props.width,
	      height: this.props.height,
	      zIndex: this.props.zIndex ? this.props.zIndex : 0
	    };
	    translateDOMPositionXY(style, 0, this.props.offsetTop);
	
	    return React.createElement(
	      'div',
	      {
	        style: style,
	        className: cx('fixedDataTableRowLayout/rowWrapper') },
	      React.createElement(FixedDataTableRowImpl, _extends({}, this.props, {
	        offsetTop: undefined,
	        zIndex: undefined
	      }))
	    );
	  }
	});
	
	module.exports = FixedDataTableRow;

/***/ },

/***/ 461:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule FixedDataTableCellGroup.react
	 * @typechecks
	 */
	
	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var FixedDataTableHelper = __webpack_require__(462);
	var React = __webpack_require__(431);
	var FixedDataTableCell = __webpack_require__(466);
	
	var cx = __webpack_require__(449);
	var translateDOMPositionXY = __webpack_require__(450);
	
	var PropTypes = React.PropTypes;
	
	var DIR_SIGN = FixedDataTableHelper.DIR_SIGN;
	
	var FixedDataTableCellGroupImpl = React.createClass({
	  displayName: 'FixedDataTableCellGroupImpl',
	
	  /**
	   * PropTypes are disabled in this component, because having them on slows
	   * down the FixedDataTable hugely in DEV mode. You can enable them back for
	   * development, but please don't commit this component with enabled propTypes.
	   */
	  propTypes_DISABLED_FOR_PERFORMANCE: {
	
	    /**
	     * Array of <FixedDataTableColumn />.
	     */
	    columns: PropTypes.array.isRequired,
	
	    isScrolling: PropTypes.bool,
	
	    left: PropTypes.number,
	
	    onColumnResize: PropTypes.func,
	
	    rowHeight: PropTypes.number.isRequired,
	
	    rowIndex: PropTypes.number.isRequired,
	
	    width: PropTypes.number.isRequired,
	
	    zIndex: PropTypes.number.isRequired
	  },
	
	  render: function render() /*object*/{
	    var props = this.props;
	    var columns = props.columns;
	    var cells = new Array(columns.length);
	
	    var currentPosition = 0;
	    for (var i = 0, j = columns.length; i < j; i++) {
	      var columnProps = columns[i].props;
	      if (!columnProps.allowCellsRecycling || currentPosition - props.left <= props.width && currentPosition - props.left + columnProps.width >= 0) {
	        var key = 'cell_' + i;
	        cells[i] = this._renderCell(props.rowIndex, props.rowHeight, columnProps, currentPosition, key);
	      }
	      currentPosition += columnProps.width;
	    }
	
	    var contentWidth = this._getColumnsWidth(columns);
	
	    var style = {
	      height: props.height,
	      position: 'absolute',
	      width: contentWidth,
	      zIndex: props.zIndex
	    };
	    translateDOMPositionXY(style, -1 * DIR_SIGN * props.left, 0);
	
	    return React.createElement(
	      'div',
	      {
	        className: cx('fixedDataTableCellGroupLayout/cellGroup'),
	        style: style },
	      cells
	    );
	  },
	
	  _renderCell: function _renderCell(
	  /*number*/rowIndex,
	  /*number*/height,
	  /*object*/columnProps,
	  /*number*/left,
	  /*string*/key) /*object*/{
	
	    var cellIsResizable = columnProps.isResizable && this.props.onColumnResize;
	    var onColumnResize = cellIsResizable ? this.props.onColumnResize : null;
	
	    var className = columnProps.cellClassName;
	
	    return React.createElement(FixedDataTableCell, {
	      isScrolling: this.props.isScrolling,
	      align: columnProps.align,
	      className: className,
	      height: height,
	      key: key,
	      maxWidth: columnProps.maxWidth,
	      minWidth: columnProps.minWidth,
	      onColumnResize: onColumnResize,
	      rowIndex: rowIndex,
	      columnKey: columnProps.columnKey,
	      width: columnProps.width,
	      left: left,
	      cell: columnProps.cell
	    });
	  },
	
	  _getColumnsWidth: function _getColumnsWidth( /*array*/columns) /*number*/{
	    var width = 0;
	    for (var i = 0; i < columns.length; ++i) {
	      width += columns[i].props.width;
	    }
	    return width;
	  }
	});
	
	var FixedDataTableCellGroup = React.createClass({
	  displayName: 'FixedDataTableCellGroup',
	
	  /**
	   * PropTypes are disabled in this component, because having them on slows
	   * down the FixedDataTable hugely in DEV mode. You can enable them back for
	   * development, but please don't commit this component with enabled propTypes.
	   */
	  propTypes_DISABLED_FOR_PERFORMANCE: {
	    isScrolling: PropTypes.bool,
	    /**
	     * Height of the row.
	     */
	    height: PropTypes.number.isRequired,
	
	    offsetLeft: PropTypes.number,
	
	    left: PropTypes.number,
	    /**
	     * Z-index on which the row will be displayed. Used e.g. for keeping
	     * header and footer in front of other rows.
	     */
	    zIndex: PropTypes.number.isRequired
	  },
	
	  shouldComponentUpdate: function shouldComponentUpdate( /*object*/nextProps) /*boolean*/{
	    return !nextProps.isScrolling || this.props.rowIndex !== nextProps.rowIndex || this.props.left !== nextProps.left;
	  },
	
	  getDefaultProps: function getDefaultProps() /*object*/{
	    return {
	      offsetLeft: 0
	    };
	  },
	
	  render: function render() /*object*/{
	    var _props = this.props;
	    var offsetLeft = _props.offsetLeft;
	
	    var props = _objectWithoutProperties(_props, ['offsetLeft']);
	
	    var style = {
	      height: props.height
	    };
	
	    if (DIR_SIGN === 1) {
	      style.left = offsetLeft;
	    } else {
	      style.right = offsetLeft;
	    }
	
	    var onColumnResize = props.onColumnResize ? this._onColumnResize : null;
	
	    return React.createElement(
	      'div',
	      {
	        style: style,
	        className: cx('fixedDataTableCellGroupLayout/cellGroupWrapper') },
	      React.createElement(FixedDataTableCellGroupImpl, _extends({}, props, {
	        onColumnResize: onColumnResize
	      }))
	    );
	  },
	
	  _onColumnResize: function _onColumnResize(
	  /*number*/left,
	  /*number*/width,
	  /*?number*/minWidth,
	  /*?number*/maxWidth,
	  /*string|number*/columnKey,
	  /*object*/event) {
	    this.props.onColumnResize && this.props.onColumnResize(this.props.offsetLeft, left - this.props.left + width, width, minWidth, maxWidth, columnKey, event);
	  }
	});
	
	module.exports = FixedDataTableCellGroup;

/***/ },

/***/ 462:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule FixedDataTableHelper
	 * @typechecks
	 */
	
	'use strict';
	
	var Locale = __webpack_require__(463);
	var React = __webpack_require__(431);
	var FixedDataTableColumnGroup = __webpack_require__(464);
	var FixedDataTableColumn = __webpack_require__(465);
	
	var DIR_SIGN = Locale.isRTL() ? -1 : +1;
	// A cell up to 5px outside of the visible area will still be considered visible
	var CELL_VISIBILITY_TOLERANCE = 5; // used for flyouts
	
	function renderToString(value) /*string*/{
	  if (value === null || value === undefined) {
	    return '';
	  } else {
	    return String(value);
	  }
	}
	
	/**
	 * Helper method to execute a callback against all columns given the children
	 * of a table.
	 * @param {?object|array} children
	 *    Children of a table.
	 * @param {function} callback
	 *    Function to excecute for each column. It is passed the column.
	 */
	function forEachColumn(children, callback) {
	  React.Children.forEach(children, function (child) {
	    if (child.type === FixedDataTableColumnGroup) {
	      forEachColumn(child.props.children, callback);
	    } else if (child.type === FixedDataTableColumn) {
	      callback(child);
	    }
	  });
	}
	
	/**
	 * Helper method to map columns to new columns. This takes into account column
	 * groups and will generate a new column group if its columns change.
	 * @param {?object|array} children
	 *    Children of a table.
	 * @param {function} callback
	 *    Function to excecute for each column. It is passed the column and should
	 *    return a result column.
	 */
	function mapColumns(children, callback) {
	  var newChildren = [];
	  React.Children.forEach(children, function (originalChild) {
	    var newChild = originalChild;
	
	    // The child is either a column group or a column. If it is a column group
	    // we need to iterate over its columns and then potentially generate a
	    // new column group
	    if (originalChild.type === FixedDataTableColumnGroup) {
	      var haveColumnsChanged = false;
	      var newColumns = [];
	
	      forEachColumn(originalChild.props.children, function (originalcolumn) {
	        var newColumn = callback(originalcolumn);
	        if (newColumn !== originalcolumn) {
	          haveColumnsChanged = true;
	        }
	        newColumns.push(newColumn);
	      });
	
	      // If the column groups columns have changed clone the group and supply
	      // new children
	      if (haveColumnsChanged) {
	        newChild = React.cloneElement(originalChild, {
	          children: newColumns
	        });
	      }
	    } else if (originalChild.type === FixedDataTableColumn) {
	      newChild = callback(originalChild);
	    }
	
	    newChildren.push(newChild);
	  });
	
	  return newChildren;
	}
	
	var FixedDataTableHelper = {
	  DIR_SIGN: DIR_SIGN,
	  CELL_VISIBILITY_TOLERANCE: CELL_VISIBILITY_TOLERANCE,
	  renderToString: renderToString,
	  forEachColumn: forEachColumn,
	  mapColumns: mapColumns
	};
	
	module.exports = FixedDataTableHelper;

/***/ },

/***/ 463:
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Locale
	 */
	
	"use strict";
	
	// Hard code this for now.
	var Locale = {
	  isRTL: function isRTL() {
	    return false;
	  },
	  getDirection: function getDirection() {
	    return 'LTR';
	  }
	};
	
	module.exports = Locale;

/***/ },

/***/ 464:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule FixedDataTableColumnGroup.react
	 */
	
	/**
	 * TRANSITION SHIM
	 * This provides an intermediate mapping from the old API to the new API.
	 *
	 * When ready, remove this file and rename the providesModule in
	 * FixedDataTableColumnNew.react
	 */
	
	'use strict';
	
	var React = __webpack_require__(431);
	
	var TransitionColumnGroup = React.createClass({
	  displayName: 'TransitionColumnGroup',
	
	  statics: {
	    __TableColumnGroup__: true
	  },
	
	  render: function render() {
	    if (process.env.NODE_ENV !== 'production') {
	      throw new Error('Component <TransitionColumnGroup /> should never render');
	    }
	    return null;
	  }
	});
	
	module.exports = TransitionColumnGroup;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(60)))

/***/ },

/***/ 465:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule FixedDataTableColumn.react
	 */
	
	/**
	 * TRANSITION SHIM
	 * This acts to provide an intermediate mapping from the old API to the new API.
	 *
	 * When ready, remove this file and rename the providesModule in
	 * FixedDataTableColumnNew.react
	 */
	
	'use strict';
	
	var React = __webpack_require__(431);
	
	var TransitionColumn = React.createClass({
	  displayName: 'TransitionColumn',
	
	  statics: {
	    __TableColumn__: true
	  },
	
	  render: function render() {
	    if (process.env.NODE_ENV !== 'production') {
	      throw new Error('Component <TransitionColumn /> should never render');
	    }
	    return null;
	  }
	});
	
	module.exports = TransitionColumn;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(60)))

/***/ },

/***/ 466:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule FixedDataTableCell.react
	 * @typechecks
	 */
	
	'use strict';
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var FixedDataTableCellDefault = __webpack_require__(467);
	var FixedDataTableHelper = __webpack_require__(462);
	var React = __webpack_require__(431);
	var cx = __webpack_require__(449);
	var joinClasses = __webpack_require__(468);
	
	var DIR_SIGN = FixedDataTableHelper.DIR_SIGN;
	
	var PropTypes = React.PropTypes;
	
	var DEFAULT_PROPS = {
	  align: 'left',
	  highlighted: false
	};
	
	var FixedDataTableCell = React.createClass({
	  displayName: 'FixedDataTableCell',
	
	  /**
	   * PropTypes are disabled in this component, because having them on slows
	   * down the FixedDataTable hugely in DEV mode. You can enable them back for
	   * development, but please don't commit this component with enabled propTypes.
	   */
	  propTypes_DISABLED_FOR_PERFORMANCE: {
	    isScrolling: PropTypes.bool,
	    align: PropTypes.oneOf(['left', 'center', 'right']),
	    className: PropTypes.string,
	    highlighted: PropTypes.bool,
	    width: PropTypes.number.isRequired,
	    minWidth: PropTypes.number,
	    maxWidth: PropTypes.number,
	    height: PropTypes.number.isRequired,
	
	    cell: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.func]),
	
	    columnKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	
	    /**
	     * The row index that will be passed to `cellRenderer` to render.
	     */
	    rowIndex: PropTypes.number.isRequired,
	
	    /**
	     * Callback for when resizer knob (in FixedDataTableCell) is clicked
	     * to initialize resizing. Please note this is only on the cells
	     * in the header.
	     * @param number combinedWidth
	     * @param number left
	     * @param number width
	     * @param number minWidth
	     * @param number maxWidth
	     * @param number|string columnKey
	     * @param object event
	     */
	    onColumnResize: PropTypes.func,
	
	    /**
	     * The left offset in pixels of the cell.
	     */
	    left: PropTypes.number
	  },
	
	  shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
	    return !nextProps.isScrolling || this.props.rowIndex !== nextProps.rowIndex;
	  },
	
	  getDefaultProps: function getDefaultProps() /*object*/{
	    return DEFAULT_PROPS;
	  },
	
	  render: function render() /*object*/{
	    var _props = this.props;
	    var height = _props.height;
	    var width = _props.width;
	    var columnKey = _props.columnKey;
	
	    var props = _objectWithoutProperties(_props, ['height', 'width', 'columnKey']);
	
	    var style = {
	      height: height,
	      width: width
	    };
	
	    if (DIR_SIGN === 1) {
	      style.left = props.left;
	    } else {
	      style.right = props.left;
	    }
	
	    var className = joinClasses(cx({
	      'fixedDataTableCellLayout/main': true,
	      'fixedDataTableCellLayout/lastChild': props.lastChild,
	      'fixedDataTableCellLayout/alignRight': props.align === 'right',
	      'fixedDataTableCellLayout/alignCenter': props.align === 'center',
	      'public/fixedDataTableCell/alignRight': props.align === 'right',
	      'public/fixedDataTableCell/highlighted': props.highlighted,
	      'public/fixedDataTableCell/main': true
	    }), props.className);
	
	    var columnResizerComponent;
	    if (props.onColumnResize) {
	      var columnResizerStyle = {
	        height: height
	      };
	      columnResizerComponent = React.createElement(
	        'div',
	        {
	          className: cx('fixedDataTableCellLayout/columnResizerContainer'),
	          style: columnResizerStyle,
	          onMouseDown: this._onColumnResizerMouseDown },
	        React.createElement('div', {
	          className: joinClasses(cx('fixedDataTableCellLayout/columnResizerKnob'), cx('public/fixedDataTableCell/columnResizerKnob')),
	          style: columnResizerStyle
	        })
	      );
	    }
	
	    var cellProps = {
	      columnKey: columnKey,
	      height: height,
	      width: width
	    };
	
	    if (props.rowIndex >= 0) {
	      cellProps.rowIndex = props.rowIndex;
	    }
	
	    var content;
	    if (React.isValidElement(props.cell)) {
	      content = React.cloneElement(props.cell, cellProps);
	    } else if (typeof props.cell === 'function') {
	      content = props.cell(cellProps);
	    } else {
	      content = React.createElement(
	        FixedDataTableCellDefault,
	        cellProps,
	        props.cell
	      );
	    }
	
	    return React.createElement(
	      'div',
	      { className: className, style: style },
	      columnResizerComponent,
	      content
	    );
	  },
	
	  _onColumnResizerMouseDown: function _onColumnResizerMouseDown( /*object*/event) {
	    this.props.onColumnResize(this.props.left, this.props.width, this.props.minWidth, this.props.maxWidth, this.props.columnKey, event);
	  }
	});
	
	module.exports = FixedDataTableCell;

/***/ },

/***/ 467:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule FixedDataTableCellDefault.react
	 * @typechecks
	 */
	
	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var React = __webpack_require__(431);
	
	var cx = __webpack_require__(449);
	var joinClasses = __webpack_require__(468);
	
	var PropTypes = React.PropTypes;
	
	/**
	 * Component that handles default cell layout and styling.
	 *
	 * All props unless specified below will be set onto the top level `div`
	 * rendered by the cell.
	 *
	 * Example usage via from a `Column`:
	 * ```
	 * const MyColumn = (
	 *   <Column
	 *     cell={({rowIndex, width, height}) => (
	 *       <Cell
	 *         width={width}
	 *         height={height}
	 *         className="my-class">
	 *         Cell number: <span>{rowIndex}</span>
	*        </Cell>
	 *     )}
	 *     width={100}
	 *   />
	 * );
	 * ```
	 */
	var FixedDataTableCellDefault = React.createClass({
	  displayName: 'FixedDataTableCellDefault',
	
	  propTypes: {
	
	    /**
	     * Outer height of the cell.
	     */
	    height: PropTypes.number,
	
	    /**
	     * Outer width of the cell.
	     */
	    width: PropTypes.number,
	
	    /**
	     * Optional prop that if specified on the `Column` will be passed to the
	     * cell. It can be used to uniquely identify which column is the cell is in.
	     */
	    columnKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
	  },
	
	  render: function render() {
	    var _props = this.props;
	    var height = _props.height;
	    var width = _props.width;
	    var style = _props.style;
	    var className = _props.className;
	    var children = _props.children;
	    var columnKey = _props.columnKey;
	    var // Unused but should not be passed through
	    rowIndex = _props.rowIndex;
	
	    var props = _objectWithoutProperties(_props, ['height', 'width', 'style', 'className', 'children', 'columnKey', 'rowIndex']);
	
	    var innerStyle = _extends({
	      height: height,
	      width: width
	    }, style);
	
	    return React.createElement(
	      'div',
	      _extends({}, props, {
	        className: joinClasses(cx('fixedDataTableCellLayout/wrap1'), cx('public/fixedDataTableCell/wrap1'), className),
	        style: innerStyle }),
	      React.createElement(
	        'div',
	        {
	          className: joinClasses(cx('fixedDataTableCellLayout/wrap2'), cx('public/fixedDataTableCell/wrap2')) },
	        React.createElement(
	          'div',
	          {
	            className: joinClasses(cx('fixedDataTableCellLayout/wrap3'), cx('public/fixedDataTableCell/wrap3')) },
	          React.createElement(
	            'div',
	            { className: cx('public/fixedDataTableCell/cellContent') },
	            children
	          )
	        )
	      )
	    );
	  }
	});
	
	module.exports = FixedDataTableCellDefault;
	// Unused but should not be passed through

/***/ },

/***/ 468:
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule joinClasses
	 * @typechecks static-only
	 */
	
	'use strict';
	
	/**
	 * Combines multiple className strings into one.
	 * http://jsperf.com/joinclasses-args-vs-array
	 *
	 * @param {...?string} className
	 * @return {string}
	 */
	function joinClasses(className /*, ... */) {
	  if (!className) {
	    className = '';
	  }
	  var nextClass;
	  var argLength = arguments.length;
	  if (argLength > 1) {
	    for (var ii = 1; ii < argLength; ii++) {
	      nextClass = arguments[ii];
	      if (nextClass) {
	        className = (className ? className + ' ' : '') + nextClass;
	      }
	    }
	  }
	  return className;
	}
	
	module.exports = joinClasses;

/***/ },

/***/ 469:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * This is to be used with the FixedDataTable. It is a read line
	 * that when you click on a column that is resizable appears and allows
	 * you to resize the corresponding column.
	 *
	 * @providesModule FixedDataTableColumnResizeHandle.react
	 * @typechecks
	 */
	
	'use strict';
	
	var DOMMouseMoveTracker = __webpack_require__(443);
	var Locale = __webpack_require__(463);
	var React = __webpack_require__(431);
	var ReactComponentWithPureRenderMixin = __webpack_require__(433);
	
	var clamp = __webpack_require__(459);
	var cx = __webpack_require__(449);
	
	var PropTypes = React.PropTypes;
	
	var FixedDataTableColumnResizeHandle = React.createClass({
	  displayName: 'FixedDataTableColumnResizeHandle',
	
	  mixins: [ReactComponentWithPureRenderMixin],
	
	  propTypes: {
	    visible: PropTypes.bool.isRequired,
	
	    /**
	     * This is the height of the line
	     */
	    height: PropTypes.number.isRequired,
	
	    /**
	     * Offset from left border of the table, please note
	     * that the line is a border on diff. So this is really the
	     * offset of the column itself.
	     */
	    leftOffset: PropTypes.number.isRequired,
	
	    /**
	     * Height of the clickable region of the line.
	     * This is assumed to be at the top of the line.
	     */
	    knobHeight: PropTypes.number.isRequired,
	
	    /**
	     * The line is a border on a diff, so this is essentially
	     * the width of column.
	     */
	    initialWidth: PropTypes.number,
	
	    /**
	     * The minimum width this dragger will collapse to
	     */
	    minWidth: PropTypes.number,
	
	    /**
	     * The maximum width this dragger will collapse to
	     */
	    maxWidth: PropTypes.number,
	
	    /**
	     * Initial click event on the header cell.
	     */
	    initialEvent: PropTypes.object,
	
	    /**
	     * When resizing is complete this is called.
	     */
	    onColumnResizeEnd: PropTypes.func,
	
	    /**
	     * Column key for the column being resized.
	     */
	    columnKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
	  },
	
	  getInitialState: function getInitialState() /*object*/{
	    return {
	      width: 0,
	      cursorDelta: 0
	    };
	  },
	
	  componentWillReceiveProps: function componentWillReceiveProps( /*object*/newProps) {
	    if (newProps.initialEvent && !this._mouseMoveTracker.isDragging()) {
	      this._mouseMoveTracker.captureMouseMoves(newProps.initialEvent);
	      this.setState({
	        width: newProps.initialWidth,
	        cursorDelta: newProps.initialWidth
	      });
	    }
	  },
	
	  componentDidMount: function componentDidMount() {
	    this._mouseMoveTracker = new DOMMouseMoveTracker(this._onMove, this._onColumnResizeEnd, document.body);
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    this._mouseMoveTracker.releaseMouseMoves();
	    this._mouseMoveTracker = null;
	  },
	
	  render: function render() /*object*/{
	    var style = {
	      width: this.state.width,
	      height: this.props.height
	    };
	    if (Locale.isRTL()) {
	      style.right = this.props.leftOffset;
	    } else {
	      style.left = this.props.leftOffset;
	    }
	    return React.createElement(
	      'div',
	      {
	        className: cx({
	          'fixedDataTableColumnResizerLineLayout/main': true,
	          'fixedDataTableColumnResizerLineLayout/hiddenElem': !this.props.visible,
	          'public/fixedDataTableColumnResizerLine/main': true
	        }),
	        style: style },
	      React.createElement('div', {
	        className: cx('fixedDataTableColumnResizerLineLayout/mouseArea'),
	        style: { height: this.props.height }
	      })
	    );
	  },
	
	  _onMove: function _onMove( /*number*/deltaX) {
	    if (Locale.isRTL()) {
	      deltaX = -deltaX;
	    }
	    var newWidth = this.state.cursorDelta + deltaX;
	    var newColumnWidth = clamp(newWidth, this.props.minWidth, this.props.maxWidth);
	
	    // Please note cursor delta is the different between the currently width
	    // and the new width.
	    this.setState({
	      width: newColumnWidth,
	      cursorDelta: newWidth
	    });
	  },
	
	  _onColumnResizeEnd: function _onColumnResizeEnd() {
	    this._mouseMoveTracker.releaseMouseMoves();
	    this.props.onColumnResizeEnd(this.state.width, this.props.columnKey);
	  }
	});
	
	module.exports = FixedDataTableColumnResizeHandle;

/***/ },

/***/ 470:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule FixedDataTableScrollHelper
	 * @typechecks
	 */
	
	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var PrefixIntervalTree = __webpack_require__(471);
	var clamp = __webpack_require__(459);
	
	var BUFFER_ROWS = 5;
	var NO_ROWS_SCROLL_RESULT = {
	  index: 0,
	  offset: 0,
	  position: 0,
	  contentHeight: 0
	};
	
	var FixedDataTableScrollHelper = (function () {
	  function FixedDataTableScrollHelper(
	  /*number*/rowCount,
	  /*number*/defaultRowHeight,
	  /*number*/viewportHeight,
	  /*?function*/rowHeightGetter) {
	    _classCallCheck(this, FixedDataTableScrollHelper);
	
	    this._rowOffsets = PrefixIntervalTree.uniform(rowCount, defaultRowHeight);
	    this._storedHeights = new Array(rowCount);
	    for (var i = 0; i < rowCount; ++i) {
	      this._storedHeights[i] = defaultRowHeight;
	    }
	    this._rowCount = rowCount;
	    this._position = 0;
	    this._contentHeight = rowCount * defaultRowHeight;
	    this._defaultRowHeight = defaultRowHeight;
	    this._rowHeightGetter = rowHeightGetter ? rowHeightGetter : function () {
	      return defaultRowHeight;
	    };
	    this._viewportHeight = viewportHeight;
	    this.scrollRowIntoView = this.scrollRowIntoView.bind(this);
	    this.setViewportHeight = this.setViewportHeight.bind(this);
	    this.scrollBy = this.scrollBy.bind(this);
	    this.scrollTo = this.scrollTo.bind(this);
	    this.scrollToRow = this.scrollToRow.bind(this);
	    this.setRowHeightGetter = this.setRowHeightGetter.bind(this);
	    this.getContentHeight = this.getContentHeight.bind(this);
	    this.getRowPosition = this.getRowPosition.bind(this);
	
	    this._updateHeightsInViewport(0, 0);
	  }
	
	  _createClass(FixedDataTableScrollHelper, [{
	    key: 'setRowHeightGetter',
	    value: function setRowHeightGetter( /*function*/rowHeightGetter) {
	      this._rowHeightGetter = rowHeightGetter;
	    }
	  }, {
	    key: 'setViewportHeight',
	    value: function setViewportHeight( /*number*/viewportHeight) {
	      this._viewportHeight = viewportHeight;
	    }
	  }, {
	    key: 'getContentHeight',
	    value: function getContentHeight() /*number*/{
	      return this._contentHeight;
	    }
	  }, {
	    key: '_updateHeightsInViewport',
	    value: function _updateHeightsInViewport(
	    /*number*/firstRowIndex,
	    /*number*/firstRowOffset) {
	      var top = firstRowOffset;
	      var index = firstRowIndex;
	      while (top <= this._viewportHeight && index < this._rowCount) {
	        this._updateRowHeight(index);
	        top += this._storedHeights[index];
	        index++;
	      }
	    }
	  }, {
	    key: '_updateHeightsAboveViewport',
	    value: function _updateHeightsAboveViewport( /*number*/firstRowIndex) {
	      var index = firstRowIndex - 1;
	      while (index >= 0 && index >= firstRowIndex - BUFFER_ROWS) {
	        var delta = this._updateRowHeight(index);
	        this._position += delta;
	        index--;
	      }
	    }
	  }, {
	    key: '_updateRowHeight',
	    value: function _updateRowHeight( /*number*/rowIndex) /*number*/{
	      if (rowIndex < 0 || rowIndex >= this._rowCount) {
	        return 0;
	      }
	      var newHeight = this._rowHeightGetter(rowIndex);
	      if (newHeight !== this._storedHeights[rowIndex]) {
	        var change = newHeight - this._storedHeights[rowIndex];
	        this._rowOffsets.set(rowIndex, newHeight);
	        this._storedHeights[rowIndex] = newHeight;
	        this._contentHeight += change;
	        return change;
	      }
	      return 0;
	    }
	  }, {
	    key: 'getRowPosition',
	    value: function getRowPosition( /*number*/rowIndex) /*number*/{
	      this._updateRowHeight(rowIndex);
	      return this._rowOffsets.sumUntil(rowIndex);
	    }
	  }, {
	    key: 'scrollBy',
	    value: function scrollBy( /*number*/delta) /*object*/{
	      if (this._rowCount === 0) {
	        return NO_ROWS_SCROLL_RESULT;
	      }
	      var firstRow = this._rowOffsets.greatestLowerBound(this._position);
	      firstRow = clamp(firstRow, 0, Math.max(this._rowCount - 1, 0));
	      var firstRowPosition = this._rowOffsets.sumUntil(firstRow);
	      var rowIndex = firstRow;
	      var position = this._position;
	
	      var rowHeightChange = this._updateRowHeight(rowIndex);
	      if (firstRowPosition !== 0) {
	        position += rowHeightChange;
	      }
	      var visibleRowHeight = this._storedHeights[rowIndex] - (position - firstRowPosition);
	
	      if (delta >= 0) {
	
	        while (delta > 0 && rowIndex < this._rowCount) {
	          if (delta < visibleRowHeight) {
	            position += delta;
	            delta = 0;
	          } else {
	            delta -= visibleRowHeight;
	            position += visibleRowHeight;
	            rowIndex++;
	          }
	          if (rowIndex < this._rowCount) {
	            this._updateRowHeight(rowIndex);
	            visibleRowHeight = this._storedHeights[rowIndex];
	          }
	        }
	      } else if (delta < 0) {
	        delta = -delta;
	        var invisibleRowHeight = this._storedHeights[rowIndex] - visibleRowHeight;
	
	        while (delta > 0 && rowIndex >= 0) {
	          if (delta < invisibleRowHeight) {
	            position -= delta;
	            delta = 0;
	          } else {
	            position -= invisibleRowHeight;
	            delta -= invisibleRowHeight;
	            rowIndex--;
	          }
	          if (rowIndex >= 0) {
	            var change = this._updateRowHeight(rowIndex);
	            invisibleRowHeight = this._storedHeights[rowIndex];
	            position += change;
	          }
	        }
	      }
	
	      var maxPosition = this._contentHeight - this._viewportHeight;
	      position = clamp(position, 0, maxPosition);
	      this._position = position;
	      var firstRowIndex = this._rowOffsets.greatestLowerBound(position);
	      firstRowIndex = clamp(firstRowIndex, 0, Math.max(this._rowCount - 1, 0));
	      firstRowPosition = this._rowOffsets.sumUntil(firstRowIndex);
	      var firstRowOffset = firstRowPosition - position;
	
	      this._updateHeightsInViewport(firstRowIndex, firstRowOffset);
	      this._updateHeightsAboveViewport(firstRowIndex);
	
	      return {
	        index: firstRowIndex,
	        offset: firstRowOffset,
	        position: this._position,
	        contentHeight: this._contentHeight
	      };
	    }
	  }, {
	    key: '_getRowAtEndPosition',
	    value: function _getRowAtEndPosition( /*number*/rowIndex) /*number*/{
	      // We need to update enough rows above the selected one to be sure that when
	      // we scroll to selected position all rows between first shown and selected
	      // one have most recent heights computed and will not resize
	      this._updateRowHeight(rowIndex);
	      var currentRowIndex = rowIndex;
	      var top = this._storedHeights[currentRowIndex];
	      while (top < this._viewportHeight && currentRowIndex >= 0) {
	        currentRowIndex--;
	        if (currentRowIndex >= 0) {
	          this._updateRowHeight(currentRowIndex);
	          top += this._storedHeights[currentRowIndex];
	        }
	      }
	      var position = this._rowOffsets.sumTo(rowIndex) - this._viewportHeight;
	      if (position < 0) {
	        position = 0;
	      }
	      return position;
	    }
	  }, {
	    key: 'scrollTo',
	    value: function scrollTo( /*number*/position) /*object*/{
	      if (this._rowCount === 0) {
	        return NO_ROWS_SCROLL_RESULT;
	      }
	      if (position <= 0) {
	        // If position less than or equal to 0 first row should be fully visible
	        // on top
	        this._position = 0;
	        this._updateHeightsInViewport(0, 0);
	
	        return {
	          index: 0,
	          offset: 0,
	          position: this._position,
	          contentHeight: this._contentHeight
	        };
	      } else if (position >= this._contentHeight - this._viewportHeight) {
	        // If position is equal to or greater than max scroll value, we need
	        // to make sure to have bottom border of last row visible.
	        var rowIndex = this._rowCount - 1;
	        position = this._getRowAtEndPosition(rowIndex);
	      }
	      this._position = position;
	
	      var firstRowIndex = this._rowOffsets.greatestLowerBound(position);
	      firstRowIndex = clamp(firstRowIndex, 0, Math.max(this._rowCount - 1, 0));
	      var firstRowPosition = this._rowOffsets.sumUntil(firstRowIndex);
	      var firstRowOffset = firstRowPosition - position;
	
	      this._updateHeightsInViewport(firstRowIndex, firstRowOffset);
	      this._updateHeightsAboveViewport(firstRowIndex);
	
	      return {
	        index: firstRowIndex,
	        offset: firstRowOffset,
	        position: this._position,
	        contentHeight: this._contentHeight
	      };
	    }
	
	    /**
	     * Allows to scroll to selected row with specified offset. It always
	     * brings that row to top of viewport with that offset
	     */
	  }, {
	    key: 'scrollToRow',
	    value: function scrollToRow( /*number*/rowIndex, /*number*/offset) /*object*/{
	      rowIndex = clamp(rowIndex, 0, Math.max(this._rowCount - 1, 0));
	      offset = clamp(offset, -this._storedHeights[rowIndex], 0);
	      var firstRow = this._rowOffsets.sumUntil(rowIndex);
	      return this.scrollTo(firstRow - offset);
	    }
	
	    /**
	     * Allows to scroll to selected row by bringing it to viewport with minimal
	     * scrolling. This that if row is fully visible, scroll will not be changed.
	     * If top border of row is above top of viewport it will be scrolled to be
	     * fully visible on the top of viewport. If the bottom border of row is
	     * below end of viewport, it will be scrolled up to be fully visible on the
	     * bottom of viewport.
	     */
	  }, {
	    key: 'scrollRowIntoView',
	    value: function scrollRowIntoView( /*number*/rowIndex) /*object*/{
	      rowIndex = clamp(rowIndex, 0, Math.max(this._rowCount - 1, 0));
	      var rowBegin = this._rowOffsets.sumUntil(rowIndex);
	      var rowEnd = rowBegin + this._storedHeights[rowIndex];
	      if (rowBegin < this._position) {
	        return this.scrollTo(rowBegin);
	      } else if (this._position + this._viewportHeight < rowEnd) {
	        var position = this._getRowAtEndPosition(rowIndex);
	        return this.scrollTo(position);
	      }
	      return this.scrollTo(this._position);
	    }
	  }]);
	
	  return FixedDataTableScrollHelper;
	})();
	
	module.exports = FixedDataTableScrollHelper;

/***/ },

/***/ 471:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule PrefixIntervalTree
	 * 
	 * @typechecks
	 */
	
	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var invariant = __webpack_require__(454);
	
	var parent = function parent(node) {
	  return Math.floor(node / 2);
	};
	
	var Int32Array = global.Int32Array || function (size) {
	  var xs = [];
	  for (var i = size - 1; i >= 0; --i) {
	    xs[i] = 0;
	  }
	  return xs;
	};
	
	/**
	 * Computes the next power of 2 after or equal to x.
	 */
	function ceilLog2(x) {
	  var y = 1;
	  while (y < x) {
	    y *= 2;
	  }
	  return y;
	}
	
	/**
	 * A prefix interval tree stores an numeric array and the partial sums of that
	 * array. It is optimized for updating the values of the array without
	 * recomputing all of the partial sums.
	 *
	 *   - O(ln n) update
	 *   - O(1) lookup
	 *   - O(ln n) compute a partial sum
	 *   - O(n) space
	 *
	 * Note that the sequence of partial sums is one longer than the array, so that
	 * the first partial sum is always 0, and the last partial sum is the sum of the
	 * entire array.
	 */
	
	var PrefixIntervalTree = (function () {
	  function PrefixIntervalTree(xs) {
	    _classCallCheck(this, PrefixIntervalTree);
	
	    this._size = xs.length;
	    this._half = ceilLog2(this._size);
	    this._heap = new Int32Array(2 * this._half);
	
	    var i;
	    for (i = 0; i < this._size; ++i) {
	      this._heap[this._half + i] = xs[i];
	    }
	
	    for (i = this._half - 1; i > 0; --i) {
	      this._heap[i] = this._heap[2 * i] + this._heap[2 * i + 1];
	    }
	  }
	
	  _createClass(PrefixIntervalTree, [{
	    key: 'set',
	    value: function set(index, value) {
	      invariant(0 <= index && index < this._size, 'Index out of range %s', index);
	
	      var node = this._half + index;
	      this._heap[node] = value;
	
	      node = parent(node);
	      for (; node !== 0; node = parent(node)) {
	        this._heap[node] = this._heap[2 * node] + this._heap[2 * node + 1];
	      }
	    }
	  }, {
	    key: 'get',
	    value: function get(index) {
	      invariant(0 <= index && index < this._size, 'Index out of range %s', index);
	
	      var node = this._half + index;
	      return this._heap[node];
	    }
	  }, {
	    key: 'getSize',
	    value: function getSize() {
	      return this._size;
	    }
	
	    /**
	     * Returns the sum get(0) + get(1) + ... + get(end - 1).
	     */
	  }, {
	    key: 'sumUntil',
	    value: function sumUntil(end) {
	      invariant(0 <= end && end < this._size + 1, 'Index out of range %s', end);
	
	      if (end === 0) {
	        return 0;
	      }
	
	      var node = this._half + end - 1;
	      var sum = this._heap[node];
	      for (; node !== 1; node = parent(node)) {
	        if (node % 2 === 1) {
	          sum += this._heap[node - 1];
	        }
	      }
	
	      return sum;
	    }
	
	    /**
	     * Returns the sum get(0) + get(1) + ... + get(inclusiveEnd).
	     */
	  }, {
	    key: 'sumTo',
	    value: function sumTo(inclusiveEnd) {
	      invariant(0 <= inclusiveEnd && inclusiveEnd < this._size, 'Index out of range %s', inclusiveEnd);
	      return this.sumUntil(inclusiveEnd + 1);
	    }
	
	    /**
	     * Returns the sum get(begin) + get(begin + 1) + ... + get(end - 1).
	     */
	  }, {
	    key: 'sum',
	    value: function sum(begin, end) {
	      invariant(begin <= end, 'Begin must precede end');
	      return this.sumUntil(end) - this.sumUntil(begin);
	    }
	
	    /**
	     * Returns the smallest i such that 0 <= i <= size and sumUntil(i) <= t, or
	     * -1 if no such i exists.
	     */
	  }, {
	    key: 'greatestLowerBound',
	    value: function greatestLowerBound(t) {
	      if (t < 0) {
	        return -1;
	      }
	
	      var node = 1;
	      if (this._heap[node] <= t) {
	        return this._size;
	      }
	
	      while (node < this._half) {
	        var leftSum = this._heap[2 * node];
	        if (t < leftSum) {
	          node = 2 * node;
	        } else {
	          node = 2 * node + 1;
	          t -= leftSum;
	        }
	      }
	
	      return node - this._half;
	    }
	
	    /**
	     * Returns the smallest i such that 0 <= i <= size and sumUntil(i) < t, or
	     * -1 if no such i exists.
	     */
	  }, {
	    key: 'greatestStrictLowerBound',
	    value: function greatestStrictLowerBound(t) {
	      if (t <= 0) {
	        return -1;
	      }
	
	      var node = 1;
	      if (this._heap[node] < t) {
	        return this._size;
	      }
	
	      while (node < this._half) {
	        var leftSum = this._heap[2 * node];
	        if (t <= leftSum) {
	          node = 2 * node;
	        } else {
	          node = 2 * node + 1;
	          t -= leftSum;
	        }
	      }
	
	      return node - this._half;
	    }
	
	    /**
	     * Returns the smallest i such that 0 <= i <= size and t <= sumUntil(i), or
	     * size + 1 if no such i exists.
	     */
	  }, {
	    key: 'leastUpperBound',
	    value: function leastUpperBound(t) {
	      return this.greatestStrictLowerBound(t) + 1;
	    }
	
	    /**
	     * Returns the smallest i such that 0 <= i <= size and t < sumUntil(i), or
	     * size + 1 if no such i exists.
	     */
	  }, {
	    key: 'leastStrictUpperBound',
	    value: function leastStrictUpperBound(t) {
	      return this.greatestLowerBound(t) + 1;
	    }
	  }], [{
	    key: 'uniform',
	    value: function uniform(size, initialValue) {
	      var xs = [];
	      for (var i = size - 1; i >= 0; --i) {
	        xs[i] = initialValue;
	      }
	
	      return new PrefixIntervalTree(xs);
	    }
	  }, {
	    key: 'empty',
	    value: function empty(size) {
	      return PrefixIntervalTree.uniform(size, 0);
	    }
	  }]);
	
	  return PrefixIntervalTree;
	})();
	
	module.exports = PrefixIntervalTree;
	
	/**
	 * Number of elements in the array
	 */
	
	/**
	 * Half the size of the heap. It is also the number of non-leaf nodes, and the
	 * index of the first element in the heap. Always a power of 2.
	 */
	
	/**
	 * Binary heap
	 */
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 472:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule FixedDataTableWidthHelper
	 * @typechecks
	 */
	
	'use strict';
	
	var React = __webpack_require__(431);
	
	function getTotalWidth( /*array*/columns) /*number*/{
	  var totalWidth = 0;
	  for (var i = 0; i < columns.length; ++i) {
	    totalWidth += columns[i].props.width;
	  }
	  return totalWidth;
	}
	
	function getTotalFlexGrow( /*array*/columns) /*number*/{
	  var totalFlexGrow = 0;
	  for (var i = 0; i < columns.length; ++i) {
	    totalFlexGrow += columns[i].props.flexGrow || 0;
	  }
	  return totalFlexGrow;
	}
	
	function distributeFlexWidth(
	/*array*/columns,
	/*number*/flexWidth) /*object*/{
	  if (flexWidth <= 0) {
	    return {
	      columns: columns,
	      width: getTotalWidth(columns)
	    };
	  }
	  var remainingFlexGrow = getTotalFlexGrow(columns);
	  var remainingFlexWidth = flexWidth;
	  var newColumns = [];
	  var totalWidth = 0;
	  for (var i = 0; i < columns.length; ++i) {
	    var column = columns[i];
	    if (!column.props.flexGrow) {
	      totalWidth += column.props.width;
	      newColumns.push(column);
	      continue;
	    }
	    var columnFlexWidth = Math.floor(column.props.flexGrow / remainingFlexGrow * remainingFlexWidth);
	    var newColumnWidth = Math.floor(column.props.width + columnFlexWidth);
	    totalWidth += newColumnWidth;
	
	    remainingFlexGrow -= column.props.flexGrow;
	    remainingFlexWidth -= columnFlexWidth;
	
	    newColumns.push(React.cloneElement(column, { width: newColumnWidth }));
	  }
	
	  return {
	    columns: newColumns,
	    width: totalWidth
	  };
	}
	
	function adjustColumnGroupWidths(
	/*array*/columnGroups,
	/*number*/expectedWidth) /*object*/{
	  var allColumns = [];
	  var i;
	  for (i = 0; i < columnGroups.length; ++i) {
	    React.Children.forEach(columnGroups[i].props.children, function (column) {
	      allColumns.push(column);
	    });
	  }
	  var columnsWidth = getTotalWidth(allColumns);
	  var remainingFlexGrow = getTotalFlexGrow(allColumns);
	  var remainingFlexWidth = Math.max(expectedWidth - columnsWidth, 0);
	
	  var newAllColumns = [];
	  var newColumnGroups = [];
	
	  for (i = 0; i < columnGroups.length; ++i) {
	    var columnGroup = columnGroups[i];
	    var currentColumns = [];
	
	    React.Children.forEach(columnGroup.props.children, function (column) {
	      currentColumns.push(column);
	    });
	
	    var columnGroupFlexGrow = getTotalFlexGrow(currentColumns);
	    var columnGroupFlexWidth = Math.floor(columnGroupFlexGrow / remainingFlexGrow * remainingFlexWidth);
	
	    var newColumnSettings = distributeFlexWidth(currentColumns, columnGroupFlexWidth);
	
	    remainingFlexGrow -= columnGroupFlexGrow;
	    remainingFlexWidth -= columnGroupFlexWidth;
	
	    for (var j = 0; j < newColumnSettings.columns.length; ++j) {
	      newAllColumns.push(newColumnSettings.columns[j]);
	    }
	
	    newColumnGroups.push(React.cloneElement(columnGroup, { width: newColumnSettings.width }));
	  }
	
	  return {
	    columns: newAllColumns,
	    columnGroups: newColumnGroups
	  };
	}
	
	function adjustColumnWidths(
	/*array*/columns,
	/*number*/expectedWidth) /*array*/{
	  var columnsWidth = getTotalWidth(columns);
	  if (columnsWidth < expectedWidth) {
	    return distributeFlexWidth(columns, expectedWidth - columnsWidth).columns;
	  }
	  return columns;
	}
	
	var FixedDataTableWidthHelper = {
	  getTotalWidth: getTotalWidth,
	  getTotalFlexGrow: getTotalFlexGrow,
	  distributeFlexWidth: distributeFlexWidth,
	  adjustColumnWidths: adjustColumnWidths,
	  adjustColumnGroupWidths: adjustColumnGroupWidths
	};
	
	module.exports = FixedDataTableWidthHelper;

/***/ },

/***/ 473:
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule debounceCore
	 * @typechecks
	 */
	
	/**
	 * Invokes the given callback after a specified number of milliseconds have
	 * elapsed, ignoring subsequent calls.
	 *
	 * For example, if you wanted to update a preview after the user stops typing
	 * you could do the following:
	 *
	 *   elem.addEventListener('keyup', debounce(this.updatePreview, 250), false);
	 *
	 * The returned function has a reset method which can be called to cancel a
	 * pending invocation.
	 *
	 *   var debouncedUpdatePreview = debounce(this.updatePreview, 250);
	 *   elem.addEventListener('keyup', debouncedUpdatePreview, false);
	 *
	 *   // later, to cancel pending calls
	 *   debouncedUpdatePreview.reset();
	 *
	 * @param {function} func - the function to debounce
	 * @param {number} wait - how long to wait in milliseconds
	 * @param {*} context - optional context to invoke the function in
	 * @param {?function} setTimeoutFunc - an implementation of setTimeout
	 *  if nothing is passed in the default setTimeout function is used
	  * @param {?function} clearTimeoutFunc - an implementation of clearTimeout
	 *  if nothing is passed in the default clearTimeout function is used
	 */
	"use strict";
	
	function debounce(func, wait, context, setTimeoutFunc, clearTimeoutFunc) {
	  setTimeoutFunc = setTimeoutFunc || setTimeout;
	  clearTimeoutFunc = clearTimeoutFunc || clearTimeout;
	  var timeout;
	
	  function debouncer() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    debouncer.reset();
	
	    var callback = function callback() {
	      func.apply(context, args);
	    };
	    callback.__SMmeta = func.__SMmeta;
	    timeout = setTimeoutFunc(callback, wait);
	  }
	
	  debouncer.reset = function () {
	    clearTimeoutFunc(timeout);
	  };
	
	  return debouncer;
	}
	
	module.exports = debounce;

/***/ },

/***/ 474:
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule shallowEqual
	 * @typechecks
	 * 
	 */
	
	'use strict';
	
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	
	/**
	 * Performs equality by iterating through keys on an object and returning false
	 * when any key has values which are not strictly equal between the arguments.
	 * Returns true when the values of all keys are strictly equal.
	 */
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }
	
	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }
	
	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);
	
	  if (keysA.length !== keysB.length) {
	    return false;
	  }
	
	  // Test for A's keys different from B.
	  var bHasOwnProperty = hasOwnProperty.bind(objB);
	  for (var i = 0; i < keysA.length; i++) {
	    if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }
	
	  return true;
	}
	
	module.exports = shallowEqual;

/***/ },

/***/ 475:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule FixedDataTableColumnNew.react
	 * @typechecks
	 */
	
	'use strict';
	
	var React = __webpack_require__(431);
	
	var PropTypes = React.PropTypes;
	
	/**
	 * Component that defines the attributes of table column.
	 */
	var FixedDataTableColumn = React.createClass({
	  displayName: 'FixedDataTableColumn',
	
	  statics: {
	    __TableColumn__: true
	  },
	
	  propTypes: {
	    /**
	     * The horizontal alignment of the table cell content.
	     */
	    align: PropTypes.oneOf(['left', 'center', 'right']),
	
	    /**
	     * Controls if the column is fixed when scrolling in the X axis.
	     */
	    fixed: PropTypes.bool,
	
	    /**
	     * The header cell for this column.
	     * This can either be a string a React element, or a function that generates
	     * a React Element. Passing in a string will render a default header cell
	     * with that string. By default, the React element passed in can expect to
	     * receive the following props:
	     *
	     * ```
	     * props: {
	     *   columnKey: string // (of the column, if given)
	     *   height: number // (supplied from the Table or rowHeightGetter)
	     *   width: number // (supplied from the Column)
	     * }
	     * ```
	     *
	     * Because you are passing in your own React element, you can feel free to
	     * pass in whatever props you may want or need.
	     *
	     * If you pass in a function, you will receive the same props object as the
	     * first argument.
	     */
	    header: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
	
	    /**
	     * This is the body cell that will be cloned for this column.
	     * This can either be a string a React element, or a function that generates
	     * a React Element. Passing in a string will render a default header cell
	     * with that string. By default, the React element passed in can expect to
	     * receive the following props:
	     *
	     * ```
	     * props: {
	     *   rowIndex; number // (the row index of the cell)
	     *   columnKey: string // (of the column, if given)
	     *   height: number // (supplied from the Table or rowHeightGetter)
	     *   width: number // (supplied from the Column)
	     * }
	     * ```
	     *
	     * Because you are passing in your own React element, you can feel free to
	     * pass in whatever props you may want or need.
	     *
	     * If you pass in a function, you will receive the same props object as the
	     * first argument.
	     */
	    cell: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
	
	    /**
	     * This is the footer cell for this column.
	     * This can either be a string a React element, or a function that generates
	     * a React Element. Passing in a string will render a default header cell
	     * with that string. By default, the React element passed in can expect to
	     * receive the following props:
	     *
	     * ```
	     * props: {
	     *   columnKey: string // (of the column, if given)
	     *   height: number // (supplied from the Table or rowHeightGetter)
	     *   width: number // (supplied from the Column)
	     * }
	     * ```
	     *
	     * Because you are passing in your own React element, you can feel free to
	     * pass in whatever props you may want or need.
	     *
	     * If you pass in a function, you will receive the same props object as the
	     * first argument.
	     */
	    footer: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
	
	    /**
	     * This is used to uniquely identify the column, and is not required unless
	     * you a resizing columns. This will be the key given in the
	     * `onColumnResizeEndCallback` on the Table.
	     */
	    columnKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	
	    /**
	     * The pixel width of the column.
	     */
	    width: PropTypes.number.isRequired,
	
	    /**
	     * If this is a resizable column this is its minimum pixel width.
	     */
	    minWidth: PropTypes.number,
	
	    /**
	     * If this is a resizable column this is its maximum pixel width.
	     */
	    maxWidth: PropTypes.number,
	
	    /**
	     * The grow factor relative to other columns. Same as the flex-grow API
	     * from http://www.w3.org/TR/css3-flexbox/. Basically, take any available
	     * extra width and distribute it proportionally according to all columns'
	     * flexGrow values. Defaults to zero (no-flexing).
	     */
	    flexGrow: PropTypes.number,
	
	    /**
	     * Whether the column can be resized with the
	     * FixedDataTableColumnResizeHandle. Please note that if a column
	     * has a flex grow, once you resize the column this will be set to 0.
	     *
	     * This property only provides the UI for the column resizing. If this
	     * is set to true, you will need to set the onColumnResizeEndCallback table
	     * property and render your columns appropriately.
	     */
	    isResizable: PropTypes.bool,
	
	    /**
	     * Whether cells in this column can be removed from document when outside
	     * of viewport as a result of horizontal scrolling.
	     * Setting this property to true allows the table to not render cells in
	     * particular column that are outside of viewport for visible rows. This
	     * allows to create table with many columns and not have vertical scrolling
	     * performance drop.
	     * Setting the property to false will keep previous behaviour and keep
	     * cell rendered if the row it belongs to is visible.
	     */
	    allowCellsRecycling: PropTypes.bool
	  },
	
	  getDefaultProps: function getDefaultProps() /*object*/{
	    return {
	      allowCellsRecycling: false,
	      fixed: false
	    };
	  },
	
	  render: function render() {
	    if (process.env.NODE_ENV !== 'production') {
	      throw new Error('Component <FixedDataTableColumn /> should never render');
	    }
	    return null;
	  }
	});
	
	module.exports = FixedDataTableColumn;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(60)))

/***/ },

/***/ 476:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule FixedDataTableColumnGroupNew.react
	 * @typechecks
	 */
	
	'use strict';
	
	var React = __webpack_require__(431);
	
	var PropTypes = React.PropTypes;
	
	/**
	 * Component that defines the attributes of a table column group.
	 */
	var FixedDataTableColumnGroup = React.createClass({
	  displayName: 'FixedDataTableColumnGroup',
	
	  statics: {
	    __TableColumnGroup__: true
	  },
	
	  propTypes: {
	    /**
	     * The horizontal alignment of the table cell content.
	     */
	    align: PropTypes.oneOf(['left', 'center', 'right']),
	
	    /**
	     * Controls if the column group is fixed when scrolling in the X axis.
	     */
	    fixed: PropTypes.bool,
	
	    /**
	     * This is the header cell for this column group.
	     * This can either be a string or a React element. Passing in a string
	     * will render a default footer cell with that string. By default, the React
	     * element passed in can expect to receive the following props:
	     *
	     * ```
	     * props: {
	     *   height: number // (supplied from the groupHeaderHeight)
	     *   width: number // (supplied from the Column)
	     * }
	     * ```
	     *
	     * Because you are passing in your own React element, you can feel free to
	     * pass in whatever props you may want or need.
	     *
	     * You can also pass in a function that returns a react elemnt, with the
	     * props object above passed in as the first parameter.
	     */
	    header: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
	
	  },
	
	  getDefaultProps: function getDefaultProps() /*object*/{
	    return {
	      fixed: false
	    };
	  },
	
	  render: function render() {
	    if (process.env.NODE_ENV !== 'production') {
	      throw new Error('Component <FixedDataTableColumnGroup /> should never render');
	    }
	    return null;
	  }
	});
	
	module.exports = FixedDataTableColumnGroup;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(60)))

/***/ },

/***/ 477:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule FixedDataTableCellTransition.react
	 */
	
	/**
	 * TRANSITION SHIM
	 * This acts to provide an intermediate mapping from the old API to the new API.
	 *
	 * When ready, remove this file and rename the providesModule in
	 * FixedDataTableCellNew.react and dependency in FixedDataTableCellGroup.react
	 */
	
	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(431);
	var PropTypes = React.PropTypes;
	
	var cx = __webpack_require__(449);
	var joinClasses = __webpack_require__(468);
	var shallowEqual = __webpack_require__(474);
	
	var CellDefault = __webpack_require__(467);
	
	var TransitionCell = React.createClass({
	  displayName: 'TransitionCell',
	
	  propTypes: {
	    label: PropTypes.string, // header, footer
	    className: PropTypes.string,
	    rowIndex: PropTypes.number,
	    rowGetter: PropTypes.func, // cell
	    dataKey: PropTypes.oneOfType([// cell, footer
	    PropTypes.string, PropTypes.number]),
	    cellRenderer: PropTypes.func,
	    cellDataGetter: PropTypes.func,
	    footerDataGetter: PropTypes.func, // footer
	    footerData: PropTypes.any, // footer
	    columnData: PropTypes.any, // cell, header
	    width: PropTypes.number,
	    height: PropTypes.number,
	    isHeaderCell: PropTypes.bool, // header
	    isFooterCell: PropTypes.bool },
	
	  // footer
	  shouldComponentUpdate: function shouldComponentUpdate( /*object*/nextProps) {
	    var update = false;
	    var rowData;
	    if (nextProps.rowGetter) {
	      rowData = nextProps.rowGetter(nextProps.rowIndex);
	      if (this._rowData !== rowData) {
	        update = true;
	      }
	    }
	
	    var cellData;
	    if (nextProps.dataKey != null) {
	      if (nextProps.cellDataGetter) {
	        cellData = nextProps.cellDataGetter(nextProps.dataKey, rowData);
	      }
	      if (!cellData && rowData) {
	        cellData = rowData[nextProps.dataKey];
	      }
	    }
	    if (this._cellData !== cellData) {
	      update = true;
	    }
	    this._rowData = rowData;
	    this._cellData = cellData;
	
	    return update || !shallowEqual(nextProps, this.props);
	  },
	
	  _getCellData: function _getCellData(props) {
	    var dataKey = props.dataKey;
	    if (dataKey == null) {
	      return null;
	    }
	
	    var rowData;
	    if (props.rowGetter) {
	      rowData = props.rowGetter(props.rowIndex);
	    }
	
	    if (props.cellDataGetter) {
	      return props.cellDataGetter(dataKey, rowData);
	    }
	
	    if (rowData) {
	      return rowData[dataKey];
	    }
	
	    if (props.footerDataGetter) {
	      return props.footerDataGetter()[dataKey];
	    }
	
	    if (props.footerData) {
	      return props.footerData[dataKey];
	    }
	
	    if (props.headerDataGetter) {
	      return props.headerDataGetter[dataKey];
	    }
	  },
	
	  _getRowData: function _getRowData(props) {
	    if (props.rowGetter) {
	      return props.rowGetter(props.rowIndex) || {};
	    }
	
	    if (props.footerDataGetter) {
	      return props.footerDataGetter() || {};
	    }
	
	    if (props.footerData) {
	      return props.footerData || {};
	    }
	
	    return {};
	  },
	
	  render: function render() {
	    var props = this.props;
	
	    var cellData = this._getCellData(props);
	    var content = cellData;
	    var rowData = this._getRowData(props);
	    var usingRenderer = !!(props.cellRenderer || props.groupHeaderRenderer);
	
	    if (props.isHeaderCell || props.isFooterCell) {
	      content = content || props.label;
	    }
	
	    if (props.cellRenderer) {
	      if (props.isHeaderCell || props.isFooterCell) {
	        content = props.cellRenderer(props.label, props.dataKey, props.columnData, rowData, props.width) || props.label;
	      } else {
	        content = props.cellRenderer(cellData, props.dataKey, rowData, props.rowIndex, props.columnData, props.width);
	      }
	    }
	
	    if (props.groupHeaderRenderer) {
	      content = props.groupHeaderRenderer(props.label, props.dataKey, // index in children
	      props.groupHeaderData, props.groupHeaderLabels, props.width) || content;
	    }
	
	    var contentClass = cx('public/fixedDataTableCell/cellContent');
	
	    if (React.isValidElement(content) && usingRenderer) {
	      content = React.cloneElement(content, {
	        className: joinClasses(content.props.className, contentClass)
	      });
	    } else {
	      return React.createElement(
	        CellDefault,
	        props,
	        content
	      );
	    }
	
	    var innerStyle = _extends({
	      height: props.height,
	      width: props.width
	    }, props.style);
	
	    return React.createElement(
	      'div',
	      _extends({}, this.props, {
	        className: joinClasses(cx('fixedDataTableCellLayout/wrap1'), cx('public/fixedDataTableCell/wrap1'), this.props.className),
	        style: innerStyle }),
	      React.createElement(
	        'div',
	        {
	          className: joinClasses(cx('fixedDataTableCellLayout/wrap2'), cx('public/fixedDataTableCell/wrap2')) },
	        React.createElement(
	          'div',
	          {
	            className: joinClasses(cx('fixedDataTableCellLayout/wrap3'), cx('public/fixedDataTableCell/wrap3')) },
	          content
	        )
	      )
	    );
	  }
	});
	
	module.exports = TransitionCell;

/***/ },

/***/ 478:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(479);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(481)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./fixed-data-table.css", function() {
				var newContent = require("!!./../../css-loader/index.js!./fixed-data-table.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 479:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(480)();
	// imports
	
	
	// module
	exports.push([module.id, "/**\n * FixedDataTable v0.6.3 \n *\n * Copyright (c) 2015, Facebook, Inc.\n * All rights reserved.\n *\n * This source code is licensed under the BSD-style license found in the\n * LICENSE file in the root directory of this source tree. An additional grant\n * of patent rights can be found in the PATENTS file in the same directory.\n */\n\n/**\n * Copyright (c) 2015, Facebook, Inc.\n * All rights reserved.\n *\n * This source code is licensed under the BSD-style license found in the\n * LICENSE file in the root directory of this source tree. An additional grant\n * of patent rights can be found in the PATENTS file in the same directory.\n *\n * @providesModule fixedDataTableCellGroupLayout\n */\n\n.fixedDataTableCellGroupLayout_cellGroup {\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  left: 0;\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  white-space: nowrap;\n}\n\n.fixedDataTableCellGroupLayout_cellGroup > .public_fixedDataTableCell_main {\n  display: inline-block;\n  vertical-align: top;\n  white-space: normal;\n}\n\n.fixedDataTableCellGroupLayout_cellGroupWrapper {\n  position: absolute;\n  top: 0;\n}\n/**\n * Copyright (c) 2015, Facebook, Inc.\n * All rights reserved.\n *\n * This source code is licensed under the BSD-style license found in the\n * LICENSE file in the root directory of this source tree. An additional grant\n * of patent rights can be found in the PATENTS file in the same directory.\n *\n * @providesModule fixedDataTableCellLayout\n */\n\n.fixedDataTableCellLayout_main {\n  border-right-style: solid;\n  border-right-width: 1px;\n  border-width: 0 1px 0 0;\n  box-sizing: border-box;\n  display: block;\n  overflow: hidden;\n  position: absolute;\n  white-space: normal;\n}\n\n.fixedDataTableCellLayout_lastChild {\n  border-width: 0 1px 1px 0;\n}\n\n.fixedDataTableCellLayout_alignRight {\n  text-align: right;\n}\n\n.fixedDataTableCellLayout_alignCenter {\n  text-align: center;\n}\n\n.fixedDataTableCellLayout_wrap1 {\n  display: table;\n}\n\n.fixedDataTableCellLayout_wrap2 {\n  display: table-row;\n}\n\n.fixedDataTableCellLayout_wrap3 {\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.fixedDataTableCellLayout_columnResizerContainer {\n  position: absolute;\n  right: 0px;\n  width: 6px;\n  z-index: 1;\n}\n\n.fixedDataTableCellLayout_columnResizerContainer:hover {\n  cursor: ew-resize;\n}\n\n.fixedDataTableCellLayout_columnResizerContainer:hover .fixedDataTableCellLayout_columnResizerKnob {\n  visibility: visible;\n}\n\n.fixedDataTableCellLayout_columnResizerKnob {\n  position: absolute;\n  right: 0px;\n  visibility: hidden;\n  width: 4px;\n}\n/**\n * Copyright (c) 2015, Facebook, Inc.\n * All rights reserved.\n *\n * This source code is licensed under the BSD-style license found in the\n * LICENSE file in the root directory of this source tree. An additional grant\n * of patent rights can be found in the PATENTS file in the same directory.\n *\n * @providesModule fixedDataTableColumnResizerLineLayout\n */\n\n.fixedDataTableColumnResizerLineLayout_mouseArea {\n  cursor: ew-resize;\n  position: absolute;\n  right: -5px;\n  width: 12px;\n}\n\n.fixedDataTableColumnResizerLineLayout_main {\n  border-right-style: solid;\n  border-right-width: 1px;\n  box-sizing: border-box;\n  position: absolute;\n  z-index: 10;\n}\n\nbody[dir=\"rtl\"] .fixedDataTableColumnResizerLineLayout_main {\n  /* the resizer line is in the wrong position in RTL with no easy fix.\n   * Disabling is more useful than displaying it.\n   * #167 (github) should look into this and come up with a permanent fix.\n   */\n  display: none !important;\n}\n\n.fixedDataTableColumnResizerLineLayout_hiddenElem {\n  display: none !important;\n}\n/**\n * Copyright (c) 2015, Facebook, Inc.\n * All rights reserved.\n *\n * This source code is licensed under the BSD-style license found in the\n * LICENSE file in the root directory of this source tree. An additional grant\n * of patent rights can be found in the PATENTS file in the same directory.\n *\n * @providesModule fixedDataTableLayout\n */\n\n.fixedDataTableLayout_main {\n  border-style: solid;\n  border-width: 1px;\n  box-sizing: border-box;\n  overflow: hidden;\n  position: relative;\n}\n\n.fixedDataTableLayout_header,\n.fixedDataTableLayout_hasBottomBorder {\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n}\n\n.fixedDataTableLayout_footer .public_fixedDataTableCell_main {\n  border-top-style: solid;\n  border-top-width: 1px;\n}\n\n.fixedDataTableLayout_topShadow,\n.fixedDataTableLayout_bottomShadow {\n  height: 4px;\n  left: 0;\n  position: absolute;\n  right: 0;\n  z-index: 1;\n}\n\n.fixedDataTableLayout_bottomShadow {\n  margin-top: -4px;\n}\n\n.fixedDataTableLayout_rowsContainer {\n  overflow: hidden;\n  position: relative;\n}\n\n.fixedDataTableLayout_horizontalScrollbar {\n  bottom: 0;\n  position: absolute;\n}\n/**\n * Copyright (c) 2015, Facebook, Inc.\n * All rights reserved.\n *\n * This source code is licensed under the BSD-style license found in the\n * LICENSE file in the root directory of this source tree. An additional grant\n * of patent rights can be found in the PATENTS file in the same directory.\n *\n * @providesModule fixedDataTableRowLayout\n */\n\n.fixedDataTableRowLayout_main {\n  box-sizing: border-box;\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n}\n\n.fixedDataTableRowLayout_body {\n  left: 0;\n  position: absolute;\n  top: 0;\n}\n\n.fixedDataTableRowLayout_fixedColumnsDivider {\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  border-left-style: solid;\n  border-left-width: 1px;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 0;\n}\n\n.fixedDataTableRowLayout_columnsShadow {\n  width: 4px;\n}\n\n.fixedDataTableRowLayout_rowWrapper {\n  position: absolute;\n  top: 0;\n}\n/**\n * Copyright (c) 2015, Facebook, Inc.\n * All rights reserved.\n *\n * This source code is licensed under the BSD-style license found in the\n * LICENSE file in the root directory of this source tree. An additional grant\n * of patent rights can be found in the PATENTS file in the same directory.\n *\n * @providesModule ScrollbarLayout\n */\n\n.ScrollbarLayout_main {\n  box-sizing: border-box;\n  outline: none;\n  overflow: hidden;\n  position: absolute;\n  -webkit-transition-duration: 250ms;\n          transition-duration: 250ms;\n  -webkit-transition-timing-function: ease;\n          transition-timing-function: ease;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.ScrollbarLayout_mainVertical {\n  bottom: 0;\n  right: 0;\n  top: 0;\n  -webkit-transition-property: background-color width;\n          transition-property: background-color width;\n  width: 15px;\n}\n\n.ScrollbarLayout_mainVertical.public_Scrollbar_mainActive,\n.ScrollbarLayout_mainVertical:hover {\n  width: 17px;\n}\n\n.ScrollbarLayout_mainHorizontal {\n  bottom: 0;\n  height: 15px;\n  left: 0;\n  -webkit-transition-property: background-color height;\n          transition-property: background-color height;\n}\n\n/* Touching the scroll-track directly makes the scroll-track bolder */\n.ScrollbarLayout_mainHorizontal.public_Scrollbar_mainActive,\n.ScrollbarLayout_mainHorizontal:hover {\n  height: 17px;\n}\n\n.ScrollbarLayout_face {\n  left: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: 1;\n}\n\n/**\n * This selector renders the \"nub\" of the scrollface. The nub must\n * be rendered as pseudo-element so that it won't receive any UI events then\n * we can get the correct `event.offsetX` and `event.offsetY` from the\n * scrollface element while dragging it.\n */\n.ScrollbarLayout_face:after {\n  border-radius: 6px;\n  content: '';\n  display: block;\n  position: absolute;\n  -webkit-transition: background-color 250ms ease;\n          transition: background-color 250ms ease;\n}\n\n.ScrollbarLayout_faceHorizontal {\n  bottom: 0;\n  left: 0;\n  top: 0;\n}\n\n.ScrollbarLayout_faceHorizontal:after {\n  bottom: 4px;\n  left: 0;\n  top: 4px;\n  width: 100%;\n}\n\n.ScrollbarLayout_faceVertical {\n  left: 0;\n  right: 0;\n  top: 0;\n}\n\n.ScrollbarLayout_faceVertical:after {\n  height: 100%;\n  left: 4px;\n  right: 4px;\n  top: 0;\n}\n/**\n * Copyright (c) 2015, Facebook, Inc.\n * All rights reserved.\n *\n * This source code is licensed under the BSD-style license found in the\n * LICENSE file in the root directory of this source tree. An additional grant\n * of patent rights can be found in the PATENTS file in the same directory.\n *\n * @providesModule fixedDataTable\n *\n */\n\n/**\n * Table.\n */\n.public_fixedDataTable_main {\n  border-color: #d3d3d3;\n}\n\n.public_fixedDataTable_header,\n.public_fixedDataTable_hasBottomBorder {\n  border-color: #d3d3d3;\n}\n\n.public_fixedDataTable_header .public_fixedDataTableCell_main {\n  font-weight: bold;\n}\n\n.public_fixedDataTable_header,\n.public_fixedDataTable_header .public_fixedDataTableCell_main {\n  background-color: #f6f7f8;\n  background-image: -webkit-linear-gradient(#fff, #efefef);\n  background-image: linear-gradient(#fff, #efefef);\n}\n\n.public_fixedDataTable_footer .public_fixedDataTableCell_main {\n  background-color: #f6f7f8;\n  border-color: #d3d3d3;\n}\n\n.public_fixedDataTable_topShadow {\n  background: 0 0 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAECAYAAABP2FU6AAAAF0lEQVR4AWPUkNeSBhHCjJoK2twgFisAFagCCp3pJlAAAAAASUVORK5CYII=) repeat-x;\n}\n\n.public_fixedDataTable_bottomShadow {\n  background: 0 0 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAECAYAAABP2FU6AAAAHElEQVQI12MwNjZmZdAT1+Nm0JDWEGZQk1GTBgAWkwIeAEp52AAAAABJRU5ErkJggg==) repeat-x;\n}\n\n.public_fixedDataTable_horizontalScrollbar .public_Scrollbar_mainHorizontal {\n  background-color: #fff;\n}\n/**\n * Copyright (c) 2015, Facebook, Inc.\n * All rights reserved.\n *\n * This source code is licensed under the BSD-style license found in the\n * LICENSE file in the root directory of this source tree. An additional grant\n * of patent rights can be found in the PATENTS file in the same directory.\n *\n * @providesModule fixedDataTableCell\n */\n\n/**\n * Table cell.\n */\n.public_fixedDataTableCell_main {\n  background-color: #fff;\n  border-color: #d3d3d3;\n}\n\n.public_fixedDataTableCell_highlighted {\n  background-color: #f4f4f4;\n}\n\n.public_fixedDataTableCell_cellContent {\n  padding: 8px;\n}\n\n.public_fixedDataTableCell_columnResizerKnob {\n  background-color: #0284ff;\n}\n/**\n * Copyright (c) 2015, Facebook, Inc.\n * All rights reserved.\n *\n * This source code is licensed under the BSD-style license found in the\n * LICENSE file in the root directory of this source tree. An additional grant\n * of patent rights can be found in the PATENTS file in the same directory.\n *\n * @providesModule fixedDataTableColumnResizerLine\n *\n */\n\n/**\n * Column resizer line.\n */\n.public_fixedDataTableColumnResizerLine_main {\n  border-color: #0284ff;\n}\n/**\n * Copyright (c) 2015, Facebook, Inc.\n * All rights reserved.\n *\n * This source code is licensed under the BSD-style license found in the\n * LICENSE file in the root directory of this source tree. An additional grant\n * of patent rights can be found in the PATENTS file in the same directory.\n *\n * @providesModule fixedDataTableRow\n */\n\n/**\n * Table row.\n */\n.public_fixedDataTableRow_main {\n  background-color: #fff;\n}\n\n.public_fixedDataTableRow_highlighted,\n.public_fixedDataTableRow_highlighted .public_fixedDataTableCell_main {\n  background-color: #f6f7f8;\n}\n\n.public_fixedDataTableRow_fixedColumnsDivider {\n  border-color: #d3d3d3;\n}\n\n.public_fixedDataTableRow_columnsShadow {\n  background: 0 0 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQIHWPSkNeSBmJhTQVtbiDNCgASagIIuJX8OgAAAABJRU5ErkJggg==) repeat-y;\n}\n/**\n * Copyright (c) 2015, Facebook, Inc.\n * All rights reserved.\n *\n * This source code is licensed under the BSD-style license found in the\n * LICENSE file in the root directory of this source tree. An additional grant\n * of patent rights can be found in the PATENTS file in the same directory.\n *\n * @providesModule Scrollbar\n *\n */\n\n/**\n * Scrollbars.\n */\n\n/* Touching the scroll-track directly makes the scroll-track bolder */\n.public_Scrollbar_main.public_Scrollbar_mainActive,\n.public_Scrollbar_main:hover {\n  background-color: rgba(255, 255, 255, 0.8);\n}\n\n.public_Scrollbar_mainOpaque,\n.public_Scrollbar_mainOpaque.public_Scrollbar_mainActive,\n.public_Scrollbar_mainOpaque:hover {\n  background-color: #fff;\n}\n\n.public_Scrollbar_face:after {\n  background-color: #c2c2c2;\n}\n\n.public_Scrollbar_main:hover .public_Scrollbar_face:after,\n.public_Scrollbar_mainActive .public_Scrollbar_face:after,\n.public_Scrollbar_faceActive:after {\n  background-color: #7d7d7d;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 482:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx2 = __webpack_require__(1);
	
	var _jsx3 = _interopRequireDefault(_jsx2);
	
	var _getPrototypeOf = __webpack_require__(410);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(292);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(293);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(413);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(417);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(58);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _fixedDataTable = __webpack_require__(428);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var SortableHeader = function (_React$Component) {
	  (0, _inherits3.default)(SortableHeader, _React$Component);
	
	  function SortableHeader(props) {
	    (0, _classCallCheck3.default)(this, SortableHeader);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (SortableHeader.__proto__ || (0, _getPrototypeOf2.default)(SortableHeader)).call(this, props));
	
	    _this.onHeaderClick = _this.onHeaderClick.bind(_this);
	    return _this;
	  }
	
	  (0, _createClass3.default)(SortableHeader, [{
	    key: 'onHeaderClick',
	    value: function onHeaderClick(e) {
	      e.preventDefault();
	      this.props.onHeaderClick(this.props.column);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return (0, _jsx3.default)(_fixedDataTable.Cell, {}, void 0, (0, _jsx3.default)('a', {
	        onClick: this.onHeaderClick
	      }, void 0, this.props.column));
	    }
	  }]);
	  return SortableHeader;
	}(_react2.default.Component);
	
	exports.default = SortableHeader;

/***/ },

/***/ 485:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx2 = __webpack_require__(1);
	
	var _jsx3 = _interopRequireDefault(_jsx2);
	
	var _getPrototypeOf = __webpack_require__(410);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(292);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(293);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(413);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(417);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(58);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(240);
	
	var _options = __webpack_require__(486);
	
	var _common = __webpack_require__(484);
	
	var _SearchSiteDB = __webpack_require__(487);
	
	var _SearchSiteDB2 = _interopRequireDefault(_SearchSiteDB);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Filtering = function (_React$Component) {
	  (0, _inherits3.default)(Filtering, _React$Component);
	
	  function Filtering(props) {
	    (0, _classCallCheck3.default)(this, Filtering);
	    return (0, _possibleConstructorReturn3.default)(this, (Filtering.__proto__ || (0, _getPrototypeOf2.default)(Filtering)).call(this, props));
	  }
	
	  (0, _createClass3.default)(Filtering, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      (0, _common.fetchSites)();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return (0, _jsx3.default)('div', {
	        className: 'col-md-10 panel panel-default'
	      }, void 0, (0, _jsx3.default)('div', {
	        className: 'panel-heading'
	      }, void 0, 'Lookup Record'), (0, _jsx3.default)('div', {
	        className: 'panel-body'
	      }, void 0, 'SearchBox goes HERE'), (0, _jsx3.default)(_SearchSiteDB2.default, {
	        openModal: _options.openModal,
	        sites: this.props.sites || []
	      }));
	    }
	  }]);
	  return Filtering;
	}(_react2.default.Component);
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    sites: state.sites,
	    message: state.message
	  };
	}, function (dispatch) {
	  return {
	    fetchSites: function fetchSites() {
	      return dispatch((0, _common.fetchSites)());
	    },
	    editRecord: function editRecord(record) {
	      return dispatch((0, _options.editRecord)(record));
	    },
	    openModal: function openModal(modalID) {
	      return dispatch((0, _options.openModal)(modalID));
	    }
	  };
	})(Filtering);

/***/ },

/***/ 486:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.editRecord = editRecord;
	exports.openModal = openModal;
	function editRecord(record) {
	  return {
	    type: 'EDIT_RECORD',
	    record: record
	  };
	}
	function openModal(modalId) {
	  return {
	    type: 'OPEN_MODAL',
	    modalId: modalId
	  };
	}

/***/ },

/***/ 487:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(488);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _jsx2 = __webpack_require__(1);
	
	var _jsx3 = _interopRequireDefault(_jsx2);
	
	var _getPrototypeOf = __webpack_require__(410);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(292);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(293);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(413);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(417);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(58);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _SiteDBRow = __webpack_require__(493);
	
	var _SiteDBRow2 = _interopRequireDefault(_SiteDBRow);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var SearchSiteDB = function (_React$Component) {
	  (0, _inherits3.default)(SearchSiteDB, _React$Component);
	
	  function SearchSiteDB(props) {
	    (0, _classCallCheck3.default)(this, SearchSiteDB);
	
	    // Default to Descending Order on timeSpent
	    var _this = (0, _possibleConstructorReturn3.default)(this, (SearchSiteDB.__proto__ || (0, _getPrototypeOf2.default)(SearchSiteDB)).call(this, props));
	
	    console.log(props);
	    _this.onHeaderClick = _this.onHeaderClick.bind(_this);
	    _this.state = {
	      sortBy: 'timeSpent'
	    };
	    return _this;
	  }
	
	  (0, _createClass3.default)(SearchSiteDB, [{
	    key: 'onHeaderClick',
	    value: function onHeaderClick(header) {
	      return function (e) {
	        console.log(header);
	        console.log(e);
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      return (0, _jsx3.default)('table', {
	        className: 'table'
	      }, void 0, (0, _jsx3.default)('thead', {}, void 0, (0, _jsx3.default)('tr', {}, void 0, (0, _jsx3.default)('th', {}, void 0, '#'), (0, _jsx3.default)('th', {}, void 0, 'Site'), (0, _jsx3.default)('th', {}, void 0, 'Visits'), (0, _jsx3.default)('th', {}, void 0, 'TimeSpent'), (0, _jsx3.default)('th', {}, void 0, 'Filter'), (0, _jsx3.default)('th', {}, void 0, 'AdvFilter'))), this.props.sites.map(function (record, index, array) {
	        return _react2.default.createElement(_SiteDBRow2.default, (0, _extends3.default)({ id: index, openModal: _this2.props.openModal }, record));
	      }));
	    }
	  }]);
	  return SearchSiteDB;
	}(_react2.default.Component);
	
	exports.default = SearchSiteDB;

/***/ },

/***/ 488:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _assign = __webpack_require__(489);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];
	
	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }
	
	  return target;
	};

/***/ },

/***/ 489:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(490), __esModule: true };

/***/ },

/***/ 490:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(491);
	module.exports = __webpack_require__(10).Object.assign;

/***/ },

/***/ 491:
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(9);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(492)});

/***/ },

/***/ 492:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(31)
	  , gOPS     = __webpack_require__(44)
	  , pIE      = __webpack_require__(45)
	  , toObject = __webpack_require__(272)
	  , IObject  = __webpack_require__(34)
	  , $assign  = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(8)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },

/***/ 493:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _stringify = __webpack_require__(494);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _jsx2 = __webpack_require__(1);
	
	var _jsx3 = _interopRequireDefault(_jsx2);
	
	exports.default = SiteDBRow;
	
	var _react = __webpack_require__(58);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _moment = __webpack_require__(298);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function SiteDBRow(props) {
	  // utilize id that corresponds to index of element in state
	  var id = props.id;
	  var site = props.site;
	  var timeSpent = props.timeSpent;
	  var block = props.block;
	  var advBlock = props.advBlock;
	  var visits = props.visits;
	  var openModal = props.openModal;
	
	  var onClickEdit = function onClickEdit(rowId) {
	    return function (e) {
	      return openModal(rowId);
	    };
	  };
	  return (0, _jsx3.default)('tr', {
	    id: 'datarow-' + id
	  }, id, (0, _jsx3.default)('th', {
	    scope: 'row'
	  }, void 0, id), (0, _jsx3.default)('td', {}, void 0, site), (0, _jsx3.default)('td', {}, void 0, visits), (0, _jsx3.default)('td', {}, void 0, timeSpent), (0, _jsx3.default)('td', {}, void 0, block), (0, _jsx3.default)('td', {}, void 0, (0, _stringify2.default)(advBlock)));
	}

/***/ },

/***/ 494:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(495), __esModule: true };

/***/ },

/***/ 495:
/***/ function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(10)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ },

/***/ 496:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx2 = __webpack_require__(1);
	
	var _jsx3 = _interopRequireDefault(_jsx2);
	
	var _getPrototypeOf = __webpack_require__(410);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(292);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(293);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(413);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(417);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(58);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(240);
	
	var _SiteTable = __webpack_require__(427);
	
	var _SiteTable2 = _interopRequireDefault(_SiteTable);
	
	var _InputBar = __webpack_require__(483);
	
	var _InputBar2 = _interopRequireDefault(_InputBar);
	
	var _common = __webpack_require__(484);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Settings = function (_React$Component) {
	  (0, _inherits3.default)(Settings, _React$Component);
	
	  function Settings(props) {
	    (0, _classCallCheck3.default)(this, Settings);
	    return (0, _possibleConstructorReturn3.default)(this, (Settings.__proto__ || (0, _getPrototypeOf2.default)(Settings)).call(this, props));
	  }
	
	  (0, _createClass3.default)(Settings, [{
	    key: 'render',
	    value: function render() {
	      return (0, _jsx3.default)('div', {
	        className: 'row'
	      }, void 0, (0, _jsx3.default)('div', {
	        className: 'col-md-4 panel panel-default'
	      }, void 0, (0, _jsx3.default)('div', {
	        className: 'panel-heading'
	      }, void 0, (0, _jsx3.default)('h3', {
	        className: 'panel-title'
	      }, void 0, 'Add Pattern')), (0, _jsx3.default)('div', {
	        className: 'panel-body'
	      }, void 0, (0, _jsx3.default)(_InputBar2.default, {
	        addSite: this.props.addSite
	      }))), (0, _jsx3.default)('div', {
	        className: 'col-md-7 panel panel-default'
	      }, void 0, (0, _jsx3.default)('div', {
	        className: 'panel-heading'
	      }, void 0, (0, _jsx3.default)('h3', {
	        className: 'panel-title'
	      }, void 0, 'Add Pattern')), (0, _jsx3.default)('div', {
	        className: 'panel-body'
	      }, void 0, (0, _jsx3.default)(_SiteTable2.default, {
	        sites: this.props.sites,
	        maxEntry: 10
	      }))));
	    }
	  }]);
	  return Settings;
	}(_react2.default.Component);
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    sites: state.sites,
	    message: state.message
	  };
	}, function (dispatch) {
	  return {
	    addSite: function addSite(site) {
	      return dispatch((0, _common.addSite)(site));
	    },
	    fetchSites: function fetchSites() {
	      return dispatch((0, _common.fetchSites)());
	    }
	  };
	})(Settings);

/***/ },

/***/ 497:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx2 = __webpack_require__(1);
	
	var _jsx3 = _interopRequireDefault(_jsx2);
	
	var _getPrototypeOf = __webpack_require__(410);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(292);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(293);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(413);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(417);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(58);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(240);
	
	var _SiteTable = __webpack_require__(427);
	
	var _SiteTable2 = _interopRequireDefault(_SiteTable);
	
	var _InputBar = __webpack_require__(483);
	
	var _InputBar2 = _interopRequireDefault(_InputBar);
	
	var _common = __webpack_require__(484);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Statistics = function (_React$Component) {
	  (0, _inherits3.default)(Statistics, _React$Component);
	
	  function Statistics(props) {
	    (0, _classCallCheck3.default)(this, Statistics);
	    return (0, _possibleConstructorReturn3.default)(this, (Statistics.__proto__ || (0, _getPrototypeOf2.default)(Statistics)).call(this, props));
	  }
	
	  (0, _createClass3.default)(Statistics, [{
	    key: 'render',
	    value: function render() {
	      return (0, _jsx3.default)('div', {
	        className: 'row'
	      }, void 0, (0, _jsx3.default)('div', {
	        className: 'col-md-4 panel panel-default'
	      }, void 0, (0, _jsx3.default)('div', {
	        className: 'panel-heading'
	      }, void 0, (0, _jsx3.default)('h3', {
	        className: 'panel-title'
	      }, void 0, 'Add Pattern')), (0, _jsx3.default)('div', {
	        className: 'panel-body'
	      }, void 0, (0, _jsx3.default)(_InputBar2.default, {
	        addSite: this.props.addSite
	      }))), (0, _jsx3.default)('div', {
	        className: 'col-md-7 panel panel-default'
	      }, void 0, (0, _jsx3.default)('div', {
	        className: 'panel-heading'
	      }, void 0, (0, _jsx3.default)('h3', {
	        className: 'panel-title'
	      }, void 0, 'Add Pattern')), (0, _jsx3.default)('div', {
	        className: 'panel-body'
	      }, void 0, (0, _jsx3.default)(_SiteTable2.default, {
	        sites: this.props.sites,
	        maxEntry: 10
	      }))));
	    }
	  }]);
	  return Statistics;
	}(_react2.default.Component);
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    sites: state.sites,
	    message: state.message
	  };
	}, function (dispatch) {
	  return {
	    addSite: function addSite(site) {
	      return dispatch((0, _common.addSite)(site));
	    },
	    fetchSites: function fetchSites() {
	      return dispatch((0, _common.fetchSites)());
	    }
	  };
	})(Statistics);

/***/ },

/***/ 498:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _regenerator = __webpack_require__(499);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	exports.default = optionsSaga;
	
	var _effects = __webpack_require__(502);
	
	var _sagasDB = __webpack_require__(503);
	
	var sagas = _interopRequireWildcard(_sagasDB);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _marked = [optionsSaga].map(_regenerator2.default.mark);
	
	function optionsSaga() {
	  return _regenerator2.default.wrap(function optionsSaga$(_context) {
	    while (1) {
	      switch (_context.prev = _context.next) {
	        case 0:
	          _context.next = 2;
	          return (0, _effects.fork)(sagas.fetchSitesSaga);
	
	        case 2:
	          console.log('hi');
	          _context.next = 5;
	          return (0, _effects.fork)(sagas.addSiteSaga);
	
	        case 5:
	          console.log('hi again');
	
	        case 6:
	        case 'end':
	          return _context.stop();
	      }
	    }
	  }, _marked[0], this);
	}

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvT3B0aW9uc0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvT3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9PcHRpb25zLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWcvdGhvdWdodGNyaW1lLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9vcHRpb25zL0FsbE9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvb3B0aW9ucy9EYXNoLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NpdGVUYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2ZpeGVkLWRhdGEtdGFibGUvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvRml4ZWREYXRhVGFibGVSb290LmpzIiwid2VicGFjazovLy8uL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9GaXhlZERhdGFUYWJsZS5yZWFjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvUmVhY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL0ZpeGVkRGF0YVRhYmxlTmV3LnJlYWN0LmpzIiwid2VicGFjazovLy8uL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9SZWFjdENvbXBvbmVudFdpdGhQdXJlUmVuZGVyTWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL1JlYWN0V2hlZWxIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9lbXB0eUZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9ub3JtYWxpemVXaGVlbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvVXNlckFnZW50X0RFUFJFQ0FURUQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL2lzRXZlbnRTdXBwb3J0ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL0V4ZWN1dGlvbkVudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9yZXF1ZXN0QW5pbWF0aW9uRnJhbWVQb2x5ZmlsbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvbmF0aXZlUmVxdWVzdEFuaW1hdGlvbkZyYW1lLmpzIiwid2VicGFjazovLy8uL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9TY3JvbGxiYXIucmVhY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL0RPTU1vdXNlTW92ZVRyYWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL0V2ZW50TGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL2NhbmNlbEFuaW1hdGlvbkZyYW1lUG9seWZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL0tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL1JlYWN0RE9NLmpzIiwid2VicGFjazovLy8uL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9jc3NWYXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL2N4LmpzIiwid2VicGFjazovLy8uL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC90cmFuc2xhdGVET01Qb3NpdGlvblhZLmpzIiwid2VicGFjazovLy8uL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9Ccm93c2VyU3VwcG9ydENvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL2dldFZlbmRvclByZWZpeGVkTmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvY2FtZWxpemUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL2ludmFyaWFudC5qcyIsIndlYnBhY2s6Ly8vLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvRml4ZWREYXRhVGFibGVCdWZmZXJlZFJvd3MucmVhY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL0ZpeGVkRGF0YVRhYmxlUm93QnVmZmVyLmpzIiwid2VicGFjazovLy8uL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9JbnRlZ2VyQnVmZmVyU2V0LmpzIiwid2VicGFjazovLy8uL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9IZWFwLmpzIiwid2VicGFjazovLy8uL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9jbGFtcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvRml4ZWREYXRhVGFibGVSb3cucmVhY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL0ZpeGVkRGF0YVRhYmxlQ2VsbEdyb3VwLnJlYWN0LmpzIiwid2VicGFjazovLy8uL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9GaXhlZERhdGFUYWJsZUhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvTG9jYWxlLmpzIiwid2VicGFjazovLy8uL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9GaXhlZERhdGFUYWJsZUNvbHVtbkdyb3VwLnJlYWN0LmpzIiwid2VicGFjazovLy8uL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9GaXhlZERhdGFUYWJsZUNvbHVtbi5yZWFjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvRml4ZWREYXRhVGFibGVDZWxsLnJlYWN0LmpzIiwid2VicGFjazovLy8uL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9GaXhlZERhdGFUYWJsZUNlbGxEZWZhdWx0LnJlYWN0LmpzIiwid2VicGFjazovLy8uL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9qb2luQ2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvRml4ZWREYXRhVGFibGVDb2x1bW5SZXNpemVIYW5kbGUucmVhY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL0ZpeGVkRGF0YVRhYmxlU2Nyb2xsSGVscGVyLmpzIiwid2VicGFjazovLy8uL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9QcmVmaXhJbnRlcnZhbFRyZWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL0ZpeGVkRGF0YVRhYmxlV2lkdGhIZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL2RlYm91bmNlQ29yZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvc2hhbGxvd0VxdWFsLmpzIiwid2VicGFjazovLy8uL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9GaXhlZERhdGFUYWJsZUNvbHVtbk5ldy5yZWFjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvRml4ZWREYXRhVGFibGVDb2x1bW5Hcm91cE5ldy5yZWFjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvRml4ZWREYXRhVGFibGVDZWxsVHJhbnNpdGlvbi5yZWFjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2ZpeGVkLWRhdGEtdGFibGUvZGlzdC9maXhlZC1kYXRhLXRhYmxlLmNzcz8wMWY3Iiwid2VicGFjazovLy8uL34vZml4ZWQtZGF0YS10YWJsZS9kaXN0L2ZpeGVkLWRhdGEtdGFibGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NvcnRhYmxlSGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL29wdGlvbnMvRmlsdGVyaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL29wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2VhcmNoU2l0ZURCLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TaXRlREJSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vanNvbi9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvb3B0aW9ucy9TZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9vcHRpb25zL1N0YXRpc3RpY3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhZ2FzL29wdGlvbnNTYWdhcy5qcyJdLCJuYW1lcyI6WyJpbml0IiwidGhlbiIsInNhZ2FNaWRkbGV3YXJlIiwic3RvcmUiLCJydW4iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVkdWNlciIsInN0YXRlIiwiZGFpbHlTaXRlcyIsImZldGNoVG9kYXlTdGF0cyIsInNpdGVzIiwibWVzc2FnZSIsIm1vZGFsSUQiLCJhY3Rpb24iLCJ0eXBlIiwiJHNldCIsImUiLCJPcHRpb25zQXBwIiwicHJvcHMiLCJzZWxlY3RlZFBhZ2UiLCJvbk1lbnVDbGljayIsImJpbmQiLCJpZCIsInNldFN0YXRlIiwiQ29udGVudCIsIm1hcCIsImFjdGl2ZSIsIml0ZW0iLCJDb21wb25lbnQiLCJhZGRTaXRlIiwiZGlzcGF0Y2giLCJzaXRlIiwiZmV0Y2hTaXRlcyIsIkRhc2giLCJGaWx0ZXJpbmciLCJTZXR0aW5ncyIsIlN0YXRpc3RpY3MiLCJTaXRlVGFibGUiLCJjb25zb2xlIiwibG9nIiwib25IZWFkZXJDbGljayIsInNvcnRCeSIsIm9yZGVyIiwic29ydFByb3BzIiwiY29sdW1uIiwic29ydCIsImEiLCJiIiwibWF4RW50cnkiLCJpdGVtQ291bnQiLCJsZW5ndGgiLCJjb2x1bW5Db3VudCIsImZpbmlzaGVkQ29sdW1ucyIsImZpbmlzaGVkVGFibGUiLCJ0b3BUZW4iLCJzbGljZSIsImhhc093blByb3BlcnR5IiwicHVzaCIsImMiLCJyb3dJbmRleCIsIlNvcnRhYmxlSGVhZGVyIiwicHJldmVudERlZmF1bHQiLCJlZGl0UmVjb3JkIiwicmVjb3JkIiwib3Blbk1vZGFsIiwibW9kYWxJZCIsIlNlYXJjaFNpdGVEQiIsImhlYWRlciIsImluZGV4IiwiYXJyYXkiLCJTaXRlREJSb3ciLCJ0aW1lU3BlbnQiLCJibG9jayIsImFkdkJsb2NrIiwidmlzaXRzIiwib25DbGlja0VkaXQiLCJyb3dJZCIsIm9wdGlvbnNTYWdhIiwic2FnYXMiLCJmZXRjaFNpdGVzU2FnYSIsImFkZFNpdGVTYWdhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0FBR0EscUJBQUdBLElBQUgsR0FBVUMsSUFBVixDQUFlLFlBQU07QUFDbkIsT0FBTUMsaUJBQWlCLDBCQUF2QjtBQUNBLE9BQU1DLFFBQVEsMkNBQXFCLDRCQUFnQkQsY0FBaEIsQ0FBckIsQ0FBZDtBQUNBQSxrQkFBZUUsR0FBZjtBQUNBO0FBQUEsWUFDbUJEO0FBRG5CLDBEQUlFRSxTQUFTQyxjQUFULENBQXdCLFlBQXhCLENBSkY7QUFNRCxFQVZELEU7Ozs7Ozs7Ozs7Ozs7QUNkQTs7OztBQUNBOzs7Ozs7QUFFQSxVQUFTQyxPQUFULEdBS1c7QUFBQSxPQUxNQyxLQUtOLHlEQUxjO0FBQ3ZCQyxpQkFBWSxvQkFBR0MsZUFBSCxFQURXO0FBRXZCQyxZQUFPLEVBRmdCO0FBR3ZCQyxjQUFTLEVBSGM7QUFJdkJDLGNBQVM7QUFKYyxJQUtkO0FBQUEsT0FBUkMsTUFBUTs7QUFDVCxXQUFRQSxPQUFPQyxJQUFmO0FBQ0UsVUFBSyxvQkFBTDtBQUNFLGNBQU8sc0JBQU9QLEtBQVAsRUFBYztBQUNuQkksa0JBQVMsRUFBRUksTUFBTUYsT0FBT0YsT0FBZjtBQURVLFFBQWQsQ0FBUDtBQUdGLFVBQUssaUJBQUw7QUFDRSxjQUFPLHNCQUFPSixLQUFQLEVBQWM7QUFDbkJJLGtCQUFTLEVBQUVJLE1BQU1GLE9BQU9HLENBQWY7QUFEVSxRQUFkLENBQVA7QUFHRixVQUFLLHlCQUFMO0FBQ0UsY0FBTyxzQkFBT1QsS0FBUCxFQUFjO0FBQ25CSSxrQkFBUyxFQUFFSSxNQUFNRixPQUFPRyxDQUFmO0FBRFUsUUFB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ZUFBZTs7QUFFOVA7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNULFFBQU87QUFDUDtBQUNBLElBQUc7O0FBRUg7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUyxHQUFHO0FBQ1o7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQsa0M7Ozs7Ozs7O0FDdGdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSwwQzs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxvREFBbUQsZ0JBQWdCLHNCQUFzQixPQUFPLDJCQUEyQiwwQkFBMEIseURBQXlELDJCQUEyQixFQUFFLEVBQUUsRUFBRSxlQUFlOztBQUU5UDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0I7QUFDaEIsUUFBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQjtBQUNoQixRQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQiwyQ0FBMkMsRUFBRTtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFrQixrREFBa0QsRUFBRTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF1QiwyQkFBMkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBbUIsd0NBQXdDO0FBQzNEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLG9CQUFtQiwyQkFBMkI7QUFDOUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQSxvQkFBbUIsb0JBQW9CO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxvQkFBbUIsb0JBQW9CO0FBQ3ZDO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVCxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxzQkFBcUIsZUFBZTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBb0M7QUFDcEM7QUFDQTtBQUNBLFVBQVMsNkJBQTZCO0FBQ3RDLG1EQUFrRDtBQUNsRDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0EsYTs7Ozs7OztBQ3Y4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFnQyxxQkFBcUI7QUFDckQ7QUFDQSxPQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvRDs7Ozs7OztBQ3RFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGtDQUFpQywyQ0FBMkMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwyREFBMkQsRUFBRSxFQUFFLHlEQUF5RCxxRUFBcUUsNkRBQTZELG9CQUFvQixHQUFHLEVBQUU7O0FBRWxqQixrREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBLEVBQUM7O0FBRUQsb0M7Ozs7Ozs7QUN4R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQzs7Ozs7OztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUM7Ozs7Ozs7QUNuTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXVCO0FBQ3ZCOztBQUVBO0FBQ0EsaUJBQWdCO0FBQ2hCLDhCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQSw0RUFBMkU7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUM7Ozs7Ozs7QUNyUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQixZQUFXLFNBQVM7QUFDcEIsYUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZDQUE0QztBQUM1QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbUM7Ozs7Ozs7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUM7Ozs7Ozs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBLHdDOzs7Ozs7OztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSw4Qzs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CLG9CQUFvQjtBQUN2QyxJQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7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QTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLDBDOzs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSx5Qjs7Ozs7OztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLElBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEscUI7Ozs7Ozs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVELHlDOzs7Ozs7OztBQy9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsZUFBYyxLQUFLO0FBQ25CO0FBQ0E7QUFD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O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBLEVBQUM7O0FBRUQsNkM7Ozs7Ozs7QUMzU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLCtCOzs7Ozs7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRCx1Qzs7Ozs7Ozs7QUNsTEE7QUFDQTtB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QUEsb0JBSXNCO0FBSnRCO0FBQUEsb0JBTXFCO0FBTnJCO0FBQUEsa0JBTzJCLEtBQUtBLEtBQUwsQ0FBV1c7QUFQdEM7QUFBQSxvQkFVbUI7QUFWbkI7QUFBQSxvQkFXcUI7QUFYckI7QUFBQSxvQkFZc0I7QUFadEI7QUFBQSxvQkFjcUI7QUFkckI7QUFBQSxnQkFlMEIsS0FBS1gsS0FBTCxDQUFXUixLQWZyQztBQUFBLG1CQWVzRDtBQWZ0RDtBQW9CRDs7O0dBMUJzQixnQkFBTWtCLFM7O21CQTZCaEIseUJBQ2I7QUFBQSxVQUNFO0FBQ0VsQixZQUFPSCxNQUFNRyxLQURmO0FBRUVDLGNBQVNKLE1BQU1JO0FBRmpCLElBREY7QUFBQSxFQURhLEVBT2I7QUFBQSxVQUNFO0FBQ0VrQixjQUFTO0FBQUEsY0FBUUMsU0FBUyxxQkFBUUMsSUFBUixDQUFULENBQVI7QUFBQSxNQURYO0FBRUVDLGlCQUFZO0FBQUEsY0FBTUYsU0FBUyx5QkFBVCxDQUFOO0FBQUE7QUFGZCxJQURGO0FBQUEsRUFQYSxFQWFiTSxVQWJhLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O21CQ2pDVXlDLFc7O0FBSHpCOztBQUNBOztLQUFZQyxLOzs7Ozs7Z0JBRWFELFc7O0FBQVYsVUFBVUEsV0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFDUCxtQkFBS0MsTUFBTUMsY0FBWCxDQURPOztBQUFBO0FBRWJ6QyxtQkFBUUMsR0FBUixDQUFZLElBQVo7QUFGYTtBQUFBLGtCQUdQLG1CQUFLdUMsTUFBTUUsV0FBWCxDQUhPOztBQUFBO0FBSWIxQyxtQkFBUUMsR0FBUixDQUFZLFVBQVo7O0FBSmE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRSIsImZpbGUiOiJPcHRpb25zQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSAncmVkdXgtc2FnYSc7XG5pbXBvcnQgcmVkdWNlciBmcm9tICcuL3JlZHVjZXJzL09wdGlvbnMuanMnO1xuaW1wb3J0IE9wdGlvbnNBcHAgZnJvbSAnLi9jb250YWluZXJzL09wdGlvbnMuanMnO1xuaW1wb3J0IG9wdGlvbnNTYWdhcyBmcm9tICcuL3NhZ2FzL29wdGlvbnNTYWdhcy5qcyc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XG5pbXBvcnQgJ2pxdWVyeS9qcXVlcnkubWluLmpzJztcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvanMvYm9vdHN0cmFwLm1pbi5qcyc7XG5pbXBvcnQgQkwgZnJvbSAnLi9ibG9ja0xpc3QuanMnO1xuXG5cbkJMLmluaXQoKS50aGVuKCgpID0+IHtcbiAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGFwcGx5TWlkZGxld2FyZShzYWdhTWlkZGxld2FyZSkpO1xuICBzYWdhTWlkZGxld2FyZS5ydW4ob3B0aW9uc1NhZ2FzKTtcbiAgcmVuZGVyKFxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgPE9wdGlvbnNBcHAgLz5cbiAgICA8L1Byb3ZpZGVyPixcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnT3B0aW9uc0FwcCcpXG4gICk7XG59KTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL09wdGlvbnNBcHAuanNcbiAqKi8iLCJpbXBvcnQgdXBkYXRlIGZyb20gJ3JlYWN0L2xpYi91cGRhdGUnO1xuaW1wb3J0IEJMIGZyb20gJy4uL2Jsb2NrTGlzdC5qcyc7XG5cbmZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSB7XG4gIGRhaWx5U2l0ZXM6IEJMLmZldGNoVG9kYXlTdGF0cygpLFxuICBzaXRlczogW10sXG4gIG1lc3NhZ2U6ICcnLFxuICBtb2RhbElEOiBudWxsXG59LCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ0FERF9TSVRFX1NVQ0NFRURFRCc6XG4gICAgICByZXR1cm4gdXBkYXRlKHN0YXRlLCB7XG4gICAgICAgIG1lc3NhZ2U6IHsgJHNldDogYWN0aW9uLm1lc3NhZ2UgfVxuICAgICAgfSk7XG4gICAgY2FzZSAnQUREX1NJVEVfRkFJTEVEJzpcbiAgICAgIHJldHVybiB1cGRhdGUoc3RhdGUsIHtcbiAgICAgICAgbWVzc2FnZTogeyAkc2V0OiBhY3Rpb24uZSB9XG4gICAgICB9KTtcbiAgICBjYXNlICdTSVRFX0ZFVENIX1VOU1VDQ0VTU0ZVTCc6XG4gICAgICByZXR1cm4gdXBkYXRlKHN0YXRlLCB7XG4gICAgICAgIG1lc3NhZ2U6IHsgJHNldDogYWN0aW9uLmUgfVxuICAgICAgfSk7XG4gICAgY2FzZSAnU0lURV9GRVRDSF9TVUNDRVNTRlVMJzpcbiAgICAgIHJldHVybiB1cGRhdGUoc3RhdGUsIHtcbiAgICAgICAgc2l0ZXM6IHsgJHNldDogYWN0aW9uLnNpdGVzIH1cbiAgICAgIH0pO1xuICAgIGNhc2UgJ09QRU5fTU9EQUwnOlxuICAgICAgcmV0dXJuIHVwZGF0ZShzdGF0ZSwge1xuICAgICAgICBtb2RhbElEOiB7ICRzZXQ6IGFjdGlvbi5tb2RhbElEIH1cbiAgICAgIH0pO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JlZHVjZXJzL09wdGlvbnMuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBsb2dvIGZyb20gJy4uL2ltZy90aG91Z2h0Y3JpbWUuc3ZnJztcbmltcG9ydCBtZW51T3B0aW9ucyBmcm9tICcuL29wdGlvbnMvQWxsT3B0aW9ucy5qcyc7XG5cbmltcG9ydCB7IGFkZFNpdGUsIGZldGNoU2l0ZXMgfSBmcm9tICcuLi9hY3Rpb25zL2NvbW1vbi5qcyc7XG5cbmNsYXNzIE9wdGlvbnNBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2VsZWN0ZWRQYWdlOiAnRGFzaCdcbiAgICB9O1xuICAgIHRoaXMub25NZW51Q2xpY2sgPSB0aGlzLm9uTWVudUNsaWNrLmJpbmQodGhpcyk7XG4gIH1cbiAgb25NZW51Q2xpY2soaWQpIHtcbiAgICByZXR1cm4gZSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRQYWdlOiBpZCB9KTtcbiAgICB9O1xuICB9XG5cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgQ29udGVudCA9IG1lbnVPcHRpb25zW3RoaXMuc3RhdGUuc2VsZWN0ZWRQYWdlXTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBpZD1cIk9wdGlvbnNBcHBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMlwiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz17bG9nb30gYWx0PVwiXCIgY2xhc3NOYW1lPVwiaW1nLXJlc3BvbnNpdmUgY2VudGVyLWJsb2NrXCIgaGVpZ2h0PVwiMTI4XCIgd2lkdGg9XCIxMjhcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMCBvZmZzZXQtbWQtMlwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtaGVhZGVyIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGgxPlRob3VnaHRDcmltZSAtIDxzbWFsbD57dGhpcy5zdGF0ZS5zZWxlY3RlZFBhZ2V9PC9zbWFsbD48L2gxPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0yIHNpZGViYXJcIj5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBuYXYtc2lkZWJhciBuYXYtcGlsbHMgbmF2LXN0YWNrZWRcIj5cbiAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXMobWVudU9wdGlvbnMpLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGFjdGl2ZSA9ICh0aGlzLnN0YXRlLnNlbGVjdGVkUGFnZSA9PT0gaXRlbSkgPyAnYWN0aXZlJyA6ICcnO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9e2l0ZW19XG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtfVxuICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIiBjbGFzc05hbWU9e2FjdGl2ZX0gb25DbGljaz17dGhpcy5vbk1lbnVDbGljayhpdGVtKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+e2l0ZW19PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTAgbWFpblwiPlxuICAgICAgICAgICAgICA8Q29udGVudCAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBzdGF0ZSA9PiAoXG4gICAge1xuICAgICAgc2l0ZXM6IHN0YXRlLnNpdGVzLFxuICAgICAgbWVzc2FnZTogc3RhdGUubWVzc2FnZVxuICAgIH1cbiAgKSxcbiAgZGlzcGF0Y2ggPT4gKFxuICAgIHtcbiAgICAgIGFkZFNpdGU6IHNpdGUgPT4gZGlzcGF0Y2goYWRkU2l0ZShzaXRlKSksXG4gICAgICBmZXRjaFNpdGVzOiAoKSA9PiBkaXNwYXRjaChmZXRjaFNpdGVzKCkpXG4gICAgfVxuICApXG4pKE9wdGlvbnNBcHApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29udGFpbmVycy9PcHRpb25zLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzLmpzXG4gKiogbW9kdWxlIGlkID0gNDA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmtleXM7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzLmpzXG4gKiogbW9kdWxlIGlkID0gNDA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAxOS4xLjIuMTQgT2JqZWN0LmtleXMoTylcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgJGtleXMgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2tleXMnLCBmdW5jdGlvbigpe1xuICByZXR1cm4gZnVuY3Rpb24ga2V5cyhpdCl7XG4gICAgcmV0dXJuICRrZXlzKHRvT2JqZWN0KGl0KSk7XG4gIH07XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanNcbiAqKiBtb2R1bGUgaWQgPSA0MDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlNVGM1TWlJZ2FHVnBaMmgwUFNJeE56a3lJaUIyYVdWM1FtOTRQU0l3SURBZ01UYzVNaUF4TnpreUlpQjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaVBqeHdZWFJvSUdROUlrMDNNRFFnTVRVek5tdzVOaTAwTkRndE9UWXRNVEk0TFRFeU9DMDJOSHB0TWpVMklEQnNNVEk0TFRZME1DMHhNamdnTmpRdE9UWWdNVEk0ZW0weE5qQXRNVEF4TUhFdE1pMDBMVFF0TmkweE1DMDRMVGsyTFRndE56QWdNQzB4TmpjZ01Ua3ROeUF5TFRJeElESjBMVEl4TFRKeExUazNMVEU1TFRFMk55MHhPUzA0TmlBd0xUazJJRGd0TWlBeUxUUWdOaUF5SURFNElEUWdNamNnTWlBeklEY3VOU0EyTGpWME55NDFJREV3TGpWeE1pQTBJRGN1TlNBeU1DNDFkRGNnTWpBdU5TQTNMalVnTVRjZ09DNDFJREUzSURrZ01UUWdNVElnTVRNdU5TQXhOQ0E1TGpVZ01UY3VOU0E0SURJd0xqVWdOQ0F5TkM0MUlESnhNellnTUNBMU9TMHhNaTQxZERNeUxqVXRNekFnTVRRdU5TMHpOQzQxSURFeExqVXRNamt1TlNBeE55NDFMVEV5TGpWb01USnhNVEVnTUNBeE55NDFJREV5TGpWME1URXVOU0F5T1M0MUlERTBMalVnTXpRdU5TQXpNaTQxSURNd0lEVTVJREV5TGpWeE1UTWdNQ0F5TkM0MUxUSjBNakF1TlMwMElERTNMalV0T0NBeE5DMDVMalVnTVRJdE1UTXVOU0E1TFRFMElEZ3VOUzB4TnlBM0xqVXRNVGNnTnkweU1DNDFJRGN1TlMweU1DNDFjVEl0TnlBM0xqVXRNVEF1TlhRM0xqVXROaTQxY1RJdE9TQTBMVEkzZW0wME1UWWdPRGM1Y1RBZ01USXhMVGN6SURFNU1IUXRNVGswSURZNWFDMDROelJ4TFRFeU1TQXdMVEU1TkMwMk9YUXROek10TVRrd2NUQXROakVnTkM0MUxURXhPSFF4T1MweE1qVXVOU0F6Tnk0MUxURXlNeTQxSURZekxqVXRNVEF6TGpVZ09UTXVOUzAzTkM0MWJDMDVNQzB5TWpCb01qRTBjUzB5TWkwMk5DMHlNaTB4TWpnZ01DMHhNaUF5TFRNeUxURTVOQzAwTUMweE9UUXRPVFlnTUMwMU55QXlNVEF0T1RrZ01UY3ROaklnTlRFdU5TMHhNelIwTnpBdU5TMHhNVFJ4TXpJdE16Y2dOell0TXpjZ016QWdNQ0E0TkNBek1YUTROQ0F6TVNBNE5DMHpNU0E0TkMwek1YRTBOQ0F3SURjMklETTNJRE0ySURReUlEY3dMalVnTVRFMGREVXhMalVnTVRNMGNUSXhNQ0EwTWlBeU1UQWdPVGtnTUNBMU5pMHhPVFFnT1RZZ055QTRNUzB5TUNBeE5qQm9NakUwYkMwNE1pQXlNalZ4TmpNZ016TWdNVEEzTGpVZ09UWXVOWFEyTlM0MUlERTBNeTQxSURJNUlERTFNUzQxSURnZ01UUTRMalY2SWk4K1BDOXpkbWMrXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2ltZy90aG91Z2h0Y3JpbWUuc3ZnXG4gKiogbW9kdWxlIGlkID0gNDI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgRGFzaCBmcm9tICcuL0Rhc2guanMnO1xuaW1wb3J0IEZpbHRlcmluZyBmcm9tICcuL0ZpbHRlcmluZy5qcyc7XG5pbXBvcnQgU2V0dGluZ3MgZnJvbSAnLi9TZXR0aW5ncy5qcyc7XG5pbXBvcnQgU3RhdGlzdGljcyBmcm9tICcuL1N0YXRpc3RpY3MuanMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIERhc2gsXG4gIEZpbHRlcmluZyxcbiAgU2V0dGluZ3MsXG4gIFN0YXRpc3RpY3Ncbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb250YWluZXJzL29wdGlvbnMvQWxsT3B0aW9ucy5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IFNpdGVUYWJsZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NpdGVUYWJsZS5qcyc7XG5pbXBvcnQgSW5wdXRCYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9JbnB1dEJhci5qcyc7XG5cbmltcG9ydCB7IGFkZFNpdGUgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2NvbW1vbi5qcyc7XG5cbmNsYXNzIERhc2ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCBwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1oZWFkaW5nXCI+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicGFuZWwtdGl0bGVcIj5BZGQgUGF0dGVybjwvaDM+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1ib2R5XCI+XG4gICAgICAgICAgICA8SW5wdXRCYXIgYWRkU2l0ZT17dGhpcy5wcm9wcy5hZGRTaXRlfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNyBwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1oZWFkaW5nXCI+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicGFuZWwtdGl0bGVcIj5EYWlseSBTdGF0aXN0aWNzPC9oMz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWJvZHlcIj5cbiAgICAgICAgICAgIDxTaXRlVGFibGUgc2l0ZXM9e3RoaXMucHJvcHMuZGFpbHlTaXRlc30gbWF4RW50cnk9ezEwfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgc3RhdGUgPT4gKFxuICAgIHtcbiAgICAgIGRhaWx5U2l0ZXM6IHN0YXRlLmRhaWx5U2l0ZXMsXG4gICAgICBtZXNzYWdlOiBzdGF0ZS5tZXNzYWdlXG4gICAgfVxuICApLFxuICBkaXNwYXRjaCA9PiAoXG4gICAge1xuICAgICAgYWRkU2l0ZTogc2l0ZSA9PiBkaXNwYXRjaChhZGRTaXRlKHNpdGUpKVxuICAgIH1cbiAgKVxuKShEYXNoKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbnRhaW5lcnMvb3B0aW9ucy9EYXNoLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRhYmxlLCBDb2x1bW4sIENlbGwgfSBmcm9tICdmaXhlZC1kYXRhLXRhYmxlJztcbmltcG9ydCAnZml4ZWQtZGF0YS10YWJsZS9kaXN0L2ZpeGVkLWRhdGEtdGFibGUuY3NzJztcbmltcG9ydCBTb3J0YWJsZUhlYWRlciBmcm9tICcuL1NvcnRhYmxlSGVhZGVyLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2l0ZVRhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgLy8gRGVmYXVsdCB0byBEZXNjZW5kaW5nIE9yZGVyIG9uIHRpbWVTcGVudFxuICAgIGNvbnNvbGUubG9nKHByb3BzKTtcbiAgICB0aGlzLm9uSGVhZGVyQ2xpY2sgPSB0aGlzLm9uSGVhZGVyQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc29ydEJ5OiAndGltZVNwZW50JyxcbiAgICAgIG9yZGVyOiAxLFxuICAgICAgc2l0ZXM6IHRoaXMuc29ydFByb3BzKHByb3BzLnNpdGVzLCAndGltZVNwZW50JywgMSlcbiAgICB9O1xuICB9XG4gIG9uSGVhZGVyQ2xpY2soY29sdW1uKSB7XG4gICAgY29uc3Qgb3JkZXIgPSAoY29sdW1uID09PSB0aGlzLnN0YXRlLnNvcnRCeSkgPyAtdGhpcy5zdGF0ZS5vcmRlciA6IDE7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzb3J0Qnk6IGNvbHVtbixcbiAgICAgIG9yZGVyLFxuICAgICAgc2l0ZXM6IHRoaXMuc29ydFByb3BzKHRoaXMucHJvcHMuc2l0ZXMsIGNvbHVtbiwgb3JkZXIpXG4gICAgfSk7XG4gIH1cbiAgc29ydFByb3BzKHNpdGVzLCBzb3J0QnksIG9yZGVyKSB7XG4gICAgcmV0dXJuIHNpdGVzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIGlmIChhW3NvcnRCeV0gPCBiW3NvcnRCeV0pIHtcbiAgICAgICAgcmV0dXJuIG9yZGVyICogMTtcbiAgICAgIH1cbiAgICAgIGlmIChhW3NvcnRCeV0gPiBiW3NvcnRCeV0pIHtcbiAgICAgICAgcmV0dXJuIG9yZGVyICogLTE7XG4gICAgICB9XG4gICAgICByZXR1cm4gMDtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG1heEVudHJ5IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGl0ZW1Db3VudCA9ICh0aGlzLnN0YXRlLnNpdGVzLmxlbmd0aCA8IG1heEVudHJ5KSA/IHRoaXMuc3RhdGUuc2l0ZXMubGVuZ3RoIDogbWF4RW50cnk7XG4gICAgbGV0IGNvbHVtbkNvdW50ID0gMDtcbiAgICBjb25zdCBmaW5pc2hlZENvbHVtbnMgPSBbXTtcbiAgICBsZXQgZmluaXNoZWRUYWJsZTtcbiAgICBpZiAoIWl0ZW1Db3VudCkge1xuICAgICAgZmluaXNoZWRUYWJsZSA9IDxkaXY+Tm90aGluZyB0byBTaG93PC9kaXY+O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzaXRlcyA9IHRoaXMuc3RhdGUuc2l0ZXM7XG4gICAgICBjb25zdCB0b3BUZW4gPSBzaXRlcy5zbGljZSgwLCBpdGVtQ291bnQpO1xuICAgICAgZm9yIChjb25zdCBjb2x1bW4gaW4gc2l0ZXNbMF0pIHtcbiAgICAgICAgaWYgKHNpdGVzWzBdLmhhc093blByb3BlcnR5KGNvbHVtbikpIHtcbiAgICAgICAgICBjb2x1bW5Db3VudCArPSAxO1xuICAgICAgICAgIGZpbmlzaGVkQ29sdW1ucy5wdXNoKFxuICAgICAgICAgICAgPENvbHVtblxuICAgICAgICAgICAgICBoZWFkZXI9PFNvcnRhYmxlSGVhZGVyIGNvbHVtbj17Y29sdW1ufSBvbkhlYWRlckNsaWNrPXt0aGlzLm9uSGVhZGVyQ2xpY2t9IC8+XG4gICAgICAgICAgICAgIGtleT17Y29sdW1ufVxuICAgICAgICAgICAgICBjZWxsPXtjID0+IChcbiAgICAgICAgICAgICAgICA8Q2VsbD5cbiAgICAgICAgICAgICAgICAgIHt0b3BUZW5bYy5yb3dJbmRleF1bY29sdW1uXX1cbiAgICAgICAgICAgICAgICA8L0NlbGw+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHdpZHRoPXsyMDB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZpbmlzaGVkVGFibGUgPSAoXG4gICAgICAgIDxUYWJsZVxuICAgICAgICAgIHJvd3NDb3VudD17aXRlbUNvdW50fVxuICAgICAgICAgIHJvd0hlaWdodD17MzB9XG4gICAgICAgICAgaGVhZGVySGVpZ2h0PXszMH1cbiAgICAgICAgICB3aWR0aD17Y29sdW1uQ291bnQgKiAyMDB9XG4gICAgICAgICAgaGVpZ2h0PXsoaXRlbUNvdW50ICsgMSkgKiAzMCArIDJ9XG4gICAgICAgID5cbiAgICAgICAgICB7ZmluaXNoZWRDb2x1bW5zfVxuICAgICAgICA8L1RhYmxlPlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIGZpbmlzaGVkVGFibGVcbiAgICApO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL1NpdGVUYWJsZS5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9GaXhlZERhdGFUYWJsZVJvb3QnKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZpeGVkLWRhdGEtdGFibGUvbWFpbi5qc1xuICoqIG1vZHVsZSBpZCA9IDQyOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgRml4ZWREYXRhVGFibGVSb290XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgRml4ZWREYXRhVGFibGUgPSByZXF1aXJlKCcuL0ZpeGVkRGF0YVRhYmxlLnJlYWN0Jyk7XG52YXIgRml4ZWREYXRhVGFibGVDZWxsRGVmYXVsdCA9IHJlcXVpcmUoJy4vRml4ZWREYXRhVGFibGVDZWxsRGVmYXVsdC5yZWFjdCcpO1xudmFyIEZpeGVkRGF0YVRhYmxlQ29sdW1uID0gcmVxdWlyZSgnLi9GaXhlZERhdGFUYWJsZUNvbHVtbi5yZWFjdCcpO1xudmFyIEZpeGVkRGF0YVRhYmxlQ29sdW1uR3JvdXAgPSByZXF1aXJlKCcuL0ZpeGVkRGF0YVRhYmxlQ29sdW1uR3JvdXAucmVhY3QnKTtcblxudmFyIEZpeGVkRGF0YVRhYmxlUm9vdCA9IHtcbiAgQ2VsbDogRml4ZWREYXRhVGFibGVDZWxsRGVmYXVsdCxcbiAgQ29sdW1uOiBGaXhlZERhdGFUYWJsZUNvbHVtbixcbiAgQ29sdW1uR3JvdXA6IEZpeGVkRGF0YVRhYmxlQ29sdW1uR3JvdXAsXG4gIFRhYmxlOiBGaXhlZERhdGFUYWJsZVxufTtcblxuRml4ZWREYXRhVGFibGVSb290LnZlcnNpb24gPSAnMC42LjMnO1xubW9kdWxlLmV4cG9ydHMgPSBGaXhlZERhdGFUYWJsZVJvb3Q7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9GaXhlZERhdGFUYWJsZVJvb3QuanNcbiAqKiBtb2R1bGUgaWQgPSA0MjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIEZpeGVkRGF0YVRhYmxlLnJlYWN0XG4gKi9cblxuLyoqXG4gKiBUUkFOU0lUSU9OIFNISU1cbiAqIFRoaXMgYWN0cyB0byBwcm92aWRlIGFuIGludGVybWVkaWF0ZSBtYXBwaW5nIGZyb20gdGhlIG9sZCBBUEkgdG8gdGhlIG5ldyBBUElcbiAqXG4gKiBSZW1vdmUgdGhpcyBlbnRpcmUgZmlsZSBhbmQgcmVwbGFjZSB0aGUgdHdvIGxpbmVzIGluIEZpeGVkRGF0YVRhYmxlUm9vdFxuICogd2hlbiByZWFkeSB0byBjb250aW51ZSB0byB0aGUgbmV3IEFQSS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJy4vUmVhY3QnKTtcblxudmFyIFJlYWN0Q2hpbGRyZW4gPSBSZWFjdC5DaGlsZHJlbjtcblxudmFyIFByb3BUeXBlcyA9IFJlYWN0LlByb3BUeXBlcztcblxuLy8gTmV3IFRhYmxlIEFQSVxudmFyIFRhYmxlID0gcmVxdWlyZSgnLi9GaXhlZERhdGFUYWJsZU5ldy5yZWFjdCcpO1xudmFyIENvbHVtbiA9IHJlcXVpcmUoJy4vRml4ZWREYXRhVGFibGVDb2x1bW5OZXcucmVhY3QnKTtcbnZhciBDb2x1bW5Hcm91cCA9IHJlcXVpcmUoJy4vRml4ZWREYXRhVGFibGVDb2x1bW5Hcm91cE5ldy5yZWFjdCcpO1xuXG4vLyBUcmFuc2l0aW9uIENlbGxcbnZhciBUcmFuc2l0aW9uQ2VsbCA9IHJlcXVpcmUoJy4vRml4ZWREYXRhVGFibGVDZWxsVHJhbnNpdGlvbi5yZWFjdCcpO1xuXG52YXIgTkVYVF9WRVJTSU9OID0gJzAuNy4wJztcbnZhciBET0NVTUVOVEFUSU9OX1VSTCA9ICdodHRwczovL2ZidXJsLmNvbS9GaXhlZERhdGFUYWJsZS12MC42JztcblxudmFyIEVNUFRZX09CSkVDVCA9IHt9O1xuXG4vKipcbiAqIE5vdGlmeSBpbiBjb25zb2xlIHRoYXQgc29tZSBwcm9wIGhhcyBiZWVuIGRlcHJlY2F0ZWQuXG4gKi9cbnZhciBub3RpZmllZCA9IHt9O1xuZnVuY3Rpb24gbm90aWZ5RGVwcmVjYXRlZChwcm9wLCByZWFzb24pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoIW5vdGlmaWVkW3Byb3BdKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ2AnICsgcHJvcCArICdgIHdpbGwgYmUgREVQUkVDQVRFRCBpbiB2ZXJzaW9uICcgKyBORVhUX1ZFUlNJT04gKyAnIG9mIEZpeGVkRGF0YVRhYmxlIGFuZCBiZXlvbmQuIFxcbicgKyByZWFzb24gKyAnXFxuJyArICdSZWFkIHRoZSBkb2NzIGF0OiAnICsgRE9DVU1FTlRBVElPTl9VUkwpO1xuICAgICAgbm90aWZpZWRbcHJvcF0gPSB0cnVlO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIERhdGEgZ3JpZCBjb21wb25lbnQgd2l0aCBmaXhlZCBvciBzY3JvbGxhYmxlIGhlYWRlciBhbmQgY29sdW1ucy5cbiAqXG4gKiBUaGlzIGlzIGN1cnJlbnRseSBpbiBhIHRyYW5zaXRpb24gbW9kZSwgYXMgdGhlIG5ldyBBUEkgaXMgdXNlZC5cbiAqIERFUFJFQ0FURUQgZW5kcG9pbnRzIHdvcmssIGJ1dCB3aWxsIG5vdCBiZSBzdXBwb3J0ZWQgaW4gbGF0ZXIgdmVyc2lvbnMuXG4gKlxuICogVGhlIGxheW91dCBvZiB0aGUgZGF0YSB0YWJsZSBpcyBhcyBmb2xsb3dzOlxuICpcbiAqIGBgYFxuICogKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLStcbiAqIHwgRml4ZWQgQ29sdW1uIEdyb3VwICAgIHwgU2Nyb2xsYWJsZSBDb2x1bW4gR3JvdXAgICB8XG4gKiB8IEhlYWRlciAgICAgICAgICAgICAgICB8IEhlYWRlciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCBGaXhlZCBIZWFkZXIgQ29sdW1ucyAgfCBTY3JvbGxhYmxlIEhlYWRlciBDb2x1bW5zIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tK1xuICogfCAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgRml4ZWQgQm9keSBDb2x1bW5zICAgIHwgU2Nyb2xsYWJsZSBCb2R5IENvbHVtbnMgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLStcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8IEZpeGVkIEZvb3RlciBDb2x1bW5zICB8IFNjcm9sbGFibGUgRm9vdGVyIENvbHVtbnMgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rXG4gKiBgYGBcbiAqXG4gKiAtIEZpeGVkIENvbHVtbiBHcm91cCBIZWFkZXI6IFRoZXNlIGFyZSB0aGUgaGVhZGVycyBmb3IgYSBncm91cFxuICogICBvZiBjb2x1bW5zIGlmIGluY2x1ZGVkIGluIHRoZSB0YWJsZSB0aGF0IGRvIG5vdCBzY3JvbGxcbiAqICAgdmVydGljYWxseSBvciBob3Jpem9udGFsbHkuXG4gKlxuICogLSBTY3JvbGxhYmxlIENvbHVtbiBHcm91cCBIZWFkZXI6IFRoZSBoZWFkZXIgZm9yIGEgZ3JvdXAgb2YgY29sdW1uc1xuICogICB0aGF0IGRvIG5vdCBtb3ZlIHdoaWxlIHNjcm9sbGluZyB2ZXJ0aWNhbGx5LCBidXQgbW92ZSBob3Jpem9udGFsbHlcbiAqICAgd2l0aCB0aGUgaG9yaXpvbnRhbCBzY3JvbGxpbmcuXG4gKlxuICogLSBGaXhlZCBIZWFkZXIgQ29sdW1uczogVGhlIGhlYWRlciBjb2x1bW5zIHRoYXQgZG8gbm90IG1vdmUgd2hpbGUgc2Nyb2xsaW5nXG4gKiAgIHZlcnRpY2FsbHkgb3IgaG9yaXpvbnRhbGx5LlxuICpcbiAqIC0gU2Nyb2xsYWJsZSBIZWFkZXIgQ29sdW1uczogVGhlIGhlYWRlciBjb2x1bW5zIHRoYXQgZG8gbm90IG1vdmVcbiAqICAgd2hpbGUgc2Nyb2xsaW5nIHZlcnRpY2FsbHksIGJ1dCBtb3ZlIGhvcml6b250YWxseSB3aXRoIHRoZSBob3Jpem9udGFsXG4gKiAgIHNjcm9sbGluZy5cbiAqXG4gKiAtIEZpeGVkIEJvZHkgQ29sdW1uczogVGhlIGJvZHkgY29sdW1ucyB0aGF0IGRvIG5vdCBtb3ZlIHdoaWxlIHNjcm9sbGluZ1xuICogICBob3Jpem9udGFsbHksIGJ1dCBtb3ZlIHZlcnRpY2FsbHkgd2l0aCB0aGUgdmVydGljYWwgc2Nyb2xsaW5nLlxuICpcbiAqIC0gU2Nyb2xsYWJsZSBCb2R5IENvbHVtbnM6IFRoZSBib2R5IGNvbHVtbnMgdGhhdCBtb3ZlIHdoaWxlIHNjcm9sbGluZ1xuICogICB2ZXJ0aWNhbGx5IG9yIGhvcml6b250YWxseS5cbiAqL1xudmFyIFRyYW5zaXRpb25UYWJsZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdUcmFuc2l0aW9uVGFibGUnLFxuXG4gIHByb3BUeXBlczoge1xuICAgIC8qKlxuICAgICAqIFBpeGVsIHdpZHRoIG9mIHRhYmxlLiBJZiBhbGwgY29sdW1ucyBkbyBub3QgZml0LFxuICAgICAqIGEgaG9yaXpvbnRhbCBzY3JvbGxiYXIgd2lsbCBhcHBlYXIuXG4gICAgICovXG4gICAgd2lkdGg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFBpeGVsIGhlaWdodCBvZiB0YWJsZS4gSWYgYWxsIHJvd3MgZG8gbm90IGZpdCxcbiAgICAgKiBhIHZlcnRpY2FsIHNjcm9sbGJhciB3aWxsIGFwcGVhci5cbiAgICAgKlxuICAgICAqIEVpdGhlciBgaGVpZ2h0YCBvciBgbWF4SGVpZ2h0YCBtdXN0IGJlIHNwZWNpZmllZC5cbiAgICAgKi9cbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvKipcbiAgICAgKiBNYXhpbXVtIHBpeGVsIGhlaWdodCBvZiB0YWJsZS4gSWYgYWxsIHJvd3MgZG8gbm90IGZpdCxcbiAgICAgKiBhIHZlcnRpY2FsIHNjcm9sbGJhciB3aWxsIGFwcGVhci5cbiAgICAgKlxuICAgICAqIEVpdGhlciBgaGVpZ2h0YCBvciBgbWF4SGVpZ2h0YCBtdXN0IGJlIHNwZWNpZmllZC5cbiAgICAgKi9cbiAgICBtYXhIZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvKipcbiAgICAgKiBQaXhlbCBoZWlnaHQgb2YgdGFibGUncyBvd25lciwgdGhpcyBpcyB1c2VkIGluIGEgbWFuYWdlZCBzY3JvbGxpbmdcbiAgICAgKiBzaXR1YXRpb24gd2hlbiB5b3Ugd2FudCB0byBzbGlkZSB0aGUgdGFibGUgdXAgZnJvbSBiZWxvdyB0aGUgZm9sZFxuICAgICAqIHdpdGhvdXQgaGF2aW5nIHRvIGNvbnN0YW50bHkgdXBkYXRlIHRoZSBoZWlnaHQgb24gZXZlcnkgc2Nyb2xsIHRpY2suXG4gICAgICogSW5zdGVhZCwgdmFyeSB0aGlzIHByb3BlcnR5IG9uIHNjcm9sbC4gQnkgdXNpbmcgYG93bmVySGVpZ2h0YCwgd2VcbiAgICAgKiBvdmVyLXJlbmRlciB0aGUgdGFibGUgd2hpbGUgbWFraW5nIHN1cmUgdGhlIGZvb3RlciBhbmQgaG9yaXpvbnRhbFxuICAgICAqIHNjcm9sbGJhciBvZiB0aGUgdGFibGUgYXJlIHZpc2libGUgd2hlbiB0aGUgY3VycmVudCBzcGFjZSBmb3IgdGhlIHRhYmxlXG4gICAgICogaW4gdmlldyBpcyBzbWFsbGVyIHRoYW4gdGhlIGZpbmFsLCBvdmVyLWZsb3dpbmcgaGVpZ2h0IG9mIHRhYmxlLiBJdFxuICAgICAqIGFsbG93cyB1cyB0byBhdm9pZCByZXNpemluZyBhbmQgcmVmbG93aW5nIHRhYmxlIHdoZW4gaXQgaXMgbW92aW5nIGluIHRoZVxuICAgICAqIHZpZXcuXG4gICAgICpcbiAgICAgKiBUaGlzIGlzIHVzZWQgaWYgYG93bmVySGVpZ2h0IDwgaGVpZ2h0YCAob3IgYG1heEhlaWdodGApLlxuICAgICAqL1xuICAgIG93bmVySGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgb3ZlcmZsb3dYOiBQcm9wVHlwZXMub25lT2YoWydoaWRkZW4nLCAnYXV0byddKSxcbiAgICBvdmVyZmxvd1k6IFByb3BUeXBlcy5vbmVPZihbJ2hpZGRlbicsICdhdXRvJ10pLFxuXG4gICAgLyoqXG4gICAgICogTnVtYmVyIG9mIHJvd3MgaW4gdGhlIHRhYmxlLlxuICAgICAqL1xuICAgIHJvd3NDb3VudDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogUGl4ZWwgaGVpZ2h0IG9mIHJvd3MgdW5sZXNzIGByb3dIZWlnaHRHZXR0ZXJgIGlzIHNwZWNpZmllZCBhbmQgcmV0dXJuc1xuICAgICAqIGRpZmZlcmVudCB2YWx1ZS5cbiAgICAgKi9cbiAgICByb3dIZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIElmIHNwZWNpZmllZCwgYHJvd0hlaWdodEdldHRlcihpbmRleClgIGlzIGNhbGxlZCBmb3IgZWFjaCByb3cgYW5kIHRoZVxuICAgICAqIHJldHVybmVkIHZhbHVlIG92ZXJyaWRlcyBgcm93SGVpZ2h0YCBmb3IgcGFydGljdWxhciByb3cuXG4gICAgICovXG4gICAgcm93SGVpZ2h0R2V0dGVyOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIERFUFJFQ0FURURcbiAgICAgKlxuICAgICAqIFRvIGdldCByb3dzIHRvIGRpc3BsYXkgaW4gdGFibGUsIGByb3dHZXR0ZXIoaW5kZXgpYFxuICAgICAqIGlzIGNhbGxlZC4gYHJvd0dldHRlcmAgc2hvdWxkIGJlIHNtYXJ0IGVub3VnaCB0byBoYW5kbGUgYXN5bmNcbiAgICAgKiBmZXRjaGluZyBvZiBkYXRhIGFuZCByZXR1cm4gdGVtcG9yYXJ5IG9iamVjdHNcbiAgICAgKiB3aGlsZSBkYXRhIGlzIGJlaW5nIGZldGNoZWQuXG4gICAgICovXG4gICAgcm93R2V0dGVyOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIFRvIGdldCBhbnkgYWRkaXRpb25hbCBDU1MgY2xhc3NlcyB0aGF0IHNob3VsZCBiZSBhZGRlZCB0byBhIHJvdyxcbiAgICAgKiBgcm93Q2xhc3NOYW1lR2V0dGVyKGluZGV4KWAgaXMgY2FsbGVkLlxuICAgICAqL1xuICAgIHJvd0NsYXNzTmFtZUdldHRlcjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBQaXhlbCBoZWlnaHQgb2YgdGhlIGNvbHVtbiBncm91cCBoZWFkZXIuXG4gICAgICovXG4gICAgZ3JvdXBIZWFkZXJIZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvKipcbiAgICAgKiBQaXhlbCBoZWlnaHQgb2YgaGVhZGVyLlxuICAgICAqL1xuICAgIGhlYWRlckhlaWdodDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogREVQUkVDQVRFRFxuICAgICAqXG4gICAgICogRnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgdG8gZ2V0IHRoZSBkYXRhIGZvciB0aGUgaGVhZGVyIHJvdy5cbiAgICAgKiBJZiB0aGUgZnVuY3Rpb24gcmV0dXJucyBudWxsLCB0aGUgaGVhZGVyIHdpbGwgYmUgc2V0IHRvIHRoZVxuICAgICAqIENvbHVtbidzIGxhYmVsIHByb3BlcnR5LlxuICAgICAqL1xuICAgIGhlYWRlckRhdGFHZXR0ZXI6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogUGl4ZWwgaGVpZ2h0IG9mIGZvb3Rlci5cbiAgICAgKi9cbiAgICBmb290ZXJIZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvKipcbiAgICAgKiBERVBSRUNBVEVEIC0gdXNlIGZvb3RlckRhdGFHZXR0ZXIgaW5zdGVhZC5cbiAgICAgKiBEYXRhIHRoYXQgd2lsbCBiZSBwYXNzZWQgdG8gZm9vdGVyIGNlbGwgcmVuZGVyZXJzLlxuICAgICAqL1xuICAgIGZvb3RlckRhdGE6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5hcnJheV0pLFxuXG4gICAgLyoqXG4gICAgICogREVQUkVDQVRFRFxuICAgICAqXG4gICAgICogRnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgdG8gZ2V0IHRoZSBkYXRhIGZvciB0aGUgZm9vdGVyIHJvdy5cbiAgICAgKi9cbiAgICBmb290ZXJEYXRhR2V0dGVyOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIFZhbHVlIG9mIGhvcml6b250YWwgc2Nyb2xsLlxuICAgICAqL1xuICAgIHNjcm9sbExlZnQ6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvKipcbiAgICAgKiBJbmRleCBvZiBjb2x1bW4gdG8gc2Nyb2xsIHRvLlxuICAgICAqL1xuICAgIHNjcm9sbFRvQ29sdW1uOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLyoqXG4gICAgICogVmFsdWUgb2YgdmVydGljYWwgc2Nyb2xsLlxuICAgICAqL1xuICAgIHNjcm9sbFRvcDogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKlxuICAgICAqIEluZGV4IG9mIHJvdyB0byBzY3JvbGwgdG8uXG4gICAgICovXG4gICAgc2Nyb2xsVG9Sb3c6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIHNjcm9sbGluZyBzdGFydHMgd2l0aCBjdXJyZW50IGhvcml6b250YWxcbiAgICAgKiBhbmQgdmVydGljYWwgc2Nyb2xsIHZhbHVlcy5cbiAgICAgKi9cbiAgICBvblNjcm9sbFN0YXJ0OiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gc2Nyb2xsaW5nIGVuZHMgb3Igc3RvcHMgd2l0aCBuZXcgaG9yaXpvbnRhbFxuICAgICAqIGFuZCB2ZXJ0aWNhbCBzY3JvbGwgdmFsdWVzLlxuICAgICAqL1xuICAgIG9uU2Nyb2xsRW5kOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gYHJvd0hlaWdodEdldHRlcmAgcmV0dXJucyBhIGRpZmZlcmVudCBoZWlnaHRcbiAgICAgKiBmb3IgYSByb3cgdGhhbiB0aGUgYHJvd0hlaWdodGAgcHJvcC4gVGhpcyBpcyBuZWNlc3NhcnkgYmVjYXVzZSBpbml0aWFsbHlcbiAgICAgKiB0YWJsZSBlc3RpbWF0ZXMgaGVpZ2h0cyBvZiBzb21lIHBhcnRzIG9mIHRoZSBjb250ZW50LlxuICAgICAqL1xuICAgIG9uQ29udGVudEhlaWdodENoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIGEgcm93IGlzIGNsaWNrZWQuXG4gICAgICovXG4gICAgb25Sb3dDbGljazogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIGEgcm93IGlzIGRvdWJsZSBjbGlja2VkLlxuICAgICAqL1xuICAgIG9uUm93RG91YmxlQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBhIG1vdXNlLWRvd24gZXZlbnQgaGFwcGVucyBvbiBhIHJvdy5cbiAgICAgKi9cbiAgICBvblJvd01vdXNlRG93bjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIGEgbW91c2UtZW50ZXIgZXZlbnQgaGFwcGVucyBvbiBhIHJvdy5cbiAgICAgKi9cbiAgICBvblJvd01vdXNlRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBhIG1vdXNlLWxlYXZlIGV2ZW50IGhhcHBlbnMgb24gYSByb3cuXG4gICAgICovXG4gICAgb25Sb3dNb3VzZUxlYXZlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gcmVzaXplciBoYXMgYmVlbiByZWxlYXNlZFxuICAgICAqIGFuZCBjb2x1bW4gbmVlZHMgdG8gYmUgdXBkYXRlZC5cbiAgICAgKlxuICAgICAqIFJlcXVpcmVkIGlmIHRoZSBpc1Jlc2l6YWJsZSBwcm9wZXJ0eSBpcyB0cnVlIG9uIGFueSBjb2x1bW4uXG4gICAgICpcbiAgICAgKiBgYGBcbiAgICAgKiBmdW5jdGlvbihcbiAgICAgKiAgIG5ld0NvbHVtbldpZHRoOiBudW1iZXIsXG4gICAgICogICBkYXRhS2V5OiBzdHJpbmcsXG4gICAgICogKVxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIG9uQ29sdW1uUmVzaXplRW5kQ2FsbGJhY2s6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogV2hldGhlciBhIGNvbHVtbiBpcyBjdXJyZW50bHkgYmVpbmcgcmVzaXplZC5cbiAgICAgKi9cbiAgICBpc0NvbHVtblJlc2l6aW5nOiBQcm9wVHlwZXMuYm9vbFxuICB9LFxuXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIC8vIFRocm93IHdhcm5pbmdzIG9uIGRlcHJlY2F0ZWQgcHJvcHMuXG4gICAgdmFyIHN0YXRlID0ge307XG4gICAgc3RhdGUubmVlZHNNaWdyYXRpb24gPSB0aGlzLl9jaGVja0RlcHJlY2F0aW9ucygpO1xuXG4gICAgcmV0dXJuIHN0YXRlO1xuICB9LFxuXG4gIF9jaGVja0RlcHJlY2F0aW9uczogZnVuY3Rpb24gX2NoZWNrRGVwcmVjYXRpb25zKCkge1xuICAgIHZhciBuZWVkc01pZ3JhdGlvbiA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMucHJvcHMucm93R2V0dGVyKSB7XG4gICAgICBub3RpZnlEZXByZWNhdGVkKCdyb3dHZXR0ZXInLCAnUGxlYXNlIHVzZSB0aGUgY2VsbCBBUEkgaW4gQ29sdW1uIHRvIGZldGNoIGRhdGEgZm9yIHlvdXIgY2VsbHMuJyk7XG5cbiAgICAgIC8vIFJPV0dFVFRFUj8/PyBZb3UgbmVlZCB0byBtaWdyYXRlLlxuICAgICAgbmVlZHNNaWdyYXRpb24gPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLmhlYWRlckRhdGFHZXR0ZXIpIHtcbiAgICAgIG5vdGlmeURlcHJlY2F0ZWQoJ2hlYWRlckRhdGFHZXR0ZXInLCAnUGxlYXNlIHVzZSB0aGUgaGVhZGVyIEFQSSBpbiBDb2x1bW4gdG8gJyArICdmZXRjaCBkYXRhIGZvciB5b3VyIGhlYWRlciBjZWxscy4nKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5mb290ZXJEYXRhKSB7XG4gICAgICBub3RpZnlEZXByZWNhdGVkKCdmb290ZXJEYXRhJywgJ1BsZWFzZSB1c2UgdGhlIGZvb3RlciBBUEkgaW4gQ29sdW1uIHRvICcgKyAnZmV0Y2ggZGF0YSBmb3IgeW91ciBmb290ZXIgY2VsbHMuJyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMuZm9vdGVyRGF0YUdldHRlcikge1xuICAgICAgbm90aWZ5RGVwcmVjYXRlZCgnZm9vdGVyRGF0YUdldHRlcicsICdQbGVhc2UgdXNlIHRoZSBmb290ZXIgQVBJIGluIENvbHVtbiB0byAnICsgJ2ZldGNoIGRhdGEgZm9yIHlvdXIgZm9vdGVyIGNlbGxzLicpO1xuICAgIH1cblxuICAgIFJlYWN0Q2hpbGRyZW4uZm9yRWFjaCh0aGlzLnByb3BzLmNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgIGlmICghY2hpbGQgfHwgIWNoaWxkLnByb3BzKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHByb3BzID0gY2hpbGQucHJvcHM7XG5cbiAgICAgIGlmIChwcm9wcy5sYWJlbCkge1xuICAgICAgICBub3RpZnlEZXByZWNhdGVkKCdsYWJlbCcsICdQbGVhc2UgdXNlIGBoZWFkZXJgIGluc3RlYWQuJyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9wcy5kYXRhS2V5KSB7XG4gICAgICAgIG5vdGlmeURlcHJlY2F0ZWQoJ2RhdGFLZXknLCAnUGxlYXNlIHVzZSB0aGUgYGNlbGxgIEFQSSB0byBwYXNzIGluIGEgZGF0YUtleScpO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvcHMuY2VsbFJlbmRlcmVyKSB7XG4gICAgICAgIG5vdGlmeURlcHJlY2F0ZWQoJ2NlbGxSZW5kZXJlcicsICdQbGVhc2UgdXNlIHRoZSBgY2VsbGAgQVBJIHRvIHBhc3MgaW4gYSBSZWFjdCBFbGVtZW50IGluc3RlYWQuJyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9wcy5oZWFkZXJSZW5kZXJlcikge1xuICAgICAgICBub3RpZnlEZXByZWNhdGVkKCdoZWFkZXJSZW5kZXJlcicsICdQbGVhc2UgdXNlIHRoZSBgaGVhZGVyYCBBUEkgdG8gcGFzcyBpbiBhIFJlYWN0IEVsZW1lbnQgaW5zdGVhZC4nKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByb3BzLmNvbHVtbkRhdGEpIHtcbiAgICAgICAgbm90aWZ5RGVwcmVjYXRlZCgnY29sdW1uRGF0YScsICdQbGVhc2UgcGFzcyBkYXRhIGluIHRocm91Z2ggcHJvcHMgdG8geW91ciBoZWFkZXIsIGNlbGwgb3IgZm9vdGVyLicpO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvcHMuZ3JvdXBIZWFkZXJSZW5kZXJlcikge1xuICAgICAgICBub3RpZnlEZXByZWNhdGVkKCdncm91cEhlYWRlclJlbmRlcmVyJywgJ1BsZWFzZSB1c2UgdGhlIGBoZWFkZXJgIEFQSSBpbiBDb2x1bW5Hcm91cCB0byAnICsgJ3Bhc3MgaW4gYSBSZWFjdCBFbGVtZW50IGluc3RlYWQgb2YgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgb25lLicpO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvcHMuZ3JvdXBIZWFkZXJEYXRhKSB7XG4gICAgICAgIG5vdGlmeURlcHJlY2F0ZWQoJ2dyb3VwSGVhZGVyRGF0YScsICdQbGVhc2UgcGFzcyBpbiBhbnkgZGF0YSB0aHJvdWdoIHByb3BzIHRvIHlvdXIgaGVhZGVyLicpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5lZWRzTWlncmF0aW9uO1xuICB9LFxuXG4gIC8vIFdyYXBwZXIgZm9yIG9uUm93IGNhbGxiYWNrcywgc2luY2Ugd2UgZG9uJ3QgaGF2ZSByb3dEYXRhIGF0IHRoYXQgbGV2ZWwuXG4gIF9vblJvd0FjdGlvbjogZnVuY3Rpb24gX29uUm93QWN0aW9uKHByb3BzLCBjYWxsYmFjaykge1xuICAgIGlmICghY2FsbGJhY2spIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChlLCByb3dJbmRleCkge1xuICAgICAgY2FsbGJhY2soZSwgcm93SW5kZXgsIHByb3BzLnJvd0dldHRlciAmJiBwcm9wcy5yb3dHZXR0ZXIocm93SW5kZXgpIHx8IEVNUFRZX09CSkVDVCk7XG4gICAgfTtcbiAgfSxcblxuICBfdHJhbnNmb3JtQ29sdW1uOiBmdW5jdGlvbiBfdHJhbnNmb3JtQ29sdW1uKGNvbHVtbiwgdGFibGVQcm9wcywga2V5KSB7XG5cbiAgICB2YXIgcHJvcHMgPSBjb2x1bW4ucHJvcHM7XG5cbiAgICBpZiAoY29sdW1uLnR5cGUuX19UYWJsZUNvbHVtbl9fKSB7XG4gICAgICAvLyBDb25zdHVjdCB0aGUgY2VsbCB0byBiZSB1c2VkIHVzaW5nIHRoZSByb3dHZXR0ZXJcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KENvbHVtbiwgX2V4dGVuZHMoe1xuICAgICAgICBrZXk6ICdjb2x1bW5fJyArIGtleVxuICAgICAgfSwgcHJvcHMsIHtcbiAgICAgICAgaGVhZGVyOiBSZWFjdC5jcmVhdGVFbGVtZW50KFRyYW5zaXRpb25DZWxsLCB7XG4gICAgICAgICAgaXNIZWFkZXJDZWxsOiB0cnVlLFxuICAgICAgICAgIGxhYmVsOiBwcm9wcy5sYWJlbCxcbiAgICAgICAgICB3aWR0aDogcHJvcHMud2lkdGgsXG4gICAgICAgICAgZGF0YUtleTogcHJvcHMuZGF0YUtleSxcbiAgICAgICAgICBjbGFzc05hbWU6IHByb3BzLmhlYWRlckNsYXNzTmFtZSxcbiAgICAgICAgICBjb2x1bW5EYXRhOiBwcm9wcy5jb2x1bW5EYXRhIHx8IEVNUFRZX09CSkVDVCxcbiAgICAgICAgICBjZWxsUmVuZGVyZXI6IHByb3BzLmhlYWRlclJlbmRlcmVyLFxuICAgICAgICAgIGhlYWRlckRhdGFHZXR0ZXI6IHRhYmxlUHJvcHMuaGVhZGVyRGF0YUdldHRlclxuICAgICAgICB9KSxcbiAgICAgICAgY29sdW1uS2V5OiBwcm9wcy5kYXRhS2V5LFxuICAgICAgICBjZWxsOiBSZWFjdC5jcmVhdGVFbGVtZW50KFRyYW5zaXRpb25DZWxsLCB7XG4gICAgICAgICAgZGF0YUtleTogcHJvcHMuZGF0YUtleSxcbiAgICAgICAgICBjbGFzc05hbWU6IHByb3BzLmNlbGxDbGFzc05hbWUsXG4gICAgICAgICAgcm93R2V0dGVyOiB0YWJsZVByb3BzLnJvd0dldHRlcixcbiAgICAgICAgICB3aWR0aDogcHJvcHMud2lkdGgsXG4gICAgICAgICAgY29sdW1uRGF0YTogcHJvcHMuY29sdW1uRGF0YSB8fCBFTVBUWV9PQkpFQ1QsXG4gICAgICAgICAgY2VsbERhdGFHZXR0ZXI6IHByb3BzLmNlbGxEYXRhR2V0dGVyLFxuICAgICAgICAgIGNlbGxSZW5kZXJlcjogcHJvcHMuY2VsbFJlbmRlcmVyXG4gICAgICAgIH0pLFxuICAgICAgICBmb290ZXI6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoVHJhbnNpdGlvbkNlbGwsIHtcbiAgICAgICAgICBpc0Zvb3RlckNlbGw6IHRydWUsXG4gICAgICAgICAgY2xhc3NOYW1lOiBwcm9wcy5mb290ZXJDbGFzc05hbWUsXG4gICAgICAgICAgZGF0YUtleTogcHJvcHMuZGF0YUtleSxcbiAgICAgICAgICBjZWxsUmVuZGVyZXI6IHByb3BzLmZvb3RlclJlbmRlcmVyLFxuICAgICAgICAgIGZvb3RlckRhdGFHZXR0ZXI6IHRhYmxlUHJvcHMuZm9vdGVyRGF0YUdldHRlcixcbiAgICAgICAgICBmb290ZXJEYXRhOiB0YWJsZVByb3BzLmZvb3RlckRhdGEgfHwgRU1QVFlfT0JKRUNUXG4gICAgICAgIH0pXG4gICAgICB9KSk7XG4gICAgfVxuICB9LFxuXG4gIF90cmFuc2Zvcm1Db2x1bW5Hcm91cDogZnVuY3Rpb24gX3RyYW5zZm9ybUNvbHVtbkdyb3VwKGdyb3VwLCB0YWJsZVByb3BzLCBrZXksIGxhYmVscykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgcHJvcHMgPSBncm91cC5wcm9wcztcblxuICAgIHZhciBqID0gMDtcbiAgICB2YXIgY29sdW1ucyA9IFJlYWN0Q2hpbGRyZW4ubWFwKHByb3BzLmNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgIGorKztcbiAgICAgIHJldHVybiBfdGhpcy5fdHJhbnNmb3JtQ29sdW1uKGNoaWxkLCB0YWJsZVByb3BzLCBrZXkgKyAnXycgKyBqKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgQ29sdW1uR3JvdXAsXG4gICAgICBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgICAga2V5OiAnZ3JvdXBfJyArIGtleSxcbiAgICAgICAgaGVhZGVyOiBSZWFjdC5jcmVhdGVFbGVtZW50KFRyYW5zaXRpb25DZWxsLCB7XG4gICAgICAgICAgaXNIZWFkZXJDZWxsOiB0cnVlLFxuICAgICAgICAgIGxhYmVsOiBncm91cC5wcm9wcy5sYWJlbCxcbiAgICAgICAgICBkYXRhS2V5OiBrZXksXG4gICAgICAgICAgZ3JvdXBIZWFkZXJSZW5kZXJlcjogcHJvcHMuZ3JvdXBIZWFkZXJSZW5kZXJlcixcbiAgICAgICAgICBncm91cEhlYWRlckxhYmVsczogbGFiZWxzLFxuICAgICAgICAgIGdyb3VwSGVhZGVyRGF0YTogcHJvcHMuY29sdW1uR3JvdXBEYXRhIHx8IEVNUFRZX09CSkVDVFxuICAgICAgICB9KSB9KSxcbiAgICAgIGNvbHVtbnNcbiAgICApO1xuICB9LFxuXG4gIF9jb252ZXJ0ZWRDb2x1bW5zOiBmdW5jdGlvbiBfY29udmVydGVkQ29sdW1ucyhuZWVkc01pZ3JhdGlvbikge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgLy8gSWYgd2UgZG9uJ3QgbmVlZCB0byBtaWdyYXRlLCBtYXAgZGlyZWN0bHkgdG8gdGhlIG5ldyBBUEkuXG4gICAgaWYgKCFuZWVkc01pZ3JhdGlvbikge1xuICAgICAgcmV0dXJuIFJlYWN0Q2hpbGRyZW4ubWFwKHRoaXMucHJvcHMuY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuXG4gICAgICAgIGlmICghY2hpbGQpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGlsZC50eXBlLl9fVGFibGVDb2x1bW5fXykge1xuICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KENvbHVtbiwgY2hpbGQucHJvcHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNoaWxkLnR5cGUuX19UYWJsZUNvbHVtbkdyb3VwX18pIHtcbiAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDb2x1bW5Hcm91cCwgY2hpbGQucHJvcHMpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgdGFibGVQcm9wcyA9IHRoaXMucHJvcHM7XG5cbiAgICAvLyBPdGhlcndpc2UsIGlmIGEgbWlncmF0aW9uIGlzIG5lZWRlZCwgd2UgbmVlZCB0byB0cmFuc2Zvcm0gZWFjaCBDb2x1bW5cbiAgICAvLyBvciBDb2x1bW5Hcm91cC5cbiAgICB2YXIgaSA9IDA7XG4gICAgcmV0dXJuIFJlYWN0Q2hpbGRyZW4ubWFwKHRoaXMucHJvcHMuY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuXG4gICAgICBpZiAoIWNoaWxkKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2hpbGQudHlwZS5fX1RhYmxlQ29sdW1uX18pIHtcbiAgICAgICAgY2hpbGQgPSBfdGhpczIuX3RyYW5zZm9ybUNvbHVtbihjaGlsZCwgdGFibGVQcm9wcywgaSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjaGlsZC50eXBlLl9fVGFibGVDb2x1bW5Hcm91cF9fKSB7XG4gICAgICAgIC8vIFNpbmNlIHdlIGFwcGFyZW50bHkgZ2l2ZSBhbiBhcnJheSBvZiBsYWJlbHMgdG8gZ3JvdXBIZWFkZXJSZW5kZXJlclxuICAgICAgICB2YXIgbGFiZWxzID0gW107XG4gICAgICAgIFJlYWN0Q2hpbGRyZW4uZm9yRWFjaChfdGhpczIucHJvcHMuY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgIGxhYmVscy5wdXNoKGNoaWxkLnByb3BzLmxhYmVsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY2hpbGQgPSBfdGhpczIuX3RyYW5zZm9ybUNvbHVtbkdyb3VwKGNoaWxkLCB0YWJsZVByb3BzLCBpLCBsYWJlbHMpO1xuICAgICAgfVxuXG4gICAgICBpKys7XG4gICAgICByZXR1cm4gY2hpbGQ7XG4gICAgfSk7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgIFRhYmxlLFxuICAgICAgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICAgIG9uUm93TW91c2VEb3duOiB0aGlzLl9vblJvd0FjdGlvbihwcm9wcywgcHJvcHMub25Sb3dNb3VzZURvd24pLFxuICAgICAgICBvblJvd0NsaWNrOiB0aGlzLl9vblJvd0FjdGlvbihwcm9wcywgcHJvcHMub25Sb3dDbGljayksXG4gICAgICAgIG9uUm93RG91YmxlQ2xpY2s6IHRoaXMuX29uUm93QWN0aW9uKHByb3BzLCBwcm9wcy5vblJvd0RvdWJsZUNsaWNrKSxcbiAgICAgICAgb25Sb3dNb3VzZUVudGVyOiB0aGlzLl9vblJvd0FjdGlvbihwcm9wcywgcHJvcHMub25Sb3dNb3VzZUVudGVyKSxcbiAgICAgICAgb25Sb3dNb3VzZUxlYXZlOiB0aGlzLl9vblJvd0FjdGlvbihwcm9wcywgcHJvcHMub25Sb3dNb3VzZUxlYXZlKVxuICAgICAgfSksXG4gICAgICB0aGlzLl9jb252ZXJ0ZWRDb2x1bW5zKHRoaXMuc3RhdGUubmVlZHNNaWdyYXRpb24pXG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gVHJhbnNpdGlvblRhYmxlO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvRml4ZWREYXRhVGFibGUucmVhY3QuanNcbiAqKiBtb2R1bGUgaWQgPSA0MzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIFJlYWN0XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9SZWFjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDQzMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgRml4ZWREYXRhVGFibGVOZXcucmVhY3RcbiAqIEB0eXBlY2hlY2tzXG4gKiBAbm9mbG93XG4gKi9cblxuLyplc2xpbnQgbm8tYml0d2lzZToxKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCcuL1JlYWN0Jyk7XG52YXIgUmVhY3RDb21wb25lbnRXaXRoUHVyZVJlbmRlck1peGluID0gcmVxdWlyZSgnLi9SZWFjdENvbXBvbmVudFdpdGhQdXJlUmVuZGVyTWl4aW4nKTtcbnZhciBSZWFjdFdoZWVsSGFuZGxlciA9IHJlcXVpcmUoJy4vUmVhY3RXaGVlbEhhbmRsZXInKTtcbnZhciBTY3JvbGxiYXIgPSByZXF1aXJlKCcuL1Njcm9sbGJhci5yZWFjdCcpO1xudmFyIEZpeGVkRGF0YVRhYmxlQnVmZmVyZWRSb3dzID0gcmVxdWlyZSgnLi9GaXhlZERhdGFUYWJsZUJ1ZmZlcmVkUm93cy5yZWFjdCcpO1xudmFyIEZpeGVkRGF0YVRhYmxlQ29sdW1uUmVzaXplSGFuZGxlID0gcmVxdWlyZSgnLi9GaXhlZERhdGFUYWJsZUNvbHVtblJlc2l6ZUhhbmRsZS5yZWFjdCcpO1xudmFyIEZpeGVkRGF0YVRhYmxlUm93ID0gcmVxdWlyZSgnLi9GaXhlZERhdGFUYWJsZVJvdy5yZWFjdCcpO1xudmFyIEZpeGVkRGF0YVRhYmxlU2Nyb2xsSGVscGVyID0gcmVxdWlyZSgnLi9GaXhlZERhdGFUYWJsZVNjcm9sbEhlbHBlcicpO1xudmFyIEZpeGVkRGF0YVRhYmxlV2lkdGhIZWxwZXIgPSByZXF1aXJlKCcuL0ZpeGVkRGF0YVRhYmxlV2lkdGhIZWxwZXInKTtcblxudmFyIGN4ID0gcmVxdWlyZSgnLi9jeCcpO1xudmFyIGRlYm91bmNlQ29yZSA9IHJlcXVpcmUoJy4vZGVib3VuY2VDb3JlJyk7XG52YXIgZW1wdHlGdW5jdGlvbiA9IHJlcXVpcmUoJy4vZW1wdHlGdW5jdGlvbicpO1xudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJy4vaW52YXJpYW50Jyk7XG52YXIgam9pbkNsYXNzZXMgPSByZXF1aXJlKCcuL2pvaW5DbGFzc2VzJyk7XG52YXIgc2hhbGxvd0VxdWFsID0gcmVxdWlyZSgnLi9zaGFsbG93RXF1YWwnKTtcbnZhciB0cmFuc2xhdGVET01Qb3NpdGlvblhZID0gcmVxdWlyZSgnLi90cmFuc2xhdGVET01Qb3NpdGlvblhZJyk7XG5cbnZhciBQcm9wVHlwZXMgPSBSZWFjdC5Qcm9wVHlwZXM7XG5cbnZhciBSZWFjdENoaWxkcmVuID0gUmVhY3QuQ2hpbGRyZW47XG5cbnZhciBFTVBUWV9PQkpFQ1QgPSB7fTtcbnZhciBCT1JERVJfSEVJR0hUID0gMTtcbnZhciBIRUFERVIgPSAnaGVhZGVyJztcbnZhciBGT09URVIgPSAnZm9vdGVyJztcbnZhciBDRUxMID0gJ2NlbGwnO1xuXG4vKipcbiAqIERhdGEgZ3JpZCBjb21wb25lbnQgd2l0aCBmaXhlZCBvciBzY3JvbGxhYmxlIGhlYWRlciBhbmQgY29sdW1ucy5cbiAqXG4gKiBUaGUgbGF5b3V0IG9mIHRoZSBkYXRhIHRhYmxlIGlzIGFzIGZvbGxvd3M6XG4gKlxuICogYGBgXG4gKiArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tK1xuICogfCBGaXhlZCBDb2x1bW4gR3JvdXAgICAgfCBTY3JvbGxhYmxlIENvbHVtbiBHcm91cCAgIHxcbiAqIHwgSGVhZGVyICAgICAgICAgICAgICAgIHwgSGVhZGVyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLStcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8IEZpeGVkIEhlYWRlciBDb2x1bW5zICB8IFNjcm9sbGFibGUgSGVhZGVyIENvbHVtbnMgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCBGaXhlZCBCb2R5IENvbHVtbnMgICAgfCBTY3JvbGxhYmxlIEJvZHkgQ29sdW1ucyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tK1xuICogfCAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgRml4ZWQgRm9vdGVyIENvbHVtbnMgIHwgU2Nyb2xsYWJsZSBGb290ZXIgQ29sdW1ucyB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLStcbiAqIGBgYFxuICpcbiAqIC0gRml4ZWQgQ29sdW1uIEdyb3VwIEhlYWRlcjogVGhlc2UgYXJlIHRoZSBoZWFkZXJzIGZvciBhIGdyb3VwXG4gKiAgIG9mIGNvbHVtbnMgaWYgaW5jbHVkZWQgaW4gdGhlIHRhYmxlIHRoYXQgZG8gbm90IHNjcm9sbFxuICogICB2ZXJ0aWNhbGx5IG9yIGhvcml6b250YWxseS5cbiAqXG4gKiAtIFNjcm9sbGFibGUgQ29sdW1uIEdyb3VwIEhlYWRlcjogVGhlIGhlYWRlciBmb3IgYSBncm91cCBvZiBjb2x1bW5zXG4gKiAgIHRoYXQgZG8gbm90IG1vdmUgd2hpbGUgc2Nyb2xsaW5nIHZlcnRpY2FsbHksIGJ1dCBtb3ZlIGhvcml6b250YWxseVxuICogICB3aXRoIHRoZSBob3Jpem9udGFsIHNjcm9sbGluZy5cbiAqXG4gKiAtIEZpeGVkIEhlYWRlciBDb2x1bW5zOiBUaGUgaGVhZGVyIGNvbHVtbnMgdGhhdCBkbyBub3QgbW92ZSB3aGlsZSBzY3JvbGxpbmdcbiAqICAgdmVydGljYWxseSBvciBob3Jpem9udGFsbHkuXG4gKlxuICogLSBTY3JvbGxhYmxlIEhlYWRlciBDb2x1bW5zOiBUaGUgaGVhZGVyIGNvbHVtbnMgdGhhdCBkbyBub3QgbW92ZVxuICogICB3aGlsZSBzY3JvbGxpbmcgdmVydGljYWxseSwgYnV0IG1vdmUgaG9yaXpvbnRhbGx5IHdpdGggdGhlIGhvcml6b250YWxcbiAqICAgc2Nyb2xsaW5nLlxuICpcbiAqIC0gRml4ZWQgQm9keSBDb2x1bW5zOiBUaGUgYm9keSBjb2x1bW5zIHRoYXQgZG8gbm90IG1vdmUgd2hpbGUgc2Nyb2xsaW5nXG4gKiAgIGhvcml6b250YWxseSwgYnV0IG1vdmUgdmVydGljYWxseSB3aXRoIHRoZSB2ZXJ0aWNhbCBzY3JvbGxpbmcuXG4gKlxuICogLSBTY3JvbGxhYmxlIEJvZHkgQ29sdW1uczogVGhlIGJvZHkgY29sdW1ucyB0aGF0IG1vdmUgd2hpbGUgc2Nyb2xsaW5nXG4gKiAgIHZlcnRpY2FsbHkgb3IgaG9yaXpvbnRhbGx5LlxuICovXG52YXIgRml4ZWREYXRhVGFibGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnRml4ZWREYXRhVGFibGUnLFxuXG4gIHByb3BUeXBlczoge1xuXG4gICAgLyoqXG4gICAgICogUGl4ZWwgd2lkdGggb2YgdGFibGUuIElmIGFsbCBjb2x1bW5zIGRvIG5vdCBmaXQsXG4gICAgICogYSBob3Jpem9udGFsIHNjcm9sbGJhciB3aWxsIGFwcGVhci5cbiAgICAgKi9cbiAgICB3aWR0aDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogUGl4ZWwgaGVpZ2h0IG9mIHRhYmxlLiBJZiBhbGwgcm93cyBkbyBub3QgZml0LFxuICAgICAqIGEgdmVydGljYWwgc2Nyb2xsYmFyIHdpbGwgYXBwZWFyLlxuICAgICAqXG4gICAgICogRWl0aGVyIGBoZWlnaHRgIG9yIGBtYXhIZWlnaHRgIG11c3QgYmUgc3BlY2lmaWVkLlxuICAgICAqL1xuICAgIGhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKlxuICAgICAqIE1heGltdW0gcGl4ZWwgaGVpZ2h0IG9mIHRhYmxlLiBJZiBhbGwgcm93cyBkbyBub3QgZml0LFxuICAgICAqIGEgdmVydGljYWwgc2Nyb2xsYmFyIHdpbGwgYXBwZWFyLlxuICAgICAqXG4gICAgICogRWl0aGVyIGBoZWlnaHRgIG9yIGBtYXhIZWlnaHRgIG11c3QgYmUgc3BlY2lmaWVkLlxuICAgICAqL1xuICAgIG1heEhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKlxuICAgICAqIFBpeGVsIGhlaWdodCBvZiB0YWJsZSdzIG93bmVyLCB0aGlzIGlzIHVzZWQgaW4gYSBtYW5hZ2VkIHNjcm9sbGluZ1xuICAgICAqIHNpdHVhdGlvbiB3aGVuIHlvdSB3YW50IHRvIHNsaWRlIHRoZSB0YWJsZSB1cCBmcm9tIGJlbG93IHRoZSBmb2xkXG4gICAgICogd2l0aG91dCBoYXZpbmcgdG8gY29uc3RhbnRseSB1cGRhdGUgdGhlIGhlaWdodCBvbiBldmVyeSBzY3JvbGwgdGljay5cbiAgICAgKiBJbnN0ZWFkLCB2YXJ5IHRoaXMgcHJvcGVydHkgb24gc2Nyb2xsLiBCeSB1c2luZyBgb3duZXJIZWlnaHRgLCB3ZVxuICAgICAqIG92ZXItcmVuZGVyIHRoZSB0YWJsZSB3aGlsZSBtYWtpbmcgc3VyZSB0aGUgZm9vdGVyIGFuZCBob3Jpem9udGFsXG4gICAgICogc2Nyb2xsYmFyIG9mIHRoZSB0YWJsZSBhcmUgdmlzaWJsZSB3aGVuIHRoZSBjdXJyZW50IHNwYWNlIGZvciB0aGUgdGFibGVcbiAgICAgKiBpbiB2aWV3IGlzIHNtYWxsZXIgdGhhbiB0aGUgZmluYWwsIG92ZXItZmxvd2luZyBoZWlnaHQgb2YgdGFibGUuIEl0XG4gICAgICogYWxsb3dzIHVzIHRvIGF2b2lkIHJlc2l6aW5nIGFuZCByZWZsb3dpbmcgdGFibGUgd2hlbiBpdCBpcyBtb3ZpbmcgaW4gdGhlXG4gICAgICogdmlldy5cbiAgICAgKlxuICAgICAqIFRoaXMgaXMgdXNlZCBpZiBgb3duZXJIZWlnaHQgPCBoZWlnaHRgIChvciBgbWF4SGVpZ2h0YCkuXG4gICAgICovXG4gICAgb3duZXJIZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICBvdmVyZmxvd1g6IFByb3BUeXBlcy5vbmVPZihbJ2hpZGRlbicsICdhdXRvJ10pLFxuICAgIG92ZXJmbG93WTogUHJvcFR5cGVzLm9uZU9mKFsnaGlkZGVuJywgJ2F1dG8nXSksXG5cbiAgICAvKipcbiAgICAgKiBOdW1iZXIgb2Ygcm93cyBpbiB0aGUgdGFibGUuXG4gICAgICovXG4gICAgcm93c0NvdW50OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBQaXhlbCBoZWlnaHQgb2Ygcm93cyB1bmxlc3MgYHJvd0hlaWdodEdldHRlcmAgaXMgc3BlY2lmaWVkIGFuZCByZXR1cm5zXG4gICAgICogZGlmZmVyZW50IHZhbHVlLlxuICAgICAqL1xuICAgIHJvd0hlaWdodDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogSWYgc3BlY2lmaWVkLCBgcm93SGVpZ2h0R2V0dGVyKGluZGV4KWAgaXMgY2FsbGVkIGZvciBlYWNoIHJvdyBhbmQgdGhlXG4gICAgICogcmV0dXJuZWQgdmFsdWUgb3ZlcnJpZGVzIGByb3dIZWlnaHRgIGZvciBwYXJ0aWN1bGFyIHJvdy5cbiAgICAgKi9cbiAgICByb3dIZWlnaHRHZXR0ZXI6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogVG8gZ2V0IGFueSBhZGRpdGlvbmFsIENTUyBjbGFzc2VzIHRoYXQgc2hvdWxkIGJlIGFkZGVkIHRvIGEgcm93LFxuICAgICAqIGByb3dDbGFzc05hbWVHZXR0ZXIoaW5kZXgpYCBpcyBjYWxsZWQuXG4gICAgICovXG4gICAgcm93Q2xhc3NOYW1lR2V0dGVyOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIFBpeGVsIGhlaWdodCBvZiB0aGUgY29sdW1uIGdyb3VwIGhlYWRlci5cbiAgICAgKi9cbiAgICBncm91cEhlYWRlckhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKlxuICAgICAqIFBpeGVsIGhlaWdodCBvZiBoZWFkZXIuXG4gICAgICovXG4gICAgaGVhZGVySGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBQaXhlbCBoZWlnaHQgb2YgZm9vdGVyLlxuICAgICAqL1xuICAgIGZvb3RlckhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKlxuICAgICAqIFZhbHVlIG9mIGhvcml6b250YWwgc2Nyb2xsLlxuICAgICAqL1xuICAgIHNjcm9sbExlZnQ6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvKipcbiAgICAgKiBJbmRleCBvZiBjb2x1bW4gdG8gc2Nyb2xsIHRvLlxuICAgICAqL1xuICAgIHNjcm9sbFRvQ29sdW1uOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLyoqXG4gICAgICogVmFsdWUgb2YgdmVydGljYWwgc2Nyb2xsLlxuICAgICAqL1xuICAgIHNjcm9sbFRvcDogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKlxuICAgICAqIEluZGV4IG9mIHJvdyB0byBzY3JvbGwgdG8uXG4gICAgICovXG4gICAgc2Nyb2xsVG9Sb3c6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIHNjcm9sbGluZyBzdGFydHMgd2l0aCBjdXJyZW50IGhvcml6b250YWxcbiAgICAgKiBhbmQgdmVydGljYWwgc2Nyb2xsIHZhbHVlcy5cbiAgICAgKi9cbiAgICBvblNjcm9sbFN0YXJ0OiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gc2Nyb2xsaW5nIGVuZHMgb3Igc3RvcHMgd2l0aCBuZXcgaG9yaXpvbnRhbFxuICAgICAqIGFuZCB2ZXJ0aWNhbCBzY3JvbGwgdmFsdWVzLlxuICAgICAqL1xuICAgIG9uU2Nyb2xsRW5kOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gYHJvd0hlaWdodEdldHRlcmAgcmV0dXJucyBhIGRpZmZlcmVudCBoZWlnaHRcbiAgICAgKiBmb3IgYSByb3cgdGhhbiB0aGUgYHJvd0hlaWdodGAgcHJvcC4gVGhpcyBpcyBuZWNlc3NhcnkgYmVjYXVzZSBpbml0aWFsbHlcbiAgICAgKiB0YWJsZSBlc3RpbWF0ZXMgaGVpZ2h0cyBvZiBzb21lIHBhcnRzIG9mIHRoZSBjb250ZW50LlxuICAgICAqL1xuICAgIG9uQ29udGVudEhlaWdodENoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIGEgcm93IGlzIGNsaWNrZWQuXG4gICAgICovXG4gICAgb25Sb3dDbGljazogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIGEgcm93IGlzIGRvdWJsZSBjbGlja2VkLlxuICAgICAqL1xuICAgIG9uUm93RG91YmxlQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBhIG1vdXNlLWRvd24gZXZlbnQgaGFwcGVucyBvbiBhIHJvdy5cbiAgICAgKi9cbiAgICBvblJvd01vdXNlRG93bjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIGEgbW91c2UtZW50ZXIgZXZlbnQgaGFwcGVucyBvbiBhIHJvdy5cbiAgICAgKi9cbiAgICBvblJvd01vdXNlRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBhIG1vdXNlLWxlYXZlIGV2ZW50IGhhcHBlbnMgb24gYSByb3cuXG4gICAgICovXG4gICAgb25Sb3dNb3VzZUxlYXZlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gcmVzaXplciBoYXMgYmVlbiByZWxlYXNlZFxuICAgICAqIGFuZCBjb2x1bW4gbmVlZHMgdG8gYmUgdXBkYXRlZC5cbiAgICAgKlxuICAgICAqIFJlcXVpcmVkIGlmIHRoZSBpc1Jlc2l6YWJsZSBwcm9wZXJ0eSBpcyB0cnVlIG9uIGFueSBjb2x1bW4uXG4gICAgICpcbiAgICAgKiBgYGBcbiAgICAgKiBmdW5jdGlvbihcbiAgICAgKiAgIG5ld0NvbHVtbldpZHRoOiBudW1iZXIsXG4gICAgICogICBjb2x1bW5LZXk6IHN0cmluZyxcbiAgICAgKiApXG4gICAgICogYGBgXG4gICAgICovXG4gICAgb25Db2x1bW5SZXNpemVFbmRDYWxsYmFjazogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIGEgY29sdW1uIGlzIGN1cnJlbnRseSBiZWluZyByZXNpemVkLlxuICAgICAqL1xuICAgIGlzQ29sdW1uUmVzaXppbmc6IFByb3BUeXBlcy5ib29sXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSAvKm9iamVjdCove1xuICAgIHJldHVybiB7XG4gICAgICBmb290ZXJIZWlnaHQ6IDAsXG4gICAgICBncm91cEhlYWRlckhlaWdodDogMCxcbiAgICAgIGhlYWRlckhlaWdodDogMCxcbiAgICAgIHNjcm9sbExlZnQ6IDAsXG4gICAgICBzY3JvbGxUb3A6IDBcbiAgICB9O1xuICB9LFxuXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkgLypvYmplY3QqL3tcbiAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciB2aWV3cG9ydEhlaWdodCA9IChwcm9wcy5oZWlnaHQgPT09IHVuZGVmaW5lZCA/IHByb3BzLm1heEhlaWdodCA6IHByb3BzLmhlaWdodCkgLSAocHJvcHMuaGVhZGVySGVpZ2h0IHx8IDApIC0gKHByb3BzLmZvb3RlckhlaWdodCB8fCAwKSAtIChwcm9wcy5ncm91cEhlYWRlckhlaWdodCB8fCAwKTtcbiAgICB0aGlzLl9zY3JvbGxIZWxwZXIgPSBuZXcgRml4ZWREYXRhVGFibGVTY3JvbGxIZWxwZXIocHJvcHMucm93c0NvdW50LCBwcm9wcy5yb3dIZWlnaHQsIHZpZXdwb3J0SGVpZ2h0LCBwcm9wcy5yb3dIZWlnaHRHZXR0ZXIpO1xuICAgIGlmIChwcm9wcy5zY3JvbGxUb3ApIHtcbiAgICAgIHRoaXMuX3Njcm9sbEhlbHBlci5zY3JvbGxUbyhwcm9wcy5zY3JvbGxUb3ApO1xuICAgIH1cbiAgICB0aGlzLl9kaWRTY3JvbGxTdG9wID0gZGVib3VuY2VDb3JlKHRoaXMuX2RpZFNjcm9sbFN0b3AsIDIwMCwgdGhpcyk7XG5cbiAgICByZXR1cm4gdGhpcy5fY2FsY3VsYXRlU3RhdGUodGhpcy5wcm9wcyk7XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdmFyIHNjcm9sbFRvUm93ID0gdGhpcy5wcm9wcy5zY3JvbGxUb1JvdztcbiAgICBpZiAoc2Nyb2xsVG9Sb3cgIT09IHVuZGVmaW5lZCAmJiBzY3JvbGxUb1JvdyAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fcm93VG9TY3JvbGxUbyA9IHNjcm9sbFRvUm93O1xuICAgIH1cbiAgICB2YXIgc2Nyb2xsVG9Db2x1bW4gPSB0aGlzLnByb3BzLnNjcm9sbFRvQ29sdW1uO1xuICAgIGlmIChzY3JvbGxUb0NvbHVtbiAhPT0gdW5kZWZpbmVkICYmIHNjcm9sbFRvQ29sdW1uICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9jb2x1bW5Ub1Njcm9sbFRvID0gc2Nyb2xsVG9Db2x1bW47XG4gICAgfVxuICAgIHRoaXMuX3doZWVsSGFuZGxlciA9IG5ldyBSZWFjdFdoZWVsSGFuZGxlcih0aGlzLl9vbldoZWVsLCB0aGlzLl9zaG91bGRIYW5kbGVXaGVlbFgsIHRoaXMuX3Nob3VsZEhhbmRsZVdoZWVsWSk7XG4gIH0sXG5cbiAgX3Nob3VsZEhhbmRsZVdoZWVsWDogZnVuY3Rpb24gX3Nob3VsZEhhbmRsZVdoZWVsWCggLypudW1iZXIqL2RlbHRhKSAvKmJvb2xlYW4qL3tcbiAgICBpZiAodGhpcy5wcm9wcy5vdmVyZmxvd1ggPT09ICdoaWRkZW4nKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZGVsdGEgPSBNYXRoLnJvdW5kKGRlbHRhKTtcbiAgICBpZiAoZGVsdGEgPT09IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVsdGEgPCAwICYmIHRoaXMuc3RhdGUuc2Nyb2xsWCA+IDAgfHwgZGVsdGEgPj0gMCAmJiB0aGlzLnN0YXRlLnNjcm9sbFggPCB0aGlzLnN0YXRlLm1heFNjcm9sbFg7XG4gIH0sXG5cbiAgX3Nob3VsZEhhbmRsZVdoZWVsWTogZnVuY3Rpb24gX3Nob3VsZEhhbmRsZVdoZWVsWSggLypudW1iZXIqL2RlbHRhKSAvKmJvb2xlYW4qL3tcbiAgICBpZiAodGhpcy5wcm9wcy5vdmVyZmxvd1kgPT09ICdoaWRkZW4nIHx8IGRlbHRhID09PSAwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZGVsdGEgPSBNYXRoLnJvdW5kKGRlbHRhKTtcbiAgICBpZiAoZGVsdGEgPT09IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVsdGEgPCAwICYmIHRoaXMuc3RhdGUuc2Nyb2xsWSA+IDAgfHwgZGVsdGEgPj0gMCAmJiB0aGlzLnN0YXRlLnNjcm9sbFkgPCB0aGlzLnN0YXRlLm1heFNjcm9sbFk7XG4gIH0sXG5cbiAgX3JlcG9ydENvbnRlbnRIZWlnaHQ6IGZ1bmN0aW9uIF9yZXBvcnRDb250ZW50SGVpZ2h0KCkge1xuICAgIHZhciBzY3JvbGxDb250ZW50SGVpZ2h0ID0gdGhpcy5zdGF0ZS5zY3JvbGxDb250ZW50SGVpZ2h0O1xuICAgIHZhciByZXNlcnZlZEhlaWdodCA9IHRoaXMuc3RhdGUucmVzZXJ2ZWRIZWlnaHQ7XG4gICAgdmFyIHJlcXVpcmVkSGVpZ2h0ID0gc2Nyb2xsQ29udGVudEhlaWdodCArIHJlc2VydmVkSGVpZ2h0O1xuICAgIHZhciBjb250ZW50SGVpZ2h0O1xuICAgIHZhciB1c2VNYXhIZWlnaHQgPSB0aGlzLnByb3BzLmhlaWdodCA9PT0gdW5kZWZpbmVkO1xuICAgIGlmICh1c2VNYXhIZWlnaHQgJiYgdGhpcy5wcm9wcy5tYXhIZWlnaHQgPiByZXF1aXJlZEhlaWdodCkge1xuICAgICAgY29udGVudEhlaWdodCA9IHJlcXVpcmVkSGVpZ2h0O1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5oZWlnaHQgPiByZXF1aXJlZEhlaWdodCAmJiB0aGlzLnByb3BzLm93bmVySGVpZ2h0KSB7XG4gICAgICBjb250ZW50SGVpZ2h0ID0gTWF0aC5tYXgocmVxdWlyZWRIZWlnaHQsIHRoaXMucHJvcHMub3duZXJIZWlnaHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZW50SGVpZ2h0ID0gdGhpcy5zdGF0ZS5oZWlnaHQgKyB0aGlzLnN0YXRlLm1heFNjcm9sbFk7XG4gICAgfVxuICAgIGlmIChjb250ZW50SGVpZ2h0ICE9PSB0aGlzLl9jb250ZW50SGVpZ2h0ICYmIHRoaXMucHJvcHMub25Db250ZW50SGVpZ2h0Q2hhbmdlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ29udGVudEhlaWdodENoYW5nZShjb250ZW50SGVpZ2h0KTtcbiAgICB9XG4gICAgdGhpcy5fY29udGVudEhlaWdodCA9IGNvbnRlbnRIZWlnaHQ7XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuX3JlcG9ydENvbnRlbnRIZWlnaHQoKTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKCAvKm9iamVjdCovbmV4dFByb3BzKSB7XG4gICAgdmFyIHNjcm9sbFRvUm93ID0gbmV4dFByb3BzLnNjcm9sbFRvUm93O1xuICAgIGlmIChzY3JvbGxUb1JvdyAhPT0gdW5kZWZpbmVkICYmIHNjcm9sbFRvUm93ICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9yb3dUb1Njcm9sbFRvID0gc2Nyb2xsVG9Sb3c7XG4gICAgfVxuICAgIHZhciBzY3JvbGxUb0NvbHVtbiA9IG5leHRQcm9wcy5zY3JvbGxUb0NvbHVtbjtcbiAgICBpZiAoc2Nyb2xsVG9Db2x1bW4gIT09IHVuZGVmaW5lZCAmJiBzY3JvbGxUb0NvbHVtbiAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fY29sdW1uVG9TY3JvbGxUbyA9IHNjcm9sbFRvQ29sdW1uO1xuICAgIH1cblxuICAgIHZhciBuZXdPdmVyZmxvd1ggPSBuZXh0UHJvcHMub3ZlcmZsb3dYO1xuICAgIHZhciBuZXdPdmVyZmxvd1kgPSBuZXh0UHJvcHMub3ZlcmZsb3dZO1xuICAgIGlmIChuZXdPdmVyZmxvd1ggIT09IHRoaXMucHJvcHMub3ZlcmZsb3dYIHx8IG5ld092ZXJmbG93WSAhPT0gdGhpcy5wcm9wcy5vdmVyZmxvd1kpIHtcbiAgICAgIHRoaXMuX3doZWVsSGFuZGxlciA9IG5ldyBSZWFjdFdoZWVsSGFuZGxlcih0aGlzLl9vbldoZWVsLCBuZXdPdmVyZmxvd1ggIT09ICdoaWRkZW4nLCAvLyBTaG91bGQgaGFuZGxlIGhvcml6b250YWwgc2Nyb2xsXG4gICAgICBuZXdPdmVyZmxvd1kgIT09ICdoaWRkZW4nIC8vIFNob3VsZCBoYW5kbGUgdmVydGljYWwgc2Nyb2xsXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIEluIHRoZSBjYXNlIG9mIGNvbnRyb2xsZWQgc2Nyb2xsaW5nLCBub3RpZnkuXG4gICAgaWYgKHRoaXMucHJvcHMub3duZXJIZWlnaHQgIT09IG5leHRQcm9wcy5vd25lckhlaWdodCB8fCB0aGlzLnByb3BzLnNjcm9sbFRvcCAhPT0gbmV4dFByb3BzLnNjcm9sbFRvcCkge1xuICAgICAgdGhpcy5fZGlkU2Nyb2xsU3RhcnQoKTtcbiAgICB9XG4gICAgdGhpcy5fZGlkU2Nyb2xsU3RvcCgpO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh0aGlzLl9jYWxjdWxhdGVTdGF0ZShuZXh0UHJvcHMsIHRoaXMuc3RhdGUpKTtcbiAgfSxcblxuICBjb21wb25lbnREaWRVcGRhdGU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICB0aGlzLl9yZXBvcnRDb250ZW50SGVpZ2h0KCk7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSAvKm9iamVjdCove1xuICAgIHZhciBzdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcblxuICAgIHZhciBncm91cEhlYWRlcjtcbiAgICBpZiAoc3RhdGUudXNlR3JvdXBIZWFkZXIpIHtcbiAgICAgIGdyb3VwSGVhZGVyID0gUmVhY3QuY3JlYXRlRWxlbWVudChGaXhlZERhdGFUYWJsZVJvdywge1xuICAgICAgICBrZXk6ICdncm91cF9oZWFkZXInLFxuICAgICAgICBpc1Njcm9sbGluZzogdGhpcy5faXNTY3JvbGxpbmcsXG4gICAgICAgIGNsYXNzTmFtZTogam9pbkNsYXNzZXMoY3goJ2ZpeGVkRGF0YVRhYmxlTGF5b3V0L2hlYWRlcicpLCBjeCgncHVibGljL2ZpeGVkRGF0YVRhYmxlL2hlYWRlcicpKSxcbiAgICAgICAgd2lkdGg6IHN0YXRlLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IHN0YXRlLmdyb3VwSGVhZGVySGVpZ2h0LFxuICAgICAgICBpbmRleDogMCxcbiAgICAgICAgekluZGV4OiAxLFxuICAgICAgICBvZmZzZXRUb3A6IDAsXG4gICAgICAgIHNjcm9sbExlZnQ6IHN0YXRlLnNjcm9sbFgsXG4gICAgICAgIGZpeGVkQ29sdW1uczogc3RhdGUuZ3JvdXBIZWFkZXJGaXhlZENvbHVtbnMsXG4gICAgICAgIHNjcm9sbGFibGVDb2x1bW5zOiBzdGF0ZS5ncm91cEhlYWRlclNjcm9sbGFibGVDb2x1bW5zLFxuICAgICAgICBvbkNvbHVtblJlc2l6ZTogdGhpcy5fb25Db2x1bW5SZXNpemVcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBtYXhTY3JvbGxZID0gdGhpcy5zdGF0ZS5tYXhTY3JvbGxZO1xuICAgIHZhciBzaG93U2Nyb2xsYmFyWCA9IHN0YXRlLm1heFNjcm9sbFggPiAwICYmIHN0YXRlLm92ZXJmbG93WCAhPT0gJ2hpZGRlbic7XG4gICAgdmFyIHNob3dTY3JvbGxiYXJZID0gbWF4U2Nyb2xsWSA+IDAgJiYgc3RhdGUub3ZlcmZsb3dZICE9PSAnaGlkZGVuJztcbiAgICB2YXIgc2Nyb2xsYmFyWEhlaWdodCA9IHNob3dTY3JvbGxiYXJYID8gU2Nyb2xsYmFyLlNJWkUgOiAwO1xuICAgIHZhciBzY3JvbGxiYXJZSGVpZ2h0ID0gc3RhdGUuaGVpZ2h0IC0gc2Nyb2xsYmFyWEhlaWdodCAtIDIgKiBCT1JERVJfSEVJR0hUIC0gc3RhdGUuZm9vdGVySGVpZ2h0O1xuXG4gICAgdmFyIGhlYWRlck9mZnNldFRvcCA9IHN0YXRlLnVzZUdyb3VwSGVhZGVyID8gc3RhdGUuZ3JvdXBIZWFkZXJIZWlnaHQgOiAwO1xuICAgIHZhciBib2R5T2Zmc2V0VG9wID0gaGVhZGVyT2Zmc2V0VG9wICsgc3RhdGUuaGVhZGVySGVpZ2h0O1xuICAgIHNjcm9sbGJhcllIZWlnaHQgLT0gYm9keU9mZnNldFRvcDtcbiAgICB2YXIgYm90dG9tU2VjdGlvbk9mZnNldCA9IDA7XG4gICAgdmFyIGZvb3RPZmZzZXRUb3AgPSBwcm9wcy5tYXhIZWlnaHQgIT0gbnVsbCA/IGJvZHlPZmZzZXRUb3AgKyBzdGF0ZS5ib2R5SGVpZ2h0IDogYm9keU9mZnNldFRvcCArIHNjcm9sbGJhcllIZWlnaHQ7XG4gICAgdmFyIHJvd3NDb250YWluZXJIZWlnaHQgPSBmb290T2Zmc2V0VG9wICsgc3RhdGUuZm9vdGVySGVpZ2h0O1xuXG4gICAgaWYgKHByb3BzLm93bmVySGVpZ2h0ICE9PSB1bmRlZmluZWQgJiYgcHJvcHMub3duZXJIZWlnaHQgPCBzdGF0ZS5oZWlnaHQpIHtcbiAgICAgIGJvdHRvbVNlY3Rpb25PZmZzZXQgPSBwcm9wcy5vd25lckhlaWdodCAtIHN0YXRlLmhlaWdodDtcblxuICAgICAgZm9vdE9mZnNldFRvcCA9IE1hdGgubWluKGZvb3RPZmZzZXRUb3AsIHByb3BzLm93bmVySGVpZ2h0IC0gc3RhdGUuZm9vdGVySGVpZ2h0IC0gc2Nyb2xsYmFyWEhlaWdodCk7XG5cbiAgICAgIHNjcm9sbGJhcllIZWlnaHQgPSBNYXRoLm1heCgwLCBmb290T2Zmc2V0VG9wIC0gYm9keU9mZnNldFRvcCk7XG4gICAgfVxuXG4gICAgdmFyIHZlcnRpY2FsU2Nyb2xsYmFyO1xuICAgIGlmIChzaG93U2Nyb2xsYmFyWSkge1xuICAgICAgdmVydGljYWxTY3JvbGxiYXIgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFNjcm9sbGJhciwge1xuICAgICAgICBzaXplOiBzY3JvbGxiYXJZSGVpZ2h0LFxuICAgICAgICBjb250ZW50U2l6ZTogc2Nyb2xsYmFyWUhlaWdodCArIG1heFNjcm9sbFksXG4gICAgICAgIG9uU2Nyb2xsOiB0aGlzLl9vblZlcnRpY2FsU2Nyb2xsLFxuICAgICAgICB2ZXJ0aWNhbFRvcDogYm9keU9mZnNldFRvcCxcbiAgICAgICAgcG9zaXRpb246IHN0YXRlLnNjcm9sbFlcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBob3Jpem9udGFsU2Nyb2xsYmFyO1xuICAgIGlmIChzaG93U2Nyb2xsYmFyWCkge1xuICAgICAgdmFyIHNjcm9sbGJhclhXaWR0aCA9IHN0YXRlLndpZHRoO1xuICAgICAgaG9yaXpvbnRhbFNjcm9sbGJhciA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoSG9yaXpvbnRhbFNjcm9sbGJhciwge1xuICAgICAgICBjb250ZW50U2l6ZTogc2Nyb2xsYmFyWFdpZHRoICsgc3RhdGUubWF4U2Nyb2xsWCxcbiAgICAgICAgb2Zmc2V0OiBib3R0b21TZWN0aW9uT2Zmc2V0LFxuICAgICAgICBvblNjcm9sbDogdGhpcy5fb25Ib3Jpem9udGFsU2Nyb2xsLFxuICAgICAgICBwb3NpdGlvbjogc3RhdGUuc2Nyb2xsWCxcbiAgICAgICAgc2l6ZTogc2Nyb2xsYmFyWFdpZHRoXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgZHJhZ0tub2IgPSBSZWFjdC5jcmVhdGVFbGVtZW50KEZpeGVkRGF0YVRhYmxlQ29sdW1uUmVzaXplSGFuZGxlLCB7XG4gICAgICBoZWlnaHQ6IHN0YXRlLmhlaWdodCxcbiAgICAgIGluaXRpYWxXaWR0aDogc3RhdGUuY29sdW1uUmVzaXppbmdEYXRhLndpZHRoIHx8IDAsXG4gICAgICBtaW5XaWR0aDogc3RhdGUuY29sdW1uUmVzaXppbmdEYXRhLm1pbldpZHRoIHx8IDAsXG4gICAgICBtYXhXaWR0aDogc3RhdGUuY29sdW1uUmVzaXppbmdEYXRhLm1heFdpZHRoIHx8IE51bWJlci5NQVhfVkFMVUUsXG4gICAgICB2aXNpYmxlOiAhIXN0YXRlLmlzQ29sdW1uUmVzaXppbmcsXG4gICAgICBsZWZ0T2Zmc2V0OiBzdGF0ZS5jb2x1bW5SZXNpemluZ0RhdGEubGVmdCB8fCAwLFxuICAgICAga25vYkhlaWdodDogc3RhdGUuaGVhZGVySGVpZ2h0LFxuICAgICAgaW5pdGlhbEV2ZW50OiBzdGF0ZS5jb2x1bW5SZXNpemluZ0RhdGEuaW5pdGlhbEV2ZW50LFxuICAgICAgb25Db2x1bW5SZXNpemVFbmQ6IHByb3BzLm9uQ29sdW1uUmVzaXplRW5kQ2FsbGJhY2ssXG4gICAgICBjb2x1bW5LZXk6IHN0YXRlLmNvbHVtblJlc2l6aW5nRGF0YS5rZXlcbiAgICB9KTtcblxuICAgIHZhciBmb290ZXIgPSBudWxsO1xuICAgIGlmIChzdGF0ZS5mb290ZXJIZWlnaHQpIHtcbiAgICAgIGZvb3RlciA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoRml4ZWREYXRhVGFibGVSb3csIHtcbiAgICAgICAga2V5OiAnZm9vdGVyJyxcbiAgICAgICAgaXNTY3JvbGxpbmc6IHRoaXMuX2lzU2Nyb2xsaW5nLFxuICAgICAgICBjbGFzc05hbWU6IGpvaW5DbGFzc2VzKGN4KCdmaXhlZERhdGFUYWJsZUxheW91dC9mb290ZXInKSwgY3goJ3B1YmxpYy9maXhlZERhdGFUYWJsZS9mb290ZXInKSksXG4gICAgICAgIHdpZHRoOiBzdGF0ZS53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBzdGF0ZS5mb290ZXJIZWlnaHQsXG4gICAgICAgIGluZGV4OiAtMSxcbiAgICAgICAgekluZGV4OiAxLFxuICAgICAgICBvZmZzZXRUb3A6IGZvb3RPZmZzZXRUb3AsXG4gICAgICAgIGZpeGVkQ29sdW1uczogc3RhdGUuZm9vdEZpeGVkQ29sdW1ucyxcbiAgICAgICAgc2Nyb2xsYWJsZUNvbHVtbnM6IHN0YXRlLmZvb3RTY3JvbGxhYmxlQ29sdW1ucyxcbiAgICAgICAgc2Nyb2xsTGVmdDogc3RhdGUuc2Nyb2xsWFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFyIHJvd3MgPSB0aGlzLl9yZW5kZXJSb3dzKGJvZHlPZmZzZXRUb3ApO1xuXG4gICAgdmFyIGhlYWRlciA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoRml4ZWREYXRhVGFibGVSb3csIHtcbiAgICAgIGtleTogJ2hlYWRlcicsXG4gICAgICBpc1Njcm9sbGluZzogdGhpcy5faXNTY3JvbGxpbmcsXG4gICAgICBjbGFzc05hbWU6IGpvaW5DbGFzc2VzKGN4KCdmaXhlZERhdGFUYWJsZUxheW91dC9oZWFkZXInKSwgY3goJ3B1YmxpYy9maXhlZERhdGFUYWJsZS9oZWFkZXInKSksXG4gICAgICB3aWR0aDogc3RhdGUud2lkdGgsXG4gICAgICBoZWlnaHQ6IHN0YXRlLmhlYWRlckhlaWdodCxcbiAgICAgIGluZGV4OiAtMSxcbiAgICAgIHpJbmRleDogMSxcbiAgICAgIG9mZnNldFRvcDogaGVhZGVyT2Zmc2V0VG9wLFxuICAgICAgc2Nyb2xsTGVmdDogc3RhdGUuc2Nyb2xsWCxcbiAgICAgIGZpeGVkQ29sdW1uczogc3RhdGUuaGVhZEZpeGVkQ29sdW1ucyxcbiAgICAgIHNjcm9sbGFibGVDb2x1bW5zOiBzdGF0ZS5oZWFkU2Nyb2xsYWJsZUNvbHVtbnMsXG4gICAgICBvbkNvbHVtblJlc2l6ZTogdGhpcy5fb25Db2x1bW5SZXNpemVcbiAgICB9KTtcblxuICAgIHZhciB0b3BTaGFkb3c7XG4gICAgdmFyIGJvdHRvbVNoYWRvdztcbiAgICBpZiAoc3RhdGUuc2Nyb2xsWSkge1xuICAgICAgdG9wU2hhZG93ID0gUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICBjbGFzc05hbWU6IGpvaW5DbGFzc2VzKGN4KCdmaXhlZERhdGFUYWJsZUxheW91dC90b3BTaGFkb3cnKSwgY3goJ3B1YmxpYy9maXhlZERhdGFUYWJsZS90b3BTaGFkb3cnKSksXG4gICAgICAgIHN0eWxlOiB7IHRvcDogYm9keU9mZnNldFRvcCB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUub3duZXJIZWlnaHQgIT0gbnVsbCAmJiBzdGF0ZS5vd25lckhlaWdodCA8IHN0YXRlLmhlaWdodCAmJiBzdGF0ZS5zY3JvbGxDb250ZW50SGVpZ2h0ICsgc3RhdGUucmVzZXJ2ZWRIZWlnaHQgPiBzdGF0ZS5vd25lckhlaWdodCB8fCBzdGF0ZS5zY3JvbGxZIDwgbWF4U2Nyb2xsWSkge1xuICAgICAgYm90dG9tU2hhZG93ID0gUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICBjbGFzc05hbWU6IGpvaW5DbGFzc2VzKGN4KCdmaXhlZERhdGFUYWJsZUxheW91dC9ib3R0b21TaGFkb3cnKSwgY3goJ3B1YmxpYy9maXhlZERhdGFUYWJsZS9ib3R0b21TaGFkb3cnKSksXG4gICAgICAgIHN0eWxlOiB7IHRvcDogZm9vdE9mZnNldFRvcCB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6IGpvaW5DbGFzc2VzKGN4KCdmaXhlZERhdGFUYWJsZUxheW91dC9tYWluJyksIGN4KCdwdWJsaWMvZml4ZWREYXRhVGFibGUvbWFpbicpKSxcbiAgICAgICAgb25XaGVlbDogdGhpcy5fd2hlZWxIYW5kbGVyLm9uV2hlZWwsXG4gICAgICAgIHN0eWxlOiB7IGhlaWdodDogc3RhdGUuaGVpZ2h0LCB3aWR0aDogc3RhdGUud2lkdGggfSB9LFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzc05hbWU6IGN4KCdmaXhlZERhdGFUYWJsZUxheW91dC9yb3dzQ29udGFpbmVyJyksXG4gICAgICAgICAgc3R5bGU6IHsgaGVpZ2h0OiByb3dzQ29udGFpbmVySGVpZ2h0LCB3aWR0aDogc3RhdGUud2lkdGggfSB9LFxuICAgICAgICBkcmFnS25vYixcbiAgICAgICAgZ3JvdXBIZWFkZXIsXG4gICAgICAgIGhlYWRlcixcbiAgICAgICAgcm93cyxcbiAgICAgICAgZm9vdGVyLFxuICAgICAgICB0b3BTaGFkb3csXG4gICAgICAgIGJvdHRvbVNoYWRvd1xuICAgICAgKSxcbiAgICAgIHZlcnRpY2FsU2Nyb2xsYmFyLFxuICAgICAgaG9yaXpvbnRhbFNjcm9sbGJhclxuICAgICk7XG4gIH0sXG5cbiAgX3JlbmRlclJvd3M6IGZ1bmN0aW9uIF9yZW5kZXJSb3dzKCAvKm51bWJlciovb2Zmc2V0VG9wKSAvKm9iamVjdCove1xuICAgIHZhciBzdGF0ZSA9IHRoaXMuc3RhdGU7XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChGaXhlZERhdGFUYWJsZUJ1ZmZlcmVkUm93cywge1xuICAgICAgaXNTY3JvbGxpbmc6IHRoaXMuX2lzU2Nyb2xsaW5nLFxuICAgICAgZGVmYXVsdFJvd0hlaWdodDogc3RhdGUucm93SGVpZ2h0LFxuICAgICAgZmlyc3RSb3dJbmRleDogc3RhdGUuZmlyc3RSb3dJbmRleCxcbiAgICAgIGZpcnN0Um93T2Zmc2V0OiBzdGF0ZS5maXJzdFJvd09mZnNldCxcbiAgICAgIGZpeGVkQ29sdW1uczogc3RhdGUuYm9keUZpeGVkQ29sdW1ucyxcbiAgICAgIGhlaWdodDogc3RhdGUuYm9keUhlaWdodCxcbiAgICAgIG9mZnNldFRvcDogb2Zmc2V0VG9wLFxuICAgICAgb25Sb3dDbGljazogc3RhdGUub25Sb3dDbGljayxcbiAgICAgIG9uUm93RG91YmxlQ2xpY2s6IHN0YXRlLm9uUm93RG91YmxlQ2xpY2ssXG4gICAgICBvblJvd01vdXNlRG93bjogc3RhdGUub25Sb3dNb3VzZURvd24sXG4gICAgICBvblJvd01vdXNlRW50ZXI6IHN0YXRlLm9uUm93TW91c2VFbnRlcixcbiAgICAgIG9uUm93TW91c2VMZWF2ZTogc3RhdGUub25Sb3dNb3VzZUxlYXZlLFxuICAgICAgcm93Q2xhc3NOYW1lR2V0dGVyOiBzdGF0ZS5yb3dDbGFzc05hbWVHZXR0ZXIsXG4gICAgICByb3dzQ291bnQ6IHN0YXRlLnJvd3NDb3VudCxcbiAgICAgIHJvd0dldHRlcjogc3RhdGUucm93R2V0dGVyLFxuICAgICAgcm93SGVpZ2h0R2V0dGVyOiBzdGF0ZS5yb3dIZWlnaHRHZXR0ZXIsXG4gICAgICBzY3JvbGxMZWZ0OiBzdGF0ZS5zY3JvbGxYLFxuICAgICAgc2Nyb2xsYWJsZUNvbHVtbnM6IHN0YXRlLmJvZHlTY3JvbGxhYmxlQ29sdW1ucyxcbiAgICAgIHNob3dMYXN0Um93Qm9yZGVyOiB0cnVlLFxuICAgICAgd2lkdGg6IHN0YXRlLndpZHRoLFxuICAgICAgcm93UG9zaXRpb25HZXR0ZXI6IHRoaXMuX3Njcm9sbEhlbHBlci5nZXRSb3dQb3NpdGlvblxuICAgIH0pO1xuICB9LFxuXG4gIC8qKlxuICAgKiBUaGlzIGlzIGNhbGxlZCB3aGVuIGEgY2VsbCB0aGF0IGlzIGluIHRoZSBoZWFkZXIgb2YgYSBjb2x1bW4gaGFzIGl0c1xuICAgKiByZXNpemVyIGtub2IgY2xpY2tlZCBvbi4gSXQgZGlzcGxheXMgdGhlIHJlc2l6ZXIgYW5kIHB1dHMgaW4gdGhlIGNvcnJlY3RcbiAgICogbG9jYXRpb24gb24gdGhlIHRhYmxlLlxuICAgKi9cbiAgX29uQ29sdW1uUmVzaXplOiBmdW5jdGlvbiBfb25Db2x1bW5SZXNpemUoXG4gIC8qbnVtYmVyKi9jb21iaW5lZFdpZHRoLFxuICAvKm51bWJlciovbGVmdE9mZnNldCxcbiAgLypudW1iZXIqL2NlbGxXaWR0aCxcbiAgLyo/bnVtYmVyKi9jZWxsTWluV2lkdGgsXG4gIC8qP251bWJlciovY2VsbE1heFdpZHRoLFxuICAvKm51bWJlcnxzdHJpbmcqL2NvbHVtbktleSxcbiAgLypvYmplY3QqL2V2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc0NvbHVtblJlc2l6aW5nOiB0cnVlLFxuICAgICAgY29sdW1uUmVzaXppbmdEYXRhOiB7XG4gICAgICAgIGxlZnQ6IGxlZnRPZmZzZXQgKyBjb21iaW5lZFdpZHRoIC0gY2VsbFdpZHRoLFxuICAgICAgICB3aWR0aDogY2VsbFdpZHRoLFxuICAgICAgICBtaW5XaWR0aDogY2VsbE1pbldpZHRoLFxuICAgICAgICBtYXhXaWR0aDogY2VsbE1heFdpZHRoLFxuICAgICAgICBpbml0aWFsRXZlbnQ6IHtcbiAgICAgICAgICBjbGllbnRYOiBldmVudC5jbGllbnRYLFxuICAgICAgICAgIGNsaWVudFk6IGV2ZW50LmNsaWVudFksXG4gICAgICAgICAgcHJldmVudERlZmF1bHQ6IGVtcHR5RnVuY3Rpb25cbiAgICAgICAgfSxcbiAgICAgICAga2V5OiBjb2x1bW5LZXlcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICBfYXJlQ29sdW1uU2V0dGluZ3NJZGVudGljYWw6IGZ1bmN0aW9uIF9hcmVDb2x1bW5TZXR0aW5nc0lkZW50aWNhbChvbGRDb2x1bW5zLCBuZXdDb2x1bW5zKSB7XG4gICAgaWYgKG9sZENvbHVtbnMubGVuZ3RoICE9PSBuZXdDb2x1bW5zLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgb2xkQ29sdW1ucy5sZW5ndGg7ICsraW5kZXgpIHtcbiAgICAgIGlmICghc2hhbGxvd0VxdWFsKG9sZENvbHVtbnNbaW5kZXhdLnByb3BzLCBuZXdDb2x1bW5zW2luZGV4XS5wcm9wcykpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcblxuICBfcG9wdWxhdGVDb2x1bW5zQW5kQ29sdW1uRGF0YTogZnVuY3Rpb24gX3BvcHVsYXRlQ29sdW1uc0FuZENvbHVtbkRhdGEoY29sdW1ucywgY29sdW1uR3JvdXBzLCBvbGRTdGF0ZSkge1xuICAgIHZhciBjYW5SZXVzZUNvbHVtblNldHRpbmdzID0gZmFsc2U7XG4gICAgdmFyIGNhblJldXNlQ29sdW1uR3JvdXBTZXR0aW5ncyA9IGZhbHNlO1xuXG4gICAgaWYgKG9sZFN0YXRlICYmIG9sZFN0YXRlLmNvbHVtbnMpIHtcbiAgICAgIGNhblJldXNlQ29sdW1uU2V0dGluZ3MgPSB0aGlzLl9hcmVDb2x1bW5TZXR0aW5nc0lkZW50aWNhbChjb2x1bW5zLCBvbGRTdGF0ZS5jb2x1bW5zKTtcbiAgICB9XG4gICAgaWYgKG9sZFN0YXRlICYmIG9sZFN0YXRlLmNvbHVtbkdyb3VwcyAmJiBjb2x1bW5Hcm91cHMpIHtcbiAgICAgIGNhblJldXNlQ29sdW1uR3JvdXBTZXR0aW5ncyA9IHRoaXMuX2FyZUNvbHVtblNldHRpbmdzSWRlbnRpY2FsKGNvbHVtbkdyb3Vwcywgb2xkU3RhdGUuY29sdW1uR3JvdXBzKTtcbiAgICB9XG5cbiAgICB2YXIgY29sdW1uSW5mbyA9IHt9O1xuICAgIGlmIChjYW5SZXVzZUNvbHVtblNldHRpbmdzKSB7XG4gICAgICBjb2x1bW5JbmZvLmJvZHlGaXhlZENvbHVtbnMgPSBvbGRTdGF0ZS5ib2R5Rml4ZWRDb2x1bW5zO1xuICAgICAgY29sdW1uSW5mby5ib2R5U2Nyb2xsYWJsZUNvbHVtbnMgPSBvbGRTdGF0ZS5ib2R5U2Nyb2xsYWJsZUNvbHVtbnM7XG4gICAgICBjb2x1bW5JbmZvLmhlYWRGaXhlZENvbHVtbnMgPSBvbGRTdGF0ZS5oZWFkRml4ZWRDb2x1bW5zO1xuICAgICAgY29sdW1uSW5mby5oZWFkU2Nyb2xsYWJsZUNvbHVtbnMgPSBvbGRTdGF0ZS5oZWFkU2Nyb2xsYWJsZUNvbHVtbnM7XG4gICAgICBjb2x1bW5JbmZvLmZvb3RGaXhlZENvbHVtbnMgPSBvbGRTdGF0ZS5mb290Rml4ZWRDb2x1bW5zO1xuICAgICAgY29sdW1uSW5mby5mb290U2Nyb2xsYWJsZUNvbHVtbnMgPSBvbGRTdGF0ZS5mb290U2Nyb2xsYWJsZUNvbHVtbnM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBib2R5Q29sdW1uVHlwZXMgPSB0aGlzLl9zcGxpdENvbHVtblR5cGVzKGNvbHVtbnMpO1xuICAgICAgY29sdW1uSW5mby5ib2R5Rml4ZWRDb2x1bW5zID0gYm9keUNvbHVtblR5cGVzLmZpeGVkO1xuICAgICAgY29sdW1uSW5mby5ib2R5U2Nyb2xsYWJsZUNvbHVtbnMgPSBib2R5Q29sdW1uVHlwZXMuc2Nyb2xsYWJsZTtcblxuICAgICAgdmFyIGhlYWRDb2x1bW5UeXBlcyA9IHRoaXMuX3NwbGl0Q29sdW1uVHlwZXModGhpcy5fc2VsZWN0Q29sdW1uRWxlbWVudChIRUFERVIsIGNvbHVtbnMpKTtcbiAgICAgIGNvbHVtbkluZm8uaGVhZEZpeGVkQ29sdW1ucyA9IGhlYWRDb2x1bW5UeXBlcy5maXhlZDtcbiAgICAgIGNvbHVtbkluZm8uaGVhZFNjcm9sbGFibGVDb2x1bW5zID0gaGVhZENvbHVtblR5cGVzLnNjcm9sbGFibGU7XG5cbiAgICAgIHZhciBmb290Q29sdW1uVHlwZXMgPSB0aGlzLl9zcGxpdENvbHVtblR5cGVzKHRoaXMuX3NlbGVjdENvbHVtbkVsZW1lbnQoRk9PVEVSLCBjb2x1bW5zKSk7XG4gICAgICBjb2x1bW5JbmZvLmZvb3RGaXhlZENvbHVtbnMgPSBmb290Q29sdW1uVHlwZXMuZml4ZWQ7XG4gICAgICBjb2x1bW5JbmZvLmZvb3RTY3JvbGxhYmxlQ29sdW1ucyA9IGZvb3RDb2x1bW5UeXBlcy5zY3JvbGxhYmxlO1xuICAgIH1cblxuICAgIGlmIChjYW5SZXVzZUNvbHVtbkdyb3VwU2V0dGluZ3MpIHtcbiAgICAgIGNvbHVtbkluZm8uZ3JvdXBIZWFkZXJGaXhlZENvbHVtbnMgPSBvbGRTdGF0ZS5ncm91cEhlYWRlckZpeGVkQ29sdW1ucztcbiAgICAgIGNvbHVtbkluZm8uZ3JvdXBIZWFkZXJTY3JvbGxhYmxlQ29sdW1ucyA9IG9sZFN0YXRlLmdyb3VwSGVhZGVyU2Nyb2xsYWJsZUNvbHVtbnM7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChjb2x1bW5Hcm91cHMpIHtcbiAgICAgICAgdmFyIGdyb3VwSGVhZGVyQ29sdW1uVHlwZXMgPSB0aGlzLl9zcGxpdENvbHVtblR5cGVzKHRoaXMuX3NlbGVjdENvbHVtbkVsZW1lbnQoSEVBREVSLCBjb2x1bW5Hcm91cHMpKTtcbiAgICAgICAgY29sdW1uSW5mby5ncm91cEhlYWRlckZpeGVkQ29sdW1ucyA9IGdyb3VwSGVhZGVyQ29sdW1uVHlwZXMuZml4ZWQ7XG4gICAgICAgIGNvbHVtbkluZm8uZ3JvdXBIZWFkZXJTY3JvbGxhYmxlQ29sdW1ucyA9IGdyb3VwSGVhZGVyQ29sdW1uVHlwZXMuc2Nyb2xsYWJsZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29sdW1uSW5mbztcbiAgfSxcblxuICBfY2FsY3VsYXRlU3RhdGU6IGZ1bmN0aW9uIF9jYWxjdWxhdGVTdGF0ZSggLypvYmplY3QqL3Byb3BzLCAvKj9vYmplY3QqL29sZFN0YXRlKSAvKm9iamVjdCove1xuICAgIGludmFyaWFudChwcm9wcy5oZWlnaHQgIT09IHVuZGVmaW5lZCB8fCBwcm9wcy5tYXhIZWlnaHQgIT09IHVuZGVmaW5lZCwgJ1lvdSBtdXN0IHNldCBlaXRoZXIgYSBoZWlnaHQgb3IgYSBtYXhIZWlnaHQnKTtcblxuICAgIHZhciBjaGlsZHJlbiA9IFtdO1xuICAgIFJlYWN0Q2hpbGRyZW4uZm9yRWFjaChwcm9wcy5jaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkLCBpbmRleCkge1xuICAgICAgaWYgKGNoaWxkID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaW52YXJpYW50KGNoaWxkLnR5cGUuX19UYWJsZUNvbHVtbkdyb3VwX18gfHwgY2hpbGQudHlwZS5fX1RhYmxlQ29sdW1uX18sICdjaGlsZCB0eXBlIHNob3VsZCBiZSA8Rml4ZWREYXRhVGFibGVDb2x1bW4gLz4gb3IgJyArICc8Rml4ZWREYXRhVGFibGVDb2x1bW5Hcm91cCAvPicpO1xuICAgICAgY2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gICAgfSk7XG5cbiAgICB2YXIgdXNlR3JvdXBIZWFkZXIgPSBmYWxzZTtcbiAgICBpZiAoY2hpbGRyZW4ubGVuZ3RoICYmIGNoaWxkcmVuWzBdLnR5cGUuX19UYWJsZUNvbHVtbkdyb3VwX18pIHtcbiAgICAgIHVzZUdyb3VwSGVhZGVyID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgZmlyc3RSb3dJbmRleCA9IG9sZFN0YXRlICYmIG9sZFN0YXRlLmZpcnN0Um93SW5kZXggfHwgMDtcbiAgICB2YXIgZmlyc3RSb3dPZmZzZXQgPSBvbGRTdGF0ZSAmJiBvbGRTdGF0ZS5maXJzdFJvd09mZnNldCB8fCAwO1xuICAgIHZhciBzY3JvbGxYLCBzY3JvbGxZO1xuICAgIGlmIChvbGRTdGF0ZSAmJiBwcm9wcy5vdmVyZmxvd1ggIT09ICdoaWRkZW4nKSB7XG4gICAgICBzY3JvbGxYID0gb2xkU3RhdGUuc2Nyb2xsWDtcbiAgICB9IGVsc2Uge1xuICAgICAgc2Nyb2xsWCA9IHByb3BzLnNjcm9sbExlZnQ7XG4gICAgfVxuICAgIGlmIChvbGRTdGF0ZSAmJiBwcm9wcy5vdmVyZmxvd1kgIT09ICdoaWRkZW4nKSB7XG4gICAgICBzY3JvbGxZID0gb2xkU3RhdGUuc2Nyb2xsWTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2Nyb2xsU3RhdGUgPSB0aGlzLl9zY3JvbGxIZWxwZXIuc2Nyb2xsVG8ocHJvcHMuc2Nyb2xsVG9wKTtcbiAgICAgIGZpcnN0Um93SW5kZXggPSBzY3JvbGxTdGF0ZS5pbmRleDtcbiAgICAgIGZpcnN0Um93T2Zmc2V0ID0gc2Nyb2xsU3RhdGUub2Zmc2V0O1xuICAgICAgc2Nyb2xsWSA9IHNjcm9sbFN0YXRlLnBvc2l0aW9uO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9yb3dUb1Njcm9sbFRvICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHNjcm9sbFN0YXRlID0gdGhpcy5fc2Nyb2xsSGVscGVyLnNjcm9sbFJvd0ludG9WaWV3KHRoaXMuX3Jvd1RvU2Nyb2xsVG8pO1xuICAgICAgZmlyc3RSb3dJbmRleCA9IHNjcm9sbFN0YXRlLmluZGV4O1xuICAgICAgZmlyc3RSb3dPZmZzZXQgPSBzY3JvbGxTdGF0ZS5vZmZzZXQ7XG4gICAgICBzY3JvbGxZID0gc2Nyb2xsU3RhdGUucG9zaXRpb247XG4gICAgICBkZWxldGUgdGhpcy5fcm93VG9TY3JvbGxUbztcbiAgICB9XG5cbiAgICB2YXIgZ3JvdXBIZWFkZXJIZWlnaHQgPSB1c2VHcm91cEhlYWRlciA/IHByb3BzLmdyb3VwSGVhZGVySGVpZ2h0IDogMDtcblxuICAgIGlmIChvbGRTdGF0ZSAmJiBwcm9wcy5yb3dzQ291bnQgIT09IG9sZFN0YXRlLnJvd3NDb3VudCkge1xuICAgICAgLy8gTnVtYmVyIG9mIHJvd3MgY2hhbmdlZCwgdHJ5IHRvIHNjcm9sbCB0byB0aGUgcm93IGZyb20gYmVmb3JlIHRoZVxuICAgICAgLy8gY2hhbmdlXG4gICAgICB2YXIgdmlld3BvcnRIZWlnaHQgPSAocHJvcHMuaGVpZ2h0ID09PSB1bmRlZmluZWQgPyBwcm9wcy5tYXhIZWlnaHQgOiBwcm9wcy5oZWlnaHQpIC0gKHByb3BzLmhlYWRlckhlaWdodCB8fCAwKSAtIChwcm9wcy5mb290ZXJIZWlnaHQgfHwgMCkgLSAocHJvcHMuZ3JvdXBIZWFkZXJIZWlnaHQgfHwgMCk7XG4gICAgICB0aGlzLl9zY3JvbGxIZWxwZXIgPSBuZXcgRml4ZWREYXRhVGFibGVTY3JvbGxIZWxwZXIocHJvcHMucm93c0NvdW50LCBwcm9wcy5yb3dIZWlnaHQsIHZpZXdwb3J0SGVpZ2h0LCBwcm9wcy5yb3dIZWlnaHRHZXR0ZXIpO1xuICAgICAgdmFyIHNjcm9sbFN0YXRlID0gdGhpcy5fc2Nyb2xsSGVscGVyLnNjcm9sbFRvUm93KGZpcnN0Um93SW5kZXgsIGZpcnN0Um93T2Zmc2V0KTtcbiAgICAgIGZpcnN0Um93SW5kZXggPSBzY3JvbGxTdGF0ZS5pbmRleDtcbiAgICAgIGZpcnN0Um93T2Zmc2V0ID0gc2Nyb2xsU3RhdGUub2Zmc2V0O1xuICAgICAgc2Nyb2xsWSA9IHNjcm9sbFN0YXRlLnBvc2l0aW9uO1xuICAgIH0gZWxzZSBpZiAob2xkU3RhdGUgJiYgcHJvcHMucm93SGVpZ2h0R2V0dGVyICE9PSBvbGRTdGF0ZS5yb3dIZWlnaHRHZXR0ZXIpIHtcbiAgICAgIHRoaXMuX3Njcm9sbEhlbHBlci5zZXRSb3dIZWlnaHRHZXR0ZXIocHJvcHMucm93SGVpZ2h0R2V0dGVyKTtcbiAgICB9XG5cbiAgICB2YXIgY29sdW1uUmVzaXppbmdEYXRhO1xuICAgIGlmIChwcm9wcy5pc0NvbHVtblJlc2l6aW5nKSB7XG4gICAgICBjb2x1bW5SZXNpemluZ0RhdGEgPSBvbGRTdGF0ZSAmJiBvbGRTdGF0ZS5jb2x1bW5SZXNpemluZ0RhdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbHVtblJlc2l6aW5nRGF0YSA9IEVNUFRZX09CSkVDVDtcbiAgICB9XG5cbiAgICB2YXIgY29sdW1ucztcbiAgICB2YXIgY29sdW1uR3JvdXBzO1xuXG4gICAgaWYgKHVzZUdyb3VwSGVhZGVyKSB7XG4gICAgICB2YXIgY29sdW1uR3JvdXBTZXR0aW5ncyA9IEZpeGVkRGF0YVRhYmxlV2lkdGhIZWxwZXIuYWRqdXN0Q29sdW1uR3JvdXBXaWR0aHMoY2hpbGRyZW4sIHByb3BzLndpZHRoKTtcbiAgICAgIGNvbHVtbnMgPSBjb2x1bW5Hcm91cFNldHRpbmdzLmNvbHVtbnM7XG4gICAgICBjb2x1bW5Hcm91cHMgPSBjb2x1bW5Hcm91cFNldHRpbmdzLmNvbHVtbkdyb3VwcztcbiAgICB9IGVsc2Uge1xuICAgICAgY29sdW1ucyA9IEZpeGVkRGF0YVRhYmxlV2lkdGhIZWxwZXIuYWRqdXN0Q29sdW1uV2lkdGhzKGNoaWxkcmVuLCBwcm9wcy53aWR0aCk7XG4gICAgfVxuXG4gICAgdmFyIGNvbHVtbkluZm8gPSB0aGlzLl9wb3B1bGF0ZUNvbHVtbnNBbmRDb2x1bW5EYXRhKGNvbHVtbnMsIGNvbHVtbkdyb3Vwcywgb2xkU3RhdGUpO1xuXG4gICAgaWYgKHRoaXMuX2NvbHVtblRvU2Nyb2xsVG8gIT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gSWYgc2VsZWN0ZWQgY29sdW1uIGlzIGEgZml4ZWQgY29sdW1uLCBkb24ndCBzY3JvbGxcbiAgICAgIHZhciBmaXhlZENvbHVtbnNDb3VudCA9IGNvbHVtbkluZm8uYm9keUZpeGVkQ29sdW1ucy5sZW5ndGg7XG4gICAgICBpZiAodGhpcy5fY29sdW1uVG9TY3JvbGxUbyA+PSBmaXhlZENvbHVtbnNDb3VudCkge1xuICAgICAgICB2YXIgdG90YWxGaXhlZENvbHVtbnNXaWR0aCA9IDA7XG4gICAgICAgIHZhciBpLCBjb2x1bW47XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjb2x1bW5JbmZvLmJvZHlGaXhlZENvbHVtbnMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICBjb2x1bW4gPSBjb2x1bW5JbmZvLmJvZHlGaXhlZENvbHVtbnNbaV07XG4gICAgICAgICAgdG90YWxGaXhlZENvbHVtbnNXaWR0aCArPSBjb2x1bW4ucHJvcHMud2lkdGg7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc2Nyb2xsYWJsZUNvbHVtbkluZGV4ID0gTWF0aC5taW4odGhpcy5fY29sdW1uVG9TY3JvbGxUbyAtIGZpeGVkQ29sdW1uc0NvdW50LCBjb2x1bW5JbmZvLmJvZHlTY3JvbGxhYmxlQ29sdW1ucy5sZW5ndGggLSAxKTtcblxuICAgICAgICB2YXIgcHJldmlvdXNDb2x1bW5zV2lkdGggPSAwO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2Nyb2xsYWJsZUNvbHVtbkluZGV4OyArK2kpIHtcbiAgICAgICAgICBjb2x1bW4gPSBjb2x1bW5JbmZvLmJvZHlTY3JvbGxhYmxlQ29sdW1uc1tpXTtcbiAgICAgICAgICBwcmV2aW91c0NvbHVtbnNXaWR0aCArPSBjb2x1bW4ucHJvcHMud2lkdGg7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgYXZhaWxhYmxlU2Nyb2xsV2lkdGggPSBwcm9wcy53aWR0aCAtIHRvdGFsRml4ZWRDb2x1bW5zV2lkdGg7XG4gICAgICAgIHZhciBzZWxlY3RlZENvbHVtbldpZHRoID0gY29sdW1uSW5mby5ib2R5U2Nyb2xsYWJsZUNvbHVtbnNbc2Nyb2xsYWJsZUNvbHVtbkluZGV4XS5wcm9wcy53aWR0aDtcbiAgICAgICAgdmFyIG1pbkFjY2VwdGFibGVTY3JvbGxQb3NpdGlvbiA9IHByZXZpb3VzQ29sdW1uc1dpZHRoICsgc2VsZWN0ZWRDb2x1bW5XaWR0aCAtIGF2YWlsYWJsZVNjcm9sbFdpZHRoO1xuXG4gICAgICAgIGlmIChzY3JvbGxYIDwgbWluQWNjZXB0YWJsZVNjcm9sbFBvc2l0aW9uKSB7XG4gICAgICAgICAgc2Nyb2xsWCA9IG1pbkFjY2VwdGFibGVTY3JvbGxQb3NpdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzY3JvbGxYID4gcHJldmlvdXNDb2x1bW5zV2lkdGgpIHtcbiAgICAgICAgICBzY3JvbGxYID0gcHJldmlvdXNDb2x1bW5zV2lkdGg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGRlbGV0ZSB0aGlzLl9jb2x1bW5Ub1Njcm9sbFRvO1xuICAgIH1cblxuICAgIHZhciB1c2VNYXhIZWlnaHQgPSBwcm9wcy5oZWlnaHQgPT09IHVuZGVmaW5lZDtcbiAgICB2YXIgaGVpZ2h0ID0gTWF0aC5yb3VuZCh1c2VNYXhIZWlnaHQgPyBwcm9wcy5tYXhIZWlnaHQgOiBwcm9wcy5oZWlnaHQpO1xuICAgIHZhciB0b3RhbEhlaWdodFJlc2VydmVkID0gcHJvcHMuZm9vdGVySGVpZ2h0ICsgcHJvcHMuaGVhZGVySGVpZ2h0ICsgZ3JvdXBIZWFkZXJIZWlnaHQgKyAyICogQk9SREVSX0hFSUdIVDtcbiAgICB2YXIgYm9keUhlaWdodCA9IGhlaWdodCAtIHRvdGFsSGVpZ2h0UmVzZXJ2ZWQ7XG4gICAgdmFyIHNjcm9sbENvbnRlbnRIZWlnaHQgPSB0aGlzLl9zY3JvbGxIZWxwZXIuZ2V0Q29udGVudEhlaWdodCgpO1xuICAgIHZhciB0b3RhbEhlaWdodE5lZWRlZCA9IHNjcm9sbENvbnRlbnRIZWlnaHQgKyB0b3RhbEhlaWdodFJlc2VydmVkO1xuICAgIHZhciBzY3JvbGxDb250ZW50V2lkdGggPSBGaXhlZERhdGFUYWJsZVdpZHRoSGVscGVyLmdldFRvdGFsV2lkdGgoY29sdW1ucyk7XG5cbiAgICB2YXIgaG9yaXpvbnRhbFNjcm9sbGJhclZpc2libGUgPSBzY3JvbGxDb250ZW50V2lkdGggPiBwcm9wcy53aWR0aCAmJiBwcm9wcy5vdmVyZmxvd1ggIT09ICdoaWRkZW4nO1xuXG4gICAgaWYgKGhvcml6b250YWxTY3JvbGxiYXJWaXNpYmxlKSB7XG4gICAgICBib2R5SGVpZ2h0IC09IFNjcm9sbGJhci5TSVpFO1xuICAgICAgdG90YWxIZWlnaHROZWVkZWQgKz0gU2Nyb2xsYmFyLlNJWkU7XG4gICAgICB0b3RhbEhlaWdodFJlc2VydmVkICs9IFNjcm9sbGJhci5TSVpFO1xuICAgIH1cblxuICAgIHZhciBtYXhTY3JvbGxYID0gTWF0aC5tYXgoMCwgc2Nyb2xsQ29udGVudFdpZHRoIC0gcHJvcHMud2lkdGgpO1xuICAgIHZhciBtYXhTY3JvbGxZID0gTWF0aC5tYXgoMCwgc2Nyb2xsQ29udGVudEhlaWdodCAtIGJvZHlIZWlnaHQpO1xuICAgIHNjcm9sbFggPSBNYXRoLm1pbihzY3JvbGxYLCBtYXhTY3JvbGxYKTtcbiAgICBzY3JvbGxZID0gTWF0aC5taW4oc2Nyb2xsWSwgbWF4U2Nyb2xsWSk7XG5cbiAgICBpZiAoIW1heFNjcm9sbFkpIHtcbiAgICAgIC8vIG5vIHZlcnRpY2FsIHNjcm9sbGJhciBuZWNlc3NhcnksIHVzZSB0aGUgdG90YWxzIHdlIHRyYWNrZWQgc28gd2VcbiAgICAgIC8vIGNhbiBzaHJpbmstdG8tZml0IHZlcnRpY2FsbHlcbiAgICAgIGlmICh1c2VNYXhIZWlnaHQpIHtcbiAgICAgICAgaGVpZ2h0ID0gdG90YWxIZWlnaHROZWVkZWQ7XG4gICAgICB9XG4gICAgICBib2R5SGVpZ2h0ID0gdG90YWxIZWlnaHROZWVkZWQgLSB0b3RhbEhlaWdodFJlc2VydmVkO1xuICAgIH1cblxuICAgIHRoaXMuX3Njcm9sbEhlbHBlci5zZXRWaWV3cG9ydEhlaWdodChib2R5SGVpZ2h0KTtcblxuICAgIC8vIFRoZSBvcmRlciBvZiBlbGVtZW50cyBpbiB0aGlzIG9iamVjdCBtZXR0ZXJzIGFuZCBicmluZ2luZyBib2R5SGVpZ2h0LFxuICAgIC8vIGhlaWdodCBvciB1c2VHcm91cEhlYWRlciB0byB0aGUgdG9wIGNhbiBicmVhayB2YXJpb3VzIGZlYXR1cmVzXG4gICAgdmFyIG5ld1N0YXRlID0gX2V4dGVuZHMoe1xuICAgICAgaXNDb2x1bW5SZXNpemluZzogb2xkU3RhdGUgJiYgb2xkU3RhdGUuaXNDb2x1bW5SZXNpemluZ1xuICAgIH0sIGNvbHVtbkluZm8sIHByb3BzLCB7XG5cbiAgICAgIGNvbHVtbnM6IGNvbHVtbnMsXG4gICAgICBjb2x1bW5Hcm91cHM6IGNvbHVtbkdyb3VwcyxcbiAgICAgIGNvbHVtblJlc2l6aW5nRGF0YTogY29sdW1uUmVzaXppbmdEYXRhLFxuICAgICAgZmlyc3RSb3dJbmRleDogZmlyc3RSb3dJbmRleCxcbiAgICAgIGZpcnN0Um93T2Zmc2V0OiBmaXJzdFJvd09mZnNldCxcbiAgICAgIGhvcml6b250YWxTY3JvbGxiYXJWaXNpYmxlOiBob3Jpem9udGFsU2Nyb2xsYmFyVmlzaWJsZSxcbiAgICAgIG1heFNjcm9sbFg6IG1heFNjcm9sbFgsXG4gICAgICBtYXhTY3JvbGxZOiBtYXhTY3JvbGxZLFxuICAgICAgcmVzZXJ2ZWRIZWlnaHQ6IHRvdGFsSGVpZ2h0UmVzZXJ2ZWQsXG4gICAgICBzY3JvbGxDb250ZW50SGVpZ2h0OiBzY3JvbGxDb250ZW50SGVpZ2h0LFxuICAgICAgc2Nyb2xsWDogc2Nyb2xsWCxcbiAgICAgIHNjcm9sbFk6IHNjcm9sbFksXG5cbiAgICAgIC8vIFRoZXNlIHByb3BlcnRpZXMgbWF5IG92ZXJ3cml0ZSBwcm9wZXJ0aWVzIGRlZmluZWQgaW5cbiAgICAgIC8vIGNvbHVtbkluZm8gYW5kIHByb3BzXG4gICAgICBib2R5SGVpZ2h0OiBib2R5SGVpZ2h0LFxuICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICBncm91cEhlYWRlckhlaWdodDogZ3JvdXBIZWFkZXJIZWlnaHQsXG4gICAgICB1c2VHcm91cEhlYWRlcjogdXNlR3JvdXBIZWFkZXJcbiAgICB9KTtcblxuICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgfSxcblxuICBfc2VsZWN0Q29sdW1uRWxlbWVudDogZnVuY3Rpb24gX3NlbGVjdENvbHVtbkVsZW1lbnQoIC8qc3RyaW5nKi90eXBlLCAvKmFycmF5Ki9jb2x1bW5zKSAvKmFycmF5Ki97XG4gICAgdmFyIG5ld0NvbHVtbnMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbHVtbnMubGVuZ3RoOyArK2kpIHtcbiAgICAgIHZhciBjb2x1bW4gPSBjb2x1bW5zW2ldO1xuICAgICAgbmV3Q29sdW1ucy5wdXNoKFJlYWN0LmNsb25lRWxlbWVudChjb2x1bW4sIHtcbiAgICAgICAgY2VsbDogdHlwZSA/IGNvbHVtbi5wcm9wc1t0eXBlXSA6IGNvbHVtbi5wcm9wc1tDRUxMXVxuICAgICAgfSkpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3Q29sdW1ucztcbiAgfSxcblxuICBfc3BsaXRDb2x1bW5UeXBlczogZnVuY3Rpb24gX3NwbGl0Q29sdW1uVHlwZXMoIC8qYXJyYXkqL2NvbHVtbnMpIC8qb2JqZWN0Ki97XG4gICAgdmFyIGZpeGVkQ29sdW1ucyA9IFtdO1xuICAgIHZhciBzY3JvbGxhYmxlQ29sdW1ucyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29sdW1ucy5sZW5ndGg7ICsraSkge1xuICAgICAgaWYgKGNvbHVtbnNbaV0ucHJvcHMuZml4ZWQpIHtcbiAgICAgICAgZml4ZWRDb2x1bW5zLnB1c2goY29sdW1uc1tpXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzY3JvbGxhYmxlQ29sdW1ucy5wdXNoKGNvbHVtbnNbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgZml4ZWQ6IGZpeGVkQ29sdW1ucyxcbiAgICAgIHNjcm9sbGFibGU6IHNjcm9sbGFibGVDb2x1bW5zXG4gICAgfTtcbiAgfSxcblxuICBfb25XaGVlbDogZnVuY3Rpb24gX29uV2hlZWwoIC8qbnVtYmVyKi9kZWx0YVgsIC8qbnVtYmVyKi9kZWx0YVkpIHtcbiAgICBpZiAodGhpcy5pc01vdW50ZWQoKSkge1xuICAgICAgaWYgKCF0aGlzLl9pc1Njcm9sbGluZykge1xuICAgICAgICB0aGlzLl9kaWRTY3JvbGxTdGFydCgpO1xuICAgICAgfVxuICAgICAgdmFyIHggPSB0aGlzLnN0YXRlLnNjcm9sbFg7XG4gICAgICBpZiAoTWF0aC5hYnMoZGVsdGFZKSA+IE1hdGguYWJzKGRlbHRhWCkgJiYgdGhpcy5wcm9wcy5vdmVyZmxvd1kgIT09ICdoaWRkZW4nKSB7XG4gICAgICAgIHZhciBzY3JvbGxTdGF0ZSA9IHRoaXMuX3Njcm9sbEhlbHBlci5zY3JvbGxCeShNYXRoLnJvdW5kKGRlbHRhWSkpO1xuICAgICAgICB2YXIgbWF4U2Nyb2xsWSA9IE1hdGgubWF4KDAsIHNjcm9sbFN0YXRlLmNvbnRlbnRIZWlnaHQgLSB0aGlzLnN0YXRlLmJvZHlIZWlnaHQpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBmaXJzdFJvd0luZGV4OiBzY3JvbGxTdGF0ZS5pbmRleCxcbiAgICAgICAgICBmaXJzdFJvd09mZnNldDogc2Nyb2xsU3RhdGUub2Zmc2V0LFxuICAgICAgICAgIHNjcm9sbFk6IHNjcm9sbFN0YXRlLnBvc2l0aW9uLFxuICAgICAgICAgIHNjcm9sbENvbnRlbnRIZWlnaHQ6IHNjcm9sbFN0YXRlLmNvbnRlbnRIZWlnaHQsXG4gICAgICAgICAgbWF4U2Nyb2xsWTogbWF4U2Nyb2xsWVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoZGVsdGFYICYmIHRoaXMucHJvcHMub3ZlcmZsb3dYICE9PSAnaGlkZGVuJykge1xuICAgICAgICB4ICs9IGRlbHRhWDtcbiAgICAgICAgeCA9IHggPCAwID8gMCA6IHg7XG4gICAgICAgIHggPSB4ID4gdGhpcy5zdGF0ZS5tYXhTY3JvbGxYID8gdGhpcy5zdGF0ZS5tYXhTY3JvbGxYIDogeDtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgc2Nyb2xsWDogeFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZGlkU2Nyb2xsU3RvcCgpO1xuICAgIH1cbiAgfSxcblxuICBfb25Ib3Jpem9udGFsU2Nyb2xsOiBmdW5jdGlvbiBfb25Ib3Jpem9udGFsU2Nyb2xsKCAvKm51bWJlciovc2Nyb2xsUG9zKSB7XG4gICAgaWYgKHRoaXMuaXNNb3VudGVkKCkgJiYgc2Nyb2xsUG9zICE9PSB0aGlzLnN0YXRlLnNjcm9sbFgpIHtcbiAgICAgIGlmICghdGhpcy5faXNTY3JvbGxpbmcpIHtcbiAgICAgICAgdGhpcy5fZGlkU2Nyb2xsU3RhcnQoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzY3JvbGxYOiBzY3JvbGxQb3NcbiAgICAgIH0pO1xuICAgICAgdGhpcy5fZGlkU2Nyb2xsU3RvcCgpO1xuICAgIH1cbiAgfSxcblxuICBfb25WZXJ0aWNhbFNjcm9sbDogZnVuY3Rpb24gX29uVmVydGljYWxTY3JvbGwoIC8qbnVtYmVyKi9zY3JvbGxQb3MpIHtcbiAgICBpZiAodGhpcy5pc01vdW50ZWQoKSAmJiBzY3JvbGxQb3MgIT09IHRoaXMuc3RhdGUuc2Nyb2xsWSkge1xuICAgICAgaWYgKCF0aGlzLl9pc1Njcm9sbGluZykge1xuICAgICAgICB0aGlzLl9kaWRTY3JvbGxTdGFydCgpO1xuICAgICAgfVxuICAgICAgdmFyIHNjcm9sbFN0YXRlID0gdGhpcy5fc2Nyb2xsSGVscGVyLnNjcm9sbFRvKE1hdGgucm91bmQoc2Nyb2xsUG9zKSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZmlyc3RSb3dJbmRleDogc2Nyb2xsU3RhdGUuaW5kZXgsXG4gICAgICAgIGZpcnN0Um93T2Zmc2V0OiBzY3JvbGxTdGF0ZS5vZmZzZXQsXG4gICAgICAgIHNjcm9sbFk6IHNjcm9sbFN0YXRlLnBvc2l0aW9uLFxuICAgICAgICBzY3JvbGxDb250ZW50SGVpZ2h0OiBzY3JvbGxTdGF0ZS5jb250ZW50SGVpZ2h0XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX2RpZFNjcm9sbFN0b3AoKTtcbiAgICB9XG4gIH0sXG5cbiAgX2RpZFNjcm9sbFN0YXJ0OiBmdW5jdGlvbiBfZGlkU2Nyb2xsU3RhcnQoKSB7XG4gICAgaWYgKHRoaXMuaXNNb3VudGVkKCkgJiYgIXRoaXMuX2lzU2Nyb2xsaW5nKSB7XG4gICAgICB0aGlzLl9pc1Njcm9sbGluZyA9IHRydWU7XG4gICAgICBpZiAodGhpcy5wcm9wcy5vblNjcm9sbFN0YXJ0KSB7XG4gICAgICAgIHRoaXMucHJvcHMub25TY3JvbGxTdGFydCh0aGlzLnN0YXRlLnNjcm9sbFgsIHRoaXMuc3RhdGUuc2Nyb2xsWSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIF9kaWRTY3JvbGxTdG9wOiBmdW5jdGlvbiBfZGlkU2Nyb2xsU3RvcCgpIHtcbiAgICBpZiAodGhpcy5pc01vdW50ZWQoKSAmJiB0aGlzLl9pc1Njcm9sbGluZykge1xuICAgICAgdGhpcy5faXNTY3JvbGxpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyByZWRyYXc6IHRydWUgfSk7XG4gICAgICBpZiAodGhpcy5wcm9wcy5vblNjcm9sbEVuZCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uU2Nyb2xsRW5kKHRoaXMuc3RhdGUuc2Nyb2xsWCwgdGhpcy5zdGF0ZS5zY3JvbGxZKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pO1xuXG52YXIgSG9yaXpvbnRhbFNjcm9sbGJhciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdIb3Jpem9udGFsU2Nyb2xsYmFyJyxcblxuICBtaXhpbnM6IFtSZWFjdENvbXBvbmVudFdpdGhQdXJlUmVuZGVyTWl4aW5dLFxuICBwcm9wVHlwZXM6IHtcbiAgICBjb250ZW50U2l6ZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIG9mZnNldDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIG9uU2Nyb2xsOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHBvc2l0aW9uOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgc2l6ZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkXG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSAvKm9iamVjdCove1xuICAgIHZhciBvdXRlckNvbnRhaW5lclN0eWxlID0ge1xuICAgICAgaGVpZ2h0OiBTY3JvbGxiYXIuU0laRSxcbiAgICAgIHdpZHRoOiB0aGlzLnByb3BzLnNpemVcbiAgICB9O1xuICAgIHZhciBpbm5lckNvbnRhaW5lclN0eWxlID0ge1xuICAgICAgaGVpZ2h0OiBTY3JvbGxiYXIuU0laRSxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgd2lkdGg6IHRoaXMucHJvcHMuc2l6ZVxuICAgIH07XG4gICAgdHJhbnNsYXRlRE9NUG9zaXRpb25YWShpbm5lckNvbnRhaW5lclN0eWxlLCAwLCB0aGlzLnByb3BzLm9mZnNldCk7XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6IGpvaW5DbGFzc2VzKGN4KCdmaXhlZERhdGFUYWJsZUxheW91dC9ob3Jpem9udGFsU2Nyb2xsYmFyJyksIGN4KCdwdWJsaWMvZml4ZWREYXRhVGFibGUvaG9yaXpvbnRhbFNjcm9sbGJhcicpKSxcbiAgICAgICAgc3R5bGU6IG91dGVyQ29udGFpbmVyU3R5bGUgfSxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IHN0eWxlOiBpbm5lckNvbnRhaW5lclN0eWxlIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2Nyb2xsYmFyLCBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywge1xuICAgICAgICAgIGlzT3BhcXVlOiB0cnVlLFxuICAgICAgICAgIG9yaWVudGF0aW9uOiAnaG9yaXpvbnRhbCcsXG4gICAgICAgICAgb2Zmc2V0OiB1bmRlZmluZWRcbiAgICAgICAgfSkpXG4gICAgICApXG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRml4ZWREYXRhVGFibGU7XG4vLyBpc0NvbHVtblJlc2l6aW5nIHNob3VsZCBiZSBvdmVyd3JpdHRlbiBieSB2YWx1ZSBmcm9tIHByb3BzIGlmXG4vLyBhdmFpYWxibGVcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL0ZpeGVkRGF0YVRhYmxlTmV3LnJlYWN0LmpzXG4gKiogbW9kdWxlIGlkID0gNDMyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBSZWFjdENvbXBvbmVudFdpdGhQdXJlUmVuZGVyTWl4aW5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogUGVyZm9ybXMgZXF1YWxpdHkgYnkgaXRlcmF0aW5nIHRocm91Z2gga2V5cyBvbiBhbiBvYmplY3QgYW5kIHJldHVybmluZ1xuICogZmFsc2Ugd2hlbiBhbnkga2V5IGhhcyB2YWx1ZXMgd2hpY2ggYXJlIG5vdCBzdHJpY3RseSBlcXVhbCBiZXR3ZWVuXG4gKiBvYmpBIGFuZCBvYmpCLiBSZXR1cm5zIHRydWUgd2hlbiB0aGUgdmFsdWVzIG9mIGFsbCBrZXlzIGFyZSBzdHJpY3RseSBlcXVhbC5cbiAqXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBzaGFsbG93RXF1YWwob2JqQSwgb2JqQikge1xuICBpZiAob2JqQSA9PT0gb2JqQikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHZhciBrZXk7XG4gIC8vIFRlc3QgZm9yIEEncyBrZXlzIGRpZmZlcmVudCBmcm9tIEIuXG4gIGZvciAoa2V5IGluIG9iakEpIHtcbiAgICBpZiAob2JqQS5oYXNPd25Qcm9wZXJ0eShrZXkpICYmICghb2JqQi5oYXNPd25Qcm9wZXJ0eShrZXkpIHx8IG9iakFba2V5XSAhPT0gb2JqQltrZXldKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICAvLyBUZXN0IGZvciBCJ3Mga2V5cyBtaXNzaW5nIGZyb20gQS5cbiAgZm9yIChrZXkgaW4gb2JqQikge1xuICAgIGlmIChvYmpCLmhhc093blByb3BlcnR5KGtleSkgJiYgIW9iakEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBJZiB5b3VyIFJlYWN0IGNvbXBvbmVudCdzIHJlbmRlciBmdW5jdGlvbiBpcyBcInB1cmVcIiwgZS5nLiBpdCB3aWxsIHJlbmRlciB0aGVcbiAqIHNhbWUgcmVzdWx0IGdpdmVuIHRoZSBzYW1lIHByb3BzIGFuZCBzdGF0ZSwgcHJvdmlkZSB0aGlzIE1peGluIGZvciBhXG4gKiBjb25zaWRlcmFibGUgcGVyZm9ybWFuY2UgYm9vc3QuXG4gKlxuICogTW9zdCBSZWFjdCBjb21wb25lbnRzIGhhdmUgcHVyZSByZW5kZXIgZnVuY3Rpb25zLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogICB2YXIgUmVhY3RDb21wb25lbnRXaXRoUHVyZVJlbmRlck1peGluID1cbiAqICAgICByZXF1aXJlKCdSZWFjdENvbXBvbmVudFdpdGhQdXJlUmVuZGVyTWl4aW4nKTtcbiAqICAgUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICogICAgIG1peGluczogW1JlYWN0Q29tcG9uZW50V2l0aFB1cmVSZW5kZXJNaXhpbl0sXG4gKlxuICogICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gKiAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfT5mb288L2Rpdj47XG4gKiAgICAgfVxuICogICB9KTtcbiAqXG4gKiBOb3RlOiBUaGlzIG9ubHkgY2hlY2tzIHNoYWxsb3cgZXF1YWxpdHkgZm9yIHByb3BzIGFuZCBzdGF0ZS4gSWYgdGhlc2UgY29udGFpblxuICogY29tcGxleCBkYXRhIHN0cnVjdHVyZXMgdGhpcyBtaXhpbiBtYXkgaGF2ZSBmYWxzZS1uZWdhdGl2ZXMgZm9yIGRlZXBlclxuICogZGlmZmVyZW5jZXMuIE9ubHkgbWl4aW4gdG8gY29tcG9uZW50cyB3aGljaCBoYXZlIHNpbXBsZSBwcm9wcyBhbmQgc3RhdGUsIG9yXG4gKiB1c2UgYGZvcmNlVXBkYXRlKClgIHdoZW4geW91IGtub3cgZGVlcCBkYXRhIHN0cnVjdHVyZXMgaGF2ZSBjaGFuZ2VkLlxuICovXG52YXIgUmVhY3RDb21wb25lbnRXaXRoUHVyZVJlbmRlck1peGluID0ge1xuICBzaG91bGRDb21wb25lbnRVcGRhdGU6IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgIHJldHVybiAhc2hhbGxvd0VxdWFsKHRoaXMucHJvcHMsIG5leHRQcm9wcykgfHwgIXNoYWxsb3dFcXVhbCh0aGlzLnN0YXRlLCBuZXh0U3RhdGUpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0Q29tcG9uZW50V2l0aFB1cmVSZW5kZXJNaXhpbjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL1JlYWN0Q29tcG9uZW50V2l0aFB1cmVSZW5kZXJNaXhpbi5qc1xuICoqIG1vZHVsZSBpZCA9IDQzM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBUaGlzIGlzIHV0aWxpdHkgdGhhdCBoYW5sZHMgb25XaGVlbCBldmVudHMgYW5kIGNhbGxzIHByb3ZpZGVkIHdoZWVsXG4gKiBjYWxsYmFjayB3aXRoIGNvcnJlY3QgZnJhbWUgcmF0ZS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgUmVhY3RXaGVlbEhhbmRsZXJcbiAqIEB0eXBlY2hlY2tzXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIGVtcHR5RnVuY3Rpb24gPSByZXF1aXJlKCcuL2VtcHR5RnVuY3Rpb24nKTtcbnZhciBub3JtYWxpemVXaGVlbCA9IHJlcXVpcmUoJy4vbm9ybWFsaXplV2hlZWwnKTtcbnZhciByZXF1ZXN0QW5pbWF0aW9uRnJhbWVQb2x5ZmlsbCA9IHJlcXVpcmUoJy4vcmVxdWVzdEFuaW1hdGlvbkZyYW1lUG9seWZpbGwnKTtcblxudmFyIFJlYWN0V2hlZWxIYW5kbGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAqIG9uV2hlZWwgaXMgdGhlIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2l0aCByaWdodCBmcmFtZSByYXRlIGlmXG4gICAqIGFueSB3aGVlbCBldmVudHMgaGFwcGVuZWRcbiAgICogb25XaGVlbCBzaG91bGQgaXMgdG8gYmUgY2FsbGVkIHdpdGggdHdvIGFyZ3VtZW50czogZGVsdGFYIGFuZCBkZWx0YVkgaW5cbiAgICogdGhpcyBvcmRlclxuICAgKi9cblxuICBmdW5jdGlvbiBSZWFjdFdoZWVsSGFuZGxlcihcbiAgLypmdW5jdGlvbiovb25XaGVlbCxcbiAgLypib29sZWFufGZ1bmN0aW9uKi9oYW5kbGVTY3JvbGxYLFxuICAvKmJvb2xlYW58ZnVuY3Rpb24qL2hhbmRsZVNjcm9sbFksXG4gIC8qP2Jvb2xlYW58P2Z1bmN0aW9uKi9zdG9wUHJvcGFnYXRpb24pIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVhY3RXaGVlbEhhbmRsZXIpO1xuXG4gICAgdGhpcy5fYW5pbWF0aW9uRnJhbWVJRCA9IG51bGw7XG4gICAgdGhpcy5fZGVsdGFYID0gMDtcbiAgICB0aGlzLl9kZWx0YVkgPSAwO1xuICAgIHRoaXMuX2RpZFdoZWVsID0gdGhpcy5fZGlkV2hlZWwuYmluZCh0aGlzKTtcbiAgICBpZiAodHlwZW9mIGhhbmRsZVNjcm9sbFggIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGhhbmRsZVNjcm9sbFggPSBoYW5kbGVTY3JvbGxYID8gZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RydWUgOiBlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zRmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBoYW5kbGVTY3JvbGxZICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBoYW5kbGVTY3JvbGxZID0gaGFuZGxlU2Nyb2xsWSA/IGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNUcnVlIDogZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0ZhbHNlO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygc3RvcFByb3BhZ2F0aW9uICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBzdG9wUHJvcGFnYXRpb24gPSBzdG9wUHJvcGFnYXRpb24gPyBlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVHJ1ZSA6IGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNGYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLl9oYW5kbGVTY3JvbGxYID0gaGFuZGxlU2Nyb2xsWDtcbiAgICB0aGlzLl9oYW5kbGVTY3JvbGxZID0gaGFuZGxlU2Nyb2xsWTtcbiAgICB0aGlzLl9zdG9wUHJvcGFnYXRpb24gPSBzdG9wUHJvcGFnYXRpb247XG4gICAgdGhpcy5fb25XaGVlbENhbGxiYWNrID0gb25XaGVlbDtcbiAgICB0aGlzLm9uV2hlZWwgPSB0aGlzLm9uV2hlZWwuYmluZCh0aGlzKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhSZWFjdFdoZWVsSGFuZGxlciwgW3tcbiAgICBrZXk6ICdvbldoZWVsJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25XaGVlbCggLypvYmplY3QqL2V2ZW50KSB7XG4gICAgICB2YXIgbm9ybWFsaXplZEV2ZW50ID0gbm9ybWFsaXplV2hlZWwoZXZlbnQpO1xuICAgICAgdmFyIGRlbHRhWCA9IHRoaXMuX2RlbHRhWCArIG5vcm1hbGl6ZWRFdmVudC5waXhlbFg7XG4gICAgICB2YXIgZGVsdGFZID0gdGhpcy5fZGVsdGFZICsgbm9ybWFsaXplZEV2ZW50LnBpeGVsWTtcbiAgICAgIHZhciBoYW5kbGVTY3JvbGxYID0gdGhpcy5faGFuZGxlU2Nyb2xsWChkZWx0YVgsIGRlbHRhWSk7XG4gICAgICB2YXIgaGFuZGxlU2Nyb2xsWSA9IHRoaXMuX2hhbmRsZVNjcm9sbFkoZGVsdGFZLCBkZWx0YVgpO1xuICAgICAgaWYgKCFoYW5kbGVTY3JvbGxYICYmICFoYW5kbGVTY3JvbGxZKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZGVsdGFYICs9IGhhbmRsZVNjcm9sbFggPyBub3JtYWxpemVkRXZlbnQucGl4ZWxYIDogMDtcbiAgICAgIHRoaXMuX2RlbHRhWSArPSBoYW5kbGVTY3JvbGxZID8gbm9ybWFsaXplZEV2ZW50LnBpeGVsWSA6IDA7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICB2YXIgY2hhbmdlZDtcbiAgICAgIGlmICh0aGlzLl9kZWx0YVggIT09IDAgfHwgdGhpcy5fZGVsdGFZICE9PSAwKSB7XG4gICAgICAgIGlmICh0aGlzLl9zdG9wUHJvcGFnYXRpb24oKSkge1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9XG4gICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2hhbmdlZCA9PT0gdHJ1ZSAmJiB0aGlzLl9hbmltYXRpb25GcmFtZUlEID09PSBudWxsKSB7XG4gICAgICAgIHRoaXMuX2FuaW1hdGlvbkZyYW1lSUQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWVQb2x5ZmlsbCh0aGlzLl9kaWRXaGVlbCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnX2RpZFdoZWVsJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2RpZFdoZWVsKCkge1xuICAgICAgdGhpcy5fYW5pbWF0aW9uRnJhbWVJRCA9IG51bGw7XG4gICAgICB0aGlzLl9vbldoZWVsQ2FsbGJhY2sodGhpcy5fZGVsdGFYLCB0aGlzLl9kZWx0YVkpO1xuICAgICAgdGhpcy5fZGVsdGFYID0gMDtcbiAgICAgIHRoaXMuX2RlbHRhWSA9IDA7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFJlYWN0V2hlZWxIYW5kbGVyO1xufSkoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFdoZWVsSGFuZGxlcjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL1JlYWN0V2hlZWxIYW5kbGVyLmpzXG4gKiogbW9kdWxlIGlkID0gNDM0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBlbXB0eUZ1bmN0aW9uXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIG1ha2VFbXB0eUZ1bmN0aW9uKGFyZykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBhcmc7XG4gIH07XG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBhY2NlcHRzIGFuZCBkaXNjYXJkcyBpbnB1dHM7IGl0IGhhcyBubyBzaWRlIGVmZmVjdHMuIFRoaXMgaXNcbiAqIHByaW1hcmlseSB1c2VmdWwgaWRpb21hdGljYWxseSBmb3Igb3ZlcnJpZGFibGUgZnVuY3Rpb24gZW5kcG9pbnRzIHdoaWNoXG4gKiBhbHdheXMgbmVlZCB0byBiZSBjYWxsYWJsZSwgc2luY2UgSlMgbGFja3MgYSBudWxsLWNhbGwgaWRpb20gYWxhIENvY29hLlxuICovXG5mdW5jdGlvbiBlbXB0eUZ1bmN0aW9uKCkge31cblxuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJucyA9IG1ha2VFbXB0eUZ1bmN0aW9uO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0ZhbHNlID0gbWFrZUVtcHR5RnVuY3Rpb24oZmFsc2UpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RydWUgPSBtYWtlRW1wdHlGdW5jdGlvbih0cnVlKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsID0gbWFrZUVtcHR5RnVuY3Rpb24obnVsbCk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVGhpcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXM7XG59O1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0FyZ3VtZW50ID0gZnVuY3Rpb24gKGFyZykge1xuICByZXR1cm4gYXJnO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBlbXB0eUZ1bmN0aW9uO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvZW1wdHlGdW5jdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDQzNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgbm9ybWFsaXplV2hlZWxcbiAqIEB0eXBlY2hlY2tzXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgVXNlckFnZW50X0RFUFJFQ0FURUQgPSByZXF1aXJlKCcuL1VzZXJBZ2VudF9ERVBSRUNBVEVEJyk7XG5cbnZhciBpc0V2ZW50U3VwcG9ydGVkID0gcmVxdWlyZSgnLi9pc0V2ZW50U3VwcG9ydGVkJyk7XG5cbi8vIFJlYXNvbmFibGUgZGVmYXVsdHNcbnZhciBQSVhFTF9TVEVQID0gMTA7XG52YXIgTElORV9IRUlHSFQgPSA0MDtcbnZhciBQQUdFX0hFSUdIVCA9IDgwMDtcblxuLyoqXG4gKiBNb3VzZSB3aGVlbCAoYW5kIDItZmluZ2VyIHRyYWNrcGFkKSBzdXBwb3J0IG9uIHRoZSB3ZWIgc3Vja3MuICBJdCBpc1xuICogY29tcGxpY2F0ZWQsIHRodXMgdGhpcyBkb2MgaXMgbG9uZyBhbmQgKGhvcGVmdWxseSkgZGV0YWlsZWQgZW5vdWdoIHRvIGFuc3dlclxuICogeW91ciBxdWVzdGlvbnMuXG4gKlxuICogSWYgeW91IG5lZWQgdG8gcmVhY3QgdG8gdGhlIG1vdXNlIHdoZWVsIGluIGEgcHJlZGljdGFibGUgd2F5LCB0aGlzIGNvZGUgaXNcbiAqIGxpa2UgeW91ciBiZXN0ZXN0IGZyaWVuZC4gKiBodWdzICpcbiAqXG4gKiBBcyBvZiB0b2RheSwgdGhlcmUgYXJlIDQgRE9NIGV2ZW50IHR5cGVzIHlvdSBjYW4gbGlzdGVuIHRvOlxuICpcbiAqICAgJ3doZWVsJyAgICAgICAgICAgICAgICAtLSBDaHJvbWUoMzErKSwgRkYoMTcrKSwgSUUoOSspXG4gKiAgICdtb3VzZXdoZWVsJyAgICAgICAgICAgLS0gQ2hyb21lLCBJRSg2KyksIE9wZXJhLCBTYWZhcmlcbiAqICAgJ01vek1vdXNlUGl4ZWxTY3JvbGwnICAtLSBGRigzLjUgb25seSEpICgyMDEwLTIwMTMpIC0tIGRvbid0IGJvdGhlciFcbiAqICAgJ0RPTU1vdXNlU2Nyb2xsJyAgICAgICAtLSBGRigwLjkuNyspIHNpbmNlIDIwMDNcbiAqXG4gKiBTbyB3aGF0IHRvIGRvPyAgVGhlIGlzIHRoZSBiZXN0OlxuICpcbiAqICAgbm9ybWFsaXplV2hlZWwuZ2V0RXZlbnRUeXBlKCk7XG4gKlxuICogSW4geW91ciBldmVudCBjYWxsYmFjaywgdXNlIHRoaXMgY29kZSB0byBnZXQgc2FuZSBpbnRlcnByZXRhdGlvbiBvZiB0aGVcbiAqIGRlbHRhcy4gIFRoaXMgY29kZSB3aWxsIHJldHVybiBhbiBvYmplY3Qgd2l0aCBwcm9wZXJ0aWVzOlxuICpcbiAqICAgc3BpblggICAtLSBub3JtYWxpemVkIHNwaW4gc3BlZWQgKHVzZSBmb3Igem9vbSkgLSB4IHBsYW5lXG4gKiAgIHNwaW5ZICAgLS0gXCIgLSB5IHBsYW5lXG4gKiAgIHBpeGVsWCAgLS0gbm9ybWFsaXplZCBkaXN0YW5jZSAodG8gcGl4ZWxzKSAtIHggcGxhbmVcbiAqICAgcGl4ZWxZICAtLSBcIiAtIHkgcGxhbmVcbiAqXG4gKiBXaGVlbCB2YWx1ZXMgYXJlIHByb3ZpZGVkIGJ5IHRoZSBicm93c2VyIGFzc3VtaW5nIHlvdSBhcmUgdXNpbmcgdGhlIHdoZWVsIHRvXG4gKiBzY3JvbGwgYSB3ZWIgcGFnZSBieSBhIG51bWJlciBvZiBsaW5lcyBvciBwaXhlbHMgKG9yIHBhZ2VzKS4gIFZhbHVlcyBjYW4gdmFyeVxuICogc2lnbmlmaWNhbnRseSBvbiBkaWZmZXJlbnQgcGxhdGZvcm1zIGFuZCBicm93c2VycywgZm9yZ2V0dGluZyB0aGF0IHlvdSBjYW5cbiAqIHNjcm9sbCBhdCBkaWZmZXJlbnQgc3BlZWRzLiAgU29tZSBkZXZpY2VzIChsaWtlIHRyYWNrcGFkcykgZW1pdCBtb3JlIGV2ZW50c1xuICogYXQgc21hbGxlciBpbmNyZW1lbnRzIHdpdGggZmluZSBncmFudWxhcml0eSwgYW5kIHNvbWUgZW1pdCBtYXNzaXZlIGp1bXBzIHdpdGhcbiAqIGxpbmVhciBzcGVlZCBvciBhY2NlbGVyYXRpb24uXG4gKlxuICogVGhpcyBjb2RlIGRvZXMgaXRzIGJlc3QgdG8gbm9ybWFsaXplIHRoZSBkZWx0YXMgZm9yIHlvdTpcbiAqXG4gKiAgIC0gc3BpbiBpcyB0cnlpbmcgdG8gbm9ybWFsaXplIGhvdyBmYXIgdGhlIHdoZWVsIHdhcyBzcHVuIChvciB0cmFja3BhZFxuICogICAgIGRyYWdnZWQpLiAgVGhpcyBpcyBzdXBlciB1c2VmdWwgZm9yIHpvb20gc3VwcG9ydCB3aGVyZSB5b3Ugd2FudCB0b1xuICogICAgIHRocm93IGF3YXkgdGhlIGNodW5reSBzY3JvbGwgc3RlcHMgb24gdGhlIFBDIGFuZCBtYWtlIHRob3NlIGVxdWFsIHRvXG4gKiAgICAgdGhlIHNsb3cgYW5kIHNtb290aCB0aW55IHN0ZXBzIG9uIHRoZSBNYWMuIEtleSBkYXRhOiBUaGlzIGNvZGUgdHJpZXMgdG9cbiAqICAgICByZXNvbHZlIGEgc2luZ2xlIHNsb3cgc3RlcCBvbiBhIHdoZWVsIHRvIDEuXG4gKlxuICogICAtIHBpeGVsIGlzIG5vcm1hbGl6aW5nIHRoZSBkZXNpcmVkIHNjcm9sbCBkZWx0YSBpbiBwaXhlbCB1bml0cy4gIFlvdSdsbFxuICogICAgIGdldCB0aGUgY3JhenkgZGlmZmVyZW5jZXMgYmV0d2VlbiBicm93c2VycywgYnV0IGF0IGxlYXN0IGl0J2xsIGJlIGluXG4gKiAgICAgcGl4ZWxzIVxuICpcbiAqICAgLSBwb3NpdGl2ZSB2YWx1ZSBpbmRpY2F0ZXMgc2Nyb2xsaW5nIERPV04vUklHSFQsIG5lZ2F0aXZlIFVQL0xFRlQuICBUaGlzXG4gKiAgICAgc2hvdWxkIHRyYW5zbGF0ZSB0byBwb3NpdGl2ZSB2YWx1ZSB6b29taW5nIElOLCBuZWdhdGl2ZSB6b29taW5nIE9VVC5cbiAqICAgICBUaGlzIG1hdGNoZXMgdGhlIG5ld2VyICd3aGVlbCcgZXZlbnQuXG4gKlxuICogV2h5IGFyZSB0aGVyZSBzcGluWCwgc3BpblkgKG9yIHBpeGVscyk/XG4gKlxuICogICAtIHNwaW5YIGlzIGEgMi1maW5nZXIgc2lkZSBkcmFnIG9uIHRoZSB0cmFja3BhZCwgYW5kIGEgc2hpZnQgKyB3aGVlbCB0dXJuXG4gKiAgICAgd2l0aCBhIG1vdXNlLiAgSXQgcmVzdWx0cyBpbiBzaWRlLXNjcm9sbGluZyBpbiB0aGUgYnJvd3NlciBieSBkZWZhdWx0LlxuICpcbiAqICAgLSBzcGluWSBpcyB3aGF0IHlvdSBleHBlY3QgLS0gaXQncyB0aGUgY2xhc3NpYyBheGlzIG9mIGEgbW91c2Ugd2hlZWwuXG4gKlxuICogICAtIEkgZHJvcHBlZCBzcGluWi9waXhlbFouICBJdCBpcyBzdXBwb3J0ZWQgYnkgdGhlIERPTSAzICd3aGVlbCcgZXZlbnQgYW5kXG4gKiAgICAgcHJvYmFibHkgaXMgYnkgYnJvd3NlcnMgaW4gY29uanVuY3Rpb24gd2l0aCBmYW5jeSAzRCBjb250cm9sbGVycyAuLiBidXRcbiAqICAgICB5b3Uga25vdy5cbiAqXG4gKiBJbXBsZW1lbnRhdGlvbiBpbmZvOlxuICpcbiAqIEV4YW1wbGVzIG9mICd3aGVlbCcgZXZlbnQgaWYgeW91IHNjcm9sbCBzbG93bHkgKGRvd24pIGJ5IG9uZSBzdGVwIHdpdGggYW5cbiAqIGF2ZXJhZ2UgbW91c2U6XG4gKlxuICogICBPUyBYICsgQ2hyb21lICAobW91c2UpICAgICAtICAgIDQgICBwaXhlbCBkZWx0YSAgKHdoZWVsRGVsdGEgLTEyMClcbiAqICAgT1MgWCArIFNhZmFyaSAgKG1vdXNlKSAgICAgLSAgTi9BICAgcGl4ZWwgZGVsdGEgICh3aGVlbERlbHRhICAtMTIpXG4gKiAgIE9TIFggKyBGaXJlZm94IChtb3VzZSkgICAgIC0gICAgMC4xIGxpbmUgIGRlbHRhICAod2hlZWxEZWx0YSAgTi9BKVxuICogICBXaW44ICsgQ2hyb21lICAobW91c2UpICAgICAtICAxMDAgICBwaXhlbCBkZWx0YSAgKHdoZWVsRGVsdGEgLTEyMClcbiAqICAgV2luOCArIEZpcmVmb3ggKG1vdXNlKSAgICAgLSAgICAzICAgbGluZSAgZGVsdGEgICh3aGVlbERlbHRhIC0xMjApXG4gKlxuICogT24gdGhlIHRyYWNrcGFkOlxuICpcbiAqICAgT1MgWCArIENocm9tZSAgKHRyYWNrcGFkKSAgLSAgICAyICAgcGl4ZWwgZGVsdGEgICh3aGVlbERlbHRhICAgLTYpXG4gKiAgIE9TIFggKyBGaXJlZm94ICh0cmFja3BhZCkgIC0gICAgMSAgIHBpeGVsIGRlbHRhICAod2hlZWxEZWx0YSAgTi9BKVxuICpcbiAqIE9uIG90aGVyL29sZGVyIGJyb3dzZXJzLi4gaXQncyBtb3JlIGNvbXBsaWNhdGVkIGFzIHRoZXJlIGNhbiBiZSBtdWx0aXBsZSBhbmRcbiAqIGFsc28gbWlzc2luZyBkZWx0YSB2YWx1ZXMuXG4gKlxuICogVGhlICd3aGVlbCcgZXZlbnQgaXMgbW9yZSBzdGFuZGFyZDpcbiAqXG4gKiBodHRwOi8vd3d3LnczLm9yZy9UUi9ET00tTGV2ZWwtMy1FdmVudHMvI2V2ZW50cy13aGVlbGV2ZW50c1xuICpcbiAqIFRoZSBiYXNpY3MgaXMgdGhhdCBpdCBpbmNsdWRlcyBhIHVuaXQsIGRlbHRhTW9kZSAocGl4ZWxzLCBsaW5lcywgcGFnZXMpLCBhbmRcbiAqIGRlbHRhWCwgZGVsdGFZIGFuZCBkZWx0YVouICBTb21lIGJyb3dzZXJzIHByb3ZpZGUgb3RoZXIgdmFsdWVzIHRvIG1haW50YWluXG4gKiBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggb2xkZXIgZXZlbnRzLiAgVGhvc2Ugb3RoZXIgdmFsdWVzIGhlbHAgdXNcbiAqIGJldHRlciBub3JtYWxpemUgc3BpbiBzcGVlZC4gIEV4YW1wbGUgb2Ygd2hhdCB0aGUgYnJvd3NlcnMgcHJvdmlkZTpcbiAqXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgfCBldmVudC53aGVlbERlbHRhIHwgZXZlbnQuZGV0YWlsXG4gKiAgICAgICAgLS0tLS0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLVxuICogICAgICAgICAgU2FmYXJpIHY1L09TIFggIHwgICAgICAgLTEyMCAgICAgICB8ICAgICAgIDBcbiAqICAgICAgICAgIFNhZmFyaSB2NS9XaW43ICB8ICAgICAgIC0xMjAgICAgICAgfCAgICAgICAwXG4gKiAgICAgICAgIENocm9tZSB2MTcvT1MgWCAgfCAgICAgICAtMTIwICAgICAgIHwgICAgICAgMFxuICogICAgICAgICBDaHJvbWUgdjE3L1dpbjcgIHwgICAgICAgLTEyMCAgICAgICB8ICAgICAgIDBcbiAqICAgICAgICAgICAgICAgIElFOS9XaW43ICB8ICAgICAgIC0xMjAgICAgICAgfCAgIHVuZGVmaW5lZFxuICogICAgICAgICBGaXJlZm94IHY0L09TIFggIHwgICAgIHVuZGVmaW5lZCAgICB8ICAgICAgIDFcbiAqICAgICAgICAgRmlyZWZveCB2NC9XaW43ICB8ICAgICB1bmRlZmluZWQgICAgfCAgICAgICAzXG4gKlxuICovXG5mdW5jdGlvbiBub3JtYWxpemVXaGVlbCggLypvYmplY3QqL2V2ZW50KSAvKm9iamVjdCove1xuICB2YXIgc1ggPSAwLFxuICAgICAgc1kgPSAwLFxuICAgICAgLy8gc3BpblgsIHNwaW5ZXG4gIHBYID0gMCxcbiAgICAgIHBZID0gMDsgLy8gcGl4ZWxYLCBwaXhlbFlcblxuICAvLyBMZWdhY3lcbiAgaWYgKCdkZXRhaWwnIGluIGV2ZW50KSB7XG4gICAgc1kgPSBldmVudC5kZXRhaWw7XG4gIH1cbiAgaWYgKCd3aGVlbERlbHRhJyBpbiBldmVudCkge1xuICAgIHNZID0gLWV2ZW50LndoZWVsRGVsdGEgLyAxMjA7XG4gIH1cbiAgaWYgKCd3aGVlbERlbHRhWScgaW4gZXZlbnQpIHtcbiAgICBzWSA9IC1ldmVudC53aGVlbERlbHRhWSAvIDEyMDtcbiAgfVxuICBpZiAoJ3doZWVsRGVsdGFYJyBpbiBldmVudCkge1xuICAgIHNYID0gLWV2ZW50LndoZWVsRGVsdGFYIC8gMTIwO1xuICB9XG5cbiAgLy8gc2lkZSBzY3JvbGxpbmcgb24gRkYgd2l0aCBET01Nb3VzZVNjcm9sbFxuICBpZiAoJ2F4aXMnIGluIGV2ZW50ICYmIGV2ZW50LmF4aXMgPT09IGV2ZW50LkhPUklaT05UQUxfQVhJUykge1xuICAgIHNYID0gc1k7XG4gICAgc1kgPSAwO1xuICB9XG5cbiAgcFggPSBzWCAqIFBJWEVMX1NURVA7XG4gIHBZID0gc1kgKiBQSVhFTF9TVEVQO1xuXG4gIGlmICgnZGVsdGFZJyBpbiBldmVudCkge1xuICAgIHBZID0gZXZlbnQuZGVsdGFZO1xuICB9XG4gIGlmICgnZGVsdGFYJyBpbiBldmVudCkge1xuICAgIHBYID0gZXZlbnQuZGVsdGFYO1xuICB9XG5cbiAgaWYgKChwWCB8fCBwWSkgJiYgZXZlbnQuZGVsdGFNb2RlKSB7XG4gICAgaWYgKGV2ZW50LmRlbHRhTW9kZSA9PSAxKSB7XG4gICAgICAvLyBkZWx0YSBpbiBMSU5FIHVuaXRzXG4gICAgICBwWCAqPSBMSU5FX0hFSUdIVDtcbiAgICAgIHBZICo9IExJTkVfSEVJR0hUO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBkZWx0YSBpbiBQQUdFIHVuaXRzXG4gICAgICBwWCAqPSBQQUdFX0hFSUdIVDtcbiAgICAgIHBZICo9IFBBR0VfSEVJR0hUO1xuICAgIH1cbiAgfVxuXG4gIC8vIEZhbGwtYmFjayBpZiBzcGluIGNhbm5vdCBiZSBkZXRlcm1pbmVkXG4gIGlmIChwWCAmJiAhc1gpIHtcbiAgICBzWCA9IHBYIDwgMSA/IC0xIDogMTtcbiAgfVxuICBpZiAocFkgJiYgIXNZKSB7XG4gICAgc1kgPSBwWSA8IDEgPyAtMSA6IDE7XG4gIH1cblxuICByZXR1cm4geyBzcGluWDogc1gsXG4gICAgc3Bpblk6IHNZLFxuICAgIHBpeGVsWDogcFgsXG4gICAgcGl4ZWxZOiBwWSB9O1xufVxuXG4vKipcbiAqIFRoZSBiZXN0IGNvbWJpbmF0aW9uIGlmIHlvdSBwcmVmZXIgc3BpblggKyBzcGluWSBub3JtYWxpemF0aW9uLiAgSXQgZmF2b3JzXG4gKiB0aGUgb2xkZXIgRE9NTW91c2VTY3JvbGwgZm9yIEZpcmVmb3gsIGFzIEZGIGRvZXMgbm90IGluY2x1ZGUgd2hlZWxEZWx0YSB3aXRoXG4gKiAnd2hlZWwnIGV2ZW50LCBtYWtpbmcgc3BpbiBzcGVlZCBkZXRlcm1pbmF0aW9uIGltcG9zc2libGUuXG4gKi9cbm5vcm1hbGl6ZVdoZWVsLmdldEV2ZW50VHlwZSA9IGZ1bmN0aW9uICgpIC8qc3RyaW5nKi97XG4gIHJldHVybiBVc2VyQWdlbnRfREVQUkVDQVRFRC5maXJlZm94KCkgPyAnRE9NTW91c2VTY3JvbGwnIDogaXNFdmVudFN1cHBvcnRlZCgnd2hlZWwnKSA/ICd3aGVlbCcgOiAnbW91c2V3aGVlbCc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5vcm1hbGl6ZVdoZWVsO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvbm9ybWFsaXplV2hlZWwuanNcbiAqKiBtb2R1bGUgaWQgPSA0MzZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMDQtcHJlc2VudCBGYWNlYm9vay4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgVXNlckFnZW50X0RFUFJFQ0FURURcbiAqL1xuXG4vKipcbiAqICBQcm92aWRlcyBlbnRpcmVseSBjbGllbnQtc2lkZSBVc2VyIEFnZW50IGFuZCBPUyBkZXRlY3Rpb24uIFlvdSBzaG91bGQgcHJlZmVyXG4gKiAgdGhlIG5vbi1kZXByZWNhdGVkIFVzZXJBZ2VudCBtb2R1bGUgd2hlbiBwb3NzaWJsZSwgd2hpY2ggZXhwb3NlcyBvdXJcbiAqICBhdXRob3JpdGF0aXZlIHNlcnZlci1zaWRlIFBIUC1iYXNlZCBkZXRlY3Rpb24gdG8gdGhlIGNsaWVudC5cbiAqXG4gKiAgVXNhZ2UgaXMgc3RyYWlnaHRmb3J3YXJkOlxuICpcbiAqICAgIGlmIChVc2VyQWdlbnRfREVQUkVDQVRFRC5pZSgpKSB7XG4gKiAgICAgIC8vICBJRVxuICogICAgfVxuICpcbiAqICBZb3UgY2FuIGFsc28gZG8gdmVyc2lvbiBjaGVja3M6XG4gKlxuICogICAgaWYgKFVzZXJBZ2VudF9ERVBSRUNBVEVELmllKCkgPj0gNykge1xuICogICAgICAvLyAgSUU3IG9yIGJldHRlclxuICogICAgfVxuICpcbiAqICBUaGUgYnJvd3NlciBmdW5jdGlvbnMgd2lsbCByZXR1cm4gTmFOIGlmIHRoZSBicm93c2VyIGRvZXMgbm90IG1hdGNoLCBzb1xuICogIHlvdSBjYW4gYWxzbyBkbyB2ZXJzaW9uIGNvbXBhcmVzIHRoZSBvdGhlciB3YXk6XG4gKlxuICogICAgaWYgKFVzZXJBZ2VudF9ERVBSRUNBVEVELmllKCkgPCA3KSB7XG4gKiAgICAgIC8vICBJRTYgb3Igd29yc2VcbiAqICAgIH1cbiAqXG4gKiAgTm90ZSB0aGF0IHRoZSB2ZXJzaW9uIGlzIGEgZmxvYXQgYW5kIG1heSBpbmNsdWRlIGEgbWlub3IgdmVyc2lvbiBudW1iZXIsXG4gKiAgc28geW91IHNob3VsZCBhbHdheXMgdXNlIHJhbmdlIG9wZXJhdG9ycyB0byBwZXJmb3JtIGNvbXBhcmlzb25zLCBub3RcbiAqICBzdHJpY3QgZXF1YWxpdHkuXG4gKlxuICogICoqTm90ZToqKiBZb3Ugc2hvdWxkICoqc3Ryb25nbHkqKiBwcmVmZXIgY2FwYWJpbGl0eSBkZXRlY3Rpb24gdG8gYnJvd3NlclxuICogIHZlcnNpb24gZGV0ZWN0aW9uIHdoZXJlIGl0J3MgcmVhc29uYWJsZTpcbiAqXG4gKiAgICBodHRwOi8vd3d3LnF1aXJrc21vZGUub3JnL2pzL3N1cHBvcnQuaHRtbFxuICpcbiAqICBGdXJ0aGVyLCB3ZSBoYXZlIGEgbGFyZ2UgbnVtYmVyIG9mIG1hdHVyZSB3cmFwcGVyIGZ1bmN0aW9ucyBhbmQgY2xhc3Nlc1xuICogIHdoaWNoIGFic3RyYWN0IGF3YXkgbWFueSBicm93c2VyIGlycmVndWxhcml0aWVzLiBDaGVjayB0aGUgZG9jdW1lbnRhdGlvbixcbiAqICBncmVwIGZvciB0aGluZ3MsIG9yIGFzayBvbiBqYXZhc2NyaXB0QGxpc3RzLmZhY2Vib29rLmNvbSBiZWZvcmUgd3JpdGluZyB5ZXRcbiAqICBhbm90aGVyIGNvcHkgb2YgXCJldmVudCB8fCB3aW5kb3cuZXZlbnRcIi5cbiAqXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3BvcHVsYXRlZCA9IGZhbHNlO1xuXG4vLyBCcm93c2Vyc1xudmFyIF9pZSwgX2ZpcmVmb3gsIF9vcGVyYSwgX3dlYmtpdCwgX2Nocm9tZTtcblxuLy8gQWN0dWFsIElFIGJyb3dzZXIgZm9yIGNvbXBhdGliaWxpdHkgbW9kZVxudmFyIF9pZV9yZWFsX3ZlcnNpb247XG5cbi8vIFBsYXRmb3Jtc1xudmFyIF9vc3gsIF93aW5kb3dzLCBfbGludXgsIF9hbmRyb2lkO1xuXG4vLyBBcmNoaXRlY3R1cmVzXG52YXIgX3dpbjY0O1xuXG4vLyBEZXZpY2VzXG52YXIgX2lwaG9uZSwgX2lwYWQsIF9uYXRpdmU7XG5cbnZhciBfbW9iaWxlO1xuXG5mdW5jdGlvbiBfcG9wdWxhdGUoKSB7XG4gIGlmIChfcG9wdWxhdGVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgX3BvcHVsYXRlZCA9IHRydWU7XG5cbiAgLy8gVG8gd29yayBhcm91bmQgYnVnZ3kgSlMgbGlicmFyaWVzIHRoYXQgY2FuJ3QgaGFuZGxlIG11bHRpLWRpZ2l0XG4gIC8vIHZlcnNpb24gbnVtYmVycywgT3BlcmEgMTAncyB1c2VyIGFnZW50IHN0cmluZyBjbGFpbXMgaXQncyBPcGVyYVxuICAvLyA5LCB0aGVuIGxhdGVyIGluY2x1ZGVzIGEgVmVyc2lvbi9YLlkgZmllbGQ6XG4gIC8vXG4gIC8vIE9wZXJhLzkuODAgKGZvbykgUHJlc3RvLzIuMi4xNSBWZXJzaW9uLzEwLjEwXG4gIHZhciB1YXMgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuICB2YXIgYWdlbnQgPSAvKD86TVNJRS4oXFxkK1xcLlxcZCspKXwoPzooPzpGaXJlZm94fEdyYW5QYXJhZGlzb3xJY2V3ZWFzZWwpLihcXGQrXFwuXFxkKykpfCg/Ok9wZXJhKD86LitWZXJzaW9uLnwuKShcXGQrXFwuXFxkKykpfCg/OkFwcGxlV2ViS2l0LihcXGQrKD86XFwuXFxkKyk/KSl8KD86VHJpZGVudFxcL1xcZCtcXC5cXGQrLipydjooXFxkK1xcLlxcZCspKS8uZXhlYyh1YXMpO1xuICB2YXIgb3MgPSAvKE1hYyBPUyBYKXwoV2luZG93cyl8KExpbnV4KS8uZXhlYyh1YXMpO1xuXG4gIF9pcGhvbmUgPSAvXFxiKGlQaG9uZXxpUFthb11kKS8uZXhlYyh1YXMpO1xuICBfaXBhZCA9IC9cXGIoaVBbYW9dZCkvLmV4ZWModWFzKTtcbiAgX2FuZHJvaWQgPSAvQW5kcm9pZC9pLmV4ZWModWFzKTtcbiAgX25hdGl2ZSA9IC9GQkFOXFwvXFx3KzsvaS5leGVjKHVhcyk7XG4gIF9tb2JpbGUgPSAvTW9iaWxlL2kuZXhlYyh1YXMpO1xuXG4gIC8vIE5vdGUgdGhhdCB0aGUgSUUgdGVhbSBibG9nIHdvdWxkIGhhdmUgeW91IGJlbGlldmUgeW91IHNob3VsZCBiZSBjaGVja2luZ1xuICAvLyBmb3IgJ1dpbjY0OyB4NjQnLiAgQnV0IE1TRE4gdGhlbiByZXZlYWxzIHRoYXQgeW91IGNhbiBhY3R1YWxseSBiZSBjb21pbmdcbiAgLy8gZnJvbSBlaXRoZXIgeDY0IG9yIGlhNjQ7ICBzbyB1bHRpbWF0ZWx5LCB5b3Ugc2hvdWxkIGp1c3QgY2hlY2sgZm9yIFdpbjY0XG4gIC8vIGFzIGluIGluZGljYXRvciBvZiB3aGV0aGVyIHlvdSdyZSBpbiA2NC1iaXQgSUUuICAzMi1iaXQgSUUgb24gNjQtYml0XG4gIC8vIFdpbmRvd3Mgd2lsbCBzZW5kICdXT1c2NCcgaW5zdGVhZC5cbiAgX3dpbjY0ID0gISEvV2luNjQvLmV4ZWModWFzKTtcblxuICBpZiAoYWdlbnQpIHtcbiAgICBfaWUgPSBhZ2VudFsxXSA/IHBhcnNlRmxvYXQoYWdlbnRbMV0pIDogYWdlbnRbNV0gPyBwYXJzZUZsb2F0KGFnZW50WzVdKSA6IE5hTjtcbiAgICAvLyBJRSBjb21wYXRpYmlsaXR5IG1vZGVcbiAgICBpZiAoX2llICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50TW9kZSkge1xuICAgICAgX2llID0gZG9jdW1lbnQuZG9jdW1lbnRNb2RlO1xuICAgIH1cbiAgICAvLyBncmFiIHRoZSBcInRydWVcIiBpZSB2ZXJzaW9uIGZyb20gdGhlIHRyaWRlbnQgdG9rZW4gaWYgYXZhaWxhYmxlXG4gICAgdmFyIHRyaWRlbnQgPSAvKD86VHJpZGVudFxcLyhcXGQrLlxcZCspKS8uZXhlYyh1YXMpO1xuICAgIF9pZV9yZWFsX3ZlcnNpb24gPSB0cmlkZW50ID8gcGFyc2VGbG9hdCh0cmlkZW50WzFdKSArIDQgOiBfaWU7XG5cbiAgICBfZmlyZWZveCA9IGFnZW50WzJdID8gcGFyc2VGbG9hdChhZ2VudFsyXSkgOiBOYU47XG4gICAgX29wZXJhID0gYWdlbnRbM10gPyBwYXJzZUZsb2F0KGFnZW50WzNdKSA6IE5hTjtcbiAgICBfd2Via2l0ID0gYWdlbnRbNF0gPyBwYXJzZUZsb2F0KGFnZW50WzRdKSA6IE5hTjtcbiAgICBpZiAoX3dlYmtpdCkge1xuICAgICAgLy8gV2UgZG8gbm90IGFkZCB0aGUgcmVnZXhwIHRvIHRoZSBhYm92ZSB0ZXN0LCBiZWNhdXNlIGl0IHdpbGwgYWx3YXlzXG4gICAgICAvLyBtYXRjaCAnc2FmYXJpJyBvbmx5IHNpbmNlICdBcHBsZVdlYktpdCcgYXBwZWFycyBiZWZvcmUgJ0Nocm9tZScgaW5cbiAgICAgIC8vIHRoZSB1c2VyQWdlbnQgc3RyaW5nLlxuICAgICAgYWdlbnQgPSAvKD86Q2hyb21lXFwvKFxcZCtcXC5cXGQrKSkvLmV4ZWModWFzKTtcbiAgICAgIF9jaHJvbWUgPSBhZ2VudCAmJiBhZ2VudFsxXSA/IHBhcnNlRmxvYXQoYWdlbnRbMV0pIDogTmFOO1xuICAgIH0gZWxzZSB7XG4gICAgICBfY2hyb21lID0gTmFOO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBfaWUgPSBfZmlyZWZveCA9IF9vcGVyYSA9IF9jaHJvbWUgPSBfd2Via2l0ID0gTmFOO1xuICB9XG5cbiAgaWYgKG9zKSB7XG4gICAgaWYgKG9zWzFdKSB7XG4gICAgICAvLyBEZXRlY3QgT1MgWCB2ZXJzaW9uLiAgSWYgbm8gdmVyc2lvbiBudW1iZXIgbWF0Y2hlcywgc2V0IF9vc3ggdG8gdHJ1ZS5cbiAgICAgIC8vIFZlcnNpb24gZXhhbXBsZXM6ICAxMCwgMTBfNl8xLCAxMC43XG4gICAgICAvLyBQYXJzZXMgdmVyc2lvbiBudW1iZXIgYXMgYSBmbG9hdCwgdGFraW5nIG9ubHkgZmlyc3QgdHdvIHNldHMgb2ZcbiAgICAgIC8vIGRpZ2l0cy4gIElmIG9ubHkgb25lIHNldCBvZiBkaWdpdHMgaXMgZm91bmQsIHJldHVybnMganVzdCB0aGUgbWFqb3JcbiAgICAgIC8vIHZlcnNpb24gbnVtYmVyLlxuICAgICAgdmFyIHZlciA9IC8oPzpNYWMgT1MgWCAoXFxkKyg/OlsuX11cXGQrKT8pKS8uZXhlYyh1YXMpO1xuXG4gICAgICBfb3N4ID0gdmVyID8gcGFyc2VGbG9hdCh2ZXJbMV0ucmVwbGFjZSgnXycsICcuJykpIDogdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgX29zeCA9IGZhbHNlO1xuICAgIH1cbiAgICBfd2luZG93cyA9ICEhb3NbMl07XG4gICAgX2xpbnV4ID0gISFvc1szXTtcbiAgfSBlbHNlIHtcbiAgICBfb3N4ID0gX3dpbmRvd3MgPSBfbGludXggPSBmYWxzZTtcbiAgfVxufVxuXG52YXIgVXNlckFnZW50X0RFUFJFQ0FURUQgPSB7XG5cbiAgLyoqXG4gICAqICBDaGVjayBpZiB0aGUgVUEgaXMgSW50ZXJuZXQgRXhwbG9yZXIuXG4gICAqXG4gICAqXG4gICAqICBAcmV0dXJuIGZsb2F0fE5hTiBWZXJzaW9uIG51bWJlciAoaWYgbWF0Y2gpIG9yIE5hTi5cbiAgICovXG4gIGllOiBmdW5jdGlvbiBpZSgpIHtcbiAgICByZXR1cm4gX3BvcHVsYXRlKCkgfHwgX2llO1xuICB9LFxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB3ZSdyZSBpbiBJbnRlcm5ldCBFeHBsb3JlciBjb21wYXRpYmlsaXR5IG1vZGUuXG4gICAqXG4gICAqIEByZXR1cm4gYm9vbCB0cnVlIGlmIGluIGNvbXBhdGliaWxpdHkgbW9kZSwgZmFsc2UgaWZcbiAgICogbm90IGNvbXBhdGliaWxpdHkgbW9kZSBvciBub3QgaWVcbiAgICovXG4gIGllQ29tcGF0aWJpbGl0eU1vZGU6IGZ1bmN0aW9uIGllQ29tcGF0aWJpbGl0eU1vZGUoKSB7XG4gICAgcmV0dXJuIF9wb3B1bGF0ZSgpIHx8IF9pZV9yZWFsX3ZlcnNpb24gPiBfaWU7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIGJyb3dzZXIgaXMgNjQtYml0IElFLiAgUmVhbGx5LCB0aGlzIGlzIGtpbmQgb2Ygd2VhayBzYXVjZTsgIHdlXG4gICAqIG9ubHkgbmVlZCB0aGlzIGJlY2F1c2UgU2t5cGUgY2FuJ3QgaGFuZGxlIDY0LWJpdCBJRSB5ZXQuICBXZSBuZWVkIHRvIHJlbW92ZVxuICAgKiB0aGlzIHdoZW4gd2UgZG9uJ3QgbmVlZCBpdCAtLSB0cmFja2VkIGJ5ICM2MDE5NTcuXG4gICAqL1xuICBpZTY0OiBmdW5jdGlvbiBpZTY0KCkge1xuICAgIHJldHVybiBVc2VyQWdlbnRfREVQUkVDQVRFRC5pZSgpICYmIF93aW42NDtcbiAgfSxcblxuICAvKipcbiAgICogIENoZWNrIGlmIHRoZSBVQSBpcyBGaXJlZm94LlxuICAgKlxuICAgKlxuICAgKiAgQHJldHVybiBmbG9hdHxOYU4gVmVyc2lvbiBudW1iZXIgKGlmIG1hdGNoKSBvciBOYU4uXG4gICAqL1xuICBmaXJlZm94OiBmdW5jdGlvbiBmaXJlZm94KCkge1xuICAgIHJldHVybiBfcG9wdWxhdGUoKSB8fCBfZmlyZWZveDtcbiAgfSxcblxuICAvKipcbiAgICogIENoZWNrIGlmIHRoZSBVQSBpcyBPcGVyYS5cbiAgICpcbiAgICpcbiAgICogIEByZXR1cm4gZmxvYXR8TmFOIFZlcnNpb24gbnVtYmVyIChpZiBtYXRjaCkgb3IgTmFOLlxuICAgKi9cbiAgb3BlcmE6IGZ1bmN0aW9uIG9wZXJhKCkge1xuICAgIHJldHVybiBfcG9wdWxhdGUoKSB8fCBfb3BlcmE7XG4gIH0sXG5cbiAgLyoqXG4gICAqICBDaGVjayBpZiB0aGUgVUEgaXMgV2ViS2l0LlxuICAgKlxuICAgKlxuICAgKiAgQHJldHVybiBmbG9hdHxOYU4gVmVyc2lvbiBudW1iZXIgKGlmIG1hdGNoKSBvciBOYU4uXG4gICAqL1xuICB3ZWJraXQ6IGZ1bmN0aW9uIHdlYmtpdCgpIHtcbiAgICByZXR1cm4gX3BvcHVsYXRlKCkgfHwgX3dlYmtpdDtcbiAgfSxcblxuICAvKipcbiAgICogIEZvciBQdXNoXG4gICAqICBXSUxMIEJFIFJFTU9WRUQgVkVSWSBTT09OLiBVc2UgVXNlckFnZW50X0RFUFJFQ0FURUQud2Via2l0XG4gICAqL1xuICBzYWZhcmk6IGZ1bmN0aW9uIHNhZmFyaSgpIHtcbiAgICByZXR1cm4gVXNlckFnZW50X0RFUFJFQ0FURUQud2Via2l0KCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqICBDaGVjayBpZiB0aGUgVUEgaXMgYSBDaHJvbWUgYnJvd3Nlci5cbiAgICpcbiAgICpcbiAgICogIEByZXR1cm4gZmxvYXR8TmFOIFZlcnNpb24gbnVtYmVyIChpZiBtYXRjaCkgb3IgTmFOLlxuICAgKi9cbiAgY2hyb21lOiBmdW5jdGlvbiBjaHJvbWUoKSB7XG4gICAgcmV0dXJuIF9wb3B1bGF0ZSgpIHx8IF9jaHJvbWU7XG4gIH0sXG5cbiAgLyoqXG4gICAqICBDaGVjayBpZiB0aGUgdXNlciBpcyBydW5uaW5nIFdpbmRvd3MuXG4gICAqXG4gICAqICBAcmV0dXJuIGJvb2wgYHRydWUnIGlmIHRoZSB1c2VyJ3MgT1MgaXMgV2luZG93cy5cbiAgICovXG4gIHdpbmRvd3M6IGZ1bmN0aW9uIHdpbmRvd3MoKSB7XG4gICAgcmV0dXJuIF9wb3B1bGF0ZSgpIHx8IF93aW5kb3dzO1xuICB9LFxuXG4gIC8qKlxuICAgKiAgQ2hlY2sgaWYgdGhlIHVzZXIgaXMgcnVubmluZyBNYWMgT1MgWC5cbiAgICpcbiAgICogIEByZXR1cm4gZmxvYXR8Ym9vbCAgIFJldHVybnMgYSBmbG9hdCBpZiBhIHZlcnNpb24gbnVtYmVyIGlzIGRldGVjdGVkLFxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJ3aXNlIHRydWUvZmFsc2UuXG4gICAqL1xuICBvc3g6IGZ1bmN0aW9uIG9zeCgpIHtcbiAgICByZXR1cm4gX3BvcHVsYXRlKCkgfHwgX29zeDtcbiAgfSxcblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIHVzZXIgaXMgcnVubmluZyBMaW51eC5cbiAgICpcbiAgICogQHJldHVybiBib29sIGB0cnVlJyBpZiB0aGUgdXNlcidzIE9TIGlzIHNvbWUgZmxhdm9yIG9mIExpbnV4LlxuICAgKi9cbiAgbGludXg6IGZ1bmN0aW9uIGxpbnV4KCkge1xuICAgIHJldHVybiBfcG9wdWxhdGUoKSB8fCBfbGludXg7XG4gIH0sXG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZSB1c2VyIGlzIHJ1bm5pbmcgb24gYW4gaVBob25lIG9yIGlQb2QgcGxhdGZvcm0uXG4gICAqXG4gICAqIEByZXR1cm4gYm9vbCBgdHJ1ZScgaWYgdGhlIHVzZXIgaXMgcnVubmluZyBzb21lIGZsYXZvciBvZiB0aGVcbiAgICogICAgaVBob25lIE9TLlxuICAgKi9cbiAgaXBob25lOiBmdW5jdGlvbiBpcGhvbmUoKSB7XG4gICAgcmV0dXJuIF9wb3B1bGF0ZSgpIHx8IF9pcGhvbmU7XG4gIH0sXG5cbiAgbW9iaWxlOiBmdW5jdGlvbiBtb2JpbGUoKSB7XG4gICAgcmV0dXJuIF9wb3B1bGF0ZSgpIHx8IF9pcGhvbmUgfHwgX2lwYWQgfHwgX2FuZHJvaWQgfHwgX21vYmlsZTtcbiAgfSxcblxuICBuYXRpdmVBcHA6IGZ1bmN0aW9uIG5hdGl2ZUFwcCgpIHtcbiAgICAvLyB3ZWJ2aWV3cyBpbnNpZGUgb2YgdGhlIG5hdGl2ZSBhcHBzXG4gICAgcmV0dXJuIF9wb3B1bGF0ZSgpIHx8IF9uYXRpdmU7XG4gIH0sXG5cbiAgYW5kcm9pZDogZnVuY3Rpb24gYW5kcm9pZCgpIHtcbiAgICByZXR1cm4gX3BvcHVsYXRlKCkgfHwgX2FuZHJvaWQ7XG4gIH0sXG5cbiAgaXBhZDogZnVuY3Rpb24gaXBhZCgpIHtcbiAgICByZXR1cm4gX3BvcHVsYXRlKCkgfHwgX2lwYWQ7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVXNlckFnZW50X0RFUFJFQ0FURUQ7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9Vc2VyQWdlbnRfREVQUkVDQVRFRC5qc1xuICoqIG1vZHVsZSBpZCA9IDQzN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIGlzRXZlbnRTdXBwb3J0ZWRcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBFeGVjdXRpb25FbnZpcm9ubWVudCA9IHJlcXVpcmUoJy4vRXhlY3V0aW9uRW52aXJvbm1lbnQnKTtcblxudmFyIHVzZUhhc0ZlYXR1cmU7XG5pZiAoRXhlY3V0aW9uRW52aXJvbm1lbnQuY2FuVXNlRE9NKSB7XG4gIHVzZUhhc0ZlYXR1cmUgPSBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbiAmJiBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5oYXNGZWF0dXJlICYmXG4gIC8vIGFsd2F5cyByZXR1cm5zIHRydWUgaW4gbmV3ZXIgYnJvd3NlcnMgYXMgcGVyIHRoZSBzdGFuZGFyZC5cbiAgLy8gQHNlZSBodHRwOi8vZG9tLnNwZWMud2hhdHdnLm9yZy8jZG9tLWRvbWltcGxlbWVudGF0aW9uLWhhc2ZlYXR1cmVcbiAgZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uaGFzRmVhdHVyZSgnJywgJycpICE9PSB0cnVlO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhbiBldmVudCBpcyBzdXBwb3J0ZWQgaW4gdGhlIGN1cnJlbnQgZXhlY3V0aW9uIGVudmlyb25tZW50LlxuICpcbiAqIE5PVEU6IFRoaXMgd2lsbCBub3Qgd29yayBjb3JyZWN0bHkgZm9yIG5vbi1nZW5lcmljIGV2ZW50cyBzdWNoIGFzIGBjaGFuZ2VgLFxuICogYHJlc2V0YCwgYGxvYWRgLCBgZXJyb3JgLCBhbmQgYHNlbGVjdGAuXG4gKlxuICogQm9ycm93cyBmcm9tIE1vZGVybml6ci5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lU3VmZml4IEV2ZW50IG5hbWUsIGUuZy4gXCJjbGlja1wiLlxuICogQHBhcmFtIHs/Ym9vbGVhbn0gY2FwdHVyZSBDaGVjayBpZiB0aGUgY2FwdHVyZSBwaGFzZSBpcyBzdXBwb3J0ZWQuXG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZSBldmVudCBpcyBzdXBwb3J0ZWQuXG4gKiBAaW50ZXJuYWxcbiAqIEBsaWNlbnNlIE1vZGVybml6ciAzLjAuMHByZSAoQ3VzdG9tIEJ1aWxkKSB8IE1JVFxuICovXG5mdW5jdGlvbiBpc0V2ZW50U3VwcG9ydGVkKGV2ZW50TmFtZVN1ZmZpeCwgY2FwdHVyZSkge1xuICBpZiAoIUV4ZWN1dGlvbkVudmlyb25tZW50LmNhblVzZURPTSB8fCBjYXB0dXJlICYmICEoJ2FkZEV2ZW50TGlzdGVuZXInIGluIGRvY3VtZW50KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBldmVudE5hbWUgPSAnb24nICsgZXZlbnROYW1lU3VmZml4O1xuICB2YXIgaXNTdXBwb3J0ZWQgPSAoZXZlbnROYW1lIGluIGRvY3VtZW50KTtcblxuICBpZiAoIWlzU3VwcG9ydGVkKSB7XG4gICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShldmVudE5hbWUsICdyZXR1cm47Jyk7XG4gICAgaXNTdXBwb3J0ZWQgPSB0eXBlb2YgZWxlbWVudFtldmVudE5hbWVdID09PSAnZnVuY3Rpb24nO1xuICB9XG5cbiAgaWYgKCFpc1N1cHBvcnRlZCAmJiB1c2VIYXNGZWF0dXJlICYmIGV2ZW50TmFtZVN1ZmZpeCA9PT0gJ3doZWVsJykge1xuICAgIC8vIFRoaXMgaXMgdGhlIG9ubHkgd2F5IHRvIHRlc3Qgc3VwcG9ydCBmb3IgdGhlIGB3aGVlbGAgZXZlbnQgaW4gSUU5Ky5cbiAgICBpc1N1cHBvcnRlZCA9IGRvY3VtZW50LmltcGxlbWVudGF0aW9uLmhhc0ZlYXR1cmUoJ0V2ZW50cy53aGVlbCcsICczLjAnKTtcbiAgfVxuXG4gIHJldHVybiBpc1N1cHBvcnRlZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0V2ZW50U3VwcG9ydGVkO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvaXNFdmVudFN1cHBvcnRlZC5qc1xuICoqIG1vZHVsZSBpZCA9IDQzOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgRXhlY3V0aW9uRW52aXJvbm1lbnRcbiAqL1xuXG4vKmpzbGludCBldmlsOiB0cnVlICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGNhblVzZURPTSA9ICEhKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCAmJiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5cbi8qKlxuICogU2ltcGxlLCBsaWdodHdlaWdodCBtb2R1bGUgYXNzaXN0aW5nIHdpdGggdGhlIGRldGVjdGlvbiBhbmQgY29udGV4dCBvZlxuICogV29ya2VyLiBIZWxwcyBhdm9pZCBjaXJjdWxhciBkZXBlbmRlbmNpZXMgYW5kIGFsbG93cyBjb2RlIHRvIHJlYXNvbiBhYm91dFxuICogd2hldGhlciBvciBub3QgdGhleSBhcmUgaW4gYSBXb3JrZXIsIGV2ZW4gaWYgdGhleSBuZXZlciBpbmNsdWRlIHRoZSBtYWluXG4gKiBgUmVhY3RXb3JrZXJgIGRlcGVuZGVuY3kuXG4gKi9cbnZhciBFeGVjdXRpb25FbnZpcm9ubWVudCA9IHtcblxuICBjYW5Vc2VET006IGNhblVzZURPTSxcblxuICBjYW5Vc2VXb3JrZXJzOiB0eXBlb2YgV29ya2VyICE9PSAndW5kZWZpbmVkJyxcblxuICBjYW5Vc2VFdmVudExpc3RlbmVyczogY2FuVXNlRE9NICYmICEhKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyIHx8IHdpbmRvdy5hdHRhY2hFdmVudCksXG5cbiAgY2FuVXNlVmlld3BvcnQ6IGNhblVzZURPTSAmJiAhIXdpbmRvdy5zY3JlZW4sXG5cbiAgaXNJbldvcmtlcjogIWNhblVzZURPTSAvLyBGb3Igbm93LCB0aGlzIGlzIHRydWUgLSBtaWdodCBjaGFuZ2UgaW4gdGhlIGZ1dHVyZS5cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBFeGVjdXRpb25FbnZpcm9ubWVudDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL0V4ZWN1dGlvbkVudmlyb25tZW50LmpzXG4gKiogbW9kdWxlIGlkID0gNDM5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSByZXF1ZXN0QW5pbWF0aW9uRnJhbWVQb2x5ZmlsbFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGVtcHR5RnVuY3Rpb24gPSByZXF1aXJlKCcuL2VtcHR5RnVuY3Rpb24nKTtcbnZhciBuYXRpdmVSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSByZXF1aXJlKCcuL25hdGl2ZVJlcXVlc3RBbmltYXRpb25GcmFtZScpO1xuXG52YXIgbGFzdFRpbWUgPSAwO1xuXG4vKipcbiAqIEhlcmUgaXMgdGhlIG5hdGl2ZSBhbmQgcG9seWZpbGwgdmVyc2lvbiBvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUuXG4gKiBQbGVhc2UgZG9uJ3QgdXNlIGl0IGRpcmVjdGx5IGFuZCB1c2UgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIG1vZHVsZSBpbnN0ZWFkLlxuICovXG52YXIgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gbmF0aXZlUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICB2YXIgY3VyclRpbWUgPSBEYXRlLm5vdygpO1xuICB2YXIgdGltZURlbGF5ID0gTWF0aC5tYXgoMCwgMTYgLSAoY3VyclRpbWUgLSBsYXN0VGltZSkpO1xuICBsYXN0VGltZSA9IGN1cnJUaW1lICsgdGltZURlbGF5O1xuICByZXR1cm4gZ2xvYmFsLnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIGNhbGxiYWNrKERhdGUubm93KCkpO1xuICB9LCB0aW1lRGVsYXkpO1xufTtcblxuLy8gV29ya3MgYXJvdW5kIGEgcmFyZSBidWcgaW4gU2FmYXJpIDYgd2hlcmUgdGhlIGZpcnN0IHJlcXVlc3QgaXMgbmV2ZXIgaW52b2tlZC5cbnJlcXVlc3RBbmltYXRpb25GcmFtZShlbXB0eUZ1bmN0aW9uKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9yZXF1ZXN0QW5pbWF0aW9uRnJhbWVQb2x5ZmlsbC5qc1xuICoqIG1vZHVsZSBpZCA9IDQ0MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgbmF0aXZlUmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBuYXRpdmVSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBnbG9iYWwucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IGdsb2JhbC53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgZ2xvYmFsLm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCBnbG9iYWwub1JlcXVlc3RBbmltYXRpb25GcmFtZSB8fCBnbG9iYWwubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlUmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvbmF0aXZlUmVxdWVzdEFuaW1hdGlvbkZyYW1lLmpzXG4gKiogbW9kdWxlIGlkID0gNDQxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBTY3JvbGxiYXIucmVhY3RcbiAqIEB0eXBlY2hlY2tzXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgRE9NTW91c2VNb3ZlVHJhY2tlciA9IHJlcXVpcmUoJy4vRE9NTW91c2VNb3ZlVHJhY2tlcicpO1xudmFyIEtleXMgPSByZXF1aXJlKCcuL0tleXMnKTtcbnZhciBSZWFjdCA9IHJlcXVpcmUoJy4vUmVhY3QnKTtcbnZhciBSZWFjdERPTSA9IHJlcXVpcmUoJy4vUmVhY3RET00nKTtcbnZhciBSZWFjdENvbXBvbmVudFdpdGhQdXJlUmVuZGVyTWl4aW4gPSByZXF1aXJlKCcuL1JlYWN0Q29tcG9uZW50V2l0aFB1cmVSZW5kZXJNaXhpbicpO1xudmFyIFJlYWN0V2hlZWxIYW5kbGVyID0gcmVxdWlyZSgnLi9SZWFjdFdoZWVsSGFuZGxlcicpO1xuXG52YXIgY3NzVmFyID0gcmVxdWlyZSgnLi9jc3NWYXInKTtcbnZhciBjeCA9IHJlcXVpcmUoJy4vY3gnKTtcbnZhciBlbXB0eUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9lbXB0eUZ1bmN0aW9uJyk7XG52YXIgdHJhbnNsYXRlRE9NUG9zaXRpb25YWSA9IHJlcXVpcmUoJy4vdHJhbnNsYXRlRE9NUG9zaXRpb25YWScpO1xuXG52YXIgUHJvcFR5cGVzID0gUmVhY3QuUHJvcFR5cGVzO1xuXG52YXIgVU5TQ1JPTExBQkxFX1NUQVRFID0ge1xuICBwb3NpdGlvbjogMCxcbiAgc2Nyb2xsYWJsZTogZmFsc2Vcbn07XG5cbnZhciBGQUNFX01BUkdJTiA9IHBhcnNlSW50KGNzc1Zhcignc2Nyb2xsYmFyLWZhY2UtbWFyZ2luJyksIDEwKTtcbnZhciBGQUNFX01BUkdJTl8yID0gRkFDRV9NQVJHSU4gKiAyO1xudmFyIEZBQ0VfU0laRV9NSU4gPSAzMDtcbnZhciBLRVlCT0FSRF9TQ1JPTExfQU1PVU5UID0gNDA7XG5cbnZhciBfbGFzdFNjcm9sbGVkU2Nyb2xsYmFyID0gbnVsbDtcblxudmFyIFNjcm9sbGJhciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdTY3JvbGxiYXInLFxuXG4gIG1peGluczogW1JlYWN0Q29tcG9uZW50V2l0aFB1cmVSZW5kZXJNaXhpbl0sXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgY29udGVudFNpemU6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBkZWZhdWx0UG9zaXRpb246IFByb3BUeXBlcy5udW1iZXIsXG4gICAgaXNPcGFxdWU6IFByb3BUeXBlcy5ib29sLFxuICAgIG9yaWVudGF0aW9uOiBQcm9wVHlwZXMub25lT2YoWyd2ZXJ0aWNhbCcsICdob3Jpem9udGFsJ10pLFxuICAgIG9uU2Nyb2xsOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBwb3NpdGlvbjogUHJvcFR5cGVzLm51bWJlcixcbiAgICBzaXplOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgdHJhY2tDb2xvcjogUHJvcFR5cGVzLm9uZU9mKFsnZ3JheSddKSxcbiAgICB6SW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgdmVydGljYWxUb3A6IFByb3BUeXBlcy5udW1iZXJcbiAgfSxcblxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIC8qb2JqZWN0Ki97XG4gICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gdGhpcy5fY2FsY3VsYXRlU3RhdGUocHJvcHMucG9zaXRpb24gfHwgcHJvcHMuZGVmYXVsdFBvc2l0aW9uIHx8IDAsIHByb3BzLnNpemUsIHByb3BzLmNvbnRlbnRTaXplLCBwcm9wcy5vcmllbnRhdGlvbik7XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyggLypvYmplY3QqL25leHRQcm9wcykge1xuICAgIHZhciBjb250cm9sbGVkUG9zaXRpb24gPSBuZXh0UHJvcHMucG9zaXRpb247XG4gICAgaWYgKGNvbnRyb2xsZWRQb3NpdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9zZXROZXh0U3RhdGUodGhpcy5fY2FsY3VsYXRlU3RhdGUodGhpcy5zdGF0ZS5wb3NpdGlvbiwgbmV4dFByb3BzLnNpemUsIG5leHRQcm9wcy5jb250ZW50U2l6ZSwgbmV4dFByb3BzLm9yaWVudGF0aW9uKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3NldE5leHRTdGF0ZSh0aGlzLl9jYWxjdWxhdGVTdGF0ZShjb250cm9sbGVkUG9zaXRpb24sIG5leHRQcm9wcy5zaXplLCBuZXh0UHJvcHMuY29udGVudFNpemUsIG5leHRQcm9wcy5vcmllbnRhdGlvbiksIG5leHRQcm9wcyk7XG4gICAgfVxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkgLypvYmplY3QqL3tcbiAgICByZXR1cm4ge1xuICAgICAgZGVmYXVsdFBvc2l0aW9uOiAwLFxuICAgICAgaXNPcGFxdWU6IGZhbHNlLFxuICAgICAgb25TY3JvbGw6IGVtcHR5RnVuY3Rpb24sXG4gICAgICBvcmllbnRhdGlvbjogJ3ZlcnRpY2FsJyxcbiAgICAgIHpJbmRleDogOTlcbiAgICB9O1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkgLyo/b2JqZWN0Ki97XG4gICAgaWYgKCF0aGlzLnN0YXRlLnNjcm9sbGFibGUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBzaXplID0gdGhpcy5wcm9wcy5zaXplO1xuICAgIHZhciBtYWluU3R5bGU7XG4gICAgdmFyIGZhY2VTdHlsZTtcbiAgICB2YXIgaXNIb3Jpem9udGFsID0gdGhpcy5zdGF0ZS5pc0hvcml6b250YWw7XG4gICAgdmFyIGlzVmVydGljYWwgPSAhaXNIb3Jpem9udGFsO1xuICAgIHZhciBpc0FjdGl2ZSA9IHRoaXMuc3RhdGUuZm9jdXNlZCB8fCB0aGlzLnN0YXRlLmlzRHJhZ2dpbmc7XG4gICAgdmFyIGZhY2VTaXplID0gdGhpcy5zdGF0ZS5mYWNlU2l6ZTtcbiAgICB2YXIgaXNPcGFxdWUgPSB0aGlzLnByb3BzLmlzT3BhcXVlO1xuICAgIHZhciB2ZXJ0aWNhbFRvcCA9IHRoaXMucHJvcHMudmVydGljYWxUb3AgfHwgMDtcblxuICAgIHZhciBtYWluQ2xhc3NOYW1lID0gY3goe1xuICAgICAgJ1Njcm9sbGJhckxheW91dC9tYWluJzogdHJ1ZSxcbiAgICAgICdTY3JvbGxiYXJMYXlvdXQvbWFpblZlcnRpY2FsJzogaXNWZXJ0aWNhbCxcbiAgICAgICdTY3JvbGxiYXJMYXlvdXQvbWFpbkhvcml6b250YWwnOiBpc0hvcml6b250YWwsXG4gICAgICAncHVibGljL1Njcm9sbGJhci9tYWluJzogdHJ1ZSxcbiAgICAgICdwdWJsaWMvU2Nyb2xsYmFyL21haW5PcGFxdWUnOiBpc09wYXF1ZSxcbiAgICAgICdwdWJsaWMvU2Nyb2xsYmFyL21haW5BY3RpdmUnOiBpc0FjdGl2ZVxuICAgIH0pO1xuXG4gICAgdmFyIGZhY2VDbGFzc05hbWUgPSBjeCh7XG4gICAgICAnU2Nyb2xsYmFyTGF5b3V0L2ZhY2UnOiB0cnVlLFxuICAgICAgJ1Njcm9sbGJhckxheW91dC9mYWNlSG9yaXpvbnRhbCc6IGlzSG9yaXpvbnRhbCxcbiAgICAgICdTY3JvbGxiYXJMYXlvdXQvZmFjZVZlcnRpY2FsJzogaXNWZXJ0aWNhbCxcbiAgICAgICdwdWJsaWMvU2Nyb2xsYmFyL2ZhY2VBY3RpdmUnOiBpc0FjdGl2ZSxcbiAgICAgICdwdWJsaWMvU2Nyb2xsYmFyL2ZhY2UnOiB0cnVlXG4gICAgfSk7XG5cbiAgICB2YXIgcG9zaXRpb24gPSB0aGlzLnN0YXRlLnBvc2l0aW9uICogdGhpcy5zdGF0ZS5zY2FsZSArIEZBQ0VfTUFSR0lOO1xuXG4gICAgaWYgKGlzSG9yaXpvbnRhbCkge1xuICAgICAgbWFpblN0eWxlID0ge1xuICAgICAgICB3aWR0aDogc2l6ZVxuICAgICAgfTtcbiAgICAgIGZhY2VTdHlsZSA9IHtcbiAgICAgICAgd2lkdGg6IGZhY2VTaXplIC0gRkFDRV9NQVJHSU5fMlxuICAgICAgfTtcbiAgICAgIHRyYW5zbGF0ZURPTVBvc2l0aW9uWFkoZmFjZVN0eWxlLCBwb3NpdGlvbiwgMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1haW5TdHlsZSA9IHtcbiAgICAgICAgdG9wOiB2ZXJ0aWNhbFRvcCxcbiAgICAgICAgaGVpZ2h0OiBzaXplXG4gICAgICB9O1xuICAgICAgZmFjZVN0eWxlID0ge1xuICAgICAgICBoZWlnaHQ6IGZhY2VTaXplIC0gRkFDRV9NQVJHSU5fMlxuICAgICAgfTtcbiAgICAgIHRyYW5zbGF0ZURPTVBvc2l0aW9uWFkoZmFjZVN0eWxlLCAwLCBwb3NpdGlvbik7XG4gICAgfVxuXG4gICAgbWFpblN0eWxlLnpJbmRleCA9IHRoaXMucHJvcHMuekluZGV4O1xuXG4gICAgaWYgKHRoaXMucHJvcHMudHJhY2tDb2xvciA9PT0gJ2dyYXknKSB7XG4gICAgICBtYWluU3R5bGUuYmFja2dyb3VuZENvbG9yID0gY3NzVmFyKCdmYnVpLWRlc2t0b3AtYmFja2dyb3VuZC1saWdodCcpO1xuICAgIH1cblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7XG4gICAgICAgIG9uRm9jdXM6IHRoaXMuX29uRm9jdXMsXG4gICAgICAgIG9uQmx1cjogdGhpcy5fb25CbHVyLFxuICAgICAgICBvbktleURvd246IHRoaXMuX29uS2V5RG93bixcbiAgICAgICAgb25Nb3VzZURvd246IHRoaXMuX29uTW91c2VEb3duLFxuICAgICAgICBvbldoZWVsOiB0aGlzLl93aGVlbEhhbmRsZXIub25XaGVlbCxcbiAgICAgICAgY2xhc3NOYW1lOiBtYWluQ2xhc3NOYW1lLFxuICAgICAgICBzdHlsZTogbWFpblN0eWxlLFxuICAgICAgICB0YWJJbmRleDogMCB9LFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICByZWY6ICdmYWNlJyxcbiAgICAgICAgY2xhc3NOYW1lOiBmYWNlQ2xhc3NOYW1lLFxuICAgICAgICBzdHlsZTogZmFjZVN0eWxlXG4gICAgICB9KVxuICAgICk7XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdmFyIGlzSG9yaXpvbnRhbCA9IHRoaXMucHJvcHMub3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJztcbiAgICB2YXIgb25XaGVlbCA9IGlzSG9yaXpvbnRhbCA/IHRoaXMuX29uV2hlZWxYIDogdGhpcy5fb25XaGVlbFk7XG5cbiAgICB0aGlzLl93aGVlbEhhbmRsZXIgPSBuZXcgUmVhY3RXaGVlbEhhbmRsZXIob25XaGVlbCwgdGhpcy5fc2hvdWxkSGFuZGxlWCwgLy8gU2hvdWxkIGhhbmxkZSBob3Jpem9udGFsIHNjcm9sbFxuICAgIHRoaXMuX3Nob3VsZEhhbmRsZVkgLy8gU2hvdWxkIGhhbmRsZSB2ZXJ0aWNhbCBzY3JvbGxcbiAgICApO1xuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLl9tb3VzZU1vdmVUcmFja2VyID0gbmV3IERPTU1vdXNlTW92ZVRyYWNrZXIodGhpcy5fb25Nb3VzZU1vdmUsIHRoaXMuX29uTW91c2VNb3ZlRW5kLCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpO1xuXG4gICAgaWYgKHRoaXMucHJvcHMucG9zaXRpb24gIT09IHVuZGVmaW5lZCAmJiB0aGlzLnN0YXRlLnBvc2l0aW9uICE9PSB0aGlzLnByb3BzLnBvc2l0aW9uKSB7XG4gICAgICB0aGlzLl9kaWRTY3JvbGwoKTtcbiAgICB9XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuX25leHRTdGF0ZSA9IG51bGw7XG4gICAgdGhpcy5fbW91c2VNb3ZlVHJhY2tlci5yZWxlYXNlTW91c2VNb3ZlcygpO1xuICAgIGlmIChfbGFzdFNjcm9sbGVkU2Nyb2xsYmFyID09PSB0aGlzKSB7XG4gICAgICBfbGFzdFNjcm9sbGVkU2Nyb2xsYmFyID0gbnVsbDtcbiAgICB9XG4gICAgZGVsZXRlIHRoaXMuX21vdXNlTW92ZVRyYWNrZXI7XG4gIH0sXG5cbiAgc2Nyb2xsQnk6IGZ1bmN0aW9uIHNjcm9sbEJ5KCAvKm51bWJlciovZGVsdGEpIHtcbiAgICB0aGlzLl9vbldoZWVsKGRlbHRhKTtcbiAgfSxcblxuICBfc2hvdWxkSGFuZGxlWDogZnVuY3Rpb24gX3Nob3VsZEhhbmRsZVgoIC8qbnVtYmVyKi9kZWx0YSkgLypib29sZWFuKi97XG4gICAgcmV0dXJuIHRoaXMucHJvcHMub3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJyA/IHRoaXMuX3Nob3VsZEhhbmRsZUNoYW5nZShkZWx0YSkgOiBmYWxzZTtcbiAgfSxcblxuICBfc2hvdWxkSGFuZGxlWTogZnVuY3Rpb24gX3Nob3VsZEhhbmRsZVkoIC8qbnVtYmVyKi9kZWx0YSkgLypib29sZWFuKi97XG4gICAgcmV0dXJuIHRoaXMucHJvcHMub3JpZW50YXRpb24gIT09ICdob3Jpem9udGFsJyA/IHRoaXMuX3Nob3VsZEhhbmRsZUNoYW5nZShkZWx0YSkgOiBmYWxzZTtcbiAgfSxcblxuICBfc2hvdWxkSGFuZGxlQ2hhbmdlOiBmdW5jdGlvbiBfc2hvdWxkSGFuZGxlQ2hhbmdlKCAvKm51bWJlciovZGVsdGEpIC8qYm9vbGVhbiove1xuICAgIHZhciBuZXh0U3RhdGUgPSB0aGlzLl9jYWxjdWxhdGVTdGF0ZSh0aGlzLnN0YXRlLnBvc2l0aW9uICsgZGVsdGEsIHRoaXMucHJvcHMuc2l6ZSwgdGhpcy5wcm9wcy5jb250ZW50U2l6ZSwgdGhpcy5wcm9wcy5vcmllbnRhdGlvbik7XG4gICAgcmV0dXJuIG5leHRTdGF0ZS5wb3NpdGlvbiAhPT0gdGhpcy5zdGF0ZS5wb3NpdGlvbjtcbiAgfSxcblxuICBfY2FsY3VsYXRlU3RhdGU6IGZ1bmN0aW9uIF9jYWxjdWxhdGVTdGF0ZShcbiAgLypudW1iZXIqL3Bvc2l0aW9uLFxuICAvKm51bWJlciovc2l6ZSxcbiAgLypudW1iZXIqL2NvbnRlbnRTaXplLFxuICAvKnN0cmluZyovb3JpZW50YXRpb24pIC8qb2JqZWN0Ki97XG4gICAgaWYgKHNpemUgPCAxIHx8IGNvbnRlbnRTaXplIDw9IHNpemUpIHtcbiAgICAgIHJldHVybiBVTlNDUk9MTEFCTEVfU1RBVEU7XG4gICAgfVxuXG4gICAgdmFyIHN0YXRlS2V5ID0gcG9zaXRpb24gKyAnXycgKyBzaXplICsgJ18nICsgY29udGVudFNpemUgKyAnXycgKyBvcmllbnRhdGlvbjtcbiAgICBpZiAodGhpcy5fc3RhdGVLZXkgPT09IHN0YXRlS2V5KSB7XG4gICAgICByZXR1cm4gdGhpcy5fc3RhdGVGb3JLZXk7XG4gICAgfVxuXG4gICAgLy8gVGhlcmUgYXJlIHR3byB0eXBlcyBvZiBwb3NpdGlvbnMgaGVyZS5cbiAgICAvLyAxKSBQaGlzaWNhbCBwb3NpdGlvbjogY2hhbmdlZCBieSBtb3VzZSAvIGtleWJvYXJkXG4gICAgLy8gMikgTG9naWNhbCBwb3NpdGlvbjogY2hhbmdlZCBieSBwcm9wcy5cbiAgICAvLyBUaGUgbG9naWNhbCBwb3NpdGlvbiB3aWxsIGJlIGtlcHQgYXMgYXMgaW50ZXJuYWwgc3RhdGUgYW5kIHRoZSBgcmVuZGVyKClgXG4gICAgLy8gZnVuY3Rpb24gd2lsbCB0cmFuc2xhdGUgaXQgaW50byBwaHlzaWNhbCBwb3NpdGlvbiB0byByZW5kZXIuXG5cbiAgICB2YXIgaXNIb3Jpem9udGFsID0gb3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJztcbiAgICB2YXIgc2NhbGUgPSBzaXplIC8gY29udGVudFNpemU7XG4gICAgdmFyIGZhY2VTaXplID0gc2l6ZSAqIHNjYWxlO1xuXG4gICAgaWYgKGZhY2VTaXplIDwgRkFDRV9TSVpFX01JTikge1xuICAgICAgc2NhbGUgPSAoc2l6ZSAtIEZBQ0VfU0laRV9NSU4pIC8gKGNvbnRlbnRTaXplIC0gc2l6ZSk7XG4gICAgICBmYWNlU2l6ZSA9IEZBQ0VfU0laRV9NSU47XG4gICAgfVxuXG4gICAgdmFyIHNjcm9sbGFibGUgPSB0cnVlO1xuICAgIHZhciBtYXhQb3NpdGlvbiA9IGNvbnRlbnRTaXplIC0gc2l6ZTtcblxuICAgIGlmIChwb3NpdGlvbiA8IDApIHtcbiAgICAgIHBvc2l0aW9uID0gMDtcbiAgICB9IGVsc2UgaWYgKHBvc2l0aW9uID4gbWF4UG9zaXRpb24pIHtcbiAgICAgIHBvc2l0aW9uID0gbWF4UG9zaXRpb247XG4gICAgfVxuXG4gICAgdmFyIGlzRHJhZ2dpbmcgPSB0aGlzLl9tb3VzZU1vdmVUcmFja2VyID8gdGhpcy5fbW91c2VNb3ZlVHJhY2tlci5pc0RyYWdnaW5nKCkgOiBmYWxzZTtcblxuICAgIC8vIFRoaXMgZnVuY3Rpb24gc2hvdWxkIG9ubHkgcmV0dXJuIGZsYXQgdmFsdWVzIHRoYXQgY2FuIGJlIGNvbXBhcmVkIHF1aWNsa3lcbiAgICAvLyBieSBgUmVhY3RDb21wb25lbnRXaXRoUHVyZVJlbmRlck1peGluYC5cbiAgICB2YXIgc3RhdGUgPSB7XG4gICAgICBmYWNlU2l6ZTogZmFjZVNpemUsXG4gICAgICBpc0RyYWdnaW5nOiBpc0RyYWdnaW5nLFxuICAgICAgaXNIb3Jpem9udGFsOiBpc0hvcml6b250YWwsXG4gICAgICBwb3NpdGlvbjogcG9zaXRpb24sXG4gICAgICBzY2FsZTogc2NhbGUsXG4gICAgICBzY3JvbGxhYmxlOiBzY3JvbGxhYmxlXG4gICAgfTtcblxuICAgIC8vIGNhY2hlIHRoZSBzdGF0ZSBmb3IgbGF0ZXIgdXNlLlxuICAgIHRoaXMuX3N0YXRlS2V5ID0gc3RhdGVLZXk7XG4gICAgdGhpcy5fc3RhdGVGb3JLZXkgPSBzdGF0ZTtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH0sXG5cbiAgX29uV2hlZWxZOiBmdW5jdGlvbiBfb25XaGVlbFkoIC8qbnVtYmVyKi9kZWx0YVgsIC8qbnVtYmVyKi9kZWx0YVkpIHtcbiAgICB0aGlzLl9vbldoZWVsKGRlbHRhWSk7XG4gIH0sXG5cbiAgX29uV2hlZWxYOiBmdW5jdGlvbiBfb25XaGVlbFgoIC8qbnVtYmVyKi9kZWx0YVgsIC8qbnVtYmVyKi9kZWx0YVkpIHtcbiAgICB0aGlzLl9vbldoZWVsKGRlbHRhWCk7XG4gIH0sXG5cbiAgX29uV2hlZWw6IGZ1bmN0aW9uIF9vbldoZWVsKCAvKm51bWJlciovZGVsdGEpIHtcbiAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuXG4gICAgLy8gVGhlIG1vdXNlIG1heSBtb3ZlIGZhc3RlciB0aGVuIHRoZSBhbmltYXRpb24gZnJhbWUgZG9lcy5cbiAgICAvLyBVc2UgYHJlcXVlc3RBbmltYXRpb25GcmFtZWAgdG8gYXZvaWQgb3Zlci11cGRhdGluZy5cbiAgICB0aGlzLl9zZXROZXh0U3RhdGUodGhpcy5fY2FsY3VsYXRlU3RhdGUodGhpcy5zdGF0ZS5wb3NpdGlvbiArIGRlbHRhLCBwcm9wcy5zaXplLCBwcm9wcy5jb250ZW50U2l6ZSwgcHJvcHMub3JpZW50YXRpb24pKTtcbiAgfSxcblxuICBfb25Nb3VzZURvd246IGZ1bmN0aW9uIF9vbk1vdXNlRG93biggLypvYmplY3QqL2V2ZW50KSB7XG4gICAgdmFyIG5leHRTdGF0ZTtcblxuICAgIGlmIChldmVudC50YXJnZXQgIT09IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMucmVmcy5mYWNlKSkge1xuICAgICAgLy8gQm90aCBgb2Zmc2V0WGAgYW5kIGBsYXllclhgIGFyZSBub24tc3RhbmRhcmQgRE9NIHByb3BlcnR5IGJ1dCB0aGV5IGFyZVxuICAgICAgLy8gbWFnaWNhbGx5IGF2YWlsYWJsZSBmb3IgYnJvd3NlcnMgc29tZWhvdy5cbiAgICAgIHZhciBuYXRpdmVFdmVudCA9IGV2ZW50Lm5hdGl2ZUV2ZW50O1xuICAgICAgdmFyIHBvc2l0aW9uID0gdGhpcy5zdGF0ZS5pc0hvcml6b250YWwgPyBuYXRpdmVFdmVudC5vZmZzZXRYIHx8IG5hdGl2ZUV2ZW50LmxheWVyWCA6IG5hdGl2ZUV2ZW50Lm9mZnNldFkgfHwgbmF0aXZlRXZlbnQubGF5ZXJZO1xuXG4gICAgICAvLyBNb3VzZURvd24gb24gdGhlIHNjcm9sbC10cmFjayBkaXJlY3RseSwgbW92ZSB0aGUgY2VudGVyIG9mIHRoZVxuICAgICAgLy8gc2Nyb2xsLWZhY2UgdG8gdGhlIG1vdXNlIHBvc2l0aW9uLlxuICAgICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICAgIHBvc2l0aW9uIC89IHRoaXMuc3RhdGUuc2NhbGU7XG4gICAgICBuZXh0U3RhdGUgPSB0aGlzLl9jYWxjdWxhdGVTdGF0ZShwb3NpdGlvbiAtIHRoaXMuc3RhdGUuZmFjZVNpemUgKiAwLjUgLyB0aGlzLnN0YXRlLnNjYWxlLCBwcm9wcy5zaXplLCBwcm9wcy5jb250ZW50U2l6ZSwgcHJvcHMub3JpZW50YXRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXh0U3RhdGUgPSB7fTtcbiAgICB9XG5cbiAgICBuZXh0U3RhdGUuZm9jdXNlZCA9IHRydWU7XG4gICAgdGhpcy5fc2V0TmV4dFN0YXRlKG5leHRTdGF0ZSk7XG5cbiAgICB0aGlzLl9tb3VzZU1vdmVUcmFja2VyLmNhcHR1cmVNb3VzZU1vdmVzKGV2ZW50KTtcbiAgICAvLyBGb2N1cyB0aGUgbm9kZSBzbyBpdCBtYXkgcmVjZWl2ZSBrZXlib2FyZCBldmVudC5cbiAgICBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKS5mb2N1cygpO1xuICB9LFxuXG4gIF9vbk1vdXNlTW92ZTogZnVuY3Rpb24gX29uTW91c2VNb3ZlKCAvKm51bWJlciovZGVsdGFYLCAvKm51bWJlciovZGVsdGFZKSB7XG4gICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgZGVsdGEgPSB0aGlzLnN0YXRlLmlzSG9yaXpvbnRhbCA/IGRlbHRhWCA6IGRlbHRhWTtcbiAgICBkZWx0YSAvPSB0aGlzLnN0YXRlLnNjYWxlO1xuXG4gICAgdGhpcy5fc2V0TmV4dFN0YXRlKHRoaXMuX2NhbGN1bGF0ZVN0YXRlKHRoaXMuc3RhdGUucG9zaXRpb24gKyBkZWx0YSwgcHJvcHMuc2l6ZSwgcHJvcHMuY29udGVudFNpemUsIHByb3BzLm9yaWVudGF0aW9uKSk7XG4gIH0sXG5cbiAgX29uTW91c2VNb3ZlRW5kOiBmdW5jdGlvbiBfb25Nb3VzZU1vdmVFbmQoKSB7XG4gICAgdGhpcy5fbmV4dFN0YXRlID0gbnVsbDtcbiAgICB0aGlzLl9tb3VzZU1vdmVUcmFja2VyLnJlbGVhc2VNb3VzZU1vdmVzKCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzRHJhZ2dpbmc6IGZhbHNlIH0pO1xuICB9LFxuXG4gIF9vbktleURvd246IGZ1bmN0aW9uIF9vbktleURvd24oIC8qb2JqZWN0Ki9ldmVudCkge1xuICAgIHZhciBrZXlDb2RlID0gZXZlbnQua2V5Q29kZTtcblxuICAgIGlmIChrZXlDb2RlID09PSBLZXlzLlRBQikge1xuICAgICAgLy8gTGV0IGZvY3VzIG1vdmUgb2ZmIHRoZSBzY3JvbGxiYXIuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGRpc3RhbmNlID0gS0VZQk9BUkRfU0NST0xMX0FNT1VOVDtcbiAgICB2YXIgZGlyZWN0aW9uID0gMDtcblxuICAgIGlmICh0aGlzLnN0YXRlLmlzSG9yaXpvbnRhbCkge1xuICAgICAgc3dpdGNoIChrZXlDb2RlKSB7XG4gICAgICAgIGNhc2UgS2V5cy5IT01FOlxuICAgICAgICAgIGRpcmVjdGlvbiA9IC0xO1xuICAgICAgICAgIGRpc3RhbmNlID0gdGhpcy5wcm9wcy5jb250ZW50U2l6ZTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIEtleXMuTEVGVDpcbiAgICAgICAgICBkaXJlY3Rpb24gPSAtMTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIEtleXMuUklHSFQ6XG4gICAgICAgICAgZGlyZWN0aW9uID0gMTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuc3RhdGUuaXNIb3Jpem9udGFsKSB7XG4gICAgICBzd2l0Y2ggKGtleUNvZGUpIHtcbiAgICAgICAgY2FzZSBLZXlzLlNQQUNFOlxuICAgICAgICAgIGlmIChldmVudC5zaGlmdEtleSkge1xuICAgICAgICAgICAgZGlyZWN0aW9uID0gLTE7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgS2V5cy5IT01FOlxuICAgICAgICAgIGRpcmVjdGlvbiA9IC0xO1xuICAgICAgICAgIGRpc3RhbmNlID0gdGhpcy5wcm9wcy5jb250ZW50U2l6ZTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIEtleXMuVVA6XG4gICAgICAgICAgZGlyZWN0aW9uID0gLTE7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBLZXlzLkRPV046XG4gICAgICAgICAgZGlyZWN0aW9uID0gMTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIEtleXMuUEFHRV9VUDpcbiAgICAgICAgICBkaXJlY3Rpb24gPSAtMTtcbiAgICAgICAgICBkaXN0YW5jZSA9IHRoaXMucHJvcHMuc2l6ZTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIEtleXMuUEFHRV9ET1dOOlxuICAgICAgICAgIGRpcmVjdGlvbiA9IDE7XG4gICAgICAgICAgZGlzdGFuY2UgPSB0aGlzLnByb3BzLnNpemU7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy5fc2V0TmV4dFN0YXRlKHRoaXMuX2NhbGN1bGF0ZVN0YXRlKHRoaXMuc3RhdGUucG9zaXRpb24gKyBkaXN0YW5jZSAqIGRpcmVjdGlvbiwgcHJvcHMuc2l6ZSwgcHJvcHMuY29udGVudFNpemUsIHByb3BzLm9yaWVudGF0aW9uKSk7XG4gIH0sXG5cbiAgX29uRm9jdXM6IGZ1bmN0aW9uIF9vbkZvY3VzKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZm9jdXNlZDogdHJ1ZVxuICAgIH0pO1xuICB9LFxuXG4gIF9vbkJsdXI6IGZ1bmN0aW9uIF9vbkJsdXIoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBmb2N1c2VkOiBmYWxzZVxuICAgIH0pO1xuICB9LFxuXG4gIF9ibHVyOiBmdW5jdGlvbiBfYmx1cigpIHtcbiAgICBpZiAodGhpcy5pc01vdW50ZWQoKSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5fb25CbHVyKCk7XG4gICAgICAgIFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpLmJsdXIoKTtcbiAgICAgIH0gY2F0Y2ggKG9vcHMpIHtcbiAgICAgICAgLy8gcGFzc1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBfc2V0TmV4dFN0YXRlOiBmdW5jdGlvbiBfc2V0TmV4dFN0YXRlKCAvKm9iamVjdCovbmV4dFN0YXRlLCAvKj9vYmplY3QqL3Byb3BzKSB7XG4gICAgcHJvcHMgPSBwcm9wcyB8fCB0aGlzLnByb3BzO1xuICAgIHZhciBjb250cm9sbGVkUG9zaXRpb24gPSBwcm9wcy5wb3NpdGlvbjtcbiAgICB2YXIgd2lsbFNjcm9sbCA9IHRoaXMuc3RhdGUucG9zaXRpb24gIT09IG5leHRTdGF0ZS5wb3NpdGlvbjtcbiAgICBpZiAoY29udHJvbGxlZFBvc2l0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciBjYWxsYmFjayA9IHdpbGxTY3JvbGwgPyB0aGlzLl9kaWRTY3JvbGwgOiB1bmRlZmluZWQ7XG4gICAgICB0aGlzLnNldFN0YXRlKG5leHRTdGF0ZSwgY2FsbGJhY2spO1xuICAgIH0gZWxzZSBpZiAoY29udHJvbGxlZFBvc2l0aW9uID09PSBuZXh0U3RhdGUucG9zaXRpb24pIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUobmV4dFN0YXRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU2Nyb2xsaW5nIGlzIGNvbnRyb2xsZWQuIERvbid0IHVwZGF0ZSB0aGUgc3RhdGUgYW5kIGxldCB0aGUgb3duZXJcbiAgICAgIC8vIHRvIHVwZGF0ZSB0aGUgc2Nyb2xsYmFyIGluc3RlYWQuXG4gICAgICBpZiAobmV4dFN0YXRlLnBvc2l0aW9uICE9PSB1bmRlZmluZWQgJiYgbmV4dFN0YXRlLnBvc2l0aW9uICE9PSB0aGlzLnN0YXRlLnBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25TY3JvbGwobmV4dFN0YXRlLnBvc2l0aW9uKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAod2lsbFNjcm9sbCAmJiBfbGFzdFNjcm9sbGVkU2Nyb2xsYmFyICE9PSB0aGlzKSB7XG4gICAgICBfbGFzdFNjcm9sbGVkU2Nyb2xsYmFyICYmIF9sYXN0U2Nyb2xsZWRTY3JvbGxiYXIuX2JsdXIoKTtcbiAgICAgIF9sYXN0U2Nyb2xsZWRTY3JvbGxiYXIgPSB0aGlzO1xuICAgIH1cbiAgfSxcblxuICBfZGlkU2Nyb2xsOiBmdW5jdGlvbiBfZGlkU2Nyb2xsKCkge1xuICAgIHRoaXMucHJvcHMub25TY3JvbGwodGhpcy5zdGF0ZS5wb3NpdGlvbik7XG4gIH1cbn0pO1xuXG5TY3JvbGxiYXIuS0VZQk9BUkRfU0NST0xMX0FNT1VOVCA9IEtFWUJPQVJEX1NDUk9MTF9BTU9VTlQ7XG5TY3JvbGxiYXIuU0laRSA9IHBhcnNlSW50KGNzc1Zhcignc2Nyb2xsYmFyLXNpemUnKSwgMTApO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNjcm9sbGJhcjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL1Njcm9sbGJhci5yZWFjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDQ0MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBUaGlzIGNsYXNzIGxpc3RlbnMgdG8gZXZlbnRzIG9uIHRoZSBkb2N1bWVudCBhbmQgdGhlbiB1cGRhdGVzIGEgcmVhY3RcbiAqIGNvbXBvbmVudCB0aHJvdWdoIGNhbGxiYWNrcy5cbiAqIFBsZWFzZSBub3RlIHRoYXQgY2FwdHVyZU1vdXNlTW92ZSBtdXN0IGJlIGNhbGxlZCBpblxuICogb3JkZXIgdG8gaW5pdGlhbGl6ZSBsaXN0ZW5lcnMgb24gbW91c2Vtb3ZlIGFuZCBtb3VzZXVwLlxuICogcmVsZWFzZU1vdXNlTW92ZSBtdXN0IGJlIGNhbGxlZCB0byByZW1vdmUgdGhlbS4gSXQgaXMgaW1wb3J0YW50IHRvXG4gKiBjYWxsIHJlbGVhc2VNb3VzZU1vdmVzIHNpbmNlIG1vdXNlbW92ZSBpcyBleHBlbnNpdmUgdG8gbGlzdGVuIHRvLlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBET01Nb3VzZU1vdmVUcmFja2VyXG4gKiBAdHlwZWNoZWNrc1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbnZhciBFdmVudExpc3RlbmVyID0gcmVxdWlyZSgnLi9FdmVudExpc3RlbmVyJyk7XG5cbnZhciBjYW5jZWxBbmltYXRpb25GcmFtZVBvbHlmaWxsID0gcmVxdWlyZSgnLi9jYW5jZWxBbmltYXRpb25GcmFtZVBvbHlmaWxsJyk7XG52YXIgcmVxdWVzdEFuaW1hdGlvbkZyYW1lUG9seWZpbGwgPSByZXF1aXJlKCcuL3JlcXVlc3RBbmltYXRpb25GcmFtZVBvbHlmaWxsJyk7XG5cbnZhciBET01Nb3VzZU1vdmVUcmFja2VyID0gKGZ1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAqIG9uTW92ZSBpcyB0aGUgY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGNhbGxlZCBvbiBldmVyeSBtb3VzZSBtb3ZlLlxuICAgKiBvbk1vdmVFbmQgaXMgY2FsbGVkIG9uIG1vdXNlIHVwIHdoZW4gbW92ZW1lbnQgaGFzIGVuZGVkLlxuICAgKi9cblxuICBmdW5jdGlvbiBET01Nb3VzZU1vdmVUcmFja2VyKFxuICAvKmZ1bmN0aW9uKi9vbk1vdmUsXG4gIC8qZnVuY3Rpb24qL29uTW92ZUVuZCxcbiAgLypET01FbGVtZW50Ki9kb21Ob2RlKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERPTU1vdXNlTW92ZVRyYWNrZXIpO1xuXG4gICAgdGhpcy5faXNEcmFnZ2luZyA9IGZhbHNlO1xuICAgIHRoaXMuX2FuaW1hdGlvbkZyYW1lSUQgPSBudWxsO1xuICAgIHRoaXMuX2RvbU5vZGUgPSBkb21Ob2RlO1xuICAgIHRoaXMuX29uTW92ZSA9IG9uTW92ZTtcbiAgICB0aGlzLl9vbk1vdmVFbmQgPSBvbk1vdmVFbmQ7XG4gICAgdGhpcy5fb25Nb3VzZU1vdmUgPSB0aGlzLl9vbk1vdXNlTW92ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uTW91c2VVcCA9IHRoaXMuX29uTW91c2VVcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2RpZE1vdXNlTW92ZSA9IHRoaXMuX2RpZE1vdXNlTW92ZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgaXMgdG8gc2V0IHVwIHRoZSBsaXN0ZW5lcnMgZm9yIGxpc3RlbmluZyB0byBtb3VzZSBtb3ZlXG4gICAqIGFuZCBtb3VzZSB1cCBzaWduYWxpbmcgdGhlIG1vdmVtZW50IGhhcyBlbmRlZC4gUGxlYXNlIG5vdGUgdGhhdCB0aGVzZVxuICAgKiBsaXN0ZW5lcnMgYXJlIGFkZGVkIGF0IHRoZSBkb2N1bWVudC5ib2R5IGxldmVsLiBJdCB0YWtlcyBpbiBhbiBldmVudFxuICAgKiBpbiBvcmRlciB0byBncmFiIGluaXRhbCBzdGF0ZS5cbiAgICovXG5cbiAgX2NyZWF0ZUNsYXNzKERPTU1vdXNlTW92ZVRyYWNrZXIsIFt7XG4gICAga2V5OiAnY2FwdHVyZU1vdXNlTW92ZXMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjYXB0dXJlTW91c2VNb3ZlcyggLypvYmplY3QqL2V2ZW50KSB7XG4gICAgICBpZiAoIXRoaXMuX2V2ZW50TW92ZVRva2VuICYmICF0aGlzLl9ldmVudFVwVG9rZW4pIHtcbiAgICAgICAgdGhpcy5fZXZlbnRNb3ZlVG9rZW4gPSBFdmVudExpc3RlbmVyLmxpc3Rlbih0aGlzLl9kb21Ob2RlLCAnbW91c2Vtb3ZlJywgdGhpcy5fb25Nb3VzZU1vdmUpO1xuICAgICAgICB0aGlzLl9ldmVudFVwVG9rZW4gPSBFdmVudExpc3RlbmVyLmxpc3Rlbih0aGlzLl9kb21Ob2RlLCAnbW91c2V1cCcsIHRoaXMuX29uTW91c2VVcCk7XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5faXNEcmFnZ2luZykge1xuICAgICAgICB0aGlzLl9kZWx0YVggPSAwO1xuICAgICAgICB0aGlzLl9kZWx0YVkgPSAwO1xuICAgICAgICB0aGlzLl9pc0RyYWdnaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5feCA9IGV2ZW50LmNsaWVudFg7XG4gICAgICAgIHRoaXMuX3kgPSBldmVudC5jbGllbnRZO1xuICAgICAgfVxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGVzZSByZWxlYXNlcyBhbGwgb2YgdGhlIGxpc3RlbmVycyBvbiBkb2N1bWVudC5ib2R5LlxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiAncmVsZWFzZU1vdXNlTW92ZXMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZWxlYXNlTW91c2VNb3ZlcygpIHtcbiAgICAgIGlmICh0aGlzLl9ldmVudE1vdmVUb2tlbiAmJiB0aGlzLl9ldmVudFVwVG9rZW4pIHtcbiAgICAgICAgdGhpcy5fZXZlbnRNb3ZlVG9rZW4ucmVtb3ZlKCk7XG4gICAgICAgIHRoaXMuX2V2ZW50TW92ZVRva2VuID0gbnVsbDtcbiAgICAgICAgdGhpcy5fZXZlbnRVcFRva2VuLnJlbW92ZSgpO1xuICAgICAgICB0aGlzLl9ldmVudFVwVG9rZW4gPSBudWxsO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fYW5pbWF0aW9uRnJhbWVJRCAhPT0gbnVsbCkge1xuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZVBvbHlmaWxsKHRoaXMuX2FuaW1hdGlvbkZyYW1lSUQpO1xuICAgICAgICB0aGlzLl9hbmltYXRpb25GcmFtZUlEID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2lzRHJhZ2dpbmcpIHtcbiAgICAgICAgdGhpcy5faXNEcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLl94ID0gbnVsbDtcbiAgICAgICAgdGhpcy5feSA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCBpZiB0aGUgbW91c2UgbW92ZW1lbnQgaXMgYmVpbmcgdHJhY2tlZC5cbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogJ2lzRHJhZ2dpbmcnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc0RyYWdnaW5nKCkgLypib29sZWFuKi97XG4gICAgICByZXR1cm4gdGhpcy5faXNEcmFnZ2luZztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxscyBvbk1vdmUgcGFzc2VkIGludG8gY29uc3RydWN0b3IgYW5kIHVwZGF0ZXMgaW50ZXJuYWwgc3RhdGUuXG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6ICdfb25Nb3VzZU1vdmUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfb25Nb3VzZU1vdmUoIC8qb2JqZWN0Ki9ldmVudCkge1xuICAgICAgdmFyIHggPSBldmVudC5jbGllbnRYO1xuICAgICAgdmFyIHkgPSBldmVudC5jbGllbnRZO1xuXG4gICAgICB0aGlzLl9kZWx0YVggKz0geCAtIHRoaXMuX3g7XG4gICAgICB0aGlzLl9kZWx0YVkgKz0geSAtIHRoaXMuX3k7XG5cbiAgICAgIGlmICh0aGlzLl9hbmltYXRpb25GcmFtZUlEID09PSBudWxsKSB7XG4gICAgICAgIC8vIFRoZSBtb3VzZSBtYXkgbW92ZSBmYXN0ZXIgdGhlbiB0aGUgYW5pbWF0aW9uIGZyYW1lIGRvZXMuXG4gICAgICAgIC8vIFVzZSBgcmVxdWVzdEFuaW1hdGlvbkZyYW1lUG9seWZpbGxgIHRvIGF2b2lkIG92ZXItdXBkYXRpbmcuXG4gICAgICAgIHRoaXMuX2FuaW1hdGlvbkZyYW1lSUQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWVQb2x5ZmlsbCh0aGlzLl9kaWRNb3VzZU1vdmUpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl94ID0geDtcbiAgICAgIHRoaXMuX3kgPSB5O1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdfZGlkTW91c2VNb3ZlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2RpZE1vdXNlTW92ZSgpIHtcbiAgICAgIHRoaXMuX2FuaW1hdGlvbkZyYW1lSUQgPSBudWxsO1xuICAgICAgdGhpcy5fb25Nb3ZlKHRoaXMuX2RlbHRhWCwgdGhpcy5fZGVsdGFZKTtcbiAgICAgIHRoaXMuX2RlbHRhWCA9IDA7XG4gICAgICB0aGlzLl9kZWx0YVkgPSAwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxzIG9uTW92ZUVuZCBwYXNzZWQgaW50byBjb25zdHJ1Y3RvciBhbmQgdXBkYXRlcyBpbnRlcm5hbCBzdGF0ZS5cbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogJ19vbk1vdXNlVXAnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfb25Nb3VzZVVwKCkge1xuICAgICAgaWYgKHRoaXMuX2FuaW1hdGlvbkZyYW1lSUQpIHtcbiAgICAgICAgdGhpcy5fZGlkTW91c2VNb3ZlKCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9vbk1vdmVFbmQoKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRE9NTW91c2VNb3ZlVHJhY2tlcjtcbn0pKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gRE9NTW91c2VNb3ZlVHJhY2tlcjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL0RPTU1vdXNlTW92ZVRyYWNrZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA0NDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIEV2ZW50TGlzdGVuZXJcbiAqIEB0eXBlY2hlY2tzXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW1wdHlGdW5jdGlvbiA9IHJlcXVpcmUoJy4vZW1wdHlGdW5jdGlvbicpO1xuXG4vKipcbiAqIFVwc3RyZWFtIHZlcnNpb24gb2YgZXZlbnQgbGlzdGVuZXIuIERvZXMgbm90IHRha2UgaW50byBhY2NvdW50IHNwZWNpZmljXG4gKiBuYXR1cmUgb2YgcGxhdGZvcm0uXG4gKi9cbnZhciBFdmVudExpc3RlbmVyID0ge1xuICAvKipcbiAgICogTGlzdGVuIHRvIERPTSBldmVudHMgZHVyaW5nIHRoZSBidWJibGUgcGhhc2UuXG4gICAqXG4gICAqIEBwYXJhbSB7RE9NRXZlbnRUYXJnZXR9IHRhcmdldCBET00gZWxlbWVudCB0byByZWdpc3RlciBsaXN0ZW5lciBvbi5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50VHlwZSBFdmVudCB0eXBlLCBlLmcuICdjbGljaycgb3IgJ21vdXNlb3ZlcicuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxiYWNrIGZ1bmN0aW9uLlxuICAgKiBAcmV0dXJuIHtvYmplY3R9IE9iamVjdCB3aXRoIGEgYHJlbW92ZWAgbWV0aG9kLlxuICAgKi9cbiAgbGlzdGVuOiBmdW5jdGlvbiBsaXN0ZW4odGFyZ2V0LCBldmVudFR5cGUsIGNhbGxiYWNrKSB7XG4gICAgaWYgKHRhcmdldC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGNhbGxiYWNrLCBmYWxzZSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgICAgICB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGNhbGxiYWNrLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSBlbHNlIGlmICh0YXJnZXQuYXR0YWNoRXZlbnQpIHtcbiAgICAgIHRhcmdldC5hdHRhY2hFdmVudCgnb24nICsgZXZlbnRUeXBlLCBjYWxsYmFjayk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgICAgICB0YXJnZXQuZGV0YWNoRXZlbnQoJ29uJyArIGV2ZW50VHlwZSwgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogTGlzdGVuIHRvIERPTSBldmVudHMgZHVyaW5nIHRoZSBjYXB0dXJlIHBoYXNlLlxuICAgKlxuICAgKiBAcGFyYW0ge0RPTUV2ZW50VGFyZ2V0fSB0YXJnZXQgRE9NIGVsZW1lbnQgdG8gcmVnaXN0ZXIgbGlzdGVuZXIgb24uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFR5cGUgRXZlbnQgdHlwZSwgZS5nLiAnY2xpY2snIG9yICdtb3VzZW92ZXInLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsYmFjayBmdW5jdGlvbi5cbiAgICogQHJldHVybiB7b2JqZWN0fSBPYmplY3Qgd2l0aCBhIGByZW1vdmVgIG1ldGhvZC5cbiAgICovXG4gIGNhcHR1cmU6IGZ1bmN0aW9uIGNhcHR1cmUodGFyZ2V0LCBldmVudFR5cGUsIGNhbGxiYWNrKSB7XG4gICAgaWYgKHRhcmdldC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGNhbGxiYWNrLCB0cnVlKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgICAgIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgY2FsbGJhY2ssIHRydWUpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdBdHRlbXB0ZWQgdG8gbGlzdGVuIHRvIGV2ZW50cyBkdXJpbmcgdGhlIGNhcHR1cmUgcGhhc2Ugb24gYSAnICsgJ2Jyb3dzZXIgdGhhdCBkb2VzIG5vdCBzdXBwb3J0IHRoZSBjYXB0dXJlIHBoYXNlLiBZb3VyIGFwcGxpY2F0aW9uICcgKyAnd2lsbCBub3QgcmVjZWl2ZSBzb21lIGV2ZW50cy4nKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJlbW92ZTogZW1wdHlGdW5jdGlvblxuICAgICAgfTtcbiAgICB9XG4gIH0sXG5cbiAgcmVnaXN0ZXJEZWZhdWx0OiBmdW5jdGlvbiByZWdpc3RlckRlZmF1bHQoKSB7fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBFdmVudExpc3RlbmVyO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvRXZlbnRMaXN0ZW5lci5qc1xuICoqIG1vZHVsZSBpZCA9IDQ0NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgY2FuY2VsQW5pbWF0aW9uRnJhbWVQb2x5ZmlsbFxuICovXG5cbi8qKlxuICogSGVyZSBpcyB0aGUgbmF0aXZlIGFuZCBwb2x5ZmlsbCB2ZXJzaW9uIG9mIGNhbmNlbEFuaW1hdGlvbkZyYW1lLlxuICogUGxlYXNlIGRvbid0IHVzZSBpdCBkaXJlY3RseSBhbmQgdXNlIGNhbmNlbEFuaW1hdGlvbkZyYW1lIG1vZHVsZSBpbnN0ZWFkLlxuICovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIGNhbmNlbEFuaW1hdGlvbkZyYW1lID0gZ2xvYmFsLmNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8IGdsb2JhbC53ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZSB8fCBnbG9iYWwubW96Q2FuY2VsQW5pbWF0aW9uRnJhbWUgfHwgZ2xvYmFsLm9DYW5jZWxBbmltYXRpb25GcmFtZSB8fCBnbG9iYWwubXNDYW5jZWxBbmltYXRpb25GcmFtZSB8fCBnbG9iYWwuY2xlYXJUaW1lb3V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNhbmNlbEFuaW1hdGlvbkZyYW1lO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvY2FuY2VsQW5pbWF0aW9uRnJhbWVQb2x5ZmlsbC5qc1xuICoqIG1vZHVsZSBpZCA9IDQ0NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgS2V5c1xuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgQkFDS1NQQUNFOiA4LFxuICBUQUI6IDksXG4gIFJFVFVSTjogMTMsXG4gIEFMVDogMTgsXG4gIEVTQzogMjcsXG4gIFNQQUNFOiAzMixcbiAgUEFHRV9VUDogMzMsXG4gIFBBR0VfRE9XTjogMzQsXG4gIEVORDogMzUsXG4gIEhPTUU6IDM2LFxuICBMRUZUOiAzNyxcbiAgVVA6IDM4LFxuICBSSUdIVDogMzksXG4gIERPV046IDQwLFxuICBERUxFVEU6IDQ2LFxuICBDT01NQTogMTg4LFxuICBQRVJJT0Q6IDE5MCxcbiAgQTogNjUsXG4gIFo6IDkwLFxuICBaRVJPOiA0OCxcbiAgTlVNUEFEXzA6IDk2LFxuICBOVU1QQURfOTogMTA1XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvS2V5cy5qc1xuICoqIG1vZHVsZSBpZCA9IDQ0NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgUmVhY3RET01cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9SZWFjdERPTS5qc1xuICoqIG1vZHVsZSBpZCA9IDQ0N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgY3NzVmFyXG4gKiBAdHlwZWNoZWNrc1xuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG52YXIgQ1NTX1ZBUlMgPSB7XG4gICdzY3JvbGxiYXItZmFjZS1hY3RpdmUtY29sb3InOiAnIzdkN2Q3ZCcsXG4gICdzY3JvbGxiYXItZmFjZS1jb2xvcic6ICcjYzJjMmMyJyxcbiAgJ3Njcm9sbGJhci1mYWNlLW1hcmdpbic6ICc0cHgnLFxuICAnc2Nyb2xsYmFyLWZhY2UtcmFkaXVzJzogJzZweCcsXG4gICdzY3JvbGxiYXItc2l6ZSc6ICcxNXB4JyxcbiAgJ3Njcm9sbGJhci1zaXplLWxhcmdlJzogJzE3cHgnLFxuICAnc2Nyb2xsYmFyLXRyYWNrLWNvbG9yJzogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC44KScsXG4gICdmYnVpLXdoaXRlJzogJyNmZmYnLFxuICAnZmJ1aS1kZXNrdG9wLWJhY2tncm91bmQtbGlnaHQnOiAnI2Y2ZjdmOCdcbn07XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqL1xuZnVuY3Rpb24gY3NzVmFyKG5hbWUpIHtcbiAgaWYgKENTU19WQVJTLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgcmV0dXJuIENTU19WQVJTW25hbWVdO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKCdjc3NWYXInICsgJyhcIicgKyBuYW1lICsgJ1wiKTogVW5leHBlY3RlZCBjbGFzcyB0cmFuc2Zvcm1hdGlvbi4nKTtcbn1cblxuY3NzVmFyLkNTU19WQVJTID0gQ1NTX1ZBUlM7XG5cbm1vZHVsZS5leHBvcnRzID0gY3NzVmFyO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvY3NzVmFyLmpzXG4gKiogbW9kdWxlIGlkID0gNDQ4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBjeFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHNsYXNoUmVwbGFjZVJlZ2V4ID0gL1xcLy9nO1xudmFyIGNhY2hlID0ge307XG5cbmZ1bmN0aW9uIGdldENsYXNzTmFtZShjbGFzc05hbWUpIHtcbiAgaWYgKGNhY2hlW2NsYXNzTmFtZV0pIHtcbiAgICByZXR1cm4gY2FjaGVbY2xhc3NOYW1lXTtcbiAgfVxuXG4gIGNhY2hlW2NsYXNzTmFtZV0gPSBjbGFzc05hbWUucmVwbGFjZShzbGFzaFJlcGxhY2VSZWdleCwgJ18nKTtcbiAgcmV0dXJuIGNhY2hlW2NsYXNzTmFtZV07XG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIG1hcmsgc3RyaW5nIGxpdGVyYWxzIHJlcHJlc2VudGluZyBDU1MgY2xhc3MgbmFtZXNcbiAqIHNvIHRoYXQgdGhleSBjYW4gYmUgdHJhbnNmb3JtZWQgc3RhdGljYWxseS4gVGhpcyBhbGxvd3MgZm9yIG1vZHVsYXJpemF0aW9uXG4gKiBhbmQgbWluaWZpY2F0aW9uIG9mIENTUyBjbGFzcyBuYW1lcy5cbiAqXG4gKiBJbiBzdGF0aWNfdXBzdHJlYW0sIHRoaXMgZnVuY3Rpb24gaXMgYWN0dWFsbHkgaW1wbGVtZW50ZWQsIGJ1dCBpdCBzaG91bGRcbiAqIGV2ZW50dWFsbHkgYmUgcmVwbGFjZWQgd2l0aCBzb21ldGhpbmcgbW9yZSBkZXNjcmlwdGl2ZSwgYW5kIHRoZSB0cmFuc2Zvcm1cbiAqIHRoYXQgaXMgdXNlZCBpbiB0aGUgbWFpbiBzdGFjayBzaG91bGQgYmUgcG9ydGVkIGZvciB1c2UgZWxzZXdoZXJlLlxuICpcbiAqIEBwYXJhbSBzdHJpbmd8b2JqZWN0IGNsYXNzTmFtZSB0byBtb2R1bGFyaXplLCBvciBhbiBvYmplY3Qgb2Yga2V5L3ZhbHVlcy5cbiAqICAgICAgICAgICAgICAgICAgICAgIEluIHRoZSBvYmplY3QgY2FzZSwgdGhlIHZhbHVlcyBhcmUgY29uZGl0aW9ucyB0aGF0XG4gKiAgICAgICAgICAgICAgICAgICAgICBkZXRlcm1pbmUgaWYgdGhlIGNsYXNzTmFtZSBrZXlzIHNob3VsZCBiZSBpbmNsdWRlZC5cbiAqIEBwYXJhbSBbc3RyaW5nIC4uLl0gIFZhcmlhYmxlIGxpc3Qgb2YgY2xhc3NOYW1lcyBpbiB0aGUgc3RyaW5nIGNhc2UuXG4gKiBAcmV0dXJuIHN0cmluZyAgICAgICBSZW5kZXJhYmxlIHNwYWNlLXNlcGFyYXRlZCBDU1MgY2xhc3NOYW1lLlxuICovXG5mdW5jdGlvbiBjeChjbGFzc05hbWVzKSB7XG4gIHZhciBjbGFzc05hbWVzQXJyYXk7XG4gIGlmICh0eXBlb2YgY2xhc3NOYW1lcyA9PSAnb2JqZWN0Jykge1xuICAgIGNsYXNzTmFtZXNBcnJheSA9IE9iamVjdC5rZXlzKGNsYXNzTmFtZXMpLmZpbHRlcihmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgICByZXR1cm4gY2xhc3NOYW1lc1tjbGFzc05hbWVdO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGNsYXNzTmFtZXNBcnJheSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gIH1cblxuICByZXR1cm4gY2xhc3NOYW1lc0FycmF5Lm1hcChnZXRDbGFzc05hbWUpLmpvaW4oJyAnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjeDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL2N4LmpzXG4gKiogbW9kdWxlIGlkID0gNDQ5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSB0cmFuc2xhdGVET01Qb3NpdGlvblhZXG4gKiBAdHlwZWNoZWNrc1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIEJyb3dzZXJTdXBwb3J0Q29yZSA9IHJlcXVpcmUoJy4vQnJvd3NlclN1cHBvcnRDb3JlJyk7XG5cbnZhciBnZXRWZW5kb3JQcmVmaXhlZE5hbWUgPSByZXF1aXJlKCcuL2dldFZlbmRvclByZWZpeGVkTmFtZScpO1xuXG52YXIgVFJBTlNGT1JNID0gZ2V0VmVuZG9yUHJlZml4ZWROYW1lKCd0cmFuc2Zvcm0nKTtcbnZhciBCQUNLRkFDRV9WSVNJQklMSVRZID0gZ2V0VmVuZG9yUHJlZml4ZWROYW1lKCdiYWNrZmFjZVZpc2liaWxpdHknKTtcblxudmFyIHRyYW5zbGF0ZURPTVBvc2l0aW9uWFkgPSAoZnVuY3Rpb24gKCkge1xuICBpZiAoQnJvd3NlclN1cHBvcnRDb3JlLmhhc0NTU1RyYW5zZm9ybXMoKSkge1xuICAgIHZhciB1YSA9IGdsb2JhbC53aW5kb3cgPyBnbG9iYWwud2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQgOiAnVU5LTk9XTic7XG4gICAgdmFyIGlzU2FmYXJpID0gL1NhZmFyaVxcLy8udGVzdCh1YSkgJiYgIS9DaHJvbWVcXC8vLnRlc3QodWEpO1xuICAgIC8vIEl0IGFwcGVhcnMgdGhhdCBTYWZhcmkgbWVzc2VzIHVwIHRoZSBjb21wb3NpdGlvbiBvcmRlclxuICAgIC8vIG9mIEdQVS1hY2NlbGVyYXRlZCBsYXllcnNcbiAgICAvLyAoc2VlIGJ1ZyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NjE4MjQpLlxuICAgIC8vIFVzZSAyRCB0cmFuc2xhdGlvbiBpbnN0ZWFkLlxuICAgIGlmICghaXNTYWZhcmkgJiYgQnJvd3NlclN1cHBvcnRDb3JlLmhhc0NTUzNEVHJhbnNmb3JtcygpKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCAvKm9iamVjdCovc3R5bGUsIC8qbnVtYmVyKi94LCAvKm51bWJlcioveSkge1xuICAgICAgICBzdHlsZVtUUkFOU0ZPUk1dID0gJ3RyYW5zbGF0ZTNkKCcgKyB4ICsgJ3B4LCcgKyB5ICsgJ3B4LDApJztcbiAgICAgICAgc3R5bGVbQkFDS0ZBQ0VfVklTSUJJTElUWV0gPSAnaGlkZGVuJztcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoIC8qb2JqZWN0Ki9zdHlsZSwgLypudW1iZXIqL3gsIC8qbnVtYmVyKi95KSB7XG4gICAgICAgIHN0eWxlW1RSQU5TRk9STV0gPSAndHJhbnNsYXRlKCcgKyB4ICsgJ3B4LCcgKyB5ICsgJ3B4KSc7XG4gICAgICB9O1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCAvKm9iamVjdCovc3R5bGUsIC8qbnVtYmVyKi94LCAvKm51bWJlcioveSkge1xuICAgICAgc3R5bGUubGVmdCA9IHggKyAncHgnO1xuICAgICAgc3R5bGUudG9wID0geSArICdweCc7XG4gICAgfTtcbiAgfVxufSkoKTtcblxubW9kdWxlLmV4cG9ydHMgPSB0cmFuc2xhdGVET01Qb3NpdGlvblhZO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvdHJhbnNsYXRlRE9NUG9zaXRpb25YWS5qc1xuICoqIG1vZHVsZSBpZCA9IDQ1MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgQnJvd3NlclN1cHBvcnRDb3JlXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZ2V0VmVuZG9yUHJlZml4ZWROYW1lID0gcmVxdWlyZSgnLi9nZXRWZW5kb3JQcmVmaXhlZE5hbWUnKTtcblxudmFyIEJyb3dzZXJTdXBwb3J0Q29yZSA9IHtcbiAgLyoqXG4gICAqIEByZXR1cm4ge2Jvb2x9IFRydWUgaWYgYnJvd3NlciBzdXBwb3J0cyBjc3MgYW5pbWF0aW9ucy5cbiAgICovXG4gIGhhc0NTU0FuaW1hdGlvbnM6IGZ1bmN0aW9uIGhhc0NTU0FuaW1hdGlvbnMoKSB7XG4gICAgcmV0dXJuICEhZ2V0VmVuZG9yUHJlZml4ZWROYW1lKCdhbmltYXRpb25OYW1lJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge2Jvb2x9IFRydWUgaWYgYnJvd3NlciBzdXBwb3J0cyBjc3MgdHJhbnNmb3Jtcy5cbiAgICovXG4gIGhhc0NTU1RyYW5zZm9ybXM6IGZ1bmN0aW9uIGhhc0NTU1RyYW5zZm9ybXMoKSB7XG4gICAgcmV0dXJuICEhZ2V0VmVuZG9yUHJlZml4ZWROYW1lKCd0cmFuc2Zvcm0nKTtcbiAgfSxcblxuICAvKipcbiAgICogQHJldHVybiB7Ym9vbH0gVHJ1ZSBpZiBicm93c2VyIHN1cHBvcnRzIGNzcyAzZCB0cmFuc2Zvcm1zLlxuICAgKi9cbiAgaGFzQ1NTM0RUcmFuc2Zvcm1zOiBmdW5jdGlvbiBoYXNDU1MzRFRyYW5zZm9ybXMoKSB7XG4gICAgcmV0dXJuICEhZ2V0VmVuZG9yUHJlZml4ZWROYW1lKCdwZXJzcGVjdGl2ZScpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtib29sfSBUcnVlIGlmIGJyb3dzZXIgc3VwcG9ydHMgY3NzIHRyYW5zaXRpb25zLlxuICAgKi9cbiAgaGFzQ1NTVHJhbnNpdGlvbnM6IGZ1bmN0aW9uIGhhc0NTU1RyYW5zaXRpb25zKCkge1xuICAgIHJldHVybiAhIWdldFZlbmRvclByZWZpeGVkTmFtZSgndHJhbnNpdGlvbicpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJyb3dzZXJTdXBwb3J0Q29yZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL0Jyb3dzZXJTdXBwb3J0Q29yZS5qc1xuICoqIG1vZHVsZSBpZCA9IDQ1MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgZ2V0VmVuZG9yUHJlZml4ZWROYW1lXG4gKiBAdHlwZWNoZWNrc1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIEV4ZWN1dGlvbkVudmlyb25tZW50ID0gcmVxdWlyZSgnLi9FeGVjdXRpb25FbnZpcm9ubWVudCcpO1xuXG52YXIgY2FtZWxpemUgPSByZXF1aXJlKCcuL2NhbWVsaXplJyk7XG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnLi9pbnZhcmlhbnQnKTtcblxudmFyIG1lbW9pemVkID0ge307XG52YXIgcHJlZml4ZXMgPSBbJ1dlYmtpdCcsICdtcycsICdNb3onLCAnTyddO1xudmFyIHByZWZpeFJlZ2V4ID0gbmV3IFJlZ0V4cCgnXignICsgcHJlZml4ZXMuam9pbignfCcpICsgJyknKTtcbnZhciB0ZXN0U3R5bGUgPSBFeGVjdXRpb25FbnZpcm9ubWVudC5jYW5Vc2VET00gPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKS5zdHlsZSA6IHt9O1xuXG5mdW5jdGlvbiBnZXRXaXRoUHJlZml4KG5hbWUpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcmVmaXhlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBwcmVmaXhlZE5hbWUgPSBwcmVmaXhlc1tpXSArIG5hbWU7XG4gICAgaWYgKHByZWZpeGVkTmFtZSBpbiB0ZXN0U3R5bGUpIHtcbiAgICAgIHJldHVybiBwcmVmaXhlZE5hbWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wZXJ0eSBOYW1lIG9mIGEgY3NzIHByb3BlcnR5IHRvIGNoZWNrIGZvci5cbiAqIEByZXR1cm4gez9zdHJpbmd9IHByb3BlcnR5IG5hbWUgc3VwcG9ydGVkIGluIHRoZSBicm93c2VyLCBvciBudWxsIGlmIG5vdFxuICogc3VwcG9ydGVkLlxuICovXG5mdW5jdGlvbiBnZXRWZW5kb3JQcmVmaXhlZE5hbWUocHJvcGVydHkpIHtcbiAgdmFyIG5hbWUgPSBjYW1lbGl6ZShwcm9wZXJ0eSk7XG4gIGlmIChtZW1vaXplZFtuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGNhcGl0YWxpemVkTmFtZSA9IG5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBuYW1lLnNsaWNlKDEpO1xuICAgIGlmIChwcmVmaXhSZWdleC50ZXN0KGNhcGl0YWxpemVkTmFtZSkpIHtcbiAgICAgIGludmFyaWFudChmYWxzZSwgJ2dldFZlbmRvclByZWZpeGVkTmFtZSBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggdW5wcmVmaXhlZCcgKyAnQ1NTIHByb3BlcnR5IG5hbWVzLiBJdCB3YXMgY2FsbGVkIHdpdGggJXMnLCBwcm9wZXJ0eSk7XG4gICAgfVxuICAgIG1lbW9pemVkW25hbWVdID0gbmFtZSBpbiB0ZXN0U3R5bGUgPyBuYW1lIDogZ2V0V2l0aFByZWZpeChjYXBpdGFsaXplZE5hbWUpO1xuICB9XG4gIHJldHVybiBtZW1vaXplZFtuYW1lXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRWZW5kb3JQcmVmaXhlZE5hbWU7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9nZXRWZW5kb3JQcmVmaXhlZE5hbWUuanNcbiAqKiBtb2R1bGUgaWQgPSA0NTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIGNhbWVsaXplXG4gKiBAdHlwZWNoZWNrc1xuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG52YXIgX2h5cGhlblBhdHRlcm4gPSAvLSguKS9nO1xuXG4vKipcbiAqIENhbWVsY2FzZXMgYSBoeXBoZW5hdGVkIHN0cmluZywgZm9yIGV4YW1wbGU6XG4gKlxuICogICA+IGNhbWVsaXplKCdiYWNrZ3JvdW5kLWNvbG9yJylcbiAqICAgPCBcImJhY2tncm91bmRDb2xvclwiXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZ1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBjYW1lbGl6ZShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKF9oeXBoZW5QYXR0ZXJuLCBmdW5jdGlvbiAoXywgY2hhcmFjdGVyKSB7XG4gICAgcmV0dXJuIGNoYXJhY3Rlci50b1VwcGVyQ2FzZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjYW1lbGl6ZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL2NhbWVsaXplLmpzXG4gKiogbW9kdWxlIGlkID0gNDUzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBpbnZhcmlhbnRcbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIGludmFyaWFudCA9IGZ1bmN0aW9uIGludmFyaWFudChjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQgcmVxdWlyZXMgYW4gZXJyb3IgbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgfVxuXG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdmFyIGVycm9yO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgKyAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoJ0ludmFyaWFudCBWaW9sYXRpb246ICcgKyBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7IC8vIHdlIGRvbid0IGNhcmUgYWJvdXQgaW52YXJpYW50J3Mgb3duIGZyYW1lXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaW52YXJpYW50O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvaW52YXJpYW50LmpzXG4gKiogbW9kdWxlIGlkID0gNDU0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBGaXhlZERhdGFUYWJsZUJ1ZmZlcmVkUm93cy5yZWFjdFxuICogQHR5cGVjaGVja3NcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJy4vUmVhY3QnKTtcbnZhciBGaXhlZERhdGFUYWJsZVJvd0J1ZmZlciA9IHJlcXVpcmUoJy4vRml4ZWREYXRhVGFibGVSb3dCdWZmZXInKTtcbnZhciBGaXhlZERhdGFUYWJsZVJvdyA9IHJlcXVpcmUoJy4vRml4ZWREYXRhVGFibGVSb3cucmVhY3QnKTtcblxudmFyIGN4ID0gcmVxdWlyZSgnLi9jeCcpO1xudmFyIGVtcHR5RnVuY3Rpb24gPSByZXF1aXJlKCcuL2VtcHR5RnVuY3Rpb24nKTtcbnZhciBqb2luQ2xhc3NlcyA9IHJlcXVpcmUoJy4vam9pbkNsYXNzZXMnKTtcbnZhciB0cmFuc2xhdGVET01Qb3NpdGlvblhZID0gcmVxdWlyZSgnLi90cmFuc2xhdGVET01Qb3NpdGlvblhZJyk7XG5cbnZhciBQcm9wVHlwZXMgPSBSZWFjdC5Qcm9wVHlwZXM7XG5cbnZhciBGaXhlZERhdGFUYWJsZUJ1ZmZlcmVkUm93cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdGaXhlZERhdGFUYWJsZUJ1ZmZlcmVkUm93cycsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgaXNTY3JvbGxpbmc6IFByb3BUeXBlcy5ib29sLFxuICAgIGRlZmF1bHRSb3dIZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBmaXJzdFJvd0luZGV4OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgZmlyc3RSb3dPZmZzZXQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBmaXhlZENvbHVtbnM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICAgIGhlaWdodDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIG9mZnNldFRvcDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIG9uUm93Q2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uUm93RG91YmxlQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uUm93TW91c2VEb3duOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblJvd01vdXNlRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uUm93TW91c2VMZWF2ZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgcm93Q2xhc3NOYW1lR2V0dGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICByb3dzQ291bnQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICByb3dIZWlnaHRHZXR0ZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIHJvd1Bvc2l0aW9uR2V0dGVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHNjcm9sbExlZnQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBzY3JvbGxhYmxlQ29sdW1uczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gICAgc2hvd0xhc3RSb3dCb3JkZXI6IFByb3BUeXBlcy5ib29sLFxuICAgIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWRcbiAgfSxcblxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIC8qb2JqZWN0Ki97XG4gICAgdGhpcy5fcm93QnVmZmVyID0gbmV3IEZpeGVkRGF0YVRhYmxlUm93QnVmZmVyKHRoaXMucHJvcHMucm93c0NvdW50LCB0aGlzLnByb3BzLmRlZmF1bHRSb3dIZWlnaHQsIHRoaXMucHJvcHMuaGVpZ2h0LCB0aGlzLl9nZXRSb3dIZWlnaHQpO1xuICAgIHJldHVybiB7XG4gICAgICByb3dzVG9SZW5kZXI6IHRoaXMuX3Jvd0J1ZmZlci5nZXRSb3dzKHRoaXMucHJvcHMuZmlyc3RSb3dJbmRleCwgdGhpcy5wcm9wcy5maXJzdFJvd09mZnNldClcbiAgICB9O1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxNb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHRoaXMuX3N0YXRpY1Jvd0FycmF5ID0gW107XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHNldFRpbWVvdXQodGhpcy5fdXBkYXRlQnVmZmVyLCAxMDAwKTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKCAvKm9iamVjdCovbmV4dFByb3BzKSB7XG4gICAgaWYgKG5leHRQcm9wcy5yb3dzQ291bnQgIT09IHRoaXMucHJvcHMucm93c0NvdW50IHx8IG5leHRQcm9wcy5kZWZhdWx0Um93SGVpZ2h0ICE9PSB0aGlzLnByb3BzLmRlZmF1bHRSb3dIZWlnaHQgfHwgbmV4dFByb3BzLmhlaWdodCAhPT0gdGhpcy5wcm9wcy5oZWlnaHQpIHtcbiAgICAgIHRoaXMuX3Jvd0J1ZmZlciA9IG5ldyBGaXhlZERhdGFUYWJsZVJvd0J1ZmZlcihuZXh0UHJvcHMucm93c0NvdW50LCBuZXh0UHJvcHMuZGVmYXVsdFJvd0hlaWdodCwgbmV4dFByb3BzLmhlaWdodCwgdGhpcy5fZ2V0Um93SGVpZ2h0KTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMuaXNTY3JvbGxpbmcgJiYgIW5leHRQcm9wcy5pc1Njcm9sbGluZykge1xuICAgICAgdGhpcy5fdXBkYXRlQnVmZmVyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICByb3dzVG9SZW5kZXI6IHRoaXMuX3Jvd0J1ZmZlci5nZXRSb3dzKG5leHRQcm9wcy5maXJzdFJvd0luZGV4LCBuZXh0UHJvcHMuZmlyc3RSb3dPZmZzZXQpXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgX3VwZGF0ZUJ1ZmZlcjogZnVuY3Rpb24gX3VwZGF0ZUJ1ZmZlcigpIHtcbiAgICBpZiAodGhpcy5pc01vdW50ZWQoKSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHJvd3NUb1JlbmRlcjogdGhpcy5fcm93QnVmZmVyLmdldFJvd3NXaXRoVXBkYXRlZEJ1ZmZlcigpXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlOiBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUoKSAvKmJvb2xlYW4qL3tcbiAgICAvLyBEb24ndCBhZGQgUHVyZVJlbmRlck1peGluIHRvIHRoaXMgY29tcG9uZW50IHBsZWFzZS5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5fc3RhdGljUm93QXJyYXkubGVuZ3RoID0gMDtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIC8qb2JqZWN0Ki97XG4gICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgcm93Q2xhc3NOYW1lR2V0dGVyID0gcHJvcHMucm93Q2xhc3NOYW1lR2V0dGVyIHx8IGVtcHR5RnVuY3Rpb247XG4gICAgdmFyIHJvd1Bvc2l0aW9uR2V0dGVyID0gcHJvcHMucm93UG9zaXRpb25HZXR0ZXI7XG5cbiAgICB2YXIgcm93c1RvUmVuZGVyID0gdGhpcy5zdGF0ZS5yb3dzVG9SZW5kZXI7XG4gICAgdGhpcy5fc3RhdGljUm93QXJyYXkubGVuZ3RoID0gcm93c1RvUmVuZGVyLmxlbmd0aDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcm93c1RvUmVuZGVyLmxlbmd0aDsgKytpKSB7XG4gICAgICB2YXIgcm93SW5kZXggPSByb3dzVG9SZW5kZXJbaV07XG4gICAgICB2YXIgY3VycmVudFJvd0hlaWdodCA9IHRoaXMuX2dldFJvd0hlaWdodChyb3dJbmRleCk7XG4gICAgICB2YXIgcm93T2Zmc2V0VG9wID0gcm93UG9zaXRpb25HZXR0ZXIocm93SW5kZXgpO1xuXG4gICAgICB2YXIgaGFzQm90dG9tQm9yZGVyID0gcm93SW5kZXggPT09IHByb3BzLnJvd3NDb3VudCAtIDEgJiYgcHJvcHMuc2hvd0xhc3RSb3dCb3JkZXI7XG5cbiAgICAgIHRoaXMuX3N0YXRpY1Jvd0FycmF5W2ldID0gUmVhY3QuY3JlYXRlRWxlbWVudChGaXhlZERhdGFUYWJsZVJvdywge1xuICAgICAgICBrZXk6IGksXG4gICAgICAgIGlzU2Nyb2xsaW5nOiBwcm9wcy5pc1Njcm9sbGluZyxcbiAgICAgICAgaW5kZXg6IHJvd0luZGV4LFxuICAgICAgICB3aWR0aDogcHJvcHMud2lkdGgsXG4gICAgICAgIGhlaWdodDogY3VycmVudFJvd0hlaWdodCxcbiAgICAgICAgc2Nyb2xsTGVmdDogTWF0aC5yb3VuZChwcm9wcy5zY3JvbGxMZWZ0KSxcbiAgICAgICAgb2Zmc2V0VG9wOiBNYXRoLnJvdW5kKHJvd09mZnNldFRvcCksXG4gICAgICAgIGZpeGVkQ29sdW1uczogcHJvcHMuZml4ZWRDb2x1bW5zLFxuICAgICAgICBzY3JvbGxhYmxlQ29sdW1uczogcHJvcHMuc2Nyb2xsYWJsZUNvbHVtbnMsXG4gICAgICAgIG9uQ2xpY2s6IHByb3BzLm9uUm93Q2xpY2ssXG4gICAgICAgIG9uRG91YmxlQ2xpY2s6IHByb3BzLm9uUm93RG91YmxlQ2xpY2ssXG4gICAgICAgIG9uTW91c2VEb3duOiBwcm9wcy5vblJvd01vdXNlRG93bixcbiAgICAgICAgb25Nb3VzZUVudGVyOiBwcm9wcy5vblJvd01vdXNlRW50ZXIsXG4gICAgICAgIG9uTW91c2VMZWF2ZTogcHJvcHMub25Sb3dNb3VzZUxlYXZlLFxuICAgICAgICBjbGFzc05hbWU6IGpvaW5DbGFzc2VzKHJvd0NsYXNzTmFtZUdldHRlcihyb3dJbmRleCksIGN4KCdwdWJsaWMvZml4ZWREYXRhVGFibGUvYm9keVJvdycpLCBjeCh7XG4gICAgICAgICAgJ2ZpeGVkRGF0YVRhYmxlTGF5b3V0L2hhc0JvdHRvbUJvcmRlcic6IGhhc0JvdHRvbUJvcmRlcixcbiAgICAgICAgICAncHVibGljL2ZpeGVkRGF0YVRhYmxlL2hhc0JvdHRvbUJvcmRlcic6IGhhc0JvdHRvbUJvcmRlclxuICAgICAgICB9KSlcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBmaXJzdFJvd1Bvc2l0aW9uID0gcHJvcHMucm93UG9zaXRpb25HZXR0ZXIocHJvcHMuZmlyc3RSb3dJbmRleCk7XG5cbiAgICB2YXIgc3R5bGUgPSB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHBvaW50ZXJFdmVudHM6IHByb3BzLmlzU2Nyb2xsaW5nID8gJ25vbmUnIDogJ2F1dG8nXG4gICAgfTtcblxuICAgIHRyYW5zbGF0ZURPTVBvc2l0aW9uWFkoc3R5bGUsIDAsIHByb3BzLmZpcnN0Um93T2Zmc2V0IC0gZmlyc3RSb3dQb3NpdGlvbiArIHByb3BzLm9mZnNldFRvcCk7XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgeyBzdHlsZTogc3R5bGUgfSxcbiAgICAgIHRoaXMuX3N0YXRpY1Jvd0FycmF5XG4gICAgKTtcbiAgfSxcblxuICBfZ2V0Um93SGVpZ2h0OiBmdW5jdGlvbiBfZ2V0Um93SGVpZ2h0KCAvKm51bWJlciovaW5kZXgpIC8qbnVtYmVyKi97XG4gICAgcmV0dXJuIHRoaXMucHJvcHMucm93SGVpZ2h0R2V0dGVyID8gdGhpcy5wcm9wcy5yb3dIZWlnaHRHZXR0ZXIoaW5kZXgpIDogdGhpcy5wcm9wcy5kZWZhdWx0Um93SGVpZ2h0O1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBGaXhlZERhdGFUYWJsZUJ1ZmZlcmVkUm93cztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL0ZpeGVkRGF0YVRhYmxlQnVmZmVyZWRSb3dzLnJlYWN0LmpzXG4gKiogbW9kdWxlIGlkID0gNDU1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBGaXhlZERhdGFUYWJsZVJvd0J1ZmZlclxuICogQHR5cGVjaGVja3NcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG52YXIgSW50ZWdlckJ1ZmZlclNldCA9IHJlcXVpcmUoJy4vSW50ZWdlckJ1ZmZlclNldCcpO1xuXG52YXIgY2xhbXAgPSByZXF1aXJlKCcuL2NsYW1wJyk7XG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnLi9pbnZhcmlhbnQnKTtcbnZhciBNSU5fQlVGRkVSX1JPV1MgPSAzO1xudmFyIE1BWF9CVUZGRVJfUk9XUyA9IDY7XG5cbi8vIEZpeGVkRGF0YVRhYmxlUm93QnVmZmVyIGlzIGEgaGVscGVyIGNsYXNzIHRoYXQgZXhlY3V0ZXMgcm93IGJ1ZmZlcmluZ1xuLy8gbG9naWMgZm9yIEZpeGVkRGF0YVRhYmxlLiBJdCBmaWd1cmVzIG91dCB3aGljaCByb3dzIHNob3VsZCBiZSByZW5kZXJlZFxuLy8gYW5kIGluIHdoaWNoIHBvc2l0aW9ucy5cblxudmFyIEZpeGVkRGF0YVRhYmxlUm93QnVmZmVyID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRml4ZWREYXRhVGFibGVSb3dCdWZmZXIoXG4gIC8qbnVtYmVyKi9yb3dzQ291bnQsXG4gIC8qbnVtYmVyKi9kZWZhdWx0Um93SGVpZ2h0LFxuICAvKm51bWJlciovdmlld3BvcnRIZWlnaHQsXG4gIC8qP2Z1bmN0aW9uKi9yb3dIZWlnaHRHZXR0ZXIpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRml4ZWREYXRhVGFibGVSb3dCdWZmZXIpO1xuXG4gICAgaW52YXJpYW50KGRlZmF1bHRSb3dIZWlnaHQgIT09IDAsIFwiZGVmYXVsdFJvd0hlaWdodCBtdXNuJ3QgYmUgZXF1YWwgMCBpbiBGaXhlZERhdGFUYWJsZVJvd0J1ZmZlclwiKTtcblxuICAgIHRoaXMuX2J1ZmZlclNldCA9IG5ldyBJbnRlZ2VyQnVmZmVyU2V0KCk7XG4gICAgdGhpcy5fZGVmYXVsdFJvd0hlaWdodCA9IGRlZmF1bHRSb3dIZWlnaHQ7XG4gICAgdGhpcy5fdmlld3BvcnRSb3dzQmVnaW4gPSAwO1xuICAgIHRoaXMuX3ZpZXdwb3J0Um93c0VuZCA9IDA7XG4gICAgdGhpcy5fbWF4VmlzaWJsZVJvd0NvdW50ID0gTWF0aC5jZWlsKHZpZXdwb3J0SGVpZ2h0IC8gZGVmYXVsdFJvd0hlaWdodCkgKyAxO1xuICAgIHRoaXMuX2J1ZmZlclJvd3NDb3VudCA9IGNsYW1wKE1hdGguZmxvb3IodGhpcy5fbWF4VmlzaWJsZVJvd0NvdW50IC8gMiksIE1JTl9CVUZGRVJfUk9XUywgTUFYX0JVRkZFUl9ST1dTKTtcbiAgICB0aGlzLl9yb3dzQ291bnQgPSByb3dzQ291bnQ7XG4gICAgdGhpcy5fcm93SGVpZ2h0R2V0dGVyID0gcm93SGVpZ2h0R2V0dGVyO1xuICAgIHRoaXMuX3Jvd3MgPSBbXTtcbiAgICB0aGlzLl92aWV3cG9ydEhlaWdodCA9IHZpZXdwb3J0SGVpZ2h0O1xuXG4gICAgdGhpcy5nZXRSb3dzID0gdGhpcy5nZXRSb3dzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5nZXRSb3dzV2l0aFVwZGF0ZWRCdWZmZXIgPSB0aGlzLmdldFJvd3NXaXRoVXBkYXRlZEJ1ZmZlci5iaW5kKHRoaXMpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEZpeGVkRGF0YVRhYmxlUm93QnVmZmVyLCBbe1xuICAgIGtleTogJ2dldFJvd3NXaXRoVXBkYXRlZEJ1ZmZlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFJvd3NXaXRoVXBkYXRlZEJ1ZmZlcigpIC8qYXJyYXkqL3tcbiAgICAgIHZhciByZW1haW5pbmdCdWZmZXJSb3dzID0gMiAqIHRoaXMuX2J1ZmZlclJvd3NDb3VudDtcbiAgICAgIHZhciBidWZmZXJSb3dJbmRleCA9IE1hdGgubWF4KHRoaXMuX3ZpZXdwb3J0Um93c0JlZ2luIC0gdGhpcy5fYnVmZmVyUm93c0NvdW50LCAwKTtcbiAgICAgIHdoaWxlIChidWZmZXJSb3dJbmRleCA8IHRoaXMuX3ZpZXdwb3J0Um93c0JlZ2luKSB7XG4gICAgICAgIHRoaXMuX2FkZFJvd1RvQnVmZmVyKGJ1ZmZlclJvd0luZGV4LCB0aGlzLl92aWV3cG9ydFJvd3NCZWdpbiwgdGhpcy5fdmlld3BvcnRSb3dzRW5kIC0gMSk7XG4gICAgICAgIGJ1ZmZlclJvd0luZGV4Kys7XG4gICAgICAgIHJlbWFpbmluZ0J1ZmZlclJvd3MtLTtcbiAgICAgIH1cbiAgICAgIGJ1ZmZlclJvd0luZGV4ID0gdGhpcy5fdmlld3BvcnRSb3dzRW5kO1xuICAgICAgd2hpbGUgKGJ1ZmZlclJvd0luZGV4IDwgdGhpcy5fcm93c0NvdW50ICYmIHJlbWFpbmluZ0J1ZmZlclJvd3MgPiAwKSB7XG4gICAgICAgIHRoaXMuX2FkZFJvd1RvQnVmZmVyKGJ1ZmZlclJvd0luZGV4LCB0aGlzLl92aWV3cG9ydFJvd3NCZWdpbiwgdGhpcy5fdmlld3BvcnRSb3dzRW5kIC0gMSk7XG4gICAgICAgIGJ1ZmZlclJvd0luZGV4Kys7XG4gICAgICAgIHJlbWFpbmluZ0J1ZmZlclJvd3MtLTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLl9yb3dzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldFJvd3MnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRSb3dzKFxuICAgIC8qbnVtYmVyKi9maXJzdFJvd0luZGV4LFxuICAgIC8qbnVtYmVyKi9maXJzdFJvd09mZnNldCkgLyphcnJheSove1xuICAgICAgdmFyIHRvcCA9IGZpcnN0Um93T2Zmc2V0O1xuICAgICAgdmFyIHRvdGFsSGVpZ2h0ID0gdG9wO1xuICAgICAgdmFyIHJvd0luZGV4ID0gZmlyc3RSb3dJbmRleDtcbiAgICAgIHZhciBlbmRJbmRleCA9IE1hdGgubWluKGZpcnN0Um93SW5kZXggKyB0aGlzLl9tYXhWaXNpYmxlUm93Q291bnQsIHRoaXMuX3Jvd3NDb3VudCk7XG5cbiAgICAgIHRoaXMuX3ZpZXdwb3J0Um93c0JlZ2luID0gZmlyc3RSb3dJbmRleDtcbiAgICAgIHdoaWxlIChyb3dJbmRleCA8IGVuZEluZGV4IHx8IHRvdGFsSGVpZ2h0IDwgdGhpcy5fdmlld3BvcnRIZWlnaHQgJiYgcm93SW5kZXggPCB0aGlzLl9yb3dzQ291bnQpIHtcbiAgICAgICAgdGhpcy5fYWRkUm93VG9CdWZmZXIocm93SW5kZXgsIGZpcnN0Um93SW5kZXgsIGVuZEluZGV4IC0gMSk7XG4gICAgICAgIHRvdGFsSGVpZ2h0ICs9IHRoaXMuX3Jvd0hlaWdodEdldHRlcihyb3dJbmRleCk7XG4gICAgICAgICsrcm93SW5kZXg7XG4gICAgICAgIC8vIFN0b3JlIGluZGV4IGFmdGVyIHRoZSBsYXN0IHZpZXdwb3J0IHJvdyBhcyBlbmQsIHRvIGJlIGFibGUgdG9cbiAgICAgICAgLy8gZGlzdGluZ3Vpc2ggd2hlbiB0aGVyZSBhcmUgbm8gcm93cyByZW5kZXJlZCBpbiB2aWV3cG9ydFxuICAgICAgICB0aGlzLl92aWV3cG9ydFJvd3NFbmQgPSByb3dJbmRleDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuX3Jvd3M7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnX2FkZFJvd1RvQnVmZmVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2FkZFJvd1RvQnVmZmVyKFxuICAgIC8qbnVtYmVyKi9yb3dJbmRleCxcbiAgICAvKm51bWJlciovZmlyc3RWaWV3cG9ydFJvd0luZGV4LFxuICAgIC8qbnVtYmVyKi9sYXN0Vmlld3BvcnRSb3dJbmRleCkge1xuICAgICAgdmFyIHJvd1Bvc2l0aW9uID0gdGhpcy5fYnVmZmVyU2V0LmdldFZhbHVlUG9zaXRpb24ocm93SW5kZXgpO1xuICAgICAgdmFyIHZpZXdwb3J0Um93c0NvdW50ID0gbGFzdFZpZXdwb3J0Um93SW5kZXggLSBmaXJzdFZpZXdwb3J0Um93SW5kZXggKyAxO1xuICAgICAgdmFyIGFsbG93ZWRSb3dzQ291bnQgPSB2aWV3cG9ydFJvd3NDb3VudCArIHRoaXMuX2J1ZmZlclJvd3NDb3VudCAqIDI7XG4gICAgICBpZiAocm93UG9zaXRpb24gPT09IG51bGwgJiYgdGhpcy5fYnVmZmVyU2V0LmdldFNpemUoKSA+PSBhbGxvd2VkUm93c0NvdW50KSB7XG4gICAgICAgIHJvd1Bvc2l0aW9uID0gdGhpcy5fYnVmZmVyU2V0LnJlcGxhY2VGdXJ0aGVzdFZhbHVlUG9zaXRpb24oZmlyc3RWaWV3cG9ydFJvd0luZGV4LCBsYXN0Vmlld3BvcnRSb3dJbmRleCwgcm93SW5kZXgpO1xuICAgICAgfVxuICAgICAgaWYgKHJvd1Bvc2l0aW9uID09PSBudWxsKSB7XG4gICAgICAgIC8vIFdlIGNhbid0IHJldXNlIGFueSBvZiBleGlzdGluZyBwb3NpdGlvbnMgZm9yIHRoaXMgcm93LiBXZSBoYXZlIHRvXG4gICAgICAgIC8vIGNyZWF0ZSBuZXcgcG9zaXRpb25cbiAgICAgICAgcm93UG9zaXRpb24gPSB0aGlzLl9idWZmZXJTZXQuZ2V0TmV3UG9zaXRpb25Gb3JWYWx1ZShyb3dJbmRleCk7XG4gICAgICAgIHRoaXMuX3Jvd3Nbcm93UG9zaXRpb25dID0gcm93SW5kZXg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUaGlzIHJvdyBhbHJlYWR5IGlzIGluIHRoZSB0YWJsZSB3aXRoIHJvd1Bvc2l0aW9uIHBvc2l0aW9uIG9yIGl0XG4gICAgICAgIC8vIGNhbiByZXBsYWNlIHJvdyB0aGF0IGlzIGluIHRoYXQgcG9zaXRpb25cbiAgICAgICAgdGhpcy5fcm93c1tyb3dQb3NpdGlvbl0gPSByb3dJbmRleDtcbiAgICAgIH1cbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRml4ZWREYXRhVGFibGVSb3dCdWZmZXI7XG59KSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZpeGVkRGF0YVRhYmxlUm93QnVmZmVyO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvRml4ZWREYXRhVGFibGVSb3dCdWZmZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA0NTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIEludGVnZXJCdWZmZXJTZXRcbiAqIEB0eXBlY2hlY2tzXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIEhlYXAgPSByZXF1aXJlKCcuL0hlYXAnKTtcblxudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJy4vaW52YXJpYW50Jyk7XG5cbi8vIERhdGEgc3RydWN0dXJlIHRoYXQgYWxsb3dzIHRvIHN0b3JlIHZhbHVlcyBhbmQgYXNzaWduIHBvc2l0aW9ucyB0byB0aGVtXG4vLyBpbiBhIHdheSB0byBtaW5pbWl6ZSBjaGFuZ2luZyBwb3NpdGlvbnMgb2Ygc3RvcmVkIHZhbHVlcyB3aGVuIG5ldyBvbmVzIGFyZVxuLy8gYWRkZWQgb3Igd2hlbiBzb21lIHZhbHVlcyBhcmUgcmVwbGFjZWQuIFN0b3JlZCBlbGVtZW50cyBhcmUgYWx3YXN5IGFzc2lnbmVkXG4vLyBhIGNvbnNlY3V0aXZlIHNldCBvZiBwb3NpdG9pbnMgc3RhcnRpbiBmcm9tIDAgdXAgdG8gY291bnQgb2YgZWxlbWVudHMgbGVzcyAxXG4vLyBGb2xsb3dpbmcgYWN0aW9ucyBjYW4gYmUgZXhlY3V0ZWRcbi8vICogZ2V0IHBvc2l0aW9uIGFzc2lnbmVkIHRvIGdpdmVuIHZhbHVlIChudWxsIGlmIHZhbHVlIGlzIG5vdCBzdG9yZWQpXG4vLyAqIGNyZWF0ZSBuZXcgZW50cnkgZm9yIG5ldyB2YWx1ZSBhbmQgZ2V0IGFzc2lnbmVkIHBvc2l0aW9uIGJhY2tcbi8vICogcmVwbGFjZSB2YWx1ZSB0aGF0IGlzIGZ1cnRoZXN0IGZyb20gc3BlY2lmaWVkIHZhbHVlIHJhbmdlIHdpdGggbmV3IHZhbHVlXG4vLyAgIGFuZCBnZXQgaXQncyBwb3NpdGlvbiBiYWNrXG4vLyBBbGwgb3BlcmF0aW9ucyB0YWtlIGFtb3J0aXplZCBsb2cobikgdGltZSB3aGVyZSBuIGlzIG51bWJlciBvZiBlbGVtZW50cyBpblxuLy8gdGhlIHNldC5cblxudmFyIEludGVnZXJCdWZmZXJTZXQgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBJbnRlZ2VyQnVmZmVyU2V0KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbnRlZ2VyQnVmZmVyU2V0KTtcblxuICAgIHRoaXMuX3ZhbHVlVG9Qb3NpdGlvbk1hcCA9IHt9O1xuICAgIHRoaXMuX3NpemUgPSAwO1xuICAgIHRoaXMuX3NtYWxsVmFsdWVzID0gbmV3IEhlYXAoW10sIC8vIEluaXRpYWwgZGF0YSBpbiB0aGUgaGVhcFxuICAgIHRoaXMuX3NtYWxsZXJDb21wYXJhdG9yKTtcbiAgICB0aGlzLl9sYXJnZVZhbHVlcyA9IG5ldyBIZWFwKFtdLCAvLyBJbml0aWFsIGRhdGEgaW4gdGhlIGhlYXBcbiAgICB0aGlzLl9ncmVhdGVyQ29tcGFyYXRvcik7XG5cbiAgICB0aGlzLmdldE5ld1Bvc2l0aW9uRm9yVmFsdWUgPSB0aGlzLmdldE5ld1Bvc2l0aW9uRm9yVmFsdWUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmdldFZhbHVlUG9zaXRpb24gPSB0aGlzLmdldFZhbHVlUG9zaXRpb24uYmluZCh0aGlzKTtcbiAgICB0aGlzLmdldFNpemUgPSB0aGlzLmdldFNpemUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlcGxhY2VGdXJ0aGVzdFZhbHVlUG9zaXRpb24gPSB0aGlzLnJlcGxhY2VGdXJ0aGVzdFZhbHVlUG9zaXRpb24uYmluZCh0aGlzKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhJbnRlZ2VyQnVmZmVyU2V0LCBbe1xuICAgIGtleTogJ2dldFNpemUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTaXplKCkgLypudW1iZXIqL3tcbiAgICAgIHJldHVybiB0aGlzLl9zaXplO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldFZhbHVlUG9zaXRpb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRWYWx1ZVBvc2l0aW9uKCAvKm51bWJlciovdmFsdWUpIC8qP251bWJlciove1xuICAgICAgaWYgKHRoaXMuX3ZhbHVlVG9Qb3NpdGlvbk1hcFt2YWx1ZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLl92YWx1ZVRvUG9zaXRpb25NYXBbdmFsdWVdO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldE5ld1Bvc2l0aW9uRm9yVmFsdWUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXROZXdQb3NpdGlvbkZvclZhbHVlKCAvKm51bWJlciovdmFsdWUpIC8qbnVtYmVyKi97XG4gICAgICBpbnZhcmlhbnQodGhpcy5fdmFsdWVUb1Bvc2l0aW9uTWFwW3ZhbHVlXSA9PT0gdW5kZWZpbmVkLCBcIlNob3VsZG4ndCB0cnkgdG8gZmluZCBuZXcgcG9zaXRpb24gZm9yIHZhbHVlIGFscmVhZHkgc3RvcmVkIGluIEJ1ZmZlclNldFwiKTtcbiAgICAgIHZhciBuZXdQb3NpdGlvbiA9IHRoaXMuX3NpemU7XG4gICAgICB0aGlzLl9zaXplKys7XG4gICAgICB0aGlzLl9wdXNoVG9IZWFwcyhuZXdQb3NpdGlvbiwgdmFsdWUpO1xuICAgICAgdGhpcy5fdmFsdWVUb1Bvc2l0aW9uTWFwW3ZhbHVlXSA9IG5ld1Bvc2l0aW9uO1xuICAgICAgcmV0dXJuIG5ld1Bvc2l0aW9uO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlcGxhY2VGdXJ0aGVzdFZhbHVlUG9zaXRpb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXBsYWNlRnVydGhlc3RWYWx1ZVBvc2l0aW9uKFxuICAgIC8qbnVtYmVyKi9sb3dWYWx1ZSxcbiAgICAvKm51bWJlciovaGlnaFZhbHVlLFxuICAgIC8qbnVtYmVyKi9uZXdWYWx1ZSkgLyo/bnVtYmVyKi97XG4gICAgICBpbnZhcmlhbnQodGhpcy5fdmFsdWVUb1Bvc2l0aW9uTWFwW25ld1ZhbHVlXSA9PT0gdW5kZWZpbmVkLCBcIlNob3VsZG4ndCB0cnkgdG8gcmVwbGFjZSB2YWx1ZXMgd2l0aCB2YWx1ZSBhbHJlYWR5IHN0b3JlZCB2YWx1ZSBpbiBcIiArIFwiQnVmZmVyU2V0XCIpO1xuXG4gICAgICB0aGlzLl9jbGVhbkhlYXBzKCk7XG4gICAgICBpZiAodGhpcy5fc21hbGxWYWx1ZXMuZW1wdHkoKSB8fCB0aGlzLl9sYXJnZVZhbHVlcy5lbXB0eSgpKSB7XG4gICAgICAgIC8vIFRocmVyZSBhcmUgY3VycmVudGx5IG5vIHZhbHVlcyBzdG9yZWQuIFdlIHdpbGwgaGF2ZSB0byBjcmVhdGUgbmV3XG4gICAgICAgIC8vIHBvc2l0aW9uIGZvciB0aGlzIHZhbHVlLlxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIG1pblZhbHVlID0gdGhpcy5fc21hbGxWYWx1ZXMucGVlaygpLnZhbHVlO1xuICAgICAgdmFyIG1heFZhbHVlID0gdGhpcy5fbGFyZ2VWYWx1ZXMucGVlaygpLnZhbHVlO1xuICAgICAgaWYgKG1pblZhbHVlID49IGxvd1ZhbHVlICYmIG1heFZhbHVlIDw9IGhpZ2hWYWx1ZSkge1xuICAgICAgICAvLyBBbGwgdmFsdWVzIGN1cnJlbnRseSBzdG9yZWQgYXJlIG5lY2Vzc2FyeSwgd2UgY2FuJ3QgcmV1c2UgYW55IG9mIHRoZW0uXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgdmFsdWVUb1JlcGxhY2U7XG4gICAgICBpZiAobG93VmFsdWUgLSBtaW5WYWx1ZSA+IG1heFZhbHVlIC0gaGlnaFZhbHVlKSB7XG4gICAgICAgIC8vIG1pblZhbHVlIGlzIGZ1cnRoZXIgZnJvbSBwcm92aWRlZCByYW5nZS4gV2Ugd2lsbCByZXVzZSBpdCdzIHBvc2l0aW9uLlxuICAgICAgICB2YWx1ZVRvUmVwbGFjZSA9IG1pblZhbHVlO1xuICAgICAgICB0aGlzLl9zbWFsbFZhbHVlcy5wb3AoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlVG9SZXBsYWNlID0gbWF4VmFsdWU7XG4gICAgICAgIHRoaXMuX2xhcmdlVmFsdWVzLnBvcCgpO1xuICAgICAgfVxuICAgICAgdmFyIHBvc2l0aW9uID0gdGhpcy5fdmFsdWVUb1Bvc2l0aW9uTWFwW3ZhbHVlVG9SZXBsYWNlXTtcbiAgICAgIGRlbGV0ZSB0aGlzLl92YWx1ZVRvUG9zaXRpb25NYXBbdmFsdWVUb1JlcGxhY2VdO1xuICAgICAgdGhpcy5fdmFsdWVUb1Bvc2l0aW9uTWFwW25ld1ZhbHVlXSA9IHBvc2l0aW9uO1xuICAgICAgdGhpcy5fcHVzaFRvSGVhcHMocG9zaXRpb24sIG5ld1ZhbHVlKTtcblxuICAgICAgcmV0dXJuIHBvc2l0aW9uO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ19wdXNoVG9IZWFwcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9wdXNoVG9IZWFwcyggLypudW1iZXIqL3Bvc2l0aW9uLCAvKm51bWJlciovdmFsdWUpIHtcbiAgICAgIHZhciBlbGVtZW50ID0ge1xuICAgICAgICBwb3NpdGlvbjogcG9zaXRpb24sXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgfTtcbiAgICAgIC8vIFdlIGNhbiByZXVzZSB0aGUgc2FtZSBvYmplY3QgaW4gYm90aCBoZWFwcywgYmVjYXVzZSB3ZSBkb24ndCBtdXRhdGUgdGhlbVxuICAgICAgdGhpcy5fc21hbGxWYWx1ZXMucHVzaChlbGVtZW50KTtcbiAgICAgIHRoaXMuX2xhcmdlVmFsdWVzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnX2NsZWFuSGVhcHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfY2xlYW5IZWFwcygpIHtcbiAgICAgIC8vIFdlIG5vdCB1c3VhbGx5IG9ubHkgcmVtb3ZlIG9iamVjdCBmcm9tIG9uZSBoZWFwIHdoaWxlIG1vdmluZyB2YWx1ZS5cbiAgICAgIC8vIEhlcmUgd2UgbWFrZSBzdXJlIHRoYXQgdGhlcmUgaXMgbm8gc3RhbGUgZGF0YSBvbiB0b3Agb2YgaGVhcHMuXG4gICAgICB0aGlzLl9jbGVhbkhlYXAodGhpcy5fc21hbGxWYWx1ZXMpO1xuICAgICAgdGhpcy5fY2xlYW5IZWFwKHRoaXMuX2xhcmdlVmFsdWVzKTtcbiAgICAgIHZhciBtaW5IZWFwU2l6ZSA9IE1hdGgubWluKHRoaXMuX3NtYWxsVmFsdWVzLnNpemUoKSwgdGhpcy5fbGFyZ2VWYWx1ZXMuc2l6ZSgpKTtcbiAgICAgIHZhciBtYXhIZWFwU2l6ZSA9IE1hdGgubWF4KHRoaXMuX3NtYWxsVmFsdWVzLnNpemUoKSwgdGhpcy5fbGFyZ2VWYWx1ZXMuc2l6ZSgpKTtcbiAgICAgIGlmIChtYXhIZWFwU2l6ZSA+IDEwICogbWluSGVhcFNpemUpIHtcbiAgICAgICAgLy8gVGhlcmUgYXJlIG1hbnkgb2xkIHZhbHVlcyBpbiBvbmUgb2YgaGVhcHMuIFdlIG5uZWQgdG8gZ2V0IHJpZCBvZiB0aGVtXG4gICAgICAgIC8vIHRvIG5vdCB1c2UgdG9vIGF2b2lkIG1lbW9yeSBsZWFrc1xuICAgICAgICB0aGlzLl9yZWNyZWF0ZUhlYXBzKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnX3JlY3JlYXRlSGVhcHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfcmVjcmVhdGVIZWFwcygpIHtcbiAgICAgIHZhciBzb3VyY2VIZWFwID0gdGhpcy5fc21hbGxWYWx1ZXMuc2l6ZSgpIDwgdGhpcy5fbGFyZ2VWYWx1ZXMuc2l6ZSgpID8gdGhpcy5fc21hbGxWYWx1ZXMgOiB0aGlzLl9sYXJnZVZhbHVlcztcbiAgICAgIHZhciBuZXdTbWFsbFZhbHVlcyA9IG5ldyBIZWFwKFtdLCAvLyBJbml0aWFsIGRhdGEgaW4gdGhlIGhlYXBcbiAgICAgIHRoaXMuX3NtYWxsZXJDb21wYXJhdG9yKTtcbiAgICAgIHZhciBuZXdMYXJnZVZhbHVlcyA9IG5ldyBIZWFwKFtdLCAvLyBJbml0aWFsIGRhdGF0IGluIHRoZSBoZWFwXG4gICAgICB0aGlzLl9ncmVhdGVyQ29tcGFyYXRvcik7XG4gICAgICB3aGlsZSAoIXNvdXJjZUhlYXAuZW1wdHkoKSkge1xuICAgICAgICB2YXIgZWxlbWVudCA9IHNvdXJjZUhlYXAucG9wKCk7XG4gICAgICAgIC8vIFB1c2ggYWxsIHN0aWwgdmFsaWQgZWxlbWVudHMgdG8gbmV3IGhlYXBzXG4gICAgICAgIGlmICh0aGlzLl92YWx1ZVRvUG9zaXRpb25NYXBbZWxlbWVudC52YWx1ZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIG5ld1NtYWxsVmFsdWVzLnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgbmV3TGFyZ2VWYWx1ZXMucHVzaChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5fc21hbGxWYWx1ZXMgPSBuZXdTbWFsbFZhbHVlcztcbiAgICAgIHRoaXMuX2xhcmdlVmFsdWVzID0gbmV3TGFyZ2VWYWx1ZXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnX2NsZWFuSGVhcCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9jbGVhbkhlYXAoIC8qb2JqZWN0Ki9oZWFwKSB7XG4gICAgICB3aGlsZSAoIWhlYXAuZW1wdHkoKSAmJiB0aGlzLl92YWx1ZVRvUG9zaXRpb25NYXBbaGVhcC5wZWVrKCkudmFsdWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaGVhcC5wb3AoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdfc21hbGxlckNvbXBhcmF0b3InLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfc21hbGxlckNvbXBhcmF0b3IoIC8qb2JqZWN0Ki9saHMsIC8qb2JqZWN0Ki9yaHMpIC8qYm9vbGVhbiove1xuICAgICAgcmV0dXJuIGxocy52YWx1ZSA8IHJocy52YWx1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdfZ3JlYXRlckNvbXBhcmF0b3InLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZ3JlYXRlckNvbXBhcmF0b3IoIC8qb2JqZWN0Ki9saHMsIC8qb2JqZWN0Ki9yaHMpIC8qYm9vbGVhbiove1xuICAgICAgcmV0dXJuIGxocy52YWx1ZSA+IHJocy52YWx1ZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gSW50ZWdlckJ1ZmZlclNldDtcbn0pKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gSW50ZWdlckJ1ZmZlclNldDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL0ludGVnZXJCdWZmZXJTZXQuanNcbiAqKiBtb2R1bGUgaWQgPSA0NTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIEhlYXBcbiAqIEB0eXBlY2hlY2tzXG4gKiBAcHJldmVudE11bmdlXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKlxuICogQHBhcmFtIHsqfSBhXG4gKiBAcGFyYW0geyp9IGJcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbmZ1bmN0aW9uIGRlZmF1bHRDb21wYXJhdG9yKGEsIGIpIHtcbiAgcmV0dXJuIGEgPCBiO1xufVxuXG52YXIgSGVhcCA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEhlYXAoaXRlbXMsIGNvbXBhcmF0b3IpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSGVhcCk7XG5cbiAgICB0aGlzLl9pdGVtcyA9IGl0ZW1zIHx8IFtdO1xuICAgIHRoaXMuX3NpemUgPSB0aGlzLl9pdGVtcy5sZW5ndGg7XG4gICAgdGhpcy5fY29tcGFyYXRvciA9IGNvbXBhcmF0b3IgfHwgZGVmYXVsdENvbXBhcmF0b3I7XG4gICAgdGhpcy5faGVhcGlmeSgpO1xuICB9XG5cbiAgLypcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG5cbiAgX2NyZWF0ZUNsYXNzKEhlYXAsIFt7XG4gICAga2V5OiAnZW1wdHknLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBlbXB0eSgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zaXplID09PSAwO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogQHJldHVybiB7Kn1cbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogJ3BvcCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBvcCgpIHtcbiAgICAgIGlmICh0aGlzLl9zaXplID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGVsdCA9IHRoaXMuX2l0ZW1zWzBdO1xuXG4gICAgICB2YXIgbGFzdEVsdCA9IHRoaXMuX2l0ZW1zLnBvcCgpO1xuICAgICAgdGhpcy5fc2l6ZS0tO1xuXG4gICAgICBpZiAodGhpcy5fc2l6ZSA+IDApIHtcbiAgICAgICAgdGhpcy5faXRlbXNbMF0gPSBsYXN0RWx0O1xuICAgICAgICB0aGlzLl9zaW5rRG93bigwKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGVsdDtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEBwYXJhbSB7Kn0gaXRlbVxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiAncHVzaCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHB1c2goaXRlbSkge1xuICAgICAgdGhpcy5faXRlbXNbdGhpcy5fc2l6ZSsrXSA9IGl0ZW07XG4gICAgICB0aGlzLl9idWJibGVVcCh0aGlzLl9zaXplIC0gMSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6ICdzaXplJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2l6ZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zaXplO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogQHJldHVybiB7Kn1cbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogJ3BlZWsnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwZWVrKCkge1xuICAgICAgaWYgKHRoaXMuX3NpemUgPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5faXRlbXNbMF07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnX2hlYXBpZnknLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfaGVhcGlmeSgpIHtcbiAgICAgIGZvciAodmFyIGluZGV4ID0gTWF0aC5mbG9vcigodGhpcy5fc2l6ZSArIDEpIC8gMik7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICAgICAgdGhpcy5fc2lua0Rvd24oaW5kZXgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICogQHBhcmVudCB7bnVtYmVyfSBpbmRleFxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiAnX2J1YmJsZVVwJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2J1YmJsZVVwKGluZGV4KSB7XG4gICAgICB2YXIgZWx0ID0gdGhpcy5faXRlbXNbaW5kZXhdO1xuICAgICAgd2hpbGUgKGluZGV4ID4gMCkge1xuICAgICAgICB2YXIgcGFyZW50SW5kZXggPSBNYXRoLmZsb29yKChpbmRleCArIDEpIC8gMikgLSAxO1xuICAgICAgICB2YXIgcGFyZW50RWx0ID0gdGhpcy5faXRlbXNbcGFyZW50SW5kZXhdO1xuXG4gICAgICAgIC8vIGlmIHBhcmVudEVsdCA8IGVsdCwgc3RvcFxuICAgICAgICBpZiAodGhpcy5fY29tcGFyYXRvcihwYXJlbnRFbHQsIGVsdCkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzd2FwXG4gICAgICAgIHRoaXMuX2l0ZW1zW3BhcmVudEluZGV4XSA9IGVsdDtcbiAgICAgICAgdGhpcy5faXRlbXNbaW5kZXhdID0gcGFyZW50RWx0O1xuICAgICAgICBpbmRleCA9IHBhcmVudEluZGV4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICogQHBhcmVudCB7bnVtYmVyfSBpbmRleFxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiAnX3NpbmtEb3duJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3NpbmtEb3duKGluZGV4KSB7XG4gICAgICB2YXIgZWx0ID0gdGhpcy5faXRlbXNbaW5kZXhdO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgbGVmdENoaWxkSW5kZXggPSAyICogKGluZGV4ICsgMSkgLSAxO1xuICAgICAgICB2YXIgcmlnaHRDaGlsZEluZGV4ID0gMiAqIChpbmRleCArIDEpO1xuICAgICAgICB2YXIgc3dhcEluZGV4ID0gLTE7XG5cbiAgICAgICAgaWYgKGxlZnRDaGlsZEluZGV4IDwgdGhpcy5fc2l6ZSkge1xuICAgICAgICAgIHZhciBsZWZ0Q2hpbGQgPSB0aGlzLl9pdGVtc1tsZWZ0Q2hpbGRJbmRleF07XG4gICAgICAgICAgaWYgKHRoaXMuX2NvbXBhcmF0b3IobGVmdENoaWxkLCBlbHQpKSB7XG4gICAgICAgICAgICBzd2FwSW5kZXggPSBsZWZ0Q2hpbGRJbmRleDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmlnaHRDaGlsZEluZGV4IDwgdGhpcy5fc2l6ZSkge1xuICAgICAgICAgIHZhciByaWdodENoaWxkID0gdGhpcy5faXRlbXNbcmlnaHRDaGlsZEluZGV4XTtcbiAgICAgICAgICBpZiAodGhpcy5fY29tcGFyYXRvcihyaWdodENoaWxkLCBlbHQpKSB7XG4gICAgICAgICAgICBpZiAoc3dhcEluZGV4ID09PSAtMSB8fCB0aGlzLl9jb21wYXJhdG9yKHJpZ2h0Q2hpbGQsIHRoaXMuX2l0ZW1zW3N3YXBJbmRleF0pKSB7XG4gICAgICAgICAgICAgIHN3YXBJbmRleCA9IHJpZ2h0Q2hpbGRJbmRleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiB3ZSBkb24ndCBoYXZlIGEgc3dhcCwgc3RvcFxuICAgICAgICBpZiAoc3dhcEluZGV4ID09PSAtMSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2l0ZW1zW2luZGV4XSA9IHRoaXMuX2l0ZW1zW3N3YXBJbmRleF07XG4gICAgICAgIHRoaXMuX2l0ZW1zW3N3YXBJbmRleF0gPSBlbHQ7XG4gICAgICAgIGluZGV4ID0gc3dhcEluZGV4O1xuICAgICAgfVxuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBIZWFwO1xufSkoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBIZWFwO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvSGVhcC5qc1xuICoqIG1vZHVsZSBpZCA9IDQ1OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgY2xhbXBcbiAqIEB0eXBlY2hlY2tzXG4gKi9cblxuLyoqXG4gKiBDbGFtcHMgKG9yIGNsaXBzIG9yIGNvbmZpbmVzKSB0aGUgdmFsdWUgdG8gYmUgYmV0d2VlbiBtaW4gYW5kIG1heC5cbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IG1pblxuICogQHBhcmFtIHtudW1iZXJ9IG1heFxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gY2xhbXAodmFsdWUsIG1pbiwgbWF4KSB7XG4gIGlmICh2YWx1ZSA8IG1pbikge1xuICAgIHJldHVybiBtaW47XG4gIH1cbiAgaWYgKHZhbHVlID4gbWF4KSB7XG4gICAgcmV0dXJuIG1heDtcbiAgfVxuICByZXR1cm4gdmFsdWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xhbXA7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9jbGFtcC5qc1xuICoqIG1vZHVsZSBpZCA9IDQ1OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgRml4ZWREYXRhVGFibGVSb3cucmVhY3RcbiAqIEB0eXBlY2hlY2tzXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCcuL1JlYWN0Jyk7XG52YXIgRml4ZWREYXRhVGFibGVDZWxsR3JvdXAgPSByZXF1aXJlKCcuL0ZpeGVkRGF0YVRhYmxlQ2VsbEdyb3VwLnJlYWN0Jyk7XG5cbnZhciBjeCA9IHJlcXVpcmUoJy4vY3gnKTtcbnZhciBqb2luQ2xhc3NlcyA9IHJlcXVpcmUoJy4vam9pbkNsYXNzZXMnKTtcbnZhciB0cmFuc2xhdGVET01Qb3NpdGlvblhZID0gcmVxdWlyZSgnLi90cmFuc2xhdGVET01Qb3NpdGlvblhZJyk7XG5cbnZhciBQcm9wVHlwZXMgPSBSZWFjdC5Qcm9wVHlwZXM7XG5cbi8qKlxuICogQ29tcG9uZW50IHRoYXQgcmVuZGVycyB0aGUgcm93IGZvciA8Rml4ZWREYXRhVGFibGUgLz4uXG4gKiBUaGlzIGNvbXBvbmVudCBzaG91bGQgbm90IGJlIHVzZWQgZGlyZWN0bHkgYnkgZGV2ZWxvcGVyLiBJbnN0ZWFkLFxuICogb25seSA8Rml4ZWREYXRhVGFibGUgLz4gc2hvdWxkIHVzZSB0aGUgY29tcG9uZW50IGludGVybmFsbHkuXG4gKi9cbnZhciBGaXhlZERhdGFUYWJsZVJvd0ltcGwgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnRml4ZWREYXRhVGFibGVSb3dJbXBsJyxcblxuICBwcm9wVHlwZXM6IHtcblxuICAgIGlzU2Nyb2xsaW5nOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIEFycmF5IG9mIDxGaXhlZERhdGFUYWJsZUNvbHVtbiAvPiBmb3IgdGhlIGZpeGVkIGNvbHVtbnMuXG4gICAgICovXG4gICAgZml4ZWRDb2x1bW5zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIEhlaWdodCBvZiB0aGUgcm93LlxuICAgICAqL1xuICAgIGhlaWdodDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHJvdyBpbmRleC5cbiAgICAgKi9cbiAgICBpbmRleDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogQXJyYXkgb2YgPEZpeGVkRGF0YVRhYmxlQ29sdW1uIC8+IGZvciB0aGUgc2Nyb2xsYWJsZSBjb2x1bW5zLlxuICAgICAqL1xuICAgIHNjcm9sbGFibGVDb2x1bW5zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSBsZWZ0IGVkZ2Ugb2YgdGhlIHRhYmxlIGFuZCB0aGUgbGVmdG1vc3QgcG9ydGlvblxuICAgICAqIG9mIHRoZSByb3cgY3VycmVudGx5IHZpc2libGUgaW4gdGhlIHRhYmxlLlxuICAgICAqL1xuICAgIHNjcm9sbExlZnQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFdpZHRoIG9mIHRoZSByb3cuXG4gICAgICovXG4gICAgd2lkdGg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIEZpcmUgd2hlbiBhIHJvdyBpcyBjbGlja2VkLlxuICAgICAqL1xuICAgIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogRmlyZSB3aGVuIGEgcm93IGlzIGRvdWJsZSBjbGlja2VkLlxuICAgICAqL1xuICAgIG9uRG91YmxlQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgZm9yIHdoZW4gcmVzaXplciBrbm9iIChpbiBGaXhlZERhdGFUYWJsZUNlbGwpIGlzIGNsaWNrZWRcbiAgICAgKiB0byBpbml0aWFsaXplIHJlc2l6aW5nLiBQbGVhc2Ugbm90ZSB0aGlzIGlzIG9ubHkgb24gdGhlIGNlbGxzXG4gICAgICogaW4gdGhlIGhlYWRlci5cbiAgICAgKiBAcGFyYW0gbnVtYmVyIGNvbWJpbmVkV2lkdGhcbiAgICAgKiBAcGFyYW0gbnVtYmVyIGxlZnRPZmZzZXRcbiAgICAgKiBAcGFyYW0gbnVtYmVyIGNlbGxXaWR0aFxuICAgICAqIEBwYXJhbSBudW1iZXJ8c3RyaW5nIGNvbHVtbktleVxuICAgICAqIEBwYXJhbSBvYmplY3QgZXZlbnRcbiAgICAgKi9cbiAgICBvbkNvbHVtblJlc2l6ZTogUHJvcFR5cGVzLmZ1bmNcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIC8qb2JqZWN0Ki97XG4gICAgdmFyIHN0eWxlID0ge1xuICAgICAgd2lkdGg6IHRoaXMucHJvcHMud2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXMucHJvcHMuaGVpZ2h0XG4gICAgfTtcblxuICAgIHZhciBjbGFzc05hbWUgPSBjeCh7XG4gICAgICAnZml4ZWREYXRhVGFibGVSb3dMYXlvdXQvbWFpbic6IHRydWUsXG4gICAgICAncHVibGljL2ZpeGVkRGF0YVRhYmxlUm93L21haW4nOiB0cnVlLFxuICAgICAgJ3B1YmxpYy9maXhlZERhdGFUYWJsZVJvdy9oaWdobGlnaHRlZCc6IHRoaXMucHJvcHMuaW5kZXggJSAyID09PSAxLFxuICAgICAgJ3B1YmxpYy9maXhlZERhdGFUYWJsZVJvdy9vZGQnOiB0aGlzLnByb3BzLmluZGV4ICUgMiA9PT0gMSxcbiAgICAgICdwdWJsaWMvZml4ZWREYXRhVGFibGVSb3cvZXZlbic6IHRoaXMucHJvcHMuaW5kZXggJSAyID09PSAwXG4gICAgfSk7XG5cbiAgICB2YXIgZml4ZWRDb2x1bW5zV2lkdGggPSB0aGlzLl9nZXRDb2x1bW5zV2lkdGgodGhpcy5wcm9wcy5maXhlZENvbHVtbnMpO1xuICAgIHZhciBmaXhlZENvbHVtbnMgPSBSZWFjdC5jcmVhdGVFbGVtZW50KEZpeGVkRGF0YVRhYmxlQ2VsbEdyb3VwLCB7XG4gICAgICBrZXk6ICdmaXhlZF9jZWxscycsXG4gICAgICBpc1Njcm9sbGluZzogdGhpcy5wcm9wcy5pc1Njcm9sbGluZyxcbiAgICAgIGhlaWdodDogdGhpcy5wcm9wcy5oZWlnaHQsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgd2lkdGg6IGZpeGVkQ29sdW1uc1dpZHRoLFxuICAgICAgekluZGV4OiAyLFxuICAgICAgY29sdW1uczogdGhpcy5wcm9wcy5maXhlZENvbHVtbnMsXG4gICAgICBvbkNvbHVtblJlc2l6ZTogdGhpcy5wcm9wcy5vbkNvbHVtblJlc2l6ZSxcbiAgICAgIHJvd0hlaWdodDogdGhpcy5wcm9wcy5oZWlnaHQsXG4gICAgICByb3dJbmRleDogdGhpcy5wcm9wcy5pbmRleFxuICAgIH0pO1xuICAgIHZhciBjb2x1bW5zU2hhZG93ID0gdGhpcy5fcmVuZGVyQ29sdW1uc1NoYWRvdyhmaXhlZENvbHVtbnNXaWR0aCk7XG4gICAgdmFyIHNjcm9sbGFibGVDb2x1bW5zID0gUmVhY3QuY3JlYXRlRWxlbWVudChGaXhlZERhdGFUYWJsZUNlbGxHcm91cCwge1xuICAgICAga2V5OiAnc2Nyb2xsYWJsZV9jZWxscycsXG4gICAgICBpc1Njcm9sbGluZzogdGhpcy5wcm9wcy5pc1Njcm9sbGluZyxcbiAgICAgIGhlaWdodDogdGhpcy5wcm9wcy5oZWlnaHQsXG4gICAgICBsZWZ0OiB0aGlzLnByb3BzLnNjcm9sbExlZnQsXG4gICAgICBvZmZzZXRMZWZ0OiBmaXhlZENvbHVtbnNXaWR0aCxcbiAgICAgIHdpZHRoOiB0aGlzLnByb3BzLndpZHRoIC0gZml4ZWRDb2x1bW5zV2lkdGgsXG4gICAgICB6SW5kZXg6IDAsXG4gICAgICBjb2x1bW5zOiB0aGlzLnByb3BzLnNjcm9sbGFibGVDb2x1bW5zLFxuICAgICAgb25Db2x1bW5SZXNpemU6IHRoaXMucHJvcHMub25Db2x1bW5SZXNpemUsXG4gICAgICByb3dIZWlnaHQ6IHRoaXMucHJvcHMuaGVpZ2h0LFxuICAgICAgcm93SW5kZXg6IHRoaXMucHJvcHMuaW5kZXhcbiAgICB9KTtcblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogam9pbkNsYXNzZXMoY2xhc3NOYW1lLCB0aGlzLnByb3BzLmNsYXNzTmFtZSksXG4gICAgICAgIG9uQ2xpY2s6IHRoaXMucHJvcHMub25DbGljayA/IHRoaXMuX29uQ2xpY2sgOiBudWxsLFxuICAgICAgICBvbkRvdWJsZUNsaWNrOiB0aGlzLnByb3BzLm9uRG91YmxlQ2xpY2sgPyB0aGlzLl9vbkRvdWJsZUNsaWNrIDogbnVsbCxcbiAgICAgICAgb25Nb3VzZURvd246IHRoaXMucHJvcHMub25Nb3VzZURvd24gPyB0aGlzLl9vbk1vdXNlRG93biA6IG51bGwsXG4gICAgICAgIG9uTW91c2VFbnRlcjogdGhpcy5wcm9wcy5vbk1vdXNlRW50ZXIgPyB0aGlzLl9vbk1vdXNlRW50ZXIgOiBudWxsLFxuICAgICAgICBvbk1vdXNlTGVhdmU6IHRoaXMucHJvcHMub25Nb3VzZUxlYXZlID8gdGhpcy5fb25Nb3VzZUxlYXZlIDogbnVsbCxcbiAgICAgICAgc3R5bGU6IHN0eWxlIH0sXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBjbGFzc05hbWU6IGN4KCdmaXhlZERhdGFUYWJsZVJvd0xheW91dC9ib2R5JykgfSxcbiAgICAgICAgZml4ZWRDb2x1bW5zLFxuICAgICAgICBzY3JvbGxhYmxlQ29sdW1ucyxcbiAgICAgICAgY29sdW1uc1NoYWRvd1xuICAgICAgKVxuICAgICk7XG4gIH0sXG5cbiAgX2dldENvbHVtbnNXaWR0aDogZnVuY3Rpb24gX2dldENvbHVtbnNXaWR0aCggLyphcnJheSovY29sdW1ucykgLypudW1iZXIqL3tcbiAgICB2YXIgd2lkdGggPSAwO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29sdW1ucy5sZW5ndGg7ICsraSkge1xuICAgICAgd2lkdGggKz0gY29sdW1uc1tpXS5wcm9wcy53aWR0aDtcbiAgICB9XG4gICAgcmV0dXJuIHdpZHRoO1xuICB9LFxuXG4gIF9yZW5kZXJDb2x1bW5zU2hhZG93OiBmdW5jdGlvbiBfcmVuZGVyQ29sdW1uc1NoYWRvdyggLypudW1iZXIqL2xlZnQpIC8qP29iamVjdCove1xuICAgIGlmIChsZWZ0ID4gMCkge1xuICAgICAgdmFyIGNsYXNzTmFtZSA9IGN4KHtcbiAgICAgICAgJ2ZpeGVkRGF0YVRhYmxlUm93TGF5b3V0L2ZpeGVkQ29sdW1uc0RpdmlkZXInOiB0cnVlLFxuICAgICAgICAnZml4ZWREYXRhVGFibGVSb3dMYXlvdXQvY29sdW1uc1NoYWRvdyc6IHRoaXMucHJvcHMuc2Nyb2xsTGVmdCA+IDAsXG4gICAgICAgICdwdWJsaWMvZml4ZWREYXRhVGFibGVSb3cvZml4ZWRDb2x1bW5zRGl2aWRlcic6IHRydWUsXG4gICAgICAgICdwdWJsaWMvZml4ZWREYXRhVGFibGVSb3cvY29sdW1uc1NoYWRvdyc6IHRoaXMucHJvcHMuc2Nyb2xsTGVmdCA+IDBcbiAgICAgIH0pO1xuICAgICAgdmFyIHN0eWxlID0ge1xuICAgICAgICBsZWZ0OiBsZWZ0LFxuICAgICAgICBoZWlnaHQ6IHRoaXMucHJvcHMuaGVpZ2h0XG4gICAgICB9O1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUsIHN0eWxlOiBzdHlsZSB9KTtcbiAgICB9XG4gIH0sXG5cbiAgX29uQ2xpY2s6IGZ1bmN0aW9uIF9vbkNsaWNrKCAvKm9iamVjdCovZXZlbnQpIHtcbiAgICB0aGlzLnByb3BzLm9uQ2xpY2soZXZlbnQsIHRoaXMucHJvcHMuaW5kZXgpO1xuICB9LFxuXG4gIF9vbkRvdWJsZUNsaWNrOiBmdW5jdGlvbiBfb25Eb3VibGVDbGljayggLypvYmplY3QqL2V2ZW50KSB7XG4gICAgdGhpcy5wcm9wcy5vbkRvdWJsZUNsaWNrKGV2ZW50LCB0aGlzLnByb3BzLmluZGV4KTtcbiAgfSxcblxuICBfb25Nb3VzZURvd246IGZ1bmN0aW9uIF9vbk1vdXNlRG93biggLypvYmplY3QqL2V2ZW50KSB7XG4gICAgdGhpcy5wcm9wcy5vbk1vdXNlRG93bihldmVudCwgdGhpcy5wcm9wcy5pbmRleCk7XG4gIH0sXG5cbiAgX29uTW91c2VFbnRlcjogZnVuY3Rpb24gX29uTW91c2VFbnRlciggLypvYmplY3QqL2V2ZW50KSB7XG4gICAgdGhpcy5wcm9wcy5vbk1vdXNlRW50ZXIoZXZlbnQsIHRoaXMucHJvcHMuaW5kZXgpO1xuICB9LFxuXG4gIF9vbk1vdXNlTGVhdmU6IGZ1bmN0aW9uIF9vbk1vdXNlTGVhdmUoIC8qb2JqZWN0Ki9ldmVudCkge1xuICAgIHRoaXMucHJvcHMub25Nb3VzZUxlYXZlKGV2ZW50LCB0aGlzLnByb3BzLmluZGV4KTtcbiAgfVxufSk7XG5cbnZhciBGaXhlZERhdGFUYWJsZVJvdyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdGaXhlZERhdGFUYWJsZVJvdycsXG5cbiAgcHJvcFR5cGVzOiB7XG5cbiAgICBpc1Njcm9sbGluZzogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBIZWlnaHQgb2YgdGhlIHJvdy5cbiAgICAgKi9cbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFotaW5kZXggb24gd2hpY2ggdGhlIHJvdyB3aWxsIGJlIGRpc3BsYXllZC4gVXNlZCBlLmcuIGZvciBrZWVwaW5nXG4gICAgICogaGVhZGVyIGFuZCBmb290ZXIgaW4gZnJvbnQgb2Ygb3RoZXIgcm93cy5cbiAgICAgKi9cbiAgICB6SW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmVydGljYWwgcG9zaXRpb24gd2hlcmUgdGhlIHJvdyBzaG91bGQgcmVuZGVyIGl0c2VsZlxuICAgICAqL1xuICAgIG9mZnNldFRvcDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogV2lkdGggb2YgdGhlIHJvdy5cbiAgICAgKi9cbiAgICB3aWR0aDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkXG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSAvKm9iamVjdCove1xuICAgIHZhciBzdHlsZSA9IHtcbiAgICAgIHdpZHRoOiB0aGlzLnByb3BzLndpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLnByb3BzLmhlaWdodCxcbiAgICAgIHpJbmRleDogdGhpcy5wcm9wcy56SW5kZXggPyB0aGlzLnByb3BzLnpJbmRleCA6IDBcbiAgICB9O1xuICAgIHRyYW5zbGF0ZURPTVBvc2l0aW9uWFkoc3R5bGUsIDAsIHRoaXMucHJvcHMub2Zmc2V0VG9wKTtcblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7XG4gICAgICAgIHN0eWxlOiBzdHlsZSxcbiAgICAgICAgY2xhc3NOYW1lOiBjeCgnZml4ZWREYXRhVGFibGVSb3dMYXlvdXQvcm93V3JhcHBlcicpIH0sXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZpeGVkRGF0YVRhYmxlUm93SW1wbCwgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHtcbiAgICAgICAgb2Zmc2V0VG9wOiB1bmRlZmluZWQsXG4gICAgICAgIHpJbmRleDogdW5kZWZpbmVkXG4gICAgICB9KSlcbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBGaXhlZERhdGFUYWJsZVJvdztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL0ZpeGVkRGF0YVRhYmxlUm93LnJlYWN0LmpzXG4gKiogbW9kdWxlIGlkID0gNDYwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBGaXhlZERhdGFUYWJsZUNlbGxHcm91cC5yZWFjdFxuICogQHR5cGVjaGVja3NcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxudmFyIEZpeGVkRGF0YVRhYmxlSGVscGVyID0gcmVxdWlyZSgnLi9GaXhlZERhdGFUYWJsZUhlbHBlcicpO1xudmFyIFJlYWN0ID0gcmVxdWlyZSgnLi9SZWFjdCcpO1xudmFyIEZpeGVkRGF0YVRhYmxlQ2VsbCA9IHJlcXVpcmUoJy4vRml4ZWREYXRhVGFibGVDZWxsLnJlYWN0Jyk7XG5cbnZhciBjeCA9IHJlcXVpcmUoJy4vY3gnKTtcbnZhciB0cmFuc2xhdGVET01Qb3NpdGlvblhZID0gcmVxdWlyZSgnLi90cmFuc2xhdGVET01Qb3NpdGlvblhZJyk7XG5cbnZhciBQcm9wVHlwZXMgPSBSZWFjdC5Qcm9wVHlwZXM7XG5cbnZhciBESVJfU0lHTiA9IEZpeGVkRGF0YVRhYmxlSGVscGVyLkRJUl9TSUdOO1xuXG52YXIgRml4ZWREYXRhVGFibGVDZWxsR3JvdXBJbXBsID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0ZpeGVkRGF0YVRhYmxlQ2VsbEdyb3VwSW1wbCcsXG5cbiAgLyoqXG4gICAqIFByb3BUeXBlcyBhcmUgZGlzYWJsZWQgaW4gdGhpcyBjb21wb25lbnQsIGJlY2F1c2UgaGF2aW5nIHRoZW0gb24gc2xvd3NcbiAgICogZG93biB0aGUgRml4ZWREYXRhVGFibGUgaHVnZWx5IGluIERFViBtb2RlLiBZb3UgY2FuIGVuYWJsZSB0aGVtIGJhY2sgZm9yXG4gICAqIGRldmVsb3BtZW50LCBidXQgcGxlYXNlIGRvbid0IGNvbW1pdCB0aGlzIGNvbXBvbmVudCB3aXRoIGVuYWJsZWQgcHJvcFR5cGVzLlxuICAgKi9cbiAgcHJvcFR5cGVzX0RJU0FCTEVEX0ZPUl9QRVJGT1JNQU5DRToge1xuXG4gICAgLyoqXG4gICAgICogQXJyYXkgb2YgPEZpeGVkRGF0YVRhYmxlQ29sdW1uIC8+LlxuICAgICAqL1xuICAgIGNvbHVtbnM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuXG4gICAgaXNTY3JvbGxpbmc6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgbGVmdDogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIG9uQ29sdW1uUmVzaXplOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIHJvd0hlaWdodDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuXG4gICAgcm93SW5kZXg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcblxuICAgIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG5cbiAgICB6SW5kZXg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkgLypvYmplY3QqL3tcbiAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBjb2x1bW5zID0gcHJvcHMuY29sdW1ucztcbiAgICB2YXIgY2VsbHMgPSBuZXcgQXJyYXkoY29sdW1ucy5sZW5ndGgpO1xuXG4gICAgdmFyIGN1cnJlbnRQb3NpdGlvbiA9IDA7XG4gICAgZm9yICh2YXIgaSA9IDAsIGogPSBjb2x1bW5zLmxlbmd0aDsgaSA8IGo7IGkrKykge1xuICAgICAgdmFyIGNvbHVtblByb3BzID0gY29sdW1uc1tpXS5wcm9wcztcbiAgICAgIGlmICghY29sdW1uUHJvcHMuYWxsb3dDZWxsc1JlY3ljbGluZyB8fCBjdXJyZW50UG9zaXRpb24gLSBwcm9wcy5sZWZ0IDw9IHByb3BzLndpZHRoICYmIGN1cnJlbnRQb3NpdGlvbiAtIHByb3BzLmxlZnQgKyBjb2x1bW5Qcm9wcy53aWR0aCA+PSAwKSB7XG4gICAgICAgIHZhciBrZXkgPSAnY2VsbF8nICsgaTtcbiAgICAgICAgY2VsbHNbaV0gPSB0aGlzLl9yZW5kZXJDZWxsKHByb3BzLnJvd0luZGV4LCBwcm9wcy5yb3dIZWlnaHQsIGNvbHVtblByb3BzLCBjdXJyZW50UG9zaXRpb24sIGtleSk7XG4gICAgICB9XG4gICAgICBjdXJyZW50UG9zaXRpb24gKz0gY29sdW1uUHJvcHMud2lkdGg7XG4gICAgfVxuXG4gICAgdmFyIGNvbnRlbnRXaWR0aCA9IHRoaXMuX2dldENvbHVtbnNXaWR0aChjb2x1bW5zKTtcblxuICAgIHZhciBzdHlsZSA9IHtcbiAgICAgIGhlaWdodDogcHJvcHMuaGVpZ2h0LFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB3aWR0aDogY29udGVudFdpZHRoLFxuICAgICAgekluZGV4OiBwcm9wcy56SW5kZXhcbiAgICB9O1xuICAgIHRyYW5zbGF0ZURPTVBvc2l0aW9uWFkoc3R5bGUsIC0xICogRElSX1NJR04gKiBwcm9wcy5sZWZ0LCAwKTtcblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogY3goJ2ZpeGVkRGF0YVRhYmxlQ2VsbEdyb3VwTGF5b3V0L2NlbGxHcm91cCcpLFxuICAgICAgICBzdHlsZTogc3R5bGUgfSxcbiAgICAgIGNlbGxzXG4gICAgKTtcbiAgfSxcblxuICBfcmVuZGVyQ2VsbDogZnVuY3Rpb24gX3JlbmRlckNlbGwoXG4gIC8qbnVtYmVyKi9yb3dJbmRleCxcbiAgLypudW1iZXIqL2hlaWdodCxcbiAgLypvYmplY3QqL2NvbHVtblByb3BzLFxuICAvKm51bWJlciovbGVmdCxcbiAgLypzdHJpbmcqL2tleSkgLypvYmplY3QqL3tcblxuICAgIHZhciBjZWxsSXNSZXNpemFibGUgPSBjb2x1bW5Qcm9wcy5pc1Jlc2l6YWJsZSAmJiB0aGlzLnByb3BzLm9uQ29sdW1uUmVzaXplO1xuICAgIHZhciBvbkNvbHVtblJlc2l6ZSA9IGNlbGxJc1Jlc2l6YWJsZSA/IHRoaXMucHJvcHMub25Db2x1bW5SZXNpemUgOiBudWxsO1xuXG4gICAgdmFyIGNsYXNzTmFtZSA9IGNvbHVtblByb3BzLmNlbGxDbGFzc05hbWU7XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChGaXhlZERhdGFUYWJsZUNlbGwsIHtcbiAgICAgIGlzU2Nyb2xsaW5nOiB0aGlzLnByb3BzLmlzU2Nyb2xsaW5nLFxuICAgICAgYWxpZ246IGNvbHVtblByb3BzLmFsaWduLFxuICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgIGtleToga2V5LFxuICAgICAgbWF4V2lkdGg6IGNvbHVtblByb3BzLm1heFdpZHRoLFxuICAgICAgbWluV2lkdGg6IGNvbHVtblByb3BzLm1pbldpZHRoLFxuICAgICAgb25Db2x1bW5SZXNpemU6IG9uQ29sdW1uUmVzaXplLFxuICAgICAgcm93SW5kZXg6IHJvd0luZGV4LFxuICAgICAgY29sdW1uS2V5OiBjb2x1bW5Qcm9wcy5jb2x1bW5LZXksXG4gICAgICB3aWR0aDogY29sdW1uUHJvcHMud2lkdGgsXG4gICAgICBsZWZ0OiBsZWZ0LFxuICAgICAgY2VsbDogY29sdW1uUHJvcHMuY2VsbFxuICAgIH0pO1xuICB9LFxuXG4gIF9nZXRDb2x1bW5zV2lkdGg6IGZ1bmN0aW9uIF9nZXRDb2x1bW5zV2lkdGgoIC8qYXJyYXkqL2NvbHVtbnMpIC8qbnVtYmVyKi97XG4gICAgdmFyIHdpZHRoID0gMDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbHVtbnMubGVuZ3RoOyArK2kpIHtcbiAgICAgIHdpZHRoICs9IGNvbHVtbnNbaV0ucHJvcHMud2lkdGg7XG4gICAgfVxuICAgIHJldHVybiB3aWR0aDtcbiAgfVxufSk7XG5cbnZhciBGaXhlZERhdGFUYWJsZUNlbGxHcm91cCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdGaXhlZERhdGFUYWJsZUNlbGxHcm91cCcsXG5cbiAgLyoqXG4gICAqIFByb3BUeXBlcyBhcmUgZGlzYWJsZWQgaW4gdGhpcyBjb21wb25lbnQsIGJlY2F1c2UgaGF2aW5nIHRoZW0gb24gc2xvd3NcbiAgICogZG93biB0aGUgRml4ZWREYXRhVGFibGUgaHVnZWx5IGluIERFViBtb2RlLiBZb3UgY2FuIGVuYWJsZSB0aGVtIGJhY2sgZm9yXG4gICAqIGRldmVsb3BtZW50LCBidXQgcGxlYXNlIGRvbid0IGNvbW1pdCB0aGlzIGNvbXBvbmVudCB3aXRoIGVuYWJsZWQgcHJvcFR5cGVzLlxuICAgKi9cbiAgcHJvcFR5cGVzX0RJU0FCTEVEX0ZPUl9QRVJGT1JNQU5DRToge1xuICAgIGlzU2Nyb2xsaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiBIZWlnaHQgb2YgdGhlIHJvdy5cbiAgICAgKi9cbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcblxuICAgIG9mZnNldExlZnQ6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICBsZWZ0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIC8qKlxuICAgICAqIFotaW5kZXggb24gd2hpY2ggdGhlIHJvdyB3aWxsIGJlIGRpc3BsYXllZC4gVXNlZCBlLmcuIGZvciBrZWVwaW5nXG4gICAgICogaGVhZGVyIGFuZCBmb290ZXIgaW4gZnJvbnQgb2Ygb3RoZXIgcm93cy5cbiAgICAgKi9cbiAgICB6SW5kZXg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxuICB9LFxuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZTogZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKCAvKm9iamVjdCovbmV4dFByb3BzKSAvKmJvb2xlYW4qL3tcbiAgICByZXR1cm4gIW5leHRQcm9wcy5pc1Njcm9sbGluZyB8fCB0aGlzLnByb3BzLnJvd0luZGV4ICE9PSBuZXh0UHJvcHMucm93SW5kZXggfHwgdGhpcy5wcm9wcy5sZWZ0ICE9PSBuZXh0UHJvcHMubGVmdDtcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIC8qb2JqZWN0Ki97XG4gICAgcmV0dXJuIHtcbiAgICAgIG9mZnNldExlZnQ6IDBcbiAgICB9O1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkgLypvYmplY3QqL3tcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgb2Zmc2V0TGVmdCA9IF9wcm9wcy5vZmZzZXRMZWZ0O1xuXG4gICAgdmFyIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wcywgWydvZmZzZXRMZWZ0J10pO1xuXG4gICAgdmFyIHN0eWxlID0ge1xuICAgICAgaGVpZ2h0OiBwcm9wcy5oZWlnaHRcbiAgICB9O1xuXG4gICAgaWYgKERJUl9TSUdOID09PSAxKSB7XG4gICAgICBzdHlsZS5sZWZ0ID0gb2Zmc2V0TGVmdDtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUucmlnaHQgPSBvZmZzZXRMZWZ0O1xuICAgIH1cblxuICAgIHZhciBvbkNvbHVtblJlc2l6ZSA9IHByb3BzLm9uQ29sdW1uUmVzaXplID8gdGhpcy5fb25Db2x1bW5SZXNpemUgOiBudWxsO1xuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIHtcbiAgICAgICAgc3R5bGU6IHN0eWxlLFxuICAgICAgICBjbGFzc05hbWU6IGN4KCdmaXhlZERhdGFUYWJsZUNlbGxHcm91cExheW91dC9jZWxsR3JvdXBXcmFwcGVyJykgfSxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRml4ZWREYXRhVGFibGVDZWxsR3JvdXBJbXBsLCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgICAgb25Db2x1bW5SZXNpemU6IG9uQ29sdW1uUmVzaXplXG4gICAgICB9KSlcbiAgICApO1xuICB9LFxuXG4gIF9vbkNvbHVtblJlc2l6ZTogZnVuY3Rpb24gX29uQ29sdW1uUmVzaXplKFxuICAvKm51bWJlciovbGVmdCxcbiAgLypudW1iZXIqL3dpZHRoLFxuICAvKj9udW1iZXIqL21pbldpZHRoLFxuICAvKj9udW1iZXIqL21heFdpZHRoLFxuICAvKnN0cmluZ3xudW1iZXIqL2NvbHVtbktleSxcbiAgLypvYmplY3QqL2V2ZW50KSB7XG4gICAgdGhpcy5wcm9wcy5vbkNvbHVtblJlc2l6ZSAmJiB0aGlzLnByb3BzLm9uQ29sdW1uUmVzaXplKHRoaXMucHJvcHMub2Zmc2V0TGVmdCwgbGVmdCAtIHRoaXMucHJvcHMubGVmdCArIHdpZHRoLCB3aWR0aCwgbWluV2lkdGgsIG1heFdpZHRoLCBjb2x1bW5LZXksIGV2ZW50KTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRml4ZWREYXRhVGFibGVDZWxsR3JvdXA7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9GaXhlZERhdGFUYWJsZUNlbGxHcm91cC5yZWFjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDQ2MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgRml4ZWREYXRhVGFibGVIZWxwZXJcbiAqIEB0eXBlY2hlY2tzXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgTG9jYWxlID0gcmVxdWlyZSgnLi9Mb2NhbGUnKTtcbnZhciBSZWFjdCA9IHJlcXVpcmUoJy4vUmVhY3QnKTtcbnZhciBGaXhlZERhdGFUYWJsZUNvbHVtbkdyb3VwID0gcmVxdWlyZSgnLi9GaXhlZERhdGFUYWJsZUNvbHVtbkdyb3VwLnJlYWN0Jyk7XG52YXIgRml4ZWREYXRhVGFibGVDb2x1bW4gPSByZXF1aXJlKCcuL0ZpeGVkRGF0YVRhYmxlQ29sdW1uLnJlYWN0Jyk7XG5cbnZhciBESVJfU0lHTiA9IExvY2FsZS5pc1JUTCgpID8gLTEgOiArMTtcbi8vIEEgY2VsbCB1cCB0byA1cHggb3V0c2lkZSBvZiB0aGUgdmlzaWJsZSBhcmVhIHdpbGwgc3RpbGwgYmUgY29uc2lkZXJlZCB2aXNpYmxlXG52YXIgQ0VMTF9WSVNJQklMSVRZX1RPTEVSQU5DRSA9IDU7IC8vIHVzZWQgZm9yIGZseW91dHNcblxuZnVuY3Rpb24gcmVuZGVyVG9TdHJpbmcodmFsdWUpIC8qc3RyaW5nKi97XG4gIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuICcnO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBTdHJpbmcodmFsdWUpO1xuICB9XG59XG5cbi8qKlxuICogSGVscGVyIG1ldGhvZCB0byBleGVjdXRlIGEgY2FsbGJhY2sgYWdhaW5zdCBhbGwgY29sdW1ucyBnaXZlbiB0aGUgY2hpbGRyZW5cbiAqIG9mIGEgdGFibGUuXG4gKiBAcGFyYW0gez9vYmplY3R8YXJyYXl9IGNoaWxkcmVuXG4gKiAgICBDaGlsZHJlbiBvZiBhIHRhYmxlLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcbiAqICAgIEZ1bmN0aW9uIHRvIGV4Y2VjdXRlIGZvciBlYWNoIGNvbHVtbi4gSXQgaXMgcGFzc2VkIHRoZSBjb2x1bW4uXG4gKi9cbmZ1bmN0aW9uIGZvckVhY2hDb2x1bW4oY2hpbGRyZW4sIGNhbGxiYWNrKSB7XG4gIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIGlmIChjaGlsZC50eXBlID09PSBGaXhlZERhdGFUYWJsZUNvbHVtbkdyb3VwKSB7XG4gICAgICBmb3JFYWNoQ29sdW1uKGNoaWxkLnByb3BzLmNoaWxkcmVuLCBjYWxsYmFjayk7XG4gICAgfSBlbHNlIGlmIChjaGlsZC50eXBlID09PSBGaXhlZERhdGFUYWJsZUNvbHVtbikge1xuICAgICAgY2FsbGJhY2soY2hpbGQpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogSGVscGVyIG1ldGhvZCB0byBtYXAgY29sdW1ucyB0byBuZXcgY29sdW1ucy4gVGhpcyB0YWtlcyBpbnRvIGFjY291bnQgY29sdW1uXG4gKiBncm91cHMgYW5kIHdpbGwgZ2VuZXJhdGUgYSBuZXcgY29sdW1uIGdyb3VwIGlmIGl0cyBjb2x1bW5zIGNoYW5nZS5cbiAqIEBwYXJhbSB7P29iamVjdHxhcnJheX0gY2hpbGRyZW5cbiAqICAgIENoaWxkcmVuIG9mIGEgdGFibGUuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICogICAgRnVuY3Rpb24gdG8gZXhjZWN1dGUgZm9yIGVhY2ggY29sdW1uLiBJdCBpcyBwYXNzZWQgdGhlIGNvbHVtbiBhbmQgc2hvdWxkXG4gKiAgICByZXR1cm4gYSByZXN1bHQgY29sdW1uLlxuICovXG5mdW5jdGlvbiBtYXBDb2x1bW5zKGNoaWxkcmVuLCBjYWxsYmFjaykge1xuICB2YXIgbmV3Q2hpbGRyZW4gPSBbXTtcbiAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgZnVuY3Rpb24gKG9yaWdpbmFsQ2hpbGQpIHtcbiAgICB2YXIgbmV3Q2hpbGQgPSBvcmlnaW5hbENoaWxkO1xuXG4gICAgLy8gVGhlIGNoaWxkIGlzIGVpdGhlciBhIGNvbHVtbiBncm91cCBvciBhIGNvbHVtbi4gSWYgaXQgaXMgYSBjb2x1bW4gZ3JvdXBcbiAgICAvLyB3ZSBuZWVkIHRvIGl0ZXJhdGUgb3ZlciBpdHMgY29sdW1ucyBhbmQgdGhlbiBwb3RlbnRpYWxseSBnZW5lcmF0ZSBhXG4gICAgLy8gbmV3IGNvbHVtbiBncm91cFxuICAgIGlmIChvcmlnaW5hbENoaWxkLnR5cGUgPT09IEZpeGVkRGF0YVRhYmxlQ29sdW1uR3JvdXApIHtcbiAgICAgIHZhciBoYXZlQ29sdW1uc0NoYW5nZWQgPSBmYWxzZTtcbiAgICAgIHZhciBuZXdDb2x1bW5zID0gW107XG5cbiAgICAgIGZvckVhY2hDb2x1bW4ob3JpZ2luYWxDaGlsZC5wcm9wcy5jaGlsZHJlbiwgZnVuY3Rpb24gKG9yaWdpbmFsY29sdW1uKSB7XG4gICAgICAgIHZhciBuZXdDb2x1bW4gPSBjYWxsYmFjayhvcmlnaW5hbGNvbHVtbik7XG4gICAgICAgIGlmIChuZXdDb2x1bW4gIT09IG9yaWdpbmFsY29sdW1uKSB7XG4gICAgICAgICAgaGF2ZUNvbHVtbnNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBuZXdDb2x1bW5zLnB1c2gobmV3Q29sdW1uKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBJZiB0aGUgY29sdW1uIGdyb3VwcyBjb2x1bW5zIGhhdmUgY2hhbmdlZCBjbG9uZSB0aGUgZ3JvdXAgYW5kIHN1cHBseVxuICAgICAgLy8gbmV3IGNoaWxkcmVuXG4gICAgICBpZiAoaGF2ZUNvbHVtbnNDaGFuZ2VkKSB7XG4gICAgICAgIG5ld0NoaWxkID0gUmVhY3QuY2xvbmVFbGVtZW50KG9yaWdpbmFsQ2hpbGQsIHtcbiAgICAgICAgICBjaGlsZHJlbjogbmV3Q29sdW1uc1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG9yaWdpbmFsQ2hpbGQudHlwZSA9PT0gRml4ZWREYXRhVGFibGVDb2x1bW4pIHtcbiAgICAgIG5ld0NoaWxkID0gY2FsbGJhY2sob3JpZ2luYWxDaGlsZCk7XG4gICAgfVxuXG4gICAgbmV3Q2hpbGRyZW4ucHVzaChuZXdDaGlsZCk7XG4gIH0pO1xuXG4gIHJldHVybiBuZXdDaGlsZHJlbjtcbn1cblxudmFyIEZpeGVkRGF0YVRhYmxlSGVscGVyID0ge1xuICBESVJfU0lHTjogRElSX1NJR04sXG4gIENFTExfVklTSUJJTElUWV9UT0xFUkFOQ0U6IENFTExfVklTSUJJTElUWV9UT0xFUkFOQ0UsXG4gIHJlbmRlclRvU3RyaW5nOiByZW5kZXJUb1N0cmluZyxcbiAgZm9yRWFjaENvbHVtbjogZm9yRWFjaENvbHVtbixcbiAgbWFwQ29sdW1uczogbWFwQ29sdW1uc1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBGaXhlZERhdGFUYWJsZUhlbHBlcjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL0ZpeGVkRGF0YVRhYmxlSGVscGVyLmpzXG4gKiogbW9kdWxlIGlkID0gNDYyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBMb2NhbGVcbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxuLy8gSGFyZCBjb2RlIHRoaXMgZm9yIG5vdy5cbnZhciBMb2NhbGUgPSB7XG4gIGlzUlRMOiBmdW5jdGlvbiBpc1JUTCgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG4gIGdldERpcmVjdGlvbjogZnVuY3Rpb24gZ2V0RGlyZWN0aW9uKCkge1xuICAgIHJldHVybiAnTFRSJztcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBMb2NhbGU7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9Mb2NhbGUuanNcbiAqKiBtb2R1bGUgaWQgPSA0NjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIEZpeGVkRGF0YVRhYmxlQ29sdW1uR3JvdXAucmVhY3RcbiAqL1xuXG4vKipcbiAqIFRSQU5TSVRJT04gU0hJTVxuICogVGhpcyBwcm92aWRlcyBhbiBpbnRlcm1lZGlhdGUgbWFwcGluZyBmcm9tIHRoZSBvbGQgQVBJIHRvIHRoZSBuZXcgQVBJLlxuICpcbiAqIFdoZW4gcmVhZHksIHJlbW92ZSB0aGlzIGZpbGUgYW5kIHJlbmFtZSB0aGUgcHJvdmlkZXNNb2R1bGUgaW5cbiAqIEZpeGVkRGF0YVRhYmxlQ29sdW1uTmV3LnJlYWN0XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCcuL1JlYWN0Jyk7XG5cbnZhciBUcmFuc2l0aW9uQ29sdW1uR3JvdXAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnVHJhbnNpdGlvbkNvbHVtbkdyb3VwJyxcblxuICBzdGF0aWNzOiB7XG4gICAgX19UYWJsZUNvbHVtbkdyb3VwX186IHRydWVcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb21wb25lbnQgPFRyYW5zaXRpb25Db2x1bW5Hcm91cCAvPiBzaG91bGQgbmV2ZXIgcmVuZGVyJyk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBUcmFuc2l0aW9uQ29sdW1uR3JvdXA7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9GaXhlZERhdGFUYWJsZUNvbHVtbkdyb3VwLnJlYWN0LmpzXG4gKiogbW9kdWxlIGlkID0gNDY0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBGaXhlZERhdGFUYWJsZUNvbHVtbi5yZWFjdFxuICovXG5cbi8qKlxuICogVFJBTlNJVElPTiBTSElNXG4gKiBUaGlzIGFjdHMgdG8gcHJvdmlkZSBhbiBpbnRlcm1lZGlhdGUgbWFwcGluZyBmcm9tIHRoZSBvbGQgQVBJIHRvIHRoZSBuZXcgQVBJLlxuICpcbiAqIFdoZW4gcmVhZHksIHJlbW92ZSB0aGlzIGZpbGUgYW5kIHJlbmFtZSB0aGUgcHJvdmlkZXNNb2R1bGUgaW5cbiAqIEZpeGVkRGF0YVRhYmxlQ29sdW1uTmV3LnJlYWN0XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCcuL1JlYWN0Jyk7XG5cbnZhciBUcmFuc2l0aW9uQ29sdW1uID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1RyYW5zaXRpb25Db2x1bW4nLFxuXG4gIHN0YXRpY3M6IHtcbiAgICBfX1RhYmxlQ29sdW1uX186IHRydWVcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb21wb25lbnQgPFRyYW5zaXRpb25Db2x1bW4gLz4gc2hvdWxkIG5ldmVyIHJlbmRlcicpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gVHJhbnNpdGlvbkNvbHVtbjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL0ZpeGVkRGF0YVRhYmxlQ29sdW1uLnJlYWN0LmpzXG4gKiogbW9kdWxlIGlkID0gNDY1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBGaXhlZERhdGFUYWJsZUNlbGwucmVhY3RcbiAqIEB0eXBlY2hlY2tzXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbnZhciBGaXhlZERhdGFUYWJsZUNlbGxEZWZhdWx0ID0gcmVxdWlyZSgnLi9GaXhlZERhdGFUYWJsZUNlbGxEZWZhdWx0LnJlYWN0Jyk7XG52YXIgRml4ZWREYXRhVGFibGVIZWxwZXIgPSByZXF1aXJlKCcuL0ZpeGVkRGF0YVRhYmxlSGVscGVyJyk7XG52YXIgUmVhY3QgPSByZXF1aXJlKCcuL1JlYWN0Jyk7XG52YXIgY3ggPSByZXF1aXJlKCcuL2N4Jyk7XG52YXIgam9pbkNsYXNzZXMgPSByZXF1aXJlKCcuL2pvaW5DbGFzc2VzJyk7XG5cbnZhciBESVJfU0lHTiA9IEZpeGVkRGF0YVRhYmxlSGVscGVyLkRJUl9TSUdOO1xuXG52YXIgUHJvcFR5cGVzID0gUmVhY3QuUHJvcFR5cGVzO1xuXG52YXIgREVGQVVMVF9QUk9QUyA9IHtcbiAgYWxpZ246ICdsZWZ0JyxcbiAgaGlnaGxpZ2h0ZWQ6IGZhbHNlXG59O1xuXG52YXIgRml4ZWREYXRhVGFibGVDZWxsID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0ZpeGVkRGF0YVRhYmxlQ2VsbCcsXG5cbiAgLyoqXG4gICAqIFByb3BUeXBlcyBhcmUgZGlzYWJsZWQgaW4gdGhpcyBjb21wb25lbnQsIGJlY2F1c2UgaGF2aW5nIHRoZW0gb24gc2xvd3NcbiAgICogZG93biB0aGUgRml4ZWREYXRhVGFibGUgaHVnZWx5IGluIERFViBtb2RlLiBZb3UgY2FuIGVuYWJsZSB0aGVtIGJhY2sgZm9yXG4gICAqIGRldmVsb3BtZW50LCBidXQgcGxlYXNlIGRvbid0IGNvbW1pdCB0aGlzIGNvbXBvbmVudCB3aXRoIGVuYWJsZWQgcHJvcFR5cGVzLlxuICAgKi9cbiAgcHJvcFR5cGVzX0RJU0FCTEVEX0ZPUl9QRVJGT1JNQU5DRToge1xuICAgIGlzU2Nyb2xsaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBhbGlnbjogUHJvcFR5cGVzLm9uZU9mKFsnbGVmdCcsICdjZW50ZXInLCAncmlnaHQnXSksXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGhpZ2hsaWdodGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICB3aWR0aDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIG1pbldpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIG1heFdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGhlaWdodDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuXG4gICAgY2VsbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnQsIFByb3BUeXBlcy5mdW5jXSksXG5cbiAgICBjb2x1bW5LZXk6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcblxuICAgIC8qKlxuICAgICAqIFRoZSByb3cgaW5kZXggdGhhdCB3aWxsIGJlIHBhc3NlZCB0byBgY2VsbFJlbmRlcmVyYCB0byByZW5kZXIuXG4gICAgICovXG4gICAgcm93SW5kZXg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIGZvciB3aGVuIHJlc2l6ZXIga25vYiAoaW4gRml4ZWREYXRhVGFibGVDZWxsKSBpcyBjbGlja2VkXG4gICAgICogdG8gaW5pdGlhbGl6ZSByZXNpemluZy4gUGxlYXNlIG5vdGUgdGhpcyBpcyBvbmx5IG9uIHRoZSBjZWxsc1xuICAgICAqIGluIHRoZSBoZWFkZXIuXG4gICAgICogQHBhcmFtIG51bWJlciBjb21iaW5lZFdpZHRoXG4gICAgICogQHBhcmFtIG51bWJlciBsZWZ0XG4gICAgICogQHBhcmFtIG51bWJlciB3aWR0aFxuICAgICAqIEBwYXJhbSBudW1iZXIgbWluV2lkdGhcbiAgICAgKiBAcGFyYW0gbnVtYmVyIG1heFdpZHRoXG4gICAgICogQHBhcmFtIG51bWJlcnxzdHJpbmcgY29sdW1uS2V5XG4gICAgICogQHBhcmFtIG9iamVjdCBldmVudFxuICAgICAqL1xuICAgIG9uQ29sdW1uUmVzaXplOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBsZWZ0IG9mZnNldCBpbiBwaXhlbHMgb2YgdGhlIGNlbGwuXG4gICAgICovXG4gICAgbGVmdDogUHJvcFR5cGVzLm51bWJlclxuICB9LFxuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZTogZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xuICAgIHJldHVybiAhbmV4dFByb3BzLmlzU2Nyb2xsaW5nIHx8IHRoaXMucHJvcHMucm93SW5kZXggIT09IG5leHRQcm9wcy5yb3dJbmRleDtcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIC8qb2JqZWN0Ki97XG4gICAgcmV0dXJuIERFRkFVTFRfUFJPUFM7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSAvKm9iamVjdCove1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBoZWlnaHQgPSBfcHJvcHMuaGVpZ2h0O1xuICAgIHZhciB3aWR0aCA9IF9wcm9wcy53aWR0aDtcbiAgICB2YXIgY29sdW1uS2V5ID0gX3Byb3BzLmNvbHVtbktleTtcblxuICAgIHZhciBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsnaGVpZ2h0JywgJ3dpZHRoJywgJ2NvbHVtbktleSddKTtcblxuICAgIHZhciBzdHlsZSA9IHtcbiAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgd2lkdGg6IHdpZHRoXG4gICAgfTtcblxuICAgIGlmIChESVJfU0lHTiA9PT0gMSkge1xuICAgICAgc3R5bGUubGVmdCA9IHByb3BzLmxlZnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLnJpZ2h0ID0gcHJvcHMubGVmdDtcbiAgICB9XG5cbiAgICB2YXIgY2xhc3NOYW1lID0gam9pbkNsYXNzZXMoY3goe1xuICAgICAgJ2ZpeGVkRGF0YVRhYmxlQ2VsbExheW91dC9tYWluJzogdHJ1ZSxcbiAgICAgICdmaXhlZERhdGFUYWJsZUNlbGxMYXlvdXQvbGFzdENoaWxkJzogcHJvcHMubGFzdENoaWxkLFxuICAgICAgJ2ZpeGVkRGF0YVRhYmxlQ2VsbExheW91dC9hbGlnblJpZ2h0JzogcHJvcHMuYWxpZ24gPT09ICdyaWdodCcsXG4gICAgICAnZml4ZWREYXRhVGFibGVDZWxsTGF5b3V0L2FsaWduQ2VudGVyJzogcHJvcHMuYWxpZ24gPT09ICdjZW50ZXInLFxuICAgICAgJ3B1YmxpYy9maXhlZERhdGFUYWJsZUNlbGwvYWxpZ25SaWdodCc6IHByb3BzLmFsaWduID09PSAncmlnaHQnLFxuICAgICAgJ3B1YmxpYy9maXhlZERhdGFUYWJsZUNlbGwvaGlnaGxpZ2h0ZWQnOiBwcm9wcy5oaWdobGlnaHRlZCxcbiAgICAgICdwdWJsaWMvZml4ZWREYXRhVGFibGVDZWxsL21haW4nOiB0cnVlXG4gICAgfSksIHByb3BzLmNsYXNzTmFtZSk7XG5cbiAgICB2YXIgY29sdW1uUmVzaXplckNvbXBvbmVudDtcbiAgICBpZiAocHJvcHMub25Db2x1bW5SZXNpemUpIHtcbiAgICAgIHZhciBjb2x1bW5SZXNpemVyU3R5bGUgPSB7XG4gICAgICAgIGhlaWdodDogaGVpZ2h0XG4gICAgICB9O1xuICAgICAgY29sdW1uUmVzaXplckNvbXBvbmVudCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBjeCgnZml4ZWREYXRhVGFibGVDZWxsTGF5b3V0L2NvbHVtblJlc2l6ZXJDb250YWluZXInKSxcbiAgICAgICAgICBzdHlsZTogY29sdW1uUmVzaXplclN0eWxlLFxuICAgICAgICAgIG9uTW91c2VEb3duOiB0aGlzLl9vbkNvbHVtblJlc2l6ZXJNb3VzZURvd24gfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICAgIGNsYXNzTmFtZTogam9pbkNsYXNzZXMoY3goJ2ZpeGVkRGF0YVRhYmxlQ2VsbExheW91dC9jb2x1bW5SZXNpemVyS25vYicpLCBjeCgncHVibGljL2ZpeGVkRGF0YVRhYmxlQ2VsbC9jb2x1bW5SZXNpemVyS25vYicpKSxcbiAgICAgICAgICBzdHlsZTogY29sdW1uUmVzaXplclN0eWxlXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cblxuICAgIHZhciBjZWxsUHJvcHMgPSB7XG4gICAgICBjb2x1bW5LZXk6IGNvbHVtbktleSxcbiAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgd2lkdGg6IHdpZHRoXG4gICAgfTtcblxuICAgIGlmIChwcm9wcy5yb3dJbmRleCA+PSAwKSB7XG4gICAgICBjZWxsUHJvcHMucm93SW5kZXggPSBwcm9wcy5yb3dJbmRleDtcbiAgICB9XG5cbiAgICB2YXIgY29udGVudDtcbiAgICBpZiAoUmVhY3QuaXNWYWxpZEVsZW1lbnQocHJvcHMuY2VsbCkpIHtcbiAgICAgIGNvbnRlbnQgPSBSZWFjdC5jbG9uZUVsZW1lbnQocHJvcHMuY2VsbCwgY2VsbFByb3BzKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBwcm9wcy5jZWxsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb250ZW50ID0gcHJvcHMuY2VsbChjZWxsUHJvcHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZW50ID0gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgRml4ZWREYXRhVGFibGVDZWxsRGVmYXVsdCxcbiAgICAgICAgY2VsbFByb3BzLFxuICAgICAgICBwcm9wcy5jZWxsXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7IGNsYXNzTmFtZTogY2xhc3NOYW1lLCBzdHlsZTogc3R5bGUgfSxcbiAgICAgIGNvbHVtblJlc2l6ZXJDb21wb25lbnQsXG4gICAgICBjb250ZW50XG4gICAgKTtcbiAgfSxcblxuICBfb25Db2x1bW5SZXNpemVyTW91c2VEb3duOiBmdW5jdGlvbiBfb25Db2x1bW5SZXNpemVyTW91c2VEb3duKCAvKm9iamVjdCovZXZlbnQpIHtcbiAgICB0aGlzLnByb3BzLm9uQ29sdW1uUmVzaXplKHRoaXMucHJvcHMubGVmdCwgdGhpcy5wcm9wcy53aWR0aCwgdGhpcy5wcm9wcy5taW5XaWR0aCwgdGhpcy5wcm9wcy5tYXhXaWR0aCwgdGhpcy5wcm9wcy5jb2x1bW5LZXksIGV2ZW50KTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRml4ZWREYXRhVGFibGVDZWxsO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvRml4ZWREYXRhVGFibGVDZWxsLnJlYWN0LmpzXG4gKiogbW9kdWxlIGlkID0gNDY2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBGaXhlZERhdGFUYWJsZUNlbGxEZWZhdWx0LnJlYWN0XG4gKiBAdHlwZWNoZWNrc1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG52YXIgUmVhY3QgPSByZXF1aXJlKCcuL1JlYWN0Jyk7XG5cbnZhciBjeCA9IHJlcXVpcmUoJy4vY3gnKTtcbnZhciBqb2luQ2xhc3NlcyA9IHJlcXVpcmUoJy4vam9pbkNsYXNzZXMnKTtcblxudmFyIFByb3BUeXBlcyA9IFJlYWN0LlByb3BUeXBlcztcblxuLyoqXG4gKiBDb21wb25lbnQgdGhhdCBoYW5kbGVzIGRlZmF1bHQgY2VsbCBsYXlvdXQgYW5kIHN0eWxpbmcuXG4gKlxuICogQWxsIHByb3BzIHVubGVzcyBzcGVjaWZpZWQgYmVsb3cgd2lsbCBiZSBzZXQgb250byB0aGUgdG9wIGxldmVsIGBkaXZgXG4gKiByZW5kZXJlZCBieSB0aGUgY2VsbC5cbiAqXG4gKiBFeGFtcGxlIHVzYWdlIHZpYSBmcm9tIGEgYENvbHVtbmA6XG4gKiBgYGBcbiAqIGNvbnN0IE15Q29sdW1uID0gKFxuICogICA8Q29sdW1uXG4gKiAgICAgY2VsbD17KHtyb3dJbmRleCwgd2lkdGgsIGhlaWdodH0pID0+IChcbiAqICAgICAgIDxDZWxsXG4gKiAgICAgICAgIHdpZHRoPXt3aWR0aH1cbiAqICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gKiAgICAgICAgIGNsYXNzTmFtZT1cIm15LWNsYXNzXCI+XG4gKiAgICAgICAgIENlbGwgbnVtYmVyOiA8c3Bhbj57cm93SW5kZXh9PC9zcGFuPlxuKiAgICAgICAgPC9DZWxsPlxuICogICAgICl9XG4gKiAgICAgd2lkdGg9ezEwMH1cbiAqICAgLz5cbiAqICk7XG4gKiBgYGBcbiAqL1xudmFyIEZpeGVkRGF0YVRhYmxlQ2VsbERlZmF1bHQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnRml4ZWREYXRhVGFibGVDZWxsRGVmYXVsdCcsXG5cbiAgcHJvcFR5cGVzOiB7XG5cbiAgICAvKipcbiAgICAgKiBPdXRlciBoZWlnaHQgb2YgdGhlIGNlbGwuXG4gICAgICovXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLyoqXG4gICAgICogT3V0ZXIgd2lkdGggb2YgdGhlIGNlbGwuXG4gICAgICovXG4gICAgd2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvKipcbiAgICAgKiBPcHRpb25hbCBwcm9wIHRoYXQgaWYgc3BlY2lmaWVkIG9uIHRoZSBgQ29sdW1uYCB3aWxsIGJlIHBhc3NlZCB0byB0aGVcbiAgICAgKiBjZWxsLiBJdCBjYW4gYmUgdXNlZCB0byB1bmlxdWVseSBpZGVudGlmeSB3aGljaCBjb2x1bW4gaXMgdGhlIGNlbGwgaXMgaW4uXG4gICAgICovXG4gICAgY29sdW1uS2V5OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSlcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgaGVpZ2h0ID0gX3Byb3BzLmhlaWdodDtcbiAgICB2YXIgd2lkdGggPSBfcHJvcHMud2lkdGg7XG4gICAgdmFyIHN0eWxlID0gX3Byb3BzLnN0eWxlO1xuICAgIHZhciBjbGFzc05hbWUgPSBfcHJvcHMuY2xhc3NOYW1lO1xuICAgIHZhciBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbjtcbiAgICB2YXIgY29sdW1uS2V5ID0gX3Byb3BzLmNvbHVtbktleTtcbiAgICB2YXIgLy8gVW51c2VkIGJ1dCBzaG91bGQgbm90IGJlIHBhc3NlZCB0aHJvdWdoXG4gICAgcm93SW5kZXggPSBfcHJvcHMucm93SW5kZXg7XG5cbiAgICB2YXIgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbJ2hlaWdodCcsICd3aWR0aCcsICdzdHlsZScsICdjbGFzc05hbWUnLCAnY2hpbGRyZW4nLCAnY29sdW1uS2V5JywgJ3Jvd0luZGV4J10pO1xuXG4gICAgdmFyIGlubmVyU3R5bGUgPSBfZXh0ZW5kcyh7XG4gICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgIHdpZHRoOiB3aWR0aFxuICAgIH0sIHN0eWxlKTtcblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBqb2luQ2xhc3NlcyhjeCgnZml4ZWREYXRhVGFibGVDZWxsTGF5b3V0L3dyYXAxJyksIGN4KCdwdWJsaWMvZml4ZWREYXRhVGFibGVDZWxsL3dyYXAxJyksIGNsYXNzTmFtZSksXG4gICAgICAgIHN0eWxlOiBpbm5lclN0eWxlIH0pLFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzc05hbWU6IGpvaW5DbGFzc2VzKGN4KCdmaXhlZERhdGFUYWJsZUNlbGxMYXlvdXQvd3JhcDInKSwgY3goJ3B1YmxpYy9maXhlZERhdGFUYWJsZUNlbGwvd3JhcDInKSkgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6IGpvaW5DbGFzc2VzKGN4KCdmaXhlZERhdGFUYWJsZUNlbGxMYXlvdXQvd3JhcDMnKSwgY3goJ3B1YmxpYy9maXhlZERhdGFUYWJsZUNlbGwvd3JhcDMnKSkgfSxcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICB7IGNsYXNzTmFtZTogY3goJ3B1YmxpYy9maXhlZERhdGFUYWJsZUNlbGwvY2VsbENvbnRlbnQnKSB9LFxuICAgICAgICAgICAgY2hpbGRyZW5cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBGaXhlZERhdGFUYWJsZUNlbGxEZWZhdWx0O1xuLy8gVW51c2VkIGJ1dCBzaG91bGQgbm90IGJlIHBhc3NlZCB0aHJvdWdoXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9GaXhlZERhdGFUYWJsZUNlbGxEZWZhdWx0LnJlYWN0LmpzXG4gKiogbW9kdWxlIGlkID0gNDY3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgam9pbkNsYXNzZXNcbiAqIEB0eXBlY2hlY2tzIHN0YXRpYy1vbmx5XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENvbWJpbmVzIG11bHRpcGxlIGNsYXNzTmFtZSBzdHJpbmdzIGludG8gb25lLlxuICogaHR0cDovL2pzcGVyZi5jb20vam9pbmNsYXNzZXMtYXJncy12cy1hcnJheVxuICpcbiAqIEBwYXJhbSB7Li4uP3N0cmluZ30gY2xhc3NOYW1lXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGpvaW5DbGFzc2VzKGNsYXNzTmFtZSAvKiwgLi4uICovKSB7XG4gIGlmICghY2xhc3NOYW1lKSB7XG4gICAgY2xhc3NOYW1lID0gJyc7XG4gIH1cbiAgdmFyIG5leHRDbGFzcztcbiAgdmFyIGFyZ0xlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIGlmIChhcmdMZW5ndGggPiAxKSB7XG4gICAgZm9yICh2YXIgaWkgPSAxOyBpaSA8IGFyZ0xlbmd0aDsgaWkrKykge1xuICAgICAgbmV4dENsYXNzID0gYXJndW1lbnRzW2lpXTtcbiAgICAgIGlmIChuZXh0Q2xhc3MpIHtcbiAgICAgICAgY2xhc3NOYW1lID0gKGNsYXNzTmFtZSA/IGNsYXNzTmFtZSArICcgJyA6ICcnKSArIG5leHRDbGFzcztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNsYXNzTmFtZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBqb2luQ2xhc3NlcztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL2pvaW5DbGFzc2VzLmpzXG4gKiogbW9kdWxlIGlkID0gNDY4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIFRoaXMgaXMgdG8gYmUgdXNlZCB3aXRoIHRoZSBGaXhlZERhdGFUYWJsZS4gSXQgaXMgYSByZWFkIGxpbmVcbiAqIHRoYXQgd2hlbiB5b3UgY2xpY2sgb24gYSBjb2x1bW4gdGhhdCBpcyByZXNpemFibGUgYXBwZWFycyBhbmQgYWxsb3dzXG4gKiB5b3UgdG8gcmVzaXplIHRoZSBjb3JyZXNwb25kaW5nIGNvbHVtbi5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgRml4ZWREYXRhVGFibGVDb2x1bW5SZXNpemVIYW5kbGUucmVhY3RcbiAqIEB0eXBlY2hlY2tzXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgRE9NTW91c2VNb3ZlVHJhY2tlciA9IHJlcXVpcmUoJy4vRE9NTW91c2VNb3ZlVHJhY2tlcicpO1xudmFyIExvY2FsZSA9IHJlcXVpcmUoJy4vTG9jYWxlJyk7XG52YXIgUmVhY3QgPSByZXF1aXJlKCcuL1JlYWN0Jyk7XG52YXIgUmVhY3RDb21wb25lbnRXaXRoUHVyZVJlbmRlck1peGluID0gcmVxdWlyZSgnLi9SZWFjdENvbXBvbmVudFdpdGhQdXJlUmVuZGVyTWl4aW4nKTtcblxudmFyIGNsYW1wID0gcmVxdWlyZSgnLi9jbGFtcCcpO1xudmFyIGN4ID0gcmVxdWlyZSgnLi9jeCcpO1xuXG52YXIgUHJvcFR5cGVzID0gUmVhY3QuUHJvcFR5cGVzO1xuXG52YXIgRml4ZWREYXRhVGFibGVDb2x1bW5SZXNpemVIYW5kbGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnRml4ZWREYXRhVGFibGVDb2x1bW5SZXNpemVIYW5kbGUnLFxuXG4gIG1peGluczogW1JlYWN0Q29tcG9uZW50V2l0aFB1cmVSZW5kZXJNaXhpbl0sXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgdmlzaWJsZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRoaXMgaXMgdGhlIGhlaWdodCBvZiB0aGUgbGluZVxuICAgICAqL1xuICAgIGhlaWdodDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogT2Zmc2V0IGZyb20gbGVmdCBib3JkZXIgb2YgdGhlIHRhYmxlLCBwbGVhc2Ugbm90ZVxuICAgICAqIHRoYXQgdGhlIGxpbmUgaXMgYSBib3JkZXIgb24gZGlmZi4gU28gdGhpcyBpcyByZWFsbHkgdGhlXG4gICAgICogb2Zmc2V0IG9mIHRoZSBjb2x1bW4gaXRzZWxmLlxuICAgICAqL1xuICAgIGxlZnRPZmZzZXQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIEhlaWdodCBvZiB0aGUgY2xpY2thYmxlIHJlZ2lvbiBvZiB0aGUgbGluZS5cbiAgICAgKiBUaGlzIGlzIGFzc3VtZWQgdG8gYmUgYXQgdGhlIHRvcCBvZiB0aGUgbGluZS5cbiAgICAgKi9cbiAgICBrbm9iSGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGluZSBpcyBhIGJvcmRlciBvbiBhIGRpZmYsIHNvIHRoaXMgaXMgZXNzZW50aWFsbHlcbiAgICAgKiB0aGUgd2lkdGggb2YgY29sdW1uLlxuICAgICAqL1xuICAgIGluaXRpYWxXaWR0aDogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKlxuICAgICAqIFRoZSBtaW5pbXVtIHdpZHRoIHRoaXMgZHJhZ2dlciB3aWxsIGNvbGxhcHNlIHRvXG4gICAgICovXG4gICAgbWluV2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbWF4aW11bSB3aWR0aCB0aGlzIGRyYWdnZXIgd2lsbCBjb2xsYXBzZSB0b1xuICAgICAqL1xuICAgIG1heFdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbCBjbGljayBldmVudCBvbiB0aGUgaGVhZGVyIGNlbGwuXG4gICAgICovXG4gICAgaW5pdGlhbEV2ZW50OiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gICAgLyoqXG4gICAgICogV2hlbiByZXNpemluZyBpcyBjb21wbGV0ZSB0aGlzIGlzIGNhbGxlZC5cbiAgICAgKi9cbiAgICBvbkNvbHVtblJlc2l6ZUVuZDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBDb2x1bW4ga2V5IGZvciB0aGUgY29sdW1uIGJlaW5nIHJlc2l6ZWQuXG4gICAgICovXG4gICAgY29sdW1uS2V5OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSlcbiAgfSxcblxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIC8qb2JqZWN0Ki97XG4gICAgcmV0dXJuIHtcbiAgICAgIHdpZHRoOiAwLFxuICAgICAgY3Vyc29yRGVsdGE6IDBcbiAgICB9O1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoIC8qb2JqZWN0Ki9uZXdQcm9wcykge1xuICAgIGlmIChuZXdQcm9wcy5pbml0aWFsRXZlbnQgJiYgIXRoaXMuX21vdXNlTW92ZVRyYWNrZXIuaXNEcmFnZ2luZygpKSB7XG4gICAgICB0aGlzLl9tb3VzZU1vdmVUcmFja2VyLmNhcHR1cmVNb3VzZU1vdmVzKG5ld1Byb3BzLmluaXRpYWxFdmVudCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgd2lkdGg6IG5ld1Byb3BzLmluaXRpYWxXaWR0aCxcbiAgICAgICAgY3Vyc29yRGVsdGE6IG5ld1Byb3BzLmluaXRpYWxXaWR0aFxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLl9tb3VzZU1vdmVUcmFja2VyID0gbmV3IERPTU1vdXNlTW92ZVRyYWNrZXIodGhpcy5fb25Nb3ZlLCB0aGlzLl9vbkNvbHVtblJlc2l6ZUVuZCwgZG9jdW1lbnQuYm9keSk7XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuX21vdXNlTW92ZVRyYWNrZXIucmVsZWFzZU1vdXNlTW92ZXMoKTtcbiAgICB0aGlzLl9tb3VzZU1vdmVUcmFja2VyID0gbnVsbDtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIC8qb2JqZWN0Ki97XG4gICAgdmFyIHN0eWxlID0ge1xuICAgICAgd2lkdGg6IHRoaXMuc3RhdGUud2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXMucHJvcHMuaGVpZ2h0XG4gICAgfTtcbiAgICBpZiAoTG9jYWxlLmlzUlRMKCkpIHtcbiAgICAgIHN0eWxlLnJpZ2h0ID0gdGhpcy5wcm9wcy5sZWZ0T2Zmc2V0O1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5sZWZ0ID0gdGhpcy5wcm9wcy5sZWZ0T2Zmc2V0O1xuICAgIH1cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6IGN4KHtcbiAgICAgICAgICAnZml4ZWREYXRhVGFibGVDb2x1bW5SZXNpemVyTGluZUxheW91dC9tYWluJzogdHJ1ZSxcbiAgICAgICAgICAnZml4ZWREYXRhVGFibGVDb2x1bW5SZXNpemVyTGluZUxheW91dC9oaWRkZW5FbGVtJzogIXRoaXMucHJvcHMudmlzaWJsZSxcbiAgICAgICAgICAncHVibGljL2ZpeGVkRGF0YVRhYmxlQ29sdW1uUmVzaXplckxpbmUvbWFpbic6IHRydWVcbiAgICAgICAgfSksXG4gICAgICAgIHN0eWxlOiBzdHlsZSB9LFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICBjbGFzc05hbWU6IGN4KCdmaXhlZERhdGFUYWJsZUNvbHVtblJlc2l6ZXJMaW5lTGF5b3V0L21vdXNlQXJlYScpLFxuICAgICAgICBzdHlsZTogeyBoZWlnaHQ6IHRoaXMucHJvcHMuaGVpZ2h0IH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfSxcblxuICBfb25Nb3ZlOiBmdW5jdGlvbiBfb25Nb3ZlKCAvKm51bWJlciovZGVsdGFYKSB7XG4gICAgaWYgKExvY2FsZS5pc1JUTCgpKSB7XG4gICAgICBkZWx0YVggPSAtZGVsdGFYO1xuICAgIH1cbiAgICB2YXIgbmV3V2lkdGggPSB0aGlzLnN0YXRlLmN1cnNvckRlbHRhICsgZGVsdGFYO1xuICAgIHZhciBuZXdDb2x1bW5XaWR0aCA9IGNsYW1wKG5ld1dpZHRoLCB0aGlzLnByb3BzLm1pbldpZHRoLCB0aGlzLnByb3BzLm1heFdpZHRoKTtcblxuICAgIC8vIFBsZWFzZSBub3RlIGN1cnNvciBkZWx0YSBpcyB0aGUgZGlmZmVyZW50IGJldHdlZW4gdGhlIGN1cnJlbnRseSB3aWR0aFxuICAgIC8vIGFuZCB0aGUgbmV3IHdpZHRoLlxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgd2lkdGg6IG5ld0NvbHVtbldpZHRoLFxuICAgICAgY3Vyc29yRGVsdGE6IG5ld1dpZHRoXG4gICAgfSk7XG4gIH0sXG5cbiAgX29uQ29sdW1uUmVzaXplRW5kOiBmdW5jdGlvbiBfb25Db2x1bW5SZXNpemVFbmQoKSB7XG4gICAgdGhpcy5fbW91c2VNb3ZlVHJhY2tlci5yZWxlYXNlTW91c2VNb3ZlcygpO1xuICAgIHRoaXMucHJvcHMub25Db2x1bW5SZXNpemVFbmQodGhpcy5zdGF0ZS53aWR0aCwgdGhpcy5wcm9wcy5jb2x1bW5LZXkpO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBGaXhlZERhdGFUYWJsZUNvbHVtblJlc2l6ZUhhbmRsZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL0ZpeGVkRGF0YVRhYmxlQ29sdW1uUmVzaXplSGFuZGxlLnJlYWN0LmpzXG4gKiogbW9kdWxlIGlkID0gNDY5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBGaXhlZERhdGFUYWJsZVNjcm9sbEhlbHBlclxuICogQHR5cGVjaGVja3NcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG52YXIgUHJlZml4SW50ZXJ2YWxUcmVlID0gcmVxdWlyZSgnLi9QcmVmaXhJbnRlcnZhbFRyZWUnKTtcbnZhciBjbGFtcCA9IHJlcXVpcmUoJy4vY2xhbXAnKTtcblxudmFyIEJVRkZFUl9ST1dTID0gNTtcbnZhciBOT19ST1dTX1NDUk9MTF9SRVNVTFQgPSB7XG4gIGluZGV4OiAwLFxuICBvZmZzZXQ6IDAsXG4gIHBvc2l0aW9uOiAwLFxuICBjb250ZW50SGVpZ2h0OiAwXG59O1xuXG52YXIgRml4ZWREYXRhVGFibGVTY3JvbGxIZWxwZXIgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBGaXhlZERhdGFUYWJsZVNjcm9sbEhlbHBlcihcbiAgLypudW1iZXIqL3Jvd0NvdW50LFxuICAvKm51bWJlciovZGVmYXVsdFJvd0hlaWdodCxcbiAgLypudW1iZXIqL3ZpZXdwb3J0SGVpZ2h0LFxuICAvKj9mdW5jdGlvbiovcm93SGVpZ2h0R2V0dGVyKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZpeGVkRGF0YVRhYmxlU2Nyb2xsSGVscGVyKTtcblxuICAgIHRoaXMuX3Jvd09mZnNldHMgPSBQcmVmaXhJbnRlcnZhbFRyZWUudW5pZm9ybShyb3dDb3VudCwgZGVmYXVsdFJvd0hlaWdodCk7XG4gICAgdGhpcy5fc3RvcmVkSGVpZ2h0cyA9IG5ldyBBcnJheShyb3dDb3VudCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCByb3dDb3VudDsgKytpKSB7XG4gICAgICB0aGlzLl9zdG9yZWRIZWlnaHRzW2ldID0gZGVmYXVsdFJvd0hlaWdodDtcbiAgICB9XG4gICAgdGhpcy5fcm93Q291bnQgPSByb3dDb3VudDtcbiAgICB0aGlzLl9wb3NpdGlvbiA9IDA7XG4gICAgdGhpcy5fY29udGVudEhlaWdodCA9IHJvd0NvdW50ICogZGVmYXVsdFJvd0hlaWdodDtcbiAgICB0aGlzLl9kZWZhdWx0Um93SGVpZ2h0ID0gZGVmYXVsdFJvd0hlaWdodDtcbiAgICB0aGlzLl9yb3dIZWlnaHRHZXR0ZXIgPSByb3dIZWlnaHRHZXR0ZXIgPyByb3dIZWlnaHRHZXR0ZXIgOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZGVmYXVsdFJvd0hlaWdodDtcbiAgICB9O1xuICAgIHRoaXMuX3ZpZXdwb3J0SGVpZ2h0ID0gdmlld3BvcnRIZWlnaHQ7XG4gICAgdGhpcy5zY3JvbGxSb3dJbnRvVmlldyA9IHRoaXMuc2Nyb2xsUm93SW50b1ZpZXcuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNldFZpZXdwb3J0SGVpZ2h0ID0gdGhpcy5zZXRWaWV3cG9ydEhlaWdodC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2Nyb2xsQnkgPSB0aGlzLnNjcm9sbEJ5LmJpbmQodGhpcyk7XG4gICAgdGhpcy5zY3JvbGxUbyA9IHRoaXMuc2Nyb2xsVG8uYmluZCh0aGlzKTtcbiAgICB0aGlzLnNjcm9sbFRvUm93ID0gdGhpcy5zY3JvbGxUb1Jvdy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2V0Um93SGVpZ2h0R2V0dGVyID0gdGhpcy5zZXRSb3dIZWlnaHRHZXR0ZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmdldENvbnRlbnRIZWlnaHQgPSB0aGlzLmdldENvbnRlbnRIZWlnaHQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmdldFJvd1Bvc2l0aW9uID0gdGhpcy5nZXRSb3dQb3NpdGlvbi5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5fdXBkYXRlSGVpZ2h0c0luVmlld3BvcnQoMCwgMCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoRml4ZWREYXRhVGFibGVTY3JvbGxIZWxwZXIsIFt7XG4gICAga2V5OiAnc2V0Um93SGVpZ2h0R2V0dGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0Um93SGVpZ2h0R2V0dGVyKCAvKmZ1bmN0aW9uKi9yb3dIZWlnaHRHZXR0ZXIpIHtcbiAgICAgIHRoaXMuX3Jvd0hlaWdodEdldHRlciA9IHJvd0hlaWdodEdldHRlcjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzZXRWaWV3cG9ydEhlaWdodCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFZpZXdwb3J0SGVpZ2h0KCAvKm51bWJlciovdmlld3BvcnRIZWlnaHQpIHtcbiAgICAgIHRoaXMuX3ZpZXdwb3J0SGVpZ2h0ID0gdmlld3BvcnRIZWlnaHQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0Q29udGVudEhlaWdodCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldENvbnRlbnRIZWlnaHQoKSAvKm51bWJlciove1xuICAgICAgcmV0dXJuIHRoaXMuX2NvbnRlbnRIZWlnaHQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnX3VwZGF0ZUhlaWdodHNJblZpZXdwb3J0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3VwZGF0ZUhlaWdodHNJblZpZXdwb3J0KFxuICAgIC8qbnVtYmVyKi9maXJzdFJvd0luZGV4LFxuICAgIC8qbnVtYmVyKi9maXJzdFJvd09mZnNldCkge1xuICAgICAgdmFyIHRvcCA9IGZpcnN0Um93T2Zmc2V0O1xuICAgICAgdmFyIGluZGV4ID0gZmlyc3RSb3dJbmRleDtcbiAgICAgIHdoaWxlICh0b3AgPD0gdGhpcy5fdmlld3BvcnRIZWlnaHQgJiYgaW5kZXggPCB0aGlzLl9yb3dDb3VudCkge1xuICAgICAgICB0aGlzLl91cGRhdGVSb3dIZWlnaHQoaW5kZXgpO1xuICAgICAgICB0b3AgKz0gdGhpcy5fc3RvcmVkSGVpZ2h0c1tpbmRleF07XG4gICAgICAgIGluZGV4Kys7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnX3VwZGF0ZUhlaWdodHNBYm92ZVZpZXdwb3J0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3VwZGF0ZUhlaWdodHNBYm92ZVZpZXdwb3J0KCAvKm51bWJlciovZmlyc3RSb3dJbmRleCkge1xuICAgICAgdmFyIGluZGV4ID0gZmlyc3RSb3dJbmRleCAtIDE7XG4gICAgICB3aGlsZSAoaW5kZXggPj0gMCAmJiBpbmRleCA+PSBmaXJzdFJvd0luZGV4IC0gQlVGRkVSX1JPV1MpIHtcbiAgICAgICAgdmFyIGRlbHRhID0gdGhpcy5fdXBkYXRlUm93SGVpZ2h0KGluZGV4KTtcbiAgICAgICAgdGhpcy5fcG9zaXRpb24gKz0gZGVsdGE7XG4gICAgICAgIGluZGV4LS07XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnX3VwZGF0ZVJvd0hlaWdodCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF91cGRhdGVSb3dIZWlnaHQoIC8qbnVtYmVyKi9yb3dJbmRleCkgLypudW1iZXIqL3tcbiAgICAgIGlmIChyb3dJbmRleCA8IDAgfHwgcm93SW5kZXggPj0gdGhpcy5fcm93Q291bnQpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG4gICAgICB2YXIgbmV3SGVpZ2h0ID0gdGhpcy5fcm93SGVpZ2h0R2V0dGVyKHJvd0luZGV4KTtcbiAgICAgIGlmIChuZXdIZWlnaHQgIT09IHRoaXMuX3N0b3JlZEhlaWdodHNbcm93SW5kZXhdKSB7XG4gICAgICAgIHZhciBjaGFuZ2UgPSBuZXdIZWlnaHQgLSB0aGlzLl9zdG9yZWRIZWlnaHRzW3Jvd0luZGV4XTtcbiAgICAgICAgdGhpcy5fcm93T2Zmc2V0cy5zZXQocm93SW5kZXgsIG5ld0hlaWdodCk7XG4gICAgICAgIHRoaXMuX3N0b3JlZEhlaWdodHNbcm93SW5kZXhdID0gbmV3SGVpZ2h0O1xuICAgICAgICB0aGlzLl9jb250ZW50SGVpZ2h0ICs9IGNoYW5nZTtcbiAgICAgICAgcmV0dXJuIGNoYW5nZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldFJvd1Bvc2l0aW9uJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Um93UG9zaXRpb24oIC8qbnVtYmVyKi9yb3dJbmRleCkgLypudW1iZXIqL3tcbiAgICAgIHRoaXMuX3VwZGF0ZVJvd0hlaWdodChyb3dJbmRleCk7XG4gICAgICByZXR1cm4gdGhpcy5fcm93T2Zmc2V0cy5zdW1VbnRpbChyb3dJbmRleCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2Nyb2xsQnknLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzY3JvbGxCeSggLypudW1iZXIqL2RlbHRhKSAvKm9iamVjdCove1xuICAgICAgaWYgKHRoaXMuX3Jvd0NvdW50ID09PSAwKSB7XG4gICAgICAgIHJldHVybiBOT19ST1dTX1NDUk9MTF9SRVNVTFQ7XG4gICAgICB9XG4gICAgICB2YXIgZmlyc3RSb3cgPSB0aGlzLl9yb3dPZmZzZXRzLmdyZWF0ZXN0TG93ZXJCb3VuZCh0aGlzLl9wb3NpdGlvbik7XG4gICAgICBmaXJzdFJvdyA9IGNsYW1wKGZpcnN0Um93LCAwLCBNYXRoLm1heCh0aGlzLl9yb3dDb3VudCAtIDEsIDApKTtcbiAgICAgIHZhciBmaXJzdFJvd1Bvc2l0aW9uID0gdGhpcy5fcm93T2Zmc2V0cy5zdW1VbnRpbChmaXJzdFJvdyk7XG4gICAgICB2YXIgcm93SW5kZXggPSBmaXJzdFJvdztcbiAgICAgIHZhciBwb3NpdGlvbiA9IHRoaXMuX3Bvc2l0aW9uO1xuXG4gICAgICB2YXIgcm93SGVpZ2h0Q2hhbmdlID0gdGhpcy5fdXBkYXRlUm93SGVpZ2h0KHJvd0luZGV4KTtcbiAgICAgIGlmIChmaXJzdFJvd1Bvc2l0aW9uICE9PSAwKSB7XG4gICAgICAgIHBvc2l0aW9uICs9IHJvd0hlaWdodENoYW5nZTtcbiAgICAgIH1cbiAgICAgIHZhciB2aXNpYmxlUm93SGVpZ2h0ID0gdGhpcy5fc3RvcmVkSGVpZ2h0c1tyb3dJbmRleF0gLSAocG9zaXRpb24gLSBmaXJzdFJvd1Bvc2l0aW9uKTtcblxuICAgICAgaWYgKGRlbHRhID49IDApIHtcblxuICAgICAgICB3aGlsZSAoZGVsdGEgPiAwICYmIHJvd0luZGV4IDwgdGhpcy5fcm93Q291bnQpIHtcbiAgICAgICAgICBpZiAoZGVsdGEgPCB2aXNpYmxlUm93SGVpZ2h0KSB7XG4gICAgICAgICAgICBwb3NpdGlvbiArPSBkZWx0YTtcbiAgICAgICAgICAgIGRlbHRhID0gMDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVsdGEgLT0gdmlzaWJsZVJvd0hlaWdodDtcbiAgICAgICAgICAgIHBvc2l0aW9uICs9IHZpc2libGVSb3dIZWlnaHQ7XG4gICAgICAgICAgICByb3dJbmRleCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocm93SW5kZXggPCB0aGlzLl9yb3dDb3VudCkge1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlUm93SGVpZ2h0KHJvd0luZGV4KTtcbiAgICAgICAgICAgIHZpc2libGVSb3dIZWlnaHQgPSB0aGlzLl9zdG9yZWRIZWlnaHRzW3Jvd0luZGV4XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZGVsdGEgPCAwKSB7XG4gICAgICAgIGRlbHRhID0gLWRlbHRhO1xuICAgICAgICB2YXIgaW52aXNpYmxlUm93SGVpZ2h0ID0gdGhpcy5fc3RvcmVkSGVpZ2h0c1tyb3dJbmRleF0gLSB2aXNpYmxlUm93SGVpZ2h0O1xuXG4gICAgICAgIHdoaWxlIChkZWx0YSA+IDAgJiYgcm93SW5kZXggPj0gMCkge1xuICAgICAgICAgIGlmIChkZWx0YSA8IGludmlzaWJsZVJvd0hlaWdodCkge1xuICAgICAgICAgICAgcG9zaXRpb24gLT0gZGVsdGE7XG4gICAgICAgICAgICBkZWx0YSA9IDA7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBvc2l0aW9uIC09IGludmlzaWJsZVJvd0hlaWdodDtcbiAgICAgICAgICAgIGRlbHRhIC09IGludmlzaWJsZVJvd0hlaWdodDtcbiAgICAgICAgICAgIHJvd0luZGV4LS07XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChyb3dJbmRleCA+PSAwKSB7XG4gICAgICAgICAgICB2YXIgY2hhbmdlID0gdGhpcy5fdXBkYXRlUm93SGVpZ2h0KHJvd0luZGV4KTtcbiAgICAgICAgICAgIGludmlzaWJsZVJvd0hlaWdodCA9IHRoaXMuX3N0b3JlZEhlaWdodHNbcm93SW5kZXhdO1xuICAgICAgICAgICAgcG9zaXRpb24gKz0gY2hhbmdlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgbWF4UG9zaXRpb24gPSB0aGlzLl9jb250ZW50SGVpZ2h0IC0gdGhpcy5fdmlld3BvcnRIZWlnaHQ7XG4gICAgICBwb3NpdGlvbiA9IGNsYW1wKHBvc2l0aW9uLCAwLCBtYXhQb3NpdGlvbik7XG4gICAgICB0aGlzLl9wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgICAgdmFyIGZpcnN0Um93SW5kZXggPSB0aGlzLl9yb3dPZmZzZXRzLmdyZWF0ZXN0TG93ZXJCb3VuZChwb3NpdGlvbik7XG4gICAgICBmaXJzdFJvd0luZGV4ID0gY2xhbXAoZmlyc3RSb3dJbmRleCwgMCwgTWF0aC5tYXgodGhpcy5fcm93Q291bnQgLSAxLCAwKSk7XG4gICAgICBmaXJzdFJvd1Bvc2l0aW9uID0gdGhpcy5fcm93T2Zmc2V0cy5zdW1VbnRpbChmaXJzdFJvd0luZGV4KTtcbiAgICAgIHZhciBmaXJzdFJvd09mZnNldCA9IGZpcnN0Um93UG9zaXRpb24gLSBwb3NpdGlvbjtcblxuICAgICAgdGhpcy5fdXBkYXRlSGVpZ2h0c0luVmlld3BvcnQoZmlyc3RSb3dJbmRleCwgZmlyc3RSb3dPZmZzZXQpO1xuICAgICAgdGhpcy5fdXBkYXRlSGVpZ2h0c0Fib3ZlVmlld3BvcnQoZmlyc3RSb3dJbmRleCk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGluZGV4OiBmaXJzdFJvd0luZGV4LFxuICAgICAgICBvZmZzZXQ6IGZpcnN0Um93T2Zmc2V0LFxuICAgICAgICBwb3NpdGlvbjogdGhpcy5fcG9zaXRpb24sXG4gICAgICAgIGNvbnRlbnRIZWlnaHQ6IHRoaXMuX2NvbnRlbnRIZWlnaHRcbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnX2dldFJvd0F0RW5kUG9zaXRpb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZ2V0Um93QXRFbmRQb3NpdGlvbiggLypudW1iZXIqL3Jvd0luZGV4KSAvKm51bWJlciove1xuICAgICAgLy8gV2UgbmVlZCB0byB1cGRhdGUgZW5vdWdoIHJvd3MgYWJvdmUgdGhlIHNlbGVjdGVkIG9uZSB0byBiZSBzdXJlIHRoYXQgd2hlblxuICAgICAgLy8gd2Ugc2Nyb2xsIHRvIHNlbGVjdGVkIHBvc2l0aW9uIGFsbCByb3dzIGJldHdlZW4gZmlyc3Qgc2hvd24gYW5kIHNlbGVjdGVkXG4gICAgICAvLyBvbmUgaGF2ZSBtb3N0IHJlY2VudCBoZWlnaHRzIGNvbXB1dGVkIGFuZCB3aWxsIG5vdCByZXNpemVcbiAgICAgIHRoaXMuX3VwZGF0ZVJvd0hlaWdodChyb3dJbmRleCk7XG4gICAgICB2YXIgY3VycmVudFJvd0luZGV4ID0gcm93SW5kZXg7XG4gICAgICB2YXIgdG9wID0gdGhpcy5fc3RvcmVkSGVpZ2h0c1tjdXJyZW50Um93SW5kZXhdO1xuICAgICAgd2hpbGUgKHRvcCA8IHRoaXMuX3ZpZXdwb3J0SGVpZ2h0ICYmIGN1cnJlbnRSb3dJbmRleCA+PSAwKSB7XG4gICAgICAgIGN1cnJlbnRSb3dJbmRleC0tO1xuICAgICAgICBpZiAoY3VycmVudFJvd0luZGV4ID49IDApIHtcbiAgICAgICAgICB0aGlzLl91cGRhdGVSb3dIZWlnaHQoY3VycmVudFJvd0luZGV4KTtcbiAgICAgICAgICB0b3AgKz0gdGhpcy5fc3RvcmVkSGVpZ2h0c1tjdXJyZW50Um93SW5kZXhdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB2YXIgcG9zaXRpb24gPSB0aGlzLl9yb3dPZmZzZXRzLnN1bVRvKHJvd0luZGV4KSAtIHRoaXMuX3ZpZXdwb3J0SGVpZ2h0O1xuICAgICAgaWYgKHBvc2l0aW9uIDwgMCkge1xuICAgICAgICBwb3NpdGlvbiA9IDA7XG4gICAgICB9XG4gICAgICByZXR1cm4gcG9zaXRpb247XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2Nyb2xsVG8nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzY3JvbGxUbyggLypudW1iZXIqL3Bvc2l0aW9uKSAvKm9iamVjdCove1xuICAgICAgaWYgKHRoaXMuX3Jvd0NvdW50ID09PSAwKSB7XG4gICAgICAgIHJldHVybiBOT19ST1dTX1NDUk9MTF9SRVNVTFQ7XG4gICAgICB9XG4gICAgICBpZiAocG9zaXRpb24gPD0gMCkge1xuICAgICAgICAvLyBJZiBwb3NpdGlvbiBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gMCBmaXJzdCByb3cgc2hvdWxkIGJlIGZ1bGx5IHZpc2libGVcbiAgICAgICAgLy8gb24gdG9wXG4gICAgICAgIHRoaXMuX3Bvc2l0aW9uID0gMDtcbiAgICAgICAgdGhpcy5fdXBkYXRlSGVpZ2h0c0luVmlld3BvcnQoMCwgMCk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpbmRleDogMCxcbiAgICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgICAgcG9zaXRpb246IHRoaXMuX3Bvc2l0aW9uLFxuICAgICAgICAgIGNvbnRlbnRIZWlnaHQ6IHRoaXMuX2NvbnRlbnRIZWlnaHRcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSBpZiAocG9zaXRpb24gPj0gdGhpcy5fY29udGVudEhlaWdodCAtIHRoaXMuX3ZpZXdwb3J0SGVpZ2h0KSB7XG4gICAgICAgIC8vIElmIHBvc2l0aW9uIGlzIGVxdWFsIHRvIG9yIGdyZWF0ZXIgdGhhbiBtYXggc2Nyb2xsIHZhbHVlLCB3ZSBuZWVkXG4gICAgICAgIC8vIHRvIG1ha2Ugc3VyZSB0byBoYXZlIGJvdHRvbSBib3JkZXIgb2YgbGFzdCByb3cgdmlzaWJsZS5cbiAgICAgICAgdmFyIHJvd0luZGV4ID0gdGhpcy5fcm93Q291bnQgLSAxO1xuICAgICAgICBwb3NpdGlvbiA9IHRoaXMuX2dldFJvd0F0RW5kUG9zaXRpb24ocm93SW5kZXgpO1xuICAgICAgfVxuICAgICAgdGhpcy5fcG9zaXRpb24gPSBwb3NpdGlvbjtcblxuICAgICAgdmFyIGZpcnN0Um93SW5kZXggPSB0aGlzLl9yb3dPZmZzZXRzLmdyZWF0ZXN0TG93ZXJCb3VuZChwb3NpdGlvbik7XG4gICAgICBmaXJzdFJvd0luZGV4ID0gY2xhbXAoZmlyc3RSb3dJbmRleCwgMCwgTWF0aC5tYXgodGhpcy5fcm93Q291bnQgLSAxLCAwKSk7XG4gICAgICB2YXIgZmlyc3RSb3dQb3NpdGlvbiA9IHRoaXMuX3Jvd09mZnNldHMuc3VtVW50aWwoZmlyc3RSb3dJbmRleCk7XG4gICAgICB2YXIgZmlyc3RSb3dPZmZzZXQgPSBmaXJzdFJvd1Bvc2l0aW9uIC0gcG9zaXRpb247XG5cbiAgICAgIHRoaXMuX3VwZGF0ZUhlaWdodHNJblZpZXdwb3J0KGZpcnN0Um93SW5kZXgsIGZpcnN0Um93T2Zmc2V0KTtcbiAgICAgIHRoaXMuX3VwZGF0ZUhlaWdodHNBYm92ZVZpZXdwb3J0KGZpcnN0Um93SW5kZXgpO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBpbmRleDogZmlyc3RSb3dJbmRleCxcbiAgICAgICAgb2Zmc2V0OiBmaXJzdFJvd09mZnNldCxcbiAgICAgICAgcG9zaXRpb246IHRoaXMuX3Bvc2l0aW9uLFxuICAgICAgICBjb250ZW50SGVpZ2h0OiB0aGlzLl9jb250ZW50SGVpZ2h0XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFsbG93cyB0byBzY3JvbGwgdG8gc2VsZWN0ZWQgcm93IHdpdGggc3BlY2lmaWVkIG9mZnNldC4gSXQgYWx3YXlzXG4gICAgICogYnJpbmdzIHRoYXQgcm93IHRvIHRvcCBvZiB2aWV3cG9ydCB3aXRoIHRoYXQgb2Zmc2V0XG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6ICdzY3JvbGxUb1JvdycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNjcm9sbFRvUm93KCAvKm51bWJlciovcm93SW5kZXgsIC8qbnVtYmVyKi9vZmZzZXQpIC8qb2JqZWN0Ki97XG4gICAgICByb3dJbmRleCA9IGNsYW1wKHJvd0luZGV4LCAwLCBNYXRoLm1heCh0aGlzLl9yb3dDb3VudCAtIDEsIDApKTtcbiAgICAgIG9mZnNldCA9IGNsYW1wKG9mZnNldCwgLXRoaXMuX3N0b3JlZEhlaWdodHNbcm93SW5kZXhdLCAwKTtcbiAgICAgIHZhciBmaXJzdFJvdyA9IHRoaXMuX3Jvd09mZnNldHMuc3VtVW50aWwocm93SW5kZXgpO1xuICAgICAgcmV0dXJuIHRoaXMuc2Nyb2xsVG8oZmlyc3RSb3cgLSBvZmZzZXQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFsbG93cyB0byBzY3JvbGwgdG8gc2VsZWN0ZWQgcm93IGJ5IGJyaW5naW5nIGl0IHRvIHZpZXdwb3J0IHdpdGggbWluaW1hbFxuICAgICAqIHNjcm9sbGluZy4gVGhpcyB0aGF0IGlmIHJvdyBpcyBmdWxseSB2aXNpYmxlLCBzY3JvbGwgd2lsbCBub3QgYmUgY2hhbmdlZC5cbiAgICAgKiBJZiB0b3AgYm9yZGVyIG9mIHJvdyBpcyBhYm92ZSB0b3Agb2Ygdmlld3BvcnQgaXQgd2lsbCBiZSBzY3JvbGxlZCB0byBiZVxuICAgICAqIGZ1bGx5IHZpc2libGUgb24gdGhlIHRvcCBvZiB2aWV3cG9ydC4gSWYgdGhlIGJvdHRvbSBib3JkZXIgb2Ygcm93IGlzXG4gICAgICogYmVsb3cgZW5kIG9mIHZpZXdwb3J0LCBpdCB3aWxsIGJlIHNjcm9sbGVkIHVwIHRvIGJlIGZ1bGx5IHZpc2libGUgb24gdGhlXG4gICAgICogYm90dG9tIG9mIHZpZXdwb3J0LlxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiAnc2Nyb2xsUm93SW50b1ZpZXcnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzY3JvbGxSb3dJbnRvVmlldyggLypudW1iZXIqL3Jvd0luZGV4KSAvKm9iamVjdCove1xuICAgICAgcm93SW5kZXggPSBjbGFtcChyb3dJbmRleCwgMCwgTWF0aC5tYXgodGhpcy5fcm93Q291bnQgLSAxLCAwKSk7XG4gICAgICB2YXIgcm93QmVnaW4gPSB0aGlzLl9yb3dPZmZzZXRzLnN1bVVudGlsKHJvd0luZGV4KTtcbiAgICAgIHZhciByb3dFbmQgPSByb3dCZWdpbiArIHRoaXMuX3N0b3JlZEhlaWdodHNbcm93SW5kZXhdO1xuICAgICAgaWYgKHJvd0JlZ2luIDwgdGhpcy5fcG9zaXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2Nyb2xsVG8ocm93QmVnaW4pO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLl9wb3NpdGlvbiArIHRoaXMuX3ZpZXdwb3J0SGVpZ2h0IDwgcm93RW5kKSB7XG4gICAgICAgIHZhciBwb3NpdGlvbiA9IHRoaXMuX2dldFJvd0F0RW5kUG9zaXRpb24ocm93SW5kZXgpO1xuICAgICAgICByZXR1cm4gdGhpcy5zY3JvbGxUbyhwb3NpdGlvbik7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5zY3JvbGxUbyh0aGlzLl9wb3NpdGlvbik7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEZpeGVkRGF0YVRhYmxlU2Nyb2xsSGVscGVyO1xufSkoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBGaXhlZERhdGFUYWJsZVNjcm9sbEhlbHBlcjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL0ZpeGVkRGF0YVRhYmxlU2Nyb2xsSGVscGVyLmpzXG4gKiogbW9kdWxlIGlkID0gNDcwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBQcmVmaXhJbnRlcnZhbFRyZWVcbiAqIFxuICogQHR5cGVjaGVja3NcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnLi9pbnZhcmlhbnQnKTtcblxudmFyIHBhcmVudCA9IGZ1bmN0aW9uIHBhcmVudChub2RlKSB7XG4gIHJldHVybiBNYXRoLmZsb29yKG5vZGUgLyAyKTtcbn07XG5cbnZhciBJbnQzMkFycmF5ID0gZ2xvYmFsLkludDMyQXJyYXkgfHwgZnVuY3Rpb24gKHNpemUpIHtcbiAgdmFyIHhzID0gW107XG4gIGZvciAodmFyIGkgPSBzaXplIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICB4c1tpXSA9IDA7XG4gIH1cbiAgcmV0dXJuIHhzO1xufTtcblxuLyoqXG4gKiBDb21wdXRlcyB0aGUgbmV4dCBwb3dlciBvZiAyIGFmdGVyIG9yIGVxdWFsIHRvIHguXG4gKi9cbmZ1bmN0aW9uIGNlaWxMb2cyKHgpIHtcbiAgdmFyIHkgPSAxO1xuICB3aGlsZSAoeSA8IHgpIHtcbiAgICB5ICo9IDI7XG4gIH1cbiAgcmV0dXJuIHk7XG59XG5cbi8qKlxuICogQSBwcmVmaXggaW50ZXJ2YWwgdHJlZSBzdG9yZXMgYW4gbnVtZXJpYyBhcnJheSBhbmQgdGhlIHBhcnRpYWwgc3VtcyBvZiB0aGF0XG4gKiBhcnJheS4gSXQgaXMgb3B0aW1pemVkIGZvciB1cGRhdGluZyB0aGUgdmFsdWVzIG9mIHRoZSBhcnJheSB3aXRob3V0XG4gKiByZWNvbXB1dGluZyBhbGwgb2YgdGhlIHBhcnRpYWwgc3Vtcy5cbiAqXG4gKiAgIC0gTyhsbiBuKSB1cGRhdGVcbiAqICAgLSBPKDEpIGxvb2t1cFxuICogICAtIE8obG4gbikgY29tcHV0ZSBhIHBhcnRpYWwgc3VtXG4gKiAgIC0gTyhuKSBzcGFjZVxuICpcbiAqIE5vdGUgdGhhdCB0aGUgc2VxdWVuY2Ugb2YgcGFydGlhbCBzdW1zIGlzIG9uZSBsb25nZXIgdGhhbiB0aGUgYXJyYXksIHNvIHRoYXRcbiAqIHRoZSBmaXJzdCBwYXJ0aWFsIHN1bSBpcyBhbHdheXMgMCwgYW5kIHRoZSBsYXN0IHBhcnRpYWwgc3VtIGlzIHRoZSBzdW0gb2YgdGhlXG4gKiBlbnRpcmUgYXJyYXkuXG4gKi9cblxudmFyIFByZWZpeEludGVydmFsVHJlZSA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFByZWZpeEludGVydmFsVHJlZSh4cykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQcmVmaXhJbnRlcnZhbFRyZWUpO1xuXG4gICAgdGhpcy5fc2l6ZSA9IHhzLmxlbmd0aDtcbiAgICB0aGlzLl9oYWxmID0gY2VpbExvZzIodGhpcy5fc2l6ZSk7XG4gICAgdGhpcy5faGVhcCA9IG5ldyBJbnQzMkFycmF5KDIgKiB0aGlzLl9oYWxmKTtcblxuICAgIHZhciBpO1xuICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLl9zaXplOyArK2kpIHtcbiAgICAgIHRoaXMuX2hlYXBbdGhpcy5faGFsZiArIGldID0geHNbaV07XG4gICAgfVxuXG4gICAgZm9yIChpID0gdGhpcy5faGFsZiAtIDE7IGkgPiAwOyAtLWkpIHtcbiAgICAgIHRoaXMuX2hlYXBbaV0gPSB0aGlzLl9oZWFwWzIgKiBpXSArIHRoaXMuX2hlYXBbMiAqIGkgKyAxXTtcbiAgICB9XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUHJlZml4SW50ZXJ2YWxUcmVlLCBbe1xuICAgIGtleTogJ3NldCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldChpbmRleCwgdmFsdWUpIHtcbiAgICAgIGludmFyaWFudCgwIDw9IGluZGV4ICYmIGluZGV4IDwgdGhpcy5fc2l6ZSwgJ0luZGV4IG91dCBvZiByYW5nZSAlcycsIGluZGV4KTtcblxuICAgICAgdmFyIG5vZGUgPSB0aGlzLl9oYWxmICsgaW5kZXg7XG4gICAgICB0aGlzLl9oZWFwW25vZGVdID0gdmFsdWU7XG5cbiAgICAgIG5vZGUgPSBwYXJlbnQobm9kZSk7XG4gICAgICBmb3IgKDsgbm9kZSAhPT0gMDsgbm9kZSA9IHBhcmVudChub2RlKSkge1xuICAgICAgICB0aGlzLl9oZWFwW25vZGVdID0gdGhpcy5faGVhcFsyICogbm9kZV0gKyB0aGlzLl9oZWFwWzIgKiBub2RlICsgMV07XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0KGluZGV4KSB7XG4gICAgICBpbnZhcmlhbnQoMCA8PSBpbmRleCAmJiBpbmRleCA8IHRoaXMuX3NpemUsICdJbmRleCBvdXQgb2YgcmFuZ2UgJXMnLCBpbmRleCk7XG5cbiAgICAgIHZhciBub2RlID0gdGhpcy5faGFsZiArIGluZGV4O1xuICAgICAgcmV0dXJuIHRoaXMuX2hlYXBbbm9kZV07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0U2l6ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNpemUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBzdW0gZ2V0KDApICsgZ2V0KDEpICsgLi4uICsgZ2V0KGVuZCAtIDEpLlxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiAnc3VtVW50aWwnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdW1VbnRpbChlbmQpIHtcbiAgICAgIGludmFyaWFudCgwIDw9IGVuZCAmJiBlbmQgPCB0aGlzLl9zaXplICsgMSwgJ0luZGV4IG91dCBvZiByYW5nZSAlcycsIGVuZCk7XG5cbiAgICAgIGlmIChlbmQgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG5cbiAgICAgIHZhciBub2RlID0gdGhpcy5faGFsZiArIGVuZCAtIDE7XG4gICAgICB2YXIgc3VtID0gdGhpcy5faGVhcFtub2RlXTtcbiAgICAgIGZvciAoOyBub2RlICE9PSAxOyBub2RlID0gcGFyZW50KG5vZGUpKSB7XG4gICAgICAgIGlmIChub2RlICUgMiA9PT0gMSkge1xuICAgICAgICAgIHN1bSArPSB0aGlzLl9oZWFwW25vZGUgLSAxXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3VtO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHN1bSBnZXQoMCkgKyBnZXQoMSkgKyAuLi4gKyBnZXQoaW5jbHVzaXZlRW5kKS5cbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogJ3N1bVRvJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3VtVG8oaW5jbHVzaXZlRW5kKSB7XG4gICAgICBpbnZhcmlhbnQoMCA8PSBpbmNsdXNpdmVFbmQgJiYgaW5jbHVzaXZlRW5kIDwgdGhpcy5fc2l6ZSwgJ0luZGV4IG91dCBvZiByYW5nZSAlcycsIGluY2x1c2l2ZUVuZCk7XG4gICAgICByZXR1cm4gdGhpcy5zdW1VbnRpbChpbmNsdXNpdmVFbmQgKyAxKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBzdW0gZ2V0KGJlZ2luKSArIGdldChiZWdpbiArIDEpICsgLi4uICsgZ2V0KGVuZCAtIDEpLlxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiAnc3VtJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3VtKGJlZ2luLCBlbmQpIHtcbiAgICAgIGludmFyaWFudChiZWdpbiA8PSBlbmQsICdCZWdpbiBtdXN0IHByZWNlZGUgZW5kJyk7XG4gICAgICByZXR1cm4gdGhpcy5zdW1VbnRpbChlbmQpIC0gdGhpcy5zdW1VbnRpbChiZWdpbik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgc21hbGxlc3QgaSBzdWNoIHRoYXQgMCA8PSBpIDw9IHNpemUgYW5kIHN1bVVudGlsKGkpIDw9IHQsIG9yXG4gICAgICogLTEgaWYgbm8gc3VjaCBpIGV4aXN0cy5cbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogJ2dyZWF0ZXN0TG93ZXJCb3VuZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdyZWF0ZXN0TG93ZXJCb3VuZCh0KSB7XG4gICAgICBpZiAodCA8IDApIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuXG4gICAgICB2YXIgbm9kZSA9IDE7XG4gICAgICBpZiAodGhpcy5faGVhcFtub2RlXSA8PSB0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zaXplO1xuICAgICAgfVxuXG4gICAgICB3aGlsZSAobm9kZSA8IHRoaXMuX2hhbGYpIHtcbiAgICAgICAgdmFyIGxlZnRTdW0gPSB0aGlzLl9oZWFwWzIgKiBub2RlXTtcbiAgICAgICAgaWYgKHQgPCBsZWZ0U3VtKSB7XG4gICAgICAgICAgbm9kZSA9IDIgKiBub2RlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5vZGUgPSAyICogbm9kZSArIDE7XG4gICAgICAgICAgdCAtPSBsZWZ0U3VtO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBub2RlIC0gdGhpcy5faGFsZjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBzbWFsbGVzdCBpIHN1Y2ggdGhhdCAwIDw9IGkgPD0gc2l6ZSBhbmQgc3VtVW50aWwoaSkgPCB0LCBvclxuICAgICAqIC0xIGlmIG5vIHN1Y2ggaSBleGlzdHMuXG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6ICdncmVhdGVzdFN0cmljdExvd2VyQm91bmQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBncmVhdGVzdFN0cmljdExvd2VyQm91bmQodCkge1xuICAgICAgaWYgKHQgPD0gMCkge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG5cbiAgICAgIHZhciBub2RlID0gMTtcbiAgICAgIGlmICh0aGlzLl9oZWFwW25vZGVdIDwgdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgICAgIH1cblxuICAgICAgd2hpbGUgKG5vZGUgPCB0aGlzLl9oYWxmKSB7XG4gICAgICAgIHZhciBsZWZ0U3VtID0gdGhpcy5faGVhcFsyICogbm9kZV07XG4gICAgICAgIGlmICh0IDw9IGxlZnRTdW0pIHtcbiAgICAgICAgICBub2RlID0gMiAqIG5vZGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm9kZSA9IDIgKiBub2RlICsgMTtcbiAgICAgICAgICB0IC09IGxlZnRTdW07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5vZGUgLSB0aGlzLl9oYWxmO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHNtYWxsZXN0IGkgc3VjaCB0aGF0IDAgPD0gaSA8PSBzaXplIGFuZCB0IDw9IHN1bVVudGlsKGkpLCBvclxuICAgICAqIHNpemUgKyAxIGlmIG5vIHN1Y2ggaSBleGlzdHMuXG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6ICdsZWFzdFVwcGVyQm91bmQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsZWFzdFVwcGVyQm91bmQodCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ3JlYXRlc3RTdHJpY3RMb3dlckJvdW5kKHQpICsgMTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBzbWFsbGVzdCBpIHN1Y2ggdGhhdCAwIDw9IGkgPD0gc2l6ZSBhbmQgdCA8IHN1bVVudGlsKGkpLCBvclxuICAgICAqIHNpemUgKyAxIGlmIG5vIHN1Y2ggaSBleGlzdHMuXG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6ICdsZWFzdFN0cmljdFVwcGVyQm91bmQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsZWFzdFN0cmljdFVwcGVyQm91bmQodCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ3JlYXRlc3RMb3dlckJvdW5kKHQpICsgMTtcbiAgICB9XG4gIH1dLCBbe1xuICAgIGtleTogJ3VuaWZvcm0nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1bmlmb3JtKHNpemUsIGluaXRpYWxWYWx1ZSkge1xuICAgICAgdmFyIHhzID0gW107XG4gICAgICBmb3IgKHZhciBpID0gc2l6ZSAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHhzW2ldID0gaW5pdGlhbFZhbHVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IFByZWZpeEludGVydmFsVHJlZSh4cyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZW1wdHknLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBlbXB0eShzaXplKSB7XG4gICAgICByZXR1cm4gUHJlZml4SW50ZXJ2YWxUcmVlLnVuaWZvcm0oc2l6ZSwgMCk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFByZWZpeEludGVydmFsVHJlZTtcbn0pKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gUHJlZml4SW50ZXJ2YWxUcmVlO1xuXG4vKipcbiAqIE51bWJlciBvZiBlbGVtZW50cyBpbiB0aGUgYXJyYXlcbiAqL1xuXG4vKipcbiAqIEhhbGYgdGhlIHNpemUgb2YgdGhlIGhlYXAuIEl0IGlzIGFsc28gdGhlIG51bWJlciBvZiBub24tbGVhZiBub2RlcywgYW5kIHRoZVxuICogaW5kZXggb2YgdGhlIGZpcnN0IGVsZW1lbnQgaW4gdGhlIGhlYXAuIEFsd2F5cyBhIHBvd2VyIG9mIDIuXG4gKi9cblxuLyoqXG4gKiBCaW5hcnkgaGVhcFxuICovXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9QcmVmaXhJbnRlcnZhbFRyZWUuanNcbiAqKiBtb2R1bGUgaWQgPSA0NzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIEZpeGVkRGF0YVRhYmxlV2lkdGhIZWxwZXJcbiAqIEB0eXBlY2hlY2tzXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCcuL1JlYWN0Jyk7XG5cbmZ1bmN0aW9uIGdldFRvdGFsV2lkdGgoIC8qYXJyYXkqL2NvbHVtbnMpIC8qbnVtYmVyKi97XG4gIHZhciB0b3RhbFdpZHRoID0gMDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb2x1bW5zLmxlbmd0aDsgKytpKSB7XG4gICAgdG90YWxXaWR0aCArPSBjb2x1bW5zW2ldLnByb3BzLndpZHRoO1xuICB9XG4gIHJldHVybiB0b3RhbFdpZHRoO1xufVxuXG5mdW5jdGlvbiBnZXRUb3RhbEZsZXhHcm93KCAvKmFycmF5Ki9jb2x1bW5zKSAvKm51bWJlciove1xuICB2YXIgdG90YWxGbGV4R3JvdyA9IDA7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY29sdW1ucy5sZW5ndGg7ICsraSkge1xuICAgIHRvdGFsRmxleEdyb3cgKz0gY29sdW1uc1tpXS5wcm9wcy5mbGV4R3JvdyB8fCAwO1xuICB9XG4gIHJldHVybiB0b3RhbEZsZXhHcm93O1xufVxuXG5mdW5jdGlvbiBkaXN0cmlidXRlRmxleFdpZHRoKFxuLyphcnJheSovY29sdW1ucyxcbi8qbnVtYmVyKi9mbGV4V2lkdGgpIC8qb2JqZWN0Ki97XG4gIGlmIChmbGV4V2lkdGggPD0gMCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb2x1bW5zOiBjb2x1bW5zLFxuICAgICAgd2lkdGg6IGdldFRvdGFsV2lkdGgoY29sdW1ucylcbiAgICB9O1xuICB9XG4gIHZhciByZW1haW5pbmdGbGV4R3JvdyA9IGdldFRvdGFsRmxleEdyb3coY29sdW1ucyk7XG4gIHZhciByZW1haW5pbmdGbGV4V2lkdGggPSBmbGV4V2lkdGg7XG4gIHZhciBuZXdDb2x1bW5zID0gW107XG4gIHZhciB0b3RhbFdpZHRoID0gMDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb2x1bW5zLmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIGNvbHVtbiA9IGNvbHVtbnNbaV07XG4gICAgaWYgKCFjb2x1bW4ucHJvcHMuZmxleEdyb3cpIHtcbiAgICAgIHRvdGFsV2lkdGggKz0gY29sdW1uLnByb3BzLndpZHRoO1xuICAgICAgbmV3Q29sdW1ucy5wdXNoKGNvbHVtbik7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgdmFyIGNvbHVtbkZsZXhXaWR0aCA9IE1hdGguZmxvb3IoY29sdW1uLnByb3BzLmZsZXhHcm93IC8gcmVtYWluaW5nRmxleEdyb3cgKiByZW1haW5pbmdGbGV4V2lkdGgpO1xuICAgIHZhciBuZXdDb2x1bW5XaWR0aCA9IE1hdGguZmxvb3IoY29sdW1uLnByb3BzLndpZHRoICsgY29sdW1uRmxleFdpZHRoKTtcbiAgICB0b3RhbFdpZHRoICs9IG5ld0NvbHVtbldpZHRoO1xuXG4gICAgcmVtYWluaW5nRmxleEdyb3cgLT0gY29sdW1uLnByb3BzLmZsZXhHcm93O1xuICAgIHJlbWFpbmluZ0ZsZXhXaWR0aCAtPSBjb2x1bW5GbGV4V2lkdGg7XG5cbiAgICBuZXdDb2x1bW5zLnB1c2goUmVhY3QuY2xvbmVFbGVtZW50KGNvbHVtbiwgeyB3aWR0aDogbmV3Q29sdW1uV2lkdGggfSkpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjb2x1bW5zOiBuZXdDb2x1bW5zLFxuICAgIHdpZHRoOiB0b3RhbFdpZHRoXG4gIH07XG59XG5cbmZ1bmN0aW9uIGFkanVzdENvbHVtbkdyb3VwV2lkdGhzKFxuLyphcnJheSovY29sdW1uR3JvdXBzLFxuLypudW1iZXIqL2V4cGVjdGVkV2lkdGgpIC8qb2JqZWN0Ki97XG4gIHZhciBhbGxDb2x1bW5zID0gW107XG4gIHZhciBpO1xuICBmb3IgKGkgPSAwOyBpIDwgY29sdW1uR3JvdXBzLmxlbmd0aDsgKytpKSB7XG4gICAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaChjb2x1bW5Hcm91cHNbaV0ucHJvcHMuY2hpbGRyZW4sIGZ1bmN0aW9uIChjb2x1bW4pIHtcbiAgICAgIGFsbENvbHVtbnMucHVzaChjb2x1bW4pO1xuICAgIH0pO1xuICB9XG4gIHZhciBjb2x1bW5zV2lkdGggPSBnZXRUb3RhbFdpZHRoKGFsbENvbHVtbnMpO1xuICB2YXIgcmVtYWluaW5nRmxleEdyb3cgPSBnZXRUb3RhbEZsZXhHcm93KGFsbENvbHVtbnMpO1xuICB2YXIgcmVtYWluaW5nRmxleFdpZHRoID0gTWF0aC5tYXgoZXhwZWN0ZWRXaWR0aCAtIGNvbHVtbnNXaWR0aCwgMCk7XG5cbiAgdmFyIG5ld0FsbENvbHVtbnMgPSBbXTtcbiAgdmFyIG5ld0NvbHVtbkdyb3VwcyA9IFtdO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBjb2x1bW5Hcm91cHMubGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgY29sdW1uR3JvdXAgPSBjb2x1bW5Hcm91cHNbaV07XG4gICAgdmFyIGN1cnJlbnRDb2x1bW5zID0gW107XG5cbiAgICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKGNvbHVtbkdyb3VwLnByb3BzLmNoaWxkcmVuLCBmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICBjdXJyZW50Q29sdW1ucy5wdXNoKGNvbHVtbik7XG4gICAgfSk7XG5cbiAgICB2YXIgY29sdW1uR3JvdXBGbGV4R3JvdyA9IGdldFRvdGFsRmxleEdyb3coY3VycmVudENvbHVtbnMpO1xuICAgIHZhciBjb2x1bW5Hcm91cEZsZXhXaWR0aCA9IE1hdGguZmxvb3IoY29sdW1uR3JvdXBGbGV4R3JvdyAvIHJlbWFpbmluZ0ZsZXhHcm93ICogcmVtYWluaW5nRmxleFdpZHRoKTtcblxuICAgIHZhciBuZXdDb2x1bW5TZXR0aW5ncyA9IGRpc3RyaWJ1dGVGbGV4V2lkdGgoY3VycmVudENvbHVtbnMsIGNvbHVtbkdyb3VwRmxleFdpZHRoKTtcblxuICAgIHJlbWFpbmluZ0ZsZXhHcm93IC09IGNvbHVtbkdyb3VwRmxleEdyb3c7XG4gICAgcmVtYWluaW5nRmxleFdpZHRoIC09IGNvbHVtbkdyb3VwRmxleFdpZHRoO1xuXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBuZXdDb2x1bW5TZXR0aW5ncy5jb2x1bW5zLmxlbmd0aDsgKytqKSB7XG4gICAgICBuZXdBbGxDb2x1bW5zLnB1c2gobmV3Q29sdW1uU2V0dGluZ3MuY29sdW1uc1tqXSk7XG4gICAgfVxuXG4gICAgbmV3Q29sdW1uR3JvdXBzLnB1c2goUmVhY3QuY2xvbmVFbGVtZW50KGNvbHVtbkdyb3VwLCB7IHdpZHRoOiBuZXdDb2x1bW5TZXR0aW5ncy53aWR0aCB9KSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNvbHVtbnM6IG5ld0FsbENvbHVtbnMsXG4gICAgY29sdW1uR3JvdXBzOiBuZXdDb2x1bW5Hcm91cHNcbiAgfTtcbn1cblxuZnVuY3Rpb24gYWRqdXN0Q29sdW1uV2lkdGhzKFxuLyphcnJheSovY29sdW1ucyxcbi8qbnVtYmVyKi9leHBlY3RlZFdpZHRoKSAvKmFycmF5Ki97XG4gIHZhciBjb2x1bW5zV2lkdGggPSBnZXRUb3RhbFdpZHRoKGNvbHVtbnMpO1xuICBpZiAoY29sdW1uc1dpZHRoIDwgZXhwZWN0ZWRXaWR0aCkge1xuICAgIHJldHVybiBkaXN0cmlidXRlRmxleFdpZHRoKGNvbHVtbnMsIGV4cGVjdGVkV2lkdGggLSBjb2x1bW5zV2lkdGgpLmNvbHVtbnM7XG4gIH1cbiAgcmV0dXJuIGNvbHVtbnM7XG59XG5cbnZhciBGaXhlZERhdGFUYWJsZVdpZHRoSGVscGVyID0ge1xuICBnZXRUb3RhbFdpZHRoOiBnZXRUb3RhbFdpZHRoLFxuICBnZXRUb3RhbEZsZXhHcm93OiBnZXRUb3RhbEZsZXhHcm93LFxuICBkaXN0cmlidXRlRmxleFdpZHRoOiBkaXN0cmlidXRlRmxleFdpZHRoLFxuICBhZGp1c3RDb2x1bW5XaWR0aHM6IGFkanVzdENvbHVtbldpZHRocyxcbiAgYWRqdXN0Q29sdW1uR3JvdXBXaWR0aHM6IGFkanVzdENvbHVtbkdyb3VwV2lkdGhzXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZpeGVkRGF0YVRhYmxlV2lkdGhIZWxwZXI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9GaXhlZERhdGFUYWJsZVdpZHRoSGVscGVyLmpzXG4gKiogbW9kdWxlIGlkID0gNDcyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBkZWJvdW5jZUNvcmVcbiAqIEB0eXBlY2hlY2tzXG4gKi9cblxuLyoqXG4gKiBJbnZva2VzIHRoZSBnaXZlbiBjYWxsYmFjayBhZnRlciBhIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGhhdmVcbiAqIGVsYXBzZWQsIGlnbm9yaW5nIHN1YnNlcXVlbnQgY2FsbHMuXG4gKlxuICogRm9yIGV4YW1wbGUsIGlmIHlvdSB3YW50ZWQgdG8gdXBkYXRlIGEgcHJldmlldyBhZnRlciB0aGUgdXNlciBzdG9wcyB0eXBpbmdcbiAqIHlvdSBjb3VsZCBkbyB0aGUgZm9sbG93aW5nOlxuICpcbiAqICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGRlYm91bmNlKHRoaXMudXBkYXRlUHJldmlldywgMjUwKSwgZmFsc2UpO1xuICpcbiAqIFRoZSByZXR1cm5lZCBmdW5jdGlvbiBoYXMgYSByZXNldCBtZXRob2Qgd2hpY2ggY2FuIGJlIGNhbGxlZCB0byBjYW5jZWwgYVxuICogcGVuZGluZyBpbnZvY2F0aW9uLlxuICpcbiAqICAgdmFyIGRlYm91bmNlZFVwZGF0ZVByZXZpZXcgPSBkZWJvdW5jZSh0aGlzLnVwZGF0ZVByZXZpZXcsIDI1MCk7XG4gKiAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBkZWJvdW5jZWRVcGRhdGVQcmV2aWV3LCBmYWxzZSk7XG4gKlxuICogICAvLyBsYXRlciwgdG8gY2FuY2VsIHBlbmRpbmcgY2FsbHNcbiAqICAgZGVib3VuY2VkVXBkYXRlUHJldmlldy5yZXNldCgpO1xuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZ1bmMgLSB0aGUgZnVuY3Rpb24gdG8gZGVib3VuY2VcbiAqIEBwYXJhbSB7bnVtYmVyfSB3YWl0IC0gaG93IGxvbmcgdG8gd2FpdCBpbiBtaWxsaXNlY29uZHNcbiAqIEBwYXJhbSB7Kn0gY29udGV4dCAtIG9wdGlvbmFsIGNvbnRleHQgdG8gaW52b2tlIHRoZSBmdW5jdGlvbiBpblxuICogQHBhcmFtIHs/ZnVuY3Rpb259IHNldFRpbWVvdXRGdW5jIC0gYW4gaW1wbGVtZW50YXRpb24gb2Ygc2V0VGltZW91dFxuICogIGlmIG5vdGhpbmcgaXMgcGFzc2VkIGluIHRoZSBkZWZhdWx0IHNldFRpbWVvdXQgZnVuY3Rpb24gaXMgdXNlZFxuICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjbGVhclRpbWVvdXRGdW5jIC0gYW4gaW1wbGVtZW50YXRpb24gb2YgY2xlYXJUaW1lb3V0XG4gKiAgaWYgbm90aGluZyBpcyBwYXNzZWQgaW4gdGhlIGRlZmF1bHQgY2xlYXJUaW1lb3V0IGZ1bmN0aW9uIGlzIHVzZWRcbiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIGNvbnRleHQsIHNldFRpbWVvdXRGdW5jLCBjbGVhclRpbWVvdXRGdW5jKSB7XG4gIHNldFRpbWVvdXRGdW5jID0gc2V0VGltZW91dEZ1bmMgfHwgc2V0VGltZW91dDtcbiAgY2xlYXJUaW1lb3V0RnVuYyA9IGNsZWFyVGltZW91dEZ1bmMgfHwgY2xlYXJUaW1lb3V0O1xuICB2YXIgdGltZW91dDtcblxuICBmdW5jdGlvbiBkZWJvdW5jZXIoKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgZGVib3VuY2VyLnJlc2V0KCk7XG5cbiAgICB2YXIgY2FsbGJhY2sgPSBmdW5jdGlvbiBjYWxsYmFjaygpIHtcbiAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgfTtcbiAgICBjYWxsYmFjay5fX1NNbWV0YSA9IGZ1bmMuX19TTW1ldGE7XG4gICAgdGltZW91dCA9IHNldFRpbWVvdXRGdW5jKGNhbGxiYWNrLCB3YWl0KTtcbiAgfVxuXG4gIGRlYm91bmNlci5yZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICBjbGVhclRpbWVvdXRGdW5jKHRpbWVvdXQpO1xuICB9O1xuXG4gIHJldHVybiBkZWJvdW5jZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGVib3VuY2U7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9kZWJvdW5jZUNvcmUuanNcbiAqKiBtb2R1bGUgaWQgPSA0NzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIHNoYWxsb3dFcXVhbFxuICogQHR5cGVjaGVja3NcbiAqIFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBQZXJmb3JtcyBlcXVhbGl0eSBieSBpdGVyYXRpbmcgdGhyb3VnaCBrZXlzIG9uIGFuIG9iamVjdCBhbmQgcmV0dXJuaW5nIGZhbHNlXG4gKiB3aGVuIGFueSBrZXkgaGFzIHZhbHVlcyB3aGljaCBhcmUgbm90IHN0cmljdGx5IGVxdWFsIGJldHdlZW4gdGhlIGFyZ3VtZW50cy5cbiAqIFJldHVybnMgdHJ1ZSB3aGVuIHRoZSB2YWx1ZXMgb2YgYWxsIGtleXMgYXJlIHN0cmljdGx5IGVxdWFsLlxuICovXG5mdW5jdGlvbiBzaGFsbG93RXF1YWwob2JqQSwgb2JqQikge1xuICBpZiAob2JqQSA9PT0gb2JqQikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBvYmpBICE9PSAnb2JqZWN0JyB8fCBvYmpBID09PSBudWxsIHx8IHR5cGVvZiBvYmpCICE9PSAnb2JqZWN0JyB8fCBvYmpCID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGtleXNBID0gT2JqZWN0LmtleXMob2JqQSk7XG4gIHZhciBrZXlzQiA9IE9iamVjdC5rZXlzKG9iakIpO1xuXG4gIGlmIChrZXlzQS5sZW5ndGggIT09IGtleXNCLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIFRlc3QgZm9yIEEncyBrZXlzIGRpZmZlcmVudCBmcm9tIEIuXG4gIHZhciBiSGFzT3duUHJvcGVydHkgPSBoYXNPd25Qcm9wZXJ0eS5iaW5kKG9iakIpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXNBLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKCFiSGFzT3duUHJvcGVydHkoa2V5c0FbaV0pIHx8IG9iakFba2V5c0FbaV1dICE9PSBvYmpCW2tleXNBW2ldXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNoYWxsb3dFcXVhbDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL3NoYWxsb3dFcXVhbC5qc1xuICoqIG1vZHVsZSBpZCA9IDQ3NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgRml4ZWREYXRhVGFibGVDb2x1bW5OZXcucmVhY3RcbiAqIEB0eXBlY2hlY2tzXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCcuL1JlYWN0Jyk7XG5cbnZhciBQcm9wVHlwZXMgPSBSZWFjdC5Qcm9wVHlwZXM7XG5cbi8qKlxuICogQ29tcG9uZW50IHRoYXQgZGVmaW5lcyB0aGUgYXR0cmlidXRlcyBvZiB0YWJsZSBjb2x1bW4uXG4gKi9cbnZhciBGaXhlZERhdGFUYWJsZUNvbHVtbiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdGaXhlZERhdGFUYWJsZUNvbHVtbicsXG5cbiAgc3RhdGljczoge1xuICAgIF9fVGFibGVDb2x1bW5fXzogdHJ1ZVxuICB9LFxuXG4gIHByb3BUeXBlczoge1xuICAgIC8qKlxuICAgICAqIFRoZSBob3Jpem9udGFsIGFsaWdubWVudCBvZiB0aGUgdGFibGUgY2VsbCBjb250ZW50LlxuICAgICAqL1xuICAgIGFsaWduOiBQcm9wVHlwZXMub25lT2YoWydsZWZ0JywgJ2NlbnRlcicsICdyaWdodCddKSxcblxuICAgIC8qKlxuICAgICAqIENvbnRyb2xzIGlmIHRoZSBjb2x1bW4gaXMgZml4ZWQgd2hlbiBzY3JvbGxpbmcgaW4gdGhlIFggYXhpcy5cbiAgICAgKi9cbiAgICBmaXhlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgaGVhZGVyIGNlbGwgZm9yIHRoaXMgY29sdW1uLlxuICAgICAqIFRoaXMgY2FuIGVpdGhlciBiZSBhIHN0cmluZyBhIFJlYWN0IGVsZW1lbnQsIG9yIGEgZnVuY3Rpb24gdGhhdCBnZW5lcmF0ZXNcbiAgICAgKiBhIFJlYWN0IEVsZW1lbnQuIFBhc3NpbmcgaW4gYSBzdHJpbmcgd2lsbCByZW5kZXIgYSBkZWZhdWx0IGhlYWRlciBjZWxsXG4gICAgICogd2l0aCB0aGF0IHN0cmluZy4gQnkgZGVmYXVsdCwgdGhlIFJlYWN0IGVsZW1lbnQgcGFzc2VkIGluIGNhbiBleHBlY3QgdG9cbiAgICAgKiByZWNlaXZlIHRoZSBmb2xsb3dpbmcgcHJvcHM6XG4gICAgICpcbiAgICAgKiBgYGBcbiAgICAgKiBwcm9wczoge1xuICAgICAqICAgY29sdW1uS2V5OiBzdHJpbmcgLy8gKG9mIHRoZSBjb2x1bW4sIGlmIGdpdmVuKVxuICAgICAqICAgaGVpZ2h0OiBudW1iZXIgLy8gKHN1cHBsaWVkIGZyb20gdGhlIFRhYmxlIG9yIHJvd0hlaWdodEdldHRlcilcbiAgICAgKiAgIHdpZHRoOiBudW1iZXIgLy8gKHN1cHBsaWVkIGZyb20gdGhlIENvbHVtbilcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBCZWNhdXNlIHlvdSBhcmUgcGFzc2luZyBpbiB5b3VyIG93biBSZWFjdCBlbGVtZW50LCB5b3UgY2FuIGZlZWwgZnJlZSB0b1xuICAgICAqIHBhc3MgaW4gd2hhdGV2ZXIgcHJvcHMgeW91IG1heSB3YW50IG9yIG5lZWQuXG4gICAgICpcbiAgICAgKiBJZiB5b3UgcGFzcyBpbiBhIGZ1bmN0aW9uLCB5b3Ugd2lsbCByZWNlaXZlIHRoZSBzYW1lIHByb3BzIG9iamVjdCBhcyB0aGVcbiAgICAgKiBmaXJzdCBhcmd1bWVudC5cbiAgICAgKi9cbiAgICBoZWFkZXI6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ub2RlLCBQcm9wVHlwZXMuZnVuY10pLFxuXG4gICAgLyoqXG4gICAgICogVGhpcyBpcyB0aGUgYm9keSBjZWxsIHRoYXQgd2lsbCBiZSBjbG9uZWQgZm9yIHRoaXMgY29sdW1uLlxuICAgICAqIFRoaXMgY2FuIGVpdGhlciBiZSBhIHN0cmluZyBhIFJlYWN0IGVsZW1lbnQsIG9yIGEgZnVuY3Rpb24gdGhhdCBnZW5lcmF0ZXNcbiAgICAgKiBhIFJlYWN0IEVsZW1lbnQuIFBhc3NpbmcgaW4gYSBzdHJpbmcgd2lsbCByZW5kZXIgYSBkZWZhdWx0IGhlYWRlciBjZWxsXG4gICAgICogd2l0aCB0aGF0IHN0cmluZy4gQnkgZGVmYXVsdCwgdGhlIFJlYWN0IGVsZW1lbnQgcGFzc2VkIGluIGNhbiBleHBlY3QgdG9cbiAgICAgKiByZWNlaXZlIHRoZSBmb2xsb3dpbmcgcHJvcHM6XG4gICAgICpcbiAgICAgKiBgYGBcbiAgICAgKiBwcm9wczoge1xuICAgICAqICAgcm93SW5kZXg7IG51bWJlciAvLyAodGhlIHJvdyBpbmRleCBvZiB0aGUgY2VsbClcbiAgICAgKiAgIGNvbHVtbktleTogc3RyaW5nIC8vIChvZiB0aGUgY29sdW1uLCBpZiBnaXZlbilcbiAgICAgKiAgIGhlaWdodDogbnVtYmVyIC8vIChzdXBwbGllZCBmcm9tIHRoZSBUYWJsZSBvciByb3dIZWlnaHRHZXR0ZXIpXG4gICAgICogICB3aWR0aDogbnVtYmVyIC8vIChzdXBwbGllZCBmcm9tIHRoZSBDb2x1bW4pXG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogQmVjYXVzZSB5b3UgYXJlIHBhc3NpbmcgaW4geW91ciBvd24gUmVhY3QgZWxlbWVudCwgeW91IGNhbiBmZWVsIGZyZWUgdG9cbiAgICAgKiBwYXNzIGluIHdoYXRldmVyIHByb3BzIHlvdSBtYXkgd2FudCBvciBuZWVkLlxuICAgICAqXG4gICAgICogSWYgeW91IHBhc3MgaW4gYSBmdW5jdGlvbiwgeW91IHdpbGwgcmVjZWl2ZSB0aGUgc2FtZSBwcm9wcyBvYmplY3QgYXMgdGhlXG4gICAgICogZmlyc3QgYXJndW1lbnQuXG4gICAgICovXG4gICAgY2VsbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm5vZGUsIFByb3BUeXBlcy5mdW5jXSksXG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGlzIHRoZSBmb290ZXIgY2VsbCBmb3IgdGhpcyBjb2x1bW4uXG4gICAgICogVGhpcyBjYW4gZWl0aGVyIGJlIGEgc3RyaW5nIGEgUmVhY3QgZWxlbWVudCwgb3IgYSBmdW5jdGlvbiB0aGF0IGdlbmVyYXRlc1xuICAgICAqIGEgUmVhY3QgRWxlbWVudC4gUGFzc2luZyBpbiBhIHN0cmluZyB3aWxsIHJlbmRlciBhIGRlZmF1bHQgaGVhZGVyIGNlbGxcbiAgICAgKiB3aXRoIHRoYXQgc3RyaW5nLiBCeSBkZWZhdWx0LCB0aGUgUmVhY3QgZWxlbWVudCBwYXNzZWQgaW4gY2FuIGV4cGVjdCB0b1xuICAgICAqIHJlY2VpdmUgdGhlIGZvbGxvd2luZyBwcm9wczpcbiAgICAgKlxuICAgICAqIGBgYFxuICAgICAqIHByb3BzOiB7XG4gICAgICogICBjb2x1bW5LZXk6IHN0cmluZyAvLyAob2YgdGhlIGNvbHVtbiwgaWYgZ2l2ZW4pXG4gICAgICogICBoZWlnaHQ6IG51bWJlciAvLyAoc3VwcGxpZWQgZnJvbSB0aGUgVGFibGUgb3Igcm93SGVpZ2h0R2V0dGVyKVxuICAgICAqICAgd2lkdGg6IG51bWJlciAvLyAoc3VwcGxpZWQgZnJvbSB0aGUgQ29sdW1uKVxuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIEJlY2F1c2UgeW91IGFyZSBwYXNzaW5nIGluIHlvdXIgb3duIFJlYWN0IGVsZW1lbnQsIHlvdSBjYW4gZmVlbCBmcmVlIHRvXG4gICAgICogcGFzcyBpbiB3aGF0ZXZlciBwcm9wcyB5b3UgbWF5IHdhbnQgb3IgbmVlZC5cbiAgICAgKlxuICAgICAqIElmIHlvdSBwYXNzIGluIGEgZnVuY3Rpb24sIHlvdSB3aWxsIHJlY2VpdmUgdGhlIHNhbWUgcHJvcHMgb2JqZWN0IGFzIHRoZVxuICAgICAqIGZpcnN0IGFyZ3VtZW50LlxuICAgICAqL1xuICAgIGZvb3RlcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm5vZGUsIFByb3BUeXBlcy5mdW5jXSksXG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGlzIHVzZWQgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhlIGNvbHVtbiwgYW5kIGlzIG5vdCByZXF1aXJlZCB1bmxlc3NcbiAgICAgKiB5b3UgYSByZXNpemluZyBjb2x1bW5zLiBUaGlzIHdpbGwgYmUgdGhlIGtleSBnaXZlbiBpbiB0aGVcbiAgICAgKiBgb25Db2x1bW5SZXNpemVFbmRDYWxsYmFja2Agb24gdGhlIFRhYmxlLlxuICAgICAqL1xuICAgIGNvbHVtbktleTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHBpeGVsIHdpZHRoIG9mIHRoZSBjb2x1bW4uXG4gICAgICovXG4gICAgd2lkdGg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIElmIHRoaXMgaXMgYSByZXNpemFibGUgY29sdW1uIHRoaXMgaXMgaXRzIG1pbmltdW0gcGl4ZWwgd2lkdGguXG4gICAgICovXG4gICAgbWluV2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvKipcbiAgICAgKiBJZiB0aGlzIGlzIGEgcmVzaXphYmxlIGNvbHVtbiB0aGlzIGlzIGl0cyBtYXhpbXVtIHBpeGVsIHdpZHRoLlxuICAgICAqL1xuICAgIG1heFdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGdyb3cgZmFjdG9yIHJlbGF0aXZlIHRvIG90aGVyIGNvbHVtbnMuIFNhbWUgYXMgdGhlIGZsZXgtZ3JvdyBBUElcbiAgICAgKiBmcm9tIGh0dHA6Ly93d3cudzMub3JnL1RSL2NzczMtZmxleGJveC8uIEJhc2ljYWxseSwgdGFrZSBhbnkgYXZhaWxhYmxlXG4gICAgICogZXh0cmEgd2lkdGggYW5kIGRpc3RyaWJ1dGUgaXQgcHJvcG9ydGlvbmFsbHkgYWNjb3JkaW5nIHRvIGFsbCBjb2x1bW5zJ1xuICAgICAqIGZsZXhHcm93IHZhbHVlcy4gRGVmYXVsdHMgdG8gemVybyAobm8tZmxleGluZykuXG4gICAgICovXG4gICAgZmxleEdyb3c6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRoZSBjb2x1bW4gY2FuIGJlIHJlc2l6ZWQgd2l0aCB0aGVcbiAgICAgKiBGaXhlZERhdGFUYWJsZUNvbHVtblJlc2l6ZUhhbmRsZS4gUGxlYXNlIG5vdGUgdGhhdCBpZiBhIGNvbHVtblxuICAgICAqIGhhcyBhIGZsZXggZ3Jvdywgb25jZSB5b3UgcmVzaXplIHRoZSBjb2x1bW4gdGhpcyB3aWxsIGJlIHNldCB0byAwLlxuICAgICAqXG4gICAgICogVGhpcyBwcm9wZXJ0eSBvbmx5IHByb3ZpZGVzIHRoZSBVSSBmb3IgdGhlIGNvbHVtbiByZXNpemluZy4gSWYgdGhpc1xuICAgICAqIGlzIHNldCB0byB0cnVlLCB5b3Ugd2lsbCBuZWVkIHRvIHNldCB0aGUgb25Db2x1bW5SZXNpemVFbmRDYWxsYmFjayB0YWJsZVxuICAgICAqIHByb3BlcnR5IGFuZCByZW5kZXIgeW91ciBjb2x1bW5zIGFwcHJvcHJpYXRlbHkuXG4gICAgICovXG4gICAgaXNSZXNpemFibGU6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogV2hldGhlciBjZWxscyBpbiB0aGlzIGNvbHVtbiBjYW4gYmUgcmVtb3ZlZCBmcm9tIGRvY3VtZW50IHdoZW4gb3V0c2lkZVxuICAgICAqIG9mIHZpZXdwb3J0IGFzIGEgcmVzdWx0IG9mIGhvcml6b250YWwgc2Nyb2xsaW5nLlxuICAgICAqIFNldHRpbmcgdGhpcyBwcm9wZXJ0eSB0byB0cnVlIGFsbG93cyB0aGUgdGFibGUgdG8gbm90IHJlbmRlciBjZWxscyBpblxuICAgICAqIHBhcnRpY3VsYXIgY29sdW1uIHRoYXQgYXJlIG91dHNpZGUgb2Ygdmlld3BvcnQgZm9yIHZpc2libGUgcm93cy4gVGhpc1xuICAgICAqIGFsbG93cyB0byBjcmVhdGUgdGFibGUgd2l0aCBtYW55IGNvbHVtbnMgYW5kIG5vdCBoYXZlIHZlcnRpY2FsIHNjcm9sbGluZ1xuICAgICAqIHBlcmZvcm1hbmNlIGRyb3AuXG4gICAgICogU2V0dGluZyB0aGUgcHJvcGVydHkgdG8gZmFsc2Ugd2lsbCBrZWVwIHByZXZpb3VzIGJlaGF2aW91ciBhbmQga2VlcFxuICAgICAqIGNlbGwgcmVuZGVyZWQgaWYgdGhlIHJvdyBpdCBiZWxvbmdzIHRvIGlzIHZpc2libGUuXG4gICAgICovXG4gICAgYWxsb3dDZWxsc1JlY3ljbGluZzogUHJvcFR5cGVzLmJvb2xcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIC8qb2JqZWN0Ki97XG4gICAgcmV0dXJuIHtcbiAgICAgIGFsbG93Q2VsbHNSZWN5Y2xpbmc6IGZhbHNlLFxuICAgICAgZml4ZWQ6IGZhbHNlXG4gICAgfTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb21wb25lbnQgPEZpeGVkRGF0YVRhYmxlQ29sdW1uIC8+IHNob3VsZCBuZXZlciByZW5kZXInKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZpeGVkRGF0YVRhYmxlQ29sdW1uO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvRml4ZWREYXRhVGFibGVDb2x1bW5OZXcucmVhY3QuanNcbiAqKiBtb2R1bGUgaWQgPSA0NzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIEZpeGVkRGF0YVRhYmxlQ29sdW1uR3JvdXBOZXcucmVhY3RcbiAqIEB0eXBlY2hlY2tzXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCcuL1JlYWN0Jyk7XG5cbnZhciBQcm9wVHlwZXMgPSBSZWFjdC5Qcm9wVHlwZXM7XG5cbi8qKlxuICogQ29tcG9uZW50IHRoYXQgZGVmaW5lcyB0aGUgYXR0cmlidXRlcyBvZiBhIHRhYmxlIGNvbHVtbiBncm91cC5cbiAqL1xudmFyIEZpeGVkRGF0YVRhYmxlQ29sdW1uR3JvdXAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnRml4ZWREYXRhVGFibGVDb2x1bW5Hcm91cCcsXG5cbiAgc3RhdGljczoge1xuICAgIF9fVGFibGVDb2x1bW5Hcm91cF9fOiB0cnVlXG4gIH0sXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgLyoqXG4gICAgICogVGhlIGhvcml6b250YWwgYWxpZ25tZW50IG9mIHRoZSB0YWJsZSBjZWxsIGNvbnRlbnQuXG4gICAgICovXG4gICAgYWxpZ246IFByb3BUeXBlcy5vbmVPZihbJ2xlZnQnLCAnY2VudGVyJywgJ3JpZ2h0J10pLFxuXG4gICAgLyoqXG4gICAgICogQ29udHJvbHMgaWYgdGhlIGNvbHVtbiBncm91cCBpcyBmaXhlZCB3aGVuIHNjcm9sbGluZyBpbiB0aGUgWCBheGlzLlxuICAgICAqL1xuICAgIGZpeGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFRoaXMgaXMgdGhlIGhlYWRlciBjZWxsIGZvciB0aGlzIGNvbHVtbiBncm91cC5cbiAgICAgKiBUaGlzIGNhbiBlaXRoZXIgYmUgYSBzdHJpbmcgb3IgYSBSZWFjdCBlbGVtZW50LiBQYXNzaW5nIGluIGEgc3RyaW5nXG4gICAgICogd2lsbCByZW5kZXIgYSBkZWZhdWx0IGZvb3RlciBjZWxsIHdpdGggdGhhdCBzdHJpbmcuIEJ5IGRlZmF1bHQsIHRoZSBSZWFjdFxuICAgICAqIGVsZW1lbnQgcGFzc2VkIGluIGNhbiBleHBlY3QgdG8gcmVjZWl2ZSB0aGUgZm9sbG93aW5nIHByb3BzOlxuICAgICAqXG4gICAgICogYGBgXG4gICAgICogcHJvcHM6IHtcbiAgICAgKiAgIGhlaWdodDogbnVtYmVyIC8vIChzdXBwbGllZCBmcm9tIHRoZSBncm91cEhlYWRlckhlaWdodClcbiAgICAgKiAgIHdpZHRoOiBudW1iZXIgLy8gKHN1cHBsaWVkIGZyb20gdGhlIENvbHVtbilcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBCZWNhdXNlIHlvdSBhcmUgcGFzc2luZyBpbiB5b3VyIG93biBSZWFjdCBlbGVtZW50LCB5b3UgY2FuIGZlZWwgZnJlZSB0b1xuICAgICAqIHBhc3MgaW4gd2hhdGV2ZXIgcHJvcHMgeW91IG1heSB3YW50IG9yIG5lZWQuXG4gICAgICpcbiAgICAgKiBZb3UgY2FuIGFsc28gcGFzcyBpbiBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIHJlYWN0IGVsZW1udCwgd2l0aCB0aGVcbiAgICAgKiBwcm9wcyBvYmplY3QgYWJvdmUgcGFzc2VkIGluIGFzIHRoZSBmaXJzdCBwYXJhbWV0ZXIuXG4gICAgICovXG4gICAgaGVhZGVyOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubm9kZSwgUHJvcFR5cGVzLmZ1bmNdKVxuXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSAvKm9iamVjdCove1xuICAgIHJldHVybiB7XG4gICAgICBmaXhlZDogZmFsc2VcbiAgICB9O1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbXBvbmVudCA8Rml4ZWREYXRhVGFibGVDb2x1bW5Hcm91cCAvPiBzaG91bGQgbmV2ZXIgcmVuZGVyJyk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBGaXhlZERhdGFUYWJsZUNvbHVtbkdyb3VwO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvRml4ZWREYXRhVGFibGVDb2x1bW5Hcm91cE5ldy5yZWFjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDQ3NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgRml4ZWREYXRhVGFibGVDZWxsVHJhbnNpdGlvbi5yZWFjdFxuICovXG5cbi8qKlxuICogVFJBTlNJVElPTiBTSElNXG4gKiBUaGlzIGFjdHMgdG8gcHJvdmlkZSBhbiBpbnRlcm1lZGlhdGUgbWFwcGluZyBmcm9tIHRoZSBvbGQgQVBJIHRvIHRoZSBuZXcgQVBJLlxuICpcbiAqIFdoZW4gcmVhZHksIHJlbW92ZSB0aGlzIGZpbGUgYW5kIHJlbmFtZSB0aGUgcHJvdmlkZXNNb2R1bGUgaW5cbiAqIEZpeGVkRGF0YVRhYmxlQ2VsbE5ldy5yZWFjdCBhbmQgZGVwZW5kZW5jeSBpbiBGaXhlZERhdGFUYWJsZUNlbGxHcm91cC5yZWFjdFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgnLi9SZWFjdCcpO1xudmFyIFByb3BUeXBlcyA9IFJlYWN0LlByb3BUeXBlcztcblxudmFyIGN4ID0gcmVxdWlyZSgnLi9jeCcpO1xudmFyIGpvaW5DbGFzc2VzID0gcmVxdWlyZSgnLi9qb2luQ2xhc3NlcycpO1xudmFyIHNoYWxsb3dFcXVhbCA9IHJlcXVpcmUoJy4vc2hhbGxvd0VxdWFsJyk7XG5cbnZhciBDZWxsRGVmYXVsdCA9IHJlcXVpcmUoJy4vRml4ZWREYXRhVGFibGVDZWxsRGVmYXVsdC5yZWFjdCcpO1xuXG52YXIgVHJhbnNpdGlvbkNlbGwgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnVHJhbnNpdGlvbkNlbGwnLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLCAvLyBoZWFkZXIsIGZvb3RlclxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICByb3dJbmRleDogUHJvcFR5cGVzLm51bWJlcixcbiAgICByb3dHZXR0ZXI6IFByb3BUeXBlcy5mdW5jLCAvLyBjZWxsXG4gICAgZGF0YUtleTogUHJvcFR5cGVzLm9uZU9mVHlwZShbLy8gY2VsbCwgZm9vdGVyXG4gICAgUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuICAgIGNlbGxSZW5kZXJlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgY2VsbERhdGFHZXR0ZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIGZvb3RlckRhdGFHZXR0ZXI6IFByb3BUeXBlcy5mdW5jLCAvLyBmb290ZXJcbiAgICBmb290ZXJEYXRhOiBQcm9wVHlwZXMuYW55LCAvLyBmb290ZXJcbiAgICBjb2x1bW5EYXRhOiBQcm9wVHlwZXMuYW55LCAvLyBjZWxsLCBoZWFkZXJcbiAgICB3aWR0aDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgaXNIZWFkZXJDZWxsOiBQcm9wVHlwZXMuYm9vbCwgLy8gaGVhZGVyXG4gICAgaXNGb290ZXJDZWxsOiBQcm9wVHlwZXMuYm9vbCB9LFxuXG4gIC8vIGZvb3RlclxuICBzaG91bGRDb21wb25lbnRVcGRhdGU6IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZSggLypvYmplY3QqL25leHRQcm9wcykge1xuICAgIHZhciB1cGRhdGUgPSBmYWxzZTtcbiAgICB2YXIgcm93RGF0YTtcbiAgICBpZiAobmV4dFByb3BzLnJvd0dldHRlcikge1xuICAgICAgcm93RGF0YSA9IG5leHRQcm9wcy5yb3dHZXR0ZXIobmV4dFByb3BzLnJvd0luZGV4KTtcbiAgICAgIGlmICh0aGlzLl9yb3dEYXRhICE9PSByb3dEYXRhKSB7XG4gICAgICAgIHVwZGF0ZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGNlbGxEYXRhO1xuICAgIGlmIChuZXh0UHJvcHMuZGF0YUtleSAhPSBudWxsKSB7XG4gICAgICBpZiAobmV4dFByb3BzLmNlbGxEYXRhR2V0dGVyKSB7XG4gICAgICAgIGNlbGxEYXRhID0gbmV4dFByb3BzLmNlbGxEYXRhR2V0dGVyKG5leHRQcm9wcy5kYXRhS2V5LCByb3dEYXRhKTtcbiAgICAgIH1cbiAgICAgIGlmICghY2VsbERhdGEgJiYgcm93RGF0YSkge1xuICAgICAgICBjZWxsRGF0YSA9IHJvd0RhdGFbbmV4dFByb3BzLmRhdGFLZXldO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5fY2VsbERhdGEgIT09IGNlbGxEYXRhKSB7XG4gICAgICB1cGRhdGUgPSB0cnVlO1xuICAgIH1cbiAgICB0aGlzLl9yb3dEYXRhID0gcm93RGF0YTtcbiAgICB0aGlzLl9jZWxsRGF0YSA9IGNlbGxEYXRhO1xuXG4gICAgcmV0dXJuIHVwZGF0ZSB8fCAhc2hhbGxvd0VxdWFsKG5leHRQcm9wcywgdGhpcy5wcm9wcyk7XG4gIH0sXG5cbiAgX2dldENlbGxEYXRhOiBmdW5jdGlvbiBfZ2V0Q2VsbERhdGEocHJvcHMpIHtcbiAgICB2YXIgZGF0YUtleSA9IHByb3BzLmRhdGFLZXk7XG4gICAgaWYgKGRhdGFLZXkgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIHJvd0RhdGE7XG4gICAgaWYgKHByb3BzLnJvd0dldHRlcikge1xuICAgICAgcm93RGF0YSA9IHByb3BzLnJvd0dldHRlcihwcm9wcy5yb3dJbmRleCk7XG4gICAgfVxuXG4gICAgaWYgKHByb3BzLmNlbGxEYXRhR2V0dGVyKSB7XG4gICAgICByZXR1cm4gcHJvcHMuY2VsbERhdGFHZXR0ZXIoZGF0YUtleSwgcm93RGF0YSk7XG4gICAgfVxuXG4gICAgaWYgKHJvd0RhdGEpIHtcbiAgICAgIHJldHVybiByb3dEYXRhW2RhdGFLZXldO1xuICAgIH1cblxuICAgIGlmIChwcm9wcy5mb290ZXJEYXRhR2V0dGVyKSB7XG4gICAgICByZXR1cm4gcHJvcHMuZm9vdGVyRGF0YUdldHRlcigpW2RhdGFLZXldO1xuICAgIH1cblxuICAgIGlmIChwcm9wcy5mb290ZXJEYXRhKSB7XG4gICAgICByZXR1cm4gcHJvcHMuZm9vdGVyRGF0YVtkYXRhS2V5XTtcbiAgICB9XG5cbiAgICBpZiAocHJvcHMuaGVhZGVyRGF0YUdldHRlcikge1xuICAgICAgcmV0dXJuIHByb3BzLmhlYWRlckRhdGFHZXR0ZXJbZGF0YUtleV07XG4gICAgfVxuICB9LFxuXG4gIF9nZXRSb3dEYXRhOiBmdW5jdGlvbiBfZ2V0Um93RGF0YShwcm9wcykge1xuICAgIGlmIChwcm9wcy5yb3dHZXR0ZXIpIHtcbiAgICAgIHJldHVybiBwcm9wcy5yb3dHZXR0ZXIocHJvcHMucm93SW5kZXgpIHx8IHt9O1xuICAgIH1cblxuICAgIGlmIChwcm9wcy5mb290ZXJEYXRhR2V0dGVyKSB7XG4gICAgICByZXR1cm4gcHJvcHMuZm9vdGVyRGF0YUdldHRlcigpIHx8IHt9O1xuICAgIH1cblxuICAgIGlmIChwcm9wcy5mb290ZXJEYXRhKSB7XG4gICAgICByZXR1cm4gcHJvcHMuZm9vdGVyRGF0YSB8fCB7fTtcbiAgICB9XG5cbiAgICByZXR1cm4ge307XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcblxuICAgIHZhciBjZWxsRGF0YSA9IHRoaXMuX2dldENlbGxEYXRhKHByb3BzKTtcbiAgICB2YXIgY29udGVudCA9IGNlbGxEYXRhO1xuICAgIHZhciByb3dEYXRhID0gdGhpcy5fZ2V0Um93RGF0YShwcm9wcyk7XG4gICAgdmFyIHVzaW5nUmVuZGVyZXIgPSAhIShwcm9wcy5jZWxsUmVuZGVyZXIgfHwgcHJvcHMuZ3JvdXBIZWFkZXJSZW5kZXJlcik7XG5cbiAgICBpZiAocHJvcHMuaXNIZWFkZXJDZWxsIHx8IHByb3BzLmlzRm9vdGVyQ2VsbCkge1xuICAgICAgY29udGVudCA9IGNvbnRlbnQgfHwgcHJvcHMubGFiZWw7XG4gICAgfVxuXG4gICAgaWYgKHByb3BzLmNlbGxSZW5kZXJlcikge1xuICAgICAgaWYgKHByb3BzLmlzSGVhZGVyQ2VsbCB8fCBwcm9wcy5pc0Zvb3RlckNlbGwpIHtcbiAgICAgICAgY29udGVudCA9IHByb3BzLmNlbGxSZW5kZXJlcihwcm9wcy5sYWJlbCwgcHJvcHMuZGF0YUtleSwgcHJvcHMuY29sdW1uRGF0YSwgcm93RGF0YSwgcHJvcHMud2lkdGgpIHx8IHByb3BzLmxhYmVsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGVudCA9IHByb3BzLmNlbGxSZW5kZXJlcihjZWxsRGF0YSwgcHJvcHMuZGF0YUtleSwgcm93RGF0YSwgcHJvcHMucm93SW5kZXgsIHByb3BzLmNvbHVtbkRhdGEsIHByb3BzLndpZHRoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocHJvcHMuZ3JvdXBIZWFkZXJSZW5kZXJlcikge1xuICAgICAgY29udGVudCA9IHByb3BzLmdyb3VwSGVhZGVyUmVuZGVyZXIocHJvcHMubGFiZWwsIHByb3BzLmRhdGFLZXksIC8vIGluZGV4IGluIGNoaWxkcmVuXG4gICAgICBwcm9wcy5ncm91cEhlYWRlckRhdGEsIHByb3BzLmdyb3VwSGVhZGVyTGFiZWxzLCBwcm9wcy53aWR0aCkgfHwgY29udGVudDtcbiAgICB9XG5cbiAgICB2YXIgY29udGVudENsYXNzID0gY3goJ3B1YmxpYy9maXhlZERhdGFUYWJsZUNlbGwvY2VsbENvbnRlbnQnKTtcblxuICAgIGlmIChSZWFjdC5pc1ZhbGlkRWxlbWVudChjb250ZW50KSAmJiB1c2luZ1JlbmRlcmVyKSB7XG4gICAgICBjb250ZW50ID0gUmVhY3QuY2xvbmVFbGVtZW50KGNvbnRlbnQsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBqb2luQ2xhc3Nlcyhjb250ZW50LnByb3BzLmNsYXNzTmFtZSwgY29udGVudENsYXNzKVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBDZWxsRGVmYXVsdCxcbiAgICAgICAgcHJvcHMsXG4gICAgICAgIGNvbnRlbnRcbiAgICAgICk7XG4gICAgfVxuXG4gICAgdmFyIGlubmVyU3R5bGUgPSBfZXh0ZW5kcyh7XG4gICAgICBoZWlnaHQ6IHByb3BzLmhlaWdodCxcbiAgICAgIHdpZHRoOiBwcm9wcy53aWR0aFxuICAgIH0sIHByb3BzLnN0eWxlKTtcblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywge1xuICAgICAgICBjbGFzc05hbWU6IGpvaW5DbGFzc2VzKGN4KCdmaXhlZERhdGFUYWJsZUNlbGxMYXlvdXQvd3JhcDEnKSwgY3goJ3B1YmxpYy9maXhlZERhdGFUYWJsZUNlbGwvd3JhcDEnKSwgdGhpcy5wcm9wcy5jbGFzc05hbWUpLFxuICAgICAgICBzdHlsZTogaW5uZXJTdHlsZSB9KSxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBqb2luQ2xhc3NlcyhjeCgnZml4ZWREYXRhVGFibGVDZWxsTGF5b3V0L3dyYXAyJyksIGN4KCdwdWJsaWMvZml4ZWREYXRhVGFibGVDZWxsL3dyYXAyJykpIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2RpdicsXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBqb2luQ2xhc3NlcyhjeCgnZml4ZWREYXRhVGFibGVDZWxsTGF5b3V0L3dyYXAzJyksIGN4KCdwdWJsaWMvZml4ZWREYXRhVGFibGVDZWxsL3dyYXAzJykpIH0sXG4gICAgICAgICAgY29udGVudFxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gVHJhbnNpdGlvbkNlbGw7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9GaXhlZERhdGFUYWJsZUNlbGxUcmFuc2l0aW9uLnJlYWN0LmpzXG4gKiogbW9kdWxlIGlkID0gNDc3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZml4ZWQtZGF0YS10YWJsZS5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuL2ZpeGVkLWRhdGEtdGFibGUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9maXhlZC1kYXRhLXRhYmxlLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZml4ZWQtZGF0YS10YWJsZS9kaXN0L2ZpeGVkLWRhdGEtdGFibGUuY3NzXG4gKiogbW9kdWxlIGlkID0gNDc4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyoqXFxuICogRml4ZWREYXRhVGFibGUgdjAuNi4zIFxcbiAqXFxuICogQ29weXJpZ2h0IChjKSAyMDE1LCBGYWNlYm9vaywgSW5jLlxcbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcXG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cXG4gKi9cXG5cXG4vKipcXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUsIEZhY2Vib29rLCBJbmMuXFxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxcbiAqXFxuICogQHByb3ZpZGVzTW9kdWxlIGZpeGVkRGF0YVRhYmxlQ2VsbEdyb3VwTGF5b3V0XFxuICovXFxuXFxuLmZpeGVkRGF0YVRhYmxlQ2VsbEdyb3VwTGF5b3V0X2NlbGxHcm91cCB7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgbGVmdDogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4uZml4ZWREYXRhVGFibGVDZWxsR3JvdXBMYXlvdXRfY2VsbEdyb3VwID4gLnB1YmxpY19maXhlZERhdGFUYWJsZUNlbGxfbWFpbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG59XFxuXFxuLmZpeGVkRGF0YVRhYmxlQ2VsbEdyb3VwTGF5b3V0X2NlbGxHcm91cFdyYXBwZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbn1cXG4vKipcXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUsIEZhY2Vib29rLCBJbmMuXFxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxcbiAqXFxuICogQHByb3ZpZGVzTW9kdWxlIGZpeGVkRGF0YVRhYmxlQ2VsbExheW91dFxcbiAqL1xcblxcbi5maXhlZERhdGFUYWJsZUNlbGxMYXlvdXRfbWFpbiB7XFxuICBib3JkZXItcmlnaHQtc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAxcHg7XFxuICBib3JkZXItd2lkdGg6IDAgMXB4IDAgMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbn1cXG5cXG4uZml4ZWREYXRhVGFibGVDZWxsTGF5b3V0X2xhc3RDaGlsZCB7XFxuICBib3JkZXItd2lkdGg6IDAgMXB4IDFweCAwO1xcbn1cXG5cXG4uZml4ZWREYXRhVGFibGVDZWxsTGF5b3V0X2FsaWduUmlnaHQge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbi5maXhlZERhdGFUYWJsZUNlbGxMYXlvdXRfYWxpZ25DZW50ZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZml4ZWREYXRhVGFibGVDZWxsTGF5b3V0X3dyYXAxIHtcXG4gIGRpc3BsYXk6IHRhYmxlO1xcbn1cXG5cXG4uZml4ZWREYXRhVGFibGVDZWxsTGF5b3V0X3dyYXAyIHtcXG4gIGRpc3BsYXk6IHRhYmxlLXJvdztcXG59XFxuXFxuLmZpeGVkRGF0YVRhYmxlQ2VsbExheW91dF93cmFwMyB7XFxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuLmZpeGVkRGF0YVRhYmxlQ2VsbExheW91dF9jb2x1bW5SZXNpemVyQ29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwcHg7XFxuICB3aWR0aDogNnB4O1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLmZpeGVkRGF0YVRhYmxlQ2VsbExheW91dF9jb2x1bW5SZXNpemVyQ29udGFpbmVyOmhvdmVyIHtcXG4gIGN1cnNvcjogZXctcmVzaXplO1xcbn1cXG5cXG4uZml4ZWREYXRhVGFibGVDZWxsTGF5b3V0X2NvbHVtblJlc2l6ZXJDb250YWluZXI6aG92ZXIgLmZpeGVkRGF0YVRhYmxlQ2VsbExheW91dF9jb2x1bW5SZXNpemVyS25vYiB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4uZml4ZWREYXRhVGFibGVDZWxsTGF5b3V0X2NvbHVtblJlc2l6ZXJLbm9iIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwcHg7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB3aWR0aDogNHB4O1xcbn1cXG4vKipcXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUsIEZhY2Vib29rLCBJbmMuXFxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxcbiAqXFxuICogQHByb3ZpZGVzTW9kdWxlIGZpeGVkRGF0YVRhYmxlQ29sdW1uUmVzaXplckxpbmVMYXlvdXRcXG4gKi9cXG5cXG4uZml4ZWREYXRhVGFibGVDb2x1bW5SZXNpemVyTGluZUxheW91dF9tb3VzZUFyZWEge1xcbiAgY3Vyc29yOiBldy1yZXNpemU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogLTVweDtcXG4gIHdpZHRoOiAxMnB4O1xcbn1cXG5cXG4uZml4ZWREYXRhVGFibGVDb2x1bW5SZXNpemVyTGluZUxheW91dF9tYWluIHtcXG4gIGJvcmRlci1yaWdodC1zdHlsZTogc29saWQ7XFxuICBib3JkZXItcmlnaHQtd2lkdGg6IDFweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxMDtcXG59XFxuXFxuYm9keVtkaXI9XFxcInJ0bFxcXCJdIC5maXhlZERhdGFUYWJsZUNvbHVtblJlc2l6ZXJMaW5lTGF5b3V0X21haW4ge1xcbiAgLyogdGhlIHJlc2l6ZXIgbGluZSBpcyBpbiB0aGUgd3JvbmcgcG9zaXRpb24gaW4gUlRMIHdpdGggbm8gZWFzeSBmaXguXFxuICAgKiBEaXNhYmxpbmcgaXMgbW9yZSB1c2VmdWwgdGhhbiBkaXNwbGF5aW5nIGl0LlxcbiAgICogIzE2NyAoZ2l0aHViKSBzaG91bGQgbG9vayBpbnRvIHRoaXMgYW5kIGNvbWUgdXAgd2l0aCBhIHBlcm1hbmVudCBmaXguXFxuICAgKi9cXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLmZpeGVkRGF0YVRhYmxlQ29sdW1uUmVzaXplckxpbmVMYXlvdXRfaGlkZGVuRWxlbSB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcbi8qKlxcbiAqIENvcHlyaWdodCAoYykgMjAxNSwgRmFjZWJvb2ssIEluYy5cXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXFxuICpcXG4gKiBAcHJvdmlkZXNNb2R1bGUgZml4ZWREYXRhVGFibGVMYXlvdXRcXG4gKi9cXG5cXG4uZml4ZWREYXRhVGFibGVMYXlvdXRfbWFpbiB7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmZpeGVkRGF0YVRhYmxlTGF5b3V0X2hlYWRlcixcXG4uZml4ZWREYXRhVGFibGVMYXlvdXRfaGFzQm90dG9tQm9yZGVyIHtcXG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xcbn1cXG5cXG4uZml4ZWREYXRhVGFibGVMYXlvdXRfZm9vdGVyIC5wdWJsaWNfZml4ZWREYXRhVGFibGVDZWxsX21haW4ge1xcbiAgYm9yZGVyLXRvcC1zdHlsZTogc29saWQ7XFxuICBib3JkZXItdG9wLXdpZHRoOiAxcHg7XFxufVxcblxcbi5maXhlZERhdGFUYWJsZUxheW91dF90b3BTaGFkb3csXFxuLmZpeGVkRGF0YVRhYmxlTGF5b3V0X2JvdHRvbVNoYWRvdyB7XFxuICBoZWlnaHQ6IDRweDtcXG4gIGxlZnQ6IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5maXhlZERhdGFUYWJsZUxheW91dF9ib3R0b21TaGFkb3cge1xcbiAgbWFyZ2luLXRvcDogLTRweDtcXG59XFxuXFxuLmZpeGVkRGF0YVRhYmxlTGF5b3V0X3Jvd3NDb250YWluZXIge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmZpeGVkRGF0YVRhYmxlTGF5b3V0X2hvcml6b250YWxTY3JvbGxiYXIge1xcbiAgYm90dG9tOiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG4vKipcXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUsIEZhY2Vib29rLCBJbmMuXFxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxcbiAqXFxuICogQHByb3ZpZGVzTW9kdWxlIGZpeGVkRGF0YVRhYmxlUm93TGF5b3V0XFxuICovXFxuXFxuLmZpeGVkRGF0YVRhYmxlUm93TGF5b3V0X21haW4ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxufVxcblxcbi5maXhlZERhdGFUYWJsZVJvd0xheW91dF9ib2R5IHtcXG4gIGxlZnQ6IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxufVxcblxcbi5maXhlZERhdGFUYWJsZVJvd0xheW91dF9maXhlZENvbHVtbnNEaXZpZGVyIHtcXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICBib3JkZXItbGVmdC1zdHlsZTogc29saWQ7XFxuICBib3JkZXItbGVmdC13aWR0aDogMXB4O1xcbiAgbGVmdDogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAwO1xcbn1cXG5cXG4uZml4ZWREYXRhVGFibGVSb3dMYXlvdXRfY29sdW1uc1NoYWRvdyB7XFxuICB3aWR0aDogNHB4O1xcbn1cXG5cXG4uZml4ZWREYXRhVGFibGVSb3dMYXlvdXRfcm93V3JhcHBlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxufVxcbi8qKlxcbiAqIENvcHlyaWdodCAoYykgMjAxNSwgRmFjZWJvb2ssIEluYy5cXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXFxuICpcXG4gKiBAcHJvdmlkZXNNb2R1bGUgU2Nyb2xsYmFyTGF5b3V0XFxuICovXFxuXFxuLlNjcm9sbGJhckxheW91dF9tYWluIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMjUwbXM7XFxuICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDI1MG1zO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcXG4gICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4uU2Nyb2xsYmFyTGF5b3V0X21haW5WZXJ0aWNhbCB7XFxuICBib3R0b206IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvciB3aWR0aDtcXG4gICAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvciB3aWR0aDtcXG4gIHdpZHRoOiAxNXB4O1xcbn1cXG5cXG4uU2Nyb2xsYmFyTGF5b3V0X21haW5WZXJ0aWNhbC5wdWJsaWNfU2Nyb2xsYmFyX21haW5BY3RpdmUsXFxuLlNjcm9sbGJhckxheW91dF9tYWluVmVydGljYWw6aG92ZXIge1xcbiAgd2lkdGg6IDE3cHg7XFxufVxcblxcbi5TY3JvbGxiYXJMYXlvdXRfbWFpbkhvcml6b250YWwge1xcbiAgYm90dG9tOiAwO1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgbGVmdDogMDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvciBoZWlnaHQ7XFxuICAgICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IgaGVpZ2h0O1xcbn1cXG5cXG4vKiBUb3VjaGluZyB0aGUgc2Nyb2xsLXRyYWNrIGRpcmVjdGx5IG1ha2VzIHRoZSBzY3JvbGwtdHJhY2sgYm9sZGVyICovXFxuLlNjcm9sbGJhckxheW91dF9tYWluSG9yaXpvbnRhbC5wdWJsaWNfU2Nyb2xsYmFyX21haW5BY3RpdmUsXFxuLlNjcm9sbGJhckxheW91dF9tYWluSG9yaXpvbnRhbDpob3ZlciB7XFxuICBoZWlnaHQ6IDE3cHg7XFxufVxcblxcbi5TY3JvbGxiYXJMYXlvdXRfZmFjZSB7XFxuICBsZWZ0OiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi8qKlxcbiAqIFRoaXMgc2VsZWN0b3IgcmVuZGVycyB0aGUgXFxcIm51YlxcXCIgb2YgdGhlIHNjcm9sbGZhY2UuIFRoZSBudWIgbXVzdFxcbiAqIGJlIHJlbmRlcmVkIGFzIHBzZXVkby1lbGVtZW50IHNvIHRoYXQgaXQgd29uJ3QgcmVjZWl2ZSBhbnkgVUkgZXZlbnRzIHRoZW5cXG4gKiB3ZSBjYW4gZ2V0IHRoZSBjb3JyZWN0IGBldmVudC5vZmZzZXRYYCBhbmQgYGV2ZW50Lm9mZnNldFlgIGZyb20gdGhlXFxuICogc2Nyb2xsZmFjZSBlbGVtZW50IHdoaWxlIGRyYWdnaW5nIGl0LlxcbiAqL1xcbi5TY3JvbGxiYXJMYXlvdXRfZmFjZTphZnRlciB7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBjb250ZW50OiAnJztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDI1MG1zIGVhc2U7XFxuICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjUwbXMgZWFzZTtcXG59XFxuXFxuLlNjcm9sbGJhckxheW91dF9mYWNlSG9yaXpvbnRhbCB7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbn1cXG5cXG4uU2Nyb2xsYmFyTGF5b3V0X2ZhY2VIb3Jpem9udGFsOmFmdGVyIHtcXG4gIGJvdHRvbTogNHB4O1xcbiAgbGVmdDogMDtcXG4gIHRvcDogNHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5TY3JvbGxiYXJMYXlvdXRfZmFjZVZlcnRpY2FsIHtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG59XFxuXFxuLlNjcm9sbGJhckxheW91dF9mYWNlVmVydGljYWw6YWZ0ZXIge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbGVmdDogNHB4O1xcbiAgcmlnaHQ6IDRweDtcXG4gIHRvcDogMDtcXG59XFxuLyoqXFxuICogQ29weXJpZ2h0IChjKSAyMDE1LCBGYWNlYm9vaywgSW5jLlxcbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcXG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cXG4gKlxcbiAqIEBwcm92aWRlc01vZHVsZSBmaXhlZERhdGFUYWJsZVxcbiAqXFxuICovXFxuXFxuLyoqXFxuICogVGFibGUuXFxuICovXFxuLnB1YmxpY19maXhlZERhdGFUYWJsZV9tYWluIHtcXG4gIGJvcmRlci1jb2xvcjogI2QzZDNkMztcXG59XFxuXFxuLnB1YmxpY19maXhlZERhdGFUYWJsZV9oZWFkZXIsXFxuLnB1YmxpY19maXhlZERhdGFUYWJsZV9oYXNCb3R0b21Cb3JkZXIge1xcbiAgYm9yZGVyLWNvbG9yOiAjZDNkM2QzO1xcbn1cXG5cXG4ucHVibGljX2ZpeGVkRGF0YVRhYmxlX2hlYWRlciAucHVibGljX2ZpeGVkRGF0YVRhYmxlQ2VsbF9tYWluIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucHVibGljX2ZpeGVkRGF0YVRhYmxlX2hlYWRlcixcXG4ucHVibGljX2ZpeGVkRGF0YVRhYmxlX2hlYWRlciAucHVibGljX2ZpeGVkRGF0YVRhYmxlQ2VsbF9tYWluIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY3Zjg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgjZmZmLCAjZWZlZmVmKTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjZmZmLCAjZWZlZmVmKTtcXG59XFxuXFxuLnB1YmxpY19maXhlZERhdGFUYWJsZV9mb290ZXIgLnB1YmxpY19maXhlZERhdGFUYWJsZUNlbGxfbWFpbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmN2Y4O1xcbiAgYm9yZGVyLWNvbG9yOiAjZDNkM2QzO1xcbn1cXG5cXG4ucHVibGljX2ZpeGVkRGF0YVRhYmxlX3RvcFNoYWRvdyB7XFxuICBiYWNrZ3JvdW5kOiAwIDAgdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQUVBQUFBRUNBWUFBQUJQMkZVNkFBQUFGMGxFUVZSNEFXUFVrTmVTQmhIQ2pKb0sydHdnRmlzQUZhZ0NDcDNwSmxBQUFBQUFTVVZPUks1Q1lJST0pIHJlcGVhdC14O1xcbn1cXG5cXG4ucHVibGljX2ZpeGVkRGF0YVRhYmxlX2JvdHRvbVNoYWRvdyB7XFxuICBiYWNrZ3JvdW5kOiAwIDAgdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQUVBQUFBRUNBWUFBQUJQMkZVNkFBQUFIRWxFUVZRSTEyTXdOalptWmRBVDErTm0wSkRXRUdaUWsxR1RCZ0FXa3dJZUFFcDUyQUFBQUFCSlJVNUVya0pnZ2c9PSkgcmVwZWF0LXg7XFxufVxcblxcbi5wdWJsaWNfZml4ZWREYXRhVGFibGVfaG9yaXpvbnRhbFNjcm9sbGJhciAucHVibGljX1Njcm9sbGJhcl9tYWluSG9yaXpvbnRhbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG4vKipcXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUsIEZhY2Vib29rLCBJbmMuXFxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxcbiAqXFxuICogQHByb3ZpZGVzTW9kdWxlIGZpeGVkRGF0YVRhYmxlQ2VsbFxcbiAqL1xcblxcbi8qKlxcbiAqIFRhYmxlIGNlbGwuXFxuICovXFxuLnB1YmxpY19maXhlZERhdGFUYWJsZUNlbGxfbWFpbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLWNvbG9yOiAjZDNkM2QzO1xcbn1cXG5cXG4ucHVibGljX2ZpeGVkRGF0YVRhYmxlQ2VsbF9oaWdobGlnaHRlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xcbn1cXG5cXG4ucHVibGljX2ZpeGVkRGF0YVRhYmxlQ2VsbF9jZWxsQ29udGVudCB7XFxuICBwYWRkaW5nOiA4cHg7XFxufVxcblxcbi5wdWJsaWNfZml4ZWREYXRhVGFibGVDZWxsX2NvbHVtblJlc2l6ZXJLbm9iIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjg0ZmY7XFxufVxcbi8qKlxcbiAqIENvcHlyaWdodCAoYykgMjAxNSwgRmFjZWJvb2ssIEluYy5cXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXFxuICpcXG4gKiBAcHJvdmlkZXNNb2R1bGUgZml4ZWREYXRhVGFibGVDb2x1bW5SZXNpemVyTGluZVxcbiAqXFxuICovXFxuXFxuLyoqXFxuICogQ29sdW1uIHJlc2l6ZXIgbGluZS5cXG4gKi9cXG4ucHVibGljX2ZpeGVkRGF0YVRhYmxlQ29sdW1uUmVzaXplckxpbmVfbWFpbiB7XFxuICBib3JkZXItY29sb3I6ICMwMjg0ZmY7XFxufVxcbi8qKlxcbiAqIENvcHlyaWdodCAoYykgMjAxNSwgRmFjZWJvb2ssIEluYy5cXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXFxuICpcXG4gKiBAcHJvdmlkZXNNb2R1bGUgZml4ZWREYXRhVGFibGVSb3dcXG4gKi9cXG5cXG4vKipcXG4gKiBUYWJsZSByb3cuXFxuICovXFxuLnB1YmxpY19maXhlZERhdGFUYWJsZVJvd19tYWluIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcblxcbi5wdWJsaWNfZml4ZWREYXRhVGFibGVSb3dfaGlnaGxpZ2h0ZWQsXFxuLnB1YmxpY19maXhlZERhdGFUYWJsZVJvd19oaWdobGlnaHRlZCAucHVibGljX2ZpeGVkRGF0YVRhYmxlQ2VsbF9tYWluIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY3Zjg7XFxufVxcblxcbi5wdWJsaWNfZml4ZWREYXRhVGFibGVSb3dfZml4ZWRDb2x1bW5zRGl2aWRlciB7XFxuICBib3JkZXItY29sb3I6ICNkM2QzZDM7XFxufVxcblxcbi5wdWJsaWNfZml4ZWREYXRhVGFibGVSb3dfY29sdW1uc1NoYWRvdyB7XFxuICBiYWNrZ3JvdW5kOiAwIDAgdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQVFBQUFBQkNBWUFBQUQ1UEEvTkFBQUFGa2xFUVZRSUhXUFNrTmVTQm1KaFRRVnRiaUROQ2dBU2FnSUl1Slg4T2dBQUFBQkpSVTVFcmtKZ2dnPT0pIHJlcGVhdC15O1xcbn1cXG4vKipcXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUsIEZhY2Vib29rLCBJbmMuXFxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxcbiAqXFxuICogQHByb3ZpZGVzTW9kdWxlIFNjcm9sbGJhclxcbiAqXFxuICovXFxuXFxuLyoqXFxuICogU2Nyb2xsYmFycy5cXG4gKi9cXG5cXG4vKiBUb3VjaGluZyB0aGUgc2Nyb2xsLXRyYWNrIGRpcmVjdGx5IG1ha2VzIHRoZSBzY3JvbGwtdHJhY2sgYm9sZGVyICovXFxuLnB1YmxpY19TY3JvbGxiYXJfbWFpbi5wdWJsaWNfU2Nyb2xsYmFyX21haW5BY3RpdmUsXFxuLnB1YmxpY19TY3JvbGxiYXJfbWFpbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxufVxcblxcbi5wdWJsaWNfU2Nyb2xsYmFyX21haW5PcGFxdWUsXFxuLnB1YmxpY19TY3JvbGxiYXJfbWFpbk9wYXF1ZS5wdWJsaWNfU2Nyb2xsYmFyX21haW5BY3RpdmUsXFxuLnB1YmxpY19TY3JvbGxiYXJfbWFpbk9wYXF1ZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG4ucHVibGljX1Njcm9sbGJhcl9mYWNlOmFmdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjMmMyYzI7XFxufVxcblxcbi5wdWJsaWNfU2Nyb2xsYmFyX21haW46aG92ZXIgLnB1YmxpY19TY3JvbGxiYXJfZmFjZTphZnRlcixcXG4ucHVibGljX1Njcm9sbGJhcl9tYWluQWN0aXZlIC5wdWJsaWNfU2Nyb2xsYmFyX2ZhY2U6YWZ0ZXIsXFxuLnB1YmxpY19TY3JvbGxiYXJfZmFjZUFjdGl2ZTphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2Q3ZDdkO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyIS4vfi9maXhlZC1kYXRhLXRhYmxlL2Rpc3QvZml4ZWQtZGF0YS10YWJsZS5jc3NcbiAqKiBtb2R1bGUgaWQgPSA0NzlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDZWxsIH0gZnJvbSAnZml4ZWQtZGF0YS10YWJsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvcnRhYmxlSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5vbkhlYWRlckNsaWNrID0gdGhpcy5vbkhlYWRlckNsaWNrLmJpbmQodGhpcyk7XG4gIH1cbiAgb25IZWFkZXJDbGljayhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMub25IZWFkZXJDbGljayh0aGlzLnByb3BzLmNvbHVtbik7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Q2VsbD5cbiAgICAgICAgPGEgb25DbGljaz17dGhpcy5vbkhlYWRlckNsaWNrfT57dGhpcy5wcm9wcy5jb2x1bW59PC9hPlxuICAgICAgPC9DZWxsPlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvU29ydGFibGVIZWFkZXIuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGVkaXRSZWNvcmQsIG9wZW5Nb2RhbCB9IGZyb20gJy4uLy4uL2FjdGlvbnMvb3B0aW9ucy5qcyc7XG5pbXBvcnQgeyBmZXRjaFNpdGVzIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9jb21tb24uanMnO1xuaW1wb3J0IFNlYXJjaFNpdGVEQiBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NlYXJjaFNpdGVEQi5qcyc7XG5cbmNsYXNzIEZpbHRlcmluZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBmZXRjaFNpdGVzKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEwIHBhbmVsIHBhbmVsLWRlZmF1bHRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1oZWFkaW5nXCI+TG9va3VwIFJlY29yZDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWJvZHlcIj5TZWFyY2hCb3ggZ29lcyBIRVJFPC9kaXY+XG4gICAgICAgIDxTZWFyY2hTaXRlREIgb3Blbk1vZGFsPXtvcGVuTW9kYWx9IHNpdGVzPXt0aGlzLnByb3BzLnNpdGVzIHx8IFtdfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBzdGF0ZSA9PiAoXG4gICAge1xuICAgICAgc2l0ZXM6IHN0YXRlLnNpdGVzLFxuICAgICAgbWVzc2FnZTogc3RhdGUubWVzc2FnZVxuICAgIH1cbiAgKSxcbiAgZGlzcGF0Y2ggPT4gKFxuICAgIHtcbiAgICAgIGZldGNoU2l0ZXM6ICgpID0+IGRpc3BhdGNoKGZldGNoU2l0ZXMoKSksXG4gICAgICBlZGl0UmVjb3JkOiByZWNvcmQgPT4gZGlzcGF0Y2goZWRpdFJlY29yZChyZWNvcmQpKSxcbiAgICAgIG9wZW5Nb2RhbDogbW9kYWxJRCA9PiBkaXNwYXRjaChvcGVuTW9kYWwobW9kYWxJRCkpXG4gICAgfVxuICApXG4pKEZpbHRlcmluZyk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb250YWluZXJzL29wdGlvbnMvRmlsdGVyaW5nLmpzXG4gKiovIiwiZXhwb3J0IGZ1bmN0aW9uIGVkaXRSZWNvcmQocmVjb3JkKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0VESVRfUkVDT1JEJyxcbiAgICByZWNvcmRcbiAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBvcGVuTW9kYWwobW9kYWxJZCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdPUEVOX01PREFMJyxcbiAgICBtb2RhbElkXG4gIH07XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hY3Rpb25zL29wdGlvbnMuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNpdGVEQlJvdyBmcm9tICcuL1NpdGVEQlJvdy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaFNpdGVEQiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIC8vIERlZmF1bHQgdG8gRGVzY2VuZGluZyBPcmRlciBvbiB0aW1lU3BlbnRcbiAgICBjb25zb2xlLmxvZyhwcm9wcyk7XG4gICAgdGhpcy5vbkhlYWRlckNsaWNrID0gdGhpcy5vbkhlYWRlckNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNvcnRCeTogJ3RpbWVTcGVudCcsXG4gICAgfTtcbiAgfVxuICBvbkhlYWRlckNsaWNrKGhlYWRlcikge1xuICAgIHJldHVybiBlID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGhlYWRlcik7XG4gICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB9O1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+IzwvdGg+XG4gICAgICAgICAgICA8dGg+U2l0ZTwvdGg+XG4gICAgICAgICAgICA8dGg+VmlzaXRzPC90aD5cbiAgICAgICAgICAgIDx0aD5UaW1lU3BlbnQ8L3RoPlxuICAgICAgICAgICAgPHRoPkZpbHRlcjwvdGg+XG4gICAgICAgICAgICA8dGg+QWR2RmlsdGVyPC90aD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICB7dGhpcy5wcm9wcy5zaXRlcy5tYXAoKHJlY29yZCwgaW5kZXgsIGFycmF5KSA9PiAoXG4gICAgICAgICAgPFNpdGVEQlJvdyBpZD17aW5kZXh9IG9wZW5Nb2RhbD17dGhpcy5wcm9wcy5vcGVuTW9kYWx9IHsuLi5yZWNvcmR9IC8+XG4gICAgICAgICkpfVxuICAgICAgPC90YWJsZT5cbiAgICApO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL1NlYXJjaFNpdGVEQi5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9hc3NpZ25cIik7XG5cbnZhciBfYXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2lnbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9hc3NpZ24yLmRlZmF1bHQgfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzXG4gKiogbW9kdWxlIGlkID0gNDg4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnblwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduLmpzXG4gKiogbW9kdWxlIGlkID0gNDg5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuYXNzaWduO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduLmpzXG4gKiogbW9kdWxlIGlkID0gNDkwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAxOS4xLjMuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYsICdPYmplY3QnLCB7YXNzaWduOiByZXF1aXJlKCcuL19vYmplY3QtYXNzaWduJyl9KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qc1xuICoqIG1vZHVsZSBpZCA9IDQ5MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMTkuMS4yLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSwgLi4uKVxudmFyIGdldEtleXMgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIGdPUFMgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKVxuICAsIHBJRSAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpXG4gICwgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIElPYmplY3QgID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgJGFzc2lnbiAgPSBPYmplY3QuYXNzaWduO1xuXG4vLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1Zylcbm1vZHVsZS5leHBvcnRzID0gISRhc3NpZ24gfHwgcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICB2YXIgQSA9IHt9XG4gICAgLCBCID0ge31cbiAgICAsIFMgPSBTeW1ib2woKVxuICAgICwgSyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbU10gPSA3O1xuICBLLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uKGspeyBCW2tdID0gazsgfSk7XG4gIHJldHVybiAkYXNzaWduKHt9LCBBKVtTXSAhPSA3IHx8IE9iamVjdC5rZXlzKCRhc3NpZ24oe30sIEIpKS5qb2luKCcnKSAhPSBLO1xufSkgPyBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUICAgICA9IHRvT2JqZWN0KHRhcmdldClcbiAgICAsIGFMZW4gID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICwgaW5kZXggPSAxXG4gICAgLCBnZXRTeW1ib2xzID0gZ09QUy5mXG4gICAgLCBpc0VudW0gICAgID0gcElFLmY7XG4gIHdoaWxlKGFMZW4gPiBpbmRleCl7XG4gICAgdmFyIFMgICAgICA9IElPYmplY3QoYXJndW1lbnRzW2luZGV4KytdKVxuICAgICAgLCBrZXlzICAgPSBnZXRTeW1ib2xzID8gZ2V0S2V5cyhTKS5jb25jYXQoZ2V0U3ltYm9scyhTKSkgOiBnZXRLZXlzKFMpXG4gICAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgICAsIGogICAgICA9IDBcbiAgICAgICwga2V5O1xuICAgIHdoaWxlKGxlbmd0aCA+IGopaWYoaXNFbnVtLmNhbGwoUywga2V5ID0ga2V5c1tqKytdKSlUW2tleV0gPSBTW2tleV07XG4gIH0gcmV0dXJuIFQ7XG59IDogJGFzc2lnbjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qc1xuICoqIG1vZHVsZSBpZCA9IDQ5MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2l0ZURCUm93KHByb3BzKSB7XG4gIC8vIHV0aWxpemUgaWQgdGhhdCBjb3JyZXNwb25kcyB0byBpbmRleCBvZiBlbGVtZW50IGluIHN0YXRlXG4gIGNvbnN0IHsgaWQsIHNpdGUsIHRpbWVTcGVudCwgYmxvY2ssIGFkdkJsb2NrLCB2aXNpdHMsIG9wZW5Nb2RhbCB9ID0gcHJvcHM7XG4gIGNvbnN0IG9uQ2xpY2tFZGl0ID0gcm93SWQgPT4gZSA9PiBvcGVuTW9kYWwocm93SWQpO1xuICByZXR1cm4gKFxuICAgIDx0ciBpZD17YGRhdGFyb3ctJHtpZH1gfSBrZXk9e2lkfSA+XG4gICAgICA8dGggc2NvcGU9XCJyb3dcIj57aWR9PC90aD5cbiAgICAgIDx0ZD57c2l0ZX08L3RkPlxuICAgICAgPHRkPnt2aXNpdHN9PC90ZD5cbiAgICAgIDx0ZD57dGltZVNwZW50fTwvdGQ+XG4gICAgICA8dGQ+e2Jsb2NrfTwvdGQ+XG4gICAgICA8dGQ+e0pTT04uc3RyaW5naWZ5KGFkdkJsb2NrKX08L3RkPlxuICAgIDwvdHI+XG4gICk7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL1NpdGVEQlJvdy5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9qc29uL3N0cmluZ2lmeS5qc1xuICoqIG1vZHVsZSBpZCA9IDQ5NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGNvcmUgID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpXG4gICwgJEpTT04gPSBjb3JlLkpTT04gfHwgKGNvcmUuSlNPTiA9IHtzdHJpbmdpZnk6IEpTT04uc3RyaW5naWZ5fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgcmV0dXJuICRKU09OLnN0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJndW1lbnRzKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL2pzb24vc3RyaW5naWZ5LmpzXG4gKiogbW9kdWxlIGlkID0gNDk1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBTaXRlVGFibGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TaXRlVGFibGUuanMnO1xuaW1wb3J0IElucHV0QmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSW5wdXRCYXIuanMnO1xuXG5pbXBvcnQgeyBhZGRTaXRlLCBmZXRjaFNpdGVzIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9jb21tb24uanMnO1xuXG5jbGFzcyBTZXR0aW5ncyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IHBhbmVsIHBhbmVsLWRlZmF1bHRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWhlYWRpbmdcIj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwYW5lbC10aXRsZVwiPkFkZCBQYXR0ZXJuPC9oMz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWJvZHlcIj5cbiAgICAgICAgICAgIDxJbnB1dEJhciBhZGRTaXRlPXt0aGlzLnByb3BzLmFkZFNpdGV9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC03IHBhbmVsIHBhbmVsLWRlZmF1bHRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWhlYWRpbmdcIj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwYW5lbC10aXRsZVwiPkFkZCBQYXR0ZXJuPC9oMz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWJvZHlcIj5cbiAgICAgICAgICAgIDxTaXRlVGFibGUgc2l0ZXM9e3RoaXMucHJvcHMuc2l0ZXN9IG1heEVudHJ5PXsxMH0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIHN0YXRlID0+IChcbiAgICB7XG4gICAgICBzaXRlczogc3RhdGUuc2l0ZXMsXG4gICAgICBtZXNzYWdlOiBzdGF0ZS5tZXNzYWdlXG4gICAgfVxuICApLFxuICBkaXNwYXRjaCA9PiAoXG4gICAge1xuICAgICAgYWRkU2l0ZTogc2l0ZSA9PiBkaXNwYXRjaChhZGRTaXRlKHNpdGUpKSxcbiAgICAgIGZldGNoU2l0ZXM6ICgpID0+IGRpc3BhdGNoKGZldGNoU2l0ZXMoKSlcbiAgICB9XG4gIClcbikoU2V0dGluZ3MpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29udGFpbmVycy9vcHRpb25zL1NldHRpbmdzLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgU2l0ZVRhYmxlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU2l0ZVRhYmxlLmpzJztcbmltcG9ydCBJbnB1dEJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0lucHV0QmFyLmpzJztcblxuaW1wb3J0IHsgYWRkU2l0ZSwgZmV0Y2hTaXRlcyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvY29tbW9uLmpzJztcblxuY2xhc3MgU3RhdGlzdGljcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IHBhbmVsIHBhbmVsLWRlZmF1bHRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWhlYWRpbmdcIj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwYW5lbC10aXRsZVwiPkFkZCBQYXR0ZXJuPC9oMz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWJvZHlcIj5cbiAgICAgICAgICAgIDxJbnB1dEJhciBhZGRTaXRlPXt0aGlzLnByb3BzLmFkZFNpdGV9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC03IHBhbmVsIHBhbmVsLWRlZmF1bHRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWhlYWRpbmdcIj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwYW5lbC10aXRsZVwiPkFkZCBQYXR0ZXJuPC9oMz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWJvZHlcIj5cbiAgICAgICAgICAgIDxTaXRlVGFibGUgc2l0ZXM9e3RoaXMucHJvcHMuc2l0ZXN9IG1heEVudHJ5PXsxMH0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIHN0YXRlID0+IChcbiAgICB7XG4gICAgICBzaXRlczogc3RhdGUuc2l0ZXMsXG4gICAgICBtZXNzYWdlOiBzdGF0ZS5tZXNzYWdlXG4gICAgfVxuICApLFxuICBkaXNwYXRjaCA9PiAoXG4gICAge1xuICAgICAgYWRkU2l0ZTogc2l0ZSA9PiBkaXNwYXRjaChhZGRTaXRlKHNpdGUpKSxcbiAgICAgIGZldGNoU2l0ZXM6ICgpID0+IGRpc3BhdGNoKGZldGNoU2l0ZXMoKSlcbiAgICB9XG4gIClcbikoU3RhdGlzdGljcyk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb250YWluZXJzL29wdGlvbnMvU3RhdGlzdGljcy5qc1xuICoqLyIsImltcG9ydCB7IGZvcmsgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuaW1wb3J0ICogYXMgc2FnYXMgZnJvbSAnLi9zYWdhc0RCLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIG9wdGlvbnNTYWdhKCkge1xuICB5aWVsZCBmb3JrKHNhZ2FzLmZldGNoU2l0ZXNTYWdhKTtcbiAgY29uc29sZS5sb2coJ2hpJyk7XG4gIHlpZWxkIGZvcmsoc2FnYXMuYWRkU2l0ZVNhZ2EpO1xuICBjb25zb2xlLmxvZygnaGkgYWdhaW4nKTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3NhZ2FzL29wdGlvbnNTYWdhcy5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=