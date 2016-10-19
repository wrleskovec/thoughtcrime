webpackJsonp([1],{

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
	
	var _Popup = __webpack_require__(488);
	
	var _Popup2 = _interopRequireDefault(_Popup);
	
	var _Popup3 = __webpack_require__(489);
	
	var _Popup4 = _interopRequireDefault(_Popup3);
	
	var _popupSagas = __webpack_require__(494);
	
	var _popupSagas2 = _interopRequireDefault(_popupSagas);
	
	__webpack_require__(476);
	
	__webpack_require__(485);
	
	__webpack_require__(487);
	
	var _blockList = __webpack_require__(351);
	
	var _blockList2 = _interopRequireDefault(_blockList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_blockList2.default.init();
	var sagaMiddleware = (0, _reduxSaga2.default)();
	var store = (0, _redux.createStore)(_Popup2.default, (0, _redux.applyMiddleware)(sagaMiddleware));
	sagaMiddleware.run(_popupSagas2.default);
	
	(0, _reactDom.render)(_react2.default.createElement(
	  _reactRedux.Provider,
	  { store: store },
	  _react2.default.createElement(_Popup4.default, null)
	), document.getElementById('PopupApp'));

/***/ },

/***/ 488:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = reducer;
	
	var _update = __webpack_require__(205);
	
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

/***/ 489:
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
	
	var _wurl = __webpack_require__(490);
	
	var _wurl2 = _interopRequireDefault(_wurl);
	
	var _tc = __webpack_require__(491);
	
	var _tc2 = _interopRequireDefault(_tc);
	
	var _common = __webpack_require__(344);
	
	var _popup = __webpack_require__(492);
	
	var _Timer = __webpack_require__(493);
	
	var _Timer2 = _interopRequireDefault(_Timer);
	
	var _InputBar = __webpack_require__(501);
	
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
	        timerComponent = _react2.default.createElement(_Timer2.default, { timer: this.props.timer });
	      } else {
	        timerComponent = '';
	      }
	      return _react2.default.createElement(
	        'div',
	        { id: 'PopupApp', className: 'panel panel-default', style: { width: '400px' } },
	        _react2.default.createElement(
	          'div',
	          { className: 'panel-heading', style: styleHeading },
	          _react2.default.createElement('img', { src: _tc2.default, className: 'img-responsive pull-left', style: styleLogo, alt: '' }),
	          _react2.default.createElement(
	            'h3',
	            { className: 'panel-title', style: styleTitle },
	            'Thought Crime'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'panel-body' },
	          _react2.default.createElement(_InputBar2.default, {
	            addSite: this.props.addSite, currentValue: this.state.currentValue
	          }),
	          timerComponent,
	          _react2.default.createElement(
	            'button',
	            { type: 'button', className: 'btn btn-default pull-right', onClick: this.goToOptions },
	            'Options'
	          )
	        )
	      );
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

/***/ 491:
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAPwAAAD8BR5eJ4AAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAJdSURBVFiF3dZJa1RBEAfwnxsYETdcEUNUcF9wSaLgUa+KN8Eoggt6UlTwA+jBL+BJBEE8ePGo4EkP4nIQggsuKIpB3C4RY1Ticug32Bnfe9NvJl78QzFM1VT/a6qrqot0bMM7PMAejMN0nMJ73MOCCudVwgJ8xq9IvmCoTncXo/9FABfriMqkZ6TJZ+J7hQBujXQAxyuQ12RVq6RzcAxX/H33KfJGuLadaKtKvhEDTZAWyTNMKCLLq9g+9FaNugBDuIGvzTgvx2F/t1qKPMYuzGpEMiohkEE8xwH0C10xD+3CLOjLpD/TXcEl7Ej5lyl4hJ9CRmLsw7o63VEhA6dTD8/LwBocjL5vFibhuYwUpuGp0PNbM9I23MdCXM/sMtsRFepgopDOvLu9hvN4Genu4KyQqTyf66nEMc4UHNaM7G0mgGXCvbdKPogpZURFL9dkYRi1ij6Mreq0Tf7jc1K46zzbB5zA1Rzba6Ftk9CuuADPZL/pFFJb0z/EpMz2osD3lrSZU1p8t6PfHcp0A/7Mh2nK62Z7I/LReFtywKCwhtXQa/jA2VLi+wuXi0hr6FQ+u8cL3VHza0dHZK+fivXY1CiAtQ0OiEkWC+3VHdnWN/CdgbllASyqEEBX9tnhT9ZS/kD9ezIsgNkVAtgQ6bqEAuxI8J9ar4iHROHWEmG1UIhx6rvxTVqbTapXxAH8TDhgvJCFFZGuS9gbm0IcwJNEn/2Gt2MnPiX6Pi4zLpG2/+ctrClL7AOMaRRhj7A4jNRTXJNXWJpHmFc487EbK4VXsVn8wEfcxAUt1Mn/jd8g4D9wyurm7gAAAABJRU5ErkJggg=="

/***/ },

