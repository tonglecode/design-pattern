/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/mediator/style.css":
/*!********************************!*\
  !*** ./src/mediator/style.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/mediator/SmartHome.ts":
/*!***********************************!*\
  !*** ./src/mediator/SmartHome.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _models_CoolAircon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/CoolAircon */ "./src/mediator/models/CoolAircon.ts");
/* harmony import */ var _models_Door__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/Door */ "./src/mediator/models/Door.ts");
/* harmony import */ var _models_HeatBoiler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/HeatBoiler */ "./src/mediator/models/HeatBoiler.ts");
/* harmony import */ var _models_Window__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/Window */ "./src/mediator/models/Window.ts");




var SmartHome = /** @class */ (function () {
    function SmartHome() {
        this._door = new _models_Door__WEBPACK_IMPORTED_MODULE_1__["default"](this);
        this._window = new _models_Window__WEBPACK_IMPORTED_MODULE_3__["default"](this);
        this._heatBoiler = new _models_HeatBoiler__WEBPACK_IMPORTED_MODULE_2__["default"](this);
        this._coolAircon = new _models_CoolAircon__WEBPACK_IMPORTED_MODULE_0__["default"](this);
    }
    SmartHome.prototype.participantChanged = function (participant) {
        if (participant === this._door && !this._door.isClosed()) {
            this._heatBoiler.off();
            this._coolAircon.off();
        }
        if (participant === this._window && !this._window.isClosed()) {
            this._heatBoiler.off();
            this._coolAircon.off();
        }
        if (participant === this._heatBoiler && this._heatBoiler.isRunning()) {
            this._door.close();
            this._window.close();
            this._coolAircon.off();
        }
        if (participant === this._coolAircon && this._coolAircon.isRunning()) {
            this._door.close();
            this._window.close();
            this._heatBoiler.off();
        }
    };
    SmartHome.prototype._display = function () {
        var domDoor = document.querySelector(".door");
        var domWindow = document.querySelector(".window");
        var domHeatBoiler = document.querySelector(".heatboiler");
        var domCoolAircon = document.querySelector(".coolaircon");
        this._door.displayState(domDoor);
        this._window.displayState(domWindow);
        this._heatBoiler.displayState(domHeatBoiler);
        this._coolAircon.displayState(domCoolAircon);
    };
    SmartHome.prototype.controll = function () {
        var _this = this;
        var domDoor = document.querySelector(".door");
        var domWindow = document.querySelector(".window");
        var domHeatBoiler = document.querySelector(".heatboiler");
        var domCoolAircon = document.querySelector(".coolaircon");
        domDoor.addEventListener("click", function () {
            _this._door.isClosed() ? _this._door.open() : _this._door.close();
            _this._display();
        });
        domWindow.addEventListener("click", function () {
            _this._window.isClosed() ? _this._window.open() : _this._window.close();
            _this._display();
        });
        domHeatBoiler.addEventListener("click", function () {
            _this._heatBoiler.isRunning()
                ? _this._heatBoiler.off()
                : _this._heatBoiler.on();
            _this._display();
        });
        domCoolAircon.addEventListener("click", function () {
            _this._coolAircon.isRunning()
                ? _this._coolAircon.off()
                : _this._coolAircon.on();
            _this._display();
        });
        this._display();
    };
    return SmartHome;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SmartHome);


/***/ }),

/***/ "./src/mediator/models/CoolAircon.ts":
/*!*******************************************!*\
  !*** ./src/mediator/models/CoolAircon.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _abstract_Participant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract/Participant */ "./src/mediator/models/abstract/Participant.ts");
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

var CoolAircon = /** @class */ (function (_super) {
    __extends(CoolAircon, _super);
    function CoolAircon(mediator) {
        var _this = _super.call(this, mediator) || this;
        _this._isOff = true;
        return _this;
    }
    CoolAircon.prototype.displayState = function (dom) {
        dom.innerHTML = this._isOff ? "에어컨 OFF" : "에어컨 ON";
        if (this.isRunning()) {
            dom.classList.add("hilighting");
        }
        else {
            dom.classList.remove("hilighting");
        }
    };
    CoolAircon.prototype.on = function () {
        if (!this._isOff)
            return;
        this._isOff = false;
        this.mediator.participantChanged(this);
    };
    CoolAircon.prototype.off = function () {
        if (this._isOff)
            return;
        this._isOff = true;
        this.mediator.participantChanged(this);
    };
    CoolAircon.prototype.isRunning = function () {
        return !this._isOff;
    };
    return CoolAircon;
}(_abstract_Participant__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CoolAircon);


/***/ }),

