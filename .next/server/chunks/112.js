exports.id = 112;
exports.ids = [112];
exports.modules = {

/***/ 9610:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const UserContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserContext);

/***/ }),

/***/ 4641:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ initTranslation),
/* harmony export */   "S": () => (/* binding */ loadTranslation)
/* harmony export */ });
/* harmony import */ var make_plural_plurals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1173);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([make_plural_plurals__WEBPACK_IMPORTED_MODULE_0__]);
make_plural_plurals__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

function initTranslation(i18n) {
  i18n.loadLocaleData({
    es: {
      plurals: make_plural_plurals__WEBPACK_IMPORTED_MODULE_0__.es
    },
    en: {
      plurals: make_plural_plurals__WEBPACK_IMPORTED_MODULE_0__.en
    },
    pseudo: {
      plurals: make_plural_plurals__WEBPACK_IMPORTED_MODULE_0__.es
    }
  });
}
async function loadTranslation(locale, isProduction = true) {
  let data;

  if (isProduction) {
    data = await __webpack_require__(148)(`./${locale}/messages`);
  } else {
    data = await __webpack_require__(6685)(`./${locale}/messages.po`);
  }

  return data.messages;
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 148:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./en/messages": [
		9679,
		679
	],
	"./es/messages": [
		9243,
		243
	],
	"./pseudo/messages": [
		6367,
		367
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__.t(id, 7 | 16);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 148;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 6685:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./en/messages.po": [
		8610,
		610
	],
	"./es/messages.po": [
		7274,
		274
	],
	"./pseudo/messages.po": [
		2735,
		735
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__.t(id, 7 | 16);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 6685;
module.exports = webpackAsyncContext;

/***/ })

};
;