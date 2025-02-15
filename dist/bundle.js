/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/abstract-factory/style.css":
/*!****************************************!*\
  !*** ./src/abstract-factory/style.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/abstract-factory/body.ts":
/*!**************************************!*\
  !*** ./src/abstract-factory/body.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createBodyElement: () => (/* binding */ createBodyElement)
/* harmony export */ });
var createBodyElement = function () {
    document.body.innerHTML += "\n\t<div class=\"button\"></div>\n\t<div class=\"checkbox\"></div>\n\t<div class=\"textedit\"></div>\n\t";
};


/***/ }),

/***/ "./src/abstract-factory/models/3DUI/3DButton.ts":
/*!******************************************************!*\
  !*** ./src/abstract-factory/models/3DUI/3DButton.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _abstract_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract/Button */ "./src/abstract-factory/models/abstract/Button.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ThreeDButton = /** @class */ (function (_super) {
    __extends(ThreeDButton, _super);
    function ThreeDButton(dom, caption) {
        var _this = _super.call(this, dom, caption) || this;
        _this.render();
        return _this;
    }
    ThreeDButton.prototype.render = function () {
        this.dom.innerHTML = "\n\t".concat(this.caption, "\n\t<div></div>\n\t<div></div>\n\t");
        this.dom.classList.add("threeD-button");
    };
    return ThreeDButton;
}(_abstract_Button__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThreeDButton);


/***/ }),

/***/ "./src/abstract-factory/models/3DUI/3DCheckBox.ts":
/*!********************************************************!*\
  !*** ./src/abstract-factory/models/3DUI/3DCheckBox.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _abstract_CheckBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract/CheckBox */ "./src/abstract-factory/models/abstract/CheckBox.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ThreeDCheckBox = /** @class */ (function (_super) {
    __extends(ThreeDCheckBox, _super);
    function ThreeDCheckBox(dom, lable, checked) {
        var _this = _super.call(this, dom, lable, checked) || this;
        _this.render();
        return _this;
    }
    ThreeDCheckBox.prototype.render = function () {
        this.dom.innerHTML = "\n\t<label>".concat(this.label, "\n\t\t<input type=\"checkbox\" ").concat(this.checked ? "checked='checked'" : "", ">\n\t\t<div class=\"box\"></div>\n\t\t<div class=\"line\"></div>\n\t</label>\n\t");
        this.dom.classList.add("threeD-checkbox");
    };
    return ThreeDCheckBox;
}(_abstract_CheckBox__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThreeDCheckBox);


/***/ }),

/***/ "./src/abstract-factory/models/3DUI/3DTextEdit.ts":
/*!********************************************************!*\
  !*** ./src/abstract-factory/models/3DUI/3DTextEdit.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _abstract_TextEdit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract/TextEdit */ "./src/abstract-factory/models/abstract/TextEdit.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ThreeDTextEdit = /** @class */ (function (_super) {
    __extends(ThreeDTextEdit, _super);
    function ThreeDTextEdit(dom, text) {
        var _this = _super.call(this, dom, text) || this;
        _this.render();
        return _this;
    }
    ThreeDTextEdit.prototype.render = function () {
        this.dom.innerHTML = "\n\t<input value=\"".concat(this.text, "\">\n\t");
        this.dom.classList.add("threeD-input");
    };
    return ThreeDTextEdit;
}(_abstract_TextEdit__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThreeDTextEdit);


/***/ }),

/***/ "./src/abstract-factory/models/3DUIFactory.ts":
/*!****************************************************!*\
  !*** ./src/abstract-factory/models/3DUIFactory.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _3DUI_3DButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./3DUI/3DButton */ "./src/abstract-factory/models/3DUI/3DButton.ts");
