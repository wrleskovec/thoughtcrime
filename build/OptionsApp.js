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
	
	var _optionsSagas = __webpack_require__(479);
	
	var _optionsSagas2 = _interopRequireDefault(_optionsSagas);
	
	__webpack_require__(485);
	
	__webpack_require__(492);
	
	__webpack_require__(494);
	
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
	exports.default = reducer;
	
	var _update = __webpack_require__(262);
	
	var _update2 = _interopRequireDefault(_update);
	
	var _blockList = __webpack_require__(263);
	
	var _blockList2 = _interopRequireDefault(_blockList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function reducer() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? { sites: _blockList2.default.fetchTodayStats(), message: '' } : arguments[0];
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
	    default:
	      return state;
	  }
	}

/***/ },

/***/ 405:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx2 = __webpack_require__(1);
	
	var _jsx3 = _interopRequireDefault(_jsx2);
	
	var _getPrototypeOf = __webpack_require__(406);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(292);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(293);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(410);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(414);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(58);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(240);
	
	var _SiteTable = __webpack_require__(421);
	
	var _SiteTable2 = _interopRequireDefault(_SiteTable);
	
	var _InputBar = __webpack_require__(477);
	
	var _InputBar2 = _interopRequireDefault(_InputBar);
	
	var _common = __webpack_require__(478);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var OptionsApp = function (_React$Component) {
	  (0, _inherits3.default)(OptionsApp, _React$Component);
	
	  function OptionsApp(props) {
	    (0, _classCallCheck3.default)(this, OptionsApp);
	    return (0, _possibleConstructorReturn3.default)(this, (OptionsApp.__proto__ || (0, _getPrototypeOf2.default)(OptionsApp)).call(this, props));
	  }
	
	  (0, _createClass3.default)(OptionsApp, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'render',
	    value: function render() {
	      return (0, _jsx3.default)('div', {
	        id: 'OptionsApp'
	      }, void 0, (0, _jsx3.default)('div', {
	        className: 'container'
	      }, void 0, (0, _jsx3.default)('div', {
	        className: 'row'
	      }, void 0, (0, _jsx3.default)('div', {
	        className: 'col-md-4'
	      }, void 0, (0, _jsx3.default)(_InputBar2.default, {
	        addSite: this.props.addSite
	      })), (0, _jsx3.default)('div', {
	        className: 'col-md-6'
	      }, void 0, (0, _jsx3.default)(_SiteTable2.default, {
	        sites: this.props.sites,
	        maxEntry: 10
	      })))));
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

/***/ 421:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx2 = __webpack_require__(1);
	
	var _jsx3 = _interopRequireDefault(_jsx2);
	
	var _getPrototypeOf = __webpack_require__(406);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(292);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(293);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(410);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(414);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(58);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _fixedDataTable = __webpack_require__(422);
	
	__webpack_require__(472);
	
	var _SortableHeader = __webpack_require__(476);
	
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

/***/ 422:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(423);


/***/ },

/***/ 423:
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
	
	var FixedDataTable = __webpack_require__(424);
	var FixedDataTableCellDefault = __webpack_require__(461);
	var FixedDataTableColumn = __webpack_require__(459);
	var FixedDataTableColumnGroup = __webpack_require__(458);
	
	var FixedDataTableRoot = {
	  Cell: FixedDataTableCellDefault,
	  Column: FixedDataTableColumn,
	  ColumnGroup: FixedDataTableColumnGroup,
	  Table: FixedDataTable
	};
	
	FixedDataTableRoot.version = '0.6.3';
	module.exports = FixedDataTableRoot;

/***/ },

/***/ 424:
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
	
	var React = __webpack_require__(425);
	
	var ReactChildren = React.Children;
	
	var PropTypes = React.PropTypes;
	
	// New Table API
	var Table = __webpack_require__(426);
	var Column = __webpack_require__(469);
	var ColumnGroup = __webpack_require__(470);
	
	// Transition Cell
	var TransitionCell = __webpack_require__(471);
	
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

/***/ 425:
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

/***/ 426:
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
	
	var React = __webpack_require__(425);
	var ReactComponentWithPureRenderMixin = __webpack_require__(427);
	var ReactWheelHandler = __webpack_require__(428);
	var Scrollbar = __webpack_require__(436);
	var FixedDataTableBufferedRows = __webpack_require__(449);
	var FixedDataTableColumnResizeHandle = __webpack_require__(463);
	var FixedDataTableRow = __webpack_require__(454);
	var FixedDataTableScrollHelper = __webpack_require__(464);
	var FixedDataTableWidthHelper = __webpack_require__(466);
	
	var cx = __webpack_require__(443);
	var debounceCore = __webpack_require__(467);
	var emptyFunction = __webpack_require__(429);
	var invariant = __webpack_require__(448);
	var joinClasses = __webpack_require__(462);
	var shallowEqual = __webpack_require__(468);
	var translateDOMPositionXY = __webpack_require__(444);
	
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

/***/ 427:
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

/***/ 428:
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
	
	var emptyFunction = __webpack_require__(429);
	var normalizeWheel = __webpack_require__(430);
	var requestAnimationFramePolyfill = __webpack_require__(434);
	
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

/***/ 429:
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

/***/ 430:
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
	
	var UserAgent_DEPRECATED = __webpack_require__(431);
	
	var isEventSupported = __webpack_require__(432);
	
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

/***/ 431:
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

/***/ 432:
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
	
	var ExecutionEnvironment = __webpack_require__(433);
	
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

/***/ 434:
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
	
	var emptyFunction = __webpack_require__(429);
	var nativeRequestAnimationFrame = __webpack_require__(435);
	
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

/***/ 435:
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
	 * @providesModule Scrollbar.react
	 * @typechecks
	 */
	
	'use strict';
	
	var DOMMouseMoveTracker = __webpack_require__(437);
	var Keys = __webpack_require__(440);
	var React = __webpack_require__(425);
	var ReactDOM = __webpack_require__(441);
	var ReactComponentWithPureRenderMixin = __webpack_require__(427);
	var ReactWheelHandler = __webpack_require__(428);
	
	var cssVar = __webpack_require__(442);
	var cx = __webpack_require__(443);
	var emptyFunction = __webpack_require__(429);
	var translateDOMPositionXY = __webpack_require__(444);
	
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

/***/ 437:
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
	
	var EventListener = __webpack_require__(438);
	
	var cancelAnimationFramePolyfill = __webpack_require__(439);
	var requestAnimationFramePolyfill = __webpack_require__(434);
	
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

/***/ 438:
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
	
	var emptyFunction = __webpack_require__(429);
	
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

/***/ 439:
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

/***/ 440:
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

/***/ 441:
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

/***/ 442:
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

/***/ 443:
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

/***/ 444:
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
	
	var BrowserSupportCore = __webpack_require__(445);
	
	var getVendorPrefixedName = __webpack_require__(446);
	
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

/***/ 445:
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
	
	var getVendorPrefixedName = __webpack_require__(446);
	
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

/***/ 446:
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
	
	var ExecutionEnvironment = __webpack_require__(433);
	
	var camelize = __webpack_require__(447);
	var invariant = __webpack_require__(448);
	
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

/***/ 447:
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

/***/ 448:
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

/***/ 449:
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
	
	var React = __webpack_require__(425);
	var FixedDataTableRowBuffer = __webpack_require__(450);
	var FixedDataTableRow = __webpack_require__(454);
	
	var cx = __webpack_require__(443);
	var emptyFunction = __webpack_require__(429);
	var joinClasses = __webpack_require__(462);
	var translateDOMPositionXY = __webpack_require__(444);
	
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

/***/ 450:
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
	
	var IntegerBufferSet = __webpack_require__(451);
	
	var clamp = __webpack_require__(453);
	var invariant = __webpack_require__(448);
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
	 * @providesModule IntegerBufferSet
	 * @typechecks
	 */
	
	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var Heap = __webpack_require__(452);
	
	var invariant = __webpack_require__(448);
	
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

/***/ 452:
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

/***/ 454:
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
	
	var React = __webpack_require__(425);
	var FixedDataTableCellGroup = __webpack_require__(455);
	
	var cx = __webpack_require__(443);
	var joinClasses = __webpack_require__(462);
	var translateDOMPositionXY = __webpack_require__(444);
	
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
	 * @providesModule FixedDataTableCellGroup.react
	 * @typechecks
	 */
	
	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var FixedDataTableHelper = __webpack_require__(456);
	var React = __webpack_require__(425);
	var FixedDataTableCell = __webpack_require__(460);
	
	var cx = __webpack_require__(443);
	var translateDOMPositionXY = __webpack_require__(444);
	
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
	 * @providesModule FixedDataTableHelper
	 * @typechecks
	 */
	
	'use strict';
	
	var Locale = __webpack_require__(457);
	var React = __webpack_require__(425);
	var FixedDataTableColumnGroup = __webpack_require__(458);
	var FixedDataTableColumn = __webpack_require__(459);
	
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

/***/ 457:
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

/***/ 458:
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
	
	var React = __webpack_require__(425);
	
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

/***/ 459:
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
	
	var React = __webpack_require__(425);
	
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
	 * @providesModule FixedDataTableCell.react
	 * @typechecks
	 */
	
	'use strict';
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var FixedDataTableCellDefault = __webpack_require__(461);
	var FixedDataTableHelper = __webpack_require__(456);
	var React = __webpack_require__(425);
	var cx = __webpack_require__(443);
	var joinClasses = __webpack_require__(462);
	
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
	 * @providesModule FixedDataTableCellDefault.react
	 * @typechecks
	 */
	
	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var React = __webpack_require__(425);
	
	var cx = __webpack_require__(443);
	var joinClasses = __webpack_require__(462);
	
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

/***/ 462:
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

/***/ 463:
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
	
	var DOMMouseMoveTracker = __webpack_require__(437);
	var Locale = __webpack_require__(457);
	var React = __webpack_require__(425);
	var ReactComponentWithPureRenderMixin = __webpack_require__(427);
	
	var clamp = __webpack_require__(453);
	var cx = __webpack_require__(443);
	
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

/***/ 464:
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
	
	var PrefixIntervalTree = __webpack_require__(465);
	var clamp = __webpack_require__(453);
	
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

/***/ 465:
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
	
	var invariant = __webpack_require__(448);
	
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
	 * @providesModule FixedDataTableWidthHelper
	 * @typechecks
	 */
	
	'use strict';
	
	var React = __webpack_require__(425);
	
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

/***/ 467:
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

/***/ 468:
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

/***/ 469:
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
	
	var React = __webpack_require__(425);
	
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

/***/ 470:
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
	
	var React = __webpack_require__(425);
	
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

/***/ 471:
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
	
	var React = __webpack_require__(425);
	var PropTypes = React.PropTypes;
	
	var cx = __webpack_require__(443);
	var joinClasses = __webpack_require__(462);
	var shallowEqual = __webpack_require__(468);
	
	var CellDefault = __webpack_require__(461);
	
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

/***/ 472:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(473);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(475)(content, {});
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

/***/ 473:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(474)();
	// imports
	
	
	// module
	exports.push([module.id, "/**\n * FixedDataTable v0.6.3 \n *\n * Copyright (c) 2015, Facebook, Inc.\n * All rights reserved.\n *\n * This source code is licensed under the BSD-style license found in the\n * LICENSE file in the root directory of this source tree. An additional grant\n * of patent rights can be found in the PATENTS file in the same directory.\n */\n\n/**\n * Copyright (c) 2015, Facebook, Inc.\n * All rights reserved.\n *\n * This source code is licensed under the BSD-style license found in the\n * LICENSE file in the root directory of this source tree. An additional grant\n * of patent rights can be found in the PATENTS file in the same directory.\n *\n * @providesModule fixedDataTableCellGroupLayout\n */\n\n.fixedDataTableCellGroupLayout_cellGroup {\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  left: 0;\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  white-space: nowrap;\n}\n\n.fixedDataTableCellGroupLayout_cellGroup > .public_fixedDataTableCell_main {\n  display: inline-block;\n  vertical-align: top;\n  white-space: normal;\n}\n\n.fixedDataTableCellGroupLayout_cellGroupWrapper {\n  position: absolute;\n  top: 0;\n}\n/**\n * Copyright (c) 2015, Facebook, Inc.\n * All rights reserved.\n *\n * This source code is licensed under the BSD-style license found in the\n * LICENSE file in the root directory of this source tree. An additional grant\n * of patent rights can be found in the PATENTS file in the same directory.\n *\n * @providesModule fixedDataTableCellLayout\n */\n\n.fixedDataTableCellLayout_main {\n  border-right-style: solid;\n  border-right-width: 1px;\n  border-width: 0 1px 0 0;\n  box-sizing: border-box;\n  display: block;\n  overflow: hidden;\n  position: absolute;\n  white-space: normal;\n}\n\n.fixedDataTableCellLayout_lastChild {\n  border-width: 0 1px 1px 0;\n}\n\n.fixedDataTableCellLayout_alignRight {\n  text-align: right;\n}\n\n.fixedDataTableCellLayout_alignCenter {\n  text-align: center;\n}\n\n.fixedDataTableCellLayout_wrap1 {\n  display: table;\n}\n\n.fixedDataTableCellLayout_wrap2 {\n  display: table-row;\n}\n\n.fixedDataTableCellLayout_wrap3 {\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.fixedDataTableCellLayout_columnResizerContainer {\n  position: absolute;\n  right: 0px;\n  width: 6px;\n  z-index: 1;\n}\n\n.fixedDataTableCellLayout_columnResizerContainer:hover {\n  cursor: ew-resize;\n}\n\n.fixedDataTableCellLayout_columnResizerContainer:hover .fixedDataTableCellLayout_columnResizerKnob {\n  visibility: visible;\n}\n\n.fixedDataTableCellLayout_columnResizerKnob {\n  position: absolute;\n  right: 0px;\n  visibility: hidden;\n  width: 4px;\n}\n/**\n * Copyright (c) 2015, Facebook, Inc.\n * All rights reserved.\n *\n * This source code is licensed under the BSD-style license found in the\n * LICENSE file in the root directory of this source tree. An additional grant\n * of patent rights can be found in the PATENTS file in the same directory.\n *\n * @providesModule fixedDataTableColumnResizerLineLayout\n */\n\n.fixedDataTableColumnResizerLineLayout_mouseArea {\n  cursor: ew-resize;\n  position: absolute;\n  right: -5px;\n  width: 12px;\n}\n\n.fixedDataTableColumnResizerLineLayout_main {\n  border-right-style: solid;\n  border-right-width: 1px;\n  box-sizing: border-box;\n  position: absolute;\n  z-index: 10;\n}\n\nbody[dir=\"rtl\"] .fixedDataTableColumnResizerLineLayout_main {\n  /* the resizer line is in the wrong position in RTL with no easy fix.\n   * Disabling is more useful than displaying it.\n   * #167 (github) should look into this and come up with a permanent fix.\n   */\n  display: none !important;\n}\n\n.fixedDataTableColumnResizerLineLayout_hiddenElem {\n  display: none !important;\n}\n/**\n * Copyright (c) 2015, Facebook, Inc.\n * All rights reserved.\n *\n * This source code is licensed under the BSD-style license found in the\n * LICENSE file in the root directory of this source tree. An additional grant\n * of patent rights can be found in the PATENTS file in the same directory.\n *\n * @providesModule fixedDataTableLayout\n */\n\n.fixedDataTableLayout_main {\n  border-style: solid;\n  border-width: 1px;\n  box-sizing: border-box;\n  overflow: hidden;\n  position: relative;\n}\n\n.fixedDataTableLayout_header,\n.fixedDataTableLayout_hasBottomBorder {\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n}\n\n.fixedDataTableLayout_footer .public_fixedDataTableCell_main {\n  border-top-style: solid;\n  border-top-width: 1px;\n}\n\n.fixedDataTableLayout_topShadow,\n.fixedDataTableLayout_bottomShadow {\n  height: 4px;\n  left: 0;\n  position: absolute;\n  right: 0;\n  z-index: 1;\n}\n\n.fixedDataTableLayout_bottomShadow {\n  margin-top: -4px;\n}\n\n.fixedDataTableLayout_rowsContainer {\n  overflow: hidden;\n  position: relative;\n}\n\n.fixedDataTableLayout_horizontalScrollbar {\n  bottom: 0;\n  position: absolute;\n}\n/**\n * Copyright (c) 2015, Facebook, Inc.\n * All rights reserved.\n *\n * This source code is licensed under the BSD-style license found in the\n * LICENSE file in the root directory of this source tree. An additional grant\n * of patent rights can be found in the PATENTS file in the same directory.\n *\n * @providesModule fixedDataTableRowLayout\n */\n\n.fixedDataTableRowLayout_main {\n  box-sizing: border-box;\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n}\n\n.fixedDataTableRowLayout_body {\n  left: 0;\n  position: absolute;\n  top: 0;\n}\n\n.fixedDataTableRowLayout_fixedColumnsDivider {\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  border-left-style: solid;\n  border-left-width: 1px;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 0;\n}\n\n.fixedDataTableRowLayout_columnsShadow {\n  width: 4px;\n}\n\n.fixedDataTableRowLayout_rowWrapper {\n  position: absolute;\n  top: 0;\n}\n/**\n * Copyright (c) 2015, Facebook, Inc.\n * All rights reserved.\n *\n * This source code is licensed under the BSD-style license found in the\n * LICENSE file in the root directory of this source tree. An additional grant\n * of patent rights can be found in the PATENTS file in the same directory.\n *\n * @providesModule ScrollbarLayout\n */\n\n.ScrollbarLayout_main {\n  box-sizing: border-box;\n  outline: none;\n  overflow: hidden;\n  position: absolute;\n  -webkit-transition-duration: 250ms;\n          transition-duration: 250ms;\n  -webkit-transition-timing-function: ease;\n          transition-timing-function: ease;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.ScrollbarLayout_mainVertical {\n  bottom: 0;\n  right: 0;\n  top: 0;\n  -webkit-transition-property: background-color width;\n          transition-property: background-color width;\n  width: 15px;\n}\n\n.ScrollbarLayout_mainVertical.public_Scrollbar_mainActive,\n.ScrollbarLayout_mainVertical:hover {\n  width: 17px;\n}\n\n.ScrollbarLayout_mainHorizontal {\n  bottom: 0;\n  height: 15px;\n  left: 0;\n  -webkit-transition-property: background-color height;\n          transition-property: background-color height;\n}\n\n/* Touching the scroll-track directly makes the scroll-track bolder */\n.ScrollbarLayout_mainHorizontal.public_Scrollbar_mainActive,\n.ScrollbarLayout_mainHorizontal:hover {\n  height: 17px;\n}\n\n.ScrollbarLayout_face {\n  left: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: 1;\n}\n\n/**\n * This selector renders the \"nub\" of the scrollface. The nub must\n * be rendered as pseudo-element so that it won't receive any UI events then\n * we can get the correct `event.offsetX` and `event.offsetY` from the\n * scrollface element while dragging it.\n */\n.ScrollbarLayout_face:after {\n  border-radius: 6px;\n  content: '';\n  display: block;\n  position: absolute;\n  -webkit-transition: background-color 250ms ease;\n          transition: background-color 250ms ease;\n}\n\n.ScrollbarLayout_faceHorizontal {\n  bottom: 0;\n  left: 0;\n  top: 0;\n}\n\n.ScrollbarLayout_faceHorizontal:after {\n  bottom: 4px;\n  left: 0;\n  top: 4px;\n  width: 100%;\n}\n\n.ScrollbarLayout_faceVertical {\n  left: 0;\n  right: 0;\n  top: 0;\n}\n\n.ScrollbarLayout_faceVertical:after {\n  height: 100%;\n  left: 4px;\n  right: 4px;\n  top: 0;\n}\n/**\n * Copyright (c) 2015, Facebook, Inc.\n * All rights reserved.\n *\n * This source code is licensed under the BSD-style license found in the\n * LICENSE file in the root directory of this source tree. An additional grant\n * of patent rights can be found in the PATENTS file in the same directory.\n *\n * @providesModule fixedDataTable\n *\n */\n\n/**\n * Table.\n */\n.public_fixedDataTable_main {\n  border-color: #d3d3d3;\n}\n\n.public_fixedDataTable_header,\n.public_fixedDataTable_hasBottomBorder {\n  border-color: #d3d3d3;\n}\n\n.public_fixedDataTable_header .public_fixedDataTableCell_main {\n  font-weight: bold;\n}\n\n.public_fixedDataTable_header,\n.public_fixedDataTable_header .public_fixedDataTableCell_main {\n  background-color: #f6f7f8;\n  background-image: -webkit-linear-gradient(#fff, #efefef);\n  background-image: linear-gradient(#fff, #efefef);\n}\n\n.public_fixedDataTable_footer .public_fixedDataTableCell_main {\n  background-color: #f6f7f8;\n  border-color: #d3d3d3;\n}\n\n.public_fixedDataTable_topShadow {\n  background: 0 0 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAECAYAAABP2FU6AAAAF0lEQVR4AWPUkNeSBhHCjJoK2twgFisAFagCCp3pJlAAAAAASUVORK5CYII=) repeat-x;\n}\n\n.public_fixedDataTable_bottomShadow {\n  background: 0 0 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAECAYAAABP2FU6AAAAHElEQVQI12MwNjZmZdAT1+Nm0JDWEGZQk1GTBgAWkwIeAEp52AAAAABJRU5ErkJggg==) repeat-x;\n}\n\n.public_fixedDataTable_horizontalScrollbar .public_Scrollbar_mainHorizontal {\n  background-color: #fff;\n}\n/**\n * Copyright (c) 2015, Facebook, Inc.\n * All rights reserved.\n *\n * This source code is licensed under the BSD-style license found in the\n * LICENSE file in the root directory of this source tree. An additional grant\n * of patent rights can be found in the PATENTS file in the same directory.\n *\n * @providesModule fixedDataTableCell\n */\n\n/**\n * Table cell.\n */\n.public_fixedDataTableCell_main {\n  background-color: #fff;\n  border-color: #d3d3d3;\n}\n\n.public_fixedDataTableCell_highlighted {\n  background-color: #f4f4f4;\n}\n\n.public_fixedDataTableCell_cellContent {\n  padding: 8px;\n}\n\n.public_fixedDataTableCell_columnResizerKnob {\n  background-color: #0284ff;\n}\n/**\n * Copyright (c) 2015, Facebook, Inc.\n * All rights reserved.\n *\n * This source code is licensed under the BSD-style license found in the\n * LICENSE file in the root directory of this source tree. An additional grant\n * of patent rights can be found in the PATENTS file in the same directory.\n *\n * @providesModule fixedDataTableColumnResizerLine\n *\n */\n\n/**\n * Column resizer line.\n */\n.public_fixedDataTableColumnResizerLine_main {\n  border-color: #0284ff;\n}\n/**\n * Copyright (c) 2015, Facebook, Inc.\n * All rights reserved.\n *\n * This source code is licensed under the BSD-style license found in the\n * LICENSE file in the root directory of this source tree. An additional grant\n * of patent rights can be found in the PATENTS file in the same directory.\n *\n * @providesModule fixedDataTableRow\n */\n\n/**\n * Table row.\n */\n.public_fixedDataTableRow_main {\n  background-color: #fff;\n}\n\n.public_fixedDataTableRow_highlighted,\n.public_fixedDataTableRow_highlighted .public_fixedDataTableCell_main {\n  background-color: #f6f7f8;\n}\n\n.public_fixedDataTableRow_fixedColumnsDivider {\n  border-color: #d3d3d3;\n}\n\n.public_fixedDataTableRow_columnsShadow {\n  background: 0 0 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQIHWPSkNeSBmJhTQVtbiDNCgASagIIuJX8OgAAAABJRU5ErkJggg==) repeat-y;\n}\n/**\n * Copyright (c) 2015, Facebook, Inc.\n * All rights reserved.\n *\n * This source code is licensed under the BSD-style license found in the\n * LICENSE file in the root directory of this source tree. An additional grant\n * of patent rights can be found in the PATENTS file in the same directory.\n *\n * @providesModule Scrollbar\n *\n */\n\n/**\n * Scrollbars.\n */\n\n/* Touching the scroll-track directly makes the scroll-track bolder */\n.public_Scrollbar_main.public_Scrollbar_mainActive,\n.public_Scrollbar_main:hover {\n  background-color: rgba(255, 255, 255, 0.8);\n}\n\n.public_Scrollbar_mainOpaque,\n.public_Scrollbar_mainOpaque.public_Scrollbar_mainActive,\n.public_Scrollbar_mainOpaque:hover {\n  background-color: #fff;\n}\n\n.public_Scrollbar_face:after {\n  background-color: #c2c2c2;\n}\n\n.public_Scrollbar_main:hover .public_Scrollbar_face:after,\n.public_Scrollbar_mainActive .public_Scrollbar_face:after,\n.public_Scrollbar_faceActive:after {\n  background-color: #7d7d7d;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 476:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx2 = __webpack_require__(1);
	
	var _jsx3 = _interopRequireDefault(_jsx2);
	
	var _getPrototypeOf = __webpack_require__(406);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(292);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(293);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(410);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(414);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(58);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _fixedDataTable = __webpack_require__(422);
	
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

/***/ 479:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _regenerator = __webpack_require__(480);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	exports.default = optionsSaga;
	
	var _effects = __webpack_require__(483);
	
	var _sagasDB = __webpack_require__(484);
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvT3B0aW9uc0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvT3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9PcHRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NpdGVUYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2ZpeGVkLWRhdGEtdGFibGUvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvRml4ZWREYXRhVGFibGVSb290LmpzIiwid2VicGFjazovLy8uL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9GaXhlZERhdGFUYWJsZS5yZWFjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvUmVhY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL0ZpeGVkRGF0YVRhYmxlTmV3LnJlYWN0LmpzIiwid2VicGFjazovLy8uL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9SZWFjdENvbXBvbmVudFdpdGhQdXJlUmVuZGVyTWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL1JlYWN0V2hlZWxIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9lbXB0eUZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9ub3JtYWxpemVXaGVlbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvVXNlckFnZW50X0RFUFJFQ0FURUQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL2lzRXZlbnRTdXBwb3J0ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL0V4ZWN1dGlvbkVudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9yZXF1ZXN0QW5pbWF0aW9uRnJhbWVQb2x5ZmlsbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvbmF0aXZlUmVxdWVzdEFuaW1hdGlvbkZyYW1lLmpzIiwid2VicGFjazovLy8uL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9TY3JvbGxiYXIucmVhY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL0RPTU1vdXNlTW92ZVRyYWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL0V2ZW50TGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL2NhbmNlbEFuaW1hdGlvbkZyYW1lUG9seWZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL0tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL1JlYWN0RE9NLmpzIiwid2VicGFjazovLy8uL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9jc3NWYXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL2N4LmpzIiwid2VicGFjazovLy8uL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC90cmFuc2xhdGVET01Qb3NpdGlvblhZLmpzIiwid2VicGFjazovLy8uL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9Ccm93c2VyU3VwcG9ydENvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL2dldFZlbmRvclByZWZpeGVkTmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvY2FtZWxpemUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL2ludmFyaWFudC5qcyIsIndlYnBhY2s6Ly8vLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvRml4ZWREYXRhVGFibGVCdWZmZXJlZFJvd3MucmVhY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL0ZpeGVkRGF0YVRhYmxlUm93QnVmZmVyLmpzIiwid2VicGFjazovLy8uL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9JbnRlZ2VyQnVmZmVyU2V0LmpzIiwid2VicGFjazovLy8uL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9IZWFwLmpzIiwid2VicGFjazovLy8uL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9jbGFtcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvRml4ZWREYXRhVGFibGVSb3cucmVhY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL0ZpeGVkRGF0YVRhYmxlQ2VsbEdyb3VwLnJlYWN0LmpzIiwid2VicGFjazovLy8uL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9GaXhlZERhdGFUYWJsZUhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvTG9jYWxlLmpzIiwid2VicGFjazovLy8uL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9GaXhlZERhdGFUYWJsZUNvbHVtbkdyb3VwLnJlYWN0LmpzIiwid2VicGFjazovLy8uL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9GaXhlZERhdGFUYWJsZUNvbHVtbi5yZWFjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvRml4ZWREYXRhVGFibGVDZWxsLnJlYWN0LmpzIiwid2VicGFjazovLy8uL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9GaXhlZERhdGFUYWJsZUNlbGxEZWZhdWx0LnJlYWN0LmpzIiwid2VicGFjazovLy8uL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9qb2luQ2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvRml4ZWREYXRhVGFibGVDb2x1bW5SZXNpemVIYW5kbGUucmVhY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL0ZpeGVkRGF0YVRhYmxlU2Nyb2xsSGVscGVyLmpzIiwid2VicGFjazovLy8uL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9QcmVmaXhJbnRlcnZhbFRyZWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL0ZpeGVkRGF0YVRhYmxlV2lkdGhIZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL2RlYm91bmNlQ29yZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvc2hhbGxvd0VxdWFsLmpzIiwid2VicGFjazovLy8uL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9GaXhlZERhdGFUYWJsZUNvbHVtbk5ldy5yZWFjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvRml4ZWREYXRhVGFibGVDb2x1bW5Hcm91cE5ldy5yZWFjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvRml4ZWREYXRhVGFibGVDZWxsVHJhbnNpdGlvbi5yZWFjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2ZpeGVkLWRhdGEtdGFibGUvZGlzdC9maXhlZC1kYXRhLXRhYmxlLmNzcz8wMWY3Iiwid2VicGFjazovLy8uL34vZml4ZWQtZGF0YS10YWJsZS9kaXN0L2ZpeGVkLWRhdGEtdGFibGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NvcnRhYmxlSGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zYWdhcy9vcHRpb25zU2FnYXMuanMiXSwibmFtZXMiOlsiaW5pdCIsInRoZW4iLCJzYWdhTWlkZGxld2FyZSIsInN0b3JlIiwicnVuIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlZHVjZXIiLCJzdGF0ZSIsInNpdGVzIiwiZmV0Y2hUb2RheVN0YXRzIiwibWVzc2FnZSIsImFjdGlvbiIsInR5cGUiLCIkc2V0IiwiZSIsIk9wdGlvbnNBcHAiLCJwcm9wcyIsImFkZFNpdGUiLCJDb21wb25lbnQiLCJkaXNwYXRjaCIsInNpdGUiLCJmZXRjaFNpdGVzIiwiU2l0ZVRhYmxlIiwiY29uc29sZSIsImxvZyIsIm9uSGVhZGVyQ2xpY2siLCJiaW5kIiwic29ydEJ5Iiwib3JkZXIiLCJzb3J0UHJvcHMiLCJjb2x1bW4iLCJzZXRTdGF0ZSIsInNvcnQiLCJhIiwiYiIsIm1heEVudHJ5IiwiaXRlbUNvdW50IiwibGVuZ3RoIiwiY29sdW1uQ291bnQiLCJmaW5pc2hlZENvbHVtbnMiLCJmaW5pc2hlZFRhYmxlIiwidG9wVGVuIiwic2xpY2UiLCJoYXNPd25Qcm9wZXJ0eSIsInB1c2giLCJjIiwicm93SW5kZXgiLCJTb3J0YWJsZUhlYWRlciIsInByZXZlbnREZWZhdWx0Iiwib3B0aW9uc1NhZ2EiLCJzYWdhcyIsImZldGNoU2l0ZXNTYWdhIiwiYWRkU2l0ZVNhZ2EiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFHQSxxQkFBR0EsSUFBSCxHQUFVQyxJQUFWLENBQWUsWUFBTTtBQUNuQixPQUFNQyxpQkFBaUIsMEJBQXZCO0FBQ0EsT0FBTUMsUUFBUSwyQ0FBcUIsNEJBQWdCRCxjQUFoQixDQUFyQixDQUFkO0FBQ0FBLGtCQUFlRSxHQUFmO0FBQ0E7QUFB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVCxRQUFPO0FBQ1A7QUFDQSxJQUFHOztBQUVIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVMsR0FBRztBQUNaO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSztBQUNMLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVELGtDOzs7Ozs7OztBQ3RnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsMEM7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsb0RBQW1ELGdCQUFnQixzQkFBc0IsT0FBTywyQkFBMkIsMEJBQTBCLHlEQUF5RCwyQkFBMkIsRUFBRSxFQUFFLEVBQUUsZUFBZTs7QUFFOVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCO0FBQ2hCLFFBQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0I7QUFDaEIsUUFBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0IsMkNBQTJDLEVBQUU7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBa0Isa0RBQWtELEVBQUU7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBSztBQUNMLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBdUIsMkJBQTJCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CLHdDQUF3QztBQUMzRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxvQkFBbUIsMkJBQTJCO0FBQzlDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0Esb0JBQW1CLG9CQUFvQjtBQUN2QztBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFD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LG9DOzs7Ozs7O0FDeEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0M7Ozs7Ozs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDOzs7Ozs7O0FDbk1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF1QjtBQUN2Qjs7QUFFQTtBQUNBLGlCQUFnQjtBQUNoQiw4QkFBNkI7QUFDN0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0EsNEVBQTJFO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVDOzs7Ozs7O0FDclJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE9BQU87QUFDbEIsWUFBVyxTQUFTO0FBQ3BCLGFBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2Q0FBNEM7QUFDNUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG1DOzs7Ozs7O0FDM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHVDOzs7Ozs7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQSx3Qzs7Ozs7Ozs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsOEM7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLG9CQUFtQixvQkFBb0I7QUFDdkMsSUFBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTs7QUFFQSw0Qjs7Ozs7OztBQzli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QUFDQSxZQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBVyxjQUFjO0FBQ3pCO0FBQ0EsWUFBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLElBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1Qzs7Ozs7OztBQ3ZHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5Qjs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQsd0M7Ozs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRCxtQzs7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQsdUM7Ozs7Ozs7O0FDbExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7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Ozs7Z0JBRWFELFc7O0FBQVYsVUFBVUEsV0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFDUCxtQkFBS0MsTUFBTUMsY0FBWCxDQURPOztBQUFBO0FBRWI1QixtQkFBUUMsR0FBUixDQUFZLElBQVo7QUFGYTtBQUFBLGtCQUdQLG1CQUFLMEIsTUFBTUUsV0FBWCxDQUhPOztBQUFBO0FBSWI3QixtQkFBUUMsR0FBUixDQUFZLFVBQVo7O0FBSmE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRSIsImZpbGUiOiJPcHRpb25zQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSAncmVkdXgtc2FnYSc7XG5pbXBvcnQgcmVkdWNlciBmcm9tICcuL3JlZHVjZXJzL09wdGlvbnMuanMnO1xuaW1wb3J0IE9wdGlvbnNBcHAgZnJvbSAnLi9jb250YWluZXJzL09wdGlvbnMuanMnO1xuaW1wb3J0IG9wdGlvbnNTYWdhcyBmcm9tICcuL3NhZ2FzL29wdGlvbnNTYWdhcy5qcyc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XG5pbXBvcnQgJ2pxdWVyeS9qcXVlcnkubWluLmpzJztcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvanMvYm9vdHN0cmFwLm1pbi5qcyc7XG5pbXBvcnQgQkwgZnJvbSAnLi9ibG9ja0xpc3QuanMnO1xuXG5cbkJMLmluaXQoKS50aGVuKCgpID0+IHtcbiAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGFwcGx5TWlkZGxld2FyZShzYWdhTWlkZGxld2FyZSkpO1xuICBzYWdhTWlkZGxld2FyZS5ydW4ob3B0aW9uc1NhZ2FzKTtcbiAgcmVuZGVyKFxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgPE9wdGlvbnNBcHAgLz5cbiAgICA8L1Byb3ZpZGVyPixcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnT3B0aW9uc0FwcCcpXG4gICk7XG59KTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL09wdGlvbnNBcHAuanNcbiAqKi8iLCJpbXBvcnQgdXBkYXRlIGZyb20gJ3JlYWN0L2xpYi91cGRhdGUnO1xuaW1wb3J0IEJMIGZyb20gJy4uL2Jsb2NrTGlzdC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSB7IHNpdGVzOiBCTC5mZXRjaFRvZGF5U3RhdHMoKSwgbWVzc2FnZTogJycgfSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdBRERfU0lURV9TVUNDRUVERUQnOlxuICAgICAgcmV0dXJuIHVwZGF0ZShzdGF0ZSwge1xuICAgICAgICBtZXNzYWdlOiB7ICRzZXQ6IGFjdGlvbi5tZXNzYWdlIH1cbiAgICAgIH0pO1xuICAgIGNhc2UgJ0FERF9TSVRFX0ZBSUxFRCc6XG4gICAgICByZXR1cm4gdXBkYXRlKHN0YXRlLCB7XG4gICAgICAgIG1lc3NhZ2U6IHsgJHNldDogYWN0aW9uLmUgfVxuICAgICAgfSk7XG4gICAgY2FzZSAnU0lURV9GRVRDSF9VTlNVQ0NFU1NGVUwnOlxuICAgICAgcmV0dXJuIHVwZGF0ZShzdGF0ZSwge1xuICAgICAgICBtZXNzYWdlOiB7ICRzZXQ6IGFjdGlvbi5lIH1cbiAgICAgIH0pO1xuICAgIGNhc2UgJ1NJVEVfRkVUQ0hfU1VDQ0VTU0ZVTCc6XG4gICAgICByZXR1cm4gdXBkYXRlKHN0YXRlLCB7XG4gICAgICAgIHNpdGVzOiB7ICRzZXQ6IGFjdGlvbi5zaXRlcyB9XG4gICAgICB9KTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yZWR1Y2Vycy9PcHRpb25zLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgU2l0ZVRhYmxlIGZyb20gJy4uL2NvbXBvbmVudHMvU2l0ZVRhYmxlLmpzJztcbmltcG9ydCBJbnB1dEJhciBmcm9tICcuLi9jb21wb25lbnRzL0lucHV0QmFyLmpzJztcblxuaW1wb3J0IHsgYWRkU2l0ZSwgZmV0Y2hTaXRlcyB9IGZyb20gJy4uL2FjdGlvbnMvY29tbW9uLmpzJztcblxuY2xhc3MgT3B0aW9uc0FwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBpZD1cIk9wdGlvbnNBcHBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxuICAgICAgICAgICAgICA8SW5wdXRCYXIgYWRkU2l0ZT17dGhpcy5wcm9wcy5hZGRTaXRlfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XG4gICAgICAgICAgICAgIDxTaXRlVGFibGUgc2l0ZXM9e3RoaXMucHJvcHMuc2l0ZXN9IG1heEVudHJ5PXsxMH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgc3RhdGUgPT4gKFxuICAgIHtcbiAgICAgIHNpdGVzOiBzdGF0ZS5zaXRlcyxcbiAgICAgIG1lc3NhZ2U6IHN0YXRlLm1lc3NhZ2VcbiAgICB9XG4gICksXG4gIGRpc3BhdGNoID0+IChcbiAgICB7XG4gICAgICBhZGRTaXRlOiBzaXRlID0+IGRpc3BhdGNoKGFkZFNpdGUoc2l0ZSkpLFxuICAgICAgZmV0Y2hTaXRlczogKCkgPT4gZGlzcGF0Y2goZmV0Y2hTaXRlcygpKVxuICAgIH1cbiAgKVxuKShPcHRpb25zQXBwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbnRhaW5lcnMvT3B0aW9ucy5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUYWJsZSwgQ29sdW1uLCBDZWxsIH0gZnJvbSAnZml4ZWQtZGF0YS10YWJsZSc7XG5pbXBvcnQgJ2ZpeGVkLWRhdGEtdGFibGUvZGlzdC9maXhlZC1kYXRhLXRhYmxlLmNzcyc7XG5pbXBvcnQgU29ydGFibGVIZWFkZXIgZnJvbSAnLi9Tb3J0YWJsZUhlYWRlci5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpdGVUYWJsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIC8vIERlZmF1bHQgdG8gRGVzY2VuZGluZyBPcmRlciBvbiB0aW1lU3BlbnRcbiAgICBjb25zb2xlLmxvZyhwcm9wcyk7XG4gICAgdGhpcy5vbkhlYWRlckNsaWNrID0gdGhpcy5vbkhlYWRlckNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNvcnRCeTogJ3RpbWVTcGVudCcsXG4gICAgICBvcmRlcjogMSxcbiAgICAgIHNpdGVzOiB0aGlzLnNvcnRQcm9wcyhwcm9wcy5zaXRlcywgJ3RpbWVTcGVudCcsIDEpXG4gICAgfTtcbiAgfVxuICBvbkhlYWRlckNsaWNrKGNvbHVtbikge1xuICAgIGNvbnN0IG9yZGVyID0gKGNvbHVtbiA9PT0gdGhpcy5zdGF0ZS5zb3J0QnkpID8gLXRoaXMuc3RhdGUub3JkZXIgOiAxO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc29ydEJ5OiBjb2x1bW4sXG4gICAgICBvcmRlcixcbiAgICAgIHNpdGVzOiB0aGlzLnNvcnRQcm9wcyh0aGlzLnByb3BzLnNpdGVzLCBjb2x1bW4sIG9yZGVyKVxuICAgIH0pO1xuICB9XG4gIHNvcnRQcm9wcyhzaXRlcywgc29ydEJ5LCBvcmRlcikge1xuICAgIHJldHVybiBzaXRlcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICBpZiAoYVtzb3J0QnldIDwgYltzb3J0QnldKSB7XG4gICAgICAgIHJldHVybiBvcmRlciAqIDE7XG4gICAgICB9XG4gICAgICBpZiAoYVtzb3J0QnldID4gYltzb3J0QnldKSB7XG4gICAgICAgIHJldHVybiBvcmRlciAqIC0xO1xuICAgICAgfVxuICAgICAgcmV0dXJuIDA7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBtYXhFbnRyeSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBpdGVtQ291bnQgPSAodGhpcy5zdGF0ZS5zaXRlcy5sZW5ndGggPCBtYXhFbnRyeSkgPyB0aGlzLnN0YXRlLnNpdGVzLmxlbmd0aCA6IG1heEVudHJ5O1xuICAgIGxldCBjb2x1bW5Db3VudCA9IDA7XG4gICAgY29uc3QgZmluaXNoZWRDb2x1bW5zID0gW107XG4gICAgbGV0IGZpbmlzaGVkVGFibGU7XG4gICAgaWYgKCFpdGVtQ291bnQpIHtcbiAgICAgIGZpbmlzaGVkVGFibGUgPSA8ZGl2Pk5vdGhpbmcgdG8gU2hvdzwvZGl2PjtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc2l0ZXMgPSB0aGlzLnN0YXRlLnNpdGVzO1xuICAgICAgY29uc3QgdG9wVGVuID0gc2l0ZXMuc2xpY2UoMCwgaXRlbUNvdW50KTtcbiAgICAgIGZvciAoY29uc3QgY29sdW1uIGluIHNpdGVzWzBdKSB7XG4gICAgICAgIGlmIChzaXRlc1swXS5oYXNPd25Qcm9wZXJ0eShjb2x1bW4pKSB7XG4gICAgICAgICAgY29sdW1uQ291bnQgKz0gMTtcbiAgICAgICAgICBmaW5pc2hlZENvbHVtbnMucHVzaChcbiAgICAgICAgICAgIDxDb2x1bW5cbiAgICAgICAgICAgICAgaGVhZGVyPTxTb3J0YWJsZUhlYWRlciBjb2x1bW49e2NvbHVtbn0gb25IZWFkZXJDbGljaz17dGhpcy5vbkhlYWRlckNsaWNrfSAvPlxuICAgICAgICAgICAgICBrZXk9e2NvbHVtbn1cbiAgICAgICAgICAgICAgY2VsbD17YyA9PiAoXG4gICAgICAgICAgICAgICAgPENlbGw+XG4gICAgICAgICAgICAgICAgICB7dG9wVGVuW2Mucm93SW5kZXhdW2NvbHVtbl19XG4gICAgICAgICAgICAgICAgPC9DZWxsPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICB3aWR0aD17MjAwfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmaW5pc2hlZFRhYmxlID0gKFxuICAgICAgICA8VGFibGVcbiAgICAgICAgICByb3dzQ291bnQ9e2l0ZW1Db3VudH1cbiAgICAgICAgICByb3dIZWlnaHQ9ezMwfVxuICAgICAgICAgIGhlYWRlckhlaWdodD17MzB9XG4gICAgICAgICAgd2lkdGg9e2NvbHVtbkNvdW50ICogMjAwfVxuICAgICAgICAgIGhlaWdodD17KGl0ZW1Db3VudCArIDEpICogMzAgKyAyfVxuICAgICAgICA+XG4gICAgICAgICAge2ZpbmlzaGVkQ29sdW1uc31cbiAgICAgICAgPC9UYWJsZT5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICBmaW5pc2hlZFRhYmxlXG4gICAgKTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9TaXRlVGFibGUuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvRml4ZWREYXRhVGFibGVSb290Jyk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9maXhlZC1kYXRhLXRhYmxlL21haW4uanNcbiAqKiBtb2R1bGUgaWQgPSA0MjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIEZpeGVkRGF0YVRhYmxlUm9vdFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIEZpeGVkRGF0YVRhYmxlID0gcmVxdWlyZSgnLi9GaXhlZERhdGFUYWJsZS5yZWFjdCcpO1xudmFyIEZpeGVkRGF0YVRhYmxlQ2VsbERlZmF1bHQgPSByZXF1aXJlKCcuL0ZpeGVkRGF0YVRhYmxlQ2VsbERlZmF1bHQucmVhY3QnKTtcbnZhciBGaXhlZERhdGFUYWJsZUNvbHVtbiA9IHJlcXVpcmUoJy4vRml4ZWREYXRhVGFibGVDb2x1bW4ucmVhY3QnKTtcbnZhciBGaXhlZERhdGFUYWJsZUNvbHVtbkdyb3VwID0gcmVxdWlyZSgnLi9GaXhlZERhdGFUYWJsZUNvbHVtbkdyb3VwLnJlYWN0Jyk7XG5cbnZhciBGaXhlZERhdGFUYWJsZVJvb3QgPSB7XG4gIENlbGw6IEZpeGVkRGF0YVRhYmxlQ2VsbERlZmF1bHQsXG4gIENvbHVtbjogRml4ZWREYXRhVGFibGVDb2x1bW4sXG4gIENvbHVtbkdyb3VwOiBGaXhlZERhdGFUYWJsZUNvbHVtbkdyb3VwLFxuICBUYWJsZTogRml4ZWREYXRhVGFibGVcbn07XG5cbkZpeGVkRGF0YVRhYmxlUm9vdC52ZXJzaW9uID0gJzAuNi4zJztcbm1vZHVsZS5leHBvcnRzID0gRml4ZWREYXRhVGFibGVSb290O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvRml4ZWREYXRhVGFibGVSb290LmpzXG4gKiogbW9kdWxlIGlkID0gNDIzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBGaXhlZERhdGFUYWJsZS5yZWFjdFxuICovXG5cbi8qKlxuICogVFJBTlNJVElPTiBTSElNXG4gKiBUaGlzIGFjdHMgdG8gcHJvdmlkZSBhbiBpbnRlcm1lZGlhdGUgbWFwcGluZyBmcm9tIHRoZSBvbGQgQVBJIHRvIHRoZSBuZXcgQVBJXG4gKlxuICogUmVtb3ZlIHRoaXMgZW50aXJlIGZpbGUgYW5kIHJlcGxhY2UgdGhlIHR3byBsaW5lcyBpbiBGaXhlZERhdGFUYWJsZVJvb3RcbiAqIHdoZW4gcmVhZHkgdG8gY29udGludWUgdG8gdGhlIG5ldyBBUEkuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCcuL1JlYWN0Jyk7XG5cbnZhciBSZWFjdENoaWxkcmVuID0gUmVhY3QuQ2hpbGRyZW47XG5cbnZhciBQcm9wVHlwZXMgPSBSZWFjdC5Qcm9wVHlwZXM7XG5cbi8vIE5ldyBUYWJsZSBBUElcbnZhciBUYWJsZSA9IHJlcXVpcmUoJy4vRml4ZWREYXRhVGFibGVOZXcucmVhY3QnKTtcbnZhciBDb2x1bW4gPSByZXF1aXJlKCcuL0ZpeGVkRGF0YVRhYmxlQ29sdW1uTmV3LnJlYWN0Jyk7XG52YXIgQ29sdW1uR3JvdXAgPSByZXF1aXJlKCcuL0ZpeGVkRGF0YVRhYmxlQ29sdW1uR3JvdXBOZXcucmVhY3QnKTtcblxuLy8gVHJhbnNpdGlvbiBDZWxsXG52YXIgVHJhbnNpdGlvbkNlbGwgPSByZXF1aXJlKCcuL0ZpeGVkRGF0YVRhYmxlQ2VsbFRyYW5zaXRpb24ucmVhY3QnKTtcblxudmFyIE5FWFRfVkVSU0lPTiA9ICcwLjcuMCc7XG52YXIgRE9DVU1FTlRBVElPTl9VUkwgPSAnaHR0cHM6Ly9mYnVybC5jb20vRml4ZWREYXRhVGFibGUtdjAuNic7XG5cbnZhciBFTVBUWV9PQkpFQ1QgPSB7fTtcblxuLyoqXG4gKiBOb3RpZnkgaW4gY29uc29sZSB0aGF0IHNvbWUgcHJvcCBoYXMgYmVlbiBkZXByZWNhdGVkLlxuICovXG52YXIgbm90aWZpZWQgPSB7fTtcbmZ1bmN0aW9uIG5vdGlmeURlcHJlY2F0ZWQocHJvcCwgcmVhc29uKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKCFub3RpZmllZFtwcm9wXSkge1xuICAgICAgY29uc29sZS53YXJuKCdgJyArIHByb3AgKyAnYCB3aWxsIGJlIERFUFJFQ0FURUQgaW4gdmVyc2lvbiAnICsgTkVYVF9WRVJTSU9OICsgJyBvZiBGaXhlZERhdGFUYWJsZSBhbmQgYmV5b25kLiBcXG4nICsgcmVhc29uICsgJ1xcbicgKyAnUmVhZCB0aGUgZG9jcyBhdDogJyArIERPQ1VNRU5UQVRJT05fVVJMKTtcbiAgICAgIG5vdGlmaWVkW3Byb3BdID0gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBEYXRhIGdyaWQgY29tcG9uZW50IHdpdGggZml4ZWQgb3Igc2Nyb2xsYWJsZSBoZWFkZXIgYW5kIGNvbHVtbnMuXG4gKlxuICogVGhpcyBpcyBjdXJyZW50bHkgaW4gYSB0cmFuc2l0aW9uIG1vZGUsIGFzIHRoZSBuZXcgQVBJIGlzIHVzZWQuXG4gKiBERVBSRUNBVEVEIGVuZHBvaW50cyB3b3JrLCBidXQgd2lsbCBub3QgYmUgc3VwcG9ydGVkIGluIGxhdGVyIHZlcnNpb25zLlxuICpcbiAqIFRoZSBsYXlvdXQgb2YgdGhlIGRhdGEgdGFibGUgaXMgYXMgZm9sbG93czpcbiAqXG4gKiBgYGBcbiAqICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rXG4gKiB8IEZpeGVkIENvbHVtbiBHcm91cCAgICB8IFNjcm9sbGFibGUgQ29sdW1uIEdyb3VwICAgfFxuICogfCBIZWFkZXIgICAgICAgICAgICAgICAgfCBIZWFkZXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tK1xuICogfCAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgRml4ZWQgSGVhZGVyIENvbHVtbnMgIHwgU2Nyb2xsYWJsZSBIZWFkZXIgQ29sdW1ucyB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLStcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8IEZpeGVkIEJvZHkgQ29sdW1ucyAgICB8IFNjcm9sbGFibGUgQm9keSBDb2x1bW5zICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCBGaXhlZCBGb290ZXIgQ29sdW1ucyAgfCBTY3JvbGxhYmxlIEZvb3RlciBDb2x1bW5zIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tK1xuICogYGBgXG4gKlxuICogLSBGaXhlZCBDb2x1bW4gR3JvdXAgSGVhZGVyOiBUaGVzZSBhcmUgdGhlIGhlYWRlcnMgZm9yIGEgZ3JvdXBcbiAqICAgb2YgY29sdW1ucyBpZiBpbmNsdWRlZCBpbiB0aGUgdGFibGUgdGhhdCBkbyBub3Qgc2Nyb2xsXG4gKiAgIHZlcnRpY2FsbHkgb3IgaG9yaXpvbnRhbGx5LlxuICpcbiAqIC0gU2Nyb2xsYWJsZSBDb2x1bW4gR3JvdXAgSGVhZGVyOiBUaGUgaGVhZGVyIGZvciBhIGdyb3VwIG9mIGNvbHVtbnNcbiAqICAgdGhhdCBkbyBub3QgbW92ZSB3aGlsZSBzY3JvbGxpbmcgdmVydGljYWxseSwgYnV0IG1vdmUgaG9yaXpvbnRhbGx5XG4gKiAgIHdpdGggdGhlIGhvcml6b250YWwgc2Nyb2xsaW5nLlxuICpcbiAqIC0gRml4ZWQgSGVhZGVyIENvbHVtbnM6IFRoZSBoZWFkZXIgY29sdW1ucyB0aGF0IGRvIG5vdCBtb3ZlIHdoaWxlIHNjcm9sbGluZ1xuICogICB2ZXJ0aWNhbGx5IG9yIGhvcml6b250YWxseS5cbiAqXG4gKiAtIFNjcm9sbGFibGUgSGVhZGVyIENvbHVtbnM6IFRoZSBoZWFkZXIgY29sdW1ucyB0aGF0IGRvIG5vdCBtb3ZlXG4gKiAgIHdoaWxlIHNjcm9sbGluZyB2ZXJ0aWNhbGx5LCBidXQgbW92ZSBob3Jpem9udGFsbHkgd2l0aCB0aGUgaG9yaXpvbnRhbFxuICogICBzY3JvbGxpbmcuXG4gKlxuICogLSBGaXhlZCBCb2R5IENvbHVtbnM6IFRoZSBib2R5IGNvbHVtbnMgdGhhdCBkbyBub3QgbW92ZSB3aGlsZSBzY3JvbGxpbmdcbiAqICAgaG9yaXpvbnRhbGx5LCBidXQgbW92ZSB2ZXJ0aWNhbGx5IHdpdGggdGhlIHZlcnRpY2FsIHNjcm9sbGluZy5cbiAqXG4gKiAtIFNjcm9sbGFibGUgQm9keSBDb2x1bW5zOiBUaGUgYm9keSBjb2x1bW5zIHRoYXQgbW92ZSB3aGlsZSBzY3JvbGxpbmdcbiAqICAgdmVydGljYWxseSBvciBob3Jpem9udGFsbHkuXG4gKi9cbnZhciBUcmFuc2l0aW9uVGFibGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnVHJhbnNpdGlvblRhYmxlJyxcblxuICBwcm9wVHlwZXM6IHtcbiAgICAvKipcbiAgICAgKiBQaXhlbCB3aWR0aCBvZiB0YWJsZS4gSWYgYWxsIGNvbHVtbnMgZG8gbm90IGZpdCxcbiAgICAgKiBhIGhvcml6b250YWwgc2Nyb2xsYmFyIHdpbGwgYXBwZWFyLlxuICAgICAqL1xuICAgIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBQaXhlbCBoZWlnaHQgb2YgdGFibGUuIElmIGFsbCByb3dzIGRvIG5vdCBmaXQsXG4gICAgICogYSB2ZXJ0aWNhbCBzY3JvbGxiYXIgd2lsbCBhcHBlYXIuXG4gICAgICpcbiAgICAgKiBFaXRoZXIgYGhlaWdodGAgb3IgYG1heEhlaWdodGAgbXVzdCBiZSBzcGVjaWZpZWQuXG4gICAgICovXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLyoqXG4gICAgICogTWF4aW11bSBwaXhlbCBoZWlnaHQgb2YgdGFibGUuIElmIGFsbCByb3dzIGRvIG5vdCBmaXQsXG4gICAgICogYSB2ZXJ0aWNhbCBzY3JvbGxiYXIgd2lsbCBhcHBlYXIuXG4gICAgICpcbiAgICAgKiBFaXRoZXIgYGhlaWdodGAgb3IgYG1heEhlaWdodGAgbXVzdCBiZSBzcGVjaWZpZWQuXG4gICAgICovXG4gICAgbWF4SGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLyoqXG4gICAgICogUGl4ZWwgaGVpZ2h0IG9mIHRhYmxlJ3Mgb3duZXIsIHRoaXMgaXMgdXNlZCBpbiBhIG1hbmFnZWQgc2Nyb2xsaW5nXG4gICAgICogc2l0dWF0aW9uIHdoZW4geW91IHdhbnQgdG8gc2xpZGUgdGhlIHRhYmxlIHVwIGZyb20gYmVsb3cgdGhlIGZvbGRcbiAgICAgKiB3aXRob3V0IGhhdmluZyB0byBjb25zdGFudGx5IHVwZGF0ZSB0aGUgaGVpZ2h0IG9uIGV2ZXJ5IHNjcm9sbCB0aWNrLlxuICAgICAqIEluc3RlYWQsIHZhcnkgdGhpcyBwcm9wZXJ0eSBvbiBzY3JvbGwuIEJ5IHVzaW5nIGBvd25lckhlaWdodGAsIHdlXG4gICAgICogb3Zlci1yZW5kZXIgdGhlIHRhYmxlIHdoaWxlIG1ha2luZyBzdXJlIHRoZSBmb290ZXIgYW5kIGhvcml6b250YWxcbiAgICAgKiBzY3JvbGxiYXIgb2YgdGhlIHRhYmxlIGFyZSB2aXNpYmxlIHdoZW4gdGhlIGN1cnJlbnQgc3BhY2UgZm9yIHRoZSB0YWJsZVxuICAgICAqIGluIHZpZXcgaXMgc21hbGxlciB0aGFuIHRoZSBmaW5hbCwgb3Zlci1mbG93aW5nIGhlaWdodCBvZiB0YWJsZS4gSXRcbiAgICAgKiBhbGxvd3MgdXMgdG8gYXZvaWQgcmVzaXppbmcgYW5kIHJlZmxvd2luZyB0YWJsZSB3aGVuIGl0IGlzIG1vdmluZyBpbiB0aGVcbiAgICAgKiB2aWV3LlxuICAgICAqXG4gICAgICogVGhpcyBpcyB1c2VkIGlmIGBvd25lckhlaWdodCA8IGhlaWdodGAgKG9yIGBtYXhIZWlnaHRgKS5cbiAgICAgKi9cbiAgICBvd25lckhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIG92ZXJmbG93WDogUHJvcFR5cGVzLm9uZU9mKFsnaGlkZGVuJywgJ2F1dG8nXSksXG4gICAgb3ZlcmZsb3dZOiBQcm9wVHlwZXMub25lT2YoWydoaWRkZW4nLCAnYXV0byddKSxcblxuICAgIC8qKlxuICAgICAqIE51bWJlciBvZiByb3dzIGluIHRoZSB0YWJsZS5cbiAgICAgKi9cbiAgICByb3dzQ291bnQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFBpeGVsIGhlaWdodCBvZiByb3dzIHVubGVzcyBgcm93SGVpZ2h0R2V0dGVyYCBpcyBzcGVjaWZpZWQgYW5kIHJldHVybnNcbiAgICAgKiBkaWZmZXJlbnQgdmFsdWUuXG4gICAgICovXG4gICAgcm93SGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBJZiBzcGVjaWZpZWQsIGByb3dIZWlnaHRHZXR0ZXIoaW5kZXgpYCBpcyBjYWxsZWQgZm9yIGVhY2ggcm93IGFuZCB0aGVcbiAgICAgKiByZXR1cm5lZCB2YWx1ZSBvdmVycmlkZXMgYHJvd0hlaWdodGAgZm9yIHBhcnRpY3VsYXIgcm93LlxuICAgICAqL1xuICAgIHJvd0hlaWdodEdldHRlcjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBERVBSRUNBVEVEXG4gICAgICpcbiAgICAgKiBUbyBnZXQgcm93cyB0byBkaXNwbGF5IGluIHRhYmxlLCBgcm93R2V0dGVyKGluZGV4KWBcbiAgICAgKiBpcyBjYWxsZWQuIGByb3dHZXR0ZXJgIHNob3VsZCBiZSBzbWFydCBlbm91Z2ggdG8gaGFuZGxlIGFzeW5jXG4gICAgICogZmV0Y2hpbmcgb2YgZGF0YSBhbmQgcmV0dXJuIHRlbXBvcmFyeSBvYmplY3RzXG4gICAgICogd2hpbGUgZGF0YSBpcyBiZWluZyBmZXRjaGVkLlxuICAgICAqL1xuICAgIHJvd0dldHRlcjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBUbyBnZXQgYW55IGFkZGl0aW9uYWwgQ1NTIGNsYXNzZXMgdGhhdCBzaG91bGQgYmUgYWRkZWQgdG8gYSByb3csXG4gICAgICogYHJvd0NsYXNzTmFtZUdldHRlcihpbmRleClgIGlzIGNhbGxlZC5cbiAgICAgKi9cbiAgICByb3dDbGFzc05hbWVHZXR0ZXI6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogUGl4ZWwgaGVpZ2h0IG9mIHRoZSBjb2x1bW4gZ3JvdXAgaGVhZGVyLlxuICAgICAqL1xuICAgIGdyb3VwSGVhZGVySGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLyoqXG4gICAgICogUGl4ZWwgaGVpZ2h0IG9mIGhlYWRlci5cbiAgICAgKi9cbiAgICBoZWFkZXJIZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIERFUFJFQ0FURURcbiAgICAgKlxuICAgICAqIEZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIHRvIGdldCB0aGUgZGF0YSBmb3IgdGhlIGhlYWRlciByb3cuXG4gICAgICogSWYgdGhlIGZ1bmN0aW9uIHJldHVybnMgbnVsbCwgdGhlIGhlYWRlciB3aWxsIGJlIHNldCB0byB0aGVcbiAgICAgKiBDb2x1bW4ncyBsYWJlbCBwcm9wZXJ0eS5cbiAgICAgKi9cbiAgICBoZWFkZXJEYXRhR2V0dGVyOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIFBpeGVsIGhlaWdodCBvZiBmb290ZXIuXG4gICAgICovXG4gICAgZm9vdGVySGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLyoqXG4gICAgICogREVQUkVDQVRFRCAtIHVzZSBmb290ZXJEYXRhR2V0dGVyIGluc3RlYWQuXG4gICAgICogRGF0YSB0aGF0IHdpbGwgYmUgcGFzc2VkIHRvIGZvb3RlciBjZWxsIHJlbmRlcmVycy5cbiAgICAgKi9cbiAgICBmb290ZXJEYXRhOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuYXJyYXldKSxcblxuICAgIC8qKlxuICAgICAqIERFUFJFQ0FURURcbiAgICAgKlxuICAgICAqIEZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIHRvIGdldCB0aGUgZGF0YSBmb3IgdGhlIGZvb3RlciByb3cuXG4gICAgICovXG4gICAgZm9vdGVyRGF0YUdldHRlcjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBWYWx1ZSBvZiBob3Jpem9udGFsIHNjcm9sbC5cbiAgICAgKi9cbiAgICBzY3JvbGxMZWZ0OiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLyoqXG4gICAgICogSW5kZXggb2YgY29sdW1uIHRvIHNjcm9sbCB0by5cbiAgICAgKi9cbiAgICBzY3JvbGxUb0NvbHVtbjogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKlxuICAgICAqIFZhbHVlIG9mIHZlcnRpY2FsIHNjcm9sbC5cbiAgICAgKi9cbiAgICBzY3JvbGxUb3A6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvKipcbiAgICAgKiBJbmRleCBvZiByb3cgdG8gc2Nyb2xsIHRvLlxuICAgICAqL1xuICAgIHNjcm9sbFRvUm93OiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBzY3JvbGxpbmcgc3RhcnRzIHdpdGggY3VycmVudCBob3Jpem9udGFsXG4gICAgICogYW5kIHZlcnRpY2FsIHNjcm9sbCB2YWx1ZXMuXG4gICAgICovXG4gICAgb25TY3JvbGxTdGFydDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIHNjcm9sbGluZyBlbmRzIG9yIHN0b3BzIHdpdGggbmV3IGhvcml6b250YWxcbiAgICAgKiBhbmQgdmVydGljYWwgc2Nyb2xsIHZhbHVlcy5cbiAgICAgKi9cbiAgICBvblNjcm9sbEVuZDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIGByb3dIZWlnaHRHZXR0ZXJgIHJldHVybnMgYSBkaWZmZXJlbnQgaGVpZ2h0XG4gICAgICogZm9yIGEgcm93IHRoYW4gdGhlIGByb3dIZWlnaHRgIHByb3AuIFRoaXMgaXMgbmVjZXNzYXJ5IGJlY2F1c2UgaW5pdGlhbGx5XG4gICAgICogdGFibGUgZXN0aW1hdGVzIGhlaWdodHMgb2Ygc29tZSBwYXJ0cyBvZiB0aGUgY29udGVudC5cbiAgICAgKi9cbiAgICBvbkNvbnRlbnRIZWlnaHRDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBhIHJvdyBpcyBjbGlja2VkLlxuICAgICAqL1xuICAgIG9uUm93Q2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBhIHJvdyBpcyBkb3VibGUgY2xpY2tlZC5cbiAgICAgKi9cbiAgICBvblJvd0RvdWJsZUNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gYSBtb3VzZS1kb3duIGV2ZW50IGhhcHBlbnMgb24gYSByb3cuXG4gICAgICovXG4gICAgb25Sb3dNb3VzZURvd246IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBhIG1vdXNlLWVudGVyIGV2ZW50IGhhcHBlbnMgb24gYSByb3cuXG4gICAgICovXG4gICAgb25Sb3dNb3VzZUVudGVyOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gYSBtb3VzZS1sZWF2ZSBldmVudCBoYXBwZW5zIG9uIGEgcm93LlxuICAgICAqL1xuICAgIG9uUm93TW91c2VMZWF2ZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIHJlc2l6ZXIgaGFzIGJlZW4gcmVsZWFzZWRcbiAgICAgKiBhbmQgY29sdW1uIG5lZWRzIHRvIGJlIHVwZGF0ZWQuXG4gICAgICpcbiAgICAgKiBSZXF1aXJlZCBpZiB0aGUgaXNSZXNpemFibGUgcHJvcGVydHkgaXMgdHJ1ZSBvbiBhbnkgY29sdW1uLlxuICAgICAqXG4gICAgICogYGBgXG4gICAgICogZnVuY3Rpb24oXG4gICAgICogICBuZXdDb2x1bW5XaWR0aDogbnVtYmVyLFxuICAgICAqICAgZGF0YUtleTogc3RyaW5nLFxuICAgICAqIClcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBvbkNvbHVtblJlc2l6ZUVuZENhbGxiYWNrOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgYSBjb2x1bW4gaXMgY3VycmVudGx5IGJlaW5nIHJlc2l6ZWQuXG4gICAgICovXG4gICAgaXNDb2x1bW5SZXNpemluZzogUHJvcFR5cGVzLmJvb2xcbiAgfSxcblxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICAvLyBUaHJvdyB3YXJuaW5ncyBvbiBkZXByZWNhdGVkIHByb3BzLlxuICAgIHZhciBzdGF0ZSA9IHt9O1xuICAgIHN0YXRlLm5lZWRzTWlncmF0aW9uID0gdGhpcy5fY2hlY2tEZXByZWNhdGlvbnMoKTtcblxuICAgIHJldHVybiBzdGF0ZTtcbiAgfSxcblxuICBfY2hlY2tEZXByZWNhdGlvbnM6IGZ1bmN0aW9uIF9jaGVja0RlcHJlY2F0aW9ucygpIHtcbiAgICB2YXIgbmVlZHNNaWdyYXRpb24gPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLnByb3BzLnJvd0dldHRlcikge1xuICAgICAgbm90aWZ5RGVwcmVjYXRlZCgncm93R2V0dGVyJywgJ1BsZWFzZSB1c2UgdGhlIGNlbGwgQVBJIGluIENvbHVtbiB0byBmZXRjaCBkYXRhIGZvciB5b3VyIGNlbGxzLicpO1xuXG4gICAgICAvLyBST1dHRVRURVI/Pz8gWW91IG5lZWQgdG8gbWlncmF0ZS5cbiAgICAgIG5lZWRzTWlncmF0aW9uID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5oZWFkZXJEYXRhR2V0dGVyKSB7XG4gICAgICBub3RpZnlEZXByZWNhdGVkKCdoZWFkZXJEYXRhR2V0dGVyJywgJ1BsZWFzZSB1c2UgdGhlIGhlYWRlciBBUEkgaW4gQ29sdW1uIHRvICcgKyAnZmV0Y2ggZGF0YSBmb3IgeW91ciBoZWFkZXIgY2VsbHMuJyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMuZm9vdGVyRGF0YSkge1xuICAgICAgbm90aWZ5RGVwcmVjYXRlZCgnZm9vdGVyRGF0YScsICdQbGVhc2UgdXNlIHRoZSBmb290ZXIgQVBJIGluIENvbHVtbiB0byAnICsgJ2ZldGNoIGRhdGEgZm9yIHlvdXIgZm9vdGVyIGNlbGxzLicpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLmZvb3RlckRhdGFHZXR0ZXIpIHtcbiAgICAgIG5vdGlmeURlcHJlY2F0ZWQoJ2Zvb3RlckRhdGFHZXR0ZXInLCAnUGxlYXNlIHVzZSB0aGUgZm9vdGVyIEFQSSBpbiBDb2x1bW4gdG8gJyArICdmZXRjaCBkYXRhIGZvciB5b3VyIGZvb3RlciBjZWxscy4nKTtcbiAgICB9XG5cbiAgICBSZWFjdENoaWxkcmVuLmZvckVhY2godGhpcy5wcm9wcy5jaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICBpZiAoIWNoaWxkIHx8ICFjaGlsZC5wcm9wcykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBwcm9wcyA9IGNoaWxkLnByb3BzO1xuXG4gICAgICBpZiAocHJvcHMubGFiZWwpIHtcbiAgICAgICAgbm90aWZ5RGVwcmVjYXRlZCgnbGFiZWwnLCAnUGxlYXNlIHVzZSBgaGVhZGVyYCBpbnN0ZWFkLicpO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvcHMuZGF0YUtleSkge1xuICAgICAgICBub3RpZnlEZXByZWNhdGVkKCdkYXRhS2V5JywgJ1BsZWFzZSB1c2UgdGhlIGBjZWxsYCBBUEkgdG8gcGFzcyBpbiBhIGRhdGFLZXknKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByb3BzLmNlbGxSZW5kZXJlcikge1xuICAgICAgICBub3RpZnlEZXByZWNhdGVkKCdjZWxsUmVuZGVyZXInLCAnUGxlYXNlIHVzZSB0aGUgYGNlbGxgIEFQSSB0byBwYXNzIGluIGEgUmVhY3QgRWxlbWVudCBpbnN0ZWFkLicpO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvcHMuaGVhZGVyUmVuZGVyZXIpIHtcbiAgICAgICAgbm90aWZ5RGVwcmVjYXRlZCgnaGVhZGVyUmVuZGVyZXInLCAnUGxlYXNlIHVzZSB0aGUgYGhlYWRlcmAgQVBJIHRvIHBhc3MgaW4gYSBSZWFjdCBFbGVtZW50IGluc3RlYWQuJyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9wcy5jb2x1bW5EYXRhKSB7XG4gICAgICAgIG5vdGlmeURlcHJlY2F0ZWQoJ2NvbHVtbkRhdGEnLCAnUGxlYXNlIHBhc3MgZGF0YSBpbiB0aHJvdWdoIHByb3BzIHRvIHlvdXIgaGVhZGVyLCBjZWxsIG9yIGZvb3Rlci4nKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByb3BzLmdyb3VwSGVhZGVyUmVuZGVyZXIpIHtcbiAgICAgICAgbm90aWZ5RGVwcmVjYXRlZCgnZ3JvdXBIZWFkZXJSZW5kZXJlcicsICdQbGVhc2UgdXNlIHRoZSBgaGVhZGVyYCBBUEkgaW4gQ29sdW1uR3JvdXAgdG8gJyArICdwYXNzIGluIGEgUmVhY3QgRWxlbWVudCBpbnN0ZWFkIG9mIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIG9uZS4nKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByb3BzLmdyb3VwSGVhZGVyRGF0YSkge1xuICAgICAgICBub3RpZnlEZXByZWNhdGVkKCdncm91cEhlYWRlckRhdGEnLCAnUGxlYXNlIHBhc3MgaW4gYW55IGRhdGEgdGhyb3VnaCBwcm9wcyB0byB5b3VyIGhlYWRlci4nKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBuZWVkc01pZ3JhdGlvbjtcbiAgfSxcblxuICAvLyBXcmFwcGVyIGZvciBvblJvdyBjYWxsYmFja3MsIHNpbmNlIHdlIGRvbid0IGhhdmUgcm93RGF0YSBhdCB0aGF0IGxldmVsLlxuICBfb25Sb3dBY3Rpb246IGZ1bmN0aW9uIF9vblJvd0FjdGlvbihwcm9wcywgY2FsbGJhY2spIHtcbiAgICBpZiAoIWNhbGxiYWNrKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAoZSwgcm93SW5kZXgpIHtcbiAgICAgIGNhbGxiYWNrKGUsIHJvd0luZGV4LCBwcm9wcy5yb3dHZXR0ZXIgJiYgcHJvcHMucm93R2V0dGVyKHJvd0luZGV4KSB8fCBFTVBUWV9PQkpFQ1QpO1xuICAgIH07XG4gIH0sXG5cbiAgX3RyYW5zZm9ybUNvbHVtbjogZnVuY3Rpb24gX3RyYW5zZm9ybUNvbHVtbihjb2x1bW4sIHRhYmxlUHJvcHMsIGtleSkge1xuXG4gICAgdmFyIHByb3BzID0gY29sdW1uLnByb3BzO1xuXG4gICAgaWYgKGNvbHVtbi50eXBlLl9fVGFibGVDb2x1bW5fXykge1xuICAgICAgLy8gQ29uc3R1Y3QgdGhlIGNlbGwgdG8gYmUgdXNlZCB1c2luZyB0aGUgcm93R2V0dGVyXG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDb2x1bW4sIF9leHRlbmRzKHtcbiAgICAgICAga2V5OiAnY29sdW1uXycgKyBrZXlcbiAgICAgIH0sIHByb3BzLCB7XG4gICAgICAgIGhlYWRlcjogUmVhY3QuY3JlYXRlRWxlbWVudChUcmFuc2l0aW9uQ2VsbCwge1xuICAgICAgICAgIGlzSGVhZGVyQ2VsbDogdHJ1ZSxcbiAgICAgICAgICBsYWJlbDogcHJvcHMubGFiZWwsXG4gICAgICAgICAgd2lkdGg6IHByb3BzLndpZHRoLFxuICAgICAgICAgIGRhdGFLZXk6IHByb3BzLmRhdGFLZXksXG4gICAgICAgICAgY2xhc3NOYW1lOiBwcm9wcy5oZWFkZXJDbGFzc05hbWUsXG4gICAgICAgICAgY29sdW1uRGF0YTogcHJvcHMuY29sdW1uRGF0YSB8fCBFTVBUWV9PQkpFQ1QsXG4gICAgICAgICAgY2VsbFJlbmRlcmVyOiBwcm9wcy5oZWFkZXJSZW5kZXJlcixcbiAgICAgICAgICBoZWFkZXJEYXRhR2V0dGVyOiB0YWJsZVByb3BzLmhlYWRlckRhdGFHZXR0ZXJcbiAgICAgICAgfSksXG4gICAgICAgIGNvbHVtbktleTogcHJvcHMuZGF0YUtleSxcbiAgICAgICAgY2VsbDogUmVhY3QuY3JlYXRlRWxlbWVudChUcmFuc2l0aW9uQ2VsbCwge1xuICAgICAgICAgIGRhdGFLZXk6IHByb3BzLmRhdGFLZXksXG4gICAgICAgICAgY2xhc3NOYW1lOiBwcm9wcy5jZWxsQ2xhc3NOYW1lLFxuICAgICAgICAgIHJvd0dldHRlcjogdGFibGVQcm9wcy5yb3dHZXR0ZXIsXG4gICAgICAgICAgd2lkdGg6IHByb3BzLndpZHRoLFxuICAgICAgICAgIGNvbHVtbkRhdGE6IHByb3BzLmNvbHVtbkRhdGEgfHwgRU1QVFlfT0JKRUNULFxuICAgICAgICAgIGNlbGxEYXRhR2V0dGVyOiBwcm9wcy5jZWxsRGF0YUdldHRlcixcbiAgICAgICAgICBjZWxsUmVuZGVyZXI6IHByb3BzLmNlbGxSZW5kZXJlclxuICAgICAgICB9KSxcbiAgICAgICAgZm9vdGVyOiBSZWFjdC5jcmVhdGVFbGVtZW50KFRyYW5zaXRpb25DZWxsLCB7XG4gICAgICAgICAgaXNGb290ZXJDZWxsOiB0cnVlLFxuICAgICAgICAgIGNsYXNzTmFtZTogcHJvcHMuZm9vdGVyQ2xhc3NOYW1lLFxuICAgICAgICAgIGRhdGFLZXk6IHByb3BzLmRhdGFLZXksXG4gICAgICAgICAgY2VsbFJlbmRlcmVyOiBwcm9wcy5mb290ZXJSZW5kZXJlcixcbiAgICAgICAgICBmb290ZXJEYXRhR2V0dGVyOiB0YWJsZVByb3BzLmZvb3RlckRhdGFHZXR0ZXIsXG4gICAgICAgICAgZm9vdGVyRGF0YTogdGFibGVQcm9wcy5mb290ZXJEYXRhIHx8IEVNUFRZX09CSkVDVFxuICAgICAgICB9KVxuICAgICAgfSkpO1xuICAgIH1cbiAgfSxcblxuICBfdHJhbnNmb3JtQ29sdW1uR3JvdXA6IGZ1bmN0aW9uIF90cmFuc2Zvcm1Db2x1bW5Hcm91cChncm91cCwgdGFibGVQcm9wcywga2V5LCBsYWJlbHMpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdmFyIHByb3BzID0gZ3JvdXAucHJvcHM7XG5cbiAgICB2YXIgaiA9IDA7XG4gICAgdmFyIGNvbHVtbnMgPSBSZWFjdENoaWxkcmVuLm1hcChwcm9wcy5jaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICBqKys7XG4gICAgICByZXR1cm4gX3RoaXMuX3RyYW5zZm9ybUNvbHVtbihjaGlsZCwgdGFibGVQcm9wcywga2V5ICsgJ18nICsgaik7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgIENvbHVtbkdyb3VwLFxuICAgICAgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICAgIGtleTogJ2dyb3VwXycgKyBrZXksXG4gICAgICAgIGhlYWRlcjogUmVhY3QuY3JlYXRlRWxlbWVudChUcmFuc2l0aW9uQ2VsbCwge1xuICAgICAgICAgIGlzSGVhZGVyQ2VsbDogdHJ1ZSxcbiAgICAgICAgICBsYWJlbDogZ3JvdXAucHJvcHMubGFiZWwsXG4gICAgICAgICAgZGF0YUtleToga2V5LFxuICAgICAgICAgIGdyb3VwSGVhZGVyUmVuZGVyZXI6IHByb3BzLmdyb3VwSGVhZGVyUmVuZGVyZXIsXG4gICAgICAgICAgZ3JvdXBIZWFkZXJMYWJlbHM6IGxhYmVscyxcbiAgICAgICAgICBncm91cEhlYWRlckRhdGE6IHByb3BzLmNvbHVtbkdyb3VwRGF0YSB8fCBFTVBUWV9PQkpFQ1RcbiAgICAgICAgfSkgfSksXG4gICAgICBjb2x1bW5zXG4gICAgKTtcbiAgfSxcblxuICBfY29udmVydGVkQ29sdW1uczogZnVuY3Rpb24gX2NvbnZlcnRlZENvbHVtbnMobmVlZHNNaWdyYXRpb24pIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIC8vIElmIHdlIGRvbid0IG5lZWQgdG8gbWlncmF0ZSwgbWFwIGRpcmVjdGx5IHRvIHRoZSBuZXcgQVBJLlxuICAgIGlmICghbmVlZHNNaWdyYXRpb24pIHtcbiAgICAgIHJldHVybiBSZWFjdENoaWxkcmVuLm1hcCh0aGlzLnByb3BzLmNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcblxuICAgICAgICBpZiAoIWNoaWxkKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2hpbGQudHlwZS5fX1RhYmxlQ29sdW1uX18pIHtcbiAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDb2x1bW4sIGNoaWxkLnByb3BzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGlsZC50eXBlLl9fVGFibGVDb2x1bW5Hcm91cF9fKSB7XG4gICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29sdW1uR3JvdXAsIGNoaWxkLnByb3BzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFyIHRhYmxlUHJvcHMgPSB0aGlzLnByb3BzO1xuXG4gICAgLy8gT3RoZXJ3aXNlLCBpZiBhIG1pZ3JhdGlvbiBpcyBuZWVkZWQsIHdlIG5lZWQgdG8gdHJhbnNmb3JtIGVhY2ggQ29sdW1uXG4gICAgLy8gb3IgQ29sdW1uR3JvdXAuXG4gICAgdmFyIGkgPSAwO1xuICAgIHJldHVybiBSZWFjdENoaWxkcmVuLm1hcCh0aGlzLnByb3BzLmNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcblxuICAgICAgaWYgKCFjaGlsZCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKGNoaWxkLnR5cGUuX19UYWJsZUNvbHVtbl9fKSB7XG4gICAgICAgIGNoaWxkID0gX3RoaXMyLl90cmFuc2Zvcm1Db2x1bW4oY2hpbGQsIHRhYmxlUHJvcHMsIGkpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2hpbGQudHlwZS5fX1RhYmxlQ29sdW1uR3JvdXBfXykge1xuICAgICAgICAvLyBTaW5jZSB3ZSBhcHBhcmVudGx5IGdpdmUgYW4gYXJyYXkgb2YgbGFiZWxzIHRvIGdyb3VwSGVhZGVyUmVuZGVyZXJcbiAgICAgICAgdmFyIGxhYmVscyA9IFtdO1xuICAgICAgICBSZWFjdENoaWxkcmVuLmZvckVhY2goX3RoaXMyLnByb3BzLmNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICBsYWJlbHMucHVzaChjaGlsZC5wcm9wcy5sYWJlbCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNoaWxkID0gX3RoaXMyLl90cmFuc2Zvcm1Db2x1bW5Hcm91cChjaGlsZCwgdGFibGVQcm9wcywgaSwgbGFiZWxzKTtcbiAgICAgIH1cblxuICAgICAgaSsrO1xuICAgICAgcmV0dXJuIGNoaWxkO1xuICAgIH0pO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBUYWJsZSxcbiAgICAgIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgICAgICBvblJvd01vdXNlRG93bjogdGhpcy5fb25Sb3dBY3Rpb24ocHJvcHMsIHByb3BzLm9uUm93TW91c2VEb3duKSxcbiAgICAgICAgb25Sb3dDbGljazogdGhpcy5fb25Sb3dBY3Rpb24ocHJvcHMsIHByb3BzLm9uUm93Q2xpY2spLFxuICAgICAgICBvblJvd0RvdWJsZUNsaWNrOiB0aGlzLl9vblJvd0FjdGlvbihwcm9wcywgcHJvcHMub25Sb3dEb3VibGVDbGljayksXG4gICAgICAgIG9uUm93TW91c2VFbnRlcjogdGhpcy5fb25Sb3dBY3Rpb24ocHJvcHMsIHByb3BzLm9uUm93TW91c2VFbnRlciksXG4gICAgICAgIG9uUm93TW91c2VMZWF2ZTogdGhpcy5fb25Sb3dBY3Rpb24ocHJvcHMsIHByb3BzLm9uUm93TW91c2VMZWF2ZSlcbiAgICAgIH0pLFxuICAgICAgdGhpcy5fY29udmVydGVkQ29sdW1ucyh0aGlzLnN0YXRlLm5lZWRzTWlncmF0aW9uKVxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRyYW5zaXRpb25UYWJsZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL0ZpeGVkRGF0YVRhYmxlLnJlYWN0LmpzXG4gKiogbW9kdWxlIGlkID0gNDI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBSZWFjdFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvUmVhY3QuanNcbiAqKiBtb2R1bGUgaWQgPSA0MjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIEZpeGVkRGF0YVRhYmxlTmV3LnJlYWN0XG4gKiBAdHlwZWNoZWNrc1xuICogQG5vZmxvd1xuICovXG5cbi8qZXNsaW50IG5vLWJpdHdpc2U6MSovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgnLi9SZWFjdCcpO1xudmFyIFJlYWN0Q29tcG9uZW50V2l0aFB1cmVSZW5kZXJNaXhpbiA9IHJlcXVpcmUoJy4vUmVhY3RDb21wb25lbnRXaXRoUHVyZVJlbmRlck1peGluJyk7XG52YXIgUmVhY3RXaGVlbEhhbmRsZXIgPSByZXF1aXJlKCcuL1JlYWN0V2hlZWxIYW5kbGVyJyk7XG52YXIgU2Nyb2xsYmFyID0gcmVxdWlyZSgnLi9TY3JvbGxiYXIucmVhY3QnKTtcbnZhciBGaXhlZERhdGFUYWJsZUJ1ZmZlcmVkUm93cyA9IHJlcXVpcmUoJy4vRml4ZWREYXRhVGFibGVCdWZmZXJlZFJvd3MucmVhY3QnKTtcbnZhciBGaXhlZERhdGFUYWJsZUNvbHVtblJlc2l6ZUhhbmRsZSA9IHJlcXVpcmUoJy4vRml4ZWREYXRhVGFibGVDb2x1bW5SZXNpemVIYW5kbGUucmVhY3QnKTtcbnZhciBGaXhlZERhdGFUYWJsZVJvdyA9IHJlcXVpcmUoJy4vRml4ZWREYXRhVGFibGVSb3cucmVhY3QnKTtcbnZhciBGaXhlZERhdGFUYWJsZVNjcm9sbEhlbHBlciA9IHJlcXVpcmUoJy4vRml4ZWREYXRhVGFibGVTY3JvbGxIZWxwZXInKTtcbnZhciBGaXhlZERhdGFUYWJsZVdpZHRoSGVscGVyID0gcmVxdWlyZSgnLi9GaXhlZERhdGFUYWJsZVdpZHRoSGVscGVyJyk7XG5cbnZhciBjeCA9IHJlcXVpcmUoJy4vY3gnKTtcbnZhciBkZWJvdW5jZUNvcmUgPSByZXF1aXJlKCcuL2RlYm91bmNlQ29yZScpO1xudmFyIGVtcHR5RnVuY3Rpb24gPSByZXF1aXJlKCcuL2VtcHR5RnVuY3Rpb24nKTtcbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCcuL2ludmFyaWFudCcpO1xudmFyIGpvaW5DbGFzc2VzID0gcmVxdWlyZSgnLi9qb2luQ2xhc3NlcycpO1xudmFyIHNoYWxsb3dFcXVhbCA9IHJlcXVpcmUoJy4vc2hhbGxvd0VxdWFsJyk7XG52YXIgdHJhbnNsYXRlRE9NUG9zaXRpb25YWSA9IHJlcXVpcmUoJy4vdHJhbnNsYXRlRE9NUG9zaXRpb25YWScpO1xuXG52YXIgUHJvcFR5cGVzID0gUmVhY3QuUHJvcFR5cGVzO1xuXG52YXIgUmVhY3RDaGlsZHJlbiA9IFJlYWN0LkNoaWxkcmVuO1xuXG52YXIgRU1QVFlfT0JKRUNUID0ge307XG52YXIgQk9SREVSX0hFSUdIVCA9IDE7XG52YXIgSEVBREVSID0gJ2hlYWRlcic7XG52YXIgRk9PVEVSID0gJ2Zvb3Rlcic7XG52YXIgQ0VMTCA9ICdjZWxsJztcblxuLyoqXG4gKiBEYXRhIGdyaWQgY29tcG9uZW50IHdpdGggZml4ZWQgb3Igc2Nyb2xsYWJsZSBoZWFkZXIgYW5kIGNvbHVtbnMuXG4gKlxuICogVGhlIGxheW91dCBvZiB0aGUgZGF0YSB0YWJsZSBpcyBhcyBmb2xsb3dzOlxuICpcbiAqIGBgYFxuICogKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLStcbiAqIHwgRml4ZWQgQ29sdW1uIEdyb3VwICAgIHwgU2Nyb2xsYWJsZSBDb2x1bW4gR3JvdXAgICB8XG4gKiB8IEhlYWRlciAgICAgICAgICAgICAgICB8IEhlYWRlciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCBGaXhlZCBIZWFkZXIgQ29sdW1ucyAgfCBTY3JvbGxhYmxlIEhlYWRlciBDb2x1bW5zIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tK1xuICogfCAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgRml4ZWQgQm9keSBDb2x1bW5zICAgIHwgU2Nyb2xsYWJsZSBCb2R5IENvbHVtbnMgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLStcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8IEZpeGVkIEZvb3RlciBDb2x1bW5zICB8IFNjcm9sbGFibGUgRm9vdGVyIENvbHVtbnMgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rXG4gKiBgYGBcbiAqXG4gKiAtIEZpeGVkIENvbHVtbiBHcm91cCBIZWFkZXI6IFRoZXNlIGFyZSB0aGUgaGVhZGVycyBmb3IgYSBncm91cFxuICogICBvZiBjb2x1bW5zIGlmIGluY2x1ZGVkIGluIHRoZSB0YWJsZSB0aGF0IGRvIG5vdCBzY3JvbGxcbiAqICAgdmVydGljYWxseSBvciBob3Jpem9udGFsbHkuXG4gKlxuICogLSBTY3JvbGxhYmxlIENvbHVtbiBHcm91cCBIZWFkZXI6IFRoZSBoZWFkZXIgZm9yIGEgZ3JvdXAgb2YgY29sdW1uc1xuICogICB0aGF0IGRvIG5vdCBtb3ZlIHdoaWxlIHNjcm9sbGluZyB2ZXJ0aWNhbGx5LCBidXQgbW92ZSBob3Jpem9udGFsbHlcbiAqICAgd2l0aCB0aGUgaG9yaXpvbnRhbCBzY3JvbGxpbmcuXG4gKlxuICogLSBGaXhlZCBIZWFkZXIgQ29sdW1uczogVGhlIGhlYWRlciBjb2x1bW5zIHRoYXQgZG8gbm90IG1vdmUgd2hpbGUgc2Nyb2xsaW5nXG4gKiAgIHZlcnRpY2FsbHkgb3IgaG9yaXpvbnRhbGx5LlxuICpcbiAqIC0gU2Nyb2xsYWJsZSBIZWFkZXIgQ29sdW1uczogVGhlIGhlYWRlciBjb2x1bW5zIHRoYXQgZG8gbm90IG1vdmVcbiAqICAgd2hpbGUgc2Nyb2xsaW5nIHZlcnRpY2FsbHksIGJ1dCBtb3ZlIGhvcml6b250YWxseSB3aXRoIHRoZSBob3Jpem9udGFsXG4gKiAgIHNjcm9sbGluZy5cbiAqXG4gKiAtIEZpeGVkIEJvZHkgQ29sdW1uczogVGhlIGJvZHkgY29sdW1ucyB0aGF0IGRvIG5vdCBtb3ZlIHdoaWxlIHNjcm9sbGluZ1xuICogICBob3Jpem9udGFsbHksIGJ1dCBtb3ZlIHZlcnRpY2FsbHkgd2l0aCB0aGUgdmVydGljYWwgc2Nyb2xsaW5nLlxuICpcbiAqIC0gU2Nyb2xsYWJsZSBCb2R5IENvbHVtbnM6IFRoZSBib2R5IGNvbHVtbnMgdGhhdCBtb3ZlIHdoaWxlIHNjcm9sbGluZ1xuICogICB2ZXJ0aWNhbGx5IG9yIGhvcml6b250YWxseS5cbiAqL1xudmFyIEZpeGVkRGF0YVRhYmxlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0ZpeGVkRGF0YVRhYmxlJyxcblxuICBwcm9wVHlwZXM6IHtcblxuICAgIC8qKlxuICAgICAqIFBpeGVsIHdpZHRoIG9mIHRhYmxlLiBJZiBhbGwgY29sdW1ucyBkbyBub3QgZml0LFxuICAgICAqIGEgaG9yaXpvbnRhbCBzY3JvbGxiYXIgd2lsbCBhcHBlYXIuXG4gICAgICovXG4gICAgd2lkdGg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFBpeGVsIGhlaWdodCBvZiB0YWJsZS4gSWYgYWxsIHJvd3MgZG8gbm90IGZpdCxcbiAgICAgKiBhIHZlcnRpY2FsIHNjcm9sbGJhciB3aWxsIGFwcGVhci5cbiAgICAgKlxuICAgICAqIEVpdGhlciBgaGVpZ2h0YCBvciBgbWF4SGVpZ2h0YCBtdXN0IGJlIHNwZWNpZmllZC5cbiAgICAgKi9cbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvKipcbiAgICAgKiBNYXhpbXVtIHBpeGVsIGhlaWdodCBvZiB0YWJsZS4gSWYgYWxsIHJvd3MgZG8gbm90IGZpdCxcbiAgICAgKiBhIHZlcnRpY2FsIHNjcm9sbGJhciB3aWxsIGFwcGVhci5cbiAgICAgKlxuICAgICAqIEVpdGhlciBgaGVpZ2h0YCBvciBgbWF4SGVpZ2h0YCBtdXN0IGJlIHNwZWNpZmllZC5cbiAgICAgKi9cbiAgICBtYXhIZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvKipcbiAgICAgKiBQaXhlbCBoZWlnaHQgb2YgdGFibGUncyBvd25lciwgdGhpcyBpcyB1c2VkIGluIGEgbWFuYWdlZCBzY3JvbGxpbmdcbiAgICAgKiBzaXR1YXRpb24gd2hlbiB5b3Ugd2FudCB0byBzbGlkZSB0aGUgdGFibGUgdXAgZnJvbSBiZWxvdyB0aGUgZm9sZFxuICAgICAqIHdpdGhvdXQgaGF2aW5nIHRvIGNvbnN0YW50bHkgdXBkYXRlIHRoZSBoZWlnaHQgb24gZXZlcnkgc2Nyb2xsIHRpY2suXG4gICAgICogSW5zdGVhZCwgdmFyeSB0aGlzIHByb3BlcnR5IG9uIHNjcm9sbC4gQnkgdXNpbmcgYG93bmVySGVpZ2h0YCwgd2VcbiAgICAgKiBvdmVyLXJlbmRlciB0aGUgdGFibGUgd2hpbGUgbWFraW5nIHN1cmUgdGhlIGZvb3RlciBhbmQgaG9yaXpvbnRhbFxuICAgICAqIHNjcm9sbGJhciBvZiB0aGUgdGFibGUgYXJlIHZpc2libGUgd2hlbiB0aGUgY3VycmVudCBzcGFjZSBmb3IgdGhlIHRhYmxlXG4gICAgICogaW4gdmlldyBpcyBzbWFsbGVyIHRoYW4gdGhlIGZpbmFsLCBvdmVyLWZsb3dpbmcgaGVpZ2h0IG9mIHRhYmxlLiBJdFxuICAgICAqIGFsbG93cyB1cyB0byBhdm9pZCByZXNpemluZyBhbmQgcmVmbG93aW5nIHRhYmxlIHdoZW4gaXQgaXMgbW92aW5nIGluIHRoZVxuICAgICAqIHZpZXcuXG4gICAgICpcbiAgICAgKiBUaGlzIGlzIHVzZWQgaWYgYG93bmVySGVpZ2h0IDwgaGVpZ2h0YCAob3IgYG1heEhlaWdodGApLlxuICAgICAqL1xuICAgIG93bmVySGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgb3ZlcmZsb3dYOiBQcm9wVHlwZXMub25lT2YoWydoaWRkZW4nLCAnYXV0byddKSxcbiAgICBvdmVyZmxvd1k6IFByb3BUeXBlcy5vbmVPZihbJ2hpZGRlbicsICdhdXRvJ10pLFxuXG4gICAgLyoqXG4gICAgICogTnVtYmVyIG9mIHJvd3MgaW4gdGhlIHRhYmxlLlxuICAgICAqL1xuICAgIHJvd3NDb3VudDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogUGl4ZWwgaGVpZ2h0IG9mIHJvd3MgdW5sZXNzIGByb3dIZWlnaHRHZXR0ZXJgIGlzIHNwZWNpZmllZCBhbmQgcmV0dXJuc1xuICAgICAqIGRpZmZlcmVudCB2YWx1ZS5cbiAgICAgKi9cbiAgICByb3dIZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIElmIHNwZWNpZmllZCwgYHJvd0hlaWdodEdldHRlcihpbmRleClgIGlzIGNhbGxlZCBmb3IgZWFjaCByb3cgYW5kIHRoZVxuICAgICAqIHJldHVybmVkIHZhbHVlIG92ZXJyaWRlcyBgcm93SGVpZ2h0YCBmb3IgcGFydGljdWxhciByb3cuXG4gICAgICovXG4gICAgcm93SGVpZ2h0R2V0dGVyOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIFRvIGdldCBhbnkgYWRkaXRpb25hbCBDU1MgY2xhc3NlcyB0aGF0IHNob3VsZCBiZSBhZGRlZCB0byBhIHJvdyxcbiAgICAgKiBgcm93Q2xhc3NOYW1lR2V0dGVyKGluZGV4KWAgaXMgY2FsbGVkLlxuICAgICAqL1xuICAgIHJvd0NsYXNzTmFtZUdldHRlcjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBQaXhlbCBoZWlnaHQgb2YgdGhlIGNvbHVtbiBncm91cCBoZWFkZXIuXG4gICAgICovXG4gICAgZ3JvdXBIZWFkZXJIZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvKipcbiAgICAgKiBQaXhlbCBoZWlnaHQgb2YgaGVhZGVyLlxuICAgICAqL1xuICAgIGhlYWRlckhlaWdodDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogUGl4ZWwgaGVpZ2h0IG9mIGZvb3Rlci5cbiAgICAgKi9cbiAgICBmb290ZXJIZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvKipcbiAgICAgKiBWYWx1ZSBvZiBob3Jpem9udGFsIHNjcm9sbC5cbiAgICAgKi9cbiAgICBzY3JvbGxMZWZ0OiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLyoqXG4gICAgICogSW5kZXggb2YgY29sdW1uIHRvIHNjcm9sbCB0by5cbiAgICAgKi9cbiAgICBzY3JvbGxUb0NvbHVtbjogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKlxuICAgICAqIFZhbHVlIG9mIHZlcnRpY2FsIHNjcm9sbC5cbiAgICAgKi9cbiAgICBzY3JvbGxUb3A6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvKipcbiAgICAgKiBJbmRleCBvZiByb3cgdG8gc2Nyb2xsIHRvLlxuICAgICAqL1xuICAgIHNjcm9sbFRvUm93OiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBzY3JvbGxpbmcgc3RhcnRzIHdpdGggY3VycmVudCBob3Jpem9udGFsXG4gICAgICogYW5kIHZlcnRpY2FsIHNjcm9sbCB2YWx1ZXMuXG4gICAgICovXG4gICAgb25TY3JvbGxTdGFydDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIHNjcm9sbGluZyBlbmRzIG9yIHN0b3BzIHdpdGggbmV3IGhvcml6b250YWxcbiAgICAgKiBhbmQgdmVydGljYWwgc2Nyb2xsIHZhbHVlcy5cbiAgICAgKi9cbiAgICBvblNjcm9sbEVuZDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIGByb3dIZWlnaHRHZXR0ZXJgIHJldHVybnMgYSBkaWZmZXJlbnQgaGVpZ2h0XG4gICAgICogZm9yIGEgcm93IHRoYW4gdGhlIGByb3dIZWlnaHRgIHByb3AuIFRoaXMgaXMgbmVjZXNzYXJ5IGJlY2F1c2UgaW5pdGlhbGx5XG4gICAgICogdGFibGUgZXN0aW1hdGVzIGhlaWdodHMgb2Ygc29tZSBwYXJ0cyBvZiB0aGUgY29udGVudC5cbiAgICAgKi9cbiAgICBvbkNvbnRlbnRIZWlnaHRDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBhIHJvdyBpcyBjbGlja2VkLlxuICAgICAqL1xuICAgIG9uUm93Q2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBhIHJvdyBpcyBkb3VibGUgY2xpY2tlZC5cbiAgICAgKi9cbiAgICBvblJvd0RvdWJsZUNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gYSBtb3VzZS1kb3duIGV2ZW50IGhhcHBlbnMgb24gYSByb3cuXG4gICAgICovXG4gICAgb25Sb3dNb3VzZURvd246IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBhIG1vdXNlLWVudGVyIGV2ZW50IGhhcHBlbnMgb24gYSByb3cuXG4gICAgICovXG4gICAgb25Sb3dNb3VzZUVudGVyOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gYSBtb3VzZS1sZWF2ZSBldmVudCBoYXBwZW5zIG9uIGEgcm93LlxuICAgICAqL1xuICAgIG9uUm93TW91c2VMZWF2ZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIHJlc2l6ZXIgaGFzIGJlZW4gcmVsZWFzZWRcbiAgICAgKiBhbmQgY29sdW1uIG5lZWRzIHRvIGJlIHVwZGF0ZWQuXG4gICAgICpcbiAgICAgKiBSZXF1aXJlZCBpZiB0aGUgaXNSZXNpemFibGUgcHJvcGVydHkgaXMgdHJ1ZSBvbiBhbnkgY29sdW1uLlxuICAgICAqXG4gICAgICogYGBgXG4gICAgICogZnVuY3Rpb24oXG4gICAgICogICBuZXdDb2x1bW5XaWR0aDogbnVtYmVyLFxuICAgICAqICAgY29sdW1uS2V5OiBzdHJpbmcsXG4gICAgICogKVxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIG9uQ29sdW1uUmVzaXplRW5kQ2FsbGJhY2s6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogV2hldGhlciBhIGNvbHVtbiBpcyBjdXJyZW50bHkgYmVpbmcgcmVzaXplZC5cbiAgICAgKi9cbiAgICBpc0NvbHVtblJlc2l6aW5nOiBQcm9wVHlwZXMuYm9vbFxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkgLypvYmplY3QqL3tcbiAgICByZXR1cm4ge1xuICAgICAgZm9vdGVySGVpZ2h0OiAwLFxuICAgICAgZ3JvdXBIZWFkZXJIZWlnaHQ6IDAsXG4gICAgICBoZWFkZXJIZWlnaHQ6IDAsXG4gICAgICBzY3JvbGxMZWZ0OiAwLFxuICAgICAgc2Nyb2xsVG9wOiAwXG4gICAgfTtcbiAgfSxcblxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIC8qb2JqZWN0Ki97XG4gICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgdmlld3BvcnRIZWlnaHQgPSAocHJvcHMuaGVpZ2h0ID09PSB1bmRlZmluZWQgPyBwcm9wcy5tYXhIZWlnaHQgOiBwcm9wcy5oZWlnaHQpIC0gKHByb3BzLmhlYWRlckhlaWdodCB8fCAwKSAtIChwcm9wcy5mb290ZXJIZWlnaHQgfHwgMCkgLSAocHJvcHMuZ3JvdXBIZWFkZXJIZWlnaHQgfHwgMCk7XG4gICAgdGhpcy5fc2Nyb2xsSGVscGVyID0gbmV3IEZpeGVkRGF0YVRhYmxlU2Nyb2xsSGVscGVyKHByb3BzLnJvd3NDb3VudCwgcHJvcHMucm93SGVpZ2h0LCB2aWV3cG9ydEhlaWdodCwgcHJvcHMucm93SGVpZ2h0R2V0dGVyKTtcbiAgICBpZiAocHJvcHMuc2Nyb2xsVG9wKSB7XG4gICAgICB0aGlzLl9zY3JvbGxIZWxwZXIuc2Nyb2xsVG8ocHJvcHMuc2Nyb2xsVG9wKTtcbiAgICB9XG4gICAgdGhpcy5fZGlkU2Nyb2xsU3RvcCA9IGRlYm91bmNlQ29yZSh0aGlzLl9kaWRTY3JvbGxTdG9wLCAyMDAsIHRoaXMpO1xuXG4gICAgcmV0dXJuIHRoaXMuX2NhbGN1bGF0ZVN0YXRlKHRoaXMucHJvcHMpO1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxNb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHZhciBzY3JvbGxUb1JvdyA9IHRoaXMucHJvcHMuc2Nyb2xsVG9Sb3c7XG4gICAgaWYgKHNjcm9sbFRvUm93ICE9PSB1bmRlZmluZWQgJiYgc2Nyb2xsVG9Sb3cgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3Jvd1RvU2Nyb2xsVG8gPSBzY3JvbGxUb1JvdztcbiAgICB9XG4gICAgdmFyIHNjcm9sbFRvQ29sdW1uID0gdGhpcy5wcm9wcy5zY3JvbGxUb0NvbHVtbjtcbiAgICBpZiAoc2Nyb2xsVG9Db2x1bW4gIT09IHVuZGVmaW5lZCAmJiBzY3JvbGxUb0NvbHVtbiAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fY29sdW1uVG9TY3JvbGxUbyA9IHNjcm9sbFRvQ29sdW1uO1xuICAgIH1cbiAgICB0aGlzLl93aGVlbEhhbmRsZXIgPSBuZXcgUmVhY3RXaGVlbEhhbmRsZXIodGhpcy5fb25XaGVlbCwgdGhpcy5fc2hvdWxkSGFuZGxlV2hlZWxYLCB0aGlzLl9zaG91bGRIYW5kbGVXaGVlbFkpO1xuICB9LFxuXG4gIF9zaG91bGRIYW5kbGVXaGVlbFg6IGZ1bmN0aW9uIF9zaG91bGRIYW5kbGVXaGVlbFgoIC8qbnVtYmVyKi9kZWx0YSkgLypib29sZWFuKi97XG4gICAgaWYgKHRoaXMucHJvcHMub3ZlcmZsb3dYID09PSAnaGlkZGVuJykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGRlbHRhID0gTWF0aC5yb3VuZChkZWx0YSk7XG4gICAgaWYgKGRlbHRhID09PSAwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlbHRhIDwgMCAmJiB0aGlzLnN0YXRlLnNjcm9sbFggPiAwIHx8IGRlbHRhID49IDAgJiYgdGhpcy5zdGF0ZS5zY3JvbGxYIDwgdGhpcy5zdGF0ZS5tYXhTY3JvbGxYO1xuICB9LFxuXG4gIF9zaG91bGRIYW5kbGVXaGVlbFk6IGZ1bmN0aW9uIF9zaG91bGRIYW5kbGVXaGVlbFkoIC8qbnVtYmVyKi9kZWx0YSkgLypib29sZWFuKi97XG4gICAgaWYgKHRoaXMucHJvcHMub3ZlcmZsb3dZID09PSAnaGlkZGVuJyB8fCBkZWx0YSA9PT0gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGRlbHRhID0gTWF0aC5yb3VuZChkZWx0YSk7XG4gICAgaWYgKGRlbHRhID09PSAwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlbHRhIDwgMCAmJiB0aGlzLnN0YXRlLnNjcm9sbFkgPiAwIHx8IGRlbHRhID49IDAgJiYgdGhpcy5zdGF0ZS5zY3JvbGxZIDwgdGhpcy5zdGF0ZS5tYXhTY3JvbGxZO1xuICB9LFxuXG4gIF9yZXBvcnRDb250ZW50SGVpZ2h0OiBmdW5jdGlvbiBfcmVwb3J0Q29udGVudEhlaWdodCgpIHtcbiAgICB2YXIgc2Nyb2xsQ29udGVudEhlaWdodCA9IHRoaXMuc3RhdGUuc2Nyb2xsQ29udGVudEhlaWdodDtcbiAgICB2YXIgcmVzZXJ2ZWRIZWlnaHQgPSB0aGlzLnN0YXRlLnJlc2VydmVkSGVpZ2h0O1xuICAgIHZhciByZXF1aXJlZEhlaWdodCA9IHNjcm9sbENvbnRlbnRIZWlnaHQgKyByZXNlcnZlZEhlaWdodDtcbiAgICB2YXIgY29udGVudEhlaWdodDtcbiAgICB2YXIgdXNlTWF4SGVpZ2h0ID0gdGhpcy5wcm9wcy5oZWlnaHQgPT09IHVuZGVmaW5lZDtcbiAgICBpZiAodXNlTWF4SGVpZ2h0ICYmIHRoaXMucHJvcHMubWF4SGVpZ2h0ID4gcmVxdWlyZWRIZWlnaHQpIHtcbiAgICAgIGNvbnRlbnRIZWlnaHQgPSByZXF1aXJlZEhlaWdodDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuaGVpZ2h0ID4gcmVxdWlyZWRIZWlnaHQgJiYgdGhpcy5wcm9wcy5vd25lckhlaWdodCkge1xuICAgICAgY29udGVudEhlaWdodCA9IE1hdGgubWF4KHJlcXVpcmVkSGVpZ2h0LCB0aGlzLnByb3BzLm93bmVySGVpZ2h0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGVudEhlaWdodCA9IHRoaXMuc3RhdGUuaGVpZ2h0ICsgdGhpcy5zdGF0ZS5tYXhTY3JvbGxZO1xuICAgIH1cbiAgICBpZiAoY29udGVudEhlaWdodCAhPT0gdGhpcy5fY29udGVudEhlaWdodCAmJiB0aGlzLnByb3BzLm9uQ29udGVudEhlaWdodENoYW5nZSkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNvbnRlbnRIZWlnaHRDaGFuZ2UoY29udGVudEhlaWdodCk7XG4gICAgfVxuICAgIHRoaXMuX2NvbnRlbnRIZWlnaHQgPSBjb250ZW50SGVpZ2h0O1xuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLl9yZXBvcnRDb250ZW50SGVpZ2h0KCk7XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyggLypvYmplY3QqL25leHRQcm9wcykge1xuICAgIHZhciBzY3JvbGxUb1JvdyA9IG5leHRQcm9wcy5zY3JvbGxUb1JvdztcbiAgICBpZiAoc2Nyb2xsVG9Sb3cgIT09IHVuZGVmaW5lZCAmJiBzY3JvbGxUb1JvdyAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fcm93VG9TY3JvbGxUbyA9IHNjcm9sbFRvUm93O1xuICAgIH1cbiAgICB2YXIgc2Nyb2xsVG9Db2x1bW4gPSBuZXh0UHJvcHMuc2Nyb2xsVG9Db2x1bW47XG4gICAgaWYgKHNjcm9sbFRvQ29sdW1uICE9PSB1bmRlZmluZWQgJiYgc2Nyb2xsVG9Db2x1bW4gIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX2NvbHVtblRvU2Nyb2xsVG8gPSBzY3JvbGxUb0NvbHVtbjtcbiAgICB9XG5cbiAgICB2YXIgbmV3T3ZlcmZsb3dYID0gbmV4dFByb3BzLm92ZXJmbG93WDtcbiAgICB2YXIgbmV3T3ZlcmZsb3dZID0gbmV4dFByb3BzLm92ZXJmbG93WTtcbiAgICBpZiAobmV3T3ZlcmZsb3dYICE9PSB0aGlzLnByb3BzLm92ZXJmbG93WCB8fCBuZXdPdmVyZmxvd1kgIT09IHRoaXMucHJvcHMub3ZlcmZsb3dZKSB7XG4gICAgICB0aGlzLl93aGVlbEhhbmRsZXIgPSBuZXcgUmVhY3RXaGVlbEhhbmRsZXIodGhpcy5fb25XaGVlbCwgbmV3T3ZlcmZsb3dYICE9PSAnaGlkZGVuJywgLy8gU2hvdWxkIGhhbmRsZSBob3Jpem9udGFsIHNjcm9sbFxuICAgICAgbmV3T3ZlcmZsb3dZICE9PSAnaGlkZGVuJyAvLyBTaG91bGQgaGFuZGxlIHZlcnRpY2FsIHNjcm9sbFxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBJbiB0aGUgY2FzZSBvZiBjb250cm9sbGVkIHNjcm9sbGluZywgbm90aWZ5LlxuICAgIGlmICh0aGlzLnByb3BzLm93bmVySGVpZ2h0ICE9PSBuZXh0UHJvcHMub3duZXJIZWlnaHQgfHwgdGhpcy5wcm9wcy5zY3JvbGxUb3AgIT09IG5leHRQcm9wcy5zY3JvbGxUb3ApIHtcbiAgICAgIHRoaXMuX2RpZFNjcm9sbFN0YXJ0KCk7XG4gICAgfVxuICAgIHRoaXMuX2RpZFNjcm9sbFN0b3AoKTtcblxuICAgIHRoaXMuc2V0U3RhdGUodGhpcy5fY2FsY3VsYXRlU3RhdGUobmV4dFByb3BzLCB0aGlzLnN0YXRlKSk7XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkVXBkYXRlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdGhpcy5fcmVwb3J0Q29udGVudEhlaWdodCgpO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkgLypvYmplY3QqL3tcbiAgICB2YXIgc3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG5cbiAgICB2YXIgZ3JvdXBIZWFkZXI7XG4gICAgaWYgKHN0YXRlLnVzZUdyb3VwSGVhZGVyKSB7XG4gICAgICBncm91cEhlYWRlciA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoRml4ZWREYXRhVGFibGVSb3csIHtcbiAgICAgICAga2V5OiAnZ3JvdXBfaGVhZGVyJyxcbiAgICAgICAgaXNTY3JvbGxpbmc6IHRoaXMuX2lzU2Nyb2xsaW5nLFxuICAgICAgICBjbGFzc05hbWU6IGpvaW5DbGFzc2VzKGN4KCdmaXhlZERhdGFUYWJsZUxheW91dC9oZWFkZXInKSwgY3goJ3B1YmxpYy9maXhlZERhdGFUYWJsZS9oZWFkZXInKSksXG4gICAgICAgIHdpZHRoOiBzdGF0ZS53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBzdGF0ZS5ncm91cEhlYWRlckhlaWdodCxcbiAgICAgICAgaW5kZXg6IDAsXG4gICAgICAgIHpJbmRleDogMSxcbiAgICAgICAgb2Zmc2V0VG9wOiAwLFxuICAgICAgICBzY3JvbGxMZWZ0OiBzdGF0ZS5zY3JvbGxYLFxuICAgICAgICBmaXhlZENvbHVtbnM6IHN0YXRlLmdyb3VwSGVhZGVyRml4ZWRDb2x1bW5zLFxuICAgICAgICBzY3JvbGxhYmxlQ29sdW1uczogc3RhdGUuZ3JvdXBIZWFkZXJTY3JvbGxhYmxlQ29sdW1ucyxcbiAgICAgICAgb25Db2x1bW5SZXNpemU6IHRoaXMuX29uQ29sdW1uUmVzaXplXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgbWF4U2Nyb2xsWSA9IHRoaXMuc3RhdGUubWF4U2Nyb2xsWTtcbiAgICB2YXIgc2hvd1Njcm9sbGJhclggPSBzdGF0ZS5tYXhTY3JvbGxYID4gMCAmJiBzdGF0ZS5vdmVyZmxvd1ggIT09ICdoaWRkZW4nO1xuICAgIHZhciBzaG93U2Nyb2xsYmFyWSA9IG1heFNjcm9sbFkgPiAwICYmIHN0YXRlLm92ZXJmbG93WSAhPT0gJ2hpZGRlbic7XG4gICAgdmFyIHNjcm9sbGJhclhIZWlnaHQgPSBzaG93U2Nyb2xsYmFyWCA/IFNjcm9sbGJhci5TSVpFIDogMDtcbiAgICB2YXIgc2Nyb2xsYmFyWUhlaWdodCA9IHN0YXRlLmhlaWdodCAtIHNjcm9sbGJhclhIZWlnaHQgLSAyICogQk9SREVSX0hFSUdIVCAtIHN0YXRlLmZvb3RlckhlaWdodDtcblxuICAgIHZhciBoZWFkZXJPZmZzZXRUb3AgPSBzdGF0ZS51c2VHcm91cEhlYWRlciA/IHN0YXRlLmdyb3VwSGVhZGVySGVpZ2h0IDogMDtcbiAgICB2YXIgYm9keU9mZnNldFRvcCA9IGhlYWRlck9mZnNldFRvcCArIHN0YXRlLmhlYWRlckhlaWdodDtcbiAgICBzY3JvbGxiYXJZSGVpZ2h0IC09IGJvZHlPZmZzZXRUb3A7XG4gICAgdmFyIGJvdHRvbVNlY3Rpb25PZmZzZXQgPSAwO1xuICAgIHZhciBmb290T2Zmc2V0VG9wID0gcHJvcHMubWF4SGVpZ2h0ICE9IG51bGwgPyBib2R5T2Zmc2V0VG9wICsgc3RhdGUuYm9keUhlaWdodCA6IGJvZHlPZmZzZXRUb3AgKyBzY3JvbGxiYXJZSGVpZ2h0O1xuICAgIHZhciByb3dzQ29udGFpbmVySGVpZ2h0ID0gZm9vdE9mZnNldFRvcCArIHN0YXRlLmZvb3RlckhlaWdodDtcblxuICAgIGlmIChwcm9wcy5vd25lckhlaWdodCAhPT0gdW5kZWZpbmVkICYmIHByb3BzLm93bmVySGVpZ2h0IDwgc3RhdGUuaGVpZ2h0KSB7XG4gICAgICBib3R0b21TZWN0aW9uT2Zmc2V0ID0gcHJvcHMub3duZXJIZWlnaHQgLSBzdGF0ZS5oZWlnaHQ7XG5cbiAgICAgIGZvb3RPZmZzZXRUb3AgPSBNYXRoLm1pbihmb290T2Zmc2V0VG9wLCBwcm9wcy5vd25lckhlaWdodCAtIHN0YXRlLmZvb3RlckhlaWdodCAtIHNjcm9sbGJhclhIZWlnaHQpO1xuXG4gICAgICBzY3JvbGxiYXJZSGVpZ2h0ID0gTWF0aC5tYXgoMCwgZm9vdE9mZnNldFRvcCAtIGJvZHlPZmZzZXRUb3ApO1xuICAgIH1cblxuICAgIHZhciB2ZXJ0aWNhbFNjcm9sbGJhcjtcbiAgICBpZiAoc2hvd1Njcm9sbGJhclkpIHtcbiAgICAgIHZlcnRpY2FsU2Nyb2xsYmFyID0gUmVhY3QuY3JlYXRlRWxlbWVudChTY3JvbGxiYXIsIHtcbiAgICAgICAgc2l6ZTogc2Nyb2xsYmFyWUhlaWdodCxcbiAgICAgICAgY29udGVudFNpemU6IHNjcm9sbGJhcllIZWlnaHQgKyBtYXhTY3JvbGxZLFxuICAgICAgICBvblNjcm9sbDogdGhpcy5fb25WZXJ0aWNhbFNjcm9sbCxcbiAgICAgICAgdmVydGljYWxUb3A6IGJvZHlPZmZzZXRUb3AsXG4gICAgICAgIHBvc2l0aW9uOiBzdGF0ZS5zY3JvbGxZXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgaG9yaXpvbnRhbFNjcm9sbGJhcjtcbiAgICBpZiAoc2hvd1Njcm9sbGJhclgpIHtcbiAgICAgIHZhciBzY3JvbGxiYXJYV2lkdGggPSBzdGF0ZS53aWR0aDtcbiAgICAgIGhvcml6b250YWxTY3JvbGxiYXIgPSBSZWFjdC5jcmVhdGVFbGVtZW50KEhvcml6b250YWxTY3JvbGxiYXIsIHtcbiAgICAgICAgY29udGVudFNpemU6IHNjcm9sbGJhclhXaWR0aCArIHN0YXRlLm1heFNjcm9sbFgsXG4gICAgICAgIG9mZnNldDogYm90dG9tU2VjdGlvbk9mZnNldCxcbiAgICAgICAgb25TY3JvbGw6IHRoaXMuX29uSG9yaXpvbnRhbFNjcm9sbCxcbiAgICAgICAgcG9zaXRpb246IHN0YXRlLnNjcm9sbFgsXG4gICAgICAgIHNpemU6IHNjcm9sbGJhclhXaWR0aFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFyIGRyYWdLbm9iID0gUmVhY3QuY3JlYXRlRWxlbWVudChGaXhlZERhdGFUYWJsZUNvbHVtblJlc2l6ZUhhbmRsZSwge1xuICAgICAgaGVpZ2h0OiBzdGF0ZS5oZWlnaHQsXG4gICAgICBpbml0aWFsV2lkdGg6IHN0YXRlLmNvbHVtblJlc2l6aW5nRGF0YS53aWR0aCB8fCAwLFxuICAgICAgbWluV2lkdGg6IHN0YXRlLmNvbHVtblJlc2l6aW5nRGF0YS5taW5XaWR0aCB8fCAwLFxuICAgICAgbWF4V2lkdGg6IHN0YXRlLmNvbHVtblJlc2l6aW5nRGF0YS5tYXhXaWR0aCB8fCBOdW1iZXIuTUFYX1ZBTFVFLFxuICAgICAgdmlzaWJsZTogISFzdGF0ZS5pc0NvbHVtblJlc2l6aW5nLFxuICAgICAgbGVmdE9mZnNldDogc3RhdGUuY29sdW1uUmVzaXppbmdEYXRhLmxlZnQgfHwgMCxcbiAgICAgIGtub2JIZWlnaHQ6IHN0YXRlLmhlYWRlckhlaWdodCxcbiAgICAgIGluaXRpYWxFdmVudDogc3RhdGUuY29sdW1uUmVzaXppbmdEYXRhLmluaXRpYWxFdmVudCxcbiAgICAgIG9uQ29sdW1uUmVzaXplRW5kOiBwcm9wcy5vbkNvbHVtblJlc2l6ZUVuZENhbGxiYWNrLFxuICAgICAgY29sdW1uS2V5OiBzdGF0ZS5jb2x1bW5SZXNpemluZ0RhdGEua2V5XG4gICAgfSk7XG5cbiAgICB2YXIgZm9vdGVyID0gbnVsbDtcbiAgICBpZiAoc3RhdGUuZm9vdGVySGVpZ2h0KSB7XG4gICAgICBmb290ZXIgPSBSZWFjdC5jcmVhdGVFbGVtZW50KEZpeGVkRGF0YVRhYmxlUm93LCB7XG4gICAgICAgIGtleTogJ2Zvb3RlcicsXG4gICAgICAgIGlzU2Nyb2xsaW5nOiB0aGlzLl9pc1Njcm9sbGluZyxcbiAgICAgICAgY2xhc3NOYW1lOiBqb2luQ2xhc3NlcyhjeCgnZml4ZWREYXRhVGFibGVMYXlvdXQvZm9vdGVyJyksIGN4KCdwdWJsaWMvZml4ZWREYXRhVGFibGUvZm9vdGVyJykpLFxuICAgICAgICB3aWR0aDogc3RhdGUud2lkdGgsXG4gICAgICAgIGhlaWdodDogc3RhdGUuZm9vdGVySGVpZ2h0LFxuICAgICAgICBpbmRleDogLTEsXG4gICAgICAgIHpJbmRleDogMSxcbiAgICAgICAgb2Zmc2V0VG9wOiBmb290T2Zmc2V0VG9wLFxuICAgICAgICBmaXhlZENvbHVtbnM6IHN0YXRlLmZvb3RGaXhlZENvbHVtbnMsXG4gICAgICAgIHNjcm9sbGFibGVDb2x1bW5zOiBzdGF0ZS5mb290U2Nyb2xsYWJsZUNvbHVtbnMsXG4gICAgICAgIHNjcm9sbExlZnQ6IHN0YXRlLnNjcm9sbFhcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciByb3dzID0gdGhpcy5fcmVuZGVyUm93cyhib2R5T2Zmc2V0VG9wKTtcblxuICAgIHZhciBoZWFkZXIgPSBSZWFjdC5jcmVhdGVFbGVtZW50KEZpeGVkRGF0YVRhYmxlUm93LCB7XG4gICAgICBrZXk6ICdoZWFkZXInLFxuICAgICAgaXNTY3JvbGxpbmc6IHRoaXMuX2lzU2Nyb2xsaW5nLFxuICAgICAgY2xhc3NOYW1lOiBqb2luQ2xhc3NlcyhjeCgnZml4ZWREYXRhVGFibGVMYXlvdXQvaGVhZGVyJyksIGN4KCdwdWJsaWMvZml4ZWREYXRhVGFibGUvaGVhZGVyJykpLFxuICAgICAgd2lkdGg6IHN0YXRlLndpZHRoLFxuICAgICAgaGVpZ2h0OiBzdGF0ZS5oZWFkZXJIZWlnaHQsXG4gICAgICBpbmRleDogLTEsXG4gICAgICB6SW5kZXg6IDEsXG4gICAgICBvZmZzZXRUb3A6IGhlYWRlck9mZnNldFRvcCxcbiAgICAgIHNjcm9sbExlZnQ6IHN0YXRlLnNjcm9sbFgsXG4gICAgICBmaXhlZENvbHVtbnM6IHN0YXRlLmhlYWRGaXhlZENvbHVtbnMsXG4gICAgICBzY3JvbGxhYmxlQ29sdW1uczogc3RhdGUuaGVhZFNjcm9sbGFibGVDb2x1bW5zLFxuICAgICAgb25Db2x1bW5SZXNpemU6IHRoaXMuX29uQ29sdW1uUmVzaXplXG4gICAgfSk7XG5cbiAgICB2YXIgdG9wU2hhZG93O1xuICAgIHZhciBib3R0b21TaGFkb3c7XG4gICAgaWYgKHN0YXRlLnNjcm9sbFkpIHtcbiAgICAgIHRvcFNoYWRvdyA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBqb2luQ2xhc3NlcyhjeCgnZml4ZWREYXRhVGFibGVMYXlvdXQvdG9wU2hhZG93JyksIGN4KCdwdWJsaWMvZml4ZWREYXRhVGFibGUvdG9wU2hhZG93JykpLFxuICAgICAgICBzdHlsZTogeyB0b3A6IGJvZHlPZmZzZXRUb3AgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlLm93bmVySGVpZ2h0ICE9IG51bGwgJiYgc3RhdGUub3duZXJIZWlnaHQgPCBzdGF0ZS5oZWlnaHQgJiYgc3RhdGUuc2Nyb2xsQ29udGVudEhlaWdodCArIHN0YXRlLnJlc2VydmVkSGVpZ2h0ID4gc3RhdGUub3duZXJIZWlnaHQgfHwgc3RhdGUuc2Nyb2xsWSA8IG1heFNjcm9sbFkpIHtcbiAgICAgIGJvdHRvbVNoYWRvdyA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBqb2luQ2xhc3NlcyhjeCgnZml4ZWREYXRhVGFibGVMYXlvdXQvYm90dG9tU2hhZG93JyksIGN4KCdwdWJsaWMvZml4ZWREYXRhVGFibGUvYm90dG9tU2hhZG93JykpLFxuICAgICAgICBzdHlsZTogeyB0b3A6IGZvb3RPZmZzZXRUb3AgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiBqb2luQ2xhc3NlcyhjeCgnZml4ZWREYXRhVGFibGVMYXlvdXQvbWFpbicpLCBjeCgncHVibGljL2ZpeGVkRGF0YVRhYmxlL21haW4nKSksXG4gICAgICAgIG9uV2hlZWw6IHRoaXMuX3doZWVsSGFuZGxlci5vbldoZWVsLFxuICAgICAgICBzdHlsZTogeyBoZWlnaHQ6IHN0YXRlLmhlaWdodCwgd2lkdGg6IHN0YXRlLndpZHRoIH0gfSxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBjeCgnZml4ZWREYXRhVGFibGVMYXlvdXQvcm93c0NvbnRhaW5lcicpLFxuICAgICAgICAgIHN0eWxlOiB7IGhlaWdodDogcm93c0NvbnRhaW5lckhlaWdodCwgd2lkdGg6IHN0YXRlLndpZHRoIH0gfSxcbiAgICAgICAgZHJhZ0tub2IsXG4gICAgICAgIGdyb3VwSGVhZGVyLFxuICAgICAgICBoZWFkZXIsXG4gICAgICAgIHJvd3MsXG4gICAgICAgIGZvb3RlcixcbiAgICAgICAgdG9wU2hhZG93LFxuICAgICAgICBib3R0b21TaGFkb3dcbiAgICAgICksXG4gICAgICB2ZXJ0aWNhbFNjcm9sbGJhcixcbiAgICAgIGhvcml6b250YWxTY3JvbGxiYXJcbiAgICApO1xuICB9LFxuXG4gIF9yZW5kZXJSb3dzOiBmdW5jdGlvbiBfcmVuZGVyUm93cyggLypudW1iZXIqL29mZnNldFRvcCkgLypvYmplY3QqL3tcbiAgICB2YXIgc3RhdGUgPSB0aGlzLnN0YXRlO1xuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRml4ZWREYXRhVGFibGVCdWZmZXJlZFJvd3MsIHtcbiAgICAgIGlzU2Nyb2xsaW5nOiB0aGlzLl9pc1Njcm9sbGluZyxcbiAgICAgIGRlZmF1bHRSb3dIZWlnaHQ6IHN0YXRlLnJvd0hlaWdodCxcbiAgICAgIGZpcnN0Um93SW5kZXg6IHN0YXRlLmZpcnN0Um93SW5kZXgsXG4gICAgICBmaXJzdFJvd09mZnNldDogc3RhdGUuZmlyc3RSb3dPZmZzZXQsXG4gICAgICBmaXhlZENvbHVtbnM6IHN0YXRlLmJvZHlGaXhlZENvbHVtbnMsXG4gICAgICBoZWlnaHQ6IHN0YXRlLmJvZHlIZWlnaHQsXG4gICAgICBvZmZzZXRUb3A6IG9mZnNldFRvcCxcbiAgICAgIG9uUm93Q2xpY2s6IHN0YXRlLm9uUm93Q2xpY2ssXG4gICAgICBvblJvd0RvdWJsZUNsaWNrOiBzdGF0ZS5vblJvd0RvdWJsZUNsaWNrLFxuICAgICAgb25Sb3dNb3VzZURvd246IHN0YXRlLm9uUm93TW91c2VEb3duLFxuICAgICAgb25Sb3dNb3VzZUVudGVyOiBzdGF0ZS5vblJvd01vdXNlRW50ZXIsXG4gICAgICBvblJvd01vdXNlTGVhdmU6IHN0YXRlLm9uUm93TW91c2VMZWF2ZSxcbiAgICAgIHJvd0NsYXNzTmFtZUdldHRlcjogc3RhdGUucm93Q2xhc3NOYW1lR2V0dGVyLFxuICAgICAgcm93c0NvdW50OiBzdGF0ZS5yb3dzQ291bnQsXG4gICAgICByb3dHZXR0ZXI6IHN0YXRlLnJvd0dldHRlcixcbiAgICAgIHJvd0hlaWdodEdldHRlcjogc3RhdGUucm93SGVpZ2h0R2V0dGVyLFxuICAgICAgc2Nyb2xsTGVmdDogc3RhdGUuc2Nyb2xsWCxcbiAgICAgIHNjcm9sbGFibGVDb2x1bW5zOiBzdGF0ZS5ib2R5U2Nyb2xsYWJsZUNvbHVtbnMsXG4gICAgICBzaG93TGFzdFJvd0JvcmRlcjogdHJ1ZSxcbiAgICAgIHdpZHRoOiBzdGF0ZS53aWR0aCxcbiAgICAgIHJvd1Bvc2l0aW9uR2V0dGVyOiB0aGlzLl9zY3JvbGxIZWxwZXIuZ2V0Um93UG9zaXRpb25cbiAgICB9KTtcbiAgfSxcblxuICAvKipcbiAgICogVGhpcyBpcyBjYWxsZWQgd2hlbiBhIGNlbGwgdGhhdCBpcyBpbiB0aGUgaGVhZGVyIG9mIGEgY29sdW1uIGhhcyBpdHNcbiAgICogcmVzaXplciBrbm9iIGNsaWNrZWQgb24uIEl0IGRpc3BsYXlzIHRoZSByZXNpemVyIGFuZCBwdXRzIGluIHRoZSBjb3JyZWN0XG4gICAqIGxvY2F0aW9uIG9uIHRoZSB0YWJsZS5cbiAgICovXG4gIF9vbkNvbHVtblJlc2l6ZTogZnVuY3Rpb24gX29uQ29sdW1uUmVzaXplKFxuICAvKm51bWJlciovY29tYmluZWRXaWR0aCxcbiAgLypudW1iZXIqL2xlZnRPZmZzZXQsXG4gIC8qbnVtYmVyKi9jZWxsV2lkdGgsXG4gIC8qP251bWJlciovY2VsbE1pbldpZHRoLFxuICAvKj9udW1iZXIqL2NlbGxNYXhXaWR0aCxcbiAgLypudW1iZXJ8c3RyaW5nKi9jb2x1bW5LZXksXG4gIC8qb2JqZWN0Ki9ldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNDb2x1bW5SZXNpemluZzogdHJ1ZSxcbiAgICAgIGNvbHVtblJlc2l6aW5nRGF0YToge1xuICAgICAgICBsZWZ0OiBsZWZ0T2Zmc2V0ICsgY29tYmluZWRXaWR0aCAtIGNlbGxXaWR0aCxcbiAgICAgICAgd2lkdGg6IGNlbGxXaWR0aCxcbiAgICAgICAgbWluV2lkdGg6IGNlbGxNaW5XaWR0aCxcbiAgICAgICAgbWF4V2lkdGg6IGNlbGxNYXhXaWR0aCxcbiAgICAgICAgaW5pdGlhbEV2ZW50OiB7XG4gICAgICAgICAgY2xpZW50WDogZXZlbnQuY2xpZW50WCxcbiAgICAgICAgICBjbGllbnRZOiBldmVudC5jbGllbnRZLFxuICAgICAgICAgIHByZXZlbnREZWZhdWx0OiBlbXB0eUZ1bmN0aW9uXG4gICAgICAgIH0sXG4gICAgICAgIGtleTogY29sdW1uS2V5XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgX2FyZUNvbHVtblNldHRpbmdzSWRlbnRpY2FsOiBmdW5jdGlvbiBfYXJlQ29sdW1uU2V0dGluZ3NJZGVudGljYWwob2xkQ29sdW1ucywgbmV3Q29sdW1ucykge1xuICAgIGlmIChvbGRDb2x1bW5zLmxlbmd0aCAhPT0gbmV3Q29sdW1ucy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IG9sZENvbHVtbnMubGVuZ3RoOyArK2luZGV4KSB7XG4gICAgICBpZiAoIXNoYWxsb3dFcXVhbChvbGRDb2x1bW5zW2luZGV4XS5wcm9wcywgbmV3Q29sdW1uc1tpbmRleF0ucHJvcHMpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG5cbiAgX3BvcHVsYXRlQ29sdW1uc0FuZENvbHVtbkRhdGE6IGZ1bmN0aW9uIF9wb3B1bGF0ZUNvbHVtbnNBbmRDb2x1bW5EYXRhKGNvbHVtbnMsIGNvbHVtbkdyb3Vwcywgb2xkU3RhdGUpIHtcbiAgICB2YXIgY2FuUmV1c2VDb2x1bW5TZXR0aW5ncyA9IGZhbHNlO1xuICAgIHZhciBjYW5SZXVzZUNvbHVtbkdyb3VwU2V0dGluZ3MgPSBmYWxzZTtcblxuICAgIGlmIChvbGRTdGF0ZSAmJiBvbGRTdGF0ZS5jb2x1bW5zKSB7XG4gICAgICBjYW5SZXVzZUNvbHVtblNldHRpbmdzID0gdGhpcy5fYXJlQ29sdW1uU2V0dGluZ3NJZGVudGljYWwoY29sdW1ucywgb2xkU3RhdGUuY29sdW1ucyk7XG4gICAgfVxuICAgIGlmIChvbGRTdGF0ZSAmJiBvbGRTdGF0ZS5jb2x1bW5Hcm91cHMgJiYgY29sdW1uR3JvdXBzKSB7XG4gICAgICBjYW5SZXVzZUNvbHVtbkdyb3VwU2V0dGluZ3MgPSB0aGlzLl9hcmVDb2x1bW5TZXR0aW5nc0lkZW50aWNhbChjb2x1bW5Hcm91cHMsIG9sZFN0YXRlLmNvbHVtbkdyb3Vwcyk7XG4gICAgfVxuXG4gICAgdmFyIGNvbHVtbkluZm8gPSB7fTtcbiAgICBpZiAoY2FuUmV1c2VDb2x1bW5TZXR0aW5ncykge1xuICAgICAgY29sdW1uSW5mby5ib2R5Rml4ZWRDb2x1bW5zID0gb2xkU3RhdGUuYm9keUZpeGVkQ29sdW1ucztcbiAgICAgIGNvbHVtbkluZm8uYm9keVNjcm9sbGFibGVDb2x1bW5zID0gb2xkU3RhdGUuYm9keVNjcm9sbGFibGVDb2x1bW5zO1xuICAgICAgY29sdW1uSW5mby5oZWFkRml4ZWRDb2x1bW5zID0gb2xkU3RhdGUuaGVhZEZpeGVkQ29sdW1ucztcbiAgICAgIGNvbHVtbkluZm8uaGVhZFNjcm9sbGFibGVDb2x1bW5zID0gb2xkU3RhdGUuaGVhZFNjcm9sbGFibGVDb2x1bW5zO1xuICAgICAgY29sdW1uSW5mby5mb290Rml4ZWRDb2x1bW5zID0gb2xkU3RhdGUuZm9vdEZpeGVkQ29sdW1ucztcbiAgICAgIGNvbHVtbkluZm8uZm9vdFNjcm9sbGFibGVDb2x1bW5zID0gb2xkU3RhdGUuZm9vdFNjcm9sbGFibGVDb2x1bW5zO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYm9keUNvbHVtblR5cGVzID0gdGhpcy5fc3BsaXRDb2x1bW5UeXBlcyhjb2x1bW5zKTtcbiAgICAgIGNvbHVtbkluZm8uYm9keUZpeGVkQ29sdW1ucyA9IGJvZHlDb2x1bW5UeXBlcy5maXhlZDtcbiAgICAgIGNvbHVtbkluZm8uYm9keVNjcm9sbGFibGVDb2x1bW5zID0gYm9keUNvbHVtblR5cGVzLnNjcm9sbGFibGU7XG5cbiAgICAgIHZhciBoZWFkQ29sdW1uVHlwZXMgPSB0aGlzLl9zcGxpdENvbHVtblR5cGVzKHRoaXMuX3NlbGVjdENvbHVtbkVsZW1lbnQoSEVBREVSLCBjb2x1bW5zKSk7XG4gICAgICBjb2x1bW5JbmZvLmhlYWRGaXhlZENvbHVtbnMgPSBoZWFkQ29sdW1uVHlwZXMuZml4ZWQ7XG4gICAgICBjb2x1bW5JbmZvLmhlYWRTY3JvbGxhYmxlQ29sdW1ucyA9IGhlYWRDb2x1bW5UeXBlcy5zY3JvbGxhYmxlO1xuXG4gICAgICB2YXIgZm9vdENvbHVtblR5cGVzID0gdGhpcy5fc3BsaXRDb2x1bW5UeXBlcyh0aGlzLl9zZWxlY3RDb2x1bW5FbGVtZW50KEZPT1RFUiwgY29sdW1ucykpO1xuICAgICAgY29sdW1uSW5mby5mb290Rml4ZWRDb2x1bW5zID0gZm9vdENvbHVtblR5cGVzLmZpeGVkO1xuICAgICAgY29sdW1uSW5mby5mb290U2Nyb2xsYWJsZUNvbHVtbnMgPSBmb290Q29sdW1uVHlwZXMuc2Nyb2xsYWJsZTtcbiAgICB9XG5cbiAgICBpZiAoY2FuUmV1c2VDb2x1bW5Hcm91cFNldHRpbmdzKSB7XG4gICAgICBjb2x1bW5JbmZvLmdyb3VwSGVhZGVyRml4ZWRDb2x1bW5zID0gb2xkU3RhdGUuZ3JvdXBIZWFkZXJGaXhlZENvbHVtbnM7XG4gICAgICBjb2x1bW5JbmZvLmdyb3VwSGVhZGVyU2Nyb2xsYWJsZUNvbHVtbnMgPSBvbGRTdGF0ZS5ncm91cEhlYWRlclNjcm9sbGFibGVDb2x1bW5zO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoY29sdW1uR3JvdXBzKSB7XG4gICAgICAgIHZhciBncm91cEhlYWRlckNvbHVtblR5cGVzID0gdGhpcy5fc3BsaXRDb2x1bW5UeXBlcyh0aGlzLl9zZWxlY3RDb2x1bW5FbGVtZW50KEhFQURFUiwgY29sdW1uR3JvdXBzKSk7XG4gICAgICAgIGNvbHVtbkluZm8uZ3JvdXBIZWFkZXJGaXhlZENvbHVtbnMgPSBncm91cEhlYWRlckNvbHVtblR5cGVzLmZpeGVkO1xuICAgICAgICBjb2x1bW5JbmZvLmdyb3VwSGVhZGVyU2Nyb2xsYWJsZUNvbHVtbnMgPSBncm91cEhlYWRlckNvbHVtblR5cGVzLnNjcm9sbGFibGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbHVtbkluZm87XG4gIH0sXG5cbiAgX2NhbGN1bGF0ZVN0YXRlOiBmdW5jdGlvbiBfY2FsY3VsYXRlU3RhdGUoIC8qb2JqZWN0Ki9wcm9wcywgLyo/b2JqZWN0Ki9vbGRTdGF0ZSkgLypvYmplY3QqL3tcbiAgICBpbnZhcmlhbnQocHJvcHMuaGVpZ2h0ICE9PSB1bmRlZmluZWQgfHwgcHJvcHMubWF4SGVpZ2h0ICE9PSB1bmRlZmluZWQsICdZb3UgbXVzdCBzZXQgZWl0aGVyIGEgaGVpZ2h0IG9yIGEgbWF4SGVpZ2h0Jyk7XG5cbiAgICB2YXIgY2hpbGRyZW4gPSBbXTtcbiAgICBSZWFjdENoaWxkcmVuLmZvckVhY2gocHJvcHMuY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCwgaW5kZXgpIHtcbiAgICAgIGlmIChjaGlsZCA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGludmFyaWFudChjaGlsZC50eXBlLl9fVGFibGVDb2x1bW5Hcm91cF9fIHx8IGNoaWxkLnR5cGUuX19UYWJsZUNvbHVtbl9fLCAnY2hpbGQgdHlwZSBzaG91bGQgYmUgPEZpeGVkRGF0YVRhYmxlQ29sdW1uIC8+IG9yICcgKyAnPEZpeGVkRGF0YVRhYmxlQ29sdW1uR3JvdXAgLz4nKTtcbiAgICAgIGNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgIH0pO1xuXG4gICAgdmFyIHVzZUdyb3VwSGVhZGVyID0gZmFsc2U7XG4gICAgaWYgKGNoaWxkcmVuLmxlbmd0aCAmJiBjaGlsZHJlblswXS50eXBlLl9fVGFibGVDb2x1bW5Hcm91cF9fKSB7XG4gICAgICB1c2VHcm91cEhlYWRlciA9IHRydWU7XG4gICAgfVxuXG4gICAgdmFyIGZpcnN0Um93SW5kZXggPSBvbGRTdGF0ZSAmJiBvbGRTdGF0ZS5maXJzdFJvd0luZGV4IHx8IDA7XG4gICAgdmFyIGZpcnN0Um93T2Zmc2V0ID0gb2xkU3RhdGUgJiYgb2xkU3RhdGUuZmlyc3RSb3dPZmZzZXQgfHwgMDtcbiAgICB2YXIgc2Nyb2xsWCwgc2Nyb2xsWTtcbiAgICBpZiAob2xkU3RhdGUgJiYgcHJvcHMub3ZlcmZsb3dYICE9PSAnaGlkZGVuJykge1xuICAgICAgc2Nyb2xsWCA9IG9sZFN0YXRlLnNjcm9sbFg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNjcm9sbFggPSBwcm9wcy5zY3JvbGxMZWZ0O1xuICAgIH1cbiAgICBpZiAob2xkU3RhdGUgJiYgcHJvcHMub3ZlcmZsb3dZICE9PSAnaGlkZGVuJykge1xuICAgICAgc2Nyb2xsWSA9IG9sZFN0YXRlLnNjcm9sbFk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNjcm9sbFN0YXRlID0gdGhpcy5fc2Nyb2xsSGVscGVyLnNjcm9sbFRvKHByb3BzLnNjcm9sbFRvcCk7XG4gICAgICBmaXJzdFJvd0luZGV4ID0gc2Nyb2xsU3RhdGUuaW5kZXg7XG4gICAgICBmaXJzdFJvd09mZnNldCA9IHNjcm9sbFN0YXRlLm9mZnNldDtcbiAgICAgIHNjcm9sbFkgPSBzY3JvbGxTdGF0ZS5wb3NpdGlvbjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fcm93VG9TY3JvbGxUbyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBzY3JvbGxTdGF0ZSA9IHRoaXMuX3Njcm9sbEhlbHBlci5zY3JvbGxSb3dJbnRvVmlldyh0aGlzLl9yb3dUb1Njcm9sbFRvKTtcbiAgICAgIGZpcnN0Um93SW5kZXggPSBzY3JvbGxTdGF0ZS5pbmRleDtcbiAgICAgIGZpcnN0Um93T2Zmc2V0ID0gc2Nyb2xsU3RhdGUub2Zmc2V0O1xuICAgICAgc2Nyb2xsWSA9IHNjcm9sbFN0YXRlLnBvc2l0aW9uO1xuICAgICAgZGVsZXRlIHRoaXMuX3Jvd1RvU2Nyb2xsVG87XG4gICAgfVxuXG4gICAgdmFyIGdyb3VwSGVhZGVySGVpZ2h0ID0gdXNlR3JvdXBIZWFkZXIgPyBwcm9wcy5ncm91cEhlYWRlckhlaWdodCA6IDA7XG5cbiAgICBpZiAob2xkU3RhdGUgJiYgcHJvcHMucm93c0NvdW50ICE9PSBvbGRTdGF0ZS5yb3dzQ291bnQpIHtcbiAgICAgIC8vIE51bWJlciBvZiByb3dzIGNoYW5nZWQsIHRyeSB0byBzY3JvbGwgdG8gdGhlIHJvdyBmcm9tIGJlZm9yZSB0aGVcbiAgICAgIC8vIGNoYW5nZVxuICAgICAgdmFyIHZpZXdwb3J0SGVpZ2h0ID0gKHByb3BzLmhlaWdodCA9PT0gdW5kZWZpbmVkID8gcHJvcHMubWF4SGVpZ2h0IDogcHJvcHMuaGVpZ2h0KSAtIChwcm9wcy5oZWFkZXJIZWlnaHQgfHwgMCkgLSAocHJvcHMuZm9vdGVySGVpZ2h0IHx8IDApIC0gKHByb3BzLmdyb3VwSGVhZGVySGVpZ2h0IHx8IDApO1xuICAgICAgdGhpcy5fc2Nyb2xsSGVscGVyID0gbmV3IEZpeGVkRGF0YVRhYmxlU2Nyb2xsSGVscGVyKHByb3BzLnJvd3NDb3VudCwgcHJvcHMucm93SGVpZ2h0LCB2aWV3cG9ydEhlaWdodCwgcHJvcHMucm93SGVpZ2h0R2V0dGVyKTtcbiAgICAgIHZhciBzY3JvbGxTdGF0ZSA9IHRoaXMuX3Njcm9sbEhlbHBlci5zY3JvbGxUb1JvdyhmaXJzdFJvd0luZGV4LCBmaXJzdFJvd09mZnNldCk7XG4gICAgICBmaXJzdFJvd0luZGV4ID0gc2Nyb2xsU3RhdGUuaW5kZXg7XG4gICAgICBmaXJzdFJvd09mZnNldCA9IHNjcm9sbFN0YXRlLm9mZnNldDtcbiAgICAgIHNjcm9sbFkgPSBzY3JvbGxTdGF0ZS5wb3NpdGlvbjtcbiAgICB9IGVsc2UgaWYgKG9sZFN0YXRlICYmIHByb3BzLnJvd0hlaWdodEdldHRlciAhPT0gb2xkU3RhdGUucm93SGVpZ2h0R2V0dGVyKSB7XG4gICAgICB0aGlzLl9zY3JvbGxIZWxwZXIuc2V0Um93SGVpZ2h0R2V0dGVyKHByb3BzLnJvd0hlaWdodEdldHRlcik7XG4gICAgfVxuXG4gICAgdmFyIGNvbHVtblJlc2l6aW5nRGF0YTtcbiAgICBpZiAocHJvcHMuaXNDb2x1bW5SZXNpemluZykge1xuICAgICAgY29sdW1uUmVzaXppbmdEYXRhID0gb2xkU3RhdGUgJiYgb2xkU3RhdGUuY29sdW1uUmVzaXppbmdEYXRhO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb2x1bW5SZXNpemluZ0RhdGEgPSBFTVBUWV9PQkpFQ1Q7XG4gICAgfVxuXG4gICAgdmFyIGNvbHVtbnM7XG4gICAgdmFyIGNvbHVtbkdyb3VwcztcblxuICAgIGlmICh1c2VHcm91cEhlYWRlcikge1xuICAgICAgdmFyIGNvbHVtbkdyb3VwU2V0dGluZ3MgPSBGaXhlZERhdGFUYWJsZVdpZHRoSGVscGVyLmFkanVzdENvbHVtbkdyb3VwV2lkdGhzKGNoaWxkcmVuLCBwcm9wcy53aWR0aCk7XG4gICAgICBjb2x1bW5zID0gY29sdW1uR3JvdXBTZXR0aW5ncy5jb2x1bW5zO1xuICAgICAgY29sdW1uR3JvdXBzID0gY29sdW1uR3JvdXBTZXR0aW5ncy5jb2x1bW5Hcm91cHM7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbHVtbnMgPSBGaXhlZERhdGFUYWJsZVdpZHRoSGVscGVyLmFkanVzdENvbHVtbldpZHRocyhjaGlsZHJlbiwgcHJvcHMud2lkdGgpO1xuICAgIH1cblxuICAgIHZhciBjb2x1bW5JbmZvID0gdGhpcy5fcG9wdWxhdGVDb2x1bW5zQW5kQ29sdW1uRGF0YShjb2x1bW5zLCBjb2x1bW5Hcm91cHMsIG9sZFN0YXRlKTtcblxuICAgIGlmICh0aGlzLl9jb2x1bW5Ub1Njcm9sbFRvICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIElmIHNlbGVjdGVkIGNvbHVtbiBpcyBhIGZpeGVkIGNvbHVtbiwgZG9uJ3Qgc2Nyb2xsXG4gICAgICB2YXIgZml4ZWRDb2x1bW5zQ291bnQgPSBjb2x1bW5JbmZvLmJvZHlGaXhlZENvbHVtbnMubGVuZ3RoO1xuICAgICAgaWYgKHRoaXMuX2NvbHVtblRvU2Nyb2xsVG8gPj0gZml4ZWRDb2x1bW5zQ291bnQpIHtcbiAgICAgICAgdmFyIHRvdGFsRml4ZWRDb2x1bW5zV2lkdGggPSAwO1xuICAgICAgICB2YXIgaSwgY29sdW1uO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY29sdW1uSW5mby5ib2R5Rml4ZWRDb2x1bW5zLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgY29sdW1uID0gY29sdW1uSW5mby5ib2R5Rml4ZWRDb2x1bW5zW2ldO1xuICAgICAgICAgIHRvdGFsRml4ZWRDb2x1bW5zV2lkdGggKz0gY29sdW1uLnByb3BzLndpZHRoO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHNjcm9sbGFibGVDb2x1bW5JbmRleCA9IE1hdGgubWluKHRoaXMuX2NvbHVtblRvU2Nyb2xsVG8gLSBmaXhlZENvbHVtbnNDb3VudCwgY29sdW1uSW5mby5ib2R5U2Nyb2xsYWJsZUNvbHVtbnMubGVuZ3RoIC0gMSk7XG5cbiAgICAgICAgdmFyIHByZXZpb3VzQ29sdW1uc1dpZHRoID0gMDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHNjcm9sbGFibGVDb2x1bW5JbmRleDsgKytpKSB7XG4gICAgICAgICAgY29sdW1uID0gY29sdW1uSW5mby5ib2R5U2Nyb2xsYWJsZUNvbHVtbnNbaV07XG4gICAgICAgICAgcHJldmlvdXNDb2x1bW5zV2lkdGggKz0gY29sdW1uLnByb3BzLndpZHRoO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGF2YWlsYWJsZVNjcm9sbFdpZHRoID0gcHJvcHMud2lkdGggLSB0b3RhbEZpeGVkQ29sdW1uc1dpZHRoO1xuICAgICAgICB2YXIgc2VsZWN0ZWRDb2x1bW5XaWR0aCA9IGNvbHVtbkluZm8uYm9keVNjcm9sbGFibGVDb2x1bW5zW3Njcm9sbGFibGVDb2x1bW5JbmRleF0ucHJvcHMud2lkdGg7XG4gICAgICAgIHZhciBtaW5BY2NlcHRhYmxlU2Nyb2xsUG9zaXRpb24gPSBwcmV2aW91c0NvbHVtbnNXaWR0aCArIHNlbGVjdGVkQ29sdW1uV2lkdGggLSBhdmFpbGFibGVTY3JvbGxXaWR0aDtcblxuICAgICAgICBpZiAoc2Nyb2xsWCA8IG1pbkFjY2VwdGFibGVTY3JvbGxQb3NpdGlvbikge1xuICAgICAgICAgIHNjcm9sbFggPSBtaW5BY2NlcHRhYmxlU2Nyb2xsUG9zaXRpb247XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2Nyb2xsWCA+IHByZXZpb3VzQ29sdW1uc1dpZHRoKSB7XG4gICAgICAgICAgc2Nyb2xsWCA9IHByZXZpb3VzQ29sdW1uc1dpZHRoO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBkZWxldGUgdGhpcy5fY29sdW1uVG9TY3JvbGxUbztcbiAgICB9XG5cbiAgICB2YXIgdXNlTWF4SGVpZ2h0ID0gcHJvcHMuaGVpZ2h0ID09PSB1bmRlZmluZWQ7XG4gICAgdmFyIGhlaWdodCA9IE1hdGgucm91bmQodXNlTWF4SGVpZ2h0ID8gcHJvcHMubWF4SGVpZ2h0IDogcHJvcHMuaGVpZ2h0KTtcbiAgICB2YXIgdG90YWxIZWlnaHRSZXNlcnZlZCA9IHByb3BzLmZvb3RlckhlaWdodCArIHByb3BzLmhlYWRlckhlaWdodCArIGdyb3VwSGVhZGVySGVpZ2h0ICsgMiAqIEJPUkRFUl9IRUlHSFQ7XG4gICAgdmFyIGJvZHlIZWlnaHQgPSBoZWlnaHQgLSB0b3RhbEhlaWdodFJlc2VydmVkO1xuICAgIHZhciBzY3JvbGxDb250ZW50SGVpZ2h0ID0gdGhpcy5fc2Nyb2xsSGVscGVyLmdldENvbnRlbnRIZWlnaHQoKTtcbiAgICB2YXIgdG90YWxIZWlnaHROZWVkZWQgPSBzY3JvbGxDb250ZW50SGVpZ2h0ICsgdG90YWxIZWlnaHRSZXNlcnZlZDtcbiAgICB2YXIgc2Nyb2xsQ29udGVudFdpZHRoID0gRml4ZWREYXRhVGFibGVXaWR0aEhlbHBlci5nZXRUb3RhbFdpZHRoKGNvbHVtbnMpO1xuXG4gICAgdmFyIGhvcml6b250YWxTY3JvbGxiYXJWaXNpYmxlID0gc2Nyb2xsQ29udGVudFdpZHRoID4gcHJvcHMud2lkdGggJiYgcHJvcHMub3ZlcmZsb3dYICE9PSAnaGlkZGVuJztcblxuICAgIGlmIChob3Jpem9udGFsU2Nyb2xsYmFyVmlzaWJsZSkge1xuICAgICAgYm9keUhlaWdodCAtPSBTY3JvbGxiYXIuU0laRTtcbiAgICAgIHRvdGFsSGVpZ2h0TmVlZGVkICs9IFNjcm9sbGJhci5TSVpFO1xuICAgICAgdG90YWxIZWlnaHRSZXNlcnZlZCArPSBTY3JvbGxiYXIuU0laRTtcbiAgICB9XG5cbiAgICB2YXIgbWF4U2Nyb2xsWCA9IE1hdGgubWF4KDAsIHNjcm9sbENvbnRlbnRXaWR0aCAtIHByb3BzLndpZHRoKTtcbiAgICB2YXIgbWF4U2Nyb2xsWSA9IE1hdGgubWF4KDAsIHNjcm9sbENvbnRlbnRIZWlnaHQgLSBib2R5SGVpZ2h0KTtcbiAgICBzY3JvbGxYID0gTWF0aC5taW4oc2Nyb2xsWCwgbWF4U2Nyb2xsWCk7XG4gICAgc2Nyb2xsWSA9IE1hdGgubWluKHNjcm9sbFksIG1heFNjcm9sbFkpO1xuXG4gICAgaWYgKCFtYXhTY3JvbGxZKSB7XG4gICAgICAvLyBubyB2ZXJ0aWNhbCBzY3JvbGxiYXIgbmVjZXNzYXJ5LCB1c2UgdGhlIHRvdGFscyB3ZSB0cmFja2VkIHNvIHdlXG4gICAgICAvLyBjYW4gc2hyaW5rLXRvLWZpdCB2ZXJ0aWNhbGx5XG4gICAgICBpZiAodXNlTWF4SGVpZ2h0KSB7XG4gICAgICAgIGhlaWdodCA9IHRvdGFsSGVpZ2h0TmVlZGVkO1xuICAgICAgfVxuICAgICAgYm9keUhlaWdodCA9IHRvdGFsSGVpZ2h0TmVlZGVkIC0gdG90YWxIZWlnaHRSZXNlcnZlZDtcbiAgICB9XG5cbiAgICB0aGlzLl9zY3JvbGxIZWxwZXIuc2V0Vmlld3BvcnRIZWlnaHQoYm9keUhlaWdodCk7XG5cbiAgICAvLyBUaGUgb3JkZXIgb2YgZWxlbWVudHMgaW4gdGhpcyBvYmplY3QgbWV0dGVycyBhbmQgYnJpbmdpbmcgYm9keUhlaWdodCxcbiAgICAvLyBoZWlnaHQgb3IgdXNlR3JvdXBIZWFkZXIgdG8gdGhlIHRvcCBjYW4gYnJlYWsgdmFyaW91cyBmZWF0dXJlc1xuICAgIHZhciBuZXdTdGF0ZSA9IF9leHRlbmRzKHtcbiAgICAgIGlzQ29sdW1uUmVzaXppbmc6IG9sZFN0YXRlICYmIG9sZFN0YXRlLmlzQ29sdW1uUmVzaXppbmdcbiAgICB9LCBjb2x1bW5JbmZvLCBwcm9wcywge1xuXG4gICAgICBjb2x1bW5zOiBjb2x1bW5zLFxuICAgICAgY29sdW1uR3JvdXBzOiBjb2x1bW5Hcm91cHMsXG4gICAgICBjb2x1bW5SZXNpemluZ0RhdGE6IGNvbHVtblJlc2l6aW5nRGF0YSxcbiAgICAgIGZpcnN0Um93SW5kZXg6IGZpcnN0Um93SW5kZXgsXG4gICAgICBmaXJzdFJvd09mZnNldDogZmlyc3RSb3dPZmZzZXQsXG4gICAgICBob3Jpem9udGFsU2Nyb2xsYmFyVmlzaWJsZTogaG9yaXpvbnRhbFNjcm9sbGJhclZpc2libGUsXG4gICAgICBtYXhTY3JvbGxYOiBtYXhTY3JvbGxYLFxuICAgICAgbWF4U2Nyb2xsWTogbWF4U2Nyb2xsWSxcbiAgICAgIHJlc2VydmVkSGVpZ2h0OiB0b3RhbEhlaWdodFJlc2VydmVkLFxuICAgICAgc2Nyb2xsQ29udGVudEhlaWdodDogc2Nyb2xsQ29udGVudEhlaWdodCxcbiAgICAgIHNjcm9sbFg6IHNjcm9sbFgsXG4gICAgICBzY3JvbGxZOiBzY3JvbGxZLFxuXG4gICAgICAvLyBUaGVzZSBwcm9wZXJ0aWVzIG1heSBvdmVyd3JpdGUgcHJvcGVydGllcyBkZWZpbmVkIGluXG4gICAgICAvLyBjb2x1bW5JbmZvIGFuZCBwcm9wc1xuICAgICAgYm9keUhlaWdodDogYm9keUhlaWdodCxcbiAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgZ3JvdXBIZWFkZXJIZWlnaHQ6IGdyb3VwSGVhZGVySGVpZ2h0LFxuICAgICAgdXNlR3JvdXBIZWFkZXI6IHVzZUdyb3VwSGVhZGVyXG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmV3U3RhdGU7XG4gIH0sXG5cbiAgX3NlbGVjdENvbHVtbkVsZW1lbnQ6IGZ1bmN0aW9uIF9zZWxlY3RDb2x1bW5FbGVtZW50KCAvKnN0cmluZyovdHlwZSwgLyphcnJheSovY29sdW1ucykgLyphcnJheSove1xuICAgIHZhciBuZXdDb2x1bW5zID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb2x1bW5zLmxlbmd0aDsgKytpKSB7XG4gICAgICB2YXIgY29sdW1uID0gY29sdW1uc1tpXTtcbiAgICAgIG5ld0NvbHVtbnMucHVzaChSZWFjdC5jbG9uZUVsZW1lbnQoY29sdW1uLCB7XG4gICAgICAgIGNlbGw6IHR5cGUgPyBjb2x1bW4ucHJvcHNbdHlwZV0gOiBjb2x1bW4ucHJvcHNbQ0VMTF1cbiAgICAgIH0pKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld0NvbHVtbnM7XG4gIH0sXG5cbiAgX3NwbGl0Q29sdW1uVHlwZXM6IGZ1bmN0aW9uIF9zcGxpdENvbHVtblR5cGVzKCAvKmFycmF5Ki9jb2x1bW5zKSAvKm9iamVjdCove1xuICAgIHZhciBmaXhlZENvbHVtbnMgPSBbXTtcbiAgICB2YXIgc2Nyb2xsYWJsZUNvbHVtbnMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbHVtbnMubGVuZ3RoOyArK2kpIHtcbiAgICAgIGlmIChjb2x1bW5zW2ldLnByb3BzLmZpeGVkKSB7XG4gICAgICAgIGZpeGVkQ29sdW1ucy5wdXNoKGNvbHVtbnNbaV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2Nyb2xsYWJsZUNvbHVtbnMucHVzaChjb2x1bW5zW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGZpeGVkOiBmaXhlZENvbHVtbnMsXG4gICAgICBzY3JvbGxhYmxlOiBzY3JvbGxhYmxlQ29sdW1uc1xuICAgIH07XG4gIH0sXG5cbiAgX29uV2hlZWw6IGZ1bmN0aW9uIF9vbldoZWVsKCAvKm51bWJlciovZGVsdGFYLCAvKm51bWJlciovZGVsdGFZKSB7XG4gICAgaWYgKHRoaXMuaXNNb3VudGVkKCkpIHtcbiAgICAgIGlmICghdGhpcy5faXNTY3JvbGxpbmcpIHtcbiAgICAgICAgdGhpcy5fZGlkU2Nyb2xsU3RhcnQoKTtcbiAgICAgIH1cbiAgICAgIHZhciB4ID0gdGhpcy5zdGF0ZS5zY3JvbGxYO1xuICAgICAgaWYgKE1hdGguYWJzKGRlbHRhWSkgPiBNYXRoLmFicyhkZWx0YVgpICYmIHRoaXMucHJvcHMub3ZlcmZsb3dZICE9PSAnaGlkZGVuJykge1xuICAgICAgICB2YXIgc2Nyb2xsU3RhdGUgPSB0aGlzLl9zY3JvbGxIZWxwZXIuc2Nyb2xsQnkoTWF0aC5yb3VuZChkZWx0YVkpKTtcbiAgICAgICAgdmFyIG1heFNjcm9sbFkgPSBNYXRoLm1heCgwLCBzY3JvbGxTdGF0ZS5jb250ZW50SGVpZ2h0IC0gdGhpcy5zdGF0ZS5ib2R5SGVpZ2h0KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgZmlyc3RSb3dJbmRleDogc2Nyb2xsU3RhdGUuaW5kZXgsXG4gICAgICAgICAgZmlyc3RSb3dPZmZzZXQ6IHNjcm9sbFN0YXRlLm9mZnNldCxcbiAgICAgICAgICBzY3JvbGxZOiBzY3JvbGxTdGF0ZS5wb3NpdGlvbixcbiAgICAgICAgICBzY3JvbGxDb250ZW50SGVpZ2h0OiBzY3JvbGxTdGF0ZS5jb250ZW50SGVpZ2h0LFxuICAgICAgICAgIG1heFNjcm9sbFk6IG1heFNjcm9sbFlcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKGRlbHRhWCAmJiB0aGlzLnByb3BzLm92ZXJmbG93WCAhPT0gJ2hpZGRlbicpIHtcbiAgICAgICAgeCArPSBkZWx0YVg7XG4gICAgICAgIHggPSB4IDwgMCA/IDAgOiB4O1xuICAgICAgICB4ID0geCA+IHRoaXMuc3RhdGUubWF4U2Nyb2xsWCA/IHRoaXMuc3RhdGUubWF4U2Nyb2xsWCA6IHg7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHNjcm9sbFg6IHhcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2RpZFNjcm9sbFN0b3AoKTtcbiAgICB9XG4gIH0sXG5cbiAgX29uSG9yaXpvbnRhbFNjcm9sbDogZnVuY3Rpb24gX29uSG9yaXpvbnRhbFNjcm9sbCggLypudW1iZXIqL3Njcm9sbFBvcykge1xuICAgIGlmICh0aGlzLmlzTW91bnRlZCgpICYmIHNjcm9sbFBvcyAhPT0gdGhpcy5zdGF0ZS5zY3JvbGxYKSB7XG4gICAgICBpZiAoIXRoaXMuX2lzU2Nyb2xsaW5nKSB7XG4gICAgICAgIHRoaXMuX2RpZFNjcm9sbFN0YXJ0KCk7XG4gICAgICB9XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2Nyb2xsWDogc2Nyb2xsUG9zXG4gICAgICB9KTtcbiAgICAgIHRoaXMuX2RpZFNjcm9sbFN0b3AoKTtcbiAgICB9XG4gIH0sXG5cbiAgX29uVmVydGljYWxTY3JvbGw6IGZ1bmN0aW9uIF9vblZlcnRpY2FsU2Nyb2xsKCAvKm51bWJlciovc2Nyb2xsUG9zKSB7XG4gICAgaWYgKHRoaXMuaXNNb3VudGVkKCkgJiYgc2Nyb2xsUG9zICE9PSB0aGlzLnN0YXRlLnNjcm9sbFkpIHtcbiAgICAgIGlmICghdGhpcy5faXNTY3JvbGxpbmcpIHtcbiAgICAgICAgdGhpcy5fZGlkU2Nyb2xsU3RhcnQoKTtcbiAgICAgIH1cbiAgICAgIHZhciBzY3JvbGxTdGF0ZSA9IHRoaXMuX3Njcm9sbEhlbHBlci5zY3JvbGxUbyhNYXRoLnJvdW5kKHNjcm9sbFBvcykpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGZpcnN0Um93SW5kZXg6IHNjcm9sbFN0YXRlLmluZGV4LFxuICAgICAgICBmaXJzdFJvd09mZnNldDogc2Nyb2xsU3RhdGUub2Zmc2V0LFxuICAgICAgICBzY3JvbGxZOiBzY3JvbGxTdGF0ZS5wb3NpdGlvbixcbiAgICAgICAgc2Nyb2xsQ29udGVudEhlaWdodDogc2Nyb2xsU3RhdGUuY29udGVudEhlaWdodFxuICAgICAgfSk7XG4gICAgICB0aGlzLl9kaWRTY3JvbGxTdG9wKCk7XG4gICAgfVxuICB9LFxuXG4gIF9kaWRTY3JvbGxTdGFydDogZnVuY3Rpb24gX2RpZFNjcm9sbFN0YXJ0KCkge1xuICAgIGlmICh0aGlzLmlzTW91bnRlZCgpICYmICF0aGlzLl9pc1Njcm9sbGluZykge1xuICAgICAgdGhpcy5faXNTY3JvbGxpbmcgPSB0cnVlO1xuICAgICAgaWYgKHRoaXMucHJvcHMub25TY3JvbGxTdGFydCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uU2Nyb2xsU3RhcnQodGhpcy5zdGF0ZS5zY3JvbGxYLCB0aGlzLnN0YXRlLnNjcm9sbFkpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBfZGlkU2Nyb2xsU3RvcDogZnVuY3Rpb24gX2RpZFNjcm9sbFN0b3AoKSB7XG4gICAgaWYgKHRoaXMuaXNNb3VudGVkKCkgJiYgdGhpcy5faXNTY3JvbGxpbmcpIHtcbiAgICAgIHRoaXMuX2lzU2Nyb2xsaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgcmVkcmF3OiB0cnVlIH0pO1xuICAgICAgaWYgKHRoaXMucHJvcHMub25TY3JvbGxFbmQpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblNjcm9sbEVuZCh0aGlzLnN0YXRlLnNjcm9sbFgsIHRoaXMuc3RhdGUuc2Nyb2xsWSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59KTtcblxudmFyIEhvcml6b250YWxTY3JvbGxiYXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnSG9yaXpvbnRhbFNjcm9sbGJhcicsXG5cbiAgbWl4aW5zOiBbUmVhY3RDb21wb25lbnRXaXRoUHVyZVJlbmRlck1peGluXSxcbiAgcHJvcFR5cGVzOiB7XG4gICAgY29udGVudFNpemU6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBvZmZzZXQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBvblNjcm9sbDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBwb3NpdGlvbjogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIHNpemU6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkgLypvYmplY3QqL3tcbiAgICB2YXIgb3V0ZXJDb250YWluZXJTdHlsZSA9IHtcbiAgICAgIGhlaWdodDogU2Nyb2xsYmFyLlNJWkUsXG4gICAgICB3aWR0aDogdGhpcy5wcm9wcy5zaXplXG4gICAgfTtcbiAgICB2YXIgaW5uZXJDb250YWluZXJTdHlsZSA9IHtcbiAgICAgIGhlaWdodDogU2Nyb2xsYmFyLlNJWkUsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIHdpZHRoOiB0aGlzLnByb3BzLnNpemVcbiAgICB9O1xuICAgIHRyYW5zbGF0ZURPTVBvc2l0aW9uWFkoaW5uZXJDb250YWluZXJTdHlsZSwgMCwgdGhpcy5wcm9wcy5vZmZzZXQpO1xuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiBqb2luQ2xhc3NlcyhjeCgnZml4ZWREYXRhVGFibGVMYXlvdXQvaG9yaXpvbnRhbFNjcm9sbGJhcicpLCBjeCgncHVibGljL2ZpeGVkRGF0YVRhYmxlL2hvcml6b250YWxTY3JvbGxiYXInKSksXG4gICAgICAgIHN0eWxlOiBvdXRlckNvbnRhaW5lclN0eWxlIH0sXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBzdHlsZTogaW5uZXJDb250YWluZXJTdHlsZSB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNjcm9sbGJhciwgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHtcbiAgICAgICAgICBpc09wYXF1ZTogdHJ1ZSxcbiAgICAgICAgICBvcmllbnRhdGlvbjogJ2hvcml6b250YWwnLFxuICAgICAgICAgIG9mZnNldDogdW5kZWZpbmVkXG4gICAgICAgIH0pKVxuICAgICAgKVxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZpeGVkRGF0YVRhYmxlO1xuLy8gaXNDb2x1bW5SZXNpemluZyBzaG91bGQgYmUgb3ZlcndyaXR0ZW4gYnkgdmFsdWUgZnJvbSBwcm9wcyBpZlxuLy8gYXZhaWFsYmxlXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9GaXhlZERhdGFUYWJsZU5ldy5yZWFjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDQyNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgUmVhY3RDb21wb25lbnRXaXRoUHVyZVJlbmRlck1peGluXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFBlcmZvcm1zIGVxdWFsaXR5IGJ5IGl0ZXJhdGluZyB0aHJvdWdoIGtleXMgb24gYW4gb2JqZWN0IGFuZCByZXR1cm5pbmdcbiAqIGZhbHNlIHdoZW4gYW55IGtleSBoYXMgdmFsdWVzIHdoaWNoIGFyZSBub3Qgc3RyaWN0bHkgZXF1YWwgYmV0d2VlblxuICogb2JqQSBhbmQgb2JqQi4gUmV0dXJucyB0cnVlIHdoZW4gdGhlIHZhbHVlcyBvZiBhbGwga2V5cyBhcmUgc3RyaWN0bHkgZXF1YWwuXG4gKlxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gc2hhbGxvd0VxdWFsKG9iakEsIG9iakIpIHtcbiAgaWYgKG9iakEgPT09IG9iakIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICB2YXIga2V5O1xuICAvLyBUZXN0IGZvciBBJ3Mga2V5cyBkaWZmZXJlbnQgZnJvbSBCLlxuICBmb3IgKGtleSBpbiBvYmpBKSB7XG4gICAgaWYgKG9iakEuaGFzT3duUHJvcGVydHkoa2V5KSAmJiAoIW9iakIuaGFzT3duUHJvcGVydHkoa2V5KSB8fCBvYmpBW2tleV0gIT09IG9iakJba2V5XSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgLy8gVGVzdCBmb3IgQidzIGtleXMgbWlzc2luZyBmcm9tIEEuXG4gIGZvciAoa2V5IGluIG9iakIpIHtcbiAgICBpZiAob2JqQi5oYXNPd25Qcm9wZXJ0eShrZXkpICYmICFvYmpBLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogSWYgeW91ciBSZWFjdCBjb21wb25lbnQncyByZW5kZXIgZnVuY3Rpb24gaXMgXCJwdXJlXCIsIGUuZy4gaXQgd2lsbCByZW5kZXIgdGhlXG4gKiBzYW1lIHJlc3VsdCBnaXZlbiB0aGUgc2FtZSBwcm9wcyBhbmQgc3RhdGUsIHByb3ZpZGUgdGhpcyBNaXhpbiBmb3IgYVxuICogY29uc2lkZXJhYmxlIHBlcmZvcm1hbmNlIGJvb3N0LlxuICpcbiAqIE1vc3QgUmVhY3QgY29tcG9uZW50cyBoYXZlIHB1cmUgcmVuZGVyIGZ1bmN0aW9ucy5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqICAgdmFyIFJlYWN0Q29tcG9uZW50V2l0aFB1cmVSZW5kZXJNaXhpbiA9XG4gKiAgICAgcmVxdWlyZSgnUmVhY3RDb21wb25lbnRXaXRoUHVyZVJlbmRlck1peGluJyk7XG4gKiAgIFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAqICAgICBtaXhpbnM6IFtSZWFjdENvbXBvbmVudFdpdGhQdXJlUmVuZGVyTWl4aW5dLFxuICpcbiAqICAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICogICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX0+Zm9vPC9kaXY+O1xuICogICAgIH1cbiAqICAgfSk7XG4gKlxuICogTm90ZTogVGhpcyBvbmx5IGNoZWNrcyBzaGFsbG93IGVxdWFsaXR5IGZvciBwcm9wcyBhbmQgc3RhdGUuIElmIHRoZXNlIGNvbnRhaW5cbiAqIGNvbXBsZXggZGF0YSBzdHJ1Y3R1cmVzIHRoaXMgbWl4aW4gbWF5IGhhdmUgZmFsc2UtbmVnYXRpdmVzIGZvciBkZWVwZXJcbiAqIGRpZmZlcmVuY2VzLiBPbmx5IG1peGluIHRvIGNvbXBvbmVudHMgd2hpY2ggaGF2ZSBzaW1wbGUgcHJvcHMgYW5kIHN0YXRlLCBvclxuICogdXNlIGBmb3JjZVVwZGF0ZSgpYCB3aGVuIHlvdSBrbm93IGRlZXAgZGF0YSBzdHJ1Y3R1cmVzIGhhdmUgY2hhbmdlZC5cbiAqL1xudmFyIFJlYWN0Q29tcG9uZW50V2l0aFB1cmVSZW5kZXJNaXhpbiA9IHtcbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlOiBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICByZXR1cm4gIXNoYWxsb3dFcXVhbCh0aGlzLnByb3BzLCBuZXh0UHJvcHMpIHx8ICFzaGFsbG93RXF1YWwodGhpcy5zdGF0ZSwgbmV4dFN0YXRlKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdENvbXBvbmVudFdpdGhQdXJlUmVuZGVyTWl4aW47XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9SZWFjdENvbXBvbmVudFdpdGhQdXJlUmVuZGVyTWl4aW4uanNcbiAqKiBtb2R1bGUgaWQgPSA0MjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogVGhpcyBpcyB1dGlsaXR5IHRoYXQgaGFubGRzIG9uV2hlZWwgZXZlbnRzIGFuZCBjYWxscyBwcm92aWRlZCB3aGVlbFxuICogY2FsbGJhY2sgd2l0aCBjb3JyZWN0IGZyYW1lIHJhdGUuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIFJlYWN0V2hlZWxIYW5kbGVyXG4gKiBAdHlwZWNoZWNrc1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbnZhciBlbXB0eUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9lbXB0eUZ1bmN0aW9uJyk7XG52YXIgbm9ybWFsaXplV2hlZWwgPSByZXF1aXJlKCcuL25vcm1hbGl6ZVdoZWVsJyk7XG52YXIgcmVxdWVzdEFuaW1hdGlvbkZyYW1lUG9seWZpbGwgPSByZXF1aXJlKCcuL3JlcXVlc3RBbmltYXRpb25GcmFtZVBvbHlmaWxsJyk7XG5cbnZhciBSZWFjdFdoZWVsSGFuZGxlciA9IChmdW5jdGlvbiAoKSB7XG4gIC8qKlxuICAgKiBvbldoZWVsIGlzIHRoZSBjYWxsYmFjayB0aGF0IHdpbGwgYmUgY2FsbGVkIHdpdGggcmlnaHQgZnJhbWUgcmF0ZSBpZlxuICAgKiBhbnkgd2hlZWwgZXZlbnRzIGhhcHBlbmVkXG4gICAqIG9uV2hlZWwgc2hvdWxkIGlzIHRvIGJlIGNhbGxlZCB3aXRoIHR3byBhcmd1bWVudHM6IGRlbHRhWCBhbmQgZGVsdGFZIGluXG4gICAqIHRoaXMgb3JkZXJcbiAgICovXG5cbiAgZnVuY3Rpb24gUmVhY3RXaGVlbEhhbmRsZXIoXG4gIC8qZnVuY3Rpb24qL29uV2hlZWwsXG4gIC8qYm9vbGVhbnxmdW5jdGlvbiovaGFuZGxlU2Nyb2xsWCxcbiAgLypib29sZWFufGZ1bmN0aW9uKi9oYW5kbGVTY3JvbGxZLFxuICAvKj9ib29sZWFufD9mdW5jdGlvbiovc3RvcFByb3BhZ2F0aW9uKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJlYWN0V2hlZWxIYW5kbGVyKTtcblxuICAgIHRoaXMuX2FuaW1hdGlvbkZyYW1lSUQgPSBudWxsO1xuICAgIHRoaXMuX2RlbHRhWCA9IDA7XG4gICAgdGhpcy5fZGVsdGFZID0gMDtcbiAgICB0aGlzLl9kaWRXaGVlbCA9IHRoaXMuX2RpZFdoZWVsLmJpbmQodGhpcyk7XG4gICAgaWYgKHR5cGVvZiBoYW5kbGVTY3JvbGxYICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBoYW5kbGVTY3JvbGxYID0gaGFuZGxlU2Nyb2xsWCA/IGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNUcnVlIDogZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0ZhbHNlO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgaGFuZGxlU2Nyb2xsWSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaGFuZGxlU2Nyb2xsWSA9IGhhbmRsZVNjcm9sbFkgPyBlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVHJ1ZSA6IGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNGYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHN0b3BQcm9wYWdhdGlvbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgc3RvcFByb3BhZ2F0aW9uID0gc3RvcFByb3BhZ2F0aW9uID8gZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RydWUgOiBlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zRmFsc2U7XG4gICAgfVxuXG4gICAgdGhpcy5faGFuZGxlU2Nyb2xsWCA9IGhhbmRsZVNjcm9sbFg7XG4gICAgdGhpcy5faGFuZGxlU2Nyb2xsWSA9IGhhbmRsZVNjcm9sbFk7XG4gICAgdGhpcy5fc3RvcFByb3BhZ2F0aW9uID0gc3RvcFByb3BhZ2F0aW9uO1xuICAgIHRoaXMuX29uV2hlZWxDYWxsYmFjayA9IG9uV2hlZWw7XG4gICAgdGhpcy5vbldoZWVsID0gdGhpcy5vbldoZWVsLmJpbmQodGhpcyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUmVhY3RXaGVlbEhhbmRsZXIsIFt7XG4gICAga2V5OiAnb25XaGVlbCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uV2hlZWwoIC8qb2JqZWN0Ki9ldmVudCkge1xuICAgICAgdmFyIG5vcm1hbGl6ZWRFdmVudCA9IG5vcm1hbGl6ZVdoZWVsKGV2ZW50KTtcbiAgICAgIHZhciBkZWx0YVggPSB0aGlzLl9kZWx0YVggKyBub3JtYWxpemVkRXZlbnQucGl4ZWxYO1xuICAgICAgdmFyIGRlbHRhWSA9IHRoaXMuX2RlbHRhWSArIG5vcm1hbGl6ZWRFdmVudC5waXhlbFk7XG4gICAgICB2YXIgaGFuZGxlU2Nyb2xsWCA9IHRoaXMuX2hhbmRsZVNjcm9sbFgoZGVsdGFYLCBkZWx0YVkpO1xuICAgICAgdmFyIGhhbmRsZVNjcm9sbFkgPSB0aGlzLl9oYW5kbGVTY3JvbGxZKGRlbHRhWSwgZGVsdGFYKTtcbiAgICAgIGlmICghaGFuZGxlU2Nyb2xsWCAmJiAhaGFuZGxlU2Nyb2xsWSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2RlbHRhWCArPSBoYW5kbGVTY3JvbGxYID8gbm9ybWFsaXplZEV2ZW50LnBpeGVsWCA6IDA7XG4gICAgICB0aGlzLl9kZWx0YVkgKz0gaGFuZGxlU2Nyb2xsWSA/IG5vcm1hbGl6ZWRFdmVudC5waXhlbFkgOiAwO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgdmFyIGNoYW5nZWQ7XG4gICAgICBpZiAodGhpcy5fZGVsdGFYICE9PSAwIHx8IHRoaXMuX2RlbHRhWSAhPT0gMCkge1xuICAgICAgICBpZiAodGhpcy5fc3RvcFByb3BhZ2F0aW9uKCkpIHtcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNoYW5nZWQgPT09IHRydWUgJiYgdGhpcy5fYW5pbWF0aW9uRnJhbWVJRCA9PT0gbnVsbCkge1xuICAgICAgICB0aGlzLl9hbmltYXRpb25GcmFtZUlEID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lUG9seWZpbGwodGhpcy5fZGlkV2hlZWwpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ19kaWRXaGVlbCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9kaWRXaGVlbCgpIHtcbiAgICAgIHRoaXMuX2FuaW1hdGlvbkZyYW1lSUQgPSBudWxsO1xuICAgICAgdGhpcy5fb25XaGVlbENhbGxiYWNrKHRoaXMuX2RlbHRhWCwgdGhpcy5fZGVsdGFZKTtcbiAgICAgIHRoaXMuX2RlbHRhWCA9IDA7XG4gICAgICB0aGlzLl9kZWx0YVkgPSAwO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBSZWFjdFdoZWVsSGFuZGxlcjtcbn0pKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RXaGVlbEhhbmRsZXI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9SZWFjdFdoZWVsSGFuZGxlci5qc1xuICoqIG1vZHVsZSBpZCA9IDQyOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgZW1wdHlGdW5jdGlvblxuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBtYWtlRW1wdHlGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gYXJnO1xuICB9O1xufVxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gYWNjZXB0cyBhbmQgZGlzY2FyZHMgaW5wdXRzOyBpdCBoYXMgbm8gc2lkZSBlZmZlY3RzLiBUaGlzIGlzXG4gKiBwcmltYXJpbHkgdXNlZnVsIGlkaW9tYXRpY2FsbHkgZm9yIG92ZXJyaWRhYmxlIGZ1bmN0aW9uIGVuZHBvaW50cyB3aGljaFxuICogYWx3YXlzIG5lZWQgdG8gYmUgY2FsbGFibGUsIHNpbmNlIEpTIGxhY2tzIGEgbnVsbC1jYWxsIGlkaW9tIGFsYSBDb2NvYS5cbiAqL1xuZnVuY3Rpb24gZW1wdHlGdW5jdGlvbigpIHt9XG5cbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnMgPSBtYWtlRW1wdHlGdW5jdGlvbjtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNGYWxzZSA9IG1ha2VFbXB0eUZ1bmN0aW9uKGZhbHNlKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNUcnVlID0gbWFrZUVtcHR5RnVuY3Rpb24odHJ1ZSk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbCA9IG1ha2VFbXB0eUZ1bmN0aW9uKG51bGwpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RoaXMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzO1xufTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNBcmd1bWVudCA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgcmV0dXJuIGFyZztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZW1wdHlGdW5jdGlvbjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL2VtcHR5RnVuY3Rpb24uanNcbiAqKiBtb2R1bGUgaWQgPSA0MjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIG5vcm1hbGl6ZVdoZWVsXG4gKiBAdHlwZWNoZWNrc1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFVzZXJBZ2VudF9ERVBSRUNBVEVEID0gcmVxdWlyZSgnLi9Vc2VyQWdlbnRfREVQUkVDQVRFRCcpO1xuXG52YXIgaXNFdmVudFN1cHBvcnRlZCA9IHJlcXVpcmUoJy4vaXNFdmVudFN1cHBvcnRlZCcpO1xuXG4vLyBSZWFzb25hYmxlIGRlZmF1bHRzXG52YXIgUElYRUxfU1RFUCA9IDEwO1xudmFyIExJTkVfSEVJR0hUID0gNDA7XG52YXIgUEFHRV9IRUlHSFQgPSA4MDA7XG5cbi8qKlxuICogTW91c2Ugd2hlZWwgKGFuZCAyLWZpbmdlciB0cmFja3BhZCkgc3VwcG9ydCBvbiB0aGUgd2ViIHN1Y2tzLiAgSXQgaXNcbiAqIGNvbXBsaWNhdGVkLCB0aHVzIHRoaXMgZG9jIGlzIGxvbmcgYW5kIChob3BlZnVsbHkpIGRldGFpbGVkIGVub3VnaCB0byBhbnN3ZXJcbiAqIHlvdXIgcXVlc3Rpb25zLlxuICpcbiAqIElmIHlvdSBuZWVkIHRvIHJlYWN0IHRvIHRoZSBtb3VzZSB3aGVlbCBpbiBhIHByZWRpY3RhYmxlIHdheSwgdGhpcyBjb2RlIGlzXG4gKiBsaWtlIHlvdXIgYmVzdGVzdCBmcmllbmQuICogaHVncyAqXG4gKlxuICogQXMgb2YgdG9kYXksIHRoZXJlIGFyZSA0IERPTSBldmVudCB0eXBlcyB5b3UgY2FuIGxpc3RlbiB0bzpcbiAqXG4gKiAgICd3aGVlbCcgICAgICAgICAgICAgICAgLS0gQ2hyb21lKDMxKyksIEZGKDE3KyksIElFKDkrKVxuICogICAnbW91c2V3aGVlbCcgICAgICAgICAgIC0tIENocm9tZSwgSUUoNispLCBPcGVyYSwgU2FmYXJpXG4gKiAgICdNb3pNb3VzZVBpeGVsU2Nyb2xsJyAgLS0gRkYoMy41IG9ubHkhKSAoMjAxMC0yMDEzKSAtLSBkb24ndCBib3RoZXIhXG4gKiAgICdET01Nb3VzZVNjcm9sbCcgICAgICAgLS0gRkYoMC45LjcrKSBzaW5jZSAyMDAzXG4gKlxuICogU28gd2hhdCB0byBkbz8gIFRoZSBpcyB0aGUgYmVzdDpcbiAqXG4gKiAgIG5vcm1hbGl6ZVdoZWVsLmdldEV2ZW50VHlwZSgpO1xuICpcbiAqIEluIHlvdXIgZXZlbnQgY2FsbGJhY2ssIHVzZSB0aGlzIGNvZGUgdG8gZ2V0IHNhbmUgaW50ZXJwcmV0YXRpb24gb2YgdGhlXG4gKiBkZWx0YXMuICBUaGlzIGNvZGUgd2lsbCByZXR1cm4gYW4gb2JqZWN0IHdpdGggcHJvcGVydGllczpcbiAqXG4gKiAgIHNwaW5YICAgLS0gbm9ybWFsaXplZCBzcGluIHNwZWVkICh1c2UgZm9yIHpvb20pIC0geCBwbGFuZVxuICogICBzcGluWSAgIC0tIFwiIC0geSBwbGFuZVxuICogICBwaXhlbFggIC0tIG5vcm1hbGl6ZWQgZGlzdGFuY2UgKHRvIHBpeGVscykgLSB4IHBsYW5lXG4gKiAgIHBpeGVsWSAgLS0gXCIgLSB5IHBsYW5lXG4gKlxuICogV2hlZWwgdmFsdWVzIGFyZSBwcm92aWRlZCBieSB0aGUgYnJvd3NlciBhc3N1bWluZyB5b3UgYXJlIHVzaW5nIHRoZSB3aGVlbCB0b1xuICogc2Nyb2xsIGEgd2ViIHBhZ2UgYnkgYSBudW1iZXIgb2YgbGluZXMgb3IgcGl4ZWxzIChvciBwYWdlcykuICBWYWx1ZXMgY2FuIHZhcnlcbiAqIHNpZ25pZmljYW50bHkgb24gZGlmZmVyZW50IHBsYXRmb3JtcyBhbmQgYnJvd3NlcnMsIGZvcmdldHRpbmcgdGhhdCB5b3UgY2FuXG4gKiBzY3JvbGwgYXQgZGlmZmVyZW50IHNwZWVkcy4gIFNvbWUgZGV2aWNlcyAobGlrZSB0cmFja3BhZHMpIGVtaXQgbW9yZSBldmVudHNcbiAqIGF0IHNtYWxsZXIgaW5jcmVtZW50cyB3aXRoIGZpbmUgZ3JhbnVsYXJpdHksIGFuZCBzb21lIGVtaXQgbWFzc2l2ZSBqdW1wcyB3aXRoXG4gKiBsaW5lYXIgc3BlZWQgb3IgYWNjZWxlcmF0aW9uLlxuICpcbiAqIFRoaXMgY29kZSBkb2VzIGl0cyBiZXN0IHRvIG5vcm1hbGl6ZSB0aGUgZGVsdGFzIGZvciB5b3U6XG4gKlxuICogICAtIHNwaW4gaXMgdHJ5aW5nIHRvIG5vcm1hbGl6ZSBob3cgZmFyIHRoZSB3aGVlbCB3YXMgc3B1biAob3IgdHJhY2twYWRcbiAqICAgICBkcmFnZ2VkKS4gIFRoaXMgaXMgc3VwZXIgdXNlZnVsIGZvciB6b29tIHN1cHBvcnQgd2hlcmUgeW91IHdhbnQgdG9cbiAqICAgICB0aHJvdyBhd2F5IHRoZSBjaHVua3kgc2Nyb2xsIHN0ZXBzIG9uIHRoZSBQQyBhbmQgbWFrZSB0aG9zZSBlcXVhbCB0b1xuICogICAgIHRoZSBzbG93IGFuZCBzbW9vdGggdGlueSBzdGVwcyBvbiB0aGUgTWFjLiBLZXkgZGF0YTogVGhpcyBjb2RlIHRyaWVzIHRvXG4gKiAgICAgcmVzb2x2ZSBhIHNpbmdsZSBzbG93IHN0ZXAgb24gYSB3aGVlbCB0byAxLlxuICpcbiAqICAgLSBwaXhlbCBpcyBub3JtYWxpemluZyB0aGUgZGVzaXJlZCBzY3JvbGwgZGVsdGEgaW4gcGl4ZWwgdW5pdHMuICBZb3UnbGxcbiAqICAgICBnZXQgdGhlIGNyYXp5IGRpZmZlcmVuY2VzIGJldHdlZW4gYnJvd3NlcnMsIGJ1dCBhdCBsZWFzdCBpdCdsbCBiZSBpblxuICogICAgIHBpeGVscyFcbiAqXG4gKiAgIC0gcG9zaXRpdmUgdmFsdWUgaW5kaWNhdGVzIHNjcm9sbGluZyBET1dOL1JJR0hULCBuZWdhdGl2ZSBVUC9MRUZULiAgVGhpc1xuICogICAgIHNob3VsZCB0cmFuc2xhdGUgdG8gcG9zaXRpdmUgdmFsdWUgem9vbWluZyBJTiwgbmVnYXRpdmUgem9vbWluZyBPVVQuXG4gKiAgICAgVGhpcyBtYXRjaGVzIHRoZSBuZXdlciAnd2hlZWwnIGV2ZW50LlxuICpcbiAqIFdoeSBhcmUgdGhlcmUgc3BpblgsIHNwaW5ZIChvciBwaXhlbHMpP1xuICpcbiAqICAgLSBzcGluWCBpcyBhIDItZmluZ2VyIHNpZGUgZHJhZyBvbiB0aGUgdHJhY2twYWQsIGFuZCBhIHNoaWZ0ICsgd2hlZWwgdHVyblxuICogICAgIHdpdGggYSBtb3VzZS4gIEl0IHJlc3VsdHMgaW4gc2lkZS1zY3JvbGxpbmcgaW4gdGhlIGJyb3dzZXIgYnkgZGVmYXVsdC5cbiAqXG4gKiAgIC0gc3BpblkgaXMgd2hhdCB5b3UgZXhwZWN0IC0tIGl0J3MgdGhlIGNsYXNzaWMgYXhpcyBvZiBhIG1vdXNlIHdoZWVsLlxuICpcbiAqICAgLSBJIGRyb3BwZWQgc3BpblovcGl4ZWxaLiAgSXQgaXMgc3VwcG9ydGVkIGJ5IHRoZSBET00gMyAnd2hlZWwnIGV2ZW50IGFuZFxuICogICAgIHByb2JhYmx5IGlzIGJ5IGJyb3dzZXJzIGluIGNvbmp1bmN0aW9uIHdpdGggZmFuY3kgM0QgY29udHJvbGxlcnMgLi4gYnV0XG4gKiAgICAgeW91IGtub3cuXG4gKlxuICogSW1wbGVtZW50YXRpb24gaW5mbzpcbiAqXG4gKiBFeGFtcGxlcyBvZiAnd2hlZWwnIGV2ZW50IGlmIHlvdSBzY3JvbGwgc2xvd2x5IChkb3duKSBieSBvbmUgc3RlcCB3aXRoIGFuXG4gKiBhdmVyYWdlIG1vdXNlOlxuICpcbiAqICAgT1MgWCArIENocm9tZSAgKG1vdXNlKSAgICAgLSAgICA0ICAgcGl4ZWwgZGVsdGEgICh3aGVlbERlbHRhIC0xMjApXG4gKiAgIE9TIFggKyBTYWZhcmkgIChtb3VzZSkgICAgIC0gIE4vQSAgIHBpeGVsIGRlbHRhICAod2hlZWxEZWx0YSAgLTEyKVxuICogICBPUyBYICsgRmlyZWZveCAobW91c2UpICAgICAtICAgIDAuMSBsaW5lICBkZWx0YSAgKHdoZWVsRGVsdGEgIE4vQSlcbiAqICAgV2luOCArIENocm9tZSAgKG1vdXNlKSAgICAgLSAgMTAwICAgcGl4ZWwgZGVsdGEgICh3aGVlbERlbHRhIC0xMjApXG4gKiAgIFdpbjggKyBGaXJlZm94IChtb3VzZSkgICAgIC0gICAgMyAgIGxpbmUgIGRlbHRhICAod2hlZWxEZWx0YSAtMTIwKVxuICpcbiAqIE9uIHRoZSB0cmFja3BhZDpcbiAqXG4gKiAgIE9TIFggKyBDaHJvbWUgICh0cmFja3BhZCkgIC0gICAgMiAgIHBpeGVsIGRlbHRhICAod2hlZWxEZWx0YSAgIC02KVxuICogICBPUyBYICsgRmlyZWZveCAodHJhY2twYWQpICAtICAgIDEgICBwaXhlbCBkZWx0YSAgKHdoZWVsRGVsdGEgIE4vQSlcbiAqXG4gKiBPbiBvdGhlci9vbGRlciBicm93c2Vycy4uIGl0J3MgbW9yZSBjb21wbGljYXRlZCBhcyB0aGVyZSBjYW4gYmUgbXVsdGlwbGUgYW5kXG4gKiBhbHNvIG1pc3NpbmcgZGVsdGEgdmFsdWVzLlxuICpcbiAqIFRoZSAnd2hlZWwnIGV2ZW50IGlzIG1vcmUgc3RhbmRhcmQ6XG4gKlxuICogaHR0cDovL3d3dy53My5vcmcvVFIvRE9NLUxldmVsLTMtRXZlbnRzLyNldmVudHMtd2hlZWxldmVudHNcbiAqXG4gKiBUaGUgYmFzaWNzIGlzIHRoYXQgaXQgaW5jbHVkZXMgYSB1bml0LCBkZWx0YU1vZGUgKHBpeGVscywgbGluZXMsIHBhZ2VzKSwgYW5kXG4gKiBkZWx0YVgsIGRlbHRhWSBhbmQgZGVsdGFaLiAgU29tZSBicm93c2VycyBwcm92aWRlIG90aGVyIHZhbHVlcyB0byBtYWludGFpblxuICogYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIG9sZGVyIGV2ZW50cy4gIFRob3NlIG90aGVyIHZhbHVlcyBoZWxwIHVzXG4gKiBiZXR0ZXIgbm9ybWFsaXplIHNwaW4gc3BlZWQuICBFeGFtcGxlIG9mIHdoYXQgdGhlIGJyb3dzZXJzIHByb3ZpZGU6XG4gKlxuICogICAgICAgICAgICAgICAgICAgICAgICAgIHwgZXZlbnQud2hlZWxEZWx0YSB8IGV2ZW50LmRldGFpbFxuICogICAgICAgIC0tLS0tLS0tLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS1cbiAqICAgICAgICAgIFNhZmFyaSB2NS9PUyBYICB8ICAgICAgIC0xMjAgICAgICAgfCAgICAgICAwXG4gKiAgICAgICAgICBTYWZhcmkgdjUvV2luNyAgfCAgICAgICAtMTIwICAgICAgIHwgICAgICAgMFxuICogICAgICAgICBDaHJvbWUgdjE3L09TIFggIHwgICAgICAgLTEyMCAgICAgICB8ICAgICAgIDBcbiAqICAgICAgICAgQ2hyb21lIHYxNy9XaW43ICB8ICAgICAgIC0xMjAgICAgICAgfCAgICAgICAwXG4gKiAgICAgICAgICAgICAgICBJRTkvV2luNyAgfCAgICAgICAtMTIwICAgICAgIHwgICB1bmRlZmluZWRcbiAqICAgICAgICAgRmlyZWZveCB2NC9PUyBYICB8ICAgICB1bmRlZmluZWQgICAgfCAgICAgICAxXG4gKiAgICAgICAgIEZpcmVmb3ggdjQvV2luNyAgfCAgICAgdW5kZWZpbmVkICAgIHwgICAgICAgM1xuICpcbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplV2hlZWwoIC8qb2JqZWN0Ki9ldmVudCkgLypvYmplY3QqL3tcbiAgdmFyIHNYID0gMCxcbiAgICAgIHNZID0gMCxcbiAgICAgIC8vIHNwaW5YLCBzcGluWVxuICBwWCA9IDAsXG4gICAgICBwWSA9IDA7IC8vIHBpeGVsWCwgcGl4ZWxZXG5cbiAgLy8gTGVnYWN5XG4gIGlmICgnZGV0YWlsJyBpbiBldmVudCkge1xuICAgIHNZID0gZXZlbnQuZGV0YWlsO1xuICB9XG4gIGlmICgnd2hlZWxEZWx0YScgaW4gZXZlbnQpIHtcbiAgICBzWSA9IC1ldmVudC53aGVlbERlbHRhIC8gMTIwO1xuICB9XG4gIGlmICgnd2hlZWxEZWx0YVknIGluIGV2ZW50KSB7XG4gICAgc1kgPSAtZXZlbnQud2hlZWxEZWx0YVkgLyAxMjA7XG4gIH1cbiAgaWYgKCd3aGVlbERlbHRhWCcgaW4gZXZlbnQpIHtcbiAgICBzWCA9IC1ldmVudC53aGVlbERlbHRhWCAvIDEyMDtcbiAgfVxuXG4gIC8vIHNpZGUgc2Nyb2xsaW5nIG9uIEZGIHdpdGggRE9NTW91c2VTY3JvbGxcbiAgaWYgKCdheGlzJyBpbiBldmVudCAmJiBldmVudC5heGlzID09PSBldmVudC5IT1JJWk9OVEFMX0FYSVMpIHtcbiAgICBzWCA9IHNZO1xuICAgIHNZID0gMDtcbiAgfVxuXG4gIHBYID0gc1ggKiBQSVhFTF9TVEVQO1xuICBwWSA9IHNZICogUElYRUxfU1RFUDtcblxuICBpZiAoJ2RlbHRhWScgaW4gZXZlbnQpIHtcbiAgICBwWSA9IGV2ZW50LmRlbHRhWTtcbiAgfVxuICBpZiAoJ2RlbHRhWCcgaW4gZXZlbnQpIHtcbiAgICBwWCA9IGV2ZW50LmRlbHRhWDtcbiAgfVxuXG4gIGlmICgocFggfHwgcFkpICYmIGV2ZW50LmRlbHRhTW9kZSkge1xuICAgIGlmIChldmVudC5kZWx0YU1vZGUgPT0gMSkge1xuICAgICAgLy8gZGVsdGEgaW4gTElORSB1bml0c1xuICAgICAgcFggKj0gTElORV9IRUlHSFQ7XG4gICAgICBwWSAqPSBMSU5FX0hFSUdIVDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZGVsdGEgaW4gUEFHRSB1bml0c1xuICAgICAgcFggKj0gUEFHRV9IRUlHSFQ7XG4gICAgICBwWSAqPSBQQUdFX0hFSUdIVDtcbiAgICB9XG4gIH1cblxuICAvLyBGYWxsLWJhY2sgaWYgc3BpbiBjYW5ub3QgYmUgZGV0ZXJtaW5lZFxuICBpZiAocFggJiYgIXNYKSB7XG4gICAgc1ggPSBwWCA8IDEgPyAtMSA6IDE7XG4gIH1cbiAgaWYgKHBZICYmICFzWSkge1xuICAgIHNZID0gcFkgPCAxID8gLTEgOiAxO1xuICB9XG5cbiAgcmV0dXJuIHsgc3Bpblg6IHNYLFxuICAgIHNwaW5ZOiBzWSxcbiAgICBwaXhlbFg6IHBYLFxuICAgIHBpeGVsWTogcFkgfTtcbn1cblxuLyoqXG4gKiBUaGUgYmVzdCBjb21iaW5hdGlvbiBpZiB5b3UgcHJlZmVyIHNwaW5YICsgc3Bpblkgbm9ybWFsaXphdGlvbi4gIEl0IGZhdm9yc1xuICogdGhlIG9sZGVyIERPTU1vdXNlU2Nyb2xsIGZvciBGaXJlZm94LCBhcyBGRiBkb2VzIG5vdCBpbmNsdWRlIHdoZWVsRGVsdGEgd2l0aFxuICogJ3doZWVsJyBldmVudCwgbWFraW5nIHNwaW4gc3BlZWQgZGV0ZXJtaW5hdGlvbiBpbXBvc3NpYmxlLlxuICovXG5ub3JtYWxpemVXaGVlbC5nZXRFdmVudFR5cGUgPSBmdW5jdGlvbiAoKSAvKnN0cmluZyove1xuICByZXR1cm4gVXNlckFnZW50X0RFUFJFQ0FURUQuZmlyZWZveCgpID8gJ0RPTU1vdXNlU2Nyb2xsJyA6IGlzRXZlbnRTdXBwb3J0ZWQoJ3doZWVsJykgPyAnd2hlZWwnIDogJ21vdXNld2hlZWwnO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBub3JtYWxpemVXaGVlbDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL25vcm1hbGl6ZVdoZWVsLmpzXG4gKiogbW9kdWxlIGlkID0gNDMwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAyMDA0LXByZXNlbnQgRmFjZWJvb2suIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIFVzZXJBZ2VudF9ERVBSRUNBVEVEXG4gKi9cblxuLyoqXG4gKiAgUHJvdmlkZXMgZW50aXJlbHkgY2xpZW50LXNpZGUgVXNlciBBZ2VudCBhbmQgT1MgZGV0ZWN0aW9uLiBZb3Ugc2hvdWxkIHByZWZlclxuICogIHRoZSBub24tZGVwcmVjYXRlZCBVc2VyQWdlbnQgbW9kdWxlIHdoZW4gcG9zc2libGUsIHdoaWNoIGV4cG9zZXMgb3VyXG4gKiAgYXV0aG9yaXRhdGl2ZSBzZXJ2ZXItc2lkZSBQSFAtYmFzZWQgZGV0ZWN0aW9uIHRvIHRoZSBjbGllbnQuXG4gKlxuICogIFVzYWdlIGlzIHN0cmFpZ2h0Zm9yd2FyZDpcbiAqXG4gKiAgICBpZiAoVXNlckFnZW50X0RFUFJFQ0FURUQuaWUoKSkge1xuICogICAgICAvLyAgSUVcbiAqICAgIH1cbiAqXG4gKiAgWW91IGNhbiBhbHNvIGRvIHZlcnNpb24gY2hlY2tzOlxuICpcbiAqICAgIGlmIChVc2VyQWdlbnRfREVQUkVDQVRFRC5pZSgpID49IDcpIHtcbiAqICAgICAgLy8gIElFNyBvciBiZXR0ZXJcbiAqICAgIH1cbiAqXG4gKiAgVGhlIGJyb3dzZXIgZnVuY3Rpb25zIHdpbGwgcmV0dXJuIE5hTiBpZiB0aGUgYnJvd3NlciBkb2VzIG5vdCBtYXRjaCwgc29cbiAqICB5b3UgY2FuIGFsc28gZG8gdmVyc2lvbiBjb21wYXJlcyB0aGUgb3RoZXIgd2F5OlxuICpcbiAqICAgIGlmIChVc2VyQWdlbnRfREVQUkVDQVRFRC5pZSgpIDwgNykge1xuICogICAgICAvLyAgSUU2IG9yIHdvcnNlXG4gKiAgICB9XG4gKlxuICogIE5vdGUgdGhhdCB0aGUgdmVyc2lvbiBpcyBhIGZsb2F0IGFuZCBtYXkgaW5jbHVkZSBhIG1pbm9yIHZlcnNpb24gbnVtYmVyLFxuICogIHNvIHlvdSBzaG91bGQgYWx3YXlzIHVzZSByYW5nZSBvcGVyYXRvcnMgdG8gcGVyZm9ybSBjb21wYXJpc29ucywgbm90XG4gKiAgc3RyaWN0IGVxdWFsaXR5LlxuICpcbiAqICAqKk5vdGU6KiogWW91IHNob3VsZCAqKnN0cm9uZ2x5KiogcHJlZmVyIGNhcGFiaWxpdHkgZGV0ZWN0aW9uIHRvIGJyb3dzZXJcbiAqICB2ZXJzaW9uIGRldGVjdGlvbiB3aGVyZSBpdCdzIHJlYXNvbmFibGU6XG4gKlxuICogICAgaHR0cDovL3d3dy5xdWlya3Ntb2RlLm9yZy9qcy9zdXBwb3J0Lmh0bWxcbiAqXG4gKiAgRnVydGhlciwgd2UgaGF2ZSBhIGxhcmdlIG51bWJlciBvZiBtYXR1cmUgd3JhcHBlciBmdW5jdGlvbnMgYW5kIGNsYXNzZXNcbiAqICB3aGljaCBhYnN0cmFjdCBhd2F5IG1hbnkgYnJvd3NlciBpcnJlZ3VsYXJpdGllcy4gQ2hlY2sgdGhlIGRvY3VtZW50YXRpb24sXG4gKiAgZ3JlcCBmb3IgdGhpbmdzLCBvciBhc2sgb24gamF2YXNjcmlwdEBsaXN0cy5mYWNlYm9vay5jb20gYmVmb3JlIHdyaXRpbmcgeWV0XG4gKiAgYW5vdGhlciBjb3B5IG9mIFwiZXZlbnQgfHwgd2luZG93LmV2ZW50XCIuXG4gKlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIF9wb3B1bGF0ZWQgPSBmYWxzZTtcblxuLy8gQnJvd3NlcnNcbnZhciBfaWUsIF9maXJlZm94LCBfb3BlcmEsIF93ZWJraXQsIF9jaHJvbWU7XG5cbi8vIEFjdHVhbCBJRSBicm93c2VyIGZvciBjb21wYXRpYmlsaXR5IG1vZGVcbnZhciBfaWVfcmVhbF92ZXJzaW9uO1xuXG4vLyBQbGF0Zm9ybXNcbnZhciBfb3N4LCBfd2luZG93cywgX2xpbnV4LCBfYW5kcm9pZDtcblxuLy8gQXJjaGl0ZWN0dXJlc1xudmFyIF93aW42NDtcblxuLy8gRGV2aWNlc1xudmFyIF9pcGhvbmUsIF9pcGFkLCBfbmF0aXZlO1xuXG52YXIgX21vYmlsZTtcblxuZnVuY3Rpb24gX3BvcHVsYXRlKCkge1xuICBpZiAoX3BvcHVsYXRlZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIF9wb3B1bGF0ZWQgPSB0cnVlO1xuXG4gIC8vIFRvIHdvcmsgYXJvdW5kIGJ1Z2d5IEpTIGxpYnJhcmllcyB0aGF0IGNhbid0IGhhbmRsZSBtdWx0aS1kaWdpdFxuICAvLyB2ZXJzaW9uIG51bWJlcnMsIE9wZXJhIDEwJ3MgdXNlciBhZ2VudCBzdHJpbmcgY2xhaW1zIGl0J3MgT3BlcmFcbiAgLy8gOSwgdGhlbiBsYXRlciBpbmNsdWRlcyBhIFZlcnNpb24vWC5ZIGZpZWxkOlxuICAvL1xuICAvLyBPcGVyYS85LjgwIChmb28pIFByZXN0by8yLjIuMTUgVmVyc2lvbi8xMC4xMFxuICB2YXIgdWFzID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgdmFyIGFnZW50ID0gLyg/Ok1TSUUuKFxcZCtcXC5cXGQrKSl8KD86KD86RmlyZWZveHxHcmFuUGFyYWRpc298SWNld2Vhc2VsKS4oXFxkK1xcLlxcZCspKXwoPzpPcGVyYSg/Oi4rVmVyc2lvbi58LikoXFxkK1xcLlxcZCspKXwoPzpBcHBsZVdlYktpdC4oXFxkKyg/OlxcLlxcZCspPykpfCg/OlRyaWRlbnRcXC9cXGQrXFwuXFxkKy4qcnY6KFxcZCtcXC5cXGQrKSkvLmV4ZWModWFzKTtcbiAgdmFyIG9zID0gLyhNYWMgT1MgWCl8KFdpbmRvd3MpfChMaW51eCkvLmV4ZWModWFzKTtcblxuICBfaXBob25lID0gL1xcYihpUGhvbmV8aVBbYW9dZCkvLmV4ZWModWFzKTtcbiAgX2lwYWQgPSAvXFxiKGlQW2FvXWQpLy5leGVjKHVhcyk7XG4gIF9hbmRyb2lkID0gL0FuZHJvaWQvaS5leGVjKHVhcyk7XG4gIF9uYXRpdmUgPSAvRkJBTlxcL1xcdys7L2kuZXhlYyh1YXMpO1xuICBfbW9iaWxlID0gL01vYmlsZS9pLmV4ZWModWFzKTtcblxuICAvLyBOb3RlIHRoYXQgdGhlIElFIHRlYW0gYmxvZyB3b3VsZCBoYXZlIHlvdSBiZWxpZXZlIHlvdSBzaG91bGQgYmUgY2hlY2tpbmdcbiAgLy8gZm9yICdXaW42NDsgeDY0Jy4gIEJ1dCBNU0ROIHRoZW4gcmV2ZWFscyB0aGF0IHlvdSBjYW4gYWN0dWFsbHkgYmUgY29taW5nXG4gIC8vIGZyb20gZWl0aGVyIHg2NCBvciBpYTY0OyAgc28gdWx0aW1hdGVseSwgeW91IHNob3VsZCBqdXN0IGNoZWNrIGZvciBXaW42NFxuICAvLyBhcyBpbiBpbmRpY2F0b3Igb2Ygd2hldGhlciB5b3UncmUgaW4gNjQtYml0IElFLiAgMzItYml0IElFIG9uIDY0LWJpdFxuICAvLyBXaW5kb3dzIHdpbGwgc2VuZCAnV09XNjQnIGluc3RlYWQuXG4gIF93aW42NCA9ICEhL1dpbjY0Ly5leGVjKHVhcyk7XG5cbiAgaWYgKGFnZW50KSB7XG4gICAgX2llID0gYWdlbnRbMV0gPyBwYXJzZUZsb2F0KGFnZW50WzFdKSA6IGFnZW50WzVdID8gcGFyc2VGbG9hdChhZ2VudFs1XSkgOiBOYU47XG4gICAgLy8gSUUgY29tcGF0aWJpbGl0eSBtb2RlXG4gICAgaWYgKF9pZSAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudE1vZGUpIHtcbiAgICAgIF9pZSA9IGRvY3VtZW50LmRvY3VtZW50TW9kZTtcbiAgICB9XG4gICAgLy8gZ3JhYiB0aGUgXCJ0cnVlXCIgaWUgdmVyc2lvbiBmcm9tIHRoZSB0cmlkZW50IHRva2VuIGlmIGF2YWlsYWJsZVxuICAgIHZhciB0cmlkZW50ID0gLyg/OlRyaWRlbnRcXC8oXFxkKy5cXGQrKSkvLmV4ZWModWFzKTtcbiAgICBfaWVfcmVhbF92ZXJzaW9uID0gdHJpZGVudCA/IHBhcnNlRmxvYXQodHJpZGVudFsxXSkgKyA0IDogX2llO1xuXG4gICAgX2ZpcmVmb3ggPSBhZ2VudFsyXSA/IHBhcnNlRmxvYXQoYWdlbnRbMl0pIDogTmFOO1xuICAgIF9vcGVyYSA9IGFnZW50WzNdID8gcGFyc2VGbG9hdChhZ2VudFszXSkgOiBOYU47XG4gICAgX3dlYmtpdCA9IGFnZW50WzRdID8gcGFyc2VGbG9hdChhZ2VudFs0XSkgOiBOYU47XG4gICAgaWYgKF93ZWJraXQpIHtcbiAgICAgIC8vIFdlIGRvIG5vdCBhZGQgdGhlIHJlZ2V4cCB0byB0aGUgYWJvdmUgdGVzdCwgYmVjYXVzZSBpdCB3aWxsIGFsd2F5c1xuICAgICAgLy8gbWF0Y2ggJ3NhZmFyaScgb25seSBzaW5jZSAnQXBwbGVXZWJLaXQnIGFwcGVhcnMgYmVmb3JlICdDaHJvbWUnIGluXG4gICAgICAvLyB0aGUgdXNlckFnZW50IHN0cmluZy5cbiAgICAgIGFnZW50ID0gLyg/OkNocm9tZVxcLyhcXGQrXFwuXFxkKykpLy5leGVjKHVhcyk7XG4gICAgICBfY2hyb21lID0gYWdlbnQgJiYgYWdlbnRbMV0gPyBwYXJzZUZsb2F0KGFnZW50WzFdKSA6IE5hTjtcbiAgICB9IGVsc2Uge1xuICAgICAgX2Nocm9tZSA9IE5hTjtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgX2llID0gX2ZpcmVmb3ggPSBfb3BlcmEgPSBfY2hyb21lID0gX3dlYmtpdCA9IE5hTjtcbiAgfVxuXG4gIGlmIChvcykge1xuICAgIGlmIChvc1sxXSkge1xuICAgICAgLy8gRGV0ZWN0IE9TIFggdmVyc2lvbi4gIElmIG5vIHZlcnNpb24gbnVtYmVyIG1hdGNoZXMsIHNldCBfb3N4IHRvIHRydWUuXG4gICAgICAvLyBWZXJzaW9uIGV4YW1wbGVzOiAgMTAsIDEwXzZfMSwgMTAuN1xuICAgICAgLy8gUGFyc2VzIHZlcnNpb24gbnVtYmVyIGFzIGEgZmxvYXQsIHRha2luZyBvbmx5IGZpcnN0IHR3byBzZXRzIG9mXG4gICAgICAvLyBkaWdpdHMuICBJZiBvbmx5IG9uZSBzZXQgb2YgZGlnaXRzIGlzIGZvdW5kLCByZXR1cm5zIGp1c3QgdGhlIG1ham9yXG4gICAgICAvLyB2ZXJzaW9uIG51bWJlci5cbiAgICAgIHZhciB2ZXIgPSAvKD86TWFjIE9TIFggKFxcZCsoPzpbLl9dXFxkKyk/KSkvLmV4ZWModWFzKTtcblxuICAgICAgX29zeCA9IHZlciA/IHBhcnNlRmxvYXQodmVyWzFdLnJlcGxhY2UoJ18nLCAnLicpKSA6IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIF9vc3ggPSBmYWxzZTtcbiAgICB9XG4gICAgX3dpbmRvd3MgPSAhIW9zWzJdO1xuICAgIF9saW51eCA9ICEhb3NbM107XG4gIH0gZWxzZSB7XG4gICAgX29zeCA9IF93aW5kb3dzID0gX2xpbnV4ID0gZmFsc2U7XG4gIH1cbn1cblxudmFyIFVzZXJBZ2VudF9ERVBSRUNBVEVEID0ge1xuXG4gIC8qKlxuICAgKiAgQ2hlY2sgaWYgdGhlIFVBIGlzIEludGVybmV0IEV4cGxvcmVyLlxuICAgKlxuICAgKlxuICAgKiAgQHJldHVybiBmbG9hdHxOYU4gVmVyc2lvbiBudW1iZXIgKGlmIG1hdGNoKSBvciBOYU4uXG4gICAqL1xuICBpZTogZnVuY3Rpb24gaWUoKSB7XG4gICAgcmV0dXJuIF9wb3B1bGF0ZSgpIHx8IF9pZTtcbiAgfSxcblxuICAvKipcbiAgICogQ2hlY2sgaWYgd2UncmUgaW4gSW50ZXJuZXQgRXhwbG9yZXIgY29tcGF0aWJpbGl0eSBtb2RlLlxuICAgKlxuICAgKiBAcmV0dXJuIGJvb2wgdHJ1ZSBpZiBpbiBjb21wYXRpYmlsaXR5IG1vZGUsIGZhbHNlIGlmXG4gICAqIG5vdCBjb21wYXRpYmlsaXR5IG1vZGUgb3Igbm90IGllXG4gICAqL1xuICBpZUNvbXBhdGliaWxpdHlNb2RlOiBmdW5jdGlvbiBpZUNvbXBhdGliaWxpdHlNb2RlKCkge1xuICAgIHJldHVybiBfcG9wdWxhdGUoKSB8fCBfaWVfcmVhbF92ZXJzaW9uID4gX2llO1xuICB9LFxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBicm93c2VyIGlzIDY0LWJpdCBJRS4gIFJlYWxseSwgdGhpcyBpcyBraW5kIG9mIHdlYWsgc2F1Y2U7ICB3ZVxuICAgKiBvbmx5IG5lZWQgdGhpcyBiZWNhdXNlIFNreXBlIGNhbid0IGhhbmRsZSA2NC1iaXQgSUUgeWV0LiAgV2UgbmVlZCB0byByZW1vdmVcbiAgICogdGhpcyB3aGVuIHdlIGRvbid0IG5lZWQgaXQgLS0gdHJhY2tlZCBieSAjNjAxOTU3LlxuICAgKi9cbiAgaWU2NDogZnVuY3Rpb24gaWU2NCgpIHtcbiAgICByZXR1cm4gVXNlckFnZW50X0RFUFJFQ0FURUQuaWUoKSAmJiBfd2luNjQ7XG4gIH0sXG5cbiAgLyoqXG4gICAqICBDaGVjayBpZiB0aGUgVUEgaXMgRmlyZWZveC5cbiAgICpcbiAgICpcbiAgICogIEByZXR1cm4gZmxvYXR8TmFOIFZlcnNpb24gbnVtYmVyIChpZiBtYXRjaCkgb3IgTmFOLlxuICAgKi9cbiAgZmlyZWZveDogZnVuY3Rpb24gZmlyZWZveCgpIHtcbiAgICByZXR1cm4gX3BvcHVsYXRlKCkgfHwgX2ZpcmVmb3g7XG4gIH0sXG5cbiAgLyoqXG4gICAqICBDaGVjayBpZiB0aGUgVUEgaXMgT3BlcmEuXG4gICAqXG4gICAqXG4gICAqICBAcmV0dXJuIGZsb2F0fE5hTiBWZXJzaW9uIG51bWJlciAoaWYgbWF0Y2gpIG9yIE5hTi5cbiAgICovXG4gIG9wZXJhOiBmdW5jdGlvbiBvcGVyYSgpIHtcbiAgICByZXR1cm4gX3BvcHVsYXRlKCkgfHwgX29wZXJhO1xuICB9LFxuXG4gIC8qKlxuICAgKiAgQ2hlY2sgaWYgdGhlIFVBIGlzIFdlYktpdC5cbiAgICpcbiAgICpcbiAgICogIEByZXR1cm4gZmxvYXR8TmFOIFZlcnNpb24gbnVtYmVyIChpZiBtYXRjaCkgb3IgTmFOLlxuICAgKi9cbiAgd2Via2l0OiBmdW5jdGlvbiB3ZWJraXQoKSB7XG4gICAgcmV0dXJuIF9wb3B1bGF0ZSgpIHx8IF93ZWJraXQ7XG4gIH0sXG5cbiAgLyoqXG4gICAqICBGb3IgUHVzaFxuICAgKiAgV0lMTCBCRSBSRU1PVkVEIFZFUlkgU09PTi4gVXNlIFVzZXJBZ2VudF9ERVBSRUNBVEVELndlYmtpdFxuICAgKi9cbiAgc2FmYXJpOiBmdW5jdGlvbiBzYWZhcmkoKSB7XG4gICAgcmV0dXJuIFVzZXJBZ2VudF9ERVBSRUNBVEVELndlYmtpdCgpO1xuICB9LFxuXG4gIC8qKlxuICAgKiAgQ2hlY2sgaWYgdGhlIFVBIGlzIGEgQ2hyb21lIGJyb3dzZXIuXG4gICAqXG4gICAqXG4gICAqICBAcmV0dXJuIGZsb2F0fE5hTiBWZXJzaW9uIG51bWJlciAoaWYgbWF0Y2gpIG9yIE5hTi5cbiAgICovXG4gIGNocm9tZTogZnVuY3Rpb24gY2hyb21lKCkge1xuICAgIHJldHVybiBfcG9wdWxhdGUoKSB8fCBfY2hyb21lO1xuICB9LFxuXG4gIC8qKlxuICAgKiAgQ2hlY2sgaWYgdGhlIHVzZXIgaXMgcnVubmluZyBXaW5kb3dzLlxuICAgKlxuICAgKiAgQHJldHVybiBib29sIGB0cnVlJyBpZiB0aGUgdXNlcidzIE9TIGlzIFdpbmRvd3MuXG4gICAqL1xuICB3aW5kb3dzOiBmdW5jdGlvbiB3aW5kb3dzKCkge1xuICAgIHJldHVybiBfcG9wdWxhdGUoKSB8fCBfd2luZG93cztcbiAgfSxcblxuICAvKipcbiAgICogIENoZWNrIGlmIHRoZSB1c2VyIGlzIHJ1bm5pbmcgTWFjIE9TIFguXG4gICAqXG4gICAqICBAcmV0dXJuIGZsb2F0fGJvb2wgICBSZXR1cm5zIGEgZmxvYXQgaWYgYSB2ZXJzaW9uIG51bWJlciBpcyBkZXRlY3RlZCxcbiAgICogICAgICAgICAgICAgICAgICAgICAgIG90aGVyd2lzZSB0cnVlL2ZhbHNlLlxuICAgKi9cbiAgb3N4OiBmdW5jdGlvbiBvc3goKSB7XG4gICAgcmV0dXJuIF9wb3B1bGF0ZSgpIHx8IF9vc3g7XG4gIH0sXG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZSB1c2VyIGlzIHJ1bm5pbmcgTGludXguXG4gICAqXG4gICAqIEByZXR1cm4gYm9vbCBgdHJ1ZScgaWYgdGhlIHVzZXIncyBPUyBpcyBzb21lIGZsYXZvciBvZiBMaW51eC5cbiAgICovXG4gIGxpbnV4OiBmdW5jdGlvbiBsaW51eCgpIHtcbiAgICByZXR1cm4gX3BvcHVsYXRlKCkgfHwgX2xpbnV4O1xuICB9LFxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGUgdXNlciBpcyBydW5uaW5nIG9uIGFuIGlQaG9uZSBvciBpUG9kIHBsYXRmb3JtLlxuICAgKlxuICAgKiBAcmV0dXJuIGJvb2wgYHRydWUnIGlmIHRoZSB1c2VyIGlzIHJ1bm5pbmcgc29tZSBmbGF2b3Igb2YgdGhlXG4gICAqICAgIGlQaG9uZSBPUy5cbiAgICovXG4gIGlwaG9uZTogZnVuY3Rpb24gaXBob25lKCkge1xuICAgIHJldHVybiBfcG9wdWxhdGUoKSB8fCBfaXBob25lO1xuICB9LFxuXG4gIG1vYmlsZTogZnVuY3Rpb24gbW9iaWxlKCkge1xuICAgIHJldHVybiBfcG9wdWxhdGUoKSB8fCBfaXBob25lIHx8IF9pcGFkIHx8IF9hbmRyb2lkIHx8IF9tb2JpbGU7XG4gIH0sXG5cbiAgbmF0aXZlQXBwOiBmdW5jdGlvbiBuYXRpdmVBcHAoKSB7XG4gICAgLy8gd2Vidmlld3MgaW5zaWRlIG9mIHRoZSBuYXRpdmUgYXBwc1xuICAgIHJldHVybiBfcG9wdWxhdGUoKSB8fCBfbmF0aXZlO1xuICB9LFxuXG4gIGFuZHJvaWQ6IGZ1bmN0aW9uIGFuZHJvaWQoKSB7XG4gICAgcmV0dXJuIF9wb3B1bGF0ZSgpIHx8IF9hbmRyb2lkO1xuICB9LFxuXG4gIGlwYWQ6IGZ1bmN0aW9uIGlwYWQoKSB7XG4gICAgcmV0dXJuIF9wb3B1bGF0ZSgpIHx8IF9pcGFkO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFVzZXJBZ2VudF9ERVBSRUNBVEVEO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvVXNlckFnZW50X0RFUFJFQ0FURUQuanNcbiAqKiBtb2R1bGUgaWQgPSA0MzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBpc0V2ZW50U3VwcG9ydGVkXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgRXhlY3V0aW9uRW52aXJvbm1lbnQgPSByZXF1aXJlKCcuL0V4ZWN1dGlvbkVudmlyb25tZW50Jyk7XG5cbnZhciB1c2VIYXNGZWF0dXJlO1xuaWYgKEV4ZWN1dGlvbkVudmlyb25tZW50LmNhblVzZURPTSkge1xuICB1c2VIYXNGZWF0dXJlID0gZG9jdW1lbnQuaW1wbGVtZW50YXRpb24gJiYgZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uaGFzRmVhdHVyZSAmJlxuICAvLyBhbHdheXMgcmV0dXJucyB0cnVlIGluIG5ld2VyIGJyb3dzZXJzIGFzIHBlciB0aGUgc3RhbmRhcmQuXG4gIC8vIEBzZWUgaHR0cDovL2RvbS5zcGVjLndoYXR3Zy5vcmcvI2RvbS1kb21pbXBsZW1lbnRhdGlvbi1oYXNmZWF0dXJlXG4gIGRvY3VtZW50LmltcGxlbWVudGF0aW9uLmhhc0ZlYXR1cmUoJycsICcnKSAhPT0gdHJ1ZTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYW4gZXZlbnQgaXMgc3VwcG9ydGVkIGluIHRoZSBjdXJyZW50IGV4ZWN1dGlvbiBlbnZpcm9ubWVudC5cbiAqXG4gKiBOT1RFOiBUaGlzIHdpbGwgbm90IHdvcmsgY29ycmVjdGx5IGZvciBub24tZ2VuZXJpYyBldmVudHMgc3VjaCBhcyBgY2hhbmdlYCxcbiAqIGByZXNldGAsIGBsb2FkYCwgYGVycm9yYCwgYW5kIGBzZWxlY3RgLlxuICpcbiAqIEJvcnJvd3MgZnJvbSBNb2Rlcm5penIuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZVN1ZmZpeCBFdmVudCBuYW1lLCBlLmcuIFwiY2xpY2tcIi5cbiAqIEBwYXJhbSB7P2Jvb2xlYW59IGNhcHR1cmUgQ2hlY2sgaWYgdGhlIGNhcHR1cmUgcGhhc2UgaXMgc3VwcG9ydGVkLlxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgZXZlbnQgaXMgc3VwcG9ydGVkLlxuICogQGludGVybmFsXG4gKiBAbGljZW5zZSBNb2Rlcm5penIgMy4wLjBwcmUgKEN1c3RvbSBCdWlsZCkgfCBNSVRcbiAqL1xuZnVuY3Rpb24gaXNFdmVudFN1cHBvcnRlZChldmVudE5hbWVTdWZmaXgsIGNhcHR1cmUpIHtcbiAgaWYgKCFFeGVjdXRpb25FbnZpcm9ubWVudC5jYW5Vc2VET00gfHwgY2FwdHVyZSAmJiAhKCdhZGRFdmVudExpc3RlbmVyJyBpbiBkb2N1bWVudCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgZXZlbnROYW1lID0gJ29uJyArIGV2ZW50TmFtZVN1ZmZpeDtcbiAgdmFyIGlzU3VwcG9ydGVkID0gKGV2ZW50TmFtZSBpbiBkb2N1bWVudCk7XG5cbiAgaWYgKCFpc1N1cHBvcnRlZCkge1xuICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoZXZlbnROYW1lLCAncmV0dXJuOycpO1xuICAgIGlzU3VwcG9ydGVkID0gdHlwZW9mIGVsZW1lbnRbZXZlbnROYW1lXSA9PT0gJ2Z1bmN0aW9uJztcbiAgfVxuXG4gIGlmICghaXNTdXBwb3J0ZWQgJiYgdXNlSGFzRmVhdHVyZSAmJiBldmVudE5hbWVTdWZmaXggPT09ICd3aGVlbCcpIHtcbiAgICAvLyBUaGlzIGlzIHRoZSBvbmx5IHdheSB0byB0ZXN0IHN1cHBvcnQgZm9yIHRoZSBgd2hlZWxgIGV2ZW50IGluIElFOSsuXG4gICAgaXNTdXBwb3J0ZWQgPSBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5oYXNGZWF0dXJlKCdFdmVudHMud2hlZWwnLCAnMy4wJyk7XG4gIH1cblxuICByZXR1cm4gaXNTdXBwb3J0ZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNFdmVudFN1cHBvcnRlZDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL2lzRXZlbnRTdXBwb3J0ZWQuanNcbiAqKiBtb2R1bGUgaWQgPSA0MzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIEV4ZWN1dGlvbkVudmlyb25tZW50XG4gKi9cblxuLypqc2xpbnQgZXZpbDogdHJ1ZSAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBjYW5Vc2VET00gPSAhISh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQgJiYgd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xuXG4vKipcbiAqIFNpbXBsZSwgbGlnaHR3ZWlnaHQgbW9kdWxlIGFzc2lzdGluZyB3aXRoIHRoZSBkZXRlY3Rpb24gYW5kIGNvbnRleHQgb2ZcbiAqIFdvcmtlci4gSGVscHMgYXZvaWQgY2lyY3VsYXIgZGVwZW5kZW5jaWVzIGFuZCBhbGxvd3MgY29kZSB0byByZWFzb24gYWJvdXRcbiAqIHdoZXRoZXIgb3Igbm90IHRoZXkgYXJlIGluIGEgV29ya2VyLCBldmVuIGlmIHRoZXkgbmV2ZXIgaW5jbHVkZSB0aGUgbWFpblxuICogYFJlYWN0V29ya2VyYCBkZXBlbmRlbmN5LlxuICovXG52YXIgRXhlY3V0aW9uRW52aXJvbm1lbnQgPSB7XG5cbiAgY2FuVXNlRE9NOiBjYW5Vc2VET00sXG5cbiAgY2FuVXNlV29ya2VyczogdHlwZW9mIFdvcmtlciAhPT0gJ3VuZGVmaW5lZCcsXG5cbiAgY2FuVXNlRXZlbnRMaXN0ZW5lcnM6IGNhblVzZURPTSAmJiAhISh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciB8fCB3aW5kb3cuYXR0YWNoRXZlbnQpLFxuXG4gIGNhblVzZVZpZXdwb3J0OiBjYW5Vc2VET00gJiYgISF3aW5kb3cuc2NyZWVuLFxuXG4gIGlzSW5Xb3JrZXI6ICFjYW5Vc2VET00gLy8gRm9yIG5vdywgdGhpcyBpcyB0cnVlIC0gbWlnaHQgY2hhbmdlIGluIHRoZSBmdXR1cmUuXG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRXhlY3V0aW9uRW52aXJvbm1lbnQ7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9FeGVjdXRpb25FbnZpcm9ubWVudC5qc1xuICoqIG1vZHVsZSBpZCA9IDQzM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgcmVxdWVzdEFuaW1hdGlvbkZyYW1lUG9seWZpbGxcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBlbXB0eUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9lbXB0eUZ1bmN0aW9uJyk7XG52YXIgbmF0aXZlUmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gcmVxdWlyZSgnLi9uYXRpdmVSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnKTtcblxudmFyIGxhc3RUaW1lID0gMDtcblxuLyoqXG4gKiBIZXJlIGlzIHRoZSBuYXRpdmUgYW5kIHBvbHlmaWxsIHZlcnNpb24gb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lLlxuICogUGxlYXNlIGRvbid0IHVzZSBpdCBkaXJlY3RseSBhbmQgdXNlIHJlcXVlc3RBbmltYXRpb25GcmFtZSBtb2R1bGUgaW5zdGVhZC5cbiAqL1xudmFyIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9IG5hdGl2ZVJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgdmFyIGN1cnJUaW1lID0gRGF0ZS5ub3coKTtcbiAgdmFyIHRpbWVEZWxheSA9IE1hdGgubWF4KDAsIDE2IC0gKGN1cnJUaW1lIC0gbGFzdFRpbWUpKTtcbiAgbGFzdFRpbWUgPSBjdXJyVGltZSArIHRpbWVEZWxheTtcbiAgcmV0dXJuIGdsb2JhbC5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICBjYWxsYmFjayhEYXRlLm5vdygpKTtcbiAgfSwgdGltZURlbGF5KTtcbn07XG5cbi8vIFdvcmtzIGFyb3VuZCBhIHJhcmUgYnVnIGluIFNhZmFyaSA2IHdoZXJlIHRoZSBmaXJzdCByZXF1ZXN0IGlzIG5ldmVyIGludm9rZWQuXG5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZW1wdHlGdW5jdGlvbik7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvcmVxdWVzdEFuaW1hdGlvbkZyYW1lUG9seWZpbGwuanNcbiAqKiBtb2R1bGUgaWQgPSA0MzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIG5hdGl2ZVJlcXVlc3RBbmltYXRpb25GcmFtZVxuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG52YXIgbmF0aXZlUmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gZ2xvYmFsLnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCBnbG9iYWwud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IGdsb2JhbC5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgZ2xvYmFsLm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgZ2xvYmFsLm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdGl2ZVJlcXVlc3RBbmltYXRpb25GcmFtZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL25hdGl2ZVJlcXVlc3RBbmltYXRpb25GcmFtZS5qc1xuICoqIG1vZHVsZSBpZCA9IDQzNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgU2Nyb2xsYmFyLnJlYWN0XG4gKiBAdHlwZWNoZWNrc1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIERPTU1vdXNlTW92ZVRyYWNrZXIgPSByZXF1aXJlKCcuL0RPTU1vdXNlTW92ZVRyYWNrZXInKTtcbnZhciBLZXlzID0gcmVxdWlyZSgnLi9LZXlzJyk7XG52YXIgUmVhY3QgPSByZXF1aXJlKCcuL1JlYWN0Jyk7XG52YXIgUmVhY3RET00gPSByZXF1aXJlKCcuL1JlYWN0RE9NJyk7XG52YXIgUmVhY3RDb21wb25lbnRXaXRoUHVyZVJlbmRlck1peGluID0gcmVxdWlyZSgnLi9SZWFjdENvbXBvbmVudFdpdGhQdXJlUmVuZGVyTWl4aW4nKTtcbnZhciBSZWFjdFdoZWVsSGFuZGxlciA9IHJlcXVpcmUoJy4vUmVhY3RXaGVlbEhhbmRsZXInKTtcblxudmFyIGNzc1ZhciA9IHJlcXVpcmUoJy4vY3NzVmFyJyk7XG52YXIgY3ggPSByZXF1aXJlKCcuL2N4Jyk7XG52YXIgZW1wdHlGdW5jdGlvbiA9IHJlcXVpcmUoJy4vZW1wdHlGdW5jdGlvbicpO1xudmFyIHRyYW5zbGF0ZURPTVBvc2l0aW9uWFkgPSByZXF1aXJlKCcuL3RyYW5zbGF0ZURPTVBvc2l0aW9uWFknKTtcblxudmFyIFByb3BUeXBlcyA9IFJlYWN0LlByb3BUeXBlcztcblxudmFyIFVOU0NST0xMQUJMRV9TVEFURSA9IHtcbiAgcG9zaXRpb246IDAsXG4gIHNjcm9sbGFibGU6IGZhbHNlXG59O1xuXG52YXIgRkFDRV9NQVJHSU4gPSBwYXJzZUludChjc3NWYXIoJ3Njcm9sbGJhci1mYWNlLW1hcmdpbicpLCAxMCk7XG52YXIgRkFDRV9NQVJHSU5fMiA9IEZBQ0VfTUFSR0lOICogMjtcbnZhciBGQUNFX1NJWkVfTUlOID0gMzA7XG52YXIgS0VZQk9BUkRfU0NST0xMX0FNT1VOVCA9IDQwO1xuXG52YXIgX2xhc3RTY3JvbGxlZFNjcm9sbGJhciA9IG51bGw7XG5cbnZhciBTY3JvbGxiYXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnU2Nyb2xsYmFyJyxcblxuICBtaXhpbnM6IFtSZWFjdENvbXBvbmVudFdpdGhQdXJlUmVuZGVyTWl4aW5dLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGNvbnRlbnRTaXplOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgZGVmYXVsdFBvc2l0aW9uOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGlzT3BhcXVlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBvcmllbnRhdGlvbjogUHJvcFR5cGVzLm9uZU9mKFsndmVydGljYWwnLCAnaG9yaXpvbnRhbCddKSxcbiAgICBvblNjcm9sbDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgcG9zaXRpb246IFByb3BUeXBlcy5udW1iZXIsXG4gICAgc2l6ZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIHRyYWNrQ29sb3I6IFByb3BUeXBlcy5vbmVPZihbJ2dyYXknXSksXG4gICAgekluZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHZlcnRpY2FsVG9wOiBQcm9wVHlwZXMubnVtYmVyXG4gIH0sXG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSAvKm9iamVjdCove1xuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIHRoaXMuX2NhbGN1bGF0ZVN0YXRlKHByb3BzLnBvc2l0aW9uIHx8IHByb3BzLmRlZmF1bHRQb3NpdGlvbiB8fCAwLCBwcm9wcy5zaXplLCBwcm9wcy5jb250ZW50U2l6ZSwgcHJvcHMub3JpZW50YXRpb24pO1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoIC8qb2JqZWN0Ki9uZXh0UHJvcHMpIHtcbiAgICB2YXIgY29udHJvbGxlZFBvc2l0aW9uID0gbmV4dFByb3BzLnBvc2l0aW9uO1xuICAgIGlmIChjb250cm9sbGVkUG9zaXRpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fc2V0TmV4dFN0YXRlKHRoaXMuX2NhbGN1bGF0ZVN0YXRlKHRoaXMuc3RhdGUucG9zaXRpb24sIG5leHRQcm9wcy5zaXplLCBuZXh0UHJvcHMuY29udGVudFNpemUsIG5leHRQcm9wcy5vcmllbnRhdGlvbikpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zZXROZXh0U3RhdGUodGhpcy5fY2FsY3VsYXRlU3RhdGUoY29udHJvbGxlZFBvc2l0aW9uLCBuZXh0UHJvcHMuc2l6ZSwgbmV4dFByb3BzLmNvbnRlbnRTaXplLCBuZXh0UHJvcHMub3JpZW50YXRpb24pLCBuZXh0UHJvcHMpO1xuICAgIH1cbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIC8qb2JqZWN0Ki97XG4gICAgcmV0dXJuIHtcbiAgICAgIGRlZmF1bHRQb3NpdGlvbjogMCxcbiAgICAgIGlzT3BhcXVlOiBmYWxzZSxcbiAgICAgIG9uU2Nyb2xsOiBlbXB0eUZ1bmN0aW9uLFxuICAgICAgb3JpZW50YXRpb246ICd2ZXJ0aWNhbCcsXG4gICAgICB6SW5kZXg6IDk5XG4gICAgfTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIC8qP29iamVjdCove1xuICAgIGlmICghdGhpcy5zdGF0ZS5zY3JvbGxhYmxlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgc2l6ZSA9IHRoaXMucHJvcHMuc2l6ZTtcbiAgICB2YXIgbWFpblN0eWxlO1xuICAgIHZhciBmYWNlU3R5bGU7XG4gICAgdmFyIGlzSG9yaXpvbnRhbCA9IHRoaXMuc3RhdGUuaXNIb3Jpem9udGFsO1xuICAgIHZhciBpc1ZlcnRpY2FsID0gIWlzSG9yaXpvbnRhbDtcbiAgICB2YXIgaXNBY3RpdmUgPSB0aGlzLnN0YXRlLmZvY3VzZWQgfHwgdGhpcy5zdGF0ZS5pc0RyYWdnaW5nO1xuICAgIHZhciBmYWNlU2l6ZSA9IHRoaXMuc3RhdGUuZmFjZVNpemU7XG4gICAgdmFyIGlzT3BhcXVlID0gdGhpcy5wcm9wcy5pc09wYXF1ZTtcbiAgICB2YXIgdmVydGljYWxUb3AgPSB0aGlzLnByb3BzLnZlcnRpY2FsVG9wIHx8IDA7XG5cbiAgICB2YXIgbWFpbkNsYXNzTmFtZSA9IGN4KHtcbiAgICAgICdTY3JvbGxiYXJMYXlvdXQvbWFpbic6IHRydWUsXG4gICAgICAnU2Nyb2xsYmFyTGF5b3V0L21haW5WZXJ0aWNhbCc6IGlzVmVydGljYWwsXG4gICAgICAnU2Nyb2xsYmFyTGF5b3V0L21haW5Ib3Jpem9udGFsJzogaXNIb3Jpem9udGFsLFxuICAgICAgJ3B1YmxpYy9TY3JvbGxiYXIvbWFpbic6IHRydWUsXG4gICAgICAncHVibGljL1Njcm9sbGJhci9tYWluT3BhcXVlJzogaXNPcGFxdWUsXG4gICAgICAncHVibGljL1Njcm9sbGJhci9tYWluQWN0aXZlJzogaXNBY3RpdmVcbiAgICB9KTtcblxuICAgIHZhciBmYWNlQ2xhc3NOYW1lID0gY3goe1xuICAgICAgJ1Njcm9sbGJhckxheW91dC9mYWNlJzogdHJ1ZSxcbiAgICAgICdTY3JvbGxiYXJMYXlvdXQvZmFjZUhvcml6b250YWwnOiBpc0hvcml6b250YWwsXG4gICAgICAnU2Nyb2xsYmFyTGF5b3V0L2ZhY2VWZXJ0aWNhbCc6IGlzVmVydGljYWwsXG4gICAgICAncHVibGljL1Njcm9sbGJhci9mYWNlQWN0aXZlJzogaXNBY3RpdmUsXG4gICAgICAncHVibGljL1Njcm9sbGJhci9mYWNlJzogdHJ1ZVxuICAgIH0pO1xuXG4gICAgdmFyIHBvc2l0aW9uID0gdGhpcy5zdGF0ZS5wb3NpdGlvbiAqIHRoaXMuc3RhdGUuc2NhbGUgKyBGQUNFX01BUkdJTjtcblxuICAgIGlmIChpc0hvcml6b250YWwpIHtcbiAgICAgIG1haW5TdHlsZSA9IHtcbiAgICAgICAgd2lkdGg6IHNpemVcbiAgICAgIH07XG4gICAgICBmYWNlU3R5bGUgPSB7XG4gICAgICAgIHdpZHRoOiBmYWNlU2l6ZSAtIEZBQ0VfTUFSR0lOXzJcbiAgICAgIH07XG4gICAgICB0cmFuc2xhdGVET01Qb3NpdGlvblhZKGZhY2VTdHlsZSwgcG9zaXRpb24sIDApO1xuICAgIH0gZWxzZSB7XG4gICAgICBtYWluU3R5bGUgPSB7XG4gICAgICAgIHRvcDogdmVydGljYWxUb3AsXG4gICAgICAgIGhlaWdodDogc2l6ZVxuICAgICAgfTtcbiAgICAgIGZhY2VTdHlsZSA9IHtcbiAgICAgICAgaGVpZ2h0OiBmYWNlU2l6ZSAtIEZBQ0VfTUFSR0lOXzJcbiAgICAgIH07XG4gICAgICB0cmFuc2xhdGVET01Qb3NpdGlvblhZKGZhY2VTdHlsZSwgMCwgcG9zaXRpb24pO1xuICAgIH1cblxuICAgIG1haW5TdHlsZS56SW5kZXggPSB0aGlzLnByb3BzLnpJbmRleDtcblxuICAgIGlmICh0aGlzLnByb3BzLnRyYWNrQ29sb3IgPT09ICdncmF5Jykge1xuICAgICAgbWFpblN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNzc1ZhcignZmJ1aS1kZXNrdG9wLWJhY2tncm91bmQtbGlnaHQnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAge1xuICAgICAgICBvbkZvY3VzOiB0aGlzLl9vbkZvY3VzLFxuICAgICAgICBvbkJsdXI6IHRoaXMuX29uQmx1cixcbiAgICAgICAgb25LZXlEb3duOiB0aGlzLl9vbktleURvd24sXG4gICAgICAgIG9uTW91c2VEb3duOiB0aGlzLl9vbk1vdXNlRG93bixcbiAgICAgICAgb25XaGVlbDogdGhpcy5fd2hlZWxIYW5kbGVyLm9uV2hlZWwsXG4gICAgICAgIGNsYXNzTmFtZTogbWFpbkNsYXNzTmFtZSxcbiAgICAgICAgc3R5bGU6IG1haW5TdHlsZSxcbiAgICAgICAgdGFiSW5kZXg6IDAgfSxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgcmVmOiAnZmFjZScsXG4gICAgICAgIGNsYXNzTmFtZTogZmFjZUNsYXNzTmFtZSxcbiAgICAgICAgc3R5bGU6IGZhY2VTdHlsZVxuICAgICAgfSlcbiAgICApO1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxNb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHZhciBpc0hvcml6b250YWwgPSB0aGlzLnByb3BzLm9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCc7XG4gICAgdmFyIG9uV2hlZWwgPSBpc0hvcml6b250YWwgPyB0aGlzLl9vbldoZWVsWCA6IHRoaXMuX29uV2hlZWxZO1xuXG4gICAgdGhpcy5fd2hlZWxIYW5kbGVyID0gbmV3IFJlYWN0V2hlZWxIYW5kbGVyKG9uV2hlZWwsIHRoaXMuX3Nob3VsZEhhbmRsZVgsIC8vIFNob3VsZCBoYW5sZGUgaG9yaXpvbnRhbCBzY3JvbGxcbiAgICB0aGlzLl9zaG91bGRIYW5kbGVZIC8vIFNob3VsZCBoYW5kbGUgdmVydGljYWwgc2Nyb2xsXG4gICAgKTtcbiAgfSxcblxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5fbW91c2VNb3ZlVHJhY2tlciA9IG5ldyBET01Nb3VzZU1vdmVUcmFja2VyKHRoaXMuX29uTW91c2VNb3ZlLCB0aGlzLl9vbk1vdXNlTW92ZUVuZCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KTtcblxuICAgIGlmICh0aGlzLnByb3BzLnBvc2l0aW9uICE9PSB1bmRlZmluZWQgJiYgdGhpcy5zdGF0ZS5wb3NpdGlvbiAhPT0gdGhpcy5wcm9wcy5wb3NpdGlvbikge1xuICAgICAgdGhpcy5fZGlkU2Nyb2xsKCk7XG4gICAgfVxuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLl9uZXh0U3RhdGUgPSBudWxsO1xuICAgIHRoaXMuX21vdXNlTW92ZVRyYWNrZXIucmVsZWFzZU1vdXNlTW92ZXMoKTtcbiAgICBpZiAoX2xhc3RTY3JvbGxlZFNjcm9sbGJhciA9PT0gdGhpcykge1xuICAgICAgX2xhc3RTY3JvbGxlZFNjcm9sbGJhciA9IG51bGw7XG4gICAgfVxuICAgIGRlbGV0ZSB0aGlzLl9tb3VzZU1vdmVUcmFja2VyO1xuICB9LFxuXG4gIHNjcm9sbEJ5OiBmdW5jdGlvbiBzY3JvbGxCeSggLypudW1iZXIqL2RlbHRhKSB7XG4gICAgdGhpcy5fb25XaGVlbChkZWx0YSk7XG4gIH0sXG5cbiAgX3Nob3VsZEhhbmRsZVg6IGZ1bmN0aW9uIF9zaG91bGRIYW5kbGVYKCAvKm51bWJlciovZGVsdGEpIC8qYm9vbGVhbiove1xuICAgIHJldHVybiB0aGlzLnByb3BzLm9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcgPyB0aGlzLl9zaG91bGRIYW5kbGVDaGFuZ2UoZGVsdGEpIDogZmFsc2U7XG4gIH0sXG5cbiAgX3Nob3VsZEhhbmRsZVk6IGZ1bmN0aW9uIF9zaG91bGRIYW5kbGVZKCAvKm51bWJlciovZGVsdGEpIC8qYm9vbGVhbiove1xuICAgIHJldHVybiB0aGlzLnByb3BzLm9yaWVudGF0aW9uICE9PSAnaG9yaXpvbnRhbCcgPyB0aGlzLl9zaG91bGRIYW5kbGVDaGFuZ2UoZGVsdGEpIDogZmFsc2U7XG4gIH0sXG5cbiAgX3Nob3VsZEhhbmRsZUNoYW5nZTogZnVuY3Rpb24gX3Nob3VsZEhhbmRsZUNoYW5nZSggLypudW1iZXIqL2RlbHRhKSAvKmJvb2xlYW4qL3tcbiAgICB2YXIgbmV4dFN0YXRlID0gdGhpcy5fY2FsY3VsYXRlU3RhdGUodGhpcy5zdGF0ZS5wb3NpdGlvbiArIGRlbHRhLCB0aGlzLnByb3BzLnNpemUsIHRoaXMucHJvcHMuY29udGVudFNpemUsIHRoaXMucHJvcHMub3JpZW50YXRpb24pO1xuICAgIHJldHVybiBuZXh0U3RhdGUucG9zaXRpb24gIT09IHRoaXMuc3RhdGUucG9zaXRpb247XG4gIH0sXG5cbiAgX2NhbGN1bGF0ZVN0YXRlOiBmdW5jdGlvbiBfY2FsY3VsYXRlU3RhdGUoXG4gIC8qbnVtYmVyKi9wb3NpdGlvbixcbiAgLypudW1iZXIqL3NpemUsXG4gIC8qbnVtYmVyKi9jb250ZW50U2l6ZSxcbiAgLypzdHJpbmcqL29yaWVudGF0aW9uKSAvKm9iamVjdCove1xuICAgIGlmIChzaXplIDwgMSB8fCBjb250ZW50U2l6ZSA8PSBzaXplKSB7XG4gICAgICByZXR1cm4gVU5TQ1JPTExBQkxFX1NUQVRFO1xuICAgIH1cblxuICAgIHZhciBzdGF0ZUtleSA9IHBvc2l0aW9uICsgJ18nICsgc2l6ZSArICdfJyArIGNvbnRlbnRTaXplICsgJ18nICsgb3JpZW50YXRpb247XG4gICAgaWYgKHRoaXMuX3N0YXRlS2V5ID09PSBzdGF0ZUtleSkge1xuICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlRm9yS2V5O1xuICAgIH1cblxuICAgIC8vIFRoZXJlIGFyZSB0d28gdHlwZXMgb2YgcG9zaXRpb25zIGhlcmUuXG4gICAgLy8gMSkgUGhpc2ljYWwgcG9zaXRpb246IGNoYW5nZWQgYnkgbW91c2UgLyBrZXlib2FyZFxuICAgIC8vIDIpIExvZ2ljYWwgcG9zaXRpb246IGNoYW5nZWQgYnkgcHJvcHMuXG4gICAgLy8gVGhlIGxvZ2ljYWwgcG9zaXRpb24gd2lsbCBiZSBrZXB0IGFzIGFzIGludGVybmFsIHN0YXRlIGFuZCB0aGUgYHJlbmRlcigpYFxuICAgIC8vIGZ1bmN0aW9uIHdpbGwgdHJhbnNsYXRlIGl0IGludG8gcGh5c2ljYWwgcG9zaXRpb24gdG8gcmVuZGVyLlxuXG4gICAgdmFyIGlzSG9yaXpvbnRhbCA9IG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCc7XG4gICAgdmFyIHNjYWxlID0gc2l6ZSAvIGNvbnRlbnRTaXplO1xuICAgIHZhciBmYWNlU2l6ZSA9IHNpemUgKiBzY2FsZTtcblxuICAgIGlmIChmYWNlU2l6ZSA8IEZBQ0VfU0laRV9NSU4pIHtcbiAgICAgIHNjYWxlID0gKHNpemUgLSBGQUNFX1NJWkVfTUlOKSAvIChjb250ZW50U2l6ZSAtIHNpemUpO1xuICAgICAgZmFjZVNpemUgPSBGQUNFX1NJWkVfTUlOO1xuICAgIH1cblxuICAgIHZhciBzY3JvbGxhYmxlID0gdHJ1ZTtcbiAgICB2YXIgbWF4UG9zaXRpb24gPSBjb250ZW50U2l6ZSAtIHNpemU7XG5cbiAgICBpZiAocG9zaXRpb24gPCAwKSB7XG4gICAgICBwb3NpdGlvbiA9IDA7XG4gICAgfSBlbHNlIGlmIChwb3NpdGlvbiA+IG1heFBvc2l0aW9uKSB7XG4gICAgICBwb3NpdGlvbiA9IG1heFBvc2l0aW9uO1xuICAgIH1cblxuICAgIHZhciBpc0RyYWdnaW5nID0gdGhpcy5fbW91c2VNb3ZlVHJhY2tlciA/IHRoaXMuX21vdXNlTW92ZVRyYWNrZXIuaXNEcmFnZ2luZygpIDogZmFsc2U7XG5cbiAgICAvLyBUaGlzIGZ1bmN0aW9uIHNob3VsZCBvbmx5IHJldHVybiBmbGF0IHZhbHVlcyB0aGF0IGNhbiBiZSBjb21wYXJlZCBxdWljbGt5XG4gICAgLy8gYnkgYFJlYWN0Q29tcG9uZW50V2l0aFB1cmVSZW5kZXJNaXhpbmAuXG4gICAgdmFyIHN0YXRlID0ge1xuICAgICAgZmFjZVNpemU6IGZhY2VTaXplLFxuICAgICAgaXNEcmFnZ2luZzogaXNEcmFnZ2luZyxcbiAgICAgIGlzSG9yaXpvbnRhbDogaXNIb3Jpem9udGFsLFxuICAgICAgcG9zaXRpb246IHBvc2l0aW9uLFxuICAgICAgc2NhbGU6IHNjYWxlLFxuICAgICAgc2Nyb2xsYWJsZTogc2Nyb2xsYWJsZVxuICAgIH07XG5cbiAgICAvLyBjYWNoZSB0aGUgc3RhdGUgZm9yIGxhdGVyIHVzZS5cbiAgICB0aGlzLl9zdGF0ZUtleSA9IHN0YXRlS2V5O1xuICAgIHRoaXMuX3N0YXRlRm9yS2V5ID0gc3RhdGU7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9LFxuXG4gIF9vbldoZWVsWTogZnVuY3Rpb24gX29uV2hlZWxZKCAvKm51bWJlciovZGVsdGFYLCAvKm51bWJlciovZGVsdGFZKSB7XG4gICAgdGhpcy5fb25XaGVlbChkZWx0YVkpO1xuICB9LFxuXG4gIF9vbldoZWVsWDogZnVuY3Rpb24gX29uV2hlZWxYKCAvKm51bWJlciovZGVsdGFYLCAvKm51bWJlciovZGVsdGFZKSB7XG4gICAgdGhpcy5fb25XaGVlbChkZWx0YVgpO1xuICB9LFxuXG4gIF9vbldoZWVsOiBmdW5jdGlvbiBfb25XaGVlbCggLypudW1iZXIqL2RlbHRhKSB7XG4gICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcblxuICAgIC8vIFRoZSBtb3VzZSBtYXkgbW92ZSBmYXN0ZXIgdGhlbiB0aGUgYW5pbWF0aW9uIGZyYW1lIGRvZXMuXG4gICAgLy8gVXNlIGByZXF1ZXN0QW5pbWF0aW9uRnJhbWVgIHRvIGF2b2lkIG92ZXItdXBkYXRpbmcuXG4gICAgdGhpcy5fc2V0TmV4dFN0YXRlKHRoaXMuX2NhbGN1bGF0ZVN0YXRlKHRoaXMuc3RhdGUucG9zaXRpb24gKyBkZWx0YSwgcHJvcHMuc2l6ZSwgcHJvcHMuY29udGVudFNpemUsIHByb3BzLm9yaWVudGF0aW9uKSk7XG4gIH0sXG5cbiAgX29uTW91c2VEb3duOiBmdW5jdGlvbiBfb25Nb3VzZURvd24oIC8qb2JqZWN0Ki9ldmVudCkge1xuICAgIHZhciBuZXh0U3RhdGU7XG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0ICE9PSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLnJlZnMuZmFjZSkpIHtcbiAgICAgIC8vIEJvdGggYG9mZnNldFhgIGFuZCBgbGF5ZXJYYCBhcmUgbm9uLXN0YW5kYXJkIERPTSBwcm9wZXJ0eSBidXQgdGhleSBhcmVcbiAgICAgIC8vIG1hZ2ljYWxseSBhdmFpbGFibGUgZm9yIGJyb3dzZXJzIHNvbWVob3cuXG4gICAgICB2YXIgbmF0aXZlRXZlbnQgPSBldmVudC5uYXRpdmVFdmVudDtcbiAgICAgIHZhciBwb3NpdGlvbiA9IHRoaXMuc3RhdGUuaXNIb3Jpem9udGFsID8gbmF0aXZlRXZlbnQub2Zmc2V0WCB8fCBuYXRpdmVFdmVudC5sYXllclggOiBuYXRpdmVFdmVudC5vZmZzZXRZIHx8IG5hdGl2ZUV2ZW50LmxheWVyWTtcblxuICAgICAgLy8gTW91c2VEb3duIG9uIHRoZSBzY3JvbGwtdHJhY2sgZGlyZWN0bHksIG1vdmUgdGhlIGNlbnRlciBvZiB0aGVcbiAgICAgIC8vIHNjcm9sbC1mYWNlIHRvIHRoZSBtb3VzZSBwb3NpdGlvbi5cbiAgICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICBwb3NpdGlvbiAvPSB0aGlzLnN0YXRlLnNjYWxlO1xuICAgICAgbmV4dFN0YXRlID0gdGhpcy5fY2FsY3VsYXRlU3RhdGUocG9zaXRpb24gLSB0aGlzLnN0YXRlLmZhY2VTaXplICogMC41IC8gdGhpcy5zdGF0ZS5zY2FsZSwgcHJvcHMuc2l6ZSwgcHJvcHMuY29udGVudFNpemUsIHByb3BzLm9yaWVudGF0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV4dFN0YXRlID0ge307XG4gICAgfVxuXG4gICAgbmV4dFN0YXRlLmZvY3VzZWQgPSB0cnVlO1xuICAgIHRoaXMuX3NldE5leHRTdGF0ZShuZXh0U3RhdGUpO1xuXG4gICAgdGhpcy5fbW91c2VNb3ZlVHJhY2tlci5jYXB0dXJlTW91c2VNb3ZlcyhldmVudCk7XG4gICAgLy8gRm9jdXMgdGhlIG5vZGUgc28gaXQgbWF5IHJlY2VpdmUga2V5Ym9hcmQgZXZlbnQuXG4gICAgUmVhY3RET00uZmluZERPTU5vZGUodGhpcykuZm9jdXMoKTtcbiAgfSxcblxuICBfb25Nb3VzZU1vdmU6IGZ1bmN0aW9uIF9vbk1vdXNlTW92ZSggLypudW1iZXIqL2RlbHRhWCwgLypudW1iZXIqL2RlbHRhWSkge1xuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGRlbHRhID0gdGhpcy5zdGF0ZS5pc0hvcml6b250YWwgPyBkZWx0YVggOiBkZWx0YVk7XG4gICAgZGVsdGEgLz0gdGhpcy5zdGF0ZS5zY2FsZTtcblxuICAgIHRoaXMuX3NldE5leHRTdGF0ZSh0aGlzLl9jYWxjdWxhdGVTdGF0ZSh0aGlzLnN0YXRlLnBvc2l0aW9uICsgZGVsdGEsIHByb3BzLnNpemUsIHByb3BzLmNvbnRlbnRTaXplLCBwcm9wcy5vcmllbnRhdGlvbikpO1xuICB9LFxuXG4gIF9vbk1vdXNlTW92ZUVuZDogZnVuY3Rpb24gX29uTW91c2VNb3ZlRW5kKCkge1xuICAgIHRoaXMuX25leHRTdGF0ZSA9IG51bGw7XG4gICAgdGhpcy5fbW91c2VNb3ZlVHJhY2tlci5yZWxlYXNlTW91c2VNb3ZlcygpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpc0RyYWdnaW5nOiBmYWxzZSB9KTtcbiAgfSxcblxuICBfb25LZXlEb3duOiBmdW5jdGlvbiBfb25LZXlEb3duKCAvKm9iamVjdCovZXZlbnQpIHtcbiAgICB2YXIga2V5Q29kZSA9IGV2ZW50LmtleUNvZGU7XG5cbiAgICBpZiAoa2V5Q29kZSA9PT0gS2V5cy5UQUIpIHtcbiAgICAgIC8vIExldCBmb2N1cyBtb3ZlIG9mZiB0aGUgc2Nyb2xsYmFyLlxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBkaXN0YW5jZSA9IEtFWUJPQVJEX1NDUk9MTF9BTU9VTlQ7XG4gICAgdmFyIGRpcmVjdGlvbiA9IDA7XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5pc0hvcml6b250YWwpIHtcbiAgICAgIHN3aXRjaCAoa2V5Q29kZSkge1xuICAgICAgICBjYXNlIEtleXMuSE9NRTpcbiAgICAgICAgICBkaXJlY3Rpb24gPSAtMTtcbiAgICAgICAgICBkaXN0YW5jZSA9IHRoaXMucHJvcHMuY29udGVudFNpemU7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBLZXlzLkxFRlQ6XG4gICAgICAgICAgZGlyZWN0aW9uID0gLTE7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBLZXlzLlJJR0hUOlxuICAgICAgICAgIGRpcmVjdGlvbiA9IDE7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLnN0YXRlLmlzSG9yaXpvbnRhbCkge1xuICAgICAgc3dpdGNoIChrZXlDb2RlKSB7XG4gICAgICAgIGNhc2UgS2V5cy5TUEFDRTpcbiAgICAgICAgICBpZiAoZXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9IC0xO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkaXJlY3Rpb24gPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIEtleXMuSE9NRTpcbiAgICAgICAgICBkaXJlY3Rpb24gPSAtMTtcbiAgICAgICAgICBkaXN0YW5jZSA9IHRoaXMucHJvcHMuY29udGVudFNpemU7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBLZXlzLlVQOlxuICAgICAgICAgIGRpcmVjdGlvbiA9IC0xO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgS2V5cy5ET1dOOlxuICAgICAgICAgIGRpcmVjdGlvbiA9IDE7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBLZXlzLlBBR0VfVVA6XG4gICAgICAgICAgZGlyZWN0aW9uID0gLTE7XG4gICAgICAgICAgZGlzdGFuY2UgPSB0aGlzLnByb3BzLnNpemU7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBLZXlzLlBBR0VfRE9XTjpcbiAgICAgICAgICBkaXJlY3Rpb24gPSAxO1xuICAgICAgICAgIGRpc3RhbmNlID0gdGhpcy5wcm9wcy5zaXplO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHRoaXMuX3NldE5leHRTdGF0ZSh0aGlzLl9jYWxjdWxhdGVTdGF0ZSh0aGlzLnN0YXRlLnBvc2l0aW9uICsgZGlzdGFuY2UgKiBkaXJlY3Rpb24sIHByb3BzLnNpemUsIHByb3BzLmNvbnRlbnRTaXplLCBwcm9wcy5vcmllbnRhdGlvbikpO1xuICB9LFxuXG4gIF9vbkZvY3VzOiBmdW5jdGlvbiBfb25Gb2N1cygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGZvY3VzZWQ6IHRydWVcbiAgICB9KTtcbiAgfSxcblxuICBfb25CbHVyOiBmdW5jdGlvbiBfb25CbHVyKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZm9jdXNlZDogZmFsc2VcbiAgICB9KTtcbiAgfSxcblxuICBfYmx1cjogZnVuY3Rpb24gX2JsdXIoKSB7XG4gICAgaWYgKHRoaXMuaXNNb3VudGVkKCkpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuX29uQmx1cigpO1xuICAgICAgICBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKS5ibHVyKCk7XG4gICAgICB9IGNhdGNoIChvb3BzKSB7XG4gICAgICAgIC8vIHBhc3NcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgX3NldE5leHRTdGF0ZTogZnVuY3Rpb24gX3NldE5leHRTdGF0ZSggLypvYmplY3QqL25leHRTdGF0ZSwgLyo/b2JqZWN0Ki9wcm9wcykge1xuICAgIHByb3BzID0gcHJvcHMgfHwgdGhpcy5wcm9wcztcbiAgICB2YXIgY29udHJvbGxlZFBvc2l0aW9uID0gcHJvcHMucG9zaXRpb247XG4gICAgdmFyIHdpbGxTY3JvbGwgPSB0aGlzLnN0YXRlLnBvc2l0aW9uICE9PSBuZXh0U3RhdGUucG9zaXRpb247XG4gICAgaWYgKGNvbnRyb2xsZWRQb3NpdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgY2FsbGJhY2sgPSB3aWxsU2Nyb2xsID8gdGhpcy5fZGlkU2Nyb2xsIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5zZXRTdGF0ZShuZXh0U3RhdGUsIGNhbGxiYWNrKTtcbiAgICB9IGVsc2UgaWYgKGNvbnRyb2xsZWRQb3NpdGlvbiA9PT0gbmV4dFN0YXRlLnBvc2l0aW9uKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKG5leHRTdGF0ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFNjcm9sbGluZyBpcyBjb250cm9sbGVkLiBEb24ndCB1cGRhdGUgdGhlIHN0YXRlIGFuZCBsZXQgdGhlIG93bmVyXG4gICAgICAvLyB0byB1cGRhdGUgdGhlIHNjcm9sbGJhciBpbnN0ZWFkLlxuICAgICAgaWYgKG5leHRTdGF0ZS5wb3NpdGlvbiAhPT0gdW5kZWZpbmVkICYmIG5leHRTdGF0ZS5wb3NpdGlvbiAhPT0gdGhpcy5zdGF0ZS5wb3NpdGlvbikge1xuICAgICAgICB0aGlzLnByb3BzLm9uU2Nyb2xsKG5leHRTdGF0ZS5wb3NpdGlvbik7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHdpbGxTY3JvbGwgJiYgX2xhc3RTY3JvbGxlZFNjcm9sbGJhciAhPT0gdGhpcykge1xuICAgICAgX2xhc3RTY3JvbGxlZFNjcm9sbGJhciAmJiBfbGFzdFNjcm9sbGVkU2Nyb2xsYmFyLl9ibHVyKCk7XG4gICAgICBfbGFzdFNjcm9sbGVkU2Nyb2xsYmFyID0gdGhpcztcbiAgICB9XG4gIH0sXG5cbiAgX2RpZFNjcm9sbDogZnVuY3Rpb24gX2RpZFNjcm9sbCgpIHtcbiAgICB0aGlzLnByb3BzLm9uU2Nyb2xsKHRoaXMuc3RhdGUucG9zaXRpb24pO1xuICB9XG59KTtcblxuU2Nyb2xsYmFyLktFWUJPQVJEX1NDUk9MTF9BTU9VTlQgPSBLRVlCT0FSRF9TQ1JPTExfQU1PVU5UO1xuU2Nyb2xsYmFyLlNJWkUgPSBwYXJzZUludChjc3NWYXIoJ3Njcm9sbGJhci1zaXplJyksIDEwKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTY3JvbGxiYXI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9TY3JvbGxiYXIucmVhY3QuanNcbiAqKiBtb2R1bGUgaWQgPSA0MzZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogVGhpcyBjbGFzcyBsaXN0ZW5zIHRvIGV2ZW50cyBvbiB0aGUgZG9jdW1lbnQgYW5kIHRoZW4gdXBkYXRlcyBhIHJlYWN0XG4gKiBjb21wb25lbnQgdGhyb3VnaCBjYWxsYmFja3MuXG4gKiBQbGVhc2Ugbm90ZSB0aGF0IGNhcHR1cmVNb3VzZU1vdmUgbXVzdCBiZSBjYWxsZWQgaW5cbiAqIG9yZGVyIHRvIGluaXRpYWxpemUgbGlzdGVuZXJzIG9uIG1vdXNlbW92ZSBhbmQgbW91c2V1cC5cbiAqIHJlbGVhc2VNb3VzZU1vdmUgbXVzdCBiZSBjYWxsZWQgdG8gcmVtb3ZlIHRoZW0uIEl0IGlzIGltcG9ydGFudCB0b1xuICogY2FsbCByZWxlYXNlTW91c2VNb3ZlcyBzaW5jZSBtb3VzZW1vdmUgaXMgZXhwZW5zaXZlIHRvIGxpc3RlbiB0by5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgRE9NTW91c2VNb3ZlVHJhY2tlclxuICogQHR5cGVjaGVja3NcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG52YXIgRXZlbnRMaXN0ZW5lciA9IHJlcXVpcmUoJy4vRXZlbnRMaXN0ZW5lcicpO1xuXG52YXIgY2FuY2VsQW5pbWF0aW9uRnJhbWVQb2x5ZmlsbCA9IHJlcXVpcmUoJy4vY2FuY2VsQW5pbWF0aW9uRnJhbWVQb2x5ZmlsbCcpO1xudmFyIHJlcXVlc3RBbmltYXRpb25GcmFtZVBvbHlmaWxsID0gcmVxdWlyZSgnLi9yZXF1ZXN0QW5pbWF0aW9uRnJhbWVQb2x5ZmlsbCcpO1xuXG52YXIgRE9NTW91c2VNb3ZlVHJhY2tlciA9IChmdW5jdGlvbiAoKSB7XG4gIC8qKlxuICAgKiBvbk1vdmUgaXMgdGhlIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBjYWxsZWQgb24gZXZlcnkgbW91c2UgbW92ZS5cbiAgICogb25Nb3ZlRW5kIGlzIGNhbGxlZCBvbiBtb3VzZSB1cCB3aGVuIG1vdmVtZW50IGhhcyBlbmRlZC5cbiAgICovXG5cbiAgZnVuY3Rpb24gRE9NTW91c2VNb3ZlVHJhY2tlcihcbiAgLypmdW5jdGlvbiovb25Nb3ZlLFxuICAvKmZ1bmN0aW9uKi9vbk1vdmVFbmQsXG4gIC8qRE9NRWxlbWVudCovZG9tTm9kZSkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBET01Nb3VzZU1vdmVUcmFja2VyKTtcblxuICAgIHRoaXMuX2lzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgICB0aGlzLl9hbmltYXRpb25GcmFtZUlEID0gbnVsbDtcbiAgICB0aGlzLl9kb21Ob2RlID0gZG9tTm9kZTtcbiAgICB0aGlzLl9vbk1vdmUgPSBvbk1vdmU7XG4gICAgdGhpcy5fb25Nb3ZlRW5kID0gb25Nb3ZlRW5kO1xuICAgIHRoaXMuX29uTW91c2VNb3ZlID0gdGhpcy5fb25Nb3VzZU1vdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbk1vdXNlVXAgPSB0aGlzLl9vbk1vdXNlVXAuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9kaWRNb3VzZU1vdmUgPSB0aGlzLl9kaWRNb3VzZU1vdmUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGlzIHRvIHNldCB1cCB0aGUgbGlzdGVuZXJzIGZvciBsaXN0ZW5pbmcgdG8gbW91c2UgbW92ZVxuICAgKiBhbmQgbW91c2UgdXAgc2lnbmFsaW5nIHRoZSBtb3ZlbWVudCBoYXMgZW5kZWQuIFBsZWFzZSBub3RlIHRoYXQgdGhlc2VcbiAgICogbGlzdGVuZXJzIGFyZSBhZGRlZCBhdCB0aGUgZG9jdW1lbnQuYm9keSBsZXZlbC4gSXQgdGFrZXMgaW4gYW4gZXZlbnRcbiAgICogaW4gb3JkZXIgdG8gZ3JhYiBpbml0YWwgc3RhdGUuXG4gICAqL1xuXG4gIF9jcmVhdGVDbGFzcyhET01Nb3VzZU1vdmVUcmFja2VyLCBbe1xuICAgIGtleTogJ2NhcHR1cmVNb3VzZU1vdmVzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2FwdHVyZU1vdXNlTW92ZXMoIC8qb2JqZWN0Ki9ldmVudCkge1xuICAgICAgaWYgKCF0aGlzLl9ldmVudE1vdmVUb2tlbiAmJiAhdGhpcy5fZXZlbnRVcFRva2VuKSB7XG4gICAgICAgIHRoaXMuX2V2ZW50TW92ZVRva2VuID0gRXZlbnRMaXN0ZW5lci5saXN0ZW4odGhpcy5fZG9tTm9kZSwgJ21vdXNlbW92ZScsIHRoaXMuX29uTW91c2VNb3ZlKTtcbiAgICAgICAgdGhpcy5fZXZlbnRVcFRva2VuID0gRXZlbnRMaXN0ZW5lci5saXN0ZW4odGhpcy5fZG9tTm9kZSwgJ21vdXNldXAnLCB0aGlzLl9vbk1vdXNlVXApO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuX2lzRHJhZ2dpbmcpIHtcbiAgICAgICAgdGhpcy5fZGVsdGFYID0gMDtcbiAgICAgICAgdGhpcy5fZGVsdGFZID0gMDtcbiAgICAgICAgdGhpcy5faXNEcmFnZ2luZyA9IHRydWU7XG4gICAgICAgIHRoaXMuX3ggPSBldmVudC5jbGllbnRYO1xuICAgICAgICB0aGlzLl95ID0gZXZlbnQuY2xpZW50WTtcbiAgICAgIH1cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlc2UgcmVsZWFzZXMgYWxsIG9mIHRoZSBsaXN0ZW5lcnMgb24gZG9jdW1lbnQuYm9keS5cbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogJ3JlbGVhc2VNb3VzZU1vdmVzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVsZWFzZU1vdXNlTW92ZXMoKSB7XG4gICAgICBpZiAodGhpcy5fZXZlbnRNb3ZlVG9rZW4gJiYgdGhpcy5fZXZlbnRVcFRva2VuKSB7XG4gICAgICAgIHRoaXMuX2V2ZW50TW92ZVRva2VuLnJlbW92ZSgpO1xuICAgICAgICB0aGlzLl9ldmVudE1vdmVUb2tlbiA9IG51bGw7XG4gICAgICAgIHRoaXMuX2V2ZW50VXBUb2tlbi5yZW1vdmUoKTtcbiAgICAgICAgdGhpcy5fZXZlbnRVcFRva2VuID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2FuaW1hdGlvbkZyYW1lSUQgIT09IG51bGwpIHtcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWVQb2x5ZmlsbCh0aGlzLl9hbmltYXRpb25GcmFtZUlEKTtcbiAgICAgICAgdGhpcy5fYW5pbWF0aW9uRnJhbWVJRCA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9pc0RyYWdnaW5nKSB7XG4gICAgICAgIHRoaXMuX2lzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5feCA9IG51bGw7XG4gICAgICAgIHRoaXMuX3kgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgd2hldGhlciBvciBub3QgaWYgdGhlIG1vdXNlIG1vdmVtZW50IGlzIGJlaW5nIHRyYWNrZWQuXG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6ICdpc0RyYWdnaW5nJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNEcmFnZ2luZygpIC8qYm9vbGVhbiove1xuICAgICAgcmV0dXJuIHRoaXMuX2lzRHJhZ2dpbmc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbHMgb25Nb3ZlIHBhc3NlZCBpbnRvIGNvbnN0cnVjdG9yIGFuZCB1cGRhdGVzIGludGVybmFsIHN0YXRlLlxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiAnX29uTW91c2VNb3ZlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX29uTW91c2VNb3ZlKCAvKm9iamVjdCovZXZlbnQpIHtcbiAgICAgIHZhciB4ID0gZXZlbnQuY2xpZW50WDtcbiAgICAgIHZhciB5ID0gZXZlbnQuY2xpZW50WTtcblxuICAgICAgdGhpcy5fZGVsdGFYICs9IHggLSB0aGlzLl94O1xuICAgICAgdGhpcy5fZGVsdGFZICs9IHkgLSB0aGlzLl95O1xuXG4gICAgICBpZiAodGhpcy5fYW5pbWF0aW9uRnJhbWVJRCA9PT0gbnVsbCkge1xuICAgICAgICAvLyBUaGUgbW91c2UgbWF5IG1vdmUgZmFzdGVyIHRoZW4gdGhlIGFuaW1hdGlvbiBmcmFtZSBkb2VzLlxuICAgICAgICAvLyBVc2UgYHJlcXVlc3RBbmltYXRpb25GcmFtZVBvbHlmaWxsYCB0byBhdm9pZCBvdmVyLXVwZGF0aW5nLlxuICAgICAgICB0aGlzLl9hbmltYXRpb25GcmFtZUlEID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lUG9seWZpbGwodGhpcy5fZGlkTW91c2VNb3ZlKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5feCA9IHg7XG4gICAgICB0aGlzLl95ID0geTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnX2RpZE1vdXNlTW92ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9kaWRNb3VzZU1vdmUoKSB7XG4gICAgICB0aGlzLl9hbmltYXRpb25GcmFtZUlEID0gbnVsbDtcbiAgICAgIHRoaXMuX29uTW92ZSh0aGlzLl9kZWx0YVgsIHRoaXMuX2RlbHRhWSk7XG4gICAgICB0aGlzLl9kZWx0YVggPSAwO1xuICAgICAgdGhpcy5fZGVsdGFZID0gMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxscyBvbk1vdmVFbmQgcGFzc2VkIGludG8gY29uc3RydWN0b3IgYW5kIHVwZGF0ZXMgaW50ZXJuYWwgc3RhdGUuXG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6ICdfb25Nb3VzZVVwJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX29uTW91c2VVcCgpIHtcbiAgICAgIGlmICh0aGlzLl9hbmltYXRpb25GcmFtZUlEKSB7XG4gICAgICAgIHRoaXMuX2RpZE1vdXNlTW92ZSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5fb25Nb3ZlRW5kKCk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIERPTU1vdXNlTW92ZVRyYWNrZXI7XG59KSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERPTU1vdXNlTW92ZVRyYWNrZXI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9ET01Nb3VzZU1vdmVUcmFja2VyLmpzXG4gKiogbW9kdWxlIGlkID0gNDM3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBFdmVudExpc3RlbmVyXG4gKiBAdHlwZWNoZWNrc1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGVtcHR5RnVuY3Rpb24gPSByZXF1aXJlKCcuL2VtcHR5RnVuY3Rpb24nKTtcblxuLyoqXG4gKiBVcHN0cmVhbSB2ZXJzaW9uIG9mIGV2ZW50IGxpc3RlbmVyLiBEb2VzIG5vdCB0YWtlIGludG8gYWNjb3VudCBzcGVjaWZpY1xuICogbmF0dXJlIG9mIHBsYXRmb3JtLlxuICovXG52YXIgRXZlbnRMaXN0ZW5lciA9IHtcbiAgLyoqXG4gICAqIExpc3RlbiB0byBET00gZXZlbnRzIGR1cmluZyB0aGUgYnViYmxlIHBoYXNlLlxuICAgKlxuICAgKiBAcGFyYW0ge0RPTUV2ZW50VGFyZ2V0fSB0YXJnZXQgRE9NIGVsZW1lbnQgdG8gcmVnaXN0ZXIgbGlzdGVuZXIgb24uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFR5cGUgRXZlbnQgdHlwZSwgZS5nLiAnY2xpY2snIG9yICdtb3VzZW92ZXInLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsYmFjayBmdW5jdGlvbi5cbiAgICogQHJldHVybiB7b2JqZWN0fSBPYmplY3Qgd2l0aCBhIGByZW1vdmVgIG1ldGhvZC5cbiAgICovXG4gIGxpc3RlbjogZnVuY3Rpb24gbGlzdGVuKHRhcmdldCwgZXZlbnRUeXBlLCBjYWxsYmFjaykge1xuICAgIGlmICh0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBjYWxsYmFjaywgZmFsc2UpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICAgICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBjYWxsYmFjaywgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAodGFyZ2V0LmF0dGFjaEV2ZW50KSB7XG4gICAgICB0YXJnZXQuYXR0YWNoRXZlbnQoJ29uJyArIGV2ZW50VHlwZSwgY2FsbGJhY2spO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICAgICAgdGFyZ2V0LmRldGFjaEV2ZW50KCdvbicgKyBldmVudFR5cGUsIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIExpc3RlbiB0byBET00gZXZlbnRzIGR1cmluZyB0aGUgY2FwdHVyZSBwaGFzZS5cbiAgICpcbiAgICogQHBhcmFtIHtET01FdmVudFRhcmdldH0gdGFyZ2V0IERPTSBlbGVtZW50IHRvIHJlZ2lzdGVyIGxpc3RlbmVyIG9uLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRUeXBlIEV2ZW50IHR5cGUsIGUuZy4gJ2NsaWNrJyBvciAnbW91c2VvdmVyJy5cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGJhY2sgZnVuY3Rpb24uXG4gICAqIEByZXR1cm4ge29iamVjdH0gT2JqZWN0IHdpdGggYSBgcmVtb3ZlYCBtZXRob2QuXG4gICAqL1xuICBjYXB0dXJlOiBmdW5jdGlvbiBjYXB0dXJlKHRhcmdldCwgZXZlbnRUeXBlLCBjYWxsYmFjaykge1xuICAgIGlmICh0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBjYWxsYmFjaywgdHJ1ZSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgICAgICB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGNhbGxiYWNrLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignQXR0ZW1wdGVkIHRvIGxpc3RlbiB0byBldmVudHMgZHVyaW5nIHRoZSBjYXB0dXJlIHBoYXNlIG9uIGEgJyArICdicm93c2VyIHRoYXQgZG9lcyBub3Qgc3VwcG9ydCB0aGUgY2FwdHVyZSBwaGFzZS4gWW91ciBhcHBsaWNhdGlvbiAnICsgJ3dpbGwgbm90IHJlY2VpdmUgc29tZSBldmVudHMuJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICByZW1vdmU6IGVtcHR5RnVuY3Rpb25cbiAgICAgIH07XG4gICAgfVxuICB9LFxuXG4gIHJlZ2lzdGVyRGVmYXVsdDogZnVuY3Rpb24gcmVnaXN0ZXJEZWZhdWx0KCkge31cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRXZlbnRMaXN0ZW5lcjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL0V2ZW50TGlzdGVuZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA0MzhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIGNhbmNlbEFuaW1hdGlvbkZyYW1lUG9seWZpbGxcbiAqL1xuXG4vKipcbiAqIEhlcmUgaXMgdGhlIG5hdGl2ZSBhbmQgcG9seWZpbGwgdmVyc2lvbiBvZiBjYW5jZWxBbmltYXRpb25GcmFtZS5cbiAqIFBsZWFzZSBkb24ndCB1c2UgaXQgZGlyZWN0bHkgYW5kIHVzZSBjYW5jZWxBbmltYXRpb25GcmFtZSBtb2R1bGUgaW5zdGVhZC5cbiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBjYW5jZWxBbmltYXRpb25GcmFtZSA9IGdsb2JhbC5jYW5jZWxBbmltYXRpb25GcmFtZSB8fCBnbG9iYWwud2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWUgfHwgZ2xvYmFsLm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8IGdsb2JhbC5vQ2FuY2VsQW5pbWF0aW9uRnJhbWUgfHwgZ2xvYmFsLm1zQ2FuY2VsQW5pbWF0aW9uRnJhbWUgfHwgZ2xvYmFsLmNsZWFyVGltZW91dDtcblxubW9kdWxlLmV4cG9ydHMgPSBjYW5jZWxBbmltYXRpb25GcmFtZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL2NhbmNlbEFuaW1hdGlvbkZyYW1lUG9seWZpbGwuanNcbiAqKiBtb2R1bGUgaWQgPSA0MzlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIEtleXNcbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIEJBQ0tTUEFDRTogOCxcbiAgVEFCOiA5LFxuICBSRVRVUk46IDEzLFxuICBBTFQ6IDE4LFxuICBFU0M6IDI3LFxuICBTUEFDRTogMzIsXG4gIFBBR0VfVVA6IDMzLFxuICBQQUdFX0RPV046IDM0LFxuICBFTkQ6IDM1LFxuICBIT01FOiAzNixcbiAgTEVGVDogMzcsXG4gIFVQOiAzOCxcbiAgUklHSFQ6IDM5LFxuICBET1dOOiA0MCxcbiAgREVMRVRFOiA0NixcbiAgQ09NTUE6IDE4OCxcbiAgUEVSSU9EOiAxOTAsXG4gIEE6IDY1LFxuICBaOiA5MCxcbiAgWkVSTzogNDgsXG4gIE5VTVBBRF8wOiA5NixcbiAgTlVNUEFEXzk6IDEwNVxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL0tleXMuanNcbiAqKiBtb2R1bGUgaWQgPSA0NDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIFJlYWN0RE9NXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvUmVhY3RET00uanNcbiAqKiBtb2R1bGUgaWQgPSA0NDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIGNzc1ZhclxuICogQHR5cGVjaGVja3NcbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIENTU19WQVJTID0ge1xuICAnc2Nyb2xsYmFyLWZhY2UtYWN0aXZlLWNvbG9yJzogJyM3ZDdkN2QnLFxuICAnc2Nyb2xsYmFyLWZhY2UtY29sb3InOiAnI2MyYzJjMicsXG4gICdzY3JvbGxiYXItZmFjZS1tYXJnaW4nOiAnNHB4JyxcbiAgJ3Njcm9sbGJhci1mYWNlLXJhZGl1cyc6ICc2cHgnLFxuICAnc2Nyb2xsYmFyLXNpemUnOiAnMTVweCcsXG4gICdzY3JvbGxiYXItc2l6ZS1sYXJnZSc6ICcxN3B4JyxcbiAgJ3Njcm9sbGJhci10cmFjay1jb2xvcic6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCknLFxuICAnZmJ1aS13aGl0ZSc6ICcjZmZmJyxcbiAgJ2ZidWktZGVza3RvcC1iYWNrZ3JvdW5kLWxpZ2h0JzogJyNmNmY3ZjgnXG59O1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKi9cbmZ1bmN0aW9uIGNzc1ZhcihuYW1lKSB7XG4gIGlmIChDU1NfVkFSUy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgIHJldHVybiBDU1NfVkFSU1tuYW1lXTtcbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcignY3NzVmFyJyArICcoXCInICsgbmFtZSArICdcIik6IFVuZXhwZWN0ZWQgY2xhc3MgdHJhbnNmb3JtYXRpb24uJyk7XG59XG5cbmNzc1Zhci5DU1NfVkFSUyA9IENTU19WQVJTO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNzc1ZhcjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL2Nzc1Zhci5qc1xuICoqIG1vZHVsZSBpZCA9IDQ0MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgY3hcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBzbGFzaFJlcGxhY2VSZWdleCA9IC9cXC8vZztcbnZhciBjYWNoZSA9IHt9O1xuXG5mdW5jdGlvbiBnZXRDbGFzc05hbWUoY2xhc3NOYW1lKSB7XG4gIGlmIChjYWNoZVtjbGFzc05hbWVdKSB7XG4gICAgcmV0dXJuIGNhY2hlW2NsYXNzTmFtZV07XG4gIH1cblxuICBjYWNoZVtjbGFzc05hbWVdID0gY2xhc3NOYW1lLnJlcGxhY2Uoc2xhc2hSZXBsYWNlUmVnZXgsICdfJyk7XG4gIHJldHVybiBjYWNoZVtjbGFzc05hbWVdO1xufVxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBtYXJrIHN0cmluZyBsaXRlcmFscyByZXByZXNlbnRpbmcgQ1NTIGNsYXNzIG5hbWVzXG4gKiBzbyB0aGF0IHRoZXkgY2FuIGJlIHRyYW5zZm9ybWVkIHN0YXRpY2FsbHkuIFRoaXMgYWxsb3dzIGZvciBtb2R1bGFyaXphdGlvblxuICogYW5kIG1pbmlmaWNhdGlvbiBvZiBDU1MgY2xhc3MgbmFtZXMuXG4gKlxuICogSW4gc3RhdGljX3Vwc3RyZWFtLCB0aGlzIGZ1bmN0aW9uIGlzIGFjdHVhbGx5IGltcGxlbWVudGVkLCBidXQgaXQgc2hvdWxkXG4gKiBldmVudHVhbGx5IGJlIHJlcGxhY2VkIHdpdGggc29tZXRoaW5nIG1vcmUgZGVzY3JpcHRpdmUsIGFuZCB0aGUgdHJhbnNmb3JtXG4gKiB0aGF0IGlzIHVzZWQgaW4gdGhlIG1haW4gc3RhY2sgc2hvdWxkIGJlIHBvcnRlZCBmb3IgdXNlIGVsc2V3aGVyZS5cbiAqXG4gKiBAcGFyYW0gc3RyaW5nfG9iamVjdCBjbGFzc05hbWUgdG8gbW9kdWxhcml6ZSwgb3IgYW4gb2JqZWN0IG9mIGtleS92YWx1ZXMuXG4gKiAgICAgICAgICAgICAgICAgICAgICBJbiB0aGUgb2JqZWN0IGNhc2UsIHRoZSB2YWx1ZXMgYXJlIGNvbmRpdGlvbnMgdGhhdFxuICogICAgICAgICAgICAgICAgICAgICAgZGV0ZXJtaW5lIGlmIHRoZSBjbGFzc05hbWUga2V5cyBzaG91bGQgYmUgaW5jbHVkZWQuXG4gKiBAcGFyYW0gW3N0cmluZyAuLi5dICBWYXJpYWJsZSBsaXN0IG9mIGNsYXNzTmFtZXMgaW4gdGhlIHN0cmluZyBjYXNlLlxuICogQHJldHVybiBzdHJpbmcgICAgICAgUmVuZGVyYWJsZSBzcGFjZS1zZXBhcmF0ZWQgQ1NTIGNsYXNzTmFtZS5cbiAqL1xuZnVuY3Rpb24gY3goY2xhc3NOYW1lcykge1xuICB2YXIgY2xhc3NOYW1lc0FycmF5O1xuICBpZiAodHlwZW9mIGNsYXNzTmFtZXMgPT0gJ29iamVjdCcpIHtcbiAgICBjbGFzc05hbWVzQXJyYXkgPSBPYmplY3Qua2V5cyhjbGFzc05hbWVzKS5maWx0ZXIoZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICAgICAgcmV0dXJuIGNsYXNzTmFtZXNbY2xhc3NOYW1lXTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBjbGFzc05hbWVzQXJyYXkgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICB9XG5cbiAgcmV0dXJuIGNsYXNzTmFtZXNBcnJheS5tYXAoZ2V0Q2xhc3NOYW1lKS5qb2luKCcgJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3g7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9jeC5qc1xuICoqIG1vZHVsZSBpZCA9IDQ0M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgdHJhbnNsYXRlRE9NUG9zaXRpb25YWVxuICogQHR5cGVjaGVja3NcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBCcm93c2VyU3VwcG9ydENvcmUgPSByZXF1aXJlKCcuL0Jyb3dzZXJTdXBwb3J0Q29yZScpO1xuXG52YXIgZ2V0VmVuZG9yUHJlZml4ZWROYW1lID0gcmVxdWlyZSgnLi9nZXRWZW5kb3JQcmVmaXhlZE5hbWUnKTtcblxudmFyIFRSQU5TRk9STSA9IGdldFZlbmRvclByZWZpeGVkTmFtZSgndHJhbnNmb3JtJyk7XG52YXIgQkFDS0ZBQ0VfVklTSUJJTElUWSA9IGdldFZlbmRvclByZWZpeGVkTmFtZSgnYmFja2ZhY2VWaXNpYmlsaXR5Jyk7XG5cbnZhciB0cmFuc2xhdGVET01Qb3NpdGlvblhZID0gKGZ1bmN0aW9uICgpIHtcbiAgaWYgKEJyb3dzZXJTdXBwb3J0Q29yZS5oYXNDU1NUcmFuc2Zvcm1zKCkpIHtcbiAgICB2YXIgdWEgPSBnbG9iYWwud2luZG93ID8gZ2xvYmFsLndpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50IDogJ1VOS05PV04nO1xuICAgIHZhciBpc1NhZmFyaSA9IC9TYWZhcmlcXC8vLnRlc3QodWEpICYmICEvQ2hyb21lXFwvLy50ZXN0KHVhKTtcbiAgICAvLyBJdCBhcHBlYXJzIHRoYXQgU2FmYXJpIG1lc3NlcyB1cCB0aGUgY29tcG9zaXRpb24gb3JkZXJcbiAgICAvLyBvZiBHUFUtYWNjZWxlcmF0ZWQgbGF5ZXJzXG4gICAgLy8gKHNlZSBidWcgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTYxODI0KS5cbiAgICAvLyBVc2UgMkQgdHJhbnNsYXRpb24gaW5zdGVhZC5cbiAgICBpZiAoIWlzU2FmYXJpICYmIEJyb3dzZXJTdXBwb3J0Q29yZS5oYXNDU1MzRFRyYW5zZm9ybXMoKSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICggLypvYmplY3QqL3N0eWxlLCAvKm51bWJlcioveCwgLypudW1iZXIqL3kpIHtcbiAgICAgICAgc3R5bGVbVFJBTlNGT1JNXSA9ICd0cmFuc2xhdGUzZCgnICsgeCArICdweCwnICsgeSArICdweCwwKSc7XG4gICAgICAgIHN0eWxlW0JBQ0tGQUNFX1ZJU0lCSUxJVFldID0gJ2hpZGRlbic7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCAvKm9iamVjdCovc3R5bGUsIC8qbnVtYmVyKi94LCAvKm51bWJlcioveSkge1xuICAgICAgICBzdHlsZVtUUkFOU0ZPUk1dID0gJ3RyYW5zbGF0ZSgnICsgeCArICdweCwnICsgeSArICdweCknO1xuICAgICAgfTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICggLypvYmplY3QqL3N0eWxlLCAvKm51bWJlcioveCwgLypudW1iZXIqL3kpIHtcbiAgICAgIHN0eWxlLmxlZnQgPSB4ICsgJ3B4JztcbiAgICAgIHN0eWxlLnRvcCA9IHkgKyAncHgnO1xuICAgIH07XG4gIH1cbn0pKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gdHJhbnNsYXRlRE9NUG9zaXRpb25YWTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL3RyYW5zbGF0ZURPTVBvc2l0aW9uWFkuanNcbiAqKiBtb2R1bGUgaWQgPSA0NDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIEJyb3dzZXJTdXBwb3J0Q29yZVxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGdldFZlbmRvclByZWZpeGVkTmFtZSA9IHJlcXVpcmUoJy4vZ2V0VmVuZG9yUHJlZml4ZWROYW1lJyk7XG5cbnZhciBCcm93c2VyU3VwcG9ydENvcmUgPSB7XG4gIC8qKlxuICAgKiBAcmV0dXJuIHtib29sfSBUcnVlIGlmIGJyb3dzZXIgc3VwcG9ydHMgY3NzIGFuaW1hdGlvbnMuXG4gICAqL1xuICBoYXNDU1NBbmltYXRpb25zOiBmdW5jdGlvbiBoYXNDU1NBbmltYXRpb25zKCkge1xuICAgIHJldHVybiAhIWdldFZlbmRvclByZWZpeGVkTmFtZSgnYW5pbWF0aW9uTmFtZScpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtib29sfSBUcnVlIGlmIGJyb3dzZXIgc3VwcG9ydHMgY3NzIHRyYW5zZm9ybXMuXG4gICAqL1xuICBoYXNDU1NUcmFuc2Zvcm1zOiBmdW5jdGlvbiBoYXNDU1NUcmFuc2Zvcm1zKCkge1xuICAgIHJldHVybiAhIWdldFZlbmRvclByZWZpeGVkTmFtZSgndHJhbnNmb3JtJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge2Jvb2x9IFRydWUgaWYgYnJvd3NlciBzdXBwb3J0cyBjc3MgM2QgdHJhbnNmb3Jtcy5cbiAgICovXG4gIGhhc0NTUzNEVHJhbnNmb3JtczogZnVuY3Rpb24gaGFzQ1NTM0RUcmFuc2Zvcm1zKCkge1xuICAgIHJldHVybiAhIWdldFZlbmRvclByZWZpeGVkTmFtZSgncGVyc3BlY3RpdmUnKTtcbiAgfSxcblxuICAvKipcbiAgICogQHJldHVybiB7Ym9vbH0gVHJ1ZSBpZiBicm93c2VyIHN1cHBvcnRzIGNzcyB0cmFuc2l0aW9ucy5cbiAgICovXG4gIGhhc0NTU1RyYW5zaXRpb25zOiBmdW5jdGlvbiBoYXNDU1NUcmFuc2l0aW9ucygpIHtcbiAgICByZXR1cm4gISFnZXRWZW5kb3JQcmVmaXhlZE5hbWUoJ3RyYW5zaXRpb24nKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBCcm93c2VyU3VwcG9ydENvcmU7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9Ccm93c2VyU3VwcG9ydENvcmUuanNcbiAqKiBtb2R1bGUgaWQgPSA0NDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIGdldFZlbmRvclByZWZpeGVkTmFtZVxuICogQHR5cGVjaGVja3NcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBFeGVjdXRpb25FbnZpcm9ubWVudCA9IHJlcXVpcmUoJy4vRXhlY3V0aW9uRW52aXJvbm1lbnQnKTtcblxudmFyIGNhbWVsaXplID0gcmVxdWlyZSgnLi9jYW1lbGl6ZScpO1xudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJy4vaW52YXJpYW50Jyk7XG5cbnZhciBtZW1vaXplZCA9IHt9O1xudmFyIHByZWZpeGVzID0gWydXZWJraXQnLCAnbXMnLCAnTW96JywgJ08nXTtcbnZhciBwcmVmaXhSZWdleCA9IG5ldyBSZWdFeHAoJ14oJyArIHByZWZpeGVzLmpvaW4oJ3wnKSArICcpJyk7XG52YXIgdGVzdFN0eWxlID0gRXhlY3V0aW9uRW52aXJvbm1lbnQuY2FuVXNlRE9NID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jykuc3R5bGUgOiB7fTtcblxuZnVuY3Rpb24gZ2V0V2l0aFByZWZpeChuYW1lKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJlZml4ZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgcHJlZml4ZWROYW1lID0gcHJlZml4ZXNbaV0gKyBuYW1lO1xuICAgIGlmIChwcmVmaXhlZE5hbWUgaW4gdGVzdFN0eWxlKSB7XG4gICAgICByZXR1cm4gcHJlZml4ZWROYW1lO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcGVydHkgTmFtZSBvZiBhIGNzcyBwcm9wZXJ0eSB0byBjaGVjayBmb3IuXG4gKiBAcmV0dXJuIHs/c3RyaW5nfSBwcm9wZXJ0eSBuYW1lIHN1cHBvcnRlZCBpbiB0aGUgYnJvd3Nlciwgb3IgbnVsbCBpZiBub3RcbiAqIHN1cHBvcnRlZC5cbiAqL1xuZnVuY3Rpb24gZ2V0VmVuZG9yUHJlZml4ZWROYW1lKHByb3BlcnR5KSB7XG4gIHZhciBuYW1lID0gY2FtZWxpemUocHJvcGVydHkpO1xuICBpZiAobWVtb2l6ZWRbbmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBjYXBpdGFsaXplZE5hbWUgPSBuYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbmFtZS5zbGljZSgxKTtcbiAgICBpZiAocHJlZml4UmVnZXgudGVzdChjYXBpdGFsaXplZE5hbWUpKSB7XG4gICAgICBpbnZhcmlhbnQoZmFsc2UsICdnZXRWZW5kb3JQcmVmaXhlZE5hbWUgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIHVucHJlZml4ZWQnICsgJ0NTUyBwcm9wZXJ0eSBuYW1lcy4gSXQgd2FzIGNhbGxlZCB3aXRoICVzJywgcHJvcGVydHkpO1xuICAgIH1cbiAgICBtZW1vaXplZFtuYW1lXSA9IG5hbWUgaW4gdGVzdFN0eWxlID8gbmFtZSA6IGdldFdpdGhQcmVmaXgoY2FwaXRhbGl6ZWROYW1lKTtcbiAgfVxuICByZXR1cm4gbWVtb2l6ZWRbbmFtZV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VmVuZG9yUHJlZml4ZWROYW1lO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvZ2V0VmVuZG9yUHJlZml4ZWROYW1lLmpzXG4gKiogbW9kdWxlIGlkID0gNDQ2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBjYW1lbGl6ZVxuICogQHR5cGVjaGVja3NcbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIF9oeXBoZW5QYXR0ZXJuID0gLy0oLikvZztcblxuLyoqXG4gKiBDYW1lbGNhc2VzIGEgaHlwaGVuYXRlZCBzdHJpbmcsIGZvciBleGFtcGxlOlxuICpcbiAqICAgPiBjYW1lbGl6ZSgnYmFja2dyb3VuZC1jb2xvcicpXG4gKiAgIDwgXCJiYWNrZ3JvdW5kQ29sb3JcIlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmdcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gY2FtZWxpemUoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZShfaHlwaGVuUGF0dGVybiwgZnVuY3Rpb24gKF8sIGNoYXJhY3Rlcikge1xuICAgIHJldHVybiBjaGFyYWN0ZXIudG9VcHBlckNhc2UoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2FtZWxpemU7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9jYW1lbGl6ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDQ0N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgaW52YXJpYW50XG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogVXNlIGludmFyaWFudCgpIHRvIGFzc2VydCBzdGF0ZSB3aGljaCB5b3VyIHByb2dyYW0gYXNzdW1lcyB0byBiZSB0cnVlLlxuICpcbiAqIFByb3ZpZGUgc3ByaW50Zi1zdHlsZSBmb3JtYXQgKG9ubHkgJXMgaXMgc3VwcG9ydGVkKSBhbmQgYXJndW1lbnRzXG4gKiB0byBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgYnJva2UgYW5kIHdoYXQgeW91IHdlcmVcbiAqIGV4cGVjdGluZy5cbiAqXG4gKiBUaGUgaW52YXJpYW50IG1lc3NhZ2Ugd2lsbCBiZSBzdHJpcHBlZCBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGludmFyaWFudFxuICogd2lsbCByZW1haW4gdG8gZW5zdXJlIGxvZ2ljIGRvZXMgbm90IGRpZmZlciBpbiBwcm9kdWN0aW9uLlxuICovXG5cbnZhciBpbnZhcmlhbnQgPSBmdW5jdGlvbiBpbnZhcmlhbnQoY29uZGl0aW9uLCBmb3JtYXQsIGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50IHJlcXVpcmVzIGFuIGVycm9yIG1lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gIH1cblxuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHZhciBlcnJvcjtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKCdNaW5pZmllZCBleGNlcHRpb24gb2NjdXJyZWQ7IHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCAnICsgJ2ZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhcmdzID0gW2EsIGIsIGMsIGQsIGUsIGZdO1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKCdJbnZhcmlhbnQgVmlvbGF0aW9uOiAnICsgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgZXJyb3IuZnJhbWVzVG9Qb3AgPSAxOyAvLyB3ZSBkb24ndCBjYXJlIGFib3V0IGludmFyaWFudCdzIG93biBmcmFtZVxuICAgIHRocm93IGVycm9yO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGludmFyaWFudDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL2ludmFyaWFudC5qc1xuICoqIG1vZHVsZSBpZCA9IDQ0OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgRml4ZWREYXRhVGFibGVCdWZmZXJlZFJvd3MucmVhY3RcbiAqIEB0eXBlY2hlY2tzXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCcuL1JlYWN0Jyk7XG52YXIgRml4ZWREYXRhVGFibGVSb3dCdWZmZXIgPSByZXF1aXJlKCcuL0ZpeGVkRGF0YVRhYmxlUm93QnVmZmVyJyk7XG52YXIgRml4ZWREYXRhVGFibGVSb3cgPSByZXF1aXJlKCcuL0ZpeGVkRGF0YVRhYmxlUm93LnJlYWN0Jyk7XG5cbnZhciBjeCA9IHJlcXVpcmUoJy4vY3gnKTtcbnZhciBlbXB0eUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9lbXB0eUZ1bmN0aW9uJyk7XG52YXIgam9pbkNsYXNzZXMgPSByZXF1aXJlKCcuL2pvaW5DbGFzc2VzJyk7XG52YXIgdHJhbnNsYXRlRE9NUG9zaXRpb25YWSA9IHJlcXVpcmUoJy4vdHJhbnNsYXRlRE9NUG9zaXRpb25YWScpO1xuXG52YXIgUHJvcFR5cGVzID0gUmVhY3QuUHJvcFR5cGVzO1xuXG52YXIgRml4ZWREYXRhVGFibGVCdWZmZXJlZFJvd3MgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnRml4ZWREYXRhVGFibGVCdWZmZXJlZFJvd3MnLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGlzU2Nyb2xsaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBkZWZhdWx0Um93SGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgZmlyc3RSb3dJbmRleDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIGZpcnN0Um93T2Zmc2V0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgZml4ZWRDb2x1bW5zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBvZmZzZXRUb3A6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBvblJvd0NsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblJvd0RvdWJsZUNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblJvd01vdXNlRG93bjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Sb3dNb3VzZUVudGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblJvd01vdXNlTGVhdmU6IFByb3BUeXBlcy5mdW5jLFxuICAgIHJvd0NsYXNzTmFtZUdldHRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgcm93c0NvdW50OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgcm93SGVpZ2h0R2V0dGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICByb3dQb3NpdGlvbkdldHRlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBzY3JvbGxMZWZ0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgc2Nyb2xsYWJsZUNvbHVtbnM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICAgIHNob3dMYXN0Um93Qm9yZGVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgICB3aWR0aDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkXG4gIH0sXG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSAvKm9iamVjdCove1xuICAgIHRoaXMuX3Jvd0J1ZmZlciA9IG5ldyBGaXhlZERhdGFUYWJsZVJvd0J1ZmZlcih0aGlzLnByb3BzLnJvd3NDb3VudCwgdGhpcy5wcm9wcy5kZWZhdWx0Um93SGVpZ2h0LCB0aGlzLnByb3BzLmhlaWdodCwgdGhpcy5fZ2V0Um93SGVpZ2h0KTtcbiAgICByZXR1cm4ge1xuICAgICAgcm93c1RvUmVuZGVyOiB0aGlzLl9yb3dCdWZmZXIuZ2V0Um93cyh0aGlzLnByb3BzLmZpcnN0Um93SW5kZXgsIHRoaXMucHJvcHMuZmlyc3RSb3dPZmZzZXQpXG4gICAgfTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB0aGlzLl9zdGF0aWNSb3dBcnJheSA9IFtdO1xuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBzZXRUaW1lb3V0KHRoaXMuX3VwZGF0ZUJ1ZmZlciwgMTAwMCk7XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyggLypvYmplY3QqL25leHRQcm9wcykge1xuICAgIGlmIChuZXh0UHJvcHMucm93c0NvdW50ICE9PSB0aGlzLnByb3BzLnJvd3NDb3VudCB8fCBuZXh0UHJvcHMuZGVmYXVsdFJvd0hlaWdodCAhPT0gdGhpcy5wcm9wcy5kZWZhdWx0Um93SGVpZ2h0IHx8IG5leHRQcm9wcy5oZWlnaHQgIT09IHRoaXMucHJvcHMuaGVpZ2h0KSB7XG4gICAgICB0aGlzLl9yb3dCdWZmZXIgPSBuZXcgRml4ZWREYXRhVGFibGVSb3dCdWZmZXIobmV4dFByb3BzLnJvd3NDb3VudCwgbmV4dFByb3BzLmRlZmF1bHRSb3dIZWlnaHQsIG5leHRQcm9wcy5oZWlnaHQsIHRoaXMuX2dldFJvd0hlaWdodCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLmlzU2Nyb2xsaW5nICYmICFuZXh0UHJvcHMuaXNTY3JvbGxpbmcpIHtcbiAgICAgIHRoaXMuX3VwZGF0ZUJ1ZmZlcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgcm93c1RvUmVuZGVyOiB0aGlzLl9yb3dCdWZmZXIuZ2V0Um93cyhuZXh0UHJvcHMuZmlyc3RSb3dJbmRleCwgbmV4dFByb3BzLmZpcnN0Um93T2Zmc2V0KVxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIF91cGRhdGVCdWZmZXI6IGZ1bmN0aW9uIF91cGRhdGVCdWZmZXIoKSB7XG4gICAgaWYgKHRoaXMuaXNNb3VudGVkKCkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICByb3dzVG9SZW5kZXI6IHRoaXMuX3Jvd0J1ZmZlci5nZXRSb3dzV2l0aFVwZGF0ZWRCdWZmZXIoKVxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZTogZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKCkgLypib29sZWFuKi97XG4gICAgLy8gRG9uJ3QgYWRkIFB1cmVSZW5kZXJNaXhpbiB0byB0aGlzIGNvbXBvbmVudCBwbGVhc2UuXG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuX3N0YXRpY1Jvd0FycmF5Lmxlbmd0aCA9IDA7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSAvKm9iamVjdCove1xuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIHJvd0NsYXNzTmFtZUdldHRlciA9IHByb3BzLnJvd0NsYXNzTmFtZUdldHRlciB8fCBlbXB0eUZ1bmN0aW9uO1xuICAgIHZhciByb3dQb3NpdGlvbkdldHRlciA9IHByb3BzLnJvd1Bvc2l0aW9uR2V0dGVyO1xuXG4gICAgdmFyIHJvd3NUb1JlbmRlciA9IHRoaXMuc3RhdGUucm93c1RvUmVuZGVyO1xuICAgIHRoaXMuX3N0YXRpY1Jvd0FycmF5Lmxlbmd0aCA9IHJvd3NUb1JlbmRlci5sZW5ndGg7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJvd3NUb1JlbmRlci5sZW5ndGg7ICsraSkge1xuICAgICAgdmFyIHJvd0luZGV4ID0gcm93c1RvUmVuZGVyW2ldO1xuICAgICAgdmFyIGN1cnJlbnRSb3dIZWlnaHQgPSB0aGlzLl9nZXRSb3dIZWlnaHQocm93SW5kZXgpO1xuICAgICAgdmFyIHJvd09mZnNldFRvcCA9IHJvd1Bvc2l0aW9uR2V0dGVyKHJvd0luZGV4KTtcblxuICAgICAgdmFyIGhhc0JvdHRvbUJvcmRlciA9IHJvd0luZGV4ID09PSBwcm9wcy5yb3dzQ291bnQgLSAxICYmIHByb3BzLnNob3dMYXN0Um93Qm9yZGVyO1xuXG4gICAgICB0aGlzLl9zdGF0aWNSb3dBcnJheVtpXSA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoRml4ZWREYXRhVGFibGVSb3csIHtcbiAgICAgICAga2V5OiBpLFxuICAgICAgICBpc1Njcm9sbGluZzogcHJvcHMuaXNTY3JvbGxpbmcsXG4gICAgICAgIGluZGV4OiByb3dJbmRleCxcbiAgICAgICAgd2lkdGg6IHByb3BzLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IGN1cnJlbnRSb3dIZWlnaHQsXG4gICAgICAgIHNjcm9sbExlZnQ6IE1hdGgucm91bmQocHJvcHMuc2Nyb2xsTGVmdCksXG4gICAgICAgIG9mZnNldFRvcDogTWF0aC5yb3VuZChyb3dPZmZzZXRUb3ApLFxuICAgICAgICBmaXhlZENvbHVtbnM6IHByb3BzLmZpeGVkQ29sdW1ucyxcbiAgICAgICAgc2Nyb2xsYWJsZUNvbHVtbnM6IHByb3BzLnNjcm9sbGFibGVDb2x1bW5zLFxuICAgICAgICBvbkNsaWNrOiBwcm9wcy5vblJvd0NsaWNrLFxuICAgICAgICBvbkRvdWJsZUNsaWNrOiBwcm9wcy5vblJvd0RvdWJsZUNsaWNrLFxuICAgICAgICBvbk1vdXNlRG93bjogcHJvcHMub25Sb3dNb3VzZURvd24sXG4gICAgICAgIG9uTW91c2VFbnRlcjogcHJvcHMub25Sb3dNb3VzZUVudGVyLFxuICAgICAgICBvbk1vdXNlTGVhdmU6IHByb3BzLm9uUm93TW91c2VMZWF2ZSxcbiAgICAgICAgY2xhc3NOYW1lOiBqb2luQ2xhc3Nlcyhyb3dDbGFzc05hbWVHZXR0ZXIocm93SW5kZXgpLCBjeCgncHVibGljL2ZpeGVkRGF0YVRhYmxlL2JvZHlSb3cnKSwgY3goe1xuICAgICAgICAgICdmaXhlZERhdGFUYWJsZUxheW91dC9oYXNCb3R0b21Cb3JkZXInOiBoYXNCb3R0b21Cb3JkZXIsXG4gICAgICAgICAgJ3B1YmxpYy9maXhlZERhdGFUYWJsZS9oYXNCb3R0b21Cb3JkZXInOiBoYXNCb3R0b21Cb3JkZXJcbiAgICAgICAgfSkpXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgZmlyc3RSb3dQb3NpdGlvbiA9IHByb3BzLnJvd1Bvc2l0aW9uR2V0dGVyKHByb3BzLmZpcnN0Um93SW5kZXgpO1xuXG4gICAgdmFyIHN0eWxlID0ge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBwb2ludGVyRXZlbnRzOiBwcm9wcy5pc1Njcm9sbGluZyA/ICdub25lJyA6ICdhdXRvJ1xuICAgIH07XG5cbiAgICB0cmFuc2xhdGVET01Qb3NpdGlvblhZKHN0eWxlLCAwLCBwcm9wcy5maXJzdFJvd09mZnNldCAtIGZpcnN0Um93UG9zaXRpb24gKyBwcm9wcy5vZmZzZXRUb3ApO1xuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIHsgc3R5bGU6IHN0eWxlIH0sXG4gICAgICB0aGlzLl9zdGF0aWNSb3dBcnJheVxuICAgICk7XG4gIH0sXG5cbiAgX2dldFJvd0hlaWdodDogZnVuY3Rpb24gX2dldFJvd0hlaWdodCggLypudW1iZXIqL2luZGV4KSAvKm51bWJlciove1xuICAgIHJldHVybiB0aGlzLnByb3BzLnJvd0hlaWdodEdldHRlciA/IHRoaXMucHJvcHMucm93SGVpZ2h0R2V0dGVyKGluZGV4KSA6IHRoaXMucHJvcHMuZGVmYXVsdFJvd0hlaWdodDtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRml4ZWREYXRhVGFibGVCdWZmZXJlZFJvd3M7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9GaXhlZERhdGFUYWJsZUJ1ZmZlcmVkUm93cy5yZWFjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDQ0OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgRml4ZWREYXRhVGFibGVSb3dCdWZmZXJcbiAqIEB0eXBlY2hlY2tzXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIEludGVnZXJCdWZmZXJTZXQgPSByZXF1aXJlKCcuL0ludGVnZXJCdWZmZXJTZXQnKTtcblxudmFyIGNsYW1wID0gcmVxdWlyZSgnLi9jbGFtcCcpO1xudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJy4vaW52YXJpYW50Jyk7XG52YXIgTUlOX0JVRkZFUl9ST1dTID0gMztcbnZhciBNQVhfQlVGRkVSX1JPV1MgPSA2O1xuXG4vLyBGaXhlZERhdGFUYWJsZVJvd0J1ZmZlciBpcyBhIGhlbHBlciBjbGFzcyB0aGF0IGV4ZWN1dGVzIHJvdyBidWZmZXJpbmdcbi8vIGxvZ2ljIGZvciBGaXhlZERhdGFUYWJsZS4gSXQgZmlndXJlcyBvdXQgd2hpY2ggcm93cyBzaG91bGQgYmUgcmVuZGVyZWRcbi8vIGFuZCBpbiB3aGljaCBwb3NpdGlvbnMuXG5cbnZhciBGaXhlZERhdGFUYWJsZVJvd0J1ZmZlciA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEZpeGVkRGF0YVRhYmxlUm93QnVmZmVyKFxuICAvKm51bWJlciovcm93c0NvdW50LFxuICAvKm51bWJlciovZGVmYXVsdFJvd0hlaWdodCxcbiAgLypudW1iZXIqL3ZpZXdwb3J0SGVpZ2h0LFxuICAvKj9mdW5jdGlvbiovcm93SGVpZ2h0R2V0dGVyKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZpeGVkRGF0YVRhYmxlUm93QnVmZmVyKTtcblxuICAgIGludmFyaWFudChkZWZhdWx0Um93SGVpZ2h0ICE9PSAwLCBcImRlZmF1bHRSb3dIZWlnaHQgbXVzbid0IGJlIGVxdWFsIDAgaW4gRml4ZWREYXRhVGFibGVSb3dCdWZmZXJcIik7XG5cbiAgICB0aGlzLl9idWZmZXJTZXQgPSBuZXcgSW50ZWdlckJ1ZmZlclNldCgpO1xuICAgIHRoaXMuX2RlZmF1bHRSb3dIZWlnaHQgPSBkZWZhdWx0Um93SGVpZ2h0O1xuICAgIHRoaXMuX3ZpZXdwb3J0Um93c0JlZ2luID0gMDtcbiAgICB0aGlzLl92aWV3cG9ydFJvd3NFbmQgPSAwO1xuICAgIHRoaXMuX21heFZpc2libGVSb3dDb3VudCA9IE1hdGguY2VpbCh2aWV3cG9ydEhlaWdodCAvIGRlZmF1bHRSb3dIZWlnaHQpICsgMTtcbiAgICB0aGlzLl9idWZmZXJSb3dzQ291bnQgPSBjbGFtcChNYXRoLmZsb29yKHRoaXMuX21heFZpc2libGVSb3dDb3VudCAvIDIpLCBNSU5fQlVGRkVSX1JPV1MsIE1BWF9CVUZGRVJfUk9XUyk7XG4gICAgdGhpcy5fcm93c0NvdW50ID0gcm93c0NvdW50O1xuICAgIHRoaXMuX3Jvd0hlaWdodEdldHRlciA9IHJvd0hlaWdodEdldHRlcjtcbiAgICB0aGlzLl9yb3dzID0gW107XG4gICAgdGhpcy5fdmlld3BvcnRIZWlnaHQgPSB2aWV3cG9ydEhlaWdodDtcblxuICAgIHRoaXMuZ2V0Um93cyA9IHRoaXMuZ2V0Um93cy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2V0Um93c1dpdGhVcGRhdGVkQnVmZmVyID0gdGhpcy5nZXRSb3dzV2l0aFVwZGF0ZWRCdWZmZXIuYmluZCh0aGlzKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhGaXhlZERhdGFUYWJsZVJvd0J1ZmZlciwgW3tcbiAgICBrZXk6ICdnZXRSb3dzV2l0aFVwZGF0ZWRCdWZmZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRSb3dzV2l0aFVwZGF0ZWRCdWZmZXIoKSAvKmFycmF5Ki97XG4gICAgICB2YXIgcmVtYWluaW5nQnVmZmVyUm93cyA9IDIgKiB0aGlzLl9idWZmZXJSb3dzQ291bnQ7XG4gICAgICB2YXIgYnVmZmVyUm93SW5kZXggPSBNYXRoLm1heCh0aGlzLl92aWV3cG9ydFJvd3NCZWdpbiAtIHRoaXMuX2J1ZmZlclJvd3NDb3VudCwgMCk7XG4gICAgICB3aGlsZSAoYnVmZmVyUm93SW5kZXggPCB0aGlzLl92aWV3cG9ydFJvd3NCZWdpbikge1xuICAgICAgICB0aGlzLl9hZGRSb3dUb0J1ZmZlcihidWZmZXJSb3dJbmRleCwgdGhpcy5fdmlld3BvcnRSb3dzQmVnaW4sIHRoaXMuX3ZpZXdwb3J0Um93c0VuZCAtIDEpO1xuICAgICAgICBidWZmZXJSb3dJbmRleCsrO1xuICAgICAgICByZW1haW5pbmdCdWZmZXJSb3dzLS07XG4gICAgICB9XG4gICAgICBidWZmZXJSb3dJbmRleCA9IHRoaXMuX3ZpZXdwb3J0Um93c0VuZDtcbiAgICAgIHdoaWxlIChidWZmZXJSb3dJbmRleCA8IHRoaXMuX3Jvd3NDb3VudCAmJiByZW1haW5pbmdCdWZmZXJSb3dzID4gMCkge1xuICAgICAgICB0aGlzLl9hZGRSb3dUb0J1ZmZlcihidWZmZXJSb3dJbmRleCwgdGhpcy5fdmlld3BvcnRSb3dzQmVnaW4sIHRoaXMuX3ZpZXdwb3J0Um93c0VuZCAtIDEpO1xuICAgICAgICBidWZmZXJSb3dJbmRleCsrO1xuICAgICAgICByZW1haW5pbmdCdWZmZXJSb3dzLS07XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5fcm93cztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRSb3dzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Um93cyhcbiAgICAvKm51bWJlciovZmlyc3RSb3dJbmRleCxcbiAgICAvKm51bWJlciovZmlyc3RSb3dPZmZzZXQpIC8qYXJyYXkqL3tcbiAgICAgIHZhciB0b3AgPSBmaXJzdFJvd09mZnNldDtcbiAgICAgIHZhciB0b3RhbEhlaWdodCA9IHRvcDtcbiAgICAgIHZhciByb3dJbmRleCA9IGZpcnN0Um93SW5kZXg7XG4gICAgICB2YXIgZW5kSW5kZXggPSBNYXRoLm1pbihmaXJzdFJvd0luZGV4ICsgdGhpcy5fbWF4VmlzaWJsZVJvd0NvdW50LCB0aGlzLl9yb3dzQ291bnQpO1xuXG4gICAgICB0aGlzLl92aWV3cG9ydFJvd3NCZWdpbiA9IGZpcnN0Um93SW5kZXg7XG4gICAgICB3aGlsZSAocm93SW5kZXggPCBlbmRJbmRleCB8fCB0b3RhbEhlaWdodCA8IHRoaXMuX3ZpZXdwb3J0SGVpZ2h0ICYmIHJvd0luZGV4IDwgdGhpcy5fcm93c0NvdW50KSB7XG4gICAgICAgIHRoaXMuX2FkZFJvd1RvQnVmZmVyKHJvd0luZGV4LCBmaXJzdFJvd0luZGV4LCBlbmRJbmRleCAtIDEpO1xuICAgICAgICB0b3RhbEhlaWdodCArPSB0aGlzLl9yb3dIZWlnaHRHZXR0ZXIocm93SW5kZXgpO1xuICAgICAgICArK3Jvd0luZGV4O1xuICAgICAgICAvLyBTdG9yZSBpbmRleCBhZnRlciB0aGUgbGFzdCB2aWV3cG9ydCByb3cgYXMgZW5kLCB0byBiZSBhYmxlIHRvXG4gICAgICAgIC8vIGRpc3Rpbmd1aXNoIHdoZW4gdGhlcmUgYXJlIG5vIHJvd3MgcmVuZGVyZWQgaW4gdmlld3BvcnRcbiAgICAgICAgdGhpcy5fdmlld3BvcnRSb3dzRW5kID0gcm93SW5kZXg7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLl9yb3dzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ19hZGRSb3dUb0J1ZmZlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9hZGRSb3dUb0J1ZmZlcihcbiAgICAvKm51bWJlciovcm93SW5kZXgsXG4gICAgLypudW1iZXIqL2ZpcnN0Vmlld3BvcnRSb3dJbmRleCxcbiAgICAvKm51bWJlciovbGFzdFZpZXdwb3J0Um93SW5kZXgpIHtcbiAgICAgIHZhciByb3dQb3NpdGlvbiA9IHRoaXMuX2J1ZmZlclNldC5nZXRWYWx1ZVBvc2l0aW9uKHJvd0luZGV4KTtcbiAgICAgIHZhciB2aWV3cG9ydFJvd3NDb3VudCA9IGxhc3RWaWV3cG9ydFJvd0luZGV4IC0gZmlyc3RWaWV3cG9ydFJvd0luZGV4ICsgMTtcbiAgICAgIHZhciBhbGxvd2VkUm93c0NvdW50ID0gdmlld3BvcnRSb3dzQ291bnQgKyB0aGlzLl9idWZmZXJSb3dzQ291bnQgKiAyO1xuICAgICAgaWYgKHJvd1Bvc2l0aW9uID09PSBudWxsICYmIHRoaXMuX2J1ZmZlclNldC5nZXRTaXplKCkgPj0gYWxsb3dlZFJvd3NDb3VudCkge1xuICAgICAgICByb3dQb3NpdGlvbiA9IHRoaXMuX2J1ZmZlclNldC5yZXBsYWNlRnVydGhlc3RWYWx1ZVBvc2l0aW9uKGZpcnN0Vmlld3BvcnRSb3dJbmRleCwgbGFzdFZpZXdwb3J0Um93SW5kZXgsIHJvd0luZGV4KTtcbiAgICAgIH1cbiAgICAgIGlmIChyb3dQb3NpdGlvbiA9PT0gbnVsbCkge1xuICAgICAgICAvLyBXZSBjYW4ndCByZXVzZSBhbnkgb2YgZXhpc3RpbmcgcG9zaXRpb25zIGZvciB0aGlzIHJvdy4gV2UgaGF2ZSB0b1xuICAgICAgICAvLyBjcmVhdGUgbmV3IHBvc2l0aW9uXG4gICAgICAgIHJvd1Bvc2l0aW9uID0gdGhpcy5fYnVmZmVyU2V0LmdldE5ld1Bvc2l0aW9uRm9yVmFsdWUocm93SW5kZXgpO1xuICAgICAgICB0aGlzLl9yb3dzW3Jvd1Bvc2l0aW9uXSA9IHJvd0luZGV4O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVGhpcyByb3cgYWxyZWFkeSBpcyBpbiB0aGUgdGFibGUgd2l0aCByb3dQb3NpdGlvbiBwb3NpdGlvbiBvciBpdFxuICAgICAgICAvLyBjYW4gcmVwbGFjZSByb3cgdGhhdCBpcyBpbiB0aGF0IHBvc2l0aW9uXG4gICAgICAgIHRoaXMuX3Jvd3Nbcm93UG9zaXRpb25dID0gcm93SW5kZXg7XG4gICAgICB9XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEZpeGVkRGF0YVRhYmxlUm93QnVmZmVyO1xufSkoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBGaXhlZERhdGFUYWJsZVJvd0J1ZmZlcjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL0ZpeGVkRGF0YVRhYmxlUm93QnVmZmVyLmpzXG4gKiogbW9kdWxlIGlkID0gNDUwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBJbnRlZ2VyQnVmZmVyU2V0XG4gKiBAdHlwZWNoZWNrc1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbnZhciBIZWFwID0gcmVxdWlyZSgnLi9IZWFwJyk7XG5cbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCcuL2ludmFyaWFudCcpO1xuXG4vLyBEYXRhIHN0cnVjdHVyZSB0aGF0IGFsbG93cyB0byBzdG9yZSB2YWx1ZXMgYW5kIGFzc2lnbiBwb3NpdGlvbnMgdG8gdGhlbVxuLy8gaW4gYSB3YXkgdG8gbWluaW1pemUgY2hhbmdpbmcgcG9zaXRpb25zIG9mIHN0b3JlZCB2YWx1ZXMgd2hlbiBuZXcgb25lcyBhcmVcbi8vIGFkZGVkIG9yIHdoZW4gc29tZSB2YWx1ZXMgYXJlIHJlcGxhY2VkLiBTdG9yZWQgZWxlbWVudHMgYXJlIGFsd2FzeSBhc3NpZ25lZFxuLy8gYSBjb25zZWN1dGl2ZSBzZXQgb2YgcG9zaXRvaW5zIHN0YXJ0aW4gZnJvbSAwIHVwIHRvIGNvdW50IG9mIGVsZW1lbnRzIGxlc3MgMVxuLy8gRm9sbG93aW5nIGFjdGlvbnMgY2FuIGJlIGV4ZWN1dGVkXG4vLyAqIGdldCBwb3NpdGlvbiBhc3NpZ25lZCB0byBnaXZlbiB2YWx1ZSAobnVsbCBpZiB2YWx1ZSBpcyBub3Qgc3RvcmVkKVxuLy8gKiBjcmVhdGUgbmV3IGVudHJ5IGZvciBuZXcgdmFsdWUgYW5kIGdldCBhc3NpZ25lZCBwb3NpdGlvbiBiYWNrXG4vLyAqIHJlcGxhY2UgdmFsdWUgdGhhdCBpcyBmdXJ0aGVzdCBmcm9tIHNwZWNpZmllZCB2YWx1ZSByYW5nZSB3aXRoIG5ldyB2YWx1ZVxuLy8gICBhbmQgZ2V0IGl0J3MgcG9zaXRpb24gYmFja1xuLy8gQWxsIG9wZXJhdGlvbnMgdGFrZSBhbW9ydGl6ZWQgbG9nKG4pIHRpbWUgd2hlcmUgbiBpcyBudW1iZXIgb2YgZWxlbWVudHMgaW5cbi8vIHRoZSBzZXQuXG5cbnZhciBJbnRlZ2VyQnVmZmVyU2V0ID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gSW50ZWdlckJ1ZmZlclNldCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW50ZWdlckJ1ZmZlclNldCk7XG5cbiAgICB0aGlzLl92YWx1ZVRvUG9zaXRpb25NYXAgPSB7fTtcbiAgICB0aGlzLl9zaXplID0gMDtcbiAgICB0aGlzLl9zbWFsbFZhbHVlcyA9IG5ldyBIZWFwKFtdLCAvLyBJbml0aWFsIGRhdGEgaW4gdGhlIGhlYXBcbiAgICB0aGlzLl9zbWFsbGVyQ29tcGFyYXRvcik7XG4gICAgdGhpcy5fbGFyZ2VWYWx1ZXMgPSBuZXcgSGVhcChbXSwgLy8gSW5pdGlhbCBkYXRhIGluIHRoZSBoZWFwXG4gICAgdGhpcy5fZ3JlYXRlckNvbXBhcmF0b3IpO1xuXG4gICAgdGhpcy5nZXROZXdQb3NpdGlvbkZvclZhbHVlID0gdGhpcy5nZXROZXdQb3NpdGlvbkZvclZhbHVlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5nZXRWYWx1ZVBvc2l0aW9uID0gdGhpcy5nZXRWYWx1ZVBvc2l0aW9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5nZXRTaXplID0gdGhpcy5nZXRTaXplLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZXBsYWNlRnVydGhlc3RWYWx1ZVBvc2l0aW9uID0gdGhpcy5yZXBsYWNlRnVydGhlc3RWYWx1ZVBvc2l0aW9uLmJpbmQodGhpcyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoSW50ZWdlckJ1ZmZlclNldCwgW3tcbiAgICBrZXk6ICdnZXRTaXplJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U2l6ZSgpIC8qbnVtYmVyKi97XG4gICAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRWYWx1ZVBvc2l0aW9uJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VmFsdWVQb3NpdGlvbiggLypudW1iZXIqL3ZhbHVlKSAvKj9udW1iZXIqL3tcbiAgICAgIGlmICh0aGlzLl92YWx1ZVRvUG9zaXRpb25NYXBbdmFsdWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5fdmFsdWVUb1Bvc2l0aW9uTWFwW3ZhbHVlXTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXROZXdQb3NpdGlvbkZvclZhbHVlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0TmV3UG9zaXRpb25Gb3JWYWx1ZSggLypudW1iZXIqL3ZhbHVlKSAvKm51bWJlciove1xuICAgICAgaW52YXJpYW50KHRoaXMuX3ZhbHVlVG9Qb3NpdGlvbk1hcFt2YWx1ZV0gPT09IHVuZGVmaW5lZCwgXCJTaG91bGRuJ3QgdHJ5IHRvIGZpbmQgbmV3IHBvc2l0aW9uIGZvciB2YWx1ZSBhbHJlYWR5IHN0b3JlZCBpbiBCdWZmZXJTZXRcIik7XG4gICAgICB2YXIgbmV3UG9zaXRpb24gPSB0aGlzLl9zaXplO1xuICAgICAgdGhpcy5fc2l6ZSsrO1xuICAgICAgdGhpcy5fcHVzaFRvSGVhcHMobmV3UG9zaXRpb24sIHZhbHVlKTtcbiAgICAgIHRoaXMuX3ZhbHVlVG9Qb3NpdGlvbk1hcFt2YWx1ZV0gPSBuZXdQb3NpdGlvbjtcbiAgICAgIHJldHVybiBuZXdQb3NpdGlvbjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZXBsYWNlRnVydGhlc3RWYWx1ZVBvc2l0aW9uJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVwbGFjZUZ1cnRoZXN0VmFsdWVQb3NpdGlvbihcbiAgICAvKm51bWJlciovbG93VmFsdWUsXG4gICAgLypudW1iZXIqL2hpZ2hWYWx1ZSxcbiAgICAvKm51bWJlciovbmV3VmFsdWUpIC8qP251bWJlciove1xuICAgICAgaW52YXJpYW50KHRoaXMuX3ZhbHVlVG9Qb3NpdGlvbk1hcFtuZXdWYWx1ZV0gPT09IHVuZGVmaW5lZCwgXCJTaG91bGRuJ3QgdHJ5IHRvIHJlcGxhY2UgdmFsdWVzIHdpdGggdmFsdWUgYWxyZWFkeSBzdG9yZWQgdmFsdWUgaW4gXCIgKyBcIkJ1ZmZlclNldFwiKTtcblxuICAgICAgdGhpcy5fY2xlYW5IZWFwcygpO1xuICAgICAgaWYgKHRoaXMuX3NtYWxsVmFsdWVzLmVtcHR5KCkgfHwgdGhpcy5fbGFyZ2VWYWx1ZXMuZW1wdHkoKSkge1xuICAgICAgICAvLyBUaHJlcmUgYXJlIGN1cnJlbnRseSBubyB2YWx1ZXMgc3RvcmVkLiBXZSB3aWxsIGhhdmUgdG8gY3JlYXRlIG5ld1xuICAgICAgICAvLyBwb3NpdGlvbiBmb3IgdGhpcyB2YWx1ZS5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciBtaW5WYWx1ZSA9IHRoaXMuX3NtYWxsVmFsdWVzLnBlZWsoKS52YWx1ZTtcbiAgICAgIHZhciBtYXhWYWx1ZSA9IHRoaXMuX2xhcmdlVmFsdWVzLnBlZWsoKS52YWx1ZTtcbiAgICAgIGlmIChtaW5WYWx1ZSA+PSBsb3dWYWx1ZSAmJiBtYXhWYWx1ZSA8PSBoaWdoVmFsdWUpIHtcbiAgICAgICAgLy8gQWxsIHZhbHVlcyBjdXJyZW50bHkgc3RvcmVkIGFyZSBuZWNlc3NhcnksIHdlIGNhbid0IHJldXNlIGFueSBvZiB0aGVtLlxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHZhbHVlVG9SZXBsYWNlO1xuICAgICAgaWYgKGxvd1ZhbHVlIC0gbWluVmFsdWUgPiBtYXhWYWx1ZSAtIGhpZ2hWYWx1ZSkge1xuICAgICAgICAvLyBtaW5WYWx1ZSBpcyBmdXJ0aGVyIGZyb20gcHJvdmlkZWQgcmFuZ2UuIFdlIHdpbGwgcmV1c2UgaXQncyBwb3NpdGlvbi5cbiAgICAgICAgdmFsdWVUb1JlcGxhY2UgPSBtaW5WYWx1ZTtcbiAgICAgICAgdGhpcy5fc21hbGxWYWx1ZXMucG9wKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZVRvUmVwbGFjZSA9IG1heFZhbHVlO1xuICAgICAgICB0aGlzLl9sYXJnZVZhbHVlcy5wb3AoKTtcbiAgICAgIH1cbiAgICAgIHZhciBwb3NpdGlvbiA9IHRoaXMuX3ZhbHVlVG9Qb3NpdGlvbk1hcFt2YWx1ZVRvUmVwbGFjZV07XG4gICAgICBkZWxldGUgdGhpcy5fdmFsdWVUb1Bvc2l0aW9uTWFwW3ZhbHVlVG9SZXBsYWNlXTtcbiAgICAgIHRoaXMuX3ZhbHVlVG9Qb3NpdGlvbk1hcFtuZXdWYWx1ZV0gPSBwb3NpdGlvbjtcbiAgICAgIHRoaXMuX3B1c2hUb0hlYXBzKHBvc2l0aW9uLCBuZXdWYWx1ZSk7XG5cbiAgICAgIHJldHVybiBwb3NpdGlvbjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdfcHVzaFRvSGVhcHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfcHVzaFRvSGVhcHMoIC8qbnVtYmVyKi9wb3NpdGlvbiwgLypudW1iZXIqL3ZhbHVlKSB7XG4gICAgICB2YXIgZWxlbWVudCA9IHtcbiAgICAgICAgcG9zaXRpb246IHBvc2l0aW9uLFxuICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgIH07XG4gICAgICAvLyBXZSBjYW4gcmV1c2UgdGhlIHNhbWUgb2JqZWN0IGluIGJvdGggaGVhcHMsIGJlY2F1c2Ugd2UgZG9uJ3QgbXV0YXRlIHRoZW1cbiAgICAgIHRoaXMuX3NtYWxsVmFsdWVzLnB1c2goZWxlbWVudCk7XG4gICAgICB0aGlzLl9sYXJnZVZhbHVlcy5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ19jbGVhbkhlYXBzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2NsZWFuSGVhcHMoKSB7XG4gICAgICAvLyBXZSBub3QgdXN1YWxseSBvbmx5IHJlbW92ZSBvYmplY3QgZnJvbSBvbmUgaGVhcCB3aGlsZSBtb3ZpbmcgdmFsdWUuXG4gICAgICAvLyBIZXJlIHdlIG1ha2Ugc3VyZSB0aGF0IHRoZXJlIGlzIG5vIHN0YWxlIGRhdGEgb24gdG9wIG9mIGhlYXBzLlxuICAgICAgdGhpcy5fY2xlYW5IZWFwKHRoaXMuX3NtYWxsVmFsdWVzKTtcbiAgICAgIHRoaXMuX2NsZWFuSGVhcCh0aGlzLl9sYXJnZVZhbHVlcyk7XG4gICAgICB2YXIgbWluSGVhcFNpemUgPSBNYXRoLm1pbih0aGlzLl9zbWFsbFZhbHVlcy5zaXplKCksIHRoaXMuX2xhcmdlVmFsdWVzLnNpemUoKSk7XG4gICAgICB2YXIgbWF4SGVhcFNpemUgPSBNYXRoLm1heCh0aGlzLl9zbWFsbFZhbHVlcy5zaXplKCksIHRoaXMuX2xhcmdlVmFsdWVzLnNpemUoKSk7XG4gICAgICBpZiAobWF4SGVhcFNpemUgPiAxMCAqIG1pbkhlYXBTaXplKSB7XG4gICAgICAgIC8vIFRoZXJlIGFyZSBtYW55IG9sZCB2YWx1ZXMgaW4gb25lIG9mIGhlYXBzLiBXZSBubmVkIHRvIGdldCByaWQgb2YgdGhlbVxuICAgICAgICAvLyB0byBub3QgdXNlIHRvbyBhdm9pZCBtZW1vcnkgbGVha3NcbiAgICAgICAgdGhpcy5fcmVjcmVhdGVIZWFwcygpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ19yZWNyZWF0ZUhlYXBzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3JlY3JlYXRlSGVhcHMoKSB7XG4gICAgICB2YXIgc291cmNlSGVhcCA9IHRoaXMuX3NtYWxsVmFsdWVzLnNpemUoKSA8IHRoaXMuX2xhcmdlVmFsdWVzLnNpemUoKSA/IHRoaXMuX3NtYWxsVmFsdWVzIDogdGhpcy5fbGFyZ2VWYWx1ZXM7XG4gICAgICB2YXIgbmV3U21hbGxWYWx1ZXMgPSBuZXcgSGVhcChbXSwgLy8gSW5pdGlhbCBkYXRhIGluIHRoZSBoZWFwXG4gICAgICB0aGlzLl9zbWFsbGVyQ29tcGFyYXRvcik7XG4gICAgICB2YXIgbmV3TGFyZ2VWYWx1ZXMgPSBuZXcgSGVhcChbXSwgLy8gSW5pdGlhbCBkYXRhdCBpbiB0aGUgaGVhcFxuICAgICAgdGhpcy5fZ3JlYXRlckNvbXBhcmF0b3IpO1xuICAgICAgd2hpbGUgKCFzb3VyY2VIZWFwLmVtcHR5KCkpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBzb3VyY2VIZWFwLnBvcCgpO1xuICAgICAgICAvLyBQdXNoIGFsbCBzdGlsIHZhbGlkIGVsZW1lbnRzIHRvIG5ldyBoZWFwc1xuICAgICAgICBpZiAodGhpcy5fdmFsdWVUb1Bvc2l0aW9uTWFwW2VsZW1lbnQudmFsdWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBuZXdTbWFsbFZhbHVlcy5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgIG5ld0xhcmdlVmFsdWVzLnB1c2goZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuX3NtYWxsVmFsdWVzID0gbmV3U21hbGxWYWx1ZXM7XG4gICAgICB0aGlzLl9sYXJnZVZhbHVlcyA9IG5ld0xhcmdlVmFsdWVzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ19jbGVhbkhlYXAnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfY2xlYW5IZWFwKCAvKm9iamVjdCovaGVhcCkge1xuICAgICAgd2hpbGUgKCFoZWFwLmVtcHR5KCkgJiYgdGhpcy5fdmFsdWVUb1Bvc2l0aW9uTWFwW2hlYXAucGVlaygpLnZhbHVlXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGhlYXAucG9wKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnX3NtYWxsZXJDb21wYXJhdG9yJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3NtYWxsZXJDb21wYXJhdG9yKCAvKm9iamVjdCovbGhzLCAvKm9iamVjdCovcmhzKSAvKmJvb2xlYW4qL3tcbiAgICAgIHJldHVybiBsaHMudmFsdWUgPCByaHMudmFsdWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnX2dyZWF0ZXJDb21wYXJhdG9yJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2dyZWF0ZXJDb21wYXJhdG9yKCAvKm9iamVjdCovbGhzLCAvKm9iamVjdCovcmhzKSAvKmJvb2xlYW4qL3tcbiAgICAgIHJldHVybiBsaHMudmFsdWUgPiByaHMudmFsdWU7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEludGVnZXJCdWZmZXJTZXQ7XG59KSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEludGVnZXJCdWZmZXJTZXQ7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9JbnRlZ2VyQnVmZmVyU2V0LmpzXG4gKiogbW9kdWxlIGlkID0gNDUxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBIZWFwXG4gKiBAdHlwZWNoZWNrc1xuICogQHByZXZlbnRNdW5nZVxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLypcbiAqIEBwYXJhbSB7Kn0gYVxuICogQHBhcmFtIHsqfSBiXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG5mdW5jdGlvbiBkZWZhdWx0Q29tcGFyYXRvcihhLCBiKSB7XG4gIHJldHVybiBhIDwgYjtcbn1cblxudmFyIEhlYXAgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBIZWFwKGl0ZW1zLCBjb21wYXJhdG9yKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEhlYXApO1xuXG4gICAgdGhpcy5faXRlbXMgPSBpdGVtcyB8fCBbXTtcbiAgICB0aGlzLl9zaXplID0gdGhpcy5faXRlbXMubGVuZ3RoO1xuICAgIHRoaXMuX2NvbXBhcmF0b3IgPSBjb21wYXJhdG9yIHx8IGRlZmF1bHRDb21wYXJhdG9yO1xuICAgIHRoaXMuX2hlYXBpZnkoKTtcbiAgfVxuXG4gIC8qXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuXG4gIF9jcmVhdGVDbGFzcyhIZWFwLCBbe1xuICAgIGtleTogJ2VtcHR5JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZW1wdHkoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2l6ZSA9PT0gMDtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEByZXR1cm4geyp9XG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6ICdwb3AnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwb3AoKSB7XG4gICAgICBpZiAodGhpcy5fc2l6ZSA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBlbHQgPSB0aGlzLl9pdGVtc1swXTtcblxuICAgICAgdmFyIGxhc3RFbHQgPSB0aGlzLl9pdGVtcy5wb3AoKTtcbiAgICAgIHRoaXMuX3NpemUtLTtcblxuICAgICAgaWYgKHRoaXMuX3NpemUgPiAwKSB7XG4gICAgICAgIHRoaXMuX2l0ZW1zWzBdID0gbGFzdEVsdDtcbiAgICAgICAgdGhpcy5fc2lua0Rvd24oMCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBlbHQ7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBAcGFyYW0geyp9IGl0ZW1cbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogJ3B1c2gnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwdXNoKGl0ZW0pIHtcbiAgICAgIHRoaXMuX2l0ZW1zW3RoaXMuX3NpemUrK10gPSBpdGVtO1xuICAgICAgdGhpcy5fYnViYmxlVXAodGhpcy5fc2l6ZSAtIDEpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiAnc2l6ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNpemUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEByZXR1cm4geyp9XG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6ICdwZWVrJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGVlaygpIHtcbiAgICAgIGlmICh0aGlzLl9zaXplID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zWzBdO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ19oZWFwaWZ5JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2hlYXBpZnkoKSB7XG4gICAgICBmb3IgKHZhciBpbmRleCA9IE1hdGguZmxvb3IoKHRoaXMuX3NpemUgKyAxKSAvIDIpOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgICAgIHRoaXMuX3NpbmtEb3duKGluZGV4KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEBwYXJlbnQge251bWJlcn0gaW5kZXhcbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogJ19idWJibGVVcCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9idWJibGVVcChpbmRleCkge1xuICAgICAgdmFyIGVsdCA9IHRoaXMuX2l0ZW1zW2luZGV4XTtcbiAgICAgIHdoaWxlIChpbmRleCA+IDApIHtcbiAgICAgICAgdmFyIHBhcmVudEluZGV4ID0gTWF0aC5mbG9vcigoaW5kZXggKyAxKSAvIDIpIC0gMTtcbiAgICAgICAgdmFyIHBhcmVudEVsdCA9IHRoaXMuX2l0ZW1zW3BhcmVudEluZGV4XTtcblxuICAgICAgICAvLyBpZiBwYXJlbnRFbHQgPCBlbHQsIHN0b3BcbiAgICAgICAgaWYgKHRoaXMuX2NvbXBhcmF0b3IocGFyZW50RWx0LCBlbHQpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc3dhcFxuICAgICAgICB0aGlzLl9pdGVtc1twYXJlbnRJbmRleF0gPSBlbHQ7XG4gICAgICAgIHRoaXMuX2l0ZW1zW2luZGV4XSA9IHBhcmVudEVsdDtcbiAgICAgICAgaW5kZXggPSBwYXJlbnRJbmRleDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEBwYXJlbnQge251bWJlcn0gaW5kZXhcbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogJ19zaW5rRG93bicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9zaW5rRG93bihpbmRleCkge1xuICAgICAgdmFyIGVsdCA9IHRoaXMuX2l0ZW1zW2luZGV4XTtcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGxlZnRDaGlsZEluZGV4ID0gMiAqIChpbmRleCArIDEpIC0gMTtcbiAgICAgICAgdmFyIHJpZ2h0Q2hpbGRJbmRleCA9IDIgKiAoaW5kZXggKyAxKTtcbiAgICAgICAgdmFyIHN3YXBJbmRleCA9IC0xO1xuXG4gICAgICAgIGlmIChsZWZ0Q2hpbGRJbmRleCA8IHRoaXMuX3NpemUpIHtcbiAgICAgICAgICB2YXIgbGVmdENoaWxkID0gdGhpcy5faXRlbXNbbGVmdENoaWxkSW5kZXhdO1xuICAgICAgICAgIGlmICh0aGlzLl9jb21wYXJhdG9yKGxlZnRDaGlsZCwgZWx0KSkge1xuICAgICAgICAgICAgc3dhcEluZGV4ID0gbGVmdENoaWxkSW5kZXg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJpZ2h0Q2hpbGRJbmRleCA8IHRoaXMuX3NpemUpIHtcbiAgICAgICAgICB2YXIgcmlnaHRDaGlsZCA9IHRoaXMuX2l0ZW1zW3JpZ2h0Q2hpbGRJbmRleF07XG4gICAgICAgICAgaWYgKHRoaXMuX2NvbXBhcmF0b3IocmlnaHRDaGlsZCwgZWx0KSkge1xuICAgICAgICAgICAgaWYgKHN3YXBJbmRleCA9PT0gLTEgfHwgdGhpcy5fY29tcGFyYXRvcihyaWdodENoaWxkLCB0aGlzLl9pdGVtc1tzd2FwSW5kZXhdKSkge1xuICAgICAgICAgICAgICBzd2FwSW5kZXggPSByaWdodENoaWxkSW5kZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgd2UgZG9uJ3QgaGF2ZSBhIHN3YXAsIHN0b3BcbiAgICAgICAgaWYgKHN3YXBJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9pdGVtc1tpbmRleF0gPSB0aGlzLl9pdGVtc1tzd2FwSW5kZXhdO1xuICAgICAgICB0aGlzLl9pdGVtc1tzd2FwSW5kZXhdID0gZWx0O1xuICAgICAgICBpbmRleCA9IHN3YXBJbmRleDtcbiAgICAgIH1cbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gSGVhcDtcbn0pKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gSGVhcDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL0hlYXAuanNcbiAqKiBtb2R1bGUgaWQgPSA0NTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIGNsYW1wXG4gKiBAdHlwZWNoZWNrc1xuICovXG5cbi8qKlxuICogQ2xhbXBzIChvciBjbGlwcyBvciBjb25maW5lcykgdGhlIHZhbHVlIHRvIGJlIGJldHdlZW4gbWluIGFuZCBtYXguXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWVcbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXhcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIGNsYW1wKHZhbHVlLCBtaW4sIG1heCkge1xuICBpZiAodmFsdWUgPCBtaW4pIHtcbiAgICByZXR1cm4gbWluO1xuICB9XG4gIGlmICh2YWx1ZSA+IG1heCkge1xuICAgIHJldHVybiBtYXg7XG4gIH1cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYW1wO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvY2xhbXAuanNcbiAqKiBtb2R1bGUgaWQgPSA0NTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIEZpeGVkRGF0YVRhYmxlUm93LnJlYWN0XG4gKiBAdHlwZWNoZWNrc1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgnLi9SZWFjdCcpO1xudmFyIEZpeGVkRGF0YVRhYmxlQ2VsbEdyb3VwID0gcmVxdWlyZSgnLi9GaXhlZERhdGFUYWJsZUNlbGxHcm91cC5yZWFjdCcpO1xuXG52YXIgY3ggPSByZXF1aXJlKCcuL2N4Jyk7XG52YXIgam9pbkNsYXNzZXMgPSByZXF1aXJlKCcuL2pvaW5DbGFzc2VzJyk7XG52YXIgdHJhbnNsYXRlRE9NUG9zaXRpb25YWSA9IHJlcXVpcmUoJy4vdHJhbnNsYXRlRE9NUG9zaXRpb25YWScpO1xuXG52YXIgUHJvcFR5cGVzID0gUmVhY3QuUHJvcFR5cGVzO1xuXG4vKipcbiAqIENvbXBvbmVudCB0aGF0IHJlbmRlcnMgdGhlIHJvdyBmb3IgPEZpeGVkRGF0YVRhYmxlIC8+LlxuICogVGhpcyBjb21wb25lbnQgc2hvdWxkIG5vdCBiZSB1c2VkIGRpcmVjdGx5IGJ5IGRldmVsb3Blci4gSW5zdGVhZCxcbiAqIG9ubHkgPEZpeGVkRGF0YVRhYmxlIC8+IHNob3VsZCB1c2UgdGhlIGNvbXBvbmVudCBpbnRlcm5hbGx5LlxuICovXG52YXIgRml4ZWREYXRhVGFibGVSb3dJbXBsID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0ZpeGVkRGF0YVRhYmxlUm93SW1wbCcsXG5cbiAgcHJvcFR5cGVzOiB7XG5cbiAgICBpc1Njcm9sbGluZzogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBBcnJheSBvZiA8Rml4ZWREYXRhVGFibGVDb2x1bW4gLz4gZm9yIHRoZSBmaXhlZCBjb2x1bW5zLlxuICAgICAqL1xuICAgIGZpeGVkQ29sdW1uczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBIZWlnaHQgb2YgdGhlIHJvdy5cbiAgICAgKi9cbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRoZSByb3cgaW5kZXguXG4gICAgICovXG4gICAgaW5kZXg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIEFycmF5IG9mIDxGaXhlZERhdGFUYWJsZUNvbHVtbiAvPiBmb3IgdGhlIHNjcm9sbGFibGUgY29sdW1ucy5cbiAgICAgKi9cbiAgICBzY3JvbGxhYmxlQ29sdW1uczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgbGVmdCBlZGdlIG9mIHRoZSB0YWJsZSBhbmQgdGhlIGxlZnRtb3N0IHBvcnRpb25cbiAgICAgKiBvZiB0aGUgcm93IGN1cnJlbnRseSB2aXNpYmxlIGluIHRoZSB0YWJsZS5cbiAgICAgKi9cbiAgICBzY3JvbGxMZWZ0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBXaWR0aCBvZiB0aGUgcm93LlxuICAgICAqL1xuICAgIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBGaXJlIHdoZW4gYSByb3cgaXMgY2xpY2tlZC5cbiAgICAgKi9cbiAgICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIEZpcmUgd2hlbiBhIHJvdyBpcyBkb3VibGUgY2xpY2tlZC5cbiAgICAgKi9cbiAgICBvbkRvdWJsZUNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIGZvciB3aGVuIHJlc2l6ZXIga25vYiAoaW4gRml4ZWREYXRhVGFibGVDZWxsKSBpcyBjbGlja2VkXG4gICAgICogdG8gaW5pdGlhbGl6ZSByZXNpemluZy4gUGxlYXNlIG5vdGUgdGhpcyBpcyBvbmx5IG9uIHRoZSBjZWxsc1xuICAgICAqIGluIHRoZSBoZWFkZXIuXG4gICAgICogQHBhcmFtIG51bWJlciBjb21iaW5lZFdpZHRoXG4gICAgICogQHBhcmFtIG51bWJlciBsZWZ0T2Zmc2V0XG4gICAgICogQHBhcmFtIG51bWJlciBjZWxsV2lkdGhcbiAgICAgKiBAcGFyYW0gbnVtYmVyfHN0cmluZyBjb2x1bW5LZXlcbiAgICAgKiBAcGFyYW0gb2JqZWN0IGV2ZW50XG4gICAgICovXG4gICAgb25Db2x1bW5SZXNpemU6IFByb3BUeXBlcy5mdW5jXG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSAvKm9iamVjdCove1xuICAgIHZhciBzdHlsZSA9IHtcbiAgICAgIHdpZHRoOiB0aGlzLnByb3BzLndpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLnByb3BzLmhlaWdodFxuICAgIH07XG5cbiAgICB2YXIgY2xhc3NOYW1lID0gY3goe1xuICAgICAgJ2ZpeGVkRGF0YVRhYmxlUm93TGF5b3V0L21haW4nOiB0cnVlLFxuICAgICAgJ3B1YmxpYy9maXhlZERhdGFUYWJsZVJvdy9tYWluJzogdHJ1ZSxcbiAgICAgICdwdWJsaWMvZml4ZWREYXRhVGFibGVSb3cvaGlnaGxpZ2h0ZWQnOiB0aGlzLnByb3BzLmluZGV4ICUgMiA9PT0gMSxcbiAgICAgICdwdWJsaWMvZml4ZWREYXRhVGFibGVSb3cvb2RkJzogdGhpcy5wcm9wcy5pbmRleCAlIDIgPT09IDEsXG4gICAgICAncHVibGljL2ZpeGVkRGF0YVRhYmxlUm93L2V2ZW4nOiB0aGlzLnByb3BzLmluZGV4ICUgMiA9PT0gMFxuICAgIH0pO1xuXG4gICAgdmFyIGZpeGVkQ29sdW1uc1dpZHRoID0gdGhpcy5fZ2V0Q29sdW1uc1dpZHRoKHRoaXMucHJvcHMuZml4ZWRDb2x1bW5zKTtcbiAgICB2YXIgZml4ZWRDb2x1bW5zID0gUmVhY3QuY3JlYXRlRWxlbWVudChGaXhlZERhdGFUYWJsZUNlbGxHcm91cCwge1xuICAgICAga2V5OiAnZml4ZWRfY2VsbHMnLFxuICAgICAgaXNTY3JvbGxpbmc6IHRoaXMucHJvcHMuaXNTY3JvbGxpbmcsXG4gICAgICBoZWlnaHQ6IHRoaXMucHJvcHMuaGVpZ2h0LFxuICAgICAgbGVmdDogMCxcbiAgICAgIHdpZHRoOiBmaXhlZENvbHVtbnNXaWR0aCxcbiAgICAgIHpJbmRleDogMixcbiAgICAgIGNvbHVtbnM6IHRoaXMucHJvcHMuZml4ZWRDb2x1bW5zLFxuICAgICAgb25Db2x1bW5SZXNpemU6IHRoaXMucHJvcHMub25Db2x1bW5SZXNpemUsXG4gICAgICByb3dIZWlnaHQ6IHRoaXMucHJvcHMuaGVpZ2h0LFxuICAgICAgcm93SW5kZXg6IHRoaXMucHJvcHMuaW5kZXhcbiAgICB9KTtcbiAgICB2YXIgY29sdW1uc1NoYWRvdyA9IHRoaXMuX3JlbmRlckNvbHVtbnNTaGFkb3coZml4ZWRDb2x1bW5zV2lkdGgpO1xuICAgIHZhciBzY3JvbGxhYmxlQ29sdW1ucyA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoRml4ZWREYXRhVGFibGVDZWxsR3JvdXAsIHtcbiAgICAgIGtleTogJ3Njcm9sbGFibGVfY2VsbHMnLFxuICAgICAgaXNTY3JvbGxpbmc6IHRoaXMucHJvcHMuaXNTY3JvbGxpbmcsXG4gICAgICBoZWlnaHQ6IHRoaXMucHJvcHMuaGVpZ2h0LFxuICAgICAgbGVmdDogdGhpcy5wcm9wcy5zY3JvbGxMZWZ0LFxuICAgICAgb2Zmc2V0TGVmdDogZml4ZWRDb2x1bW5zV2lkdGgsXG4gICAgICB3aWR0aDogdGhpcy5wcm9wcy53aWR0aCAtIGZpeGVkQ29sdW1uc1dpZHRoLFxuICAgICAgekluZGV4OiAwLFxuICAgICAgY29sdW1uczogdGhpcy5wcm9wcy5zY3JvbGxhYmxlQ29sdW1ucyxcbiAgICAgIG9uQ29sdW1uUmVzaXplOiB0aGlzLnByb3BzLm9uQ29sdW1uUmVzaXplLFxuICAgICAgcm93SGVpZ2h0OiB0aGlzLnByb3BzLmhlaWdodCxcbiAgICAgIHJvd0luZGV4OiB0aGlzLnByb3BzLmluZGV4XG4gICAgfSk7XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6IGpvaW5DbGFzc2VzKGNsYXNzTmFtZSwgdGhpcy5wcm9wcy5jbGFzc05hbWUpLFxuICAgICAgICBvbkNsaWNrOiB0aGlzLnByb3BzLm9uQ2xpY2sgPyB0aGlzLl9vbkNsaWNrIDogbnVsbCxcbiAgICAgICAgb25Eb3VibGVDbGljazogdGhpcy5wcm9wcy5vbkRvdWJsZUNsaWNrID8gdGhpcy5fb25Eb3VibGVDbGljayA6IG51bGwsXG4gICAgICAgIG9uTW91c2VEb3duOiB0aGlzLnByb3BzLm9uTW91c2VEb3duID8gdGhpcy5fb25Nb3VzZURvd24gOiBudWxsLFxuICAgICAgICBvbk1vdXNlRW50ZXI6IHRoaXMucHJvcHMub25Nb3VzZUVudGVyID8gdGhpcy5fb25Nb3VzZUVudGVyIDogbnVsbCxcbiAgICAgICAgb25Nb3VzZUxlYXZlOiB0aGlzLnByb3BzLm9uTW91c2VMZWF2ZSA/IHRoaXMuX29uTW91c2VMZWF2ZSA6IG51bGwsXG4gICAgICAgIHN0eWxlOiBzdHlsZSB9LFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiBjeCgnZml4ZWREYXRhVGFibGVSb3dMYXlvdXQvYm9keScpIH0sXG4gICAgICAgIGZpeGVkQ29sdW1ucyxcbiAgICAgICAgc2Nyb2xsYWJsZUNvbHVtbnMsXG4gICAgICAgIGNvbHVtbnNTaGFkb3dcbiAgICAgIClcbiAgICApO1xuICB9LFxuXG4gIF9nZXRDb2x1bW5zV2lkdGg6IGZ1bmN0aW9uIF9nZXRDb2x1bW5zV2lkdGgoIC8qYXJyYXkqL2NvbHVtbnMpIC8qbnVtYmVyKi97XG4gICAgdmFyIHdpZHRoID0gMDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbHVtbnMubGVuZ3RoOyArK2kpIHtcbiAgICAgIHdpZHRoICs9IGNvbHVtbnNbaV0ucHJvcHMud2lkdGg7XG4gICAgfVxuICAgIHJldHVybiB3aWR0aDtcbiAgfSxcblxuICBfcmVuZGVyQ29sdW1uc1NoYWRvdzogZnVuY3Rpb24gX3JlbmRlckNvbHVtbnNTaGFkb3coIC8qbnVtYmVyKi9sZWZ0KSAvKj9vYmplY3QqL3tcbiAgICBpZiAobGVmdCA+IDApIHtcbiAgICAgIHZhciBjbGFzc05hbWUgPSBjeCh7XG4gICAgICAgICdmaXhlZERhdGFUYWJsZVJvd0xheW91dC9maXhlZENvbHVtbnNEaXZpZGVyJzogdHJ1ZSxcbiAgICAgICAgJ2ZpeGVkRGF0YVRhYmxlUm93TGF5b3V0L2NvbHVtbnNTaGFkb3cnOiB0aGlzLnByb3BzLnNjcm9sbExlZnQgPiAwLFxuICAgICAgICAncHVibGljL2ZpeGVkRGF0YVRhYmxlUm93L2ZpeGVkQ29sdW1uc0RpdmlkZXInOiB0cnVlLFxuICAgICAgICAncHVibGljL2ZpeGVkRGF0YVRhYmxlUm93L2NvbHVtbnNTaGFkb3cnOiB0aGlzLnByb3BzLnNjcm9sbExlZnQgPiAwXG4gICAgICB9KTtcbiAgICAgIHZhciBzdHlsZSA9IHtcbiAgICAgICAgbGVmdDogbGVmdCxcbiAgICAgICAgaGVpZ2h0OiB0aGlzLnByb3BzLmhlaWdodFxuICAgICAgfTtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lLCBzdHlsZTogc3R5bGUgfSk7XG4gICAgfVxuICB9LFxuXG4gIF9vbkNsaWNrOiBmdW5jdGlvbiBfb25DbGljayggLypvYmplY3QqL2V2ZW50KSB7XG4gICAgdGhpcy5wcm9wcy5vbkNsaWNrKGV2ZW50LCB0aGlzLnByb3BzLmluZGV4KTtcbiAgfSxcblxuICBfb25Eb3VibGVDbGljazogZnVuY3Rpb24gX29uRG91YmxlQ2xpY2soIC8qb2JqZWN0Ki9ldmVudCkge1xuICAgIHRoaXMucHJvcHMub25Eb3VibGVDbGljayhldmVudCwgdGhpcy5wcm9wcy5pbmRleCk7XG4gIH0sXG5cbiAgX29uTW91c2VEb3duOiBmdW5jdGlvbiBfb25Nb3VzZURvd24oIC8qb2JqZWN0Ki9ldmVudCkge1xuICAgIHRoaXMucHJvcHMub25Nb3VzZURvd24oZXZlbnQsIHRoaXMucHJvcHMuaW5kZXgpO1xuICB9LFxuXG4gIF9vbk1vdXNlRW50ZXI6IGZ1bmN0aW9uIF9vbk1vdXNlRW50ZXIoIC8qb2JqZWN0Ki9ldmVudCkge1xuICAgIHRoaXMucHJvcHMub25Nb3VzZUVudGVyKGV2ZW50LCB0aGlzLnByb3BzLmluZGV4KTtcbiAgfSxcblxuICBfb25Nb3VzZUxlYXZlOiBmdW5jdGlvbiBfb25Nb3VzZUxlYXZlKCAvKm9iamVjdCovZXZlbnQpIHtcbiAgICB0aGlzLnByb3BzLm9uTW91c2VMZWF2ZShldmVudCwgdGhpcy5wcm9wcy5pbmRleCk7XG4gIH1cbn0pO1xuXG52YXIgRml4ZWREYXRhVGFibGVSb3cgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnRml4ZWREYXRhVGFibGVSb3cnLFxuXG4gIHByb3BUeXBlczoge1xuXG4gICAgaXNTY3JvbGxpbmc6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogSGVpZ2h0IG9mIHRoZSByb3cuXG4gICAgICovXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBaLWluZGV4IG9uIHdoaWNoIHRoZSByb3cgd2lsbCBiZSBkaXNwbGF5ZWQuIFVzZWQgZS5nLiBmb3Iga2VlcGluZ1xuICAgICAqIGhlYWRlciBhbmQgZm9vdGVyIGluIGZyb250IG9mIG90aGVyIHJvd3MuXG4gICAgICovXG4gICAgekluZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHZlcnRpY2FsIHBvc2l0aW9uIHdoZXJlIHRoZSByb3cgc2hvdWxkIHJlbmRlciBpdHNlbGZcbiAgICAgKi9cbiAgICBvZmZzZXRUb3A6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFdpZHRoIG9mIHRoZSByb3cuXG4gICAgICovXG4gICAgd2lkdGg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkgLypvYmplY3QqL3tcbiAgICB2YXIgc3R5bGUgPSB7XG4gICAgICB3aWR0aDogdGhpcy5wcm9wcy53aWR0aCxcbiAgICAgIGhlaWdodDogdGhpcy5wcm9wcy5oZWlnaHQsXG4gICAgICB6SW5kZXg6IHRoaXMucHJvcHMuekluZGV4ID8gdGhpcy5wcm9wcy56SW5kZXggOiAwXG4gICAgfTtcbiAgICB0cmFuc2xhdGVET01Qb3NpdGlvblhZKHN0eWxlLCAwLCB0aGlzLnByb3BzLm9mZnNldFRvcCk7XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAge1xuICAgICAgICBzdHlsZTogc3R5bGUsXG4gICAgICAgIGNsYXNzTmFtZTogY3goJ2ZpeGVkRGF0YVRhYmxlUm93TGF5b3V0L3Jvd1dyYXBwZXInKSB9LFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGaXhlZERhdGFUYWJsZVJvd0ltcGwsIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICAgIG9mZnNldFRvcDogdW5kZWZpbmVkLFxuICAgICAgICB6SW5kZXg6IHVuZGVmaW5lZFxuICAgICAgfSkpXG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRml4ZWREYXRhVGFibGVSb3c7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9GaXhlZERhdGFUYWJsZVJvdy5yZWFjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDQ1NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgRml4ZWREYXRhVGFibGVDZWxsR3JvdXAucmVhY3RcbiAqIEB0eXBlY2hlY2tzXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbnZhciBGaXhlZERhdGFUYWJsZUhlbHBlciA9IHJlcXVpcmUoJy4vRml4ZWREYXRhVGFibGVIZWxwZXInKTtcbnZhciBSZWFjdCA9IHJlcXVpcmUoJy4vUmVhY3QnKTtcbnZhciBGaXhlZERhdGFUYWJsZUNlbGwgPSByZXF1aXJlKCcuL0ZpeGVkRGF0YVRhYmxlQ2VsbC5yZWFjdCcpO1xuXG52YXIgY3ggPSByZXF1aXJlKCcuL2N4Jyk7XG52YXIgdHJhbnNsYXRlRE9NUG9zaXRpb25YWSA9IHJlcXVpcmUoJy4vdHJhbnNsYXRlRE9NUG9zaXRpb25YWScpO1xuXG52YXIgUHJvcFR5cGVzID0gUmVhY3QuUHJvcFR5cGVzO1xuXG52YXIgRElSX1NJR04gPSBGaXhlZERhdGFUYWJsZUhlbHBlci5ESVJfU0lHTjtcblxudmFyIEZpeGVkRGF0YVRhYmxlQ2VsbEdyb3VwSW1wbCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdGaXhlZERhdGFUYWJsZUNlbGxHcm91cEltcGwnLFxuXG4gIC8qKlxuICAgKiBQcm9wVHlwZXMgYXJlIGRpc2FibGVkIGluIHRoaXMgY29tcG9uZW50LCBiZWNhdXNlIGhhdmluZyB0aGVtIG9uIHNsb3dzXG4gICAqIGRvd24gdGhlIEZpeGVkRGF0YVRhYmxlIGh1Z2VseSBpbiBERVYgbW9kZS4gWW91IGNhbiBlbmFibGUgdGhlbSBiYWNrIGZvclxuICAgKiBkZXZlbG9wbWVudCwgYnV0IHBsZWFzZSBkb24ndCBjb21taXQgdGhpcyBjb21wb25lbnQgd2l0aCBlbmFibGVkIHByb3BUeXBlcy5cbiAgICovXG4gIHByb3BUeXBlc19ESVNBQkxFRF9GT1JfUEVSRk9STUFOQ0U6IHtcblxuICAgIC8qKlxuICAgICAqIEFycmF5IG9mIDxGaXhlZERhdGFUYWJsZUNvbHVtbiAvPi5cbiAgICAgKi9cbiAgICBjb2x1bW5zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcblxuICAgIGlzU2Nyb2xsaW5nOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIGxlZnQ6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICBvbkNvbHVtblJlc2l6ZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICByb3dIZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcblxuICAgIHJvd0luZGV4OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG5cbiAgICB3aWR0aDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuXG4gICAgekluZGV4OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWRcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIC8qb2JqZWN0Ki97XG4gICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgY29sdW1ucyA9IHByb3BzLmNvbHVtbnM7XG4gICAgdmFyIGNlbGxzID0gbmV3IEFycmF5KGNvbHVtbnMubGVuZ3RoKTtcblxuICAgIHZhciBjdXJyZW50UG9zaXRpb24gPSAwO1xuICAgIGZvciAodmFyIGkgPSAwLCBqID0gY29sdW1ucy5sZW5ndGg7IGkgPCBqOyBpKyspIHtcbiAgICAgIHZhciBjb2x1bW5Qcm9wcyA9IGNvbHVtbnNbaV0ucHJvcHM7XG4gICAgICBpZiAoIWNvbHVtblByb3BzLmFsbG93Q2VsbHNSZWN5Y2xpbmcgfHwgY3VycmVudFBvc2l0aW9uIC0gcHJvcHMubGVmdCA8PSBwcm9wcy53aWR0aCAmJiBjdXJyZW50UG9zaXRpb24gLSBwcm9wcy5sZWZ0ICsgY29sdW1uUHJvcHMud2lkdGggPj0gMCkge1xuICAgICAgICB2YXIga2V5ID0gJ2NlbGxfJyArIGk7XG4gICAgICAgIGNlbGxzW2ldID0gdGhpcy5fcmVuZGVyQ2VsbChwcm9wcy5yb3dJbmRleCwgcHJvcHMucm93SGVpZ2h0LCBjb2x1bW5Qcm9wcywgY3VycmVudFBvc2l0aW9uLCBrZXkpO1xuICAgICAgfVxuICAgICAgY3VycmVudFBvc2l0aW9uICs9IGNvbHVtblByb3BzLndpZHRoO1xuICAgIH1cblxuICAgIHZhciBjb250ZW50V2lkdGggPSB0aGlzLl9nZXRDb2x1bW5zV2lkdGgoY29sdW1ucyk7XG5cbiAgICB2YXIgc3R5bGUgPSB7XG4gICAgICBoZWlnaHQ6IHByb3BzLmhlaWdodCxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgd2lkdGg6IGNvbnRlbnRXaWR0aCxcbiAgICAgIHpJbmRleDogcHJvcHMuekluZGV4XG4gICAgfTtcbiAgICB0cmFuc2xhdGVET01Qb3NpdGlvblhZKHN0eWxlLCAtMSAqIERJUl9TSUdOICogcHJvcHMubGVmdCwgMCk7XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6IGN4KCdmaXhlZERhdGFUYWJsZUNlbGxHcm91cExheW91dC9jZWxsR3JvdXAnKSxcbiAgICAgICAgc3R5bGU6IHN0eWxlIH0sXG4gICAgICBjZWxsc1xuICAgICk7XG4gIH0sXG5cbiAgX3JlbmRlckNlbGw6IGZ1bmN0aW9uIF9yZW5kZXJDZWxsKFxuICAvKm51bWJlciovcm93SW5kZXgsXG4gIC8qbnVtYmVyKi9oZWlnaHQsXG4gIC8qb2JqZWN0Ki9jb2x1bW5Qcm9wcyxcbiAgLypudW1iZXIqL2xlZnQsXG4gIC8qc3RyaW5nKi9rZXkpIC8qb2JqZWN0Ki97XG5cbiAgICB2YXIgY2VsbElzUmVzaXphYmxlID0gY29sdW1uUHJvcHMuaXNSZXNpemFibGUgJiYgdGhpcy5wcm9wcy5vbkNvbHVtblJlc2l6ZTtcbiAgICB2YXIgb25Db2x1bW5SZXNpemUgPSBjZWxsSXNSZXNpemFibGUgPyB0aGlzLnByb3BzLm9uQ29sdW1uUmVzaXplIDogbnVsbDtcblxuICAgIHZhciBjbGFzc05hbWUgPSBjb2x1bW5Qcm9wcy5jZWxsQ2xhc3NOYW1lO1xuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRml4ZWREYXRhVGFibGVDZWxsLCB7XG4gICAgICBpc1Njcm9sbGluZzogdGhpcy5wcm9wcy5pc1Njcm9sbGluZyxcbiAgICAgIGFsaWduOiBjb2x1bW5Qcm9wcy5hbGlnbixcbiAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICBrZXk6IGtleSxcbiAgICAgIG1heFdpZHRoOiBjb2x1bW5Qcm9wcy5tYXhXaWR0aCxcbiAgICAgIG1pbldpZHRoOiBjb2x1bW5Qcm9wcy5taW5XaWR0aCxcbiAgICAgIG9uQ29sdW1uUmVzaXplOiBvbkNvbHVtblJlc2l6ZSxcbiAgICAgIHJvd0luZGV4OiByb3dJbmRleCxcbiAgICAgIGNvbHVtbktleTogY29sdW1uUHJvcHMuY29sdW1uS2V5LFxuICAgICAgd2lkdGg6IGNvbHVtblByb3BzLndpZHRoLFxuICAgICAgbGVmdDogbGVmdCxcbiAgICAgIGNlbGw6IGNvbHVtblByb3BzLmNlbGxcbiAgICB9KTtcbiAgfSxcblxuICBfZ2V0Q29sdW1uc1dpZHRoOiBmdW5jdGlvbiBfZ2V0Q29sdW1uc1dpZHRoKCAvKmFycmF5Ki9jb2x1bW5zKSAvKm51bWJlciove1xuICAgIHZhciB3aWR0aCA9IDA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb2x1bW5zLmxlbmd0aDsgKytpKSB7XG4gICAgICB3aWR0aCArPSBjb2x1bW5zW2ldLnByb3BzLndpZHRoO1xuICAgIH1cbiAgICByZXR1cm4gd2lkdGg7XG4gIH1cbn0pO1xuXG52YXIgRml4ZWREYXRhVGFibGVDZWxsR3JvdXAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnRml4ZWREYXRhVGFibGVDZWxsR3JvdXAnLFxuXG4gIC8qKlxuICAgKiBQcm9wVHlwZXMgYXJlIGRpc2FibGVkIGluIHRoaXMgY29tcG9uZW50LCBiZWNhdXNlIGhhdmluZyB0aGVtIG9uIHNsb3dzXG4gICAqIGRvd24gdGhlIEZpeGVkRGF0YVRhYmxlIGh1Z2VseSBpbiBERVYgbW9kZS4gWW91IGNhbiBlbmFibGUgdGhlbSBiYWNrIGZvclxuICAgKiBkZXZlbG9wbWVudCwgYnV0IHBsZWFzZSBkb24ndCBjb21taXQgdGhpcyBjb21wb25lbnQgd2l0aCBlbmFibGVkIHByb3BUeXBlcy5cbiAgICovXG4gIHByb3BUeXBlc19ESVNBQkxFRF9GT1JfUEVSRk9STUFOQ0U6IHtcbiAgICBpc1Njcm9sbGluZzogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICogSGVpZ2h0IG9mIHRoZSByb3cuXG4gICAgICovXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG5cbiAgICBvZmZzZXRMZWZ0OiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgbGVmdDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAvKipcbiAgICAgKiBaLWluZGV4IG9uIHdoaWNoIHRoZSByb3cgd2lsbCBiZSBkaXNwbGF5ZWQuIFVzZWQgZS5nLiBmb3Iga2VlcGluZ1xuICAgICAqIGhlYWRlciBhbmQgZm9vdGVyIGluIGZyb250IG9mIG90aGVyIHJvd3MuXG4gICAgICovXG4gICAgekluZGV4OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWRcbiAgfSxcblxuICBzaG91bGRDb21wb25lbnRVcGRhdGU6IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZSggLypvYmplY3QqL25leHRQcm9wcykgLypib29sZWFuKi97XG4gICAgcmV0dXJuICFuZXh0UHJvcHMuaXNTY3JvbGxpbmcgfHwgdGhpcy5wcm9wcy5yb3dJbmRleCAhPT0gbmV4dFByb3BzLnJvd0luZGV4IHx8IHRoaXMucHJvcHMubGVmdCAhPT0gbmV4dFByb3BzLmxlZnQ7XG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSAvKm9iamVjdCove1xuICAgIHJldHVybiB7XG4gICAgICBvZmZzZXRMZWZ0OiAwXG4gICAgfTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIC8qb2JqZWN0Ki97XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIG9mZnNldExlZnQgPSBfcHJvcHMub2Zmc2V0TGVmdDtcblxuICAgIHZhciBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsnb2Zmc2V0TGVmdCddKTtcblxuICAgIHZhciBzdHlsZSA9IHtcbiAgICAgIGhlaWdodDogcHJvcHMuaGVpZ2h0XG4gICAgfTtcblxuICAgIGlmIChESVJfU0lHTiA9PT0gMSkge1xuICAgICAgc3R5bGUubGVmdCA9IG9mZnNldExlZnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLnJpZ2h0ID0gb2Zmc2V0TGVmdDtcbiAgICB9XG5cbiAgICB2YXIgb25Db2x1bW5SZXNpemUgPSBwcm9wcy5vbkNvbHVtblJlc2l6ZSA/IHRoaXMuX29uQ29sdW1uUmVzaXplIDogbnVsbDtcblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7XG4gICAgICAgIHN0eWxlOiBzdHlsZSxcbiAgICAgICAgY2xhc3NOYW1lOiBjeCgnZml4ZWREYXRhVGFibGVDZWxsR3JvdXBMYXlvdXQvY2VsbEdyb3VwV3JhcHBlcicpIH0sXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZpeGVkRGF0YVRhYmxlQ2VsbEdyb3VwSW1wbCwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICAgIG9uQ29sdW1uUmVzaXplOiBvbkNvbHVtblJlc2l6ZVxuICAgICAgfSkpXG4gICAgKTtcbiAgfSxcblxuICBfb25Db2x1bW5SZXNpemU6IGZ1bmN0aW9uIF9vbkNvbHVtblJlc2l6ZShcbiAgLypudW1iZXIqL2xlZnQsXG4gIC8qbnVtYmVyKi93aWR0aCxcbiAgLyo/bnVtYmVyKi9taW5XaWR0aCxcbiAgLyo/bnVtYmVyKi9tYXhXaWR0aCxcbiAgLypzdHJpbmd8bnVtYmVyKi9jb2x1bW5LZXksXG4gIC8qb2JqZWN0Ki9ldmVudCkge1xuICAgIHRoaXMucHJvcHMub25Db2x1bW5SZXNpemUgJiYgdGhpcy5wcm9wcy5vbkNvbHVtblJlc2l6ZSh0aGlzLnByb3BzLm9mZnNldExlZnQsIGxlZnQgLSB0aGlzLnByb3BzLmxlZnQgKyB3aWR0aCwgd2lkdGgsIG1pbldpZHRoLCBtYXhXaWR0aCwgY29sdW1uS2V5LCBldmVudCk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZpeGVkRGF0YVRhYmxlQ2VsbEdyb3VwO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvRml4ZWREYXRhVGFibGVDZWxsR3JvdXAucmVhY3QuanNcbiAqKiBtb2R1bGUgaWQgPSA0NTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIEZpeGVkRGF0YVRhYmxlSGVscGVyXG4gKiBAdHlwZWNoZWNrc1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIExvY2FsZSA9IHJlcXVpcmUoJy4vTG9jYWxlJyk7XG52YXIgUmVhY3QgPSByZXF1aXJlKCcuL1JlYWN0Jyk7XG52YXIgRml4ZWREYXRhVGFibGVDb2x1bW5Hcm91cCA9IHJlcXVpcmUoJy4vRml4ZWREYXRhVGFibGVDb2x1bW5Hcm91cC5yZWFjdCcpO1xudmFyIEZpeGVkRGF0YVRhYmxlQ29sdW1uID0gcmVxdWlyZSgnLi9GaXhlZERhdGFUYWJsZUNvbHVtbi5yZWFjdCcpO1xuXG52YXIgRElSX1NJR04gPSBMb2NhbGUuaXNSVEwoKSA/IC0xIDogKzE7XG4vLyBBIGNlbGwgdXAgdG8gNXB4IG91dHNpZGUgb2YgdGhlIHZpc2libGUgYXJlYSB3aWxsIHN0aWxsIGJlIGNvbnNpZGVyZWQgdmlzaWJsZVxudmFyIENFTExfVklTSUJJTElUWV9UT0xFUkFOQ0UgPSA1OyAvLyB1c2VkIGZvciBmbHlvdXRzXG5cbmZ1bmN0aW9uIHJlbmRlclRvU3RyaW5nKHZhbHVlKSAvKnN0cmluZyove1xuICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiAnJztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gU3RyaW5nKHZhbHVlKTtcbiAgfVxufVxuXG4vKipcbiAqIEhlbHBlciBtZXRob2QgdG8gZXhlY3V0ZSBhIGNhbGxiYWNrIGFnYWluc3QgYWxsIGNvbHVtbnMgZ2l2ZW4gdGhlIGNoaWxkcmVuXG4gKiBvZiBhIHRhYmxlLlxuICogQHBhcmFtIHs/b2JqZWN0fGFycmF5fSBjaGlsZHJlblxuICogICAgQ2hpbGRyZW4gb2YgYSB0YWJsZS5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4gKiAgICBGdW5jdGlvbiB0byBleGNlY3V0ZSBmb3IgZWFjaCBjb2x1bW4uIEl0IGlzIHBhc3NlZCB0aGUgY29sdW1uLlxuICovXG5mdW5jdGlvbiBmb3JFYWNoQ29sdW1uKGNoaWxkcmVuLCBjYWxsYmFjaykge1xuICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICBpZiAoY2hpbGQudHlwZSA9PT0gRml4ZWREYXRhVGFibGVDb2x1bW5Hcm91cCkge1xuICAgICAgZm9yRWFjaENvbHVtbihjaGlsZC5wcm9wcy5jaGlsZHJlbiwgY2FsbGJhY2spO1xuICAgIH0gZWxzZSBpZiAoY2hpbGQudHlwZSA9PT0gRml4ZWREYXRhVGFibGVDb2x1bW4pIHtcbiAgICAgIGNhbGxiYWNrKGNoaWxkKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIEhlbHBlciBtZXRob2QgdG8gbWFwIGNvbHVtbnMgdG8gbmV3IGNvbHVtbnMuIFRoaXMgdGFrZXMgaW50byBhY2NvdW50IGNvbHVtblxuICogZ3JvdXBzIGFuZCB3aWxsIGdlbmVyYXRlIGEgbmV3IGNvbHVtbiBncm91cCBpZiBpdHMgY29sdW1ucyBjaGFuZ2UuXG4gKiBAcGFyYW0gez9vYmplY3R8YXJyYXl9IGNoaWxkcmVuXG4gKiAgICBDaGlsZHJlbiBvZiBhIHRhYmxlLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcbiAqICAgIEZ1bmN0aW9uIHRvIGV4Y2VjdXRlIGZvciBlYWNoIGNvbHVtbi4gSXQgaXMgcGFzc2VkIHRoZSBjb2x1bW4gYW5kIHNob3VsZFxuICogICAgcmV0dXJuIGEgcmVzdWx0IGNvbHVtbi5cbiAqL1xuZnVuY3Rpb24gbWFwQ29sdW1ucyhjaGlsZHJlbiwgY2FsbGJhY2spIHtcbiAgdmFyIG5ld0NoaWxkcmVuID0gW107XG4gIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIGZ1bmN0aW9uIChvcmlnaW5hbENoaWxkKSB7XG4gICAgdmFyIG5ld0NoaWxkID0gb3JpZ2luYWxDaGlsZDtcblxuICAgIC8vIFRoZSBjaGlsZCBpcyBlaXRoZXIgYSBjb2x1bW4gZ3JvdXAgb3IgYSBjb2x1bW4uIElmIGl0IGlzIGEgY29sdW1uIGdyb3VwXG4gICAgLy8gd2UgbmVlZCB0byBpdGVyYXRlIG92ZXIgaXRzIGNvbHVtbnMgYW5kIHRoZW4gcG90ZW50aWFsbHkgZ2VuZXJhdGUgYVxuICAgIC8vIG5ldyBjb2x1bW4gZ3JvdXBcbiAgICBpZiAob3JpZ2luYWxDaGlsZC50eXBlID09PSBGaXhlZERhdGFUYWJsZUNvbHVtbkdyb3VwKSB7XG4gICAgICB2YXIgaGF2ZUNvbHVtbnNDaGFuZ2VkID0gZmFsc2U7XG4gICAgICB2YXIgbmV3Q29sdW1ucyA9IFtdO1xuXG4gICAgICBmb3JFYWNoQ29sdW1uKG9yaWdpbmFsQ2hpbGQucHJvcHMuY2hpbGRyZW4sIGZ1bmN0aW9uIChvcmlnaW5hbGNvbHVtbikge1xuICAgICAgICB2YXIgbmV3Q29sdW1uID0gY2FsbGJhY2sob3JpZ2luYWxjb2x1bW4pO1xuICAgICAgICBpZiAobmV3Q29sdW1uICE9PSBvcmlnaW5hbGNvbHVtbikge1xuICAgICAgICAgIGhhdmVDb2x1bW5zQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgbmV3Q29sdW1ucy5wdXNoKG5ld0NvbHVtbik7XG4gICAgICB9KTtcblxuICAgICAgLy8gSWYgdGhlIGNvbHVtbiBncm91cHMgY29sdW1ucyBoYXZlIGNoYW5nZWQgY2xvbmUgdGhlIGdyb3VwIGFuZCBzdXBwbHlcbiAgICAgIC8vIG5ldyBjaGlsZHJlblxuICAgICAgaWYgKGhhdmVDb2x1bW5zQ2hhbmdlZCkge1xuICAgICAgICBuZXdDaGlsZCA9IFJlYWN0LmNsb25lRWxlbWVudChvcmlnaW5hbENoaWxkLCB7XG4gICAgICAgICAgY2hpbGRyZW46IG5ld0NvbHVtbnNcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChvcmlnaW5hbENoaWxkLnR5cGUgPT09IEZpeGVkRGF0YVRhYmxlQ29sdW1uKSB7XG4gICAgICBuZXdDaGlsZCA9IGNhbGxiYWNrKG9yaWdpbmFsQ2hpbGQpO1xuICAgIH1cblxuICAgIG5ld0NoaWxkcmVuLnB1c2gobmV3Q2hpbGQpO1xuICB9KTtcblxuICByZXR1cm4gbmV3Q2hpbGRyZW47XG59XG5cbnZhciBGaXhlZERhdGFUYWJsZUhlbHBlciA9IHtcbiAgRElSX1NJR046IERJUl9TSUdOLFxuICBDRUxMX1ZJU0lCSUxJVFlfVE9MRVJBTkNFOiBDRUxMX1ZJU0lCSUxJVFlfVE9MRVJBTkNFLFxuICByZW5kZXJUb1N0cmluZzogcmVuZGVyVG9TdHJpbmcsXG4gIGZvckVhY2hDb2x1bW46IGZvckVhY2hDb2x1bW4sXG4gIG1hcENvbHVtbnM6IG1hcENvbHVtbnNcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRml4ZWREYXRhVGFibGVIZWxwZXI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9GaXhlZERhdGFUYWJsZUhlbHBlci5qc1xuICoqIG1vZHVsZSBpZCA9IDQ1NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgTG9jYWxlXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIEhhcmQgY29kZSB0aGlzIGZvciBub3cuXG52YXIgTG9jYWxlID0ge1xuICBpc1JUTDogZnVuY3Rpb24gaXNSVEwoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxuICBnZXREaXJlY3Rpb246IGZ1bmN0aW9uIGdldERpcmVjdGlvbigpIHtcbiAgICByZXR1cm4gJ0xUUic7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTG9jYWxlO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvTG9jYWxlLmpzXG4gKiogbW9kdWxlIGlkID0gNDU3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBGaXhlZERhdGFUYWJsZUNvbHVtbkdyb3VwLnJlYWN0XG4gKi9cblxuLyoqXG4gKiBUUkFOU0lUSU9OIFNISU1cbiAqIFRoaXMgcHJvdmlkZXMgYW4gaW50ZXJtZWRpYXRlIG1hcHBpbmcgZnJvbSB0aGUgb2xkIEFQSSB0byB0aGUgbmV3IEFQSS5cbiAqXG4gKiBXaGVuIHJlYWR5LCByZW1vdmUgdGhpcyBmaWxlIGFuZCByZW5hbWUgdGhlIHByb3ZpZGVzTW9kdWxlIGluXG4gKiBGaXhlZERhdGFUYWJsZUNvbHVtbk5ldy5yZWFjdFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgnLi9SZWFjdCcpO1xuXG52YXIgVHJhbnNpdGlvbkNvbHVtbkdyb3VwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1RyYW5zaXRpb25Db2x1bW5Hcm91cCcsXG5cbiAgc3RhdGljczoge1xuICAgIF9fVGFibGVDb2x1bW5Hcm91cF9fOiB0cnVlXG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ29tcG9uZW50IDxUcmFuc2l0aW9uQ29sdW1uR3JvdXAgLz4gc2hvdWxkIG5ldmVyIHJlbmRlcicpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gVHJhbnNpdGlvbkNvbHVtbkdyb3VwO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvRml4ZWREYXRhVGFibGVDb2x1bW5Hcm91cC5yZWFjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDQ1OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgRml4ZWREYXRhVGFibGVDb2x1bW4ucmVhY3RcbiAqL1xuXG4vKipcbiAqIFRSQU5TSVRJT04gU0hJTVxuICogVGhpcyBhY3RzIHRvIHByb3ZpZGUgYW4gaW50ZXJtZWRpYXRlIG1hcHBpbmcgZnJvbSB0aGUgb2xkIEFQSSB0byB0aGUgbmV3IEFQSS5cbiAqXG4gKiBXaGVuIHJlYWR5LCByZW1vdmUgdGhpcyBmaWxlIGFuZCByZW5hbWUgdGhlIHByb3ZpZGVzTW9kdWxlIGluXG4gKiBGaXhlZERhdGFUYWJsZUNvbHVtbk5ldy5yZWFjdFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgnLi9SZWFjdCcpO1xuXG52YXIgVHJhbnNpdGlvbkNvbHVtbiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdUcmFuc2l0aW9uQ29sdW1uJyxcblxuICBzdGF0aWNzOiB7XG4gICAgX19UYWJsZUNvbHVtbl9fOiB0cnVlXG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ29tcG9uZW50IDxUcmFuc2l0aW9uQ29sdW1uIC8+IHNob3VsZCBuZXZlciByZW5kZXInKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRyYW5zaXRpb25Db2x1bW47XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9GaXhlZERhdGFUYWJsZUNvbHVtbi5yZWFjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDQ1OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgRml4ZWREYXRhVGFibGVDZWxsLnJlYWN0XG4gKiBAdHlwZWNoZWNrc1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG52YXIgRml4ZWREYXRhVGFibGVDZWxsRGVmYXVsdCA9IHJlcXVpcmUoJy4vRml4ZWREYXRhVGFibGVDZWxsRGVmYXVsdC5yZWFjdCcpO1xudmFyIEZpeGVkRGF0YVRhYmxlSGVscGVyID0gcmVxdWlyZSgnLi9GaXhlZERhdGFUYWJsZUhlbHBlcicpO1xudmFyIFJlYWN0ID0gcmVxdWlyZSgnLi9SZWFjdCcpO1xudmFyIGN4ID0gcmVxdWlyZSgnLi9jeCcpO1xudmFyIGpvaW5DbGFzc2VzID0gcmVxdWlyZSgnLi9qb2luQ2xhc3NlcycpO1xuXG52YXIgRElSX1NJR04gPSBGaXhlZERhdGFUYWJsZUhlbHBlci5ESVJfU0lHTjtcblxudmFyIFByb3BUeXBlcyA9IFJlYWN0LlByb3BUeXBlcztcblxudmFyIERFRkFVTFRfUFJPUFMgPSB7XG4gIGFsaWduOiAnbGVmdCcsXG4gIGhpZ2hsaWdodGVkOiBmYWxzZVxufTtcblxudmFyIEZpeGVkRGF0YVRhYmxlQ2VsbCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdGaXhlZERhdGFUYWJsZUNlbGwnLFxuXG4gIC8qKlxuICAgKiBQcm9wVHlwZXMgYXJlIGRpc2FibGVkIGluIHRoaXMgY29tcG9uZW50LCBiZWNhdXNlIGhhdmluZyB0aGVtIG9uIHNsb3dzXG4gICAqIGRvd24gdGhlIEZpeGVkRGF0YVRhYmxlIGh1Z2VseSBpbiBERVYgbW9kZS4gWW91IGNhbiBlbmFibGUgdGhlbSBiYWNrIGZvclxuICAgKiBkZXZlbG9wbWVudCwgYnV0IHBsZWFzZSBkb24ndCBjb21taXQgdGhpcyBjb21wb25lbnQgd2l0aCBlbmFibGVkIHByb3BUeXBlcy5cbiAgICovXG4gIHByb3BUeXBlc19ESVNBQkxFRF9GT1JfUEVSRk9STUFOQ0U6IHtcbiAgICBpc1Njcm9sbGluZzogUHJvcFR5cGVzLmJvb2wsXG4gICAgYWxpZ246IFByb3BUeXBlcy5vbmVPZihbJ2xlZnQnLCAnY2VudGVyJywgJ3JpZ2h0J10pLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBoaWdobGlnaHRlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgd2lkdGg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBtaW5XaWR0aDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBtYXhXaWR0aDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcblxuICAgIGNlbGw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5lbGVtZW50LCBQcm9wVHlwZXMuZnVuY10pLFxuXG4gICAgY29sdW1uS2V5OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG5cbiAgICAvKipcbiAgICAgKiBUaGUgcm93IGluZGV4IHRoYXQgd2lsbCBiZSBwYXNzZWQgdG8gYGNlbGxSZW5kZXJlcmAgdG8gcmVuZGVyLlxuICAgICAqL1xuICAgIHJvd0luZGV4OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayBmb3Igd2hlbiByZXNpemVyIGtub2IgKGluIEZpeGVkRGF0YVRhYmxlQ2VsbCkgaXMgY2xpY2tlZFxuICAgICAqIHRvIGluaXRpYWxpemUgcmVzaXppbmcuIFBsZWFzZSBub3RlIHRoaXMgaXMgb25seSBvbiB0aGUgY2VsbHNcbiAgICAgKiBpbiB0aGUgaGVhZGVyLlxuICAgICAqIEBwYXJhbSBudW1iZXIgY29tYmluZWRXaWR0aFxuICAgICAqIEBwYXJhbSBudW1iZXIgbGVmdFxuICAgICAqIEBwYXJhbSBudW1iZXIgd2lkdGhcbiAgICAgKiBAcGFyYW0gbnVtYmVyIG1pbldpZHRoXG4gICAgICogQHBhcmFtIG51bWJlciBtYXhXaWR0aFxuICAgICAqIEBwYXJhbSBudW1iZXJ8c3RyaW5nIGNvbHVtbktleVxuICAgICAqIEBwYXJhbSBvYmplY3QgZXZlbnRcbiAgICAgKi9cbiAgICBvbkNvbHVtblJlc2l6ZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGVmdCBvZmZzZXQgaW4gcGl4ZWxzIG9mIHRoZSBjZWxsLlxuICAgICAqL1xuICAgIGxlZnQ6IFByb3BUeXBlcy5udW1iZXJcbiAgfSxcblxuICBzaG91bGRDb21wb25lbnRVcGRhdGU6IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpIHtcbiAgICByZXR1cm4gIW5leHRQcm9wcy5pc1Njcm9sbGluZyB8fCB0aGlzLnByb3BzLnJvd0luZGV4ICE9PSBuZXh0UHJvcHMucm93SW5kZXg7XG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSAvKm9iamVjdCove1xuICAgIHJldHVybiBERUZBVUxUX1BST1BTO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkgLypvYmplY3QqL3tcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgaGVpZ2h0ID0gX3Byb3BzLmhlaWdodDtcbiAgICB2YXIgd2lkdGggPSBfcHJvcHMud2lkdGg7XG4gICAgdmFyIGNvbHVtbktleSA9IF9wcm9wcy5jb2x1bW5LZXk7XG5cbiAgICB2YXIgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbJ2hlaWdodCcsICd3aWR0aCcsICdjb2x1bW5LZXknXSk7XG5cbiAgICB2YXIgc3R5bGUgPSB7XG4gICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgIHdpZHRoOiB3aWR0aFxuICAgIH07XG5cbiAgICBpZiAoRElSX1NJR04gPT09IDEpIHtcbiAgICAgIHN0eWxlLmxlZnQgPSBwcm9wcy5sZWZ0O1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5yaWdodCA9IHByb3BzLmxlZnQ7XG4gICAgfVxuXG4gICAgdmFyIGNsYXNzTmFtZSA9IGpvaW5DbGFzc2VzKGN4KHtcbiAgICAgICdmaXhlZERhdGFUYWJsZUNlbGxMYXlvdXQvbWFpbic6IHRydWUsXG4gICAgICAnZml4ZWREYXRhVGFibGVDZWxsTGF5b3V0L2xhc3RDaGlsZCc6IHByb3BzLmxhc3RDaGlsZCxcbiAgICAgICdmaXhlZERhdGFUYWJsZUNlbGxMYXlvdXQvYWxpZ25SaWdodCc6IHByb3BzLmFsaWduID09PSAncmlnaHQnLFxuICAgICAgJ2ZpeGVkRGF0YVRhYmxlQ2VsbExheW91dC9hbGlnbkNlbnRlcic6IHByb3BzLmFsaWduID09PSAnY2VudGVyJyxcbiAgICAgICdwdWJsaWMvZml4ZWREYXRhVGFibGVDZWxsL2FsaWduUmlnaHQnOiBwcm9wcy5hbGlnbiA9PT0gJ3JpZ2h0JyxcbiAgICAgICdwdWJsaWMvZml4ZWREYXRhVGFibGVDZWxsL2hpZ2hsaWdodGVkJzogcHJvcHMuaGlnaGxpZ2h0ZWQsXG4gICAgICAncHVibGljL2ZpeGVkRGF0YVRhYmxlQ2VsbC9tYWluJzogdHJ1ZVxuICAgIH0pLCBwcm9wcy5jbGFzc05hbWUpO1xuXG4gICAgdmFyIGNvbHVtblJlc2l6ZXJDb21wb25lbnQ7XG4gICAgaWYgKHByb3BzLm9uQ29sdW1uUmVzaXplKSB7XG4gICAgICB2YXIgY29sdW1uUmVzaXplclN0eWxlID0ge1xuICAgICAgICBoZWlnaHQ6IGhlaWdodFxuICAgICAgfTtcbiAgICAgIGNvbHVtblJlc2l6ZXJDb21wb25lbnQgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzTmFtZTogY3goJ2ZpeGVkRGF0YVRhYmxlQ2VsbExheW91dC9jb2x1bW5SZXNpemVyQ29udGFpbmVyJyksXG4gICAgICAgICAgc3R5bGU6IGNvbHVtblJlc2l6ZXJTdHlsZSxcbiAgICAgICAgICBvbk1vdXNlRG93bjogdGhpcy5fb25Db2x1bW5SZXNpemVyTW91c2VEb3duIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IGpvaW5DbGFzc2VzKGN4KCdmaXhlZERhdGFUYWJsZUNlbGxMYXlvdXQvY29sdW1uUmVzaXplcktub2InKSwgY3goJ3B1YmxpYy9maXhlZERhdGFUYWJsZUNlbGwvY29sdW1uUmVzaXplcktub2InKSksXG4gICAgICAgICAgc3R5bGU6IGNvbHVtblJlc2l6ZXJTdHlsZVxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG5cbiAgICB2YXIgY2VsbFByb3BzID0ge1xuICAgICAgY29sdW1uS2V5OiBjb2x1bW5LZXksXG4gICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgIHdpZHRoOiB3aWR0aFxuICAgIH07XG5cbiAgICBpZiAocHJvcHMucm93SW5kZXggPj0gMCkge1xuICAgICAgY2VsbFByb3BzLnJvd0luZGV4ID0gcHJvcHMucm93SW5kZXg7XG4gICAgfVxuXG4gICAgdmFyIGNvbnRlbnQ7XG4gICAgaWYgKFJlYWN0LmlzVmFsaWRFbGVtZW50KHByb3BzLmNlbGwpKSB7XG4gICAgICBjb250ZW50ID0gUmVhY3QuY2xvbmVFbGVtZW50KHByb3BzLmNlbGwsIGNlbGxQcm9wcyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcHJvcHMuY2VsbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29udGVudCA9IHByb3BzLmNlbGwoY2VsbFByb3BzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGVudCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIEZpeGVkRGF0YVRhYmxlQ2VsbERlZmF1bHQsXG4gICAgICAgIGNlbGxQcm9wcyxcbiAgICAgICAgcHJvcHMuY2VsbFxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSwgc3R5bGU6IHN0eWxlIH0sXG4gICAgICBjb2x1bW5SZXNpemVyQ29tcG9uZW50LFxuICAgICAgY29udGVudFxuICAgICk7XG4gIH0sXG5cbiAgX29uQ29sdW1uUmVzaXplck1vdXNlRG93bjogZnVuY3Rpb24gX29uQ29sdW1uUmVzaXplck1vdXNlRG93biggLypvYmplY3QqL2V2ZW50KSB7XG4gICAgdGhpcy5wcm9wcy5vbkNvbHVtblJlc2l6ZSh0aGlzLnByb3BzLmxlZnQsIHRoaXMucHJvcHMud2lkdGgsIHRoaXMucHJvcHMubWluV2lkdGgsIHRoaXMucHJvcHMubWF4V2lkdGgsIHRoaXMucHJvcHMuY29sdW1uS2V5LCBldmVudCk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZpeGVkRGF0YVRhYmxlQ2VsbDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL0ZpeGVkRGF0YVRhYmxlQ2VsbC5yZWFjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDQ2MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgRml4ZWREYXRhVGFibGVDZWxsRGVmYXVsdC5yZWFjdFxuICogQHR5cGVjaGVja3NcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxudmFyIFJlYWN0ID0gcmVxdWlyZSgnLi9SZWFjdCcpO1xuXG52YXIgY3ggPSByZXF1aXJlKCcuL2N4Jyk7XG52YXIgam9pbkNsYXNzZXMgPSByZXF1aXJlKCcuL2pvaW5DbGFzc2VzJyk7XG5cbnZhciBQcm9wVHlwZXMgPSBSZWFjdC5Qcm9wVHlwZXM7XG5cbi8qKlxuICogQ29tcG9uZW50IHRoYXQgaGFuZGxlcyBkZWZhdWx0IGNlbGwgbGF5b3V0IGFuZCBzdHlsaW5nLlxuICpcbiAqIEFsbCBwcm9wcyB1bmxlc3Mgc3BlY2lmaWVkIGJlbG93IHdpbGwgYmUgc2V0IG9udG8gdGhlIHRvcCBsZXZlbCBgZGl2YFxuICogcmVuZGVyZWQgYnkgdGhlIGNlbGwuXG4gKlxuICogRXhhbXBsZSB1c2FnZSB2aWEgZnJvbSBhIGBDb2x1bW5gOlxuICogYGBgXG4gKiBjb25zdCBNeUNvbHVtbiA9IChcbiAqICAgPENvbHVtblxuICogICAgIGNlbGw9eyh7cm93SW5kZXgsIHdpZHRoLCBoZWlnaHR9KSA9PiAoXG4gKiAgICAgICA8Q2VsbFxuICogICAgICAgICB3aWR0aD17d2lkdGh9XG4gKiAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICogICAgICAgICBjbGFzc05hbWU9XCJteS1jbGFzc1wiPlxuICogICAgICAgICBDZWxsIG51bWJlcjogPHNwYW4+e3Jvd0luZGV4fTwvc3Bhbj5cbiogICAgICAgIDwvQ2VsbD5cbiAqICAgICApfVxuICogICAgIHdpZHRoPXsxMDB9XG4gKiAgIC8+XG4gKiApO1xuICogYGBgXG4gKi9cbnZhciBGaXhlZERhdGFUYWJsZUNlbGxEZWZhdWx0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0ZpeGVkRGF0YVRhYmxlQ2VsbERlZmF1bHQnLFxuXG4gIHByb3BUeXBlczoge1xuXG4gICAgLyoqXG4gICAgICogT3V0ZXIgaGVpZ2h0IG9mIHRoZSBjZWxsLlxuICAgICAqL1xuICAgIGhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKlxuICAgICAqIE91dGVyIHdpZHRoIG9mIHRoZSBjZWxsLlxuICAgICAqL1xuICAgIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLyoqXG4gICAgICogT3B0aW9uYWwgcHJvcCB0aGF0IGlmIHNwZWNpZmllZCBvbiB0aGUgYENvbHVtbmAgd2lsbCBiZSBwYXNzZWQgdG8gdGhlXG4gICAgICogY2VsbC4gSXQgY2FuIGJlIHVzZWQgdG8gdW5pcXVlbHkgaWRlbnRpZnkgd2hpY2ggY29sdW1uIGlzIHRoZSBjZWxsIGlzIGluLlxuICAgICAqL1xuICAgIGNvbHVtbktleTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGhlaWdodCA9IF9wcm9wcy5oZWlnaHQ7XG4gICAgdmFyIHdpZHRoID0gX3Byb3BzLndpZHRoO1xuICAgIHZhciBzdHlsZSA9IF9wcm9wcy5zdHlsZTtcbiAgICB2YXIgY2xhc3NOYW1lID0gX3Byb3BzLmNsYXNzTmFtZTtcbiAgICB2YXIgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW47XG4gICAgdmFyIGNvbHVtbktleSA9IF9wcm9wcy5jb2x1bW5LZXk7XG4gICAgdmFyIC8vIFVudXNlZCBidXQgc2hvdWxkIG5vdCBiZSBwYXNzZWQgdGhyb3VnaFxuICAgIHJvd0luZGV4ID0gX3Byb3BzLnJvd0luZGV4O1xuXG4gICAgdmFyIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wcywgWydoZWlnaHQnLCAnd2lkdGgnLCAnc3R5bGUnLCAnY2xhc3NOYW1lJywgJ2NoaWxkcmVuJywgJ2NvbHVtbktleScsICdyb3dJbmRleCddKTtcblxuICAgIHZhciBpbm5lclN0eWxlID0gX2V4dGVuZHMoe1xuICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICB3aWR0aDogd2lkdGhcbiAgICB9LCBzdHlsZSk7XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICAgIGNsYXNzTmFtZTogam9pbkNsYXNzZXMoY3goJ2ZpeGVkRGF0YVRhYmxlQ2VsbExheW91dC93cmFwMScpLCBjeCgncHVibGljL2ZpeGVkRGF0YVRhYmxlQ2VsbC93cmFwMScpLCBjbGFzc05hbWUpLFxuICAgICAgICBzdHlsZTogaW5uZXJTdHlsZSB9KSxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBqb2luQ2xhc3NlcyhjeCgnZml4ZWREYXRhVGFibGVDZWxsTGF5b3V0L3dyYXAyJyksIGN4KCdwdWJsaWMvZml4ZWREYXRhVGFibGVDZWxsL3dyYXAyJykpIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2RpdicsXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBqb2luQ2xhc3NlcyhjeCgnZml4ZWREYXRhVGFibGVDZWxsTGF5b3V0L3dyYXAzJyksIGN4KCdwdWJsaWMvZml4ZWREYXRhVGFibGVDZWxsL3dyYXAzJykpIH0sXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgeyBjbGFzc05hbWU6IGN4KCdwdWJsaWMvZml4ZWREYXRhVGFibGVDZWxsL2NlbGxDb250ZW50JykgfSxcbiAgICAgICAgICAgIGNoaWxkcmVuXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRml4ZWREYXRhVGFibGVDZWxsRGVmYXVsdDtcbi8vIFVudXNlZCBidXQgc2hvdWxkIG5vdCBiZSBwYXNzZWQgdGhyb3VnaFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvRml4ZWREYXRhVGFibGVDZWxsRGVmYXVsdC5yZWFjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDQ2MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIGpvaW5DbGFzc2VzXG4gKiBAdHlwZWNoZWNrcyBzdGF0aWMtb25seVxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDb21iaW5lcyBtdWx0aXBsZSBjbGFzc05hbWUgc3RyaW5ncyBpbnRvIG9uZS5cbiAqIGh0dHA6Ly9qc3BlcmYuY29tL2pvaW5jbGFzc2VzLWFyZ3MtdnMtYXJyYXlcbiAqXG4gKiBAcGFyYW0gey4uLj9zdHJpbmd9IGNsYXNzTmFtZVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBqb2luQ2xhc3NlcyhjbGFzc05hbWUgLyosIC4uLiAqLykge1xuICBpZiAoIWNsYXNzTmFtZSkge1xuICAgIGNsYXNzTmFtZSA9ICcnO1xuICB9XG4gIHZhciBuZXh0Q2xhc3M7XG4gIHZhciBhcmdMZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuICBpZiAoYXJnTGVuZ3RoID4gMSkge1xuICAgIGZvciAodmFyIGlpID0gMTsgaWkgPCBhcmdMZW5ndGg7IGlpKyspIHtcbiAgICAgIG5leHRDbGFzcyA9IGFyZ3VtZW50c1tpaV07XG4gICAgICBpZiAobmV4dENsYXNzKSB7XG4gICAgICAgIGNsYXNzTmFtZSA9IChjbGFzc05hbWUgPyBjbGFzc05hbWUgKyAnICcgOiAnJykgKyBuZXh0Q2xhc3M7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBjbGFzc05hbWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gam9pbkNsYXNzZXM7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9qb2luQ2xhc3Nlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDQ2MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBUaGlzIGlzIHRvIGJlIHVzZWQgd2l0aCB0aGUgRml4ZWREYXRhVGFibGUuIEl0IGlzIGEgcmVhZCBsaW5lXG4gKiB0aGF0IHdoZW4geW91IGNsaWNrIG9uIGEgY29sdW1uIHRoYXQgaXMgcmVzaXphYmxlIGFwcGVhcnMgYW5kIGFsbG93c1xuICogeW91IHRvIHJlc2l6ZSB0aGUgY29ycmVzcG9uZGluZyBjb2x1bW4uXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIEZpeGVkRGF0YVRhYmxlQ29sdW1uUmVzaXplSGFuZGxlLnJlYWN0XG4gKiBAdHlwZWNoZWNrc1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIERPTU1vdXNlTW92ZVRyYWNrZXIgPSByZXF1aXJlKCcuL0RPTU1vdXNlTW92ZVRyYWNrZXInKTtcbnZhciBMb2NhbGUgPSByZXF1aXJlKCcuL0xvY2FsZScpO1xudmFyIFJlYWN0ID0gcmVxdWlyZSgnLi9SZWFjdCcpO1xudmFyIFJlYWN0Q29tcG9uZW50V2l0aFB1cmVSZW5kZXJNaXhpbiA9IHJlcXVpcmUoJy4vUmVhY3RDb21wb25lbnRXaXRoUHVyZVJlbmRlck1peGluJyk7XG5cbnZhciBjbGFtcCA9IHJlcXVpcmUoJy4vY2xhbXAnKTtcbnZhciBjeCA9IHJlcXVpcmUoJy4vY3gnKTtcblxudmFyIFByb3BUeXBlcyA9IFJlYWN0LlByb3BUeXBlcztcblxudmFyIEZpeGVkRGF0YVRhYmxlQ29sdW1uUmVzaXplSGFuZGxlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0ZpeGVkRGF0YVRhYmxlQ29sdW1uUmVzaXplSGFuZGxlJyxcblxuICBtaXhpbnM6IFtSZWFjdENvbXBvbmVudFdpdGhQdXJlUmVuZGVyTWl4aW5dLFxuXG4gIHByb3BUeXBlczoge1xuICAgIHZpc2libGU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGlzIHRoZSBoZWlnaHQgb2YgdGhlIGxpbmVcbiAgICAgKi9cbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIE9mZnNldCBmcm9tIGxlZnQgYm9yZGVyIG9mIHRoZSB0YWJsZSwgcGxlYXNlIG5vdGVcbiAgICAgKiB0aGF0IHRoZSBsaW5lIGlzIGEgYm9yZGVyIG9uIGRpZmYuIFNvIHRoaXMgaXMgcmVhbGx5IHRoZVxuICAgICAqIG9mZnNldCBvZiB0aGUgY29sdW1uIGl0c2VsZi5cbiAgICAgKi9cbiAgICBsZWZ0T2Zmc2V0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBIZWlnaHQgb2YgdGhlIGNsaWNrYWJsZSByZWdpb24gb2YgdGhlIGxpbmUuXG4gICAgICogVGhpcyBpcyBhc3N1bWVkIHRvIGJlIGF0IHRoZSB0b3Agb2YgdGhlIGxpbmUuXG4gICAgICovXG4gICAga25vYkhlaWdodDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGxpbmUgaXMgYSBib3JkZXIgb24gYSBkaWZmLCBzbyB0aGlzIGlzIGVzc2VudGlhbGx5XG4gICAgICogdGhlIHdpZHRoIG9mIGNvbHVtbi5cbiAgICAgKi9cbiAgICBpbml0aWFsV2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbWluaW11bSB3aWR0aCB0aGlzIGRyYWdnZXIgd2lsbCBjb2xsYXBzZSB0b1xuICAgICAqL1xuICAgIG1pbldpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLyoqXG4gICAgICogVGhlIG1heGltdW0gd2lkdGggdGhpcyBkcmFnZ2VyIHdpbGwgY29sbGFwc2UgdG9cbiAgICAgKi9cbiAgICBtYXhXaWR0aDogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKlxuICAgICAqIEluaXRpYWwgY2xpY2sgZXZlbnQgb24gdGhlIGhlYWRlciBjZWxsLlxuICAgICAqL1xuICAgIGluaXRpYWxFdmVudDogUHJvcFR5cGVzLm9iamVjdCxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gcmVzaXppbmcgaXMgY29tcGxldGUgdGhpcyBpcyBjYWxsZWQuXG4gICAgICovXG4gICAgb25Db2x1bW5SZXNpemVFbmQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogQ29sdW1uIGtleSBmb3IgdGhlIGNvbHVtbiBiZWluZyByZXNpemVkLlxuICAgICAqL1xuICAgIGNvbHVtbktleTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXG4gIH0sXG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSAvKm9iamVjdCove1xuICAgIHJldHVybiB7XG4gICAgICB3aWR0aDogMCxcbiAgICAgIGN1cnNvckRlbHRhOiAwXG4gICAgfTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKCAvKm9iamVjdCovbmV3UHJvcHMpIHtcbiAgICBpZiAobmV3UHJvcHMuaW5pdGlhbEV2ZW50ICYmICF0aGlzLl9tb3VzZU1vdmVUcmFja2VyLmlzRHJhZ2dpbmcoKSkge1xuICAgICAgdGhpcy5fbW91c2VNb3ZlVHJhY2tlci5jYXB0dXJlTW91c2VNb3ZlcyhuZXdQcm9wcy5pbml0aWFsRXZlbnQpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHdpZHRoOiBuZXdQcm9wcy5pbml0aWFsV2lkdGgsXG4gICAgICAgIGN1cnNvckRlbHRhOiBuZXdQcm9wcy5pbml0aWFsV2lkdGhcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5fbW91c2VNb3ZlVHJhY2tlciA9IG5ldyBET01Nb3VzZU1vdmVUcmFja2VyKHRoaXMuX29uTW92ZSwgdGhpcy5fb25Db2x1bW5SZXNpemVFbmQsIGRvY3VtZW50LmJvZHkpO1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLl9tb3VzZU1vdmVUcmFja2VyLnJlbGVhc2VNb3VzZU1vdmVzKCk7XG4gICAgdGhpcy5fbW91c2VNb3ZlVHJhY2tlciA9IG51bGw7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSAvKm9iamVjdCove1xuICAgIHZhciBzdHlsZSA9IHtcbiAgICAgIHdpZHRoOiB0aGlzLnN0YXRlLndpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLnByb3BzLmhlaWdodFxuICAgIH07XG4gICAgaWYgKExvY2FsZS5pc1JUTCgpKSB7XG4gICAgICBzdHlsZS5yaWdodCA9IHRoaXMucHJvcHMubGVmdE9mZnNldDtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUubGVmdCA9IHRoaXMucHJvcHMubGVmdE9mZnNldDtcbiAgICB9XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiBjeCh7XG4gICAgICAgICAgJ2ZpeGVkRGF0YVRhYmxlQ29sdW1uUmVzaXplckxpbmVMYXlvdXQvbWFpbic6IHRydWUsXG4gICAgICAgICAgJ2ZpeGVkRGF0YVRhYmxlQ29sdW1uUmVzaXplckxpbmVMYXlvdXQvaGlkZGVuRWxlbSc6ICF0aGlzLnByb3BzLnZpc2libGUsXG4gICAgICAgICAgJ3B1YmxpYy9maXhlZERhdGFUYWJsZUNvbHVtblJlc2l6ZXJMaW5lL21haW4nOiB0cnVlXG4gICAgICAgIH0pLFxuICAgICAgICBzdHlsZTogc3R5bGUgfSxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBjeCgnZml4ZWREYXRhVGFibGVDb2x1bW5SZXNpemVyTGluZUxheW91dC9tb3VzZUFyZWEnKSxcbiAgICAgICAgc3R5bGU6IHsgaGVpZ2h0OiB0aGlzLnByb3BzLmhlaWdodCB9XG4gICAgICB9KVxuICAgICk7XG4gIH0sXG5cbiAgX29uTW92ZTogZnVuY3Rpb24gX29uTW92ZSggLypudW1iZXIqL2RlbHRhWCkge1xuICAgIGlmIChMb2NhbGUuaXNSVEwoKSkge1xuICAgICAgZGVsdGFYID0gLWRlbHRhWDtcbiAgICB9XG4gICAgdmFyIG5ld1dpZHRoID0gdGhpcy5zdGF0ZS5jdXJzb3JEZWx0YSArIGRlbHRhWDtcbiAgICB2YXIgbmV3Q29sdW1uV2lkdGggPSBjbGFtcChuZXdXaWR0aCwgdGhpcy5wcm9wcy5taW5XaWR0aCwgdGhpcy5wcm9wcy5tYXhXaWR0aCk7XG5cbiAgICAvLyBQbGVhc2Ugbm90ZSBjdXJzb3IgZGVsdGEgaXMgdGhlIGRpZmZlcmVudCBiZXR3ZWVuIHRoZSBjdXJyZW50bHkgd2lkdGhcbiAgICAvLyBhbmQgdGhlIG5ldyB3aWR0aC5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHdpZHRoOiBuZXdDb2x1bW5XaWR0aCxcbiAgICAgIGN1cnNvckRlbHRhOiBuZXdXaWR0aFxuICAgIH0pO1xuICB9LFxuXG4gIF9vbkNvbHVtblJlc2l6ZUVuZDogZnVuY3Rpb24gX29uQ29sdW1uUmVzaXplRW5kKCkge1xuICAgIHRoaXMuX21vdXNlTW92ZVRyYWNrZXIucmVsZWFzZU1vdXNlTW92ZXMoKTtcbiAgICB0aGlzLnByb3BzLm9uQ29sdW1uUmVzaXplRW5kKHRoaXMuc3RhdGUud2lkdGgsIHRoaXMucHJvcHMuY29sdW1uS2V5KTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRml4ZWREYXRhVGFibGVDb2x1bW5SZXNpemVIYW5kbGU7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9GaXhlZERhdGFUYWJsZUNvbHVtblJlc2l6ZUhhbmRsZS5yZWFjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDQ2M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgRml4ZWREYXRhVGFibGVTY3JvbGxIZWxwZXJcbiAqIEB0eXBlY2hlY2tzXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIFByZWZpeEludGVydmFsVHJlZSA9IHJlcXVpcmUoJy4vUHJlZml4SW50ZXJ2YWxUcmVlJyk7XG52YXIgY2xhbXAgPSByZXF1aXJlKCcuL2NsYW1wJyk7XG5cbnZhciBCVUZGRVJfUk9XUyA9IDU7XG52YXIgTk9fUk9XU19TQ1JPTExfUkVTVUxUID0ge1xuICBpbmRleDogMCxcbiAgb2Zmc2V0OiAwLFxuICBwb3NpdGlvbjogMCxcbiAgY29udGVudEhlaWdodDogMFxufTtcblxudmFyIEZpeGVkRGF0YVRhYmxlU2Nyb2xsSGVscGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRml4ZWREYXRhVGFibGVTY3JvbGxIZWxwZXIoXG4gIC8qbnVtYmVyKi9yb3dDb3VudCxcbiAgLypudW1iZXIqL2RlZmF1bHRSb3dIZWlnaHQsXG4gIC8qbnVtYmVyKi92aWV3cG9ydEhlaWdodCxcbiAgLyo/ZnVuY3Rpb24qL3Jvd0hlaWdodEdldHRlcikge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBGaXhlZERhdGFUYWJsZVNjcm9sbEhlbHBlcik7XG5cbiAgICB0aGlzLl9yb3dPZmZzZXRzID0gUHJlZml4SW50ZXJ2YWxUcmVlLnVuaWZvcm0ocm93Q291bnQsIGRlZmF1bHRSb3dIZWlnaHQpO1xuICAgIHRoaXMuX3N0b3JlZEhlaWdodHMgPSBuZXcgQXJyYXkocm93Q291bnQpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcm93Q291bnQ7ICsraSkge1xuICAgICAgdGhpcy5fc3RvcmVkSGVpZ2h0c1tpXSA9IGRlZmF1bHRSb3dIZWlnaHQ7XG4gICAgfVxuICAgIHRoaXMuX3Jvd0NvdW50ID0gcm93Q291bnQ7XG4gICAgdGhpcy5fcG9zaXRpb24gPSAwO1xuICAgIHRoaXMuX2NvbnRlbnRIZWlnaHQgPSByb3dDb3VudCAqIGRlZmF1bHRSb3dIZWlnaHQ7XG4gICAgdGhpcy5fZGVmYXVsdFJvd0hlaWdodCA9IGRlZmF1bHRSb3dIZWlnaHQ7XG4gICAgdGhpcy5fcm93SGVpZ2h0R2V0dGVyID0gcm93SGVpZ2h0R2V0dGVyID8gcm93SGVpZ2h0R2V0dGVyIDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGRlZmF1bHRSb3dIZWlnaHQ7XG4gICAgfTtcbiAgICB0aGlzLl92aWV3cG9ydEhlaWdodCA9IHZpZXdwb3J0SGVpZ2h0O1xuICAgIHRoaXMuc2Nyb2xsUm93SW50b1ZpZXcgPSB0aGlzLnNjcm9sbFJvd0ludG9WaWV3LmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZXRWaWV3cG9ydEhlaWdodCA9IHRoaXMuc2V0Vmlld3BvcnRIZWlnaHQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNjcm9sbEJ5ID0gdGhpcy5zY3JvbGxCeS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2Nyb2xsVG8gPSB0aGlzLnNjcm9sbFRvLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zY3JvbGxUb1JvdyA9IHRoaXMuc2Nyb2xsVG9Sb3cuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNldFJvd0hlaWdodEdldHRlciA9IHRoaXMuc2V0Um93SGVpZ2h0R2V0dGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5nZXRDb250ZW50SGVpZ2h0ID0gdGhpcy5nZXRDb250ZW50SGVpZ2h0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5nZXRSb3dQb3NpdGlvbiA9IHRoaXMuZ2V0Um93UG9zaXRpb24uYmluZCh0aGlzKTtcblxuICAgIHRoaXMuX3VwZGF0ZUhlaWdodHNJblZpZXdwb3J0KDAsIDApO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEZpeGVkRGF0YVRhYmxlU2Nyb2xsSGVscGVyLCBbe1xuICAgIGtleTogJ3NldFJvd0hlaWdodEdldHRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFJvd0hlaWdodEdldHRlciggLypmdW5jdGlvbiovcm93SGVpZ2h0R2V0dGVyKSB7XG4gICAgICB0aGlzLl9yb3dIZWlnaHRHZXR0ZXIgPSByb3dIZWlnaHRHZXR0ZXI7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2V0Vmlld3BvcnRIZWlnaHQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRWaWV3cG9ydEhlaWdodCggLypudW1iZXIqL3ZpZXdwb3J0SGVpZ2h0KSB7XG4gICAgICB0aGlzLl92aWV3cG9ydEhlaWdodCA9IHZpZXdwb3J0SGVpZ2h0O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldENvbnRlbnRIZWlnaHQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDb250ZW50SGVpZ2h0KCkgLypudW1iZXIqL3tcbiAgICAgIHJldHVybiB0aGlzLl9jb250ZW50SGVpZ2h0O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ191cGRhdGVIZWlnaHRzSW5WaWV3cG9ydCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF91cGRhdGVIZWlnaHRzSW5WaWV3cG9ydChcbiAgICAvKm51bWJlciovZmlyc3RSb3dJbmRleCxcbiAgICAvKm51bWJlciovZmlyc3RSb3dPZmZzZXQpIHtcbiAgICAgIHZhciB0b3AgPSBmaXJzdFJvd09mZnNldDtcbiAgICAgIHZhciBpbmRleCA9IGZpcnN0Um93SW5kZXg7XG4gICAgICB3aGlsZSAodG9wIDw9IHRoaXMuX3ZpZXdwb3J0SGVpZ2h0ICYmIGluZGV4IDwgdGhpcy5fcm93Q291bnQpIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlUm93SGVpZ2h0KGluZGV4KTtcbiAgICAgICAgdG9wICs9IHRoaXMuX3N0b3JlZEhlaWdodHNbaW5kZXhdO1xuICAgICAgICBpbmRleCsrO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ191cGRhdGVIZWlnaHRzQWJvdmVWaWV3cG9ydCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF91cGRhdGVIZWlnaHRzQWJvdmVWaWV3cG9ydCggLypudW1iZXIqL2ZpcnN0Um93SW5kZXgpIHtcbiAgICAgIHZhciBpbmRleCA9IGZpcnN0Um93SW5kZXggLSAxO1xuICAgICAgd2hpbGUgKGluZGV4ID49IDAgJiYgaW5kZXggPj0gZmlyc3RSb3dJbmRleCAtIEJVRkZFUl9ST1dTKSB7XG4gICAgICAgIHZhciBkZWx0YSA9IHRoaXMuX3VwZGF0ZVJvd0hlaWdodChpbmRleCk7XG4gICAgICAgIHRoaXMuX3Bvc2l0aW9uICs9IGRlbHRhO1xuICAgICAgICBpbmRleC0tO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ191cGRhdGVSb3dIZWlnaHQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfdXBkYXRlUm93SGVpZ2h0KCAvKm51bWJlciovcm93SW5kZXgpIC8qbnVtYmVyKi97XG4gICAgICBpZiAocm93SW5kZXggPCAwIHx8IHJvd0luZGV4ID49IHRoaXMuX3Jvd0NvdW50KSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuICAgICAgdmFyIG5ld0hlaWdodCA9IHRoaXMuX3Jvd0hlaWdodEdldHRlcihyb3dJbmRleCk7XG4gICAgICBpZiAobmV3SGVpZ2h0ICE9PSB0aGlzLl9zdG9yZWRIZWlnaHRzW3Jvd0luZGV4XSkge1xuICAgICAgICB2YXIgY2hhbmdlID0gbmV3SGVpZ2h0IC0gdGhpcy5fc3RvcmVkSGVpZ2h0c1tyb3dJbmRleF07XG4gICAgICAgIHRoaXMuX3Jvd09mZnNldHMuc2V0KHJvd0luZGV4LCBuZXdIZWlnaHQpO1xuICAgICAgICB0aGlzLl9zdG9yZWRIZWlnaHRzW3Jvd0luZGV4XSA9IG5ld0hlaWdodDtcbiAgICAgICAgdGhpcy5fY29udGVudEhlaWdodCArPSBjaGFuZ2U7XG4gICAgICAgIHJldHVybiBjaGFuZ2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRSb3dQb3NpdGlvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFJvd1Bvc2l0aW9uKCAvKm51bWJlciovcm93SW5kZXgpIC8qbnVtYmVyKi97XG4gICAgICB0aGlzLl91cGRhdGVSb3dIZWlnaHQocm93SW5kZXgpO1xuICAgICAgcmV0dXJuIHRoaXMuX3Jvd09mZnNldHMuc3VtVW50aWwocm93SW5kZXgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3Njcm9sbEJ5JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2Nyb2xsQnkoIC8qbnVtYmVyKi9kZWx0YSkgLypvYmplY3QqL3tcbiAgICAgIGlmICh0aGlzLl9yb3dDb3VudCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gTk9fUk9XU19TQ1JPTExfUkVTVUxUO1xuICAgICAgfVxuICAgICAgdmFyIGZpcnN0Um93ID0gdGhpcy5fcm93T2Zmc2V0cy5ncmVhdGVzdExvd2VyQm91bmQodGhpcy5fcG9zaXRpb24pO1xuICAgICAgZmlyc3RSb3cgPSBjbGFtcChmaXJzdFJvdywgMCwgTWF0aC5tYXgodGhpcy5fcm93Q291bnQgLSAxLCAwKSk7XG4gICAgICB2YXIgZmlyc3RSb3dQb3NpdGlvbiA9IHRoaXMuX3Jvd09mZnNldHMuc3VtVW50aWwoZmlyc3RSb3cpO1xuICAgICAgdmFyIHJvd0luZGV4ID0gZmlyc3RSb3c7XG4gICAgICB2YXIgcG9zaXRpb24gPSB0aGlzLl9wb3NpdGlvbjtcblxuICAgICAgdmFyIHJvd0hlaWdodENoYW5nZSA9IHRoaXMuX3VwZGF0ZVJvd0hlaWdodChyb3dJbmRleCk7XG4gICAgICBpZiAoZmlyc3RSb3dQb3NpdGlvbiAhPT0gMCkge1xuICAgICAgICBwb3NpdGlvbiArPSByb3dIZWlnaHRDaGFuZ2U7XG4gICAgICB9XG4gICAgICB2YXIgdmlzaWJsZVJvd0hlaWdodCA9IHRoaXMuX3N0b3JlZEhlaWdodHNbcm93SW5kZXhdIC0gKHBvc2l0aW9uIC0gZmlyc3RSb3dQb3NpdGlvbik7XG5cbiAgICAgIGlmIChkZWx0YSA+PSAwKSB7XG5cbiAgICAgICAgd2hpbGUgKGRlbHRhID4gMCAmJiByb3dJbmRleCA8IHRoaXMuX3Jvd0NvdW50KSB7XG4gICAgICAgICAgaWYgKGRlbHRhIDwgdmlzaWJsZVJvd0hlaWdodCkge1xuICAgICAgICAgICAgcG9zaXRpb24gKz0gZGVsdGE7XG4gICAgICAgICAgICBkZWx0YSA9IDA7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlbHRhIC09IHZpc2libGVSb3dIZWlnaHQ7XG4gICAgICAgICAgICBwb3NpdGlvbiArPSB2aXNpYmxlUm93SGVpZ2h0O1xuICAgICAgICAgICAgcm93SW5kZXgrKztcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHJvd0luZGV4IDwgdGhpcy5fcm93Q291bnQpIHtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVJvd0hlaWdodChyb3dJbmRleCk7XG4gICAgICAgICAgICB2aXNpYmxlUm93SGVpZ2h0ID0gdGhpcy5fc3RvcmVkSGVpZ2h0c1tyb3dJbmRleF07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGRlbHRhIDwgMCkge1xuICAgICAgICBkZWx0YSA9IC1kZWx0YTtcbiAgICAgICAgdmFyIGludmlzaWJsZVJvd0hlaWdodCA9IHRoaXMuX3N0b3JlZEhlaWdodHNbcm93SW5kZXhdIC0gdmlzaWJsZVJvd0hlaWdodDtcblxuICAgICAgICB3aGlsZSAoZGVsdGEgPiAwICYmIHJvd0luZGV4ID49IDApIHtcbiAgICAgICAgICBpZiAoZGVsdGEgPCBpbnZpc2libGVSb3dIZWlnaHQpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uIC09IGRlbHRhO1xuICAgICAgICAgICAgZGVsdGEgPSAwO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwb3NpdGlvbiAtPSBpbnZpc2libGVSb3dIZWlnaHQ7XG4gICAgICAgICAgICBkZWx0YSAtPSBpbnZpc2libGVSb3dIZWlnaHQ7XG4gICAgICAgICAgICByb3dJbmRleC0tO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocm93SW5kZXggPj0gMCkge1xuICAgICAgICAgICAgdmFyIGNoYW5nZSA9IHRoaXMuX3VwZGF0ZVJvd0hlaWdodChyb3dJbmRleCk7XG4gICAgICAgICAgICBpbnZpc2libGVSb3dIZWlnaHQgPSB0aGlzLl9zdG9yZWRIZWlnaHRzW3Jvd0luZGV4XTtcbiAgICAgICAgICAgIHBvc2l0aW9uICs9IGNoYW5nZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIG1heFBvc2l0aW9uID0gdGhpcy5fY29udGVudEhlaWdodCAtIHRoaXMuX3ZpZXdwb3J0SGVpZ2h0O1xuICAgICAgcG9zaXRpb24gPSBjbGFtcChwb3NpdGlvbiwgMCwgbWF4UG9zaXRpb24pO1xuICAgICAgdGhpcy5fcG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgIHZhciBmaXJzdFJvd0luZGV4ID0gdGhpcy5fcm93T2Zmc2V0cy5ncmVhdGVzdExvd2VyQm91bmQocG9zaXRpb24pO1xuICAgICAgZmlyc3RSb3dJbmRleCA9IGNsYW1wKGZpcnN0Um93SW5kZXgsIDAsIE1hdGgubWF4KHRoaXMuX3Jvd0NvdW50IC0gMSwgMCkpO1xuICAgICAgZmlyc3RSb3dQb3NpdGlvbiA9IHRoaXMuX3Jvd09mZnNldHMuc3VtVW50aWwoZmlyc3RSb3dJbmRleCk7XG4gICAgICB2YXIgZmlyc3RSb3dPZmZzZXQgPSBmaXJzdFJvd1Bvc2l0aW9uIC0gcG9zaXRpb247XG5cbiAgICAgIHRoaXMuX3VwZGF0ZUhlaWdodHNJblZpZXdwb3J0KGZpcnN0Um93SW5kZXgsIGZpcnN0Um93T2Zmc2V0KTtcbiAgICAgIHRoaXMuX3VwZGF0ZUhlaWdodHNBYm92ZVZpZXdwb3J0KGZpcnN0Um93SW5kZXgpO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBpbmRleDogZmlyc3RSb3dJbmRleCxcbiAgICAgICAgb2Zmc2V0OiBmaXJzdFJvd09mZnNldCxcbiAgICAgICAgcG9zaXRpb246IHRoaXMuX3Bvc2l0aW9uLFxuICAgICAgICBjb250ZW50SGVpZ2h0OiB0aGlzLl9jb250ZW50SGVpZ2h0XG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ19nZXRSb3dBdEVuZFBvc2l0aW9uJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2dldFJvd0F0RW5kUG9zaXRpb24oIC8qbnVtYmVyKi9yb3dJbmRleCkgLypudW1iZXIqL3tcbiAgICAgIC8vIFdlIG5lZWQgdG8gdXBkYXRlIGVub3VnaCByb3dzIGFib3ZlIHRoZSBzZWxlY3RlZCBvbmUgdG8gYmUgc3VyZSB0aGF0IHdoZW5cbiAgICAgIC8vIHdlIHNjcm9sbCB0byBzZWxlY3RlZCBwb3NpdGlvbiBhbGwgcm93cyBiZXR3ZWVuIGZpcnN0IHNob3duIGFuZCBzZWxlY3RlZFxuICAgICAgLy8gb25lIGhhdmUgbW9zdCByZWNlbnQgaGVpZ2h0cyBjb21wdXRlZCBhbmQgd2lsbCBub3QgcmVzaXplXG4gICAgICB0aGlzLl91cGRhdGVSb3dIZWlnaHQocm93SW5kZXgpO1xuICAgICAgdmFyIGN1cnJlbnRSb3dJbmRleCA9IHJvd0luZGV4O1xuICAgICAgdmFyIHRvcCA9IHRoaXMuX3N0b3JlZEhlaWdodHNbY3VycmVudFJvd0luZGV4XTtcbiAgICAgIHdoaWxlICh0b3AgPCB0aGlzLl92aWV3cG9ydEhlaWdodCAmJiBjdXJyZW50Um93SW5kZXggPj0gMCkge1xuICAgICAgICBjdXJyZW50Um93SW5kZXgtLTtcbiAgICAgICAgaWYgKGN1cnJlbnRSb3dJbmRleCA+PSAwKSB7XG4gICAgICAgICAgdGhpcy5fdXBkYXRlUm93SGVpZ2h0KGN1cnJlbnRSb3dJbmRleCk7XG4gICAgICAgICAgdG9wICs9IHRoaXMuX3N0b3JlZEhlaWdodHNbY3VycmVudFJvd0luZGV4XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdmFyIHBvc2l0aW9uID0gdGhpcy5fcm93T2Zmc2V0cy5zdW1Ubyhyb3dJbmRleCkgLSB0aGlzLl92aWV3cG9ydEhlaWdodDtcbiAgICAgIGlmIChwb3NpdGlvbiA8IDApIHtcbiAgICAgICAgcG9zaXRpb24gPSAwO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHBvc2l0aW9uO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3Njcm9sbFRvJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2Nyb2xsVG8oIC8qbnVtYmVyKi9wb3NpdGlvbikgLypvYmplY3QqL3tcbiAgICAgIGlmICh0aGlzLl9yb3dDb3VudCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gTk9fUk9XU19TQ1JPTExfUkVTVUxUO1xuICAgICAgfVxuICAgICAgaWYgKHBvc2l0aW9uIDw9IDApIHtcbiAgICAgICAgLy8gSWYgcG9zaXRpb24gbGVzcyB0aGFuIG9yIGVxdWFsIHRvIDAgZmlyc3Qgcm93IHNob3VsZCBiZSBmdWxseSB2aXNpYmxlXG4gICAgICAgIC8vIG9uIHRvcFxuICAgICAgICB0aGlzLl9wb3NpdGlvbiA9IDA7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUhlaWdodHNJblZpZXdwb3J0KDAsIDApO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaW5kZXg6IDAsXG4gICAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLl9wb3NpdGlvbixcbiAgICAgICAgICBjb250ZW50SGVpZ2h0OiB0aGlzLl9jb250ZW50SGVpZ2h0XG4gICAgICAgIH07XG4gICAgICB9IGVsc2UgaWYgKHBvc2l0aW9uID49IHRoaXMuX2NvbnRlbnRIZWlnaHQgLSB0aGlzLl92aWV3cG9ydEhlaWdodCkge1xuICAgICAgICAvLyBJZiBwb3NpdGlvbiBpcyBlcXVhbCB0byBvciBncmVhdGVyIHRoYW4gbWF4IHNjcm9sbCB2YWx1ZSwgd2UgbmVlZFxuICAgICAgICAvLyB0byBtYWtlIHN1cmUgdG8gaGF2ZSBib3R0b20gYm9yZGVyIG9mIGxhc3Qgcm93IHZpc2libGUuXG4gICAgICAgIHZhciByb3dJbmRleCA9IHRoaXMuX3Jvd0NvdW50IC0gMTtcbiAgICAgICAgcG9zaXRpb24gPSB0aGlzLl9nZXRSb3dBdEVuZFBvc2l0aW9uKHJvd0luZGV4KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3Bvc2l0aW9uID0gcG9zaXRpb247XG5cbiAgICAgIHZhciBmaXJzdFJvd0luZGV4ID0gdGhpcy5fcm93T2Zmc2V0cy5ncmVhdGVzdExvd2VyQm91bmQocG9zaXRpb24pO1xuICAgICAgZmlyc3RSb3dJbmRleCA9IGNsYW1wKGZpcnN0Um93SW5kZXgsIDAsIE1hdGgubWF4KHRoaXMuX3Jvd0NvdW50IC0gMSwgMCkpO1xuICAgICAgdmFyIGZpcnN0Um93UG9zaXRpb24gPSB0aGlzLl9yb3dPZmZzZXRzLnN1bVVudGlsKGZpcnN0Um93SW5kZXgpO1xuICAgICAgdmFyIGZpcnN0Um93T2Zmc2V0ID0gZmlyc3RSb3dQb3NpdGlvbiAtIHBvc2l0aW9uO1xuXG4gICAgICB0aGlzLl91cGRhdGVIZWlnaHRzSW5WaWV3cG9ydChmaXJzdFJvd0luZGV4LCBmaXJzdFJvd09mZnNldCk7XG4gICAgICB0aGlzLl91cGRhdGVIZWlnaHRzQWJvdmVWaWV3cG9ydChmaXJzdFJvd0luZGV4KTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaW5kZXg6IGZpcnN0Um93SW5kZXgsXG4gICAgICAgIG9mZnNldDogZmlyc3RSb3dPZmZzZXQsXG4gICAgICAgIHBvc2l0aW9uOiB0aGlzLl9wb3NpdGlvbixcbiAgICAgICAgY29udGVudEhlaWdodDogdGhpcy5fY29udGVudEhlaWdodFxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbGxvd3MgdG8gc2Nyb2xsIHRvIHNlbGVjdGVkIHJvdyB3aXRoIHNwZWNpZmllZCBvZmZzZXQuIEl0IGFsd2F5c1xuICAgICAqIGJyaW5ncyB0aGF0IHJvdyB0byB0b3Agb2Ygdmlld3BvcnQgd2l0aCB0aGF0IG9mZnNldFxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiAnc2Nyb2xsVG9Sb3cnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzY3JvbGxUb1JvdyggLypudW1iZXIqL3Jvd0luZGV4LCAvKm51bWJlciovb2Zmc2V0KSAvKm9iamVjdCove1xuICAgICAgcm93SW5kZXggPSBjbGFtcChyb3dJbmRleCwgMCwgTWF0aC5tYXgodGhpcy5fcm93Q291bnQgLSAxLCAwKSk7XG4gICAgICBvZmZzZXQgPSBjbGFtcChvZmZzZXQsIC10aGlzLl9zdG9yZWRIZWlnaHRzW3Jvd0luZGV4XSwgMCk7XG4gICAgICB2YXIgZmlyc3RSb3cgPSB0aGlzLl9yb3dPZmZzZXRzLnN1bVVudGlsKHJvd0luZGV4KTtcbiAgICAgIHJldHVybiB0aGlzLnNjcm9sbFRvKGZpcnN0Um93IC0gb2Zmc2V0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbGxvd3MgdG8gc2Nyb2xsIHRvIHNlbGVjdGVkIHJvdyBieSBicmluZ2luZyBpdCB0byB2aWV3cG9ydCB3aXRoIG1pbmltYWxcbiAgICAgKiBzY3JvbGxpbmcuIFRoaXMgdGhhdCBpZiByb3cgaXMgZnVsbHkgdmlzaWJsZSwgc2Nyb2xsIHdpbGwgbm90IGJlIGNoYW5nZWQuXG4gICAgICogSWYgdG9wIGJvcmRlciBvZiByb3cgaXMgYWJvdmUgdG9wIG9mIHZpZXdwb3J0IGl0IHdpbGwgYmUgc2Nyb2xsZWQgdG8gYmVcbiAgICAgKiBmdWxseSB2aXNpYmxlIG9uIHRoZSB0b3Agb2Ygdmlld3BvcnQuIElmIHRoZSBib3R0b20gYm9yZGVyIG9mIHJvdyBpc1xuICAgICAqIGJlbG93IGVuZCBvZiB2aWV3cG9ydCwgaXQgd2lsbCBiZSBzY3JvbGxlZCB1cCB0byBiZSBmdWxseSB2aXNpYmxlIG9uIHRoZVxuICAgICAqIGJvdHRvbSBvZiB2aWV3cG9ydC5cbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogJ3Njcm9sbFJvd0ludG9WaWV3JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2Nyb2xsUm93SW50b1ZpZXcoIC8qbnVtYmVyKi9yb3dJbmRleCkgLypvYmplY3QqL3tcbiAgICAgIHJvd0luZGV4ID0gY2xhbXAocm93SW5kZXgsIDAsIE1hdGgubWF4KHRoaXMuX3Jvd0NvdW50IC0gMSwgMCkpO1xuICAgICAgdmFyIHJvd0JlZ2luID0gdGhpcy5fcm93T2Zmc2V0cy5zdW1VbnRpbChyb3dJbmRleCk7XG4gICAgICB2YXIgcm93RW5kID0gcm93QmVnaW4gKyB0aGlzLl9zdG9yZWRIZWlnaHRzW3Jvd0luZGV4XTtcbiAgICAgIGlmIChyb3dCZWdpbiA8IHRoaXMuX3Bvc2l0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjcm9sbFRvKHJvd0JlZ2luKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fcG9zaXRpb24gKyB0aGlzLl92aWV3cG9ydEhlaWdodCA8IHJvd0VuZCkge1xuICAgICAgICB2YXIgcG9zaXRpb24gPSB0aGlzLl9nZXRSb3dBdEVuZFBvc2l0aW9uKHJvd0luZGV4KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2Nyb2xsVG8ocG9zaXRpb24pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuc2Nyb2xsVG8odGhpcy5fcG9zaXRpb24pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBGaXhlZERhdGFUYWJsZVNjcm9sbEhlbHBlcjtcbn0pKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gRml4ZWREYXRhVGFibGVTY3JvbGxIZWxwZXI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9GaXhlZERhdGFUYWJsZVNjcm9sbEhlbHBlci5qc1xuICoqIG1vZHVsZSBpZCA9IDQ2NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgUHJlZml4SW50ZXJ2YWxUcmVlXG4gKiBcbiAqIEB0eXBlY2hlY2tzXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJy4vaW52YXJpYW50Jyk7XG5cbnZhciBwYXJlbnQgPSBmdW5jdGlvbiBwYXJlbnQobm9kZSkge1xuICByZXR1cm4gTWF0aC5mbG9vcihub2RlIC8gMik7XG59O1xuXG52YXIgSW50MzJBcnJheSA9IGdsb2JhbC5JbnQzMkFycmF5IHx8IGZ1bmN0aW9uIChzaXplKSB7XG4gIHZhciB4cyA9IFtdO1xuICBmb3IgKHZhciBpID0gc2l6ZSAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgeHNbaV0gPSAwO1xuICB9XG4gIHJldHVybiB4cztcbn07XG5cbi8qKlxuICogQ29tcHV0ZXMgdGhlIG5leHQgcG93ZXIgb2YgMiBhZnRlciBvciBlcXVhbCB0byB4LlxuICovXG5mdW5jdGlvbiBjZWlsTG9nMih4KSB7XG4gIHZhciB5ID0gMTtcbiAgd2hpbGUgKHkgPCB4KSB7XG4gICAgeSAqPSAyO1xuICB9XG4gIHJldHVybiB5O1xufVxuXG4vKipcbiAqIEEgcHJlZml4IGludGVydmFsIHRyZWUgc3RvcmVzIGFuIG51bWVyaWMgYXJyYXkgYW5kIHRoZSBwYXJ0aWFsIHN1bXMgb2YgdGhhdFxuICogYXJyYXkuIEl0IGlzIG9wdGltaXplZCBmb3IgdXBkYXRpbmcgdGhlIHZhbHVlcyBvZiB0aGUgYXJyYXkgd2l0aG91dFxuICogcmVjb21wdXRpbmcgYWxsIG9mIHRoZSBwYXJ0aWFsIHN1bXMuXG4gKlxuICogICAtIE8obG4gbikgdXBkYXRlXG4gKiAgIC0gTygxKSBsb29rdXBcbiAqICAgLSBPKGxuIG4pIGNvbXB1dGUgYSBwYXJ0aWFsIHN1bVxuICogICAtIE8obikgc3BhY2VcbiAqXG4gKiBOb3RlIHRoYXQgdGhlIHNlcXVlbmNlIG9mIHBhcnRpYWwgc3VtcyBpcyBvbmUgbG9uZ2VyIHRoYW4gdGhlIGFycmF5LCBzbyB0aGF0XG4gKiB0aGUgZmlyc3QgcGFydGlhbCBzdW0gaXMgYWx3YXlzIDAsIGFuZCB0aGUgbGFzdCBwYXJ0aWFsIHN1bSBpcyB0aGUgc3VtIG9mIHRoZVxuICogZW50aXJlIGFycmF5LlxuICovXG5cbnZhciBQcmVmaXhJbnRlcnZhbFRyZWUgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBQcmVmaXhJbnRlcnZhbFRyZWUoeHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUHJlZml4SW50ZXJ2YWxUcmVlKTtcblxuICAgIHRoaXMuX3NpemUgPSB4cy5sZW5ndGg7XG4gICAgdGhpcy5faGFsZiA9IGNlaWxMb2cyKHRoaXMuX3NpemUpO1xuICAgIHRoaXMuX2hlYXAgPSBuZXcgSW50MzJBcnJheSgyICogdGhpcy5faGFsZik7XG5cbiAgICB2YXIgaTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5fc2l6ZTsgKytpKSB7XG4gICAgICB0aGlzLl9oZWFwW3RoaXMuX2hhbGYgKyBpXSA9IHhzW2ldO1xuICAgIH1cblxuICAgIGZvciAoaSA9IHRoaXMuX2hhbGYgLSAxOyBpID4gMDsgLS1pKSB7XG4gICAgICB0aGlzLl9oZWFwW2ldID0gdGhpcy5faGVhcFsyICogaV0gKyB0aGlzLl9oZWFwWzIgKiBpICsgMV07XG4gICAgfVxuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFByZWZpeEludGVydmFsVHJlZSwgW3tcbiAgICBrZXk6ICdzZXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXQoaW5kZXgsIHZhbHVlKSB7XG4gICAgICBpbnZhcmlhbnQoMCA8PSBpbmRleCAmJiBpbmRleCA8IHRoaXMuX3NpemUsICdJbmRleCBvdXQgb2YgcmFuZ2UgJXMnLCBpbmRleCk7XG5cbiAgICAgIHZhciBub2RlID0gdGhpcy5faGFsZiArIGluZGV4O1xuICAgICAgdGhpcy5faGVhcFtub2RlXSA9IHZhbHVlO1xuXG4gICAgICBub2RlID0gcGFyZW50KG5vZGUpO1xuICAgICAgZm9yICg7IG5vZGUgIT09IDA7IG5vZGUgPSBwYXJlbnQobm9kZSkpIHtcbiAgICAgICAgdGhpcy5faGVhcFtub2RlXSA9IHRoaXMuX2hlYXBbMiAqIG5vZGVdICsgdGhpcy5faGVhcFsyICogbm9kZSArIDFdO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldChpbmRleCkge1xuICAgICAgaW52YXJpYW50KDAgPD0gaW5kZXggJiYgaW5kZXggPCB0aGlzLl9zaXplLCAnSW5kZXggb3V0IG9mIHJhbmdlICVzJywgaW5kZXgpO1xuXG4gICAgICB2YXIgbm9kZSA9IHRoaXMuX2hhbGYgKyBpbmRleDtcbiAgICAgIHJldHVybiB0aGlzLl9oZWFwW25vZGVdO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldFNpemUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTaXplKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3NpemU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgc3VtIGdldCgwKSArIGdldCgxKSArIC4uLiArIGdldChlbmQgLSAxKS5cbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogJ3N1bVVudGlsJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3VtVW50aWwoZW5kKSB7XG4gICAgICBpbnZhcmlhbnQoMCA8PSBlbmQgJiYgZW5kIDwgdGhpcy5fc2l6ZSArIDEsICdJbmRleCBvdXQgb2YgcmFuZ2UgJXMnLCBlbmQpO1xuXG4gICAgICBpZiAoZW5kID09PSAwKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuXG4gICAgICB2YXIgbm9kZSA9IHRoaXMuX2hhbGYgKyBlbmQgLSAxO1xuICAgICAgdmFyIHN1bSA9IHRoaXMuX2hlYXBbbm9kZV07XG4gICAgICBmb3IgKDsgbm9kZSAhPT0gMTsgbm9kZSA9IHBhcmVudChub2RlKSkge1xuICAgICAgICBpZiAobm9kZSAlIDIgPT09IDEpIHtcbiAgICAgICAgICBzdW0gKz0gdGhpcy5faGVhcFtub2RlIC0gMV07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN1bTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBzdW0gZ2V0KDApICsgZ2V0KDEpICsgLi4uICsgZ2V0KGluY2x1c2l2ZUVuZCkuXG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6ICdzdW1UbycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN1bVRvKGluY2x1c2l2ZUVuZCkge1xuICAgICAgaW52YXJpYW50KDAgPD0gaW5jbHVzaXZlRW5kICYmIGluY2x1c2l2ZUVuZCA8IHRoaXMuX3NpemUsICdJbmRleCBvdXQgb2YgcmFuZ2UgJXMnLCBpbmNsdXNpdmVFbmQpO1xuICAgICAgcmV0dXJuIHRoaXMuc3VtVW50aWwoaW5jbHVzaXZlRW5kICsgMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgc3VtIGdldChiZWdpbikgKyBnZXQoYmVnaW4gKyAxKSArIC4uLiArIGdldChlbmQgLSAxKS5cbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogJ3N1bScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN1bShiZWdpbiwgZW5kKSB7XG4gICAgICBpbnZhcmlhbnQoYmVnaW4gPD0gZW5kLCAnQmVnaW4gbXVzdCBwcmVjZWRlIGVuZCcpO1xuICAgICAgcmV0dXJuIHRoaXMuc3VtVW50aWwoZW5kKSAtIHRoaXMuc3VtVW50aWwoYmVnaW4pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHNtYWxsZXN0IGkgc3VjaCB0aGF0IDAgPD0gaSA8PSBzaXplIGFuZCBzdW1VbnRpbChpKSA8PSB0LCBvclxuICAgICAqIC0xIGlmIG5vIHN1Y2ggaSBleGlzdHMuXG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6ICdncmVhdGVzdExvd2VyQm91bmQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBncmVhdGVzdExvd2VyQm91bmQodCkge1xuICAgICAgaWYgKHQgPCAwKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH1cblxuICAgICAgdmFyIG5vZGUgPSAxO1xuICAgICAgaWYgKHRoaXMuX2hlYXBbbm9kZV0gPD0gdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgICAgIH1cblxuICAgICAgd2hpbGUgKG5vZGUgPCB0aGlzLl9oYWxmKSB7XG4gICAgICAgIHZhciBsZWZ0U3VtID0gdGhpcy5faGVhcFsyICogbm9kZV07XG4gICAgICAgIGlmICh0IDwgbGVmdFN1bSkge1xuICAgICAgICAgIG5vZGUgPSAyICogbm9kZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBub2RlID0gMiAqIG5vZGUgKyAxO1xuICAgICAgICAgIHQgLT0gbGVmdFN1bTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbm9kZSAtIHRoaXMuX2hhbGY7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgc21hbGxlc3QgaSBzdWNoIHRoYXQgMCA8PSBpIDw9IHNpemUgYW5kIHN1bVVudGlsKGkpIDwgdCwgb3JcbiAgICAgKiAtMSBpZiBubyBzdWNoIGkgZXhpc3RzLlxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiAnZ3JlYXRlc3RTdHJpY3RMb3dlckJvdW5kJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ3JlYXRlc3RTdHJpY3RMb3dlckJvdW5kKHQpIHtcbiAgICAgIGlmICh0IDw9IDApIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuXG4gICAgICB2YXIgbm9kZSA9IDE7XG4gICAgICBpZiAodGhpcy5faGVhcFtub2RlXSA8IHQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpemU7XG4gICAgICB9XG5cbiAgICAgIHdoaWxlIChub2RlIDwgdGhpcy5faGFsZikge1xuICAgICAgICB2YXIgbGVmdFN1bSA9IHRoaXMuX2hlYXBbMiAqIG5vZGVdO1xuICAgICAgICBpZiAodCA8PSBsZWZ0U3VtKSB7XG4gICAgICAgICAgbm9kZSA9IDIgKiBub2RlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5vZGUgPSAyICogbm9kZSArIDE7XG4gICAgICAgICAgdCAtPSBsZWZ0U3VtO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBub2RlIC0gdGhpcy5faGFsZjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBzbWFsbGVzdCBpIHN1Y2ggdGhhdCAwIDw9IGkgPD0gc2l6ZSBhbmQgdCA8PSBzdW1VbnRpbChpKSwgb3JcbiAgICAgKiBzaXplICsgMSBpZiBubyBzdWNoIGkgZXhpc3RzLlxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiAnbGVhc3RVcHBlckJvdW5kJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gbGVhc3RVcHBlckJvdW5kKHQpIHtcbiAgICAgIHJldHVybiB0aGlzLmdyZWF0ZXN0U3RyaWN0TG93ZXJCb3VuZCh0KSArIDE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgc21hbGxlc3QgaSBzdWNoIHRoYXQgMCA8PSBpIDw9IHNpemUgYW5kIHQgPCBzdW1VbnRpbChpKSwgb3JcbiAgICAgKiBzaXplICsgMSBpZiBubyBzdWNoIGkgZXhpc3RzLlxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiAnbGVhc3RTdHJpY3RVcHBlckJvdW5kJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gbGVhc3RTdHJpY3RVcHBlckJvdW5kKHQpIHtcbiAgICAgIHJldHVybiB0aGlzLmdyZWF0ZXN0TG93ZXJCb3VuZCh0KSArIDE7XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6ICd1bmlmb3JtJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdW5pZm9ybShzaXplLCBpbml0aWFsVmFsdWUpIHtcbiAgICAgIHZhciB4cyA9IFtdO1xuICAgICAgZm9yICh2YXIgaSA9IHNpemUgLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB4c1tpXSA9IGluaXRpYWxWYWx1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBQcmVmaXhJbnRlcnZhbFRyZWUoeHMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2VtcHR5JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZW1wdHkoc2l6ZSkge1xuICAgICAgcmV0dXJuIFByZWZpeEludGVydmFsVHJlZS51bmlmb3JtKHNpemUsIDApO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBQcmVmaXhJbnRlcnZhbFRyZWU7XG59KSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFByZWZpeEludGVydmFsVHJlZTtcblxuLyoqXG4gKiBOdW1iZXIgb2YgZWxlbWVudHMgaW4gdGhlIGFycmF5XG4gKi9cblxuLyoqXG4gKiBIYWxmIHRoZSBzaXplIG9mIHRoZSBoZWFwLiBJdCBpcyBhbHNvIHRoZSBudW1iZXIgb2Ygbm9uLWxlYWYgbm9kZXMsIGFuZCB0aGVcbiAqIGluZGV4IG9mIHRoZSBmaXJzdCBlbGVtZW50IGluIHRoZSBoZWFwLiBBbHdheXMgYSBwb3dlciBvZiAyLlxuICovXG5cbi8qKlxuICogQmluYXJ5IGhlYXBcbiAqL1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvUHJlZml4SW50ZXJ2YWxUcmVlLmpzXG4gKiogbW9kdWxlIGlkID0gNDY1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBGaXhlZERhdGFUYWJsZVdpZHRoSGVscGVyXG4gKiBAdHlwZWNoZWNrc1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgnLi9SZWFjdCcpO1xuXG5mdW5jdGlvbiBnZXRUb3RhbFdpZHRoKCAvKmFycmF5Ki9jb2x1bW5zKSAvKm51bWJlciove1xuICB2YXIgdG90YWxXaWR0aCA9IDA7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY29sdW1ucy5sZW5ndGg7ICsraSkge1xuICAgIHRvdGFsV2lkdGggKz0gY29sdW1uc1tpXS5wcm9wcy53aWR0aDtcbiAgfVxuICByZXR1cm4gdG90YWxXaWR0aDtcbn1cblxuZnVuY3Rpb24gZ2V0VG90YWxGbGV4R3JvdyggLyphcnJheSovY29sdW1ucykgLypudW1iZXIqL3tcbiAgdmFyIHRvdGFsRmxleEdyb3cgPSAwO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbHVtbnMubGVuZ3RoOyArK2kpIHtcbiAgICB0b3RhbEZsZXhHcm93ICs9IGNvbHVtbnNbaV0ucHJvcHMuZmxleEdyb3cgfHwgMDtcbiAgfVxuICByZXR1cm4gdG90YWxGbGV4R3Jvdztcbn1cblxuZnVuY3Rpb24gZGlzdHJpYnV0ZUZsZXhXaWR0aChcbi8qYXJyYXkqL2NvbHVtbnMsXG4vKm51bWJlciovZmxleFdpZHRoKSAvKm9iamVjdCove1xuICBpZiAoZmxleFdpZHRoIDw9IDApIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29sdW1uczogY29sdW1ucyxcbiAgICAgIHdpZHRoOiBnZXRUb3RhbFdpZHRoKGNvbHVtbnMpXG4gICAgfTtcbiAgfVxuICB2YXIgcmVtYWluaW5nRmxleEdyb3cgPSBnZXRUb3RhbEZsZXhHcm93KGNvbHVtbnMpO1xuICB2YXIgcmVtYWluaW5nRmxleFdpZHRoID0gZmxleFdpZHRoO1xuICB2YXIgbmV3Q29sdW1ucyA9IFtdO1xuICB2YXIgdG90YWxXaWR0aCA9IDA7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY29sdW1ucy5sZW5ndGg7ICsraSkge1xuICAgIHZhciBjb2x1bW4gPSBjb2x1bW5zW2ldO1xuICAgIGlmICghY29sdW1uLnByb3BzLmZsZXhHcm93KSB7XG4gICAgICB0b3RhbFdpZHRoICs9IGNvbHVtbi5wcm9wcy53aWR0aDtcbiAgICAgIG5ld0NvbHVtbnMucHVzaChjb2x1bW4pO1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIHZhciBjb2x1bW5GbGV4V2lkdGggPSBNYXRoLmZsb29yKGNvbHVtbi5wcm9wcy5mbGV4R3JvdyAvIHJlbWFpbmluZ0ZsZXhHcm93ICogcmVtYWluaW5nRmxleFdpZHRoKTtcbiAgICB2YXIgbmV3Q29sdW1uV2lkdGggPSBNYXRoLmZsb29yKGNvbHVtbi5wcm9wcy53aWR0aCArIGNvbHVtbkZsZXhXaWR0aCk7XG4gICAgdG90YWxXaWR0aCArPSBuZXdDb2x1bW5XaWR0aDtcblxuICAgIHJlbWFpbmluZ0ZsZXhHcm93IC09IGNvbHVtbi5wcm9wcy5mbGV4R3JvdztcbiAgICByZW1haW5pbmdGbGV4V2lkdGggLT0gY29sdW1uRmxleFdpZHRoO1xuXG4gICAgbmV3Q29sdW1ucy5wdXNoKFJlYWN0LmNsb25lRWxlbWVudChjb2x1bW4sIHsgd2lkdGg6IG5ld0NvbHVtbldpZHRoIH0pKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY29sdW1uczogbmV3Q29sdW1ucyxcbiAgICB3aWR0aDogdG90YWxXaWR0aFxuICB9O1xufVxuXG5mdW5jdGlvbiBhZGp1c3RDb2x1bW5Hcm91cFdpZHRocyhcbi8qYXJyYXkqL2NvbHVtbkdyb3Vwcyxcbi8qbnVtYmVyKi9leHBlY3RlZFdpZHRoKSAvKm9iamVjdCove1xuICB2YXIgYWxsQ29sdW1ucyA9IFtdO1xuICB2YXIgaTtcbiAgZm9yIChpID0gMDsgaSA8IGNvbHVtbkdyb3Vwcy5sZW5ndGg7ICsraSkge1xuICAgIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goY29sdW1uR3JvdXBzW2ldLnByb3BzLmNoaWxkcmVuLCBmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICBhbGxDb2x1bW5zLnB1c2goY29sdW1uKTtcbiAgICB9KTtcbiAgfVxuICB2YXIgY29sdW1uc1dpZHRoID0gZ2V0VG90YWxXaWR0aChhbGxDb2x1bW5zKTtcbiAgdmFyIHJlbWFpbmluZ0ZsZXhHcm93ID0gZ2V0VG90YWxGbGV4R3JvdyhhbGxDb2x1bW5zKTtcbiAgdmFyIHJlbWFpbmluZ0ZsZXhXaWR0aCA9IE1hdGgubWF4KGV4cGVjdGVkV2lkdGggLSBjb2x1bW5zV2lkdGgsIDApO1xuXG4gIHZhciBuZXdBbGxDb2x1bW5zID0gW107XG4gIHZhciBuZXdDb2x1bW5Hcm91cHMgPSBbXTtcblxuICBmb3IgKGkgPSAwOyBpIDwgY29sdW1uR3JvdXBzLmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIGNvbHVtbkdyb3VwID0gY29sdW1uR3JvdXBzW2ldO1xuICAgIHZhciBjdXJyZW50Q29sdW1ucyA9IFtdO1xuXG4gICAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaChjb2x1bW5Hcm91cC5wcm9wcy5jaGlsZHJlbiwgZnVuY3Rpb24gKGNvbHVtbikge1xuICAgICAgY3VycmVudENvbHVtbnMucHVzaChjb2x1bW4pO1xuICAgIH0pO1xuXG4gICAgdmFyIGNvbHVtbkdyb3VwRmxleEdyb3cgPSBnZXRUb3RhbEZsZXhHcm93KGN1cnJlbnRDb2x1bW5zKTtcbiAgICB2YXIgY29sdW1uR3JvdXBGbGV4V2lkdGggPSBNYXRoLmZsb29yKGNvbHVtbkdyb3VwRmxleEdyb3cgLyByZW1haW5pbmdGbGV4R3JvdyAqIHJlbWFpbmluZ0ZsZXhXaWR0aCk7XG5cbiAgICB2YXIgbmV3Q29sdW1uU2V0dGluZ3MgPSBkaXN0cmlidXRlRmxleFdpZHRoKGN1cnJlbnRDb2x1bW5zLCBjb2x1bW5Hcm91cEZsZXhXaWR0aCk7XG5cbiAgICByZW1haW5pbmdGbGV4R3JvdyAtPSBjb2x1bW5Hcm91cEZsZXhHcm93O1xuICAgIHJlbWFpbmluZ0ZsZXhXaWR0aCAtPSBjb2x1bW5Hcm91cEZsZXhXaWR0aDtcblxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgbmV3Q29sdW1uU2V0dGluZ3MuY29sdW1ucy5sZW5ndGg7ICsraikge1xuICAgICAgbmV3QWxsQ29sdW1ucy5wdXNoKG5ld0NvbHVtblNldHRpbmdzLmNvbHVtbnNbal0pO1xuICAgIH1cblxuICAgIG5ld0NvbHVtbkdyb3Vwcy5wdXNoKFJlYWN0LmNsb25lRWxlbWVudChjb2x1bW5Hcm91cCwgeyB3aWR0aDogbmV3Q29sdW1uU2V0dGluZ3Mud2lkdGggfSkpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjb2x1bW5zOiBuZXdBbGxDb2x1bW5zLFxuICAgIGNvbHVtbkdyb3VwczogbmV3Q29sdW1uR3JvdXBzXG4gIH07XG59XG5cbmZ1bmN0aW9uIGFkanVzdENvbHVtbldpZHRocyhcbi8qYXJyYXkqL2NvbHVtbnMsXG4vKm51bWJlciovZXhwZWN0ZWRXaWR0aCkgLyphcnJheSove1xuICB2YXIgY29sdW1uc1dpZHRoID0gZ2V0VG90YWxXaWR0aChjb2x1bW5zKTtcbiAgaWYgKGNvbHVtbnNXaWR0aCA8IGV4cGVjdGVkV2lkdGgpIHtcbiAgICByZXR1cm4gZGlzdHJpYnV0ZUZsZXhXaWR0aChjb2x1bW5zLCBleHBlY3RlZFdpZHRoIC0gY29sdW1uc1dpZHRoKS5jb2x1bW5zO1xuICB9XG4gIHJldHVybiBjb2x1bW5zO1xufVxuXG52YXIgRml4ZWREYXRhVGFibGVXaWR0aEhlbHBlciA9IHtcbiAgZ2V0VG90YWxXaWR0aDogZ2V0VG90YWxXaWR0aCxcbiAgZ2V0VG90YWxGbGV4R3JvdzogZ2V0VG90YWxGbGV4R3JvdyxcbiAgZGlzdHJpYnV0ZUZsZXhXaWR0aDogZGlzdHJpYnV0ZUZsZXhXaWR0aCxcbiAgYWRqdXN0Q29sdW1uV2lkdGhzOiBhZGp1c3RDb2x1bW5XaWR0aHMsXG4gIGFkanVzdENvbHVtbkdyb3VwV2lkdGhzOiBhZGp1c3RDb2x1bW5Hcm91cFdpZHRoc1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBGaXhlZERhdGFUYWJsZVdpZHRoSGVscGVyO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvRml4ZWREYXRhVGFibGVXaWR0aEhlbHBlci5qc1xuICoqIG1vZHVsZSBpZCA9IDQ2NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgZGVib3VuY2VDb3JlXG4gKiBAdHlwZWNoZWNrc1xuICovXG5cbi8qKlxuICogSW52b2tlcyB0aGUgZ2l2ZW4gY2FsbGJhY2sgYWZ0ZXIgYSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBoYXZlXG4gKiBlbGFwc2VkLCBpZ25vcmluZyBzdWJzZXF1ZW50IGNhbGxzLlxuICpcbiAqIEZvciBleGFtcGxlLCBpZiB5b3Ugd2FudGVkIHRvIHVwZGF0ZSBhIHByZXZpZXcgYWZ0ZXIgdGhlIHVzZXIgc3RvcHMgdHlwaW5nXG4gKiB5b3UgY291bGQgZG8gdGhlIGZvbGxvd2luZzpcbiAqXG4gKiAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBkZWJvdW5jZSh0aGlzLnVwZGF0ZVByZXZpZXcsIDI1MCksIGZhbHNlKTtcbiAqXG4gKiBUaGUgcmV0dXJuZWQgZnVuY3Rpb24gaGFzIGEgcmVzZXQgbWV0aG9kIHdoaWNoIGNhbiBiZSBjYWxsZWQgdG8gY2FuY2VsIGFcbiAqIHBlbmRpbmcgaW52b2NhdGlvbi5cbiAqXG4gKiAgIHZhciBkZWJvdW5jZWRVcGRhdGVQcmV2aWV3ID0gZGVib3VuY2UodGhpcy51cGRhdGVQcmV2aWV3LCAyNTApO1xuICogICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZGVib3VuY2VkVXBkYXRlUHJldmlldywgZmFsc2UpO1xuICpcbiAqICAgLy8gbGF0ZXIsIHRvIGNhbmNlbCBwZW5kaW5nIGNhbGxzXG4gKiAgIGRlYm91bmNlZFVwZGF0ZVByZXZpZXcucmVzZXQoKTtcbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmdW5jIC0gdGhlIGZ1bmN0aW9uIHRvIGRlYm91bmNlXG4gKiBAcGFyYW0ge251bWJlcn0gd2FpdCAtIGhvdyBsb25nIHRvIHdhaXQgaW4gbWlsbGlzZWNvbmRzXG4gKiBAcGFyYW0geyp9IGNvbnRleHQgLSBvcHRpb25hbCBjb250ZXh0IHRvIGludm9rZSB0aGUgZnVuY3Rpb24gaW5cbiAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBzZXRUaW1lb3V0RnVuYyAtIGFuIGltcGxlbWVudGF0aW9uIG9mIHNldFRpbWVvdXRcbiAqICBpZiBub3RoaW5nIGlzIHBhc3NlZCBpbiB0aGUgZGVmYXVsdCBzZXRUaW1lb3V0IGZ1bmN0aW9uIGlzIHVzZWRcbiAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2xlYXJUaW1lb3V0RnVuYyAtIGFuIGltcGxlbWVudGF0aW9uIG9mIGNsZWFyVGltZW91dFxuICogIGlmIG5vdGhpbmcgaXMgcGFzc2VkIGluIHRoZSBkZWZhdWx0IGNsZWFyVGltZW91dCBmdW5jdGlvbiBpcyB1c2VkXG4gKi9cblwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBjb250ZXh0LCBzZXRUaW1lb3V0RnVuYywgY2xlYXJUaW1lb3V0RnVuYykge1xuICBzZXRUaW1lb3V0RnVuYyA9IHNldFRpbWVvdXRGdW5jIHx8IHNldFRpbWVvdXQ7XG4gIGNsZWFyVGltZW91dEZ1bmMgPSBjbGVhclRpbWVvdXRGdW5jIHx8IGNsZWFyVGltZW91dDtcbiAgdmFyIHRpbWVvdXQ7XG5cbiAgZnVuY3Rpb24gZGVib3VuY2VyKCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIGRlYm91bmNlci5yZXNldCgpO1xuXG4gICAgdmFyIGNhbGxiYWNrID0gZnVuY3Rpb24gY2FsbGJhY2soKSB7XG4gICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgIH07XG4gICAgY2FsbGJhY2suX19TTW1ldGEgPSBmdW5jLl9fU01tZXRhO1xuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0RnVuYyhjYWxsYmFjaywgd2FpdCk7XG4gIH1cblxuICBkZWJvdW5jZXIucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgY2xlYXJUaW1lb3V0RnVuYyh0aW1lb3V0KTtcbiAgfTtcblxuICByZXR1cm4gZGVib3VuY2VyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlYm91bmNlO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvZGVib3VuY2VDb3JlLmpzXG4gKiogbW9kdWxlIGlkID0gNDY3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBzaGFsbG93RXF1YWxcbiAqIEB0eXBlY2hlY2tzXG4gKiBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogUGVyZm9ybXMgZXF1YWxpdHkgYnkgaXRlcmF0aW5nIHRocm91Z2gga2V5cyBvbiBhbiBvYmplY3QgYW5kIHJldHVybmluZyBmYWxzZVxuICogd2hlbiBhbnkga2V5IGhhcyB2YWx1ZXMgd2hpY2ggYXJlIG5vdCBzdHJpY3RseSBlcXVhbCBiZXR3ZWVuIHRoZSBhcmd1bWVudHMuXG4gKiBSZXR1cm5zIHRydWUgd2hlbiB0aGUgdmFsdWVzIG9mIGFsbCBrZXlzIGFyZSBzdHJpY3RseSBlcXVhbC5cbiAqL1xuZnVuY3Rpb24gc2hhbGxvd0VxdWFsKG9iakEsIG9iakIpIHtcbiAgaWYgKG9iakEgPT09IG9iakIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygb2JqQSAhPT0gJ29iamVjdCcgfHwgb2JqQSA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqQiAhPT0gJ29iamVjdCcgfHwgb2JqQiA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBrZXlzQSA9IE9iamVjdC5rZXlzKG9iakEpO1xuICB2YXIga2V5c0IgPSBPYmplY3Qua2V5cyhvYmpCKTtcblxuICBpZiAoa2V5c0EubGVuZ3RoICE9PSBrZXlzQi5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBUZXN0IGZvciBBJ3Mga2V5cyBkaWZmZXJlbnQgZnJvbSBCLlxuICB2YXIgYkhhc093blByb3BlcnR5ID0gaGFzT3duUHJvcGVydHkuYmluZChvYmpCKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzQS5sZW5ndGg7IGkrKykge1xuICAgIGlmICghYkhhc093blByb3BlcnR5KGtleXNBW2ldKSB8fCBvYmpBW2tleXNBW2ldXSAhPT0gb2JqQltrZXlzQVtpXV0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaGFsbG93RXF1YWw7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9zaGFsbG93RXF1YWwuanNcbiAqKiBtb2R1bGUgaWQgPSA0NjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIEZpeGVkRGF0YVRhYmxlQ29sdW1uTmV3LnJlYWN0XG4gKiBAdHlwZWNoZWNrc1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgnLi9SZWFjdCcpO1xuXG52YXIgUHJvcFR5cGVzID0gUmVhY3QuUHJvcFR5cGVzO1xuXG4vKipcbiAqIENvbXBvbmVudCB0aGF0IGRlZmluZXMgdGhlIGF0dHJpYnV0ZXMgb2YgdGFibGUgY29sdW1uLlxuICovXG52YXIgRml4ZWREYXRhVGFibGVDb2x1bW4gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnRml4ZWREYXRhVGFibGVDb2x1bW4nLFxuXG4gIHN0YXRpY3M6IHtcbiAgICBfX1RhYmxlQ29sdW1uX186IHRydWVcbiAgfSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICAvKipcbiAgICAgKiBUaGUgaG9yaXpvbnRhbCBhbGlnbm1lbnQgb2YgdGhlIHRhYmxlIGNlbGwgY29udGVudC5cbiAgICAgKi9cbiAgICBhbGlnbjogUHJvcFR5cGVzLm9uZU9mKFsnbGVmdCcsICdjZW50ZXInLCAncmlnaHQnXSksXG5cbiAgICAvKipcbiAgICAgKiBDb250cm9scyBpZiB0aGUgY29sdW1uIGlzIGZpeGVkIHdoZW4gc2Nyb2xsaW5nIGluIHRoZSBYIGF4aXMuXG4gICAgICovXG4gICAgZml4ZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGhlYWRlciBjZWxsIGZvciB0aGlzIGNvbHVtbi5cbiAgICAgKiBUaGlzIGNhbiBlaXRoZXIgYmUgYSBzdHJpbmcgYSBSZWFjdCBlbGVtZW50LCBvciBhIGZ1bmN0aW9uIHRoYXQgZ2VuZXJhdGVzXG4gICAgICogYSBSZWFjdCBFbGVtZW50LiBQYXNzaW5nIGluIGEgc3RyaW5nIHdpbGwgcmVuZGVyIGEgZGVmYXVsdCBoZWFkZXIgY2VsbFxuICAgICAqIHdpdGggdGhhdCBzdHJpbmcuIEJ5IGRlZmF1bHQsIHRoZSBSZWFjdCBlbGVtZW50IHBhc3NlZCBpbiBjYW4gZXhwZWN0IHRvXG4gICAgICogcmVjZWl2ZSB0aGUgZm9sbG93aW5nIHByb3BzOlxuICAgICAqXG4gICAgICogYGBgXG4gICAgICogcHJvcHM6IHtcbiAgICAgKiAgIGNvbHVtbktleTogc3RyaW5nIC8vIChvZiB0aGUgY29sdW1uLCBpZiBnaXZlbilcbiAgICAgKiAgIGhlaWdodDogbnVtYmVyIC8vIChzdXBwbGllZCBmcm9tIHRoZSBUYWJsZSBvciByb3dIZWlnaHRHZXR0ZXIpXG4gICAgICogICB3aWR0aDogbnVtYmVyIC8vIChzdXBwbGllZCBmcm9tIHRoZSBDb2x1bW4pXG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogQmVjYXVzZSB5b3UgYXJlIHBhc3NpbmcgaW4geW91ciBvd24gUmVhY3QgZWxlbWVudCwgeW91IGNhbiBmZWVsIGZyZWUgdG9cbiAgICAgKiBwYXNzIGluIHdoYXRldmVyIHByb3BzIHlvdSBtYXkgd2FudCBvciBuZWVkLlxuICAgICAqXG4gICAgICogSWYgeW91IHBhc3MgaW4gYSBmdW5jdGlvbiwgeW91IHdpbGwgcmVjZWl2ZSB0aGUgc2FtZSBwcm9wcyBvYmplY3QgYXMgdGhlXG4gICAgICogZmlyc3QgYXJndW1lbnQuXG4gICAgICovXG4gICAgaGVhZGVyOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubm9kZSwgUHJvcFR5cGVzLmZ1bmNdKSxcblxuICAgIC8qKlxuICAgICAqIFRoaXMgaXMgdGhlIGJvZHkgY2VsbCB0aGF0IHdpbGwgYmUgY2xvbmVkIGZvciB0aGlzIGNvbHVtbi5cbiAgICAgKiBUaGlzIGNhbiBlaXRoZXIgYmUgYSBzdHJpbmcgYSBSZWFjdCBlbGVtZW50LCBvciBhIGZ1bmN0aW9uIHRoYXQgZ2VuZXJhdGVzXG4gICAgICogYSBSZWFjdCBFbGVtZW50LiBQYXNzaW5nIGluIGEgc3RyaW5nIHdpbGwgcmVuZGVyIGEgZGVmYXVsdCBoZWFkZXIgY2VsbFxuICAgICAqIHdpdGggdGhhdCBzdHJpbmcuIEJ5IGRlZmF1bHQsIHRoZSBSZWFjdCBlbGVtZW50IHBhc3NlZCBpbiBjYW4gZXhwZWN0IHRvXG4gICAgICogcmVjZWl2ZSB0aGUgZm9sbG93aW5nIHByb3BzOlxuICAgICAqXG4gICAgICogYGBgXG4gICAgICogcHJvcHM6IHtcbiAgICAgKiAgIHJvd0luZGV4OyBudW1iZXIgLy8gKHRoZSByb3cgaW5kZXggb2YgdGhlIGNlbGwpXG4gICAgICogICBjb2x1bW5LZXk6IHN0cmluZyAvLyAob2YgdGhlIGNvbHVtbiwgaWYgZ2l2ZW4pXG4gICAgICogICBoZWlnaHQ6IG51bWJlciAvLyAoc3VwcGxpZWQgZnJvbSB0aGUgVGFibGUgb3Igcm93SGVpZ2h0R2V0dGVyKVxuICAgICAqICAgd2lkdGg6IG51bWJlciAvLyAoc3VwcGxpZWQgZnJvbSB0aGUgQ29sdW1uKVxuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIEJlY2F1c2UgeW91IGFyZSBwYXNzaW5nIGluIHlvdXIgb3duIFJlYWN0IGVsZW1lbnQsIHlvdSBjYW4gZmVlbCBmcmVlIHRvXG4gICAgICogcGFzcyBpbiB3aGF0ZXZlciBwcm9wcyB5b3UgbWF5IHdhbnQgb3IgbmVlZC5cbiAgICAgKlxuICAgICAqIElmIHlvdSBwYXNzIGluIGEgZnVuY3Rpb24sIHlvdSB3aWxsIHJlY2VpdmUgdGhlIHNhbWUgcHJvcHMgb2JqZWN0IGFzIHRoZVxuICAgICAqIGZpcnN0IGFyZ3VtZW50LlxuICAgICAqL1xuICAgIGNlbGw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ub2RlLCBQcm9wVHlwZXMuZnVuY10pLFxuXG4gICAgLyoqXG4gICAgICogVGhpcyBpcyB0aGUgZm9vdGVyIGNlbGwgZm9yIHRoaXMgY29sdW1uLlxuICAgICAqIFRoaXMgY2FuIGVpdGhlciBiZSBhIHN0cmluZyBhIFJlYWN0IGVsZW1lbnQsIG9yIGEgZnVuY3Rpb24gdGhhdCBnZW5lcmF0ZXNcbiAgICAgKiBhIFJlYWN0IEVsZW1lbnQuIFBhc3NpbmcgaW4gYSBzdHJpbmcgd2lsbCByZW5kZXIgYSBkZWZhdWx0IGhlYWRlciBjZWxsXG4gICAgICogd2l0aCB0aGF0IHN0cmluZy4gQnkgZGVmYXVsdCwgdGhlIFJlYWN0IGVsZW1lbnQgcGFzc2VkIGluIGNhbiBleHBlY3QgdG9cbiAgICAgKiByZWNlaXZlIHRoZSBmb2xsb3dpbmcgcHJvcHM6XG4gICAgICpcbiAgICAgKiBgYGBcbiAgICAgKiBwcm9wczoge1xuICAgICAqICAgY29sdW1uS2V5OiBzdHJpbmcgLy8gKG9mIHRoZSBjb2x1bW4sIGlmIGdpdmVuKVxuICAgICAqICAgaGVpZ2h0OiBudW1iZXIgLy8gKHN1cHBsaWVkIGZyb20gdGhlIFRhYmxlIG9yIHJvd0hlaWdodEdldHRlcilcbiAgICAgKiAgIHdpZHRoOiBudW1iZXIgLy8gKHN1cHBsaWVkIGZyb20gdGhlIENvbHVtbilcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBCZWNhdXNlIHlvdSBhcmUgcGFzc2luZyBpbiB5b3VyIG93biBSZWFjdCBlbGVtZW50LCB5b3UgY2FuIGZlZWwgZnJlZSB0b1xuICAgICAqIHBhc3MgaW4gd2hhdGV2ZXIgcHJvcHMgeW91IG1heSB3YW50IG9yIG5lZWQuXG4gICAgICpcbiAgICAgKiBJZiB5b3UgcGFzcyBpbiBhIGZ1bmN0aW9uLCB5b3Ugd2lsbCByZWNlaXZlIHRoZSBzYW1lIHByb3BzIG9iamVjdCBhcyB0aGVcbiAgICAgKiBmaXJzdCBhcmd1bWVudC5cbiAgICAgKi9cbiAgICBmb290ZXI6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ub2RlLCBQcm9wVHlwZXMuZnVuY10pLFxuXG4gICAgLyoqXG4gICAgICogVGhpcyBpcyB1c2VkIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoZSBjb2x1bW4sIGFuZCBpcyBub3QgcmVxdWlyZWQgdW5sZXNzXG4gICAgICogeW91IGEgcmVzaXppbmcgY29sdW1ucy4gVGhpcyB3aWxsIGJlIHRoZSBrZXkgZ2l2ZW4gaW4gdGhlXG4gICAgICogYG9uQ29sdW1uUmVzaXplRW5kQ2FsbGJhY2tgIG9uIHRoZSBUYWJsZS5cbiAgICAgKi9cbiAgICBjb2x1bW5LZXk6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBwaXhlbCB3aWR0aCBvZiB0aGUgY29sdW1uLlxuICAgICAqL1xuICAgIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBJZiB0aGlzIGlzIGEgcmVzaXphYmxlIGNvbHVtbiB0aGlzIGlzIGl0cyBtaW5pbXVtIHBpeGVsIHdpZHRoLlxuICAgICAqL1xuICAgIG1pbldpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLyoqXG4gICAgICogSWYgdGhpcyBpcyBhIHJlc2l6YWJsZSBjb2x1bW4gdGhpcyBpcyBpdHMgbWF4aW11bSBwaXhlbCB3aWR0aC5cbiAgICAgKi9cbiAgICBtYXhXaWR0aDogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKlxuICAgICAqIFRoZSBncm93IGZhY3RvciByZWxhdGl2ZSB0byBvdGhlciBjb2x1bW5zLiBTYW1lIGFzIHRoZSBmbGV4LWdyb3cgQVBJXG4gICAgICogZnJvbSBodHRwOi8vd3d3LnczLm9yZy9UUi9jc3MzLWZsZXhib3gvLiBCYXNpY2FsbHksIHRha2UgYW55IGF2YWlsYWJsZVxuICAgICAqIGV4dHJhIHdpZHRoIGFuZCBkaXN0cmlidXRlIGl0IHByb3BvcnRpb25hbGx5IGFjY29yZGluZyB0byBhbGwgY29sdW1ucydcbiAgICAgKiBmbGV4R3JvdyB2YWx1ZXMuIERlZmF1bHRzIHRvIHplcm8gKG5vLWZsZXhpbmcpLlxuICAgICAqL1xuICAgIGZsZXhHcm93OiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLyoqXG4gICAgICogV2hldGhlciB0aGUgY29sdW1uIGNhbiBiZSByZXNpemVkIHdpdGggdGhlXG4gICAgICogRml4ZWREYXRhVGFibGVDb2x1bW5SZXNpemVIYW5kbGUuIFBsZWFzZSBub3RlIHRoYXQgaWYgYSBjb2x1bW5cbiAgICAgKiBoYXMgYSBmbGV4IGdyb3csIG9uY2UgeW91IHJlc2l6ZSB0aGUgY29sdW1uIHRoaXMgd2lsbCBiZSBzZXQgdG8gMC5cbiAgICAgKlxuICAgICAqIFRoaXMgcHJvcGVydHkgb25seSBwcm92aWRlcyB0aGUgVUkgZm9yIHRoZSBjb2x1bW4gcmVzaXppbmcuIElmIHRoaXNcbiAgICAgKiBpcyBzZXQgdG8gdHJ1ZSwgeW91IHdpbGwgbmVlZCB0byBzZXQgdGhlIG9uQ29sdW1uUmVzaXplRW5kQ2FsbGJhY2sgdGFibGVcbiAgICAgKiBwcm9wZXJ0eSBhbmQgcmVuZGVyIHlvdXIgY29sdW1ucyBhcHByb3ByaWF0ZWx5LlxuICAgICAqL1xuICAgIGlzUmVzaXphYmxlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgY2VsbHMgaW4gdGhpcyBjb2x1bW4gY2FuIGJlIHJlbW92ZWQgZnJvbSBkb2N1bWVudCB3aGVuIG91dHNpZGVcbiAgICAgKiBvZiB2aWV3cG9ydCBhcyBhIHJlc3VsdCBvZiBob3Jpem9udGFsIHNjcm9sbGluZy5cbiAgICAgKiBTZXR0aW5nIHRoaXMgcHJvcGVydHkgdG8gdHJ1ZSBhbGxvd3MgdGhlIHRhYmxlIHRvIG5vdCByZW5kZXIgY2VsbHMgaW5cbiAgICAgKiBwYXJ0aWN1bGFyIGNvbHVtbiB0aGF0IGFyZSBvdXRzaWRlIG9mIHZpZXdwb3J0IGZvciB2aXNpYmxlIHJvd3MuIFRoaXNcbiAgICAgKiBhbGxvd3MgdG8gY3JlYXRlIHRhYmxlIHdpdGggbWFueSBjb2x1bW5zIGFuZCBub3QgaGF2ZSB2ZXJ0aWNhbCBzY3JvbGxpbmdcbiAgICAgKiBwZXJmb3JtYW5jZSBkcm9wLlxuICAgICAqIFNldHRpbmcgdGhlIHByb3BlcnR5IHRvIGZhbHNlIHdpbGwga2VlcCBwcmV2aW91cyBiZWhhdmlvdXIgYW5kIGtlZXBcbiAgICAgKiBjZWxsIHJlbmRlcmVkIGlmIHRoZSByb3cgaXQgYmVsb25ncyB0byBpcyB2aXNpYmxlLlxuICAgICAqL1xuICAgIGFsbG93Q2VsbHNSZWN5Y2xpbmc6IFByb3BUeXBlcy5ib29sXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSAvKm9iamVjdCove1xuICAgIHJldHVybiB7XG4gICAgICBhbGxvd0NlbGxzUmVjeWNsaW5nOiBmYWxzZSxcbiAgICAgIGZpeGVkOiBmYWxzZVxuICAgIH07XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ29tcG9uZW50IDxGaXhlZERhdGFUYWJsZUNvbHVtbiAvPiBzaG91bGQgbmV2ZXIgcmVuZGVyJyk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBGaXhlZERhdGFUYWJsZUNvbHVtbjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL0ZpeGVkRGF0YVRhYmxlQ29sdW1uTmV3LnJlYWN0LmpzXG4gKiogbW9kdWxlIGlkID0gNDY5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBGaXhlZERhdGFUYWJsZUNvbHVtbkdyb3VwTmV3LnJlYWN0XG4gKiBAdHlwZWNoZWNrc1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgnLi9SZWFjdCcpO1xuXG52YXIgUHJvcFR5cGVzID0gUmVhY3QuUHJvcFR5cGVzO1xuXG4vKipcbiAqIENvbXBvbmVudCB0aGF0IGRlZmluZXMgdGhlIGF0dHJpYnV0ZXMgb2YgYSB0YWJsZSBjb2x1bW4gZ3JvdXAuXG4gKi9cbnZhciBGaXhlZERhdGFUYWJsZUNvbHVtbkdyb3VwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0ZpeGVkRGF0YVRhYmxlQ29sdW1uR3JvdXAnLFxuXG4gIHN0YXRpY3M6IHtcbiAgICBfX1RhYmxlQ29sdW1uR3JvdXBfXzogdHJ1ZVxuICB9LFxuXG4gIHByb3BUeXBlczoge1xuICAgIC8qKlxuICAgICAqIFRoZSBob3Jpem9udGFsIGFsaWdubWVudCBvZiB0aGUgdGFibGUgY2VsbCBjb250ZW50LlxuICAgICAqL1xuICAgIGFsaWduOiBQcm9wVHlwZXMub25lT2YoWydsZWZ0JywgJ2NlbnRlcicsICdyaWdodCddKSxcblxuICAgIC8qKlxuICAgICAqIENvbnRyb2xzIGlmIHRoZSBjb2x1bW4gZ3JvdXAgaXMgZml4ZWQgd2hlbiBzY3JvbGxpbmcgaW4gdGhlIFggYXhpcy5cbiAgICAgKi9cbiAgICBmaXhlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGlzIHRoZSBoZWFkZXIgY2VsbCBmb3IgdGhpcyBjb2x1bW4gZ3JvdXAuXG4gICAgICogVGhpcyBjYW4gZWl0aGVyIGJlIGEgc3RyaW5nIG9yIGEgUmVhY3QgZWxlbWVudC4gUGFzc2luZyBpbiBhIHN0cmluZ1xuICAgICAqIHdpbGwgcmVuZGVyIGEgZGVmYXVsdCBmb290ZXIgY2VsbCB3aXRoIHRoYXQgc3RyaW5nLiBCeSBkZWZhdWx0LCB0aGUgUmVhY3RcbiAgICAgKiBlbGVtZW50IHBhc3NlZCBpbiBjYW4gZXhwZWN0IHRvIHJlY2VpdmUgdGhlIGZvbGxvd2luZyBwcm9wczpcbiAgICAgKlxuICAgICAqIGBgYFxuICAgICAqIHByb3BzOiB7XG4gICAgICogICBoZWlnaHQ6IG51bWJlciAvLyAoc3VwcGxpZWQgZnJvbSB0aGUgZ3JvdXBIZWFkZXJIZWlnaHQpXG4gICAgICogICB3aWR0aDogbnVtYmVyIC8vIChzdXBwbGllZCBmcm9tIHRoZSBDb2x1bW4pXG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogQmVjYXVzZSB5b3UgYXJlIHBhc3NpbmcgaW4geW91ciBvd24gUmVhY3QgZWxlbWVudCwgeW91IGNhbiBmZWVsIGZyZWUgdG9cbiAgICAgKiBwYXNzIGluIHdoYXRldmVyIHByb3BzIHlvdSBtYXkgd2FudCBvciBuZWVkLlxuICAgICAqXG4gICAgICogWW91IGNhbiBhbHNvIHBhc3MgaW4gYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSByZWFjdCBlbGVtbnQsIHdpdGggdGhlXG4gICAgICogcHJvcHMgb2JqZWN0IGFib3ZlIHBhc3NlZCBpbiBhcyB0aGUgZmlyc3QgcGFyYW1ldGVyLlxuICAgICAqL1xuICAgIGhlYWRlcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm5vZGUsIFByb3BUeXBlcy5mdW5jXSlcblxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkgLypvYmplY3QqL3tcbiAgICByZXR1cm4ge1xuICAgICAgZml4ZWQ6IGZhbHNlXG4gICAgfTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb21wb25lbnQgPEZpeGVkRGF0YVRhYmxlQ29sdW1uR3JvdXAgLz4gc2hvdWxkIG5ldmVyIHJlbmRlcicpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRml4ZWREYXRhVGFibGVDb2x1bW5Hcm91cDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL0ZpeGVkRGF0YVRhYmxlQ29sdW1uR3JvdXBOZXcucmVhY3QuanNcbiAqKiBtb2R1bGUgaWQgPSA0NzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIEZpeGVkRGF0YVRhYmxlQ2VsbFRyYW5zaXRpb24ucmVhY3RcbiAqL1xuXG4vKipcbiAqIFRSQU5TSVRJT04gU0hJTVxuICogVGhpcyBhY3RzIHRvIHByb3ZpZGUgYW4gaW50ZXJtZWRpYXRlIG1hcHBpbmcgZnJvbSB0aGUgb2xkIEFQSSB0byB0aGUgbmV3IEFQSS5cbiAqXG4gKiBXaGVuIHJlYWR5LCByZW1vdmUgdGhpcyBmaWxlIGFuZCByZW5hbWUgdGhlIHByb3ZpZGVzTW9kdWxlIGluXG4gKiBGaXhlZERhdGFUYWJsZUNlbGxOZXcucmVhY3QgYW5kIGRlcGVuZGVuY3kgaW4gRml4ZWREYXRhVGFibGVDZWxsR3JvdXAucmVhY3RcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJy4vUmVhY3QnKTtcbnZhciBQcm9wVHlwZXMgPSBSZWFjdC5Qcm9wVHlwZXM7XG5cbnZhciBjeCA9IHJlcXVpcmUoJy4vY3gnKTtcbnZhciBqb2luQ2xhc3NlcyA9IHJlcXVpcmUoJy4vam9pbkNsYXNzZXMnKTtcbnZhciBzaGFsbG93RXF1YWwgPSByZXF1aXJlKCcuL3NoYWxsb3dFcXVhbCcpO1xuXG52YXIgQ2VsbERlZmF1bHQgPSByZXF1aXJlKCcuL0ZpeGVkRGF0YVRhYmxlQ2VsbERlZmF1bHQucmVhY3QnKTtcblxudmFyIFRyYW5zaXRpb25DZWxsID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1RyYW5zaXRpb25DZWxsJyxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZywgLy8gaGVhZGVyLCBmb290ZXJcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgcm93SW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgcm93R2V0dGVyOiBQcm9wVHlwZXMuZnVuYywgLy8gY2VsbFxuICAgIGRhdGFLZXk6IFByb3BUeXBlcy5vbmVPZlR5cGUoWy8vIGNlbGwsIGZvb3RlclxuICAgIFByb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbiAgICBjZWxsUmVuZGVyZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIGNlbGxEYXRhR2V0dGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBmb290ZXJEYXRhR2V0dGVyOiBQcm9wVHlwZXMuZnVuYywgLy8gZm9vdGVyXG4gICAgZm9vdGVyRGF0YTogUHJvcFR5cGVzLmFueSwgLy8gZm9vdGVyXG4gICAgY29sdW1uRGF0YTogUHJvcFR5cGVzLmFueSwgLy8gY2VsbCwgaGVhZGVyXG4gICAgd2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGlzSGVhZGVyQ2VsbDogUHJvcFR5cGVzLmJvb2wsIC8vIGhlYWRlclxuICAgIGlzRm9vdGVyQ2VsbDogUHJvcFR5cGVzLmJvb2wgfSxcblxuICAvLyBmb290ZXJcbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlOiBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUoIC8qb2JqZWN0Ki9uZXh0UHJvcHMpIHtcbiAgICB2YXIgdXBkYXRlID0gZmFsc2U7XG4gICAgdmFyIHJvd0RhdGE7XG4gICAgaWYgKG5leHRQcm9wcy5yb3dHZXR0ZXIpIHtcbiAgICAgIHJvd0RhdGEgPSBuZXh0UHJvcHMucm93R2V0dGVyKG5leHRQcm9wcy5yb3dJbmRleCk7XG4gICAgICBpZiAodGhpcy5fcm93RGF0YSAhPT0gcm93RGF0YSkge1xuICAgICAgICB1cGRhdGUgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBjZWxsRGF0YTtcbiAgICBpZiAobmV4dFByb3BzLmRhdGFLZXkgIT0gbnVsbCkge1xuICAgICAgaWYgKG5leHRQcm9wcy5jZWxsRGF0YUdldHRlcikge1xuICAgICAgICBjZWxsRGF0YSA9IG5leHRQcm9wcy5jZWxsRGF0YUdldHRlcihuZXh0UHJvcHMuZGF0YUtleSwgcm93RGF0YSk7XG4gICAgICB9XG4gICAgICBpZiAoIWNlbGxEYXRhICYmIHJvd0RhdGEpIHtcbiAgICAgICAgY2VsbERhdGEgPSByb3dEYXRhW25leHRQcm9wcy5kYXRhS2V5XTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuX2NlbGxEYXRhICE9PSBjZWxsRGF0YSkge1xuICAgICAgdXBkYXRlID0gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy5fcm93RGF0YSA9IHJvd0RhdGE7XG4gICAgdGhpcy5fY2VsbERhdGEgPSBjZWxsRGF0YTtcblxuICAgIHJldHVybiB1cGRhdGUgfHwgIXNoYWxsb3dFcXVhbChuZXh0UHJvcHMsIHRoaXMucHJvcHMpO1xuICB9LFxuXG4gIF9nZXRDZWxsRGF0YTogZnVuY3Rpb24gX2dldENlbGxEYXRhKHByb3BzKSB7XG4gICAgdmFyIGRhdGFLZXkgPSBwcm9wcy5kYXRhS2V5O1xuICAgIGlmIChkYXRhS2V5ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciByb3dEYXRhO1xuICAgIGlmIChwcm9wcy5yb3dHZXR0ZXIpIHtcbiAgICAgIHJvd0RhdGEgPSBwcm9wcy5yb3dHZXR0ZXIocHJvcHMucm93SW5kZXgpO1xuICAgIH1cblxuICAgIGlmIChwcm9wcy5jZWxsRGF0YUdldHRlcikge1xuICAgICAgcmV0dXJuIHByb3BzLmNlbGxEYXRhR2V0dGVyKGRhdGFLZXksIHJvd0RhdGEpO1xuICAgIH1cblxuICAgIGlmIChyb3dEYXRhKSB7XG4gICAgICByZXR1cm4gcm93RGF0YVtkYXRhS2V5XTtcbiAgICB9XG5cbiAgICBpZiAocHJvcHMuZm9vdGVyRGF0YUdldHRlcikge1xuICAgICAgcmV0dXJuIHByb3BzLmZvb3RlckRhdGFHZXR0ZXIoKVtkYXRhS2V5XTtcbiAgICB9XG5cbiAgICBpZiAocHJvcHMuZm9vdGVyRGF0YSkge1xuICAgICAgcmV0dXJuIHByb3BzLmZvb3RlckRhdGFbZGF0YUtleV07XG4gICAgfVxuXG4gICAgaWYgKHByb3BzLmhlYWRlckRhdGFHZXR0ZXIpIHtcbiAgICAgIHJldHVybiBwcm9wcy5oZWFkZXJEYXRhR2V0dGVyW2RhdGFLZXldO1xuICAgIH1cbiAgfSxcblxuICBfZ2V0Um93RGF0YTogZnVuY3Rpb24gX2dldFJvd0RhdGEocHJvcHMpIHtcbiAgICBpZiAocHJvcHMucm93R2V0dGVyKSB7XG4gICAgICByZXR1cm4gcHJvcHMucm93R2V0dGVyKHByb3BzLnJvd0luZGV4KSB8fCB7fTtcbiAgICB9XG5cbiAgICBpZiAocHJvcHMuZm9vdGVyRGF0YUdldHRlcikge1xuICAgICAgcmV0dXJuIHByb3BzLmZvb3RlckRhdGFHZXR0ZXIoKSB8fCB7fTtcbiAgICB9XG5cbiAgICBpZiAocHJvcHMuZm9vdGVyRGF0YSkge1xuICAgICAgcmV0dXJuIHByb3BzLmZvb3RlckRhdGEgfHwge307XG4gICAgfVxuXG4gICAgcmV0dXJuIHt9O1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG5cbiAgICB2YXIgY2VsbERhdGEgPSB0aGlzLl9nZXRDZWxsRGF0YShwcm9wcyk7XG4gICAgdmFyIGNvbnRlbnQgPSBjZWxsRGF0YTtcbiAgICB2YXIgcm93RGF0YSA9IHRoaXMuX2dldFJvd0RhdGEocHJvcHMpO1xuICAgIHZhciB1c2luZ1JlbmRlcmVyID0gISEocHJvcHMuY2VsbFJlbmRlcmVyIHx8IHByb3BzLmdyb3VwSGVhZGVyUmVuZGVyZXIpO1xuXG4gICAgaWYgKHByb3BzLmlzSGVhZGVyQ2VsbCB8fCBwcm9wcy5pc0Zvb3RlckNlbGwpIHtcbiAgICAgIGNvbnRlbnQgPSBjb250ZW50IHx8IHByb3BzLmxhYmVsO1xuICAgIH1cblxuICAgIGlmIChwcm9wcy5jZWxsUmVuZGVyZXIpIHtcbiAgICAgIGlmIChwcm9wcy5pc0hlYWRlckNlbGwgfHwgcHJvcHMuaXNGb290ZXJDZWxsKSB7XG4gICAgICAgIGNvbnRlbnQgPSBwcm9wcy5jZWxsUmVuZGVyZXIocHJvcHMubGFiZWwsIHByb3BzLmRhdGFLZXksIHByb3BzLmNvbHVtbkRhdGEsIHJvd0RhdGEsIHByb3BzLndpZHRoKSB8fCBwcm9wcy5sYWJlbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRlbnQgPSBwcm9wcy5jZWxsUmVuZGVyZXIoY2VsbERhdGEsIHByb3BzLmRhdGFLZXksIHJvd0RhdGEsIHByb3BzLnJvd0luZGV4LCBwcm9wcy5jb2x1bW5EYXRhLCBwcm9wcy53aWR0aCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHByb3BzLmdyb3VwSGVhZGVyUmVuZGVyZXIpIHtcbiAgICAgIGNvbnRlbnQgPSBwcm9wcy5ncm91cEhlYWRlclJlbmRlcmVyKHByb3BzLmxhYmVsLCBwcm9wcy5kYXRhS2V5LCAvLyBpbmRleCBpbiBjaGlsZHJlblxuICAgICAgcHJvcHMuZ3JvdXBIZWFkZXJEYXRhLCBwcm9wcy5ncm91cEhlYWRlckxhYmVscywgcHJvcHMud2lkdGgpIHx8IGNvbnRlbnQ7XG4gICAgfVxuXG4gICAgdmFyIGNvbnRlbnRDbGFzcyA9IGN4KCdwdWJsaWMvZml4ZWREYXRhVGFibGVDZWxsL2NlbGxDb250ZW50Jyk7XG5cbiAgICBpZiAoUmVhY3QuaXNWYWxpZEVsZW1lbnQoY29udGVudCkgJiYgdXNpbmdSZW5kZXJlcikge1xuICAgICAgY29udGVudCA9IFJlYWN0LmNsb25lRWxlbWVudChjb250ZW50LCB7XG4gICAgICAgIGNsYXNzTmFtZTogam9pbkNsYXNzZXMoY29udGVudC5wcm9wcy5jbGFzc05hbWUsIGNvbnRlbnRDbGFzcylcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgQ2VsbERlZmF1bHQsXG4gICAgICAgIHByb3BzLFxuICAgICAgICBjb250ZW50XG4gICAgICApO1xuICAgIH1cblxuICAgIHZhciBpbm5lclN0eWxlID0gX2V4dGVuZHMoe1xuICAgICAgaGVpZ2h0OiBwcm9wcy5oZWlnaHQsXG4gICAgICB3aWR0aDogcHJvcHMud2lkdGhcbiAgICB9LCBwcm9wcy5zdHlsZSk7XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBqb2luQ2xhc3NlcyhjeCgnZml4ZWREYXRhVGFibGVDZWxsTGF5b3V0L3dyYXAxJyksIGN4KCdwdWJsaWMvZml4ZWREYXRhVGFibGVDZWxsL3dyYXAxJyksIHRoaXMucHJvcHMuY2xhc3NOYW1lKSxcbiAgICAgICAgc3R5bGU6IGlubmVyU3R5bGUgfSksXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzTmFtZTogam9pbkNsYXNzZXMoY3goJ2ZpeGVkRGF0YVRhYmxlQ2VsbExheW91dC93cmFwMicpLCBjeCgncHVibGljL2ZpeGVkRGF0YVRhYmxlQ2VsbC93cmFwMicpKSB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogam9pbkNsYXNzZXMoY3goJ2ZpeGVkRGF0YVRhYmxlQ2VsbExheW91dC93cmFwMycpLCBjeCgncHVibGljL2ZpeGVkRGF0YVRhYmxlQ2VsbC93cmFwMycpKSB9LFxuICAgICAgICAgIGNvbnRlbnRcbiAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRyYW5zaXRpb25DZWxsO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvRml4ZWREYXRhVGFibGVDZWxsVHJhbnNpdGlvbi5yZWFjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDQ3MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuL2ZpeGVkLWRhdGEtdGFibGUuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9maXhlZC1kYXRhLXRhYmxlLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZml4ZWQtZGF0YS10YWJsZS5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZpeGVkLWRhdGEtdGFibGUvZGlzdC9maXhlZC1kYXRhLXRhYmxlLmNzc1xuICoqIG1vZHVsZSBpZCA9IDQ3MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcbiAqIEZpeGVkRGF0YVRhYmxlIHYwLjYuMyBcXG4gKlxcbiAqIENvcHlyaWdodCAoYykgMjAxNSwgRmFjZWJvb2ssIEluYy5cXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXFxuICovXFxuXFxuLyoqXFxuICogQ29weXJpZ2h0IChjKSAyMDE1LCBGYWNlYm9vaywgSW5jLlxcbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcXG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cXG4gKlxcbiAqIEBwcm92aWRlc01vZHVsZSBmaXhlZERhdGFUYWJsZUNlbGxHcm91cExheW91dFxcbiAqL1xcblxcbi5maXhlZERhdGFUYWJsZUNlbGxHcm91cExheW91dF9jZWxsR3JvdXAge1xcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGxlZnQ6IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLmZpeGVkRGF0YVRhYmxlQ2VsbEdyb3VwTGF5b3V0X2NlbGxHcm91cCA+IC5wdWJsaWNfZml4ZWREYXRhVGFibGVDZWxsX21haW4ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxufVxcblxcbi5maXhlZERhdGFUYWJsZUNlbGxHcm91cExheW91dF9jZWxsR3JvdXBXcmFwcGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG59XFxuLyoqXFxuICogQ29weXJpZ2h0IChjKSAyMDE1LCBGYWNlYm9vaywgSW5jLlxcbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcXG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cXG4gKlxcbiAqIEBwcm92aWRlc01vZHVsZSBmaXhlZERhdGFUYWJsZUNlbGxMYXlvdXRcXG4gKi9cXG5cXG4uZml4ZWREYXRhVGFibGVDZWxsTGF5b3V0X21haW4ge1xcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1yaWdodC13aWR0aDogMXB4O1xcbiAgYm9yZGVyLXdpZHRoOiAwIDFweCAwIDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG59XFxuXFxuLmZpeGVkRGF0YVRhYmxlQ2VsbExheW91dF9sYXN0Q2hpbGQge1xcbiAgYm9yZGVyLXdpZHRoOiAwIDFweCAxcHggMDtcXG59XFxuXFxuLmZpeGVkRGF0YVRhYmxlQ2VsbExheW91dF9hbGlnblJpZ2h0IHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4uZml4ZWREYXRhVGFibGVDZWxsTGF5b3V0X2FsaWduQ2VudGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmZpeGVkRGF0YVRhYmxlQ2VsbExheW91dF93cmFwMSB7XFxuICBkaXNwbGF5OiB0YWJsZTtcXG59XFxuXFxuLmZpeGVkRGF0YVRhYmxlQ2VsbExheW91dF93cmFwMiB7XFxuICBkaXNwbGF5OiB0YWJsZS1yb3c7XFxufVxcblxcbi5maXhlZERhdGFUYWJsZUNlbGxMYXlvdXRfd3JhcDMge1xcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbi5maXhlZERhdGFUYWJsZUNlbGxMYXlvdXRfY29sdW1uUmVzaXplckNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMHB4O1xcbiAgd2lkdGg6IDZweDtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5maXhlZERhdGFUYWJsZUNlbGxMYXlvdXRfY29sdW1uUmVzaXplckNvbnRhaW5lcjpob3ZlciB7XFxuICBjdXJzb3I6IGV3LXJlc2l6ZTtcXG59XFxuXFxuLmZpeGVkRGF0YVRhYmxlQ2VsbExheW91dF9jb2x1bW5SZXNpemVyQ29udGFpbmVyOmhvdmVyIC5maXhlZERhdGFUYWJsZUNlbGxMYXlvdXRfY29sdW1uUmVzaXplcktub2Ige1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLmZpeGVkRGF0YVRhYmxlQ2VsbExheW91dF9jb2x1bW5SZXNpemVyS25vYiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMHB4O1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgd2lkdGg6IDRweDtcXG59XFxuLyoqXFxuICogQ29weXJpZ2h0IChjKSAyMDE1LCBGYWNlYm9vaywgSW5jLlxcbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcXG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cXG4gKlxcbiAqIEBwcm92aWRlc01vZHVsZSBmaXhlZERhdGFUYWJsZUNvbHVtblJlc2l6ZXJMaW5lTGF5b3V0XFxuICovXFxuXFxuLmZpeGVkRGF0YVRhYmxlQ29sdW1uUmVzaXplckxpbmVMYXlvdXRfbW91c2VBcmVhIHtcXG4gIGN1cnNvcjogZXctcmVzaXplO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IC01cHg7XFxuICB3aWR0aDogMTJweDtcXG59XFxuXFxuLmZpeGVkRGF0YVRhYmxlQ29sdW1uUmVzaXplckxpbmVMYXlvdXRfbWFpbiB7XFxuICBib3JkZXItcmlnaHQtc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAxcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTA7XFxufVxcblxcbmJvZHlbZGlyPVxcXCJydGxcXFwiXSAuZml4ZWREYXRhVGFibGVDb2x1bW5SZXNpemVyTGluZUxheW91dF9tYWluIHtcXG4gIC8qIHRoZSByZXNpemVyIGxpbmUgaXMgaW4gdGhlIHdyb25nIHBvc2l0aW9uIGluIFJUTCB3aXRoIG5vIGVhc3kgZml4LlxcbiAgICogRGlzYWJsaW5nIGlzIG1vcmUgdXNlZnVsIHRoYW4gZGlzcGxheWluZyBpdC5cXG4gICAqICMxNjcgKGdpdGh1Yikgc2hvdWxkIGxvb2sgaW50byB0aGlzIGFuZCBjb21lIHVwIHdpdGggYSBwZXJtYW5lbnQgZml4LlxcbiAgICovXFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi5maXhlZERhdGFUYWJsZUNvbHVtblJlc2l6ZXJMaW5lTGF5b3V0X2hpZGRlbkVsZW0ge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG4vKipcXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUsIEZhY2Vib29rLCBJbmMuXFxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxcbiAqXFxuICogQHByb3ZpZGVzTW9kdWxlIGZpeGVkRGF0YVRhYmxlTGF5b3V0XFxuICovXFxuXFxuLmZpeGVkRGF0YVRhYmxlTGF5b3V0X21haW4ge1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci13aWR0aDogMXB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5maXhlZERhdGFUYWJsZUxheW91dF9oZWFkZXIsXFxuLmZpeGVkRGF0YVRhYmxlTGF5b3V0X2hhc0JvdHRvbUJvcmRlciB7XFxuICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcXG59XFxuXFxuLmZpeGVkRGF0YVRhYmxlTGF5b3V0X2Zvb3RlciAucHVibGljX2ZpeGVkRGF0YVRhYmxlQ2VsbF9tYWluIHtcXG4gIGJvcmRlci10b3Atc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXRvcC13aWR0aDogMXB4O1xcbn1cXG5cXG4uZml4ZWREYXRhVGFibGVMYXlvdXRfdG9wU2hhZG93LFxcbi5maXhlZERhdGFUYWJsZUxheW91dF9ib3R0b21TaGFkb3cge1xcbiAgaGVpZ2h0OiA0cHg7XFxuICBsZWZ0OiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uZml4ZWREYXRhVGFibGVMYXlvdXRfYm90dG9tU2hhZG93IHtcXG4gIG1hcmdpbi10b3A6IC00cHg7XFxufVxcblxcbi5maXhlZERhdGFUYWJsZUxheW91dF9yb3dzQ29udGFpbmVyIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5maXhlZERhdGFUYWJsZUxheW91dF9ob3Jpem9udGFsU2Nyb2xsYmFyIHtcXG4gIGJvdHRvbTogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuLyoqXFxuICogQ29weXJpZ2h0IChjKSAyMDE1LCBGYWNlYm9vaywgSW5jLlxcbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcXG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cXG4gKlxcbiAqIEBwcm92aWRlc01vZHVsZSBmaXhlZERhdGFUYWJsZVJvd0xheW91dFxcbiAqL1xcblxcbi5maXhlZERhdGFUYWJsZVJvd0xheW91dF9tYWluIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbn1cXG5cXG4uZml4ZWREYXRhVGFibGVSb3dMYXlvdXRfYm9keSB7XFxuICBsZWZ0OiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbn1cXG5cXG4uZml4ZWREYXRhVGFibGVSb3dMYXlvdXRfZml4ZWRDb2x1bW5zRGl2aWRlciB7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgYm9yZGVyLWxlZnQtc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDFweDtcXG4gIGxlZnQ6IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMDtcXG59XFxuXFxuLmZpeGVkRGF0YVRhYmxlUm93TGF5b3V0X2NvbHVtbnNTaGFkb3cge1xcbiAgd2lkdGg6IDRweDtcXG59XFxuXFxuLmZpeGVkRGF0YVRhYmxlUm93TGF5b3V0X3Jvd1dyYXBwZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbn1cXG4vKipcXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUsIEZhY2Vib29rLCBJbmMuXFxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxcbiAqXFxuICogQHByb3ZpZGVzTW9kdWxlIFNjcm9sbGJhckxheW91dFxcbiAqL1xcblxcbi5TY3JvbGxiYXJMYXlvdXRfbWFpbiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDI1MG1zO1xcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyNTBtcztcXG4gIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XFxuICAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLlNjcm9sbGJhckxheW91dF9tYWluVmVydGljYWwge1xcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3Igd2lkdGg7XFxuICAgICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3Igd2lkdGg7XFxuICB3aWR0aDogMTVweDtcXG59XFxuXFxuLlNjcm9sbGJhckxheW91dF9tYWluVmVydGljYWwucHVibGljX1Njcm9sbGJhcl9tYWluQWN0aXZlLFxcbi5TY3JvbGxiYXJMYXlvdXRfbWFpblZlcnRpY2FsOmhvdmVyIHtcXG4gIHdpZHRoOiAxN3B4O1xcbn1cXG5cXG4uU2Nyb2xsYmFyTGF5b3V0X21haW5Ib3Jpem9udGFsIHtcXG4gIGJvdHRvbTogMDtcXG4gIGhlaWdodDogMTVweDtcXG4gIGxlZnQ6IDA7XFxuICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IgaGVpZ2h0O1xcbiAgICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yIGhlaWdodDtcXG59XFxuXFxuLyogVG91Y2hpbmcgdGhlIHNjcm9sbC10cmFjayBkaXJlY3RseSBtYWtlcyB0aGUgc2Nyb2xsLXRyYWNrIGJvbGRlciAqL1xcbi5TY3JvbGxiYXJMYXlvdXRfbWFpbkhvcml6b250YWwucHVibGljX1Njcm9sbGJhcl9tYWluQWN0aXZlLFxcbi5TY3JvbGxiYXJMYXlvdXRfbWFpbkhvcml6b250YWw6aG92ZXIge1xcbiAgaGVpZ2h0OiAxN3B4O1xcbn1cXG5cXG4uU2Nyb2xsYmFyTGF5b3V0X2ZhY2Uge1xcbiAgbGVmdDogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4vKipcXG4gKiBUaGlzIHNlbGVjdG9yIHJlbmRlcnMgdGhlIFxcXCJudWJcXFwiIG9mIHRoZSBzY3JvbGxmYWNlLiBUaGUgbnViIG11c3RcXG4gKiBiZSByZW5kZXJlZCBhcyBwc2V1ZG8tZWxlbWVudCBzbyB0aGF0IGl0IHdvbid0IHJlY2VpdmUgYW55IFVJIGV2ZW50cyB0aGVuXFxuICogd2UgY2FuIGdldCB0aGUgY29ycmVjdCBgZXZlbnQub2Zmc2V0WGAgYW5kIGBldmVudC5vZmZzZXRZYCBmcm9tIHRoZVxcbiAqIHNjcm9sbGZhY2UgZWxlbWVudCB3aGlsZSBkcmFnZ2luZyBpdC5cXG4gKi9cXG4uU2Nyb2xsYmFyTGF5b3V0X2ZhY2U6YWZ0ZXIge1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgY29udGVudDogJyc7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyNTBtcyBlYXNlO1xcbiAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDI1MG1zIGVhc2U7XFxufVxcblxcbi5TY3JvbGxiYXJMYXlvdXRfZmFjZUhvcml6b250YWwge1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG59XFxuXFxuLlNjcm9sbGJhckxheW91dF9mYWNlSG9yaXpvbnRhbDphZnRlciB7XFxuICBib3R0b206IDRweDtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDRweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uU2Nyb2xsYmFyTGF5b3V0X2ZhY2VWZXJ0aWNhbCB7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxufVxcblxcbi5TY3JvbGxiYXJMYXlvdXRfZmFjZVZlcnRpY2FsOmFmdGVyIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGxlZnQ6IDRweDtcXG4gIHJpZ2h0OiA0cHg7XFxuICB0b3A6IDA7XFxufVxcbi8qKlxcbiAqIENvcHlyaWdodCAoYykgMjAxNSwgRmFjZWJvb2ssIEluYy5cXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXFxuICpcXG4gKiBAcHJvdmlkZXNNb2R1bGUgZml4ZWREYXRhVGFibGVcXG4gKlxcbiAqL1xcblxcbi8qKlxcbiAqIFRhYmxlLlxcbiAqL1xcbi5wdWJsaWNfZml4ZWREYXRhVGFibGVfbWFpbiB7XFxuICBib3JkZXItY29sb3I6ICNkM2QzZDM7XFxufVxcblxcbi5wdWJsaWNfZml4ZWREYXRhVGFibGVfaGVhZGVyLFxcbi5wdWJsaWNfZml4ZWREYXRhVGFibGVfaGFzQm90dG9tQm9yZGVyIHtcXG4gIGJvcmRlci1jb2xvcjogI2QzZDNkMztcXG59XFxuXFxuLnB1YmxpY19maXhlZERhdGFUYWJsZV9oZWFkZXIgLnB1YmxpY19maXhlZERhdGFUYWJsZUNlbGxfbWFpbiB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnB1YmxpY19maXhlZERhdGFUYWJsZV9oZWFkZXIsXFxuLnB1YmxpY19maXhlZERhdGFUYWJsZV9oZWFkZXIgLnB1YmxpY19maXhlZERhdGFUYWJsZUNlbGxfbWFpbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmN2Y4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoI2ZmZiwgI2VmZWZlZik7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoI2ZmZiwgI2VmZWZlZik7XFxufVxcblxcbi5wdWJsaWNfZml4ZWREYXRhVGFibGVfZm9vdGVyIC5wdWJsaWNfZml4ZWREYXRhVGFibGVDZWxsX21haW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjdmODtcXG4gIGJvcmRlci1jb2xvcjogI2QzZDNkMztcXG59XFxuXFxuLnB1YmxpY19maXhlZERhdGFUYWJsZV90b3BTaGFkb3cge1xcbiAgYmFja2dyb3VuZDogMCAwIHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFFQUFBQUVDQVlBQUFCUDJGVTZBQUFBRjBsRVFWUjRBV1BVa05lU0JoSENqSm9LMnR3Z0Zpc0FGYWdDQ3AzcEpsQUFBQUFBU1VWT1JLNUNZSUk9KSByZXBlYXQteDtcXG59XFxuXFxuLnB1YmxpY19maXhlZERhdGFUYWJsZV9ib3R0b21TaGFkb3cge1xcbiAgYmFja2dyb3VuZDogMCAwIHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFFQUFBQUVDQVlBQUFCUDJGVTZBQUFBSEVsRVFWUUkxMk13TmpabVpkQVQxK05tMEpEV0VHWlFrMUdUQmdBV2t3SWVBRXA1MkFBQUFBQkpSVTVFcmtKZ2dnPT0pIHJlcGVhdC14O1xcbn1cXG5cXG4ucHVibGljX2ZpeGVkRGF0YVRhYmxlX2hvcml6b250YWxTY3JvbGxiYXIgLnB1YmxpY19TY3JvbGxiYXJfbWFpbkhvcml6b250YWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuLyoqXFxuICogQ29weXJpZ2h0IChjKSAyMDE1LCBGYWNlYm9vaywgSW5jLlxcbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcXG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cXG4gKlxcbiAqIEBwcm92aWRlc01vZHVsZSBmaXhlZERhdGFUYWJsZUNlbGxcXG4gKi9cXG5cXG4vKipcXG4gKiBUYWJsZSBjZWxsLlxcbiAqL1xcbi5wdWJsaWNfZml4ZWREYXRhVGFibGVDZWxsX21haW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1jb2xvcjogI2QzZDNkMztcXG59XFxuXFxuLnB1YmxpY19maXhlZERhdGFUYWJsZUNlbGxfaGlnaGxpZ2h0ZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcXG59XFxuXFxuLnB1YmxpY19maXhlZERhdGFUYWJsZUNlbGxfY2VsbENvbnRlbnQge1xcbiAgcGFkZGluZzogOHB4O1xcbn1cXG5cXG4ucHVibGljX2ZpeGVkRGF0YVRhYmxlQ2VsbF9jb2x1bW5SZXNpemVyS25vYiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDI4NGZmO1xcbn1cXG4vKipcXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUsIEZhY2Vib29rLCBJbmMuXFxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxcbiAqXFxuICogQHByb3ZpZGVzTW9kdWxlIGZpeGVkRGF0YVRhYmxlQ29sdW1uUmVzaXplckxpbmVcXG4gKlxcbiAqL1xcblxcbi8qKlxcbiAqIENvbHVtbiByZXNpemVyIGxpbmUuXFxuICovXFxuLnB1YmxpY19maXhlZERhdGFUYWJsZUNvbHVtblJlc2l6ZXJMaW5lX21haW4ge1xcbiAgYm9yZGVyLWNvbG9yOiAjMDI4NGZmO1xcbn1cXG4vKipcXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUsIEZhY2Vib29rLCBJbmMuXFxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxcbiAqXFxuICogQHByb3ZpZGVzTW9kdWxlIGZpeGVkRGF0YVRhYmxlUm93XFxuICovXFxuXFxuLyoqXFxuICogVGFibGUgcm93LlxcbiAqL1xcbi5wdWJsaWNfZml4ZWREYXRhVGFibGVSb3dfbWFpbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG4ucHVibGljX2ZpeGVkRGF0YVRhYmxlUm93X2hpZ2hsaWdodGVkLFxcbi5wdWJsaWNfZml4ZWREYXRhVGFibGVSb3dfaGlnaGxpZ2h0ZWQgLnB1YmxpY19maXhlZERhdGFUYWJsZUNlbGxfbWFpbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmN2Y4O1xcbn1cXG5cXG4ucHVibGljX2ZpeGVkRGF0YVRhYmxlUm93X2ZpeGVkQ29sdW1uc0RpdmlkZXIge1xcbiAgYm9yZGVyLWNvbG9yOiAjZDNkM2QzO1xcbn1cXG5cXG4ucHVibGljX2ZpeGVkRGF0YVRhYmxlUm93X2NvbHVtbnNTaGFkb3cge1xcbiAgYmFja2dyb3VuZDogMCAwIHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFRQUFBQUJDQVlBQUFENVBBL05BQUFBRmtsRVFWUUlIV1BTa05lU0JtSmhUUVZ0YmlETkNnQVNhZ0lJdUpYOE9nQUFBQUJKUlU1RXJrSmdnZz09KSByZXBlYXQteTtcXG59XFxuLyoqXFxuICogQ29weXJpZ2h0IChjKSAyMDE1LCBGYWNlYm9vaywgSW5jLlxcbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcXG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cXG4gKlxcbiAqIEBwcm92aWRlc01vZHVsZSBTY3JvbGxiYXJcXG4gKlxcbiAqL1xcblxcbi8qKlxcbiAqIFNjcm9sbGJhcnMuXFxuICovXFxuXFxuLyogVG91Y2hpbmcgdGhlIHNjcm9sbC10cmFjayBkaXJlY3RseSBtYWtlcyB0aGUgc2Nyb2xsLXRyYWNrIGJvbGRlciAqL1xcbi5wdWJsaWNfU2Nyb2xsYmFyX21haW4ucHVibGljX1Njcm9sbGJhcl9tYWluQWN0aXZlLFxcbi5wdWJsaWNfU2Nyb2xsYmFyX21haW46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcbn1cXG5cXG4ucHVibGljX1Njcm9sbGJhcl9tYWluT3BhcXVlLFxcbi5wdWJsaWNfU2Nyb2xsYmFyX21haW5PcGFxdWUucHVibGljX1Njcm9sbGJhcl9tYWluQWN0aXZlLFxcbi5wdWJsaWNfU2Nyb2xsYmFyX21haW5PcGFxdWU6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuXFxuLnB1YmxpY19TY3JvbGxiYXJfZmFjZTphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzJjMmMyO1xcbn1cXG5cXG4ucHVibGljX1Njcm9sbGJhcl9tYWluOmhvdmVyIC5wdWJsaWNfU2Nyb2xsYmFyX2ZhY2U6YWZ0ZXIsXFxuLnB1YmxpY19TY3JvbGxiYXJfbWFpbkFjdGl2ZSAucHVibGljX1Njcm9sbGJhcl9mYWNlOmFmdGVyLFxcbi5wdWJsaWNfU2Nyb2xsYmFyX2ZhY2VBY3RpdmU6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdkN2Q3ZDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlciEuL34vZml4ZWQtZGF0YS10YWJsZS9kaXN0L2ZpeGVkLWRhdGEtdGFibGUuY3NzXG4gKiogbW9kdWxlIGlkID0gNDczXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ2VsbCB9IGZyb20gJ2ZpeGVkLWRhdGEtdGFibGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb3J0YWJsZUhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMub25IZWFkZXJDbGljayA9IHRoaXMub25IZWFkZXJDbGljay5iaW5kKHRoaXMpO1xuICB9XG4gIG9uSGVhZGVyQ2xpY2soZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnByb3BzLm9uSGVhZGVyQ2xpY2sodGhpcy5wcm9wcy5jb2x1bW4pO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPENlbGw+XG4gICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMub25IZWFkZXJDbGlja30+e3RoaXMucHJvcHMuY29sdW1ufTwvYT5cbiAgICAgIDwvQ2VsbD5cbiAgICApO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL1NvcnRhYmxlSGVhZGVyLmpzXG4gKiovIiwiaW1wb3J0IHsgZm9yayB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XG5pbXBvcnQgKiBhcyBzYWdhcyBmcm9tICcuL3NhZ2FzREIuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogb3B0aW9uc1NhZ2EoKSB7XG4gIHlpZWxkIGZvcmsoc2FnYXMuZmV0Y2hTaXRlc1NhZ2EpO1xuICBjb25zb2xlLmxvZygnaGknKTtcbiAgeWllbGQgZm9yayhzYWdhcy5hZGRTaXRlU2FnYSk7XG4gIGNvbnNvbGUubG9nKCdoaSBhZ2FpbicpO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc2FnYXMvb3B0aW9uc1NhZ2FzLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==