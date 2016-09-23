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
	
	var _Popup = __webpack_require__(331);
	
	var _Popup2 = _interopRequireDefault(_Popup);
	
	var _Popup3 = __webpack_require__(332);
	
	var _Popup4 = _interopRequireDefault(_Popup3);
	
	var _popupSagas = __webpack_require__(334);
	
	var _popupSagas2 = _interopRequireDefault(_popupSagas);
	
	__webpack_require__(319);
	
	__webpack_require__(328);
	
	__webpack_require__(330);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var sagaMiddleware = (0, _reduxSaga2.default)();
	var store = (0, _redux.createStore)(_Popup2.default, (0, _redux.applyMiddleware)(sagaMiddleware));
	sagaMiddleware.run(_popupSagas2.default);
	
	(0, _reactDom.render)(_react2.default.createElement(
	  _reactRedux.Provider,
	  { store: store },
	  _react2.default.createElement(_Popup4.default, null)
	), document.getElementById('PopupApp'));

/***/ },

/***/ 331:
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
	  var state = arguments.length <= 0 || arguments[0] === undefined ? { sites: [], message: '' } : arguments[0];
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
	    default:
	      return state;
	  }
	}

/***/ },

/***/ 332:
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
	
	var _wurl = __webpack_require__(335);
	
	var _wurl2 = _interopRequireDefault(_wurl);
	
	var _tc = __webpack_require__(333);
	
	var _tc2 = _interopRequireDefault(_tc);
	
	var _common = __webpack_require__(294);
	
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
	      console.log('kay');
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
	    message: state.message
	  };
	}, function (dispatch) {
	  return {
	    addSite: function addSite(site) {
	      return dispatch((0, _common.addSite)(site));
	    }
	  };
	})(PopupApp);

/***/ },

/***/ 333:
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAPwAAAD8BR5eJ4AAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAJdSURBVFiF3dZJa1RBEAfwnxsYETdcEUNUcF9wSaLgUa+KN8Eoggt6UlTwA+jBL+BJBEE8ePGo4EkP4nIQggsuKIpB3C4RY1Ticug32Bnfe9NvJl78QzFM1VT/a6qrqot0bMM7PMAejMN0nMJ73MOCCudVwgJ8xq9IvmCoTncXo/9FABfriMqkZ6TJZ+J7hQBujXQAxyuQ12RVq6RzcAxX/H33KfJGuLadaKtKvhEDTZAWyTNMKCLLq9g+9FaNugBDuIGvzTgvx2F/t1qKPMYuzGpEMiohkEE8xwH0C10xD+3CLOjLpD/TXcEl7Ej5lyl4hJ9CRmLsw7o63VEhA6dTD8/LwBocjL5vFibhuYwUpuGp0PNbM9I23MdCXM/sMtsRFepgopDOvLu9hvN4Genu4KyQqTyf66nEMc4UHNaM7G0mgGXCvbdKPogpZURFL9dkYRi1ij6Mreq0Tf7jc1K46zzbB5zA1Rzba6Ftk9CuuADPZL/pFFJb0z/EpMz2osD3lrSZU1p8t6PfHcp0A/7Mh2nK62Z7I/LReFtywKCwhtXQa/jA2VLi+wuXi0hr6FQ+u8cL3VHza0dHZK+fivXY1CiAtQ0OiEkWC+3VHdnWN/CdgbllASyqEEBX9tnhT9ZS/kD9ezIsgNkVAtgQ6bqEAuxI8J9ar4iHROHWEmG1UIhx6rvxTVqbTapXxAH8TDhgvJCFFZGuS9gbm0IcwJNEn/2Gt2MnPiX6Pi4zLpG2/+ctrClL7AOMaRRhj7A4jNRTXJNXWJpHmFc487EbK4VXsVn8wEfcxAUt1Mn/jd8g4D9wyurm7gAAAABJRU5ErkJggg=="

/***/ },