/* harmony import */ var _3DUI_3DCheckBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./3DUI/3DCheckBox */ "./src/abstract-factory/models/3DUI/3DCheckBox.ts");
/* harmony import */ var _3DUI_3DTextEdit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./3DUI/3DTextEdit */ "./src/abstract-factory/models/3DUI/3DTextEdit.ts");
/* harmony import */ var _abstract_UIFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./abstract/UIFactory */ "./src/abstract-factory/models/abstract/UIFactory.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var ThreeDUIFactory = /** @class */ (function (_super) {
    __extends(ThreeDUIFactory, _super);
    function ThreeDUIFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ThreeDUIFactory.prototype.createButton = function (dom, caption) {
        return new _3DUI_3DButton__WEBPACK_IMPORTED_MODULE_0__["default"](dom, caption);
    };
    ThreeDUIFactory.prototype.createCheckBox = function (dom, label, checked) {
        return new _3DUI_3DCheckBox__WEBPACK_IMPORTED_MODULE_1__["default"](dom, label, checked);
    };
    ThreeDUIFactory.prototype.createTextEdit = function (dom, text) {
        return new _3DUI_3DTextEdit__WEBPACK_IMPORTED_MODULE_2__["default"](dom, text);
    };
    return ThreeDUIFactory;
}(_abstract_UIFactory__WEBPACK_IMPORTED_MODULE_3__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThreeDUIFactory);


/***/ }),

/***/ "./src/abstract-factory/models/FlatUI/FlatButton.ts":
/*!**********************************************************!*\
  !*** ./src/abstract-factory/models/FlatUI/FlatButton.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _abstract_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract/Button */ "./src/abstract-factory/models/abstract/Button.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var FlatButton = /** @class */ (function (_super) {
    __extends(FlatButton, _super);
    function FlatButton(dom, caption) {
        var _this = _super.call(this, dom, caption) || this;
        _this.render();
        return _this;
    }
    FlatButton.prototype.render = function () {
        this.dom.innerText = this.caption;
        this.dom.classList.add("flat-button");
    };
    return FlatButton;
}(_abstract_Button__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FlatButton);


/***/ }),

/***/ "./src/abstract-factory/models/FlatUI/FlatCheckBox.ts":
/*!************************************************************!*\
  !*** ./src/abstract-factory/models/FlatUI/FlatCheckBox.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlatCheckBox: () => (/* binding */ FlatCheckBox)
/* harmony export */ });
/* harmony import */ var _abstract_CheckBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract/CheckBox */ "./src/abstract-factory/models/abstract/CheckBox.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var FlatCheckBox = /** @class */ (function (_super) {
    __extends(FlatCheckBox, _super);
    function FlatCheckBox(dom, label, checked) {
        var _this = _super.call(this, dom, label, checked) || this;
        _this.render();
        return _this;
    }
    FlatCheckBox.prototype.render = function () {
        this.dom.innerHTML = "\n\t<label>".concat(this.label, "\n\t\t<input type=\"checkbox\" ").concat(this.checked ? "checked='checked'" : "", ">\n\t\t<span></span>\n\t</label>\n\t");
        this.dom.classList.add("flat-checkbox");
    };
    return FlatCheckBox;
}(_abstract_CheckBox__WEBPACK_IMPORTED_MODULE_0__["default"]));



/***/ }),

/***/ "./src/abstract-factory/models/FlatUI/FlatTextEdit.ts":
/*!************************************************************!*\
  !*** ./src/abstract-factory/models/FlatUI/FlatTextEdit.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _abstract_TextEdit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract/TextEdit */ "./src/abstract-factory/models/abstract/TextEdit.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var FlatTextEdit = /** @class */ (function (_super) {
    __extends(FlatTextEdit, _super);
    function FlatTextEdit(dom, text) {
        var _this = _super.call(this, dom, text) || this;
        _this.render();
        return _this;
    }
    FlatTextEdit.prototype.render = function () {
        this.dom.innerHTML = "\n\t<input value=\"".concat(this.text, "\">\n\t");
        this.dom.classList.add("flat-input");
    };
    return FlatTextEdit;
}(_abstract_TextEdit__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FlatTextEdit);


/***/ }),

