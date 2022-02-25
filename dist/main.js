/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


function registerNotification(signalRBase, token) {
    var NotificationsHubConnection2 = __webpack_require__(/*! ./signalr/NotificationsHubConnection2 */ "./signalr/NotificationsHubConnection2.ts");
    alert('Initialise ' + signalRBase);
    console.log("Initialize StoredNotificationHubConnection");
    NotificationsHubConnection2.init(signalRBase, token);
}
module.exports = registerNotification;


/***/ }),

/***/ "./signalr/BaseMonitorHubConnection2.ts":
/*!**********************************************!*\
  !*** ./signalr/BaseMonitorHubConnection2.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseMonitorHubConnection2": () => (/* binding */ BaseMonitorHubConnection2)
/* harmony export */ });
/* harmony import */ var _microsoft_signalr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/signalr */ "./node_modules/@microsoft/signalr/dist/esm/HubConnection.js");
/* harmony import */ var _microsoft_signalr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/signalr */ "./node_modules/@microsoft/signalr/dist/esm/HubConnectionBuilder.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var BaseMonitorHubConnection2 = /** @class */ (function () {
    function BaseMonitorHubConnection2(hubEndpoint, signalRBase, token) {
        var _this = this;
        this.start = function () { return __awaiter(_this, void 0, void 0, function () {
            var err_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        if (!(this.connection.state === _microsoft_signalr__WEBPACK_IMPORTED_MODULE_0__.HubConnectionState.Disconnected)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.connection.start()];
                    case 1:
                        _a.sent();
                        console.log("WSS endpoint - " + this.hubEndpoint + " - has started!");
                        return [3 /*break*/, 3];
                    case 2:
                        console.log("Already connected!");
                        _a.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        err_1 = _a.sent();
                        console.assert(this.connection.state === _microsoft_signalr__WEBPACK_IMPORTED_MODULE_0__.HubConnectionState.Disconnected);
                        console.log(err_1);
                        setTimeout(function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.start()];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }, 5000); // Retry in 5 seconds
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        this.dispose = function () { return _this.connection.stop(); };
        this.onClose = function (callback) { return _this.connection.onclose(callback); };
        this.hubEndpoint = hubEndpoint;
        this.connection = new _microsoft_signalr__WEBPACK_IMPORTED_MODULE_1__.HubConnectionBuilder()
            .withUrl("" + signalRBase + (hubEndpoint.startsWith('/') ? hubEndpoint : ('/' + hubEndpoint)), {
            accessTokenFactory: function () { return token; }
        })
            .withAutomaticReconnect()
            .build();
    }
    return BaseMonitorHubConnection2;
}());



/***/ }),

/***/ "./signalr/NotificationsHubConnection2.ts":
/*!************************************************!*\
  !*** ./signalr/NotificationsHubConnection2.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsHubConnection2": () => (/* binding */ NotificationsHubConnection2)
/* harmony export */ });
/* harmony import */ var _BaseMonitorHubConnection2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseMonitorHubConnection2 */ "./signalr/BaseMonitorHubConnection2.ts");
/* harmony import */ var _SignalRConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignalRConstants */ "./signalr/SignalRConstants.ts");
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


var NotificationsHubConnection2 = /** @class */ (function (_super) {
    __extends(NotificationsHubConnection2, _super);
    function NotificationsHubConnection2(signalRBase, token) {
        var _this = _super.call(this, "/notification2", signalRBase, token) || this;
        alert('test');
        return _this;
    }
    NotificationsHubConnection2.init = function (signalRBase, token) {
        if (!NotificationsHubConnection2.instance) {
            NotificationsHubConnection2.instance = new NotificationsHubConnection2(signalRBase, token);
        }
    };
    NotificationsHubConnection2.getInstance = function () {
        return NotificationsHubConnection2.instance;
    };
    NotificationsHubConnection2.OnReceiveNotification = function (callback) {
        NotificationsHubConnection2.instance.connection.on(_SignalRConstants__WEBPACK_IMPORTED_MODULE_1__.sendNotification2, function (storedNotif) { return callback(storedNotif); });
    };
    NotificationsHubConnection2.OffReceiveNotification = function () { return NotificationsHubConnection2.instance.connection.off(_SignalRConstants__WEBPACK_IMPORTED_MODULE_1__.sendNotification2); };
    return NotificationsHubConnection2;
}(_BaseMonitorHubConnection2__WEBPACK_IMPORTED_MODULE_0__.BaseMonitorHubConnection2));



/***/ }),

/***/ "./signalr/SignalRConstants.ts":
/*!*************************************!*\
  !*** ./signalr/SignalRConstants.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sendNotification2": () => (/* binding */ sendNotification2)
