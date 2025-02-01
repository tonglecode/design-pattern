/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/facade/style.css":
/*!******************************!*\
  !*** ./src/facade/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/facade/DBMS.ts":
/*!****************************!*\
  !*** ./src/facade/DBMS.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _models_Row__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/Row */ "./src/facade/models/Row.ts");

var DBMS = /** @class */ (function () {
    function DBMS() {
        this.db = new Map();
        this.db.set("jane", new _models_Row__WEBPACK_IMPORTED_MODULE_0__["default"]("jane", "1998-02-24", "jane@tongle.co.kr"));
        this.db.set("john", new _models_Row__WEBPACK_IMPORTED_MODULE_0__["default"]("john", "1995-06-15", "john@tongle.co.kr"));
        this.db.set("alice", new _models_Row__WEBPACK_IMPORTED_MODULE_0__["default"]("alice", "2000-09-10", "alice@tongle.co.kr"));
        this.db.set("mike", new _models_Row__WEBPACK_IMPORTED_MODULE_0__["default"]("mike", "1988-12-03", "mike@tongle.co.kr"));
        this.db.set("emma", new _models_Row__WEBPACK_IMPORTED_MODULE_0__["default"]("emma", "1992-11-22", "emma@tongle.co.kr"));
        this.db.set("kevin", new _models_Row__WEBPACK_IMPORTED_MODULE_0__["default"]("kevin", "1990-04-18", "kevin@tongle.co.kr"));
        this.db.set("sophie", new _models_Row__WEBPACK_IMPORTED_MODULE_0__["default"]("sophie", "1996-03-12", "sophie@tongle.co.kr"));
        this.db.set("lucas", new _models_Row__WEBPACK_IMPORTED_MODULE_0__["default"]("lucas", "1997-07-25", "lucas@tongle.co.kr"));
    }
    DBMS.prototype.query = function (name, callback) {
        var _this = this;
        setTimeout(function () {
            callback(_this.db.get(name));
        }, 1500);
    };
    return DBMS;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DBMS);


/***/ }),

/***/ "./src/facade/components/Message.ts":
/*!******************************************!*\
  !*** ./src/facade/components/Message.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Message = /** @class */ (function () {
    function Message(row) {
        this.row = row;
    }
    Message.prototype.print = function (dom) {
        var domLayout = document.createElement("div");
        domLayout.classList.add("layout");
        if (this.row) {
            domLayout.innerHTML = "\n\t\t<div class=\"name\">".concat(this.row.name, "</div>\n\t\t<div class=\"birthday\">").concat(this.row.birthday, "</div>\n\t\t<div class=\"email\">").concat(this.row.email, "</div>");
        }
        else {
            domLayout.innerText = "NO RESULT";
        }
        dom.append(domLayout);
    };
    return Message;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Message);


/***/ }),

/***/ "./src/facade/models/Cache.ts":
/*!************************************!*\
  !*** ./src/facade/models/Cache.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Cache = /** @class */ (function () {
    function Cache() {
        this.cache = new Map();
    }
    Cache.prototype.put = function (row) {
        this.cache.set(row.name, row);
    };
    Cache.prototype.get = function (name) {
        var row = this.cache.get(name);
        return this.cache.get(name);
    };
    return Cache;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cache);


/***/ }),

/***/ "./src/facade/models/Facade.ts":
/*!*************************************!*\
  !*** ./src/facade/models/Facade.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Message */ "./src/facade/components/Message.ts");
/* harmony import */ var _DBMS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DBMS */ "./src/facade/DBMS.ts");
/* harmony import */ var _Cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Cache */ "./src/facade/models/Cache.ts");



var Facade = /** @class */ (function () {
    function Facade() {
        this.dbms = new _DBMS__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.cache = new _Cache__WEBPACK_IMPORTED_MODULE_2__["default"]();
    }
    Facade.prototype.queryName = function (name, onBeforeQuery, onAfterQuery, domOutput) {
        var _this = this;
        var row = this.cache.get(name);
        if (!row) {
            onBeforeQuery();
            this.dbms.query(name, function (row) {
                onAfterQuery();
                if (row) {
                    _this.cache.put(row);
                }
                var message = new _components_Message__WEBPACK_IMPORTED_MODULE_0__["default"](row);
                message.print(domOutput);
            });
        }
        else {
            var message = new _components_Message__WEBPACK_IMPORTED_MODULE_0__["default"](row);
            message.print(domOutput);
        }
    };
    return Facade;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Facade);


/***/ }),

