webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(33);
	
	var _redux = __webpack_require__(170);
	
	var _reactRedux = __webpack_require__(183);
	
	var _reduxSaga = __webpack_require__(192);
	
	var _reduxSaga2 = _interopRequireDefault(_reduxSaga);
	
	var _Options = __webpack_require__(204);
	
	var _Options2 = _interopRequireDefault(_Options);
	
	var _Options3 = __webpack_require__(206);
	
	var _Options4 = _interopRequireDefault(_Options3);
	
	var _optionsSagas = __webpack_require__(345);
	
	var _optionsSagas2 = _interopRequireDefault(_optionsSagas);
	
	__webpack_require__(476);
	
	__webpack_require__(485);
	
	__webpack_require__(487);
	
	var _blockList = __webpack_require__(351);
	
	var _blockList2 = _interopRequireDefault(_blockList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_blockList2.default.init().then(function () {
	  var sagaMiddleware = (0, _reduxSaga2.default)();
	  var store = (0, _redux.createStore)(_Options2.default, (0, _redux.applyMiddleware)(sagaMiddleware));
	  sagaMiddleware.run(_optionsSagas2.default);
	  (0, _reactDom.render)(_react2.default.createElement(
	    _reactRedux.Provider,
	    { store: store },
	    _react2.default.createElement(_Options4.default, null)
	  ), document.getElementById('OptionsApp'));
	});

/***/ },

/***/ 204:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = reducer;
	
	var _update = __webpack_require__(205);
	
	var _update2 = _interopRequireDefault(_update);
	
	var _blockList = __webpack_require__(351);
	
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

/***/ 206:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(207);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(233);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(234);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(238);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(285);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(183);
	
	var _SiteTable = __webpack_require__(293);
	
	var _SiteTable2 = _interopRequireDefault(_SiteTable);
	
	var _InputBar = __webpack_require__(501);
	
	var _InputBar2 = _interopRequireDefault(_InputBar);
	
	var _common = __webpack_require__(344);
	
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
	      return _react2.default.createElement(
	        'div',
	        { id: 'OptionsApp' },
	        _react2.default.createElement(
	          'div',
	          { className: 'container' },
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-md-4' },
	              _react2.default.createElement(_InputBar2.default, { addSite: this.props.addSite })
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-md-6' },
	              _react2.default.createElement(_SiteTable2.default, { sites: this.props.sites, maxEntry: 10 })
	            )
	          )
	        )
	      );
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

/***/ 293:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(207);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(233);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(234);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(238);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(285);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _fixedDataTable = __webpack_require__(294);
	
	__webpack_require__(496);
	
	var _moment = __webpack_require__(369);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var SiteTable = function (_React$Component) {
	  (0, _inherits3.default)(SiteTable, _React$Component);
	
	  function SiteTable(props) {
	    (0, _classCallCheck3.default)(this, SiteTable);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (SiteTable.__proto__ || (0, _getPrototypeOf2.default)(SiteTable)).call(this, props));
	
	    _this.sortSites = _this.sortSites.bind(_this);
	    _this.state = {
	      sites: _this.sortSites(props.sites, 'timeSpent')
	    };
	    return _this;
	  }
	
	  (0, _createClass3.default)(SiteTable, [{
	    key: 'sortSites',
	    value: function sortSites(sites, sortBy) {
	      return sites.sort(function (a, b) {
	        return b[sortBy] - a[sortBy];
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var itemCount = this.state.sites.length < 10 ? this.state.sites.length : 10;
	      var topTen = this.state.sites.slice(0, itemCount);
	      return _react2.default.createElement(
	        _fixedDataTable.Table,
	        {
	          rowsCount: 10,
	          rowHeight: 30,
	          headerHeight: 30,
	          width: 600,
	          height: (itemCount + 1) * 30 + 2
	        },
	        _react2.default.createElement(_fixedDataTable.Column, {
	          header: 'Site',
	          cell: function cell(c) {
	            return _react2.default.createElement(
	              _fixedDataTable.Cell,
	              null,
	              topTen[c.rowIndex].site
	            );
	          },
	          width: 200
	        }),
	        _react2.default.createElement(_fixedDataTable.Column, {
	          columnKey: 'number',
	          header: 'Visits',
	          cell: function cell(c) {
	            return _react2.default.createElement(
	              _fixedDataTable.Cell,
	              null,
	              topTen[c.rowIndex].visits
	            );
	          },
	          width: 200
	        }),
	        _react2.default.createElement(_fixedDataTable.Column, {
	          header: 'Time',
	          cell: function cell(c) {
	            return _react2.default.createElement(
	              _fixedDataTable.Cell,
	              null,
	              (0, _moment2.default)('2015-01-01').startOf('day').seconds(_this2.state.sites[c.rowIndex].timeSpent).format('H:mm:ss')
	            );
	          },
	          width: 200
	        })
	      );
	    }
	  }]);
	  return SiteTable;
	}(_react2.default.Component);
	
	exports.default = SiteTable;

/***/ },

/***/ 294:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(295);


/***/ },

/***/ 295:
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
	
	var FixedDataTable = __webpack_require__(296);
	var FixedDataTableCellDefault = __webpack_require__(333);
	var FixedDataTableColumn = __webpack_require__(331);
	var FixedDataTableColumnGroup = __webpack_require__(330);
	
	var FixedDataTableRoot = {
	  Cell: FixedDataTableCellDefault,
	  Column: FixedDataTableColumn,
	  ColumnGroup: FixedDataTableColumnGroup,
	  Table: FixedDataTable
	};
	
	FixedDataTableRoot.version = '0.6.3';
	module.exports = FixedDataTableRoot;

/***/ },

/***/ 296:
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
	
	var React = __webpack_require__(297);
	
	var ReactChildren = React.Children;
	
	var PropTypes = React.PropTypes;
	
	// New Table API
	var Table = __webpack_require__(298);
	var Column = __webpack_require__(341);
	var ColumnGroup = __webpack_require__(342);
	
	// Transition Cell
	var TransitionCell = __webpack_require__(343);
	
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },

/***/ 297:
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
	
	module.exports = __webpack_require__(1);

/***/ },

/***/ 298:
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
	
	var React = __webpack_require__(297);
	var ReactComponentWithPureRenderMixin = __webpack_require__(299);
	var ReactWheelHandler = __webpack_require__(300);
	var Scrollbar = __webpack_require__(308);
	var FixedDataTableBufferedRows = __webpack_require__(321);
	var FixedDataTableColumnResizeHandle = __webpack_require__(335);
	var FixedDataTableRow = __webpack_require__(326);
	var FixedDataTableScrollHelper = __webpack_require__(336);
	var FixedDataTableWidthHelper = __webpack_require__(338);
	
	var cx = __webpack_require__(315);
	var debounceCore = __webpack_require__(339);
	var emptyFunction = __webpack_require__(301);
	var invariant = __webpack_require__(320);
	var joinClasses = __webpack_require__(334);
	var shallowEqual = __webpack_require__(340);
	var translateDOMPositionXY = __webpack_require__(316);
	
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

/***/ 299:
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

/***/ 300:
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
	
	var emptyFunction = __webpack_require__(301);
	var normalizeWheel = __webpack_require__(302);
	var requestAnimationFramePolyfill = __webpack_require__(306);
	
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

/***/ 301:
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

/***/ 302:
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
	
	var UserAgent_DEPRECATED = __webpack_require__(303);
	
	var isEventSupported = __webpack_require__(304);
	
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

/***/ 303:
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

/***/ 304:
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
	
	var ExecutionEnvironment = __webpack_require__(305);
	
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

/***/ 305:
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

/***/ 306:
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
	
	var emptyFunction = __webpack_require__(301);
	var nativeRequestAnimationFrame = __webpack_require__(307);
	
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

/***/ 307:
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

/***/ 308:
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
	
	var DOMMouseMoveTracker = __webpack_require__(309);
	var Keys = __webpack_require__(312);
	var React = __webpack_require__(297);
	var ReactDOM = __webpack_require__(313);
	var ReactComponentWithPureRenderMixin = __webpack_require__(299);
	var ReactWheelHandler = __webpack_require__(300);
	
	var cssVar = __webpack_require__(314);
	var cx = __webpack_require__(315);
	var emptyFunction = __webpack_require__(301);
	var translateDOMPositionXY = __webpack_require__(316);
	
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

/***/ 309:
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
	
	var EventListener = __webpack_require__(310);
	
	var cancelAnimationFramePolyfill = __webpack_require__(311);
	var requestAnimationFramePolyfill = __webpack_require__(306);
	
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

/***/ 310:
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
	
	var emptyFunction = __webpack_require__(301);
	
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },

/***/ 311:
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

/***/ 312:
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

/***/ 313:
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
	
	module.exports = __webpack_require__(33);

/***/ },

/***/ 314:
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

/***/ 315:
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

/***/ 316:
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
	
	var BrowserSupportCore = __webpack_require__(317);
	
	var getVendorPrefixedName = __webpack_require__(318);
	
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

/***/ 317:
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
	
	var getVendorPrefixedName = __webpack_require__(318);
	
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

/***/ 318:
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
	
	var ExecutionEnvironment = __webpack_require__(305);
	
	var camelize = __webpack_require__(319);
	var invariant = __webpack_require__(320);
	
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

/***/ 319:
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

/***/ 320:
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },

/***/ 321:
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
	
	var React = __webpack_require__(297);
	var FixedDataTableRowBuffer = __webpack_require__(322);
	var FixedDataTableRow = __webpack_require__(326);
	
	var cx = __webpack_require__(315);
	var emptyFunction = __webpack_require__(301);
	var joinClasses = __webpack_require__(334);
	var translateDOMPositionXY = __webpack_require__(316);
	
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

/***/ 322:
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
	
	var IntegerBufferSet = __webpack_require__(323);
	
	var clamp = __webpack_require__(325);
	var invariant = __webpack_require__(320);
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

/***/ 323:
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
	
	var Heap = __webpack_require__(324);
	
	var invariant = __webpack_require__(320);
	
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

/***/ 324:
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

/***/ 325:
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

/***/ 326:
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
	
	var React = __webpack_require__(297);
	var FixedDataTableCellGroup = __webpack_require__(327);
	
	var cx = __webpack_require__(315);
	var joinClasses = __webpack_require__(334);
	var translateDOMPositionXY = __webpack_require__(316);
	
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

/***/ 327:
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
	
	var FixedDataTableHelper = __webpack_require__(328);
	var React = __webpack_require__(297);
	var FixedDataTableCell = __webpack_require__(332);
	
	var cx = __webpack_require__(315);
	var translateDOMPositionXY = __webpack_require__(316);
	
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

/***/ 328:
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
	
	var Locale = __webpack_require__(329);
	var React = __webpack_require__(297);
	var FixedDataTableColumnGroup = __webpack_require__(330);
	var FixedDataTableColumn = __webpack_require__(331);
	
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

/***/ 329:
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

/***/ 330:
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
	
	var React = __webpack_require__(297);
	
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },

/***/ 331:
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
	
	var React = __webpack_require__(297);
	
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },

/***/ 332:
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
	
	var FixedDataTableCellDefault = __webpack_require__(333);
	var FixedDataTableHelper = __webpack_require__(328);
	var React = __webpack_require__(297);
	var cx = __webpack_require__(315);
	var joinClasses = __webpack_require__(334);
	
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

/***/ 333:
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
	
	var React = __webpack_require__(297);
	
	var cx = __webpack_require__(315);
	var joinClasses = __webpack_require__(334);
	
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

/***/ 334:
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

/***/ 335:
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
	
	var DOMMouseMoveTracker = __webpack_require__(309);
	var Locale = __webpack_require__(329);
	var React = __webpack_require__(297);
	var ReactComponentWithPureRenderMixin = __webpack_require__(299);
	
	var clamp = __webpack_require__(325);
	var cx = __webpack_require__(315);
	
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

/***/ 336:
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
	
	var PrefixIntervalTree = __webpack_require__(337);
	var clamp = __webpack_require__(325);
	
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

/***/ 337:
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
	
	var invariant = __webpack_require__(320);
	
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

/***/ 338:
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
	
	var React = __webpack_require__(297);
	
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

/***/ 339:
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

/***/ 340:
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

/***/ 341:
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
	
	var React = __webpack_require__(297);
	
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },

/***/ 342:
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
	
	var React = __webpack_require__(297);
	
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },

/***/ 343:
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
	
	var React = __webpack_require__(297);
	var PropTypes = React.PropTypes;
	
	var cx = __webpack_require__(315);
	var joinClasses = __webpack_require__(334);
	var shallowEqual = __webpack_require__(340);
	
	var CellDefault = __webpack_require__(333);
	
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

/***/ 345:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _regenerator = __webpack_require__(346);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	exports.default = optionsSaga;
	
	var _effects = __webpack_require__(349);
	
	var _sagasDB = __webpack_require__(350);
	
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

/***/ },

/***/ 496:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(497);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(484)(content, {});
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

/***/ 497:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(478)();
	// imports
	
	
	// module
	exports.push([module.id, "/**\n * FixedDataTable v0.6.3 \n *\n * Copyright (c) 2015, Facebook, Inc.\n * All rights reserved.\n *\n * This source code is licensed under the BSD-style license found in the\n * LICENSE file in the root directory of this source tree. An additional grant\n * of patent rights can be found in the PATENTS file in the same directory.\n */\n\n/**\n * Copyright (c) 2015, Facebook, Inc.\n * All rights reserved.\n *\n * This source code is licensed under the BSD-style license found in the\n * LICENSE file in the root directory of this source tree. An additional grant\n * of patent rights can be found in the PATENTS file in the same directory.\n *\n * @providesModule fixedDataTableCellGroupLayout\n */\n\n.fixedDataTableCellGroupLayout_cellGroup {\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  left: 0;\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  white-space: nowrap;\n}\n\n.fixedDataTableCellGroupLayout_cellGroup > .public_fixedDataTableCell_main {\n  display: inline-block;\n  vertical-align: top;\n  white-space: normal;\n}\n\n.fixedDataTableCellGroupLayout_cellGroupWrapper {\n  position: absolute;\n  top: 0;\n}\n/**\n * Copyright (c) 2015, Facebook, Inc.\n * All rights reserved.\n *\n * This source code is licensed under the BSD-style license found in the\n * LICENSE file in the root directory of this source tree. An additional grant\n * of patent rights can be found in the PATENTS file in the same directory.\n *\n * @providesModule fixedDataTableCellLayout\n */\n\n.fixedDataTableCellLayout_main {\n  border-right-style: solid;\n  border-right-width: 1px;\n  border-width: 0 1px 0 0;\n  box-sizing: border-box;\n  display: block;\n  overflow: hidden;\n  position: absolute;\n  white-space: normal;\n}\n\n.fixedDataTableCellLayout_lastChild {\n  border-width: 0 1px 1px 0;\n}\n\n.fixedDataTableCellLayout_alignRight {\n  text-align: right;\n}\n\n.fixedDataTableCellLayout_alignCenter {\n  text-align: center;\n}\n\n.fixedDataTableCellLayout_wrap1 {\n  display: table;\n}\n\n.fixedDataTableCellLayout_wrap2 {\n  display: table-row;\n}\n\n.fixedDataTableCellLayout_wrap3 {\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.fixedDataTableCellLayout_columnResizerContainer {\n  position: absolute;\n  right: 0px;\n  width: 6px;\n  z-index: 1;\n}\n\n.fixedDataTableCellLayout_columnResizerContainer:hover {\n  cursor: ew-resize;\n}\n\n.fixedDataTableCellLayout_columnResizerContainer:hover .fixedDataTableCellLayout_columnResizerKnob {\n  visibility: visible;\n}\n\n.fixedDataTableCellLayout_columnResizerKnob {\n  position: absolute;\n  right: 0px;\n  visibility: hidden;\n  width: 4px;\n}\n/**\n * Copyright (c) 2015, Facebook, Inc.\n * All rights reserved.\n *\n * This source code is licensed under the BSD-style license found in the\n * LICENSE file in the root directory of this source tree. An additional grant\n * of patent rights can be found in the PATENTS file in the same directory.\n *\n * @providesModule fixedDataTableColumnResizerLineLayout\n */\n\n.fixedDataTableColumnResizerLineLayout_mouseArea {\n  cursor: ew-resize;\n  position: absolute;\n  right: -5px;\n  width: 12px;\n}\n\n.fixedDataTableColumnResizerLineLayout_main {\n  border-right-style: solid;\n  border-right-width: 1px;\n  box-sizing: border-box;\n  position: absolute;\n  z-index: 10;\n}\n\nbody[dir=\"rtl\"] .fixedDataTableColumnResizerLineLayout_main {\n  /* the resizer line is in the wrong position in RTL with no easy fix.\n   * Disabling is more useful than displaying it.\n   * #167 (github) should look into this and come up with a permanent fix.\n   */\n  display: none !important;\n}\n\n.fixedDataTableColumnResizerLineLayout_hiddenElem {\n  display: none !important;\n}\n/**\n * Copyright (c) 2015, Facebook, Inc.\n * All rights reserved.\n *\n * This source code is licensed under the BSD-style license found in the\n * LICENSE file in the root directory of this source tree. An additional grant\n * of patent rights can be found in the PATENTS file in the same directory.\n *\n * @providesModule fixedDataTableLayout\n */\n\n.fixedDataTableLayout_main {\n  border-style: solid;\n  border-width: 1px;\n  box-sizing: border-box;\n  overflow: hidden;\n  position: relative;\n}\n\n.fixedDataTableLayout_header,\n.fixedDataTableLayout_hasBottomBorder {\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n}\n\n.fixedDataTableLayout_footer .public_fixedDataTableCell_main {\n  border-top-style: solid;\n  border-top-width: 1px;\n}\n\n.fixedDataTableLayout_topShadow,\n.fixedDataTableLayout_bottomShadow {\n  height: 4px;\n  left: 0;\n  position: absolute;\n  right: 0;\n  z-index: 1;\n}\n\n.fixedDataTableLayout_bottomShadow {\n  margin-top: -4px;\n}\n\n.fixedDataTableLayout_rowsContainer {\n  overflow: hidden;\n  position: relative;\n}\n\n.fixedDataTableLayout_horizontalScrollbar {\n  bottom: 0;\n  position: absolute;\n}\n/**\n * Copyright (c) 2015, Facebook, Inc.\n * All rights reserved.\n *\n * This source code is licensed under the BSD-style license found in the\n * LICENSE file in the root directory of this source tree. An additional grant\n * of patent rights can be found in the PATENTS file in the same directory.\n *\n * @providesModule fixedDataTableRowLayout\n */\n\n.fixedDataTableRowLayout_main {\n  box-sizing: border-box;\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n}\n\n.fixedDataTableRowLayout_body {\n  left: 0;\n  position: absolute;\n  top: 0;\n}\n\n.fixedDataTableRowLayout_fixedColumnsDivider {\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  border-left-style: solid;\n  border-left-width: 1px;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 0;\n}\n\n.fixedDataTableRowLayout_columnsShadow {\n  width: 4px;\n}\n\n.fixedDataTableRowLayout_rowWrapper {\n  position: absolute;\n  top: 0;\n}\n/**\n * Copyright (c) 2015, Facebook, Inc.\n * All rights reserved.\n *\n * This source code is licensed under the BSD-style license found in the\n * LICENSE file in the root directory of this source tree. An additional grant\n * of patent rights can be found in the PATENTS file in the same directory.\n *\n * @providesModule ScrollbarLayout\n */\n\n.ScrollbarLayout_main {\n  box-sizing: border-box;\n  outline: none;\n  overflow: hidden;\n  position: absolute;\n  -webkit-transition-duration: 250ms;\n          transition-duration: 250ms;\n  -webkit-transition-timing-function: ease;\n          transition-timing-function: ease;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.ScrollbarLayout_mainVertical {\n  bottom: 0;\n  right: 0;\n  top: 0;\n  -webkit-transition-property: background-color width;\n          transition-property: background-color width;\n  width: 15px;\n}\n\n.ScrollbarLayout_mainVertical.public_Scrollbar_mainActive,\n.ScrollbarLayout_mainVertical:hover {\n  width: 17px;\n}\n\n.ScrollbarLayout_mainHorizontal {\n  bottom: 0;\n  height: 15px;\n  left: 0;\n  -webkit-transition-property: background-color height;\n          transition-property: background-color height;\n}\n\n/* Touching the scroll-track directly makes the scroll-track bolder */\n.ScrollbarLayout_mainHorizontal.public_Scrollbar_mainActive,\n.ScrollbarLayout_mainHorizontal:hover {\n  height: 17px;\n}\n\n.ScrollbarLayout_face {\n  left: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: 1;\n}\n\n/**\n * This selector renders the \"nub\" of the scrollface. The nub must\n * be rendered as pseudo-element so that it won't receive any UI events then\n * we can get the correct `event.offsetX` and `event.offsetY` from the\n * scrollface element while dragging it.\n */\n.ScrollbarLayout_face:after {\n  border-radius: 6px;\n  content: '';\n  display: block;\n  position: absolute;\n  -webkit-transition: background-color 250ms ease;\n          transition: background-color 250ms ease;\n}\n\n.ScrollbarLayout_faceHorizontal {\n  bottom: 0;\n  left: 0;\n  top: 0;\n}\n\n.ScrollbarLayout_faceHorizontal:after {\n  bottom: 4px;\n  left: 0;\n  top: 4px;\n  width: 100%;\n}\n\n.ScrollbarLayout_faceVertical {\n  left: 0;\n  right: 0;\n  top: 0;\n}\n\n.ScrollbarLayout_faceVertical:after {\n  height: 100%;\n  left: 4px;\n  right: 4px;\n  top: 0;\n}\n/**\n * Copyright (c) 2015, Facebook, Inc.\n * All rights reserved.\n *\n * This source code is licensed under the BSD-style license found in the\n * LICENSE file in the root directory of this source tree. An additional grant\n * of patent rights can be found in the PATENTS file in the same directory.\n *\n * @providesModule fixedDataTable\n *\n */\n\n/**\n * Table.\n */\n.public_fixedDataTable_main {\n  border-color: #d3d3d3;\n}\n\n.public_fixedDataTable_header,\n.public_fixedDataTable_hasBottomBorder {\n  border-color: #d3d3d3;\n}\n\n.public_fixedDataTable_header .public_fixedDataTableCell_main {\n  font-weight: bold;\n}\n\n.public_fixedDataTable_header,\n.public_fixedDataTable_header .public_fixedDataTableCell_main {\n  background-color: #f6f7f8;\n  background-image: -webkit-linear-gradient(#fff, #efefef);\n  background-image: linear-gradient(#fff, #efefef);\n}\n\n.public_fixedDataTable_footer .public_fixedDataTableCell_main {\n  background-color: #f6f7f8;\n  border-color: #d3d3d3;\n}\n\n.public_fixedDataTable_topShadow {\n  background: 0 0 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAECAYAAABP2FU6AAAAF0lEQVR4AWPUkNeSBhHCjJoK2twgFisAFagCCp3pJlAAAAAASUVORK5CYII=) repeat-x;\n}\n\n.public_fixedDataTable_bottomShadow {\n  background: 0 0 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAECAYAAABP2FU6AAAAHElEQVQI12MwNjZmZdAT1+Nm0JDWEGZQk1GTBgAWkwIeAEp52AAAAABJRU5ErkJggg==) repeat-x;\n}\n\n.public_fixedDataTable_horizontalScrollbar .public_Scrollbar_mainHorizontal {\n  background-color: #fff;\n}\n/**\n * Copyright (c) 2015, Facebook, Inc.\n * All rights reserved.\n *\n * This source code is licensed under the BSD-style license found in the\n * LICENSE file in the root directory of this source tree. An additional grant\n * of patent rights can be found in the PATENTS file in the same directory.\n *\n * @providesModule fixedDataTableCell\n */\n\n/**\n * Table cell.\n */\n.public_fixedDataTableCell_main {\n  background-color: #fff;\n  border-color: #d3d3d3;\n}\n\n.public_fixedDataTableCell_highlighted {\n  background-color: #f4f4f4;\n}\n\n.public_fixedDataTableCell_cellContent {\n  padding: 8px;\n}\n\n.public_fixedDataTableCell_columnResizerKnob {\n  background-color: #0284ff;\n}\n/**\n * Copyright (c) 2015, Facebook, Inc.\n * All rights reserved.\n *\n * This source code is licensed under the BSD-style license found in the\n * LICENSE file in the root directory of this source tree. An additional grant\n * of patent rights can be found in the PATENTS file in the same directory.\n *\n * @providesModule fixedDataTableColumnResizerLine\n *\n */\n\n/**\n * Column resizer line.\n */\n.public_fixedDataTableColumnResizerLine_main {\n  border-color: #0284ff;\n}\n/**\n * Copyright (c) 2015, Facebook, Inc.\n * All rights reserved.\n *\n * This source code is licensed under the BSD-style license found in the\n * LICENSE file in the root directory of this source tree. An additional grant\n * of patent rights can be found in the PATENTS file in the same directory.\n *\n * @providesModule fixedDataTableRow\n */\n\n/**\n * Table row.\n */\n.public_fixedDataTableRow_main {\n  background-color: #fff;\n}\n\n.public_fixedDataTableRow_highlighted,\n.public_fixedDataTableRow_highlighted .public_fixedDataTableCell_main {\n  background-color: #f6f7f8;\n}\n\n.public_fixedDataTableRow_fixedColumnsDivider {\n  border-color: #d3d3d3;\n}\n\n.public_fixedDataTableRow_columnsShadow {\n  background: 0 0 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQIHWPSkNeSBmJhTQVtbiDNCgASagIIuJX8OgAAAABJRU5ErkJggg==) repeat-y;\n}\n/**\n * Copyright (c) 2015, Facebook, Inc.\n * All rights reserved.\n *\n * This source code is licensed under the BSD-style license found in the\n * LICENSE file in the root directory of this source tree. An additional grant\n * of patent rights can be found in the PATENTS file in the same directory.\n *\n * @providesModule Scrollbar\n *\n */\n\n/**\n * Scrollbars.\n */\n\n/* Touching the scroll-track directly makes the scroll-track bolder */\n.public_Scrollbar_main.public_Scrollbar_mainActive,\n.public_Scrollbar_main:hover {\n  background-color: rgba(255, 255, 255, 0.8);\n}\n\n.public_Scrollbar_mainOpaque,\n.public_Scrollbar_mainOpaque.public_Scrollbar_mainActive,\n.public_Scrollbar_mainOpaque:hover {\n  background-color: #fff;\n}\n\n.public_Scrollbar_face:after {\n  background-color: #c2c2c2;\n}\n\n.public_Scrollbar_main:hover .public_Scrollbar_face:after,\n.public_Scrollbar_mainActive .public_Scrollbar_face:after,\n.public_Scrollbar_faceActive:after {\n  background-color: #7d7d7d;\n}\n", ""]);
	
	// exports


/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvT3B0aW9uc0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvT3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9PcHRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NpdGVUYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2ZpeGVkLWRhdGEtdGFibGUvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvRml4ZWREYXRhVGFibGVSb290LmpzIiwid2VicGFjazovLy8uL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9GaXhlZERhdGFUYWJsZS5yZWFjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvUmVhY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL0ZpeGVkRGF0YVRhYmxlTmV3LnJlYWN0LmpzIiwid2VicGFjazovLy8uL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9SZWFjdENvbXBvbmVudFdpdGhQdXJlUmVuZGVyTWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL1JlYWN0V2hlZWxIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9lbXB0eUZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9ub3JtYWxpemVXaGVlbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvVXNlckFnZW50X0RFUFJFQ0FURUQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL2lzRXZlbnRTdXBwb3J0ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL0V4ZWN1dGlvbkVudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9yZXF1ZXN0QW5pbWF0aW9uRnJhbWVQb2x5ZmlsbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvbmF0aXZlUmVxdWVzdEFuaW1hdGlvbkZyYW1lLmpzIiwid2VicGFjazovLy8uL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9TY3JvbGxiYXIucmVhY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL0RPTU1vdXNlTW92ZVRyYWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL0V2ZW50TGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL2NhbmNlbEFuaW1hdGlvbkZyYW1lUG9seWZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL0tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL1JlYWN0RE9NLmpzIiwid2VicGFjazovLy8uL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9jc3NWYXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL2N4LmpzIiwid2VicGFjazovLy8uL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC90cmFuc2xhdGVET01Qb3NpdGlvblhZLmpzIiwid2VicGFjazovLy8uL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9Ccm93c2VyU3VwcG9ydENvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL2dldFZlbmRvclByZWZpeGVkTmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvY2FtZWxpemUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL2ludmFyaWFudC5qcyIsIndlYnBhY2s6Ly8vLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvRml4ZWREYXRhVGFibGVCdWZmZXJlZFJvd3MucmVhY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL0ZpeGVkRGF0YVRhYmxlUm93QnVmZmVyLmpzIiwid2VicGFjazovLy8uL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9JbnRlZ2VyQnVmZmVyU2V0LmpzIiwid2VicGFjazovLy8uL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9IZWFwLmpzIiwid2VicGFjazovLy8uL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9jbGFtcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvRml4ZWREYXRhVGFibGVSb3cucmVhY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL0ZpeGVkRGF0YVRhYmxlQ2VsbEdyb3VwLnJlYWN0LmpzIiwid2VicGFjazovLy8uL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9GaXhlZERhdGFUYWJsZUhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvTG9jYWxlLmpzIiwid2VicGFjazovLy8uL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9GaXhlZERhdGFUYWJsZUNvbHVtbkdyb3VwLnJlYWN0LmpzIiwid2VicGFjazovLy8uL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9GaXhlZERhdGFUYWJsZUNvbHVtbi5yZWFjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvRml4ZWREYXRhVGFibGVDZWxsLnJlYWN0LmpzIiwid2VicGFjazovLy8uL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9GaXhlZERhdGFUYWJsZUNlbGxEZWZhdWx0LnJlYWN0LmpzIiwid2VicGFjazovLy8uL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9qb2luQ2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvRml4ZWREYXRhVGFibGVDb2x1bW5SZXNpemVIYW5kbGUucmVhY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL0ZpeGVkRGF0YVRhYmxlU2Nyb2xsSGVscGVyLmpzIiwid2VicGFjazovLy8uL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9QcmVmaXhJbnRlcnZhbFRyZWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL0ZpeGVkRGF0YVRhYmxlV2lkdGhIZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL2RlYm91bmNlQ29yZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvc2hhbGxvd0VxdWFsLmpzIiwid2VicGFjazovLy8uL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9GaXhlZERhdGFUYWJsZUNvbHVtbk5ldy5yZWFjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvRml4ZWREYXRhVGFibGVDb2x1bW5Hcm91cE5ldy5yZWFjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvRml4ZWREYXRhVGFibGVDZWxsVHJhbnNpdGlvbi5yZWFjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2FnYXMvb3B0aW9uc1NhZ2FzLmpzIiwid2VicGFjazovLy8uL34vZml4ZWQtZGF0YS10YWJsZS9kaXN0L2ZpeGVkLWRhdGEtdGFibGUuY3NzPzAxZjciLCJ3ZWJwYWNrOi8vLy4vfi9maXhlZC1kYXRhLXRhYmxlL2Rpc3QvZml4ZWQtZGF0YS10YWJsZS5jc3MiXSwibmFtZXMiOlsiaW5pdCIsInRoZW4iLCJzYWdhTWlkZGxld2FyZSIsInN0b3JlIiwicnVuIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlZHVjZXIiLCJzdGF0ZSIsInNpdGVzIiwiZmV0Y2hUb2RheVN0YXRzIiwibWVzc2FnZSIsImFjdGlvbiIsInR5cGUiLCIkc2V0IiwiZSIsIk9wdGlvbnNBcHAiLCJwcm9wcyIsImFkZFNpdGUiLCJDb21wb25lbnQiLCJkaXNwYXRjaCIsInNpdGUiLCJmZXRjaFNpdGVzIiwiU2l0ZVRhYmxlIiwic29ydFNpdGVzIiwiYmluZCIsInNvcnRCeSIsInNvcnQiLCJhIiwiYiIsIml0ZW1Db3VudCIsImxlbmd0aCIsInRvcFRlbiIsInNsaWNlIiwiYyIsInJvd0luZGV4IiwidmlzaXRzIiwic3RhcnRPZiIsInNlY29uZHMiLCJ0aW1lU3BlbnQiLCJmb3JtYXQiLCJvcHRpb25zU2FnYSIsInNhZ2FzIiwiZmV0Y2hTaXRlc1NhZ2EiLCJjb25zb2xlIiwibG9nIiwiYWRkU2l0ZVNhZ2EiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUdBLHFCQUFHQSxJQUFILEdBQVVDLElBQVYsQ0FBZSxZQUFNO0FBQ25CLE9BQU1DLGlCQUFpQiwwQkFBdkI7QUFDQSxPQUFNQyxRQUFRLDJDQUFxQiw0QkFBZ0JELGNBQWhCLENBQXJCLENBQWQ7QUFDQUEsa0JBQWVFLEdBQWY7QUFDQSx5QkFDRTtBQUFBO0FBQUEsT0FBVSxPQUFPRCxLQUFqQjtBQUNFO0FBREYsSUFERixFQUlFRSxTQUFTQyxjQUFULENBQXdCLFlBQXhCLENBSkY7QUFNRCxFQVZELEU7Ozs7Ozs7Ozs7OzttQkNYd0JDLE87O0FBSHhCOzs7O0FBQ0E7Ozs7OztBQUVlLFVBQVNBLE9BQVQsR0FBK0U7QUFBQSxPQUE5REMsS0FBOEQseURBQXRELEVBQUVDLE9BQU8sb0JBQUdDLGVBQUgsRUFBVCxFQUErQkMsU0FBUyxFQUF4QyxFQUFzRDtBQUFBLE9BQVJDLE1BQVE7O0FBQzVGLFdBQVFBLE9BQU9DLElBQWY7QUFDRSxVQUFLLG9CQUFMO0FBQ0UsY0FBTyxzQkFBT0wsS0FBUCxFQUFjO0FBQ25CRyxrQkFBUyxFQUFFRyxNQUFNRixPQUFPRCxPQUFmO0FBRFUsUUFBZCxDQUFQO0FBR0YsVUFBSyxpQkFBTDtBQUNFLGNBQU8sc0JBQU9ILEtBQVAsRUFBYztBQUNuQkcsa0JBQVMsRUFBRUcsTUFBTUYsT0FBT0csQ0FBZjtBQURVLFFBQWQsQ0FBUDtBQUdGLFVBQUsseUJBQUw7QUFDRSxjQUFPLHNCQUFPUCxLQUFQLEVBQWM7QUFDbkJHLGtCQUFTLEVBQUVHLE1BQU1GLE9BQU9HLENBQWY7QUFEVSxRQUFkLENBQVA7QUFHRixVQUFLLHVCQUFMO0FBQ0UsY0FBTyxzQkFBT1AsS0FBUCxFQUFjO0FBQ25CQyxnQkFBTyxFQUFFSyxNQUFNRixPQUFPSCxLQUFmO0FBRFksUUFBZCxDQUFQO0FBR0Y7QUFDRSxjQUFPRCxLQUFQO0FBbEJKO0FBb0JELEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCRDs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztLQUVNUSxVOzs7QUFDSix1QkFBWUMsS0FBWixFQUFtQjtBQUFBO0FBQUEsMElBQ1hBLEtBRFc7QUFFbEI7Ozs7MENBQ29CLENBQ3BCOzs7OEJBRVE7QUFDUCxjQUNFO0FBQUE7QUFBQSxXQUFLLElBQUcsWUFBUjtBQUNFO0FBQUE7QUFBQSxhQUFLLFdBQVUsV0FBZjtBQUNFO0FBQUE7QUFBQSxlQUFLLFdBQVUsS0FBZjtBQUNFO0FBQUE7QUFBQSxpQkFBSyxXQUFVLFVBQWY7QUFDRSxtRUFBVSxTQUFTLEtBQUtBLEtBQUwsQ0FBV0MsT0FBOUI7QUFERixjQURGO0FBSUU7QUFBQTtBQUFBLGlCQUFLLFdBQVUsVUFBZjtBQUNFLG9FQUFXLE9BQU8sS0FBS0QsS0FBTCxDQUFXUixLQUE3QixFQUFvQyxVQUFVLEVBQTlDO0FBREY7QUFKRjtBQURGO0FBREYsUUFERjtBQWNEOzs7R0F0QnNCLGdCQUFNVSxTOzttQkF5QmhCLHlCQUNiO0FBQUEsVUFDRTtBQUNFVixZQUFPRCxNQUFNQyxLQURmO0FBRUVFLGNBQVNILE1BQU1HO0FBRmpCLElBREY7QUFBQSxFQURhLEVBT2I7QUFBQSxVQUNFO0FBQ0VPLGNBQVM7QUFBQSxjQUFRRSxTQUFTLHFCQUFRQyxJQUFSLENBQVQsQ0FBUjtBQUFBLE1BRFg7QUFFRUMsaUJBQVk7QUFBQSxjQUFNRixTQUFTLHlCQUFULENBQU47QUFBQTtBQUZkLElBREY7QUFBQSxFQVBhLEVBYWJKLFVBYmEsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaENmOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztLQUVxQk8sUzs7O0FBQ25CLHNCQUFZTixLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNklBQ1hBLEtBRFc7O0FBRWpCLFdBQUtPLFNBQUwsR0FBaUIsTUFBS0EsU0FBTCxDQUFlQyxJQUFmLE9BQWpCO0FBQ0EsV0FBS2pCLEtBQUwsR0FBYTtBQUNYQyxjQUFPLE1BQUtlLFNBQUwsQ0FBZVAsTUFBTVIsS0FBckIsRUFBNEIsV0FBNUI7QUFESSxNQUFiO0FBSGlCO0FBTWxCOzs7OytCQUNTQSxLLEVBQU9pQixNLEVBQVE7QUFDdkIsY0FBT2pCLE1BQU1rQixJQUFOLENBQVcsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsZ0JBQVVBLEVBQUVILE1BQUYsSUFBWUUsRUFBRUYsTUFBRixDQUF0QjtBQUFBLFFBQVgsQ0FBUDtBQUNEOzs7OEJBQ1E7QUFBQTs7QUFDUCxXQUFNSSxZQUFhLEtBQUt0QixLQUFMLENBQVdDLEtBQVgsQ0FBaUJzQixNQUFqQixHQUEwQixFQUEzQixHQUFpQyxLQUFLdkIsS0FBTCxDQUFXQyxLQUFYLENBQWlCc0IsTUFBbEQsR0FBMkQsRUFBN0U7QUFDQSxXQUFNQyxTQUFTLEtBQUt4QixLQUFMLENBQVdDLEtBQVgsQ0FBaUJ3QixLQUFqQixDQUF1QixDQUF2QixFQUEwQkgsU0FBMUIsQ0FBZjtBQUNBLGNBQ0U7QUFBQTtBQUFBO0FBQ0Usc0JBQVcsRUFEYjtBQUVFLHNCQUFXLEVBRmI7QUFHRSx5QkFBYyxFQUhoQjtBQUlFLGtCQUFPLEdBSlQ7QUFLRSxtQkFBUSxDQUFDQSxZQUFZLENBQWIsSUFBa0IsRUFBbEIsR0FBdUI7QUFMakM7QUFPRTtBQUNFLG1CQUFPLE1BRFQ7QUFFRSxpQkFBTTtBQUFBLG9CQUNKO0FBQUE7QUFBQTtBQUNHRSxzQkFBT0UsRUFBRUMsUUFBVCxFQUFtQmQ7QUFEdEIsY0FESTtBQUFBLFlBRlI7QUFPRSxrQkFBTztBQVBULFdBUEY7QUFnQkU7QUFDRSxzQkFBVSxRQURaO0FBRUUsbUJBQU8sUUFGVDtBQUdFLGlCQUFNO0FBQUEsb0JBQ0o7QUFBQTtBQUFBO0FBQ0dXLHNCQUFPRSxFQUFFQyxRQUFULEVBQW1CQztBQUR0QixjQURJO0FBQUEsWUFIUjtBQVFFLGtCQUFPO0FBUlQsV0FoQkY7QUEwQkU7QUFDRSxtQkFBTyxNQURUO0FBRUUsaUJBQU07QUFBQSxvQkFDSjtBQUFBO0FBQUE7QUFDRyxxQ0FBTyxZQUFQLEVBQXFCQyxPQUFyQixDQUE2QixLQUE3QixFQUNFQyxPQURGLENBQ1UsT0FBSzlCLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQnlCLEVBQUVDLFFBQW5CLEVBQTZCSSxTQUR2QyxFQUVFQyxNQUZGLENBRVMsU0FGVDtBQURILGNBREk7QUFBQSxZQUZSO0FBU0Usa0JBQU87QUFUVDtBQTFCRixRQURGO0FBd0NEOzs7R0F0RG9DLGdCQUFNckIsUzs7bUJBQXhCSSxTOzs7Ozs7O0FDTHJCOzs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFDOzs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG9EQUFtRCxnQkFBZ0Isc0JBQXNCLE9BQU8sMkJBQTJCLDBCQUEwQix5REFBeUQsMkJBQTJCLEVBQUUsRUFBRSxFQUFFLGVBQWU7O0FBRTlQOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVCxRQUFPO0FBQ1A7QUFDQSxJQUFHOztBQUVIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVMsR0FBRztBQUNaO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSztBQUNMLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVELGtDOzs7Ozs7OztBQ3RnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEseUM7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsb0RBQW1ELGdCQUFnQixzQkFBc0IsT0FBTywyQkFBMkIsMEJBQTBCLHlEQUF5RCwyQkFBMkIsRUFBRSxFQUFFLEVBQUUsZUFBZTs7QUFFOVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCO0FBQ2hCLFFBQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0I7QUFDaEIsUUFBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0IsMkNBQTJDLEVBQUU7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBa0Isa0RBQWtELEVBQUU7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBSztBQUNMLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBdUIsMkJBQTJCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CLHdDQUF3QztBQUMzRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxvQkFBbUIsMkJBQTJCO0FBQzlDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0Esb0JBQW1CLG9CQUFvQjtBQUN2QztBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CLG9CQUFvQjtBQUN2QztBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1QsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCLGVBQWU7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQW9DO0FBQ3BDO0FBQ0E7QUFDQSxVQUFTLDZCQUE2QjtBQUN0QyxtREFBa0Q7QUFDbEQ7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBLGE7Ozs7Ozs7QUN2OEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBZ0MscUJBQXFCO0FBQ3JEO0FBQ0EsT0FBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0Q7Ozs7Ozs7QUN0RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxrQ0FBaUMsMkNBQTJDLGdCQUFnQixrQkFBa0IsT0FBTywyQkFBMkIsd0RBQXdELGdDQUFnQyx1REFBdUQsMkRBQTJELEVBQUUsRUFBRSx5REFBeUQscUVBQXFFLDZEQUE2RCxvQkFBb0IsR0FBRyxFQUFFOztBQUVsakIsa0RBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdko7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQSxFQUFDOztBQUVELG9DOzs7Ozs7O0FDeEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0M7Ozs7Ozs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDOzs7Ozs7O0FDbk1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF1QjtBQUN2Qjs7QUFFQTtBQUNBLGlCQUFnQjtBQUNoQiw4QkFBNkI7QUFDN0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0EsNEVBQTJFO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVDOzs7Ozs7O0FDclJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE9BQU87QUFDbEIsWUFBVyxTQUFTO0FBQ3BCLGFBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2Q0FBNEM7QUFDNUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG1DOzs7Ozs7O0FDM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHVDOzs7Ozs7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQSx3Qzs7Ozs7Ozs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsOEM7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLG9CQUFtQixvQkFBb0I7QUFDdkMsSUFBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsSUFBRzs7QUFF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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7OztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSwwQzs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEseUI7Ozs7Ozs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxJQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHFCOzs7Ozs7O0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNB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QTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQsd0M7Ozs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRCxtQzs7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSwrQ0FBOEMsaUJBQWlCLHFCQUFxQixvQ0FBb0MsNkRBQTZELG9CQUFvQixFQUFFLGVBQWU7O0FBRTFOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF1RDtBQUN2RDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFPLHFDQUFxQztBQUM1QztBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQscUM7Ozs7Ozs7QUN6S0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxvREFBbUQsZ0JBQWdCLHNCQUFzQixPQUFPLDJCQUEyQiwwQkFBMEIseURBQXlELDJCQUEyQixFQUFFLEVBQUUsRUFBRSxlQUFlOztBQUU5UCwrQ0FBOEMsaUJBQWlCLHFCQUFxQixvQ0FBb0MsNkRBQTZELG9CQUFvQixFQUFFLGVBQWU7O0FBRTFOOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhLEVBQUUsd0JBQXdCO0FBQ3ZDO0FBQ0EsbUJBQWtCO0FBQ2xCLG9CQUFtQjtBQUNuQjtBQUNBLGdDQUErQixTQUFTO0FBQ3hDO0FBQ0E7QUFDQSxlQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBLDRCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSxnSEFBK0c7QUFDL0c7QUFDQTtBQUNBO0FBQ0Esa0hBQWlIO0FBQ2pIO0FBQ0E7QUFDQSxjQUFhLHlEQUF5RDtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0EsMkM7Ozs7Ozs7QUNqSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsV0FBVztBQUN0QixhQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFvQixnQkFBZ0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4Qjs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVCx1QkFBc0I7QUFDdEI7QUFDQTtBQUNBLGlCQUFnQjtBQUNoQixRQUFPO0FBQ1A7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVELG1EOzs7Ozs7O0FDL0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsa0NBQWlDLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVELDJEQUEyRCxFQUFFLEVBQUUseURBQXlELHFFQUFxRSw2REFBNkQsb0JBQW9CLEdBQUcsRUFBRTs7QUFFbGpCLGtEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFtQixjQUFjO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtB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OztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwrQjs7Ozs7OztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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LDRaQUE0WiwyQkFBMkIsR0FBRyxtSEFBbUgsOEJBQThCLEdBQUcsbURBQW1ELDBCQUEwQixHQUFHLDZDQUE2Qyx1Q0FBdUMsOEhBQThILEdBQUcsc2hCQUFzaEIsK0NBQStDLEdBQUcsa0lBQWtJLDJCQUEyQixHQUFHLGtDQUFrQyw4QkFBOEIsR0FBRyxnS0FBZ0ssOEJBQThCLEdBQUc7O0FBRS9sWiIsImZpbGUiOiJPcHRpb25zQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSAncmVkdXgtc2FnYSc7XG5pbXBvcnQgcmVkdWNlciBmcm9tICcuL3JlZHVjZXJzL09wdGlvbnMuanMnO1xuaW1wb3J0IE9wdGlvbnNBcHAgZnJvbSAnLi9jb250YWluZXJzL09wdGlvbnMuanMnO1xuaW1wb3J0IG9wdGlvbnNTYWdhcyBmcm9tICcuL3NhZ2FzL29wdGlvbnNTYWdhcy5qcyc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XG5pbXBvcnQgJ2pxdWVyeS9qcXVlcnkubWluLmpzJztcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvanMvYm9vdHN0cmFwLm1pbi5qcyc7XG5pbXBvcnQgQkwgZnJvbSAnLi9ibG9ja0xpc3QuanMnO1xuXG5cbkJMLmluaXQoKS50aGVuKCgpID0+IHtcbiAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGFwcGx5TWlkZGxld2FyZShzYWdhTWlkZGxld2FyZSkpO1xuICBzYWdhTWlkZGxld2FyZS5ydW4ob3B0aW9uc1NhZ2FzKTtcbiAgcmVuZGVyKFxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgPE9wdGlvbnNBcHAgLz5cbiAgICA8L1Byb3ZpZGVyPixcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnT3B0aW9uc0FwcCcpXG4gICk7XG59KTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL09wdGlvbnNBcHAuanNcbiAqKi8iLCJpbXBvcnQgdXBkYXRlIGZyb20gJ3JlYWN0L2xpYi91cGRhdGUnO1xuaW1wb3J0IEJMIGZyb20gJy4uL2Jsb2NrTGlzdC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSB7IHNpdGVzOiBCTC5mZXRjaFRvZGF5U3RhdHMoKSwgbWVzc2FnZTogJycgfSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdBRERfU0lURV9TVUNDRUVERUQnOlxuICAgICAgcmV0dXJuIHVwZGF0ZShzdGF0ZSwge1xuICAgICAgICBtZXNzYWdlOiB7ICRzZXQ6IGFjdGlvbi5tZXNzYWdlIH1cbiAgICAgIH0pO1xuICAgIGNhc2UgJ0FERF9TSVRFX0ZBSUxFRCc6XG4gICAgICByZXR1cm4gdXBkYXRlKHN0YXRlLCB7XG4gICAgICAgIG1lc3NhZ2U6IHsgJHNldDogYWN0aW9uLmUgfVxuICAgICAgfSk7XG4gICAgY2FzZSAnU0lURV9GRVRDSF9VTlNVQ0NFU1NGVUwnOlxuICAgICAgcmV0dXJuIHVwZGF0ZShzdGF0ZSwge1xuICAgICAgICBtZXNzYWdlOiB7ICRzZXQ6IGFjdGlvbi5lIH1cbiAgICAgIH0pO1xuICAgIGNhc2UgJ1NJVEVfRkVUQ0hfU1VDQ0VTU0ZVTCc6XG4gICAgICByZXR1cm4gdXBkYXRlKHN0YXRlLCB7XG4gICAgICAgIHNpdGVzOiB7ICRzZXQ6IGFjdGlvbi5zaXRlcyB9XG4gICAgICB9KTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yZWR1Y2Vycy9PcHRpb25zLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgU2l0ZVRhYmxlIGZyb20gJy4uL2NvbXBvbmVudHMvU2l0ZVRhYmxlLmpzJztcbmltcG9ydCBJbnB1dEJhciBmcm9tICcuLi9jb21wb25lbnRzL0lucHV0QmFyLmpzJztcblxuaW1wb3J0IHsgYWRkU2l0ZSwgZmV0Y2hTaXRlcyB9IGZyb20gJy4uL2FjdGlvbnMvY29tbW9uLmpzJztcblxuY2xhc3MgT3B0aW9uc0FwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBpZD1cIk9wdGlvbnNBcHBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxuICAgICAgICAgICAgICA8SW5wdXRCYXIgYWRkU2l0ZT17dGhpcy5wcm9wcy5hZGRTaXRlfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XG4gICAgICAgICAgICAgIDxTaXRlVGFibGUgc2l0ZXM9e3RoaXMucHJvcHMuc2l0ZXN9IG1heEVudHJ5PXsxMH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgc3RhdGUgPT4gKFxuICAgIHtcbiAgICAgIHNpdGVzOiBzdGF0ZS5zaXRlcyxcbiAgICAgIG1lc3NhZ2U6IHN0YXRlLm1lc3NhZ2VcbiAgICB9XG4gICksXG4gIGRpc3BhdGNoID0+IChcbiAgICB7XG4gICAgICBhZGRTaXRlOiBzaXRlID0+IGRpc3BhdGNoKGFkZFNpdGUoc2l0ZSkpLFxuICAgICAgZmV0Y2hTaXRlczogKCkgPT4gZGlzcGF0Y2goZmV0Y2hTaXRlcygpKVxuICAgIH1cbiAgKVxuKShPcHRpb25zQXBwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbnRhaW5lcnMvT3B0aW9ucy5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUYWJsZSwgQ29sdW1uLCBDZWxsIH0gZnJvbSAnZml4ZWQtZGF0YS10YWJsZSc7XG5pbXBvcnQgJ2ZpeGVkLWRhdGEtdGFibGUvZGlzdC9maXhlZC1kYXRhLXRhYmxlLmNzcyc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpdGVUYWJsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc29ydFNpdGVzID0gdGhpcy5zb3J0U2l0ZXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2l0ZXM6IHRoaXMuc29ydFNpdGVzKHByb3BzLnNpdGVzLCAndGltZVNwZW50JylcbiAgICB9O1xuICB9XG4gIHNvcnRTaXRlcyhzaXRlcywgc29ydEJ5KSB7XG4gICAgcmV0dXJuIHNpdGVzLnNvcnQoKGEsIGIpID0+IGJbc29ydEJ5XSAtIGFbc29ydEJ5XSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGl0ZW1Db3VudCA9ICh0aGlzLnN0YXRlLnNpdGVzLmxlbmd0aCA8IDEwKSA/IHRoaXMuc3RhdGUuc2l0ZXMubGVuZ3RoIDogMTA7XG4gICAgY29uc3QgdG9wVGVuID0gdGhpcy5zdGF0ZS5zaXRlcy5zbGljZSgwLCBpdGVtQ291bnQpO1xuICAgIHJldHVybiAoXG4gICAgICA8VGFibGVcbiAgICAgICAgcm93c0NvdW50PXsxMH1cbiAgICAgICAgcm93SGVpZ2h0PXszMH1cbiAgICAgICAgaGVhZGVySGVpZ2h0PXszMH1cbiAgICAgICAgd2lkdGg9ezYwMH1cbiAgICAgICAgaGVpZ2h0PXsoaXRlbUNvdW50ICsgMSkgKiAzMCArIDJ9XG4gICAgICA+XG4gICAgICAgIDxDb2x1bW5cbiAgICAgICAgICBoZWFkZXI9XCJTaXRlXCJcbiAgICAgICAgICBjZWxsPXtjID0+IChcbiAgICAgICAgICAgIDxDZWxsPlxuICAgICAgICAgICAgICB7dG9wVGVuW2Mucm93SW5kZXhdLnNpdGV9XG4gICAgICAgICAgICA8L0NlbGw+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB3aWR0aD17MjAwfVxuICAgICAgICAvPlxuICAgICAgICA8Q29sdW1uXG4gICAgICAgICAgY29sdW1uS2V5PVwibnVtYmVyXCJcbiAgICAgICAgICBoZWFkZXI9XCJWaXNpdHNcIlxuICAgICAgICAgIGNlbGw9e2MgPT4gKFxuICAgICAgICAgICAgPENlbGw+XG4gICAgICAgICAgICAgIHt0b3BUZW5bYy5yb3dJbmRleF0udmlzaXRzfVxuICAgICAgICAgICAgPC9DZWxsPlxuICAgICAgICAgICl9XG4gICAgICAgICAgd2lkdGg9ezIwMH1cbiAgICAgICAgLz5cbiAgICAgICAgPENvbHVtblxuICAgICAgICAgIGhlYWRlcj1cIlRpbWVcIlxuICAgICAgICAgIGNlbGw9e2MgPT4gKFxuICAgICAgICAgICAgPENlbGw+XG4gICAgICAgICAgICAgIHttb21lbnQoJzIwMTUtMDEtMDEnKS5zdGFydE9mKCdkYXknKVxuICAgICAgICAgICAgICAgIC5zZWNvbmRzKHRoaXMuc3RhdGUuc2l0ZXNbYy5yb3dJbmRleF0udGltZVNwZW50KVxuICAgICAgICAgICAgICAgIC5mb3JtYXQoJ0g6bW06c3MnKX1cbiAgICAgICAgICAgIDwvQ2VsbD5cbiAgICAgICAgICApfVxuICAgICAgICAgIHdpZHRoPXsyMDB9XG4gICAgICAgIC8+XG4gICAgICA8L1RhYmxlPlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvU2l0ZVRhYmxlLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ludGVybmFsL0ZpeGVkRGF0YVRhYmxlUm9vdCcpO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZml4ZWQtZGF0YS10YWJsZS9tYWluLmpzXG4gKiogbW9kdWxlIGlkID0gMjk0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBGaXhlZERhdGFUYWJsZVJvb3RcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBGaXhlZERhdGFUYWJsZSA9IHJlcXVpcmUoJy4vRml4ZWREYXRhVGFibGUucmVhY3QnKTtcbnZhciBGaXhlZERhdGFUYWJsZUNlbGxEZWZhdWx0ID0gcmVxdWlyZSgnLi9GaXhlZERhdGFUYWJsZUNlbGxEZWZhdWx0LnJlYWN0Jyk7XG52YXIgRml4ZWREYXRhVGFibGVDb2x1bW4gPSByZXF1aXJlKCcuL0ZpeGVkRGF0YVRhYmxlQ29sdW1uLnJlYWN0Jyk7XG52YXIgRml4ZWREYXRhVGFibGVDb2x1bW5Hcm91cCA9IHJlcXVpcmUoJy4vRml4ZWREYXRhVGFibGVDb2x1bW5Hcm91cC5yZWFjdCcpO1xuXG52YXIgRml4ZWREYXRhVGFibGVSb290ID0ge1xuICBDZWxsOiBGaXhlZERhdGFUYWJsZUNlbGxEZWZhdWx0LFxuICBDb2x1bW46IEZpeGVkRGF0YVRhYmxlQ29sdW1uLFxuICBDb2x1bW5Hcm91cDogRml4ZWREYXRhVGFibGVDb2x1bW5Hcm91cCxcbiAgVGFibGU6IEZpeGVkRGF0YVRhYmxlXG59O1xuXG5GaXhlZERhdGFUYWJsZVJvb3QudmVyc2lvbiA9ICcwLjYuMyc7XG5tb2R1bGUuZXhwb3J0cyA9IEZpeGVkRGF0YVRhYmxlUm9vdDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL0ZpeGVkRGF0YVRhYmxlUm9vdC5qc1xuICoqIG1vZHVsZSBpZCA9IDI5NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgRml4ZWREYXRhVGFibGUucmVhY3RcbiAqL1xuXG4vKipcbiAqIFRSQU5TSVRJT04gU0hJTVxuICogVGhpcyBhY3RzIHRvIHByb3ZpZGUgYW4gaW50ZXJtZWRpYXRlIG1hcHBpbmcgZnJvbSB0aGUgb2xkIEFQSSB0byB0aGUgbmV3IEFQSVxuICpcbiAqIFJlbW92ZSB0aGlzIGVudGlyZSBmaWxlIGFuZCByZXBsYWNlIHRoZSB0d28gbGluZXMgaW4gRml4ZWREYXRhVGFibGVSb290XG4gKiB3aGVuIHJlYWR5IHRvIGNvbnRpbnVlIHRvIHRoZSBuZXcgQVBJLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgnLi9SZWFjdCcpO1xuXG52YXIgUmVhY3RDaGlsZHJlbiA9IFJlYWN0LkNoaWxkcmVuO1xuXG52YXIgUHJvcFR5cGVzID0gUmVhY3QuUHJvcFR5cGVzO1xuXG4vLyBOZXcgVGFibGUgQVBJXG52YXIgVGFibGUgPSByZXF1aXJlKCcuL0ZpeGVkRGF0YVRhYmxlTmV3LnJlYWN0Jyk7XG52YXIgQ29sdW1uID0gcmVxdWlyZSgnLi9GaXhlZERhdGFUYWJsZUNvbHVtbk5ldy5yZWFjdCcpO1xudmFyIENvbHVtbkdyb3VwID0gcmVxdWlyZSgnLi9GaXhlZERhdGFUYWJsZUNvbHVtbkdyb3VwTmV3LnJlYWN0Jyk7XG5cbi8vIFRyYW5zaXRpb24gQ2VsbFxudmFyIFRyYW5zaXRpb25DZWxsID0gcmVxdWlyZSgnLi9GaXhlZERhdGFUYWJsZUNlbGxUcmFuc2l0aW9uLnJlYWN0Jyk7XG5cbnZhciBORVhUX1ZFUlNJT04gPSAnMC43LjAnO1xudmFyIERPQ1VNRU5UQVRJT05fVVJMID0gJ2h0dHBzOi8vZmJ1cmwuY29tL0ZpeGVkRGF0YVRhYmxlLXYwLjYnO1xuXG52YXIgRU1QVFlfT0JKRUNUID0ge307XG5cbi8qKlxuICogTm90aWZ5IGluIGNvbnNvbGUgdGhhdCBzb21lIHByb3AgaGFzIGJlZW4gZGVwcmVjYXRlZC5cbiAqL1xudmFyIG5vdGlmaWVkID0ge307XG5mdW5jdGlvbiBub3RpZnlEZXByZWNhdGVkKHByb3AsIHJlYXNvbikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmICghbm90aWZpZWRbcHJvcF0pIHtcbiAgICAgIGNvbnNvbGUud2FybignYCcgKyBwcm9wICsgJ2Agd2lsbCBiZSBERVBSRUNBVEVEIGluIHZlcnNpb24gJyArIE5FWFRfVkVSU0lPTiArICcgb2YgRml4ZWREYXRhVGFibGUgYW5kIGJleW9uZC4gXFxuJyArIHJlYXNvbiArICdcXG4nICsgJ1JlYWQgdGhlIGRvY3MgYXQ6ICcgKyBET0NVTUVOVEFUSU9OX1VSTCk7XG4gICAgICBub3RpZmllZFtwcm9wXSA9IHRydWU7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogRGF0YSBncmlkIGNvbXBvbmVudCB3aXRoIGZpeGVkIG9yIHNjcm9sbGFibGUgaGVhZGVyIGFuZCBjb2x1bW5zLlxuICpcbiAqIFRoaXMgaXMgY3VycmVudGx5IGluIGEgdHJhbnNpdGlvbiBtb2RlLCBhcyB0aGUgbmV3IEFQSSBpcyB1c2VkLlxuICogREVQUkVDQVRFRCBlbmRwb2ludHMgd29yaywgYnV0IHdpbGwgbm90IGJlIHN1cHBvcnRlZCBpbiBsYXRlciB2ZXJzaW9ucy5cbiAqXG4gKiBUaGUgbGF5b3V0IG9mIHRoZSBkYXRhIHRhYmxlIGlzIGFzIGZvbGxvd3M6XG4gKlxuICogYGBgXG4gKiArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tK1xuICogfCBGaXhlZCBDb2x1bW4gR3JvdXAgICAgfCBTY3JvbGxhYmxlIENvbHVtbiBHcm91cCAgIHxcbiAqIHwgSGVhZGVyICAgICAgICAgICAgICAgIHwgSGVhZGVyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLStcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8IEZpeGVkIEhlYWRlciBDb2x1bW5zICB8IFNjcm9sbGFibGUgSGVhZGVyIENvbHVtbnMgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCBGaXhlZCBCb2R5IENvbHVtbnMgICAgfCBTY3JvbGxhYmxlIEJvZHkgQ29sdW1ucyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tK1xuICogfCAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgRml4ZWQgRm9vdGVyIENvbHVtbnMgIHwgU2Nyb2xsYWJsZSBGb290ZXIgQ29sdW1ucyB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLStcbiAqIGBgYFxuICpcbiAqIC0gRml4ZWQgQ29sdW1uIEdyb3VwIEhlYWRlcjogVGhlc2UgYXJlIHRoZSBoZWFkZXJzIGZvciBhIGdyb3VwXG4gKiAgIG9mIGNvbHVtbnMgaWYgaW5jbHVkZWQgaW4gdGhlIHRhYmxlIHRoYXQgZG8gbm90IHNjcm9sbFxuICogICB2ZXJ0aWNhbGx5IG9yIGhvcml6b250YWxseS5cbiAqXG4gKiAtIFNjcm9sbGFibGUgQ29sdW1uIEdyb3VwIEhlYWRlcjogVGhlIGhlYWRlciBmb3IgYSBncm91cCBvZiBjb2x1bW5zXG4gKiAgIHRoYXQgZG8gbm90IG1vdmUgd2hpbGUgc2Nyb2xsaW5nIHZlcnRpY2FsbHksIGJ1dCBtb3ZlIGhvcml6b250YWxseVxuICogICB3aXRoIHRoZSBob3Jpem9udGFsIHNjcm9sbGluZy5cbiAqXG4gKiAtIEZpeGVkIEhlYWRlciBDb2x1bW5zOiBUaGUgaGVhZGVyIGNvbHVtbnMgdGhhdCBkbyBub3QgbW92ZSB3aGlsZSBzY3JvbGxpbmdcbiAqICAgdmVydGljYWxseSBvciBob3Jpem9udGFsbHkuXG4gKlxuICogLSBTY3JvbGxhYmxlIEhlYWRlciBDb2x1bW5zOiBUaGUgaGVhZGVyIGNvbHVtbnMgdGhhdCBkbyBub3QgbW92ZVxuICogICB3aGlsZSBzY3JvbGxpbmcgdmVydGljYWxseSwgYnV0IG1vdmUgaG9yaXpvbnRhbGx5IHdpdGggdGhlIGhvcml6b250YWxcbiAqICAgc2Nyb2xsaW5nLlxuICpcbiAqIC0gRml4ZWQgQm9keSBDb2x1bW5zOiBUaGUgYm9keSBjb2x1bW5zIHRoYXQgZG8gbm90IG1vdmUgd2hpbGUgc2Nyb2xsaW5nXG4gKiAgIGhvcml6b250YWxseSwgYnV0IG1vdmUgdmVydGljYWxseSB3aXRoIHRoZSB2ZXJ0aWNhbCBzY3JvbGxpbmcuXG4gKlxuICogLSBTY3JvbGxhYmxlIEJvZHkgQ29sdW1uczogVGhlIGJvZHkgY29sdW1ucyB0aGF0IG1vdmUgd2hpbGUgc2Nyb2xsaW5nXG4gKiAgIHZlcnRpY2FsbHkgb3IgaG9yaXpvbnRhbGx5LlxuICovXG52YXIgVHJhbnNpdGlvblRhYmxlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1RyYW5zaXRpb25UYWJsZScsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgLyoqXG4gICAgICogUGl4ZWwgd2lkdGggb2YgdGFibGUuIElmIGFsbCBjb2x1bW5zIGRvIG5vdCBmaXQsXG4gICAgICogYSBob3Jpem9udGFsIHNjcm9sbGJhciB3aWxsIGFwcGVhci5cbiAgICAgKi9cbiAgICB3aWR0aDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogUGl4ZWwgaGVpZ2h0IG9mIHRhYmxlLiBJZiBhbGwgcm93cyBkbyBub3QgZml0LFxuICAgICAqIGEgdmVydGljYWwgc2Nyb2xsYmFyIHdpbGwgYXBwZWFyLlxuICAgICAqXG4gICAgICogRWl0aGVyIGBoZWlnaHRgIG9yIGBtYXhIZWlnaHRgIG11c3QgYmUgc3BlY2lmaWVkLlxuICAgICAqL1xuICAgIGhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKlxuICAgICAqIE1heGltdW0gcGl4ZWwgaGVpZ2h0IG9mIHRhYmxlLiBJZiBhbGwgcm93cyBkbyBub3QgZml0LFxuICAgICAqIGEgdmVydGljYWwgc2Nyb2xsYmFyIHdpbGwgYXBwZWFyLlxuICAgICAqXG4gICAgICogRWl0aGVyIGBoZWlnaHRgIG9yIGBtYXhIZWlnaHRgIG11c3QgYmUgc3BlY2lmaWVkLlxuICAgICAqL1xuICAgIG1heEhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKlxuICAgICAqIFBpeGVsIGhlaWdodCBvZiB0YWJsZSdzIG93bmVyLCB0aGlzIGlzIHVzZWQgaW4gYSBtYW5hZ2VkIHNjcm9sbGluZ1xuICAgICAqIHNpdHVhdGlvbiB3aGVuIHlvdSB3YW50IHRvIHNsaWRlIHRoZSB0YWJsZSB1cCBmcm9tIGJlbG93IHRoZSBmb2xkXG4gICAgICogd2l0aG91dCBoYXZpbmcgdG8gY29uc3RhbnRseSB1cGRhdGUgdGhlIGhlaWdodCBvbiBldmVyeSBzY3JvbGwgdGljay5cbiAgICAgKiBJbnN0ZWFkLCB2YXJ5IHRoaXMgcHJvcGVydHkgb24gc2Nyb2xsLiBCeSB1c2luZyBgb3duZXJIZWlnaHRgLCB3ZVxuICAgICAqIG92ZXItcmVuZGVyIHRoZSB0YWJsZSB3aGlsZSBtYWtpbmcgc3VyZSB0aGUgZm9vdGVyIGFuZCBob3Jpem9udGFsXG4gICAgICogc2Nyb2xsYmFyIG9mIHRoZSB0YWJsZSBhcmUgdmlzaWJsZSB3aGVuIHRoZSBjdXJyZW50IHNwYWNlIGZvciB0aGUgdGFibGVcbiAgICAgKiBpbiB2aWV3IGlzIHNtYWxsZXIgdGhhbiB0aGUgZmluYWwsIG92ZXItZmxvd2luZyBoZWlnaHQgb2YgdGFibGUuIEl0XG4gICAgICogYWxsb3dzIHVzIHRvIGF2b2lkIHJlc2l6aW5nIGFuZCByZWZsb3dpbmcgdGFibGUgd2hlbiBpdCBpcyBtb3ZpbmcgaW4gdGhlXG4gICAgICogdmlldy5cbiAgICAgKlxuICAgICAqIFRoaXMgaXMgdXNlZCBpZiBgb3duZXJIZWlnaHQgPCBoZWlnaHRgIChvciBgbWF4SGVpZ2h0YCkuXG4gICAgICovXG4gICAgb3duZXJIZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICBvdmVyZmxvd1g6IFByb3BUeXBlcy5vbmVPZihbJ2hpZGRlbicsICdhdXRvJ10pLFxuICAgIG92ZXJmbG93WTogUHJvcFR5cGVzLm9uZU9mKFsnaGlkZGVuJywgJ2F1dG8nXSksXG5cbiAgICAvKipcbiAgICAgKiBOdW1iZXIgb2Ygcm93cyBpbiB0aGUgdGFibGUuXG4gICAgICovXG4gICAgcm93c0NvdW50OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBQaXhlbCBoZWlnaHQgb2Ygcm93cyB1bmxlc3MgYHJvd0hlaWdodEdldHRlcmAgaXMgc3BlY2lmaWVkIGFuZCByZXR1cm5zXG4gICAgICogZGlmZmVyZW50IHZhbHVlLlxuICAgICAqL1xuICAgIHJvd0hlaWdodDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogSWYgc3BlY2lmaWVkLCBgcm93SGVpZ2h0R2V0dGVyKGluZGV4KWAgaXMgY2FsbGVkIGZvciBlYWNoIHJvdyBhbmQgdGhlXG4gICAgICogcmV0dXJuZWQgdmFsdWUgb3ZlcnJpZGVzIGByb3dIZWlnaHRgIGZvciBwYXJ0aWN1bGFyIHJvdy5cbiAgICAgKi9cbiAgICByb3dIZWlnaHRHZXR0ZXI6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogREVQUkVDQVRFRFxuICAgICAqXG4gICAgICogVG8gZ2V0IHJvd3MgdG8gZGlzcGxheSBpbiB0YWJsZSwgYHJvd0dldHRlcihpbmRleClgXG4gICAgICogaXMgY2FsbGVkLiBgcm93R2V0dGVyYCBzaG91bGQgYmUgc21hcnQgZW5vdWdoIHRvIGhhbmRsZSBhc3luY1xuICAgICAqIGZldGNoaW5nIG9mIGRhdGEgYW5kIHJldHVybiB0ZW1wb3Jhcnkgb2JqZWN0c1xuICAgICAqIHdoaWxlIGRhdGEgaXMgYmVpbmcgZmV0Y2hlZC5cbiAgICAgKi9cbiAgICByb3dHZXR0ZXI6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogVG8gZ2V0IGFueSBhZGRpdGlvbmFsIENTUyBjbGFzc2VzIHRoYXQgc2hvdWxkIGJlIGFkZGVkIHRvIGEgcm93LFxuICAgICAqIGByb3dDbGFzc05hbWVHZXR0ZXIoaW5kZXgpYCBpcyBjYWxsZWQuXG4gICAgICovXG4gICAgcm93Q2xhc3NOYW1lR2V0dGVyOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIFBpeGVsIGhlaWdodCBvZiB0aGUgY29sdW1uIGdyb3VwIGhlYWRlci5cbiAgICAgKi9cbiAgICBncm91cEhlYWRlckhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKlxuICAgICAqIFBpeGVsIGhlaWdodCBvZiBoZWFkZXIuXG4gICAgICovXG4gICAgaGVhZGVySGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBERVBSRUNBVEVEXG4gICAgICpcbiAgICAgKiBGdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCB0byBnZXQgdGhlIGRhdGEgZm9yIHRoZSBoZWFkZXIgcm93LlxuICAgICAqIElmIHRoZSBmdW5jdGlvbiByZXR1cm5zIG51bGwsIHRoZSBoZWFkZXIgd2lsbCBiZSBzZXQgdG8gdGhlXG4gICAgICogQ29sdW1uJ3MgbGFiZWwgcHJvcGVydHkuXG4gICAgICovXG4gICAgaGVhZGVyRGF0YUdldHRlcjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBQaXhlbCBoZWlnaHQgb2YgZm9vdGVyLlxuICAgICAqL1xuICAgIGZvb3RlckhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKlxuICAgICAqIERFUFJFQ0FURUQgLSB1c2UgZm9vdGVyRGF0YUdldHRlciBpbnN0ZWFkLlxuICAgICAqIERhdGEgdGhhdCB3aWxsIGJlIHBhc3NlZCB0byBmb290ZXIgY2VsbCByZW5kZXJlcnMuXG4gICAgICovXG4gICAgZm9vdGVyRGF0YTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLmFycmF5XSksXG5cbiAgICAvKipcbiAgICAgKiBERVBSRUNBVEVEXG4gICAgICpcbiAgICAgKiBGdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCB0byBnZXQgdGhlIGRhdGEgZm9yIHRoZSBmb290ZXIgcm93LlxuICAgICAqL1xuICAgIGZvb3RlckRhdGFHZXR0ZXI6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogVmFsdWUgb2YgaG9yaXpvbnRhbCBzY3JvbGwuXG4gICAgICovXG4gICAgc2Nyb2xsTGVmdDogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKlxuICAgICAqIEluZGV4IG9mIGNvbHVtbiB0byBzY3JvbGwgdG8uXG4gICAgICovXG4gICAgc2Nyb2xsVG9Db2x1bW46IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvKipcbiAgICAgKiBWYWx1ZSBvZiB2ZXJ0aWNhbCBzY3JvbGwuXG4gICAgICovXG4gICAgc2Nyb2xsVG9wOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLyoqXG4gICAgICogSW5kZXggb2Ygcm93IHRvIHNjcm9sbCB0by5cbiAgICAgKi9cbiAgICBzY3JvbGxUb1JvdzogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gc2Nyb2xsaW5nIHN0YXJ0cyB3aXRoIGN1cnJlbnQgaG9yaXpvbnRhbFxuICAgICAqIGFuZCB2ZXJ0aWNhbCBzY3JvbGwgdmFsdWVzLlxuICAgICAqL1xuICAgIG9uU2Nyb2xsU3RhcnQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBzY3JvbGxpbmcgZW5kcyBvciBzdG9wcyB3aXRoIG5ldyBob3Jpem9udGFsXG4gICAgICogYW5kIHZlcnRpY2FsIHNjcm9sbCB2YWx1ZXMuXG4gICAgICovXG4gICAgb25TY3JvbGxFbmQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBgcm93SGVpZ2h0R2V0dGVyYCByZXR1cm5zIGEgZGlmZmVyZW50IGhlaWdodFxuICAgICAqIGZvciBhIHJvdyB0aGFuIHRoZSBgcm93SGVpZ2h0YCBwcm9wLiBUaGlzIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIGluaXRpYWxseVxuICAgICAqIHRhYmxlIGVzdGltYXRlcyBoZWlnaHRzIG9mIHNvbWUgcGFydHMgb2YgdGhlIGNvbnRlbnQuXG4gICAgICovXG4gICAgb25Db250ZW50SGVpZ2h0Q2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gYSByb3cgaXMgY2xpY2tlZC5cbiAgICAgKi9cbiAgICBvblJvd0NsaWNrOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gYSByb3cgaXMgZG91YmxlIGNsaWNrZWQuXG4gICAgICovXG4gICAgb25Sb3dEb3VibGVDbGljazogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIGEgbW91c2UtZG93biBldmVudCBoYXBwZW5zIG9uIGEgcm93LlxuICAgICAqL1xuICAgIG9uUm93TW91c2VEb3duOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gYSBtb3VzZS1lbnRlciBldmVudCBoYXBwZW5zIG9uIGEgcm93LlxuICAgICAqL1xuICAgIG9uUm93TW91c2VFbnRlcjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIGEgbW91c2UtbGVhdmUgZXZlbnQgaGFwcGVucyBvbiBhIHJvdy5cbiAgICAgKi9cbiAgICBvblJvd01vdXNlTGVhdmU6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiByZXNpemVyIGhhcyBiZWVuIHJlbGVhc2VkXG4gICAgICogYW5kIGNvbHVtbiBuZWVkcyB0byBiZSB1cGRhdGVkLlxuICAgICAqXG4gICAgICogUmVxdWlyZWQgaWYgdGhlIGlzUmVzaXphYmxlIHByb3BlcnR5IGlzIHRydWUgb24gYW55IGNvbHVtbi5cbiAgICAgKlxuICAgICAqIGBgYFxuICAgICAqIGZ1bmN0aW9uKFxuICAgICAqICAgbmV3Q29sdW1uV2lkdGg6IG51bWJlcixcbiAgICAgKiAgIGRhdGFLZXk6IHN0cmluZyxcbiAgICAgKiApXG4gICAgICogYGBgXG4gICAgICovXG4gICAgb25Db2x1bW5SZXNpemVFbmRDYWxsYmFjazogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIGEgY29sdW1uIGlzIGN1cnJlbnRseSBiZWluZyByZXNpemVkLlxuICAgICAqL1xuICAgIGlzQ29sdW1uUmVzaXppbmc6IFByb3BUeXBlcy5ib29sXG4gIH0sXG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgLy8gVGhyb3cgd2FybmluZ3Mgb24gZGVwcmVjYXRlZCBwcm9wcy5cbiAgICB2YXIgc3RhdGUgPSB7fTtcbiAgICBzdGF0ZS5uZWVkc01pZ3JhdGlvbiA9IHRoaXMuX2NoZWNrRGVwcmVjYXRpb25zKCk7XG5cbiAgICByZXR1cm4gc3RhdGU7XG4gIH0sXG5cbiAgX2NoZWNrRGVwcmVjYXRpb25zOiBmdW5jdGlvbiBfY2hlY2tEZXByZWNhdGlvbnMoKSB7XG4gICAgdmFyIG5lZWRzTWlncmF0aW9uID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5yb3dHZXR0ZXIpIHtcbiAgICAgIG5vdGlmeURlcHJlY2F0ZWQoJ3Jvd0dldHRlcicsICdQbGVhc2UgdXNlIHRoZSBjZWxsIEFQSSBpbiBDb2x1bW4gdG8gZmV0Y2ggZGF0YSBmb3IgeW91ciBjZWxscy4nKTtcblxuICAgICAgLy8gUk9XR0VUVEVSPz8/IFlvdSBuZWVkIHRvIG1pZ3JhdGUuXG4gICAgICBuZWVkc01pZ3JhdGlvbiA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMuaGVhZGVyRGF0YUdldHRlcikge1xuICAgICAgbm90aWZ5RGVwcmVjYXRlZCgnaGVhZGVyRGF0YUdldHRlcicsICdQbGVhc2UgdXNlIHRoZSBoZWFkZXIgQVBJIGluIENvbHVtbiB0byAnICsgJ2ZldGNoIGRhdGEgZm9yIHlvdXIgaGVhZGVyIGNlbGxzLicpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLmZvb3RlckRhdGEpIHtcbiAgICAgIG5vdGlmeURlcHJlY2F0ZWQoJ2Zvb3RlckRhdGEnLCAnUGxlYXNlIHVzZSB0aGUgZm9vdGVyIEFQSSBpbiBDb2x1bW4gdG8gJyArICdmZXRjaCBkYXRhIGZvciB5b3VyIGZvb3RlciBjZWxscy4nKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5mb290ZXJEYXRhR2V0dGVyKSB7XG4gICAgICBub3RpZnlEZXByZWNhdGVkKCdmb290ZXJEYXRhR2V0dGVyJywgJ1BsZWFzZSB1c2UgdGhlIGZvb3RlciBBUEkgaW4gQ29sdW1uIHRvICcgKyAnZmV0Y2ggZGF0YSBmb3IgeW91ciBmb290ZXIgY2VsbHMuJyk7XG4gICAgfVxuXG4gICAgUmVhY3RDaGlsZHJlbi5mb3JFYWNoKHRoaXMucHJvcHMuY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgaWYgKCFjaGlsZCB8fCAhY2hpbGQucHJvcHMpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgcHJvcHMgPSBjaGlsZC5wcm9wcztcblxuICAgICAgaWYgKHByb3BzLmxhYmVsKSB7XG4gICAgICAgIG5vdGlmeURlcHJlY2F0ZWQoJ2xhYmVsJywgJ1BsZWFzZSB1c2UgYGhlYWRlcmAgaW5zdGVhZC4nKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByb3BzLmRhdGFLZXkpIHtcbiAgICAgICAgbm90aWZ5RGVwcmVjYXRlZCgnZGF0YUtleScsICdQbGVhc2UgdXNlIHRoZSBgY2VsbGAgQVBJIHRvIHBhc3MgaW4gYSBkYXRhS2V5Jyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9wcy5jZWxsUmVuZGVyZXIpIHtcbiAgICAgICAgbm90aWZ5RGVwcmVjYXRlZCgnY2VsbFJlbmRlcmVyJywgJ1BsZWFzZSB1c2UgdGhlIGBjZWxsYCBBUEkgdG8gcGFzcyBpbiBhIFJlYWN0IEVsZW1lbnQgaW5zdGVhZC4nKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByb3BzLmhlYWRlclJlbmRlcmVyKSB7XG4gICAgICAgIG5vdGlmeURlcHJlY2F0ZWQoJ2hlYWRlclJlbmRlcmVyJywgJ1BsZWFzZSB1c2UgdGhlIGBoZWFkZXJgIEFQSSB0byBwYXNzIGluIGEgUmVhY3QgRWxlbWVudCBpbnN0ZWFkLicpO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvcHMuY29sdW1uRGF0YSkge1xuICAgICAgICBub3RpZnlEZXByZWNhdGVkKCdjb2x1bW5EYXRhJywgJ1BsZWFzZSBwYXNzIGRhdGEgaW4gdGhyb3VnaCBwcm9wcyB0byB5b3VyIGhlYWRlciwgY2VsbCBvciBmb290ZXIuJyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9wcy5ncm91cEhlYWRlclJlbmRlcmVyKSB7XG4gICAgICAgIG5vdGlmeURlcHJlY2F0ZWQoJ2dyb3VwSGVhZGVyUmVuZGVyZXInLCAnUGxlYXNlIHVzZSB0aGUgYGhlYWRlcmAgQVBJIGluIENvbHVtbkdyb3VwIHRvICcgKyAncGFzcyBpbiBhIFJlYWN0IEVsZW1lbnQgaW5zdGVhZCBvZiBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyBvbmUuJyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9wcy5ncm91cEhlYWRlckRhdGEpIHtcbiAgICAgICAgbm90aWZ5RGVwcmVjYXRlZCgnZ3JvdXBIZWFkZXJEYXRhJywgJ1BsZWFzZSBwYXNzIGluIGFueSBkYXRhIHRocm91Z2ggcHJvcHMgdG8geW91ciBoZWFkZXIuJyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmVlZHNNaWdyYXRpb247XG4gIH0sXG5cbiAgLy8gV3JhcHBlciBmb3Igb25Sb3cgY2FsbGJhY2tzLCBzaW5jZSB3ZSBkb24ndCBoYXZlIHJvd0RhdGEgYXQgdGhhdCBsZXZlbC5cbiAgX29uUm93QWN0aW9uOiBmdW5jdGlvbiBfb25Sb3dBY3Rpb24ocHJvcHMsIGNhbGxiYWNrKSB7XG4gICAgaWYgKCFjYWxsYmFjaykge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKGUsIHJvd0luZGV4KSB7XG4gICAgICBjYWxsYmFjayhlLCByb3dJbmRleCwgcHJvcHMucm93R2V0dGVyICYmIHByb3BzLnJvd0dldHRlcihyb3dJbmRleCkgfHwgRU1QVFlfT0JKRUNUKTtcbiAgICB9O1xuICB9LFxuXG4gIF90cmFuc2Zvcm1Db2x1bW46IGZ1bmN0aW9uIF90cmFuc2Zvcm1Db2x1bW4oY29sdW1uLCB0YWJsZVByb3BzLCBrZXkpIHtcblxuICAgIHZhciBwcm9wcyA9IGNvbHVtbi5wcm9wcztcblxuICAgIGlmIChjb2x1bW4udHlwZS5fX1RhYmxlQ29sdW1uX18pIHtcbiAgICAgIC8vIENvbnN0dWN0IHRoZSBjZWxsIHRvIGJlIHVzZWQgdXNpbmcgdGhlIHJvd0dldHRlclxuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29sdW1uLCBfZXh0ZW5kcyh7XG4gICAgICAgIGtleTogJ2NvbHVtbl8nICsga2V5XG4gICAgICB9LCBwcm9wcywge1xuICAgICAgICBoZWFkZXI6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoVHJhbnNpdGlvbkNlbGwsIHtcbiAgICAgICAgICBpc0hlYWRlckNlbGw6IHRydWUsXG4gICAgICAgICAgbGFiZWw6IHByb3BzLmxhYmVsLFxuICAgICAgICAgIHdpZHRoOiBwcm9wcy53aWR0aCxcbiAgICAgICAgICBkYXRhS2V5OiBwcm9wcy5kYXRhS2V5LFxuICAgICAgICAgIGNsYXNzTmFtZTogcHJvcHMuaGVhZGVyQ2xhc3NOYW1lLFxuICAgICAgICAgIGNvbHVtbkRhdGE6IHByb3BzLmNvbHVtbkRhdGEgfHwgRU1QVFlfT0JKRUNULFxuICAgICAgICAgIGNlbGxSZW5kZXJlcjogcHJvcHMuaGVhZGVyUmVuZGVyZXIsXG4gICAgICAgICAgaGVhZGVyRGF0YUdldHRlcjogdGFibGVQcm9wcy5oZWFkZXJEYXRhR2V0dGVyXG4gICAgICAgIH0pLFxuICAgICAgICBjb2x1bW5LZXk6IHByb3BzLmRhdGFLZXksXG4gICAgICAgIGNlbGw6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoVHJhbnNpdGlvbkNlbGwsIHtcbiAgICAgICAgICBkYXRhS2V5OiBwcm9wcy5kYXRhS2V5LFxuICAgICAgICAgIGNsYXNzTmFtZTogcHJvcHMuY2VsbENsYXNzTmFtZSxcbiAgICAgICAgICByb3dHZXR0ZXI6IHRhYmxlUHJvcHMucm93R2V0dGVyLFxuICAgICAgICAgIHdpZHRoOiBwcm9wcy53aWR0aCxcbiAgICAgICAgICBjb2x1bW5EYXRhOiBwcm9wcy5jb2x1bW5EYXRhIHx8IEVNUFRZX09CSkVDVCxcbiAgICAgICAgICBjZWxsRGF0YUdldHRlcjogcHJvcHMuY2VsbERhdGFHZXR0ZXIsXG4gICAgICAgICAgY2VsbFJlbmRlcmVyOiBwcm9wcy5jZWxsUmVuZGVyZXJcbiAgICAgICAgfSksXG4gICAgICAgIGZvb3RlcjogUmVhY3QuY3JlYXRlRWxlbWVudChUcmFuc2l0aW9uQ2VsbCwge1xuICAgICAgICAgIGlzRm9vdGVyQ2VsbDogdHJ1ZSxcbiAgICAgICAgICBjbGFzc05hbWU6IHByb3BzLmZvb3RlckNsYXNzTmFtZSxcbiAgICAgICAgICBkYXRhS2V5OiBwcm9wcy5kYXRhS2V5LFxuICAgICAgICAgIGNlbGxSZW5kZXJlcjogcHJvcHMuZm9vdGVyUmVuZGVyZXIsXG4gICAgICAgICAgZm9vdGVyRGF0YUdldHRlcjogdGFibGVQcm9wcy5mb290ZXJEYXRhR2V0dGVyLFxuICAgICAgICAgIGZvb3RlckRhdGE6IHRhYmxlUHJvcHMuZm9vdGVyRGF0YSB8fCBFTVBUWV9PQkpFQ1RcbiAgICAgICAgfSlcbiAgICAgIH0pKTtcbiAgICB9XG4gIH0sXG5cbiAgX3RyYW5zZm9ybUNvbHVtbkdyb3VwOiBmdW5jdGlvbiBfdHJhbnNmb3JtQ29sdW1uR3JvdXAoZ3JvdXAsIHRhYmxlUHJvcHMsIGtleSwgbGFiZWxzKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciBwcm9wcyA9IGdyb3VwLnByb3BzO1xuXG4gICAgdmFyIGogPSAwO1xuICAgIHZhciBjb2x1bW5zID0gUmVhY3RDaGlsZHJlbi5tYXAocHJvcHMuY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgaisrO1xuICAgICAgcmV0dXJuIF90aGlzLl90cmFuc2Zvcm1Db2x1bW4oY2hpbGQsIHRhYmxlUHJvcHMsIGtleSArICdfJyArIGopO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBDb2x1bW5Hcm91cCxcbiAgICAgIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgICAgICBrZXk6ICdncm91cF8nICsga2V5LFxuICAgICAgICBoZWFkZXI6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoVHJhbnNpdGlvbkNlbGwsIHtcbiAgICAgICAgICBpc0hlYWRlckNlbGw6IHRydWUsXG4gICAgICAgICAgbGFiZWw6IGdyb3VwLnByb3BzLmxhYmVsLFxuICAgICAgICAgIGRhdGFLZXk6IGtleSxcbiAgICAgICAgICBncm91cEhlYWRlclJlbmRlcmVyOiBwcm9wcy5ncm91cEhlYWRlclJlbmRlcmVyLFxuICAgICAgICAgIGdyb3VwSGVhZGVyTGFiZWxzOiBsYWJlbHMsXG4gICAgICAgICAgZ3JvdXBIZWFkZXJEYXRhOiBwcm9wcy5jb2x1bW5Hcm91cERhdGEgfHwgRU1QVFlfT0JKRUNUXG4gICAgICAgIH0pIH0pLFxuICAgICAgY29sdW1uc1xuICAgICk7XG4gIH0sXG5cbiAgX2NvbnZlcnRlZENvbHVtbnM6IGZ1bmN0aW9uIF9jb252ZXJ0ZWRDb2x1bW5zKG5lZWRzTWlncmF0aW9uKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAvLyBJZiB3ZSBkb24ndCBuZWVkIHRvIG1pZ3JhdGUsIG1hcCBkaXJlY3RseSB0byB0aGUgbmV3IEFQSS5cbiAgICBpZiAoIW5lZWRzTWlncmF0aW9uKSB7XG4gICAgICByZXR1cm4gUmVhY3RDaGlsZHJlbi5tYXAodGhpcy5wcm9wcy5jaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG5cbiAgICAgICAgaWYgKCFjaGlsZCkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNoaWxkLnR5cGUuX19UYWJsZUNvbHVtbl9fKSB7XG4gICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29sdW1uLCBjaGlsZC5wcm9wcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2hpbGQudHlwZS5fX1RhYmxlQ29sdW1uR3JvdXBfXykge1xuICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KENvbHVtbkdyb3VwLCBjaGlsZC5wcm9wcyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciB0YWJsZVByb3BzID0gdGhpcy5wcm9wcztcblxuICAgIC8vIE90aGVyd2lzZSwgaWYgYSBtaWdyYXRpb24gaXMgbmVlZGVkLCB3ZSBuZWVkIHRvIHRyYW5zZm9ybSBlYWNoIENvbHVtblxuICAgIC8vIG9yIENvbHVtbkdyb3VwLlxuICAgIHZhciBpID0gMDtcbiAgICByZXR1cm4gUmVhY3RDaGlsZHJlbi5tYXAodGhpcy5wcm9wcy5jaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG5cbiAgICAgIGlmICghY2hpbGQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmIChjaGlsZC50eXBlLl9fVGFibGVDb2x1bW5fXykge1xuICAgICAgICBjaGlsZCA9IF90aGlzMi5fdHJhbnNmb3JtQ29sdW1uKGNoaWxkLCB0YWJsZVByb3BzLCBpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNoaWxkLnR5cGUuX19UYWJsZUNvbHVtbkdyb3VwX18pIHtcbiAgICAgICAgLy8gU2luY2Ugd2UgYXBwYXJlbnRseSBnaXZlIGFuIGFycmF5IG9mIGxhYmVscyB0byBncm91cEhlYWRlclJlbmRlcmVyXG4gICAgICAgIHZhciBsYWJlbHMgPSBbXTtcbiAgICAgICAgUmVhY3RDaGlsZHJlbi5mb3JFYWNoKF90aGlzMi5wcm9wcy5jaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgbGFiZWxzLnB1c2goY2hpbGQucHJvcHMubGFiZWwpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjaGlsZCA9IF90aGlzMi5fdHJhbnNmb3JtQ29sdW1uR3JvdXAoY2hpbGQsIHRhYmxlUHJvcHMsIGksIGxhYmVscyk7XG4gICAgICB9XG5cbiAgICAgIGkrKztcbiAgICAgIHJldHVybiBjaGlsZDtcbiAgICB9KTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgVGFibGUsXG4gICAgICBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgICAgb25Sb3dNb3VzZURvd246IHRoaXMuX29uUm93QWN0aW9uKHByb3BzLCBwcm9wcy5vblJvd01vdXNlRG93biksXG4gICAgICAgIG9uUm93Q2xpY2s6IHRoaXMuX29uUm93QWN0aW9uKHByb3BzLCBwcm9wcy5vblJvd0NsaWNrKSxcbiAgICAgICAgb25Sb3dEb3VibGVDbGljazogdGhpcy5fb25Sb3dBY3Rpb24ocHJvcHMsIHByb3BzLm9uUm93RG91YmxlQ2xpY2spLFxuICAgICAgICBvblJvd01vdXNlRW50ZXI6IHRoaXMuX29uUm93QWN0aW9uKHByb3BzLCBwcm9wcy5vblJvd01vdXNlRW50ZXIpLFxuICAgICAgICBvblJvd01vdXNlTGVhdmU6IHRoaXMuX29uUm93QWN0aW9uKHByb3BzLCBwcm9wcy5vblJvd01vdXNlTGVhdmUpXG4gICAgICB9KSxcbiAgICAgIHRoaXMuX2NvbnZlcnRlZENvbHVtbnModGhpcy5zdGF0ZS5uZWVkc01pZ3JhdGlvbilcbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBUcmFuc2l0aW9uVGFibGU7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9GaXhlZERhdGFUYWJsZS5yZWFjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDI5NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgUmVhY3RcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgncmVhY3QnKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL1JlYWN0LmpzXG4gKiogbW9kdWxlIGlkID0gMjk3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBGaXhlZERhdGFUYWJsZU5ldy5yZWFjdFxuICogQHR5cGVjaGVja3NcbiAqIEBub2Zsb3dcbiAqL1xuXG4vKmVzbGludCBuby1iaXR3aXNlOjEqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJy4vUmVhY3QnKTtcbnZhciBSZWFjdENvbXBvbmVudFdpdGhQdXJlUmVuZGVyTWl4aW4gPSByZXF1aXJlKCcuL1JlYWN0Q29tcG9uZW50V2l0aFB1cmVSZW5kZXJNaXhpbicpO1xudmFyIFJlYWN0V2hlZWxIYW5kbGVyID0gcmVxdWlyZSgnLi9SZWFjdFdoZWVsSGFuZGxlcicpO1xudmFyIFNjcm9sbGJhciA9IHJlcXVpcmUoJy4vU2Nyb2xsYmFyLnJlYWN0Jyk7XG52YXIgRml4ZWREYXRhVGFibGVCdWZmZXJlZFJvd3MgPSByZXF1aXJlKCcuL0ZpeGVkRGF0YVRhYmxlQnVmZmVyZWRSb3dzLnJlYWN0Jyk7XG52YXIgRml4ZWREYXRhVGFibGVDb2x1bW5SZXNpemVIYW5kbGUgPSByZXF1aXJlKCcuL0ZpeGVkRGF0YVRhYmxlQ29sdW1uUmVzaXplSGFuZGxlLnJlYWN0Jyk7XG52YXIgRml4ZWREYXRhVGFibGVSb3cgPSByZXF1aXJlKCcuL0ZpeGVkRGF0YVRhYmxlUm93LnJlYWN0Jyk7XG52YXIgRml4ZWREYXRhVGFibGVTY3JvbGxIZWxwZXIgPSByZXF1aXJlKCcuL0ZpeGVkRGF0YVRhYmxlU2Nyb2xsSGVscGVyJyk7XG52YXIgRml4ZWREYXRhVGFibGVXaWR0aEhlbHBlciA9IHJlcXVpcmUoJy4vRml4ZWREYXRhVGFibGVXaWR0aEhlbHBlcicpO1xuXG52YXIgY3ggPSByZXF1aXJlKCcuL2N4Jyk7XG52YXIgZGVib3VuY2VDb3JlID0gcmVxdWlyZSgnLi9kZWJvdW5jZUNvcmUnKTtcbnZhciBlbXB0eUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9lbXB0eUZ1bmN0aW9uJyk7XG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnLi9pbnZhcmlhbnQnKTtcbnZhciBqb2luQ2xhc3NlcyA9IHJlcXVpcmUoJy4vam9pbkNsYXNzZXMnKTtcbnZhciBzaGFsbG93RXF1YWwgPSByZXF1aXJlKCcuL3NoYWxsb3dFcXVhbCcpO1xudmFyIHRyYW5zbGF0ZURPTVBvc2l0aW9uWFkgPSByZXF1aXJlKCcuL3RyYW5zbGF0ZURPTVBvc2l0aW9uWFknKTtcblxudmFyIFByb3BUeXBlcyA9IFJlYWN0LlByb3BUeXBlcztcblxudmFyIFJlYWN0Q2hpbGRyZW4gPSBSZWFjdC5DaGlsZHJlbjtcblxudmFyIEVNUFRZX09CSkVDVCA9IHt9O1xudmFyIEJPUkRFUl9IRUlHSFQgPSAxO1xudmFyIEhFQURFUiA9ICdoZWFkZXInO1xudmFyIEZPT1RFUiA9ICdmb290ZXInO1xudmFyIENFTEwgPSAnY2VsbCc7XG5cbi8qKlxuICogRGF0YSBncmlkIGNvbXBvbmVudCB3aXRoIGZpeGVkIG9yIHNjcm9sbGFibGUgaGVhZGVyIGFuZCBjb2x1bW5zLlxuICpcbiAqIFRoZSBsYXlvdXQgb2YgdGhlIGRhdGEgdGFibGUgaXMgYXMgZm9sbG93czpcbiAqXG4gKiBgYGBcbiAqICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rXG4gKiB8IEZpeGVkIENvbHVtbiBHcm91cCAgICB8IFNjcm9sbGFibGUgQ29sdW1uIEdyb3VwICAgfFxuICogfCBIZWFkZXIgICAgICAgICAgICAgICAgfCBIZWFkZXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tK1xuICogfCAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgRml4ZWQgSGVhZGVyIENvbHVtbnMgIHwgU2Nyb2xsYWJsZSBIZWFkZXIgQ29sdW1ucyB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLStcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8IEZpeGVkIEJvZHkgQ29sdW1ucyAgICB8IFNjcm9sbGFibGUgQm9keSBDb2x1bW5zICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rXG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCBGaXhlZCBGb290ZXIgQ29sdW1ucyAgfCBTY3JvbGxhYmxlIEZvb3RlciBDb2x1bW5zIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tK1xuICogYGBgXG4gKlxuICogLSBGaXhlZCBDb2x1bW4gR3JvdXAgSGVhZGVyOiBUaGVzZSBhcmUgdGhlIGhlYWRlcnMgZm9yIGEgZ3JvdXBcbiAqICAgb2YgY29sdW1ucyBpZiBpbmNsdWRlZCBpbiB0aGUgdGFibGUgdGhhdCBkbyBub3Qgc2Nyb2xsXG4gKiAgIHZlcnRpY2FsbHkgb3IgaG9yaXpvbnRhbGx5LlxuICpcbiAqIC0gU2Nyb2xsYWJsZSBDb2x1bW4gR3JvdXAgSGVhZGVyOiBUaGUgaGVhZGVyIGZvciBhIGdyb3VwIG9mIGNvbHVtbnNcbiAqICAgdGhhdCBkbyBub3QgbW92ZSB3aGlsZSBzY3JvbGxpbmcgdmVydGljYWxseSwgYnV0IG1vdmUgaG9yaXpvbnRhbGx5XG4gKiAgIHdpdGggdGhlIGhvcml6b250YWwgc2Nyb2xsaW5nLlxuICpcbiAqIC0gRml4ZWQgSGVhZGVyIENvbHVtbnM6IFRoZSBoZWFkZXIgY29sdW1ucyB0aGF0IGRvIG5vdCBtb3ZlIHdoaWxlIHNjcm9sbGluZ1xuICogICB2ZXJ0aWNhbGx5IG9yIGhvcml6b250YWxseS5cbiAqXG4gKiAtIFNjcm9sbGFibGUgSGVhZGVyIENvbHVtbnM6IFRoZSBoZWFkZXIgY29sdW1ucyB0aGF0IGRvIG5vdCBtb3ZlXG4gKiAgIHdoaWxlIHNjcm9sbGluZyB2ZXJ0aWNhbGx5LCBidXQgbW92ZSBob3Jpem9udGFsbHkgd2l0aCB0aGUgaG9yaXpvbnRhbFxuICogICBzY3JvbGxpbmcuXG4gKlxuICogLSBGaXhlZCBCb2R5IENvbHVtbnM6IFRoZSBib2R5IGNvbHVtbnMgdGhhdCBkbyBub3QgbW92ZSB3aGlsZSBzY3JvbGxpbmdcbiAqICAgaG9yaXpvbnRhbGx5LCBidXQgbW92ZSB2ZXJ0aWNhbGx5IHdpdGggdGhlIHZlcnRpY2FsIHNjcm9sbGluZy5cbiAqXG4gKiAtIFNjcm9sbGFibGUgQm9keSBDb2x1bW5zOiBUaGUgYm9keSBjb2x1bW5zIHRoYXQgbW92ZSB3aGlsZSBzY3JvbGxpbmdcbiAqICAgdmVydGljYWxseSBvciBob3Jpem9udGFsbHkuXG4gKi9cbnZhciBGaXhlZERhdGFUYWJsZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdGaXhlZERhdGFUYWJsZScsXG5cbiAgcHJvcFR5cGVzOiB7XG5cbiAgICAvKipcbiAgICAgKiBQaXhlbCB3aWR0aCBvZiB0YWJsZS4gSWYgYWxsIGNvbHVtbnMgZG8gbm90IGZpdCxcbiAgICAgKiBhIGhvcml6b250YWwgc2Nyb2xsYmFyIHdpbGwgYXBwZWFyLlxuICAgICAqL1xuICAgIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBQaXhlbCBoZWlnaHQgb2YgdGFibGUuIElmIGFsbCByb3dzIGRvIG5vdCBmaXQsXG4gICAgICogYSB2ZXJ0aWNhbCBzY3JvbGxiYXIgd2lsbCBhcHBlYXIuXG4gICAgICpcbiAgICAgKiBFaXRoZXIgYGhlaWdodGAgb3IgYG1heEhlaWdodGAgbXVzdCBiZSBzcGVjaWZpZWQuXG4gICAgICovXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLyoqXG4gICAgICogTWF4aW11bSBwaXhlbCBoZWlnaHQgb2YgdGFibGUuIElmIGFsbCByb3dzIGRvIG5vdCBmaXQsXG4gICAgICogYSB2ZXJ0aWNhbCBzY3JvbGxiYXIgd2lsbCBhcHBlYXIuXG4gICAgICpcbiAgICAgKiBFaXRoZXIgYGhlaWdodGAgb3IgYG1heEhlaWdodGAgbXVzdCBiZSBzcGVjaWZpZWQuXG4gICAgICovXG4gICAgbWF4SGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLyoqXG4gICAgICogUGl4ZWwgaGVpZ2h0IG9mIHRhYmxlJ3Mgb3duZXIsIHRoaXMgaXMgdXNlZCBpbiBhIG1hbmFnZWQgc2Nyb2xsaW5nXG4gICAgICogc2l0dWF0aW9uIHdoZW4geW91IHdhbnQgdG8gc2xpZGUgdGhlIHRhYmxlIHVwIGZyb20gYmVsb3cgdGhlIGZvbGRcbiAgICAgKiB3aXRob3V0IGhhdmluZyB0byBjb25zdGFudGx5IHVwZGF0ZSB0aGUgaGVpZ2h0IG9uIGV2ZXJ5IHNjcm9sbCB0aWNrLlxuICAgICAqIEluc3RlYWQsIHZhcnkgdGhpcyBwcm9wZXJ0eSBvbiBzY3JvbGwuIEJ5IHVzaW5nIGBvd25lckhlaWdodGAsIHdlXG4gICAgICogb3Zlci1yZW5kZXIgdGhlIHRhYmxlIHdoaWxlIG1ha2luZyBzdXJlIHRoZSBmb290ZXIgYW5kIGhvcml6b250YWxcbiAgICAgKiBzY3JvbGxiYXIgb2YgdGhlIHRhYmxlIGFyZSB2aXNpYmxlIHdoZW4gdGhlIGN1cnJlbnQgc3BhY2UgZm9yIHRoZSB0YWJsZVxuICAgICAqIGluIHZpZXcgaXMgc21hbGxlciB0aGFuIHRoZSBmaW5hbCwgb3Zlci1mbG93aW5nIGhlaWdodCBvZiB0YWJsZS4gSXRcbiAgICAgKiBhbGxvd3MgdXMgdG8gYXZvaWQgcmVzaXppbmcgYW5kIHJlZmxvd2luZyB0YWJsZSB3aGVuIGl0IGlzIG1vdmluZyBpbiB0aGVcbiAgICAgKiB2aWV3LlxuICAgICAqXG4gICAgICogVGhpcyBpcyB1c2VkIGlmIGBvd25lckhlaWdodCA8IGhlaWdodGAgKG9yIGBtYXhIZWlnaHRgKS5cbiAgICAgKi9cbiAgICBvd25lckhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIG92ZXJmbG93WDogUHJvcFR5cGVzLm9uZU9mKFsnaGlkZGVuJywgJ2F1dG8nXSksXG4gICAgb3ZlcmZsb3dZOiBQcm9wVHlwZXMub25lT2YoWydoaWRkZW4nLCAnYXV0byddKSxcblxuICAgIC8qKlxuICAgICAqIE51bWJlciBvZiByb3dzIGluIHRoZSB0YWJsZS5cbiAgICAgKi9cbiAgICByb3dzQ291bnQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFBpeGVsIGhlaWdodCBvZiByb3dzIHVubGVzcyBgcm93SGVpZ2h0R2V0dGVyYCBpcyBzcGVjaWZpZWQgYW5kIHJldHVybnNcbiAgICAgKiBkaWZmZXJlbnQgdmFsdWUuXG4gICAgICovXG4gICAgcm93SGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBJZiBzcGVjaWZpZWQsIGByb3dIZWlnaHRHZXR0ZXIoaW5kZXgpYCBpcyBjYWxsZWQgZm9yIGVhY2ggcm93IGFuZCB0aGVcbiAgICAgKiByZXR1cm5lZCB2YWx1ZSBvdmVycmlkZXMgYHJvd0hlaWdodGAgZm9yIHBhcnRpY3VsYXIgcm93LlxuICAgICAqL1xuICAgIHJvd0hlaWdodEdldHRlcjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBUbyBnZXQgYW55IGFkZGl0aW9uYWwgQ1NTIGNsYXNzZXMgdGhhdCBzaG91bGQgYmUgYWRkZWQgdG8gYSByb3csXG4gICAgICogYHJvd0NsYXNzTmFtZUdldHRlcihpbmRleClgIGlzIGNhbGxlZC5cbiAgICAgKi9cbiAgICByb3dDbGFzc05hbWVHZXR0ZXI6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogUGl4ZWwgaGVpZ2h0IG9mIHRoZSBjb2x1bW4gZ3JvdXAgaGVhZGVyLlxuICAgICAqL1xuICAgIGdyb3VwSGVhZGVySGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLyoqXG4gICAgICogUGl4ZWwgaGVpZ2h0IG9mIGhlYWRlci5cbiAgICAgKi9cbiAgICBoZWFkZXJIZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFBpeGVsIGhlaWdodCBvZiBmb290ZXIuXG4gICAgICovXG4gICAgZm9vdGVySGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLyoqXG4gICAgICogVmFsdWUgb2YgaG9yaXpvbnRhbCBzY3JvbGwuXG4gICAgICovXG4gICAgc2Nyb2xsTGVmdDogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKlxuICAgICAqIEluZGV4IG9mIGNvbHVtbiB0byBzY3JvbGwgdG8uXG4gICAgICovXG4gICAgc2Nyb2xsVG9Db2x1bW46IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvKipcbiAgICAgKiBWYWx1ZSBvZiB2ZXJ0aWNhbCBzY3JvbGwuXG4gICAgICovXG4gICAgc2Nyb2xsVG9wOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLyoqXG4gICAgICogSW5kZXggb2Ygcm93IHRvIHNjcm9sbCB0by5cbiAgICAgKi9cbiAgICBzY3JvbGxUb1JvdzogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gc2Nyb2xsaW5nIHN0YXJ0cyB3aXRoIGN1cnJlbnQgaG9yaXpvbnRhbFxuICAgICAqIGFuZCB2ZXJ0aWNhbCBzY3JvbGwgdmFsdWVzLlxuICAgICAqL1xuICAgIG9uU2Nyb2xsU3RhcnQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBzY3JvbGxpbmcgZW5kcyBvciBzdG9wcyB3aXRoIG5ldyBob3Jpem9udGFsXG4gICAgICogYW5kIHZlcnRpY2FsIHNjcm9sbCB2YWx1ZXMuXG4gICAgICovXG4gICAgb25TY3JvbGxFbmQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBgcm93SGVpZ2h0R2V0dGVyYCByZXR1cm5zIGEgZGlmZmVyZW50IGhlaWdodFxuICAgICAqIGZvciBhIHJvdyB0aGFuIHRoZSBgcm93SGVpZ2h0YCBwcm9wLiBUaGlzIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIGluaXRpYWxseVxuICAgICAqIHRhYmxlIGVzdGltYXRlcyBoZWlnaHRzIG9mIHNvbWUgcGFydHMgb2YgdGhlIGNvbnRlbnQuXG4gICAgICovXG4gICAgb25Db250ZW50SGVpZ2h0Q2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gYSByb3cgaXMgY2xpY2tlZC5cbiAgICAgKi9cbiAgICBvblJvd0NsaWNrOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gYSByb3cgaXMgZG91YmxlIGNsaWNrZWQuXG4gICAgICovXG4gICAgb25Sb3dEb3VibGVDbGljazogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIGEgbW91c2UtZG93biBldmVudCBoYXBwZW5zIG9uIGEgcm93LlxuICAgICAqL1xuICAgIG9uUm93TW91c2VEb3duOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gYSBtb3VzZS1lbnRlciBldmVudCBoYXBwZW5zIG9uIGEgcm93LlxuICAgICAqL1xuICAgIG9uUm93TW91c2VFbnRlcjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIGEgbW91c2UtbGVhdmUgZXZlbnQgaGFwcGVucyBvbiBhIHJvdy5cbiAgICAgKi9cbiAgICBvblJvd01vdXNlTGVhdmU6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiByZXNpemVyIGhhcyBiZWVuIHJlbGVhc2VkXG4gICAgICogYW5kIGNvbHVtbiBuZWVkcyB0byBiZSB1cGRhdGVkLlxuICAgICAqXG4gICAgICogUmVxdWlyZWQgaWYgdGhlIGlzUmVzaXphYmxlIHByb3BlcnR5IGlzIHRydWUgb24gYW55IGNvbHVtbi5cbiAgICAgKlxuICAgICAqIGBgYFxuICAgICAqIGZ1bmN0aW9uKFxuICAgICAqICAgbmV3Q29sdW1uV2lkdGg6IG51bWJlcixcbiAgICAgKiAgIGNvbHVtbktleTogc3RyaW5nLFxuICAgICAqIClcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBvbkNvbHVtblJlc2l6ZUVuZENhbGxiYWNrOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgYSBjb2x1bW4gaXMgY3VycmVudGx5IGJlaW5nIHJlc2l6ZWQuXG4gICAgICovXG4gICAgaXNDb2x1bW5SZXNpemluZzogUHJvcFR5cGVzLmJvb2xcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIC8qb2JqZWN0Ki97XG4gICAgcmV0dXJuIHtcbiAgICAgIGZvb3RlckhlaWdodDogMCxcbiAgICAgIGdyb3VwSGVhZGVySGVpZ2h0OiAwLFxuICAgICAgaGVhZGVySGVpZ2h0OiAwLFxuICAgICAgc2Nyb2xsTGVmdDogMCxcbiAgICAgIHNjcm9sbFRvcDogMFxuICAgIH07XG4gIH0sXG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSAvKm9iamVjdCove1xuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIHZpZXdwb3J0SGVpZ2h0ID0gKHByb3BzLmhlaWdodCA9PT0gdW5kZWZpbmVkID8gcHJvcHMubWF4SGVpZ2h0IDogcHJvcHMuaGVpZ2h0KSAtIChwcm9wcy5oZWFkZXJIZWlnaHQgfHwgMCkgLSAocHJvcHMuZm9vdGVySGVpZ2h0IHx8IDApIC0gKHByb3BzLmdyb3VwSGVhZGVySGVpZ2h0IHx8IDApO1xuICAgIHRoaXMuX3Njcm9sbEhlbHBlciA9IG5ldyBGaXhlZERhdGFUYWJsZVNjcm9sbEhlbHBlcihwcm9wcy5yb3dzQ291bnQsIHByb3BzLnJvd0hlaWdodCwgdmlld3BvcnRIZWlnaHQsIHByb3BzLnJvd0hlaWdodEdldHRlcik7XG4gICAgaWYgKHByb3BzLnNjcm9sbFRvcCkge1xuICAgICAgdGhpcy5fc2Nyb2xsSGVscGVyLnNjcm9sbFRvKHByb3BzLnNjcm9sbFRvcCk7XG4gICAgfVxuICAgIHRoaXMuX2RpZFNjcm9sbFN0b3AgPSBkZWJvdW5jZUNvcmUodGhpcy5fZGlkU2Nyb2xsU3RvcCwgMjAwLCB0aGlzKTtcblxuICAgIHJldHVybiB0aGlzLl9jYWxjdWxhdGVTdGF0ZSh0aGlzLnByb3BzKTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB2YXIgc2Nyb2xsVG9Sb3cgPSB0aGlzLnByb3BzLnNjcm9sbFRvUm93O1xuICAgIGlmIChzY3JvbGxUb1JvdyAhPT0gdW5kZWZpbmVkICYmIHNjcm9sbFRvUm93ICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9yb3dUb1Njcm9sbFRvID0gc2Nyb2xsVG9Sb3c7XG4gICAgfVxuICAgIHZhciBzY3JvbGxUb0NvbHVtbiA9IHRoaXMucHJvcHMuc2Nyb2xsVG9Db2x1bW47XG4gICAgaWYgKHNjcm9sbFRvQ29sdW1uICE9PSB1bmRlZmluZWQgJiYgc2Nyb2xsVG9Db2x1bW4gIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX2NvbHVtblRvU2Nyb2xsVG8gPSBzY3JvbGxUb0NvbHVtbjtcbiAgICB9XG4gICAgdGhpcy5fd2hlZWxIYW5kbGVyID0gbmV3IFJlYWN0V2hlZWxIYW5kbGVyKHRoaXMuX29uV2hlZWwsIHRoaXMuX3Nob3VsZEhhbmRsZVdoZWVsWCwgdGhpcy5fc2hvdWxkSGFuZGxlV2hlZWxZKTtcbiAgfSxcblxuICBfc2hvdWxkSGFuZGxlV2hlZWxYOiBmdW5jdGlvbiBfc2hvdWxkSGFuZGxlV2hlZWxYKCAvKm51bWJlciovZGVsdGEpIC8qYm9vbGVhbiove1xuICAgIGlmICh0aGlzLnByb3BzLm92ZXJmbG93WCA9PT0gJ2hpZGRlbicpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBkZWx0YSA9IE1hdGgucm91bmQoZGVsdGEpO1xuICAgIGlmIChkZWx0YSA9PT0gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBkZWx0YSA8IDAgJiYgdGhpcy5zdGF0ZS5zY3JvbGxYID4gMCB8fCBkZWx0YSA+PSAwICYmIHRoaXMuc3RhdGUuc2Nyb2xsWCA8IHRoaXMuc3RhdGUubWF4U2Nyb2xsWDtcbiAgfSxcblxuICBfc2hvdWxkSGFuZGxlV2hlZWxZOiBmdW5jdGlvbiBfc2hvdWxkSGFuZGxlV2hlZWxZKCAvKm51bWJlciovZGVsdGEpIC8qYm9vbGVhbiove1xuICAgIGlmICh0aGlzLnByb3BzLm92ZXJmbG93WSA9PT0gJ2hpZGRlbicgfHwgZGVsdGEgPT09IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBkZWx0YSA9IE1hdGgucm91bmQoZGVsdGEpO1xuICAgIGlmIChkZWx0YSA9PT0gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBkZWx0YSA8IDAgJiYgdGhpcy5zdGF0ZS5zY3JvbGxZID4gMCB8fCBkZWx0YSA+PSAwICYmIHRoaXMuc3RhdGUuc2Nyb2xsWSA8IHRoaXMuc3RhdGUubWF4U2Nyb2xsWTtcbiAgfSxcblxuICBfcmVwb3J0Q29udGVudEhlaWdodDogZnVuY3Rpb24gX3JlcG9ydENvbnRlbnRIZWlnaHQoKSB7XG4gICAgdmFyIHNjcm9sbENvbnRlbnRIZWlnaHQgPSB0aGlzLnN0YXRlLnNjcm9sbENvbnRlbnRIZWlnaHQ7XG4gICAgdmFyIHJlc2VydmVkSGVpZ2h0ID0gdGhpcy5zdGF0ZS5yZXNlcnZlZEhlaWdodDtcbiAgICB2YXIgcmVxdWlyZWRIZWlnaHQgPSBzY3JvbGxDb250ZW50SGVpZ2h0ICsgcmVzZXJ2ZWRIZWlnaHQ7XG4gICAgdmFyIGNvbnRlbnRIZWlnaHQ7XG4gICAgdmFyIHVzZU1heEhlaWdodCA9IHRoaXMucHJvcHMuaGVpZ2h0ID09PSB1bmRlZmluZWQ7XG4gICAgaWYgKHVzZU1heEhlaWdodCAmJiB0aGlzLnByb3BzLm1heEhlaWdodCA+IHJlcXVpcmVkSGVpZ2h0KSB7XG4gICAgICBjb250ZW50SGVpZ2h0ID0gcmVxdWlyZWRIZWlnaHQ7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmhlaWdodCA+IHJlcXVpcmVkSGVpZ2h0ICYmIHRoaXMucHJvcHMub3duZXJIZWlnaHQpIHtcbiAgICAgIGNvbnRlbnRIZWlnaHQgPSBNYXRoLm1heChyZXF1aXJlZEhlaWdodCwgdGhpcy5wcm9wcy5vd25lckhlaWdodCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRlbnRIZWlnaHQgPSB0aGlzLnN0YXRlLmhlaWdodCArIHRoaXMuc3RhdGUubWF4U2Nyb2xsWTtcbiAgICB9XG4gICAgaWYgKGNvbnRlbnRIZWlnaHQgIT09IHRoaXMuX2NvbnRlbnRIZWlnaHQgJiYgdGhpcy5wcm9wcy5vbkNvbnRlbnRIZWlnaHRDaGFuZ2UpIHtcbiAgICAgIHRoaXMucHJvcHMub25Db250ZW50SGVpZ2h0Q2hhbmdlKGNvbnRlbnRIZWlnaHQpO1xuICAgIH1cbiAgICB0aGlzLl9jb250ZW50SGVpZ2h0ID0gY29udGVudEhlaWdodDtcbiAgfSxcblxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5fcmVwb3J0Q29udGVudEhlaWdodCgpO1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoIC8qb2JqZWN0Ki9uZXh0UHJvcHMpIHtcbiAgICB2YXIgc2Nyb2xsVG9Sb3cgPSBuZXh0UHJvcHMuc2Nyb2xsVG9Sb3c7XG4gICAgaWYgKHNjcm9sbFRvUm93ICE9PSB1bmRlZmluZWQgJiYgc2Nyb2xsVG9Sb3cgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3Jvd1RvU2Nyb2xsVG8gPSBzY3JvbGxUb1JvdztcbiAgICB9XG4gICAgdmFyIHNjcm9sbFRvQ29sdW1uID0gbmV4dFByb3BzLnNjcm9sbFRvQ29sdW1uO1xuICAgIGlmIChzY3JvbGxUb0NvbHVtbiAhPT0gdW5kZWZpbmVkICYmIHNjcm9sbFRvQ29sdW1uICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9jb2x1bW5Ub1Njcm9sbFRvID0gc2Nyb2xsVG9Db2x1bW47XG4gICAgfVxuXG4gICAgdmFyIG5ld092ZXJmbG93WCA9IG5leHRQcm9wcy5vdmVyZmxvd1g7XG4gICAgdmFyIG5ld092ZXJmbG93WSA9IG5leHRQcm9wcy5vdmVyZmxvd1k7XG4gICAgaWYgKG5ld092ZXJmbG93WCAhPT0gdGhpcy5wcm9wcy5vdmVyZmxvd1ggfHwgbmV3T3ZlcmZsb3dZICE9PSB0aGlzLnByb3BzLm92ZXJmbG93WSkge1xuICAgICAgdGhpcy5fd2hlZWxIYW5kbGVyID0gbmV3IFJlYWN0V2hlZWxIYW5kbGVyKHRoaXMuX29uV2hlZWwsIG5ld092ZXJmbG93WCAhPT0gJ2hpZGRlbicsIC8vIFNob3VsZCBoYW5kbGUgaG9yaXpvbnRhbCBzY3JvbGxcbiAgICAgIG5ld092ZXJmbG93WSAhPT0gJ2hpZGRlbicgLy8gU2hvdWxkIGhhbmRsZSB2ZXJ0aWNhbCBzY3JvbGxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gSW4gdGhlIGNhc2Ugb2YgY29udHJvbGxlZCBzY3JvbGxpbmcsIG5vdGlmeS5cbiAgICBpZiAodGhpcy5wcm9wcy5vd25lckhlaWdodCAhPT0gbmV4dFByb3BzLm93bmVySGVpZ2h0IHx8IHRoaXMucHJvcHMuc2Nyb2xsVG9wICE9PSBuZXh0UHJvcHMuc2Nyb2xsVG9wKSB7XG4gICAgICB0aGlzLl9kaWRTY3JvbGxTdGFydCgpO1xuICAgIH1cbiAgICB0aGlzLl9kaWRTY3JvbGxTdG9wKCk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHRoaXMuX2NhbGN1bGF0ZVN0YXRlKG5leHRQcm9wcywgdGhpcy5zdGF0ZSkpO1xuICB9LFxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHRoaXMuX3JlcG9ydENvbnRlbnRIZWlnaHQoKTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIC8qb2JqZWN0Ki97XG4gICAgdmFyIHN0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuXG4gICAgdmFyIGdyb3VwSGVhZGVyO1xuICAgIGlmIChzdGF0ZS51c2VHcm91cEhlYWRlcikge1xuICAgICAgZ3JvdXBIZWFkZXIgPSBSZWFjdC5jcmVhdGVFbGVtZW50KEZpeGVkRGF0YVRhYmxlUm93LCB7XG4gICAgICAgIGtleTogJ2dyb3VwX2hlYWRlcicsXG4gICAgICAgIGlzU2Nyb2xsaW5nOiB0aGlzLl9pc1Njcm9sbGluZyxcbiAgICAgICAgY2xhc3NOYW1lOiBqb2luQ2xhc3NlcyhjeCgnZml4ZWREYXRhVGFibGVMYXlvdXQvaGVhZGVyJyksIGN4KCdwdWJsaWMvZml4ZWREYXRhVGFibGUvaGVhZGVyJykpLFxuICAgICAgICB3aWR0aDogc3RhdGUud2lkdGgsXG4gICAgICAgIGhlaWdodDogc3RhdGUuZ3JvdXBIZWFkZXJIZWlnaHQsXG4gICAgICAgIGluZGV4OiAwLFxuICAgICAgICB6SW5kZXg6IDEsXG4gICAgICAgIG9mZnNldFRvcDogMCxcbiAgICAgICAgc2Nyb2xsTGVmdDogc3RhdGUuc2Nyb2xsWCxcbiAgICAgICAgZml4ZWRDb2x1bW5zOiBzdGF0ZS5ncm91cEhlYWRlckZpeGVkQ29sdW1ucyxcbiAgICAgICAgc2Nyb2xsYWJsZUNvbHVtbnM6IHN0YXRlLmdyb3VwSGVhZGVyU2Nyb2xsYWJsZUNvbHVtbnMsXG4gICAgICAgIG9uQ29sdW1uUmVzaXplOiB0aGlzLl9vbkNvbHVtblJlc2l6ZVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFyIG1heFNjcm9sbFkgPSB0aGlzLnN0YXRlLm1heFNjcm9sbFk7XG4gICAgdmFyIHNob3dTY3JvbGxiYXJYID0gc3RhdGUubWF4U2Nyb2xsWCA+IDAgJiYgc3RhdGUub3ZlcmZsb3dYICE9PSAnaGlkZGVuJztcbiAgICB2YXIgc2hvd1Njcm9sbGJhclkgPSBtYXhTY3JvbGxZID4gMCAmJiBzdGF0ZS5vdmVyZmxvd1kgIT09ICdoaWRkZW4nO1xuICAgIHZhciBzY3JvbGxiYXJYSGVpZ2h0ID0gc2hvd1Njcm9sbGJhclggPyBTY3JvbGxiYXIuU0laRSA6IDA7XG4gICAgdmFyIHNjcm9sbGJhcllIZWlnaHQgPSBzdGF0ZS5oZWlnaHQgLSBzY3JvbGxiYXJYSGVpZ2h0IC0gMiAqIEJPUkRFUl9IRUlHSFQgLSBzdGF0ZS5mb290ZXJIZWlnaHQ7XG5cbiAgICB2YXIgaGVhZGVyT2Zmc2V0VG9wID0gc3RhdGUudXNlR3JvdXBIZWFkZXIgPyBzdGF0ZS5ncm91cEhlYWRlckhlaWdodCA6IDA7XG4gICAgdmFyIGJvZHlPZmZzZXRUb3AgPSBoZWFkZXJPZmZzZXRUb3AgKyBzdGF0ZS5oZWFkZXJIZWlnaHQ7XG4gICAgc2Nyb2xsYmFyWUhlaWdodCAtPSBib2R5T2Zmc2V0VG9wO1xuICAgIHZhciBib3R0b21TZWN0aW9uT2Zmc2V0ID0gMDtcbiAgICB2YXIgZm9vdE9mZnNldFRvcCA9IHByb3BzLm1heEhlaWdodCAhPSBudWxsID8gYm9keU9mZnNldFRvcCArIHN0YXRlLmJvZHlIZWlnaHQgOiBib2R5T2Zmc2V0VG9wICsgc2Nyb2xsYmFyWUhlaWdodDtcbiAgICB2YXIgcm93c0NvbnRhaW5lckhlaWdodCA9IGZvb3RPZmZzZXRUb3AgKyBzdGF0ZS5mb290ZXJIZWlnaHQ7XG5cbiAgICBpZiAocHJvcHMub3duZXJIZWlnaHQgIT09IHVuZGVmaW5lZCAmJiBwcm9wcy5vd25lckhlaWdodCA8IHN0YXRlLmhlaWdodCkge1xuICAgICAgYm90dG9tU2VjdGlvbk9mZnNldCA9IHByb3BzLm93bmVySGVpZ2h0IC0gc3RhdGUuaGVpZ2h0O1xuXG4gICAgICBmb290T2Zmc2V0VG9wID0gTWF0aC5taW4oZm9vdE9mZnNldFRvcCwgcHJvcHMub3duZXJIZWlnaHQgLSBzdGF0ZS5mb290ZXJIZWlnaHQgLSBzY3JvbGxiYXJYSGVpZ2h0KTtcblxuICAgICAgc2Nyb2xsYmFyWUhlaWdodCA9IE1hdGgubWF4KDAsIGZvb3RPZmZzZXRUb3AgLSBib2R5T2Zmc2V0VG9wKTtcbiAgICB9XG5cbiAgICB2YXIgdmVydGljYWxTY3JvbGxiYXI7XG4gICAgaWYgKHNob3dTY3JvbGxiYXJZKSB7XG4gICAgICB2ZXJ0aWNhbFNjcm9sbGJhciA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2Nyb2xsYmFyLCB7XG4gICAgICAgIHNpemU6IHNjcm9sbGJhcllIZWlnaHQsXG4gICAgICAgIGNvbnRlbnRTaXplOiBzY3JvbGxiYXJZSGVpZ2h0ICsgbWF4U2Nyb2xsWSxcbiAgICAgICAgb25TY3JvbGw6IHRoaXMuX29uVmVydGljYWxTY3JvbGwsXG4gICAgICAgIHZlcnRpY2FsVG9wOiBib2R5T2Zmc2V0VG9wLFxuICAgICAgICBwb3NpdGlvbjogc3RhdGUuc2Nyb2xsWVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFyIGhvcml6b250YWxTY3JvbGxiYXI7XG4gICAgaWYgKHNob3dTY3JvbGxiYXJYKSB7XG4gICAgICB2YXIgc2Nyb2xsYmFyWFdpZHRoID0gc3RhdGUud2lkdGg7XG4gICAgICBob3Jpem9udGFsU2Nyb2xsYmFyID0gUmVhY3QuY3JlYXRlRWxlbWVudChIb3Jpem9udGFsU2Nyb2xsYmFyLCB7XG4gICAgICAgIGNvbnRlbnRTaXplOiBzY3JvbGxiYXJYV2lkdGggKyBzdGF0ZS5tYXhTY3JvbGxYLFxuICAgICAgICBvZmZzZXQ6IGJvdHRvbVNlY3Rpb25PZmZzZXQsXG4gICAgICAgIG9uU2Nyb2xsOiB0aGlzLl9vbkhvcml6b250YWxTY3JvbGwsXG4gICAgICAgIHBvc2l0aW9uOiBzdGF0ZS5zY3JvbGxYLFxuICAgICAgICBzaXplOiBzY3JvbGxiYXJYV2lkdGhcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBkcmFnS25vYiA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoRml4ZWREYXRhVGFibGVDb2x1bW5SZXNpemVIYW5kbGUsIHtcbiAgICAgIGhlaWdodDogc3RhdGUuaGVpZ2h0LFxuICAgICAgaW5pdGlhbFdpZHRoOiBzdGF0ZS5jb2x1bW5SZXNpemluZ0RhdGEud2lkdGggfHwgMCxcbiAgICAgIG1pbldpZHRoOiBzdGF0ZS5jb2x1bW5SZXNpemluZ0RhdGEubWluV2lkdGggfHwgMCxcbiAgICAgIG1heFdpZHRoOiBzdGF0ZS5jb2x1bW5SZXNpemluZ0RhdGEubWF4V2lkdGggfHwgTnVtYmVyLk1BWF9WQUxVRSxcbiAgICAgIHZpc2libGU6ICEhc3RhdGUuaXNDb2x1bW5SZXNpemluZyxcbiAgICAgIGxlZnRPZmZzZXQ6IHN0YXRlLmNvbHVtblJlc2l6aW5nRGF0YS5sZWZ0IHx8IDAsXG4gICAgICBrbm9iSGVpZ2h0OiBzdGF0ZS5oZWFkZXJIZWlnaHQsXG4gICAgICBpbml0aWFsRXZlbnQ6IHN0YXRlLmNvbHVtblJlc2l6aW5nRGF0YS5pbml0aWFsRXZlbnQsXG4gICAgICBvbkNvbHVtblJlc2l6ZUVuZDogcHJvcHMub25Db2x1bW5SZXNpemVFbmRDYWxsYmFjayxcbiAgICAgIGNvbHVtbktleTogc3RhdGUuY29sdW1uUmVzaXppbmdEYXRhLmtleVxuICAgIH0pO1xuXG4gICAgdmFyIGZvb3RlciA9IG51bGw7XG4gICAgaWYgKHN0YXRlLmZvb3RlckhlaWdodCkge1xuICAgICAgZm9vdGVyID0gUmVhY3QuY3JlYXRlRWxlbWVudChGaXhlZERhdGFUYWJsZVJvdywge1xuICAgICAgICBrZXk6ICdmb290ZXInLFxuICAgICAgICBpc1Njcm9sbGluZzogdGhpcy5faXNTY3JvbGxpbmcsXG4gICAgICAgIGNsYXNzTmFtZTogam9pbkNsYXNzZXMoY3goJ2ZpeGVkRGF0YVRhYmxlTGF5b3V0L2Zvb3RlcicpLCBjeCgncHVibGljL2ZpeGVkRGF0YVRhYmxlL2Zvb3RlcicpKSxcbiAgICAgICAgd2lkdGg6IHN0YXRlLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IHN0YXRlLmZvb3RlckhlaWdodCxcbiAgICAgICAgaW5kZXg6IC0xLFxuICAgICAgICB6SW5kZXg6IDEsXG4gICAgICAgIG9mZnNldFRvcDogZm9vdE9mZnNldFRvcCxcbiAgICAgICAgZml4ZWRDb2x1bW5zOiBzdGF0ZS5mb290Rml4ZWRDb2x1bW5zLFxuICAgICAgICBzY3JvbGxhYmxlQ29sdW1uczogc3RhdGUuZm9vdFNjcm9sbGFibGVDb2x1bW5zLFxuICAgICAgICBzY3JvbGxMZWZ0OiBzdGF0ZS5zY3JvbGxYXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgcm93cyA9IHRoaXMuX3JlbmRlclJvd3MoYm9keU9mZnNldFRvcCk7XG5cbiAgICB2YXIgaGVhZGVyID0gUmVhY3QuY3JlYXRlRWxlbWVudChGaXhlZERhdGFUYWJsZVJvdywge1xuICAgICAga2V5OiAnaGVhZGVyJyxcbiAgICAgIGlzU2Nyb2xsaW5nOiB0aGlzLl9pc1Njcm9sbGluZyxcbiAgICAgIGNsYXNzTmFtZTogam9pbkNsYXNzZXMoY3goJ2ZpeGVkRGF0YVRhYmxlTGF5b3V0L2hlYWRlcicpLCBjeCgncHVibGljL2ZpeGVkRGF0YVRhYmxlL2hlYWRlcicpKSxcbiAgICAgIHdpZHRoOiBzdGF0ZS53aWR0aCxcbiAgICAgIGhlaWdodDogc3RhdGUuaGVhZGVySGVpZ2h0LFxuICAgICAgaW5kZXg6IC0xLFxuICAgICAgekluZGV4OiAxLFxuICAgICAgb2Zmc2V0VG9wOiBoZWFkZXJPZmZzZXRUb3AsXG4gICAgICBzY3JvbGxMZWZ0OiBzdGF0ZS5zY3JvbGxYLFxuICAgICAgZml4ZWRDb2x1bW5zOiBzdGF0ZS5oZWFkRml4ZWRDb2x1bW5zLFxuICAgICAgc2Nyb2xsYWJsZUNvbHVtbnM6IHN0YXRlLmhlYWRTY3JvbGxhYmxlQ29sdW1ucyxcbiAgICAgIG9uQ29sdW1uUmVzaXplOiB0aGlzLl9vbkNvbHVtblJlc2l6ZVxuICAgIH0pO1xuXG4gICAgdmFyIHRvcFNoYWRvdztcbiAgICB2YXIgYm90dG9tU2hhZG93O1xuICAgIGlmIChzdGF0ZS5zY3JvbGxZKSB7XG4gICAgICB0b3BTaGFkb3cgPSBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIGNsYXNzTmFtZTogam9pbkNsYXNzZXMoY3goJ2ZpeGVkRGF0YVRhYmxlTGF5b3V0L3RvcFNoYWRvdycpLCBjeCgncHVibGljL2ZpeGVkRGF0YVRhYmxlL3RvcFNoYWRvdycpKSxcbiAgICAgICAgc3R5bGU6IHsgdG9wOiBib2R5T2Zmc2V0VG9wIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZS5vd25lckhlaWdodCAhPSBudWxsICYmIHN0YXRlLm93bmVySGVpZ2h0IDwgc3RhdGUuaGVpZ2h0ICYmIHN0YXRlLnNjcm9sbENvbnRlbnRIZWlnaHQgKyBzdGF0ZS5yZXNlcnZlZEhlaWdodCA+IHN0YXRlLm93bmVySGVpZ2h0IHx8IHN0YXRlLnNjcm9sbFkgPCBtYXhTY3JvbGxZKSB7XG4gICAgICBib3R0b21TaGFkb3cgPSBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIGNsYXNzTmFtZTogam9pbkNsYXNzZXMoY3goJ2ZpeGVkRGF0YVRhYmxlTGF5b3V0L2JvdHRvbVNoYWRvdycpLCBjeCgncHVibGljL2ZpeGVkRGF0YVRhYmxlL2JvdHRvbVNoYWRvdycpKSxcbiAgICAgICAgc3R5bGU6IHsgdG9wOiBmb290T2Zmc2V0VG9wIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogam9pbkNsYXNzZXMoY3goJ2ZpeGVkRGF0YVRhYmxlTGF5b3V0L21haW4nKSwgY3goJ3B1YmxpYy9maXhlZERhdGFUYWJsZS9tYWluJykpLFxuICAgICAgICBvbldoZWVsOiB0aGlzLl93aGVlbEhhbmRsZXIub25XaGVlbCxcbiAgICAgICAgc3R5bGU6IHsgaGVpZ2h0OiBzdGF0ZS5oZWlnaHQsIHdpZHRoOiBzdGF0ZS53aWR0aCB9IH0sXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzTmFtZTogY3goJ2ZpeGVkRGF0YVRhYmxlTGF5b3V0L3Jvd3NDb250YWluZXInKSxcbiAgICAgICAgICBzdHlsZTogeyBoZWlnaHQ6IHJvd3NDb250YWluZXJIZWlnaHQsIHdpZHRoOiBzdGF0ZS53aWR0aCB9IH0sXG4gICAgICAgIGRyYWdLbm9iLFxuICAgICAgICBncm91cEhlYWRlcixcbiAgICAgICAgaGVhZGVyLFxuICAgICAgICByb3dzLFxuICAgICAgICBmb290ZXIsXG4gICAgICAgIHRvcFNoYWRvdyxcbiAgICAgICAgYm90dG9tU2hhZG93XG4gICAgICApLFxuICAgICAgdmVydGljYWxTY3JvbGxiYXIsXG4gICAgICBob3Jpem9udGFsU2Nyb2xsYmFyXG4gICAgKTtcbiAgfSxcblxuICBfcmVuZGVyUm93czogZnVuY3Rpb24gX3JlbmRlclJvd3MoIC8qbnVtYmVyKi9vZmZzZXRUb3ApIC8qb2JqZWN0Ki97XG4gICAgdmFyIHN0YXRlID0gdGhpcy5zdGF0ZTtcblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEZpeGVkRGF0YVRhYmxlQnVmZmVyZWRSb3dzLCB7XG4gICAgICBpc1Njcm9sbGluZzogdGhpcy5faXNTY3JvbGxpbmcsXG4gICAgICBkZWZhdWx0Um93SGVpZ2h0OiBzdGF0ZS5yb3dIZWlnaHQsXG4gICAgICBmaXJzdFJvd0luZGV4OiBzdGF0ZS5maXJzdFJvd0luZGV4LFxuICAgICAgZmlyc3RSb3dPZmZzZXQ6IHN0YXRlLmZpcnN0Um93T2Zmc2V0LFxuICAgICAgZml4ZWRDb2x1bW5zOiBzdGF0ZS5ib2R5Rml4ZWRDb2x1bW5zLFxuICAgICAgaGVpZ2h0OiBzdGF0ZS5ib2R5SGVpZ2h0LFxuICAgICAgb2Zmc2V0VG9wOiBvZmZzZXRUb3AsXG4gICAgICBvblJvd0NsaWNrOiBzdGF0ZS5vblJvd0NsaWNrLFxuICAgICAgb25Sb3dEb3VibGVDbGljazogc3RhdGUub25Sb3dEb3VibGVDbGljayxcbiAgICAgIG9uUm93TW91c2VEb3duOiBzdGF0ZS5vblJvd01vdXNlRG93bixcbiAgICAgIG9uUm93TW91c2VFbnRlcjogc3RhdGUub25Sb3dNb3VzZUVudGVyLFxuICAgICAgb25Sb3dNb3VzZUxlYXZlOiBzdGF0ZS5vblJvd01vdXNlTGVhdmUsXG4gICAgICByb3dDbGFzc05hbWVHZXR0ZXI6IHN0YXRlLnJvd0NsYXNzTmFtZUdldHRlcixcbiAgICAgIHJvd3NDb3VudDogc3RhdGUucm93c0NvdW50LFxuICAgICAgcm93R2V0dGVyOiBzdGF0ZS5yb3dHZXR0ZXIsXG4gICAgICByb3dIZWlnaHRHZXR0ZXI6IHN0YXRlLnJvd0hlaWdodEdldHRlcixcbiAgICAgIHNjcm9sbExlZnQ6IHN0YXRlLnNjcm9sbFgsXG4gICAgICBzY3JvbGxhYmxlQ29sdW1uczogc3RhdGUuYm9keVNjcm9sbGFibGVDb2x1bW5zLFxuICAgICAgc2hvd0xhc3RSb3dCb3JkZXI6IHRydWUsXG4gICAgICB3aWR0aDogc3RhdGUud2lkdGgsXG4gICAgICByb3dQb3NpdGlvbkdldHRlcjogdGhpcy5fc2Nyb2xsSGVscGVyLmdldFJvd1Bvc2l0aW9uXG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRoaXMgaXMgY2FsbGVkIHdoZW4gYSBjZWxsIHRoYXQgaXMgaW4gdGhlIGhlYWRlciBvZiBhIGNvbHVtbiBoYXMgaXRzXG4gICAqIHJlc2l6ZXIga25vYiBjbGlja2VkIG9uLiBJdCBkaXNwbGF5cyB0aGUgcmVzaXplciBhbmQgcHV0cyBpbiB0aGUgY29ycmVjdFxuICAgKiBsb2NhdGlvbiBvbiB0aGUgdGFibGUuXG4gICAqL1xuICBfb25Db2x1bW5SZXNpemU6IGZ1bmN0aW9uIF9vbkNvbHVtblJlc2l6ZShcbiAgLypudW1iZXIqL2NvbWJpbmVkV2lkdGgsXG4gIC8qbnVtYmVyKi9sZWZ0T2Zmc2V0LFxuICAvKm51bWJlciovY2VsbFdpZHRoLFxuICAvKj9udW1iZXIqL2NlbGxNaW5XaWR0aCxcbiAgLyo/bnVtYmVyKi9jZWxsTWF4V2lkdGgsXG4gIC8qbnVtYmVyfHN0cmluZyovY29sdW1uS2V5LFxuICAvKm9iamVjdCovZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzQ29sdW1uUmVzaXppbmc6IHRydWUsXG4gICAgICBjb2x1bW5SZXNpemluZ0RhdGE6IHtcbiAgICAgICAgbGVmdDogbGVmdE9mZnNldCArIGNvbWJpbmVkV2lkdGggLSBjZWxsV2lkdGgsXG4gICAgICAgIHdpZHRoOiBjZWxsV2lkdGgsXG4gICAgICAgIG1pbldpZHRoOiBjZWxsTWluV2lkdGgsXG4gICAgICAgIG1heFdpZHRoOiBjZWxsTWF4V2lkdGgsXG4gICAgICAgIGluaXRpYWxFdmVudDoge1xuICAgICAgICAgIGNsaWVudFg6IGV2ZW50LmNsaWVudFgsXG4gICAgICAgICAgY2xpZW50WTogZXZlbnQuY2xpZW50WSxcbiAgICAgICAgICBwcmV2ZW50RGVmYXVsdDogZW1wdHlGdW5jdGlvblxuICAgICAgICB9LFxuICAgICAgICBrZXk6IGNvbHVtbktleVxuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIF9hcmVDb2x1bW5TZXR0aW5nc0lkZW50aWNhbDogZnVuY3Rpb24gX2FyZUNvbHVtblNldHRpbmdzSWRlbnRpY2FsKG9sZENvbHVtbnMsIG5ld0NvbHVtbnMpIHtcbiAgICBpZiAob2xkQ29sdW1ucy5sZW5ndGggIT09IG5ld0NvbHVtbnMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBvbGRDb2x1bW5zLmxlbmd0aDsgKytpbmRleCkge1xuICAgICAgaWYgKCFzaGFsbG93RXF1YWwob2xkQ29sdW1uc1tpbmRleF0ucHJvcHMsIG5ld0NvbHVtbnNbaW5kZXhdLnByb3BzKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9LFxuXG4gIF9wb3B1bGF0ZUNvbHVtbnNBbmRDb2x1bW5EYXRhOiBmdW5jdGlvbiBfcG9wdWxhdGVDb2x1bW5zQW5kQ29sdW1uRGF0YShjb2x1bW5zLCBjb2x1bW5Hcm91cHMsIG9sZFN0YXRlKSB7XG4gICAgdmFyIGNhblJldXNlQ29sdW1uU2V0dGluZ3MgPSBmYWxzZTtcbiAgICB2YXIgY2FuUmV1c2VDb2x1bW5Hcm91cFNldHRpbmdzID0gZmFsc2U7XG5cbiAgICBpZiAob2xkU3RhdGUgJiYgb2xkU3RhdGUuY29sdW1ucykge1xuICAgICAgY2FuUmV1c2VDb2x1bW5TZXR0aW5ncyA9IHRoaXMuX2FyZUNvbHVtblNldHRpbmdzSWRlbnRpY2FsKGNvbHVtbnMsIG9sZFN0YXRlLmNvbHVtbnMpO1xuICAgIH1cbiAgICBpZiAob2xkU3RhdGUgJiYgb2xkU3RhdGUuY29sdW1uR3JvdXBzICYmIGNvbHVtbkdyb3Vwcykge1xuICAgICAgY2FuUmV1c2VDb2x1bW5Hcm91cFNldHRpbmdzID0gdGhpcy5fYXJlQ29sdW1uU2V0dGluZ3NJZGVudGljYWwoY29sdW1uR3JvdXBzLCBvbGRTdGF0ZS5jb2x1bW5Hcm91cHMpO1xuICAgIH1cblxuICAgIHZhciBjb2x1bW5JbmZvID0ge307XG4gICAgaWYgKGNhblJldXNlQ29sdW1uU2V0dGluZ3MpIHtcbiAgICAgIGNvbHVtbkluZm8uYm9keUZpeGVkQ29sdW1ucyA9IG9sZFN0YXRlLmJvZHlGaXhlZENvbHVtbnM7XG4gICAgICBjb2x1bW5JbmZvLmJvZHlTY3JvbGxhYmxlQ29sdW1ucyA9IG9sZFN0YXRlLmJvZHlTY3JvbGxhYmxlQ29sdW1ucztcbiAgICAgIGNvbHVtbkluZm8uaGVhZEZpeGVkQ29sdW1ucyA9IG9sZFN0YXRlLmhlYWRGaXhlZENvbHVtbnM7XG4gICAgICBjb2x1bW5JbmZvLmhlYWRTY3JvbGxhYmxlQ29sdW1ucyA9IG9sZFN0YXRlLmhlYWRTY3JvbGxhYmxlQ29sdW1ucztcbiAgICAgIGNvbHVtbkluZm8uZm9vdEZpeGVkQ29sdW1ucyA9IG9sZFN0YXRlLmZvb3RGaXhlZENvbHVtbnM7XG4gICAgICBjb2x1bW5JbmZvLmZvb3RTY3JvbGxhYmxlQ29sdW1ucyA9IG9sZFN0YXRlLmZvb3RTY3JvbGxhYmxlQ29sdW1ucztcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGJvZHlDb2x1bW5UeXBlcyA9IHRoaXMuX3NwbGl0Q29sdW1uVHlwZXMoY29sdW1ucyk7XG4gICAgICBjb2x1bW5JbmZvLmJvZHlGaXhlZENvbHVtbnMgPSBib2R5Q29sdW1uVHlwZXMuZml4ZWQ7XG4gICAgICBjb2x1bW5JbmZvLmJvZHlTY3JvbGxhYmxlQ29sdW1ucyA9IGJvZHlDb2x1bW5UeXBlcy5zY3JvbGxhYmxlO1xuXG4gICAgICB2YXIgaGVhZENvbHVtblR5cGVzID0gdGhpcy5fc3BsaXRDb2x1bW5UeXBlcyh0aGlzLl9zZWxlY3RDb2x1bW5FbGVtZW50KEhFQURFUiwgY29sdW1ucykpO1xuICAgICAgY29sdW1uSW5mby5oZWFkRml4ZWRDb2x1bW5zID0gaGVhZENvbHVtblR5cGVzLmZpeGVkO1xuICAgICAgY29sdW1uSW5mby5oZWFkU2Nyb2xsYWJsZUNvbHVtbnMgPSBoZWFkQ29sdW1uVHlwZXMuc2Nyb2xsYWJsZTtcblxuICAgICAgdmFyIGZvb3RDb2x1bW5UeXBlcyA9IHRoaXMuX3NwbGl0Q29sdW1uVHlwZXModGhpcy5fc2VsZWN0Q29sdW1uRWxlbWVudChGT09URVIsIGNvbHVtbnMpKTtcbiAgICAgIGNvbHVtbkluZm8uZm9vdEZpeGVkQ29sdW1ucyA9IGZvb3RDb2x1bW5UeXBlcy5maXhlZDtcbiAgICAgIGNvbHVtbkluZm8uZm9vdFNjcm9sbGFibGVDb2x1bW5zID0gZm9vdENvbHVtblR5cGVzLnNjcm9sbGFibGU7XG4gICAgfVxuXG4gICAgaWYgKGNhblJldXNlQ29sdW1uR3JvdXBTZXR0aW5ncykge1xuICAgICAgY29sdW1uSW5mby5ncm91cEhlYWRlckZpeGVkQ29sdW1ucyA9IG9sZFN0YXRlLmdyb3VwSGVhZGVyRml4ZWRDb2x1bW5zO1xuICAgICAgY29sdW1uSW5mby5ncm91cEhlYWRlclNjcm9sbGFibGVDb2x1bW5zID0gb2xkU3RhdGUuZ3JvdXBIZWFkZXJTY3JvbGxhYmxlQ29sdW1ucztcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGNvbHVtbkdyb3Vwcykge1xuICAgICAgICB2YXIgZ3JvdXBIZWFkZXJDb2x1bW5UeXBlcyA9IHRoaXMuX3NwbGl0Q29sdW1uVHlwZXModGhpcy5fc2VsZWN0Q29sdW1uRWxlbWVudChIRUFERVIsIGNvbHVtbkdyb3VwcykpO1xuICAgICAgICBjb2x1bW5JbmZvLmdyb3VwSGVhZGVyRml4ZWRDb2x1bW5zID0gZ3JvdXBIZWFkZXJDb2x1bW5UeXBlcy5maXhlZDtcbiAgICAgICAgY29sdW1uSW5mby5ncm91cEhlYWRlclNjcm9sbGFibGVDb2x1bW5zID0gZ3JvdXBIZWFkZXJDb2x1bW5UeXBlcy5zY3JvbGxhYmxlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb2x1bW5JbmZvO1xuICB9LFxuXG4gIF9jYWxjdWxhdGVTdGF0ZTogZnVuY3Rpb24gX2NhbGN1bGF0ZVN0YXRlKCAvKm9iamVjdCovcHJvcHMsIC8qP29iamVjdCovb2xkU3RhdGUpIC8qb2JqZWN0Ki97XG4gICAgaW52YXJpYW50KHByb3BzLmhlaWdodCAhPT0gdW5kZWZpbmVkIHx8IHByb3BzLm1heEhlaWdodCAhPT0gdW5kZWZpbmVkLCAnWW91IG11c3Qgc2V0IGVpdGhlciBhIGhlaWdodCBvciBhIG1heEhlaWdodCcpO1xuXG4gICAgdmFyIGNoaWxkcmVuID0gW107XG4gICAgUmVhY3RDaGlsZHJlbi5mb3JFYWNoKHByb3BzLmNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQsIGluZGV4KSB7XG4gICAgICBpZiAoY2hpbGQgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpbnZhcmlhbnQoY2hpbGQudHlwZS5fX1RhYmxlQ29sdW1uR3JvdXBfXyB8fCBjaGlsZC50eXBlLl9fVGFibGVDb2x1bW5fXywgJ2NoaWxkIHR5cGUgc2hvdWxkIGJlIDxGaXhlZERhdGFUYWJsZUNvbHVtbiAvPiBvciAnICsgJzxGaXhlZERhdGFUYWJsZUNvbHVtbkdyb3VwIC8+Jyk7XG4gICAgICBjaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICB9KTtcblxuICAgIHZhciB1c2VHcm91cEhlYWRlciA9IGZhbHNlO1xuICAgIGlmIChjaGlsZHJlbi5sZW5ndGggJiYgY2hpbGRyZW5bMF0udHlwZS5fX1RhYmxlQ29sdW1uR3JvdXBfXykge1xuICAgICAgdXNlR3JvdXBIZWFkZXIgPSB0cnVlO1xuICAgIH1cblxuICAgIHZhciBmaXJzdFJvd0luZGV4ID0gb2xkU3RhdGUgJiYgb2xkU3RhdGUuZmlyc3RSb3dJbmRleCB8fCAwO1xuICAgIHZhciBmaXJzdFJvd09mZnNldCA9IG9sZFN0YXRlICYmIG9sZFN0YXRlLmZpcnN0Um93T2Zmc2V0IHx8IDA7XG4gICAgdmFyIHNjcm9sbFgsIHNjcm9sbFk7XG4gICAgaWYgKG9sZFN0YXRlICYmIHByb3BzLm92ZXJmbG93WCAhPT0gJ2hpZGRlbicpIHtcbiAgICAgIHNjcm9sbFggPSBvbGRTdGF0ZS5zY3JvbGxYO1xuICAgIH0gZWxzZSB7XG4gICAgICBzY3JvbGxYID0gcHJvcHMuc2Nyb2xsTGVmdDtcbiAgICB9XG4gICAgaWYgKG9sZFN0YXRlICYmIHByb3BzLm92ZXJmbG93WSAhPT0gJ2hpZGRlbicpIHtcbiAgICAgIHNjcm9sbFkgPSBvbGRTdGF0ZS5zY3JvbGxZO1xuICAgIH0gZWxzZSB7XG4gICAgICBzY3JvbGxTdGF0ZSA9IHRoaXMuX3Njcm9sbEhlbHBlci5zY3JvbGxUbyhwcm9wcy5zY3JvbGxUb3ApO1xuICAgICAgZmlyc3RSb3dJbmRleCA9IHNjcm9sbFN0YXRlLmluZGV4O1xuICAgICAgZmlyc3RSb3dPZmZzZXQgPSBzY3JvbGxTdGF0ZS5vZmZzZXQ7XG4gICAgICBzY3JvbGxZID0gc2Nyb2xsU3RhdGUucG9zaXRpb247XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3Jvd1RvU2Nyb2xsVG8gIT09IHVuZGVmaW5lZCkge1xuICAgICAgc2Nyb2xsU3RhdGUgPSB0aGlzLl9zY3JvbGxIZWxwZXIuc2Nyb2xsUm93SW50b1ZpZXcodGhpcy5fcm93VG9TY3JvbGxUbyk7XG4gICAgICBmaXJzdFJvd0luZGV4ID0gc2Nyb2xsU3RhdGUuaW5kZXg7XG4gICAgICBmaXJzdFJvd09mZnNldCA9IHNjcm9sbFN0YXRlLm9mZnNldDtcbiAgICAgIHNjcm9sbFkgPSBzY3JvbGxTdGF0ZS5wb3NpdGlvbjtcbiAgICAgIGRlbGV0ZSB0aGlzLl9yb3dUb1Njcm9sbFRvO1xuICAgIH1cblxuICAgIHZhciBncm91cEhlYWRlckhlaWdodCA9IHVzZUdyb3VwSGVhZGVyID8gcHJvcHMuZ3JvdXBIZWFkZXJIZWlnaHQgOiAwO1xuXG4gICAgaWYgKG9sZFN0YXRlICYmIHByb3BzLnJvd3NDb3VudCAhPT0gb2xkU3RhdGUucm93c0NvdW50KSB7XG4gICAgICAvLyBOdW1iZXIgb2Ygcm93cyBjaGFuZ2VkLCB0cnkgdG8gc2Nyb2xsIHRvIHRoZSByb3cgZnJvbSBiZWZvcmUgdGhlXG4gICAgICAvLyBjaGFuZ2VcbiAgICAgIHZhciB2aWV3cG9ydEhlaWdodCA9IChwcm9wcy5oZWlnaHQgPT09IHVuZGVmaW5lZCA/IHByb3BzLm1heEhlaWdodCA6IHByb3BzLmhlaWdodCkgLSAocHJvcHMuaGVhZGVySGVpZ2h0IHx8IDApIC0gKHByb3BzLmZvb3RlckhlaWdodCB8fCAwKSAtIChwcm9wcy5ncm91cEhlYWRlckhlaWdodCB8fCAwKTtcbiAgICAgIHRoaXMuX3Njcm9sbEhlbHBlciA9IG5ldyBGaXhlZERhdGFUYWJsZVNjcm9sbEhlbHBlcihwcm9wcy5yb3dzQ291bnQsIHByb3BzLnJvd0hlaWdodCwgdmlld3BvcnRIZWlnaHQsIHByb3BzLnJvd0hlaWdodEdldHRlcik7XG4gICAgICB2YXIgc2Nyb2xsU3RhdGUgPSB0aGlzLl9zY3JvbGxIZWxwZXIuc2Nyb2xsVG9Sb3coZmlyc3RSb3dJbmRleCwgZmlyc3RSb3dPZmZzZXQpO1xuICAgICAgZmlyc3RSb3dJbmRleCA9IHNjcm9sbFN0YXRlLmluZGV4O1xuICAgICAgZmlyc3RSb3dPZmZzZXQgPSBzY3JvbGxTdGF0ZS5vZmZzZXQ7XG4gICAgICBzY3JvbGxZID0gc2Nyb2xsU3RhdGUucG9zaXRpb247XG4gICAgfSBlbHNlIGlmIChvbGRTdGF0ZSAmJiBwcm9wcy5yb3dIZWlnaHRHZXR0ZXIgIT09IG9sZFN0YXRlLnJvd0hlaWdodEdldHRlcikge1xuICAgICAgdGhpcy5fc2Nyb2xsSGVscGVyLnNldFJvd0hlaWdodEdldHRlcihwcm9wcy5yb3dIZWlnaHRHZXR0ZXIpO1xuICAgIH1cblxuICAgIHZhciBjb2x1bW5SZXNpemluZ0RhdGE7XG4gICAgaWYgKHByb3BzLmlzQ29sdW1uUmVzaXppbmcpIHtcbiAgICAgIGNvbHVtblJlc2l6aW5nRGF0YSA9IG9sZFN0YXRlICYmIG9sZFN0YXRlLmNvbHVtblJlc2l6aW5nRGF0YTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29sdW1uUmVzaXppbmdEYXRhID0gRU1QVFlfT0JKRUNUO1xuICAgIH1cblxuICAgIHZhciBjb2x1bW5zO1xuICAgIHZhciBjb2x1bW5Hcm91cHM7XG5cbiAgICBpZiAodXNlR3JvdXBIZWFkZXIpIHtcbiAgICAgIHZhciBjb2x1bW5Hcm91cFNldHRpbmdzID0gRml4ZWREYXRhVGFibGVXaWR0aEhlbHBlci5hZGp1c3RDb2x1bW5Hcm91cFdpZHRocyhjaGlsZHJlbiwgcHJvcHMud2lkdGgpO1xuICAgICAgY29sdW1ucyA9IGNvbHVtbkdyb3VwU2V0dGluZ3MuY29sdW1ucztcbiAgICAgIGNvbHVtbkdyb3VwcyA9IGNvbHVtbkdyb3VwU2V0dGluZ3MuY29sdW1uR3JvdXBzO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb2x1bW5zID0gRml4ZWREYXRhVGFibGVXaWR0aEhlbHBlci5hZGp1c3RDb2x1bW5XaWR0aHMoY2hpbGRyZW4sIHByb3BzLndpZHRoKTtcbiAgICB9XG5cbiAgICB2YXIgY29sdW1uSW5mbyA9IHRoaXMuX3BvcHVsYXRlQ29sdW1uc0FuZENvbHVtbkRhdGEoY29sdW1ucywgY29sdW1uR3JvdXBzLCBvbGRTdGF0ZSk7XG5cbiAgICBpZiAodGhpcy5fY29sdW1uVG9TY3JvbGxUbyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBJZiBzZWxlY3RlZCBjb2x1bW4gaXMgYSBmaXhlZCBjb2x1bW4sIGRvbid0IHNjcm9sbFxuICAgICAgdmFyIGZpeGVkQ29sdW1uc0NvdW50ID0gY29sdW1uSW5mby5ib2R5Rml4ZWRDb2x1bW5zLmxlbmd0aDtcbiAgICAgIGlmICh0aGlzLl9jb2x1bW5Ub1Njcm9sbFRvID49IGZpeGVkQ29sdW1uc0NvdW50KSB7XG4gICAgICAgIHZhciB0b3RhbEZpeGVkQ29sdW1uc1dpZHRoID0gMDtcbiAgICAgICAgdmFyIGksIGNvbHVtbjtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGNvbHVtbkluZm8uYm9keUZpeGVkQ29sdW1ucy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgIGNvbHVtbiA9IGNvbHVtbkluZm8uYm9keUZpeGVkQ29sdW1uc1tpXTtcbiAgICAgICAgICB0b3RhbEZpeGVkQ29sdW1uc1dpZHRoICs9IGNvbHVtbi5wcm9wcy53aWR0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzY3JvbGxhYmxlQ29sdW1uSW5kZXggPSBNYXRoLm1pbih0aGlzLl9jb2x1bW5Ub1Njcm9sbFRvIC0gZml4ZWRDb2x1bW5zQ291bnQsIGNvbHVtbkluZm8uYm9keVNjcm9sbGFibGVDb2x1bW5zLmxlbmd0aCAtIDEpO1xuXG4gICAgICAgIHZhciBwcmV2aW91c0NvbHVtbnNXaWR0aCA9IDA7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBzY3JvbGxhYmxlQ29sdW1uSW5kZXg7ICsraSkge1xuICAgICAgICAgIGNvbHVtbiA9IGNvbHVtbkluZm8uYm9keVNjcm9sbGFibGVDb2x1bW5zW2ldO1xuICAgICAgICAgIHByZXZpb3VzQ29sdW1uc1dpZHRoICs9IGNvbHVtbi5wcm9wcy53aWR0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBhdmFpbGFibGVTY3JvbGxXaWR0aCA9IHByb3BzLndpZHRoIC0gdG90YWxGaXhlZENvbHVtbnNXaWR0aDtcbiAgICAgICAgdmFyIHNlbGVjdGVkQ29sdW1uV2lkdGggPSBjb2x1bW5JbmZvLmJvZHlTY3JvbGxhYmxlQ29sdW1uc1tzY3JvbGxhYmxlQ29sdW1uSW5kZXhdLnByb3BzLndpZHRoO1xuICAgICAgICB2YXIgbWluQWNjZXB0YWJsZVNjcm9sbFBvc2l0aW9uID0gcHJldmlvdXNDb2x1bW5zV2lkdGggKyBzZWxlY3RlZENvbHVtbldpZHRoIC0gYXZhaWxhYmxlU2Nyb2xsV2lkdGg7XG5cbiAgICAgICAgaWYgKHNjcm9sbFggPCBtaW5BY2NlcHRhYmxlU2Nyb2xsUG9zaXRpb24pIHtcbiAgICAgICAgICBzY3JvbGxYID0gbWluQWNjZXB0YWJsZVNjcm9sbFBvc2l0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNjcm9sbFggPiBwcmV2aW91c0NvbHVtbnNXaWR0aCkge1xuICAgICAgICAgIHNjcm9sbFggPSBwcmV2aW91c0NvbHVtbnNXaWR0aDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZGVsZXRlIHRoaXMuX2NvbHVtblRvU2Nyb2xsVG87XG4gICAgfVxuXG4gICAgdmFyIHVzZU1heEhlaWdodCA9IHByb3BzLmhlaWdodCA9PT0gdW5kZWZpbmVkO1xuICAgIHZhciBoZWlnaHQgPSBNYXRoLnJvdW5kKHVzZU1heEhlaWdodCA/IHByb3BzLm1heEhlaWdodCA6IHByb3BzLmhlaWdodCk7XG4gICAgdmFyIHRvdGFsSGVpZ2h0UmVzZXJ2ZWQgPSBwcm9wcy5mb290ZXJIZWlnaHQgKyBwcm9wcy5oZWFkZXJIZWlnaHQgKyBncm91cEhlYWRlckhlaWdodCArIDIgKiBCT1JERVJfSEVJR0hUO1xuICAgIHZhciBib2R5SGVpZ2h0ID0gaGVpZ2h0IC0gdG90YWxIZWlnaHRSZXNlcnZlZDtcbiAgICB2YXIgc2Nyb2xsQ29udGVudEhlaWdodCA9IHRoaXMuX3Njcm9sbEhlbHBlci5nZXRDb250ZW50SGVpZ2h0KCk7XG4gICAgdmFyIHRvdGFsSGVpZ2h0TmVlZGVkID0gc2Nyb2xsQ29udGVudEhlaWdodCArIHRvdGFsSGVpZ2h0UmVzZXJ2ZWQ7XG4gICAgdmFyIHNjcm9sbENvbnRlbnRXaWR0aCA9IEZpeGVkRGF0YVRhYmxlV2lkdGhIZWxwZXIuZ2V0VG90YWxXaWR0aChjb2x1bW5zKTtcblxuICAgIHZhciBob3Jpem9udGFsU2Nyb2xsYmFyVmlzaWJsZSA9IHNjcm9sbENvbnRlbnRXaWR0aCA+IHByb3BzLndpZHRoICYmIHByb3BzLm92ZXJmbG93WCAhPT0gJ2hpZGRlbic7XG5cbiAgICBpZiAoaG9yaXpvbnRhbFNjcm9sbGJhclZpc2libGUpIHtcbiAgICAgIGJvZHlIZWlnaHQgLT0gU2Nyb2xsYmFyLlNJWkU7XG4gICAgICB0b3RhbEhlaWdodE5lZWRlZCArPSBTY3JvbGxiYXIuU0laRTtcbiAgICAgIHRvdGFsSGVpZ2h0UmVzZXJ2ZWQgKz0gU2Nyb2xsYmFyLlNJWkU7XG4gICAgfVxuXG4gICAgdmFyIG1heFNjcm9sbFggPSBNYXRoLm1heCgwLCBzY3JvbGxDb250ZW50V2lkdGggLSBwcm9wcy53aWR0aCk7XG4gICAgdmFyIG1heFNjcm9sbFkgPSBNYXRoLm1heCgwLCBzY3JvbGxDb250ZW50SGVpZ2h0IC0gYm9keUhlaWdodCk7XG4gICAgc2Nyb2xsWCA9IE1hdGgubWluKHNjcm9sbFgsIG1heFNjcm9sbFgpO1xuICAgIHNjcm9sbFkgPSBNYXRoLm1pbihzY3JvbGxZLCBtYXhTY3JvbGxZKTtcblxuICAgIGlmICghbWF4U2Nyb2xsWSkge1xuICAgICAgLy8gbm8gdmVydGljYWwgc2Nyb2xsYmFyIG5lY2Vzc2FyeSwgdXNlIHRoZSB0b3RhbHMgd2UgdHJhY2tlZCBzbyB3ZVxuICAgICAgLy8gY2FuIHNocmluay10by1maXQgdmVydGljYWxseVxuICAgICAgaWYgKHVzZU1heEhlaWdodCkge1xuICAgICAgICBoZWlnaHQgPSB0b3RhbEhlaWdodE5lZWRlZDtcbiAgICAgIH1cbiAgICAgIGJvZHlIZWlnaHQgPSB0b3RhbEhlaWdodE5lZWRlZCAtIHRvdGFsSGVpZ2h0UmVzZXJ2ZWQ7XG4gICAgfVxuXG4gICAgdGhpcy5fc2Nyb2xsSGVscGVyLnNldFZpZXdwb3J0SGVpZ2h0KGJvZHlIZWlnaHQpO1xuXG4gICAgLy8gVGhlIG9yZGVyIG9mIGVsZW1lbnRzIGluIHRoaXMgb2JqZWN0IG1ldHRlcnMgYW5kIGJyaW5naW5nIGJvZHlIZWlnaHQsXG4gICAgLy8gaGVpZ2h0IG9yIHVzZUdyb3VwSGVhZGVyIHRvIHRoZSB0b3AgY2FuIGJyZWFrIHZhcmlvdXMgZmVhdHVyZXNcbiAgICB2YXIgbmV3U3RhdGUgPSBfZXh0ZW5kcyh7XG4gICAgICBpc0NvbHVtblJlc2l6aW5nOiBvbGRTdGF0ZSAmJiBvbGRTdGF0ZS5pc0NvbHVtblJlc2l6aW5nXG4gICAgfSwgY29sdW1uSW5mbywgcHJvcHMsIHtcblxuICAgICAgY29sdW1uczogY29sdW1ucyxcbiAgICAgIGNvbHVtbkdyb3VwczogY29sdW1uR3JvdXBzLFxuICAgICAgY29sdW1uUmVzaXppbmdEYXRhOiBjb2x1bW5SZXNpemluZ0RhdGEsXG4gICAgICBmaXJzdFJvd0luZGV4OiBmaXJzdFJvd0luZGV4LFxuICAgICAgZmlyc3RSb3dPZmZzZXQ6IGZpcnN0Um93T2Zmc2V0LFxuICAgICAgaG9yaXpvbnRhbFNjcm9sbGJhclZpc2libGU6IGhvcml6b250YWxTY3JvbGxiYXJWaXNpYmxlLFxuICAgICAgbWF4U2Nyb2xsWDogbWF4U2Nyb2xsWCxcbiAgICAgIG1heFNjcm9sbFk6IG1heFNjcm9sbFksXG4gICAgICByZXNlcnZlZEhlaWdodDogdG90YWxIZWlnaHRSZXNlcnZlZCxcbiAgICAgIHNjcm9sbENvbnRlbnRIZWlnaHQ6IHNjcm9sbENvbnRlbnRIZWlnaHQsXG4gICAgICBzY3JvbGxYOiBzY3JvbGxYLFxuICAgICAgc2Nyb2xsWTogc2Nyb2xsWSxcblxuICAgICAgLy8gVGhlc2UgcHJvcGVydGllcyBtYXkgb3ZlcndyaXRlIHByb3BlcnRpZXMgZGVmaW5lZCBpblxuICAgICAgLy8gY29sdW1uSW5mbyBhbmQgcHJvcHNcbiAgICAgIGJvZHlIZWlnaHQ6IGJvZHlIZWlnaHQsXG4gICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgIGdyb3VwSGVhZGVySGVpZ2h0OiBncm91cEhlYWRlckhlaWdodCxcbiAgICAgIHVzZUdyb3VwSGVhZGVyOiB1c2VHcm91cEhlYWRlclxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5ld1N0YXRlO1xuICB9LFxuXG4gIF9zZWxlY3RDb2x1bW5FbGVtZW50OiBmdW5jdGlvbiBfc2VsZWN0Q29sdW1uRWxlbWVudCggLypzdHJpbmcqL3R5cGUsIC8qYXJyYXkqL2NvbHVtbnMpIC8qYXJyYXkqL3tcbiAgICB2YXIgbmV3Q29sdW1ucyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29sdW1ucy5sZW5ndGg7ICsraSkge1xuICAgICAgdmFyIGNvbHVtbiA9IGNvbHVtbnNbaV07XG4gICAgICBuZXdDb2x1bW5zLnB1c2goUmVhY3QuY2xvbmVFbGVtZW50KGNvbHVtbiwge1xuICAgICAgICBjZWxsOiB0eXBlID8gY29sdW1uLnByb3BzW3R5cGVdIDogY29sdW1uLnByb3BzW0NFTExdXG4gICAgICB9KSk7XG4gICAgfVxuICAgIHJldHVybiBuZXdDb2x1bW5zO1xuICB9LFxuXG4gIF9zcGxpdENvbHVtblR5cGVzOiBmdW5jdGlvbiBfc3BsaXRDb2x1bW5UeXBlcyggLyphcnJheSovY29sdW1ucykgLypvYmplY3QqL3tcbiAgICB2YXIgZml4ZWRDb2x1bW5zID0gW107XG4gICAgdmFyIHNjcm9sbGFibGVDb2x1bW5zID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb2x1bW5zLmxlbmd0aDsgKytpKSB7XG4gICAgICBpZiAoY29sdW1uc1tpXS5wcm9wcy5maXhlZCkge1xuICAgICAgICBmaXhlZENvbHVtbnMucHVzaChjb2x1bW5zW2ldKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNjcm9sbGFibGVDb2x1bW5zLnB1c2goY29sdW1uc1tpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBmaXhlZDogZml4ZWRDb2x1bW5zLFxuICAgICAgc2Nyb2xsYWJsZTogc2Nyb2xsYWJsZUNvbHVtbnNcbiAgICB9O1xuICB9LFxuXG4gIF9vbldoZWVsOiBmdW5jdGlvbiBfb25XaGVlbCggLypudW1iZXIqL2RlbHRhWCwgLypudW1iZXIqL2RlbHRhWSkge1xuICAgIGlmICh0aGlzLmlzTW91bnRlZCgpKSB7XG4gICAgICBpZiAoIXRoaXMuX2lzU2Nyb2xsaW5nKSB7XG4gICAgICAgIHRoaXMuX2RpZFNjcm9sbFN0YXJ0KCk7XG4gICAgICB9XG4gICAgICB2YXIgeCA9IHRoaXMuc3RhdGUuc2Nyb2xsWDtcbiAgICAgIGlmIChNYXRoLmFicyhkZWx0YVkpID4gTWF0aC5hYnMoZGVsdGFYKSAmJiB0aGlzLnByb3BzLm92ZXJmbG93WSAhPT0gJ2hpZGRlbicpIHtcbiAgICAgICAgdmFyIHNjcm9sbFN0YXRlID0gdGhpcy5fc2Nyb2xsSGVscGVyLnNjcm9sbEJ5KE1hdGgucm91bmQoZGVsdGFZKSk7XG4gICAgICAgIHZhciBtYXhTY3JvbGxZID0gTWF0aC5tYXgoMCwgc2Nyb2xsU3RhdGUuY29udGVudEhlaWdodCAtIHRoaXMuc3RhdGUuYm9keUhlaWdodCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGZpcnN0Um93SW5kZXg6IHNjcm9sbFN0YXRlLmluZGV4LFxuICAgICAgICAgIGZpcnN0Um93T2Zmc2V0OiBzY3JvbGxTdGF0ZS5vZmZzZXQsXG4gICAgICAgICAgc2Nyb2xsWTogc2Nyb2xsU3RhdGUucG9zaXRpb24sXG4gICAgICAgICAgc2Nyb2xsQ29udGVudEhlaWdodDogc2Nyb2xsU3RhdGUuY29udGVudEhlaWdodCxcbiAgICAgICAgICBtYXhTY3JvbGxZOiBtYXhTY3JvbGxZXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChkZWx0YVggJiYgdGhpcy5wcm9wcy5vdmVyZmxvd1ggIT09ICdoaWRkZW4nKSB7XG4gICAgICAgIHggKz0gZGVsdGFYO1xuICAgICAgICB4ID0geCA8IDAgPyAwIDogeDtcbiAgICAgICAgeCA9IHggPiB0aGlzLnN0YXRlLm1heFNjcm9sbFggPyB0aGlzLnN0YXRlLm1heFNjcm9sbFggOiB4O1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBzY3JvbGxYOiB4XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9kaWRTY3JvbGxTdG9wKCk7XG4gICAgfVxuICB9LFxuXG4gIF9vbkhvcml6b250YWxTY3JvbGw6IGZ1bmN0aW9uIF9vbkhvcml6b250YWxTY3JvbGwoIC8qbnVtYmVyKi9zY3JvbGxQb3MpIHtcbiAgICBpZiAodGhpcy5pc01vdW50ZWQoKSAmJiBzY3JvbGxQb3MgIT09IHRoaXMuc3RhdGUuc2Nyb2xsWCkge1xuICAgICAgaWYgKCF0aGlzLl9pc1Njcm9sbGluZykge1xuICAgICAgICB0aGlzLl9kaWRTY3JvbGxTdGFydCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNjcm9sbFg6IHNjcm9sbFBvc1xuICAgICAgfSk7XG4gICAgICB0aGlzLl9kaWRTY3JvbGxTdG9wKCk7XG4gICAgfVxuICB9LFxuXG4gIF9vblZlcnRpY2FsU2Nyb2xsOiBmdW5jdGlvbiBfb25WZXJ0aWNhbFNjcm9sbCggLypudW1iZXIqL3Njcm9sbFBvcykge1xuICAgIGlmICh0aGlzLmlzTW91bnRlZCgpICYmIHNjcm9sbFBvcyAhPT0gdGhpcy5zdGF0ZS5zY3JvbGxZKSB7XG4gICAgICBpZiAoIXRoaXMuX2lzU2Nyb2xsaW5nKSB7XG4gICAgICAgIHRoaXMuX2RpZFNjcm9sbFN0YXJ0KCk7XG4gICAgICB9XG4gICAgICB2YXIgc2Nyb2xsU3RhdGUgPSB0aGlzLl9zY3JvbGxIZWxwZXIuc2Nyb2xsVG8oTWF0aC5yb3VuZChzY3JvbGxQb3MpKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBmaXJzdFJvd0luZGV4OiBzY3JvbGxTdGF0ZS5pbmRleCxcbiAgICAgICAgZmlyc3RSb3dPZmZzZXQ6IHNjcm9sbFN0YXRlLm9mZnNldCxcbiAgICAgICAgc2Nyb2xsWTogc2Nyb2xsU3RhdGUucG9zaXRpb24sXG4gICAgICAgIHNjcm9sbENvbnRlbnRIZWlnaHQ6IHNjcm9sbFN0YXRlLmNvbnRlbnRIZWlnaHRcbiAgICAgIH0pO1xuICAgICAgdGhpcy5fZGlkU2Nyb2xsU3RvcCgpO1xuICAgIH1cbiAgfSxcblxuICBfZGlkU2Nyb2xsU3RhcnQ6IGZ1bmN0aW9uIF9kaWRTY3JvbGxTdGFydCgpIHtcbiAgICBpZiAodGhpcy5pc01vdW50ZWQoKSAmJiAhdGhpcy5faXNTY3JvbGxpbmcpIHtcbiAgICAgIHRoaXMuX2lzU2Nyb2xsaW5nID0gdHJ1ZTtcbiAgICAgIGlmICh0aGlzLnByb3BzLm9uU2Nyb2xsU3RhcnQpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblNjcm9sbFN0YXJ0KHRoaXMuc3RhdGUuc2Nyb2xsWCwgdGhpcy5zdGF0ZS5zY3JvbGxZKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgX2RpZFNjcm9sbFN0b3A6IGZ1bmN0aW9uIF9kaWRTY3JvbGxTdG9wKCkge1xuICAgIGlmICh0aGlzLmlzTW91bnRlZCgpICYmIHRoaXMuX2lzU2Nyb2xsaW5nKSB7XG4gICAgICB0aGlzLl9pc1Njcm9sbGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlZHJhdzogdHJ1ZSB9KTtcbiAgICAgIGlmICh0aGlzLnByb3BzLm9uU2Nyb2xsRW5kKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25TY3JvbGxFbmQodGhpcy5zdGF0ZS5zY3JvbGxYLCB0aGlzLnN0YXRlLnNjcm9sbFkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSk7XG5cbnZhciBIb3Jpem9udGFsU2Nyb2xsYmFyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0hvcml6b250YWxTY3JvbGxiYXInLFxuXG4gIG1peGluczogW1JlYWN0Q29tcG9uZW50V2l0aFB1cmVSZW5kZXJNaXhpbl0sXG4gIHByb3BUeXBlczoge1xuICAgIGNvbnRlbnRTaXplOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgb2Zmc2V0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgb25TY3JvbGw6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgcG9zaXRpb246IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBzaXplOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWRcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIC8qb2JqZWN0Ki97XG4gICAgdmFyIG91dGVyQ29udGFpbmVyU3R5bGUgPSB7XG4gICAgICBoZWlnaHQ6IFNjcm9sbGJhci5TSVpFLFxuICAgICAgd2lkdGg6IHRoaXMucHJvcHMuc2l6ZVxuICAgIH07XG4gICAgdmFyIGlubmVyQ29udGFpbmVyU3R5bGUgPSB7XG4gICAgICBoZWlnaHQ6IFNjcm9sbGJhci5TSVpFLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICB3aWR0aDogdGhpcy5wcm9wcy5zaXplXG4gICAgfTtcbiAgICB0cmFuc2xhdGVET01Qb3NpdGlvblhZKGlubmVyQ29udGFpbmVyU3R5bGUsIDAsIHRoaXMucHJvcHMub2Zmc2V0KTtcblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogam9pbkNsYXNzZXMoY3goJ2ZpeGVkRGF0YVRhYmxlTGF5b3V0L2hvcml6b250YWxTY3JvbGxiYXInKSwgY3goJ3B1YmxpYy9maXhlZERhdGFUYWJsZS9ob3Jpem9udGFsU2Nyb2xsYmFyJykpLFxuICAgICAgICBzdHlsZTogb3V0ZXJDb250YWluZXJTdHlsZSB9LFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgc3R5bGU6IGlubmVyQ29udGFpbmVyU3R5bGUgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTY3JvbGxiYXIsIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICAgICAgaXNPcGFxdWU6IHRydWUsXG4gICAgICAgICAgb3JpZW50YXRpb246ICdob3Jpem9udGFsJyxcbiAgICAgICAgICBvZmZzZXQ6IHVuZGVmaW5lZFxuICAgICAgICB9KSlcbiAgICAgIClcbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBGaXhlZERhdGFUYWJsZTtcbi8vIGlzQ29sdW1uUmVzaXppbmcgc2hvdWxkIGJlIG92ZXJ3cml0dGVuIGJ5IHZhbHVlIGZyb20gcHJvcHMgaWZcbi8vIGF2YWlhbGJsZVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvRml4ZWREYXRhVGFibGVOZXcucmVhY3QuanNcbiAqKiBtb2R1bGUgaWQgPSAyOThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIFJlYWN0Q29tcG9uZW50V2l0aFB1cmVSZW5kZXJNaXhpblxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBQZXJmb3JtcyBlcXVhbGl0eSBieSBpdGVyYXRpbmcgdGhyb3VnaCBrZXlzIG9uIGFuIG9iamVjdCBhbmQgcmV0dXJuaW5nXG4gKiBmYWxzZSB3aGVuIGFueSBrZXkgaGFzIHZhbHVlcyB3aGljaCBhcmUgbm90IHN0cmljdGx5IGVxdWFsIGJldHdlZW5cbiAqIG9iakEgYW5kIG9iakIuIFJldHVybnMgdHJ1ZSB3aGVuIHRoZSB2YWx1ZXMgb2YgYWxsIGtleXMgYXJlIHN0cmljdGx5IGVxdWFsLlxuICpcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIHNoYWxsb3dFcXVhbChvYmpBLCBvYmpCKSB7XG4gIGlmIChvYmpBID09PSBvYmpCKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgdmFyIGtleTtcbiAgLy8gVGVzdCBmb3IgQSdzIGtleXMgZGlmZmVyZW50IGZyb20gQi5cbiAgZm9yIChrZXkgaW4gb2JqQSkge1xuICAgIGlmIChvYmpBLmhhc093blByb3BlcnR5KGtleSkgJiYgKCFvYmpCLmhhc093blByb3BlcnR5KGtleSkgfHwgb2JqQVtrZXldICE9PSBvYmpCW2tleV0pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIC8vIFRlc3QgZm9yIEIncyBrZXlzIG1pc3NpbmcgZnJvbSBBLlxuICBmb3IgKGtleSBpbiBvYmpCKSB7XG4gICAgaWYgKG9iakIuaGFzT3duUHJvcGVydHkoa2V5KSAmJiAhb2JqQS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIElmIHlvdXIgUmVhY3QgY29tcG9uZW50J3MgcmVuZGVyIGZ1bmN0aW9uIGlzIFwicHVyZVwiLCBlLmcuIGl0IHdpbGwgcmVuZGVyIHRoZVxuICogc2FtZSByZXN1bHQgZ2l2ZW4gdGhlIHNhbWUgcHJvcHMgYW5kIHN0YXRlLCBwcm92aWRlIHRoaXMgTWl4aW4gZm9yIGFcbiAqIGNvbnNpZGVyYWJsZSBwZXJmb3JtYW5jZSBib29zdC5cbiAqXG4gKiBNb3N0IFJlYWN0IGNvbXBvbmVudHMgaGF2ZSBwdXJlIHJlbmRlciBmdW5jdGlvbnMuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiAgIHZhciBSZWFjdENvbXBvbmVudFdpdGhQdXJlUmVuZGVyTWl4aW4gPVxuICogICAgIHJlcXVpcmUoJ1JlYWN0Q29tcG9uZW50V2l0aFB1cmVSZW5kZXJNaXhpbicpO1xuICogICBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gKiAgICAgbWl4aW5zOiBbUmVhY3RDb21wb25lbnRXaXRoUHVyZVJlbmRlck1peGluXSxcbiAqXG4gKiAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAqICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9PmZvbzwvZGl2PjtcbiAqICAgICB9XG4gKiAgIH0pO1xuICpcbiAqIE5vdGU6IFRoaXMgb25seSBjaGVja3Mgc2hhbGxvdyBlcXVhbGl0eSBmb3IgcHJvcHMgYW5kIHN0YXRlLiBJZiB0aGVzZSBjb250YWluXG4gKiBjb21wbGV4IGRhdGEgc3RydWN0dXJlcyB0aGlzIG1peGluIG1heSBoYXZlIGZhbHNlLW5lZ2F0aXZlcyBmb3IgZGVlcGVyXG4gKiBkaWZmZXJlbmNlcy4gT25seSBtaXhpbiB0byBjb21wb25lbnRzIHdoaWNoIGhhdmUgc2ltcGxlIHByb3BzIGFuZCBzdGF0ZSwgb3JcbiAqIHVzZSBgZm9yY2VVcGRhdGUoKWAgd2hlbiB5b3Uga25vdyBkZWVwIGRhdGEgc3RydWN0dXJlcyBoYXZlIGNoYW5nZWQuXG4gKi9cbnZhciBSZWFjdENvbXBvbmVudFdpdGhQdXJlUmVuZGVyTWl4aW4gPSB7XG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZTogZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgcmV0dXJuICFzaGFsbG93RXF1YWwodGhpcy5wcm9wcywgbmV4dFByb3BzKSB8fCAhc2hhbGxvd0VxdWFsKHRoaXMuc3RhdGUsIG5leHRTdGF0ZSk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RDb21wb25lbnRXaXRoUHVyZVJlbmRlck1peGluO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvUmVhY3RDb21wb25lbnRXaXRoUHVyZVJlbmRlck1peGluLmpzXG4gKiogbW9kdWxlIGlkID0gMjk5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIFRoaXMgaXMgdXRpbGl0eSB0aGF0IGhhbmxkcyBvbldoZWVsIGV2ZW50cyBhbmQgY2FsbHMgcHJvdmlkZWQgd2hlZWxcbiAqIGNhbGxiYWNrIHdpdGggY29ycmVjdCBmcmFtZSByYXRlLlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBSZWFjdFdoZWVsSGFuZGxlclxuICogQHR5cGVjaGVja3NcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG52YXIgZW1wdHlGdW5jdGlvbiA9IHJlcXVpcmUoJy4vZW1wdHlGdW5jdGlvbicpO1xudmFyIG5vcm1hbGl6ZVdoZWVsID0gcmVxdWlyZSgnLi9ub3JtYWxpemVXaGVlbCcpO1xudmFyIHJlcXVlc3RBbmltYXRpb25GcmFtZVBvbHlmaWxsID0gcmVxdWlyZSgnLi9yZXF1ZXN0QW5pbWF0aW9uRnJhbWVQb2x5ZmlsbCcpO1xuXG52YXIgUmVhY3RXaGVlbEhhbmRsZXIgPSAoZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICogb25XaGVlbCBpcyB0aGUgY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGNhbGxlZCB3aXRoIHJpZ2h0IGZyYW1lIHJhdGUgaWZcbiAgICogYW55IHdoZWVsIGV2ZW50cyBoYXBwZW5lZFxuICAgKiBvbldoZWVsIHNob3VsZCBpcyB0byBiZSBjYWxsZWQgd2l0aCB0d28gYXJndW1lbnRzOiBkZWx0YVggYW5kIGRlbHRhWSBpblxuICAgKiB0aGlzIG9yZGVyXG4gICAqL1xuXG4gIGZ1bmN0aW9uIFJlYWN0V2hlZWxIYW5kbGVyKFxuICAvKmZ1bmN0aW9uKi9vbldoZWVsLFxuICAvKmJvb2xlYW58ZnVuY3Rpb24qL2hhbmRsZVNjcm9sbFgsXG4gIC8qYm9vbGVhbnxmdW5jdGlvbiovaGFuZGxlU2Nyb2xsWSxcbiAgLyo/Ym9vbGVhbnw/ZnVuY3Rpb24qL3N0b3BQcm9wYWdhdGlvbikge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSZWFjdFdoZWVsSGFuZGxlcik7XG5cbiAgICB0aGlzLl9hbmltYXRpb25GcmFtZUlEID0gbnVsbDtcbiAgICB0aGlzLl9kZWx0YVggPSAwO1xuICAgIHRoaXMuX2RlbHRhWSA9IDA7XG4gICAgdGhpcy5fZGlkV2hlZWwgPSB0aGlzLl9kaWRXaGVlbC5iaW5kKHRoaXMpO1xuICAgIGlmICh0eXBlb2YgaGFuZGxlU2Nyb2xsWCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaGFuZGxlU2Nyb2xsWCA9IGhhbmRsZVNjcm9sbFggPyBlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVHJ1ZSA6IGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNGYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGhhbmRsZVNjcm9sbFkgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGhhbmRsZVNjcm9sbFkgPSBoYW5kbGVTY3JvbGxZID8gZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RydWUgOiBlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zRmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBzdG9wUHJvcGFnYXRpb24gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHN0b3BQcm9wYWdhdGlvbiA9IHN0b3BQcm9wYWdhdGlvbiA/IGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNUcnVlIDogZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0ZhbHNlO1xuICAgIH1cblxuICAgIHRoaXMuX2hhbmRsZVNjcm9sbFggPSBoYW5kbGVTY3JvbGxYO1xuICAgIHRoaXMuX2hhbmRsZVNjcm9sbFkgPSBoYW5kbGVTY3JvbGxZO1xuICAgIHRoaXMuX3N0b3BQcm9wYWdhdGlvbiA9IHN0b3BQcm9wYWdhdGlvbjtcbiAgICB0aGlzLl9vbldoZWVsQ2FsbGJhY2sgPSBvbldoZWVsO1xuICAgIHRoaXMub25XaGVlbCA9IHRoaXMub25XaGVlbC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFJlYWN0V2hlZWxIYW5kbGVyLCBbe1xuICAgIGtleTogJ29uV2hlZWwnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbldoZWVsKCAvKm9iamVjdCovZXZlbnQpIHtcbiAgICAgIHZhciBub3JtYWxpemVkRXZlbnQgPSBub3JtYWxpemVXaGVlbChldmVudCk7XG4gICAgICB2YXIgZGVsdGFYID0gdGhpcy5fZGVsdGFYICsgbm9ybWFsaXplZEV2ZW50LnBpeGVsWDtcbiAgICAgIHZhciBkZWx0YVkgPSB0aGlzLl9kZWx0YVkgKyBub3JtYWxpemVkRXZlbnQucGl4ZWxZO1xuICAgICAgdmFyIGhhbmRsZVNjcm9sbFggPSB0aGlzLl9oYW5kbGVTY3JvbGxYKGRlbHRhWCwgZGVsdGFZKTtcbiAgICAgIHZhciBoYW5kbGVTY3JvbGxZID0gdGhpcy5faGFuZGxlU2Nyb2xsWShkZWx0YVksIGRlbHRhWCk7XG4gICAgICBpZiAoIWhhbmRsZVNjcm9sbFggJiYgIWhhbmRsZVNjcm9sbFkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9kZWx0YVggKz0gaGFuZGxlU2Nyb2xsWCA/IG5vcm1hbGl6ZWRFdmVudC5waXhlbFggOiAwO1xuICAgICAgdGhpcy5fZGVsdGFZICs9IGhhbmRsZVNjcm9sbFkgPyBub3JtYWxpemVkRXZlbnQucGl4ZWxZIDogMDtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIHZhciBjaGFuZ2VkO1xuICAgICAgaWYgKHRoaXMuX2RlbHRhWCAhPT0gMCB8fCB0aGlzLl9kZWx0YVkgIT09IDApIHtcbiAgICAgICAgaWYgKHRoaXMuX3N0b3BQcm9wYWdhdGlvbigpKSB7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChjaGFuZ2VkID09PSB0cnVlICYmIHRoaXMuX2FuaW1hdGlvbkZyYW1lSUQgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5fYW5pbWF0aW9uRnJhbWVJRCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZVBvbHlmaWxsKHRoaXMuX2RpZFdoZWVsKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdfZGlkV2hlZWwnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZGlkV2hlZWwoKSB7XG4gICAgICB0aGlzLl9hbmltYXRpb25GcmFtZUlEID0gbnVsbDtcbiAgICAgIHRoaXMuX29uV2hlZWxDYWxsYmFjayh0aGlzLl9kZWx0YVgsIHRoaXMuX2RlbHRhWSk7XG4gICAgICB0aGlzLl9kZWx0YVggPSAwO1xuICAgICAgdGhpcy5fZGVsdGFZID0gMDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUmVhY3RXaGVlbEhhbmRsZXI7XG59KSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0V2hlZWxIYW5kbGVyO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvUmVhY3RXaGVlbEhhbmRsZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAzMDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIGVtcHR5RnVuY3Rpb25cbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gbWFrZUVtcHR5RnVuY3Rpb24oYXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGFyZztcbiAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGFjY2VwdHMgYW5kIGRpc2NhcmRzIGlucHV0czsgaXQgaGFzIG5vIHNpZGUgZWZmZWN0cy4gVGhpcyBpc1xuICogcHJpbWFyaWx5IHVzZWZ1bCBpZGlvbWF0aWNhbGx5IGZvciBvdmVycmlkYWJsZSBmdW5jdGlvbiBlbmRwb2ludHMgd2hpY2hcbiAqIGFsd2F5cyBuZWVkIHRvIGJlIGNhbGxhYmxlLCBzaW5jZSBKUyBsYWNrcyBhIG51bGwtY2FsbCBpZGlvbSBhbGEgQ29jb2EuXG4gKi9cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb24oKSB7fVxuXG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zID0gbWFrZUVtcHR5RnVuY3Rpb247XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zRmFsc2UgPSBtYWtlRW1wdHlGdW5jdGlvbihmYWxzZSk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVHJ1ZSA9IG1ha2VFbXB0eUZ1bmN0aW9uKHRydWUpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc051bGwgPSBtYWtlRW1wdHlGdW5jdGlvbihudWxsKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNUaGlzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcztcbn07XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zQXJndW1lbnQgPSBmdW5jdGlvbiAoYXJnKSB7XG4gIHJldHVybiBhcmc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVtcHR5RnVuY3Rpb247XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9lbXB0eUZ1bmN0aW9uLmpzXG4gKiogbW9kdWxlIGlkID0gMzAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBub3JtYWxpemVXaGVlbFxuICogQHR5cGVjaGVja3NcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBVc2VyQWdlbnRfREVQUkVDQVRFRCA9IHJlcXVpcmUoJy4vVXNlckFnZW50X0RFUFJFQ0FURUQnKTtcblxudmFyIGlzRXZlbnRTdXBwb3J0ZWQgPSByZXF1aXJlKCcuL2lzRXZlbnRTdXBwb3J0ZWQnKTtcblxuLy8gUmVhc29uYWJsZSBkZWZhdWx0c1xudmFyIFBJWEVMX1NURVAgPSAxMDtcbnZhciBMSU5FX0hFSUdIVCA9IDQwO1xudmFyIFBBR0VfSEVJR0hUID0gODAwO1xuXG4vKipcbiAqIE1vdXNlIHdoZWVsIChhbmQgMi1maW5nZXIgdHJhY2twYWQpIHN1cHBvcnQgb24gdGhlIHdlYiBzdWNrcy4gIEl0IGlzXG4gKiBjb21wbGljYXRlZCwgdGh1cyB0aGlzIGRvYyBpcyBsb25nIGFuZCAoaG9wZWZ1bGx5KSBkZXRhaWxlZCBlbm91Z2ggdG8gYW5zd2VyXG4gKiB5b3VyIHF1ZXN0aW9ucy5cbiAqXG4gKiBJZiB5b3UgbmVlZCB0byByZWFjdCB0byB0aGUgbW91c2Ugd2hlZWwgaW4gYSBwcmVkaWN0YWJsZSB3YXksIHRoaXMgY29kZSBpc1xuICogbGlrZSB5b3VyIGJlc3Rlc3QgZnJpZW5kLiAqIGh1Z3MgKlxuICpcbiAqIEFzIG9mIHRvZGF5LCB0aGVyZSBhcmUgNCBET00gZXZlbnQgdHlwZXMgeW91IGNhbiBsaXN0ZW4gdG86XG4gKlxuICogICAnd2hlZWwnICAgICAgICAgICAgICAgIC0tIENocm9tZSgzMSspLCBGRigxNyspLCBJRSg5KylcbiAqICAgJ21vdXNld2hlZWwnICAgICAgICAgICAtLSBDaHJvbWUsIElFKDYrKSwgT3BlcmEsIFNhZmFyaVxuICogICAnTW96TW91c2VQaXhlbFNjcm9sbCcgIC0tIEZGKDMuNSBvbmx5ISkgKDIwMTAtMjAxMykgLS0gZG9uJ3QgYm90aGVyIVxuICogICAnRE9NTW91c2VTY3JvbGwnICAgICAgIC0tIEZGKDAuOS43Kykgc2luY2UgMjAwM1xuICpcbiAqIFNvIHdoYXQgdG8gZG8/ICBUaGUgaXMgdGhlIGJlc3Q6XG4gKlxuICogICBub3JtYWxpemVXaGVlbC5nZXRFdmVudFR5cGUoKTtcbiAqXG4gKiBJbiB5b3VyIGV2ZW50IGNhbGxiYWNrLCB1c2UgdGhpcyBjb2RlIHRvIGdldCBzYW5lIGludGVycHJldGF0aW9uIG9mIHRoZVxuICogZGVsdGFzLiAgVGhpcyBjb2RlIHdpbGwgcmV0dXJuIGFuIG9iamVjdCB3aXRoIHByb3BlcnRpZXM6XG4gKlxuICogICBzcGluWCAgIC0tIG5vcm1hbGl6ZWQgc3BpbiBzcGVlZCAodXNlIGZvciB6b29tKSAtIHggcGxhbmVcbiAqICAgc3BpblkgICAtLSBcIiAtIHkgcGxhbmVcbiAqICAgcGl4ZWxYICAtLSBub3JtYWxpemVkIGRpc3RhbmNlICh0byBwaXhlbHMpIC0geCBwbGFuZVxuICogICBwaXhlbFkgIC0tIFwiIC0geSBwbGFuZVxuICpcbiAqIFdoZWVsIHZhbHVlcyBhcmUgcHJvdmlkZWQgYnkgdGhlIGJyb3dzZXIgYXNzdW1pbmcgeW91IGFyZSB1c2luZyB0aGUgd2hlZWwgdG9cbiAqIHNjcm9sbCBhIHdlYiBwYWdlIGJ5IGEgbnVtYmVyIG9mIGxpbmVzIG9yIHBpeGVscyAob3IgcGFnZXMpLiAgVmFsdWVzIGNhbiB2YXJ5XG4gKiBzaWduaWZpY2FudGx5IG9uIGRpZmZlcmVudCBwbGF0Zm9ybXMgYW5kIGJyb3dzZXJzLCBmb3JnZXR0aW5nIHRoYXQgeW91IGNhblxuICogc2Nyb2xsIGF0IGRpZmZlcmVudCBzcGVlZHMuICBTb21lIGRldmljZXMgKGxpa2UgdHJhY2twYWRzKSBlbWl0IG1vcmUgZXZlbnRzXG4gKiBhdCBzbWFsbGVyIGluY3JlbWVudHMgd2l0aCBmaW5lIGdyYW51bGFyaXR5LCBhbmQgc29tZSBlbWl0IG1hc3NpdmUganVtcHMgd2l0aFxuICogbGluZWFyIHNwZWVkIG9yIGFjY2VsZXJhdGlvbi5cbiAqXG4gKiBUaGlzIGNvZGUgZG9lcyBpdHMgYmVzdCB0byBub3JtYWxpemUgdGhlIGRlbHRhcyBmb3IgeW91OlxuICpcbiAqICAgLSBzcGluIGlzIHRyeWluZyB0byBub3JtYWxpemUgaG93IGZhciB0aGUgd2hlZWwgd2FzIHNwdW4gKG9yIHRyYWNrcGFkXG4gKiAgICAgZHJhZ2dlZCkuICBUaGlzIGlzIHN1cGVyIHVzZWZ1bCBmb3Igem9vbSBzdXBwb3J0IHdoZXJlIHlvdSB3YW50IHRvXG4gKiAgICAgdGhyb3cgYXdheSB0aGUgY2h1bmt5IHNjcm9sbCBzdGVwcyBvbiB0aGUgUEMgYW5kIG1ha2UgdGhvc2UgZXF1YWwgdG9cbiAqICAgICB0aGUgc2xvdyBhbmQgc21vb3RoIHRpbnkgc3RlcHMgb24gdGhlIE1hYy4gS2V5IGRhdGE6IFRoaXMgY29kZSB0cmllcyB0b1xuICogICAgIHJlc29sdmUgYSBzaW5nbGUgc2xvdyBzdGVwIG9uIGEgd2hlZWwgdG8gMS5cbiAqXG4gKiAgIC0gcGl4ZWwgaXMgbm9ybWFsaXppbmcgdGhlIGRlc2lyZWQgc2Nyb2xsIGRlbHRhIGluIHBpeGVsIHVuaXRzLiAgWW91J2xsXG4gKiAgICAgZ2V0IHRoZSBjcmF6eSBkaWZmZXJlbmNlcyBiZXR3ZWVuIGJyb3dzZXJzLCBidXQgYXQgbGVhc3QgaXQnbGwgYmUgaW5cbiAqICAgICBwaXhlbHMhXG4gKlxuICogICAtIHBvc2l0aXZlIHZhbHVlIGluZGljYXRlcyBzY3JvbGxpbmcgRE9XTi9SSUdIVCwgbmVnYXRpdmUgVVAvTEVGVC4gIFRoaXNcbiAqICAgICBzaG91bGQgdHJhbnNsYXRlIHRvIHBvc2l0aXZlIHZhbHVlIHpvb21pbmcgSU4sIG5lZ2F0aXZlIHpvb21pbmcgT1VULlxuICogICAgIFRoaXMgbWF0Y2hlcyB0aGUgbmV3ZXIgJ3doZWVsJyBldmVudC5cbiAqXG4gKiBXaHkgYXJlIHRoZXJlIHNwaW5YLCBzcGluWSAob3IgcGl4ZWxzKT9cbiAqXG4gKiAgIC0gc3BpblggaXMgYSAyLWZpbmdlciBzaWRlIGRyYWcgb24gdGhlIHRyYWNrcGFkLCBhbmQgYSBzaGlmdCArIHdoZWVsIHR1cm5cbiAqICAgICB3aXRoIGEgbW91c2UuICBJdCByZXN1bHRzIGluIHNpZGUtc2Nyb2xsaW5nIGluIHRoZSBicm93c2VyIGJ5IGRlZmF1bHQuXG4gKlxuICogICAtIHNwaW5ZIGlzIHdoYXQgeW91IGV4cGVjdCAtLSBpdCdzIHRoZSBjbGFzc2ljIGF4aXMgb2YgYSBtb3VzZSB3aGVlbC5cbiAqXG4gKiAgIC0gSSBkcm9wcGVkIHNwaW5aL3BpeGVsWi4gIEl0IGlzIHN1cHBvcnRlZCBieSB0aGUgRE9NIDMgJ3doZWVsJyBldmVudCBhbmRcbiAqICAgICBwcm9iYWJseSBpcyBieSBicm93c2VycyBpbiBjb25qdW5jdGlvbiB3aXRoIGZhbmN5IDNEIGNvbnRyb2xsZXJzIC4uIGJ1dFxuICogICAgIHlvdSBrbm93LlxuICpcbiAqIEltcGxlbWVudGF0aW9uIGluZm86XG4gKlxuICogRXhhbXBsZXMgb2YgJ3doZWVsJyBldmVudCBpZiB5b3Ugc2Nyb2xsIHNsb3dseSAoZG93bikgYnkgb25lIHN0ZXAgd2l0aCBhblxuICogYXZlcmFnZSBtb3VzZTpcbiAqXG4gKiAgIE9TIFggKyBDaHJvbWUgIChtb3VzZSkgICAgIC0gICAgNCAgIHBpeGVsIGRlbHRhICAod2hlZWxEZWx0YSAtMTIwKVxuICogICBPUyBYICsgU2FmYXJpICAobW91c2UpICAgICAtICBOL0EgICBwaXhlbCBkZWx0YSAgKHdoZWVsRGVsdGEgIC0xMilcbiAqICAgT1MgWCArIEZpcmVmb3ggKG1vdXNlKSAgICAgLSAgICAwLjEgbGluZSAgZGVsdGEgICh3aGVlbERlbHRhICBOL0EpXG4gKiAgIFdpbjggKyBDaHJvbWUgIChtb3VzZSkgICAgIC0gIDEwMCAgIHBpeGVsIGRlbHRhICAod2hlZWxEZWx0YSAtMTIwKVxuICogICBXaW44ICsgRmlyZWZveCAobW91c2UpICAgICAtICAgIDMgICBsaW5lICBkZWx0YSAgKHdoZWVsRGVsdGEgLTEyMClcbiAqXG4gKiBPbiB0aGUgdHJhY2twYWQ6XG4gKlxuICogICBPUyBYICsgQ2hyb21lICAodHJhY2twYWQpICAtICAgIDIgICBwaXhlbCBkZWx0YSAgKHdoZWVsRGVsdGEgICAtNilcbiAqICAgT1MgWCArIEZpcmVmb3ggKHRyYWNrcGFkKSAgLSAgICAxICAgcGl4ZWwgZGVsdGEgICh3aGVlbERlbHRhICBOL0EpXG4gKlxuICogT24gb3RoZXIvb2xkZXIgYnJvd3NlcnMuLiBpdCdzIG1vcmUgY29tcGxpY2F0ZWQgYXMgdGhlcmUgY2FuIGJlIG11bHRpcGxlIGFuZFxuICogYWxzbyBtaXNzaW5nIGRlbHRhIHZhbHVlcy5cbiAqXG4gKiBUaGUgJ3doZWVsJyBldmVudCBpcyBtb3JlIHN0YW5kYXJkOlxuICpcbiAqIGh0dHA6Ly93d3cudzMub3JnL1RSL0RPTS1MZXZlbC0zLUV2ZW50cy8jZXZlbnRzLXdoZWVsZXZlbnRzXG4gKlxuICogVGhlIGJhc2ljcyBpcyB0aGF0IGl0IGluY2x1ZGVzIGEgdW5pdCwgZGVsdGFNb2RlIChwaXhlbHMsIGxpbmVzLCBwYWdlcyksIGFuZFxuICogZGVsdGFYLCBkZWx0YVkgYW5kIGRlbHRhWi4gIFNvbWUgYnJvd3NlcnMgcHJvdmlkZSBvdGhlciB2YWx1ZXMgdG8gbWFpbnRhaW5cbiAqIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBvbGRlciBldmVudHMuICBUaG9zZSBvdGhlciB2YWx1ZXMgaGVscCB1c1xuICogYmV0dGVyIG5vcm1hbGl6ZSBzcGluIHNwZWVkLiAgRXhhbXBsZSBvZiB3aGF0IHRoZSBicm93c2VycyBwcm92aWRlOlxuICpcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICB8IGV2ZW50LndoZWVsRGVsdGEgfCBldmVudC5kZXRhaWxcbiAqICAgICAgICAtLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tXG4gKiAgICAgICAgICBTYWZhcmkgdjUvT1MgWCAgfCAgICAgICAtMTIwICAgICAgIHwgICAgICAgMFxuICogICAgICAgICAgU2FmYXJpIHY1L1dpbjcgIHwgICAgICAgLTEyMCAgICAgICB8ICAgICAgIDBcbiAqICAgICAgICAgQ2hyb21lIHYxNy9PUyBYICB8ICAgICAgIC0xMjAgICAgICAgfCAgICAgICAwXG4gKiAgICAgICAgIENocm9tZSB2MTcvV2luNyAgfCAgICAgICAtMTIwICAgICAgIHwgICAgICAgMFxuICogICAgICAgICAgICAgICAgSUU5L1dpbjcgIHwgICAgICAgLTEyMCAgICAgICB8ICAgdW5kZWZpbmVkXG4gKiAgICAgICAgIEZpcmVmb3ggdjQvT1MgWCAgfCAgICAgdW5kZWZpbmVkICAgIHwgICAgICAgMVxuICogICAgICAgICBGaXJlZm94IHY0L1dpbjcgIHwgICAgIHVuZGVmaW5lZCAgICB8ICAgICAgIDNcbiAqXG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZVdoZWVsKCAvKm9iamVjdCovZXZlbnQpIC8qb2JqZWN0Ki97XG4gIHZhciBzWCA9IDAsXG4gICAgICBzWSA9IDAsXG4gICAgICAvLyBzcGluWCwgc3BpbllcbiAgcFggPSAwLFxuICAgICAgcFkgPSAwOyAvLyBwaXhlbFgsIHBpeGVsWVxuXG4gIC8vIExlZ2FjeVxuICBpZiAoJ2RldGFpbCcgaW4gZXZlbnQpIHtcbiAgICBzWSA9IGV2ZW50LmRldGFpbDtcbiAgfVxuICBpZiAoJ3doZWVsRGVsdGEnIGluIGV2ZW50KSB7XG4gICAgc1kgPSAtZXZlbnQud2hlZWxEZWx0YSAvIDEyMDtcbiAgfVxuICBpZiAoJ3doZWVsRGVsdGFZJyBpbiBldmVudCkge1xuICAgIHNZID0gLWV2ZW50LndoZWVsRGVsdGFZIC8gMTIwO1xuICB9XG4gIGlmICgnd2hlZWxEZWx0YVgnIGluIGV2ZW50KSB7XG4gICAgc1ggPSAtZXZlbnQud2hlZWxEZWx0YVggLyAxMjA7XG4gIH1cblxuICAvLyBzaWRlIHNjcm9sbGluZyBvbiBGRiB3aXRoIERPTU1vdXNlU2Nyb2xsXG4gIGlmICgnYXhpcycgaW4gZXZlbnQgJiYgZXZlbnQuYXhpcyA9PT0gZXZlbnQuSE9SSVpPTlRBTF9BWElTKSB7XG4gICAgc1ggPSBzWTtcbiAgICBzWSA9IDA7XG4gIH1cblxuICBwWCA9IHNYICogUElYRUxfU1RFUDtcbiAgcFkgPSBzWSAqIFBJWEVMX1NURVA7XG5cbiAgaWYgKCdkZWx0YVknIGluIGV2ZW50KSB7XG4gICAgcFkgPSBldmVudC5kZWx0YVk7XG4gIH1cbiAgaWYgKCdkZWx0YVgnIGluIGV2ZW50KSB7XG4gICAgcFggPSBldmVudC5kZWx0YVg7XG4gIH1cblxuICBpZiAoKHBYIHx8IHBZKSAmJiBldmVudC5kZWx0YU1vZGUpIHtcbiAgICBpZiAoZXZlbnQuZGVsdGFNb2RlID09IDEpIHtcbiAgICAgIC8vIGRlbHRhIGluIExJTkUgdW5pdHNcbiAgICAgIHBYICo9IExJTkVfSEVJR0hUO1xuICAgICAgcFkgKj0gTElORV9IRUlHSFQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGRlbHRhIGluIFBBR0UgdW5pdHNcbiAgICAgIHBYICo9IFBBR0VfSEVJR0hUO1xuICAgICAgcFkgKj0gUEFHRV9IRUlHSFQ7XG4gICAgfVxuICB9XG5cbiAgLy8gRmFsbC1iYWNrIGlmIHNwaW4gY2Fubm90IGJlIGRldGVybWluZWRcbiAgaWYgKHBYICYmICFzWCkge1xuICAgIHNYID0gcFggPCAxID8gLTEgOiAxO1xuICB9XG4gIGlmIChwWSAmJiAhc1kpIHtcbiAgICBzWSA9IHBZIDwgMSA/IC0xIDogMTtcbiAgfVxuXG4gIHJldHVybiB7IHNwaW5YOiBzWCxcbiAgICBzcGluWTogc1ksXG4gICAgcGl4ZWxYOiBwWCxcbiAgICBwaXhlbFk6IHBZIH07XG59XG5cbi8qKlxuICogVGhlIGJlc3QgY29tYmluYXRpb24gaWYgeW91IHByZWZlciBzcGluWCArIHNwaW5ZIG5vcm1hbGl6YXRpb24uICBJdCBmYXZvcnNcbiAqIHRoZSBvbGRlciBET01Nb3VzZVNjcm9sbCBmb3IgRmlyZWZveCwgYXMgRkYgZG9lcyBub3QgaW5jbHVkZSB3aGVlbERlbHRhIHdpdGhcbiAqICd3aGVlbCcgZXZlbnQsIG1ha2luZyBzcGluIHNwZWVkIGRldGVybWluYXRpb24gaW1wb3NzaWJsZS5cbiAqL1xubm9ybWFsaXplV2hlZWwuZ2V0RXZlbnRUeXBlID0gZnVuY3Rpb24gKCkgLypzdHJpbmcqL3tcbiAgcmV0dXJuIFVzZXJBZ2VudF9ERVBSRUNBVEVELmZpcmVmb3goKSA/ICdET01Nb3VzZVNjcm9sbCcgOiBpc0V2ZW50U3VwcG9ydGVkKCd3aGVlbCcpID8gJ3doZWVsJyA6ICdtb3VzZXdoZWVsJztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbm9ybWFsaXplV2hlZWw7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9ub3JtYWxpemVXaGVlbC5qc1xuICoqIG1vZHVsZSBpZCA9IDMwMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAwNC1wcmVzZW50IEZhY2Vib29rLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBVc2VyQWdlbnRfREVQUkVDQVRFRFxuICovXG5cbi8qKlxuICogIFByb3ZpZGVzIGVudGlyZWx5IGNsaWVudC1zaWRlIFVzZXIgQWdlbnQgYW5kIE9TIGRldGVjdGlvbi4gWW91IHNob3VsZCBwcmVmZXJcbiAqICB0aGUgbm9uLWRlcHJlY2F0ZWQgVXNlckFnZW50IG1vZHVsZSB3aGVuIHBvc3NpYmxlLCB3aGljaCBleHBvc2VzIG91clxuICogIGF1dGhvcml0YXRpdmUgc2VydmVyLXNpZGUgUEhQLWJhc2VkIGRldGVjdGlvbiB0byB0aGUgY2xpZW50LlxuICpcbiAqICBVc2FnZSBpcyBzdHJhaWdodGZvcndhcmQ6XG4gKlxuICogICAgaWYgKFVzZXJBZ2VudF9ERVBSRUNBVEVELmllKCkpIHtcbiAqICAgICAgLy8gIElFXG4gKiAgICB9XG4gKlxuICogIFlvdSBjYW4gYWxzbyBkbyB2ZXJzaW9uIGNoZWNrczpcbiAqXG4gKiAgICBpZiAoVXNlckFnZW50X0RFUFJFQ0FURUQuaWUoKSA+PSA3KSB7XG4gKiAgICAgIC8vICBJRTcgb3IgYmV0dGVyXG4gKiAgICB9XG4gKlxuICogIFRoZSBicm93c2VyIGZ1bmN0aW9ucyB3aWxsIHJldHVybiBOYU4gaWYgdGhlIGJyb3dzZXIgZG9lcyBub3QgbWF0Y2gsIHNvXG4gKiAgeW91IGNhbiBhbHNvIGRvIHZlcnNpb24gY29tcGFyZXMgdGhlIG90aGVyIHdheTpcbiAqXG4gKiAgICBpZiAoVXNlckFnZW50X0RFUFJFQ0FURUQuaWUoKSA8IDcpIHtcbiAqICAgICAgLy8gIElFNiBvciB3b3JzZVxuICogICAgfVxuICpcbiAqICBOb3RlIHRoYXQgdGhlIHZlcnNpb24gaXMgYSBmbG9hdCBhbmQgbWF5IGluY2x1ZGUgYSBtaW5vciB2ZXJzaW9uIG51bWJlcixcbiAqICBzbyB5b3Ugc2hvdWxkIGFsd2F5cyB1c2UgcmFuZ2Ugb3BlcmF0b3JzIHRvIHBlcmZvcm0gY29tcGFyaXNvbnMsIG5vdFxuICogIHN0cmljdCBlcXVhbGl0eS5cbiAqXG4gKiAgKipOb3RlOioqIFlvdSBzaG91bGQgKipzdHJvbmdseSoqIHByZWZlciBjYXBhYmlsaXR5IGRldGVjdGlvbiB0byBicm93c2VyXG4gKiAgdmVyc2lvbiBkZXRlY3Rpb24gd2hlcmUgaXQncyByZWFzb25hYmxlOlxuICpcbiAqICAgIGh0dHA6Ly93d3cucXVpcmtzbW9kZS5vcmcvanMvc3VwcG9ydC5odG1sXG4gKlxuICogIEZ1cnRoZXIsIHdlIGhhdmUgYSBsYXJnZSBudW1iZXIgb2YgbWF0dXJlIHdyYXBwZXIgZnVuY3Rpb25zIGFuZCBjbGFzc2VzXG4gKiAgd2hpY2ggYWJzdHJhY3QgYXdheSBtYW55IGJyb3dzZXIgaXJyZWd1bGFyaXRpZXMuIENoZWNrIHRoZSBkb2N1bWVudGF0aW9uLFxuICogIGdyZXAgZm9yIHRoaW5ncywgb3IgYXNrIG9uIGphdmFzY3JpcHRAbGlzdHMuZmFjZWJvb2suY29tIGJlZm9yZSB3cml0aW5nIHlldFxuICogIGFub3RoZXIgY29weSBvZiBcImV2ZW50IHx8IHdpbmRvdy5ldmVudFwiLlxuICpcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBfcG9wdWxhdGVkID0gZmFsc2U7XG5cbi8vIEJyb3dzZXJzXG52YXIgX2llLCBfZmlyZWZveCwgX29wZXJhLCBfd2Via2l0LCBfY2hyb21lO1xuXG4vLyBBY3R1YWwgSUUgYnJvd3NlciBmb3IgY29tcGF0aWJpbGl0eSBtb2RlXG52YXIgX2llX3JlYWxfdmVyc2lvbjtcblxuLy8gUGxhdGZvcm1zXG52YXIgX29zeCwgX3dpbmRvd3MsIF9saW51eCwgX2FuZHJvaWQ7XG5cbi8vIEFyY2hpdGVjdHVyZXNcbnZhciBfd2luNjQ7XG5cbi8vIERldmljZXNcbnZhciBfaXBob25lLCBfaXBhZCwgX25hdGl2ZTtcblxudmFyIF9tb2JpbGU7XG5cbmZ1bmN0aW9uIF9wb3B1bGF0ZSgpIHtcbiAgaWYgKF9wb3B1bGF0ZWQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBfcG9wdWxhdGVkID0gdHJ1ZTtcblxuICAvLyBUbyB3b3JrIGFyb3VuZCBidWdneSBKUyBsaWJyYXJpZXMgdGhhdCBjYW4ndCBoYW5kbGUgbXVsdGktZGlnaXRcbiAgLy8gdmVyc2lvbiBudW1iZXJzLCBPcGVyYSAxMCdzIHVzZXIgYWdlbnQgc3RyaW5nIGNsYWltcyBpdCdzIE9wZXJhXG4gIC8vIDksIHRoZW4gbGF0ZXIgaW5jbHVkZXMgYSBWZXJzaW9uL1guWSBmaWVsZDpcbiAgLy9cbiAgLy8gT3BlcmEvOS44MCAoZm9vKSBQcmVzdG8vMi4yLjE1IFZlcnNpb24vMTAuMTBcbiAgdmFyIHVhcyA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG4gIHZhciBhZ2VudCA9IC8oPzpNU0lFLihcXGQrXFwuXFxkKykpfCg/Oig/OkZpcmVmb3h8R3JhblBhcmFkaXNvfEljZXdlYXNlbCkuKFxcZCtcXC5cXGQrKSl8KD86T3BlcmEoPzouK1ZlcnNpb24ufC4pKFxcZCtcXC5cXGQrKSl8KD86QXBwbGVXZWJLaXQuKFxcZCsoPzpcXC5cXGQrKT8pKXwoPzpUcmlkZW50XFwvXFxkK1xcLlxcZCsuKnJ2OihcXGQrXFwuXFxkKykpLy5leGVjKHVhcyk7XG4gIHZhciBvcyA9IC8oTWFjIE9TIFgpfChXaW5kb3dzKXwoTGludXgpLy5leGVjKHVhcyk7XG5cbiAgX2lwaG9uZSA9IC9cXGIoaVBob25lfGlQW2FvXWQpLy5leGVjKHVhcyk7XG4gIF9pcGFkID0gL1xcYihpUFthb11kKS8uZXhlYyh1YXMpO1xuICBfYW5kcm9pZCA9IC9BbmRyb2lkL2kuZXhlYyh1YXMpO1xuICBfbmF0aXZlID0gL0ZCQU5cXC9cXHcrOy9pLmV4ZWModWFzKTtcbiAgX21vYmlsZSA9IC9Nb2JpbGUvaS5leGVjKHVhcyk7XG5cbiAgLy8gTm90ZSB0aGF0IHRoZSBJRSB0ZWFtIGJsb2cgd291bGQgaGF2ZSB5b3UgYmVsaWV2ZSB5b3Ugc2hvdWxkIGJlIGNoZWNraW5nXG4gIC8vIGZvciAnV2luNjQ7IHg2NCcuICBCdXQgTVNETiB0aGVuIHJldmVhbHMgdGhhdCB5b3UgY2FuIGFjdHVhbGx5IGJlIGNvbWluZ1xuICAvLyBmcm9tIGVpdGhlciB4NjQgb3IgaWE2NDsgIHNvIHVsdGltYXRlbHksIHlvdSBzaG91bGQganVzdCBjaGVjayBmb3IgV2luNjRcbiAgLy8gYXMgaW4gaW5kaWNhdG9yIG9mIHdoZXRoZXIgeW91J3JlIGluIDY0LWJpdCBJRS4gIDMyLWJpdCBJRSBvbiA2NC1iaXRcbiAgLy8gV2luZG93cyB3aWxsIHNlbmQgJ1dPVzY0JyBpbnN0ZWFkLlxuICBfd2luNjQgPSAhIS9XaW42NC8uZXhlYyh1YXMpO1xuXG4gIGlmIChhZ2VudCkge1xuICAgIF9pZSA9IGFnZW50WzFdID8gcGFyc2VGbG9hdChhZ2VudFsxXSkgOiBhZ2VudFs1XSA/IHBhcnNlRmxvYXQoYWdlbnRbNV0pIDogTmFOO1xuICAgIC8vIElFIGNvbXBhdGliaWxpdHkgbW9kZVxuICAgIGlmIChfaWUgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRNb2RlKSB7XG4gICAgICBfaWUgPSBkb2N1bWVudC5kb2N1bWVudE1vZGU7XG4gICAgfVxuICAgIC8vIGdyYWIgdGhlIFwidHJ1ZVwiIGllIHZlcnNpb24gZnJvbSB0aGUgdHJpZGVudCB0b2tlbiBpZiBhdmFpbGFibGVcbiAgICB2YXIgdHJpZGVudCA9IC8oPzpUcmlkZW50XFwvKFxcZCsuXFxkKykpLy5leGVjKHVhcyk7XG4gICAgX2llX3JlYWxfdmVyc2lvbiA9IHRyaWRlbnQgPyBwYXJzZUZsb2F0KHRyaWRlbnRbMV0pICsgNCA6IF9pZTtcblxuICAgIF9maXJlZm94ID0gYWdlbnRbMl0gPyBwYXJzZUZsb2F0KGFnZW50WzJdKSA6IE5hTjtcbiAgICBfb3BlcmEgPSBhZ2VudFszXSA/IHBhcnNlRmxvYXQoYWdlbnRbM10pIDogTmFOO1xuICAgIF93ZWJraXQgPSBhZ2VudFs0XSA/IHBhcnNlRmxvYXQoYWdlbnRbNF0pIDogTmFOO1xuICAgIGlmIChfd2Via2l0KSB7XG4gICAgICAvLyBXZSBkbyBub3QgYWRkIHRoZSByZWdleHAgdG8gdGhlIGFib3ZlIHRlc3QsIGJlY2F1c2UgaXQgd2lsbCBhbHdheXNcbiAgICAgIC8vIG1hdGNoICdzYWZhcmknIG9ubHkgc2luY2UgJ0FwcGxlV2ViS2l0JyBhcHBlYXJzIGJlZm9yZSAnQ2hyb21lJyBpblxuICAgICAgLy8gdGhlIHVzZXJBZ2VudCBzdHJpbmcuXG4gICAgICBhZ2VudCA9IC8oPzpDaHJvbWVcXC8oXFxkK1xcLlxcZCspKS8uZXhlYyh1YXMpO1xuICAgICAgX2Nocm9tZSA9IGFnZW50ICYmIGFnZW50WzFdID8gcGFyc2VGbG9hdChhZ2VudFsxXSkgOiBOYU47XG4gICAgfSBlbHNlIHtcbiAgICAgIF9jaHJvbWUgPSBOYU47XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIF9pZSA9IF9maXJlZm94ID0gX29wZXJhID0gX2Nocm9tZSA9IF93ZWJraXQgPSBOYU47XG4gIH1cblxuICBpZiAob3MpIHtcbiAgICBpZiAob3NbMV0pIHtcbiAgICAgIC8vIERldGVjdCBPUyBYIHZlcnNpb24uICBJZiBubyB2ZXJzaW9uIG51bWJlciBtYXRjaGVzLCBzZXQgX29zeCB0byB0cnVlLlxuICAgICAgLy8gVmVyc2lvbiBleGFtcGxlczogIDEwLCAxMF82XzEsIDEwLjdcbiAgICAgIC8vIFBhcnNlcyB2ZXJzaW9uIG51bWJlciBhcyBhIGZsb2F0LCB0YWtpbmcgb25seSBmaXJzdCB0d28gc2V0cyBvZlxuICAgICAgLy8gZGlnaXRzLiAgSWYgb25seSBvbmUgc2V0IG9mIGRpZ2l0cyBpcyBmb3VuZCwgcmV0dXJucyBqdXN0IHRoZSBtYWpvclxuICAgICAgLy8gdmVyc2lvbiBudW1iZXIuXG4gICAgICB2YXIgdmVyID0gLyg/Ok1hYyBPUyBYIChcXGQrKD86Wy5fXVxcZCspPykpLy5leGVjKHVhcyk7XG5cbiAgICAgIF9vc3ggPSB2ZXIgPyBwYXJzZUZsb2F0KHZlclsxXS5yZXBsYWNlKCdfJywgJy4nKSkgOiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBfb3N4ID0gZmFsc2U7XG4gICAgfVxuICAgIF93aW5kb3dzID0gISFvc1syXTtcbiAgICBfbGludXggPSAhIW9zWzNdO1xuICB9IGVsc2Uge1xuICAgIF9vc3ggPSBfd2luZG93cyA9IF9saW51eCA9IGZhbHNlO1xuICB9XG59XG5cbnZhciBVc2VyQWdlbnRfREVQUkVDQVRFRCA9IHtcblxuICAvKipcbiAgICogIENoZWNrIGlmIHRoZSBVQSBpcyBJbnRlcm5ldCBFeHBsb3Jlci5cbiAgICpcbiAgICpcbiAgICogIEByZXR1cm4gZmxvYXR8TmFOIFZlcnNpb24gbnVtYmVyIChpZiBtYXRjaCkgb3IgTmFOLlxuICAgKi9cbiAgaWU6IGZ1bmN0aW9uIGllKCkge1xuICAgIHJldHVybiBfcG9wdWxhdGUoKSB8fCBfaWU7XG4gIH0sXG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHdlJ3JlIGluIEludGVybmV0IEV4cGxvcmVyIGNvbXBhdGliaWxpdHkgbW9kZS5cbiAgICpcbiAgICogQHJldHVybiBib29sIHRydWUgaWYgaW4gY29tcGF0aWJpbGl0eSBtb2RlLCBmYWxzZSBpZlxuICAgKiBub3QgY29tcGF0aWJpbGl0eSBtb2RlIG9yIG5vdCBpZVxuICAgKi9cbiAgaWVDb21wYXRpYmlsaXR5TW9kZTogZnVuY3Rpb24gaWVDb21wYXRpYmlsaXR5TW9kZSgpIHtcbiAgICByZXR1cm4gX3BvcHVsYXRlKCkgfHwgX2llX3JlYWxfdmVyc2lvbiA+IF9pZTtcbiAgfSxcblxuICAvKipcbiAgICogV2hldGhlciB0aGUgYnJvd3NlciBpcyA2NC1iaXQgSUUuICBSZWFsbHksIHRoaXMgaXMga2luZCBvZiB3ZWFrIHNhdWNlOyAgd2VcbiAgICogb25seSBuZWVkIHRoaXMgYmVjYXVzZSBTa3lwZSBjYW4ndCBoYW5kbGUgNjQtYml0IElFIHlldC4gIFdlIG5lZWQgdG8gcmVtb3ZlXG4gICAqIHRoaXMgd2hlbiB3ZSBkb24ndCBuZWVkIGl0IC0tIHRyYWNrZWQgYnkgIzYwMTk1Ny5cbiAgICovXG4gIGllNjQ6IGZ1bmN0aW9uIGllNjQoKSB7XG4gICAgcmV0dXJuIFVzZXJBZ2VudF9ERVBSRUNBVEVELmllKCkgJiYgX3dpbjY0O1xuICB9LFxuXG4gIC8qKlxuICAgKiAgQ2hlY2sgaWYgdGhlIFVBIGlzIEZpcmVmb3guXG4gICAqXG4gICAqXG4gICAqICBAcmV0dXJuIGZsb2F0fE5hTiBWZXJzaW9uIG51bWJlciAoaWYgbWF0Y2gpIG9yIE5hTi5cbiAgICovXG4gIGZpcmVmb3g6IGZ1bmN0aW9uIGZpcmVmb3goKSB7XG4gICAgcmV0dXJuIF9wb3B1bGF0ZSgpIHx8IF9maXJlZm94O1xuICB9LFxuXG4gIC8qKlxuICAgKiAgQ2hlY2sgaWYgdGhlIFVBIGlzIE9wZXJhLlxuICAgKlxuICAgKlxuICAgKiAgQHJldHVybiBmbG9hdHxOYU4gVmVyc2lvbiBudW1iZXIgKGlmIG1hdGNoKSBvciBOYU4uXG4gICAqL1xuICBvcGVyYTogZnVuY3Rpb24gb3BlcmEoKSB7XG4gICAgcmV0dXJuIF9wb3B1bGF0ZSgpIHx8IF9vcGVyYTtcbiAgfSxcblxuICAvKipcbiAgICogIENoZWNrIGlmIHRoZSBVQSBpcyBXZWJLaXQuXG4gICAqXG4gICAqXG4gICAqICBAcmV0dXJuIGZsb2F0fE5hTiBWZXJzaW9uIG51bWJlciAoaWYgbWF0Y2gpIG9yIE5hTi5cbiAgICovXG4gIHdlYmtpdDogZnVuY3Rpb24gd2Via2l0KCkge1xuICAgIHJldHVybiBfcG9wdWxhdGUoKSB8fCBfd2Via2l0O1xuICB9LFxuXG4gIC8qKlxuICAgKiAgRm9yIFB1c2hcbiAgICogIFdJTEwgQkUgUkVNT1ZFRCBWRVJZIFNPT04uIFVzZSBVc2VyQWdlbnRfREVQUkVDQVRFRC53ZWJraXRcbiAgICovXG4gIHNhZmFyaTogZnVuY3Rpb24gc2FmYXJpKCkge1xuICAgIHJldHVybiBVc2VyQWdlbnRfREVQUkVDQVRFRC53ZWJraXQoKTtcbiAgfSxcblxuICAvKipcbiAgICogIENoZWNrIGlmIHRoZSBVQSBpcyBhIENocm9tZSBicm93c2VyLlxuICAgKlxuICAgKlxuICAgKiAgQHJldHVybiBmbG9hdHxOYU4gVmVyc2lvbiBudW1iZXIgKGlmIG1hdGNoKSBvciBOYU4uXG4gICAqL1xuICBjaHJvbWU6IGZ1bmN0aW9uIGNocm9tZSgpIHtcbiAgICByZXR1cm4gX3BvcHVsYXRlKCkgfHwgX2Nocm9tZTtcbiAgfSxcblxuICAvKipcbiAgICogIENoZWNrIGlmIHRoZSB1c2VyIGlzIHJ1bm5pbmcgV2luZG93cy5cbiAgICpcbiAgICogIEByZXR1cm4gYm9vbCBgdHJ1ZScgaWYgdGhlIHVzZXIncyBPUyBpcyBXaW5kb3dzLlxuICAgKi9cbiAgd2luZG93czogZnVuY3Rpb24gd2luZG93cygpIHtcbiAgICByZXR1cm4gX3BvcHVsYXRlKCkgfHwgX3dpbmRvd3M7XG4gIH0sXG5cbiAgLyoqXG4gICAqICBDaGVjayBpZiB0aGUgdXNlciBpcyBydW5uaW5nIE1hYyBPUyBYLlxuICAgKlxuICAgKiAgQHJldHVybiBmbG9hdHxib29sICAgUmV0dXJucyBhIGZsb2F0IGlmIGEgdmVyc2lvbiBudW1iZXIgaXMgZGV0ZWN0ZWQsXG4gICAqICAgICAgICAgICAgICAgICAgICAgICBvdGhlcndpc2UgdHJ1ZS9mYWxzZS5cbiAgICovXG4gIG9zeDogZnVuY3Rpb24gb3N4KCkge1xuICAgIHJldHVybiBfcG9wdWxhdGUoKSB8fCBfb3N4O1xuICB9LFxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGUgdXNlciBpcyBydW5uaW5nIExpbnV4LlxuICAgKlxuICAgKiBAcmV0dXJuIGJvb2wgYHRydWUnIGlmIHRoZSB1c2VyJ3MgT1MgaXMgc29tZSBmbGF2b3Igb2YgTGludXguXG4gICAqL1xuICBsaW51eDogZnVuY3Rpb24gbGludXgoKSB7XG4gICAgcmV0dXJuIF9wb3B1bGF0ZSgpIHx8IF9saW51eDtcbiAgfSxcblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIHVzZXIgaXMgcnVubmluZyBvbiBhbiBpUGhvbmUgb3IgaVBvZCBwbGF0Zm9ybS5cbiAgICpcbiAgICogQHJldHVybiBib29sIGB0cnVlJyBpZiB0aGUgdXNlciBpcyBydW5uaW5nIHNvbWUgZmxhdm9yIG9mIHRoZVxuICAgKiAgICBpUGhvbmUgT1MuXG4gICAqL1xuICBpcGhvbmU6IGZ1bmN0aW9uIGlwaG9uZSgpIHtcbiAgICByZXR1cm4gX3BvcHVsYXRlKCkgfHwgX2lwaG9uZTtcbiAgfSxcblxuICBtb2JpbGU6IGZ1bmN0aW9uIG1vYmlsZSgpIHtcbiAgICByZXR1cm4gX3BvcHVsYXRlKCkgfHwgX2lwaG9uZSB8fCBfaXBhZCB8fCBfYW5kcm9pZCB8fCBfbW9iaWxlO1xuICB9LFxuXG4gIG5hdGl2ZUFwcDogZnVuY3Rpb24gbmF0aXZlQXBwKCkge1xuICAgIC8vIHdlYnZpZXdzIGluc2lkZSBvZiB0aGUgbmF0aXZlIGFwcHNcbiAgICByZXR1cm4gX3BvcHVsYXRlKCkgfHwgX25hdGl2ZTtcbiAgfSxcblxuICBhbmRyb2lkOiBmdW5jdGlvbiBhbmRyb2lkKCkge1xuICAgIHJldHVybiBfcG9wdWxhdGUoKSB8fCBfYW5kcm9pZDtcbiAgfSxcblxuICBpcGFkOiBmdW5jdGlvbiBpcGFkKCkge1xuICAgIHJldHVybiBfcG9wdWxhdGUoKSB8fCBfaXBhZDtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBVc2VyQWdlbnRfREVQUkVDQVRFRDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL1VzZXJBZ2VudF9ERVBSRUNBVEVELmpzXG4gKiogbW9kdWxlIGlkID0gMzAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgaXNFdmVudFN1cHBvcnRlZFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIEV4ZWN1dGlvbkVudmlyb25tZW50ID0gcmVxdWlyZSgnLi9FeGVjdXRpb25FbnZpcm9ubWVudCcpO1xuXG52YXIgdXNlSGFzRmVhdHVyZTtcbmlmIChFeGVjdXRpb25FbnZpcm9ubWVudC5jYW5Vc2VET00pIHtcbiAgdXNlSGFzRmVhdHVyZSA9IGRvY3VtZW50LmltcGxlbWVudGF0aW9uICYmIGRvY3VtZW50LmltcGxlbWVudGF0aW9uLmhhc0ZlYXR1cmUgJiZcbiAgLy8gYWx3YXlzIHJldHVybnMgdHJ1ZSBpbiBuZXdlciBicm93c2VycyBhcyBwZXIgdGhlIHN0YW5kYXJkLlxuICAvLyBAc2VlIGh0dHA6Ly9kb20uc3BlYy53aGF0d2cub3JnLyNkb20tZG9taW1wbGVtZW50YXRpb24taGFzZmVhdHVyZVxuICBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5oYXNGZWF0dXJlKCcnLCAnJykgIT09IHRydWU7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGFuIGV2ZW50IGlzIHN1cHBvcnRlZCBpbiB0aGUgY3VycmVudCBleGVjdXRpb24gZW52aXJvbm1lbnQuXG4gKlxuICogTk9URTogVGhpcyB3aWxsIG5vdCB3b3JrIGNvcnJlY3RseSBmb3Igbm9uLWdlbmVyaWMgZXZlbnRzIHN1Y2ggYXMgYGNoYW5nZWAsXG4gKiBgcmVzZXRgLCBgbG9hZGAsIGBlcnJvcmAsIGFuZCBgc2VsZWN0YC5cbiAqXG4gKiBCb3Jyb3dzIGZyb20gTW9kZXJuaXpyLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWVTdWZmaXggRXZlbnQgbmFtZSwgZS5nLiBcImNsaWNrXCIuXG4gKiBAcGFyYW0gez9ib29sZWFufSBjYXB0dXJlIENoZWNrIGlmIHRoZSBjYXB0dXJlIHBoYXNlIGlzIHN1cHBvcnRlZC5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIGV2ZW50IGlzIHN1cHBvcnRlZC5cbiAqIEBpbnRlcm5hbFxuICogQGxpY2Vuc2UgTW9kZXJuaXpyIDMuMC4wcHJlIChDdXN0b20gQnVpbGQpIHwgTUlUXG4gKi9cbmZ1bmN0aW9uIGlzRXZlbnRTdXBwb3J0ZWQoZXZlbnROYW1lU3VmZml4LCBjYXB0dXJlKSB7XG4gIGlmICghRXhlY3V0aW9uRW52aXJvbm1lbnQuY2FuVXNlRE9NIHx8IGNhcHR1cmUgJiYgISgnYWRkRXZlbnRMaXN0ZW5lcicgaW4gZG9jdW1lbnQpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGV2ZW50TmFtZSA9ICdvbicgKyBldmVudE5hbWVTdWZmaXg7XG4gIHZhciBpc1N1cHBvcnRlZCA9IChldmVudE5hbWUgaW4gZG9jdW1lbnQpO1xuXG4gIGlmICghaXNTdXBwb3J0ZWQpIHtcbiAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGV2ZW50TmFtZSwgJ3JldHVybjsnKTtcbiAgICBpc1N1cHBvcnRlZCA9IHR5cGVvZiBlbGVtZW50W2V2ZW50TmFtZV0gPT09ICdmdW5jdGlvbic7XG4gIH1cblxuICBpZiAoIWlzU3VwcG9ydGVkICYmIHVzZUhhc0ZlYXR1cmUgJiYgZXZlbnROYW1lU3VmZml4ID09PSAnd2hlZWwnKSB7XG4gICAgLy8gVGhpcyBpcyB0aGUgb25seSB3YXkgdG8gdGVzdCBzdXBwb3J0IGZvciB0aGUgYHdoZWVsYCBldmVudCBpbiBJRTkrLlxuICAgIGlzU3VwcG9ydGVkID0gZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uaGFzRmVhdHVyZSgnRXZlbnRzLndoZWVsJywgJzMuMCcpO1xuICB9XG5cbiAgcmV0dXJuIGlzU3VwcG9ydGVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRXZlbnRTdXBwb3J0ZWQ7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9pc0V2ZW50U3VwcG9ydGVkLmpzXG4gKiogbW9kdWxlIGlkID0gMzA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBFeGVjdXRpb25FbnZpcm9ubWVudFxuICovXG5cbi8qanNsaW50IGV2aWw6IHRydWUgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgY2FuVXNlRE9NID0gISEodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50ICYmIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcblxuLyoqXG4gKiBTaW1wbGUsIGxpZ2h0d2VpZ2h0IG1vZHVsZSBhc3Npc3Rpbmcgd2l0aCB0aGUgZGV0ZWN0aW9uIGFuZCBjb250ZXh0IG9mXG4gKiBXb3JrZXIuIEhlbHBzIGF2b2lkIGNpcmN1bGFyIGRlcGVuZGVuY2llcyBhbmQgYWxsb3dzIGNvZGUgdG8gcmVhc29uIGFib3V0XG4gKiB3aGV0aGVyIG9yIG5vdCB0aGV5IGFyZSBpbiBhIFdvcmtlciwgZXZlbiBpZiB0aGV5IG5ldmVyIGluY2x1ZGUgdGhlIG1haW5cbiAqIGBSZWFjdFdvcmtlcmAgZGVwZW5kZW5jeS5cbiAqL1xudmFyIEV4ZWN1dGlvbkVudmlyb25tZW50ID0ge1xuXG4gIGNhblVzZURPTTogY2FuVXNlRE9NLFxuXG4gIGNhblVzZVdvcmtlcnM6IHR5cGVvZiBXb3JrZXIgIT09ICd1bmRlZmluZWQnLFxuXG4gIGNhblVzZUV2ZW50TGlzdGVuZXJzOiBjYW5Vc2VET00gJiYgISEod2luZG93LmFkZEV2ZW50TGlzdGVuZXIgfHwgd2luZG93LmF0dGFjaEV2ZW50KSxcblxuICBjYW5Vc2VWaWV3cG9ydDogY2FuVXNlRE9NICYmICEhd2luZG93LnNjcmVlbixcblxuICBpc0luV29ya2VyOiAhY2FuVXNlRE9NIC8vIEZvciBub3csIHRoaXMgaXMgdHJ1ZSAtIG1pZ2h0IGNoYW5nZSBpbiB0aGUgZnV0dXJlLlxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEV4ZWN1dGlvbkVudmlyb25tZW50O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvRXhlY3V0aW9uRW52aXJvbm1lbnQuanNcbiAqKiBtb2R1bGUgaWQgPSAzMDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIHJlcXVlc3RBbmltYXRpb25GcmFtZVBvbHlmaWxsXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW1wdHlGdW5jdGlvbiA9IHJlcXVpcmUoJy4vZW1wdHlGdW5jdGlvbicpO1xudmFyIG5hdGl2ZVJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHJlcXVpcmUoJy4vbmF0aXZlUmVxdWVzdEFuaW1hdGlvbkZyYW1lJyk7XG5cbnZhciBsYXN0VGltZSA9IDA7XG5cbi8qKlxuICogSGVyZSBpcyB0aGUgbmF0aXZlIGFuZCBwb2x5ZmlsbCB2ZXJzaW9uIG9mIHJlcXVlc3RBbmltYXRpb25GcmFtZS5cbiAqIFBsZWFzZSBkb24ndCB1c2UgaXQgZGlyZWN0bHkgYW5kIHVzZSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgbW9kdWxlIGluc3RlYWQuXG4gKi9cbnZhciByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBuYXRpdmVSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIHZhciBjdXJyVGltZSA9IERhdGUubm93KCk7XG4gIHZhciB0aW1lRGVsYXkgPSBNYXRoLm1heCgwLCAxNiAtIChjdXJyVGltZSAtIGxhc3RUaW1lKSk7XG4gIGxhc3RUaW1lID0gY3VyclRpbWUgKyB0aW1lRGVsYXk7XG4gIHJldHVybiBnbG9iYWwuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgY2FsbGJhY2soRGF0ZS5ub3coKSk7XG4gIH0sIHRpbWVEZWxheSk7XG59O1xuXG4vLyBXb3JrcyBhcm91bmQgYSByYXJlIGJ1ZyBpbiBTYWZhcmkgNiB3aGVyZSB0aGUgZmlyc3QgcmVxdWVzdCBpcyBuZXZlciBpbnZva2VkLlxucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGVtcHR5RnVuY3Rpb24pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVlc3RBbmltYXRpb25GcmFtZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL3JlcXVlc3RBbmltYXRpb25GcmFtZVBvbHlmaWxsLmpzXG4gKiogbW9kdWxlIGlkID0gMzA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBuYXRpdmVSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIG5hdGl2ZVJlcXVlc3RBbmltYXRpb25GcmFtZSA9IGdsb2JhbC5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgZ2xvYmFsLndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCBnbG9iYWwubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IGdsb2JhbC5vUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IGdsb2JhbC5tc1JlcXVlc3RBbmltYXRpb25GcmFtZTtcblxubW9kdWxlLmV4cG9ydHMgPSBuYXRpdmVSZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9uYXRpdmVSZXF1ZXN0QW5pbWF0aW9uRnJhbWUuanNcbiAqKiBtb2R1bGUgaWQgPSAzMDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIFNjcm9sbGJhci5yZWFjdFxuICogQHR5cGVjaGVja3NcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBET01Nb3VzZU1vdmVUcmFja2VyID0gcmVxdWlyZSgnLi9ET01Nb3VzZU1vdmVUcmFja2VyJyk7XG52YXIgS2V5cyA9IHJlcXVpcmUoJy4vS2V5cycpO1xudmFyIFJlYWN0ID0gcmVxdWlyZSgnLi9SZWFjdCcpO1xudmFyIFJlYWN0RE9NID0gcmVxdWlyZSgnLi9SZWFjdERPTScpO1xudmFyIFJlYWN0Q29tcG9uZW50V2l0aFB1cmVSZW5kZXJNaXhpbiA9IHJlcXVpcmUoJy4vUmVhY3RDb21wb25lbnRXaXRoUHVyZVJlbmRlck1peGluJyk7XG52YXIgUmVhY3RXaGVlbEhhbmRsZXIgPSByZXF1aXJlKCcuL1JlYWN0V2hlZWxIYW5kbGVyJyk7XG5cbnZhciBjc3NWYXIgPSByZXF1aXJlKCcuL2Nzc1ZhcicpO1xudmFyIGN4ID0gcmVxdWlyZSgnLi9jeCcpO1xudmFyIGVtcHR5RnVuY3Rpb24gPSByZXF1aXJlKCcuL2VtcHR5RnVuY3Rpb24nKTtcbnZhciB0cmFuc2xhdGVET01Qb3NpdGlvblhZID0gcmVxdWlyZSgnLi90cmFuc2xhdGVET01Qb3NpdGlvblhZJyk7XG5cbnZhciBQcm9wVHlwZXMgPSBSZWFjdC5Qcm9wVHlwZXM7XG5cbnZhciBVTlNDUk9MTEFCTEVfU1RBVEUgPSB7XG4gIHBvc2l0aW9uOiAwLFxuICBzY3JvbGxhYmxlOiBmYWxzZVxufTtcblxudmFyIEZBQ0VfTUFSR0lOID0gcGFyc2VJbnQoY3NzVmFyKCdzY3JvbGxiYXItZmFjZS1tYXJnaW4nKSwgMTApO1xudmFyIEZBQ0VfTUFSR0lOXzIgPSBGQUNFX01BUkdJTiAqIDI7XG52YXIgRkFDRV9TSVpFX01JTiA9IDMwO1xudmFyIEtFWUJPQVJEX1NDUk9MTF9BTU9VTlQgPSA0MDtcblxudmFyIF9sYXN0U2Nyb2xsZWRTY3JvbGxiYXIgPSBudWxsO1xuXG52YXIgU2Nyb2xsYmFyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1Njcm9sbGJhcicsXG5cbiAgbWl4aW5zOiBbUmVhY3RDb21wb25lbnRXaXRoUHVyZVJlbmRlck1peGluXSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBjb250ZW50U2l6ZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIGRlZmF1bHRQb3NpdGlvbjogUHJvcFR5cGVzLm51bWJlcixcbiAgICBpc09wYXF1ZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgb3JpZW50YXRpb246IFByb3BUeXBlcy5vbmVPZihbJ3ZlcnRpY2FsJywgJ2hvcml6b250YWwnXSksXG4gICAgb25TY3JvbGw6IFByb3BUeXBlcy5mdW5jLFxuICAgIHBvc2l0aW9uOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHNpemU6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICB0cmFja0NvbG9yOiBQcm9wVHlwZXMub25lT2YoWydncmF5J10pLFxuICAgIHpJbmRleDogUHJvcFR5cGVzLm51bWJlcixcbiAgICB2ZXJ0aWNhbFRvcDogUHJvcFR5cGVzLm51bWJlclxuICB9LFxuXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkgLypvYmplY3QqL3tcbiAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiB0aGlzLl9jYWxjdWxhdGVTdGF0ZShwcm9wcy5wb3NpdGlvbiB8fCBwcm9wcy5kZWZhdWx0UG9zaXRpb24gfHwgMCwgcHJvcHMuc2l6ZSwgcHJvcHMuY29udGVudFNpemUsIHByb3BzLm9yaWVudGF0aW9uKTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKCAvKm9iamVjdCovbmV4dFByb3BzKSB7XG4gICAgdmFyIGNvbnRyb2xsZWRQb3NpdGlvbiA9IG5leHRQcm9wcy5wb3NpdGlvbjtcbiAgICBpZiAoY29udHJvbGxlZFBvc2l0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX3NldE5leHRTdGF0ZSh0aGlzLl9jYWxjdWxhdGVTdGF0ZSh0aGlzLnN0YXRlLnBvc2l0aW9uLCBuZXh0UHJvcHMuc2l6ZSwgbmV4dFByb3BzLmNvbnRlbnRTaXplLCBuZXh0UHJvcHMub3JpZW50YXRpb24pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc2V0TmV4dFN0YXRlKHRoaXMuX2NhbGN1bGF0ZVN0YXRlKGNvbnRyb2xsZWRQb3NpdGlvbiwgbmV4dFByb3BzLnNpemUsIG5leHRQcm9wcy5jb250ZW50U2l6ZSwgbmV4dFByb3BzLm9yaWVudGF0aW9uKSwgbmV4dFByb3BzKTtcbiAgICB9XG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSAvKm9iamVjdCove1xuICAgIHJldHVybiB7XG4gICAgICBkZWZhdWx0UG9zaXRpb246IDAsXG4gICAgICBpc09wYXF1ZTogZmFsc2UsXG4gICAgICBvblNjcm9sbDogZW1wdHlGdW5jdGlvbixcbiAgICAgIG9yaWVudGF0aW9uOiAndmVydGljYWwnLFxuICAgICAgekluZGV4OiA5OVxuICAgIH07XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSAvKj9vYmplY3QqL3tcbiAgICBpZiAoIXRoaXMuc3RhdGUuc2Nyb2xsYWJsZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIHNpemUgPSB0aGlzLnByb3BzLnNpemU7XG4gICAgdmFyIG1haW5TdHlsZTtcbiAgICB2YXIgZmFjZVN0eWxlO1xuICAgIHZhciBpc0hvcml6b250YWwgPSB0aGlzLnN0YXRlLmlzSG9yaXpvbnRhbDtcbiAgICB2YXIgaXNWZXJ0aWNhbCA9ICFpc0hvcml6b250YWw7XG4gICAgdmFyIGlzQWN0aXZlID0gdGhpcy5zdGF0ZS5mb2N1c2VkIHx8IHRoaXMuc3RhdGUuaXNEcmFnZ2luZztcbiAgICB2YXIgZmFjZVNpemUgPSB0aGlzLnN0YXRlLmZhY2VTaXplO1xuICAgIHZhciBpc09wYXF1ZSA9IHRoaXMucHJvcHMuaXNPcGFxdWU7XG4gICAgdmFyIHZlcnRpY2FsVG9wID0gdGhpcy5wcm9wcy52ZXJ0aWNhbFRvcCB8fCAwO1xuXG4gICAgdmFyIG1haW5DbGFzc05hbWUgPSBjeCh7XG4gICAgICAnU2Nyb2xsYmFyTGF5b3V0L21haW4nOiB0cnVlLFxuICAgICAgJ1Njcm9sbGJhckxheW91dC9tYWluVmVydGljYWwnOiBpc1ZlcnRpY2FsLFxuICAgICAgJ1Njcm9sbGJhckxheW91dC9tYWluSG9yaXpvbnRhbCc6IGlzSG9yaXpvbnRhbCxcbiAgICAgICdwdWJsaWMvU2Nyb2xsYmFyL21haW4nOiB0cnVlLFxuICAgICAgJ3B1YmxpYy9TY3JvbGxiYXIvbWFpbk9wYXF1ZSc6IGlzT3BhcXVlLFxuICAgICAgJ3B1YmxpYy9TY3JvbGxiYXIvbWFpbkFjdGl2ZSc6IGlzQWN0aXZlXG4gICAgfSk7XG5cbiAgICB2YXIgZmFjZUNsYXNzTmFtZSA9IGN4KHtcbiAgICAgICdTY3JvbGxiYXJMYXlvdXQvZmFjZSc6IHRydWUsXG4gICAgICAnU2Nyb2xsYmFyTGF5b3V0L2ZhY2VIb3Jpem9udGFsJzogaXNIb3Jpem9udGFsLFxuICAgICAgJ1Njcm9sbGJhckxheW91dC9mYWNlVmVydGljYWwnOiBpc1ZlcnRpY2FsLFxuICAgICAgJ3B1YmxpYy9TY3JvbGxiYXIvZmFjZUFjdGl2ZSc6IGlzQWN0aXZlLFxuICAgICAgJ3B1YmxpYy9TY3JvbGxiYXIvZmFjZSc6IHRydWVcbiAgICB9KTtcblxuICAgIHZhciBwb3NpdGlvbiA9IHRoaXMuc3RhdGUucG9zaXRpb24gKiB0aGlzLnN0YXRlLnNjYWxlICsgRkFDRV9NQVJHSU47XG5cbiAgICBpZiAoaXNIb3Jpem9udGFsKSB7XG4gICAgICBtYWluU3R5bGUgPSB7XG4gICAgICAgIHdpZHRoOiBzaXplXG4gICAgICB9O1xuICAgICAgZmFjZVN0eWxlID0ge1xuICAgICAgICB3aWR0aDogZmFjZVNpemUgLSBGQUNFX01BUkdJTl8yXG4gICAgICB9O1xuICAgICAgdHJhbnNsYXRlRE9NUG9zaXRpb25YWShmYWNlU3R5bGUsIHBvc2l0aW9uLCAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWFpblN0eWxlID0ge1xuICAgICAgICB0b3A6IHZlcnRpY2FsVG9wLFxuICAgICAgICBoZWlnaHQ6IHNpemVcbiAgICAgIH07XG4gICAgICBmYWNlU3R5bGUgPSB7XG4gICAgICAgIGhlaWdodDogZmFjZVNpemUgLSBGQUNFX01BUkdJTl8yXG4gICAgICB9O1xuICAgICAgdHJhbnNsYXRlRE9NUG9zaXRpb25YWShmYWNlU3R5bGUsIDAsIHBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICBtYWluU3R5bGUuekluZGV4ID0gdGhpcy5wcm9wcy56SW5kZXg7XG5cbiAgICBpZiAodGhpcy5wcm9wcy50cmFja0NvbG9yID09PSAnZ3JheScpIHtcbiAgICAgIG1haW5TdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjc3NWYXIoJ2ZidWktZGVza3RvcC1iYWNrZ3JvdW5kLWxpZ2h0Jyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIHtcbiAgICAgICAgb25Gb2N1czogdGhpcy5fb25Gb2N1cyxcbiAgICAgICAgb25CbHVyOiB0aGlzLl9vbkJsdXIsXG4gICAgICAgIG9uS2V5RG93bjogdGhpcy5fb25LZXlEb3duLFxuICAgICAgICBvbk1vdXNlRG93bjogdGhpcy5fb25Nb3VzZURvd24sXG4gICAgICAgIG9uV2hlZWw6IHRoaXMuX3doZWVsSGFuZGxlci5vbldoZWVsLFxuICAgICAgICBjbGFzc05hbWU6IG1haW5DbGFzc05hbWUsXG4gICAgICAgIHN0eWxlOiBtYWluU3R5bGUsXG4gICAgICAgIHRhYkluZGV4OiAwIH0sXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIHJlZjogJ2ZhY2UnLFxuICAgICAgICBjbGFzc05hbWU6IGZhY2VDbGFzc05hbWUsXG4gICAgICAgIHN0eWxlOiBmYWNlU3R5bGVcbiAgICAgIH0pXG4gICAgKTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB2YXIgaXNIb3Jpem9udGFsID0gdGhpcy5wcm9wcy5vcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnO1xuICAgIHZhciBvbldoZWVsID0gaXNIb3Jpem9udGFsID8gdGhpcy5fb25XaGVlbFggOiB0aGlzLl9vbldoZWVsWTtcblxuICAgIHRoaXMuX3doZWVsSGFuZGxlciA9IG5ldyBSZWFjdFdoZWVsSGFuZGxlcihvbldoZWVsLCB0aGlzLl9zaG91bGRIYW5kbGVYLCAvLyBTaG91bGQgaGFubGRlIGhvcml6b250YWwgc2Nyb2xsXG4gICAgdGhpcy5fc2hvdWxkSGFuZGxlWSAvLyBTaG91bGQgaGFuZGxlIHZlcnRpY2FsIHNjcm9sbFxuICAgICk7XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuX21vdXNlTW92ZVRyYWNrZXIgPSBuZXcgRE9NTW91c2VNb3ZlVHJhY2tlcih0aGlzLl9vbk1vdXNlTW92ZSwgdGhpcy5fb25Nb3VzZU1vdmVFbmQsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCk7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5wb3NpdGlvbiAhPT0gdW5kZWZpbmVkICYmIHRoaXMuc3RhdGUucG9zaXRpb24gIT09IHRoaXMucHJvcHMucG9zaXRpb24pIHtcbiAgICAgIHRoaXMuX2RpZFNjcm9sbCgpO1xuICAgIH1cbiAgfSxcblxuICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5fbmV4dFN0YXRlID0gbnVsbDtcbiAgICB0aGlzLl9tb3VzZU1vdmVUcmFja2VyLnJlbGVhc2VNb3VzZU1vdmVzKCk7XG4gICAgaWYgKF9sYXN0U2Nyb2xsZWRTY3JvbGxiYXIgPT09IHRoaXMpIHtcbiAgICAgIF9sYXN0U2Nyb2xsZWRTY3JvbGxiYXIgPSBudWxsO1xuICAgIH1cbiAgICBkZWxldGUgdGhpcy5fbW91c2VNb3ZlVHJhY2tlcjtcbiAgfSxcblxuICBzY3JvbGxCeTogZnVuY3Rpb24gc2Nyb2xsQnkoIC8qbnVtYmVyKi9kZWx0YSkge1xuICAgIHRoaXMuX29uV2hlZWwoZGVsdGEpO1xuICB9LFxuXG4gIF9zaG91bGRIYW5kbGVYOiBmdW5jdGlvbiBfc2hvdWxkSGFuZGxlWCggLypudW1iZXIqL2RlbHRhKSAvKmJvb2xlYW4qL3tcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5vcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnID8gdGhpcy5fc2hvdWxkSGFuZGxlQ2hhbmdlKGRlbHRhKSA6IGZhbHNlO1xuICB9LFxuXG4gIF9zaG91bGRIYW5kbGVZOiBmdW5jdGlvbiBfc2hvdWxkSGFuZGxlWSggLypudW1iZXIqL2RlbHRhKSAvKmJvb2xlYW4qL3tcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5vcmllbnRhdGlvbiAhPT0gJ2hvcml6b250YWwnID8gdGhpcy5fc2hvdWxkSGFuZGxlQ2hhbmdlKGRlbHRhKSA6IGZhbHNlO1xuICB9LFxuXG4gIF9zaG91bGRIYW5kbGVDaGFuZ2U6IGZ1bmN0aW9uIF9zaG91bGRIYW5kbGVDaGFuZ2UoIC8qbnVtYmVyKi9kZWx0YSkgLypib29sZWFuKi97XG4gICAgdmFyIG5leHRTdGF0ZSA9IHRoaXMuX2NhbGN1bGF0ZVN0YXRlKHRoaXMuc3RhdGUucG9zaXRpb24gKyBkZWx0YSwgdGhpcy5wcm9wcy5zaXplLCB0aGlzLnByb3BzLmNvbnRlbnRTaXplLCB0aGlzLnByb3BzLm9yaWVudGF0aW9uKTtcbiAgICByZXR1cm4gbmV4dFN0YXRlLnBvc2l0aW9uICE9PSB0aGlzLnN0YXRlLnBvc2l0aW9uO1xuICB9LFxuXG4gIF9jYWxjdWxhdGVTdGF0ZTogZnVuY3Rpb24gX2NhbGN1bGF0ZVN0YXRlKFxuICAvKm51bWJlciovcG9zaXRpb24sXG4gIC8qbnVtYmVyKi9zaXplLFxuICAvKm51bWJlciovY29udGVudFNpemUsXG4gIC8qc3RyaW5nKi9vcmllbnRhdGlvbikgLypvYmplY3QqL3tcbiAgICBpZiAoc2l6ZSA8IDEgfHwgY29udGVudFNpemUgPD0gc2l6ZSkge1xuICAgICAgcmV0dXJuIFVOU0NST0xMQUJMRV9TVEFURTtcbiAgICB9XG5cbiAgICB2YXIgc3RhdGVLZXkgPSBwb3NpdGlvbiArICdfJyArIHNpemUgKyAnXycgKyBjb250ZW50U2l6ZSArICdfJyArIG9yaWVudGF0aW9uO1xuICAgIGlmICh0aGlzLl9zdGF0ZUtleSA9PT0gc3RhdGVLZXkpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zdGF0ZUZvcktleTtcbiAgICB9XG5cbiAgICAvLyBUaGVyZSBhcmUgdHdvIHR5cGVzIG9mIHBvc2l0aW9ucyBoZXJlLlxuICAgIC8vIDEpIFBoaXNpY2FsIHBvc2l0aW9uOiBjaGFuZ2VkIGJ5IG1vdXNlIC8ga2V5Ym9hcmRcbiAgICAvLyAyKSBMb2dpY2FsIHBvc2l0aW9uOiBjaGFuZ2VkIGJ5IHByb3BzLlxuICAgIC8vIFRoZSBsb2dpY2FsIHBvc2l0aW9uIHdpbGwgYmUga2VwdCBhcyBhcyBpbnRlcm5hbCBzdGF0ZSBhbmQgdGhlIGByZW5kZXIoKWBcbiAgICAvLyBmdW5jdGlvbiB3aWxsIHRyYW5zbGF0ZSBpdCBpbnRvIHBoeXNpY2FsIHBvc2l0aW9uIHRvIHJlbmRlci5cblxuICAgIHZhciBpc0hvcml6b250YWwgPSBvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnO1xuICAgIHZhciBzY2FsZSA9IHNpemUgLyBjb250ZW50U2l6ZTtcbiAgICB2YXIgZmFjZVNpemUgPSBzaXplICogc2NhbGU7XG5cbiAgICBpZiAoZmFjZVNpemUgPCBGQUNFX1NJWkVfTUlOKSB7XG4gICAgICBzY2FsZSA9IChzaXplIC0gRkFDRV9TSVpFX01JTikgLyAoY29udGVudFNpemUgLSBzaXplKTtcbiAgICAgIGZhY2VTaXplID0gRkFDRV9TSVpFX01JTjtcbiAgICB9XG5cbiAgICB2YXIgc2Nyb2xsYWJsZSA9IHRydWU7XG4gICAgdmFyIG1heFBvc2l0aW9uID0gY29udGVudFNpemUgLSBzaXplO1xuXG4gICAgaWYgKHBvc2l0aW9uIDwgMCkge1xuICAgICAgcG9zaXRpb24gPSAwO1xuICAgIH0gZWxzZSBpZiAocG9zaXRpb24gPiBtYXhQb3NpdGlvbikge1xuICAgICAgcG9zaXRpb24gPSBtYXhQb3NpdGlvbjtcbiAgICB9XG5cbiAgICB2YXIgaXNEcmFnZ2luZyA9IHRoaXMuX21vdXNlTW92ZVRyYWNrZXIgPyB0aGlzLl9tb3VzZU1vdmVUcmFja2VyLmlzRHJhZ2dpbmcoKSA6IGZhbHNlO1xuXG4gICAgLy8gVGhpcyBmdW5jdGlvbiBzaG91bGQgb25seSByZXR1cm4gZmxhdCB2YWx1ZXMgdGhhdCBjYW4gYmUgY29tcGFyZWQgcXVpY2xreVxuICAgIC8vIGJ5IGBSZWFjdENvbXBvbmVudFdpdGhQdXJlUmVuZGVyTWl4aW5gLlxuICAgIHZhciBzdGF0ZSA9IHtcbiAgICAgIGZhY2VTaXplOiBmYWNlU2l6ZSxcbiAgICAgIGlzRHJhZ2dpbmc6IGlzRHJhZ2dpbmcsXG4gICAgICBpc0hvcml6b250YWw6IGlzSG9yaXpvbnRhbCxcbiAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbixcbiAgICAgIHNjYWxlOiBzY2FsZSxcbiAgICAgIHNjcm9sbGFibGU6IHNjcm9sbGFibGVcbiAgICB9O1xuXG4gICAgLy8gY2FjaGUgdGhlIHN0YXRlIGZvciBsYXRlciB1c2UuXG4gICAgdGhpcy5fc3RhdGVLZXkgPSBzdGF0ZUtleTtcbiAgICB0aGlzLl9zdGF0ZUZvcktleSA9IHN0YXRlO1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfSxcblxuICBfb25XaGVlbFk6IGZ1bmN0aW9uIF9vbldoZWVsWSggLypudW1iZXIqL2RlbHRhWCwgLypudW1iZXIqL2RlbHRhWSkge1xuICAgIHRoaXMuX29uV2hlZWwoZGVsdGFZKTtcbiAgfSxcblxuICBfb25XaGVlbFg6IGZ1bmN0aW9uIF9vbldoZWVsWCggLypudW1iZXIqL2RlbHRhWCwgLypudW1iZXIqL2RlbHRhWSkge1xuICAgIHRoaXMuX29uV2hlZWwoZGVsdGFYKTtcbiAgfSxcblxuICBfb25XaGVlbDogZnVuY3Rpb24gX29uV2hlZWwoIC8qbnVtYmVyKi9kZWx0YSkge1xuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG5cbiAgICAvLyBUaGUgbW91c2UgbWF5IG1vdmUgZmFzdGVyIHRoZW4gdGhlIGFuaW1hdGlvbiBmcmFtZSBkb2VzLlxuICAgIC8vIFVzZSBgcmVxdWVzdEFuaW1hdGlvbkZyYW1lYCB0byBhdm9pZCBvdmVyLXVwZGF0aW5nLlxuICAgIHRoaXMuX3NldE5leHRTdGF0ZSh0aGlzLl9jYWxjdWxhdGVTdGF0ZSh0aGlzLnN0YXRlLnBvc2l0aW9uICsgZGVsdGEsIHByb3BzLnNpemUsIHByb3BzLmNvbnRlbnRTaXplLCBwcm9wcy5vcmllbnRhdGlvbikpO1xuICB9LFxuXG4gIF9vbk1vdXNlRG93bjogZnVuY3Rpb24gX29uTW91c2VEb3duKCAvKm9iamVjdCovZXZlbnQpIHtcbiAgICB2YXIgbmV4dFN0YXRlO1xuXG4gICAgaWYgKGV2ZW50LnRhcmdldCAhPT0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5yZWZzLmZhY2UpKSB7XG4gICAgICAvLyBCb3RoIGBvZmZzZXRYYCBhbmQgYGxheWVyWGAgYXJlIG5vbi1zdGFuZGFyZCBET00gcHJvcGVydHkgYnV0IHRoZXkgYXJlXG4gICAgICAvLyBtYWdpY2FsbHkgYXZhaWxhYmxlIGZvciBicm93c2VycyBzb21laG93LlxuICAgICAgdmFyIG5hdGl2ZUV2ZW50ID0gZXZlbnQubmF0aXZlRXZlbnQ7XG4gICAgICB2YXIgcG9zaXRpb24gPSB0aGlzLnN0YXRlLmlzSG9yaXpvbnRhbCA/IG5hdGl2ZUV2ZW50Lm9mZnNldFggfHwgbmF0aXZlRXZlbnQubGF5ZXJYIDogbmF0aXZlRXZlbnQub2Zmc2V0WSB8fCBuYXRpdmVFdmVudC5sYXllclk7XG5cbiAgICAgIC8vIE1vdXNlRG93biBvbiB0aGUgc2Nyb2xsLXRyYWNrIGRpcmVjdGx5LCBtb3ZlIHRoZSBjZW50ZXIgb2YgdGhlXG4gICAgICAvLyBzY3JvbGwtZmFjZSB0byB0aGUgbW91c2UgcG9zaXRpb24uXG4gICAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgcG9zaXRpb24gLz0gdGhpcy5zdGF0ZS5zY2FsZTtcbiAgICAgIG5leHRTdGF0ZSA9IHRoaXMuX2NhbGN1bGF0ZVN0YXRlKHBvc2l0aW9uIC0gdGhpcy5zdGF0ZS5mYWNlU2l6ZSAqIDAuNSAvIHRoaXMuc3RhdGUuc2NhbGUsIHByb3BzLnNpemUsIHByb3BzLmNvbnRlbnRTaXplLCBwcm9wcy5vcmllbnRhdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5leHRTdGF0ZSA9IHt9O1xuICAgIH1cblxuICAgIG5leHRTdGF0ZS5mb2N1c2VkID0gdHJ1ZTtcbiAgICB0aGlzLl9zZXROZXh0U3RhdGUobmV4dFN0YXRlKTtcblxuICAgIHRoaXMuX21vdXNlTW92ZVRyYWNrZXIuY2FwdHVyZU1vdXNlTW92ZXMoZXZlbnQpO1xuICAgIC8vIEZvY3VzIHRoZSBub2RlIHNvIGl0IG1heSByZWNlaXZlIGtleWJvYXJkIGV2ZW50LlxuICAgIFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpLmZvY3VzKCk7XG4gIH0sXG5cbiAgX29uTW91c2VNb3ZlOiBmdW5jdGlvbiBfb25Nb3VzZU1vdmUoIC8qbnVtYmVyKi9kZWx0YVgsIC8qbnVtYmVyKi9kZWx0YVkpIHtcbiAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBkZWx0YSA9IHRoaXMuc3RhdGUuaXNIb3Jpem9udGFsID8gZGVsdGFYIDogZGVsdGFZO1xuICAgIGRlbHRhIC89IHRoaXMuc3RhdGUuc2NhbGU7XG5cbiAgICB0aGlzLl9zZXROZXh0U3RhdGUodGhpcy5fY2FsY3VsYXRlU3RhdGUodGhpcy5zdGF0ZS5wb3NpdGlvbiArIGRlbHRhLCBwcm9wcy5zaXplLCBwcm9wcy5jb250ZW50U2l6ZSwgcHJvcHMub3JpZW50YXRpb24pKTtcbiAgfSxcblxuICBfb25Nb3VzZU1vdmVFbmQ6IGZ1bmN0aW9uIF9vbk1vdXNlTW92ZUVuZCgpIHtcbiAgICB0aGlzLl9uZXh0U3RhdGUgPSBudWxsO1xuICAgIHRoaXMuX21vdXNlTW92ZVRyYWNrZXIucmVsZWFzZU1vdXNlTW92ZXMoKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNEcmFnZ2luZzogZmFsc2UgfSk7XG4gIH0sXG5cbiAgX29uS2V5RG93bjogZnVuY3Rpb24gX29uS2V5RG93biggLypvYmplY3QqL2V2ZW50KSB7XG4gICAgdmFyIGtleUNvZGUgPSBldmVudC5rZXlDb2RlO1xuXG4gICAgaWYgKGtleUNvZGUgPT09IEtleXMuVEFCKSB7XG4gICAgICAvLyBMZXQgZm9jdXMgbW92ZSBvZmYgdGhlIHNjcm9sbGJhci5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgZGlzdGFuY2UgPSBLRVlCT0FSRF9TQ1JPTExfQU1PVU5UO1xuICAgIHZhciBkaXJlY3Rpb24gPSAwO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUuaXNIb3Jpem9udGFsKSB7XG4gICAgICBzd2l0Y2ggKGtleUNvZGUpIHtcbiAgICAgICAgY2FzZSBLZXlzLkhPTUU6XG4gICAgICAgICAgZGlyZWN0aW9uID0gLTE7XG4gICAgICAgICAgZGlzdGFuY2UgPSB0aGlzLnByb3BzLmNvbnRlbnRTaXplO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgS2V5cy5MRUZUOlxuICAgICAgICAgIGRpcmVjdGlvbiA9IC0xO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgS2V5cy5SSUdIVDpcbiAgICAgICAgICBkaXJlY3Rpb24gPSAxO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghdGhpcy5zdGF0ZS5pc0hvcml6b250YWwpIHtcbiAgICAgIHN3aXRjaCAoa2V5Q29kZSkge1xuICAgICAgICBjYXNlIEtleXMuU1BBQ0U6XG4gICAgICAgICAgaWYgKGV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICBkaXJlY3Rpb24gPSAtMTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGlyZWN0aW9uID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBLZXlzLkhPTUU6XG4gICAgICAgICAgZGlyZWN0aW9uID0gLTE7XG4gICAgICAgICAgZGlzdGFuY2UgPSB0aGlzLnByb3BzLmNvbnRlbnRTaXplO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgS2V5cy5VUDpcbiAgICAgICAgICBkaXJlY3Rpb24gPSAtMTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIEtleXMuRE9XTjpcbiAgICAgICAgICBkaXJlY3Rpb24gPSAxO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgS2V5cy5QQUdFX1VQOlxuICAgICAgICAgIGRpcmVjdGlvbiA9IC0xO1xuICAgICAgICAgIGRpc3RhbmNlID0gdGhpcy5wcm9wcy5zaXplO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgS2V5cy5QQUdFX0RPV046XG4gICAgICAgICAgZGlyZWN0aW9uID0gMTtcbiAgICAgICAgICBkaXN0YW5jZSA9IHRoaXMucHJvcHMuc2l6ZTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLl9zZXROZXh0U3RhdGUodGhpcy5fY2FsY3VsYXRlU3RhdGUodGhpcy5zdGF0ZS5wb3NpdGlvbiArIGRpc3RhbmNlICogZGlyZWN0aW9uLCBwcm9wcy5zaXplLCBwcm9wcy5jb250ZW50U2l6ZSwgcHJvcHMub3JpZW50YXRpb24pKTtcbiAgfSxcblxuICBfb25Gb2N1czogZnVuY3Rpb24gX29uRm9jdXMoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBmb2N1c2VkOiB0cnVlXG4gICAgfSk7XG4gIH0sXG5cbiAgX29uQmx1cjogZnVuY3Rpb24gX29uQmx1cigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGZvY3VzZWQ6IGZhbHNlXG4gICAgfSk7XG4gIH0sXG5cbiAgX2JsdXI6IGZ1bmN0aW9uIF9ibHVyKCkge1xuICAgIGlmICh0aGlzLmlzTW91bnRlZCgpKSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLl9vbkJsdXIoKTtcbiAgICAgICAgUmVhY3RET00uZmluZERPTU5vZGUodGhpcykuYmx1cigpO1xuICAgICAgfSBjYXRjaCAob29wcykge1xuICAgICAgICAvLyBwYXNzXG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIF9zZXROZXh0U3RhdGU6IGZ1bmN0aW9uIF9zZXROZXh0U3RhdGUoIC8qb2JqZWN0Ki9uZXh0U3RhdGUsIC8qP29iamVjdCovcHJvcHMpIHtcbiAgICBwcm9wcyA9IHByb3BzIHx8IHRoaXMucHJvcHM7XG4gICAgdmFyIGNvbnRyb2xsZWRQb3NpdGlvbiA9IHByb3BzLnBvc2l0aW9uO1xuICAgIHZhciB3aWxsU2Nyb2xsID0gdGhpcy5zdGF0ZS5wb3NpdGlvbiAhPT0gbmV4dFN0YXRlLnBvc2l0aW9uO1xuICAgIGlmIChjb250cm9sbGVkUG9zaXRpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIGNhbGxiYWNrID0gd2lsbFNjcm9sbCA/IHRoaXMuX2RpZFNjcm9sbCA6IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuc2V0U3RhdGUobmV4dFN0YXRlLCBjYWxsYmFjayk7XG4gICAgfSBlbHNlIGlmIChjb250cm9sbGVkUG9zaXRpb24gPT09IG5leHRTdGF0ZS5wb3NpdGlvbikge1xuICAgICAgdGhpcy5zZXRTdGF0ZShuZXh0U3RhdGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTY3JvbGxpbmcgaXMgY29udHJvbGxlZC4gRG9uJ3QgdXBkYXRlIHRoZSBzdGF0ZSBhbmQgbGV0IHRoZSBvd25lclxuICAgICAgLy8gdG8gdXBkYXRlIHRoZSBzY3JvbGxiYXIgaW5zdGVhZC5cbiAgICAgIGlmIChuZXh0U3RhdGUucG9zaXRpb24gIT09IHVuZGVmaW5lZCAmJiBuZXh0U3RhdGUucG9zaXRpb24gIT09IHRoaXMuc3RhdGUucG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblNjcm9sbChuZXh0U3RhdGUucG9zaXRpb24pO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh3aWxsU2Nyb2xsICYmIF9sYXN0U2Nyb2xsZWRTY3JvbGxiYXIgIT09IHRoaXMpIHtcbiAgICAgIF9sYXN0U2Nyb2xsZWRTY3JvbGxiYXIgJiYgX2xhc3RTY3JvbGxlZFNjcm9sbGJhci5fYmx1cigpO1xuICAgICAgX2xhc3RTY3JvbGxlZFNjcm9sbGJhciA9IHRoaXM7XG4gICAgfVxuICB9LFxuXG4gIF9kaWRTY3JvbGw6IGZ1bmN0aW9uIF9kaWRTY3JvbGwoKSB7XG4gICAgdGhpcy5wcm9wcy5vblNjcm9sbCh0aGlzLnN0YXRlLnBvc2l0aW9uKTtcbiAgfVxufSk7XG5cblNjcm9sbGJhci5LRVlCT0FSRF9TQ1JPTExfQU1PVU5UID0gS0VZQk9BUkRfU0NST0xMX0FNT1VOVDtcblNjcm9sbGJhci5TSVpFID0gcGFyc2VJbnQoY3NzVmFyKCdzY3JvbGxiYXItc2l6ZScpLCAxMCk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2Nyb2xsYmFyO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvU2Nyb2xsYmFyLnJlYWN0LmpzXG4gKiogbW9kdWxlIGlkID0gMzA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIFRoaXMgY2xhc3MgbGlzdGVucyB0byBldmVudHMgb24gdGhlIGRvY3VtZW50IGFuZCB0aGVuIHVwZGF0ZXMgYSByZWFjdFxuICogY29tcG9uZW50IHRocm91Z2ggY2FsbGJhY2tzLlxuICogUGxlYXNlIG5vdGUgdGhhdCBjYXB0dXJlTW91c2VNb3ZlIG11c3QgYmUgY2FsbGVkIGluXG4gKiBvcmRlciB0byBpbml0aWFsaXplIGxpc3RlbmVycyBvbiBtb3VzZW1vdmUgYW5kIG1vdXNldXAuXG4gKiByZWxlYXNlTW91c2VNb3ZlIG11c3QgYmUgY2FsbGVkIHRvIHJlbW92ZSB0aGVtLiBJdCBpcyBpbXBvcnRhbnQgdG9cbiAqIGNhbGwgcmVsZWFzZU1vdXNlTW92ZXMgc2luY2UgbW91c2Vtb3ZlIGlzIGV4cGVuc2l2ZSB0byBsaXN0ZW4gdG8uXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIERPTU1vdXNlTW92ZVRyYWNrZXJcbiAqIEB0eXBlY2hlY2tzXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIEV2ZW50TGlzdGVuZXIgPSByZXF1aXJlKCcuL0V2ZW50TGlzdGVuZXInKTtcblxudmFyIGNhbmNlbEFuaW1hdGlvbkZyYW1lUG9seWZpbGwgPSByZXF1aXJlKCcuL2NhbmNlbEFuaW1hdGlvbkZyYW1lUG9seWZpbGwnKTtcbnZhciByZXF1ZXN0QW5pbWF0aW9uRnJhbWVQb2x5ZmlsbCA9IHJlcXVpcmUoJy4vcmVxdWVzdEFuaW1hdGlvbkZyYW1lUG9seWZpbGwnKTtcblxudmFyIERPTU1vdXNlTW92ZVRyYWNrZXIgPSAoZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICogb25Nb3ZlIGlzIHRoZSBjYWxsYmFjayB0aGF0IHdpbGwgYmUgY2FsbGVkIG9uIGV2ZXJ5IG1vdXNlIG1vdmUuXG4gICAqIG9uTW92ZUVuZCBpcyBjYWxsZWQgb24gbW91c2UgdXAgd2hlbiBtb3ZlbWVudCBoYXMgZW5kZWQuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIERPTU1vdXNlTW92ZVRyYWNrZXIoXG4gIC8qZnVuY3Rpb24qL29uTW92ZSxcbiAgLypmdW5jdGlvbiovb25Nb3ZlRW5kLFxuICAvKkRPTUVsZW1lbnQqL2RvbU5vZGUpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRE9NTW91c2VNb3ZlVHJhY2tlcik7XG5cbiAgICB0aGlzLl9pc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgdGhpcy5fYW5pbWF0aW9uRnJhbWVJRCA9IG51bGw7XG4gICAgdGhpcy5fZG9tTm9kZSA9IGRvbU5vZGU7XG4gICAgdGhpcy5fb25Nb3ZlID0gb25Nb3ZlO1xuICAgIHRoaXMuX29uTW92ZUVuZCA9IG9uTW92ZUVuZDtcbiAgICB0aGlzLl9vbk1vdXNlTW92ZSA9IHRoaXMuX29uTW91c2VNb3ZlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25Nb3VzZVVwID0gdGhpcy5fb25Nb3VzZVVwLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fZGlkTW91c2VNb3ZlID0gdGhpcy5fZGlkTW91c2VNb3ZlLmJpbmQodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBpcyB0byBzZXQgdXAgdGhlIGxpc3RlbmVycyBmb3IgbGlzdGVuaW5nIHRvIG1vdXNlIG1vdmVcbiAgICogYW5kIG1vdXNlIHVwIHNpZ25hbGluZyB0aGUgbW92ZW1lbnQgaGFzIGVuZGVkLiBQbGVhc2Ugbm90ZSB0aGF0IHRoZXNlXG4gICAqIGxpc3RlbmVycyBhcmUgYWRkZWQgYXQgdGhlIGRvY3VtZW50LmJvZHkgbGV2ZWwuIEl0IHRha2VzIGluIGFuIGV2ZW50XG4gICAqIGluIG9yZGVyIHRvIGdyYWIgaW5pdGFsIHN0YXRlLlxuICAgKi9cblxuICBfY3JlYXRlQ2xhc3MoRE9NTW91c2VNb3ZlVHJhY2tlciwgW3tcbiAgICBrZXk6ICdjYXB0dXJlTW91c2VNb3ZlcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNhcHR1cmVNb3VzZU1vdmVzKCAvKm9iamVjdCovZXZlbnQpIHtcbiAgICAgIGlmICghdGhpcy5fZXZlbnRNb3ZlVG9rZW4gJiYgIXRoaXMuX2V2ZW50VXBUb2tlbikge1xuICAgICAgICB0aGlzLl9ldmVudE1vdmVUb2tlbiA9IEV2ZW50TGlzdGVuZXIubGlzdGVuKHRoaXMuX2RvbU5vZGUsICdtb3VzZW1vdmUnLCB0aGlzLl9vbk1vdXNlTW92ZSk7XG4gICAgICAgIHRoaXMuX2V2ZW50VXBUb2tlbiA9IEV2ZW50TGlzdGVuZXIubGlzdGVuKHRoaXMuX2RvbU5vZGUsICdtb3VzZXVwJywgdGhpcy5fb25Nb3VzZVVwKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLl9pc0RyYWdnaW5nKSB7XG4gICAgICAgIHRoaXMuX2RlbHRhWCA9IDA7XG4gICAgICAgIHRoaXMuX2RlbHRhWSA9IDA7XG4gICAgICAgIHRoaXMuX2lzRHJhZ2dpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLl94ID0gZXZlbnQuY2xpZW50WDtcbiAgICAgICAgdGhpcy5feSA9IGV2ZW50LmNsaWVudFk7XG4gICAgICB9XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZXNlIHJlbGVhc2VzIGFsbCBvZiB0aGUgbGlzdGVuZXJzIG9uIGRvY3VtZW50LmJvZHkuXG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6ICdyZWxlYXNlTW91c2VNb3ZlcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbGVhc2VNb3VzZU1vdmVzKCkge1xuICAgICAgaWYgKHRoaXMuX2V2ZW50TW92ZVRva2VuICYmIHRoaXMuX2V2ZW50VXBUb2tlbikge1xuICAgICAgICB0aGlzLl9ldmVudE1vdmVUb2tlbi5yZW1vdmUoKTtcbiAgICAgICAgdGhpcy5fZXZlbnRNb3ZlVG9rZW4gPSBudWxsO1xuICAgICAgICB0aGlzLl9ldmVudFVwVG9rZW4ucmVtb3ZlKCk7XG4gICAgICAgIHRoaXMuX2V2ZW50VXBUb2tlbiA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9hbmltYXRpb25GcmFtZUlEICE9PSBudWxsKSB7XG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lUG9seWZpbGwodGhpcy5fYW5pbWF0aW9uRnJhbWVJRCk7XG4gICAgICAgIHRoaXMuX2FuaW1hdGlvbkZyYW1lSUQgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5faXNEcmFnZ2luZykge1xuICAgICAgICB0aGlzLl9pc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3ggPSBudWxsO1xuICAgICAgICB0aGlzLl95ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IGlmIHRoZSBtb3VzZSBtb3ZlbWVudCBpcyBiZWluZyB0cmFja2VkLlxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiAnaXNEcmFnZ2luZycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzRHJhZ2dpbmcoKSAvKmJvb2xlYW4qL3tcbiAgICAgIHJldHVybiB0aGlzLl9pc0RyYWdnaW5nO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxzIG9uTW92ZSBwYXNzZWQgaW50byBjb25zdHJ1Y3RvciBhbmQgdXBkYXRlcyBpbnRlcm5hbCBzdGF0ZS5cbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogJ19vbk1vdXNlTW92ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9vbk1vdXNlTW92ZSggLypvYmplY3QqL2V2ZW50KSB7XG4gICAgICB2YXIgeCA9IGV2ZW50LmNsaWVudFg7XG4gICAgICB2YXIgeSA9IGV2ZW50LmNsaWVudFk7XG5cbiAgICAgIHRoaXMuX2RlbHRhWCArPSB4IC0gdGhpcy5feDtcbiAgICAgIHRoaXMuX2RlbHRhWSArPSB5IC0gdGhpcy5feTtcblxuICAgICAgaWYgKHRoaXMuX2FuaW1hdGlvbkZyYW1lSUQgPT09IG51bGwpIHtcbiAgICAgICAgLy8gVGhlIG1vdXNlIG1heSBtb3ZlIGZhc3RlciB0aGVuIHRoZSBhbmltYXRpb24gZnJhbWUgZG9lcy5cbiAgICAgICAgLy8gVXNlIGByZXF1ZXN0QW5pbWF0aW9uRnJhbWVQb2x5ZmlsbGAgdG8gYXZvaWQgb3Zlci11cGRhdGluZy5cbiAgICAgICAgdGhpcy5fYW5pbWF0aW9uRnJhbWVJRCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZVBvbHlmaWxsKHRoaXMuX2RpZE1vdXNlTW92ZSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3ggPSB4O1xuICAgICAgdGhpcy5feSA9IHk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ19kaWRNb3VzZU1vdmUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZGlkTW91c2VNb3ZlKCkge1xuICAgICAgdGhpcy5fYW5pbWF0aW9uRnJhbWVJRCA9IG51bGw7XG4gICAgICB0aGlzLl9vbk1vdmUodGhpcy5fZGVsdGFYLCB0aGlzLl9kZWx0YVkpO1xuICAgICAgdGhpcy5fZGVsdGFYID0gMDtcbiAgICAgIHRoaXMuX2RlbHRhWSA9IDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbHMgb25Nb3ZlRW5kIHBhc3NlZCBpbnRvIGNvbnN0cnVjdG9yIGFuZCB1cGRhdGVzIGludGVybmFsIHN0YXRlLlxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiAnX29uTW91c2VVcCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9vbk1vdXNlVXAoKSB7XG4gICAgICBpZiAodGhpcy5fYW5pbWF0aW9uRnJhbWVJRCkge1xuICAgICAgICB0aGlzLl9kaWRNb3VzZU1vdmUoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX29uTW92ZUVuZCgpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBET01Nb3VzZU1vdmVUcmFja2VyO1xufSkoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBET01Nb3VzZU1vdmVUcmFja2VyO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvRE9NTW91c2VNb3ZlVHJhY2tlci5qc1xuICoqIG1vZHVsZSBpZCA9IDMwOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgRXZlbnRMaXN0ZW5lclxuICogQHR5cGVjaGVja3NcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBlbXB0eUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9lbXB0eUZ1bmN0aW9uJyk7XG5cbi8qKlxuICogVXBzdHJlYW0gdmVyc2lvbiBvZiBldmVudCBsaXN0ZW5lci4gRG9lcyBub3QgdGFrZSBpbnRvIGFjY291bnQgc3BlY2lmaWNcbiAqIG5hdHVyZSBvZiBwbGF0Zm9ybS5cbiAqL1xudmFyIEV2ZW50TGlzdGVuZXIgPSB7XG4gIC8qKlxuICAgKiBMaXN0ZW4gdG8gRE9NIGV2ZW50cyBkdXJpbmcgdGhlIGJ1YmJsZSBwaGFzZS5cbiAgICpcbiAgICogQHBhcmFtIHtET01FdmVudFRhcmdldH0gdGFyZ2V0IERPTSBlbGVtZW50IHRvIHJlZ2lzdGVyIGxpc3RlbmVyIG9uLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRUeXBlIEV2ZW50IHR5cGUsIGUuZy4gJ2NsaWNrJyBvciAnbW91c2VvdmVyJy5cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGJhY2sgZnVuY3Rpb24uXG4gICAqIEByZXR1cm4ge29iamVjdH0gT2JqZWN0IHdpdGggYSBgcmVtb3ZlYCBtZXRob2QuXG4gICAqL1xuICBsaXN0ZW46IGZ1bmN0aW9uIGxpc3Rlbih0YXJnZXQsIGV2ZW50VHlwZSwgY2FsbGJhY2spIHtcbiAgICBpZiAodGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgY2FsbGJhY2ssIGZhbHNlKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgICAgIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgY2FsbGJhY2ssIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKHRhcmdldC5hdHRhY2hFdmVudCkge1xuICAgICAgdGFyZ2V0LmF0dGFjaEV2ZW50KCdvbicgKyBldmVudFR5cGUsIGNhbGxiYWNrKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgICAgIHRhcmdldC5kZXRhY2hFdmVudCgnb24nICsgZXZlbnRUeXBlLCBjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBMaXN0ZW4gdG8gRE9NIGV2ZW50cyBkdXJpbmcgdGhlIGNhcHR1cmUgcGhhc2UuXG4gICAqXG4gICAqIEBwYXJhbSB7RE9NRXZlbnRUYXJnZXR9IHRhcmdldCBET00gZWxlbWVudCB0byByZWdpc3RlciBsaXN0ZW5lciBvbi5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50VHlwZSBFdmVudCB0eXBlLCBlLmcuICdjbGljaycgb3IgJ21vdXNlb3ZlcicuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxiYWNrIGZ1bmN0aW9uLlxuICAgKiBAcmV0dXJuIHtvYmplY3R9IE9iamVjdCB3aXRoIGEgYHJlbW92ZWAgbWV0aG9kLlxuICAgKi9cbiAgY2FwdHVyZTogZnVuY3Rpb24gY2FwdHVyZSh0YXJnZXQsIGV2ZW50VHlwZSwgY2FsbGJhY2spIHtcbiAgICBpZiAodGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgY2FsbGJhY2ssIHRydWUpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICAgICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBjYWxsYmFjaywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0F0dGVtcHRlZCB0byBsaXN0ZW4gdG8gZXZlbnRzIGR1cmluZyB0aGUgY2FwdHVyZSBwaGFzZSBvbiBhICcgKyAnYnJvd3NlciB0aGF0IGRvZXMgbm90IHN1cHBvcnQgdGhlIGNhcHR1cmUgcGhhc2UuIFlvdXIgYXBwbGljYXRpb24gJyArICd3aWxsIG5vdCByZWNlaXZlIHNvbWUgZXZlbnRzLicpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcmVtb3ZlOiBlbXB0eUZ1bmN0aW9uXG4gICAgICB9O1xuICAgIH1cbiAgfSxcblxuICByZWdpc3RlckRlZmF1bHQ6IGZ1bmN0aW9uIHJlZ2lzdGVyRGVmYXVsdCgpIHt9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50TGlzdGVuZXI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9FdmVudExpc3RlbmVyLmpzXG4gKiogbW9kdWxlIGlkID0gMzEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBjYW5jZWxBbmltYXRpb25GcmFtZVBvbHlmaWxsXG4gKi9cblxuLyoqXG4gKiBIZXJlIGlzIHRoZSBuYXRpdmUgYW5kIHBvbHlmaWxsIHZlcnNpb24gb2YgY2FuY2VsQW5pbWF0aW9uRnJhbWUuXG4gKiBQbGVhc2UgZG9uJ3QgdXNlIGl0IGRpcmVjdGx5IGFuZCB1c2UgY2FuY2VsQW5pbWF0aW9uRnJhbWUgbW9kdWxlIGluc3RlYWQuXG4gKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBnbG9iYWwuY2FuY2VsQW5pbWF0aW9uRnJhbWUgfHwgZ2xvYmFsLndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lIHx8IGdsb2JhbC5tb3pDYW5jZWxBbmltYXRpb25GcmFtZSB8fCBnbG9iYWwub0NhbmNlbEFuaW1hdGlvbkZyYW1lIHx8IGdsb2JhbC5tc0NhbmNlbEFuaW1hdGlvbkZyYW1lIHx8IGdsb2JhbC5jbGVhclRpbWVvdXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gY2FuY2VsQW5pbWF0aW9uRnJhbWU7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9jYW5jZWxBbmltYXRpb25GcmFtZVBvbHlmaWxsLmpzXG4gKiogbW9kdWxlIGlkID0gMzExXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBLZXlzXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBCQUNLU1BBQ0U6IDgsXG4gIFRBQjogOSxcbiAgUkVUVVJOOiAxMyxcbiAgQUxUOiAxOCxcbiAgRVNDOiAyNyxcbiAgU1BBQ0U6IDMyLFxuICBQQUdFX1VQOiAzMyxcbiAgUEFHRV9ET1dOOiAzNCxcbiAgRU5EOiAzNSxcbiAgSE9NRTogMzYsXG4gIExFRlQ6IDM3LFxuICBVUDogMzgsXG4gIFJJR0hUOiAzOSxcbiAgRE9XTjogNDAsXG4gIERFTEVURTogNDYsXG4gIENPTU1BOiAxODgsXG4gIFBFUklPRDogMTkwLFxuICBBOiA2NSxcbiAgWjogOTAsXG4gIFpFUk86IDQ4LFxuICBOVU1QQURfMDogOTYsXG4gIE5VTVBBRF85OiAxMDVcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9LZXlzLmpzXG4gKiogbW9kdWxlIGlkID0gMzEyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBSZWFjdERPTVxuICovXG5cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL1JlYWN0RE9NLmpzXG4gKiogbW9kdWxlIGlkID0gMzEzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBjc3NWYXJcbiAqIEB0eXBlY2hlY2tzXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBDU1NfVkFSUyA9IHtcbiAgJ3Njcm9sbGJhci1mYWNlLWFjdGl2ZS1jb2xvcic6ICcjN2Q3ZDdkJyxcbiAgJ3Njcm9sbGJhci1mYWNlLWNvbG9yJzogJyNjMmMyYzInLFxuICAnc2Nyb2xsYmFyLWZhY2UtbWFyZ2luJzogJzRweCcsXG4gICdzY3JvbGxiYXItZmFjZS1yYWRpdXMnOiAnNnB4JyxcbiAgJ3Njcm9sbGJhci1zaXplJzogJzE1cHgnLFxuICAnc2Nyb2xsYmFyLXNpemUtbGFyZ2UnOiAnMTdweCcsXG4gICdzY3JvbGxiYXItdHJhY2stY29sb3InOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpJyxcbiAgJ2ZidWktd2hpdGUnOiAnI2ZmZicsXG4gICdmYnVpLWRlc2t0b3AtYmFja2dyb3VuZC1saWdodCc6ICcjZjZmN2Y4J1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICovXG5mdW5jdGlvbiBjc3NWYXIobmFtZSkge1xuICBpZiAoQ1NTX1ZBUlMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICByZXR1cm4gQ1NTX1ZBUlNbbmFtZV07XG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IoJ2Nzc1ZhcicgKyAnKFwiJyArIG5hbWUgKyAnXCIpOiBVbmV4cGVjdGVkIGNsYXNzIHRyYW5zZm9ybWF0aW9uLicpO1xufVxuXG5jc3NWYXIuQ1NTX1ZBUlMgPSBDU1NfVkFSUztcblxubW9kdWxlLmV4cG9ydHMgPSBjc3NWYXI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9jc3NWYXIuanNcbiAqKiBtb2R1bGUgaWQgPSAzMTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIGN4XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgc2xhc2hSZXBsYWNlUmVnZXggPSAvXFwvL2c7XG52YXIgY2FjaGUgPSB7fTtcblxuZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lKGNsYXNzTmFtZSkge1xuICBpZiAoY2FjaGVbY2xhc3NOYW1lXSkge1xuICAgIHJldHVybiBjYWNoZVtjbGFzc05hbWVdO1xuICB9XG5cbiAgY2FjaGVbY2xhc3NOYW1lXSA9IGNsYXNzTmFtZS5yZXBsYWNlKHNsYXNoUmVwbGFjZVJlZ2V4LCAnXycpO1xuICByZXR1cm4gY2FjaGVbY2xhc3NOYW1lXTtcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gbWFyayBzdHJpbmcgbGl0ZXJhbHMgcmVwcmVzZW50aW5nIENTUyBjbGFzcyBuYW1lc1xuICogc28gdGhhdCB0aGV5IGNhbiBiZSB0cmFuc2Zvcm1lZCBzdGF0aWNhbGx5LiBUaGlzIGFsbG93cyBmb3IgbW9kdWxhcml6YXRpb25cbiAqIGFuZCBtaW5pZmljYXRpb24gb2YgQ1NTIGNsYXNzIG5hbWVzLlxuICpcbiAqIEluIHN0YXRpY191cHN0cmVhbSwgdGhpcyBmdW5jdGlvbiBpcyBhY3R1YWxseSBpbXBsZW1lbnRlZCwgYnV0IGl0IHNob3VsZFxuICogZXZlbnR1YWxseSBiZSByZXBsYWNlZCB3aXRoIHNvbWV0aGluZyBtb3JlIGRlc2NyaXB0aXZlLCBhbmQgdGhlIHRyYW5zZm9ybVxuICogdGhhdCBpcyB1c2VkIGluIHRoZSBtYWluIHN0YWNrIHNob3VsZCBiZSBwb3J0ZWQgZm9yIHVzZSBlbHNld2hlcmUuXG4gKlxuICogQHBhcmFtIHN0cmluZ3xvYmplY3QgY2xhc3NOYW1lIHRvIG1vZHVsYXJpemUsIG9yIGFuIG9iamVjdCBvZiBrZXkvdmFsdWVzLlxuICogICAgICAgICAgICAgICAgICAgICAgSW4gdGhlIG9iamVjdCBjYXNlLCB0aGUgdmFsdWVzIGFyZSBjb25kaXRpb25zIHRoYXRcbiAqICAgICAgICAgICAgICAgICAgICAgIGRldGVybWluZSBpZiB0aGUgY2xhc3NOYW1lIGtleXMgc2hvdWxkIGJlIGluY2x1ZGVkLlxuICogQHBhcmFtIFtzdHJpbmcgLi4uXSAgVmFyaWFibGUgbGlzdCBvZiBjbGFzc05hbWVzIGluIHRoZSBzdHJpbmcgY2FzZS5cbiAqIEByZXR1cm4gc3RyaW5nICAgICAgIFJlbmRlcmFibGUgc3BhY2Utc2VwYXJhdGVkIENTUyBjbGFzc05hbWUuXG4gKi9cbmZ1bmN0aW9uIGN4KGNsYXNzTmFtZXMpIHtcbiAgdmFyIGNsYXNzTmFtZXNBcnJheTtcbiAgaWYgKHR5cGVvZiBjbGFzc05hbWVzID09ICdvYmplY3QnKSB7XG4gICAgY2xhc3NOYW1lc0FycmF5ID0gT2JqZWN0LmtleXMoY2xhc3NOYW1lcykuZmlsdGVyKGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgICAgIHJldHVybiBjbGFzc05hbWVzW2NsYXNzTmFtZV07XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgY2xhc3NOYW1lc0FycmF5ID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgfVxuXG4gIHJldHVybiBjbGFzc05hbWVzQXJyYXkubWFwKGdldENsYXNzTmFtZSkuam9pbignICcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGN4O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvY3guanNcbiAqKiBtb2R1bGUgaWQgPSAzMTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIHRyYW5zbGF0ZURPTVBvc2l0aW9uWFlcbiAqIEB0eXBlY2hlY2tzXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgQnJvd3NlclN1cHBvcnRDb3JlID0gcmVxdWlyZSgnLi9Ccm93c2VyU3VwcG9ydENvcmUnKTtcblxudmFyIGdldFZlbmRvclByZWZpeGVkTmFtZSA9IHJlcXVpcmUoJy4vZ2V0VmVuZG9yUHJlZml4ZWROYW1lJyk7XG5cbnZhciBUUkFOU0ZPUk0gPSBnZXRWZW5kb3JQcmVmaXhlZE5hbWUoJ3RyYW5zZm9ybScpO1xudmFyIEJBQ0tGQUNFX1ZJU0lCSUxJVFkgPSBnZXRWZW5kb3JQcmVmaXhlZE5hbWUoJ2JhY2tmYWNlVmlzaWJpbGl0eScpO1xuXG52YXIgdHJhbnNsYXRlRE9NUG9zaXRpb25YWSA9IChmdW5jdGlvbiAoKSB7XG4gIGlmIChCcm93c2VyU3VwcG9ydENvcmUuaGFzQ1NTVHJhbnNmb3JtcygpKSB7XG4gICAgdmFyIHVhID0gZ2xvYmFsLndpbmRvdyA/IGdsb2JhbC53aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCA6ICdVTktOT1dOJztcbiAgICB2YXIgaXNTYWZhcmkgPSAvU2FmYXJpXFwvLy50ZXN0KHVhKSAmJiAhL0Nocm9tZVxcLy8udGVzdCh1YSk7XG4gICAgLy8gSXQgYXBwZWFycyB0aGF0IFNhZmFyaSBtZXNzZXMgdXAgdGhlIGNvbXBvc2l0aW9uIG9yZGVyXG4gICAgLy8gb2YgR1BVLWFjY2VsZXJhdGVkIGxheWVyc1xuICAgIC8vIChzZWUgYnVnIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD02MTgyNCkuXG4gICAgLy8gVXNlIDJEIHRyYW5zbGF0aW9uIGluc3RlYWQuXG4gICAgaWYgKCFpc1NhZmFyaSAmJiBCcm93c2VyU3VwcG9ydENvcmUuaGFzQ1NTM0RUcmFuc2Zvcm1zKCkpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoIC8qb2JqZWN0Ki9zdHlsZSwgLypudW1iZXIqL3gsIC8qbnVtYmVyKi95KSB7XG4gICAgICAgIHN0eWxlW1RSQU5TRk9STV0gPSAndHJhbnNsYXRlM2QoJyArIHggKyAncHgsJyArIHkgKyAncHgsMCknO1xuICAgICAgICBzdHlsZVtCQUNLRkFDRV9WSVNJQklMSVRZXSA9ICdoaWRkZW4nO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICggLypvYmplY3QqL3N0eWxlLCAvKm51bWJlcioveCwgLypudW1iZXIqL3kpIHtcbiAgICAgICAgc3R5bGVbVFJBTlNGT1JNXSA9ICd0cmFuc2xhdGUoJyArIHggKyAncHgsJyArIHkgKyAncHgpJztcbiAgICAgIH07XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBmdW5jdGlvbiAoIC8qb2JqZWN0Ki9zdHlsZSwgLypudW1iZXIqL3gsIC8qbnVtYmVyKi95KSB7XG4gICAgICBzdHlsZS5sZWZ0ID0geCArICdweCc7XG4gICAgICBzdHlsZS50b3AgPSB5ICsgJ3B4JztcbiAgICB9O1xuICB9XG59KSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRyYW5zbGF0ZURPTVBvc2l0aW9uWFk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC90cmFuc2xhdGVET01Qb3NpdGlvblhZLmpzXG4gKiogbW9kdWxlIGlkID0gMzE2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBCcm93c2VyU3VwcG9ydENvcmVcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBnZXRWZW5kb3JQcmVmaXhlZE5hbWUgPSByZXF1aXJlKCcuL2dldFZlbmRvclByZWZpeGVkTmFtZScpO1xuXG52YXIgQnJvd3NlclN1cHBvcnRDb3JlID0ge1xuICAvKipcbiAgICogQHJldHVybiB7Ym9vbH0gVHJ1ZSBpZiBicm93c2VyIHN1cHBvcnRzIGNzcyBhbmltYXRpb25zLlxuICAgKi9cbiAgaGFzQ1NTQW5pbWF0aW9uczogZnVuY3Rpb24gaGFzQ1NTQW5pbWF0aW9ucygpIHtcbiAgICByZXR1cm4gISFnZXRWZW5kb3JQcmVmaXhlZE5hbWUoJ2FuaW1hdGlvbk5hbWUnKTtcbiAgfSxcblxuICAvKipcbiAgICogQHJldHVybiB7Ym9vbH0gVHJ1ZSBpZiBicm93c2VyIHN1cHBvcnRzIGNzcyB0cmFuc2Zvcm1zLlxuICAgKi9cbiAgaGFzQ1NTVHJhbnNmb3JtczogZnVuY3Rpb24gaGFzQ1NTVHJhbnNmb3JtcygpIHtcbiAgICByZXR1cm4gISFnZXRWZW5kb3JQcmVmaXhlZE5hbWUoJ3RyYW5zZm9ybScpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtib29sfSBUcnVlIGlmIGJyb3dzZXIgc3VwcG9ydHMgY3NzIDNkIHRyYW5zZm9ybXMuXG4gICAqL1xuICBoYXNDU1MzRFRyYW5zZm9ybXM6IGZ1bmN0aW9uIGhhc0NTUzNEVHJhbnNmb3JtcygpIHtcbiAgICByZXR1cm4gISFnZXRWZW5kb3JQcmVmaXhlZE5hbWUoJ3BlcnNwZWN0aXZlJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge2Jvb2x9IFRydWUgaWYgYnJvd3NlciBzdXBwb3J0cyBjc3MgdHJhbnNpdGlvbnMuXG4gICAqL1xuICBoYXNDU1NUcmFuc2l0aW9uczogZnVuY3Rpb24gaGFzQ1NTVHJhbnNpdGlvbnMoKSB7XG4gICAgcmV0dXJuICEhZ2V0VmVuZG9yUHJlZml4ZWROYW1lKCd0cmFuc2l0aW9uJyk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQnJvd3NlclN1cHBvcnRDb3JlO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvQnJvd3NlclN1cHBvcnRDb3JlLmpzXG4gKiogbW9kdWxlIGlkID0gMzE3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBnZXRWZW5kb3JQcmVmaXhlZE5hbWVcbiAqIEB0eXBlY2hlY2tzXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgRXhlY3V0aW9uRW52aXJvbm1lbnQgPSByZXF1aXJlKCcuL0V4ZWN1dGlvbkVudmlyb25tZW50Jyk7XG5cbnZhciBjYW1lbGl6ZSA9IHJlcXVpcmUoJy4vY2FtZWxpemUnKTtcbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCcuL2ludmFyaWFudCcpO1xuXG52YXIgbWVtb2l6ZWQgPSB7fTtcbnZhciBwcmVmaXhlcyA9IFsnV2Via2l0JywgJ21zJywgJ01veicsICdPJ107XG52YXIgcHJlZml4UmVnZXggPSBuZXcgUmVnRXhwKCdeKCcgKyBwcmVmaXhlcy5qb2luKCd8JykgKyAnKScpO1xudmFyIHRlc3RTdHlsZSA9IEV4ZWN1dGlvbkVudmlyb25tZW50LmNhblVzZURPTSA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLnN0eWxlIDoge307XG5cbmZ1bmN0aW9uIGdldFdpdGhQcmVmaXgobmFtZSkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByZWZpeGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHByZWZpeGVkTmFtZSA9IHByZWZpeGVzW2ldICsgbmFtZTtcbiAgICBpZiAocHJlZml4ZWROYW1lIGluIHRlc3RTdHlsZSkge1xuICAgICAgcmV0dXJuIHByZWZpeGVkTmFtZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHByb3BlcnR5IE5hbWUgb2YgYSBjc3MgcHJvcGVydHkgdG8gY2hlY2sgZm9yLlxuICogQHJldHVybiB7P3N0cmluZ30gcHJvcGVydHkgbmFtZSBzdXBwb3J0ZWQgaW4gdGhlIGJyb3dzZXIsIG9yIG51bGwgaWYgbm90XG4gKiBzdXBwb3J0ZWQuXG4gKi9cbmZ1bmN0aW9uIGdldFZlbmRvclByZWZpeGVkTmFtZShwcm9wZXJ0eSkge1xuICB2YXIgbmFtZSA9IGNhbWVsaXplKHByb3BlcnR5KTtcbiAgaWYgKG1lbW9pemVkW25hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgY2FwaXRhbGl6ZWROYW1lID0gbmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG5hbWUuc2xpY2UoMSk7XG4gICAgaWYgKHByZWZpeFJlZ2V4LnRlc3QoY2FwaXRhbGl6ZWROYW1lKSkge1xuICAgICAgaW52YXJpYW50KGZhbHNlLCAnZ2V0VmVuZG9yUHJlZml4ZWROYW1lIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCB1bnByZWZpeGVkJyArICdDU1MgcHJvcGVydHkgbmFtZXMuIEl0IHdhcyBjYWxsZWQgd2l0aCAlcycsIHByb3BlcnR5KTtcbiAgICB9XG4gICAgbWVtb2l6ZWRbbmFtZV0gPSBuYW1lIGluIHRlc3RTdHlsZSA/IG5hbWUgOiBnZXRXaXRoUHJlZml4KGNhcGl0YWxpemVkTmFtZSk7XG4gIH1cbiAgcmV0dXJuIG1lbW9pemVkW25hbWVdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFZlbmRvclByZWZpeGVkTmFtZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL2dldFZlbmRvclByZWZpeGVkTmFtZS5qc1xuICoqIG1vZHVsZSBpZCA9IDMxOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgY2FtZWxpemVcbiAqIEB0eXBlY2hlY2tzXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaHlwaGVuUGF0dGVybiA9IC8tKC4pL2c7XG5cbi8qKlxuICogQ2FtZWxjYXNlcyBhIGh5cGhlbmF0ZWQgc3RyaW5nLCBmb3IgZXhhbXBsZTpcbiAqXG4gKiAgID4gY2FtZWxpemUoJ2JhY2tncm91bmQtY29sb3InKVxuICogICA8IFwiYmFja2dyb3VuZENvbG9yXCJcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGNhbWVsaXplKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoX2h5cGhlblBhdHRlcm4sIGZ1bmN0aW9uIChfLCBjaGFyYWN0ZXIpIHtcbiAgICByZXR1cm4gY2hhcmFjdGVyLnRvVXBwZXJDYXNlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNhbWVsaXplO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvY2FtZWxpemUuanNcbiAqKiBtb2R1bGUgaWQgPSAzMTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIGludmFyaWFudFxuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIFVzZSBpbnZhcmlhbnQoKSB0byBhc3NlcnQgc3RhdGUgd2hpY2ggeW91ciBwcm9ncmFtIGFzc3VtZXMgdG8gYmUgdHJ1ZS5cbiAqXG4gKiBQcm92aWRlIHNwcmludGYtc3R5bGUgZm9ybWF0IChvbmx5ICVzIGlzIHN1cHBvcnRlZCkgYW5kIGFyZ3VtZW50c1xuICogdG8gcHJvdmlkZSBpbmZvcm1hdGlvbiBhYm91dCB3aGF0IGJyb2tlIGFuZCB3aGF0IHlvdSB3ZXJlXG4gKiBleHBlY3RpbmcuXG4gKlxuICogVGhlIGludmFyaWFudCBtZXNzYWdlIHdpbGwgYmUgc3RyaXBwZWQgaW4gcHJvZHVjdGlvbiwgYnV0IHRoZSBpbnZhcmlhbnRcbiAqIHdpbGwgcmVtYWluIHRvIGVuc3VyZSBsb2dpYyBkb2VzIG5vdCBkaWZmZXIgaW4gcHJvZHVjdGlvbi5cbiAqL1xuXG52YXIgaW52YXJpYW50ID0gZnVuY3Rpb24gaW52YXJpYW50KGNvbmRpdGlvbiwgZm9ybWF0LCBhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB2YXIgZXJyb3I7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcignTWluaWZpZWQgZXhjZXB0aW9uIG9jY3VycmVkOyB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgJyArICdmb3IgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZSBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYXJncyA9IFthLCBiLCBjLCBkLCBlLCBmXTtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcignSW52YXJpYW50IFZpb2xhdGlvbjogJyArIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgfSkpO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpbnZhcmlhbnQ7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9pbnZhcmlhbnQuanNcbiAqKiBtb2R1bGUgaWQgPSAzMjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIEZpeGVkRGF0YVRhYmxlQnVmZmVyZWRSb3dzLnJlYWN0XG4gKiBAdHlwZWNoZWNrc1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgnLi9SZWFjdCcpO1xudmFyIEZpeGVkRGF0YVRhYmxlUm93QnVmZmVyID0gcmVxdWlyZSgnLi9GaXhlZERhdGFUYWJsZVJvd0J1ZmZlcicpO1xudmFyIEZpeGVkRGF0YVRhYmxlUm93ID0gcmVxdWlyZSgnLi9GaXhlZERhdGFUYWJsZVJvdy5yZWFjdCcpO1xuXG52YXIgY3ggPSByZXF1aXJlKCcuL2N4Jyk7XG52YXIgZW1wdHlGdW5jdGlvbiA9IHJlcXVpcmUoJy4vZW1wdHlGdW5jdGlvbicpO1xudmFyIGpvaW5DbGFzc2VzID0gcmVxdWlyZSgnLi9qb2luQ2xhc3NlcycpO1xudmFyIHRyYW5zbGF0ZURPTVBvc2l0aW9uWFkgPSByZXF1aXJlKCcuL3RyYW5zbGF0ZURPTVBvc2l0aW9uWFknKTtcblxudmFyIFByb3BUeXBlcyA9IFJlYWN0LlByb3BUeXBlcztcblxudmFyIEZpeGVkRGF0YVRhYmxlQnVmZmVyZWRSb3dzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0ZpeGVkRGF0YVRhYmxlQnVmZmVyZWRSb3dzJyxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBpc1Njcm9sbGluZzogUHJvcFR5cGVzLmJvb2wsXG4gICAgZGVmYXVsdFJvd0hlaWdodDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIGZpcnN0Um93SW5kZXg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBmaXJzdFJvd09mZnNldDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIGZpeGVkQ29sdW1uczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgb2Zmc2V0VG9wOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgb25Sb3dDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Sb3dEb3VibGVDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Sb3dNb3VzZURvd246IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uUm93TW91c2VFbnRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Sb3dNb3VzZUxlYXZlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICByb3dDbGFzc05hbWVHZXR0ZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIHJvd3NDb3VudDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIHJvd0hlaWdodEdldHRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgcm93UG9zaXRpb25HZXR0ZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgc2Nyb2xsTGVmdDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIHNjcm9sbGFibGVDb2x1bW5zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgICBzaG93TGFzdFJvd0JvcmRlcjogUHJvcFR5cGVzLmJvb2wsXG4gICAgd2lkdGg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxuICB9LFxuXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkgLypvYmplY3QqL3tcbiAgICB0aGlzLl9yb3dCdWZmZXIgPSBuZXcgRml4ZWREYXRhVGFibGVSb3dCdWZmZXIodGhpcy5wcm9wcy5yb3dzQ291bnQsIHRoaXMucHJvcHMuZGVmYXVsdFJvd0hlaWdodCwgdGhpcy5wcm9wcy5oZWlnaHQsIHRoaXMuX2dldFJvd0hlaWdodCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJvd3NUb1JlbmRlcjogdGhpcy5fcm93QnVmZmVyLmdldFJvd3ModGhpcy5wcm9wcy5maXJzdFJvd0luZGV4LCB0aGlzLnByb3BzLmZpcnN0Um93T2Zmc2V0KVxuICAgIH07XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdGhpcy5fc3RhdGljUm93QXJyYXkgPSBbXTtcbiAgfSxcblxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgc2V0VGltZW91dCh0aGlzLl91cGRhdGVCdWZmZXIsIDEwMDApO1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoIC8qb2JqZWN0Ki9uZXh0UHJvcHMpIHtcbiAgICBpZiAobmV4dFByb3BzLnJvd3NDb3VudCAhPT0gdGhpcy5wcm9wcy5yb3dzQ291bnQgfHwgbmV4dFByb3BzLmRlZmF1bHRSb3dIZWlnaHQgIT09IHRoaXMucHJvcHMuZGVmYXVsdFJvd0hlaWdodCB8fCBuZXh0UHJvcHMuaGVpZ2h0ICE9PSB0aGlzLnByb3BzLmhlaWdodCkge1xuICAgICAgdGhpcy5fcm93QnVmZmVyID0gbmV3IEZpeGVkRGF0YVRhYmxlUm93QnVmZmVyKG5leHRQcm9wcy5yb3dzQ291bnQsIG5leHRQcm9wcy5kZWZhdWx0Um93SGVpZ2h0LCBuZXh0UHJvcHMuaGVpZ2h0LCB0aGlzLl9nZXRSb3dIZWlnaHQpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5pc1Njcm9sbGluZyAmJiAhbmV4dFByb3BzLmlzU2Nyb2xsaW5nKSB7XG4gICAgICB0aGlzLl91cGRhdGVCdWZmZXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHJvd3NUb1JlbmRlcjogdGhpcy5fcm93QnVmZmVyLmdldFJvd3MobmV4dFByb3BzLmZpcnN0Um93SW5kZXgsIG5leHRQcm9wcy5maXJzdFJvd09mZnNldClcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICBfdXBkYXRlQnVmZmVyOiBmdW5jdGlvbiBfdXBkYXRlQnVmZmVyKCkge1xuICAgIGlmICh0aGlzLmlzTW91bnRlZCgpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgcm93c1RvUmVuZGVyOiB0aGlzLl9yb3dCdWZmZXIuZ2V0Um93c1dpdGhVcGRhdGVkQnVmZmVyKClcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICBzaG91bGRDb21wb25lbnRVcGRhdGU6IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZSgpIC8qYm9vbGVhbiove1xuICAgIC8vIERvbid0IGFkZCBQdXJlUmVuZGVyTWl4aW4gdG8gdGhpcyBjb21wb25lbnQgcGxlYXNlLlxuICAgIHJldHVybiB0cnVlO1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLl9zdGF0aWNSb3dBcnJheS5sZW5ndGggPSAwO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkgLypvYmplY3QqL3tcbiAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciByb3dDbGFzc05hbWVHZXR0ZXIgPSBwcm9wcy5yb3dDbGFzc05hbWVHZXR0ZXIgfHwgZW1wdHlGdW5jdGlvbjtcbiAgICB2YXIgcm93UG9zaXRpb25HZXR0ZXIgPSBwcm9wcy5yb3dQb3NpdGlvbkdldHRlcjtcblxuICAgIHZhciByb3dzVG9SZW5kZXIgPSB0aGlzLnN0YXRlLnJvd3NUb1JlbmRlcjtcbiAgICB0aGlzLl9zdGF0aWNSb3dBcnJheS5sZW5ndGggPSByb3dzVG9SZW5kZXIubGVuZ3RoO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCByb3dzVG9SZW5kZXIubGVuZ3RoOyArK2kpIHtcbiAgICAgIHZhciByb3dJbmRleCA9IHJvd3NUb1JlbmRlcltpXTtcbiAgICAgIHZhciBjdXJyZW50Um93SGVpZ2h0ID0gdGhpcy5fZ2V0Um93SGVpZ2h0KHJvd0luZGV4KTtcbiAgICAgIHZhciByb3dPZmZzZXRUb3AgPSByb3dQb3NpdGlvbkdldHRlcihyb3dJbmRleCk7XG5cbiAgICAgIHZhciBoYXNCb3R0b21Cb3JkZXIgPSByb3dJbmRleCA9PT0gcHJvcHMucm93c0NvdW50IC0gMSAmJiBwcm9wcy5zaG93TGFzdFJvd0JvcmRlcjtcblxuICAgICAgdGhpcy5fc3RhdGljUm93QXJyYXlbaV0gPSBSZWFjdC5jcmVhdGVFbGVtZW50KEZpeGVkRGF0YVRhYmxlUm93LCB7XG4gICAgICAgIGtleTogaSxcbiAgICAgICAgaXNTY3JvbGxpbmc6IHByb3BzLmlzU2Nyb2xsaW5nLFxuICAgICAgICBpbmRleDogcm93SW5kZXgsXG4gICAgICAgIHdpZHRoOiBwcm9wcy53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBjdXJyZW50Um93SGVpZ2h0LFxuICAgICAgICBzY3JvbGxMZWZ0OiBNYXRoLnJvdW5kKHByb3BzLnNjcm9sbExlZnQpLFxuICAgICAgICBvZmZzZXRUb3A6IE1hdGgucm91bmQocm93T2Zmc2V0VG9wKSxcbiAgICAgICAgZml4ZWRDb2x1bW5zOiBwcm9wcy5maXhlZENvbHVtbnMsXG4gICAgICAgIHNjcm9sbGFibGVDb2x1bW5zOiBwcm9wcy5zY3JvbGxhYmxlQ29sdW1ucyxcbiAgICAgICAgb25DbGljazogcHJvcHMub25Sb3dDbGljayxcbiAgICAgICAgb25Eb3VibGVDbGljazogcHJvcHMub25Sb3dEb3VibGVDbGljayxcbiAgICAgICAgb25Nb3VzZURvd246IHByb3BzLm9uUm93TW91c2VEb3duLFxuICAgICAgICBvbk1vdXNlRW50ZXI6IHByb3BzLm9uUm93TW91c2VFbnRlcixcbiAgICAgICAgb25Nb3VzZUxlYXZlOiBwcm9wcy5vblJvd01vdXNlTGVhdmUsXG4gICAgICAgIGNsYXNzTmFtZTogam9pbkNsYXNzZXMocm93Q2xhc3NOYW1lR2V0dGVyKHJvd0luZGV4KSwgY3goJ3B1YmxpYy9maXhlZERhdGFUYWJsZS9ib2R5Um93JyksIGN4KHtcbiAgICAgICAgICAnZml4ZWREYXRhVGFibGVMYXlvdXQvaGFzQm90dG9tQm9yZGVyJzogaGFzQm90dG9tQm9yZGVyLFxuICAgICAgICAgICdwdWJsaWMvZml4ZWREYXRhVGFibGUvaGFzQm90dG9tQm9yZGVyJzogaGFzQm90dG9tQm9yZGVyXG4gICAgICAgIH0pKVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFyIGZpcnN0Um93UG9zaXRpb24gPSBwcm9wcy5yb3dQb3NpdGlvbkdldHRlcihwcm9wcy5maXJzdFJvd0luZGV4KTtcblxuICAgIHZhciBzdHlsZSA9IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgcG9pbnRlckV2ZW50czogcHJvcHMuaXNTY3JvbGxpbmcgPyAnbm9uZScgOiAnYXV0bydcbiAgICB9O1xuXG4gICAgdHJhbnNsYXRlRE9NUG9zaXRpb25YWShzdHlsZSwgMCwgcHJvcHMuZmlyc3RSb3dPZmZzZXQgLSBmaXJzdFJvd1Bvc2l0aW9uICsgcHJvcHMub2Zmc2V0VG9wKTtcblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7IHN0eWxlOiBzdHlsZSB9LFxuICAgICAgdGhpcy5fc3RhdGljUm93QXJyYXlcbiAgICApO1xuICB9LFxuXG4gIF9nZXRSb3dIZWlnaHQ6IGZ1bmN0aW9uIF9nZXRSb3dIZWlnaHQoIC8qbnVtYmVyKi9pbmRleCkgLypudW1iZXIqL3tcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5yb3dIZWlnaHRHZXR0ZXIgPyB0aGlzLnByb3BzLnJvd0hlaWdodEdldHRlcihpbmRleCkgOiB0aGlzLnByb3BzLmRlZmF1bHRSb3dIZWlnaHQ7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZpeGVkRGF0YVRhYmxlQnVmZmVyZWRSb3dzO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvRml4ZWREYXRhVGFibGVCdWZmZXJlZFJvd3MucmVhY3QuanNcbiAqKiBtb2R1bGUgaWQgPSAzMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIEZpeGVkRGF0YVRhYmxlUm93QnVmZmVyXG4gKiBAdHlwZWNoZWNrc1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbnZhciBJbnRlZ2VyQnVmZmVyU2V0ID0gcmVxdWlyZSgnLi9JbnRlZ2VyQnVmZmVyU2V0Jyk7XG5cbnZhciBjbGFtcCA9IHJlcXVpcmUoJy4vY2xhbXAnKTtcbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCcuL2ludmFyaWFudCcpO1xudmFyIE1JTl9CVUZGRVJfUk9XUyA9IDM7XG52YXIgTUFYX0JVRkZFUl9ST1dTID0gNjtcblxuLy8gRml4ZWREYXRhVGFibGVSb3dCdWZmZXIgaXMgYSBoZWxwZXIgY2xhc3MgdGhhdCBleGVjdXRlcyByb3cgYnVmZmVyaW5nXG4vLyBsb2dpYyBmb3IgRml4ZWREYXRhVGFibGUuIEl0IGZpZ3VyZXMgb3V0IHdoaWNoIHJvd3Mgc2hvdWxkIGJlIHJlbmRlcmVkXG4vLyBhbmQgaW4gd2hpY2ggcG9zaXRpb25zLlxuXG52YXIgRml4ZWREYXRhVGFibGVSb3dCdWZmZXIgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBGaXhlZERhdGFUYWJsZVJvd0J1ZmZlcihcbiAgLypudW1iZXIqL3Jvd3NDb3VudCxcbiAgLypudW1iZXIqL2RlZmF1bHRSb3dIZWlnaHQsXG4gIC8qbnVtYmVyKi92aWV3cG9ydEhlaWdodCxcbiAgLyo/ZnVuY3Rpb24qL3Jvd0hlaWdodEdldHRlcikge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBGaXhlZERhdGFUYWJsZVJvd0J1ZmZlcik7XG5cbiAgICBpbnZhcmlhbnQoZGVmYXVsdFJvd0hlaWdodCAhPT0gMCwgXCJkZWZhdWx0Um93SGVpZ2h0IG11c24ndCBiZSBlcXVhbCAwIGluIEZpeGVkRGF0YVRhYmxlUm93QnVmZmVyXCIpO1xuXG4gICAgdGhpcy5fYnVmZmVyU2V0ID0gbmV3IEludGVnZXJCdWZmZXJTZXQoKTtcbiAgICB0aGlzLl9kZWZhdWx0Um93SGVpZ2h0ID0gZGVmYXVsdFJvd0hlaWdodDtcbiAgICB0aGlzLl92aWV3cG9ydFJvd3NCZWdpbiA9IDA7XG4gICAgdGhpcy5fdmlld3BvcnRSb3dzRW5kID0gMDtcbiAgICB0aGlzLl9tYXhWaXNpYmxlUm93Q291bnQgPSBNYXRoLmNlaWwodmlld3BvcnRIZWlnaHQgLyBkZWZhdWx0Um93SGVpZ2h0KSArIDE7XG4gICAgdGhpcy5fYnVmZmVyUm93c0NvdW50ID0gY2xhbXAoTWF0aC5mbG9vcih0aGlzLl9tYXhWaXNpYmxlUm93Q291bnQgLyAyKSwgTUlOX0JVRkZFUl9ST1dTLCBNQVhfQlVGRkVSX1JPV1MpO1xuICAgIHRoaXMuX3Jvd3NDb3VudCA9IHJvd3NDb3VudDtcbiAgICB0aGlzLl9yb3dIZWlnaHRHZXR0ZXIgPSByb3dIZWlnaHRHZXR0ZXI7XG4gICAgdGhpcy5fcm93cyA9IFtdO1xuICAgIHRoaXMuX3ZpZXdwb3J0SGVpZ2h0ID0gdmlld3BvcnRIZWlnaHQ7XG5cbiAgICB0aGlzLmdldFJvd3MgPSB0aGlzLmdldFJvd3MuYmluZCh0aGlzKTtcbiAgICB0aGlzLmdldFJvd3NXaXRoVXBkYXRlZEJ1ZmZlciA9IHRoaXMuZ2V0Um93c1dpdGhVcGRhdGVkQnVmZmVyLmJpbmQodGhpcyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoRml4ZWREYXRhVGFibGVSb3dCdWZmZXIsIFt7XG4gICAga2V5OiAnZ2V0Um93c1dpdGhVcGRhdGVkQnVmZmVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Um93c1dpdGhVcGRhdGVkQnVmZmVyKCkgLyphcnJheSove1xuICAgICAgdmFyIHJlbWFpbmluZ0J1ZmZlclJvd3MgPSAyICogdGhpcy5fYnVmZmVyUm93c0NvdW50O1xuICAgICAgdmFyIGJ1ZmZlclJvd0luZGV4ID0gTWF0aC5tYXgodGhpcy5fdmlld3BvcnRSb3dzQmVnaW4gLSB0aGlzLl9idWZmZXJSb3dzQ291bnQsIDApO1xuICAgICAgd2hpbGUgKGJ1ZmZlclJvd0luZGV4IDwgdGhpcy5fdmlld3BvcnRSb3dzQmVnaW4pIHtcbiAgICAgICAgdGhpcy5fYWRkUm93VG9CdWZmZXIoYnVmZmVyUm93SW5kZXgsIHRoaXMuX3ZpZXdwb3J0Um93c0JlZ2luLCB0aGlzLl92aWV3cG9ydFJvd3NFbmQgLSAxKTtcbiAgICAgICAgYnVmZmVyUm93SW5kZXgrKztcbiAgICAgICAgcmVtYWluaW5nQnVmZmVyUm93cy0tO1xuICAgICAgfVxuICAgICAgYnVmZmVyUm93SW5kZXggPSB0aGlzLl92aWV3cG9ydFJvd3NFbmQ7XG4gICAgICB3aGlsZSAoYnVmZmVyUm93SW5kZXggPCB0aGlzLl9yb3dzQ291bnQgJiYgcmVtYWluaW5nQnVmZmVyUm93cyA+IDApIHtcbiAgICAgICAgdGhpcy5fYWRkUm93VG9CdWZmZXIoYnVmZmVyUm93SW5kZXgsIHRoaXMuX3ZpZXdwb3J0Um93c0JlZ2luLCB0aGlzLl92aWV3cG9ydFJvd3NFbmQgLSAxKTtcbiAgICAgICAgYnVmZmVyUm93SW5kZXgrKztcbiAgICAgICAgcmVtYWluaW5nQnVmZmVyUm93cy0tO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuX3Jvd3M7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0Um93cycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFJvd3MoXG4gICAgLypudW1iZXIqL2ZpcnN0Um93SW5kZXgsXG4gICAgLypudW1iZXIqL2ZpcnN0Um93T2Zmc2V0KSAvKmFycmF5Ki97XG4gICAgICB2YXIgdG9wID0gZmlyc3RSb3dPZmZzZXQ7XG4gICAgICB2YXIgdG90YWxIZWlnaHQgPSB0b3A7XG4gICAgICB2YXIgcm93SW5kZXggPSBmaXJzdFJvd0luZGV4O1xuICAgICAgdmFyIGVuZEluZGV4ID0gTWF0aC5taW4oZmlyc3RSb3dJbmRleCArIHRoaXMuX21heFZpc2libGVSb3dDb3VudCwgdGhpcy5fcm93c0NvdW50KTtcblxuICAgICAgdGhpcy5fdmlld3BvcnRSb3dzQmVnaW4gPSBmaXJzdFJvd0luZGV4O1xuICAgICAgd2hpbGUgKHJvd0luZGV4IDwgZW5kSW5kZXggfHwgdG90YWxIZWlnaHQgPCB0aGlzLl92aWV3cG9ydEhlaWdodCAmJiByb3dJbmRleCA8IHRoaXMuX3Jvd3NDb3VudCkge1xuICAgICAgICB0aGlzLl9hZGRSb3dUb0J1ZmZlcihyb3dJbmRleCwgZmlyc3RSb3dJbmRleCwgZW5kSW5kZXggLSAxKTtcbiAgICAgICAgdG90YWxIZWlnaHQgKz0gdGhpcy5fcm93SGVpZ2h0R2V0dGVyKHJvd0luZGV4KTtcbiAgICAgICAgKytyb3dJbmRleDtcbiAgICAgICAgLy8gU3RvcmUgaW5kZXggYWZ0ZXIgdGhlIGxhc3Qgdmlld3BvcnQgcm93IGFzIGVuZCwgdG8gYmUgYWJsZSB0b1xuICAgICAgICAvLyBkaXN0aW5ndWlzaCB3aGVuIHRoZXJlIGFyZSBubyByb3dzIHJlbmRlcmVkIGluIHZpZXdwb3J0XG4gICAgICAgIHRoaXMuX3ZpZXdwb3J0Um93c0VuZCA9IHJvd0luZGV4O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5fcm93cztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdfYWRkUm93VG9CdWZmZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfYWRkUm93VG9CdWZmZXIoXG4gICAgLypudW1iZXIqL3Jvd0luZGV4LFxuICAgIC8qbnVtYmVyKi9maXJzdFZpZXdwb3J0Um93SW5kZXgsXG4gICAgLypudW1iZXIqL2xhc3RWaWV3cG9ydFJvd0luZGV4KSB7XG4gICAgICB2YXIgcm93UG9zaXRpb24gPSB0aGlzLl9idWZmZXJTZXQuZ2V0VmFsdWVQb3NpdGlvbihyb3dJbmRleCk7XG4gICAgICB2YXIgdmlld3BvcnRSb3dzQ291bnQgPSBsYXN0Vmlld3BvcnRSb3dJbmRleCAtIGZpcnN0Vmlld3BvcnRSb3dJbmRleCArIDE7XG4gICAgICB2YXIgYWxsb3dlZFJvd3NDb3VudCA9IHZpZXdwb3J0Um93c0NvdW50ICsgdGhpcy5fYnVmZmVyUm93c0NvdW50ICogMjtcbiAgICAgIGlmIChyb3dQb3NpdGlvbiA9PT0gbnVsbCAmJiB0aGlzLl9idWZmZXJTZXQuZ2V0U2l6ZSgpID49IGFsbG93ZWRSb3dzQ291bnQpIHtcbiAgICAgICAgcm93UG9zaXRpb24gPSB0aGlzLl9idWZmZXJTZXQucmVwbGFjZUZ1cnRoZXN0VmFsdWVQb3NpdGlvbihmaXJzdFZpZXdwb3J0Um93SW5kZXgsIGxhc3RWaWV3cG9ydFJvd0luZGV4LCByb3dJbmRleCk7XG4gICAgICB9XG4gICAgICBpZiAocm93UG9zaXRpb24gPT09IG51bGwpIHtcbiAgICAgICAgLy8gV2UgY2FuJ3QgcmV1c2UgYW55IG9mIGV4aXN0aW5nIHBvc2l0aW9ucyBmb3IgdGhpcyByb3cuIFdlIGhhdmUgdG9cbiAgICAgICAgLy8gY3JlYXRlIG5ldyBwb3NpdGlvblxuICAgICAgICByb3dQb3NpdGlvbiA9IHRoaXMuX2J1ZmZlclNldC5nZXROZXdQb3NpdGlvbkZvclZhbHVlKHJvd0luZGV4KTtcbiAgICAgICAgdGhpcy5fcm93c1tyb3dQb3NpdGlvbl0gPSByb3dJbmRleDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFRoaXMgcm93IGFscmVhZHkgaXMgaW4gdGhlIHRhYmxlIHdpdGggcm93UG9zaXRpb24gcG9zaXRpb24gb3IgaXRcbiAgICAgICAgLy8gY2FuIHJlcGxhY2Ugcm93IHRoYXQgaXMgaW4gdGhhdCBwb3NpdGlvblxuICAgICAgICB0aGlzLl9yb3dzW3Jvd1Bvc2l0aW9uXSA9IHJvd0luZGV4O1xuICAgICAgfVxuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBGaXhlZERhdGFUYWJsZVJvd0J1ZmZlcjtcbn0pKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gRml4ZWREYXRhVGFibGVSb3dCdWZmZXI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9GaXhlZERhdGFUYWJsZVJvd0J1ZmZlci5qc1xuICoqIG1vZHVsZSBpZCA9IDMyMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgSW50ZWdlckJ1ZmZlclNldFxuICogQHR5cGVjaGVja3NcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG52YXIgSGVhcCA9IHJlcXVpcmUoJy4vSGVhcCcpO1xuXG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnLi9pbnZhcmlhbnQnKTtcblxuLy8gRGF0YSBzdHJ1Y3R1cmUgdGhhdCBhbGxvd3MgdG8gc3RvcmUgdmFsdWVzIGFuZCBhc3NpZ24gcG9zaXRpb25zIHRvIHRoZW1cbi8vIGluIGEgd2F5IHRvIG1pbmltaXplIGNoYW5naW5nIHBvc2l0aW9ucyBvZiBzdG9yZWQgdmFsdWVzIHdoZW4gbmV3IG9uZXMgYXJlXG4vLyBhZGRlZCBvciB3aGVuIHNvbWUgdmFsdWVzIGFyZSByZXBsYWNlZC4gU3RvcmVkIGVsZW1lbnRzIGFyZSBhbHdhc3kgYXNzaWduZWRcbi8vIGEgY29uc2VjdXRpdmUgc2V0IG9mIHBvc2l0b2lucyBzdGFydGluIGZyb20gMCB1cCB0byBjb3VudCBvZiBlbGVtZW50cyBsZXNzIDFcbi8vIEZvbGxvd2luZyBhY3Rpb25zIGNhbiBiZSBleGVjdXRlZFxuLy8gKiBnZXQgcG9zaXRpb24gYXNzaWduZWQgdG8gZ2l2ZW4gdmFsdWUgKG51bGwgaWYgdmFsdWUgaXMgbm90IHN0b3JlZClcbi8vICogY3JlYXRlIG5ldyBlbnRyeSBmb3IgbmV3IHZhbHVlIGFuZCBnZXQgYXNzaWduZWQgcG9zaXRpb24gYmFja1xuLy8gKiByZXBsYWNlIHZhbHVlIHRoYXQgaXMgZnVydGhlc3QgZnJvbSBzcGVjaWZpZWQgdmFsdWUgcmFuZ2Ugd2l0aCBuZXcgdmFsdWVcbi8vICAgYW5kIGdldCBpdCdzIHBvc2l0aW9uIGJhY2tcbi8vIEFsbCBvcGVyYXRpb25zIHRha2UgYW1vcnRpemVkIGxvZyhuKSB0aW1lIHdoZXJlIG4gaXMgbnVtYmVyIG9mIGVsZW1lbnRzIGluXG4vLyB0aGUgc2V0LlxuXG52YXIgSW50ZWdlckJ1ZmZlclNldCA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEludGVnZXJCdWZmZXJTZXQoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEludGVnZXJCdWZmZXJTZXQpO1xuXG4gICAgdGhpcy5fdmFsdWVUb1Bvc2l0aW9uTWFwID0ge307XG4gICAgdGhpcy5fc2l6ZSA9IDA7XG4gICAgdGhpcy5fc21hbGxWYWx1ZXMgPSBuZXcgSGVhcChbXSwgLy8gSW5pdGlhbCBkYXRhIGluIHRoZSBoZWFwXG4gICAgdGhpcy5fc21hbGxlckNvbXBhcmF0b3IpO1xuICAgIHRoaXMuX2xhcmdlVmFsdWVzID0gbmV3IEhlYXAoW10sIC8vIEluaXRpYWwgZGF0YSBpbiB0aGUgaGVhcFxuICAgIHRoaXMuX2dyZWF0ZXJDb21wYXJhdG9yKTtcblxuICAgIHRoaXMuZ2V0TmV3UG9zaXRpb25Gb3JWYWx1ZSA9IHRoaXMuZ2V0TmV3UG9zaXRpb25Gb3JWYWx1ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2V0VmFsdWVQb3NpdGlvbiA9IHRoaXMuZ2V0VmFsdWVQb3NpdGlvbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2V0U2l6ZSA9IHRoaXMuZ2V0U2l6ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVwbGFjZUZ1cnRoZXN0VmFsdWVQb3NpdGlvbiA9IHRoaXMucmVwbGFjZUZ1cnRoZXN0VmFsdWVQb3NpdGlvbi5iaW5kKHRoaXMpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEludGVnZXJCdWZmZXJTZXQsIFt7XG4gICAga2V5OiAnZ2V0U2l6ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNpemUoKSAvKm51bWJlciove1xuICAgICAgcmV0dXJuIHRoaXMuX3NpemU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0VmFsdWVQb3NpdGlvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFZhbHVlUG9zaXRpb24oIC8qbnVtYmVyKi92YWx1ZSkgLyo/bnVtYmVyKi97XG4gICAgICBpZiAodGhpcy5fdmFsdWVUb1Bvc2l0aW9uTWFwW3ZhbHVlXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlVG9Qb3NpdGlvbk1hcFt2YWx1ZV07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0TmV3UG9zaXRpb25Gb3JWYWx1ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldE5ld1Bvc2l0aW9uRm9yVmFsdWUoIC8qbnVtYmVyKi92YWx1ZSkgLypudW1iZXIqL3tcbiAgICAgIGludmFyaWFudCh0aGlzLl92YWx1ZVRvUG9zaXRpb25NYXBbdmFsdWVdID09PSB1bmRlZmluZWQsIFwiU2hvdWxkbid0IHRyeSB0byBmaW5kIG5ldyBwb3NpdGlvbiBmb3IgdmFsdWUgYWxyZWFkeSBzdG9yZWQgaW4gQnVmZmVyU2V0XCIpO1xuICAgICAgdmFyIG5ld1Bvc2l0aW9uID0gdGhpcy5fc2l6ZTtcbiAgICAgIHRoaXMuX3NpemUrKztcbiAgICAgIHRoaXMuX3B1c2hUb0hlYXBzKG5ld1Bvc2l0aW9uLCB2YWx1ZSk7XG4gICAgICB0aGlzLl92YWx1ZVRvUG9zaXRpb25NYXBbdmFsdWVdID0gbmV3UG9zaXRpb247XG4gICAgICByZXR1cm4gbmV3UG9zaXRpb247XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVwbGFjZUZ1cnRoZXN0VmFsdWVQb3NpdGlvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlcGxhY2VGdXJ0aGVzdFZhbHVlUG9zaXRpb24oXG4gICAgLypudW1iZXIqL2xvd1ZhbHVlLFxuICAgIC8qbnVtYmVyKi9oaWdoVmFsdWUsXG4gICAgLypudW1iZXIqL25ld1ZhbHVlKSAvKj9udW1iZXIqL3tcbiAgICAgIGludmFyaWFudCh0aGlzLl92YWx1ZVRvUG9zaXRpb25NYXBbbmV3VmFsdWVdID09PSB1bmRlZmluZWQsIFwiU2hvdWxkbid0IHRyeSB0byByZXBsYWNlIHZhbHVlcyB3aXRoIHZhbHVlIGFscmVhZHkgc3RvcmVkIHZhbHVlIGluIFwiICsgXCJCdWZmZXJTZXRcIik7XG5cbiAgICAgIHRoaXMuX2NsZWFuSGVhcHMoKTtcbiAgICAgIGlmICh0aGlzLl9zbWFsbFZhbHVlcy5lbXB0eSgpIHx8IHRoaXMuX2xhcmdlVmFsdWVzLmVtcHR5KCkpIHtcbiAgICAgICAgLy8gVGhyZXJlIGFyZSBjdXJyZW50bHkgbm8gdmFsdWVzIHN0b3JlZC4gV2Ugd2lsbCBoYXZlIHRvIGNyZWF0ZSBuZXdcbiAgICAgICAgLy8gcG9zaXRpb24gZm9yIHRoaXMgdmFsdWUuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgbWluVmFsdWUgPSB0aGlzLl9zbWFsbFZhbHVlcy5wZWVrKCkudmFsdWU7XG4gICAgICB2YXIgbWF4VmFsdWUgPSB0aGlzLl9sYXJnZVZhbHVlcy5wZWVrKCkudmFsdWU7XG4gICAgICBpZiAobWluVmFsdWUgPj0gbG93VmFsdWUgJiYgbWF4VmFsdWUgPD0gaGlnaFZhbHVlKSB7XG4gICAgICAgIC8vIEFsbCB2YWx1ZXMgY3VycmVudGx5IHN0b3JlZCBhcmUgbmVjZXNzYXJ5LCB3ZSBjYW4ndCByZXVzZSBhbnkgb2YgdGhlbS5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciB2YWx1ZVRvUmVwbGFjZTtcbiAgICAgIGlmIChsb3dWYWx1ZSAtIG1pblZhbHVlID4gbWF4VmFsdWUgLSBoaWdoVmFsdWUpIHtcbiAgICAgICAgLy8gbWluVmFsdWUgaXMgZnVydGhlciBmcm9tIHByb3ZpZGVkIHJhbmdlLiBXZSB3aWxsIHJldXNlIGl0J3MgcG9zaXRpb24uXG4gICAgICAgIHZhbHVlVG9SZXBsYWNlID0gbWluVmFsdWU7XG4gICAgICAgIHRoaXMuX3NtYWxsVmFsdWVzLnBvcCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWVUb1JlcGxhY2UgPSBtYXhWYWx1ZTtcbiAgICAgICAgdGhpcy5fbGFyZ2VWYWx1ZXMucG9wKCk7XG4gICAgICB9XG4gICAgICB2YXIgcG9zaXRpb24gPSB0aGlzLl92YWx1ZVRvUG9zaXRpb25NYXBbdmFsdWVUb1JlcGxhY2VdO1xuICAgICAgZGVsZXRlIHRoaXMuX3ZhbHVlVG9Qb3NpdGlvbk1hcFt2YWx1ZVRvUmVwbGFjZV07XG4gICAgICB0aGlzLl92YWx1ZVRvUG9zaXRpb25NYXBbbmV3VmFsdWVdID0gcG9zaXRpb247XG4gICAgICB0aGlzLl9wdXNoVG9IZWFwcyhwb3NpdGlvbiwgbmV3VmFsdWUpO1xuXG4gICAgICByZXR1cm4gcG9zaXRpb247XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnX3B1c2hUb0hlYXBzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3B1c2hUb0hlYXBzKCAvKm51bWJlciovcG9zaXRpb24sIC8qbnVtYmVyKi92YWx1ZSkge1xuICAgICAgdmFyIGVsZW1lbnQgPSB7XG4gICAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbixcbiAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICB9O1xuICAgICAgLy8gV2UgY2FuIHJldXNlIHRoZSBzYW1lIG9iamVjdCBpbiBib3RoIGhlYXBzLCBiZWNhdXNlIHdlIGRvbid0IG11dGF0ZSB0aGVtXG4gICAgICB0aGlzLl9zbWFsbFZhbHVlcy5wdXNoKGVsZW1lbnQpO1xuICAgICAgdGhpcy5fbGFyZ2VWYWx1ZXMucHVzaChlbGVtZW50KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdfY2xlYW5IZWFwcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9jbGVhbkhlYXBzKCkge1xuICAgICAgLy8gV2Ugbm90IHVzdWFsbHkgb25seSByZW1vdmUgb2JqZWN0IGZyb20gb25lIGhlYXAgd2hpbGUgbW92aW5nIHZhbHVlLlxuICAgICAgLy8gSGVyZSB3ZSBtYWtlIHN1cmUgdGhhdCB0aGVyZSBpcyBubyBzdGFsZSBkYXRhIG9uIHRvcCBvZiBoZWFwcy5cbiAgICAgIHRoaXMuX2NsZWFuSGVhcCh0aGlzLl9zbWFsbFZhbHVlcyk7XG4gICAgICB0aGlzLl9jbGVhbkhlYXAodGhpcy5fbGFyZ2VWYWx1ZXMpO1xuICAgICAgdmFyIG1pbkhlYXBTaXplID0gTWF0aC5taW4odGhpcy5fc21hbGxWYWx1ZXMuc2l6ZSgpLCB0aGlzLl9sYXJnZVZhbHVlcy5zaXplKCkpO1xuICAgICAgdmFyIG1heEhlYXBTaXplID0gTWF0aC5tYXgodGhpcy5fc21hbGxWYWx1ZXMuc2l6ZSgpLCB0aGlzLl9sYXJnZVZhbHVlcy5zaXplKCkpO1xuICAgICAgaWYgKG1heEhlYXBTaXplID4gMTAgKiBtaW5IZWFwU2l6ZSkge1xuICAgICAgICAvLyBUaGVyZSBhcmUgbWFueSBvbGQgdmFsdWVzIGluIG9uZSBvZiBoZWFwcy4gV2Ugbm5lZCB0byBnZXQgcmlkIG9mIHRoZW1cbiAgICAgICAgLy8gdG8gbm90IHVzZSB0b28gYXZvaWQgbWVtb3J5IGxlYWtzXG4gICAgICAgIHRoaXMuX3JlY3JlYXRlSGVhcHMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdfcmVjcmVhdGVIZWFwcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9yZWNyZWF0ZUhlYXBzKCkge1xuICAgICAgdmFyIHNvdXJjZUhlYXAgPSB0aGlzLl9zbWFsbFZhbHVlcy5zaXplKCkgPCB0aGlzLl9sYXJnZVZhbHVlcy5zaXplKCkgPyB0aGlzLl9zbWFsbFZhbHVlcyA6IHRoaXMuX2xhcmdlVmFsdWVzO1xuICAgICAgdmFyIG5ld1NtYWxsVmFsdWVzID0gbmV3IEhlYXAoW10sIC8vIEluaXRpYWwgZGF0YSBpbiB0aGUgaGVhcFxuICAgICAgdGhpcy5fc21hbGxlckNvbXBhcmF0b3IpO1xuICAgICAgdmFyIG5ld0xhcmdlVmFsdWVzID0gbmV3IEhlYXAoW10sIC8vIEluaXRpYWwgZGF0YXQgaW4gdGhlIGhlYXBcbiAgICAgIHRoaXMuX2dyZWF0ZXJDb21wYXJhdG9yKTtcbiAgICAgIHdoaWxlICghc291cmNlSGVhcC5lbXB0eSgpKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gc291cmNlSGVhcC5wb3AoKTtcbiAgICAgICAgLy8gUHVzaCBhbGwgc3RpbCB2YWxpZCBlbGVtZW50cyB0byBuZXcgaGVhcHNcbiAgICAgICAgaWYgKHRoaXMuX3ZhbHVlVG9Qb3NpdGlvbk1hcFtlbGVtZW50LnZhbHVlXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgbmV3U21hbGxWYWx1ZXMucHVzaChlbGVtZW50KTtcbiAgICAgICAgICBuZXdMYXJnZVZhbHVlcy5wdXNoKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLl9zbWFsbFZhbHVlcyA9IG5ld1NtYWxsVmFsdWVzO1xuICAgICAgdGhpcy5fbGFyZ2VWYWx1ZXMgPSBuZXdMYXJnZVZhbHVlcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdfY2xlYW5IZWFwJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2NsZWFuSGVhcCggLypvYmplY3QqL2hlYXApIHtcbiAgICAgIHdoaWxlICghaGVhcC5lbXB0eSgpICYmIHRoaXMuX3ZhbHVlVG9Qb3NpdGlvbk1hcFtoZWFwLnBlZWsoKS52YWx1ZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBoZWFwLnBvcCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ19zbWFsbGVyQ29tcGFyYXRvcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9zbWFsbGVyQ29tcGFyYXRvciggLypvYmplY3QqL2xocywgLypvYmplY3QqL3JocykgLypib29sZWFuKi97XG4gICAgICByZXR1cm4gbGhzLnZhbHVlIDwgcmhzLnZhbHVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ19ncmVhdGVyQ29tcGFyYXRvcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9ncmVhdGVyQ29tcGFyYXRvciggLypvYmplY3QqL2xocywgLypvYmplY3QqL3JocykgLypib29sZWFuKi97XG4gICAgICByZXR1cm4gbGhzLnZhbHVlID4gcmhzLnZhbHVlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBJbnRlZ2VyQnVmZmVyU2V0O1xufSkoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbnRlZ2VyQnVmZmVyU2V0O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvSW50ZWdlckJ1ZmZlclNldC5qc1xuICoqIG1vZHVsZSBpZCA9IDMyM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgSGVhcFxuICogQHR5cGVjaGVja3NcbiAqIEBwcmV2ZW50TXVuZ2VcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qXG4gKiBAcGFyYW0geyp9IGFcbiAqIEBwYXJhbSB7Kn0gYlxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxuZnVuY3Rpb24gZGVmYXVsdENvbXBhcmF0b3IoYSwgYikge1xuICByZXR1cm4gYSA8IGI7XG59XG5cbnZhciBIZWFwID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gSGVhcChpdGVtcywgY29tcGFyYXRvcikge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBIZWFwKTtcblxuICAgIHRoaXMuX2l0ZW1zID0gaXRlbXMgfHwgW107XG4gICAgdGhpcy5fc2l6ZSA9IHRoaXMuX2l0ZW1zLmxlbmd0aDtcbiAgICB0aGlzLl9jb21wYXJhdG9yID0gY29tcGFyYXRvciB8fCBkZWZhdWx0Q29tcGFyYXRvcjtcbiAgICB0aGlzLl9oZWFwaWZ5KCk7XG4gIH1cblxuICAvKlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cblxuICBfY3JlYXRlQ2xhc3MoSGVhcCwgW3tcbiAgICBrZXk6ICdlbXB0eScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGVtcHR5KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3NpemUgPT09IDA7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBAcmV0dXJuIHsqfVxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiAncG9wJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcG9wKCkge1xuICAgICAgaWYgKHRoaXMuX3NpemUgPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgZWx0ID0gdGhpcy5faXRlbXNbMF07XG5cbiAgICAgIHZhciBsYXN0RWx0ID0gdGhpcy5faXRlbXMucG9wKCk7XG4gICAgICB0aGlzLl9zaXplLS07XG5cbiAgICAgIGlmICh0aGlzLl9zaXplID4gMCkge1xuICAgICAgICB0aGlzLl9pdGVtc1swXSA9IGxhc3RFbHQ7XG4gICAgICAgIHRoaXMuX3NpbmtEb3duKDApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZWx0O1xuICAgIH1cblxuICAgIC8qXG4gICAgICogQHBhcmFtIHsqfSBpdGVtXG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6ICdwdXNoJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcHVzaChpdGVtKSB7XG4gICAgICB0aGlzLl9pdGVtc1t0aGlzLl9zaXplKytdID0gaXRlbTtcbiAgICAgIHRoaXMuX2J1YmJsZVVwKHRoaXMuX3NpemUgLSAxKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogJ3NpemUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzaXplKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3NpemU7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBAcmV0dXJuIHsqfVxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiAncGVlaycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBlZWsoKSB7XG4gICAgICBpZiAodGhpcy5fc2l6ZSA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLl9pdGVtc1swXTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdfaGVhcGlmeScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9oZWFwaWZ5KCkge1xuICAgICAgZm9yICh2YXIgaW5kZXggPSBNYXRoLmZsb29yKCh0aGlzLl9zaXplICsgMSkgLyAyKTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgICAgICB0aGlzLl9zaW5rRG93bihpbmRleCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBAcGFyZW50IHtudW1iZXJ9IGluZGV4XG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6ICdfYnViYmxlVXAnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfYnViYmxlVXAoaW5kZXgpIHtcbiAgICAgIHZhciBlbHQgPSB0aGlzLl9pdGVtc1tpbmRleF07XG4gICAgICB3aGlsZSAoaW5kZXggPiAwKSB7XG4gICAgICAgIHZhciBwYXJlbnRJbmRleCA9IE1hdGguZmxvb3IoKGluZGV4ICsgMSkgLyAyKSAtIDE7XG4gICAgICAgIHZhciBwYXJlbnRFbHQgPSB0aGlzLl9pdGVtc1twYXJlbnRJbmRleF07XG5cbiAgICAgICAgLy8gaWYgcGFyZW50RWx0IDwgZWx0LCBzdG9wXG4gICAgICAgIGlmICh0aGlzLl9jb21wYXJhdG9yKHBhcmVudEVsdCwgZWx0KSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHN3YXBcbiAgICAgICAgdGhpcy5faXRlbXNbcGFyZW50SW5kZXhdID0gZWx0O1xuICAgICAgICB0aGlzLl9pdGVtc1tpbmRleF0gPSBwYXJlbnRFbHQ7XG4gICAgICAgIGluZGV4ID0gcGFyZW50SW5kZXg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBAcGFyZW50IHtudW1iZXJ9IGluZGV4XG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6ICdfc2lua0Rvd24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfc2lua0Rvd24oaW5kZXgpIHtcbiAgICAgIHZhciBlbHQgPSB0aGlzLl9pdGVtc1tpbmRleF07XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBsZWZ0Q2hpbGRJbmRleCA9IDIgKiAoaW5kZXggKyAxKSAtIDE7XG4gICAgICAgIHZhciByaWdodENoaWxkSW5kZXggPSAyICogKGluZGV4ICsgMSk7XG4gICAgICAgIHZhciBzd2FwSW5kZXggPSAtMTtcblxuICAgICAgICBpZiAobGVmdENoaWxkSW5kZXggPCB0aGlzLl9zaXplKSB7XG4gICAgICAgICAgdmFyIGxlZnRDaGlsZCA9IHRoaXMuX2l0ZW1zW2xlZnRDaGlsZEluZGV4XTtcbiAgICAgICAgICBpZiAodGhpcy5fY29tcGFyYXRvcihsZWZ0Q2hpbGQsIGVsdCkpIHtcbiAgICAgICAgICAgIHN3YXBJbmRleCA9IGxlZnRDaGlsZEluZGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyaWdodENoaWxkSW5kZXggPCB0aGlzLl9zaXplKSB7XG4gICAgICAgICAgdmFyIHJpZ2h0Q2hpbGQgPSB0aGlzLl9pdGVtc1tyaWdodENoaWxkSW5kZXhdO1xuICAgICAgICAgIGlmICh0aGlzLl9jb21wYXJhdG9yKHJpZ2h0Q2hpbGQsIGVsdCkpIHtcbiAgICAgICAgICAgIGlmIChzd2FwSW5kZXggPT09IC0xIHx8IHRoaXMuX2NvbXBhcmF0b3IocmlnaHRDaGlsZCwgdGhpcy5faXRlbXNbc3dhcEluZGV4XSkpIHtcbiAgICAgICAgICAgICAgc3dhcEluZGV4ID0gcmlnaHRDaGlsZEluZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIHdlIGRvbid0IGhhdmUgYSBzd2FwLCBzdG9wXG4gICAgICAgIGlmIChzd2FwSW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5faXRlbXNbaW5kZXhdID0gdGhpcy5faXRlbXNbc3dhcEluZGV4XTtcbiAgICAgICAgdGhpcy5faXRlbXNbc3dhcEluZGV4XSA9IGVsdDtcbiAgICAgICAgaW5kZXggPSBzd2FwSW5kZXg7XG4gICAgICB9XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEhlYXA7XG59KSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhlYXA7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9IZWFwLmpzXG4gKiogbW9kdWxlIGlkID0gMzI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBjbGFtcFxuICogQHR5cGVjaGVja3NcbiAqL1xuXG4vKipcbiAqIENsYW1wcyAob3IgY2xpcHMgb3IgY29uZmluZXMpIHRoZSB2YWx1ZSB0byBiZSBiZXR3ZWVuIG1pbiBhbmQgbWF4LlxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gbWluXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cblwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBjbGFtcCh2YWx1ZSwgbWluLCBtYXgpIHtcbiAgaWYgKHZhbHVlIDwgbWluKSB7XG4gICAgcmV0dXJuIG1pbjtcbiAgfVxuICBpZiAodmFsdWUgPiBtYXgpIHtcbiAgICByZXR1cm4gbWF4O1xuICB9XG4gIHJldHVybiB2YWx1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbGFtcDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL2NsYW1wLmpzXG4gKiogbW9kdWxlIGlkID0gMzI1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBGaXhlZERhdGFUYWJsZVJvdy5yZWFjdFxuICogQHR5cGVjaGVja3NcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJy4vUmVhY3QnKTtcbnZhciBGaXhlZERhdGFUYWJsZUNlbGxHcm91cCA9IHJlcXVpcmUoJy4vRml4ZWREYXRhVGFibGVDZWxsR3JvdXAucmVhY3QnKTtcblxudmFyIGN4ID0gcmVxdWlyZSgnLi9jeCcpO1xudmFyIGpvaW5DbGFzc2VzID0gcmVxdWlyZSgnLi9qb2luQ2xhc3NlcycpO1xudmFyIHRyYW5zbGF0ZURPTVBvc2l0aW9uWFkgPSByZXF1aXJlKCcuL3RyYW5zbGF0ZURPTVBvc2l0aW9uWFknKTtcblxudmFyIFByb3BUeXBlcyA9IFJlYWN0LlByb3BUeXBlcztcblxuLyoqXG4gKiBDb21wb25lbnQgdGhhdCByZW5kZXJzIHRoZSByb3cgZm9yIDxGaXhlZERhdGFUYWJsZSAvPi5cbiAqIFRoaXMgY29tcG9uZW50IHNob3VsZCBub3QgYmUgdXNlZCBkaXJlY3RseSBieSBkZXZlbG9wZXIuIEluc3RlYWQsXG4gKiBvbmx5IDxGaXhlZERhdGFUYWJsZSAvPiBzaG91bGQgdXNlIHRoZSBjb21wb25lbnQgaW50ZXJuYWxseS5cbiAqL1xudmFyIEZpeGVkRGF0YVRhYmxlUm93SW1wbCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdGaXhlZERhdGFUYWJsZVJvd0ltcGwnLFxuXG4gIHByb3BUeXBlczoge1xuXG4gICAgaXNTY3JvbGxpbmc6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogQXJyYXkgb2YgPEZpeGVkRGF0YVRhYmxlQ29sdW1uIC8+IGZvciB0aGUgZml4ZWQgY29sdW1ucy5cbiAgICAgKi9cbiAgICBmaXhlZENvbHVtbnM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogSGVpZ2h0IG9mIHRoZSByb3cuXG4gICAgICovXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgcm93IGluZGV4LlxuICAgICAqL1xuICAgIGluZGV4OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBBcnJheSBvZiA8Rml4ZWREYXRhVGFibGVDb2x1bW4gLz4gZm9yIHRoZSBzY3JvbGxhYmxlIGNvbHVtbnMuXG4gICAgICovXG4gICAgc2Nyb2xsYWJsZUNvbHVtbnM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIGxlZnQgZWRnZSBvZiB0aGUgdGFibGUgYW5kIHRoZSBsZWZ0bW9zdCBwb3J0aW9uXG4gICAgICogb2YgdGhlIHJvdyBjdXJyZW50bHkgdmlzaWJsZSBpbiB0aGUgdGFibGUuXG4gICAgICovXG4gICAgc2Nyb2xsTGVmdDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogV2lkdGggb2YgdGhlIHJvdy5cbiAgICAgKi9cbiAgICB3aWR0aDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogRmlyZSB3aGVuIGEgcm93IGlzIGNsaWNrZWQuXG4gICAgICovXG4gICAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBGaXJlIHdoZW4gYSByb3cgaXMgZG91YmxlIGNsaWNrZWQuXG4gICAgICovXG4gICAgb25Eb3VibGVDbGljazogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayBmb3Igd2hlbiByZXNpemVyIGtub2IgKGluIEZpeGVkRGF0YVRhYmxlQ2VsbCkgaXMgY2xpY2tlZFxuICAgICAqIHRvIGluaXRpYWxpemUgcmVzaXppbmcuIFBsZWFzZSBub3RlIHRoaXMgaXMgb25seSBvbiB0aGUgY2VsbHNcbiAgICAgKiBpbiB0aGUgaGVhZGVyLlxuICAgICAqIEBwYXJhbSBudW1iZXIgY29tYmluZWRXaWR0aFxuICAgICAqIEBwYXJhbSBudW1iZXIgbGVmdE9mZnNldFxuICAgICAqIEBwYXJhbSBudW1iZXIgY2VsbFdpZHRoXG4gICAgICogQHBhcmFtIG51bWJlcnxzdHJpbmcgY29sdW1uS2V5XG4gICAgICogQHBhcmFtIG9iamVjdCBldmVudFxuICAgICAqL1xuICAgIG9uQ29sdW1uUmVzaXplOiBQcm9wVHlwZXMuZnVuY1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkgLypvYmplY3QqL3tcbiAgICB2YXIgc3R5bGUgPSB7XG4gICAgICB3aWR0aDogdGhpcy5wcm9wcy53aWR0aCxcbiAgICAgIGhlaWdodDogdGhpcy5wcm9wcy5oZWlnaHRcbiAgICB9O1xuXG4gICAgdmFyIGNsYXNzTmFtZSA9IGN4KHtcbiAgICAgICdmaXhlZERhdGFUYWJsZVJvd0xheW91dC9tYWluJzogdHJ1ZSxcbiAgICAgICdwdWJsaWMvZml4ZWREYXRhVGFibGVSb3cvbWFpbic6IHRydWUsXG4gICAgICAncHVibGljL2ZpeGVkRGF0YVRhYmxlUm93L2hpZ2hsaWdodGVkJzogdGhpcy5wcm9wcy5pbmRleCAlIDIgPT09IDEsXG4gICAgICAncHVibGljL2ZpeGVkRGF0YVRhYmxlUm93L29kZCc6IHRoaXMucHJvcHMuaW5kZXggJSAyID09PSAxLFxuICAgICAgJ3B1YmxpYy9maXhlZERhdGFUYWJsZVJvdy9ldmVuJzogdGhpcy5wcm9wcy5pbmRleCAlIDIgPT09IDBcbiAgICB9KTtcblxuICAgIHZhciBmaXhlZENvbHVtbnNXaWR0aCA9IHRoaXMuX2dldENvbHVtbnNXaWR0aCh0aGlzLnByb3BzLmZpeGVkQ29sdW1ucyk7XG4gICAgdmFyIGZpeGVkQ29sdW1ucyA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoRml4ZWREYXRhVGFibGVDZWxsR3JvdXAsIHtcbiAgICAgIGtleTogJ2ZpeGVkX2NlbGxzJyxcbiAgICAgIGlzU2Nyb2xsaW5nOiB0aGlzLnByb3BzLmlzU2Nyb2xsaW5nLFxuICAgICAgaGVpZ2h0OiB0aGlzLnByb3BzLmhlaWdodCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICB3aWR0aDogZml4ZWRDb2x1bW5zV2lkdGgsXG4gICAgICB6SW5kZXg6IDIsXG4gICAgICBjb2x1bW5zOiB0aGlzLnByb3BzLmZpeGVkQ29sdW1ucyxcbiAgICAgIG9uQ29sdW1uUmVzaXplOiB0aGlzLnByb3BzLm9uQ29sdW1uUmVzaXplLFxuICAgICAgcm93SGVpZ2h0OiB0aGlzLnByb3BzLmhlaWdodCxcbiAgICAgIHJvd0luZGV4OiB0aGlzLnByb3BzLmluZGV4XG4gICAgfSk7XG4gICAgdmFyIGNvbHVtbnNTaGFkb3cgPSB0aGlzLl9yZW5kZXJDb2x1bW5zU2hhZG93KGZpeGVkQ29sdW1uc1dpZHRoKTtcbiAgICB2YXIgc2Nyb2xsYWJsZUNvbHVtbnMgPSBSZWFjdC5jcmVhdGVFbGVtZW50KEZpeGVkRGF0YVRhYmxlQ2VsbEdyb3VwLCB7XG4gICAgICBrZXk6ICdzY3JvbGxhYmxlX2NlbGxzJyxcbiAgICAgIGlzU2Nyb2xsaW5nOiB0aGlzLnByb3BzLmlzU2Nyb2xsaW5nLFxuICAgICAgaGVpZ2h0OiB0aGlzLnByb3BzLmhlaWdodCxcbiAgICAgIGxlZnQ6IHRoaXMucHJvcHMuc2Nyb2xsTGVmdCxcbiAgICAgIG9mZnNldExlZnQ6IGZpeGVkQ29sdW1uc1dpZHRoLFxuICAgICAgd2lkdGg6IHRoaXMucHJvcHMud2lkdGggLSBmaXhlZENvbHVtbnNXaWR0aCxcbiAgICAgIHpJbmRleDogMCxcbiAgICAgIGNvbHVtbnM6IHRoaXMucHJvcHMuc2Nyb2xsYWJsZUNvbHVtbnMsXG4gICAgICBvbkNvbHVtblJlc2l6ZTogdGhpcy5wcm9wcy5vbkNvbHVtblJlc2l6ZSxcbiAgICAgIHJvd0hlaWdodDogdGhpcy5wcm9wcy5oZWlnaHQsXG4gICAgICByb3dJbmRleDogdGhpcy5wcm9wcy5pbmRleFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiBqb2luQ2xhc3NlcyhjbGFzc05hbWUsIHRoaXMucHJvcHMuY2xhc3NOYW1lKSxcbiAgICAgICAgb25DbGljazogdGhpcy5wcm9wcy5vbkNsaWNrID8gdGhpcy5fb25DbGljayA6IG51bGwsXG4gICAgICAgIG9uRG91YmxlQ2xpY2s6IHRoaXMucHJvcHMub25Eb3VibGVDbGljayA/IHRoaXMuX29uRG91YmxlQ2xpY2sgOiBudWxsLFxuICAgICAgICBvbk1vdXNlRG93bjogdGhpcy5wcm9wcy5vbk1vdXNlRG93biA/IHRoaXMuX29uTW91c2VEb3duIDogbnVsbCxcbiAgICAgICAgb25Nb3VzZUVudGVyOiB0aGlzLnByb3BzLm9uTW91c2VFbnRlciA/IHRoaXMuX29uTW91c2VFbnRlciA6IG51bGwsXG4gICAgICAgIG9uTW91c2VMZWF2ZTogdGhpcy5wcm9wcy5vbk1vdXNlTGVhdmUgPyB0aGlzLl9vbk1vdXNlTGVhdmUgOiBudWxsLFxuICAgICAgICBzdHlsZTogc3R5bGUgfSxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IGNsYXNzTmFtZTogY3goJ2ZpeGVkRGF0YVRhYmxlUm93TGF5b3V0L2JvZHknKSB9LFxuICAgICAgICBmaXhlZENvbHVtbnMsXG4gICAgICAgIHNjcm9sbGFibGVDb2x1bW5zLFxuICAgICAgICBjb2x1bW5zU2hhZG93XG4gICAgICApXG4gICAgKTtcbiAgfSxcblxuICBfZ2V0Q29sdW1uc1dpZHRoOiBmdW5jdGlvbiBfZ2V0Q29sdW1uc1dpZHRoKCAvKmFycmF5Ki9jb2x1bW5zKSAvKm51bWJlciove1xuICAgIHZhciB3aWR0aCA9IDA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb2x1bW5zLmxlbmd0aDsgKytpKSB7XG4gICAgICB3aWR0aCArPSBjb2x1bW5zW2ldLnByb3BzLndpZHRoO1xuICAgIH1cbiAgICByZXR1cm4gd2lkdGg7XG4gIH0sXG5cbiAgX3JlbmRlckNvbHVtbnNTaGFkb3c6IGZ1bmN0aW9uIF9yZW5kZXJDb2x1bW5zU2hhZG93KCAvKm51bWJlciovbGVmdCkgLyo/b2JqZWN0Ki97XG4gICAgaWYgKGxlZnQgPiAwKSB7XG4gICAgICB2YXIgY2xhc3NOYW1lID0gY3goe1xuICAgICAgICAnZml4ZWREYXRhVGFibGVSb3dMYXlvdXQvZml4ZWRDb2x1bW5zRGl2aWRlcic6IHRydWUsXG4gICAgICAgICdmaXhlZERhdGFUYWJsZVJvd0xheW91dC9jb2x1bW5zU2hhZG93JzogdGhpcy5wcm9wcy5zY3JvbGxMZWZ0ID4gMCxcbiAgICAgICAgJ3B1YmxpYy9maXhlZERhdGFUYWJsZVJvdy9maXhlZENvbHVtbnNEaXZpZGVyJzogdHJ1ZSxcbiAgICAgICAgJ3B1YmxpYy9maXhlZERhdGFUYWJsZVJvdy9jb2x1bW5zU2hhZG93JzogdGhpcy5wcm9wcy5zY3JvbGxMZWZ0ID4gMFxuICAgICAgfSk7XG4gICAgICB2YXIgc3R5bGUgPSB7XG4gICAgICAgIGxlZnQ6IGxlZnQsXG4gICAgICAgIGhlaWdodDogdGhpcy5wcm9wcy5oZWlnaHRcbiAgICAgIH07XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSwgc3R5bGU6IHN0eWxlIH0pO1xuICAgIH1cbiAgfSxcblxuICBfb25DbGljazogZnVuY3Rpb24gX29uQ2xpY2soIC8qb2JqZWN0Ki9ldmVudCkge1xuICAgIHRoaXMucHJvcHMub25DbGljayhldmVudCwgdGhpcy5wcm9wcy5pbmRleCk7XG4gIH0sXG5cbiAgX29uRG91YmxlQ2xpY2s6IGZ1bmN0aW9uIF9vbkRvdWJsZUNsaWNrKCAvKm9iamVjdCovZXZlbnQpIHtcbiAgICB0aGlzLnByb3BzLm9uRG91YmxlQ2xpY2soZXZlbnQsIHRoaXMucHJvcHMuaW5kZXgpO1xuICB9LFxuXG4gIF9vbk1vdXNlRG93bjogZnVuY3Rpb24gX29uTW91c2VEb3duKCAvKm9iamVjdCovZXZlbnQpIHtcbiAgICB0aGlzLnByb3BzLm9uTW91c2VEb3duKGV2ZW50LCB0aGlzLnByb3BzLmluZGV4KTtcbiAgfSxcblxuICBfb25Nb3VzZUVudGVyOiBmdW5jdGlvbiBfb25Nb3VzZUVudGVyKCAvKm9iamVjdCovZXZlbnQpIHtcbiAgICB0aGlzLnByb3BzLm9uTW91c2VFbnRlcihldmVudCwgdGhpcy5wcm9wcy5pbmRleCk7XG4gIH0sXG5cbiAgX29uTW91c2VMZWF2ZTogZnVuY3Rpb24gX29uTW91c2VMZWF2ZSggLypvYmplY3QqL2V2ZW50KSB7XG4gICAgdGhpcy5wcm9wcy5vbk1vdXNlTGVhdmUoZXZlbnQsIHRoaXMucHJvcHMuaW5kZXgpO1xuICB9XG59KTtcblxudmFyIEZpeGVkRGF0YVRhYmxlUm93ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0ZpeGVkRGF0YVRhYmxlUm93JyxcblxuICBwcm9wVHlwZXM6IHtcblxuICAgIGlzU2Nyb2xsaW5nOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIEhlaWdodCBvZiB0aGUgcm93LlxuICAgICAqL1xuICAgIGhlaWdodDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogWi1pbmRleCBvbiB3aGljaCB0aGUgcm93IHdpbGwgYmUgZGlzcGxheWVkLiBVc2VkIGUuZy4gZm9yIGtlZXBpbmdcbiAgICAgKiBoZWFkZXIgYW5kIGZvb3RlciBpbiBmcm9udCBvZiBvdGhlciByb3dzLlxuICAgICAqL1xuICAgIHpJbmRleDogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKlxuICAgICAqIFRoZSB2ZXJ0aWNhbCBwb3NpdGlvbiB3aGVyZSB0aGUgcm93IHNob3VsZCByZW5kZXIgaXRzZWxmXG4gICAgICovXG4gICAgb2Zmc2V0VG9wOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBXaWR0aCBvZiB0aGUgcm93LlxuICAgICAqL1xuICAgIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWRcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIC8qb2JqZWN0Ki97XG4gICAgdmFyIHN0eWxlID0ge1xuICAgICAgd2lkdGg6IHRoaXMucHJvcHMud2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXMucHJvcHMuaGVpZ2h0LFxuICAgICAgekluZGV4OiB0aGlzLnByb3BzLnpJbmRleCA/IHRoaXMucHJvcHMuekluZGV4IDogMFxuICAgIH07XG4gICAgdHJhbnNsYXRlRE9NUG9zaXRpb25YWShzdHlsZSwgMCwgdGhpcy5wcm9wcy5vZmZzZXRUb3ApO1xuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIHtcbiAgICAgICAgc3R5bGU6IHN0eWxlLFxuICAgICAgICBjbGFzc05hbWU6IGN4KCdmaXhlZERhdGFUYWJsZVJvd0xheW91dC9yb3dXcmFwcGVyJykgfSxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRml4ZWREYXRhVGFibGVSb3dJbXBsLCBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywge1xuICAgICAgICBvZmZzZXRUb3A6IHVuZGVmaW5lZCxcbiAgICAgICAgekluZGV4OiB1bmRlZmluZWRcbiAgICAgIH0pKVxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZpeGVkRGF0YVRhYmxlUm93O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvRml4ZWREYXRhVGFibGVSb3cucmVhY3QuanNcbiAqKiBtb2R1bGUgaWQgPSAzMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIEZpeGVkRGF0YVRhYmxlQ2VsbEdyb3VwLnJlYWN0XG4gKiBAdHlwZWNoZWNrc1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG52YXIgRml4ZWREYXRhVGFibGVIZWxwZXIgPSByZXF1aXJlKCcuL0ZpeGVkRGF0YVRhYmxlSGVscGVyJyk7XG52YXIgUmVhY3QgPSByZXF1aXJlKCcuL1JlYWN0Jyk7XG52YXIgRml4ZWREYXRhVGFibGVDZWxsID0gcmVxdWlyZSgnLi9GaXhlZERhdGFUYWJsZUNlbGwucmVhY3QnKTtcblxudmFyIGN4ID0gcmVxdWlyZSgnLi9jeCcpO1xudmFyIHRyYW5zbGF0ZURPTVBvc2l0aW9uWFkgPSByZXF1aXJlKCcuL3RyYW5zbGF0ZURPTVBvc2l0aW9uWFknKTtcblxudmFyIFByb3BUeXBlcyA9IFJlYWN0LlByb3BUeXBlcztcblxudmFyIERJUl9TSUdOID0gRml4ZWREYXRhVGFibGVIZWxwZXIuRElSX1NJR047XG5cbnZhciBGaXhlZERhdGFUYWJsZUNlbGxHcm91cEltcGwgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnRml4ZWREYXRhVGFibGVDZWxsR3JvdXBJbXBsJyxcblxuICAvKipcbiAgICogUHJvcFR5cGVzIGFyZSBkaXNhYmxlZCBpbiB0aGlzIGNvbXBvbmVudCwgYmVjYXVzZSBoYXZpbmcgdGhlbSBvbiBzbG93c1xuICAgKiBkb3duIHRoZSBGaXhlZERhdGFUYWJsZSBodWdlbHkgaW4gREVWIG1vZGUuIFlvdSBjYW4gZW5hYmxlIHRoZW0gYmFjayBmb3JcbiAgICogZGV2ZWxvcG1lbnQsIGJ1dCBwbGVhc2UgZG9uJ3QgY29tbWl0IHRoaXMgY29tcG9uZW50IHdpdGggZW5hYmxlZCBwcm9wVHlwZXMuXG4gICAqL1xuICBwcm9wVHlwZXNfRElTQUJMRURfRk9SX1BFUkZPUk1BTkNFOiB7XG5cbiAgICAvKipcbiAgICAgKiBBcnJheSBvZiA8Rml4ZWREYXRhVGFibGVDb2x1bW4gLz4uXG4gICAgICovXG4gICAgY29sdW1uczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG5cbiAgICBpc1Njcm9sbGluZzogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICBsZWZ0OiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgb25Db2x1bW5SZXNpemU6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgcm93SGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG5cbiAgICByb3dJbmRleDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuXG4gICAgd2lkdGg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcblxuICAgIHpJbmRleDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkXG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSAvKm9iamVjdCove1xuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGNvbHVtbnMgPSBwcm9wcy5jb2x1bW5zO1xuICAgIHZhciBjZWxscyA9IG5ldyBBcnJheShjb2x1bW5zLmxlbmd0aCk7XG5cbiAgICB2YXIgY3VycmVudFBvc2l0aW9uID0gMDtcbiAgICBmb3IgKHZhciBpID0gMCwgaiA9IGNvbHVtbnMubGVuZ3RoOyBpIDwgajsgaSsrKSB7XG4gICAgICB2YXIgY29sdW1uUHJvcHMgPSBjb2x1bW5zW2ldLnByb3BzO1xuICAgICAgaWYgKCFjb2x1bW5Qcm9wcy5hbGxvd0NlbGxzUmVjeWNsaW5nIHx8IGN1cnJlbnRQb3NpdGlvbiAtIHByb3BzLmxlZnQgPD0gcHJvcHMud2lkdGggJiYgY3VycmVudFBvc2l0aW9uIC0gcHJvcHMubGVmdCArIGNvbHVtblByb3BzLndpZHRoID49IDApIHtcbiAgICAgICAgdmFyIGtleSA9ICdjZWxsXycgKyBpO1xuICAgICAgICBjZWxsc1tpXSA9IHRoaXMuX3JlbmRlckNlbGwocHJvcHMucm93SW5kZXgsIHByb3BzLnJvd0hlaWdodCwgY29sdW1uUHJvcHMsIGN1cnJlbnRQb3NpdGlvbiwga2V5KTtcbiAgICAgIH1cbiAgICAgIGN1cnJlbnRQb3NpdGlvbiArPSBjb2x1bW5Qcm9wcy53aWR0aDtcbiAgICB9XG5cbiAgICB2YXIgY29udGVudFdpZHRoID0gdGhpcy5fZ2V0Q29sdW1uc1dpZHRoKGNvbHVtbnMpO1xuXG4gICAgdmFyIHN0eWxlID0ge1xuICAgICAgaGVpZ2h0OiBwcm9wcy5oZWlnaHQsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHdpZHRoOiBjb250ZW50V2lkdGgsXG4gICAgICB6SW5kZXg6IHByb3BzLnpJbmRleFxuICAgIH07XG4gICAgdHJhbnNsYXRlRE9NUG9zaXRpb25YWShzdHlsZSwgLTEgKiBESVJfU0lHTiAqIHByb3BzLmxlZnQsIDApO1xuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiBjeCgnZml4ZWREYXRhVGFibGVDZWxsR3JvdXBMYXlvdXQvY2VsbEdyb3VwJyksXG4gICAgICAgIHN0eWxlOiBzdHlsZSB9LFxuICAgICAgY2VsbHNcbiAgICApO1xuICB9LFxuXG4gIF9yZW5kZXJDZWxsOiBmdW5jdGlvbiBfcmVuZGVyQ2VsbChcbiAgLypudW1iZXIqL3Jvd0luZGV4LFxuICAvKm51bWJlciovaGVpZ2h0LFxuICAvKm9iamVjdCovY29sdW1uUHJvcHMsXG4gIC8qbnVtYmVyKi9sZWZ0LFxuICAvKnN0cmluZyova2V5KSAvKm9iamVjdCove1xuXG4gICAgdmFyIGNlbGxJc1Jlc2l6YWJsZSA9IGNvbHVtblByb3BzLmlzUmVzaXphYmxlICYmIHRoaXMucHJvcHMub25Db2x1bW5SZXNpemU7XG4gICAgdmFyIG9uQ29sdW1uUmVzaXplID0gY2VsbElzUmVzaXphYmxlID8gdGhpcy5wcm9wcy5vbkNvbHVtblJlc2l6ZSA6IG51bGw7XG5cbiAgICB2YXIgY2xhc3NOYW1lID0gY29sdW1uUHJvcHMuY2VsbENsYXNzTmFtZTtcblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEZpeGVkRGF0YVRhYmxlQ2VsbCwge1xuICAgICAgaXNTY3JvbGxpbmc6IHRoaXMucHJvcHMuaXNTY3JvbGxpbmcsXG4gICAgICBhbGlnbjogY29sdW1uUHJvcHMuYWxpZ24sXG4gICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAga2V5OiBrZXksXG4gICAgICBtYXhXaWR0aDogY29sdW1uUHJvcHMubWF4V2lkdGgsXG4gICAgICBtaW5XaWR0aDogY29sdW1uUHJvcHMubWluV2lkdGgsXG4gICAgICBvbkNvbHVtblJlc2l6ZTogb25Db2x1bW5SZXNpemUsXG4gICAgICByb3dJbmRleDogcm93SW5kZXgsXG4gICAgICBjb2x1bW5LZXk6IGNvbHVtblByb3BzLmNvbHVtbktleSxcbiAgICAgIHdpZHRoOiBjb2x1bW5Qcm9wcy53aWR0aCxcbiAgICAgIGxlZnQ6IGxlZnQsXG4gICAgICBjZWxsOiBjb2x1bW5Qcm9wcy5jZWxsXG4gICAgfSk7XG4gIH0sXG5cbiAgX2dldENvbHVtbnNXaWR0aDogZnVuY3Rpb24gX2dldENvbHVtbnNXaWR0aCggLyphcnJheSovY29sdW1ucykgLypudW1iZXIqL3tcbiAgICB2YXIgd2lkdGggPSAwO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29sdW1ucy5sZW5ndGg7ICsraSkge1xuICAgICAgd2lkdGggKz0gY29sdW1uc1tpXS5wcm9wcy53aWR0aDtcbiAgICB9XG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG59KTtcblxudmFyIEZpeGVkRGF0YVRhYmxlQ2VsbEdyb3VwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0ZpeGVkRGF0YVRhYmxlQ2VsbEdyb3VwJyxcblxuICAvKipcbiAgICogUHJvcFR5cGVzIGFyZSBkaXNhYmxlZCBpbiB0aGlzIGNvbXBvbmVudCwgYmVjYXVzZSBoYXZpbmcgdGhlbSBvbiBzbG93c1xuICAgKiBkb3duIHRoZSBGaXhlZERhdGFUYWJsZSBodWdlbHkgaW4gREVWIG1vZGUuIFlvdSBjYW4gZW5hYmxlIHRoZW0gYmFjayBmb3JcbiAgICogZGV2ZWxvcG1lbnQsIGJ1dCBwbGVhc2UgZG9uJ3QgY29tbWl0IHRoaXMgY29tcG9uZW50IHdpdGggZW5hYmxlZCBwcm9wVHlwZXMuXG4gICAqL1xuICBwcm9wVHlwZXNfRElTQUJMRURfRk9SX1BFUkZPUk1BTkNFOiB7XG4gICAgaXNTY3JvbGxpbmc6IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIEhlaWdodCBvZiB0aGUgcm93LlxuICAgICAqL1xuICAgIGhlaWdodDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuXG4gICAgb2Zmc2V0TGVmdDogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIGxlZnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgLyoqXG4gICAgICogWi1pbmRleCBvbiB3aGljaCB0aGUgcm93IHdpbGwgYmUgZGlzcGxheWVkLiBVc2VkIGUuZy4gZm9yIGtlZXBpbmdcbiAgICAgKiBoZWFkZXIgYW5kIGZvb3RlciBpbiBmcm9udCBvZiBvdGhlciByb3dzLlxuICAgICAqL1xuICAgIHpJbmRleDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkXG4gIH0sXG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlOiBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUoIC8qb2JqZWN0Ki9uZXh0UHJvcHMpIC8qYm9vbGVhbiove1xuICAgIHJldHVybiAhbmV4dFByb3BzLmlzU2Nyb2xsaW5nIHx8IHRoaXMucHJvcHMucm93SW5kZXggIT09IG5leHRQcm9wcy5yb3dJbmRleCB8fCB0aGlzLnByb3BzLmxlZnQgIT09IG5leHRQcm9wcy5sZWZ0O1xuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkgLypvYmplY3QqL3tcbiAgICByZXR1cm4ge1xuICAgICAgb2Zmc2V0TGVmdDogMFxuICAgIH07XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSAvKm9iamVjdCove1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBvZmZzZXRMZWZ0ID0gX3Byb3BzLm9mZnNldExlZnQ7XG5cbiAgICB2YXIgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbJ29mZnNldExlZnQnXSk7XG5cbiAgICB2YXIgc3R5bGUgPSB7XG4gICAgICBoZWlnaHQ6IHByb3BzLmhlaWdodFxuICAgIH07XG5cbiAgICBpZiAoRElSX1NJR04gPT09IDEpIHtcbiAgICAgIHN0eWxlLmxlZnQgPSBvZmZzZXRMZWZ0O1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5yaWdodCA9IG9mZnNldExlZnQ7XG4gICAgfVxuXG4gICAgdmFyIG9uQ29sdW1uUmVzaXplID0gcHJvcHMub25Db2x1bW5SZXNpemUgPyB0aGlzLl9vbkNvbHVtblJlc2l6ZSA6IG51bGw7XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAge1xuICAgICAgICBzdHlsZTogc3R5bGUsXG4gICAgICAgIGNsYXNzTmFtZTogY3goJ2ZpeGVkRGF0YVRhYmxlQ2VsbEdyb3VwTGF5b3V0L2NlbGxHcm91cFdyYXBwZXInKSB9LFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGaXhlZERhdGFUYWJsZUNlbGxHcm91cEltcGwsIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgICAgICBvbkNvbHVtblJlc2l6ZTogb25Db2x1bW5SZXNpemVcbiAgICAgIH0pKVxuICAgICk7XG4gIH0sXG5cbiAgX29uQ29sdW1uUmVzaXplOiBmdW5jdGlvbiBfb25Db2x1bW5SZXNpemUoXG4gIC8qbnVtYmVyKi9sZWZ0LFxuICAvKm51bWJlciovd2lkdGgsXG4gIC8qP251bWJlciovbWluV2lkdGgsXG4gIC8qP251bWJlciovbWF4V2lkdGgsXG4gIC8qc3RyaW5nfG51bWJlciovY29sdW1uS2V5LFxuICAvKm9iamVjdCovZXZlbnQpIHtcbiAgICB0aGlzLnByb3BzLm9uQ29sdW1uUmVzaXplICYmIHRoaXMucHJvcHMub25Db2x1bW5SZXNpemUodGhpcy5wcm9wcy5vZmZzZXRMZWZ0LCBsZWZ0IC0gdGhpcy5wcm9wcy5sZWZ0ICsgd2lkdGgsIHdpZHRoLCBtaW5XaWR0aCwgbWF4V2lkdGgsIGNvbHVtbktleSwgZXZlbnQpO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBGaXhlZERhdGFUYWJsZUNlbGxHcm91cDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL0ZpeGVkRGF0YVRhYmxlQ2VsbEdyb3VwLnJlYWN0LmpzXG4gKiogbW9kdWxlIGlkID0gMzI3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBGaXhlZERhdGFUYWJsZUhlbHBlclxuICogQHR5cGVjaGVja3NcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBMb2NhbGUgPSByZXF1aXJlKCcuL0xvY2FsZScpO1xudmFyIFJlYWN0ID0gcmVxdWlyZSgnLi9SZWFjdCcpO1xudmFyIEZpeGVkRGF0YVRhYmxlQ29sdW1uR3JvdXAgPSByZXF1aXJlKCcuL0ZpeGVkRGF0YVRhYmxlQ29sdW1uR3JvdXAucmVhY3QnKTtcbnZhciBGaXhlZERhdGFUYWJsZUNvbHVtbiA9IHJlcXVpcmUoJy4vRml4ZWREYXRhVGFibGVDb2x1bW4ucmVhY3QnKTtcblxudmFyIERJUl9TSUdOID0gTG9jYWxlLmlzUlRMKCkgPyAtMSA6ICsxO1xuLy8gQSBjZWxsIHVwIHRvIDVweCBvdXRzaWRlIG9mIHRoZSB2aXNpYmxlIGFyZWEgd2lsbCBzdGlsbCBiZSBjb25zaWRlcmVkIHZpc2libGVcbnZhciBDRUxMX1ZJU0lCSUxJVFlfVE9MRVJBTkNFID0gNTsgLy8gdXNlZCBmb3IgZmx5b3V0c1xuXG5mdW5jdGlvbiByZW5kZXJUb1N0cmluZyh2YWx1ZSkgLypzdHJpbmcqL3tcbiAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gJyc7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFN0cmluZyh2YWx1ZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBIZWxwZXIgbWV0aG9kIHRvIGV4ZWN1dGUgYSBjYWxsYmFjayBhZ2FpbnN0IGFsbCBjb2x1bW5zIGdpdmVuIHRoZSBjaGlsZHJlblxuICogb2YgYSB0YWJsZS5cbiAqIEBwYXJhbSB7P29iamVjdHxhcnJheX0gY2hpbGRyZW5cbiAqICAgIENoaWxkcmVuIG9mIGEgdGFibGUuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICogICAgRnVuY3Rpb24gdG8gZXhjZWN1dGUgZm9yIGVhY2ggY29sdW1uLiBJdCBpcyBwYXNzZWQgdGhlIGNvbHVtbi5cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaENvbHVtbihjaGlsZHJlbiwgY2FsbGJhY2spIHtcbiAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgaWYgKGNoaWxkLnR5cGUgPT09IEZpeGVkRGF0YVRhYmxlQ29sdW1uR3JvdXApIHtcbiAgICAgIGZvckVhY2hDb2x1bW4oY2hpbGQucHJvcHMuY2hpbGRyZW4sIGNhbGxiYWNrKTtcbiAgICB9IGVsc2UgaWYgKGNoaWxkLnR5cGUgPT09IEZpeGVkRGF0YVRhYmxlQ29sdW1uKSB7XG4gICAgICBjYWxsYmFjayhjaGlsZCk7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBIZWxwZXIgbWV0aG9kIHRvIG1hcCBjb2x1bW5zIHRvIG5ldyBjb2x1bW5zLiBUaGlzIHRha2VzIGludG8gYWNjb3VudCBjb2x1bW5cbiAqIGdyb3VwcyBhbmQgd2lsbCBnZW5lcmF0ZSBhIG5ldyBjb2x1bW4gZ3JvdXAgaWYgaXRzIGNvbHVtbnMgY2hhbmdlLlxuICogQHBhcmFtIHs/b2JqZWN0fGFycmF5fSBjaGlsZHJlblxuICogICAgQ2hpbGRyZW4gb2YgYSB0YWJsZS5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4gKiAgICBGdW5jdGlvbiB0byBleGNlY3V0ZSBmb3IgZWFjaCBjb2x1bW4uIEl0IGlzIHBhc3NlZCB0aGUgY29sdW1uIGFuZCBzaG91bGRcbiAqICAgIHJldHVybiBhIHJlc3VsdCBjb2x1bW4uXG4gKi9cbmZ1bmN0aW9uIG1hcENvbHVtbnMoY2hpbGRyZW4sIGNhbGxiYWNrKSB7XG4gIHZhciBuZXdDaGlsZHJlbiA9IFtdO1xuICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBmdW5jdGlvbiAob3JpZ2luYWxDaGlsZCkge1xuICAgIHZhciBuZXdDaGlsZCA9IG9yaWdpbmFsQ2hpbGQ7XG5cbiAgICAvLyBUaGUgY2hpbGQgaXMgZWl0aGVyIGEgY29sdW1uIGdyb3VwIG9yIGEgY29sdW1uLiBJZiBpdCBpcyBhIGNvbHVtbiBncm91cFxuICAgIC8vIHdlIG5lZWQgdG8gaXRlcmF0ZSBvdmVyIGl0cyBjb2x1bW5zIGFuZCB0aGVuIHBvdGVudGlhbGx5IGdlbmVyYXRlIGFcbiAgICAvLyBuZXcgY29sdW1uIGdyb3VwXG4gICAgaWYgKG9yaWdpbmFsQ2hpbGQudHlwZSA9PT0gRml4ZWREYXRhVGFibGVDb2x1bW5Hcm91cCkge1xuICAgICAgdmFyIGhhdmVDb2x1bW5zQ2hhbmdlZCA9IGZhbHNlO1xuICAgICAgdmFyIG5ld0NvbHVtbnMgPSBbXTtcblxuICAgICAgZm9yRWFjaENvbHVtbihvcmlnaW5hbENoaWxkLnByb3BzLmNoaWxkcmVuLCBmdW5jdGlvbiAob3JpZ2luYWxjb2x1bW4pIHtcbiAgICAgICAgdmFyIG5ld0NvbHVtbiA9IGNhbGxiYWNrKG9yaWdpbmFsY29sdW1uKTtcbiAgICAgICAgaWYgKG5ld0NvbHVtbiAhPT0gb3JpZ2luYWxjb2x1bW4pIHtcbiAgICAgICAgICBoYXZlQ29sdW1uc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIG5ld0NvbHVtbnMucHVzaChuZXdDb2x1bW4pO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIElmIHRoZSBjb2x1bW4gZ3JvdXBzIGNvbHVtbnMgaGF2ZSBjaGFuZ2VkIGNsb25lIHRoZSBncm91cCBhbmQgc3VwcGx5XG4gICAgICAvLyBuZXcgY2hpbGRyZW5cbiAgICAgIGlmIChoYXZlQ29sdW1uc0NoYW5nZWQpIHtcbiAgICAgICAgbmV3Q2hpbGQgPSBSZWFjdC5jbG9uZUVsZW1lbnQob3JpZ2luYWxDaGlsZCwge1xuICAgICAgICAgIGNoaWxkcmVuOiBuZXdDb2x1bW5zXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAob3JpZ2luYWxDaGlsZC50eXBlID09PSBGaXhlZERhdGFUYWJsZUNvbHVtbikge1xuICAgICAgbmV3Q2hpbGQgPSBjYWxsYmFjayhvcmlnaW5hbENoaWxkKTtcbiAgICB9XG5cbiAgICBuZXdDaGlsZHJlbi5wdXNoKG5ld0NoaWxkKTtcbiAgfSk7XG5cbiAgcmV0dXJuIG5ld0NoaWxkcmVuO1xufVxuXG52YXIgRml4ZWREYXRhVGFibGVIZWxwZXIgPSB7XG4gIERJUl9TSUdOOiBESVJfU0lHTixcbiAgQ0VMTF9WSVNJQklMSVRZX1RPTEVSQU5DRTogQ0VMTF9WSVNJQklMSVRZX1RPTEVSQU5DRSxcbiAgcmVuZGVyVG9TdHJpbmc6IHJlbmRlclRvU3RyaW5nLFxuICBmb3JFYWNoQ29sdW1uOiBmb3JFYWNoQ29sdW1uLFxuICBtYXBDb2x1bW5zOiBtYXBDb2x1bW5zXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZpeGVkRGF0YVRhYmxlSGVscGVyO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvRml4ZWREYXRhVGFibGVIZWxwZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAzMjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIExvY2FsZVxuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG4vLyBIYXJkIGNvZGUgdGhpcyBmb3Igbm93LlxudmFyIExvY2FsZSA9IHtcbiAgaXNSVEw6IGZ1bmN0aW9uIGlzUlRMKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSxcbiAgZ2V0RGlyZWN0aW9uOiBmdW5jdGlvbiBnZXREaXJlY3Rpb24oKSB7XG4gICAgcmV0dXJuICdMVFInO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExvY2FsZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL0xvY2FsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDMyOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgRml4ZWREYXRhVGFibGVDb2x1bW5Hcm91cC5yZWFjdFxuICovXG5cbi8qKlxuICogVFJBTlNJVElPTiBTSElNXG4gKiBUaGlzIHByb3ZpZGVzIGFuIGludGVybWVkaWF0ZSBtYXBwaW5nIGZyb20gdGhlIG9sZCBBUEkgdG8gdGhlIG5ldyBBUEkuXG4gKlxuICogV2hlbiByZWFkeSwgcmVtb3ZlIHRoaXMgZmlsZSBhbmQgcmVuYW1lIHRoZSBwcm92aWRlc01vZHVsZSBpblxuICogRml4ZWREYXRhVGFibGVDb2x1bW5OZXcucmVhY3RcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJy4vUmVhY3QnKTtcblxudmFyIFRyYW5zaXRpb25Db2x1bW5Hcm91cCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdUcmFuc2l0aW9uQ29sdW1uR3JvdXAnLFxuXG4gIHN0YXRpY3M6IHtcbiAgICBfX1RhYmxlQ29sdW1uR3JvdXBfXzogdHJ1ZVxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbXBvbmVudCA8VHJhbnNpdGlvbkNvbHVtbkdyb3VwIC8+IHNob3VsZCBuZXZlciByZW5kZXInKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRyYW5zaXRpb25Db2x1bW5Hcm91cDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL0ZpeGVkRGF0YVRhYmxlQ29sdW1uR3JvdXAucmVhY3QuanNcbiAqKiBtb2R1bGUgaWQgPSAzMzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIEZpeGVkRGF0YVRhYmxlQ29sdW1uLnJlYWN0XG4gKi9cblxuLyoqXG4gKiBUUkFOU0lUSU9OIFNISU1cbiAqIFRoaXMgYWN0cyB0byBwcm92aWRlIGFuIGludGVybWVkaWF0ZSBtYXBwaW5nIGZyb20gdGhlIG9sZCBBUEkgdG8gdGhlIG5ldyBBUEkuXG4gKlxuICogV2hlbiByZWFkeSwgcmVtb3ZlIHRoaXMgZmlsZSBhbmQgcmVuYW1lIHRoZSBwcm92aWRlc01vZHVsZSBpblxuICogRml4ZWREYXRhVGFibGVDb2x1bW5OZXcucmVhY3RcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJy4vUmVhY3QnKTtcblxudmFyIFRyYW5zaXRpb25Db2x1bW4gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnVHJhbnNpdGlvbkNvbHVtbicsXG5cbiAgc3RhdGljczoge1xuICAgIF9fVGFibGVDb2x1bW5fXzogdHJ1ZVxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbXBvbmVudCA8VHJhbnNpdGlvbkNvbHVtbiAvPiBzaG91bGQgbmV2ZXIgcmVuZGVyJyk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBUcmFuc2l0aW9uQ29sdW1uO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvRml4ZWREYXRhVGFibGVDb2x1bW4ucmVhY3QuanNcbiAqKiBtb2R1bGUgaWQgPSAzMzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIEZpeGVkRGF0YVRhYmxlQ2VsbC5yZWFjdFxuICogQHR5cGVjaGVja3NcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxudmFyIEZpeGVkRGF0YVRhYmxlQ2VsbERlZmF1bHQgPSByZXF1aXJlKCcuL0ZpeGVkRGF0YVRhYmxlQ2VsbERlZmF1bHQucmVhY3QnKTtcbnZhciBGaXhlZERhdGFUYWJsZUhlbHBlciA9IHJlcXVpcmUoJy4vRml4ZWREYXRhVGFibGVIZWxwZXInKTtcbnZhciBSZWFjdCA9IHJlcXVpcmUoJy4vUmVhY3QnKTtcbnZhciBjeCA9IHJlcXVpcmUoJy4vY3gnKTtcbnZhciBqb2luQ2xhc3NlcyA9IHJlcXVpcmUoJy4vam9pbkNsYXNzZXMnKTtcblxudmFyIERJUl9TSUdOID0gRml4ZWREYXRhVGFibGVIZWxwZXIuRElSX1NJR047XG5cbnZhciBQcm9wVHlwZXMgPSBSZWFjdC5Qcm9wVHlwZXM7XG5cbnZhciBERUZBVUxUX1BST1BTID0ge1xuICBhbGlnbjogJ2xlZnQnLFxuICBoaWdobGlnaHRlZDogZmFsc2Vcbn07XG5cbnZhciBGaXhlZERhdGFUYWJsZUNlbGwgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnRml4ZWREYXRhVGFibGVDZWxsJyxcblxuICAvKipcbiAgICogUHJvcFR5cGVzIGFyZSBkaXNhYmxlZCBpbiB0aGlzIGNvbXBvbmVudCwgYmVjYXVzZSBoYXZpbmcgdGhlbSBvbiBzbG93c1xuICAgKiBkb3duIHRoZSBGaXhlZERhdGFUYWJsZSBodWdlbHkgaW4gREVWIG1vZGUuIFlvdSBjYW4gZW5hYmxlIHRoZW0gYmFjayBmb3JcbiAgICogZGV2ZWxvcG1lbnQsIGJ1dCBwbGVhc2UgZG9uJ3QgY29tbWl0IHRoaXMgY29tcG9uZW50IHdpdGggZW5hYmxlZCBwcm9wVHlwZXMuXG4gICAqL1xuICBwcm9wVHlwZXNfRElTQUJMRURfRk9SX1BFUkZPUk1BTkNFOiB7XG4gICAgaXNTY3JvbGxpbmc6IFByb3BUeXBlcy5ib29sLFxuICAgIGFsaWduOiBQcm9wVHlwZXMub25lT2YoWydsZWZ0JywgJ2NlbnRlcicsICdyaWdodCddKSxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaGlnaGxpZ2h0ZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgbWluV2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgbWF4V2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG5cbiAgICBjZWxsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudCwgUHJvcFR5cGVzLmZ1bmNdKSxcblxuICAgIGNvbHVtbktleTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHJvdyBpbmRleCB0aGF0IHdpbGwgYmUgcGFzc2VkIHRvIGBjZWxsUmVuZGVyZXJgIHRvIHJlbmRlci5cbiAgICAgKi9cbiAgICByb3dJbmRleDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgZm9yIHdoZW4gcmVzaXplciBrbm9iIChpbiBGaXhlZERhdGFUYWJsZUNlbGwpIGlzIGNsaWNrZWRcbiAgICAgKiB0byBpbml0aWFsaXplIHJlc2l6aW5nLiBQbGVhc2Ugbm90ZSB0aGlzIGlzIG9ubHkgb24gdGhlIGNlbGxzXG4gICAgICogaW4gdGhlIGhlYWRlci5cbiAgICAgKiBAcGFyYW0gbnVtYmVyIGNvbWJpbmVkV2lkdGhcbiAgICAgKiBAcGFyYW0gbnVtYmVyIGxlZnRcbiAgICAgKiBAcGFyYW0gbnVtYmVyIHdpZHRoXG4gICAgICogQHBhcmFtIG51bWJlciBtaW5XaWR0aFxuICAgICAqIEBwYXJhbSBudW1iZXIgbWF4V2lkdGhcbiAgICAgKiBAcGFyYW0gbnVtYmVyfHN0cmluZyBjb2x1bW5LZXlcbiAgICAgKiBAcGFyYW0gb2JqZWN0IGV2ZW50XG4gICAgICovXG4gICAgb25Db2x1bW5SZXNpemU6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGxlZnQgb2Zmc2V0IGluIHBpeGVscyBvZiB0aGUgY2VsbC5cbiAgICAgKi9cbiAgICBsZWZ0OiBQcm9wVHlwZXMubnVtYmVyXG4gIH0sXG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlOiBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgcmV0dXJuICFuZXh0UHJvcHMuaXNTY3JvbGxpbmcgfHwgdGhpcy5wcm9wcy5yb3dJbmRleCAhPT0gbmV4dFByb3BzLnJvd0luZGV4O1xuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkgLypvYmplY3QqL3tcbiAgICByZXR1cm4gREVGQVVMVF9QUk9QUztcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIC8qb2JqZWN0Ki97XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGhlaWdodCA9IF9wcm9wcy5oZWlnaHQ7XG4gICAgdmFyIHdpZHRoID0gX3Byb3BzLndpZHRoO1xuICAgIHZhciBjb2x1bW5LZXkgPSBfcHJvcHMuY29sdW1uS2V5O1xuXG4gICAgdmFyIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wcywgWydoZWlnaHQnLCAnd2lkdGgnLCAnY29sdW1uS2V5J10pO1xuXG4gICAgdmFyIHN0eWxlID0ge1xuICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICB3aWR0aDogd2lkdGhcbiAgICB9O1xuXG4gICAgaWYgKERJUl9TSUdOID09PSAxKSB7XG4gICAgICBzdHlsZS5sZWZ0ID0gcHJvcHMubGVmdDtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUucmlnaHQgPSBwcm9wcy5sZWZ0O1xuICAgIH1cblxuICAgIHZhciBjbGFzc05hbWUgPSBqb2luQ2xhc3NlcyhjeCh7XG4gICAgICAnZml4ZWREYXRhVGFibGVDZWxsTGF5b3V0L21haW4nOiB0cnVlLFxuICAgICAgJ2ZpeGVkRGF0YVRhYmxlQ2VsbExheW91dC9sYXN0Q2hpbGQnOiBwcm9wcy5sYXN0Q2hpbGQsXG4gICAgICAnZml4ZWREYXRhVGFibGVDZWxsTGF5b3V0L2FsaWduUmlnaHQnOiBwcm9wcy5hbGlnbiA9PT0gJ3JpZ2h0JyxcbiAgICAgICdmaXhlZERhdGFUYWJsZUNlbGxMYXlvdXQvYWxpZ25DZW50ZXInOiBwcm9wcy5hbGlnbiA9PT0gJ2NlbnRlcicsXG4gICAgICAncHVibGljL2ZpeGVkRGF0YVRhYmxlQ2VsbC9hbGlnblJpZ2h0JzogcHJvcHMuYWxpZ24gPT09ICdyaWdodCcsXG4gICAgICAncHVibGljL2ZpeGVkRGF0YVRhYmxlQ2VsbC9oaWdobGlnaHRlZCc6IHByb3BzLmhpZ2hsaWdodGVkLFxuICAgICAgJ3B1YmxpYy9maXhlZERhdGFUYWJsZUNlbGwvbWFpbic6IHRydWVcbiAgICB9KSwgcHJvcHMuY2xhc3NOYW1lKTtcblxuICAgIHZhciBjb2x1bW5SZXNpemVyQ29tcG9uZW50O1xuICAgIGlmIChwcm9wcy5vbkNvbHVtblJlc2l6ZSkge1xuICAgICAgdmFyIGNvbHVtblJlc2l6ZXJTdHlsZSA9IHtcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHRcbiAgICAgIH07XG4gICAgICBjb2x1bW5SZXNpemVyQ29tcG9uZW50ID0gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzc05hbWU6IGN4KCdmaXhlZERhdGFUYWJsZUNlbGxMYXlvdXQvY29sdW1uUmVzaXplckNvbnRhaW5lcicpLFxuICAgICAgICAgIHN0eWxlOiBjb2x1bW5SZXNpemVyU3R5bGUsXG4gICAgICAgICAgb25Nb3VzZURvd246IHRoaXMuX29uQ29sdW1uUmVzaXplck1vdXNlRG93biB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBqb2luQ2xhc3NlcyhjeCgnZml4ZWREYXRhVGFibGVDZWxsTGF5b3V0L2NvbHVtblJlc2l6ZXJLbm9iJyksIGN4KCdwdWJsaWMvZml4ZWREYXRhVGFibGVDZWxsL2NvbHVtblJlc2l6ZXJLbm9iJykpLFxuICAgICAgICAgIHN0eWxlOiBjb2x1bW5SZXNpemVyU3R5bGVcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgdmFyIGNlbGxQcm9wcyA9IHtcbiAgICAgIGNvbHVtbktleTogY29sdW1uS2V5LFxuICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICB3aWR0aDogd2lkdGhcbiAgICB9O1xuXG4gICAgaWYgKHByb3BzLnJvd0luZGV4ID49IDApIHtcbiAgICAgIGNlbGxQcm9wcy5yb3dJbmRleCA9IHByb3BzLnJvd0luZGV4O1xuICAgIH1cblxuICAgIHZhciBjb250ZW50O1xuICAgIGlmIChSZWFjdC5pc1ZhbGlkRWxlbWVudChwcm9wcy5jZWxsKSkge1xuICAgICAgY29udGVudCA9IFJlYWN0LmNsb25lRWxlbWVudChwcm9wcy5jZWxsLCBjZWxsUHJvcHMpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHByb3BzLmNlbGwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnRlbnQgPSBwcm9wcy5jZWxsKGNlbGxQcm9wcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRlbnQgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBGaXhlZERhdGFUYWJsZUNlbGxEZWZhdWx0LFxuICAgICAgICBjZWxsUHJvcHMsXG4gICAgICAgIHByb3BzLmNlbGxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUsIHN0eWxlOiBzdHlsZSB9LFxuICAgICAgY29sdW1uUmVzaXplckNvbXBvbmVudCxcbiAgICAgIGNvbnRlbnRcbiAgICApO1xuICB9LFxuXG4gIF9vbkNvbHVtblJlc2l6ZXJNb3VzZURvd246IGZ1bmN0aW9uIF9vbkNvbHVtblJlc2l6ZXJNb3VzZURvd24oIC8qb2JqZWN0Ki9ldmVudCkge1xuICAgIHRoaXMucHJvcHMub25Db2x1bW5SZXNpemUodGhpcy5wcm9wcy5sZWZ0LCB0aGlzLnByb3BzLndpZHRoLCB0aGlzLnByb3BzLm1pbldpZHRoLCB0aGlzLnByb3BzLm1heFdpZHRoLCB0aGlzLnByb3BzLmNvbHVtbktleSwgZXZlbnQpO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBGaXhlZERhdGFUYWJsZUNlbGw7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9GaXhlZERhdGFUYWJsZUNlbGwucmVhY3QuanNcbiAqKiBtb2R1bGUgaWQgPSAzMzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIEZpeGVkRGF0YVRhYmxlQ2VsbERlZmF1bHQucmVhY3RcbiAqIEB0eXBlY2hlY2tzXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJy4vUmVhY3QnKTtcblxudmFyIGN4ID0gcmVxdWlyZSgnLi9jeCcpO1xudmFyIGpvaW5DbGFzc2VzID0gcmVxdWlyZSgnLi9qb2luQ2xhc3NlcycpO1xuXG52YXIgUHJvcFR5cGVzID0gUmVhY3QuUHJvcFR5cGVzO1xuXG4vKipcbiAqIENvbXBvbmVudCB0aGF0IGhhbmRsZXMgZGVmYXVsdCBjZWxsIGxheW91dCBhbmQgc3R5bGluZy5cbiAqXG4gKiBBbGwgcHJvcHMgdW5sZXNzIHNwZWNpZmllZCBiZWxvdyB3aWxsIGJlIHNldCBvbnRvIHRoZSB0b3AgbGV2ZWwgYGRpdmBcbiAqIHJlbmRlcmVkIGJ5IHRoZSBjZWxsLlxuICpcbiAqIEV4YW1wbGUgdXNhZ2UgdmlhIGZyb20gYSBgQ29sdW1uYDpcbiAqIGBgYFxuICogY29uc3QgTXlDb2x1bW4gPSAoXG4gKiAgIDxDb2x1bW5cbiAqICAgICBjZWxsPXsoe3Jvd0luZGV4LCB3aWR0aCwgaGVpZ2h0fSkgPT4gKFxuICogICAgICAgPENlbGxcbiAqICAgICAgICAgd2lkdGg9e3dpZHRofVxuICogICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAqICAgICAgICAgY2xhc3NOYW1lPVwibXktY2xhc3NcIj5cbiAqICAgICAgICAgQ2VsbCBudW1iZXI6IDxzcGFuPntyb3dJbmRleH08L3NwYW4+XG4qICAgICAgICA8L0NlbGw+XG4gKiAgICAgKX1cbiAqICAgICB3aWR0aD17MTAwfVxuICogICAvPlxuICogKTtcbiAqIGBgYFxuICovXG52YXIgRml4ZWREYXRhVGFibGVDZWxsRGVmYXVsdCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdGaXhlZERhdGFUYWJsZUNlbGxEZWZhdWx0JyxcblxuICBwcm9wVHlwZXM6IHtcblxuICAgIC8qKlxuICAgICAqIE91dGVyIGhlaWdodCBvZiB0aGUgY2VsbC5cbiAgICAgKi9cbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvKipcbiAgICAgKiBPdXRlciB3aWR0aCBvZiB0aGUgY2VsbC5cbiAgICAgKi9cbiAgICB3aWR0aDogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKlxuICAgICAqIE9wdGlvbmFsIHByb3AgdGhhdCBpZiBzcGVjaWZpZWQgb24gdGhlIGBDb2x1bW5gIHdpbGwgYmUgcGFzc2VkIHRvIHRoZVxuICAgICAqIGNlbGwuIEl0IGNhbiBiZSB1c2VkIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHdoaWNoIGNvbHVtbiBpcyB0aGUgY2VsbCBpcyBpbi5cbiAgICAgKi9cbiAgICBjb2x1bW5LZXk6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKVxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBoZWlnaHQgPSBfcHJvcHMuaGVpZ2h0O1xuICAgIHZhciB3aWR0aCA9IF9wcm9wcy53aWR0aDtcbiAgICB2YXIgc3R5bGUgPSBfcHJvcHMuc3R5bGU7XG4gICAgdmFyIGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWU7XG4gICAgdmFyIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuO1xuICAgIHZhciBjb2x1bW5LZXkgPSBfcHJvcHMuY29sdW1uS2V5O1xuICAgIHZhciAvLyBVbnVzZWQgYnV0IHNob3VsZCBub3QgYmUgcGFzc2VkIHRocm91Z2hcbiAgICByb3dJbmRleCA9IF9wcm9wcy5yb3dJbmRleDtcblxuICAgIHZhciBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsnaGVpZ2h0JywgJ3dpZHRoJywgJ3N0eWxlJywgJ2NsYXNzTmFtZScsICdjaGlsZHJlbicsICdjb2x1bW5LZXknLCAncm93SW5kZXgnXSk7XG5cbiAgICB2YXIgaW5uZXJTdHlsZSA9IF9leHRlbmRzKHtcbiAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgd2lkdGg6IHdpZHRoXG4gICAgfSwgc3R5bGUpO1xuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgICAgICBjbGFzc05hbWU6IGpvaW5DbGFzc2VzKGN4KCdmaXhlZERhdGFUYWJsZUNlbGxMYXlvdXQvd3JhcDEnKSwgY3goJ3B1YmxpYy9maXhlZERhdGFUYWJsZUNlbGwvd3JhcDEnKSwgY2xhc3NOYW1lKSxcbiAgICAgICAgc3R5bGU6IGlubmVyU3R5bGUgfSksXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzTmFtZTogam9pbkNsYXNzZXMoY3goJ2ZpeGVkRGF0YVRhYmxlQ2VsbExheW91dC93cmFwMicpLCBjeCgncHVibGljL2ZpeGVkRGF0YVRhYmxlQ2VsbC93cmFwMicpKSB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogam9pbkNsYXNzZXMoY3goJ2ZpeGVkRGF0YVRhYmxlQ2VsbExheW91dC93cmFwMycpLCBjeCgncHVibGljL2ZpeGVkRGF0YVRhYmxlQ2VsbC93cmFwMycpKSB9LFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBjeCgncHVibGljL2ZpeGVkRGF0YVRhYmxlQ2VsbC9jZWxsQ29udGVudCcpIH0sXG4gICAgICAgICAgICBjaGlsZHJlblxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZpeGVkRGF0YVRhYmxlQ2VsbERlZmF1bHQ7XG4vLyBVbnVzZWQgYnV0IHNob3VsZCBub3QgYmUgcGFzc2VkIHRocm91Z2hcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL0ZpeGVkRGF0YVRhYmxlQ2VsbERlZmF1bHQucmVhY3QuanNcbiAqKiBtb2R1bGUgaWQgPSAzMzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBqb2luQ2xhc3Nlc1xuICogQHR5cGVjaGVja3Mgc3RhdGljLW9ubHlcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ29tYmluZXMgbXVsdGlwbGUgY2xhc3NOYW1lIHN0cmluZ3MgaW50byBvbmUuXG4gKiBodHRwOi8vanNwZXJmLmNvbS9qb2luY2xhc3Nlcy1hcmdzLXZzLWFycmF5XG4gKlxuICogQHBhcmFtIHsuLi4/c3RyaW5nfSBjbGFzc05hbWVcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gam9pbkNsYXNzZXMoY2xhc3NOYW1lIC8qLCAuLi4gKi8pIHtcbiAgaWYgKCFjbGFzc05hbWUpIHtcbiAgICBjbGFzc05hbWUgPSAnJztcbiAgfVxuICB2YXIgbmV4dENsYXNzO1xuICB2YXIgYXJnTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgaWYgKGFyZ0xlbmd0aCA+IDEpIHtcbiAgICBmb3IgKHZhciBpaSA9IDE7IGlpIDwgYXJnTGVuZ3RoOyBpaSsrKSB7XG4gICAgICBuZXh0Q2xhc3MgPSBhcmd1bWVudHNbaWldO1xuICAgICAgaWYgKG5leHRDbGFzcykge1xuICAgICAgICBjbGFzc05hbWUgPSAoY2xhc3NOYW1lID8gY2xhc3NOYW1lICsgJyAnIDogJycpICsgbmV4dENsYXNzO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gY2xhc3NOYW1lO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGpvaW5DbGFzc2VzO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvam9pbkNsYXNzZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAzMzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogVGhpcyBpcyB0byBiZSB1c2VkIHdpdGggdGhlIEZpeGVkRGF0YVRhYmxlLiBJdCBpcyBhIHJlYWQgbGluZVxuICogdGhhdCB3aGVuIHlvdSBjbGljayBvbiBhIGNvbHVtbiB0aGF0IGlzIHJlc2l6YWJsZSBhcHBlYXJzIGFuZCBhbGxvd3NcbiAqIHlvdSB0byByZXNpemUgdGhlIGNvcnJlc3BvbmRpbmcgY29sdW1uLlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBGaXhlZERhdGFUYWJsZUNvbHVtblJlc2l6ZUhhbmRsZS5yZWFjdFxuICogQHR5cGVjaGVja3NcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBET01Nb3VzZU1vdmVUcmFja2VyID0gcmVxdWlyZSgnLi9ET01Nb3VzZU1vdmVUcmFja2VyJyk7XG52YXIgTG9jYWxlID0gcmVxdWlyZSgnLi9Mb2NhbGUnKTtcbnZhciBSZWFjdCA9IHJlcXVpcmUoJy4vUmVhY3QnKTtcbnZhciBSZWFjdENvbXBvbmVudFdpdGhQdXJlUmVuZGVyTWl4aW4gPSByZXF1aXJlKCcuL1JlYWN0Q29tcG9uZW50V2l0aFB1cmVSZW5kZXJNaXhpbicpO1xuXG52YXIgY2xhbXAgPSByZXF1aXJlKCcuL2NsYW1wJyk7XG52YXIgY3ggPSByZXF1aXJlKCcuL2N4Jyk7XG5cbnZhciBQcm9wVHlwZXMgPSBSZWFjdC5Qcm9wVHlwZXM7XG5cbnZhciBGaXhlZERhdGFUYWJsZUNvbHVtblJlc2l6ZUhhbmRsZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdGaXhlZERhdGFUYWJsZUNvbHVtblJlc2l6ZUhhbmRsZScsXG5cbiAgbWl4aW5zOiBbUmVhY3RDb21wb25lbnRXaXRoUHVyZVJlbmRlck1peGluXSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICB2aXNpYmxlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhpcyBpcyB0aGUgaGVpZ2h0IG9mIHRoZSBsaW5lXG4gICAgICovXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBPZmZzZXQgZnJvbSBsZWZ0IGJvcmRlciBvZiB0aGUgdGFibGUsIHBsZWFzZSBub3RlXG4gICAgICogdGhhdCB0aGUgbGluZSBpcyBhIGJvcmRlciBvbiBkaWZmLiBTbyB0aGlzIGlzIHJlYWxseSB0aGVcbiAgICAgKiBvZmZzZXQgb2YgdGhlIGNvbHVtbiBpdHNlbGYuXG4gICAgICovXG4gICAgbGVmdE9mZnNldDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogSGVpZ2h0IG9mIHRoZSBjbGlja2FibGUgcmVnaW9uIG9mIHRoZSBsaW5lLlxuICAgICAqIFRoaXMgaXMgYXNzdW1lZCB0byBiZSBhdCB0aGUgdG9wIG9mIHRoZSBsaW5lLlxuICAgICAqL1xuICAgIGtub2JIZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBsaW5lIGlzIGEgYm9yZGVyIG9uIGEgZGlmZiwgc28gdGhpcyBpcyBlc3NlbnRpYWxseVxuICAgICAqIHRoZSB3aWR0aCBvZiBjb2x1bW4uXG4gICAgICovXG4gICAgaW5pdGlhbFdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLyoqXG4gICAgICogVGhlIG1pbmltdW0gd2lkdGggdGhpcyBkcmFnZ2VyIHdpbGwgY29sbGFwc2UgdG9cbiAgICAgKi9cbiAgICBtaW5XaWR0aDogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKlxuICAgICAqIFRoZSBtYXhpbXVtIHdpZHRoIHRoaXMgZHJhZ2dlciB3aWxsIGNvbGxhcHNlIHRvXG4gICAgICovXG4gICAgbWF4V2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsIGNsaWNrIGV2ZW50IG9uIHRoZSBoZWFkZXIgY2VsbC5cbiAgICAgKi9cbiAgICBpbml0aWFsRXZlbnQ6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHJlc2l6aW5nIGlzIGNvbXBsZXRlIHRoaXMgaXMgY2FsbGVkLlxuICAgICAqL1xuICAgIG9uQ29sdW1uUmVzaXplRW5kOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIENvbHVtbiBrZXkgZm9yIHRoZSBjb2x1bW4gYmVpbmcgcmVzaXplZC5cbiAgICAgKi9cbiAgICBjb2x1bW5LZXk6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKVxuICB9LFxuXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkgLypvYmplY3QqL3tcbiAgICByZXR1cm4ge1xuICAgICAgd2lkdGg6IDAsXG4gICAgICBjdXJzb3JEZWx0YTogMFxuICAgIH07XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyggLypvYmplY3QqL25ld1Byb3BzKSB7XG4gICAgaWYgKG5ld1Byb3BzLmluaXRpYWxFdmVudCAmJiAhdGhpcy5fbW91c2VNb3ZlVHJhY2tlci5pc0RyYWdnaW5nKCkpIHtcbiAgICAgIHRoaXMuX21vdXNlTW92ZVRyYWNrZXIuY2FwdHVyZU1vdXNlTW92ZXMobmV3UHJvcHMuaW5pdGlhbEV2ZW50KTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB3aWR0aDogbmV3UHJvcHMuaW5pdGlhbFdpZHRoLFxuICAgICAgICBjdXJzb3JEZWx0YTogbmV3UHJvcHMuaW5pdGlhbFdpZHRoXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuX21vdXNlTW92ZVRyYWNrZXIgPSBuZXcgRE9NTW91c2VNb3ZlVHJhY2tlcih0aGlzLl9vbk1vdmUsIHRoaXMuX29uQ29sdW1uUmVzaXplRW5kLCBkb2N1bWVudC5ib2R5KTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5fbW91c2VNb3ZlVHJhY2tlci5yZWxlYXNlTW91c2VNb3ZlcygpO1xuICAgIHRoaXMuX21vdXNlTW92ZVRyYWNrZXIgPSBudWxsO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkgLypvYmplY3QqL3tcbiAgICB2YXIgc3R5bGUgPSB7XG4gICAgICB3aWR0aDogdGhpcy5zdGF0ZS53aWR0aCxcbiAgICAgIGhlaWdodDogdGhpcy5wcm9wcy5oZWlnaHRcbiAgICB9O1xuICAgIGlmIChMb2NhbGUuaXNSVEwoKSkge1xuICAgICAgc3R5bGUucmlnaHQgPSB0aGlzLnByb3BzLmxlZnRPZmZzZXQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmxlZnQgPSB0aGlzLnByb3BzLmxlZnRPZmZzZXQ7XG4gICAgfVxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogY3goe1xuICAgICAgICAgICdmaXhlZERhdGFUYWJsZUNvbHVtblJlc2l6ZXJMaW5lTGF5b3V0L21haW4nOiB0cnVlLFxuICAgICAgICAgICdmaXhlZERhdGFUYWJsZUNvbHVtblJlc2l6ZXJMaW5lTGF5b3V0L2hpZGRlbkVsZW0nOiAhdGhpcy5wcm9wcy52aXNpYmxlLFxuICAgICAgICAgICdwdWJsaWMvZml4ZWREYXRhVGFibGVDb2x1bW5SZXNpemVyTGluZS9tYWluJzogdHJ1ZVxuICAgICAgICB9KSxcbiAgICAgICAgc3R5bGU6IHN0eWxlIH0sXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIGNsYXNzTmFtZTogY3goJ2ZpeGVkRGF0YVRhYmxlQ29sdW1uUmVzaXplckxpbmVMYXlvdXQvbW91c2VBcmVhJyksXG4gICAgICAgIHN0eWxlOiB7IGhlaWdodDogdGhpcy5wcm9wcy5oZWlnaHQgfVxuICAgICAgfSlcbiAgICApO1xuICB9LFxuXG4gIF9vbk1vdmU6IGZ1bmN0aW9uIF9vbk1vdmUoIC8qbnVtYmVyKi9kZWx0YVgpIHtcbiAgICBpZiAoTG9jYWxlLmlzUlRMKCkpIHtcbiAgICAgIGRlbHRhWCA9IC1kZWx0YVg7XG4gICAgfVxuICAgIHZhciBuZXdXaWR0aCA9IHRoaXMuc3RhdGUuY3Vyc29yRGVsdGEgKyBkZWx0YVg7XG4gICAgdmFyIG5ld0NvbHVtbldpZHRoID0gY2xhbXAobmV3V2lkdGgsIHRoaXMucHJvcHMubWluV2lkdGgsIHRoaXMucHJvcHMubWF4V2lkdGgpO1xuXG4gICAgLy8gUGxlYXNlIG5vdGUgY3Vyc29yIGRlbHRhIGlzIHRoZSBkaWZmZXJlbnQgYmV0d2VlbiB0aGUgY3VycmVudGx5IHdpZHRoXG4gICAgLy8gYW5kIHRoZSBuZXcgd2lkdGguXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB3aWR0aDogbmV3Q29sdW1uV2lkdGgsXG4gICAgICBjdXJzb3JEZWx0YTogbmV3V2lkdGhcbiAgICB9KTtcbiAgfSxcblxuICBfb25Db2x1bW5SZXNpemVFbmQ6IGZ1bmN0aW9uIF9vbkNvbHVtblJlc2l6ZUVuZCgpIHtcbiAgICB0aGlzLl9tb3VzZU1vdmVUcmFja2VyLnJlbGVhc2VNb3VzZU1vdmVzKCk7XG4gICAgdGhpcy5wcm9wcy5vbkNvbHVtblJlc2l6ZUVuZCh0aGlzLnN0YXRlLndpZHRoLCB0aGlzLnByb3BzLmNvbHVtbktleSk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZpeGVkRGF0YVRhYmxlQ29sdW1uUmVzaXplSGFuZGxlO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvRml4ZWREYXRhVGFibGVDb2x1bW5SZXNpemVIYW5kbGUucmVhY3QuanNcbiAqKiBtb2R1bGUgaWQgPSAzMzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIEZpeGVkRGF0YVRhYmxlU2Nyb2xsSGVscGVyXG4gKiBAdHlwZWNoZWNrc1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbnZhciBQcmVmaXhJbnRlcnZhbFRyZWUgPSByZXF1aXJlKCcuL1ByZWZpeEludGVydmFsVHJlZScpO1xudmFyIGNsYW1wID0gcmVxdWlyZSgnLi9jbGFtcCcpO1xuXG52YXIgQlVGRkVSX1JPV1MgPSA1O1xudmFyIE5PX1JPV1NfU0NST0xMX1JFU1VMVCA9IHtcbiAgaW5kZXg6IDAsXG4gIG9mZnNldDogMCxcbiAgcG9zaXRpb246IDAsXG4gIGNvbnRlbnRIZWlnaHQ6IDBcbn07XG5cbnZhciBGaXhlZERhdGFUYWJsZVNjcm9sbEhlbHBlciA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEZpeGVkRGF0YVRhYmxlU2Nyb2xsSGVscGVyKFxuICAvKm51bWJlciovcm93Q291bnQsXG4gIC8qbnVtYmVyKi9kZWZhdWx0Um93SGVpZ2h0LFxuICAvKm51bWJlciovdmlld3BvcnRIZWlnaHQsXG4gIC8qP2Z1bmN0aW9uKi9yb3dIZWlnaHRHZXR0ZXIpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRml4ZWREYXRhVGFibGVTY3JvbGxIZWxwZXIpO1xuXG4gICAgdGhpcy5fcm93T2Zmc2V0cyA9IFByZWZpeEludGVydmFsVHJlZS51bmlmb3JtKHJvd0NvdW50LCBkZWZhdWx0Um93SGVpZ2h0KTtcbiAgICB0aGlzLl9zdG9yZWRIZWlnaHRzID0gbmV3IEFycmF5KHJvd0NvdW50KTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJvd0NvdW50OyArK2kpIHtcbiAgICAgIHRoaXMuX3N0b3JlZEhlaWdodHNbaV0gPSBkZWZhdWx0Um93SGVpZ2h0O1xuICAgIH1cbiAgICB0aGlzLl9yb3dDb3VudCA9IHJvd0NvdW50O1xuICAgIHRoaXMuX3Bvc2l0aW9uID0gMDtcbiAgICB0aGlzLl9jb250ZW50SGVpZ2h0ID0gcm93Q291bnQgKiBkZWZhdWx0Um93SGVpZ2h0O1xuICAgIHRoaXMuX2RlZmF1bHRSb3dIZWlnaHQgPSBkZWZhdWx0Um93SGVpZ2h0O1xuICAgIHRoaXMuX3Jvd0hlaWdodEdldHRlciA9IHJvd0hlaWdodEdldHRlciA/IHJvd0hlaWdodEdldHRlciA6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBkZWZhdWx0Um93SGVpZ2h0O1xuICAgIH07XG4gICAgdGhpcy5fdmlld3BvcnRIZWlnaHQgPSB2aWV3cG9ydEhlaWdodDtcbiAgICB0aGlzLnNjcm9sbFJvd0ludG9WaWV3ID0gdGhpcy5zY3JvbGxSb3dJbnRvVmlldy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2V0Vmlld3BvcnRIZWlnaHQgPSB0aGlzLnNldFZpZXdwb3J0SGVpZ2h0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5zY3JvbGxCeSA9IHRoaXMuc2Nyb2xsQnkuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNjcm9sbFRvID0gdGhpcy5zY3JvbGxUby5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2Nyb2xsVG9Sb3cgPSB0aGlzLnNjcm9sbFRvUm93LmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZXRSb3dIZWlnaHRHZXR0ZXIgPSB0aGlzLnNldFJvd0hlaWdodEdldHRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2V0Q29udGVudEhlaWdodCA9IHRoaXMuZ2V0Q29udGVudEhlaWdodC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2V0Um93UG9zaXRpb24gPSB0aGlzLmdldFJvd1Bvc2l0aW9uLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLl91cGRhdGVIZWlnaHRzSW5WaWV3cG9ydCgwLCAwKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhGaXhlZERhdGFUYWJsZVNjcm9sbEhlbHBlciwgW3tcbiAgICBrZXk6ICdzZXRSb3dIZWlnaHRHZXR0ZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRSb3dIZWlnaHRHZXR0ZXIoIC8qZnVuY3Rpb24qL3Jvd0hlaWdodEdldHRlcikge1xuICAgICAgdGhpcy5fcm93SGVpZ2h0R2V0dGVyID0gcm93SGVpZ2h0R2V0dGVyO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NldFZpZXdwb3J0SGVpZ2h0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0Vmlld3BvcnRIZWlnaHQoIC8qbnVtYmVyKi92aWV3cG9ydEhlaWdodCkge1xuICAgICAgdGhpcy5fdmlld3BvcnRIZWlnaHQgPSB2aWV3cG9ydEhlaWdodDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRDb250ZW50SGVpZ2h0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q29udGVudEhlaWdodCgpIC8qbnVtYmVyKi97XG4gICAgICByZXR1cm4gdGhpcy5fY29udGVudEhlaWdodDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdfdXBkYXRlSGVpZ2h0c0luVmlld3BvcnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfdXBkYXRlSGVpZ2h0c0luVmlld3BvcnQoXG4gICAgLypudW1iZXIqL2ZpcnN0Um93SW5kZXgsXG4gICAgLypudW1iZXIqL2ZpcnN0Um93T2Zmc2V0KSB7XG4gICAgICB2YXIgdG9wID0gZmlyc3RSb3dPZmZzZXQ7XG4gICAgICB2YXIgaW5kZXggPSBmaXJzdFJvd0luZGV4O1xuICAgICAgd2hpbGUgKHRvcCA8PSB0aGlzLl92aWV3cG9ydEhlaWdodCAmJiBpbmRleCA8IHRoaXMuX3Jvd0NvdW50KSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVJvd0hlaWdodChpbmRleCk7XG4gICAgICAgIHRvcCArPSB0aGlzLl9zdG9yZWRIZWlnaHRzW2luZGV4XTtcbiAgICAgICAgaW5kZXgrKztcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdfdXBkYXRlSGVpZ2h0c0Fib3ZlVmlld3BvcnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfdXBkYXRlSGVpZ2h0c0Fib3ZlVmlld3BvcnQoIC8qbnVtYmVyKi9maXJzdFJvd0luZGV4KSB7XG4gICAgICB2YXIgaW5kZXggPSBmaXJzdFJvd0luZGV4IC0gMTtcbiAgICAgIHdoaWxlIChpbmRleCA+PSAwICYmIGluZGV4ID49IGZpcnN0Um93SW5kZXggLSBCVUZGRVJfUk9XUykge1xuICAgICAgICB2YXIgZGVsdGEgPSB0aGlzLl91cGRhdGVSb3dIZWlnaHQoaW5kZXgpO1xuICAgICAgICB0aGlzLl9wb3NpdGlvbiArPSBkZWx0YTtcbiAgICAgICAgaW5kZXgtLTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdfdXBkYXRlUm93SGVpZ2h0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3VwZGF0ZVJvd0hlaWdodCggLypudW1iZXIqL3Jvd0luZGV4KSAvKm51bWJlciove1xuICAgICAgaWYgKHJvd0luZGV4IDwgMCB8fCByb3dJbmRleCA+PSB0aGlzLl9yb3dDb3VudCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cbiAgICAgIHZhciBuZXdIZWlnaHQgPSB0aGlzLl9yb3dIZWlnaHRHZXR0ZXIocm93SW5kZXgpO1xuICAgICAgaWYgKG5ld0hlaWdodCAhPT0gdGhpcy5fc3RvcmVkSGVpZ2h0c1tyb3dJbmRleF0pIHtcbiAgICAgICAgdmFyIGNoYW5nZSA9IG5ld0hlaWdodCAtIHRoaXMuX3N0b3JlZEhlaWdodHNbcm93SW5kZXhdO1xuICAgICAgICB0aGlzLl9yb3dPZmZzZXRzLnNldChyb3dJbmRleCwgbmV3SGVpZ2h0KTtcbiAgICAgICAgdGhpcy5fc3RvcmVkSGVpZ2h0c1tyb3dJbmRleF0gPSBuZXdIZWlnaHQ7XG4gICAgICAgIHRoaXMuX2NvbnRlbnRIZWlnaHQgKz0gY2hhbmdlO1xuICAgICAgICByZXR1cm4gY2hhbmdlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0Um93UG9zaXRpb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRSb3dQb3NpdGlvbiggLypudW1iZXIqL3Jvd0luZGV4KSAvKm51bWJlciove1xuICAgICAgdGhpcy5fdXBkYXRlUm93SGVpZ2h0KHJvd0luZGV4KTtcbiAgICAgIHJldHVybiB0aGlzLl9yb3dPZmZzZXRzLnN1bVVudGlsKHJvd0luZGV4KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzY3JvbGxCeScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNjcm9sbEJ5KCAvKm51bWJlciovZGVsdGEpIC8qb2JqZWN0Ki97XG4gICAgICBpZiAodGhpcy5fcm93Q291bnQgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIE5PX1JPV1NfU0NST0xMX1JFU1VMVDtcbiAgICAgIH1cbiAgICAgIHZhciBmaXJzdFJvdyA9IHRoaXMuX3Jvd09mZnNldHMuZ3JlYXRlc3RMb3dlckJvdW5kKHRoaXMuX3Bvc2l0aW9uKTtcbiAgICAgIGZpcnN0Um93ID0gY2xhbXAoZmlyc3RSb3csIDAsIE1hdGgubWF4KHRoaXMuX3Jvd0NvdW50IC0gMSwgMCkpO1xuICAgICAgdmFyIGZpcnN0Um93UG9zaXRpb24gPSB0aGlzLl9yb3dPZmZzZXRzLnN1bVVudGlsKGZpcnN0Um93KTtcbiAgICAgIHZhciByb3dJbmRleCA9IGZpcnN0Um93O1xuICAgICAgdmFyIHBvc2l0aW9uID0gdGhpcy5fcG9zaXRpb247XG5cbiAgICAgIHZhciByb3dIZWlnaHRDaGFuZ2UgPSB0aGlzLl91cGRhdGVSb3dIZWlnaHQocm93SW5kZXgpO1xuICAgICAgaWYgKGZpcnN0Um93UG9zaXRpb24gIT09IDApIHtcbiAgICAgICAgcG9zaXRpb24gKz0gcm93SGVpZ2h0Q2hhbmdlO1xuICAgICAgfVxuICAgICAgdmFyIHZpc2libGVSb3dIZWlnaHQgPSB0aGlzLl9zdG9yZWRIZWlnaHRzW3Jvd0luZGV4XSAtIChwb3NpdGlvbiAtIGZpcnN0Um93UG9zaXRpb24pO1xuXG4gICAgICBpZiAoZGVsdGEgPj0gMCkge1xuXG4gICAgICAgIHdoaWxlIChkZWx0YSA+IDAgJiYgcm93SW5kZXggPCB0aGlzLl9yb3dDb3VudCkge1xuICAgICAgICAgIGlmIChkZWx0YSA8IHZpc2libGVSb3dIZWlnaHQpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uICs9IGRlbHRhO1xuICAgICAgICAgICAgZGVsdGEgPSAwO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZWx0YSAtPSB2aXNpYmxlUm93SGVpZ2h0O1xuICAgICAgICAgICAgcG9zaXRpb24gKz0gdmlzaWJsZVJvd0hlaWdodDtcbiAgICAgICAgICAgIHJvd0luZGV4Kys7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChyb3dJbmRleCA8IHRoaXMuX3Jvd0NvdW50KSB7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVSb3dIZWlnaHQocm93SW5kZXgpO1xuICAgICAgICAgICAgdmlzaWJsZVJvd0hlaWdodCA9IHRoaXMuX3N0b3JlZEhlaWdodHNbcm93SW5kZXhdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChkZWx0YSA8IDApIHtcbiAgICAgICAgZGVsdGEgPSAtZGVsdGE7XG4gICAgICAgIHZhciBpbnZpc2libGVSb3dIZWlnaHQgPSB0aGlzLl9zdG9yZWRIZWlnaHRzW3Jvd0luZGV4XSAtIHZpc2libGVSb3dIZWlnaHQ7XG5cbiAgICAgICAgd2hpbGUgKGRlbHRhID4gMCAmJiByb3dJbmRleCA+PSAwKSB7XG4gICAgICAgICAgaWYgKGRlbHRhIDwgaW52aXNpYmxlUm93SGVpZ2h0KSB7XG4gICAgICAgICAgICBwb3NpdGlvbiAtPSBkZWx0YTtcbiAgICAgICAgICAgIGRlbHRhID0gMDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcG9zaXRpb24gLT0gaW52aXNpYmxlUm93SGVpZ2h0O1xuICAgICAgICAgICAgZGVsdGEgLT0gaW52aXNpYmxlUm93SGVpZ2h0O1xuICAgICAgICAgICAgcm93SW5kZXgtLTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHJvd0luZGV4ID49IDApIHtcbiAgICAgICAgICAgIHZhciBjaGFuZ2UgPSB0aGlzLl91cGRhdGVSb3dIZWlnaHQocm93SW5kZXgpO1xuICAgICAgICAgICAgaW52aXNpYmxlUm93SGVpZ2h0ID0gdGhpcy5fc3RvcmVkSGVpZ2h0c1tyb3dJbmRleF07XG4gICAgICAgICAgICBwb3NpdGlvbiArPSBjaGFuZ2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBtYXhQb3NpdGlvbiA9IHRoaXMuX2NvbnRlbnRIZWlnaHQgLSB0aGlzLl92aWV3cG9ydEhlaWdodDtcbiAgICAgIHBvc2l0aW9uID0gY2xhbXAocG9zaXRpb24sIDAsIG1heFBvc2l0aW9uKTtcbiAgICAgIHRoaXMuX3Bvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICB2YXIgZmlyc3RSb3dJbmRleCA9IHRoaXMuX3Jvd09mZnNldHMuZ3JlYXRlc3RMb3dlckJvdW5kKHBvc2l0aW9uKTtcbiAgICAgIGZpcnN0Um93SW5kZXggPSBjbGFtcChmaXJzdFJvd0luZGV4LCAwLCBNYXRoLm1heCh0aGlzLl9yb3dDb3VudCAtIDEsIDApKTtcbiAgICAgIGZpcnN0Um93UG9zaXRpb24gPSB0aGlzLl9yb3dPZmZzZXRzLnN1bVVudGlsKGZpcnN0Um93SW5kZXgpO1xuICAgICAgdmFyIGZpcnN0Um93T2Zmc2V0ID0gZmlyc3RSb3dQb3NpdGlvbiAtIHBvc2l0aW9uO1xuXG4gICAgICB0aGlzLl91cGRhdGVIZWlnaHRzSW5WaWV3cG9ydChmaXJzdFJvd0luZGV4LCBmaXJzdFJvd09mZnNldCk7XG4gICAgICB0aGlzLl91cGRhdGVIZWlnaHRzQWJvdmVWaWV3cG9ydChmaXJzdFJvd0luZGV4KTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaW5kZXg6IGZpcnN0Um93SW5kZXgsXG4gICAgICAgIG9mZnNldDogZmlyc3RSb3dPZmZzZXQsXG4gICAgICAgIHBvc2l0aW9uOiB0aGlzLl9wb3NpdGlvbixcbiAgICAgICAgY29udGVudEhlaWdodDogdGhpcy5fY29udGVudEhlaWdodFxuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdfZ2V0Um93QXRFbmRQb3NpdGlvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9nZXRSb3dBdEVuZFBvc2l0aW9uKCAvKm51bWJlciovcm93SW5kZXgpIC8qbnVtYmVyKi97XG4gICAgICAvLyBXZSBuZWVkIHRvIHVwZGF0ZSBlbm91Z2ggcm93cyBhYm92ZSB0aGUgc2VsZWN0ZWQgb25lIHRvIGJlIHN1cmUgdGhhdCB3aGVuXG4gICAgICAvLyB3ZSBzY3JvbGwgdG8gc2VsZWN0ZWQgcG9zaXRpb24gYWxsIHJvd3MgYmV0d2VlbiBmaXJzdCBzaG93biBhbmQgc2VsZWN0ZWRcbiAgICAgIC8vIG9uZSBoYXZlIG1vc3QgcmVjZW50IGhlaWdodHMgY29tcHV0ZWQgYW5kIHdpbGwgbm90IHJlc2l6ZVxuICAgICAgdGhpcy5fdXBkYXRlUm93SGVpZ2h0KHJvd0luZGV4KTtcbiAgICAgIHZhciBjdXJyZW50Um93SW5kZXggPSByb3dJbmRleDtcbiAgICAgIHZhciB0b3AgPSB0aGlzLl9zdG9yZWRIZWlnaHRzW2N1cnJlbnRSb3dJbmRleF07XG4gICAgICB3aGlsZSAodG9wIDwgdGhpcy5fdmlld3BvcnRIZWlnaHQgJiYgY3VycmVudFJvd0luZGV4ID49IDApIHtcbiAgICAgICAgY3VycmVudFJvd0luZGV4LS07XG4gICAgICAgIGlmIChjdXJyZW50Um93SW5kZXggPj0gMCkge1xuICAgICAgICAgIHRoaXMuX3VwZGF0ZVJvd0hlaWdodChjdXJyZW50Um93SW5kZXgpO1xuICAgICAgICAgIHRvcCArPSB0aGlzLl9zdG9yZWRIZWlnaHRzW2N1cnJlbnRSb3dJbmRleF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZhciBwb3NpdGlvbiA9IHRoaXMuX3Jvd09mZnNldHMuc3VtVG8ocm93SW5kZXgpIC0gdGhpcy5fdmlld3BvcnRIZWlnaHQ7XG4gICAgICBpZiAocG9zaXRpb24gPCAwKSB7XG4gICAgICAgIHBvc2l0aW9uID0gMDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwb3NpdGlvbjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzY3JvbGxUbycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNjcm9sbFRvKCAvKm51bWJlciovcG9zaXRpb24pIC8qb2JqZWN0Ki97XG4gICAgICBpZiAodGhpcy5fcm93Q291bnQgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIE5PX1JPV1NfU0NST0xMX1JFU1VMVDtcbiAgICAgIH1cbiAgICAgIGlmIChwb3NpdGlvbiA8PSAwKSB7XG4gICAgICAgIC8vIElmIHBvc2l0aW9uIGxlc3MgdGhhbiBvciBlcXVhbCB0byAwIGZpcnN0IHJvdyBzaG91bGQgYmUgZnVsbHkgdmlzaWJsZVxuICAgICAgICAvLyBvbiB0b3BcbiAgICAgICAgdGhpcy5fcG9zaXRpb24gPSAwO1xuICAgICAgICB0aGlzLl91cGRhdGVIZWlnaHRzSW5WaWV3cG9ydCgwLCAwKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGluZGV4OiAwLFxuICAgICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgICBwb3NpdGlvbjogdGhpcy5fcG9zaXRpb24sXG4gICAgICAgICAgY29udGVudEhlaWdodDogdGhpcy5fY29udGVudEhlaWdodFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIGlmIChwb3NpdGlvbiA+PSB0aGlzLl9jb250ZW50SGVpZ2h0IC0gdGhpcy5fdmlld3BvcnRIZWlnaHQpIHtcbiAgICAgICAgLy8gSWYgcG9zaXRpb24gaXMgZXF1YWwgdG8gb3IgZ3JlYXRlciB0aGFuIG1heCBzY3JvbGwgdmFsdWUsIHdlIG5lZWRcbiAgICAgICAgLy8gdG8gbWFrZSBzdXJlIHRvIGhhdmUgYm90dG9tIGJvcmRlciBvZiBsYXN0IHJvdyB2aXNpYmxlLlxuICAgICAgICB2YXIgcm93SW5kZXggPSB0aGlzLl9yb3dDb3VudCAtIDE7XG4gICAgICAgIHBvc2l0aW9uID0gdGhpcy5fZ2V0Um93QXRFbmRQb3NpdGlvbihyb3dJbmRleCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9wb3NpdGlvbiA9IHBvc2l0aW9uO1xuXG4gICAgICB2YXIgZmlyc3RSb3dJbmRleCA9IHRoaXMuX3Jvd09mZnNldHMuZ3JlYXRlc3RMb3dlckJvdW5kKHBvc2l0aW9uKTtcbiAgICAgIGZpcnN0Um93SW5kZXggPSBjbGFtcChmaXJzdFJvd0luZGV4LCAwLCBNYXRoLm1heCh0aGlzLl9yb3dDb3VudCAtIDEsIDApKTtcbiAgICAgIHZhciBmaXJzdFJvd1Bvc2l0aW9uID0gdGhpcy5fcm93T2Zmc2V0cy5zdW1VbnRpbChmaXJzdFJvd0luZGV4KTtcbiAgICAgIHZhciBmaXJzdFJvd09mZnNldCA9IGZpcnN0Um93UG9zaXRpb24gLSBwb3NpdGlvbjtcblxuICAgICAgdGhpcy5fdXBkYXRlSGVpZ2h0c0luVmlld3BvcnQoZmlyc3RSb3dJbmRleCwgZmlyc3RSb3dPZmZzZXQpO1xuICAgICAgdGhpcy5fdXBkYXRlSGVpZ2h0c0Fib3ZlVmlld3BvcnQoZmlyc3RSb3dJbmRleCk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGluZGV4OiBmaXJzdFJvd0luZGV4LFxuICAgICAgICBvZmZzZXQ6IGZpcnN0Um93T2Zmc2V0LFxuICAgICAgICBwb3NpdGlvbjogdGhpcy5fcG9zaXRpb24sXG4gICAgICAgIGNvbnRlbnRIZWlnaHQ6IHRoaXMuX2NvbnRlbnRIZWlnaHRcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWxsb3dzIHRvIHNjcm9sbCB0byBzZWxlY3RlZCByb3cgd2l0aCBzcGVjaWZpZWQgb2Zmc2V0LiBJdCBhbHdheXNcbiAgICAgKiBicmluZ3MgdGhhdCByb3cgdG8gdG9wIG9mIHZpZXdwb3J0IHdpdGggdGhhdCBvZmZzZXRcbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogJ3Njcm9sbFRvUm93JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2Nyb2xsVG9Sb3coIC8qbnVtYmVyKi9yb3dJbmRleCwgLypudW1iZXIqL29mZnNldCkgLypvYmplY3QqL3tcbiAgICAgIHJvd0luZGV4ID0gY2xhbXAocm93SW5kZXgsIDAsIE1hdGgubWF4KHRoaXMuX3Jvd0NvdW50IC0gMSwgMCkpO1xuICAgICAgb2Zmc2V0ID0gY2xhbXAob2Zmc2V0LCAtdGhpcy5fc3RvcmVkSGVpZ2h0c1tyb3dJbmRleF0sIDApO1xuICAgICAgdmFyIGZpcnN0Um93ID0gdGhpcy5fcm93T2Zmc2V0cy5zdW1VbnRpbChyb3dJbmRleCk7XG4gICAgICByZXR1cm4gdGhpcy5zY3JvbGxUbyhmaXJzdFJvdyAtIG9mZnNldCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWxsb3dzIHRvIHNjcm9sbCB0byBzZWxlY3RlZCByb3cgYnkgYnJpbmdpbmcgaXQgdG8gdmlld3BvcnQgd2l0aCBtaW5pbWFsXG4gICAgICogc2Nyb2xsaW5nLiBUaGlzIHRoYXQgaWYgcm93IGlzIGZ1bGx5IHZpc2libGUsIHNjcm9sbCB3aWxsIG5vdCBiZSBjaGFuZ2VkLlxuICAgICAqIElmIHRvcCBib3JkZXIgb2Ygcm93IGlzIGFib3ZlIHRvcCBvZiB2aWV3cG9ydCBpdCB3aWxsIGJlIHNjcm9sbGVkIHRvIGJlXG4gICAgICogZnVsbHkgdmlzaWJsZSBvbiB0aGUgdG9wIG9mIHZpZXdwb3J0LiBJZiB0aGUgYm90dG9tIGJvcmRlciBvZiByb3cgaXNcbiAgICAgKiBiZWxvdyBlbmQgb2Ygdmlld3BvcnQsIGl0IHdpbGwgYmUgc2Nyb2xsZWQgdXAgdG8gYmUgZnVsbHkgdmlzaWJsZSBvbiB0aGVcbiAgICAgKiBib3R0b20gb2Ygdmlld3BvcnQuXG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6ICdzY3JvbGxSb3dJbnRvVmlldycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNjcm9sbFJvd0ludG9WaWV3KCAvKm51bWJlciovcm93SW5kZXgpIC8qb2JqZWN0Ki97XG4gICAgICByb3dJbmRleCA9IGNsYW1wKHJvd0luZGV4LCAwLCBNYXRoLm1heCh0aGlzLl9yb3dDb3VudCAtIDEsIDApKTtcbiAgICAgIHZhciByb3dCZWdpbiA9IHRoaXMuX3Jvd09mZnNldHMuc3VtVW50aWwocm93SW5kZXgpO1xuICAgICAgdmFyIHJvd0VuZCA9IHJvd0JlZ2luICsgdGhpcy5fc3RvcmVkSGVpZ2h0c1tyb3dJbmRleF07XG4gICAgICBpZiAocm93QmVnaW4gPCB0aGlzLl9wb3NpdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy5zY3JvbGxUbyhyb3dCZWdpbik7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX3Bvc2l0aW9uICsgdGhpcy5fdmlld3BvcnRIZWlnaHQgPCByb3dFbmQpIHtcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gdGhpcy5fZ2V0Um93QXRFbmRQb3NpdGlvbihyb3dJbmRleCk7XG4gICAgICAgIHJldHVybiB0aGlzLnNjcm9sbFRvKHBvc2l0aW9uKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLnNjcm9sbFRvKHRoaXMuX3Bvc2l0aW9uKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRml4ZWREYXRhVGFibGVTY3JvbGxIZWxwZXI7XG59KSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZpeGVkRGF0YVRhYmxlU2Nyb2xsSGVscGVyO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvRml4ZWREYXRhVGFibGVTY3JvbGxIZWxwZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAzMzZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIFByZWZpeEludGVydmFsVHJlZVxuICogXG4gKiBAdHlwZWNoZWNrc1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCcuL2ludmFyaWFudCcpO1xuXG52YXIgcGFyZW50ID0gZnVuY3Rpb24gcGFyZW50KG5vZGUpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3Iobm9kZSAvIDIpO1xufTtcblxudmFyIEludDMyQXJyYXkgPSBnbG9iYWwuSW50MzJBcnJheSB8fCBmdW5jdGlvbiAoc2l6ZSkge1xuICB2YXIgeHMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IHNpemUgLSAxOyBpID49IDA7IC0taSkge1xuICAgIHhzW2ldID0gMDtcbiAgfVxuICByZXR1cm4geHM7XG59O1xuXG4vKipcbiAqIENvbXB1dGVzIHRoZSBuZXh0IHBvd2VyIG9mIDIgYWZ0ZXIgb3IgZXF1YWwgdG8geC5cbiAqL1xuZnVuY3Rpb24gY2VpbExvZzIoeCkge1xuICB2YXIgeSA9IDE7XG4gIHdoaWxlICh5IDwgeCkge1xuICAgIHkgKj0gMjtcbiAgfVxuICByZXR1cm4geTtcbn1cblxuLyoqXG4gKiBBIHByZWZpeCBpbnRlcnZhbCB0cmVlIHN0b3JlcyBhbiBudW1lcmljIGFycmF5IGFuZCB0aGUgcGFydGlhbCBzdW1zIG9mIHRoYXRcbiAqIGFycmF5LiBJdCBpcyBvcHRpbWl6ZWQgZm9yIHVwZGF0aW5nIHRoZSB2YWx1ZXMgb2YgdGhlIGFycmF5IHdpdGhvdXRcbiAqIHJlY29tcHV0aW5nIGFsbCBvZiB0aGUgcGFydGlhbCBzdW1zLlxuICpcbiAqICAgLSBPKGxuIG4pIHVwZGF0ZVxuICogICAtIE8oMSkgbG9va3VwXG4gKiAgIC0gTyhsbiBuKSBjb21wdXRlIGEgcGFydGlhbCBzdW1cbiAqICAgLSBPKG4pIHNwYWNlXG4gKlxuICogTm90ZSB0aGF0IHRoZSBzZXF1ZW5jZSBvZiBwYXJ0aWFsIHN1bXMgaXMgb25lIGxvbmdlciB0aGFuIHRoZSBhcnJheSwgc28gdGhhdFxuICogdGhlIGZpcnN0IHBhcnRpYWwgc3VtIGlzIGFsd2F5cyAwLCBhbmQgdGhlIGxhc3QgcGFydGlhbCBzdW0gaXMgdGhlIHN1bSBvZiB0aGVcbiAqIGVudGlyZSBhcnJheS5cbiAqL1xuXG52YXIgUHJlZml4SW50ZXJ2YWxUcmVlID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gUHJlZml4SW50ZXJ2YWxUcmVlKHhzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFByZWZpeEludGVydmFsVHJlZSk7XG5cbiAgICB0aGlzLl9zaXplID0geHMubGVuZ3RoO1xuICAgIHRoaXMuX2hhbGYgPSBjZWlsTG9nMih0aGlzLl9zaXplKTtcbiAgICB0aGlzLl9oZWFwID0gbmV3IEludDMyQXJyYXkoMiAqIHRoaXMuX2hhbGYpO1xuXG4gICAgdmFyIGk7XG4gICAgZm9yIChpID0gMDsgaSA8IHRoaXMuX3NpemU7ICsraSkge1xuICAgICAgdGhpcy5faGVhcFt0aGlzLl9oYWxmICsgaV0gPSB4c1tpXTtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSB0aGlzLl9oYWxmIC0gMTsgaSA+IDA7IC0taSkge1xuICAgICAgdGhpcy5faGVhcFtpXSA9IHRoaXMuX2hlYXBbMiAqIGldICsgdGhpcy5faGVhcFsyICogaSArIDFdO1xuICAgIH1cbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhQcmVmaXhJbnRlcnZhbFRyZWUsIFt7XG4gICAga2V5OiAnc2V0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KGluZGV4LCB2YWx1ZSkge1xuICAgICAgaW52YXJpYW50KDAgPD0gaW5kZXggJiYgaW5kZXggPCB0aGlzLl9zaXplLCAnSW5kZXggb3V0IG9mIHJhbmdlICVzJywgaW5kZXgpO1xuXG4gICAgICB2YXIgbm9kZSA9IHRoaXMuX2hhbGYgKyBpbmRleDtcbiAgICAgIHRoaXMuX2hlYXBbbm9kZV0gPSB2YWx1ZTtcblxuICAgICAgbm9kZSA9IHBhcmVudChub2RlKTtcbiAgICAgIGZvciAoOyBub2RlICE9PSAwOyBub2RlID0gcGFyZW50KG5vZGUpKSB7XG4gICAgICAgIHRoaXMuX2hlYXBbbm9kZV0gPSB0aGlzLl9oZWFwWzIgKiBub2RlXSArIHRoaXMuX2hlYXBbMiAqIG5vZGUgKyAxXTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXQoaW5kZXgpIHtcbiAgICAgIGludmFyaWFudCgwIDw9IGluZGV4ICYmIGluZGV4IDwgdGhpcy5fc2l6ZSwgJ0luZGV4IG91dCBvZiByYW5nZSAlcycsIGluZGV4KTtcblxuICAgICAgdmFyIG5vZGUgPSB0aGlzLl9oYWxmICsgaW5kZXg7XG4gICAgICByZXR1cm4gdGhpcy5faGVhcFtub2RlXTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRTaXplJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U2l6ZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zaXplO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHN1bSBnZXQoMCkgKyBnZXQoMSkgKyAuLi4gKyBnZXQoZW5kIC0gMSkuXG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6ICdzdW1VbnRpbCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN1bVVudGlsKGVuZCkge1xuICAgICAgaW52YXJpYW50KDAgPD0gZW5kICYmIGVuZCA8IHRoaXMuX3NpemUgKyAxLCAnSW5kZXggb3V0IG9mIHJhbmdlICVzJywgZW5kKTtcblxuICAgICAgaWYgKGVuZCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cblxuICAgICAgdmFyIG5vZGUgPSB0aGlzLl9oYWxmICsgZW5kIC0gMTtcbiAgICAgIHZhciBzdW0gPSB0aGlzLl9oZWFwW25vZGVdO1xuICAgICAgZm9yICg7IG5vZGUgIT09IDE7IG5vZGUgPSBwYXJlbnQobm9kZSkpIHtcbiAgICAgICAgaWYgKG5vZGUgJSAyID09PSAxKSB7XG4gICAgICAgICAgc3VtICs9IHRoaXMuX2hlYXBbbm9kZSAtIDFdO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdW07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgc3VtIGdldCgwKSArIGdldCgxKSArIC4uLiArIGdldChpbmNsdXNpdmVFbmQpLlxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiAnc3VtVG8nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdW1UbyhpbmNsdXNpdmVFbmQpIHtcbiAgICAgIGludmFyaWFudCgwIDw9IGluY2x1c2l2ZUVuZCAmJiBpbmNsdXNpdmVFbmQgPCB0aGlzLl9zaXplLCAnSW5kZXggb3V0IG9mIHJhbmdlICVzJywgaW5jbHVzaXZlRW5kKTtcbiAgICAgIHJldHVybiB0aGlzLnN1bVVudGlsKGluY2x1c2l2ZUVuZCArIDEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHN1bSBnZXQoYmVnaW4pICsgZ2V0KGJlZ2luICsgMSkgKyAuLi4gKyBnZXQoZW5kIC0gMSkuXG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6ICdzdW0nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdW0oYmVnaW4sIGVuZCkge1xuICAgICAgaW52YXJpYW50KGJlZ2luIDw9IGVuZCwgJ0JlZ2luIG11c3QgcHJlY2VkZSBlbmQnKTtcbiAgICAgIHJldHVybiB0aGlzLnN1bVVudGlsKGVuZCkgLSB0aGlzLnN1bVVudGlsKGJlZ2luKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBzbWFsbGVzdCBpIHN1Y2ggdGhhdCAwIDw9IGkgPD0gc2l6ZSBhbmQgc3VtVW50aWwoaSkgPD0gdCwgb3JcbiAgICAgKiAtMSBpZiBubyBzdWNoIGkgZXhpc3RzLlxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiAnZ3JlYXRlc3RMb3dlckJvdW5kJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ3JlYXRlc3RMb3dlckJvdW5kKHQpIHtcbiAgICAgIGlmICh0IDwgMCkge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG5cbiAgICAgIHZhciBub2RlID0gMTtcbiAgICAgIGlmICh0aGlzLl9oZWFwW25vZGVdIDw9IHQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpemU7XG4gICAgICB9XG5cbiAgICAgIHdoaWxlIChub2RlIDwgdGhpcy5faGFsZikge1xuICAgICAgICB2YXIgbGVmdFN1bSA9IHRoaXMuX2hlYXBbMiAqIG5vZGVdO1xuICAgICAgICBpZiAodCA8IGxlZnRTdW0pIHtcbiAgICAgICAgICBub2RlID0gMiAqIG5vZGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm9kZSA9IDIgKiBub2RlICsgMTtcbiAgICAgICAgICB0IC09IGxlZnRTdW07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5vZGUgLSB0aGlzLl9oYWxmO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHNtYWxsZXN0IGkgc3VjaCB0aGF0IDAgPD0gaSA8PSBzaXplIGFuZCBzdW1VbnRpbChpKSA8IHQsIG9yXG4gICAgICogLTEgaWYgbm8gc3VjaCBpIGV4aXN0cy5cbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogJ2dyZWF0ZXN0U3RyaWN0TG93ZXJCb3VuZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdyZWF0ZXN0U3RyaWN0TG93ZXJCb3VuZCh0KSB7XG4gICAgICBpZiAodCA8PSAwKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH1cblxuICAgICAgdmFyIG5vZGUgPSAxO1xuICAgICAgaWYgKHRoaXMuX2hlYXBbbm9kZV0gPCB0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zaXplO1xuICAgICAgfVxuXG4gICAgICB3aGlsZSAobm9kZSA8IHRoaXMuX2hhbGYpIHtcbiAgICAgICAgdmFyIGxlZnRTdW0gPSB0aGlzLl9oZWFwWzIgKiBub2RlXTtcbiAgICAgICAgaWYgKHQgPD0gbGVmdFN1bSkge1xuICAgICAgICAgIG5vZGUgPSAyICogbm9kZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBub2RlID0gMiAqIG5vZGUgKyAxO1xuICAgICAgICAgIHQgLT0gbGVmdFN1bTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbm9kZSAtIHRoaXMuX2hhbGY7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgc21hbGxlc3QgaSBzdWNoIHRoYXQgMCA8PSBpIDw9IHNpemUgYW5kIHQgPD0gc3VtVW50aWwoaSksIG9yXG4gICAgICogc2l6ZSArIDEgaWYgbm8gc3VjaCBpIGV4aXN0cy5cbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogJ2xlYXN0VXBwZXJCb3VuZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxlYXN0VXBwZXJCb3VuZCh0KSB7XG4gICAgICByZXR1cm4gdGhpcy5ncmVhdGVzdFN0cmljdExvd2VyQm91bmQodCkgKyAxO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHNtYWxsZXN0IGkgc3VjaCB0aGF0IDAgPD0gaSA8PSBzaXplIGFuZCB0IDwgc3VtVW50aWwoaSksIG9yXG4gICAgICogc2l6ZSArIDEgaWYgbm8gc3VjaCBpIGV4aXN0cy5cbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogJ2xlYXN0U3RyaWN0VXBwZXJCb3VuZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxlYXN0U3RyaWN0VXBwZXJCb3VuZCh0KSB7XG4gICAgICByZXR1cm4gdGhpcy5ncmVhdGVzdExvd2VyQm91bmQodCkgKyAxO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiAndW5pZm9ybScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVuaWZvcm0oc2l6ZSwgaW5pdGlhbFZhbHVlKSB7XG4gICAgICB2YXIgeHMgPSBbXTtcbiAgICAgIGZvciAodmFyIGkgPSBzaXplIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgeHNbaV0gPSBpbml0aWFsVmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgUHJlZml4SW50ZXJ2YWxUcmVlKHhzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdlbXB0eScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGVtcHR5KHNpemUpIHtcbiAgICAgIHJldHVybiBQcmVmaXhJbnRlcnZhbFRyZWUudW5pZm9ybShzaXplLCAwKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUHJlZml4SW50ZXJ2YWxUcmVlO1xufSkoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBQcmVmaXhJbnRlcnZhbFRyZWU7XG5cbi8qKlxuICogTnVtYmVyIG9mIGVsZW1lbnRzIGluIHRoZSBhcnJheVxuICovXG5cbi8qKlxuICogSGFsZiB0aGUgc2l6ZSBvZiB0aGUgaGVhcC4gSXQgaXMgYWxzbyB0aGUgbnVtYmVyIG9mIG5vbi1sZWFmIG5vZGVzLCBhbmQgdGhlXG4gKiBpbmRleCBvZiB0aGUgZmlyc3QgZWxlbWVudCBpbiB0aGUgaGVhcC4gQWx3YXlzIGEgcG93ZXIgb2YgMi5cbiAqL1xuXG4vKipcbiAqIEJpbmFyeSBoZWFwXG4gKi9cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL1ByZWZpeEludGVydmFsVHJlZS5qc1xuICoqIG1vZHVsZSBpZCA9IDMzN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgRml4ZWREYXRhVGFibGVXaWR0aEhlbHBlclxuICogQHR5cGVjaGVja3NcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJy4vUmVhY3QnKTtcblxuZnVuY3Rpb24gZ2V0VG90YWxXaWR0aCggLyphcnJheSovY29sdW1ucykgLypudW1iZXIqL3tcbiAgdmFyIHRvdGFsV2lkdGggPSAwO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbHVtbnMubGVuZ3RoOyArK2kpIHtcbiAgICB0b3RhbFdpZHRoICs9IGNvbHVtbnNbaV0ucHJvcHMud2lkdGg7XG4gIH1cbiAgcmV0dXJuIHRvdGFsV2lkdGg7XG59XG5cbmZ1bmN0aW9uIGdldFRvdGFsRmxleEdyb3coIC8qYXJyYXkqL2NvbHVtbnMpIC8qbnVtYmVyKi97XG4gIHZhciB0b3RhbEZsZXhHcm93ID0gMDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb2x1bW5zLmxlbmd0aDsgKytpKSB7XG4gICAgdG90YWxGbGV4R3JvdyArPSBjb2x1bW5zW2ldLnByb3BzLmZsZXhHcm93IHx8IDA7XG4gIH1cbiAgcmV0dXJuIHRvdGFsRmxleEdyb3c7XG59XG5cbmZ1bmN0aW9uIGRpc3RyaWJ1dGVGbGV4V2lkdGgoXG4vKmFycmF5Ki9jb2x1bW5zLFxuLypudW1iZXIqL2ZsZXhXaWR0aCkgLypvYmplY3QqL3tcbiAgaWYgKGZsZXhXaWR0aCA8PSAwKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbHVtbnM6IGNvbHVtbnMsXG4gICAgICB3aWR0aDogZ2V0VG90YWxXaWR0aChjb2x1bW5zKVxuICAgIH07XG4gIH1cbiAgdmFyIHJlbWFpbmluZ0ZsZXhHcm93ID0gZ2V0VG90YWxGbGV4R3Jvdyhjb2x1bW5zKTtcbiAgdmFyIHJlbWFpbmluZ0ZsZXhXaWR0aCA9IGZsZXhXaWR0aDtcbiAgdmFyIG5ld0NvbHVtbnMgPSBbXTtcbiAgdmFyIHRvdGFsV2lkdGggPSAwO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbHVtbnMubGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgY29sdW1uID0gY29sdW1uc1tpXTtcbiAgICBpZiAoIWNvbHVtbi5wcm9wcy5mbGV4R3Jvdykge1xuICAgICAgdG90YWxXaWR0aCArPSBjb2x1bW4ucHJvcHMud2lkdGg7XG4gICAgICBuZXdDb2x1bW5zLnB1c2goY29sdW1uKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICB2YXIgY29sdW1uRmxleFdpZHRoID0gTWF0aC5mbG9vcihjb2x1bW4ucHJvcHMuZmxleEdyb3cgLyByZW1haW5pbmdGbGV4R3JvdyAqIHJlbWFpbmluZ0ZsZXhXaWR0aCk7XG4gICAgdmFyIG5ld0NvbHVtbldpZHRoID0gTWF0aC5mbG9vcihjb2x1bW4ucHJvcHMud2lkdGggKyBjb2x1bW5GbGV4V2lkdGgpO1xuICAgIHRvdGFsV2lkdGggKz0gbmV3Q29sdW1uV2lkdGg7XG5cbiAgICByZW1haW5pbmdGbGV4R3JvdyAtPSBjb2x1bW4ucHJvcHMuZmxleEdyb3c7XG4gICAgcmVtYWluaW5nRmxleFdpZHRoIC09IGNvbHVtbkZsZXhXaWR0aDtcblxuICAgIG5ld0NvbHVtbnMucHVzaChSZWFjdC5jbG9uZUVsZW1lbnQoY29sdW1uLCB7IHdpZHRoOiBuZXdDb2x1bW5XaWR0aCB9KSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNvbHVtbnM6IG5ld0NvbHVtbnMsXG4gICAgd2lkdGg6IHRvdGFsV2lkdGhcbiAgfTtcbn1cblxuZnVuY3Rpb24gYWRqdXN0Q29sdW1uR3JvdXBXaWR0aHMoXG4vKmFycmF5Ki9jb2x1bW5Hcm91cHMsXG4vKm51bWJlciovZXhwZWN0ZWRXaWR0aCkgLypvYmplY3QqL3tcbiAgdmFyIGFsbENvbHVtbnMgPSBbXTtcbiAgdmFyIGk7XG4gIGZvciAoaSA9IDA7IGkgPCBjb2x1bW5Hcm91cHMubGVuZ3RoOyArK2kpIHtcbiAgICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKGNvbHVtbkdyb3Vwc1tpXS5wcm9wcy5jaGlsZHJlbiwgZnVuY3Rpb24gKGNvbHVtbikge1xuICAgICAgYWxsQ29sdW1ucy5wdXNoKGNvbHVtbik7XG4gICAgfSk7XG4gIH1cbiAgdmFyIGNvbHVtbnNXaWR0aCA9IGdldFRvdGFsV2lkdGgoYWxsQ29sdW1ucyk7XG4gIHZhciByZW1haW5pbmdGbGV4R3JvdyA9IGdldFRvdGFsRmxleEdyb3coYWxsQ29sdW1ucyk7XG4gIHZhciByZW1haW5pbmdGbGV4V2lkdGggPSBNYXRoLm1heChleHBlY3RlZFdpZHRoIC0gY29sdW1uc1dpZHRoLCAwKTtcblxuICB2YXIgbmV3QWxsQ29sdW1ucyA9IFtdO1xuICB2YXIgbmV3Q29sdW1uR3JvdXBzID0gW107XG5cbiAgZm9yIChpID0gMDsgaSA8IGNvbHVtbkdyb3Vwcy5sZW5ndGg7ICsraSkge1xuICAgIHZhciBjb2x1bW5Hcm91cCA9IGNvbHVtbkdyb3Vwc1tpXTtcbiAgICB2YXIgY3VycmVudENvbHVtbnMgPSBbXTtcblxuICAgIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goY29sdW1uR3JvdXAucHJvcHMuY2hpbGRyZW4sIGZ1bmN0aW9uIChjb2x1bW4pIHtcbiAgICAgIGN1cnJlbnRDb2x1bW5zLnB1c2goY29sdW1uKTtcbiAgICB9KTtcblxuICAgIHZhciBjb2x1bW5Hcm91cEZsZXhHcm93ID0gZ2V0VG90YWxGbGV4R3JvdyhjdXJyZW50Q29sdW1ucyk7XG4gICAgdmFyIGNvbHVtbkdyb3VwRmxleFdpZHRoID0gTWF0aC5mbG9vcihjb2x1bW5Hcm91cEZsZXhHcm93IC8gcmVtYWluaW5nRmxleEdyb3cgKiByZW1haW5pbmdGbGV4V2lkdGgpO1xuXG4gICAgdmFyIG5ld0NvbHVtblNldHRpbmdzID0gZGlzdHJpYnV0ZUZsZXhXaWR0aChjdXJyZW50Q29sdW1ucywgY29sdW1uR3JvdXBGbGV4V2lkdGgpO1xuXG4gICAgcmVtYWluaW5nRmxleEdyb3cgLT0gY29sdW1uR3JvdXBGbGV4R3JvdztcbiAgICByZW1haW5pbmdGbGV4V2lkdGggLT0gY29sdW1uR3JvdXBGbGV4V2lkdGg7XG5cbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IG5ld0NvbHVtblNldHRpbmdzLmNvbHVtbnMubGVuZ3RoOyArK2opIHtcbiAgICAgIG5ld0FsbENvbHVtbnMucHVzaChuZXdDb2x1bW5TZXR0aW5ncy5jb2x1bW5zW2pdKTtcbiAgICB9XG5cbiAgICBuZXdDb2x1bW5Hcm91cHMucHVzaChSZWFjdC5jbG9uZUVsZW1lbnQoY29sdW1uR3JvdXAsIHsgd2lkdGg6IG5ld0NvbHVtblNldHRpbmdzLndpZHRoIH0pKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY29sdW1uczogbmV3QWxsQ29sdW1ucyxcbiAgICBjb2x1bW5Hcm91cHM6IG5ld0NvbHVtbkdyb3Vwc1xuICB9O1xufVxuXG5mdW5jdGlvbiBhZGp1c3RDb2x1bW5XaWR0aHMoXG4vKmFycmF5Ki9jb2x1bW5zLFxuLypudW1iZXIqL2V4cGVjdGVkV2lkdGgpIC8qYXJyYXkqL3tcbiAgdmFyIGNvbHVtbnNXaWR0aCA9IGdldFRvdGFsV2lkdGgoY29sdW1ucyk7XG4gIGlmIChjb2x1bW5zV2lkdGggPCBleHBlY3RlZFdpZHRoKSB7XG4gICAgcmV0dXJuIGRpc3RyaWJ1dGVGbGV4V2lkdGgoY29sdW1ucywgZXhwZWN0ZWRXaWR0aCAtIGNvbHVtbnNXaWR0aCkuY29sdW1ucztcbiAgfVxuICByZXR1cm4gY29sdW1ucztcbn1cblxudmFyIEZpeGVkRGF0YVRhYmxlV2lkdGhIZWxwZXIgPSB7XG4gIGdldFRvdGFsV2lkdGg6IGdldFRvdGFsV2lkdGgsXG4gIGdldFRvdGFsRmxleEdyb3c6IGdldFRvdGFsRmxleEdyb3csXG4gIGRpc3RyaWJ1dGVGbGV4V2lkdGg6IGRpc3RyaWJ1dGVGbGV4V2lkdGgsXG4gIGFkanVzdENvbHVtbldpZHRoczogYWRqdXN0Q29sdW1uV2lkdGhzLFxuICBhZGp1c3RDb2x1bW5Hcm91cFdpZHRoczogYWRqdXN0Q29sdW1uR3JvdXBXaWR0aHNcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRml4ZWREYXRhVGFibGVXaWR0aEhlbHBlcjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL0ZpeGVkRGF0YVRhYmxlV2lkdGhIZWxwZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAzMzhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIGRlYm91bmNlQ29yZVxuICogQHR5cGVjaGVja3NcbiAqL1xuXG4vKipcbiAqIEludm9rZXMgdGhlIGdpdmVuIGNhbGxiYWNrIGFmdGVyIGEgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaGF2ZVxuICogZWxhcHNlZCwgaWdub3Jpbmcgc3Vic2VxdWVudCBjYWxscy5cbiAqXG4gKiBGb3IgZXhhbXBsZSwgaWYgeW91IHdhbnRlZCB0byB1cGRhdGUgYSBwcmV2aWV3IGFmdGVyIHRoZSB1c2VyIHN0b3BzIHR5cGluZ1xuICogeW91IGNvdWxkIGRvIHRoZSBmb2xsb3dpbmc6XG4gKlxuICogICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZGVib3VuY2UodGhpcy51cGRhdGVQcmV2aWV3LCAyNTApLCBmYWxzZSk7XG4gKlxuICogVGhlIHJldHVybmVkIGZ1bmN0aW9uIGhhcyBhIHJlc2V0IG1ldGhvZCB3aGljaCBjYW4gYmUgY2FsbGVkIHRvIGNhbmNlbCBhXG4gKiBwZW5kaW5nIGludm9jYXRpb24uXG4gKlxuICogICB2YXIgZGVib3VuY2VkVXBkYXRlUHJldmlldyA9IGRlYm91bmNlKHRoaXMudXBkYXRlUHJldmlldywgMjUwKTtcbiAqICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGRlYm91bmNlZFVwZGF0ZVByZXZpZXcsIGZhbHNlKTtcbiAqXG4gKiAgIC8vIGxhdGVyLCB0byBjYW5jZWwgcGVuZGluZyBjYWxsc1xuICogICBkZWJvdW5jZWRVcGRhdGVQcmV2aWV3LnJlc2V0KCk7XG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZnVuYyAtIHRoZSBmdW5jdGlvbiB0byBkZWJvdW5jZVxuICogQHBhcmFtIHtudW1iZXJ9IHdhaXQgLSBob3cgbG9uZyB0byB3YWl0IGluIG1pbGxpc2Vjb25kc1xuICogQHBhcmFtIHsqfSBjb250ZXh0IC0gb3B0aW9uYWwgY29udGV4dCB0byBpbnZva2UgdGhlIGZ1bmN0aW9uIGluXG4gKiBAcGFyYW0gez9mdW5jdGlvbn0gc2V0VGltZW91dEZ1bmMgLSBhbiBpbXBsZW1lbnRhdGlvbiBvZiBzZXRUaW1lb3V0XG4gKiAgaWYgbm90aGluZyBpcyBwYXNzZWQgaW4gdGhlIGRlZmF1bHQgc2V0VGltZW91dCBmdW5jdGlvbiBpcyB1c2VkXG4gICogQHBhcmFtIHs/ZnVuY3Rpb259IGNsZWFyVGltZW91dEZ1bmMgLSBhbiBpbXBsZW1lbnRhdGlvbiBvZiBjbGVhclRpbWVvdXRcbiAqICBpZiBub3RoaW5nIGlzIHBhc3NlZCBpbiB0aGUgZGVmYXVsdCBjbGVhclRpbWVvdXQgZnVuY3Rpb24gaXMgdXNlZFxuICovXG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgY29udGV4dCwgc2V0VGltZW91dEZ1bmMsIGNsZWFyVGltZW91dEZ1bmMpIHtcbiAgc2V0VGltZW91dEZ1bmMgPSBzZXRUaW1lb3V0RnVuYyB8fCBzZXRUaW1lb3V0O1xuICBjbGVhclRpbWVvdXRGdW5jID0gY2xlYXJUaW1lb3V0RnVuYyB8fCBjbGVhclRpbWVvdXQ7XG4gIHZhciB0aW1lb3V0O1xuXG4gIGZ1bmN0aW9uIGRlYm91bmNlcigpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBkZWJvdW5jZXIucmVzZXQoKTtcblxuICAgIHZhciBjYWxsYmFjayA9IGZ1bmN0aW9uIGNhbGxiYWNrKCkge1xuICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICB9O1xuICAgIGNhbGxiYWNrLl9fU01tZXRhID0gZnVuYy5fX1NNbWV0YTtcbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dEZ1bmMoY2FsbGJhY2ssIHdhaXQpO1xuICB9XG5cbiAgZGVib3VuY2VyLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgIGNsZWFyVGltZW91dEZ1bmModGltZW91dCk7XG4gIH07XG5cbiAgcmV0dXJuIGRlYm91bmNlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkZWJvdW5jZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL2RlYm91bmNlQ29yZS5qc1xuICoqIG1vZHVsZSBpZCA9IDMzOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgc2hhbGxvd0VxdWFsXG4gKiBAdHlwZWNoZWNrc1xuICogXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFBlcmZvcm1zIGVxdWFsaXR5IGJ5IGl0ZXJhdGluZyB0aHJvdWdoIGtleXMgb24gYW4gb2JqZWN0IGFuZCByZXR1cm5pbmcgZmFsc2VcbiAqIHdoZW4gYW55IGtleSBoYXMgdmFsdWVzIHdoaWNoIGFyZSBub3Qgc3RyaWN0bHkgZXF1YWwgYmV0d2VlbiB0aGUgYXJndW1lbnRzLlxuICogUmV0dXJucyB0cnVlIHdoZW4gdGhlIHZhbHVlcyBvZiBhbGwga2V5cyBhcmUgc3RyaWN0bHkgZXF1YWwuXG4gKi9cbmZ1bmN0aW9uIHNoYWxsb3dFcXVhbChvYmpBLCBvYmpCKSB7XG4gIGlmIChvYmpBID09PSBvYmpCKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIG9iakEgIT09ICdvYmplY3QnIHx8IG9iakEgPT09IG51bGwgfHwgdHlwZW9mIG9iakIgIT09ICdvYmplY3QnIHx8IG9iakIgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIga2V5c0EgPSBPYmplY3Qua2V5cyhvYmpBKTtcbiAgdmFyIGtleXNCID0gT2JqZWN0LmtleXMob2JqQik7XG5cbiAgaWYgKGtleXNBLmxlbmd0aCAhPT0ga2V5c0IubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gVGVzdCBmb3IgQSdzIGtleXMgZGlmZmVyZW50IGZyb20gQi5cbiAgdmFyIGJIYXNPd25Qcm9wZXJ0eSA9IGhhc093blByb3BlcnR5LmJpbmQob2JqQik7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5c0EubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoIWJIYXNPd25Qcm9wZXJ0eShrZXlzQVtpXSkgfHwgb2JqQVtrZXlzQVtpXV0gIT09IG9iakJba2V5c0FbaV1dKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hhbGxvd0VxdWFsO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZpeGVkLWRhdGEtdGFibGUvaW50ZXJuYWwvc2hhbGxvd0VxdWFsLmpzXG4gKiogbW9kdWxlIGlkID0gMzQwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBGaXhlZERhdGFUYWJsZUNvbHVtbk5ldy5yZWFjdFxuICogQHR5cGVjaGVja3NcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJy4vUmVhY3QnKTtcblxudmFyIFByb3BUeXBlcyA9IFJlYWN0LlByb3BUeXBlcztcblxuLyoqXG4gKiBDb21wb25lbnQgdGhhdCBkZWZpbmVzIHRoZSBhdHRyaWJ1dGVzIG9mIHRhYmxlIGNvbHVtbi5cbiAqL1xudmFyIEZpeGVkRGF0YVRhYmxlQ29sdW1uID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0ZpeGVkRGF0YVRhYmxlQ29sdW1uJyxcblxuICBzdGF0aWNzOiB7XG4gICAgX19UYWJsZUNvbHVtbl9fOiB0cnVlXG4gIH0sXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgLyoqXG4gICAgICogVGhlIGhvcml6b250YWwgYWxpZ25tZW50IG9mIHRoZSB0YWJsZSBjZWxsIGNvbnRlbnQuXG4gICAgICovXG4gICAgYWxpZ246IFByb3BUeXBlcy5vbmVPZihbJ2xlZnQnLCAnY2VudGVyJywgJ3JpZ2h0J10pLFxuXG4gICAgLyoqXG4gICAgICogQ29udHJvbHMgaWYgdGhlIGNvbHVtbiBpcyBmaXhlZCB3aGVuIHNjcm9sbGluZyBpbiB0aGUgWCBheGlzLlxuICAgICAqL1xuICAgIGZpeGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBoZWFkZXIgY2VsbCBmb3IgdGhpcyBjb2x1bW4uXG4gICAgICogVGhpcyBjYW4gZWl0aGVyIGJlIGEgc3RyaW5nIGEgUmVhY3QgZWxlbWVudCwgb3IgYSBmdW5jdGlvbiB0aGF0IGdlbmVyYXRlc1xuICAgICAqIGEgUmVhY3QgRWxlbWVudC4gUGFzc2luZyBpbiBhIHN0cmluZyB3aWxsIHJlbmRlciBhIGRlZmF1bHQgaGVhZGVyIGNlbGxcbiAgICAgKiB3aXRoIHRoYXQgc3RyaW5nLiBCeSBkZWZhdWx0LCB0aGUgUmVhY3QgZWxlbWVudCBwYXNzZWQgaW4gY2FuIGV4cGVjdCB0b1xuICAgICAqIHJlY2VpdmUgdGhlIGZvbGxvd2luZyBwcm9wczpcbiAgICAgKlxuICAgICAqIGBgYFxuICAgICAqIHByb3BzOiB7XG4gICAgICogICBjb2x1bW5LZXk6IHN0cmluZyAvLyAob2YgdGhlIGNvbHVtbiwgaWYgZ2l2ZW4pXG4gICAgICogICBoZWlnaHQ6IG51bWJlciAvLyAoc3VwcGxpZWQgZnJvbSB0aGUgVGFibGUgb3Igcm93SGVpZ2h0R2V0dGVyKVxuICAgICAqICAgd2lkdGg6IG51bWJlciAvLyAoc3VwcGxpZWQgZnJvbSB0aGUgQ29sdW1uKVxuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIEJlY2F1c2UgeW91IGFyZSBwYXNzaW5nIGluIHlvdXIgb3duIFJlYWN0IGVsZW1lbnQsIHlvdSBjYW4gZmVlbCBmcmVlIHRvXG4gICAgICogcGFzcyBpbiB3aGF0ZXZlciBwcm9wcyB5b3UgbWF5IHdhbnQgb3IgbmVlZC5cbiAgICAgKlxuICAgICAqIElmIHlvdSBwYXNzIGluIGEgZnVuY3Rpb24sIHlvdSB3aWxsIHJlY2VpdmUgdGhlIHNhbWUgcHJvcHMgb2JqZWN0IGFzIHRoZVxuICAgICAqIGZpcnN0IGFyZ3VtZW50LlxuICAgICAqL1xuICAgIGhlYWRlcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm5vZGUsIFByb3BUeXBlcy5mdW5jXSksXG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGlzIHRoZSBib2R5IGNlbGwgdGhhdCB3aWxsIGJlIGNsb25lZCBmb3IgdGhpcyBjb2x1bW4uXG4gICAgICogVGhpcyBjYW4gZWl0aGVyIGJlIGEgc3RyaW5nIGEgUmVhY3QgZWxlbWVudCwgb3IgYSBmdW5jdGlvbiB0aGF0IGdlbmVyYXRlc1xuICAgICAqIGEgUmVhY3QgRWxlbWVudC4gUGFzc2luZyBpbiBhIHN0cmluZyB3aWxsIHJlbmRlciBhIGRlZmF1bHQgaGVhZGVyIGNlbGxcbiAgICAgKiB3aXRoIHRoYXQgc3RyaW5nLiBCeSBkZWZhdWx0LCB0aGUgUmVhY3QgZWxlbWVudCBwYXNzZWQgaW4gY2FuIGV4cGVjdCB0b1xuICAgICAqIHJlY2VpdmUgdGhlIGZvbGxvd2luZyBwcm9wczpcbiAgICAgKlxuICAgICAqIGBgYFxuICAgICAqIHByb3BzOiB7XG4gICAgICogICByb3dJbmRleDsgbnVtYmVyIC8vICh0aGUgcm93IGluZGV4IG9mIHRoZSBjZWxsKVxuICAgICAqICAgY29sdW1uS2V5OiBzdHJpbmcgLy8gKG9mIHRoZSBjb2x1bW4sIGlmIGdpdmVuKVxuICAgICAqICAgaGVpZ2h0OiBudW1iZXIgLy8gKHN1cHBsaWVkIGZyb20gdGhlIFRhYmxlIG9yIHJvd0hlaWdodEdldHRlcilcbiAgICAgKiAgIHdpZHRoOiBudW1iZXIgLy8gKHN1cHBsaWVkIGZyb20gdGhlIENvbHVtbilcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBCZWNhdXNlIHlvdSBhcmUgcGFzc2luZyBpbiB5b3VyIG93biBSZWFjdCBlbGVtZW50LCB5b3UgY2FuIGZlZWwgZnJlZSB0b1xuICAgICAqIHBhc3MgaW4gd2hhdGV2ZXIgcHJvcHMgeW91IG1heSB3YW50IG9yIG5lZWQuXG4gICAgICpcbiAgICAgKiBJZiB5b3UgcGFzcyBpbiBhIGZ1bmN0aW9uLCB5b3Ugd2lsbCByZWNlaXZlIHRoZSBzYW1lIHByb3BzIG9iamVjdCBhcyB0aGVcbiAgICAgKiBmaXJzdCBhcmd1bWVudC5cbiAgICAgKi9cbiAgICBjZWxsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubm9kZSwgUHJvcFR5cGVzLmZ1bmNdKSxcblxuICAgIC8qKlxuICAgICAqIFRoaXMgaXMgdGhlIGZvb3RlciBjZWxsIGZvciB0aGlzIGNvbHVtbi5cbiAgICAgKiBUaGlzIGNhbiBlaXRoZXIgYmUgYSBzdHJpbmcgYSBSZWFjdCBlbGVtZW50LCBvciBhIGZ1bmN0aW9uIHRoYXQgZ2VuZXJhdGVzXG4gICAgICogYSBSZWFjdCBFbGVtZW50LiBQYXNzaW5nIGluIGEgc3RyaW5nIHdpbGwgcmVuZGVyIGEgZGVmYXVsdCBoZWFkZXIgY2VsbFxuICAgICAqIHdpdGggdGhhdCBzdHJpbmcuIEJ5IGRlZmF1bHQsIHRoZSBSZWFjdCBlbGVtZW50IHBhc3NlZCBpbiBjYW4gZXhwZWN0IHRvXG4gICAgICogcmVjZWl2ZSB0aGUgZm9sbG93aW5nIHByb3BzOlxuICAgICAqXG4gICAgICogYGBgXG4gICAgICogcHJvcHM6IHtcbiAgICAgKiAgIGNvbHVtbktleTogc3RyaW5nIC8vIChvZiB0aGUgY29sdW1uLCBpZiBnaXZlbilcbiAgICAgKiAgIGhlaWdodDogbnVtYmVyIC8vIChzdXBwbGllZCBmcm9tIHRoZSBUYWJsZSBvciByb3dIZWlnaHRHZXR0ZXIpXG4gICAgICogICB3aWR0aDogbnVtYmVyIC8vIChzdXBwbGllZCBmcm9tIHRoZSBDb2x1bW4pXG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogQmVjYXVzZSB5b3UgYXJlIHBhc3NpbmcgaW4geW91ciBvd24gUmVhY3QgZWxlbWVudCwgeW91IGNhbiBmZWVsIGZyZWUgdG9cbiAgICAgKiBwYXNzIGluIHdoYXRldmVyIHByb3BzIHlvdSBtYXkgd2FudCBvciBuZWVkLlxuICAgICAqXG4gICAgICogSWYgeW91IHBhc3MgaW4gYSBmdW5jdGlvbiwgeW91IHdpbGwgcmVjZWl2ZSB0aGUgc2FtZSBwcm9wcyBvYmplY3QgYXMgdGhlXG4gICAgICogZmlyc3QgYXJndW1lbnQuXG4gICAgICovXG4gICAgZm9vdGVyOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubm9kZSwgUHJvcFR5cGVzLmZ1bmNdKSxcblxuICAgIC8qKlxuICAgICAqIFRoaXMgaXMgdXNlZCB0byB1bmlxdWVseSBpZGVudGlmeSB0aGUgY29sdW1uLCBhbmQgaXMgbm90IHJlcXVpcmVkIHVubGVzc1xuICAgICAqIHlvdSBhIHJlc2l6aW5nIGNvbHVtbnMuIFRoaXMgd2lsbCBiZSB0aGUga2V5IGdpdmVuIGluIHRoZVxuICAgICAqIGBvbkNvbHVtblJlc2l6ZUVuZENhbGxiYWNrYCBvbiB0aGUgVGFibGUuXG4gICAgICovXG4gICAgY29sdW1uS2V5OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG5cbiAgICAvKipcbiAgICAgKiBUaGUgcGl4ZWwgd2lkdGggb2YgdGhlIGNvbHVtbi5cbiAgICAgKi9cbiAgICB3aWR0aDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogSWYgdGhpcyBpcyBhIHJlc2l6YWJsZSBjb2x1bW4gdGhpcyBpcyBpdHMgbWluaW11bSBwaXhlbCB3aWR0aC5cbiAgICAgKi9cbiAgICBtaW5XaWR0aDogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKlxuICAgICAqIElmIHRoaXMgaXMgYSByZXNpemFibGUgY29sdW1uIHRoaXMgaXMgaXRzIG1heGltdW0gcGl4ZWwgd2lkdGguXG4gICAgICovXG4gICAgbWF4V2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgZ3JvdyBmYWN0b3IgcmVsYXRpdmUgdG8gb3RoZXIgY29sdW1ucy4gU2FtZSBhcyB0aGUgZmxleC1ncm93IEFQSVxuICAgICAqIGZyb20gaHR0cDovL3d3dy53My5vcmcvVFIvY3NzMy1mbGV4Ym94Ly4gQmFzaWNhbGx5LCB0YWtlIGFueSBhdmFpbGFibGVcbiAgICAgKiBleHRyYSB3aWR0aCBhbmQgZGlzdHJpYnV0ZSBpdCBwcm9wb3J0aW9uYWxseSBhY2NvcmRpbmcgdG8gYWxsIGNvbHVtbnMnXG4gICAgICogZmxleEdyb3cgdmFsdWVzLiBEZWZhdWx0cyB0byB6ZXJvIChuby1mbGV4aW5nKS5cbiAgICAgKi9cbiAgICBmbGV4R3JvdzogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdGhlIGNvbHVtbiBjYW4gYmUgcmVzaXplZCB3aXRoIHRoZVxuICAgICAqIEZpeGVkRGF0YVRhYmxlQ29sdW1uUmVzaXplSGFuZGxlLiBQbGVhc2Ugbm90ZSB0aGF0IGlmIGEgY29sdW1uXG4gICAgICogaGFzIGEgZmxleCBncm93LCBvbmNlIHlvdSByZXNpemUgdGhlIGNvbHVtbiB0aGlzIHdpbGwgYmUgc2V0IHRvIDAuXG4gICAgICpcbiAgICAgKiBUaGlzIHByb3BlcnR5IG9ubHkgcHJvdmlkZXMgdGhlIFVJIGZvciB0aGUgY29sdW1uIHJlc2l6aW5nLiBJZiB0aGlzXG4gICAgICogaXMgc2V0IHRvIHRydWUsIHlvdSB3aWxsIG5lZWQgdG8gc2V0IHRoZSBvbkNvbHVtblJlc2l6ZUVuZENhbGxiYWNrIHRhYmxlXG4gICAgICogcHJvcGVydHkgYW5kIHJlbmRlciB5b3VyIGNvbHVtbnMgYXBwcm9wcmlhdGVseS5cbiAgICAgKi9cbiAgICBpc1Jlc2l6YWJsZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIGNlbGxzIGluIHRoaXMgY29sdW1uIGNhbiBiZSByZW1vdmVkIGZyb20gZG9jdW1lbnQgd2hlbiBvdXRzaWRlXG4gICAgICogb2Ygdmlld3BvcnQgYXMgYSByZXN1bHQgb2YgaG9yaXpvbnRhbCBzY3JvbGxpbmcuXG4gICAgICogU2V0dGluZyB0aGlzIHByb3BlcnR5IHRvIHRydWUgYWxsb3dzIHRoZSB0YWJsZSB0byBub3QgcmVuZGVyIGNlbGxzIGluXG4gICAgICogcGFydGljdWxhciBjb2x1bW4gdGhhdCBhcmUgb3V0c2lkZSBvZiB2aWV3cG9ydCBmb3IgdmlzaWJsZSByb3dzLiBUaGlzXG4gICAgICogYWxsb3dzIHRvIGNyZWF0ZSB0YWJsZSB3aXRoIG1hbnkgY29sdW1ucyBhbmQgbm90IGhhdmUgdmVydGljYWwgc2Nyb2xsaW5nXG4gICAgICogcGVyZm9ybWFuY2UgZHJvcC5cbiAgICAgKiBTZXR0aW5nIHRoZSBwcm9wZXJ0eSB0byBmYWxzZSB3aWxsIGtlZXAgcHJldmlvdXMgYmVoYXZpb3VyIGFuZCBrZWVwXG4gICAgICogY2VsbCByZW5kZXJlZCBpZiB0aGUgcm93IGl0IGJlbG9uZ3MgdG8gaXMgdmlzaWJsZS5cbiAgICAgKi9cbiAgICBhbGxvd0NlbGxzUmVjeWNsaW5nOiBQcm9wVHlwZXMuYm9vbFxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkgLypvYmplY3QqL3tcbiAgICByZXR1cm4ge1xuICAgICAgYWxsb3dDZWxsc1JlY3ljbGluZzogZmFsc2UsXG4gICAgICBmaXhlZDogZmFsc2VcbiAgICB9O1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbXBvbmVudCA8Rml4ZWREYXRhVGFibGVDb2x1bW4gLz4gc2hvdWxkIG5ldmVyIHJlbmRlcicpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRml4ZWREYXRhVGFibGVDb2x1bW47XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9GaXhlZERhdGFUYWJsZUNvbHVtbk5ldy5yZWFjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDM0MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgRml4ZWREYXRhVGFibGVDb2x1bW5Hcm91cE5ldy5yZWFjdFxuICogQHR5cGVjaGVja3NcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJy4vUmVhY3QnKTtcblxudmFyIFByb3BUeXBlcyA9IFJlYWN0LlByb3BUeXBlcztcblxuLyoqXG4gKiBDb21wb25lbnQgdGhhdCBkZWZpbmVzIHRoZSBhdHRyaWJ1dGVzIG9mIGEgdGFibGUgY29sdW1uIGdyb3VwLlxuICovXG52YXIgRml4ZWREYXRhVGFibGVDb2x1bW5Hcm91cCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdGaXhlZERhdGFUYWJsZUNvbHVtbkdyb3VwJyxcblxuICBzdGF0aWNzOiB7XG4gICAgX19UYWJsZUNvbHVtbkdyb3VwX186IHRydWVcbiAgfSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICAvKipcbiAgICAgKiBUaGUgaG9yaXpvbnRhbCBhbGlnbm1lbnQgb2YgdGhlIHRhYmxlIGNlbGwgY29udGVudC5cbiAgICAgKi9cbiAgICBhbGlnbjogUHJvcFR5cGVzLm9uZU9mKFsnbGVmdCcsICdjZW50ZXInLCAncmlnaHQnXSksXG5cbiAgICAvKipcbiAgICAgKiBDb250cm9scyBpZiB0aGUgY29sdW1uIGdyb3VwIGlzIGZpeGVkIHdoZW4gc2Nyb2xsaW5nIGluIHRoZSBYIGF4aXMuXG4gICAgICovXG4gICAgZml4ZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogVGhpcyBpcyB0aGUgaGVhZGVyIGNlbGwgZm9yIHRoaXMgY29sdW1uIGdyb3VwLlxuICAgICAqIFRoaXMgY2FuIGVpdGhlciBiZSBhIHN0cmluZyBvciBhIFJlYWN0IGVsZW1lbnQuIFBhc3NpbmcgaW4gYSBzdHJpbmdcbiAgICAgKiB3aWxsIHJlbmRlciBhIGRlZmF1bHQgZm9vdGVyIGNlbGwgd2l0aCB0aGF0IHN0cmluZy4gQnkgZGVmYXVsdCwgdGhlIFJlYWN0XG4gICAgICogZWxlbWVudCBwYXNzZWQgaW4gY2FuIGV4cGVjdCB0byByZWNlaXZlIHRoZSBmb2xsb3dpbmcgcHJvcHM6XG4gICAgICpcbiAgICAgKiBgYGBcbiAgICAgKiBwcm9wczoge1xuICAgICAqICAgaGVpZ2h0OiBudW1iZXIgLy8gKHN1cHBsaWVkIGZyb20gdGhlIGdyb3VwSGVhZGVySGVpZ2h0KVxuICAgICAqICAgd2lkdGg6IG51bWJlciAvLyAoc3VwcGxpZWQgZnJvbSB0aGUgQ29sdW1uKVxuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIEJlY2F1c2UgeW91IGFyZSBwYXNzaW5nIGluIHlvdXIgb3duIFJlYWN0IGVsZW1lbnQsIHlvdSBjYW4gZmVlbCBmcmVlIHRvXG4gICAgICogcGFzcyBpbiB3aGF0ZXZlciBwcm9wcyB5b3UgbWF5IHdhbnQgb3IgbmVlZC5cbiAgICAgKlxuICAgICAqIFlvdSBjYW4gYWxzbyBwYXNzIGluIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgcmVhY3QgZWxlbW50LCB3aXRoIHRoZVxuICAgICAqIHByb3BzIG9iamVjdCBhYm92ZSBwYXNzZWQgaW4gYXMgdGhlIGZpcnN0IHBhcmFtZXRlci5cbiAgICAgKi9cbiAgICBoZWFkZXI6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ub2RlLCBQcm9wVHlwZXMuZnVuY10pXG5cbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIC8qb2JqZWN0Ki97XG4gICAgcmV0dXJuIHtcbiAgICAgIGZpeGVkOiBmYWxzZVxuICAgIH07XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ29tcG9uZW50IDxGaXhlZERhdGFUYWJsZUNvbHVtbkdyb3VwIC8+IHNob3VsZCBuZXZlciByZW5kZXInKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZpeGVkRGF0YVRhYmxlQ29sdW1uR3JvdXA7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZml4ZWQtZGF0YS10YWJsZS9pbnRlcm5hbC9GaXhlZERhdGFUYWJsZUNvbHVtbkdyb3VwTmV3LnJlYWN0LmpzXG4gKiogbW9kdWxlIGlkID0gMzQyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBGaXhlZERhdGFUYWJsZUNlbGxUcmFuc2l0aW9uLnJlYWN0XG4gKi9cblxuLyoqXG4gKiBUUkFOU0lUSU9OIFNISU1cbiAqIFRoaXMgYWN0cyB0byBwcm92aWRlIGFuIGludGVybWVkaWF0ZSBtYXBwaW5nIGZyb20gdGhlIG9sZCBBUEkgdG8gdGhlIG5ldyBBUEkuXG4gKlxuICogV2hlbiByZWFkeSwgcmVtb3ZlIHRoaXMgZmlsZSBhbmQgcmVuYW1lIHRoZSBwcm92aWRlc01vZHVsZSBpblxuICogRml4ZWREYXRhVGFibGVDZWxsTmV3LnJlYWN0IGFuZCBkZXBlbmRlbmN5IGluIEZpeGVkRGF0YVRhYmxlQ2VsbEdyb3VwLnJlYWN0XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCcuL1JlYWN0Jyk7XG52YXIgUHJvcFR5cGVzID0gUmVhY3QuUHJvcFR5cGVzO1xuXG52YXIgY3ggPSByZXF1aXJlKCcuL2N4Jyk7XG52YXIgam9pbkNsYXNzZXMgPSByZXF1aXJlKCcuL2pvaW5DbGFzc2VzJyk7XG52YXIgc2hhbGxvd0VxdWFsID0gcmVxdWlyZSgnLi9zaGFsbG93RXF1YWwnKTtcblxudmFyIENlbGxEZWZhdWx0ID0gcmVxdWlyZSgnLi9GaXhlZERhdGFUYWJsZUNlbGxEZWZhdWx0LnJlYWN0Jyk7XG5cbnZhciBUcmFuc2l0aW9uQ2VsbCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdUcmFuc2l0aW9uQ2VsbCcsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsIC8vIGhlYWRlciwgZm9vdGVyXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHJvd0luZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHJvd0dldHRlcjogUHJvcFR5cGVzLmZ1bmMsIC8vIGNlbGxcbiAgICBkYXRhS2V5OiBQcm9wVHlwZXMub25lT2ZUeXBlKFsvLyBjZWxsLCBmb290ZXJcbiAgICBQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG4gICAgY2VsbFJlbmRlcmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBjZWxsRGF0YUdldHRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZm9vdGVyRGF0YUdldHRlcjogUHJvcFR5cGVzLmZ1bmMsIC8vIGZvb3RlclxuICAgIGZvb3RlckRhdGE6IFByb3BUeXBlcy5hbnksIC8vIGZvb3RlclxuICAgIGNvbHVtbkRhdGE6IFByb3BUeXBlcy5hbnksIC8vIGNlbGwsIGhlYWRlclxuICAgIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBpc0hlYWRlckNlbGw6IFByb3BUeXBlcy5ib29sLCAvLyBoZWFkZXJcbiAgICBpc0Zvb3RlckNlbGw6IFByb3BUeXBlcy5ib29sIH0sXG5cbiAgLy8gZm9vdGVyXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZTogZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKCAvKm9iamVjdCovbmV4dFByb3BzKSB7XG4gICAgdmFyIHVwZGF0ZSA9IGZhbHNlO1xuICAgIHZhciByb3dEYXRhO1xuICAgIGlmIChuZXh0UHJvcHMucm93R2V0dGVyKSB7XG4gICAgICByb3dEYXRhID0gbmV4dFByb3BzLnJvd0dldHRlcihuZXh0UHJvcHMucm93SW5kZXgpO1xuICAgICAgaWYgKHRoaXMuX3Jvd0RhdGEgIT09IHJvd0RhdGEpIHtcbiAgICAgICAgdXBkYXRlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgY2VsbERhdGE7XG4gICAgaWYgKG5leHRQcm9wcy5kYXRhS2V5ICE9IG51bGwpIHtcbiAgICAgIGlmIChuZXh0UHJvcHMuY2VsbERhdGFHZXR0ZXIpIHtcbiAgICAgICAgY2VsbERhdGEgPSBuZXh0UHJvcHMuY2VsbERhdGFHZXR0ZXIobmV4dFByb3BzLmRhdGFLZXksIHJvd0RhdGEpO1xuICAgICAgfVxuICAgICAgaWYgKCFjZWxsRGF0YSAmJiByb3dEYXRhKSB7XG4gICAgICAgIGNlbGxEYXRhID0gcm93RGF0YVtuZXh0UHJvcHMuZGF0YUtleV07XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLl9jZWxsRGF0YSAhPT0gY2VsbERhdGEpIHtcbiAgICAgIHVwZGF0ZSA9IHRydWU7XG4gICAgfVxuICAgIHRoaXMuX3Jvd0RhdGEgPSByb3dEYXRhO1xuICAgIHRoaXMuX2NlbGxEYXRhID0gY2VsbERhdGE7XG5cbiAgICByZXR1cm4gdXBkYXRlIHx8ICFzaGFsbG93RXF1YWwobmV4dFByb3BzLCB0aGlzLnByb3BzKTtcbiAgfSxcblxuICBfZ2V0Q2VsbERhdGE6IGZ1bmN0aW9uIF9nZXRDZWxsRGF0YShwcm9wcykge1xuICAgIHZhciBkYXRhS2V5ID0gcHJvcHMuZGF0YUtleTtcbiAgICBpZiAoZGF0YUtleSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgcm93RGF0YTtcbiAgICBpZiAocHJvcHMucm93R2V0dGVyKSB7XG4gICAgICByb3dEYXRhID0gcHJvcHMucm93R2V0dGVyKHByb3BzLnJvd0luZGV4KTtcbiAgICB9XG5cbiAgICBpZiAocHJvcHMuY2VsbERhdGFHZXR0ZXIpIHtcbiAgICAgIHJldHVybiBwcm9wcy5jZWxsRGF0YUdldHRlcihkYXRhS2V5LCByb3dEYXRhKTtcbiAgICB9XG5cbiAgICBpZiAocm93RGF0YSkge1xuICAgICAgcmV0dXJuIHJvd0RhdGFbZGF0YUtleV07XG4gICAgfVxuXG4gICAgaWYgKHByb3BzLmZvb3RlckRhdGFHZXR0ZXIpIHtcbiAgICAgIHJldHVybiBwcm9wcy5mb290ZXJEYXRhR2V0dGVyKClbZGF0YUtleV07XG4gICAgfVxuXG4gICAgaWYgKHByb3BzLmZvb3RlckRhdGEpIHtcbiAgICAgIHJldHVybiBwcm9wcy5mb290ZXJEYXRhW2RhdGFLZXldO1xuICAgIH1cblxuICAgIGlmIChwcm9wcy5oZWFkZXJEYXRhR2V0dGVyKSB7XG4gICAgICByZXR1cm4gcHJvcHMuaGVhZGVyRGF0YUdldHRlcltkYXRhS2V5XTtcbiAgICB9XG4gIH0sXG5cbiAgX2dldFJvd0RhdGE6IGZ1bmN0aW9uIF9nZXRSb3dEYXRhKHByb3BzKSB7XG4gICAgaWYgKHByb3BzLnJvd0dldHRlcikge1xuICAgICAgcmV0dXJuIHByb3BzLnJvd0dldHRlcihwcm9wcy5yb3dJbmRleCkgfHwge307XG4gICAgfVxuXG4gICAgaWYgKHByb3BzLmZvb3RlckRhdGFHZXR0ZXIpIHtcbiAgICAgIHJldHVybiBwcm9wcy5mb290ZXJEYXRhR2V0dGVyKCkgfHwge307XG4gICAgfVxuXG4gICAgaWYgKHByb3BzLmZvb3RlckRhdGEpIHtcbiAgICAgIHJldHVybiBwcm9wcy5mb290ZXJEYXRhIHx8IHt9O1xuICAgIH1cblxuICAgIHJldHVybiB7fTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuXG4gICAgdmFyIGNlbGxEYXRhID0gdGhpcy5fZ2V0Q2VsbERhdGEocHJvcHMpO1xuICAgIHZhciBjb250ZW50ID0gY2VsbERhdGE7XG4gICAgdmFyIHJvd0RhdGEgPSB0aGlzLl9nZXRSb3dEYXRhKHByb3BzKTtcbiAgICB2YXIgdXNpbmdSZW5kZXJlciA9ICEhKHByb3BzLmNlbGxSZW5kZXJlciB8fCBwcm9wcy5ncm91cEhlYWRlclJlbmRlcmVyKTtcblxuICAgIGlmIChwcm9wcy5pc0hlYWRlckNlbGwgfHwgcHJvcHMuaXNGb290ZXJDZWxsKSB7XG4gICAgICBjb250ZW50ID0gY29udGVudCB8fCBwcm9wcy5sYWJlbDtcbiAgICB9XG5cbiAgICBpZiAocHJvcHMuY2VsbFJlbmRlcmVyKSB7XG4gICAgICBpZiAocHJvcHMuaXNIZWFkZXJDZWxsIHx8IHByb3BzLmlzRm9vdGVyQ2VsbCkge1xuICAgICAgICBjb250ZW50ID0gcHJvcHMuY2VsbFJlbmRlcmVyKHByb3BzLmxhYmVsLCBwcm9wcy5kYXRhS2V5LCBwcm9wcy5jb2x1bW5EYXRhLCByb3dEYXRhLCBwcm9wcy53aWR0aCkgfHwgcHJvcHMubGFiZWw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZW50ID0gcHJvcHMuY2VsbFJlbmRlcmVyKGNlbGxEYXRhLCBwcm9wcy5kYXRhS2V5LCByb3dEYXRhLCBwcm9wcy5yb3dJbmRleCwgcHJvcHMuY29sdW1uRGF0YSwgcHJvcHMud2lkdGgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcm9wcy5ncm91cEhlYWRlclJlbmRlcmVyKSB7XG4gICAgICBjb250ZW50ID0gcHJvcHMuZ3JvdXBIZWFkZXJSZW5kZXJlcihwcm9wcy5sYWJlbCwgcHJvcHMuZGF0YUtleSwgLy8gaW5kZXggaW4gY2hpbGRyZW5cbiAgICAgIHByb3BzLmdyb3VwSGVhZGVyRGF0YSwgcHJvcHMuZ3JvdXBIZWFkZXJMYWJlbHMsIHByb3BzLndpZHRoKSB8fCBjb250ZW50O1xuICAgIH1cblxuICAgIHZhciBjb250ZW50Q2xhc3MgPSBjeCgncHVibGljL2ZpeGVkRGF0YVRhYmxlQ2VsbC9jZWxsQ29udGVudCcpO1xuXG4gICAgaWYgKFJlYWN0LmlzVmFsaWRFbGVtZW50KGNvbnRlbnQpICYmIHVzaW5nUmVuZGVyZXIpIHtcbiAgICAgIGNvbnRlbnQgPSBSZWFjdC5jbG9uZUVsZW1lbnQoY29udGVudCwge1xuICAgICAgICBjbGFzc05hbWU6IGpvaW5DbGFzc2VzKGNvbnRlbnQucHJvcHMuY2xhc3NOYW1lLCBjb250ZW50Q2xhc3MpXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIENlbGxEZWZhdWx0LFxuICAgICAgICBwcm9wcyxcbiAgICAgICAgY29udGVudFxuICAgICAgKTtcbiAgICB9XG5cbiAgICB2YXIgaW5uZXJTdHlsZSA9IF9leHRlbmRzKHtcbiAgICAgIGhlaWdodDogcHJvcHMuaGVpZ2h0LFxuICAgICAgd2lkdGg6IHByb3BzLndpZHRoXG4gICAgfSwgcHJvcHMuc3R5bGUpO1xuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICAgIGNsYXNzTmFtZTogam9pbkNsYXNzZXMoY3goJ2ZpeGVkRGF0YVRhYmxlQ2VsbExheW91dC93cmFwMScpLCBjeCgncHVibGljL2ZpeGVkRGF0YVRhYmxlQ2VsbC93cmFwMScpLCB0aGlzLnByb3BzLmNsYXNzTmFtZSksXG4gICAgICAgIHN0eWxlOiBpbm5lclN0eWxlIH0pLFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzc05hbWU6IGpvaW5DbGFzc2VzKGN4KCdmaXhlZERhdGFUYWJsZUNlbGxMYXlvdXQvd3JhcDInKSwgY3goJ3B1YmxpYy9maXhlZERhdGFUYWJsZUNlbGwvd3JhcDInKSkgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6IGpvaW5DbGFzc2VzKGN4KCdmaXhlZERhdGFUYWJsZUNlbGxMYXlvdXQvd3JhcDMnKSwgY3goJ3B1YmxpYy9maXhlZERhdGFUYWJsZUNlbGwvd3JhcDMnKSkgfSxcbiAgICAgICAgICBjb250ZW50XG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBUcmFuc2l0aW9uQ2VsbDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9maXhlZC1kYXRhLXRhYmxlL2ludGVybmFsL0ZpeGVkRGF0YVRhYmxlQ2VsbFRyYW5zaXRpb24ucmVhY3QuanNcbiAqKiBtb2R1bGUgaWQgPSAzNDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCB7IGZvcmsgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuaW1wb3J0ICogYXMgc2FnYXMgZnJvbSAnLi9zYWdhc0RCLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIG9wdGlvbnNTYWdhKCkge1xuICB5aWVsZCBmb3JrKHNhZ2FzLmZldGNoU2l0ZXNTYWdhKTtcbiAgY29uc29sZS5sb2coJ2hpJyk7XG4gIHlpZWxkIGZvcmsoc2FnYXMuYWRkU2l0ZVNhZ2EpO1xuICBjb25zb2xlLmxvZygnaGkgYWdhaW4nKTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3NhZ2FzL29wdGlvbnNTYWdhcy5qc1xuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9maXhlZC1kYXRhLXRhYmxlLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZml4ZWQtZGF0YS10YWJsZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuL2ZpeGVkLWRhdGEtdGFibGUuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9maXhlZC1kYXRhLXRhYmxlL2Rpc3QvZml4ZWQtZGF0YS10YWJsZS5jc3NcbiAqKiBtb2R1bGUgaWQgPSA0OTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKipcXG4gKiBGaXhlZERhdGFUYWJsZSB2MC42LjMgXFxuICpcXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUsIEZhY2Vib29rLCBJbmMuXFxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxcbiAqL1xcblxcbi8qKlxcbiAqIENvcHlyaWdodCAoYykgMjAxNSwgRmFjZWJvb2ssIEluYy5cXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXFxuICpcXG4gKiBAcHJvdmlkZXNNb2R1bGUgZml4ZWREYXRhVGFibGVDZWxsR3JvdXBMYXlvdXRcXG4gKi9cXG5cXG4uZml4ZWREYXRhVGFibGVDZWxsR3JvdXBMYXlvdXRfY2VsbEdyb3VwIHtcXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICBsZWZ0OiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5maXhlZERhdGFUYWJsZUNlbGxHcm91cExheW91dF9jZWxsR3JvdXAgPiAucHVibGljX2ZpeGVkRGF0YVRhYmxlQ2VsbF9tYWluIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbn1cXG5cXG4uZml4ZWREYXRhVGFibGVDZWxsR3JvdXBMYXlvdXRfY2VsbEdyb3VwV3JhcHBlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxufVxcbi8qKlxcbiAqIENvcHlyaWdodCAoYykgMjAxNSwgRmFjZWJvb2ssIEluYy5cXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXFxuICpcXG4gKiBAcHJvdmlkZXNNb2R1bGUgZml4ZWREYXRhVGFibGVDZWxsTGF5b3V0XFxuICovXFxuXFxuLmZpeGVkRGF0YVRhYmxlQ2VsbExheW91dF9tYWluIHtcXG4gIGJvcmRlci1yaWdodC1zdHlsZTogc29saWQ7XFxuICBib3JkZXItcmlnaHQtd2lkdGg6IDFweDtcXG4gIGJvcmRlci13aWR0aDogMCAxcHggMCAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxufVxcblxcbi5maXhlZERhdGFUYWJsZUNlbGxMYXlvdXRfbGFzdENoaWxkIHtcXG4gIGJvcmRlci13aWR0aDogMCAxcHggMXB4IDA7XFxufVxcblxcbi5maXhlZERhdGFUYWJsZUNlbGxMYXlvdXRfYWxpZ25SaWdodCB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLmZpeGVkRGF0YVRhYmxlQ2VsbExheW91dF9hbGlnbkNlbnRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5maXhlZERhdGFUYWJsZUNlbGxMYXlvdXRfd3JhcDEge1xcbiAgZGlzcGxheTogdGFibGU7XFxufVxcblxcbi5maXhlZERhdGFUYWJsZUNlbGxMYXlvdXRfd3JhcDIge1xcbiAgZGlzcGxheTogdGFibGUtcm93O1xcbn1cXG5cXG4uZml4ZWREYXRhVGFibGVDZWxsTGF5b3V0X3dyYXAzIHtcXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4uZml4ZWREYXRhVGFibGVDZWxsTGF5b3V0X2NvbHVtblJlc2l6ZXJDb250YWluZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDBweDtcXG4gIHdpZHRoOiA2cHg7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uZml4ZWREYXRhVGFibGVDZWxsTGF5b3V0X2NvbHVtblJlc2l6ZXJDb250YWluZXI6aG92ZXIge1xcbiAgY3Vyc29yOiBldy1yZXNpemU7XFxufVxcblxcbi5maXhlZERhdGFUYWJsZUNlbGxMYXlvdXRfY29sdW1uUmVzaXplckNvbnRhaW5lcjpob3ZlciAuZml4ZWREYXRhVGFibGVDZWxsTGF5b3V0X2NvbHVtblJlc2l6ZXJLbm9iIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi5maXhlZERhdGFUYWJsZUNlbGxMYXlvdXRfY29sdW1uUmVzaXplcktub2Ige1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDBweDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHdpZHRoOiA0cHg7XFxufVxcbi8qKlxcbiAqIENvcHlyaWdodCAoYykgMjAxNSwgRmFjZWJvb2ssIEluYy5cXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXFxuICpcXG4gKiBAcHJvdmlkZXNNb2R1bGUgZml4ZWREYXRhVGFibGVDb2x1bW5SZXNpemVyTGluZUxheW91dFxcbiAqL1xcblxcbi5maXhlZERhdGFUYWJsZUNvbHVtblJlc2l6ZXJMaW5lTGF5b3V0X21vdXNlQXJlYSB7XFxuICBjdXJzb3I6IGV3LXJlc2l6ZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAtNXB4O1xcbiAgd2lkdGg6IDEycHg7XFxufVxcblxcbi5maXhlZERhdGFUYWJsZUNvbHVtblJlc2l6ZXJMaW5lTGF5b3V0X21haW4ge1xcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1yaWdodC13aWR0aDogMXB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDEwO1xcbn1cXG5cXG5ib2R5W2Rpcj1cXFwicnRsXFxcIl0gLmZpeGVkRGF0YVRhYmxlQ29sdW1uUmVzaXplckxpbmVMYXlvdXRfbWFpbiB7XFxuICAvKiB0aGUgcmVzaXplciBsaW5lIGlzIGluIHRoZSB3cm9uZyBwb3NpdGlvbiBpbiBSVEwgd2l0aCBubyBlYXN5IGZpeC5cXG4gICAqIERpc2FibGluZyBpcyBtb3JlIHVzZWZ1bCB0aGFuIGRpc3BsYXlpbmcgaXQuXFxuICAgKiAjMTY3IChnaXRodWIpIHNob3VsZCBsb29rIGludG8gdGhpcyBhbmQgY29tZSB1cCB3aXRoIGEgcGVybWFuZW50IGZpeC5cXG4gICAqL1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZml4ZWREYXRhVGFibGVDb2x1bW5SZXNpemVyTGluZUxheW91dF9oaWRkZW5FbGVtIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuLyoqXFxuICogQ29weXJpZ2h0IChjKSAyMDE1LCBGYWNlYm9vaywgSW5jLlxcbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcXG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cXG4gKlxcbiAqIEBwcm92aWRlc01vZHVsZSBmaXhlZERhdGFUYWJsZUxheW91dFxcbiAqL1xcblxcbi5maXhlZERhdGFUYWJsZUxheW91dF9tYWluIHtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItd2lkdGg6IDFweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uZml4ZWREYXRhVGFibGVMYXlvdXRfaGVhZGVyLFxcbi5maXhlZERhdGFUYWJsZUxheW91dF9oYXNCb3R0b21Cb3JkZXIge1xcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XFxuICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XFxufVxcblxcbi5maXhlZERhdGFUYWJsZUxheW91dF9mb290ZXIgLnB1YmxpY19maXhlZERhdGFUYWJsZUNlbGxfbWFpbiB7XFxuICBib3JkZXItdG9wLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci10b3Atd2lkdGg6IDFweDtcXG59XFxuXFxuLmZpeGVkRGF0YVRhYmxlTGF5b3V0X3RvcFNoYWRvdyxcXG4uZml4ZWREYXRhVGFibGVMYXlvdXRfYm90dG9tU2hhZG93IHtcXG4gIGhlaWdodDogNHB4O1xcbiAgbGVmdDogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLmZpeGVkRGF0YVRhYmxlTGF5b3V0X2JvdHRvbVNoYWRvdyB7XFxuICBtYXJnaW4tdG9wOiAtNHB4O1xcbn1cXG5cXG4uZml4ZWREYXRhVGFibGVMYXlvdXRfcm93c0NvbnRhaW5lciB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uZml4ZWREYXRhVGFibGVMYXlvdXRfaG9yaXpvbnRhbFNjcm9sbGJhciB7XFxuICBib3R0b206IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcbi8qKlxcbiAqIENvcHlyaWdodCAoYykgMjAxNSwgRmFjZWJvb2ssIEluYy5cXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXFxuICpcXG4gKiBAcHJvdmlkZXNNb2R1bGUgZml4ZWREYXRhVGFibGVSb3dMYXlvdXRcXG4gKi9cXG5cXG4uZml4ZWREYXRhVGFibGVSb3dMYXlvdXRfbWFpbiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG59XFxuXFxuLmZpeGVkRGF0YVRhYmxlUm93TGF5b3V0X2JvZHkge1xcbiAgbGVmdDogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG59XFxuXFxuLmZpeGVkRGF0YVRhYmxlUm93TGF5b3V0X2ZpeGVkQ29sdW1uc0RpdmlkZXIge1xcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJvcmRlci1sZWZ0LXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1sZWZ0LXdpZHRoOiAxcHg7XFxuICBsZWZ0OiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDA7XFxufVxcblxcbi5maXhlZERhdGFUYWJsZVJvd0xheW91dF9jb2x1bW5zU2hhZG93IHtcXG4gIHdpZHRoOiA0cHg7XFxufVxcblxcbi5maXhlZERhdGFUYWJsZVJvd0xheW91dF9yb3dXcmFwcGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG59XFxuLyoqXFxuICogQ29weXJpZ2h0IChjKSAyMDE1LCBGYWNlYm9vaywgSW5jLlxcbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcXG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cXG4gKlxcbiAqIEBwcm92aWRlc01vZHVsZSBTY3JvbGxiYXJMYXlvdXRcXG4gKi9cXG5cXG4uU2Nyb2xsYmFyTGF5b3V0X21haW4ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAyNTBtcztcXG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjUwbXM7XFxuICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xcbiAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5TY3JvbGxiYXJMYXlvdXRfbWFpblZlcnRpY2FsIHtcXG4gIGJvdHRvbTogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yIHdpZHRoO1xcbiAgICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yIHdpZHRoO1xcbiAgd2lkdGg6IDE1cHg7XFxufVxcblxcbi5TY3JvbGxiYXJMYXlvdXRfbWFpblZlcnRpY2FsLnB1YmxpY19TY3JvbGxiYXJfbWFpbkFjdGl2ZSxcXG4uU2Nyb2xsYmFyTGF5b3V0X21haW5WZXJ0aWNhbDpob3ZlciB7XFxuICB3aWR0aDogMTdweDtcXG59XFxuXFxuLlNjcm9sbGJhckxheW91dF9tYWluSG9yaXpvbnRhbCB7XFxuICBib3R0b206IDA7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICBsZWZ0OiAwO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yIGhlaWdodDtcXG4gICAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvciBoZWlnaHQ7XFxufVxcblxcbi8qIFRvdWNoaW5nIHRoZSBzY3JvbGwtdHJhY2sgZGlyZWN0bHkgbWFrZXMgdGhlIHNjcm9sbC10cmFjayBib2xkZXIgKi9cXG4uU2Nyb2xsYmFyTGF5b3V0X21haW5Ib3Jpem9udGFsLnB1YmxpY19TY3JvbGxiYXJfbWFpbkFjdGl2ZSxcXG4uU2Nyb2xsYmFyTGF5b3V0X21haW5Ib3Jpem9udGFsOmhvdmVyIHtcXG4gIGhlaWdodDogMTdweDtcXG59XFxuXFxuLlNjcm9sbGJhckxheW91dF9mYWNlIHtcXG4gIGxlZnQ6IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLyoqXFxuICogVGhpcyBzZWxlY3RvciByZW5kZXJzIHRoZSBcXFwibnViXFxcIiBvZiB0aGUgc2Nyb2xsZmFjZS4gVGhlIG51YiBtdXN0XFxuICogYmUgcmVuZGVyZWQgYXMgcHNldWRvLWVsZW1lbnQgc28gdGhhdCBpdCB3b24ndCByZWNlaXZlIGFueSBVSSBldmVudHMgdGhlblxcbiAqIHdlIGNhbiBnZXQgdGhlIGNvcnJlY3QgYGV2ZW50Lm9mZnNldFhgIGFuZCBgZXZlbnQub2Zmc2V0WWAgZnJvbSB0aGVcXG4gKiBzY3JvbGxmYWNlIGVsZW1lbnQgd2hpbGUgZHJhZ2dpbmcgaXQuXFxuICovXFxuLlNjcm9sbGJhckxheW91dF9mYWNlOmFmdGVyIHtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjUwbXMgZWFzZTtcXG4gICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyNTBtcyBlYXNlO1xcbn1cXG5cXG4uU2Nyb2xsYmFyTGF5b3V0X2ZhY2VIb3Jpem9udGFsIHtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxufVxcblxcbi5TY3JvbGxiYXJMYXlvdXRfZmFjZUhvcml6b250YWw6YWZ0ZXIge1xcbiAgYm90dG9tOiA0cHg7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiA0cHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLlNjcm9sbGJhckxheW91dF9mYWNlVmVydGljYWwge1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbn1cXG5cXG4uU2Nyb2xsYmFyTGF5b3V0X2ZhY2VWZXJ0aWNhbDphZnRlciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBsZWZ0OiA0cHg7XFxuICByaWdodDogNHB4O1xcbiAgdG9wOiAwO1xcbn1cXG4vKipcXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUsIEZhY2Vib29rLCBJbmMuXFxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxcbiAqXFxuICogQHByb3ZpZGVzTW9kdWxlIGZpeGVkRGF0YVRhYmxlXFxuICpcXG4gKi9cXG5cXG4vKipcXG4gKiBUYWJsZS5cXG4gKi9cXG4ucHVibGljX2ZpeGVkRGF0YVRhYmxlX21haW4ge1xcbiAgYm9yZGVyLWNvbG9yOiAjZDNkM2QzO1xcbn1cXG5cXG4ucHVibGljX2ZpeGVkRGF0YVRhYmxlX2hlYWRlcixcXG4ucHVibGljX2ZpeGVkRGF0YVRhYmxlX2hhc0JvdHRvbUJvcmRlciB7XFxuICBib3JkZXItY29sb3I6ICNkM2QzZDM7XFxufVxcblxcbi5wdWJsaWNfZml4ZWREYXRhVGFibGVfaGVhZGVyIC5wdWJsaWNfZml4ZWREYXRhVGFibGVDZWxsX21haW4ge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5wdWJsaWNfZml4ZWREYXRhVGFibGVfaGVhZGVyLFxcbi5wdWJsaWNfZml4ZWREYXRhVGFibGVfaGVhZGVyIC5wdWJsaWNfZml4ZWREYXRhVGFibGVDZWxsX21haW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjdmODtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCNmZmYsICNlZmVmZWYpO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCNmZmYsICNlZmVmZWYpO1xcbn1cXG5cXG4ucHVibGljX2ZpeGVkRGF0YVRhYmxlX2Zvb3RlciAucHVibGljX2ZpeGVkRGF0YVRhYmxlQ2VsbF9tYWluIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY3Zjg7XFxuICBib3JkZXItY29sb3I6ICNkM2QzZDM7XFxufVxcblxcbi5wdWJsaWNfZml4ZWREYXRhVGFibGVfdG9wU2hhZG93IHtcXG4gIGJhY2tncm91bmQ6IDAgMCB1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBRUFBQUFFQ0FZQUFBQlAyRlU2QUFBQUYwbEVRVlI0QVdQVWtOZVNCaEhDakpvSzJ0d2dGaXNBRmFnQ0NwM3BKbEFBQUFBQVNVVk9SSzVDWUlJPSkgcmVwZWF0LXg7XFxufVxcblxcbi5wdWJsaWNfZml4ZWREYXRhVGFibGVfYm90dG9tU2hhZG93IHtcXG4gIGJhY2tncm91bmQ6IDAgMCB1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBRUFBQUFFQ0FZQUFBQlAyRlU2QUFBQUhFbEVRVlFJMTJNd05qWm1aZEFUMStObTBKRFdFR1pRazFHVEJnQVdrd0llQUVwNTJBQUFBQUJKUlU1RXJrSmdnZz09KSByZXBlYXQteDtcXG59XFxuXFxuLnB1YmxpY19maXhlZERhdGFUYWJsZV9ob3Jpem9udGFsU2Nyb2xsYmFyIC5wdWJsaWNfU2Nyb2xsYmFyX21haW5Ib3Jpem9udGFsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcbi8qKlxcbiAqIENvcHlyaWdodCAoYykgMjAxNSwgRmFjZWJvb2ssIEluYy5cXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXFxuICpcXG4gKiBAcHJvdmlkZXNNb2R1bGUgZml4ZWREYXRhVGFibGVDZWxsXFxuICovXFxuXFxuLyoqXFxuICogVGFibGUgY2VsbC5cXG4gKi9cXG4ucHVibGljX2ZpeGVkRGF0YVRhYmxlQ2VsbF9tYWluIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXItY29sb3I6ICNkM2QzZDM7XFxufVxcblxcbi5wdWJsaWNfZml4ZWREYXRhVGFibGVDZWxsX2hpZ2hsaWdodGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XFxufVxcblxcbi5wdWJsaWNfZml4ZWREYXRhVGFibGVDZWxsX2NlbGxDb250ZW50IHtcXG4gIHBhZGRpbmc6IDhweDtcXG59XFxuXFxuLnB1YmxpY19maXhlZERhdGFUYWJsZUNlbGxfY29sdW1uUmVzaXplcktub2Ige1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyODRmZjtcXG59XFxuLyoqXFxuICogQ29weXJpZ2h0IChjKSAyMDE1LCBGYWNlYm9vaywgSW5jLlxcbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcXG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cXG4gKlxcbiAqIEBwcm92aWRlc01vZHVsZSBmaXhlZERhdGFUYWJsZUNvbHVtblJlc2l6ZXJMaW5lXFxuICpcXG4gKi9cXG5cXG4vKipcXG4gKiBDb2x1bW4gcmVzaXplciBsaW5lLlxcbiAqL1xcbi5wdWJsaWNfZml4ZWREYXRhVGFibGVDb2x1bW5SZXNpemVyTGluZV9tYWluIHtcXG4gIGJvcmRlci1jb2xvcjogIzAyODRmZjtcXG59XFxuLyoqXFxuICogQ29weXJpZ2h0IChjKSAyMDE1LCBGYWNlYm9vaywgSW5jLlxcbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcXG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cXG4gKlxcbiAqIEBwcm92aWRlc01vZHVsZSBmaXhlZERhdGFUYWJsZVJvd1xcbiAqL1xcblxcbi8qKlxcbiAqIFRhYmxlIHJvdy5cXG4gKi9cXG4ucHVibGljX2ZpeGVkRGF0YVRhYmxlUm93X21haW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuXFxuLnB1YmxpY19maXhlZERhdGFUYWJsZVJvd19oaWdobGlnaHRlZCxcXG4ucHVibGljX2ZpeGVkRGF0YVRhYmxlUm93X2hpZ2hsaWdodGVkIC5wdWJsaWNfZml4ZWREYXRhVGFibGVDZWxsX21haW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjdmODtcXG59XFxuXFxuLnB1YmxpY19maXhlZERhdGFUYWJsZVJvd19maXhlZENvbHVtbnNEaXZpZGVyIHtcXG4gIGJvcmRlci1jb2xvcjogI2QzZDNkMztcXG59XFxuXFxuLnB1YmxpY19maXhlZERhdGFUYWJsZVJvd19jb2x1bW5zU2hhZG93IHtcXG4gIGJhY2tncm91bmQ6IDAgMCB1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBUUFBQUFCQ0FZQUFBRDVQQS9OQUFBQUZrbEVRVlFJSFdQU2tOZVNCbUpoVFFWdGJpRE5DZ0FTYWdJSXVKWDhPZ0FBQUFCSlJVNUVya0pnZ2c9PSkgcmVwZWF0LXk7XFxufVxcbi8qKlxcbiAqIENvcHlyaWdodCAoYykgMjAxNSwgRmFjZWJvb2ssIEluYy5cXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXFxuICpcXG4gKiBAcHJvdmlkZXNNb2R1bGUgU2Nyb2xsYmFyXFxuICpcXG4gKi9cXG5cXG4vKipcXG4gKiBTY3JvbGxiYXJzLlxcbiAqL1xcblxcbi8qIFRvdWNoaW5nIHRoZSBzY3JvbGwtdHJhY2sgZGlyZWN0bHkgbWFrZXMgdGhlIHNjcm9sbC10cmFjayBib2xkZXIgKi9cXG4ucHVibGljX1Njcm9sbGJhcl9tYWluLnB1YmxpY19TY3JvbGxiYXJfbWFpbkFjdGl2ZSxcXG4ucHVibGljX1Njcm9sbGJhcl9tYWluOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG59XFxuXFxuLnB1YmxpY19TY3JvbGxiYXJfbWFpbk9wYXF1ZSxcXG4ucHVibGljX1Njcm9sbGJhcl9tYWluT3BhcXVlLnB1YmxpY19TY3JvbGxiYXJfbWFpbkFjdGl2ZSxcXG4ucHVibGljX1Njcm9sbGJhcl9tYWluT3BhcXVlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcblxcbi5wdWJsaWNfU2Nyb2xsYmFyX2ZhY2U6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MyYzJjMjtcXG59XFxuXFxuLnB1YmxpY19TY3JvbGxiYXJfbWFpbjpob3ZlciAucHVibGljX1Njcm9sbGJhcl9mYWNlOmFmdGVyLFxcbi5wdWJsaWNfU2Nyb2xsYmFyX21haW5BY3RpdmUgLnB1YmxpY19TY3JvbGxiYXJfZmFjZTphZnRlcixcXG4ucHVibGljX1Njcm9sbGJhcl9mYWNlQWN0aXZlOmFmdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3ZDdkN2Q7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXIhLi9+L2ZpeGVkLWRhdGEtdGFibGUvZGlzdC9maXhlZC1kYXRhLXRhYmxlLmNzc1xuICoqIG1vZHVsZSBpZCA9IDQ5N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==