/***/ "./src/abstract-factory/models/FlatUIFactory.ts":
/*!******************************************************!*\
  !*** ./src/abstract-factory/models/FlatUIFactory.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _abstract_UIFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract/UIFactory */ "./src/abstract-factory/models/abstract/UIFactory.ts");
/* harmony import */ var _FlatUI_FlatButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FlatUI/FlatButton */ "./src/abstract-factory/models/FlatUI/FlatButton.ts");
/* harmony import */ var _FlatUI_FlatCheckBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FlatUI/FlatCheckBox */ "./src/abstract-factory/models/FlatUI/FlatCheckBox.ts");
/* harmony import */ var _FlatUI_FlatTextEdit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FlatUI/FlatTextEdit */ "./src/abstract-factory/models/FlatUI/FlatTextEdit.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var FlatUIFactory = /** @class */ (function (_super) {
    __extends(FlatUIFactory, _super);
    function FlatUIFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FlatUIFactory.prototype.createButton = function (dom, caption) {
        return new _FlatUI_FlatButton__WEBPACK_IMPORTED_MODULE_1__["default"](dom, caption);
    };
    FlatUIFactory.prototype.createCheckBox = function (dom, label, checked) {
        return new _FlatUI_FlatCheckBox__WEBPACK_IMPORTED_MODULE_2__.FlatCheckBox(dom, label, checked);
    };
    FlatUIFactory.prototype.createTextEdit = function (dom, text) {
        return new _FlatUI_FlatTextEdit__WEBPACK_IMPORTED_MODULE_3__["default"](dom, text);
    };
    return FlatUIFactory;
}(_abstract_UIFactory__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FlatUIFactory);


/***/ }),

/***/ "./src/abstract-factory/models/abstract/Button.ts":
/*!********************************************************!*\
  !*** ./src/abstract-factory/models/abstract/Button.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Button = /** @class */ (function () {
    function Button(dom, caption) {
        this.dom = dom;
        this.caption = caption;
    }
    return Button;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ "./src/abstract-factory/models/abstract/CheckBox.ts":
/*!**********************************************************!*\
  !*** ./src/abstract-factory/models/abstract/CheckBox.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var CheckBox = /** @class */ (function () {
    function CheckBox(dom, label, checked) {
        this.dom = dom;
        this.label = label;
        this.checked = checked;
    }
    return CheckBox;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckBox);


/***/ }),

/***/ "./src/abstract-factory/models/abstract/TextEdit.ts":
/*!**********************************************************!*\
  !*** ./src/abstract-factory/models/abstract/TextEdit.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var TextEdit = /** @class */ (function () {
    function TextEdit(dom, text) {
        this.dom = dom;
        this.text = text;
    }
    return TextEdit;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextEdit);


/***/ }),

/***/ "./src/abstract-factory/models/abstract/UIFactory.ts":
/*!***********************************************************!*\
  !*** ./src/abstract-factory/models/abstract/UIFactory.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var UIFactory = /** @class */ (function () {
    function UIFactory() {
    }
    return UIFactory;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UIFactory);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************************!*\
  !*** ./src/abstract-factory/index.ts ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _body__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./body */ "./src/abstract-factory/body.ts");
/* harmony import */ var _models_3DUIFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/3DUIFactory */ "./src/abstract-factory/models/3DUIFactory.ts");
/* harmony import */ var _models_FlatUIFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/FlatUIFactory */ "./src/abstract-factory/models/FlatUIFactory.ts");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/abstract-factory/style.css");




