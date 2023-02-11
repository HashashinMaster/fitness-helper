"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/add"],{

/***/ "./resources/js/add.js":
/*!*****************************!*\
  !*** ./resources/js/add.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

var data = {};
var pageIndex = 1;
var maxPages = 1;
jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#go-next').on('click', function () {
    if (pageIndex === 1) {
      weeks(this);
      return;
    }
    if (pageIndex <= maxPages) {
      if (validateAndCollectInfo()) {
        goNext(this);
      }
    } else if (validateAndCollectInfo()) alert('submiting form');
  });
});
function weeks(el) {
  if (parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()('input').val()) < 1 || !jquery__WEBPACK_IMPORTED_MODULE_0___default()('input').val()) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('input').attr('aria-invalid', true);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.inputs-container small').text('invalid weeks number').css('color', '#f60103');
    return;
  }
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('input').attr('aria-invalid', false);
  data.weeks = jquery__WEBPACK_IMPORTED_MODULE_0___default()('input').val();
  maxPages = maxPages * data.weeks;
  for (var i = 1; i <= maxPages; i++) data["week" + i] = {};
  goNext(el);
}
function formHTML(index) {
  return "\n    <div class=\"inputs-container next\" style=\"animation: enter 0.5s ease-out\">\n<h1> week ".concat(index - 1, "</h1>\n    <details open>\n        <summary>Monday</summary>\n        <div class=\" days-input-container\">\n        <div class=\"grid\">\n            <label>\n                Number of exercises   <mark>(Enter 0 to choose Rest for this day) </mark>\n                <input type=\"number\" placeholder=\"number of Exercise u wish to train this day\" >\n            </label>\n            <button class=\"confirm-exercises\">enter</button>\n            </div>\n            <div class=\"exercises-inputs-container\"></div>\n        </div>\n    </details>\n\n    <details>\n    <summary>Tuesday</summary>\n    <div class=\" days-input-container\">\n    <div class=\"grid\">\n        <label>\n            Number of exercises   <mark>(Enter 0 to choose Rest for this day) </mark>\n            <input type=\"number\" placeholder=\"number of Exercise u wish to train this day\" >\n        </label>\n        <button class=\"confirm-exercises\">enter</button>\n        </div>\n        <div class=\"exercises-inputs-container\"></div>\n    </div>\n    </details>\n\n    <details>\n    <summary>Wednesday</summary>\n    <div class=\" days-input-container\">\n    <div class=\"grid\">\n        <label>\n            Number of exercises   <mark>(Enter 0 to choose Rest for this day) </mark>\n            <input type=\"number\" placeholder=\"number of Exercise u wish to train this day\" >\n        </label>\n        <button class=\"confirm-exercises\">enter</button>\n        </div>\n        <div class=\"exercises-inputs-container\"></div>\n    </div>\n    </details>\n    \n    <details>\n    <summary>Thursday</summary>\n    <div class=\" days-input-container\">\n    <div class=\"grid\">\n    <label>\n    Number of exercises   <mark>(Enter 0 to choose Rest for this day) </mark>\n    <input type=\"number\" placeholder=\"number of Exercise u wish to train this day\" >\n    </label>\n    <button class=\"confirm-exercises\">enter</button>\n        </div>\n        <div class=\"exercises-inputs-container\"></div>\n    </div>\n    </details>\n    \n    \n    <details>\n    <summary>Friday</summary>\n    <div class=\" days-input-container\">\n    <div class=\"grid\">\n        <label>\n            Number of exercises   <mark>(Enter 0 to choose Rest for this day) </mark>\n            <input type=\"number\" placeholder=\"number of Exercise u wish to train this day\" >\n            </label>\n            <button class=\"confirm-exercises\">enter</button>\n            </div>\n            <div class=\"exercises-inputs-container\"></div>\n            </div>\n            </details>\n            \n            <details>\n            <summary>Saturday</summary>\n            <div class=\" days-input-container\">\n            <div class=\"grid\">\n            <label>\n            Number of exercises   <mark>(Enter 0 to choose Rest for this day) </mark>\n            <input type=\"number\" placeholder=\"number of Exercise u wish to train this day\" >\n            </label>\n            <button class=\"confirm-exercises\">enter</button>\n            </div>\n            <div class=\"exercises-inputs-container\"></div>\n            </div>\n    </details>\n    \n    <details>\n    <summary>Sunday</summary>\n    <div class=\" days-input-container\">\n    <div class=\"grid\">\n        <label>\n            Number of exercises   <mark>(Enter 0 to choose Rest for this day) </mark>\n            <input type=\"number\" placeholder=\"number of Exercise u wish to train this day\" >\n            </label>\n            <button class=\"confirm-exercises\">enter</button>\n            </div>\n            <div class=\"exercises-inputs-container\"></div>\n            </div>\n            </details>\n</div>\n");
}
function goNext(el) {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).parent().children('.inputs-container').on('animationend', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#form-container').css('width', '49rem');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().prepend(formHTML(pageIndex));
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.confirm-exercises').each(function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).on('click', generateExerciseInputs);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().find('input').on('input', function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).removeAttr('aria-invalid');
      });
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).remove();
  }).css('animation', 'leave 0.5s ease-out');
  pageIndex++;
}
function generateExerciseInputs() {
  var input = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().find('input');
  input.attr('aria-invalid', false);
  if (!(parseInt(input.val()) >= 0) || !input.val()) {
    input.attr('aria-invalid', true);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().parent().find('.exercises-inputs-container').html('');
    input.removeClass('added-inputs');
    return;
  }
  input.addClass('added-inputs');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().parent().find('.exercises-inputs-container').html('');
  if (parseInt(input.val()) > 0) {
    for (var i = 0; i < parseInt(input.val()); i++) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().parent().find('.exercises-inputs-container').append("\n                <div class=\"grid\">\n                        <select style=\"width:42%; margin:0;\">\n                        <option value=\"Hamstrings\">Hamstrings</option>\n                        <option value=\"Calves\" >Calves</option>\n                        <option value=\"Chest\">Chest</option>\n                        <option value=\"Back\">Back</option>\n                        <option value=\"Shoulders\">Shoulders</option>\n                        <option value=\"Triceps\">Triceps</option>\n                        <option value=\"Biceps\">Biceps</option>\n                        <option value=\"Forearms\">Forearms</option>\n                        <option value=\"Abs\">Abs</option>\n                        <option value=\"Trapezius\">Trapezius</option>\n                        <option value=\"Legs\">Legs</option>\n                        <option value=\"Quadriceps\">Quadriceps</option>\n                        <option value=\"Glutes\">Glutes</option>\n                        </select>\n                    \n                    <label>Exercsise Name\n                        <input type=\"text\" data-type=\"text\" placeholder=\"Arnold curls...\" />\n                    </label>\n                    <label>Exercsise Sets\n                        <input type=\"numbers\" data-type=\"number\" placeholder=\"3...\" />\n                    </label>\n                    <label> Repitions\n                        <input type=\"numbers\" data-type=\"number\" placeholder=\"12...\" />\n                    </label>\n                    <label> weight/kgs\n                        <input type=\"numbers\" data-type=\"number\" placeholder=\"20...\" />\n                    </label>\n                    <label> upload a video\n                        <input data-type=\"file\" type=\"file\"/>\n                    </label>\n                </div>\n                ");
    }
  } else {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().parent().find('.exercises-inputs-container').append("\n                <div class =\"grid forRest\"><label><input data-type=\"hidden\" type=\"hidden\" value=\"Rest\"></label></div>\n                <div class=\"rest\">\n                    <kbd>\n                        <strong>Rest: </strong>\n                        <s> No Training for Today </s>\n                    </kbd>\n                </div>\n                ");
  }
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().parent().find('.exercises-inputs-container grid label input').each(function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).on('input', function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('aria-invalid', true);
    });
  });
}
function validateAndCollectInfo() {
  var allGood = true;
  var exInputs = jquery__WEBPACK_IMPORTED_MODULE_0___default()('details .days-input-container > .grid > label input').toArray();
  for (var i = 0; i < exInputs.length; i++) {
    if (!(parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()(exInputs[i]).val()) >= 0) || !jquery__WEBPACK_IMPORTED_MODULE_0___default()(exInputs[i]).val() || !jquery__WEBPACK_IMPORTED_MODULE_0___default()(exInputs[i]).hasClass('added-inputs')) {
      allGood = false;
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(exInputs[i]).attr('aria-invalid', true);
    }
    //validate inputs
    var inputsArr = jquery__WEBPACK_IMPORTED_MODULE_0___default()(exInputs[i]).parent().parent().parent().children('.exercises-inputs-container').find('.grid').find('label input');
    inputsArr.each(function () {
      switch (true) {
        case jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("data-type") === "text" && jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val().length < 1:
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('aria-invalid', true);
          allGood = false;
          break;
        case jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("data-type") === "number" && (parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val()) <= 0 || isNaN(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val()) || !jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val()):
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('aria-invalid', true);
          allGood = false;
          break;
        case jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("data-type") === "file" && jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).prop('files').length < 1:
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('aria-invalid', true);
          allGood = false;
          break;
        case jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("data-type") === "hidden" && jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val().length < 1:
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('aria-invalid', true);
          allGood = false;
          break;
        default:
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('aria-invalid', false);
      }
    });
  }
  if (!allGood) return;
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('details .days-input-container > .grid > label input').each(function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('aria-invalid', false);
    var inputs = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().parent().parent().children('.exercises-inputs-container').find('.grid').find('label input');
    if (inputs.length > 1) {
      data['week' + (pageIndex - 1)][jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().parent().parent().parent().find('summary').text()] = [];
      for (var _i = 1; _i <= inputs.length / 5; _i++) {
        data['week' + (pageIndex - 1)][jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().parent().parent().parent().find('summary').text()].push({});
        data['week' + (pageIndex - 1)][jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().parent().parent().parent().find('summary').text()][_i - 1].muscle = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().parent().parent().find('.exercises-inputs-container').find('.grid').find('select').toArray()[_i - 1].value;
        for (var j = 4 * (_i - 1); j < 5 * _i; j++) {
          if (inputs.toArray()[j].type === "file") data['week' + (pageIndex - 1)][jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().parent().parent().parent().find('summary').text()][_i - 1]["media"] = inputs.toArray()[j].files[0];else data['week' + (pageIndex - 1)][jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().parent().parent().parent().find('summary').text()][_i - 1][jquery__WEBPACK_IMPORTED_MODULE_0___default()(inputs.toArray()[j]).parent().text()] = inputs.toArray()[j].value;
        }
      }
    } else if (inputs.val() === "Rest") {
      data['week' + (pageIndex - 1)][jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().parent().parent().parent().find('summary').text()] = 'Rest';
    }
  });
  return allGood;
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["js/vendor"], () => (__webpack_exec__("./resources/js/add.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);