/* harmony export */ });
// Notification Hub
var sendNotification2 = "SendNotification";


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk_leah_gorospe_lg_npm_test_2202"] = self["webpackChunk_leah_gorospe_lg_npm_test_2202"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./index.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVoREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BsZWFoLmdvcm9zcGUvbGctbnBtLXRlc3QtMjIwMi8uL2luZGV4LnRzIiwid2VicGFjazovL0BsZWFoLmdvcm9zcGUvbGctbnBtLXRlc3QtMjIwMi8uL3NpZ25hbHIvQmFzZU1vbml0b3JIdWJDb25uZWN0aW9uMi50cyIsIndlYnBhY2s6Ly9AbGVhaC5nb3Jvc3BlL2xnLW5wbS10ZXN0LTIyMDIvLi9zaWduYWxyL05vdGlmaWNhdGlvbnNIdWJDb25uZWN0aW9uMi50cyIsIndlYnBhY2s6Ly9AbGVhaC5nb3Jvc3BlL2xnLW5wbS10ZXN0LTIyMDIvLi9zaWduYWxyL1NpZ25hbFJDb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vQGxlYWguZ29yb3NwZS9sZy1ucG0tdGVzdC0yMjAyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BsZWFoLmdvcm9zcGUvbGctbnBtLXRlc3QtMjIwMi93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL0BsZWFoLmdvcm9zcGUvbGctbnBtLXRlc3QtMjIwMi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vQGxlYWguZ29yb3NwZS9sZy1ucG0tdGVzdC0yMjAyL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vQGxlYWguZ29yb3NwZS9sZy1ucG0tdGVzdC0yMjAyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vQGxlYWguZ29yb3NwZS9sZy1ucG0tdGVzdC0yMjAyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vQGxlYWguZ29yb3NwZS9sZy1ucG0tdGVzdC0yMjAyL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL0BsZWFoLmdvcm9zcGUvbGctbnBtLXRlc3QtMjIwMi93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL0BsZWFoLmdvcm9zcGUvbGctbnBtLXRlc3QtMjIwMi93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vQGxlYWguZ29yb3NwZS9sZy1ucG0tdGVzdC0yMjAyL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZnVuY3Rpb24gcmVnaXN0ZXJOb3RpZmljYXRpb24oc2lnbmFsUkJhc2UsIHRva2VuKSB7XHJcbiAgICB2YXIgTm90aWZpY2F0aW9uc0h1YkNvbm5lY3Rpb24yID0gcmVxdWlyZSgnLi9zaWduYWxyL05vdGlmaWNhdGlvbnNIdWJDb25uZWN0aW9uMicpO1xyXG5cclxuICAgIGFsZXJ0KCdJbml0aWFsaXNlICcgKyBzaWduYWxSQmFzZSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIkluaXRpYWxpemUgU3RvcmVkTm90aWZpY2F0aW9uSHViQ29ubmVjdGlvblwiKTtcclxuICAgIE5vdGlmaWNhdGlvbnNIdWJDb25uZWN0aW9uMi5pbml0KHNpZ25hbFJCYXNlLCB0b2tlbik7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJlZ2lzdGVyTm90aWZpY2F0aW9uXHJcbiIsImltcG9ydCB7XHJcbiAgICBIdHRwVHJhbnNwb3J0VHlwZSxcclxuICAgIEh1YkNvbm5lY3Rpb25CdWlsZGVyLFxyXG4gICAgSUh0dHBDb25uZWN0aW9uT3B0aW9ucyxcclxuICAgIEh1YkNvbm5lY3Rpb24sXHJcbiAgICBIdWJDb25uZWN0aW9uU3RhdGVcclxufSBmcm9tIFwiQG1pY3Jvc29mdC9zaWduYWxyXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEJhc2VNb25pdG9ySHViQ29ubmVjdGlvbjIge1xyXG4gICAgcHVibGljIGNvbm5lY3Rpb246IEh1YkNvbm5lY3Rpb247XHJcbiAgICBwdWJsaWMgaHViRW5kcG9pbnQ6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihodWJFbmRwb2ludCwgc2lnbmFsUkJhc2UsIHRva2VuKSB7XHJcbiAgICAgICAgdGhpcy5odWJFbmRwb2ludCA9IGh1YkVuZHBvaW50OyAgICBcclxuICAgICAgICB0aGlzLmNvbm5lY3Rpb24gPSBuZXcgSHViQ29ubmVjdGlvbkJ1aWxkZXIoKVxyXG4gICAgICAgICAgICAud2l0aFVybChgJHtzaWduYWxSQmFzZX0ke2h1YkVuZHBvaW50LnN0YXJ0c1dpdGgoJy8nKSA/IGh1YkVuZHBvaW50IDogKCcvJyArIGh1YkVuZHBvaW50KX1gLCB7XHJcbiAgICAgICAgICAgICAgICBhY2Nlc3NUb2tlbkZhY3Rvcnk6ICgpID0+IHRva2VuXHJcbiAgICAgICAgICAgIH0gYXMgSUh0dHBDb25uZWN0aW9uT3B0aW9ucylcclxuICAgICAgICAgICAgLndpdGhBdXRvbWF0aWNSZWNvbm5lY3QoKVxyXG4gICAgICAgICAgICAuYnVpbGQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhcnQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29ubmVjdGlvbi5zdGF0ZSA9PT0gSHViQ29ubmVjdGlvblN0YXRlLkRpc2Nvbm5lY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5jb25uZWN0aW9uLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgV1NTIGVuZHBvaW50IC0gJHt0aGlzLmh1YkVuZHBvaW50fSAtIGhhcyBzdGFydGVkIWApXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFscmVhZHkgY29ubmVjdGVkIVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmFzc2VydCh0aGlzLmNvbm5lY3Rpb24uc3RhdGUgPT09IEh1YkNvbm5lY3Rpb25TdGF0ZS5EaXNjb25uZWN0ZWQpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGFzeW5jICgpID0+IGF3YWl0IHRoaXMuc3RhcnQoKSwgNTAwMCk7IC8vIFJldHJ5IGluIDUgc2Vjb25kc1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiBcclxuICAgIHB1YmxpYyBkaXNwb3NlID0gKCkgPT4gdGhpcy5jb25uZWN0aW9uLnN0b3AoKTtcclxuICAgIHB1YmxpYyBvbkNsb3NlID0gKGNhbGxiYWNrOiAoZXJyb3I/OiBFcnJvciB8IHVuZGVmaW5lZCkgPT4gdm9pZCkgPT4gdGhpcy5jb25uZWN0aW9uLm9uY2xvc2UoY2FsbGJhY2spO1xyXG59IiwiaW1wb3J0IHsgQmFzZU1vbml0b3JIdWJDb25uZWN0aW9uMiB9IGZyb20gXCIuL0Jhc2VNb25pdG9ySHViQ29ubmVjdGlvbjJcIjtcclxuaW1wb3J0IHsgc2VuZE5vdGlmaWNhdGlvbjIgfSBmcm9tIFwiLi9TaWduYWxSQ29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IFN0b3JlZE5vdGlmaWNhdGlvbjIgfSBmcm9tIFwiLi8uLi9pbnRlcmZhY2VzL1N0b3JlZE5vdGlmaWNhdGlvbjJcIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgTm90aWZpY2F0aW9uc0h1YkNvbm5lY3Rpb24yIGV4dGVuZHMgQmFzZU1vbml0b3JIdWJDb25uZWN0aW9uMiB7XHJcbiAgICBcclxuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBOb3RpZmljYXRpb25zSHViQ29ubmVjdGlvbjI7XHJcbiAgICBcclxuICAgIHByaXZhdGUgY29uc3RydWN0b3Ioc2lnbmFsUkJhc2UsIHRva2VuKSB7XHJcbiAgICAgICAgc3VwZXIoXCIvbm90aWZpY2F0aW9uMlwiLCBzaWduYWxSQmFzZSwgdG9rZW4pO1xyXG4gICAgICAgIGFsZXJ0KCd0ZXN0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpbml0KHNpZ25hbFJCYXNlLCB0b2tlbikge1xyXG4gICAgICAgIGlmICghTm90aWZpY2F0aW9uc0h1YkNvbm5lY3Rpb24yLmluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIE5vdGlmaWNhdGlvbnNIdWJDb25uZWN0aW9uMi5pbnN0YW5jZSA9IG5ldyBOb3RpZmljYXRpb25zSHViQ29ubmVjdGlvbjIoc2lnbmFsUkJhc2UsIHRva2VuKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBOb3RpZmljYXRpb25zSHViQ29ubmVjdGlvbjIge1xyXG4gICAgICAgIHJldHVybiBOb3RpZmljYXRpb25zSHViQ29ubmVjdGlvbjIuaW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBPblJlY2VpdmVOb3RpZmljYXRpb24gPSAoY2FsbGJhY2s6IChzdG9yZWROb3RpZjogU3RvcmVkTm90aWZpY2F0aW9uMikgPT4gdm9pZCkgPT4ge1xyXG4gICAgICAgIE5vdGlmaWNhdGlvbnNIdWJDb25uZWN0aW9uMi5pbnN0YW5jZS5jb25uZWN0aW9uLm9uKHNlbmROb3RpZmljYXRpb24yLCAoc3RvcmVkTm90aWY6IFN0b3JlZE5vdGlmaWNhdGlvbjIpID0+IGNhbGxiYWNrKHN0b3JlZE5vdGlmKSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIE9mZlJlY2VpdmVOb3RpZmljYXRpb24gPSAoKSA9PiBOb3RpZmljYXRpb25zSHViQ29ubmVjdGlvbjIuaW5zdGFuY2UuY29ubmVjdGlvbi5vZmYoc2VuZE5vdGlmaWNhdGlvbjIpO1xyXG5cclxuIFxyXG59IiwiLy8gTm90aWZpY2F0aW9uIEh1YlxyXG5leHBvcnQgY29uc3Qgc2VuZE5vdGlmaWNhdGlvbjIgPSBcIlNlbmROb3RpZmljYXRpb25cIjtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtfbGVhaF9nb3Jvc3BlX2xnX25wbV90ZXN0XzIyMDJcIl0gPSBzZWxmW1wid2VicGFja0NodW5rX2xlYWhfZ29yb3NwZV9sZ19ucG1fdGVzdF8yMjAyXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9pbmRleC50c1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9