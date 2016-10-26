webpackJsonp([1],{

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

	var _Popup = __webpack_require__(495);

	var _Popup2 = _interopRequireDefault(_Popup);

	var _Popup3 = __webpack_require__(496);

	var _Popup4 = _interopRequireDefault(_Popup3);

	var _popupSagas = __webpack_require__(501);

	var _popupSagas2 = _interopRequireDefault(_popupSagas);

	__webpack_require__(485);

	__webpack_require__(492);

	__webpack_require__(494);

	var _blockList = __webpack_require__(263);

	var _blockList2 = _interopRequireDefault(_blockList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_blockList2.default.init();
	var sagaMiddleware = (0, _reduxSaga2.default)();
	var store = (0, _redux.createStore)(_Popup2.default, (0, _redux.applyMiddleware)(sagaMiddleware));
	sagaMiddleware.run(_popupSagas2.default);

	(0, _reactDom.render)((0, _jsx3.default)(_reactRedux.Provider, {
	  store: store
	}, void 0, (0, _jsx3.default)(_Popup4.default, {})), document.getElementById('PopupApp'));

/***/ },

/***/ 495:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = reducer;

	var _update = __webpack_require__(262);

	var _update2 = _interopRequireDefault(_update);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function reducer() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? { sites: [], message: '', timer: null } : arguments[0];
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
	    case 'RECIEVE_TIMER':
	      return (0, _update2.default)(state, {
	        timer: { $set: action.timer }
	      });
	    default:
	      return state;
	  }
	}

/***/ },

/***/ 496:
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

	var _wurl = __webpack_require__(497);

	var _wurl2 = _interopRequireDefault(_wurl);

	var _tc = __webpack_require__(498);

	var _tc2 = _interopRequireDefault(_tc);

	var _common = __webpack_require__(478);

	var _popup = __webpack_require__(499);

	var _Timer = __webpack_require__(500);

	var _Timer2 = _interopRequireDefault(_Timer);

	var _InputBar = __webpack_require__(477);

	var _InputBar2 = _interopRequireDefault(_InputBar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var styleHeading = { padding: '0px' };
	var styleTitle = { padding: '10px 15px 10px 15px' };
	var styleLogo = { padding: '3px 15px 4px 5px' };

	var PopupApp = function (_React$Component) {
	  (0, _inherits3.default)(PopupApp, _React$Component);

	  function PopupApp(props) {
	    (0, _classCallCheck3.default)(this, PopupApp);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (PopupApp.__proto__ || (0, _getPrototypeOf2.default)(PopupApp)).call(this, props));

	    _this.goToOptions = _this.goToOptions.bind(_this);
	    _this.state = {
	      currentValue: ''
	    };
	    return _this;
	  }

	  (0, _createClass3.default)(PopupApp, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _this2 = this;

	      var getTimer = this.props.getTimer;

	      getTimer();
	      chrome.tabs.getSelected(null, function (tab) {
	        _this2.setState({ currentValue: (0, _wurl2.default)('domain', tab.url) });
	      });
	    }
	  }, {
	    key: 'goToOptions',
	    value: function goToOptions(e) {
	      e.preventDefault();
	      chrome.tabs.create({ url: chrome.extension.getURL('options.html') });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      console.log('Timer: ' + this.props.timer);
	      var timerComponent = void 0;
	      if (this.props.timer) {
	        timerComponent = (0, _jsx3.default)(_Timer2.default, {
	          timer: this.props.timer
	        });
	      } else {
	        timerComponent = '';
	      }
	      return (0, _jsx3.default)('div', {
	        id: 'PopupApp',
	        className: 'panel panel-default',
	        style: { width: '400px' }
	      }, void 0, (0, _jsx3.default)('div', {
	        className: 'panel-heading',
	        style: styleHeading
	      }, void 0, (0, _jsx3.default)('img', {
	        src: _tc2.default,
	        className: 'img-responsive pull-left',
	        style: styleLogo,
	        alt: ''
	      }), (0, _jsx3.default)('h3', {
	        className: 'panel-title',
	        style: styleTitle
	      }, void 0, 'Thought Crime')), (0, _jsx3.default)('div', {
	        className: 'panel-body'
	      }, void 0, (0, _jsx3.default)(_InputBar2.default, {
	        addSite: this.props.addSite,
	        currentValue: this.state.currentValue
	      }), timerComponent, (0, _jsx3.default)('button', {
	        type: 'button',
	        className: 'btn btn-default pull-right',
	        onClick: this.goToOptions
	      }, void 0, 'Options')));
	    }
	  }]);
	  return PopupApp;
	}(_react2.default.Component);

	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    sites: state.sites,
	    message: state.message,
	    timer: state.timer
	  };
	}, function (dispatch) {
	  return {
	    addSite: function addSite(site) {
	      return dispatch((0, _common.addSite)(site));
	    },
	    getTimer: function getTimer() {
	      return dispatch((0, _popup.getTimer)());
	    }
	  };
	})(PopupApp);

