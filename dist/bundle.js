/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/template/style.css":
/*!********************************!*\
  !*** ./src/template/style.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/template/Article.ts":
/*!*********************************!*\
  !*** ./src/template/Article.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Article = /** @class */ (function () {
    function Article(title, content, footer) {
        this.title = title;
        this.content = content;
        this.footer = footer;
    }
    Article.prototype.getTitle = function () {
        return this.title;
    };
    Article.prototype.getContent = function () {
        return this.content;
    };
    Article.prototype.getFooter = function () {
        return this.footer;
    };
    return Article;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Article);


/***/ }),

/***/ "./src/template/DisplayArticleTemplate.ts":
/*!************************************************!*\
  !*** ./src/template/DisplayArticleTemplate.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var DisplayArticleTemplate = /** @class */ (function () {
    function DisplayArticleTemplate(article) {
        var _this = this;
        this.displayHtml = function () {
            return "\n\t".concat(_this.titleHtml(), "\n\t").concat(_this.contentHtml(), "\n\t").concat(_this.footerHtml(), "\n\t");
        };
        this.article = article;
    }
    return DisplayArticleTemplate;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DisplayArticleTemplate);


/***/ }),

/***/ "./src/template/EditableDisplayArticle.ts":
/*!************************************************!*\
  !*** ./src/template/EditableDisplayArticle.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DisplayArticleTemplate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DisplayArticleTemplate */ "./src/template/DisplayArticleTemplate.ts");
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

var EditableDisplayArticle = /** @class */ (function (_super) {
    __extends(EditableDisplayArticle, _super);
    function EditableDisplayArticle(article) {
        return _super.call(this, article) || this;
    }
    EditableDisplayArticle.prototype.titleHtml = function () {
        return "<div><span>\uC81C\uBAA9</span><input value=\"".concat(this.article.getTitle(), "\" /></div>");
    };
    EditableDisplayArticle.prototype.contentHtml = function () {
        var item = this.article
            .getContent()
            .map(function (item) { return "<li><input value=\"".concat(item, "\"/></li>"); });
        return "<ul>".concat(item.join(""), "</ul>");
    };
    EditableDisplayArticle.prototype.footerHtml = function () {
        return "<div><span>\uAE00\uC4F4\uC774</span> <input value=\"".concat(this.article.getFooter(), "\" /></div>");
    };
    return EditableDisplayArticle;
}(_DisplayArticleTemplate__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditableDisplayArticle);


/***/ }),

/***/ "./src/template/SimpleDisplayArticle.ts":
/*!**********************************************!*\
  !*** ./src/template/SimpleDisplayArticle.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DisplayArticleTemplate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DisplayArticleTemplate */ "./src/template/DisplayArticleTemplate.ts");
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

var SimpleDisplayArticle = /** @class */ (function (_super) {
    __extends(SimpleDisplayArticle, _super);
    function SimpleDisplayArticle(article) {
        return _super.call(this, article) || this;
    }
    SimpleDisplayArticle.prototype.titleHtml = function () {
        return "<h1>".concat(this.article.getTitle(), "</h1>");
    };
    SimpleDisplayArticle.prototype.contentHtml = function () {
        var item = this.article.getContent().map(function (item) { return "<li>".concat(item, "</li>"); });
        return "<ul>".concat(item.join(""), "</ul>");
    };
    SimpleDisplayArticle.prototype.footerHtml = function () {
        return "<h3>".concat(this.article.getFooter(), "</h3>");
    };
    return SimpleDisplayArticle;
}(_DisplayArticleTemplate__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SimpleDisplayArticle);


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
/*!*******************************!*\
  !*** ./src/template/index.ts ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Article */ "./src/template/Article.ts");
/* harmony import */ var _EditableDisplayArticle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditableDisplayArticle */ "./src/template/EditableDisplayArticle.ts");
/* harmony import */ var _SimpleDisplayArticle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SimpleDisplayArticle */ "./src/template/SimpleDisplayArticle.ts");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/template/style.css");