/***/ "./src/mediator/models/Door.ts":
/*!*************************************!*\
  !*** ./src/mediator/models/Door.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _abstract_Participant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract/Participant */ "./src/mediator/models/abstract/Participant.ts");
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

var Door = /** @class */ (function (_super) {
    __extends(Door, _super);
    function Door(mediator) {
        var _this = _super.call(this, mediator) || this;
        _this._isClosed = true;
        return _this;
    }
    Door.prototype.displayState = function (dom) {
        dom.innerHTML = this._isClosed ? "문 Closed" : "문 Open";
        if (!this._isClosed) {
            dom.classList.add("hilighting");
        }
        else {
            dom.classList.remove("hilighting");
        }
    };
    Door.prototype.open = function () {
        if (!this._isClosed)
            return;
        this._isClosed = false;
        this.mediator.participantChanged(this);
    };
    Door.prototype.close = function () {
        if (this._isClosed)
            return;
        this._isClosed = true;
        this.mediator.participantChanged(this);
    };
    Door.prototype.isClosed = function () {
        return this._isClosed;
    };
    return Door;
}(_abstract_Participant__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Door);


/***/ }),

/***/ "./src/mediator/models/HeatBoiler.ts":
/*!*******************************************!*\
  !*** ./src/mediator/models/HeatBoiler.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _abstract_Participant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract/Participant */ "./src/mediator/models/abstract/Participant.ts");
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

var HeatBoiler = /** @class */ (function (_super) {
    __extends(HeatBoiler, _super);
    function HeatBoiler(mediator) {
        var _this = _super.call(this, mediator) || this;
        _this._isOff = true;
        return _this;
    }
    HeatBoiler.prototype.displayState = function (dom) {
        dom.innerHTML = this._isOff ? "보일러 OFF" : "보일러 ON";
        if (this.isRunning()) {
            dom.classList.add("hilighting");
        }
        else {
            dom.classList.remove("hilighting");
        }
    };
    HeatBoiler.prototype.on = function () {
        if (!this._isOff)
            return;
        this._isOff = false;
        this.mediator.participantChanged(this);
    };
    HeatBoiler.prototype.off = function () {
        if (this._isOff)
            return;
        this._isOff = true;
        this.mediator.participantChanged(this);
    };
    HeatBoiler.prototype.isRunning = function () {
        return !this._isOff;
    };
    return HeatBoiler;
}(_abstract_Participant__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeatBoiler);


/***/ }),

/***/ "./src/mediator/models/Window.ts":
/*!***************************************!*\
  !*** ./src/mediator/models/Window.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _abstract_Participant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract/Participant */ "./src/mediator/models/abstract/Participant.ts");
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

var Window = /** @class */ (function (_super) {
    __extends(Window, _super);
    function Window(mediator) {
        var _this = _super.call(this, mediator) || this;
        _this._isClosed = true;
        return _this;
    }
    Window.prototype.displayState = function (dom) {
        dom.innerHTML = this._isClosed ? "창 Closed" : "창 Open";
        if (!this._isClosed) {
            dom.classList.add("hilighting");
        }
        else {
            dom.classList.remove("hilighting");
        }
    };
    Window.prototype.open = function () {
        if (!this._isClosed)
            return;
        this._isClosed = false;
        this.mediator.participantChanged(this);
    };
    Window.prototype.close = function () {
        if (this._isClosed)
            return;
        this._isClosed = true;
        this.mediator.participantChanged(this);
    };
    Window.prototype.isClosed = function () {
        return this._isClosed;
    };
    return Window;
}(_abstract_Participant__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Window);


/***/ }),

/***/ "./src/mediator/models/abstract/Participant.ts":
/*!*****************************************************!*\
  !*** ./src/mediator/models/abstract/Participant.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Participant = /** @class */ (function () {
    function Participant(mediator) {
        this.mediator = mediator;
    }
    return Participant;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Participant);


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
  !*** ./src/mediator/index.ts ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SmartHome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SmartHome */ "./src/mediator/SmartHome.ts");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/mediator/style.css");