/***/ },

/***/ 498:
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAPwAAAD8BR5eJ4AAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAJdSURBVFiF3dZJa1RBEAfwnxsYETdcEUNUcF9wSaLgUa+KN8Eoggt6UlTwA+jBL+BJBEE8ePGo4EkP4nIQggsuKIpB3C4RY1Ticug32Bnfe9NvJl78QzFM1VT/a6qrqot0bMM7PMAejMN0nMJ73MOCCudVwgJ8xq9IvmCoTncXo/9FABfriMqkZ6TJZ+J7hQBujXQAxyuQ12RVq6RzcAxX/H33KfJGuLadaKtKvhEDTZAWyTNMKCLLq9g+9FaNugBDuIGvzTgvx2F/t1qKPMYuzGpEMiohkEE8xwH0C10xD+3CLOjLpD/TXcEl7Ej5lyl4hJ9CRmLsw7o63VEhA6dTD8/LwBocjL5vFibhuYwUpuGp0PNbM9I23MdCXM/sMtsRFepgopDOvLu9hvN4Genu4KyQqTyf66nEMc4UHNaM7G0mgGXCvbdKPogpZURFL9dkYRi1ij6Mreq0Tf7jc1K46zzbB5zA1Rzba6Ftk9CuuADPZL/pFFJb0z/EpMz2osD3lrSZU1p8t6PfHcp0A/7Mh2nK62Z7I/LReFtywKCwhtXQa/jA2VLi+wuXi0hr6FQ+u8cL3VHza0dHZK+fivXY1CiAtQ0OiEkWC+3VHdnWN/CdgbllASyqEEBX9tnhT9ZS/kD9ezIsgNkVAtgQ6bqEAuxI8J9ar4iHROHWEmG1UIhx6rvxTVqbTapXxAH8TDhgvJCFFZGuS9gbm0IcwJNEn/2Gt2MnPiX6Pi4zLpG2/+ctrClL7AOMaRRhj7A4jNRTXJNXWJpHmFc487EbK4VXsVn8wEfcxAUt1Mn/jd8g4D9wyurm7gAAAABJRU5ErkJggg=="

/***/ },

/***/ 499:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getTimer = getTimer;
	function getTimer() {
	  return {
	    type: 'GET_TIMER'
	  };
	}

/***/ },

