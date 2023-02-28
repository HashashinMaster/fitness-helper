"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/showprograms"],{

/***/ "./resources/js/showprograms.js":
/*!**************************************!*\
  !*** ./resources/js/showprograms.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

function popUp(path) {
  return "<div id=\"popup\">\n    <form method=\"post\" action=\"".concat(path, "\">\n    <input type=\"hidden\" name=\"_method\" value=\"PUT\">\n    <label> Give your program a name:\n    <input id=\"change-name\" name=\"programName\" type=\"text\" placeholder = \"Type here...\"/>\n    <input type=\"button\" id=\"save\" value=\"Save\" />\n    <button type=\"button\" id='cancel'> Cancel</button>\n    <input type=\"hidden\" name=\"_token\" value=\"").concat(jquery__WEBPACK_IMPORTED_MODULE_0___default()('meta[name="csrf-token"]').attr('content'), "\" />\n    </form>\n    </div>");
}
jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-url]').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').append(popUp(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('data-url')));
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#save').on('click', function () {
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('#change-name').val().length < 4) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#change-name').attr('aria-invalid', true);
        return;
      }
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('form').trigger('submit');
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#change-name').on('input', function () {
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('aria-invalid') === 'true') jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('aria-invalid', '');
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#cancel').on('click', function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().parent().parent().remove();
    });
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["js/vendor"], () => (__webpack_exec__("./resources/js/showprograms.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);