/***/ 334:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _regenerator = __webpack_require__(296);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	exports.default = popupSagas;
	
	var _effects = __webpack_require__(299);
	
	var _sagasDB = __webpack_require__(300);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _marked = [popupSagas].map(_regenerator2.default.mark);
	
	function popupSagas() {
	  return _regenerator2.default.wrap(function popupSagas$(_context) {
	    while (1) {
	      switch (_context.prev = _context.next) {
	        case 0:
	          _context.next = 2;
	          return (0, _effects.fork)(_sagasDB.addSiteSaga);
	
	        case 2:
	        case 'end':
	          return _context.stop();
	      }
	    }
	  }, _marked[0], this);
	}

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvUG9wdXBBcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL1BvcHVwLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL1BvcHVwLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWcvdGMtMzIucG5nIiwid2VicGFjazovLy8uL3NyYy9zYWdhcy9wb3B1cFNhZ2FzLmpzIl0sIm5hbWVzIjpbInNhZ2FNaWRkbGV3YXJlIiwic3RvcmUiLCJydW4iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVkdWNlciIsInN0YXRlIiwic2l0ZXMiLCJtZXNzYWdlIiwiYWN0aW9uIiwidHlwZSIsIiRzZXQiLCJlIiwic3R5bGVIZWFkaW5nIiwicGFkZGluZyIsInN0eWxlVGl0bGUiLCJzdHlsZUxvZ28iLCJQb3B1cEFwcCIsInByb3BzIiwib25TdWJtaXRQYXR0ZXJuIiwiYmluZCIsImdvVG9PcHRpb25zIiwiY3VycmVudEROIiwiY2hyb21lIiwidGFicyIsImdldFNlbGVjdGVkIiwic2V0U3RhdGUiLCJ0YWIiLCJ1cmwiLCJhZGRTaXRlIiwicHJldmVudERlZmF1bHQiLCJyZWZzIiwicGF0dGVybklucHV0IiwidmFsdWUiLCJ0cmltIiwiY3JlYXRlIiwiZXh0ZW5zaW9uIiwiZ2V0VVJMIiwiY29uc29sZSIsImxvZyIsIndpZHRoIiwiQ29tcG9uZW50IiwiZGlzcGF0Y2giLCJzaXRlIiwicG9wdXBTYWdhcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBLEtBQU1BLGlCQUFpQiwwQkFBdkI7QUFDQSxLQUFNQyxRQUFRLHlDQUFxQiw0QkFBZ0JELGNBQWhCLENBQXJCLENBQWQ7QUFDQUEsZ0JBQWVFLEdBQWY7O0FBR0EsdUJBQ0U7QUFBQTtBQUFBLEtBQVUsT0FBT0QsS0FBakI7QUFD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LHdCQUFPLEtBQUtiLEtBQUwsQ0FBV2dCO0FBRnBCLGlCQURGO0FBS0U7QUFBQTtBQUFBLG1CQUFNLFdBQVUsaUJBQWhCO0FBQ0UsMERBQU8sTUFBSyxRQUFaLEVBQXFCLFdBQVUsaUJBQS9CLEVBQWlELE9BQU0sS0FBdkQ7QUFERjtBQUxGO0FBREYsWUFERjtBQWNFO0FBQUE7QUFBQSxlQUFRLE1BQUssUUFBYixFQUFzQixXQUFVLDRCQUFoQyxFQUE2RCxTQUFTLEtBQUtELFdBQTNFO0FBQUE7QUFBQTtBQWRGO0FBUEYsUUFERjtBQTRCRDs7O0dBdERvQixnQkFBTW9CLFM7O21CQXlEZCx5QkFDYjtBQUFBLFVBQ0U7QUFDRWxDLFlBQU9ELE1BQU1DLEtBRGY7QUFFRUMsY0FBU0YsTUFBTUU7QUFGakIsSUFERjtBQUFBLEVBRGEsRUFPYjtBQUFBLFVBQ0U7QUFDRXFCLGNBQVM7QUFBQSxjQUFRYSxTQUFTLHFCQUFRQyxJQUFSLENBQVQsQ0FBUjtBQUFBO0FBRFgsSUFERjtBQUFBLEVBUGEsRUFZYjFCLFFBWmEsQzs7Ozs7OztBQ2xFZixrQ0FBaUMsZytCOzs7Ozs7Ozs7Ozs7Ozs7OzttQkNHUjJCLFU7O0FBSHpCOztBQUNBOzs7O2dCQUV5QkEsVTs7QUFBVixVQUFVQSxVQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUNQLHdDQURPOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEUiLCJmaWxlIjoiUG9wdXBBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tICdyZWR1eC1zYWdhJztcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMvUG9wdXAuanMnO1xuaW1wb3J0IFBvcHVwQXBwIGZyb20gJy4vY29udGFpbmVycy9Qb3B1cC5qcyc7XG5pbXBvcnQgcG9wdXBTYWdhcyBmcm9tICcuL3NhZ2FzL3BvcHVwU2FnYXMuanMnO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xuaW1wb3J0ICdqcXVlcnkvanF1ZXJ5Lm1pbi5qcyc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2pzL2Jvb3RzdHJhcC5taW4uanMnO1xuXG5jb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGFwcGx5TWlkZGxld2FyZShzYWdhTWlkZGxld2FyZSkpO1xuc2FnYU1pZGRsZXdhcmUucnVuKHBvcHVwU2FnYXMpO1xuXG5cbnJlbmRlcihcbiAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgPFBvcHVwQXBwIC8+XG4gIDwvUHJvdmlkZXI+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnUG9wdXBBcHAnKVxuKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL1BvcHVwQXBwLmpzXG4gKiovIiwiaW1wb3J0IHVwZGF0ZSBmcm9tICdyZWFjdC9saWIvdXBkYXRlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IHsgc2l0ZXM6IFtdLCBtZXNzYWdlOiAnJyB9LCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ0FERF9TSVRFX1NVQ0NFRURFRCc6XG4gICAgICByZXR1cm4gdXBkYXRlKHN0YXRlLCB7XG4gICAgICAgIG1lc3NhZ2U6IHsgJHNldDogYWN0aW9uLm1lc3NhZ2UgfVxuICAgICAgfSk7XG4gICAgY2FzZSAnQUREX1NJVEVfRkFJTEVEJzpcbiAgICAgIHJldHVybiB1cGRhdGUoc3RhdGUsIHtcbiAgICAgICAgbWVzc2FnZTogeyAkc2V0OiBhY3Rpb24uZSB9XG4gICAgICB9KTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yZWR1Y2Vycy9Qb3B1cC5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHd1cmwgZnJvbSAnd3VybCc7XG5pbXBvcnQgbG9nbyBmcm9tICcuLi9pbWcvdGMtMzIucG5nJztcbmltcG9ydCB7IGFkZFNpdGUgfSBmcm9tICcuLi9hY3Rpb25zL2NvbW1vbi5qcyc7XG5jb25zdCBzdHlsZUhlYWRpbmcgPSB7IHBhZGRpbmc6ICcwcHgnIH07XG5jb25zdCBzdHlsZVRpdGxlID0geyBwYWRkaW5nOiAnMTBweCAxNXB4IDEwcHggMTVweCcgfTtcbmNvbnN0IHN0eWxlTG9nbyA9IHsgcGFkZGluZzogJzNweCAxNXB4IDRweCA1cHgnIH07XG5cbmNsYXNzIFBvcHVwQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5vblN1Ym1pdFBhdHRlcm4gPSB0aGlzLm9uU3VibWl0UGF0dGVybi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ29Ub09wdGlvbnMgPSB0aGlzLmdvVG9PcHRpb25zLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGN1cnJlbnRETjogJydcbiAgICB9O1xuICB9XG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBjaHJvbWUudGFicy5nZXRTZWxlY3RlZChudWxsLCB0YWIgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbnRETjogd3VybCgnZG9tYWluJywgdGFiLnVybCkgfSk7XG4gICAgfSk7XG4gIH1cbiAgb25TdWJtaXRQYXR0ZXJuKGUpIHtcbiAgICBjb25zdCB7IGFkZFNpdGUgfSA9IHRoaXMucHJvcHM7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGFkZFNpdGUodGhpcy5yZWZzLnBhdHRlcm5JbnB1dC52YWx1ZS50cmltKCkpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjdXJyZW50RE46ICcnIH0pO1xuICB9XG4gIGdvVG9PcHRpb25zKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY2hyb21lLnRhYnMuY3JlYXRlKHsgdXJsOiBjaHJvbWUuZXh0ZW5zaW9uLmdldFVSTCgnb3B0aW9ucy5odG1sJykgfSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnNvbGUubG9nKCdrYXknKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBpZD1cIlBvcHVwQXBwXCIgY2xhc3NOYW1lPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiIHN0eWxlPXt7IHdpZHRoOiAnNDAwcHgnIH19PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWhlYWRpbmdcIiBzdHlsZT17c3R5bGVIZWFkaW5nfT5cbiAgICAgICAgICA8aW1nIHNyYz17bG9nb30gY2xhc3NOYW1lPVwiaW1nLXJlc3BvbnNpdmUgcHVsbC1sZWZ0XCIgc3R5bGU9e3N0eWxlTG9nb30gYWx0PVwiXCIgLz5cblxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwYW5lbC10aXRsZVwiIHN0eWxlPXtzdHlsZVRpdGxlfT5UaG91Z2h0IENyaW1lPC9oMz5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1ib2R5XCI+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMub25TdWJtaXRQYXR0ZXJufT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwicGF0dGVybklucHV0XCIgcmVmPVwicGF0dGVybklucHV0XCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5jdXJyZW50RE59XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWJ0blwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCIgdmFsdWU9XCJBZGRcIiAvPlxuICAgICAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdCBwdWxsLXJpZ2h0XCIgb25DbGljaz17dGhpcy5nb1RvT3B0aW9uc30+XG4gICAgICAgICAgICBPcHRpb25zXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBzdGF0ZSA9PiAoXG4gICAge1xuICAgICAgc2l0ZXM6IHN0YXRlLnNpdGVzLFxuICAgICAgbWVzc2FnZTogc3RhdGUubWVzc2FnZVxuICAgIH1cbiAgKSxcbiAgZGlzcGF0Y2ggPT4gKFxuICAgIHtcbiAgICAgIGFkZFNpdGU6IHNpdGUgPT4gZGlzcGF0Y2goYWRkU2l0ZShzaXRlKSlcbiAgICB9XG4gIClcbikoUG9wdXBBcHApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29udGFpbmVycy9Qb3B1cC5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNBQUFBQWdDQVlBQUFCemVucjBBQUFBQkhOQ1NWUUlDQWdJZkFoa2lBQUFBQWx3U0ZsekFBQUFQd0FBQUQ4QlI1ZUo0QUFBQUJsMFJWaDBVMjltZEhkaGNtVUFkM2QzTG1sdWEzTmpZWEJsTG05eVo1dnVQQm9BQUFKZFNVUkJWRmlGM2RaSmExUkJFQWZ3bnhzWUVUZGNFVU5VY0Y5d1NhTGdVYStLTjhFb2dndDZVbFR3QStqQkwrQkpCRUU4ZVBHbzRFa1A0bklRZ2dzdUtJcEIzQzRSWTFUaWN1ZzMyQm5mZTlOdkpsNzhRekZNMVZUL2E2cXJxb3QwYk1NN1BNQWVqTU4wbk1KNzNNT0NDdWRWd2dKOHhxOUl2bUNvVG5jWG8vOUZBQmZyaU1xa1o2VEpaK0o3aFFCdWpYUUF4eXVRMTJSVnE2UnpjQXhYL0gzM0tmSkd1TGFkYUt0S3ZoRURUWkFXeVROTUtDTExxOWcrOUZhTnVnQkR1SUd2elRndngyRi90MXFLUE1ZdXpHcEVNaW9oa0VFOHh3SDBDMTB4RCszQ0xPakxwRC9UWGNFbDdFajVseWw0aEo5Q1JtTHN3N282M1ZFaEE2ZFREOC9Md0JvY2pMNXZGaWJodVl3VXB1R3AwUE5iTTlJMjNNZENYTS9zTXRzUkZlcGdvcERPdkx1OWh2TjRHZW51NEt5UXFUeWY2Nm5FTWM0VUhOYU03RzBtZ0dYQ3ZiZEtQb2dwWlVSRkw5ZGtZUmkxaWo2TXJlcTBUZjdqYzFLNDZ6emJCNXpBMVJ6YmE2RnRrOUN1dUFEUFpML3BGRkpiMHovRXBNejJvc0QzbHJTWlUxcDh0NlBmSGNwMEEvN01oMm5LNjJaN0kvTFJlRnR5d0tDd2h0WFFhL2pBMlZMaSt3dVhpMGhyNkZRK3U4Y0wzVkh6YTBkSFpLK2ZpdlhZMUNpQXRRME9pRWtXQyszVkhkbldOL0NkZ2JsbEFTeXFFRUJYOXRuaFQ5WlMva0Q5ZXpJc2dOa1ZBdGdRNmJxRUF1eEk4SjlhcjRpSFJPSFdFbUcxVUloeDZydnhUVnFiVGFwWHhBSDhURGhndkpDRkZaR3VTOWdibTBJY3dKTkVuLzJHdDJNblBpWDZQaTR6THBHMi8rY3RyQ2xMN0FPTWFSUmhqN0E0ak5SVFhKTlhXSnBIbUZjNDg3RWJLNFZYc1ZuOHdFZmN4QVV0MU1uL2pkOGc0RDl3eXVybTdnQUFBQUJKUlU1RXJrSmdnZz09XCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2ltZy90Yy0zMi5wbmdcbiAqKiBtb2R1bGUgaWQgPSAzMzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsImltcG9ydCB7IGZvcmsgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuaW1wb3J0IHsgYWRkU2l0ZVNhZ2EgfSBmcm9tICcuL3NhZ2FzREIuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcG9wdXBTYWdhcygpIHtcbiAgeWllbGQgZm9yayhhZGRTaXRlU2FnYSk7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zYWdhcy9wb3B1cFNhZ2FzLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==