/***/ 492:
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

/***/ 493:
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
	
	var _moment = __webpack_require__(369);
	
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
	
	      return _react2.default.createElement(
	        'span',
	        null,
	        spanTimer
	      );
	    }
	  }]);
	  return Timer;
	}(_react2.default.Component);
	
	exports.default = Timer;

/***/ },

/***/ 494:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _regenerator = __webpack_require__(346);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	var _promise = __webpack_require__(352);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	exports.default = popupSagas;
	
	var _effects = __webpack_require__(349);
	
	var _sagasDB = __webpack_require__(350);
	
	var _reduxSaga = __webpack_require__(192);
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvUG9wdXBBcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL1BvcHVwLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL1BvcHVwLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWcvdGMtMzIucG5nIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3BvcHVwLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1RpbWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zYWdhcy9wb3B1cFNhZ2FzLmpzIl0sIm5hbWVzIjpbImluaXQiLCJzYWdhTWlkZGxld2FyZSIsInN0b3JlIiwicnVuIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlZHVjZXIiLCJzdGF0ZSIsInNpdGVzIiwibWVzc2FnZSIsInRpbWVyIiwiYWN0aW9uIiwidHlwZSIsIiRzZXQiLCJlIiwic3R5bGVIZWFkaW5nIiwicGFkZGluZyIsInN0eWxlVGl0bGUiLCJzdHlsZUxvZ28iLCJQb3B1cEFwcCIsInByb3BzIiwiZ29Ub09wdGlvbnMiLCJiaW5kIiwiY3VycmVudFZhbHVlIiwiZ2V0VGltZXIiLCJjaHJvbWUiLCJ0YWJzIiwiZ2V0U2VsZWN0ZWQiLCJzZXRTdGF0ZSIsInRhYiIsInVybCIsInByZXZlbnREZWZhdWx0IiwiY3JlYXRlIiwiZXh0ZW5zaW9uIiwiZ2V0VVJMIiwiY29uc29sZSIsImxvZyIsInRpbWVyQ29tcG9uZW50Iiwid2lkdGgiLCJhZGRTaXRlIiwiQ29tcG9uZW50IiwiZGlzcGF0Y2giLCJzaXRlIiwiVGltZXIiLCJzZWNvbmRzIiwiaW5jcmVtZW50VGltZXIiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwic3BhblRpbWVyIiwic3RhcnRPZiIsImZvcm1hdCIsInBvcHVwU2FnYXMiLCJnZXRUaW1lclNhZ2EiLCJzZW5kVGltZXJNZXNzYWdlIiwicmVzb2x2ZSIsInJlamVjdCIsInJ1bnRpbWUiLCJzZW5kTWVzc2Fn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QVA7QUFLRDs7QUFFRCxVQUFVcEIsUUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRXdCLG1CQUFLNkIsZ0JBQUwsQ0FGeEI7O0FBQUE7QUFFVTNDLGdCQUZWOztBQUdJeUIsbUJBQVFDLEdBQVIsQ0FBWTFCLEtBQVo7QUFISjtBQUFBLGtCQUlVLGtCQUFJLEVBQUVFLE1BQU0sZUFBUixFQUF5QkYsWUFBekIsRUFBSixDQUpWOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBTUl5QixtQkFBUXdCLEtBQVI7O0FBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTQSxVQUFVUCxZQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQ0FDUywyQkFBVyxXQUFYLEVBQXdCNUIsUUFBeEIsQ0FEVDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdlLFVBQVUyQixVQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUNQLHdDQURPOztBQUFBO0FBQUE7QUFBQSxrQkFFUCxtQkFBS0MsWUFBTCxDQUZPOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEUiLCJmaWxlIjoiUG9wdXBBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tICdyZWR1eC1zYWdhJztcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMvUG9wdXAuanMnO1xuaW1wb3J0IFBvcHVwQXBwIGZyb20gJy4vY29udGFpbmVycy9Qb3B1cC5qcyc7XG5pbXBvcnQgcG9wdXBTYWdhcyBmcm9tICcuL3NhZ2FzL3BvcHVwU2FnYXMuanMnO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xuaW1wb3J0ICdqcXVlcnkvanF1ZXJ5Lm1pbi5qcyc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2pzL2Jvb3RzdHJhcC5taW4uanMnO1xuaW1wb3J0IEJMIGZyb20gJy4vYmxvY2tMaXN0LmpzJztcbkJMLmluaXQoKTtcbmNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgYXBwbHlNaWRkbGV3YXJlKHNhZ2FNaWRkbGV3YXJlKSk7XG5zYWdhTWlkZGxld2FyZS5ydW4ocG9wdXBTYWdhcyk7XG5cblxucmVuZGVyKFxuICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICA8UG9wdXBBcHAgLz5cbiAgPC9Qcm92aWRlcj4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdQb3B1cEFwcCcpXG4pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvUG9wdXBBcHAuanNcbiAqKi8iLCJpbXBvcnQgdXBkYXRlIGZyb20gJ3JlYWN0L2xpYi91cGRhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0geyBzaXRlczogW10sIG1lc3NhZ2U6ICcnLCB0aW1lcjogbnVsbCB9LCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ0FERF9TSVRFX1NVQ0NFRURFRCc6XG4gICAgICByZXR1cm4gdXBkYXRlKHN0YXRlLCB7XG4gICAgICAgIG1lc3NhZ2U6IHsgJHNldDogYWN0aW9uLm1lc3NhZ2UgfVxuICAgICAgfSk7XG4gICAgY2FzZSAnQUREX1NJVEVfRkFJTEVEJzpcbiAgICAgIHJldHVybiB1cGRhdGUoc3RhdGUsIHtcbiAgICAgICAgbWVzc2FnZTogeyAkc2V0OiBhY3Rpb24uZSB9XG4gICAgICB9KTtcbiAgICBjYXNlICdSRUNJRVZFX1RJTUVSJzpcbiAgICAgIHJldHVybiB1cGRhdGUoc3RhdGUsIHtcbiAgICAgICAgdGltZXI6IHsgJHNldDogYWN0aW9uLnRpbWVyIH1cbiAgICAgIH0pO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JlZHVjZXJzL1BvcHVwLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgd3VybCBmcm9tICd3dXJsJztcbmltcG9ydCBsb2dvIGZyb20gJy4uL2ltZy90Yy0zMi5wbmcnO1xuaW1wb3J0IHsgYWRkU2l0ZSB9IGZyb20gJy4uL2FjdGlvbnMvY29tbW9uLmpzJztcbmltcG9ydCB7IGdldFRpbWVyIH0gZnJvbSAnLi4vYWN0aW9ucy9wb3B1cC5qcyc7XG5pbXBvcnQgVGltZXIgZnJvbSAnLi4vY29tcG9uZW50cy9UaW1lci5qcyc7XG5pbXBvcnQgSW5wdXRCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9JbnB1dEJhci5qcyc7XG5jb25zdCBzdHlsZUhlYWRpbmcgPSB7IHBhZGRpbmc6ICcwcHgnIH07XG5jb25zdCBzdHlsZVRpdGxlID0geyBwYWRkaW5nOiAnMTBweCAxNXB4IDEwcHggMTVweCcgfTtcbmNvbnN0IHN0eWxlTG9nbyA9IHsgcGFkZGluZzogJzNweCAxNXB4IDRweCA1cHgnIH07XG5cbmNsYXNzIFBvcHVwQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5nb1RvT3B0aW9ucyA9IHRoaXMuZ29Ub09wdGlvbnMuYmluZCh0aGlzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY3VycmVudFZhbHVlOiAnJyxcbiAgICB9O1xuICB9XG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBjb25zdCB7IGdldFRpbWVyIH0gPSB0aGlzLnByb3BzO1xuICAgIGdldFRpbWVyKCk7XG4gICAgY2hyb21lLnRhYnMuZ2V0U2VsZWN0ZWQobnVsbCwgdGFiID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjdXJyZW50VmFsdWU6IHd1cmwoJ2RvbWFpbicsIHRhYi51cmwpIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZ29Ub09wdGlvbnMoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjaHJvbWUudGFicy5jcmVhdGUoeyB1cmw6IGNocm9tZS5leHRlbnNpb24uZ2V0VVJMKCdvcHRpb25zLmh0bWwnKSB9KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc29sZS5sb2coYFRpbWVyOiAke3RoaXMucHJvcHMudGltZXJ9YCk7XG4gICAgbGV0IHRpbWVyQ29tcG9uZW50O1xuICAgIGlmICh0aGlzLnByb3BzLnRpbWVyKSB7XG4gICAgICB0aW1lckNvbXBvbmVudCA9IDxUaW1lciB0aW1lcj17dGhpcy5wcm9wcy50aW1lcn0gLz47XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpbWVyQ29tcG9uZW50ID0gJyc7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPVwiUG9wdXBBcHBcIiBjbGFzc05hbWU9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCIgc3R5bGU9e3sgd2lkdGg6ICc0MDBweCcgfX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtaGVhZGluZ1wiIHN0eWxlPXtzdHlsZUhlYWRpbmd9PlxuICAgICAgICAgIDxpbWcgc3JjPXtsb2dvfSBjbGFzc05hbWU9XCJpbWctcmVzcG9uc2l2ZSBwdWxsLWxlZnRcIiBzdHlsZT17c3R5bGVMb2dvfSBhbHQ9XCJcIiAvPlxuXG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInBhbmVsLXRpdGxlXCIgc3R5bGU9e3N0eWxlVGl0bGV9PlRob3VnaHQgQ3JpbWU8L2gzPlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWJvZHlcIj5cbiAgICAgICAgICA8SW5wdXRCYXJcbiAgICAgICAgICAgIGFkZFNpdGU9e3RoaXMucHJvcHMuYWRkU2l0ZX0gY3VycmVudFZhbHVlPXt0aGlzLnN0YXRlLmN1cnJlbnRWYWx1ZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHt0aW1lckNvbXBvbmVudH1cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHQgcHVsbC1yaWdodFwiIG9uQ2xpY2s9e3RoaXMuZ29Ub09wdGlvbnN9PlxuICAgICAgICAgICAgT3B0aW9uc1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgc3RhdGUgPT4gKFxuICAgIHtcbiAgICAgIHNpdGVzOiBzdGF0ZS5zaXRlcyxcbiAgICAgIG1lc3NhZ2U6IHN0YXRlLm1lc3NhZ2UsXG4gICAgICB0aW1lcjogc3RhdGUudGltZXJcbiAgICB9XG4gICksXG4gIGRpc3BhdGNoID0+IChcbiAgICB7XG4gICAgICBhZGRTaXRlOiBzaXRlID0+IGRpc3BhdGNoKGFkZFNpdGUoc2l0ZSkpLFxuICAgICAgZ2V0VGltZXI6ICgpID0+IGRpc3BhdGNoKGdldFRpbWVyKCkpXG4gICAgfVxuICApXG4pKFBvcHVwQXBwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbnRhaW5lcnMvUG9wdXAuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDQUFBQUFnQ0FZQUFBQnplbnIwQUFBQUJITkNTVlFJQ0FnSWZBaGtpQUFBQUFsd1NGbHpBQUFBUHdBQUFEOEJSNWVKNEFBQUFCbDBSVmgwVTI5bWRIZGhjbVVBZDNkM0xtbHVhM05qWVhCbExtOXlaNXZ1UEJvQUFBSmRTVVJCVkZpRjNkWkphMVJCRUFmd254c1lFVGRjRVVOVWNGOXdTYUxnVWErS044RW9nZ3Q2VWxUd0ErakJMK0JKQkVFOGVQR280RWtQNG5JUWdnc3VLSXBCM0M0UlkxVGljdWczMkJuZmU5TnZKbDc4UXpGTTFWVC9hNnFycW90MGJNTTdQTUFlak1OMG5NSjczTU9DQ3VkVndnSjh4cTlJdm1Db1RuY1hvLzlGQUJmcmlNcWtaNlRKWitKN2hRQnVqWFFBeHl1UTEyUlZxNlJ6Y0F4WC9IMzNLZkpHdUxhZGFLdEt2aEVEVFpBV3lUTk1LQ0xMcTlnKzlGYU51Z0JEdUlHdnpUZ3Z4MkYvdDFxS1BNWXV6R3BFTWlvaGtFRTh4d0gwQzEweEQrM0NMT2pMcEQvVFhjRWw3RWo1bHlsNGhKOUNSbUxzdzdvNjNWRWhBNmRURDgvTHdCb2NqTDV2RmliaHVZd1VwdUdwMFBOYk05STIzTWRDWE0vc010c1JGZXBnb3BET3ZMdTlodk40R2VudTRLeVFxVHlmNjZuRU1jNFVITmFNN0cwbWdHWEN2YmRLUG9ncFpVUkZMOWRrWVJpMWlqNk1yZXEwVGY3amMxSzQ2enpiQjV6QTFSemJhNkZ0azlDdXVBRFBaTC9wRkZKYjB6L0VwTXoyb3NEM2xyU1pVMXA4dDZQZkhjcDBBLzdNaDJuSzYyWjdJL0xSZUZ0eXdLQ3dodFhRYS9qQTJWTGkrd3VYaTBocjZGUSt1OGNMM1ZIemEwZEhaSytmaXZYWTFDaUF0UTBPaUVrV0MrM1ZIZG5XTi9DZGdibGxBU3lxRUVCWDl0bmhUOVpTL2tEOWV6SXNnTmtWQXRnUTZicUVBdXhJOEo5YXI0aUhST0hXRW1HMVVJaHg2cnZ4VFZxYlRhcFh4QUg4VERoZ3ZKQ0ZGWkd1UzlnYm0wSWN3Sk5Fbi8yR3QyTW5QaVg2UGk0ekxwRzIvK2N0ckNsTDdBT01hUlJoajdBNGpOUlRYSk5YV0pwSG1GYzQ4N0ViSzRWWHNWbjh3RWZjeEFVdDFNbi9qZDhnNEQ5d3l1cm03Z0FBQUFCSlJVNUVya0pnZ2c9PVwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbWcvdGMtMzIucG5nXG4gKiogbW9kdWxlIGlkID0gNDkxXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJleHBvcnQgZnVuY3Rpb24gZ2V0VGltZXIoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0dFVF9USU1FUidcbiAgfTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FjdGlvbnMvcG9wdXAuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnNvbGUubG9nKGBJbiBUaW1lcjogJHtwcm9wcy50aW1lcn1gKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2Vjb25kczogcHJvcHMudGltZXIgfHwgMFxuICAgIH07XG4gICAgdGhpcy5pbmNyZW1lbnRUaW1lciA9IHRoaXMuaW5jcmVtZW50VGltZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwodGhpcy5pbmNyZW1lbnRUaW1lciwgMTAwMCk7XG4gIH1cbiAgaW5jcmVtZW50VGltZXIoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzZWNvbmRzOiB0aGlzLnN0YXRlLnNlY29uZHMgKyAxXG4gICAgfSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuc2Vjb25kcyk7XG4gICAgY29uc3Qgc3BhblRpbWVyID0gbW9tZW50KCcyMDE1LTAxLTAxJykuc3RhcnRPZignZGF5JylcbiAgICAuc2Vjb25kcyh0aGlzLnN0YXRlLnNlY29uZHMpXG4gICAgLmZvcm1hdCgnSDptbTpzcycpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxzcGFuPntzcGFuVGltZXJ9PC9zcGFuPlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVGltZXIuanNcbiAqKi8iLCJpbXBvcnQgeyBmb3JrLCBwdXQsIGNhbGwgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuaW1wb3J0IHsgYWRkU2l0ZVNhZ2EgfSBmcm9tICcuL3NhZ2FzREIuanMnO1xuaW1wb3J0IHsgdGFrZUxhdGVzdCB9IGZyb20gJ3JlZHV4LXNhZ2EnO1xuXG5mdW5jdGlvbiBzZW5kVGltZXJNZXNzYWdlKCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHsgdGltZXI6ICdwb3B1cCcgfSwgKHJlc3BvbnNlKSA9PiB7XG4gICAgICByZXNvbHZlKHJlc3BvbnNlLnNlY29uZHMpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24qIGdldFRpbWVyKCkge1xuICB0cnkge1xuICAgIGNvbnN0IHRpbWVyID0geWllbGQgY2FsbChzZW5kVGltZXJNZXNzYWdlKTtcbiAgICBjb25zb2xlLmxvZyh0aW1lcik7XG4gICAgeWllbGQgcHV0KHsgdHlwZTogJ1JFQ0lFVkVfVElNRVInLCB0aW1lciB9KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gIH1cbn1cbmZ1bmN0aW9uKiBnZXRUaW1lclNhZ2EoKSB7XG4gIHlpZWxkKiB0YWtlTGF0ZXN0KCdHRVRfVElNRVInLCBnZXRUaW1lcik7XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcG9wdXBTYWdhcygpIHtcbiAgeWllbGQgZm9yayhhZGRTaXRlU2FnYSk7XG4gIHlpZWxkIGZvcmsoZ2V0VGltZXJTYWdhKTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3NhZ2FzL3BvcHVwU2FnYXMuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9