/***/ "./src/facade/models/Row.ts":
/*!**********************************!*\
  !*** ./src/facade/models/Row.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Row = /** @class */ (function () {
    function Row(_name, _birthday, _email) {
        this._name = _name;
        this._birthday = _birthday;
        this._email = _email;
    }
    Object.defineProperty(Row.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Row.prototype, "birthday", {
        get: function () {
            return this._birthday;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Row.prototype, "email", {
        get: function () {
            return this._email;
        },
        enumerable: false,
        configurable: true
    });
    return Row;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Row);


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
/*!*****************************!*\
  !*** ./src/facade/index.ts ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/facade/style.css");
/* harmony import */ var _models_Facade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/Facade */ "./src/facade/models/Facade.ts");


document.body.innerHTML += "<input /><button>\uC870\uD68C</button><div class=\"result\"></div>";
var domInput = document.querySelector("input");
var domButton = document.querySelector("button");
var domResult = document.querySelector(".result");
var facade = new _models_Facade__WEBPACK_IMPORTED_MODULE_1__["default"]();
domButton.addEventListener("click", function () {
    var name = domInput.value;
    facade.queryName(name, function () {
        domInput.value = "(조회중 ...)";
        domButton.disabled = true;
    }, function () {
        domInput.value = "";
        domButton.disabled = false;
    }, domResult);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBRXBELElBQU0sTUFBTSxHQUFHLElBQUksc0RBQU0sRUFBRSxDQUFDO0FBRTVCLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7SUFDbEMsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQztJQUU1QixNQUFNLENBQUMsU0FBUyxDQUNkLElBQUksRUFDSjtRQUNFLFFBQVEsQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDO1FBQzdCLFNBQVMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQzVCLENBQUMsRUFDRDtRQUNFLFFBQVEsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLFNBQVMsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUMsRUFDRCxTQUFTLENBQ1YsQ0FBQztBQUNKLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVzaWducGF0dGVybi8uL3NyYy9mYWNhZGUvc3R5bGUuY3NzIiwid2VicGFjazovL2Rlc2lnbnBhdHRlcm4vLi9zcmMvZmFjYWRlL0RCTVMudHMiLCJ3ZWJwYWNrOi8vZGVzaWducGF0dGVybi8uL3NyYy9mYWNhZGUvY29tcG9uZW50cy9NZXNzYWdlLnRzIiwid2VicGFjazovL2Rlc2lnbnBhdHRlcm4vLi9zcmMvZmFjYWRlL21vZGVscy9DYWNoZS50cyIsIndlYnBhY2s6Ly9kZXNpZ25wYXR0ZXJuLy4vc3JjL2ZhY2FkZS9tb2RlbHMvRmFjYWRlLnRzIiwid2VicGFjazovL2Rlc2lnbnBhdHRlcm4vLi9zcmMvZmFjYWRlL21vZGVscy9Sb3cudHMiLCJ3ZWJwYWNrOi8vZGVzaWducGF0dGVybi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kZXNpZ25wYXR0ZXJuL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9kZXNpZ25wYXR0ZXJuL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZGVzaWducGF0dGVybi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Rlc2lnbnBhdHRlcm4vLi9zcmMvZmFjYWRlL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBSb3cgZnJvbSBcIi4vbW9kZWxzL1Jvd1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEQk1TIHtcbiAgcHJpdmF0ZSBkYiA9IG5ldyBNYXA8c3RyaW5nLCBSb3c+KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5kYi5zZXQoXCJqYW5lXCIsIG5ldyBSb3coXCJqYW5lXCIsIFwiMTk5OC0wMi0yNFwiLCBcImphbmVAdG9uZ2xlLmNvLmtyXCIpKTtcbiAgICB0aGlzLmRiLnNldChcImpvaG5cIiwgbmV3IFJvdyhcImpvaG5cIiwgXCIxOTk1LTA2LTE1XCIsIFwiam9obkB0b25nbGUuY28ua3JcIikpO1xuICAgIHRoaXMuZGIuc2V0KFwiYWxpY2VcIiwgbmV3IFJvdyhcImFsaWNlXCIsIFwiMjAwMC0wOS0xMFwiLCBcImFsaWNlQHRvbmdsZS5jby5rclwiKSk7XG4gICAgdGhpcy5kYi5zZXQoXCJtaWtlXCIsIG5ldyBSb3coXCJtaWtlXCIsIFwiMTk4OC0xMi0wM1wiLCBcIm1pa2VAdG9uZ2xlLmNvLmtyXCIpKTtcbiAgICB0aGlzLmRiLnNldChcImVtbWFcIiwgbmV3IFJvdyhcImVtbWFcIiwgXCIxOTkyLTExLTIyXCIsIFwiZW1tYUB0b25nbGUuY28ua3JcIikpO1xuICAgIHRoaXMuZGIuc2V0KFwia2V2aW5cIiwgbmV3IFJvdyhcImtldmluXCIsIFwiMTk5MC0wNC0xOFwiLCBcImtldmluQHRvbmdsZS5jby5rclwiKSk7XG4gICAgdGhpcy5kYi5zZXQoXG4gICAgICBcInNvcGhpZVwiLFxuICAgICAgbmV3IFJvdyhcInNvcGhpZVwiLCBcIjE5OTYtMDMtMTJcIiwgXCJzb3BoaWVAdG9uZ2xlLmNvLmtyXCIpXG4gICAgKTtcbiAgICB0aGlzLmRiLnNldChcImx1Y2FzXCIsIG5ldyBSb3coXCJsdWNhc1wiLCBcIjE5OTctMDctMjVcIiwgXCJsdWNhc0B0b25nbGUuY28ua3JcIikpO1xuICB9XG5cbiAgcXVlcnkobmFtZTogc3RyaW5nLCBjYWxsYmFjazogKHJvdzogUm93KSA9PiB2b2lkKTogdm9pZCB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjYWxsYmFjayh0aGlzLmRiLmdldChuYW1lKSk7XG4gICAgfSwgMTUwMCk7XG4gIH1cbn1cbiIsImltcG9ydCBSb3cgZnJvbSBcIi4uL21vZGVscy9Sb3dcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVzc2FnZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm93OiBSb3cpIHt9XG5cbiAgcHJpbnQoZG9tOiBFbGVtZW50KSB7XG4gICAgY29uc3QgZG9tTGF5b3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGRvbUxheW91dC5jbGFzc0xpc3QuYWRkKFwibGF5b3V0XCIpO1xuXG4gICAgaWYgKHRoaXMucm93KSB7XG4gICAgICBkb21MYXlvdXQuaW5uZXJIVE1MID0gYFxuXHRcdDxkaXYgY2xhc3M9XCJuYW1lXCI+JHt0aGlzLnJvdy5uYW1lfTwvZGl2PlxuXHRcdDxkaXYgY2xhc3M9XCJiaXJ0aGRheVwiPiR7dGhpcy5yb3cuYmlydGhkYXl9PC9kaXY+XG5cdFx0PGRpdiBjbGFzcz1cImVtYWlsXCI+JHt0aGlzLnJvdy5lbWFpbH08L2Rpdj5gO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb21MYXlvdXQuaW5uZXJUZXh0ID0gYE5PIFJFU1VMVGA7XG4gICAgfVxuXG4gICAgZG9tLmFwcGVuZChkb21MYXlvdXQpO1xuICB9XG59XG4iLCJpbXBvcnQgUm93IGZyb20gXCIuL1Jvd1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWNoZSB7XG4gIHByaXZhdGUgY2FjaGUgPSBuZXcgTWFwPHN0cmluZywgUm93PigpO1xuXG4gIHB1dChyb3c6IFJvdyk6IHZvaWQge1xuICAgIHRoaXMuY2FjaGUuc2V0KHJvdy5uYW1lLCByb3cpO1xuICB9XG5cbiAgZ2V0KG5hbWU6IHN0cmluZyk6IFJvdyB7XG4gICAgY29uc3Qgcm93ID0gdGhpcy5jYWNoZS5nZXQobmFtZSk7XG4gICAgcmV0dXJuIHRoaXMuY2FjaGUuZ2V0KG5hbWUpO1xuICB9XG59XG4iLCJpbXBvcnQgTWVzc2FnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9NZXNzYWdlXCI7XG5pbXBvcnQgREJNUyBmcm9tIFwiLi4vREJNU1wiO1xuaW1wb3J0IENhY2hlIGZyb20gXCIuL0NhY2hlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZhY2FkZSB7XG4gIHByaXZhdGUgZGJtcyA9IG5ldyBEQk1TKCk7XG4gIHByaXZhdGUgY2FjaGUgPSBuZXcgQ2FjaGUoKTtcblxuICBxdWVyeU5hbWUoXG4gICAgbmFtZTogc3RyaW5nLFxuICAgIG9uQmVmb3JlUXVlcnk6ICgpID0+IHZvaWQsXG4gICAgb25BZnRlclF1ZXJ5OiAoKSA9PiB2b2lkLFxuICAgIGRvbU91dHB1dDogRWxlbWVudFxuICApIHtcbiAgICBjb25zdCByb3cgPSB0aGlzLmNhY2hlLmdldChuYW1lKTtcbiAgICBpZiAoIXJvdykge1xuICAgICAgb25CZWZvcmVRdWVyeSgpO1xuICAgICAgdGhpcy5kYm1zLnF1ZXJ5KG5hbWUsIChyb3cpID0+IHtcbiAgICAgICAgb25BZnRlclF1ZXJ5KCk7XG4gICAgICAgIGlmIChyb3cpIHtcbiAgICAgICAgICB0aGlzLmNhY2hlLnB1dChyb3cpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBuZXcgTWVzc2FnZShyb3cpO1xuICAgICAgICBtZXNzYWdlLnByaW50KGRvbU91dHB1dCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IG5ldyBNZXNzYWdlKHJvdyk7XG4gICAgICBtZXNzYWdlLnByaW50KGRvbU91dHB1dCk7XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBSb3cge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9uYW1lOiBzdHJpbmcsXG4gICAgcHJpdmF0ZSBfYmlydGhkYXk6IHN0cmluZyxcbiAgICBwcml2YXRlIF9lbWFpbDogc3RyaW5nXG4gICkge31cblxuICBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG4gIGdldCBiaXJ0aGRheSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9iaXJ0aGRheTtcbiAgfVxuICBnZXQgZW1haWwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZW1haWw7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBGYWNhZGUgZnJvbSBcIi4vbW9kZWxzL0ZhY2FkZVwiO1xuXG5kb2N1bWVudC5ib2R5LmlubmVySFRNTCArPSBgPGlucHV0IC8+PGJ1dHRvbj7sobDtmow8L2J1dHRvbj48ZGl2IGNsYXNzPVwicmVzdWx0XCI+PC9kaXY+YDtcblxuY29uc3QgZG9tSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XG5jb25zdCBkb21CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uXCIpO1xuY29uc3QgZG9tUmVzdWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN1bHRcIik7XG5cbmNvbnN0IGZhY2FkZSA9IG5ldyBGYWNhZGUoKTtcblxuZG9tQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNvbnN0IG5hbWUgPSBkb21JbnB1dC52YWx1ZTtcblxuICBmYWNhZGUucXVlcnlOYW1lKFxuICAgIG5hbWUsXG4gICAgKCkgPT4ge1xuICAgICAgZG9tSW5wdXQudmFsdWUgPSBcIijsobDtmozspJEgLi4uKVwiO1xuICAgICAgZG9tQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9LFxuICAgICgpID0+IHtcbiAgICAgIGRvbUlucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgIGRvbUJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIH0sXG4gICAgZG9tUmVzdWx0XG4gICk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==