document.body.innerHTML +=
    '<div class="home">\
<div class="door"></div>\
<div class="window"></div>\
<div class="heatboiler"></div>\
<div class="coolaircon"></div>\
</div>';
var smartHome = new _SmartHome__WEBPACK_IMPORTED_MODULE_0__["default"]();
smartHome.controll();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTm9DO0FBQ2Y7QUFFckIsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTO0lBQ3JCOzs7OztPQUtLLENBQUM7QUFFUixJQUFNLFNBQVMsR0FBRyxJQUFJLGtEQUFTLEVBQUUsQ0FBQztBQUVsQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXNpZ25wYXR0ZXJuLy4vc3JjL21lZGlhdG9yL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9kZXNpZ25wYXR0ZXJuLy4vc3JjL21lZGlhdG9yL1NtYXJ0SG9tZS50cyIsIndlYnBhY2s6Ly9kZXNpZ25wYXR0ZXJuLy4vc3JjL21lZGlhdG9yL21vZGVscy9Db29sQWlyY29uLnRzIiwid2VicGFjazovL2Rlc2lnbnBhdHRlcm4vLi9zcmMvbWVkaWF0b3IvbW9kZWxzL0Rvb3IudHMiLCJ3ZWJwYWNrOi8vZGVzaWducGF0dGVybi8uL3NyYy9tZWRpYXRvci9tb2RlbHMvSGVhdEJvaWxlci50cyIsIndlYnBhY2s6Ly9kZXNpZ25wYXR0ZXJuLy4vc3JjL21lZGlhdG9yL21vZGVscy9XaW5kb3cudHMiLCJ3ZWJwYWNrOi8vZGVzaWducGF0dGVybi8uL3NyYy9tZWRpYXRvci9tb2RlbHMvYWJzdHJhY3QvUGFydGljaXBhbnQudHMiLCJ3ZWJwYWNrOi8vZGVzaWducGF0dGVybi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kZXNpZ25wYXR0ZXJuL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9kZXNpZ25wYXR0ZXJuL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZGVzaWducGF0dGVybi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Rlc2lnbnBhdHRlcm4vLi9zcmMvbWVkaWF0b3IvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IE1lZGlhdG9yIGZyb20gXCIuL2ludGVyZmFjZS9NZWRpYXRvclwiO1xuaW1wb3J0IFBhcnRpY2lwYW50IGZyb20gXCIuL21vZGVscy9hYnN0cmFjdC9QYXJ0aWNpcGFudFwiO1xuaW1wb3J0IENvb2xBaXJjb24gZnJvbSBcIi4vbW9kZWxzL0Nvb2xBaXJjb25cIjtcbmltcG9ydCBEb29yIGZyb20gXCIuL21vZGVscy9Eb29yXCI7XG5pbXBvcnQgSGVhdEJvaWxlciBmcm9tIFwiLi9tb2RlbHMvSGVhdEJvaWxlclwiO1xuaW1wb3J0IFdpbmRvdyBmcm9tIFwiLi9tb2RlbHMvV2luZG93XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNtYXJ0SG9tZSBpbXBsZW1lbnRzIE1lZGlhdG9yIHtcbiAgcHJpdmF0ZSBfZG9vciA9IG5ldyBEb29yKHRoaXMpO1xuICBwcml2YXRlIF93aW5kb3cgPSBuZXcgV2luZG93KHRoaXMpO1xuICBwcml2YXRlIF9oZWF0Qm9pbGVyID0gbmV3IEhlYXRCb2lsZXIodGhpcyk7XG4gIHByaXZhdGUgX2Nvb2xBaXJjb24gPSBuZXcgQ29vbEFpcmNvbih0aGlzKTtcblxuICBwYXJ0aWNpcGFudENoYW5nZWQocGFydGljaXBhbnQ6IFBhcnRpY2lwYW50KTogdm9pZCB7XG4gICAgaWYgKHBhcnRpY2lwYW50ID09PSB0aGlzLl9kb29yICYmICF0aGlzLl9kb29yLmlzQ2xvc2VkKCkpIHtcbiAgICAgIHRoaXMuX2hlYXRCb2lsZXIub2ZmKCk7XG4gICAgICB0aGlzLl9jb29sQWlyY29uLm9mZigpO1xuICAgIH1cblxuICAgIGlmIChwYXJ0aWNpcGFudCA9PT0gdGhpcy5fd2luZG93ICYmICF0aGlzLl93aW5kb3cuaXNDbG9zZWQoKSkge1xuICAgICAgdGhpcy5faGVhdEJvaWxlci5vZmYoKTtcbiAgICAgIHRoaXMuX2Nvb2xBaXJjb24ub2ZmKCk7XG4gICAgfVxuXG4gICAgaWYgKHBhcnRpY2lwYW50ID09PSB0aGlzLl9oZWF0Qm9pbGVyICYmIHRoaXMuX2hlYXRCb2lsZXIuaXNSdW5uaW5nKCkpIHtcbiAgICAgIHRoaXMuX2Rvb3IuY2xvc2UoKTtcbiAgICAgIHRoaXMuX3dpbmRvdy5jbG9zZSgpO1xuICAgICAgdGhpcy5fY29vbEFpcmNvbi5vZmYoKTtcbiAgICB9XG5cbiAgICBpZiAocGFydGljaXBhbnQgPT09IHRoaXMuX2Nvb2xBaXJjb24gJiYgdGhpcy5fY29vbEFpcmNvbi5pc1J1bm5pbmcoKSkge1xuICAgICAgdGhpcy5fZG9vci5jbG9zZSgpO1xuICAgICAgdGhpcy5fd2luZG93LmNsb3NlKCk7XG4gICAgICB0aGlzLl9oZWF0Qm9pbGVyLm9mZigpO1xuICAgIH1cbiAgfVxuXG4gIF9kaXNwbGF5KCkge1xuICAgIGNvbnN0IGRvbURvb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRvb3JcIikgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgZG9tV2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aW5kb3dcIikgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgZG9tSGVhdEJvaWxlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhdGJvaWxlclwiKSBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBkb21Db29sQWlyY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb29sYWlyY29uXCIpIGFzIEhUTUxFbGVtZW50O1xuXG4gICAgdGhpcy5fZG9vci5kaXNwbGF5U3RhdGUoZG9tRG9vcik7XG4gICAgdGhpcy5fd2luZG93LmRpc3BsYXlTdGF0ZShkb21XaW5kb3cpO1xuICAgIHRoaXMuX2hlYXRCb2lsZXIuZGlzcGxheVN0YXRlKGRvbUhlYXRCb2lsZXIpO1xuICAgIHRoaXMuX2Nvb2xBaXJjb24uZGlzcGxheVN0YXRlKGRvbUNvb2xBaXJjb24pO1xuICB9XG5cbiAgY29udHJvbGwoKSB7XG4gICAgY29uc3QgZG9tRG9vciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZG9vclwiKSBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBkb21XaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbmRvd1wiKSBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBkb21IZWF0Qm9pbGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWF0Ym9pbGVyXCIpIGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IGRvbUNvb2xBaXJjb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvb2xhaXJjb25cIikgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICBkb21Eb29yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLl9kb29yLmlzQ2xvc2VkKCkgPyB0aGlzLl9kb29yLm9wZW4oKSA6IHRoaXMuX2Rvb3IuY2xvc2UoKTtcbiAgICAgIHRoaXMuX2Rpc3BsYXkoKTtcbiAgICB9KTtcblxuICAgIGRvbVdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5fd2luZG93LmlzQ2xvc2VkKCkgPyB0aGlzLl93aW5kb3cub3BlbigpIDogdGhpcy5fd2luZG93LmNsb3NlKCk7XG4gICAgICB0aGlzLl9kaXNwbGF5KCk7XG4gICAgfSk7XG5cbiAgICBkb21IZWF0Qm9pbGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLl9oZWF0Qm9pbGVyLmlzUnVubmluZygpXG4gICAgICAgID8gdGhpcy5faGVhdEJvaWxlci5vZmYoKVxuICAgICAgICA6IHRoaXMuX2hlYXRCb2lsZXIub24oKTtcbiAgICAgIHRoaXMuX2Rpc3BsYXkoKTtcbiAgICB9KTtcblxuICAgIGRvbUNvb2xBaXJjb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRoaXMuX2Nvb2xBaXJjb24uaXNSdW5uaW5nKClcbiAgICAgICAgPyB0aGlzLl9jb29sQWlyY29uLm9mZigpXG4gICAgICAgIDogdGhpcy5fY29vbEFpcmNvbi5vbigpO1xuICAgICAgdGhpcy5fZGlzcGxheSgpO1xuICAgIH0pO1xuICAgIHRoaXMuX2Rpc3BsYXkoKTtcbiAgfVxufVxuIiwiaW1wb3J0IE1lZGlhdG9yIGZyb20gXCIuLi9pbnRlcmZhY2UvTWVkaWF0b3JcIjtcbmltcG9ydCBQYXJ0aWNpcGFudCBmcm9tIFwiLi9hYnN0cmFjdC9QYXJ0aWNpcGFudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb29sQWlyY29uIGV4dGVuZHMgUGFydGljaXBhbnQge1xuICBwcml2YXRlIF9pc09mZiA9IHRydWU7XG5cbiAgZGlzcGxheVN0YXRlKGRvbTogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBkb20uaW5uZXJIVE1MID0gdGhpcy5faXNPZmYgPyBcIuyXkOyWtOy7qCBPRkZcIiA6IFwi7JeQ7Ja07LuoIE9OXCI7XG4gICAgaWYgKHRoaXMuaXNSdW5uaW5nKCkpIHtcbiAgICAgIGRvbS5jbGFzc0xpc3QuYWRkKFwiaGlsaWdodGluZ1wiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9tLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWxpZ2h0aW5nXCIpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKG1lZGlhdG9yOiBNZWRpYXRvcikge1xuICAgIHN1cGVyKG1lZGlhdG9yKTtcbiAgfVxuXG4gIG9uKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5faXNPZmYpIHJldHVybjtcbiAgICB0aGlzLl9pc09mZiA9IGZhbHNlO1xuICAgIHRoaXMubWVkaWF0b3IucGFydGljaXBhbnRDaGFuZ2VkKHRoaXMpO1xuICB9XG5cbiAgb2ZmKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9pc09mZikgcmV0dXJuO1xuICAgIHRoaXMuX2lzT2ZmID0gdHJ1ZTtcbiAgICB0aGlzLm1lZGlhdG9yLnBhcnRpY2lwYW50Q2hhbmdlZCh0aGlzKTtcbiAgfVxuXG4gIGlzUnVubmluZygpIHtcbiAgICByZXR1cm4gIXRoaXMuX2lzT2ZmO1xuICB9XG59XG4iLCJpbXBvcnQgTWVkaWF0b3IgZnJvbSBcIi4uL2ludGVyZmFjZS9NZWRpYXRvclwiO1xuaW1wb3J0IFBhcnRpY2lwYW50IGZyb20gXCIuL2Fic3RyYWN0L1BhcnRpY2lwYW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvb3IgZXh0ZW5kcyBQYXJ0aWNpcGFudCB7XG4gIHByaXZhdGUgX2lzQ2xvc2VkID0gdHJ1ZTtcblxuICBkaXNwbGF5U3RhdGUoZG9tOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGRvbS5pbm5lckhUTUwgPSB0aGlzLl9pc0Nsb3NlZCA/IFwi66y4IENsb3NlZFwiIDogXCLrrLggT3BlblwiO1xuICAgIGlmICghdGhpcy5faXNDbG9zZWQpIHtcbiAgICAgIGRvbS5jbGFzc0xpc3QuYWRkKFwiaGlsaWdodGluZ1wiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9tLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWxpZ2h0aW5nXCIpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKG1lZGlhdG9yOiBNZWRpYXRvcikge1xuICAgIHN1cGVyKG1lZGlhdG9yKTtcbiAgfVxuXG4gIG9wZW4oKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9pc0Nsb3NlZCkgcmV0dXJuO1xuICAgIHRoaXMuX2lzQ2xvc2VkID0gZmFsc2U7XG4gICAgdGhpcy5tZWRpYXRvci5wYXJ0aWNpcGFudENoYW5nZWQodGhpcyk7XG4gIH1cblxuICBjbG9zZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5faXNDbG9zZWQpIHJldHVybjtcbiAgICB0aGlzLl9pc0Nsb3NlZCA9IHRydWU7XG4gICAgdGhpcy5tZWRpYXRvci5wYXJ0aWNpcGFudENoYW5nZWQodGhpcyk7XG4gIH1cblxuICBpc0Nsb3NlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNDbG9zZWQ7XG4gIH1cbn1cbiIsImltcG9ydCBNZWRpYXRvciBmcm9tIFwiLi4vaW50ZXJmYWNlL01lZGlhdG9yXCI7XG5pbXBvcnQgUGFydGljaXBhbnQgZnJvbSBcIi4vYWJzdHJhY3QvUGFydGljaXBhbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhdEJvaWxlciBleHRlbmRzIFBhcnRpY2lwYW50IHtcbiAgcHJpdmF0ZSBfaXNPZmYgPSB0cnVlO1xuXG4gIGRpc3BsYXlTdGF0ZShkb206IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgZG9tLmlubmVySFRNTCA9IHRoaXMuX2lzT2ZmID8gXCLrs7Tsnbzrn6wgT0ZGXCIgOiBcIuuztOydvOufrCBPTlwiO1xuICAgIGlmICh0aGlzLmlzUnVubmluZygpKSB7XG4gICAgICBkb20uY2xhc3NMaXN0LmFkZChcImhpbGlnaHRpbmdcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvbS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlsaWdodGluZ1wiKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihtZWRpYXRvcjogTWVkaWF0b3IpIHtcbiAgICBzdXBlcihtZWRpYXRvcik7XG4gIH1cblxuICBvbigpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX2lzT2ZmKSByZXR1cm47XG4gICAgdGhpcy5faXNPZmYgPSBmYWxzZTtcbiAgICB0aGlzLm1lZGlhdG9yLnBhcnRpY2lwYW50Q2hhbmdlZCh0aGlzKTtcbiAgfVxuXG4gIG9mZigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5faXNPZmYpIHJldHVybjtcbiAgICB0aGlzLl9pc09mZiA9IHRydWU7XG4gICAgdGhpcy5tZWRpYXRvci5wYXJ0aWNpcGFudENoYW5nZWQodGhpcyk7XG4gIH1cblxuICBpc1J1bm5pbmcoKSB7XG4gICAgcmV0dXJuICF0aGlzLl9pc09mZjtcbiAgfVxufVxuIiwiaW1wb3J0IE1lZGlhdG9yIGZyb20gXCIuLi9pbnRlcmZhY2UvTWVkaWF0b3JcIjtcbmltcG9ydCBQYXJ0aWNpcGFudCBmcm9tIFwiLi9hYnN0cmFjdC9QYXJ0aWNpcGFudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaW5kb3cgZXh0ZW5kcyBQYXJ0aWNpcGFudCB7XG4gIHByaXZhdGUgX2lzQ2xvc2VkID0gdHJ1ZTtcblxuICBkaXNwbGF5U3RhdGUoZG9tOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGRvbS5pbm5lckhUTUwgPSB0aGlzLl9pc0Nsb3NlZCA/IFwi7LC9IENsb3NlZFwiIDogXCLssL0gT3BlblwiO1xuICAgIGlmICghdGhpcy5faXNDbG9zZWQpIHtcbiAgICAgIGRvbS5jbGFzc0xpc3QuYWRkKFwiaGlsaWdodGluZ1wiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9tLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWxpZ2h0aW5nXCIpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKG1lZGlhdG9yOiBNZWRpYXRvcikge1xuICAgIHN1cGVyKG1lZGlhdG9yKTtcbiAgfVxuXG4gIG9wZW4oKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9pc0Nsb3NlZCkgcmV0dXJuO1xuICAgIHRoaXMuX2lzQ2xvc2VkID0gZmFsc2U7XG4gICAgdGhpcy5tZWRpYXRvci5wYXJ0aWNpcGFudENoYW5nZWQodGhpcyk7XG4gIH1cblxuICBjbG9zZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5faXNDbG9zZWQpIHJldHVybjtcbiAgICB0aGlzLl9pc0Nsb3NlZCA9IHRydWU7XG4gICAgdGhpcy5tZWRpYXRvci5wYXJ0aWNpcGFudENoYW5nZWQodGhpcyk7XG4gIH1cblxuICBpc0Nsb3NlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNDbG9zZWQ7XG4gIH1cbn1cbiIsImltcG9ydCBNZWRpYXRvciBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlL01lZGlhdG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIFBhcnRpY2lwYW50IHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIG1lZGlhdG9yOiBNZWRpYXRvcikge31cbiAgYWJzdHJhY3QgZGlzcGxheVN0YXRlKGRvbTogSFRNTEVsZW1lbnQpOiB2b2lkO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgU21hcnRIb21lIGZyb20gXCIuL1NtYXJ0SG9tZVwiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgKz1cbiAgJzxkaXYgY2xhc3M9XCJob21lXCI+XFxcbjxkaXYgY2xhc3M9XCJkb29yXCI+PC9kaXY+XFxcbjxkaXYgY2xhc3M9XCJ3aW5kb3dcIj48L2Rpdj5cXFxuPGRpdiBjbGFzcz1cImhlYXRib2lsZXJcIj48L2Rpdj5cXFxuPGRpdiBjbGFzcz1cImNvb2xhaXJjb25cIj48L2Rpdj5cXFxuPC9kaXY+JztcblxuY29uc3Qgc21hcnRIb21lID0gbmV3IFNtYXJ0SG9tZSgpO1xuXG5zbWFydEhvbWUuY29udHJvbGwoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==