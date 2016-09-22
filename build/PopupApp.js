webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(33);
	
	var _redux = __webpack_require__(170);
	
	var _reactRedux = __webpack_require__(183);
	
	var _Popup = __webpack_require__(331);
	
	var _Popup2 = _interopRequireDefault(_Popup);
	
	var _Popup3 = __webpack_require__(332);
	
	var _Popup4 = _interopRequireDefault(_Popup3);
	
	__webpack_require__(319);
	
	__webpack_require__(328);
	
	__webpack_require__(330);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var store = (0, _redux.createStore)(_Popup2.default);
	
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
	    _this.currentDN = '';
	    return _this;
	  }
	
	  (0, _createClass3.default)(PopupApp, [{
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
	      var addSite = this.props.addSite;
	
	      e.preventDefault();
	      addSite(this.refs.patternInput.value.trim());
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

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvUG9wdXBBcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL1BvcHVwLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL1BvcHVwLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWcvdGMtMzIucG5nIl0sIm5hbWVzIjpbInN0b3JlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlZHVjZXIiLCJzdGF0ZSIsInNpdGVzIiwibWVzc2FnZSIsImFjdGlvbiIsInR5cGUiLCIkc2V0IiwiZSIsInN0eWxlSGVhZGluZyIsInBhZGRpbmciLCJzdHlsZVRpdGxlIiwic3R5bGVMb2dvIiwiUG9wdXBBcHAiLCJwcm9wcyIsIm9uU3VibWl0UGF0dGVybiIsImJpbmQiLCJnb1RvT3B0aW9ucyIsImN1cnJlbnRETiIsImNocm9tZSIsInRhYnMiLCJnZXRTZWxlY3RlZCIsInRhYiIsInVybCIsInNwbGl0IiwiYWRkU2l0ZSIsInByZXZlbnREZWZhdWx0IiwicmVmcyIsInBhdHRlcm5JbnB1dCIsInZhbHVlIiwidHJpbSIsImNyZWF0ZSIsImV4dGVuc2lvbiIsImdldFVSTCIsIndpZHRoIiwiQ29tcG9uZW50IiwiZGlzcGF0Y2giLCJzaXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxLQUFNQSxRQUFRLHdDQUFkOztBQUVBLHVCQUNFO0FBQUE7QUFBQSxLQUFVLE9BQU9BLEtBQWpCO0FBQ0U7QUFERixFQURGLEVBSUVDLFNBQVNDLGNBQVQsQ0FBd0IsVUFBeEIsQ0FKRixFOzs7Ozs7Ozs7Ozs7bUJDVndCQyxPOztBQUZ4Qjs7Ozs7O0FBRWUsVUFBU0EsT0FBVCxHQUE2RDtBQUFBLE9BQTVDQyxLQUE0Qyx5REFBcEMsRUFBRUMsT0FBTyxFQUFULEVBQWFDLFNBQVMsRUFBdEIsRUFBb0M7QUFBQSxPQUFSQyxN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RjtBQVBGLFFBREY7QUE0QkQ7OztHQW5Eb0IsZ0JBQU1rQixTOzttQkFzRGQseUJBQ2I7QUFBQSxVQUNFO0FBQ0VoQyxZQUFPRCxNQUFNQyxLQURmO0FBRUVDLGNBQVNGLE1BQU1FO0FBRmpCLElBREY7QUFBQSxFQURhLEVBT2I7QUFBQSxVQUNFO0FBQ0VxQixjQUFTO0FBQUEsY0FBUVcsU0FBUyxxQkFBUUMsSUFBUixDQUFULENBQVI7QUFBQTtBQURYLElBREY7QUFBQSxFQVBhLEVBWWJ4QixRQVphLEM7Ozs7Ozs7QUM5RGYsa0NBQWlDLGcrQiIsImZpbGUiOiJQb3B1cEFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMvUG9wdXAuanMnO1xuaW1wb3J0IFBvcHVwQXBwIGZyb20gJy4vY29udGFpbmVycy9Qb3B1cC5qcyc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XG5pbXBvcnQgJ2pxdWVyeS9qcXVlcnkubWluLmpzJztcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvanMvYm9vdHN0cmFwLm1pbi5qcyc7XG5cbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlcik7XG5cbnJlbmRlcihcbiAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgPFBvcHVwQXBwIC8+XG4gIDwvUHJvdmlkZXI+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnUG9wdXBBcHAnKVxuKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL1BvcHVwQXBwLmpzXG4gKiovIiwiaW1wb3J0IHVwZGF0ZSBmcm9tICdyZWFjdC9saWIvdXBkYXRlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IHsgc2l0ZXM6IFtdLCBtZXNzYWdlOiAnJyB9LCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ0FERF9TSVRFX1NVQ0NFRURFRCc6XG4gICAgICByZXR1cm4gdXBkYXRlKHN0YXRlLCB7XG4gICAgICAgIG1lc3NhZ2U6IHsgJHNldDogYWN0aW9uLm1lc3NhZ2UgfVxuICAgICAgfSk7XG4gICAgY2FzZSAnQUREX1NJVEVfRkFJTEVEJzpcbiAgICAgIHJldHVybiB1cGRhdGUoc3RhdGUsIHtcbiAgICAgICAgbWVzc2FnZTogeyAkc2V0OiBhY3Rpb24uZSB9XG4gICAgICB9KTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yZWR1Y2Vycy9Qb3B1cC5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IGxvZ28gZnJvbSAnLi4vaW1nL3RjLTMyLnBuZyc7XG5pbXBvcnQgeyBhZGRTaXRlIH0gZnJvbSAnLi4vYWN0aW9ucy9jb21tb24uanMnO1xuY29uc3Qgc3R5bGVIZWFkaW5nID0geyBwYWRkaW5nOiAnMHB4JyB9O1xuY29uc3Qgc3R5bGVUaXRsZSA9IHsgcGFkZGluZzogJzEwcHggMTVweCAxMHB4IDE1cHgnIH07XG5jb25zdCBzdHlsZUxvZ28gPSB7IHBhZGRpbmc6ICczcHggMTVweCA0cHggNXB4JyB9O1xuXG5jbGFzcyBQb3B1cEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMub25TdWJtaXRQYXR0ZXJuID0gdGhpcy5vblN1Ym1pdFBhdHRlcm4uYmluZCh0aGlzKTtcbiAgICB0aGlzLmdvVG9PcHRpb25zID0gdGhpcy5nb1RvT3B0aW9ucy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY3VycmVudEROID0gJyc7XG4gIH1cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIGNocm9tZS50YWJzLmdldFNlbGVjdGVkKG51bGwsIHRhYiA9PiB7XG4gICAgICB0aGlzLmN1cnJlbnRETiA9IHRhYi51cmwuc3BsaXQoJy8nKVsyXTtcbiAgICB9KTtcbiAgfVxuICBvblN1Ym1pdFBhdHRlcm4oZSkge1xuICAgIGNvbnN0IHsgYWRkU2l0ZSB9ID0gdGhpcy5wcm9wcztcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgYWRkU2l0ZSh0aGlzLnJlZnMucGF0dGVybklucHV0LnZhbHVlLnRyaW0oKSk7XG4gICAgdGhpcy5yZWZzLnBhdHRlcm5JbnB1dC52YWx1ZSA9ICcnO1xuICB9XG4gIGdvVG9PcHRpb25zKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY2hyb21lLnRhYnMuY3JlYXRlKHsgdXJsOiBjaHJvbWUuZXh0ZW5zaW9uLmdldFVSTCgnb3B0aW9ucy5odG1sJykgfSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPVwiUG9wdXBBcHBcIiBjbGFzc05hbWU9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCIgc3R5bGU9e3sgd2lkdGg6ICc0MDBweCcgfX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtaGVhZGluZ1wiIHN0eWxlPXtzdHlsZUhlYWRpbmd9PlxuICAgICAgICAgIDxpbWcgc3JjPXtsb2dvfSBjbGFzc05hbWU9XCJpbWctcmVzcG9uc2l2ZSBwdWxsLWxlZnRcIiBzdHlsZT17c3R5bGVMb2dvfSBhbHQ9XCJcIiAvPlxuXG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInBhbmVsLXRpdGxlXCIgc3R5bGU9e3N0eWxlVGl0bGV9PlRob3VnaHQgQ3JpbWU8L2gzPlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWJvZHlcIj5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdFBhdHRlcm59PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJwYXR0ZXJuSW5wdXRcIiByZWY9XCJwYXR0ZXJuSW5wdXRcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLmN1cnJlbnRETn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYnRuXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIiB2YWx1ZT1cIkFkZFwiIC8+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0IHB1bGwtcmlnaHRcIiBvbkNsaWNrPXt0aGlzLmdvVG9PcHRpb25zfT5cbiAgICAgICAgICAgIE9wdGlvbnNcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIHN0YXRlID0+IChcbiAgICB7XG4gICAgICBzaXRlczogc3RhdGUuc2l0ZXMsXG4gICAgICBtZXNzYWdlOiBzdGF0ZS5tZXNzYWdlXG4gICAgfVxuICApLFxuICBkaXNwYXRjaCA9PiAoXG4gICAge1xuICAgICAgYWRkU2l0ZTogc2l0ZSA9PiBkaXNwYXRjaChhZGRTaXRlKHNpdGUpKVxuICAgIH1cbiAgKVxuKShQb3B1cEFwcCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb250YWluZXJzL1BvcHVwLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ0FBQUFBZ0NBWUFBQUJ6ZW5yMEFBQUFCSE5DU1ZRSUNBZ0lmQWhraUFBQUFBbHdTRmx6QUFBQVB3QUFBRDhCUjVlSjRBQUFBQmwwUlZoMFUyOW1kSGRoY21VQWQzZDNMbWx1YTNOallYQmxMbTl5WjV2dVBCb0FBQUpkU1VSQlZGaUYzZFpKYTFSQkVBZndueHNZRVRkY0VVTlVjRjl3U2FMZ1VhK0tOOEVvZ2d0NlVsVHdBK2pCTCtCSkJFRThlUEdvNEVrUDRuSVFnZ3N1S0lwQjNDNFJZMVRpY3VnMzJCbmZlOU52Smw3OFF6Rk0xVlQvYTZxcnFvdDBiTU03UE1BZWpNTjBuTUo3M01PQ0N1ZFZ3Z0o4eHE5SXZtQ29UbmNYby85RkFCZnJpTXFrWjZUSlorSjdoUUJ1alhRQXh5dVExMlJWcTZSemNBeFgvSDMzS2ZKR3VMYWRhS3RLdmhFRFRaQVd5VE5NS0NMTHE5Zys5RmFOdWdCRHVJR3Z6VGd2eDJGL3QxcUtQTVl1ekdwRU1pb2hrRUU4eHdIMEMxMHhEKzNDTE9qTHBEL1RYY0VsN0VqNWx5bDRoSjlDUm1Mc3c3bzYzVkVoQTZkVEQ4L0x3Qm9jakw1dkZpYmh1WXdVcHVHcDBQTmJNOUkyM01kQ1hNL3NNdHNSRmVwZ29wRE92THU5aHZONEdlbnU0S3lRcVR5ZjY2bkVNYzRVSE5hTTdHMG1nR1hDdmJkS1BvZ3BaVVJGTDlka1lSaTFpajZNcmVxMFRmN2pjMUs0Nnp6YkI1ekExUnpiYTZGdGs5Q3V1QURQWkwvcEZGSmIwei9FcE16Mm9zRDNsclNaVTFwOHQ2UGZIY3AwQS83TWgybks2Mlo3SS9MUmVGdHl3S0N3aHRYUWEvakEyVkxpK3d1WGkwaHI2RlErdThjTDNWSHphMGRIWksrZml2WFkxQ2lBdFEwT2lFa1dDKzNWSGRuV04vQ2RnYmxsQVN5cUVFQlg5dG5oVDlaUy9rRDlleklzZ05rVkF0Z1E2YnFFQXV4SThKOWFyNGlIUk9IV0VtRzFVSWh4NnJ2eFRWcWJUYXBYeEFIOFREaGd2SkNGRlpHdVM5Z2JtMEljd0pORW4vMkd0Mk1uUGlYNlBpNHpMcEcyLytjdHJDbEw3QU9NYVJSaGo3QTRqTlJUWEpOWFdKcEhtRmM0ODdFYks0VlhzVm44d0VmY3hBVXQxTW4vamQ4ZzREOXd5dXJtN2dBQUFBQkpSVTVFcmtKZ2dnPT1cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW1nL3RjLTMyLnBuZ1xuICoqIG1vZHVsZSBpZCA9IDMzM1xuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==