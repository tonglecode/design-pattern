/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/factory/style.css":
/*!*******************************!*\
  !*** ./src/factory/style.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/factory/constants/ItemTypes.ts":
/*!********************************************!*\
  !*** ./src/factory/constants/ItemTypes.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemTypes: () => (/* binding */ ItemTypes)
/* harmony export */ });
var ItemTypes = {
    GUN: "Gun",
    POTION: "Potion",
    SHIELD: "Shield",
};


/***/ }),

/***/ "./src/factory/model/ItemFactory.ts":
/*!******************************************!*\
  !*** ./src/factory/model/ItemFactory.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_ItemTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/ItemTypes */ "./src/factory/constants/ItemTypes.ts");
/* harmony import */ var _abstract_Factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract/Factory */ "./src/factory/model/abstract/Factory.ts");
/* harmony import */ var _items_Gun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./items/Gun */ "./src/factory/model/items/Gun.ts");
/* harmony import */ var _items_Potion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./items/Potion */ "./src/factory/model/items/Potion.ts");
/* harmony import */ var _items_Shield__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./items/Shield */ "./src/factory/model/items/Shield.ts");
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





var ItemCount = /** @class */ (function () {
    function ItemCount(_maxCount) {
        this._maxCount = _maxCount;
        this._currentCount = 0;
    }
    Object.defineProperty(ItemCount.prototype, "maxCount", {
        get: function () {
            return this._maxCount;
        },
        enumerable: false,
        configurable: true
    });
    ItemCount.prototype.isCreatable = function () {
        return this._currentCount < this._maxCount;
    };
    ItemCount.prototype.increaseCount = function () {
        if (this.isCreatable)
            this._currentCount++;
    };
    return ItemCount;
}());
var ItemFactory = /** @class */ (function (_super) {
    __extends(ItemFactory, _super);
    function ItemFactory() {
        var _this = _super.call(this) || this;
        _this._repositroy = new Map();
        _this._repositroy.set(_constants_ItemTypes__WEBPACK_IMPORTED_MODULE_0__.ItemTypes.GUN, new ItemCount(3));
        _this._repositroy.set(_constants_ItemTypes__WEBPACK_IMPORTED_MODULE_0__.ItemTypes.SHIELD, new ItemCount(5));
        _this._repositroy.set(_constants_ItemTypes__WEBPACK_IMPORTED_MODULE_0__.ItemTypes.POTION, new ItemCount(10));
        return _this;
    }
    ItemFactory.prototype._isCreatable = function (name) {
        var itemCount = this._repositroy.get(name);
        // null 체크 추가
        if (!itemCount) {
            throw new Error("Invalid item name: ".concat(name));
            // 또는 return false;
        }
        return itemCount.isCreatable();
    };
    ItemFactory.prototype._createItem = function (name) {
        var result = null;
        if (name === _constants_ItemTypes__WEBPACK_IMPORTED_MODULE_0__.ItemTypes.GUN) {
            result = new _items_Gun__WEBPACK_IMPORTED_MODULE_2__["default"]();
        }
        else if (name === _constants_ItemTypes__WEBPACK_IMPORTED_MODULE_0__.ItemTypes.SHIELD) {
            result = new _items_Shield__WEBPACK_IMPORTED_MODULE_4__["default"]();
        }
        else if (name === _constants_ItemTypes__WEBPACK_IMPORTED_MODULE_0__.ItemTypes.POTION) {
            result = new _items_Potion__WEBPACK_IMPORTED_MODULE_3__["default"]();
        }
        return result;
    };
    ItemFactory.prototype._postprocessItem = function (name) {
        return this._repositroy.get(name).increaseCount();
    };
    return ItemFactory;
}(_abstract_Factory__WEBPACK_IMPORTED_MODULE_1__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemFactory);


/***/ }),

/***/ "./src/factory/model/abstract/Factory.ts":
/*!***********************************************!*\
  !*** ./src/factory/model/abstract/Factory.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Factory = /** @class */ (function () {
    function Factory() {
    }
    Factory.prototype.create = function (name) {
        var creatable = this._isCreatable(name);
        if (creatable) {
            var item = this._createItem(name);
            this._postprocessItem(name);
            return item;
        }
        return null;
    };
    return Factory;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Factory);


/***/ }),

/***/ "./src/factory/model/items/Gun.ts":
/*!****************************************!*\
  !*** ./src/factory/model/items/Gun.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Gun = /** @class */ (function () {
    function Gun() {
    }
    Gun.prototype.use = function () {
        return "총 사용";
    };
    return Gun;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gun);


/***/ }),

/***/ "./src/factory/model/items/Potion.ts":
/*!*******************************************!*\
  !*** ./src/factory/model/items/Potion.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Potion = /** @class */ (function () {
    function Potion() {
    }
    Potion.prototype.use = function () {
        return "물약 사용";
    };
    return Potion;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Potion);


/***/ }),