var content = document.createElement("div");
content.classList.add("content");
var editModeCheckbox = document.createElement("input");
editModeCheckbox.classList.add("edit-mode");
editModeCheckbox.type = "checkbox";
var labelButton = document.createElement("label");
labelButton.innerText = "편집모드";
document.body.append(content);
document.body.append(editModeCheckbox);
document.body.append(labelButton);
var article = new _Article__WEBPACK_IMPORTED_MODULE_0__["default"]("통글코딩 코스", ["컴퓨터 활용기초", "design", "world wide web", "typescript", "backend"], "tongle coding");
var simpleDisplay = new _SimpleDisplayArticle__WEBPACK_IMPORTED_MODULE_2__["default"](article);
var editableDisplay = new _EditableDisplayArticle__WEBPACK_IMPORTED_MODULE_1__["default"](article);
content.innerHTML = simpleDisplay.displayHtml();
editModeCheckbox.addEventListener("change", function (event) {
    if (event.target.checked) {
        content.innerHTML = editableDisplay.displayHtml();
    }
    else {
        content.innerHTML = simpleDisplay.displayHtml();
    }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM7QUFDeEQsSUFBTSxlQUFlLEdBQUcsSUFBSSwrREFBc0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUU1RCxPQUFPLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUVoRCxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsVUFBQyxLQUFLO0lBQ2hELElBQXVCLEtBQUssQ0FBQyxNQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDN0MsT0FBTyxDQUFDLFNBQVMsR0FBRyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDcEQsQ0FBQztTQUFNLENBQUM7UUFDTixPQUFPLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNsRCxDQUFDO0FBQ0gsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXNpZ25wYXR0ZXJuLy4vc3JjL3RlbXBsYXRlL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9kZXNpZ25wYXR0ZXJuLy4vc3JjL3RlbXBsYXRlL0FydGljbGUudHMiLCJ3ZWJwYWNrOi8vZGVzaWducGF0dGVybi8uL3NyYy90ZW1wbGF0ZS9EaXNwbGF5QXJ0aWNsZVRlbXBsYXRlLnRzIiwid2VicGFjazovL2Rlc2lnbnBhdHRlcm4vLi9zcmMvdGVtcGxhdGUvRWRpdGFibGVEaXNwbGF5QXJ0aWNsZS50cyIsIndlYnBhY2s6Ly9kZXNpZ25wYXR0ZXJuLy4vc3JjL3RlbXBsYXRlL1NpbXBsZURpc3BsYXlBcnRpY2xlLnRzIiwid2VicGFjazovL2Rlc2lnbnBhdHRlcm4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZGVzaWducGF0dGVybi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZGVzaWducGF0dGVybi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Rlc2lnbnBhdHRlcm4vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9kZXNpZ25wYXR0ZXJuLy4vc3JjL3RlbXBsYXRlL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFydGljbGUge1xuICBwcml2YXRlIHRpdGxlOiBzdHJpbmc7XG4gIHByaXZhdGUgY29udGVudDogc3RyaW5nW107XG4gIHByaXZhdGUgZm9vdGVyOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IodGl0bGU6IHN0cmluZywgY29udGVudDogc3RyaW5nW10sIGZvb3Rlcjogc3RyaW5nKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgdGhpcy5mb290ZXIgPSBmb290ZXI7XG4gIH1cblxuICBwdWJsaWMgZ2V0VGl0bGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy50aXRsZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDb250ZW50KCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xuICB9XG5cbiAgcHVibGljIGdldEZvb3RlcigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmZvb3RlcjtcbiAgfVxufVxuIiwiaW1wb3J0IEFydGljbGUgZnJvbSBcIi4vQXJ0aWNsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBEaXNwbGF5QXJ0aWNsZVRlbXBsYXRlIHtcbiAgLy/stpTsg4HtgbTrnpjsiqTroZwgYWJzdHJhY3Trpbwg7J6F66Cl7ZWc64ukLlxuICBwcm90ZWN0ZWQgYXJ0aWNsZTogQXJ0aWNsZTsgLy/tjIzsg50g7YG0656Y7Iqk7JeQ7IScIGFydGljbGXsl5Ag7KCR6re87ZWY64+E66GdIHByb3RlY3RlZOuhnCDsp4DsoJXtlZzri6QuXG5cbiAgY29uc3RydWN0b3IoYXJ0aWNsZTogQXJ0aWNsZSkge1xuICAgIHRoaXMuYXJ0aWNsZSA9IGFydGljbGU7XG4gIH1cblxuICBwdWJsaWMgcmVhZG9ubHkgZGlzcGxheUh0bWwgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGBcblx0JHt0aGlzLnRpdGxlSHRtbCgpfVxuXHQke3RoaXMuY29udGVudEh0bWwoKX1cblx0JHt0aGlzLmZvb3Rlckh0bWwoKX1cblx0YDtcbiAgfTtcbiAgLy8g6rWs7ZiE7ZWY6rKMIO2VoCDstpTsg4HrqZTshJzrk5xcbiAgcHJvdGVjdGVkIGFic3RyYWN0IHRpdGxlSHRtbCgpOiBzdHJpbmc7XG4gIHByb3RlY3RlZCBhYnN0cmFjdCBjb250ZW50SHRtbCgpOiBzdHJpbmc7XG4gIHByb3RlY3RlZCBhYnN0cmFjdCBmb290ZXJIdG1sKCk6IHN0cmluZztcbn1cbiIsImltcG9ydCBBcnRpY2xlIGZyb20gXCIuL0FydGljbGVcIjtcbmltcG9ydCBEaXNwbGF5QXJ0aWNsZVRlbXBsYXRlIGZyb20gXCIuL0Rpc3BsYXlBcnRpY2xlVGVtcGxhdGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWRpdGFibGVEaXNwbGF5QXJ0aWNsZSBleHRlbmRzIERpc3BsYXlBcnRpY2xlVGVtcGxhdGUge1xuICBwcm90ZWN0ZWQgdGl0bGVIdG1sKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGA8ZGl2PjxzcGFuPuygnOuqqTwvc3Bhbj48aW5wdXQgdmFsdWU9XCIke3RoaXMuYXJ0aWNsZS5nZXRUaXRsZSgpfVwiIC8+PC9kaXY+YDtcbiAgfVxuICBwcm90ZWN0ZWQgY29udGVudEh0bWwoKTogc3RyaW5nIHtcbiAgICBjb25zdCBpdGVtID0gdGhpcy5hcnRpY2xlXG4gICAgICAuZ2V0Q29udGVudCgpXG4gICAgICAubWFwKChpdGVtKSA9PiBgPGxpPjxpbnB1dCB2YWx1ZT1cIiR7aXRlbX1cIi8+PC9saT5gKTtcbiAgICByZXR1cm4gYDx1bD4ke2l0ZW0uam9pbihcIlwiKX08L3VsPmA7XG4gIH1cbiAgcHJvdGVjdGVkIGZvb3Rlckh0bWwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYDxkaXY+PHNwYW4+6riA7JO07J20PC9zcGFuPiA8aW5wdXQgdmFsdWU9XCIke3RoaXMuYXJ0aWNsZS5nZXRGb290ZXIoKX1cIiAvPjwvZGl2PmA7XG4gIH1cbiAgY29uc3RydWN0b3IoYXJ0aWNsZTogQXJ0aWNsZSkge1xuICAgIHN1cGVyKGFydGljbGUpO1xuICB9XG59XG4iLCJpbXBvcnQgQXJ0aWNsZSBmcm9tIFwiLi9BcnRpY2xlXCI7XG5pbXBvcnQgRGlzcGxheUFydGljbGVUZW1wbGF0ZSBmcm9tIFwiLi9EaXNwbGF5QXJ0aWNsZVRlbXBsYXRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpbXBsZURpc3BsYXlBcnRpY2xlIGV4dGVuZHMgRGlzcGxheUFydGljbGVUZW1wbGF0ZSB7XG4gIHByb3RlY3RlZCB0aXRsZUh0bWwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYDxoMT4ke3RoaXMuYXJ0aWNsZS5nZXRUaXRsZSgpfTwvaDE+YDtcbiAgfVxuICBwcm90ZWN0ZWQgY29udGVudEh0bWwoKTogc3RyaW5nIHtcbiAgICBjb25zdCBpdGVtID0gdGhpcy5hcnRpY2xlLmdldENvbnRlbnQoKS5tYXAoKGl0ZW0pID0+IGA8bGk+JHtpdGVtfTwvbGk+YCk7XG4gICAgcmV0dXJuIGA8dWw+JHtpdGVtLmpvaW4oXCJcIil9PC91bD5gO1xuICB9XG4gIHByb3RlY3RlZCBmb290ZXJIdG1sKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGA8aDM+JHt0aGlzLmFydGljbGUuZ2V0Rm9vdGVyKCl9PC9oMz5gO1xuICB9XG5cbiAgY29uc3RydWN0b3IoYXJ0aWNsZTogQXJ0aWNsZSkge1xuICAgIHN1cGVyKGFydGljbGUpO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBBcnRpY2xlIGZyb20gXCIuL0FydGljbGVcIjtcbmltcG9ydCBFZGl0YWJsZURpc3BsYXlBcnRpY2xlIGZyb20gXCIuL0VkaXRhYmxlRGlzcGxheUFydGljbGVcIjtcbmltcG9ydCBTaW1wbGVEaXNwbGF5QXJ0aWNsZSBmcm9tIFwiLi9TaW1wbGVEaXNwbGF5QXJ0aWNsZVwiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50XCIpO1xuXG5jb25zdCBlZGl0TW9kZUNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuZWRpdE1vZGVDaGVja2JveC5jbGFzc0xpc3QuYWRkKFwiZWRpdC1tb2RlXCIpO1xuZWRpdE1vZGVDaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xuXG5jb25zdCBsYWJlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbmxhYmVsQnV0dG9uLmlubmVyVGV4dCA9IFwi7Y647KeR66qo65OcXCI7XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kKGNvbnRlbnQpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmQoZWRpdE1vZGVDaGVja2JveCk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZChsYWJlbEJ1dHRvbik7XG5cbmNvbnN0IGFydGljbGUgPSBuZXcgQXJ0aWNsZShcbiAgXCLthrXquIDsvZTrlKkg7L2U7IqkXCIsXG4gIFtcIuy7tO2TqO2EsCDtmZzsmqnquLDstIhcIiwgXCJkZXNpZ25cIiwgXCJ3b3JsZCB3aWRlIHdlYlwiLCBcInR5cGVzY3JpcHRcIiwgXCJiYWNrZW5kXCJdLFxuICBcInRvbmdsZSBjb2RpbmdcIlxuKTtcblxuY29uc3Qgc2ltcGxlRGlzcGxheSA9IG5ldyBTaW1wbGVEaXNwbGF5QXJ0aWNsZShhcnRpY2xlKTtcbmNvbnN0IGVkaXRhYmxlRGlzcGxheSA9IG5ldyBFZGl0YWJsZURpc3BsYXlBcnRpY2xlKGFydGljbGUpO1xuXG5jb250ZW50LmlubmVySFRNTCA9IHNpbXBsZURpc3BsYXkuZGlzcGxheUh0bWwoKTtcblxuZWRpdE1vZGVDaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChldmVudCkgPT4ge1xuICBpZiAoKDxIVE1MSW5wdXRFbGVtZW50PmV2ZW50LnRhcmdldCkuY2hlY2tlZCkge1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gZWRpdGFibGVEaXNwbGF5LmRpc3BsYXlIdG1sKCk7XG4gIH0gZWxzZSB7XG4gICAgY29udGVudC5pbm5lckhUTUwgPSBzaW1wbGVEaXNwbGF5LmRpc3BsYXlIdG1sKCk7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9