/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _signalr_NotificationsHubConnection2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signalr/NotificationsHubConnection2 */ "./signalr/NotificationsHubConnection2.ts");

function registerNotification(signalRBase, token) {
    alert('Initialise ' + signalRBase);
    console.log("Initialize StoredNotificationHubConnection");
    _signalr_NotificationsHubConnection2__WEBPACK_IMPORTED_MODULE_0__.NotificationsHubConnection2.init(signalRBase, token);
}


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
        return _super.call(this, "/notification2", signalRBase, token) || this;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVoREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BsZWFoLmdvcm9zcGUvbGctbnBtLXRlc3QtMjIwMi8uL2luZGV4LnRzIiwid2VicGFjazovL0BsZWFoLmdvcm9zcGUvbGctbnBtLXRlc3QtMjIwMi8uL3NpZ25hbHIvQmFzZU1vbml0b3JIdWJDb25uZWN0aW9uMi50cyIsIndlYnBhY2s6Ly9AbGVhaC5nb3Jvc3BlL2xnLW5wbS10ZXN0LTIyMDIvLi9zaWduYWxyL05vdGlmaWNhdGlvbnNIdWJDb25uZWN0aW9uMi50cyIsIndlYnBhY2s6Ly9AbGVhaC5nb3Jvc3BlL2xnLW5wbS10ZXN0LTIyMDIvLi9zaWduYWxyL1NpZ25hbFJDb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vQGxlYWguZ29yb3NwZS9sZy1ucG0tdGVzdC0yMjAyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BsZWFoLmdvcm9zcGUvbGctbnBtLXRlc3QtMjIwMi93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL0BsZWFoLmdvcm9zcGUvbGctbnBtLXRlc3QtMjIwMi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vQGxlYWguZ29yb3NwZS9sZy1ucG0tdGVzdC0yMjAyL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vQGxlYWguZ29yb3NwZS9sZy1ucG0tdGVzdC0yMjAyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vQGxlYWguZ29yb3NwZS9sZy1ucG0tdGVzdC0yMjAyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vQGxlYWguZ29yb3NwZS9sZy1ucG0tdGVzdC0yMjAyL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL0BsZWFoLmdvcm9zcGUvbGctbnBtLXRlc3QtMjIwMi93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL0BsZWFoLmdvcm9zcGUvbGctbnBtLXRlc3QtMjIwMi93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vQGxlYWguZ29yb3NwZS9sZy1ucG0tdGVzdC0yMjAyL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOb3RpZmljYXRpb25zSHViQ29ubmVjdGlvbjIgfSBmcm9tIFwiLi9zaWduYWxyL05vdGlmaWNhdGlvbnNIdWJDb25uZWN0aW9uMlwiO1xyXG5cclxuZnVuY3Rpb24gcmVnaXN0ZXJOb3RpZmljYXRpb24oc2lnbmFsUkJhc2UsIHRva2VuKSB7XHJcbiAgICBhbGVydCgnSW5pdGlhbGlzZSAnICsgc2lnbmFsUkJhc2UpO1xyXG4gICAgY29uc29sZS5sb2coXCJJbml0aWFsaXplIFN0b3JlZE5vdGlmaWNhdGlvbkh1YkNvbm5lY3Rpb25cIik7XHJcbiAgICBOb3RpZmljYXRpb25zSHViQ29ubmVjdGlvbjIuaW5pdChzaWduYWxSQmFzZSwgdG9rZW4pO1xyXG59XHJcblxyXG4iLCJpbXBvcnQge1xyXG4gICAgSHR0cFRyYW5zcG9ydFR5cGUsXHJcbiAgICBIdWJDb25uZWN0aW9uQnVpbGRlcixcclxuICAgIElIdHRwQ29ubmVjdGlvbk9wdGlvbnMsXHJcbiAgICBIdWJDb25uZWN0aW9uLFxyXG4gICAgSHViQ29ubmVjdGlvblN0YXRlXHJcbn0gZnJvbSBcIkBtaWNyb3NvZnQvc2lnbmFsclwiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlTW9uaXRvckh1YkNvbm5lY3Rpb24yIHtcclxuICAgIHB1YmxpYyBjb25uZWN0aW9uOiBIdWJDb25uZWN0aW9uO1xyXG4gICAgcHVibGljIGh1YkVuZHBvaW50OiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaHViRW5kcG9pbnQsIHNpZ25hbFJCYXNlLCB0b2tlbikge1xyXG4gICAgICAgIHRoaXMuaHViRW5kcG9pbnQgPSBodWJFbmRwb2ludDsgICAgXHJcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uID0gbmV3IEh1YkNvbm5lY3Rpb25CdWlsZGVyKClcclxuICAgICAgICAgICAgLndpdGhVcmwoYCR7c2lnbmFsUkJhc2V9JHtodWJFbmRwb2ludC5zdGFydHNXaXRoKCcvJykgPyBodWJFbmRwb2ludCA6ICgnLycgKyBodWJFbmRwb2ludCl9YCwge1xyXG4gICAgICAgICAgICAgICAgYWNjZXNzVG9rZW5GYWN0b3J5OiAoKSA9PiB0b2tlblxyXG4gICAgICAgICAgICB9IGFzIElIdHRwQ29ubmVjdGlvbk9wdGlvbnMpXHJcbiAgICAgICAgICAgIC53aXRoQXV0b21hdGljUmVjb25uZWN0KClcclxuICAgICAgICAgICAgLmJ1aWxkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXJ0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbm5lY3Rpb24uc3RhdGUgPT09IEh1YkNvbm5lY3Rpb25TdGF0ZS5EaXNjb25uZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuY29ubmVjdGlvbi5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFdTUyBlbmRwb2ludCAtICR7dGhpcy5odWJFbmRwb2ludH0gLSBoYXMgc3RhcnRlZCFgKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBbHJlYWR5IGNvbm5lY3RlZCFcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5hc3NlcnQodGhpcy5jb25uZWN0aW9uLnN0YXRlID09PSBIdWJDb25uZWN0aW9uU3RhdGUuRGlzY29ubmVjdGVkKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dChhc3luYyAoKSA9PiBhd2FpdCB0aGlzLnN0YXJ0KCksIDUwMDApOyAvLyBSZXRyeSBpbiA1IHNlY29uZHNcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gXHJcbiAgICBwdWJsaWMgZGlzcG9zZSA9ICgpID0+IHRoaXMuY29ubmVjdGlvbi5zdG9wKCk7XHJcbiAgICBwdWJsaWMgb25DbG9zZSA9IChjYWxsYmFjazogKGVycm9yPzogRXJyb3IgfCB1bmRlZmluZWQpID0+IHZvaWQpID0+IHRoaXMuY29ubmVjdGlvbi5vbmNsb3NlKGNhbGxiYWNrKTtcclxufSIsImltcG9ydCB7IEJhc2VNb25pdG9ySHViQ29ubmVjdGlvbjIgfSBmcm9tIFwiLi9CYXNlTW9uaXRvckh1YkNvbm5lY3Rpb24yXCI7XHJcbmltcG9ydCB7IHNlbmROb3RpZmljYXRpb24yIH0gZnJvbSBcIi4vU2lnbmFsUkNvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBTdG9yZWROb3RpZmljYXRpb24yIH0gZnJvbSBcIi4vLi4vaW50ZXJmYWNlcy9TdG9yZWROb3RpZmljYXRpb24yXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvbnNIdWJDb25uZWN0aW9uMiBleHRlbmRzIEJhc2VNb25pdG9ySHViQ29ubmVjdGlvbjIge1xyXG4gICAgXHJcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogTm90aWZpY2F0aW9uc0h1YkNvbm5lY3Rpb24yO1xyXG4gICAgXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKHNpZ25hbFJCYXNlLCB0b2tlbikge1xyXG4gICAgICAgIHN1cGVyKFwiL25vdGlmaWNhdGlvbjJcIiwgc2lnbmFsUkJhc2UsIHRva2VuKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGluaXQoc2lnbmFsUkJhc2UsIHRva2VuKSB7XHJcbiAgICAgICAgaWYgKCFOb3RpZmljYXRpb25zSHViQ29ubmVjdGlvbjIuaW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgTm90aWZpY2F0aW9uc0h1YkNvbm5lY3Rpb24yLmluc3RhbmNlID0gbmV3IE5vdGlmaWNhdGlvbnNIdWJDb25uZWN0aW9uMihzaWduYWxSQmFzZSwgdG9rZW4pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6IE5vdGlmaWNhdGlvbnNIdWJDb25uZWN0aW9uMiB7XHJcbiAgICAgICAgcmV0dXJuIE5vdGlmaWNhdGlvbnNIdWJDb25uZWN0aW9uMi5pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIE9uUmVjZWl2ZU5vdGlmaWNhdGlvbiA9IChjYWxsYmFjazogKHN0b3JlZE5vdGlmOiBTdG9yZWROb3RpZmljYXRpb24yKSA9PiB2b2lkKSA9PiB7XHJcbiAgICAgICAgTm90aWZpY2F0aW9uc0h1YkNvbm5lY3Rpb24yLmluc3RhbmNlLmNvbm5lY3Rpb24ub24oc2VuZE5vdGlmaWNhdGlvbjIsIChzdG9yZWROb3RpZjogU3RvcmVkTm90aWZpY2F0aW9uMikgPT4gY2FsbGJhY2soc3RvcmVkTm90aWYpKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgT2ZmUmVjZWl2ZU5vdGlmaWNhdGlvbiA9ICgpID0+IE5vdGlmaWNhdGlvbnNIdWJDb25uZWN0aW9uMi5pbnN0YW5jZS5jb25uZWN0aW9uLm9mZihzZW5kTm90aWZpY2F0aW9uMik7XHJcblxyXG4gXHJcbn0iLCIvLyBOb3RpZmljYXRpb24gSHViXHJcbmV4cG9ydCBjb25zdCBzZW5kTm90aWZpY2F0aW9uMiA9IFwiU2VuZE5vdGlmaWNhdGlvblwiO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzW2ldXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua19sZWFoX2dvcm9zcGVfbGdfbnBtX3Rlc3RfMjIwMlwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtfbGVhaF9nb3Jvc3BlX2xnX25wbV90ZXN0XzIyMDJcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvclwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL2luZGV4LnRzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=