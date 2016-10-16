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
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var styleHeading = { padding: '0px' };
	var styleTitle = { padding: '10px 15px 10px 15px' };
	var styleLogo = { padding: '3px 15px 4px 5px' };
	
	var PopupApp = function (_React$Component) {
	  (0, _inherits3.default)(PopupApp, _React$Component);
	
	  function PopupApp(props) {
	    (0, _classCallCheck3.default)(this, PopupApp);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (PopupApp.__proto__ || (0, _getPrototypeOf2.default)(PopupApp)).call(this, props));
	
	    _this.onSubmitPattern = _this.onSubmitPattern.bind(_this);
	    _this.goToOptions = _this.goToOptions.bind(_this);
	    _this.state = {
	      currentDN: ''
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
	        _this2.setState({ currentDN: (0, _wurl2.default)('domain', tab.url) });
	      });
	    }
	  }, {
	    key: 'onSubmitPattern',
	    value: function onSubmitPattern(e) {
	      var addSite = this.props.addSite;
	
	      e.preventDefault();
	      addSite(this.refs.patternInput.value.trim());
	      this.setState({ currentDN: '' });
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
	          _react2.default.createElement(
	            'form',
	            { onSubmit: this.onSubmitPattern },
	            _react2.default.createElement(
	              'div',
	              { className: 'input-group' },
	              _react2.default.createElement('input', {
	                type: 'text', className: 'form-control', name: 'patternInput', ref: 'patternInput',
	                value: this.state.currentDN
	              }),
	              _react2.default.createElement(
	                'span',
	                { className: 'input-group-btn' },
	                _react2.default.createElement('input', { type: 'submit', className: 'btn btn-default', value: 'Add' })
	              )
	            )
	          ),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvUG9wdXBBcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL1BvcHVwLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL1BvcHVwLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWcvdGMtMzIucG5nIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3BvcHVwLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1RpbWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zYWdhcy9wb3B1cFNhZ2FzLmpzIl0sIm5hbWVzIjpbImluaXQiLCJzYWdhTWlkZGxld2FyZSIsInN0b3JlIiwicnVuIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlZHVjZXIiLCJzdGF0ZSIsInNpdGVzIiwibWVzc2FnZSIsInRpbWVyIiwiYWN0aW9uIiwidHlwZSIsIiRzZXQiLCJlIiwic3R5bGVIZWFkaW5nIiwicGFkZGluZyIsInN0eWxlVGl0bGUiLCJzdHlsZUxvZ28iLCJQb3B1cEFwcCIsInByb3BzIiwib25TdWJtaXRQYXR0ZXJuIiwiYmluZCIsImdvVG9PcHRpb25zIiwiY3VycmVudEROIiwiZ2V0VGltZXIiLCJjaHJvbWUiLCJ0YWJzIiwiZ2V0U2VsZWN0ZWQiLCJzZXRTdGF0ZSIsInRhYiIsInVybCIsImFkZFNpdGUiLCJwcmV2ZW50RGVmYXVsdCIsInJlZnMiLCJwYXR0ZXJuSW5wdXQiLCJ2YWx1ZSIsInRyaW0iLCJjcmVhdGUiLCJleHRlbnNpb24iLCJnZXRVUkwiLCJjb25zb2xlIiwibG9nIiwidGltZXJDb21wb25lbnQiLCJ3aWR0aCIsIkNvbXBvbmVudCIsImRpc3BhdGNoIiwic2l0ZSIsIlRpbWVyIiwic2Vjb25kcyIsImluY3JlbWVudFRpbWVyIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInNwYW5UaW1lciIsInN0YXJ0T2YiLCJmb3JtYXQiLCJwb3B1cFNhZ2FzIiwiZ2V0VGltZXJTYWdhIiwic2VuZFRpbWVyTWVzc2FnZSIsInJlc29sdmUiLCJyZWplY3QiLCJydW50aW1lIiwic2VuZE1lc3NhZ2UiLCJyZXNwb25zZSIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFDQSxxQkFBR0EsSUFBSDtBQUNBLEtBQU1DLGlCQUFpQiwwQkFBdkI7QUFDQSxLQUFNQyxRQUFRLHlDQUFxQiw0QkFBZ0JELGNBQWhCLENBQXJCLENBQWQ7QUFDQUEsZ0JBQWVFLEdBQWY7O0FBR0EsdUJBQ0U7QUFBQTtBQUFBLEtBQVUsT0FBT0QsS0FBakI7QUFDRTtBQURGLEVBREYsRUFJRUUsU0FBU0MsY0FBVCxDQUF3QixVQUF4QixDQUpGLEU7Ozs7Ozs7Ozs7OzttQkNoQndCQyxPOztBQUZ4Qjs7Ozs7O0FBRWUsVUFBU0EsT0FBVCxHQUEwRTtBQUFBLE9BQXpEQyxLQUF5RCx5REFBakQsRUFBRUMsT0FBTyxFQUFULEVBQWFDLFNBQVMsRUFBdEIsRUFBMEJDLE9BQU8sSUFBakMsRUFBaUQ7QUFBQSxPQUFSQyxNQUFROztBQUN2RixXQUFRQSxPQUFPQyxJQUFmO0FBQ0UsVUFBSyxvQkFBTDtBQUNFLGNBQU8sc0JBQU9MLEtBQVAsRUFBYztBQUNuQkUsa0JBQVMsRUFBRUksTUFBTUYsT0FBT0YsT0FBZjtBQURVLFFBQWQsQ0FBUDtBQUdGLFVBQUssaUJBQUw7QUFDRSxjQUFPLHNCQUFPRixLQUFQLEVBQWM7QUFDbkJFLGtCQUFTLEVBQUVJLE1BQU1GLE9BQU9HLENBQWY7QUFEVSxRQUFkLENBQVA7QUFHRixVQUFLLGVBQUw7QUFDRSxjQUFPLHNCQUFPUCxLQUFQLEVBQWM7QUFDbkJHLGdCQUFPLEVBQUVHLE1BQU1GLE9BQU9ELEtBQWY7QUFEWSxRQUFkLENBQVA7QUFHRjtBQUNFLGNBQU9ILEtBQVA7QUFkSjtBQWdCRCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFBO0FBR2UsVUFBVStCLFVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQ1Asd0NBRE87O0FBQUE7QUFBQTtBQUFBLGtCQUVQLG1CQUFLQyxZQUFMLENBRk87O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRSIsImZpbGUiOiJQb3B1cEFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXNhZ2EnO1xuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycy9Qb3B1cC5qcyc7XG5pbXBvcnQgUG9wdXBBcHAgZnJvbSAnLi9jb250YWluZXJzL1BvcHVwLmpzJztcbmltcG9ydCBwb3B1cFNhZ2FzIGZyb20gJy4vc2FnYXMvcG9wdXBTYWdhcy5qcyc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XG5pbXBvcnQgJ2pxdWVyeS9qcXVlcnkubWluLmpzJztcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvanMvYm9vdHN0cmFwLm1pbi5qcyc7XG5pbXBvcnQgQkwgZnJvbSAnLi9ibG9ja0xpc3QuanMnO1xuQkwuaW5pdCgpO1xuY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBhcHBseU1pZGRsZXdhcmUoc2FnYU1pZGRsZXdhcmUpKTtcbnNhZ2FNaWRkbGV3YXJlLnJ1bihwb3B1cFNhZ2FzKTtcblxuXG5yZW5kZXIoXG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgIDxQb3B1cEFwcCAvPlxuICA8L1Byb3ZpZGVyPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1BvcHVwQXBwJylcbik7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9Qb3B1cEFwcC5qc1xuICoqLyIsImltcG9ydCB1cGRhdGUgZnJvbSAncmVhY3QvbGliL3VwZGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSB7IHNpdGVzOiBbXSwgbWVzc2FnZTogJycsIHRpbWVyOiBudWxsIH0sIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnQUREX1NJVEVfU1VDQ0VFREVEJzpcbiAgICAgIHJldHVybiB1cGRhdGUoc3RhdGUsIHtcbiAgICAgICAgbWVzc2FnZTogeyAkc2V0OiBhY3Rpb24ubWVzc2FnZSB9XG4gICAgICB9KTtcbiAgICBjYXNlICdBRERfU0lURV9GQUlMRUQnOlxuICAgICAgcmV0dXJuIHVwZGF0ZShzdGF0ZSwge1xuICAgICAgICBtZXNzYWdlOiB7ICRzZXQ6IGFjdGlvbi5lIH1cbiAgICAgIH0pO1xuICAgIGNhc2UgJ1JFQ0lFVkVfVElNRVInOlxuICAgICAgcmV0dXJuIHVwZGF0ZShzdGF0ZSwge1xuICAgICAgICB0aW1lcjogeyAkc2V0OiBhY3Rpb24udGltZXIgfVxuICAgICAgfSk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcmVkdWNlcnMvUG9wdXAuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB3dXJsIGZyb20gJ3d1cmwnO1xuaW1wb3J0IGxvZ28gZnJvbSAnLi4vaW1nL3RjLTMyLnBuZyc7XG5pbXBvcnQgeyBhZGRTaXRlIH0gZnJvbSAnLi4vYWN0aW9ucy9jb21tb24uanMnO1xuaW1wb3J0IHsgZ2V0VGltZXIgfSBmcm9tICcuLi9hY3Rpb25zL3BvcHVwLmpzJztcbmltcG9ydCBUaW1lciBmcm9tICcuLi9jb21wb25lbnRzL1RpbWVyLmpzJztcbmNvbnN0IHN0eWxlSGVhZGluZyA9IHsgcGFkZGluZzogJzBweCcgfTtcbmNvbnN0IHN0eWxlVGl0bGUgPSB7IHBhZGRpbmc6ICcxMHB4IDE1cHggMTBweCAxNXB4JyB9O1xuY29uc3Qgc3R5bGVMb2dvID0geyBwYWRkaW5nOiAnM3B4IDE1cHggNHB4IDVweCcgfTtcblxuY2xhc3MgUG9wdXBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLm9uU3VibWl0UGF0dGVybiA9IHRoaXMub25TdWJtaXRQYXR0ZXJuLmJpbmQodGhpcyk7XG4gICAgdGhpcy5nb1RvT3B0aW9ucyA9IHRoaXMuZ29Ub09wdGlvbnMuYmluZCh0aGlzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY3VycmVudEROOiAnJyxcbiAgICB9O1xuICB9XG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBjb25zdCB7IGdldFRpbWVyIH0gPSB0aGlzLnByb3BzO1xuICAgIGdldFRpbWVyKCk7XG4gICAgY2hyb21lLnRhYnMuZ2V0U2VsZWN0ZWQobnVsbCwgdGFiID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjdXJyZW50RE46IHd1cmwoJ2RvbWFpbicsIHRhYi51cmwpIH0pO1xuICAgIH0pO1xuICB9XG4gIG9uU3VibWl0UGF0dGVybihlKSB7XG4gICAgY29uc3QgeyBhZGRTaXRlIH0gPSB0aGlzLnByb3BzO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBhZGRTaXRlKHRoaXMucmVmcy5wYXR0ZXJuSW5wdXQudmFsdWUudHJpbSgpKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgY3VycmVudEROOiAnJyB9KTtcbiAgfVxuICBnb1RvT3B0aW9ucyhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNocm9tZS50YWJzLmNyZWF0ZSh7IHVybDogY2hyb21lLmV4dGVuc2lvbi5nZXRVUkwoJ29wdGlvbnMuaHRtbCcpIH0pO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zb2xlLmxvZyhgVGltZXI6ICR7dGhpcy5wcm9wcy50aW1lcn1gKTtcbiAgICBsZXQgdGltZXJDb21wb25lbnQ7XG4gICAgaWYgKHRoaXMucHJvcHMudGltZXIpIHtcbiAgICAgIHRpbWVyQ29tcG9uZW50ID0gPFRpbWVyIHRpbWVyPXt0aGlzLnByb3BzLnRpbWVyfSAvPjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGltZXJDb21wb25lbnQgPSAnJztcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9XCJQb3B1cEFwcFwiIGNsYXNzTmFtZT1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIiBzdHlsZT17eyB3aWR0aDogJzQwMHB4JyB9fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1oZWFkaW5nXCIgc3R5bGU9e3N0eWxlSGVhZGluZ30+XG4gICAgICAgICAgPGltZyBzcmM9e2xvZ299IGNsYXNzTmFtZT1cImltZy1yZXNwb25zaXZlIHB1bGwtbGVmdFwiIHN0eWxlPXtzdHlsZUxvZ299IGFsdD1cIlwiIC8+XG5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicGFuZWwtdGl0bGVcIiBzdHlsZT17c3R5bGVUaXRsZX0+VGhvdWdodCBDcmltZTwvaDM+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtYm9keVwiPlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0UGF0dGVybn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cInBhdHRlcm5JbnB1dFwiIHJlZj1cInBhdHRlcm5JbnB1dFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY3VycmVudEROfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1idG5cIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiIHZhbHVlPVwiQWRkXCIgLz5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICB7dGltZXJDb21wb25lbnR9XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0IHB1bGwtcmlnaHRcIiBvbkNsaWNrPXt0aGlzLmdvVG9PcHRpb25zfT5cbiAgICAgICAgICAgIE9wdGlvbnNcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIHN0YXRlID0+IChcbiAgICB7XG4gICAgICBzaXRlczogc3RhdGUuc2l0ZXMsXG4gICAgICBtZXNzYWdlOiBzdGF0ZS5tZXNzYWdlLFxuICAgICAgdGltZXI6IHN0YXRlLnRpbWVyXG4gICAgfVxuICApLFxuICBkaXNwYXRjaCA9PiAoXG4gICAge1xuICAgICAgYWRkU2l0ZTogc2l0ZSA9PiBkaXNwYXRjaChhZGRTaXRlKHNpdGUpKSxcbiAgICAgIGdldFRpbWVyOiAoKSA9PiBkaXNwYXRjaChnZXRUaW1lcigpKVxuICAgIH1cbiAgKVxuKShQb3B1cEFwcCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb250YWluZXJzL1BvcHVwLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ0FBQUFBZ0NBWUFBQUJ6ZW5yMEFBQUFCSE5DU1ZRSUNBZ0lmQWhraUFBQUFBbHdTRmx6QUFBQVB3QUFBRDhCUjVlSjRBQUFBQmwwUlZoMFUyOW1kSGRoY21VQWQzZDNMbWx1YTNOallYQmxMbTl5WjV2dVBCb0FBQUpkU1VSQlZGaUYzZFpKYTFSQkVBZndueHNZRVRkY0VVTlVjRjl3U2FMZ1VhK0tOOEVvZ2d0NlVsVHdBK2pCTCtCSkJFRThlUEdvNEVrUDRuSVFnZ3N1S0lwQjNDNFJZMVRpY3VnMzJCbmZlOU52Smw3OFF6Rk0xVlQvYTZxcnFvdDBiTU03UE1BZWpNTjBuTUo3M01PQ0N1ZFZ3Z0o4eHE5SXZtQ29UbmNYby85RkFCZnJpTXFrWjZUSlorSjdoUUJ1alhRQXh5dVExMlJWcTZSemNBeFgvSDMzS2ZKR3VMYWRhS3RLdmhFRFRaQVd5VE5NS0NMTHE5Zys5RmFOdWdCRHVJR3Z6VGd2eDJGL3QxcUtQTVl1ekdwRU1pb2hrRUU4eHdIMEMxMHhEKzNDTE9qTHBEL1RYY0VsN0VqNWx5bDRoSjlDUm1Mc3c3bzYzVkVoQTZkVEQ4L0x3Qm9jakw1dkZpYmh1WXdVcHVHcDBQTmJNOUkyM01kQ1hNL3NNdHNSRmVwZ29wRE92THU5aHZONEdlbnU0S3lRcVR5ZjY2bkVNYzRVSE5hTTdHMG1nR1hDdmJkS1BvZ3BaVVJGTDlka1lSaTFpajZNcmVxMFRmN2pjMUs0Nnp6YkI1ekExUnpiYTZGdGs5Q3V1QURQWkwvcEZGSmIwei9FcE16Mm9zRDNsclNaVTFwOHQ2UGZIY3AwQS83TWgybks2Mlo3SS9MUmVGdHl3S0N3aHRYUWEvakEyVkxpK3d1WGkwaHI2RlErdThjTDNWSHphMGRIWksrZml2WFkxQ2lBdFEwT2lFa1dDKzNWSGRuV04vQ2RnYmxsQVN5cUVFQlg5dG5oVDlaUy9rRDlleklzZ05rVkF0Z1E2YnFFQXV4SThKOWFyNGlIUk9IV0VtRzFVSWh4NnJ2eFRWcWJUYXBYeEFIOFREaGd2SkNGRlpHdVM5Z2JtMEljd0pORW4vMkd0Mk1uUGlYNlBpNHpMcEcyLytjdHJDbEw3QU9NYVJSaGo3QTRqTlJUWEpOWFdKcEhtRmM0ODdFYks0VlhzVm44d0VmY3hBVXQxTW4vamQ4ZzREOXd5dXJtN2dBQUFBQkpSVTVFcmtKZ2dnPT1cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW1nL3RjLTMyLnBuZ1xuICoqIG1vZHVsZSBpZCA9IDQ5MVxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiZXhwb3J0IGZ1bmN0aW9uIGdldFRpbWVyKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdHRVRfVElNRVInXG4gIH07XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hY3Rpb25zL3BvcHVwLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zb2xlLmxvZyhgSW4gVGltZXI6ICR7cHJvcHMudGltZXJ9YCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNlY29uZHM6IHByb3BzLnRpbWVyIHx8IDBcbiAgICB9O1xuICAgIHRoaXMuaW5jcmVtZW50VGltZXIgPSB0aGlzLmluY3JlbWVudFRpbWVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKHRoaXMuaW5jcmVtZW50VGltZXIsIDEwMDApO1xuICB9XG4gIGluY3JlbWVudFRpbWVyKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2Vjb25kczogdGhpcy5zdGF0ZS5zZWNvbmRzICsgMVxuICAgIH0pO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnNlY29uZHMpO1xuICAgIGNvbnN0IHNwYW5UaW1lciA9IG1vbWVudCgnMjAxNS0wMS0wMScpLnN0YXJ0T2YoJ2RheScpXG4gICAgLnNlY29uZHModGhpcy5zdGF0ZS5zZWNvbmRzKVxuICAgIC5mb3JtYXQoJ0g6bW06c3MnKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8c3Bhbj57c3BhblRpbWVyfTwvc3Bhbj5cbiAgICApO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL1RpbWVyLmpzXG4gKiovIiwiaW1wb3J0IHsgZm9yaywgcHV0LCBjYWxsIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcbmltcG9ydCB7IGFkZFNpdGVTYWdhIH0gZnJvbSAnLi9zYWdhc0RCLmpzJztcbmltcG9ydCB7IHRha2VMYXRlc3QgfSBmcm9tICdyZWR1eC1zYWdhJztcblxuZnVuY3Rpb24gc2VuZFRpbWVyTWVzc2FnZSgpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7IHRpbWVyOiAncG9wdXAnIH0sIChyZXNwb25zZSkgPT4ge1xuICAgICAgcmVzb2x2ZShyZXNwb25zZS5zZWNvbmRzKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uKiBnZXRUaW1lcigpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB0aW1lciA9IHlpZWxkIGNhbGwoc2VuZFRpbWVyTWVzc2FnZSk7XG4gICAgY29uc29sZS5sb2codGltZXIpO1xuICAgIHlpZWxkIHB1dCh7IHR5cGU6ICdSRUNJRVZFX1RJTUVSJywgdGltZXIgfSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKGUpO1xuICB9XG59XG5mdW5jdGlvbiogZ2V0VGltZXJTYWdhKCkge1xuICB5aWVsZCogdGFrZUxhdGVzdCgnR0VUX1RJTUVSJywgZ2V0VGltZXIpO1xufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHBvcHVwU2FnYXMoKSB7XG4gIHlpZWxkIGZvcmsoYWRkU2l0ZVNhZ2EpO1xuICB5aWVsZCBmb3JrKGdldFRpbWVyU2FnYSk7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zYWdhcy9wb3B1cFNhZ2FzLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==