var factory;
var isFlat = true;
if (isFlat) {
    factory = new _models_FlatUIFactory__WEBPACK_IMPORTED_MODULE_2__["default"]();
}
else {
    factory = new _models_3DUIFactory__WEBPACK_IMPORTED_MODULE_1__["default"]();
}
(0,_body__WEBPACK_IMPORTED_MODULE_0__.createBodyElement)();
var buttonElement = document.querySelector(".button");
var checkboxElement = document.querySelector(".checkbox");
var texteditElement = document.querySelector(".textedit");
factory.createButton(buttonElement, "BUTTON");
factory.createCheckBox(checkboxElement, "CHECKBOX", true);
factory.createTextEdit(texteditElement, "Design pattern");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLGFBQWEsQ0FBQyxXQUFXLENBQWdCLENBQUM7QUFFM0UsT0FBTyxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDOUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxlQUFlLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzFELE9BQU8sQ0FBQyxjQUFjLENBQUMsZUFBZSxFQUFFLGdCQUFnQixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXNpZ25wYXR0ZXJuLy4vc3JjL2Fic3RyYWN0LWZhY3Rvcnkvc3R5bGUuY3NzIiwid2VicGFjazovL2Rlc2lnbnBhdHRlcm4vLi9zcmMvYWJzdHJhY3QtZmFjdG9yeS9ib2R5LnRzIiwid2VicGFjazovL2Rlc2lnbnBhdHRlcm4vLi9zcmMvYWJzdHJhY3QtZmFjdG9yeS9tb2RlbHMvM0RVSS8zREJ1dHRvbi50cyIsIndlYnBhY2s6Ly9kZXNpZ25wYXR0ZXJuLy4vc3JjL2Fic3RyYWN0LWZhY3RvcnkvbW9kZWxzLzNEVUkvM0RDaGVja0JveC50cyIsIndlYnBhY2s6Ly9kZXNpZ25wYXR0ZXJuLy4vc3JjL2Fic3RyYWN0LWZhY3RvcnkvbW9kZWxzLzNEVUkvM0RUZXh0RWRpdC50cyIsIndlYnBhY2s6Ly9kZXNpZ25wYXR0ZXJuLy4vc3JjL2Fic3RyYWN0LWZhY3RvcnkvbW9kZWxzLzNEVUlGYWN0b3J5LnRzIiwid2VicGFjazovL2Rlc2lnbnBhdHRlcm4vLi9zcmMvYWJzdHJhY3QtZmFjdG9yeS9tb2RlbHMvRmxhdFVJL0ZsYXRCdXR0b24udHMiLCJ3ZWJwYWNrOi8vZGVzaWducGF0dGVybi8uL3NyYy9hYnN0cmFjdC1mYWN0b3J5L21vZGVscy9GbGF0VUkvRmxhdENoZWNrQm94LnRzIiwid2VicGFjazovL2Rlc2lnbnBhdHRlcm4vLi9zcmMvYWJzdHJhY3QtZmFjdG9yeS9tb2RlbHMvRmxhdFVJL0ZsYXRUZXh0RWRpdC50cyIsIndlYnBhY2s6Ly9kZXNpZ25wYXR0ZXJuLy4vc3JjL2Fic3RyYWN0LWZhY3RvcnkvbW9kZWxzL0ZsYXRVSUZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vZGVzaWducGF0dGVybi8uL3NyYy9hYnN0cmFjdC1mYWN0b3J5L21vZGVscy9hYnN0cmFjdC9CdXR0b24udHMiLCJ3ZWJwYWNrOi8vZGVzaWducGF0dGVybi8uL3NyYy9hYnN0cmFjdC1mYWN0b3J5L21vZGVscy9hYnN0cmFjdC9DaGVja0JveC50cyIsIndlYnBhY2s6Ly9kZXNpZ25wYXR0ZXJuLy4vc3JjL2Fic3RyYWN0LWZhY3RvcnkvbW9kZWxzL2Fic3RyYWN0L1RleHRFZGl0LnRzIiwid2VicGFjazovL2Rlc2lnbnBhdHRlcm4vLi9zcmMvYWJzdHJhY3QtZmFjdG9yeS9tb2RlbHMvYWJzdHJhY3QvVUlGYWN0b3J5LnRzIiwid2VicGFjazovL2Rlc2lnbnBhdHRlcm4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZGVzaWducGF0dGVybi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZGVzaWducGF0dGVybi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Rlc2lnbnBhdHRlcm4vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9kZXNpZ25wYXR0ZXJuLy4vc3JjL2Fic3RyYWN0LWZhY3RvcnkvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiZXhwb3J0IGNvbnN0IGNyZWF0ZUJvZHlFbGVtZW50ID0gKCkgPT4ge1xuICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCArPSBgXG5cdDxkaXYgY2xhc3M9XCJidXR0b25cIj48L2Rpdj5cblx0PGRpdiBjbGFzcz1cImNoZWNrYm94XCI+PC9kaXY+XG5cdDxkaXYgY2xhc3M9XCJ0ZXh0ZWRpdFwiPjwvZGl2PlxuXHRgO1xufTtcbiIsImltcG9ydCBCdXR0b24gZnJvbSBcIi4uL2Fic3RyYWN0L0J1dHRvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaHJlZURCdXR0b24gZXh0ZW5kcyBCdXR0b24ge1xuICBjb25zdHJ1Y3Rvcihkb206IEhUTUxFbGVtZW50LCBjYXB0aW9uOiBzdHJpbmcpIHtcbiAgICBzdXBlcihkb20sIGNhcHRpb24pO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cbiAgcmVuZGVyKCk6IHZvaWQge1xuICAgIHRoaXMuZG9tLmlubmVySFRNTCA9IGBcblx0JHt0aGlzLmNhcHRpb259XG5cdDxkaXY+PC9kaXY+XG5cdDxkaXY+PC9kaXY+XG5cdGA7XG4gICAgdGhpcy5kb20uY2xhc3NMaXN0LmFkZChcInRocmVlRC1idXR0b25cIik7XG4gIH1cbn1cbiIsImltcG9ydCBDaGVja0JveCBmcm9tIFwiLi4vYWJzdHJhY3QvQ2hlY2tCb3hcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGhyZWVEQ2hlY2tCb3ggZXh0ZW5kcyBDaGVja0JveCB7XG4gIGNvbnN0cnVjdG9yKGRvbTogSFRNTEVsZW1lbnQsIGxhYmxlOiBzdHJpbmcsIGNoZWNrZWQ6IGJvb2xlYW4pIHtcbiAgICBzdXBlcihkb20sIGxhYmxlLCBjaGVja2VkKTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG4gIHJlbmRlcigpOiB2b2lkIHtcbiAgICB0aGlzLmRvbS5pbm5lckhUTUwgPSBgXG5cdDxsYWJlbD4ke3RoaXMubGFiZWx9XG5cdFx0PGlucHV0IHR5cGU9XCJjaGVja2JveFwiICR7dGhpcy5jaGVja2VkID8gXCJjaGVja2VkPSdjaGVja2VkJ1wiIDogXCJcIn0+XG5cdFx0PGRpdiBjbGFzcz1cImJveFwiPjwvZGl2PlxuXHRcdDxkaXYgY2xhc3M9XCJsaW5lXCI+PC9kaXY+XG5cdDwvbGFiZWw+XG5cdGA7XG4gICAgdGhpcy5kb20uY2xhc3NMaXN0LmFkZChcInRocmVlRC1jaGVja2JveFwiKTtcbiAgfVxufVxuIiwiaW1wb3J0IFRleHRFZGl0IGZyb20gXCIuLi9hYnN0cmFjdC9UZXh0RWRpdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaHJlZURUZXh0RWRpdCBleHRlbmRzIFRleHRFZGl0IHtcbiAgY29uc3RydWN0b3IoZG9tOiBIVE1MRWxlbWVudCwgdGV4dDogc3RyaW5nKSB7XG4gICAgc3VwZXIoZG9tLCB0ZXh0KTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG4gIHJlbmRlcigpOiB2b2lkIHtcbiAgICB0aGlzLmRvbS5pbm5lckhUTUwgPSBgXG5cdDxpbnB1dCB2YWx1ZT1cIiR7dGhpcy50ZXh0fVwiPlxuXHRgO1xuICAgIHRoaXMuZG9tLmNsYXNzTGlzdC5hZGQoXCJ0aHJlZUQtaW5wdXRcIik7XG4gIH1cbn1cbiIsImltcG9ydCBUaHJlZURCdXR0b24gZnJvbSBcIi4vM0RVSS8zREJ1dHRvblwiO1xuaW1wb3J0IFRocmVlRENoZWNrQm94IGZyb20gXCIuLzNEVUkvM0RDaGVja0JveFwiO1xuaW1wb3J0IFRocmVlRFRleHRFZGl0IGZyb20gXCIuLzNEVUkvM0RUZXh0RWRpdFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9hYnN0cmFjdC9CdXR0b25cIjtcbmltcG9ydCBDaGVja0JveCBmcm9tIFwiLi9hYnN0cmFjdC9DaGVja0JveFwiO1xuaW1wb3J0IFRleHRFZGl0IGZyb20gXCIuL2Fic3RyYWN0L1RleHRFZGl0XCI7XG5pbXBvcnQgVUlGYWN0b3J5IGZyb20gXCIuL2Fic3RyYWN0L1VJRmFjdG9yeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaHJlZURVSUZhY3RvcnkgZXh0ZW5kcyBVSUZhY3Rvcnkge1xuICBjcmVhdGVCdXR0b24oZG9tOiBIVE1MRWxlbWVudCwgY2FwdGlvbjogc3RyaW5nKTogQnV0dG9uIHtcbiAgICByZXR1cm4gbmV3IFRocmVlREJ1dHRvbihkb20sIGNhcHRpb24pO1xuICB9XG4gIGNyZWF0ZUNoZWNrQm94KGRvbTogSFRNTEVsZW1lbnQsIGxhYmVsOiBzdHJpbmcsIGNoZWNrZWQ6IGJvb2xlYW4pOiBDaGVja0JveCB7XG4gICAgcmV0dXJuIG5ldyBUaHJlZURDaGVja0JveChkb20sIGxhYmVsLCBjaGVja2VkKTtcbiAgfVxuICBjcmVhdGVUZXh0RWRpdChkb206IEhUTUxFbGVtZW50LCB0ZXh0OiBzdHJpbmcpOiBUZXh0RWRpdCB7XG4gICAgcmV0dXJuIG5ldyBUaHJlZURUZXh0RWRpdChkb20sIHRleHQpO1xuICB9XG59XG4iLCJpbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9hYnN0cmFjdC9CdXR0b25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmxhdEJ1dHRvbiBleHRlbmRzIEJ1dHRvbiB7XG4gIGNvbnN0cnVjdG9yKGRvbTogSFRNTEVsZW1lbnQsIGNhcHRpb246IHN0cmluZykge1xuICAgIHN1cGVyKGRvbSwgY2FwdGlvbik7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuICByZW5kZXIoKTogdm9pZCB7XG4gICAgdGhpcy5kb20uaW5uZXJUZXh0ID0gdGhpcy5jYXB0aW9uO1xuICAgIHRoaXMuZG9tLmNsYXNzTGlzdC5hZGQoXCJmbGF0LWJ1dHRvblwiKTtcbiAgfVxufVxuIiwiaW1wb3J0IENoZWNrQm94IGZyb20gXCIuLi9hYnN0cmFjdC9DaGVja0JveFwiO1xuXG5leHBvcnQgY2xhc3MgRmxhdENoZWNrQm94IGV4dGVuZHMgQ2hlY2tCb3gge1xuICBjb25zdHJ1Y3Rvcihkb206IEhUTUxFbGVtZW50LCBsYWJlbDogc3RyaW5nLCBjaGVja2VkOiBib29sZWFuKSB7XG4gICAgc3VwZXIoZG9tLCBsYWJlbCwgY2hlY2tlZCk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuICByZW5kZXIoKTogdm9pZCB7XG4gICAgdGhpcy5kb20uaW5uZXJIVE1MID0gYFxuXHQ8bGFiZWw+JHt0aGlzLmxhYmVsfVxuXHRcdDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAke3RoaXMuY2hlY2tlZCA/IFwiY2hlY2tlZD0nY2hlY2tlZCdcIiA6IFwiXCJ9PlxuXHRcdDxzcGFuPjwvc3Bhbj5cblx0PC9sYWJlbD5cblx0YDtcbiAgICB0aGlzLmRvbS5jbGFzc0xpc3QuYWRkKFwiZmxhdC1jaGVja2JveFwiKTtcbiAgfVxufVxuIiwiaW1wb3J0IFRleHRFZGl0IGZyb20gXCIuLi9hYnN0cmFjdC9UZXh0RWRpdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGbGF0VGV4dEVkaXQgZXh0ZW5kcyBUZXh0RWRpdCB7XG4gIGNvbnN0cnVjdG9yKGRvbTogSFRNTEVsZW1lbnQsIHRleHQ6IHN0cmluZykge1xuICAgIHN1cGVyKGRvbSwgdGV4dCk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuICByZW5kZXIoKTogdm9pZCB7XG4gICAgdGhpcy5kb20uaW5uZXJIVE1MID0gYFxuXHQ8aW5wdXQgdmFsdWU9XCIke3RoaXMudGV4dH1cIj5cblx0YDtcbiAgICB0aGlzLmRvbS5jbGFzc0xpc3QuYWRkKFwiZmxhdC1pbnB1dFwiKTtcbiAgfVxufVxuIiwiaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9hYnN0cmFjdC9CdXR0b25cIjtcbmltcG9ydCBDaGVja0JveCBmcm9tIFwiLi9hYnN0cmFjdC9DaGVja0JveFwiO1xuaW1wb3J0IFRleHRFZGl0IGZyb20gXCIuL2Fic3RyYWN0L1RleHRFZGl0XCI7XG5pbXBvcnQgVUlGYWN0b3J5IGZyb20gXCIuL2Fic3RyYWN0L1VJRmFjdG9yeVwiO1xuaW1wb3J0IEZsYXRCdXR0b24gZnJvbSBcIi4vRmxhdFVJL0ZsYXRCdXR0b25cIjtcbmltcG9ydCB7IEZsYXRDaGVja0JveCB9IGZyb20gXCIuL0ZsYXRVSS9GbGF0Q2hlY2tCb3hcIjtcbmltcG9ydCBGbGF0VGV4dEVkaXQgZnJvbSBcIi4vRmxhdFVJL0ZsYXRUZXh0RWRpdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGbGF0VUlGYWN0b3J5IGV4dGVuZHMgVUlGYWN0b3J5IHtcbiAgY3JlYXRlQnV0dG9uKGRvbTogSFRNTEVsZW1lbnQsIGNhcHRpb246IHN0cmluZyk6IEJ1dHRvbiB7XG4gICAgcmV0dXJuIG5ldyBGbGF0QnV0dG9uKGRvbSwgY2FwdGlvbik7XG4gIH1cbiAgY3JlYXRlQ2hlY2tCb3goZG9tOiBIVE1MRWxlbWVudCwgbGFiZWw6IHN0cmluZywgY2hlY2tlZDogYm9vbGVhbik6IENoZWNrQm94IHtcbiAgICByZXR1cm4gbmV3IEZsYXRDaGVja0JveChkb20sIGxhYmVsLCBjaGVja2VkKTtcbiAgfVxuICBjcmVhdGVUZXh0RWRpdChkb206IEhUTUxFbGVtZW50LCB0ZXh0OiBzdHJpbmcpOiBUZXh0RWRpdCB7XG4gICAgcmV0dXJuIG5ldyBGbGF0VGV4dEVkaXQoZG9tLCB0ZXh0KTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQnV0dG9uIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGRvbTogSFRNTEVsZW1lbnQsIHByb3RlY3RlZCBjYXB0aW9uOiBzdHJpbmcpIHt9XG4gIGFic3RyYWN0IHJlbmRlcigpOiB2b2lkO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQ2hlY2tCb3gge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgZG9tOiBIVE1MRWxlbWVudCxcbiAgICBwcm90ZWN0ZWQgbGFiZWw6IHN0cmluZyxcbiAgICBwcm90ZWN0ZWQgY2hlY2tlZDogYm9vbGVhblxuICApIHt9XG4gIGFic3RyYWN0IHJlbmRlcigpOiB2b2lkO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgVGV4dEVkaXQge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZG9tOiBIVE1MRWxlbWVudCwgcHJvdGVjdGVkIHRleHQ6IHN0cmluZykge31cbiAgYWJzdHJhY3QgcmVuZGVyKCk6IHZvaWQ7XG59XG4iLCJpbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiO1xuaW1wb3J0IENoZWNrQm94IGZyb20gXCIuL0NoZWNrQm94XCI7XG5pbXBvcnQgVGV4dEVkaXQgZnJvbSBcIi4vVGV4dEVkaXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgVUlGYWN0b3J5IHtcbiAgYWJzdHJhY3QgY3JlYXRlQnV0dG9uKGRvbTogSFRNTEVsZW1lbnQsIGNhcHRpb246IHN0cmluZyk6IEJ1dHRvbjtcbiAgYWJzdHJhY3QgY3JlYXRlQ2hlY2tCb3goXG4gICAgZG9tOiBIVE1MRWxlbWVudCxcbiAgICBsYWJsZTogc3RyaW5nLFxuICAgIGNoZWNrZWQ6IGJvb2xlYW5cbiAgKTogQ2hlY2tCb3g7XG4gIGFic3RyYWN0IGNyZWF0ZVRleHRFZGl0KGRvbTogSFRNTEVsZW1lbnQsIHRleHQ6IHN0cmluZyk6IFRleHRFZGl0O1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBjcmVhdGVCb2R5RWxlbWVudCB9IGZyb20gXCIuL2JvZHlcIjtcbmltcG9ydCBUaHJlZURVSUZhY3RvcnkgZnJvbSBcIi4vbW9kZWxzLzNEVUlGYWN0b3J5XCI7XG5pbXBvcnQgVUlGYWN0b3J5IGZyb20gXCIuL21vZGVscy9hYnN0cmFjdC9VSUZhY3RvcnlcIjtcbmltcG9ydCBGbGF0VUlGYWN0b3J5IGZyb20gXCIuL21vZGVscy9GbGF0VUlGYWN0b3J5XCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5sZXQgZmFjdG9yeTogVUlGYWN0b3J5O1xuXG5jb25zdCBpc0ZsYXQgPSB0cnVlO1xuXG5pZiAoaXNGbGF0KSB7XG4gIGZhY3RvcnkgPSBuZXcgRmxhdFVJRmFjdG9yeSgpO1xufSBlbHNlIHtcbiAgZmFjdG9yeSA9IG5ldyBUaHJlZURVSUZhY3RvcnkoKTtcbn1cblxuY3JlYXRlQm9keUVsZW1lbnQoKTtcblxuY29uc3QgYnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uXCIpIGFzIEhUTUxFbGVtZW50O1xuY29uc3QgY2hlY2tib3hFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaGVja2JveFwiKSBhcyBIVE1MRWxlbWVudDtcbmNvbnN0IHRleHRlZGl0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGV4dGVkaXRcIikgYXMgSFRNTEVsZW1lbnQ7XG5cbmZhY3RvcnkuY3JlYXRlQnV0dG9uKGJ1dHRvbkVsZW1lbnQsIFwiQlVUVE9OXCIpO1xuZmFjdG9yeS5jcmVhdGVDaGVja0JveChjaGVja2JveEVsZW1lbnQsIFwiQ0hFQ0tCT1hcIiwgdHJ1ZSk7XG5mYWN0b3J5LmNyZWF0ZVRleHRFZGl0KHRleHRlZGl0RWxlbWVudCwgXCJEZXNpZ24gcGF0dGVyblwiKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==