/***/ 500:
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

	var _moment = __webpack_require__(298);

	var _moment2 = _interopRequireDefault(_moment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Timer = function (_React$Component) {
	  (0, _inherits3.default)(Timer, _React$Component);

	  function Timer(props) {
	    (0, _classCallCheck3.default)(this, Timer);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (Timer.__proto__ || (0, _getPrototypeOf2.default)(Timer)).call(this, props));

	    console.log('In Timer: ' + props.timer);
	    _this.state = {
	      seconds: props.timer || 0
	    };
	    _this.incrementTimer = _this.incrementTimer.bind(_this);
	    _this.interval = setInterval(_this.incrementTimer, 1000);
	    return _this;
	  }

	  (0, _createClass3.default)(Timer, [{
	    key: 'incrementTimer',
	    value: function incrementTimer() {
	      this.setState({
	        seconds: this.state.seconds + 1
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      console.log(this.state.seconds);
	      var spanTimer = (0, _moment2.default)('2015-01-01').startOf('day').seconds(this.state.seconds).format('H:mm:ss');

	      return (0, _jsx3.default)('span', {}, void 0, spanTimer);
	    }
	  }]);
	  return Timer;
	}(_react2.default.Component);

	exports.default = Timer;

/***/ },

/***/ 501:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _regenerator = __webpack_require__(480);

	var _regenerator2 = _interopRequireDefault(_regenerator);

	var _promise = __webpack_require__(264);

	var _promise2 = _interopRequireDefault(_promise);

	exports.default = popupSagas;

	var _effects = __webpack_require__(483);

	var _sagasDB = __webpack_require__(484);

	var _reduxSaga = __webpack_require__(249);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _marked = [getTimer, getTimerSaga, popupSagas].map(_regenerator2.default.mark);

	function sendTimerMessage() {
	  return new _promise2.default(function (resolve, reject) {
	    chrome.runtime.sendMessage({ timer: 'popup' }, function (response) {
	      resolve(response.seconds);
	    });
	  });
	}

	function getTimer() {
	  var timer;
	  return _regenerator2.default.wrap(function getTimer$(_context) {
	    while (1) {
	      switch (_context.prev = _context.next) {
	        case 0:
	          _context.prev = 0;
	          _context.next = 3;
	          return (0, _effects.call)(sendTimerMessage);

	        case 3:
	          timer = _context.sent;

	          console.log(timer);
	          _context.next = 7;
	          return (0, _effects.put)({ type: 'RECIEVE_TIMER', timer: timer });

	        case 7:
	          _context.next = 12;
	          break;

	        case 9:
	          _context.prev = 9;
	          _context.t0 = _context['catch'](0);

	          console.error(_context.t0);

	        case 12:
	        case 'end':
	          return _context.stop();
	      }
	    }
	  }, _marked[0], this, [[0, 9]]);
	}
	function getTimerSaga() {
	  return _regenerator2.default.wrap(function getTimerSaga$(_context2) {
	    while (1) {
	      switch (_context2.prev = _context2.next) {
	        case 0:
	          return _context2.delegateYield((0, _reduxSaga.takeLatest)('GET_TIMER', getTimer), 't0', 1);

	        case 1:
	        case 'end':
	          return _context2.stop();
	      }
	    }
	  }, _marked[1], this);
	}
	function popupSagas() {
	  return _regenerator2.default.wrap(function popupSagas$(_context3) {
	    while (1) {
	      switch (_context3.prev = _context3.next) {
	        case 0:
	          _context3.next = 2;
	          return (0, _effects.fork)(_sagasDB.addSiteSaga);

	        case 2:
	          _context3.next = 4;
	          return (0, _effects.fork)(getTimerSaga);

	        case 4:
	        case 'end':
	          return _context3.stop();
	      }
	    }
	  }, _marked[2], this);
	}

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvUG9wdXBBcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL1BvcHVwLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL1BvcHVwLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWcvdGMtMzIucG5nIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3BvcHVwLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1RpbWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zYWdhcy9wb3B1cFNhZ2FzLmpzIl0sIm5hbWVzIjpbImluaXQiLCJzYWdhTWlkZGxld2FyZSIsInN0b3JlIiwicnVuIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlZHVjZXIiLCJzdGF0ZSIsInNpdGVzIiwibWVzc2FnZSIsInRpbWVyIiwiYWN0aW9uIiwidHlwZSIsIiRzZXQiLCJlIiwic3R5bGVIZWFkaW5nIiwicGFkZGluZyIsInN0eWxlVGl0bGUiLCJzdHlsZUxvZ28iLCJQb3B1cEFwcCIsInByb3BzIiwiZ29Ub09wdGlvbnMiLCJiaW5kIiwiY3VycmVudFZhbHVlIiwiZ2V0VGltZXIiLCJjaHJvbWUiLCJ0YWJzIiwiZ2V0U2VsZWN0ZWQiLCJzZXRTdGF0ZSIsInRhYiIsInVybCIsInByZXZlbnREZWZhdWx0IiwiY3JlYXRlIiwiZXh0ZW5zaW9uIiwiZ2V0VVJMIiwiY29uc29sZSIsImxvZyIsInRpbWVyQ29tcG9uZW50Iiwid2lkdGgiLCJhZGRTaXRlIiwiQ29tcG9uZW50IiwiZGlzcGF0Y2giLCJzaXRlIiwiVGltZXIiLCJzZWNvbmRzIiwiaW5jcmVtZW50VGltZXIiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwic3BhblRpbWVyIiwic3RhcnRPZiIsImZvcm1hdCIsInBvcHVwU2FnYXMiLCJnZXRUaW1lclNhZ2EiLCJzZW5kVGltZXJNZXNzYWdlIiwicmVzb2x2ZSIsInJlamVjdCIsInJ1bnRpbWUiLCJzZW5kTWVzc2Fn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TSxlQUFSLEVBQXlCRixZQUF6QixFQUFKLENBSlY7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFNSXlCLG1CQUFRd0IsS0FBUjs7QUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNBLFVBQVVQLFlBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBDQUNTLDJCQUFXLFdBQVgsRUFBd0I1QixRQUF4QixDQURUOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR2UsVUFBVTJCLFVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQ1Asd0NBRE87O0FBQUE7QUFBQTtBQUFBLGtCQUVQLG1CQUFLQyxZQUFMLENBRk87O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRSIsImZpbGUiOiJQb3B1cEFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXNhZ2EnO1xuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycy9Qb3B1cC5qcyc7XG5pbXBvcnQgUG9wdXBBcHAgZnJvbSAnLi9jb250YWluZXJzL1BvcHVwLmpzJztcbmltcG9ydCBwb3B1cFNhZ2FzIGZyb20gJy4vc2FnYXMvcG9wdXBTYWdhcy5qcyc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XG5pbXBvcnQgJ2pxdWVyeS9qcXVlcnkubWluLmpzJztcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvanMvYm9vdHN0cmFwLm1pbi5qcyc7XG5pbXBvcnQgQkwgZnJvbSAnLi9ibG9ja0xpc3QuanMnO1xuQkwuaW5pdCgpO1xuY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBhcHBseU1pZGRsZXdhcmUoc2FnYU1pZGRsZXdhcmUpKTtcbnNhZ2FNaWRkbGV3YXJlLnJ1bihwb3B1cFNhZ2FzKTtcblxuXG5yZW5kZXIoXG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgIDxQb3B1cEFwcCAvPlxuICA8L1Byb3ZpZGVyPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1BvcHVwQXBwJylcbik7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9Qb3B1cEFwcC5qc1xuICoqLyIsImltcG9ydCB1cGRhdGUgZnJvbSAncmVhY3QvbGliL3VwZGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSB7IHNpdGVzOiBbXSwgbWVzc2FnZTogJycsIHRpbWVyOiBudWxsIH0sIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnQUREX1NJVEVfU1VDQ0VFREVEJzpcbiAgICAgIHJldHVybiB1cGRhdGUoc3RhdGUsIHtcbiAgICAgICAgbWVzc2FnZTogeyAkc2V0OiBhY3Rpb24ubWVzc2FnZSB9XG4gICAgICB9KTtcbiAgICBjYXNlICdBRERfU0lURV9GQUlMRUQnOlxuICAgICAgcmV0dXJuIHVwZGF0ZShzdGF0ZSwge1xuICAgICAgICBtZXNzYWdlOiB7ICRzZXQ6IGFjdGlvbi5lIH1cbiAgICAgIH0pO1xuICAgIGNhc2UgJ1JFQ0lFVkVfVElNRVInOlxuICAgICAgcmV0dXJuIHVwZGF0ZShzdGF0ZSwge1xuICAgICAgICB0aW1lcjogeyAkc2V0OiBhY3Rpb24udGltZXIgfVxuICAgICAgfSk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcmVkdWNlcnMvUG9wdXAuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB3dXJsIGZyb20gJ3d1cmwnO1xuaW1wb3J0IGxvZ28gZnJvbSAnLi4vaW1nL3RjLTMyLnBuZyc7XG5pbXBvcnQgeyBhZGRTaXRlIH0gZnJvbSAnLi4vYWN0aW9ucy9jb21tb24uanMnO1xuaW1wb3J0IHsgZ2V0VGltZXIgfSBmcm9tICcuLi9hY3Rpb25zL3BvcHVwLmpzJztcbmltcG9ydCBUaW1lciBmcm9tICcuLi9jb21wb25lbnRzL1RpbWVyLmpzJztcbmltcG9ydCBJbnB1dEJhciBmcm9tICcuLi9jb21wb25lbnRzL0lucHV0QmFyLmpzJztcbmNvbnN0IHN0eWxlSGVhZGluZyA9IHsgcGFkZGluZzogJzBweCcgfTtcbmNvbnN0IHN0eWxlVGl0bGUgPSB7IHBhZGRpbmc6ICcxMHB4IDE1cHggMTBweCAxNXB4JyB9O1xuY29uc3Qgc3R5bGVMb2dvID0geyBwYWRkaW5nOiAnM3B4IDE1cHggNHB4IDVweCcgfTtcblxuY2xhc3MgUG9wdXBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmdvVG9PcHRpb25zID0gdGhpcy5nb1RvT3B0aW9ucy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjdXJyZW50VmFsdWU6ICcnLFxuICAgIH07XG4gIH1cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIGNvbnN0IHsgZ2V0VGltZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgZ2V0VGltZXIoKTtcbiAgICBjaHJvbWUudGFicy5nZXRTZWxlY3RlZChudWxsLCB0YWIgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbnRWYWx1ZTogd3VybCgnZG9tYWluJywgdGFiLnVybCkgfSk7XG4gICAgfSk7XG4gIH1cblxuICBnb1RvT3B0aW9ucyhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNocm9tZS50YWJzLmNyZWF0ZSh7IHVybDogY2hyb21lLmV4dGVuc2lvbi5nZXRVUkwoJ29wdGlvbnMuaHRtbCcpIH0pO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zb2xlLmxvZyhgVGltZXI6ICR7dGhpcy5wcm9wcy50aW1lcn1gKTtcbiAgICBsZXQgdGltZXJDb21wb25lbnQ7XG4gICAgaWYgKHRoaXMucHJvcHMudGltZXIpIHtcbiAgICAgIHRpbWVyQ29tcG9uZW50ID0gPFRpbWVyIHRpbWVyPXt0aGlzLnByb3BzLnRpbWVyfSAvPjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGltZXJDb21wb25lbnQgPSAnJztcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9XCJQb3B1cEFwcFwiIGNsYXNzTmFtZT1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIiBzdHlsZT17eyB3aWR0aDogJzQwMHB4JyB9fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1oZWFkaW5nXCIgc3R5bGU9e3N0eWxlSGVhZGluZ30+XG4gICAgICAgICAgPGltZyBzcmM9e2xvZ299IGNsYXNzTmFtZT1cImltZy1yZXNwb25zaXZlIHB1bGwtbGVmdFwiIHN0eWxlPXtzdHlsZUxvZ299IGFsdD1cIlwiIC8+XG5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicGFuZWwtdGl0bGVcIiBzdHlsZT17c3R5bGVUaXRsZX0+VGhvdWdodCBDcmltZTwvaDM+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtYm9keVwiPlxuICAgICAgICAgIDxJbnB1dEJhclxuICAgICAgICAgICAgYWRkU2l0ZT17dGhpcy5wcm9wcy5hZGRTaXRlfSBjdXJyZW50VmFsdWU9e3RoaXMuc3RhdGUuY3VycmVudFZhbHVlfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge3RpbWVyQ29tcG9uZW50fVxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdCBwdWxsLXJpZ2h0XCIgb25DbGljaz17dGhpcy5nb1RvT3B0aW9uc30+XG4gICAgICAgICAgICBPcHRpb25zXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBzdGF0ZSA9PiAoXG4gICAge1xuICAgICAgc2l0ZXM6IHN0YXRlLnNpdGVzLFxuICAgICAgbWVzc2FnZTogc3RhdGUubWVzc2FnZSxcbiAgICAgIHRpbWVyOiBzdGF0ZS50aW1lclxuICAgIH1cbiAgKSxcbiAgZGlzcGF0Y2ggPT4gKFxuICAgIHtcbiAgICAgIGFkZFNpdGU6IHNpdGUgPT4gZGlzcGF0Y2goYWRkU2l0ZShzaXRlKSksXG4gICAgICBnZXRUaW1lcjogKCkgPT4gZGlzcGF0Y2goZ2V0VGltZXIoKSlcbiAgICB9XG4gIClcbikoUG9wdXBBcHApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29udGFpbmVycy9Qb3B1cC5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNBQUFBQWdDQVlBQUFCemVucjBBQUFBQkhOQ1NWUUlDQWdJZkFoa2lBQUFBQWx3U0ZsekFBQUFQd0FBQUQ4QlI1ZUo0QUFBQUJsMFJWaDBVMjltZEhkaGNtVUFkM2QzTG1sdWEzTmpZWEJsTG05eVo1dnVQQm9BQUFKZFNVUkJWRmlGM2RaSmExUkJFQWZ3bnhzWUVUZGNFVU5VY0Y5d1NhTGdVYStLTjhFb2dndDZVbFR3QStqQkwrQkpCRUU4ZVBHbzRFa1A0bklRZ2dzdUtJcEIzQzRSWTFUaWN1ZzMyQm5mZTlOdkpsNzhRekZNMVZUL2E2cXJxb3QwYk1NN1BNQWVqTU4wbk1KNzNNT0NDdWRWd2dKOHhxOUl2bUNvVG5jWG8vOUZBQmZyaU1xa1o2VEpaK0o3aFFCdWpYUUF4eXVRMTJSVnE2UnpjQXhYL0gzM0tmSkd1TGFkYUt0S3ZoRURUWkFXeVROTUtDTExxOWcrOUZhTnVnQkR1SUd2elRndngyRi90MXFLUE1ZdXpHcEVNaW9oa0VFOHh3SDBDMTB4RCszQ0xPakxwRC9UWGNFbDdFajVseWw0aEo5Q1JtTHN3N282M1ZFaEE2ZFREOC9Md0JvY2pMNXZGaWJodVl3VXB1R3AwUE5iTTlJMjNNZENYTS9zTXRzUkZlcGdvcERPdkx1OWh2TjRHZW51NEt5UXFUeWY2Nm5FTWM0VUhOYU03RzBtZ0dYQ3ZiZEtQb2dwWlVSRkw5ZGtZUmkxaWo2TXJlcTBUZjdqYzFLNDZ6emJCNXpBMVJ6YmE2RnRrOUN1dUFEUFpML3BGRkpiMHovRXBNejJvc0QzbHJTWlUxcDh0NlBmSGNwMEEvN01oMm5LNjJaN0kvTFJlRnR5d0tDd2h0WFFhL2pBMlZMaSt3dVhpMGhyNkZRK3U4Y0wzVkh6YTBkSFpLK2ZpdlhZMUNpQXRRME9pRWtXQyszVkhkbldOL0NkZ2JsbEFTeXFFRUJYOXRuaFQ5WlMva0Q5ZXpJc2dOa1ZBdGdRNmJxRUF1eEk4SjlhcjRpSFJPSFdFbUcxVUloeDZydnhUVnFiVGFwWHhBSDhURGhndkpDRkZaR3VTOWdibTBJY3dKTkVuLzJHdDJNblBpWDZQaTR6THBHMi8rY3RyQ2xMN0FPTWFSUmhqN0E0ak5SVFhKTlhXSnBIbUZjNDg3RWJLNFZYc1ZuOHdFZmN4QVV0MU1uL2pkOGc0RDl3eXVybTdnQUFBQUJKUlU1RXJrSmdnZz09XCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2ltZy90Yy0zMi5wbmdcbiAqKiBtb2R1bGUgaWQgPSA0OThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsImV4cG9ydCBmdW5jdGlvbiBnZXRUaW1lcigpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnR0VUX1RJTUVSJ1xuICB9O1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYWN0aW9ucy9wb3B1cC5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc29sZS5sb2coYEluIFRpbWVyOiAke3Byb3BzLnRpbWVyfWApO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzZWNvbmRzOiBwcm9wcy50aW1lciB8fCAwXG4gICAgfTtcbiAgICB0aGlzLmluY3JlbWVudFRpbWVyID0gdGhpcy5pbmNyZW1lbnRUaW1lci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh0aGlzLmluY3JlbWVudFRpbWVyLCAxMDAwKTtcbiAgfVxuICBpbmNyZW1lbnRUaW1lcigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNlY29uZHM6IHRoaXMuc3RhdGUuc2Vjb25kcyArIDFcbiAgICB9KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5zZWNvbmRzKTtcbiAgICBjb25zdCBzcGFuVGltZXIgPSBtb21lbnQoJzIwMTUtMDEtMDEnKS5zdGFydE9mKCdkYXknKVxuICAgIC5zZWNvbmRzKHRoaXMuc3RhdGUuc2Vjb25kcylcbiAgICAuZm9ybWF0KCdIOm1tOnNzJyk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPHNwYW4+e3NwYW5UaW1lcn08L3NwYW4+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9UaW1lci5qc1xuICoqLyIsImltcG9ydCB7IGZvcmssIHB1dCwgY2FsbCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XG5pbXBvcnQgeyBhZGRTaXRlU2FnYSB9IGZyb20gJy4vc2FnYXNEQi5qcyc7XG5pbXBvcnQgeyB0YWtlTGF0ZXN0IH0gZnJvbSAncmVkdXgtc2FnYSc7XG5cbmZ1bmN0aW9uIHNlbmRUaW1lck1lc3NhZ2UoKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyB0aW1lcjogJ3BvcHVwJyB9LCAocmVzcG9uc2UpID0+IHtcbiAgICAgIHJlc29sdmUocmVzcG9uc2Uuc2Vjb25kcyk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiogZ2V0VGltZXIoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgdGltZXIgPSB5aWVsZCBjYWxsKHNlbmRUaW1lck1lc3NhZ2UpO1xuICAgIGNvbnNvbGUubG9nKHRpbWVyKTtcbiAgICB5aWVsZCBwdXQoeyB0eXBlOiAnUkVDSUVWRV9USU1FUicsIHRpbWVyIH0pO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihlKTtcbiAgfVxufVxuZnVuY3Rpb24qIGdldFRpbWVyU2FnYSgpIHtcbiAgeWllbGQqIHRha2VMYXRlc3QoJ0dFVF9USU1FUicsIGdldFRpbWVyKTtcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBwb3B1cFNhZ2FzKCkge1xuICB5aWVsZCBmb3JrKGFkZFNpdGVTYWdhKTtcbiAgeWllbGQgZm9yayhnZXRUaW1lclNhZ2EpO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc2FnYXMvcG9wdXBTYWdhcy5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=
