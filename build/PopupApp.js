webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(33);
	
	var _redux = __webpack_require__(170);
	
	var _reactRedux = __webpack_require__(183);
	
	var _reduxPersist = __webpack_require__(192);
	
	var _Popup = __webpack_require__(324);
	
	var _Popup2 = _interopRequireDefault(_Popup);
	
	var _Popup3 = __webpack_require__(325);
	
	var _Popup4 = _interopRequireDefault(_Popup3);
	
	__webpack_require__(312);
	
	__webpack_require__(321);
	
	__webpack_require__(323);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var store = (0, _redux.createStore)(_Popup2.default, undefined, (0, _reduxPersist.autoRehydrate)());
	(0, _reduxPersist.persistStore)(store);
	
	(0, _reactDom.render)(_react2.default.createElement(
	  _reactRedux.Provider,
	  { store: store },
	  _react2.default.createElement(_Popup4.default, null)
	), document.getElementById('PopupApp'));

/***/ },

/***/ 324:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = reducer;
	
	var _update = __webpack_require__(308);
	
	var _update2 = _interopRequireDefault(_update);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function reducer() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? { block: [] } : arguments[0];
	  var action = arguments[1];
	
	  switch (action.type) {
	    case 'ADD_PATTERN':
	      return (0, _update2.default)(state, {
	        block: { $push: [action.pattern] }
	      });
	    default:
	      return state;
	  }
	}

/***/ },

/***/ 325:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(183);
	
	var _tc = __webpack_require__(326);
	
	var _tc2 = _interopRequireDefault(_tc);
	
	var _common = __webpack_require__(311);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var styleHeading = { padding: '0px' };
	var styleTitle = { padding: '10px 15px 10px 15px' };
	var styleLogo = { padding: '3px 15px 4px 5px' };
	
	var PopupApp = function (_React$Component) {
	  _inherits(PopupApp, _React$Component);
	
	  function PopupApp(props) {
	    _classCallCheck(this, PopupApp);
	
	    var _this = _possibleConstructorReturn(this, (PopupApp.__proto__ || Object.getPrototypeOf(PopupApp)).call(this, props));
	
	    _this.onSubmitPattern = _this.onSubmitPattern.bind(_this);
	    _this.goToOptions = _this.goToOptions.bind(_this);
	    _this.currentDN = '';
	    return _this;
	  }
	
	  _createClass(PopupApp, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _this2 = this;
	
	      chrome.tabs.getSelected(null, function (tab) {
	        _this2.currentDN = tab.url.split('/')[2];
	      });
	    }
	  }, {
	    key: 'onSubmitPattern',
	    value: function onSubmitPattern(e) {
	      var addPattern = this.props.addPattern;
	
	      e.preventDefault();
	      addPattern(this.refs.patternInput.value.trim());
	      this.refs.patternInput.value = '';
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
	                value: this.currentDN
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
	  return { patterns: state.block };
	}, function (dispatch) {
	  return {
	    addPattern: function addPattern(pattern) {
	      return dispatch((0, _common.addPattern)(pattern));
	    }
	  };
	})(PopupApp);

/***/ },