/***/ "./src/factory/model/items/Shield.ts":
/*!*******************************************!*\
  !*** ./src/factory/model/items/Shield.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Shield = /** @class */ (function () {
    function Shield() {
    }
    Shield.prototype.use = function () {
        return "방어막 사용";
    };
    return Shield;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Shield);


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
/*!******************************!*\
  !*** ./src/factory/index.ts ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _model_ItemFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model/ItemFactory */ "./src/factory/model/ItemFactory.ts");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/factory/style.css");


// html
document.body.innerHTML += '<div id="content"></div>';
var domContent = document.getElementById("content");
var buttonsElement = "<div id='items'><button>Gun</button><button>Shield</button><button>Potion</button></div>";
var textarea = "<textarea>...txt</textarea>";
domContent.innerHTML = buttonsElement + textarea;
var factory = new _model_ItemFactory__WEBPACK_IMPORTED_MODULE_0__["default"]();
var domOutput = document.querySelector("textarea");
var buttons = document.querySelectorAll("button");
buttons.forEach(function (button) {
    return button.addEventListener("click", function (event) {
        var itemName = event.target.innerText;
        var item = factory.create(itemName);
        if (item) {
            domOutput.value += "\n".concat(item.use());
        }
        else {
            domOutput.value += "\n".concat(itemName, "\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.");
        }
        domOutput.scrollTop = domOutput.scrollHeight;
    });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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USxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUN0RCxJQUFNLGNBQWMsR0FDbEIsMEZBQTBGLENBQUM7QUFDN0YsSUFBTSxRQUFRLEdBQUcsNkJBQTZCLENBQUM7QUFDL0MsVUFBVSxDQUFDLFNBQVMsR0FBRyxjQUFjLEdBQUcsUUFBUSxDQUFDO0FBRWpELElBQU0sT0FBTyxHQUFHLElBQUksMERBQVcsRUFBRSxDQUFDO0FBRWxDLElBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDckQsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRXBELE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxNQUFNO0lBQ3JCLGFBQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQyxLQUFLO1FBQ3JDLElBQU0sUUFBUSxHQUFJLEtBQUssQ0FBQyxNQUFzQixDQUFDLFNBQVMsQ0FBQztRQUV6RCxJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQXdCLENBQUMsQ0FBQztRQUV0RCxJQUFJLElBQUksRUFBRSxDQUFDO1lBQ1QsU0FBUyxDQUFDLEtBQUssSUFBSSxZQUFLLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBRSxDQUFDO1FBQ3ZDLENBQUM7YUFBTSxDQUFDO1lBQ04sU0FBUyxDQUFDLEtBQUssSUFBSSxZQUFLLFFBQVEsK0RBQWUsQ0FBQztRQUNsRCxDQUFDO1FBQ0QsU0FBUyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsWUFBWSxDQUFDO0lBQy9DLENBQUMsQ0FBQztBQVhGLENBV0UsQ0FDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVzaWducGF0dGVybi8uL3NyYy9mYWN0b3J5L3N0eWxlLmNzcz81ZWQyIiwid2VicGFjazovL2Rlc2lnbnBhdHRlcm4vLi9zcmMvZmFjdG9yeS9jb25zdGFudHMvSXRlbVR5cGVzLnRzIiwid2VicGFjazovL2Rlc2lnbnBhdHRlcm4vLi9zcmMvZmFjdG9yeS9tb2RlbC9JdGVtRmFjdG9yeS50cyIsIndlYnBhY2s6Ly9kZXNpZ25wYXR0ZXJuLy4vc3JjL2ZhY3RvcnkvbW9kZWwvYWJzdHJhY3QvRmFjdG9yeS50cyIsIndlYnBhY2s6Ly9kZXNpZ25wYXR0ZXJuLy4vc3JjL2ZhY3RvcnkvbW9kZWwvaXRlbXMvR3VuLnRzIiwid2VicGFjazovL2Rlc2lnbnBhdHRlcm4vLi9zcmMvZmFjdG9yeS9tb2RlbC9pdGVtcy9Qb3Rpb24udHMiLCJ3ZWJwYWNrOi8vZGVzaWducGF0dGVybi8uL3NyYy9mYWN0b3J5L21vZGVsL2l0ZW1zL1NoaWVsZC50cyIsIndlYnBhY2s6Ly9kZXNpZ25wYXR0ZXJuL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Rlc2lnbnBhdHRlcm4vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Rlc2lnbnBhdHRlcm4vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kZXNpZ25wYXR0ZXJuL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZGVzaWducGF0dGVybi8uL3NyYy9mYWN0b3J5L2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImV4cG9ydCBjb25zdCBJdGVtVHlwZXMgPSB7XG4gIEdVTjogXCJHdW5cIixcbiAgUE9USU9OOiBcIlBvdGlvblwiLFxuICBTSElFTEQ6IFwiU2hpZWxkXCIsXG59IGFzIGNvbnN0O1xuIiwiaW1wb3J0IHsgSXRlbVR5cGVzIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9JdGVtVHlwZXNcIjtcbmltcG9ydCBJdGVtIGZyb20gXCIuLi9pbnRlcmZhY2UvSXRlbVwiO1xuaW1wb3J0IHsgSXRlbU5hbWVUeXBlIH0gZnJvbSBcIi4uL3R5cGVzL0l0ZW1OYW1lVHlwZVwiO1xuXG5pbXBvcnQgRmFjdG9yeSBmcm9tIFwiLi9hYnN0cmFjdC9GYWN0b3J5XCI7XG5pbXBvcnQgR3VuIGZyb20gXCIuL2l0ZW1zL0d1blwiO1xuaW1wb3J0IFBvdGlvbiBmcm9tIFwiLi9pdGVtcy9Qb3Rpb25cIjtcbmltcG9ydCBTaGllbGQgZnJvbSBcIi4vaXRlbXMvU2hpZWxkXCI7XG5cbmNsYXNzIEl0ZW1Db3VudCB7XG4gIHByaXZhdGUgX2N1cnJlbnRDb3VudCA9IDA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbWF4Q291bnQ6IG51bWJlcikge31cblxuICBnZXQgbWF4Q291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21heENvdW50O1xuICB9XG5cbiAgaXNDcmVhdGFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRDb3VudCA8IHRoaXMuX21heENvdW50O1xuICB9XG5cbiAgaW5jcmVhc2VDb3VudCgpIHtcbiAgICBpZiAodGhpcy5pc0NyZWF0YWJsZSkgdGhpcy5fY3VycmVudENvdW50Kys7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXRlbUZhY3RvcnkgZXh0ZW5kcyBGYWN0b3J5IHtcbiAgcHJpdmF0ZSBfcmVwb3NpdHJveSA9IG5ldyBNYXA8SXRlbU5hbWVUeXBlLCBJdGVtQ291bnQ+KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuX3JlcG9zaXRyb3kuc2V0KEl0ZW1UeXBlcy5HVU4sIG5ldyBJdGVtQ291bnQoMykpO1xuICAgIHRoaXMuX3JlcG9zaXRyb3kuc2V0KEl0ZW1UeXBlcy5TSElFTEQsIG5ldyBJdGVtQ291bnQoNSkpO1xuICAgIHRoaXMuX3JlcG9zaXRyb3kuc2V0KEl0ZW1UeXBlcy5QT1RJT04sIG5ldyBJdGVtQ291bnQoMTApKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfaXNDcmVhdGFibGUobmFtZTogSXRlbU5hbWVUeXBlKTogYm9vbGVhbiB7XG4gICAgY29uc3QgaXRlbUNvdW50ID0gdGhpcy5fcmVwb3NpdHJveS5nZXQobmFtZSk7XG4gICAgLy8gbnVsbCDssrTtgawg7LaU6rCAXG4gICAgaWYgKCFpdGVtQ291bnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBpdGVtIG5hbWU6ICR7bmFtZX1gKTtcbiAgICAgIC8vIOuYkOuKlCByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBpdGVtQ291bnQuaXNDcmVhdGFibGUoKTtcbiAgfVxuICBwcm90ZWN0ZWQgX2NyZWF0ZUl0ZW0obmFtZTogSXRlbU5hbWVUeXBlKTogSXRlbSB7XG4gICAgbGV0IHJlc3VsdDogSXRlbSA9IG51bGw7XG5cbiAgICBpZiAobmFtZSA9PT0gSXRlbVR5cGVzLkdVTikge1xuICAgICAgcmVzdWx0ID0gbmV3IEd1bigpO1xuICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gSXRlbVR5cGVzLlNISUVMRCkge1xuICAgICAgcmVzdWx0ID0gbmV3IFNoaWVsZCgpO1xuICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gSXRlbVR5cGVzLlBPVElPTikge1xuICAgICAgcmVzdWx0ID0gbmV3IFBvdGlvbigpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIHByb3RlY3RlZCBfcG9zdHByb2Nlc3NJdGVtKG5hbWU6IEl0ZW1OYW1lVHlwZSk6IHZvaWQge1xuICAgIHJldHVybiB0aGlzLl9yZXBvc2l0cm95LmdldChuYW1lKS5pbmNyZWFzZUNvdW50KCk7XG4gIH1cbn1cbiIsImltcG9ydCBJdGVtIGZyb20gXCIuLi8uLi9pbnRlcmZhY2UvSXRlbVwiO1xuaW1wb3J0IHsgSXRlbU5hbWVUeXBlIH0gZnJvbSBcIi4uLy4uL3R5cGVzL0l0ZW1OYW1lVHlwZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBGYWN0b3J5IHtcbiAgcHJvdGVjdGVkIGFic3RyYWN0IF9pc0NyZWF0YWJsZShuYW1lOiBJdGVtTmFtZVR5cGUpOiBib29sZWFuO1xuICBwcm90ZWN0ZWQgYWJzdHJhY3QgX2NyZWF0ZUl0ZW0obmFtZTogSXRlbU5hbWVUeXBlKTogSXRlbTtcbiAgcHJvdGVjdGVkIGFic3RyYWN0IF9wb3N0cHJvY2Vzc0l0ZW0obmFtZTogSXRlbU5hbWVUeXBlKTogdm9pZDtcblxuICBjcmVhdGUobmFtZTogSXRlbU5hbWVUeXBlKTogSXRlbSB7XG4gICAgY29uc3QgY3JlYXRhYmxlID0gdGhpcy5faXNDcmVhdGFibGUobmFtZSk7XG4gICAgaWYgKGNyZWF0YWJsZSkge1xuICAgICAgY29uc3QgaXRlbSA9IHRoaXMuX2NyZWF0ZUl0ZW0obmFtZSk7XG4gICAgICB0aGlzLl9wb3N0cHJvY2Vzc0l0ZW0obmFtZSk7XG4gICAgICByZXR1cm4gaXRlbTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbiIsImltcG9ydCBJdGVtIGZyb20gXCIuLi8uLi9pbnRlcmZhY2UvSXRlbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHdW4gaW1wbGVtZW50cyBJdGVtIHtcbiAgdXNlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFwi7LSdIOyCrOyaqVwiO1xuICB9XG59XG4iLCJpbXBvcnQgSXRlbSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlL0l0ZW1cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG90aW9uIGltcGxlbWVudHMgSXRlbSB7XG4gIHVzZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBcIuusvOyVvSDsgqzsmqlcIjtcbiAgfVxufVxuIiwiaW1wb3J0IEl0ZW0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZS9JdGVtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaWVsZCBpbXBsZW1lbnRzIEl0ZW0ge1xuICB1c2UoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gXCLrsKnslrTrp4kg7IKs7JqpXCI7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEl0ZW1GYWN0b3J5IGZyb20gXCIuL21vZGVsL0l0ZW1GYWN0b3J5XCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgSXRlbU5hbWVUeXBlIH0gZnJvbSBcIi4vdHlwZXMvSXRlbU5hbWVUeXBlXCI7XG5cbi8vIGh0bWxcbmRvY3VtZW50LmJvZHkuaW5uZXJIVE1MICs9ICc8ZGl2IGlkPVwiY29udGVudFwiPjwvZGl2Pic7XG5jb25zdCBkb21Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuY29uc3QgYnV0dG9uc0VsZW1lbnQgPVxuICBcIjxkaXYgaWQ9J2l0ZW1zJz48YnV0dG9uPkd1bjwvYnV0dG9uPjxidXR0b24+U2hpZWxkPC9idXR0b24+PGJ1dHRvbj5Qb3Rpb248L2J1dHRvbj48L2Rpdj5cIjtcbmNvbnN0IHRleHRhcmVhID0gXCI8dGV4dGFyZWE+Li4udHh0PC90ZXh0YXJlYT5cIjtcbmRvbUNvbnRlbnQuaW5uZXJIVE1MID0gYnV0dG9uc0VsZW1lbnQgKyB0ZXh0YXJlYTtcblxuY29uc3QgZmFjdG9yeSA9IG5ldyBJdGVtRmFjdG9yeSgpO1xuXG5jb25zdCBkb21PdXRwdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidGV4dGFyZWFcIik7XG5jb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvblwiKTtcblxuYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgaXRlbU5hbWUgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5pbm5lclRleHQ7XG5cbiAgICBjb25zdCBpdGVtID0gZmFjdG9yeS5jcmVhdGUoaXRlbU5hbWUgYXMgSXRlbU5hbWVUeXBlKTtcblxuICAgIGlmIChpdGVtKSB7XG4gICAgICBkb21PdXRwdXQudmFsdWUgKz0gYFxcbiR7aXRlbS51c2UoKX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb21PdXRwdXQudmFsdWUgKz0gYFxcbiR7aXRlbU5hbWV97J2EIOyCrOyaqe2VoCDsiJgg7JeG7Iq164uI64ukLmA7XG4gICAgfVxuICAgIGRvbU91dHB1dC5zY3JvbGxUb3AgPSBkb21PdXRwdXQuc2Nyb2xsSGVpZ2h0O1xuICB9KVxuKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==