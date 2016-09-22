webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _wurl = __webpack_require__(334);
	
	var _wurl2 = _interopRequireDefault(_wurl);
	
	var _blockList = __webpack_require__(301);
	
	var _blockList2 = _interopRequireDefault(_blockList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var BL = new _blockList2.default();
	BL.init();
	var BLOCKED_PAGE = 'https://www.github.com/wrleskovec';
	
	function loadFilteredPage(tabId, url) {
	  chrome.tabs.update(tabId, {
	    url: url
	  });
	}
	
	function urlCheck(details) {
	  var protocol = (0, _wurl2.default)('protocol', details.url);
	  if (protocol !== 'chrome' && protocol !== 'chrome-extension') {
	    var site = (0, _wurl2.default)('hostname', details.url);
	    BL.checkSite(site).then(function (record) {
	      if (record.action === 'block') {
	        loadFilteredPage(details.tabId, BLOCKED_PAGE);
	      }
	    });
	  }
	  return {};
	}
	
	chrome.webRequest.onBeforeRequest.addListener(urlCheck, {
	  urls: ['<all_urls>'],
	  types: ['main_frame']
	});

/***/ },

/***/ 334:
/***/ function(module, exports) {

	module.exports = function (arg, url) {
	
	    function _t() {
	        return new RegExp(/(.*?)\.?([^\.]*?)\.?(com|net|org|biz|ws|in|me|co\.uk|co|org\.uk|ltd\.uk|plc\.uk|me\.uk|edu|mil|br\.com|cn\.com|eu\.com|hu\.com|no\.com|qc\.com|sa\.com|se\.com|se\.net|us\.com|uy\.com|ac|co\.ac|gv\.ac|or\.ac|ac\.ac|af|am|as|at|ac\.at|co\.at|gv\.at|or\.at|asn\.au|com\.au|edu\.au|org\.au|net\.au|id\.au|be|ac\.be|adm\.br|adv\.br|am\.br|arq\.br|art\.br|bio\.br|cng\.br|cnt\.br|com\.br|ecn\.br|eng\.br|esp\.br|etc\.br|eti\.br|fm\.br|fot\.br|fst\.br|g12\.br|gov\.br|ind\.br|inf\.br|jor\.br|lel\.br|med\.br|mil\.br|net\.br|nom\.br|ntr\.br|odo\.br|org\.br|ppg\.br|pro\.br|psc\.br|psi\.br|rec\.br|slg\.br|tmp\.br|tur\.br|tv\.br|vet\.br|zlg\.br|br|ab\.ca|bc\.ca|mb\.ca|nb\.ca|nf\.ca|ns\.ca|nt\.ca|on\.ca|pe\.ca|qc\.ca|sk\.ca|yk\.ca|ca|cc|ac\.cn|com\.cn|edu\.cn|gov\.cn|org\.cn|bj\.cn|sh\.cn|tj\.cn|cq\.cn|he\.cn|nm\.cn|ln\.cn|jl\.cn|hl\.cn|js\.cn|zj\.cn|ah\.cn|gd\.cn|gx\.cn|hi\.cn|sc\.cn|gz\.cn|yn\.cn|xz\.cn|sn\.cn|gs\.cn|qh\.cn|nx\.cn|xj\.cn|tw\.cn|hk\.cn|mo\.cn|cn|cx|cz|de|dk|fo|com\.ec|tm\.fr|com\.fr|asso\.fr|presse\.fr|fr|gf|gs|co\.il|net\.il|ac\.il|k12\.il|gov\.il|muni\.il|ac\.in|co\.in|org\.in|ernet\.in|gov\.in|net\.in|res\.in|is|it|ac\.jp|co\.jp|go\.jp|or\.jp|ne\.jp|ac\.kr|co\.kr|go\.kr|ne\.kr|nm\.kr|or\.kr|li|lt|lu|asso\.mc|tm\.mc|com\.mm|org\.mm|net\.mm|edu\.mm|gov\.mm|ms|nl|no|nu|pl|ro|org\.ro|store\.ro|tm\.ro|firm\.ro|www\.ro|arts\.ro|rec\.ro|info\.ro|nom\.ro|nt\.ro|se|si|com\.sg|org\.sg|net\.sg|gov\.sg|sk|st|tf|ac\.th|co\.th|go\.th|mi\.th|net\.th|or\.th|tm|to|com\.tr|edu\.tr|gov\.tr|k12\.tr|net\.tr|org\.tr|com\.tw|org\.tw|net\.tw|ac\.uk|uk\.com|uk\.net|gb\.com|gb\.net|vg|sh|kz|ch|info|ua|gov|name|pro|ie|hk|com\.hk|org\.hk|net\.hk|edu\.hk|us|tk|cd|by|ad|lv|eu\.lv|bz|es|jp|cl|ag|mobi|eu|co\.nz|org\.nz|net\.nz|maori\.nz|iwi\.nz|io|la|md|sc|sg|vc|tw|travel|my|se|tv|pt|com\.pt|edu\.pt|asia|fi|com\.ve|net\.ve|fi|org\.ve|web\.ve|info\.ve|co\.ve|tel|im|gr|ru|net\.ru|org\.ru|hr|com\.hr|ly|xyz)$/);
	    }
	
	    function _d(s) {
	      return decodeURIComponent(s.replace(/\+/g, ' '));
	    }
	
	    function _i(arg, str) {
	        var sptr = arg.charAt(0),
	            split = str.split(sptr);
	
	        if (sptr === arg) { return split; }
	
	        arg = parseInt(arg.substring(1), 10);
	
	        return split[arg < 0 ? split.length + arg : arg - 1];
	    }
	
	    function _f(arg, str) {
	        var sptr = arg.charAt(0),
	            split = str.split('&'),
	            field = [],
	            params = {},
	            tmp = [],
	            arg2 = arg.substring(1);
	
	        for (var i in split) {
	            field = split[i].split(/=(.*)/);
	
	            if (field[0].replace(/\s/g, '') !== '') {
	                field[1] = _d(field[1] || '');
	
	                // If we have a match just return it right away.
	                if (arg2 === field[0]) { return field[1]; }
	
	                // Check for array pattern.
	                tmp = field[0].match(/(.*)\[([0-9]+)\]/);
	
	                if (tmp) {
	                    params[tmp[1]] = params[tmp[1]] || [];
	                
	                    params[tmp[1]][tmp[2]] = field[1];
	                }
	                else {
	                    params[field[0]] = field[1];    
	                }
	            }
	        }
	
	        if (sptr === arg) { return params; }
	
	        return params[arg2];
	    }
	
	    //return function(arg, url) {
	    var _l = {}, tmp, tmp2;
	
	    if (arg === 'tld?') { return _t(); }
	
	    url = url || window.location.toString();
	
	    if ( ! arg) { return url; }
	
	    arg = arg.toString();
	
	    if (url.match(/^mailto:[^\/]/)) {
	        _l.protocol = 'mailto';
	        _l.email = url.split(/mailto\:/)[1];
	    }
	    else {
	
	        // Anchor.
	        tmp = url.split(/#(.*)/);
	        _l.hash = tmp[1] ? tmp[1] : undefined;
	
	        // Return anchor parts.
	        if (_l.hash && arg.match(/^#/)) { return _f(arg, _l.hash); }
	        
	        // Query
	        tmp = tmp[0].split(/\?(.*)/);
	        _l.query = tmp[1] ? tmp[1] : undefined;
	
	        // Return query parts.
	        if (_l.query && arg.match(/^\?/)) { return _f(arg, _l.query); }
	
	        // Protocol.
	        tmp = tmp[0].split(/\:?\/\//);
	        _l.protocol = tmp[1] ? tmp[0].toLowerCase() : undefined;
	
	        // Path.
	        tmp = (tmp[1] ? tmp[1] : tmp[0]).split(/(\/.*)/);
	        _l.path = tmp[1] ? tmp[1] : '';
	
	        // Clean up path.
	        _l.path = _l.path.replace(/^([^\/])/, '/$1').replace(/\/$/, '');
	
	        // Return path parts.
	        if (arg.match(/^[\-0-9]+$/)) { arg = arg.replace(/^([^\/])/, '/$1'); }
	        if (arg.match(/^\//)) { return _i(arg, _l.path.substring(1)); }
	
	        // File.
	        tmp2 = _i('/-1', _l.path.substring(1));
	        tmp2 = tmp2.split(/\.(.*)/);
	
	        // Filename and fileext.
	        if (tmp2[1]) {
	            _l.file = tmp2[0] + '.' + tmp2[1];
	            _l.filename = tmp2[0];
	            _l.fileext = tmp2[1];
	        }
	
	        // Port.
	        tmp = tmp[0].split(/\:([0-9]+)$/);
	        _l.port = tmp[1] ? tmp[1] : undefined;
	
	        // Auth.
	        tmp = tmp[0].split(/@/);
	        _l.auth = tmp[1] ? tmp[0] : undefined;
	
	        // User and pass.
	        if (_l.auth) {
	            tmp2 = _l.auth.split(/\:(.*)/);
	            _l.user = tmp2[0];
	            _l.pass = tmp2[1];
	        }
	
	        // Hostname.
	        _l.hostname = (tmp[1] ? tmp[1] : tmp[0]).toLowerCase();
	
	        // Return hostname parts.
	        if (arg.charAt(0) === '.') { return _i(arg, _l.hostname); }
	
	        // Domain, tld and sub domain.
	        if (_t()) {
	            tmp = _l.hostname.match(_t());
	
	            if (tmp) {
	                _l.tld = tmp[3];
	                _l.domain = tmp[2] ? tmp[2] + '.' + tmp[3] : undefined;
	                _l.sub = tmp[1] || undefined;
	            }
	        }
	
	        // Set port and protocol defaults if not set.
	        _l.port = _l.port || (_l.protocol === 'https' ? '443' : '80');
	        _l.protocol = _l.protocol || (_l.port === '443' ? 'https' : 'http');
	    }
	
	    // Return arg.
	    if (arg in _l) { return _l[arg]; }
	
	    // Return everything.
	    if (arg === '{}') { return _l; }
	
	    // Default to undefined for no match.
	    return undefined;
	    
	
	
	
	    /*function isNumeric(arg) {
	      return !isNaN(parseFloat(arg)) && isFinite(arg);
	    }
	
	    function decode(str) {
	      return decodeURIComponent(str.replace(/\+/g, ' '));
	    }
	    
	    var _ls = url;
	
	    if (!url) { return undefined; }
	    else if (!arg) { return _ls; }
	    else { arg = arg.toString(); }
	
	    if (_ls.substring(0,2) === '//') { _ls = 'http:' + _ls; }
	        else if (_ls.split('://').length === 1) { _ls = 'http://' + _ls; }
	
	        url = _ls.split('/');
	        var _l = {auth:''}, host = url[2].split('@');
	
	        if (host.length === 1) { host = host[0].split(':'); }
	        else { _l.auth = host[0]; host = host[1].split(':'); }
	
	        _l.protocol=url[0];
	        _l.hostname=host[0];
	        _l.port=(host[1] || ((_l.protocol.split(':')[0].toLowerCase() === 'https') ? '443' : '80'));
	        _l.pathname=( (url.length > 3 ? '/' : '') + url.slice(3, url.length).join('/').split('?')[0].split('#')[0]);
	        var _p = _l.pathname;
	
	        if (_p.charAt(_p.length-1) === '/') { _p=_p.substring(0, _p.length-1); }
	        var _h = _l.hostname, _hs = _h.split('.'), _ps = _p.split('/');
	
	        if (arg === 'hostname') { return _h; }
	        else if (arg === 'domain') {
	            if (/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/.test(_h)) { return _h; }
	            return _hs.slice(-2).join('.'); 
	        }
	        //else if (arg === 'tld') { return _hs.slice(-1).join('.'); }
	        else if (arg === 'sub') { return _hs.slice(0, _hs.length - 2).join('.'); }
	        else if (arg === 'port') { return _l.port; }
	        else if (arg === 'protocol') { return _l.protocol.split(':')[0]; }
	        else if (arg === 'auth') { return _l.auth; }
	        else if (arg === 'user') { return _l.auth.split(':')[0]; }
	        else if (arg === 'pass') { return _l.auth.split(':')[1] || ''; }
	        else if (arg === 'path') { return _l.pathname; }
	        else if (arg.charAt(0) === '.')
	        {
	            arg = arg.substring(1);
	            if(isNumeric(arg)) {arg = parseInt(arg, 10); return _hs[arg < 0 ? _hs.length + arg : arg-1] || ''; }
	        }
	        else if (isNumeric(arg)) { arg = parseInt(arg, 10); return _ps[arg < 0 ? _ps.length + arg : arg] || ''; }
	        else if (arg === 'file') { return _ps.slice(-1)[0]; }
	        else if (arg === 'filename') { return _ps.slice(-1)[0].split('.')[0]; }
	        else if (arg === 'fileext') { return _ps.slice(-1)[0].split('.')[1] || ''; }
	        else if (arg.charAt(0) === '?' || arg.charAt(0) === '#')
	        {
	            var params = _ls, param = null;
	
	            if(arg.charAt(0) === '?') { params = (params.split('?')[1] || '').split('#')[0]; }
	            else if(arg.charAt(0) === '#') { params = (params.split('#')[1] || ''); }
	
	            if(!arg.charAt(1)) { return (params ? decode(params) : params); }
	
	            arg = arg.substring(1);
	            params = params.split('&');
	
	            for(var i=0,ii=params.length; i<ii; i++)
	            {
	                param = params[i].split(/(.*?)=(.*)/).filter(Boolean);
	
	                if(param[0] === arg) { return (param[1] ? decode(param[1]) : param[1]) || ''; }
	            }
	
	            return null;
	        }
	
	    return '';*/
	};

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9+L3d1cmwvd3VybC5qcyJdLCJuYW1lcyI6WyJCTCIsImluaXQiLCJCTE9DS0VEX1BBR0UiLCJsb2FkRmlsdGVyZWRQYWdlIiwidGFiSWQiLCJ1cmwiLCJjaHJvbWUiLCJ0YWJzIiwidXBkYXRlIiwidXJsQ2hlY2siLCJkZXRhaWxzIiwicHJvdG9jb2wiLCJzaXRlIiwiY2hlY2tTaXRlIiwidGhlbiIsInJlY29yZCIsImFjdGlvbiIsIndlYlJlcXVlc3QiLCJvbkJlZm9yZVJlcXVlc3QiLCJhZGRMaXN0ZW5lciIsInVybHMiLCJ0eXBlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBLEtBQU1BLEtBQUsseUJBQVg7QUFDQUEsSUFBR0MsSUFBSDtBQUNBLEtBQU1DLGVBQWUsbUNBQXJCOztBQUVBLFVBQVNDLGdCQUFULENBQTBCQyxLQUExQixFQUFpQ0MsR0FBakMsRUFBc0M7QUFDcENDLFVBQU9DLElBQVAsQ0FBWUMsTUFBWixDQUFtQkosS0FBbkIsRUFBMEI7QUFDeEJDO0FBRHdCLElBQTFCO0FBR0Q7O0FBRUQsVUFBU0ksUUFBVCxDQUFrQkMsT0FBbEIsRUFBMkI7QUFDekIsT0FBTUMsV0FBVyxvQkFBSyxVQUFMLEVBQWlCRCxRQUFRTCxHQUF6QixDQUFqQjtBQUNBLE9BQUlNLGFBQWEsUUFBYixJQUF5QkEsYUFBYSxrQkFBMUMsRUFBOEQ7QUFDNUQsU0FBTUMsT0FBTyxvQkFBSyxVQUFMLEVBQWlCRixRQUFRTCxHQUF6QixDQUFiO0FBQ0FMLFFBQUdhLFNBQUgsQ0FBYUQsSUFBYixFQUNHRSxJQURILENBQ1Esa0JBQVU7QUFDZCxXQUFJQyxPQUFPQyxNQUFQLEtBQWtCLE9BQXRCLEVBQStCO0FBQzdCYiwwQkFBaUJPLFFBQVFOLEtBQXpCLEVBQWdDRixZQUFoQztBQUNEO0FBQ0YsTUFMSDtBQU1EO0FBQ0QsVUFBTyxFQUFQO0FBQ0Q7O0FB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b250ZW50IjpbImltcG9ydCB3dXJsIGZyb20gJ3d1cmwnO1xuaW1wb3J0IEJsb2NrTGlzdCBmcm9tICcuL2Jsb2NrTGlzdC5qcyc7XG5cbmNvbnN0IEJMID0gbmV3IEJsb2NrTGlzdCgpO1xuQkwuaW5pdCgpO1xuY29uc3QgQkxPQ0tFRF9QQUdFID0gJ2h0dHBzOi8vd3d3LmdpdGh1Yi5jb20vd3JsZXNrb3ZlYyc7XG5cbmZ1bmN0aW9uIGxvYWRGaWx0ZXJlZFBhZ2UodGFiSWQsIHVybCkge1xuICBjaHJvbWUudGFicy51cGRhdGUodGFiSWQsIHtcbiAgICB1cmxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVybENoZWNrKGRldGFpbHMpIHtcbiAgY29uc3QgcHJvdG9jb2wgPSB3dXJsKCdwcm90b2NvbCcsIGRldGFpbHMudXJsKTtcbiAgaWYgKHByb3RvY29sICE9PSAnY2hyb21lJyAmJiBwcm90b2NvbCAhPT0gJ2Nocm9tZS1leHRlbnNpb24nKSB7XG4gICAgY29uc3Qgc2l0ZSA9IHd1cmwoJ2hvc3RuYW1lJywgZGV0YWlscy51cmwpO1xuICAgIEJMLmNoZWNrU2l0ZShzaXRlKVxuICAgICAgLnRoZW4ocmVjb3JkID0+IHtcbiAgICAgICAgaWYgKHJlY29yZC5hY3Rpb24gPT09ICdibG9jaycpIHtcbiAgICAgICAgICBsb2FkRmlsdGVyZWRQYWdlKGRldGFpbHMudGFiSWQsIEJMT0NLRURfUEFHRSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG4gIHJldHVybiB7fTtcbn1cblxuY2hyb21lLndlYlJlcXVlc3Qub25CZWZvcmVSZXF1ZXN0LmFkZExpc3RlbmVyKHVybENoZWNrLCB7XG4gIHVybHM6IFsnPGFsbF91cmxzPiddLFxuICB0eXBlczogWydtYWluX2ZyYW1lJ11cbn0pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYmFja2dyb3VuZC5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZywgdXJsKSB7XHJcblxyXG4gICAgZnVuY3Rpb24gX3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoLyguKj8pXFwuPyhbXlxcLl0qPylcXC4/KGNvbXxuZXR8b3JnfGJpenx3c3xpbnxtZXxjb1xcLnVrfGNvfG9yZ1xcLnVrfGx0ZFxcLnVrfHBsY1xcLnVrfG1lXFwudWt8ZWR1fG1pbHxiclxcLmNvbXxjblxcLmNvbXxldVxcLmNvbXxodVxcLmNvbXxub1xcLmNvbXxxY1xcLmNvbXxzYVxcLmNvbXxzZVxcLmNvbXxzZVxcLm5ldHx1c1xcLmNvbXx1eVxcLmNvbXxhY3xjb1xcLmFjfGd2XFwuYWN8b3JcXC5hY3xhY1xcLmFjfGFmfGFtfGFzfGF0fGFjXFwuYXR8Y29cXC5hdHxndlxcLmF0fG9yXFwuYXR8YXNuXFwuYXV8Y29tXFwuYXV8ZWR1XFwuYXV8b3JnXFwuYXV8bmV0XFwuYXV8aWRcXC5hdXxiZXxhY1xcLmJlfGFkbVxcLmJyfGFkdlxcLmJyfGFtXFwuYnJ8YXJxXFwuYnJ8YXJ0XFwuYnJ8YmlvXFwuYnJ8Y25nXFwuYnJ8Y250XFwuYnJ8Y29tXFwuYnJ8ZWNuXFwuYnJ8ZW5nXFwuYnJ8ZXNwXFwuYnJ8ZXRjXFwuYnJ8ZXRpXFwuYnJ8Zm1cXC5icnxmb3RcXC5icnxmc3RcXC5icnxnMTJcXC5icnxnb3ZcXC5icnxpbmRcXC5icnxpbmZcXC5icnxqb3JcXC5icnxsZWxcXC5icnxtZWRcXC5icnxtaWxcXC5icnxuZXRcXC5icnxub21cXC5icnxudHJcXC5icnxvZG9cXC5icnxvcmdcXC5icnxwcGdcXC5icnxwcm9cXC5icnxwc2NcXC5icnxwc2lcXC5icnxyZWNcXC5icnxzbGdcXC5icnx0bXBcXC5icnx0dXJcXC5icnx0dlxcLmJyfHZldFxcLmJyfHpsZ1xcLmJyfGJyfGFiXFwuY2F8YmNcXC5jYXxtYlxcLmNhfG5iXFwuY2F8bmZcXC5jYXxuc1xcLmNhfG50XFwuY2F8b25cXC5jYXxwZVxcLmNhfHFjXFwuY2F8c2tcXC5jYXx5a1xcLmNhfGNhfGNjfGFjXFwuY258Y29tXFwuY258ZWR1XFwuY258Z292XFwuY258b3JnXFwuY258YmpcXC5jbnxzaFxcLmNufHRqXFwuY258Y3FcXC5jbnxoZVxcLmNufG5tXFwuY258bG5cXC5jbnxqbFxcLmNufGhsXFwuY258anNcXC5jbnx6alxcLmNufGFoXFwuY258Z2RcXC5jbnxneFxcLmNufGhpXFwuY258c2NcXC5jbnxnelxcLmNufHluXFwuY258eHpcXC5jbnxzblxcLmNufGdzXFwuY258cWhcXC5jbnxueFxcLmNufHhqXFwuY258dHdcXC5jbnxoa1xcLmNufG1vXFwuY258Y258Y3h8Y3p8ZGV8ZGt8Zm98Y29tXFwuZWN8dG1cXC5mcnxjb21cXC5mcnxhc3NvXFwuZnJ8cHJlc3NlXFwuZnJ8ZnJ8Z2Z8Z3N8Y29cXC5pbHxuZXRcXC5pbHxhY1xcLmlsfGsxMlxcLmlsfGdvdlxcLmlsfG11bmlcXC5pbHxhY1xcLmlufGNvXFwuaW58b3JnXFwuaW58ZXJuZXRcXC5pbnxnb3ZcXC5pbnxuZXRcXC5pbnxyZXNcXC5pbnxpc3xpdHxhY1xcLmpwfGNvXFwuanB8Z29cXC5qcHxvclxcLmpwfG5lXFwuanB8YWNcXC5rcnxjb1xcLmtyfGdvXFwua3J8bmVcXC5rcnxubVxcLmtyfG9yXFwua3J8bGl8bHR8bHV8YXNzb1xcLm1jfHRtXFwubWN8Y29tXFwubW18b3JnXFwubW18bmV0XFwubW18ZWR1XFwubW18Z292XFwubW18bXN8bmx8bm98bnV8cGx8cm98b3JnXFwucm98c3RvcmVcXC5yb3x0bVxcLnJvfGZpcm1cXC5yb3x3d3dcXC5yb3xhcnRzXFwucm98cmVjXFwucm98aW5mb1xcLnJvfG5vbVxcLnJvfG50XFwucm98c2V8c2l8Y29tXFwuc2d8b3JnXFwuc2d8bmV0XFwuc2d8Z292XFwuc2d8c2t8c3R8dGZ8YWNcXC50aHxjb1xcLnRofGdvXFwudGh8bWlcXC50aHxuZXRcXC50aHxvclxcLnRofHRtfHRvfGNvbVxcLnRyfGVkdVxcLnRyfGdvdlxcLnRyfGsxMlxcLnRyfG5ldFxcLnRyfG9yZ1xcLnRyfGNvbVxcLnR3fG9yZ1xcLnR3fG5ldFxcLnR3fGFjXFwudWt8dWtcXC5jb218dWtcXC5uZXR8Z2JcXC5jb218Z2JcXC5uZXR8dmd8c2h8a3p8Y2h8aW5mb3x1YXxnb3Z8bmFtZXxwcm98aWV8aGt8Y29tXFwuaGt8b3JnXFwuaGt8bmV0XFwuaGt8ZWR1XFwuaGt8dXN8dGt8Y2R8Ynl8YWR8bHZ8ZXVcXC5sdnxienxlc3xqcHxjbHxhZ3xtb2JpfGV1fGNvXFwubnp8b3JnXFwubnp8bmV0XFwubnp8bWFvcmlcXC5uenxpd2lcXC5uenxpb3xsYXxtZHxzY3xzZ3x2Y3x0d3x0cmF2ZWx8bXl8c2V8dHZ8cHR8Y29tXFwucHR8ZWR1XFwucHR8YXNpYXxmaXxjb21cXC52ZXxuZXRcXC52ZXxmaXxvcmdcXC52ZXx3ZWJcXC52ZXxpbmZvXFwudmV8Y29cXC52ZXx0ZWx8aW18Z3J8cnV8bmV0XFwucnV8b3JnXFwucnV8aHJ8Y29tXFwuaHJ8bHl8eHl6KSQvKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBfZChzKSB7XHJcbiAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocy5yZXBsYWNlKC9cXCsvZywgJyAnKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gX2koYXJnLCBzdHIpIHtcclxuICAgICAgICB2YXIgc3B0ciA9IGFyZy5jaGFyQXQoMCksXHJcbiAgICAgICAgICAgIHNwbGl0ID0gc3RyLnNwbGl0KHNwdHIpO1xyXG5cclxuICAgICAgICBpZiAoc3B0ciA9PT0gYXJnKSB7IHJldHVybiBzcGxpdDsgfVxyXG5cclxuICAgICAgICBhcmcgPSBwYXJzZUludChhcmcuc3Vic3RyaW5nKDEpLCAxMCk7XHJcblxyXG4gICAgICAgIHJldHVybiBzcGxpdFthcmcgPCAwID8gc3BsaXQubGVuZ3RoICsgYXJnIDogYXJnIC0gMV07XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gX2YoYXJnLCBzdHIpIHtcclxuICAgICAgICB2YXIgc3B0ciA9IGFyZy5jaGFyQXQoMCksXHJcbiAgICAgICAgICAgIHNwbGl0ID0gc3RyLnNwbGl0KCcmJyksXHJcbiAgICAgICAgICAgIGZpZWxkID0gW10sXHJcbiAgICAgICAgICAgIHBhcmFtcyA9IHt9LFxyXG4gICAgICAgICAgICB0bXAgPSBbXSxcclxuICAgICAgICAgICAgYXJnMiA9IGFyZy5zdWJzdHJpbmcoMSk7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgaW4gc3BsaXQpIHtcclxuICAgICAgICAgICAgZmllbGQgPSBzcGxpdFtpXS5zcGxpdCgvPSguKikvKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChmaWVsZFswXS5yZXBsYWNlKC9cXHMvZywgJycpICE9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgZmllbGRbMV0gPSBfZChmaWVsZFsxXSB8fCAnJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gSWYgd2UgaGF2ZSBhIG1hdGNoIGp1c3QgcmV0dXJuIGl0IHJpZ2h0IGF3YXkuXHJcbiAgICAgICAgICAgICAgICBpZiAoYXJnMiA9PT0gZmllbGRbMF0pIHsgcmV0dXJuIGZpZWxkWzFdOyB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgZm9yIGFycmF5IHBhdHRlcm4uXHJcbiAgICAgICAgICAgICAgICB0bXAgPSBmaWVsZFswXS5tYXRjaCgvKC4qKVxcWyhbMC05XSspXFxdLyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRtcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtc1t0bXBbMV1dID0gcGFyYW1zW3RtcFsxXV0gfHwgW107XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbXNbdG1wWzFdXVt0bXBbMl1dID0gZmllbGRbMV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbXNbZmllbGRbMF1dID0gZmllbGRbMV07ICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc3B0ciA9PT0gYXJnKSB7IHJldHVybiBwYXJhbXM7IH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHBhcmFtc1thcmcyXTtcclxuICAgIH1cclxuXHJcbiAgICAvL3JldHVybiBmdW5jdGlvbihhcmcsIHVybCkge1xyXG4gICAgdmFyIF9sID0ge30sIHRtcCwgdG1wMjtcclxuXHJcbiAgICBpZiAoYXJnID09PSAndGxkPycpIHsgcmV0dXJuIF90KCk7IH1cclxuXHJcbiAgICB1cmwgPSB1cmwgfHwgd2luZG93LmxvY2F0aW9uLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgaWYgKCAhIGFyZykgeyByZXR1cm4gdXJsOyB9XHJcblxyXG4gICAgYXJnID0gYXJnLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgaWYgKHVybC5tYXRjaCgvXm1haWx0bzpbXlxcL10vKSkge1xyXG4gICAgICAgIF9sLnByb3RvY29sID0gJ21haWx0byc7XHJcbiAgICAgICAgX2wuZW1haWwgPSB1cmwuc3BsaXQoL21haWx0b1xcOi8pWzFdO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcblxyXG4gICAgICAgIC8vIEFuY2hvci5cclxuICAgICAgICB0bXAgPSB1cmwuc3BsaXQoLyMoLiopLyk7XHJcbiAgICAgICAgX2wuaGFzaCA9IHRtcFsxXSA/IHRtcFsxXSA6IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgLy8gUmV0dXJuIGFuY2hvciBwYXJ0cy5cclxuICAgICAgICBpZiAoX2wuaGFzaCAmJiBhcmcubWF0Y2goL14jLykpIHsgcmV0dXJuIF9mKGFyZywgX2wuaGFzaCk7IH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBRdWVyeVxyXG4gICAgICAgIHRtcCA9IHRtcFswXS5zcGxpdCgvXFw/KC4qKS8pO1xyXG4gICAgICAgIF9sLnF1ZXJ5ID0gdG1wWzFdID8gdG1wWzFdIDogdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICAvLyBSZXR1cm4gcXVlcnkgcGFydHMuXHJcbiAgICAgICAgaWYgKF9sLnF1ZXJ5ICYmIGFyZy5tYXRjaCgvXlxcPy8pKSB7IHJldHVybiBfZihhcmcsIF9sLnF1ZXJ5KTsgfVxyXG5cclxuICAgICAgICAvLyBQcm90b2NvbC5cclxuICAgICAgICB0bXAgPSB0bXBbMF0uc3BsaXQoL1xcOj9cXC9cXC8vKTtcclxuICAgICAgICBfbC5wcm90b2NvbCA9IHRtcFsxXSA/IHRtcFswXS50b0xvd2VyQ2FzZSgpIDogdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICAvLyBQYXRoLlxyXG4gICAgICAgIHRtcCA9ICh0bXBbMV0gPyB0bXBbMV0gOiB0bXBbMF0pLnNwbGl0KC8oXFwvLiopLyk7XHJcbiAgICAgICAgX2wucGF0aCA9IHRtcFsxXSA/IHRtcFsxXSA6ICcnO1xyXG5cclxuICAgICAgICAvLyBDbGVhbiB1cCBwYXRoLlxyXG4gICAgICAgIF9sLnBhdGggPSBfbC5wYXRoLnJlcGxhY2UoL14oW15cXC9dKS8sICcvJDEnKS5yZXBsYWNlKC9cXC8kLywgJycpO1xyXG5cclxuICAgICAgICAvLyBSZXR1cm4gcGF0aCBwYXJ0cy5cclxuICAgICAgICBpZiAoYXJnLm1hdGNoKC9eW1xcLTAtOV0rJC8pKSB7IGFyZyA9IGFyZy5yZXBsYWNlKC9eKFteXFwvXSkvLCAnLyQxJyk7IH1cclxuICAgICAgICBpZiAoYXJnLm1hdGNoKC9eXFwvLykpIHsgcmV0dXJuIF9pKGFyZywgX2wucGF0aC5zdWJzdHJpbmcoMSkpOyB9XHJcblxyXG4gICAgICAgIC8vIEZpbGUuXHJcbiAgICAgICAgdG1wMiA9IF9pKCcvLTEnLCBfbC5wYXRoLnN1YnN0cmluZygxKSk7XHJcbiAgICAgICAgdG1wMiA9IHRtcDIuc3BsaXQoL1xcLiguKikvKTtcclxuXHJcbiAgICAgICAgLy8gRmlsZW5hbWUgYW5kIGZpbGVleHQuXHJcbiAgICAgICAgaWYgKHRtcDJbMV0pIHtcclxuICAgICAgICAgICAgX2wuZmlsZSA9IHRtcDJbMF0gKyAnLicgKyB0bXAyWzFdO1xyXG4gICAgICAgICAgICBfbC5maWxlbmFtZSA9IHRtcDJbMF07XHJcbiAgICAgICAgICAgIF9sLmZpbGVleHQgPSB0bXAyWzFdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gUG9ydC5cclxuICAgICAgICB0bXAgPSB0bXBbMF0uc3BsaXQoL1xcOihbMC05XSspJC8pO1xyXG4gICAgICAgIF9sLnBvcnQgPSB0bXBbMV0gPyB0bXBbMV0gOiB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIC8vIEF1dGguXHJcbiAgICAgICAgdG1wID0gdG1wWzBdLnNwbGl0KC9ALyk7XHJcbiAgICAgICAgX2wuYXV0aCA9IHRtcFsxXSA/IHRtcFswXSA6IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgLy8gVXNlciBhbmQgcGFzcy5cclxuICAgICAgICBpZiAoX2wuYXV0aCkge1xyXG4gICAgICAgICAgICB0bXAyID0gX2wuYXV0aC5zcGxpdCgvXFw6KC4qKS8pO1xyXG4gICAgICAgICAgICBfbC51c2VyID0gdG1wMlswXTtcclxuICAgICAgICAgICAgX2wucGFzcyA9IHRtcDJbMV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBIb3N0bmFtZS5cclxuICAgICAgICBfbC5ob3N0bmFtZSA9ICh0bXBbMV0gPyB0bXBbMV0gOiB0bXBbMF0pLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgICAgIC8vIFJldHVybiBob3N0bmFtZSBwYXJ0cy5cclxuICAgICAgICBpZiAoYXJnLmNoYXJBdCgwKSA9PT0gJy4nKSB7IHJldHVybiBfaShhcmcsIF9sLmhvc3RuYW1lKTsgfVxyXG5cclxuICAgICAgICAvLyBEb21haW4sIHRsZCBhbmQgc3ViIGRvbWFpbi5cclxuICAgICAgICBpZiAoX3QoKSkge1xyXG4gICAgICAgICAgICB0bXAgPSBfbC5ob3N0bmFtZS5tYXRjaChfdCgpKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0bXApIHtcclxuICAgICAgICAgICAgICAgIF9sLnRsZCA9IHRtcFszXTtcclxuICAgICAgICAgICAgICAgIF9sLmRvbWFpbiA9IHRtcFsyXSA/IHRtcFsyXSArICcuJyArIHRtcFszXSA6IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIF9sLnN1YiA9IHRtcFsxXSB8fCB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFNldCBwb3J0IGFuZCBwcm90b2NvbCBkZWZhdWx0cyBpZiBub3Qgc2V0LlxyXG4gICAgICAgIF9sLnBvcnQgPSBfbC5wb3J0IHx8IChfbC5wcm90b2NvbCA9PT0gJ2h0dHBzJyA/ICc0NDMnIDogJzgwJyk7XHJcbiAgICAgICAgX2wucHJvdG9jb2wgPSBfbC5wcm90b2NvbCB8fCAoX2wucG9ydCA9PT0gJzQ0MycgPyAnaHR0cHMnIDogJ2h0dHAnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gYXJnLlxyXG4gICAgaWYgKGFyZyBpbiBfbCkgeyByZXR1cm4gX2xbYXJnXTsgfVxyXG5cclxuICAgIC8vIFJldHVybiBldmVyeXRoaW5nLlxyXG4gICAgaWYgKGFyZyA9PT0gJ3t9JykgeyByZXR1cm4gX2w7IH1cclxuXHJcbiAgICAvLyBEZWZhdWx0IHRvIHVuZGVmaW5lZCBmb3Igbm8gbWF0Y2guXHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgXHJcblxyXG5cclxuXHJcbiAgICAvKmZ1bmN0aW9uIGlzTnVtZXJpYyhhcmcpIHtcclxuICAgICAgcmV0dXJuICFpc05hTihwYXJzZUZsb2F0KGFyZykpICYmIGlzRmluaXRlKGFyZyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGVjb2RlKHN0cikge1xyXG4gICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHN0ci5yZXBsYWNlKC9cXCsvZywgJyAnKSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHZhciBfbHMgPSB1cmw7XHJcblxyXG4gICAgaWYgKCF1cmwpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfVxyXG4gICAgZWxzZSBpZiAoIWFyZykgeyByZXR1cm4gX2xzOyB9XHJcbiAgICBlbHNlIHsgYXJnID0gYXJnLnRvU3RyaW5nKCk7IH1cclxuXHJcbiAgICBpZiAoX2xzLnN1YnN0cmluZygwLDIpID09PSAnLy8nKSB7IF9scyA9ICdodHRwOicgKyBfbHM7IH1cclxuICAgICAgICBlbHNlIGlmIChfbHMuc3BsaXQoJzovLycpLmxlbmd0aCA9PT0gMSkgeyBfbHMgPSAnaHR0cDovLycgKyBfbHM7IH1cclxuXHJcbiAgICAgICAgdXJsID0gX2xzLnNwbGl0KCcvJyk7XHJcbiAgICAgICAgdmFyIF9sID0ge2F1dGg6Jyd9LCBob3N0ID0gdXJsWzJdLnNwbGl0KCdAJyk7XHJcblxyXG4gICAgICAgIGlmIChob3N0Lmxlbmd0aCA9PT0gMSkgeyBob3N0ID0gaG9zdFswXS5zcGxpdCgnOicpOyB9XHJcbiAgICAgICAgZWxzZSB7IF9sLmF1dGggPSBob3N0WzBdOyBob3N0ID0gaG9zdFsxXS5zcGxpdCgnOicpOyB9XHJcblxyXG4gICAgICAgIF9sLnByb3RvY29sPXVybFswXTtcclxuICAgICAgICBfbC5ob3N0bmFtZT1ob3N0WzBdO1xyXG4gICAgICAgIF9sLnBvcnQ9KGhvc3RbMV0gfHwgKChfbC5wcm90b2NvbC5zcGxpdCgnOicpWzBdLnRvTG93ZXJDYXNlKCkgPT09ICdodHRwcycpID8gJzQ0MycgOiAnODAnKSk7XHJcbiAgICAgICAgX2wucGF0aG5hbWU9KCAodXJsLmxlbmd0aCA+IDMgPyAnLycgOiAnJykgKyB1cmwuc2xpY2UoMywgdXJsLmxlbmd0aCkuam9pbignLycpLnNwbGl0KCc/JylbMF0uc3BsaXQoJyMnKVswXSk7XHJcbiAgICAgICAgdmFyIF9wID0gX2wucGF0aG5hbWU7XHJcblxyXG4gICAgICAgIGlmIChfcC5jaGFyQXQoX3AubGVuZ3RoLTEpID09PSAnLycpIHsgX3A9X3Auc3Vic3RyaW5nKDAsIF9wLmxlbmd0aC0xKTsgfVxyXG4gICAgICAgIHZhciBfaCA9IF9sLmhvc3RuYW1lLCBfaHMgPSBfaC5zcGxpdCgnLicpLCBfcHMgPSBfcC5zcGxpdCgnLycpO1xyXG5cclxuICAgICAgICBpZiAoYXJnID09PSAnaG9zdG5hbWUnKSB7IHJldHVybiBfaDsgfVxyXG4gICAgICAgIGVsc2UgaWYgKGFyZyA9PT0gJ2RvbWFpbicpIHtcclxuICAgICAgICAgICAgaWYgKC9eKChbMC05XXxbMS05XVswLTldfDFbMC05XXsyfXwyWzAtNF1bMC05XXwyNVswLTVdKVxcLil7M30oWzAtOV18WzEtOV1bMC05XXwxWzAtOV17Mn18MlswLTRdWzAtOV18MjVbMC01XSkkLy50ZXN0KF9oKSkgeyByZXR1cm4gX2g7IH1cclxuICAgICAgICAgICAgcmV0dXJuIF9ocy5zbGljZSgtMikuam9pbignLicpOyBcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9lbHNlIGlmIChhcmcgPT09ICd0bGQnKSB7IHJldHVybiBfaHMuc2xpY2UoLTEpLmpvaW4oJy4nKTsgfVxyXG4gICAgICAgIGVsc2UgaWYgKGFyZyA9PT0gJ3N1YicpIHsgcmV0dXJuIF9ocy5zbGljZSgwLCBfaHMubGVuZ3RoIC0gMikuam9pbignLicpOyB9XHJcbiAgICAgICAgZWxzZSBpZiAoYXJnID09PSAncG9ydCcpIHsgcmV0dXJuIF9sLnBvcnQ7IH1cclxuICAgICAgICBlbHNlIGlmIChhcmcgPT09ICdwcm90b2NvbCcpIHsgcmV0dXJuIF9sLnByb3RvY29sLnNwbGl0KCc6JylbMF07IH1cclxuICAgICAgICBlbHNlIGlmIChhcmcgPT09ICdhdXRoJykgeyByZXR1cm4gX2wuYXV0aDsgfVxyXG4gICAgICAgIGVsc2UgaWYgKGFyZyA9PT0gJ3VzZXInKSB7IHJldHVybiBfbC5hdXRoLnNwbGl0KCc6JylbMF07IH1cclxuICAgICAgICBlbHNlIGlmIChhcmcgPT09ICdwYXNzJykgeyByZXR1cm4gX2wuYXV0aC5zcGxpdCgnOicpWzFdIHx8ICcnOyB9XHJcbiAgICAgICAgZWxzZSBpZiAoYXJnID09PSAncGF0aCcpIHsgcmV0dXJuIF9sLnBhdGhuYW1lOyB9XHJcbiAgICAgICAgZWxzZSBpZiAoYXJnLmNoYXJBdCgwKSA9PT0gJy4nKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYXJnID0gYXJnLnN1YnN0cmluZygxKTtcclxuICAgICAgICAgICAgaWYoaXNOdW1lcmljKGFyZykpIHthcmcgPSBwYXJzZUludChhcmcsIDEwKTsgcmV0dXJuIF9oc1thcmcgPCAwID8gX2hzLmxlbmd0aCArIGFyZyA6IGFyZy0xXSB8fCAnJzsgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpc051bWVyaWMoYXJnKSkgeyBhcmcgPSBwYXJzZUludChhcmcsIDEwKTsgcmV0dXJuIF9wc1thcmcgPCAwID8gX3BzLmxlbmd0aCArIGFyZyA6IGFyZ10gfHwgJyc7IH1cclxuICAgICAgICBlbHNlIGlmIChhcmcgPT09ICdmaWxlJykgeyByZXR1cm4gX3BzLnNsaWNlKC0xKVswXTsgfVxyXG4gICAgICAgIGVsc2UgaWYgKGFyZyA9PT0gJ2ZpbGVuYW1lJykgeyByZXR1cm4gX3BzLnNsaWNlKC0xKVswXS5zcGxpdCgnLicpWzBdOyB9XHJcbiAgICAgICAgZWxzZSBpZiAoYXJnID09PSAnZmlsZWV4dCcpIHsgcmV0dXJuIF9wcy5zbGljZSgtMSlbMF0uc3BsaXQoJy4nKVsxXSB8fCAnJzsgfVxyXG4gICAgICAgIGVsc2UgaWYgKGFyZy5jaGFyQXQoMCkgPT09ICc/JyB8fCBhcmcuY2hhckF0KDApID09PSAnIycpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgcGFyYW1zID0gX2xzLCBwYXJhbSA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICBpZihhcmcuY2hhckF0KDApID09PSAnPycpIHsgcGFyYW1zID0gKHBhcmFtcy5zcGxpdCgnPycpWzFdIHx8ICcnKS5zcGxpdCgnIycpWzBdOyB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoYXJnLmNoYXJBdCgwKSA9PT0gJyMnKSB7IHBhcmFtcyA9IChwYXJhbXMuc3BsaXQoJyMnKVsxXSB8fCAnJyk7IH1cclxuXHJcbiAgICAgICAgICAgIGlmKCFhcmcuY2hhckF0KDEpKSB7IHJldHVybiAocGFyYW1zID8gZGVjb2RlKHBhcmFtcykgOiBwYXJhbXMpOyB9XHJcblxyXG4gICAgICAgICAgICBhcmcgPSBhcmcuc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgICAgICBwYXJhbXMgPSBwYXJhbXMuc3BsaXQoJyYnKTtcclxuXHJcbiAgICAgICAgICAgIGZvcih2YXIgaT0wLGlpPXBhcmFtcy5sZW5ndGg7IGk8aWk7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGFyYW0gPSBwYXJhbXNbaV0uc3BsaXQoLyguKj8pPSguKikvKS5maWx0ZXIoQm9vbGVhbik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYocGFyYW1bMF0gPT09IGFyZykgeyByZXR1cm4gKHBhcmFtWzFdID8gZGVjb2RlKHBhcmFtWzFdKSA6IHBhcmFtWzFdKSB8fCAnJzsgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgcmV0dXJuICcnOyovXHJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vd3VybC93dXJsLmpzXG4gKiogbW9kdWxlIGlkID0gMzM0XG4gKiogbW9kdWxlIGNodW5rcyA9IDJcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9