/***/ 326:
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAPwAAAD8BR5eJ4AAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAJdSURBVFiF3dZJa1RBEAfwnxsYETdcEUNUcF9wSaLgUa+KN8Eoggt6UlTwA+jBL+BJBEE8ePGo4EkP4nIQggsuKIpB3C4RY1Ticug32Bnfe9NvJl78QzFM1VT/a6qrqot0bMM7PMAejMN0nMJ73MOCCudVwgJ8xq9IvmCoTncXo/9FABfriMqkZ6TJZ+J7hQBujXQAxyuQ12RVq6RzcAxX/H33KfJGuLadaKtKvhEDTZAWyTNMKCLLq9g+9FaNugBDuIGvzTgvx2F/t1qKPMYuzGpEMiohkEE8xwH0C10xD+3CLOjLpD/TXcEl7Ej5lyl4hJ9CRmLsw7o63VEhA6dTD8/LwBocjL5vFibhuYwUpuGp0PNbM9I23MdCXM/sMtsRFepgopDOvLu9hvN4Genu4KyQqTyf66nEMc4UHNaM7G0mgGXCvbdKPogpZURFL9dkYRi1ij6Mreq0Tf7jc1K46zzbB5zA1Rzba6Ftk9CuuADPZL/pFFJb0z/EpMz2osD3lrSZU1p8t6PfHcp0A/7Mh2nK62Z7I/LReFtywKCwhtXQa/jA2VLi+wuXi0hr6FQ+u8cL3VHza0dHZK+fivXY1CiAtQ0OiEkWC+3VHdnWN/CdgbllASyqEEBX9tnhT9ZS/kD9ezIsgNkVAtgQ6bqEAuxI8J9ar4iHROHWEmG1UIhx6rvxTVqbTapXxAH8TDhgvJCFFZGuS9gbm0IcwJNEn/2Gt2MnPiX6Pi4zLpG2/+ctrClL7AOMaRRhj7A4jNRTXJNXWJpHmFc487EbK4VXsVn8wEfcxAUt1Mn/jd8g4D9wyurm7gAAAABJRU5ErkJggg=="

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvUG9wdXBBcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL1BvcHVwLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL1BvcHVwLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWcvdGMtMzIucG5nIl0sIm5hbWVzIjpbInN0b3JlIiwidW5kZWZpbmVkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlZHVjZXIiLCJzdGF0ZSIsImJsb2NrIiwiYWN0aW9uIiwidHlwZSIsIiRwdXNoIiwicGF0dGVybiIsInN0eWxlSGVhZGluZyIsInBhZGRpbmciLCJzdHlsZVRpdGxlIiwic3R5bGVMb2dvIiwiUG9wdXBBcHAiLCJwcm9wcyIsIm9uU3VibWl0UGF0dGVybiIsImJpbmQiLCJnb1RvT3B0aW9ucyIsImN1cnJlbnRETiIsImNocm9tZSIsInRhYnMiLCJnZXRTZWxlY3RlZCIsInRhYiIsInVybCIsInNwbGl0IiwiZSIsImFkZFBhdHRlcm4iLCJwcmV2ZW50RGVmYXVsdCIsInJlZnMiLCJwYXR0ZXJuSW5wdXQiLCJ2YWx1ZSIsInRyaW0iLCJjcmVhdGUiLCJleHRlbnNpb24iLCJnZXRVUkwiLCJ3aWR0aCIsIkNvbXBvbmVudCIsInBhdHRlcm5zIiwiZGlzcGF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBLEtBQU1BLFFBQVEseUNBQXFCQyxTQUFyQixFQUFnQyxrQ0FBaEMsQ0FBZDtBQUNBLGlDQUFhRCxLQUFiOztBQUVBLHVCQUNFO0FBQUE7QUFBQSxLQUFVLE9BQU9BLEtBQWpCO0FBQ0U7QUFERixFQURGLEVBSUVFLFNBQVNDLGNBQVQsQ0FBd0IsVUFBeEIsQ0FKRixFOzs7Ozs7Ozs7Ozs7bUJDWndCQyxPOztBQUZ4Qjs7Ozs7O0FBRWUsVUFBU0EsT0FBVCxHQUFnRDtBQUFBLE9B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YjtBQUFBLFVBQ0UsRUFBRUMsVUFBVWxDLE1BQU1DLEtBQWxCLEVBREY7QUFBQSxFQURhLEVBSWI7QUFBQSxVQUNFO0FBQ0VzQixpQkFBWTtBQUFBLGNBQVdZLFNBQVMsd0JBQVc5QixPQUFYLENBQVQsQ0FBWDtBQUFBO0FBRGQsSUFERjtBQUFBLEVBSmEsRUFTYkssUUFUYSxDOzs7Ozs7O0FDOURmLGtDQUFpQyxnK0IiLCJmaWxlIjoiUG9wdXBBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBwZXJzaXN0U3RvcmUsIGF1dG9SZWh5ZHJhdGUgfSBmcm9tICdyZWR1eC1wZXJzaXN0JztcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMvUG9wdXAuanMnO1xuaW1wb3J0IFBvcHVwQXBwIGZyb20gJy4vY29udGFpbmVycy9Qb3B1cC5qcyc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XG5pbXBvcnQgJ2pxdWVyeS9qcXVlcnkubWluLmpzJztcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvanMvYm9vdHN0cmFwLm1pbi5qcyc7XG5cbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgdW5kZWZpbmVkLCBhdXRvUmVoeWRyYXRlKCkpO1xucGVyc2lzdFN0b3JlKHN0b3JlKTtcblxucmVuZGVyKFxuICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICA8UG9wdXBBcHAgLz5cbiAgPC9Qcm92aWRlcj4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdQb3B1cEFwcCcpXG4pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvUG9wdXBBcHAuanNcbiAqKi8iLCJpbXBvcnQgdXBkYXRlIGZyb20gJ3JlYWN0L2xpYi91cGRhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0geyBibG9jazogW10gfSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdBRERfUEFUVEVSTic6XG4gICAgICByZXR1cm4gdXBkYXRlKHN0YXRlLCB7XG4gICAgICAgIGJsb2NrOiB7ICRwdXNoOiBbYWN0aW9uLnBhdHRlcm5dIH1cbiAgICAgIH0pO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JlZHVjZXJzL1BvcHVwLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgbG9nbyBmcm9tICcuLi9pbWcvdGMtMzIucG5nJztcbmltcG9ydCB7IGFkZFBhdHRlcm4gfSBmcm9tICcuLi9hY3Rpb25zL2NvbW1vbi5qcyc7XG5jb25zdCBzdHlsZUhlYWRpbmcgPSB7IHBhZGRpbmc6ICcwcHgnIH07XG5jb25zdCBzdHlsZVRpdGxlID0geyBwYWRkaW5nOiAnMTBweCAxNXB4IDEwcHggMTVweCcgfTtcbmNvbnN0IHN0eWxlTG9nbyA9IHsgcGFkZGluZzogJzNweCAxNXB4IDRweCA1cHgnIH07XG5cbmNsYXNzIFBvcHVwQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5vblN1Ym1pdFBhdHRlcm4gPSB0aGlzLm9uU3VibWl0UGF0dGVybi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ29Ub09wdGlvbnMgPSB0aGlzLmdvVG9PcHRpb25zLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jdXJyZW50RE4gPSAnJztcbiAgfVxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgY2hyb21lLnRhYnMuZ2V0U2VsZWN0ZWQobnVsbCwgdGFiID0+IHtcbiAgICAgIHRoaXMuY3VycmVudEROID0gdGFiLnVybC5zcGxpdCgnLycpWzJdO1xuICAgIH0pO1xuICB9XG4gIG9uU3VibWl0UGF0dGVybihlKSB7XG4gICAgY29uc3QgeyBhZGRQYXR0ZXJuIH0gPSB0aGlzLnByb3BzO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBhZGRQYXR0ZXJuKHRoaXMucmVmcy5wYXR0ZXJuSW5wdXQudmFsdWUudHJpbSgpKTtcbiAgICB0aGlzLnJlZnMucGF0dGVybklucHV0LnZhbHVlID0gJyc7XG4gIH1cbiAgZ29Ub09wdGlvbnMoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjaHJvbWUudGFicy5jcmVhdGUoeyB1cmw6IGNocm9tZS5leHRlbnNpb24uZ2V0VVJMKCdvcHRpb25zLmh0bWwnKSB9KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9XCJQb3B1cEFwcFwiIGNsYXNzTmFtZT1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIiBzdHlsZT17eyB3aWR0aDogJzQwMHB4JyB9fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1oZWFkaW5nXCIgc3R5bGU9e3N0eWxlSGVhZGluZ30+XG4gICAgICAgICAgPGltZyBzcmM9e2xvZ299IGNsYXNzTmFtZT1cImltZy1yZXNwb25zaXZlIHB1bGwtbGVmdFwiIHN0eWxlPXtzdHlsZUxvZ299IGFsdD1cIlwiIC8+XG5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicGFuZWwtdGl0bGVcIiBzdHlsZT17c3R5bGVUaXRsZX0+VGhvdWdodCBDcmltZTwvaDM+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtYm9keVwiPlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0UGF0dGVybn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cInBhdHRlcm5JbnB1dFwiIHJlZj1cInBhdHRlcm5JbnB1dFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuY3VycmVudEROfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1idG5cIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiIHZhbHVlPVwiQWRkXCIgLz5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHQgcHVsbC1yaWdodFwiIG9uQ2xpY2s9e3RoaXMuZ29Ub09wdGlvbnN9PlxuICAgICAgICAgICAgT3B0aW9uc1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgc3RhdGUgPT4gKFxuICAgIHsgcGF0dGVybnM6IHN0YXRlLmJsb2NrIH1cbiAgKSxcbiAgZGlzcGF0Y2ggPT4gKFxuICAgIHtcbiAgICAgIGFkZFBhdHRlcm46IHBhdHRlcm4gPT4gZGlzcGF0Y2goYWRkUGF0dGVybihwYXR0ZXJuKSlcbiAgICB9XG4gIClcbikoUG9wdXBBcHApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29udGFpbmVycy9Qb3B1cC5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNBQUFBQWdDQVlBQUFCemVucjBBQUFBQkhOQ1NWUUlDQWdJZkFoa2lBQUFBQWx3U0ZsekFBQUFQd0FBQUQ4QlI1ZUo0QUFBQUJsMFJWaDBVMjltZEhkaGNtVUFkM2QzTG1sdWEzTmpZWEJsTG05eVo1dnVQQm9BQUFKZFNVUkJWRmlGM2RaSmExUkJFQWZ3bnhzWUVUZGNFVU5VY0Y5d1NhTGdVYStLTjhFb2dndDZVbFR3QStqQkwrQkpCRUU4ZVBHbzRFa1A0bklRZ2dzdUtJcEIzQzRSWTFUaWN1ZzMyQm5mZTlOdkpsNzhRekZNMVZUL2E2cXJxb3QwYk1NN1BNQWVqTU4wbk1KNzNNT0NDdWRWd2dKOHhxOUl2bUNvVG5jWG8vOUZBQmZyaU1xa1o2VEpaK0o3aFFCdWpYUUF4eXVRMTJSVnE2UnpjQXhYL0gzM0tmSkd1TGFkYUt0S3ZoRURUWkFXeVROTUtDTExxOWcrOUZhTnVnQkR1SUd2elRndngyRi90MXFLUE1ZdXpHcEVNaW9oa0VFOHh3SDBDMTB4RCszQ0xPakxwRC9UWGNFbDdFajVseWw0aEo5Q1JtTHN3N282M1ZFaEE2ZFREOC9Md0JvY2pMNXZGaWJodVl3VXB1R3AwUE5iTTlJMjNNZENYTS9zTXRzUkZlcGdvcERPdkx1OWh2TjRHZW51NEt5UXFUeWY2Nm5FTWM0VUhOYU03RzBtZ0dYQ3ZiZEtQb2dwWlVSRkw5ZGtZUmkxaWo2TXJlcTBUZjdqYzFLNDZ6emJCNXpBMVJ6YmE2RnRrOUN1dUFEUFpML3BGRkpiMHovRXBNejJvc0QzbHJTWlUxcDh0NlBmSGNwMEEvN01oMm5LNjJaN0kvTFJlRnR5d0tDd2h0WFFhL2pBMlZMaSt3dVhpMGhyNkZRK3U4Y0wzVkh6YTBkSFpLK2ZpdlhZMUNpQXRRME9pRWtXQyszVkhkbldOL0NkZ2JsbEFTeXFFRUJYOXRuaFQ5WlMva0Q5ZXpJc2dOa1ZBdGdRNmJxRUF1eEk4SjlhcjRpSFJPSFdFbUcxVUloeDZydnhUVnFiVGFwWHhBSDhURGhndkpDRkZaR3VTOWdibTBJY3dKTkVuLzJHdDJNblBpWDZQaTR6THBHMi8rY3RyQ2xMN0FPTWFSUmhqN0E0ak5SVFhKTlhXSnBIbUZjNDg3RWJLNFZYc1ZuOHdFZmN4QVV0MU1uL2pkOGc0RDl3eXVybTdnQUFBQUJKUlU1RXJrSmdnZz09XCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2ltZy90Yy0zMi5wbmdcbiAqKiBtb2R1bGUgaWQgPSAzMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=