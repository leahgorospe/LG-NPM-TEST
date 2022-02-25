/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _signalr_NotificationsHubConnection2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signalr/NotificationsHubConnection2 */ "./signalr/NotificationsHubConnection2.ts");
/* module decorator */ module = __webpack_require__.hmd(module);

function registerNotification(signalRBase, token) {
    alert('Initialise ' + signalRBase);
    console.log("Initialize StoredNotificationHubConnection");
    _signalr_NotificationsHubConnection2__WEBPACK_IMPORTED_MODULE_0__.NotificationsHubConnection2.init(signalRBase, token);
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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWhEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGxlYWguZ29yb3NwZS9sZy1ucG0tdGVzdC0yMjAyLy4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQGxlYWguZ29yb3NwZS9sZy1ucG0tdGVzdC0yMjAyLy4vc2lnbmFsci9CYXNlTW9uaXRvckh1YkNvbm5lY3Rpb24yLnRzIiwid2VicGFjazovL0BsZWFoLmdvcm9zcGUvbGctbnBtLXRlc3QtMjIwMi8uL3NpZ25hbHIvTm90aWZpY2F0aW9uc0h1YkNvbm5lY3Rpb24yLnRzIiwid2VicGFjazovL0BsZWFoLmdvcm9zcGUvbGctbnBtLXRlc3QtMjIwMi8uL3NpZ25hbHIvU2lnbmFsUkNvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9AbGVhaC5nb3Jvc3BlL2xnLW5wbS10ZXN0LTIyMDIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQGxlYWguZ29yb3NwZS9sZy1ucG0tdGVzdC0yMjAyL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vQGxlYWguZ29yb3NwZS9sZy1ucG0tdGVzdC0yMjAyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9AbGVhaC5nb3Jvc3BlL2xnLW5wbS10ZXN0LTIyMDIvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9AbGVhaC5nb3Jvc3BlL2xnLW5wbS10ZXN0LTIyMDIvd2VicGFjay9ydW50aW1lL2hhcm1vbnkgbW9kdWxlIGRlY29yYXRvciIsIndlYnBhY2s6Ly9AbGVhaC5nb3Jvc3BlL2xnLW5wbS10ZXN0LTIyMDIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9AbGVhaC5nb3Jvc3BlL2xnLW5wbS10ZXN0LTIyMDIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9AbGVhaC5nb3Jvc3BlL2xnLW5wbS10ZXN0LTIyMDIvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vQGxlYWguZ29yb3NwZS9sZy1ucG0tdGVzdC0yMjAyL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vQGxlYWguZ29yb3NwZS9sZy1ucG0tdGVzdC0yMjAyL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9AbGVhaC5nb3Jvc3BlL2xnLW5wbS10ZXN0LTIyMDIvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5vdGlmaWNhdGlvbnNIdWJDb25uZWN0aW9uMiB9IGZyb20gXCIuL3NpZ25hbHIvTm90aWZpY2F0aW9uc0h1YkNvbm5lY3Rpb24yXCI7XHJcbmltcG9ydCB7IEJhc2VNb25pdG9ySHViQ29ubmVjdGlvbjIgfSBmcm9tIFwiLi9zaWduYWxyL0Jhc2VNb25pdG9ySHViQ29ubmVjdGlvbjJcIjtcclxuXHJcbmZ1bmN0aW9uIHJlZ2lzdGVyTm90aWZpY2F0aW9uKHNpZ25hbFJCYXNlLCB0b2tlbikge1xyXG4gICAgYWxlcnQoJ0luaXRpYWxpc2UgJyArIHNpZ25hbFJCYXNlKTtcclxuICAgIGNvbnNvbGUubG9nKFwiSW5pdGlhbGl6ZSBTdG9yZWROb3RpZmljYXRpb25IdWJDb25uZWN0aW9uXCIpO1xyXG4gICAgTm90aWZpY2F0aW9uc0h1YkNvbm5lY3Rpb24yLmluaXQoc2lnbmFsUkJhc2UsIHRva2VuKTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcmVnaXN0ZXJOb3RpZmljYXRpb25cclxuIiwiaW1wb3J0IHtcclxuICAgIEh0dHBUcmFuc3BvcnRUeXBlLFxyXG4gICAgSHViQ29ubmVjdGlvbkJ1aWxkZXIsXHJcbiAgICBJSHR0cENvbm5lY3Rpb25PcHRpb25zLFxyXG4gICAgSHViQ29ubmVjdGlvbixcclxuICAgIEh1YkNvbm5lY3Rpb25TdGF0ZVxyXG59IGZyb20gXCJAbWljcm9zb2Z0L3NpZ25hbHJcIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQmFzZU1vbml0b3JIdWJDb25uZWN0aW9uMiB7XHJcbiAgICBwdWJsaWMgY29ubmVjdGlvbjogSHViQ29ubmVjdGlvbjtcclxuICAgIHB1YmxpYyBodWJFbmRwb2ludDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGh1YkVuZHBvaW50LCBzaWduYWxSQmFzZSwgdG9rZW4pIHtcclxuICAgICAgICB0aGlzLmh1YkVuZHBvaW50ID0gaHViRW5kcG9pbnQ7ICAgIFxyXG4gICAgICAgIHRoaXMuY29ubmVjdGlvbiA9IG5ldyBIdWJDb25uZWN0aW9uQnVpbGRlcigpXHJcbiAgICAgICAgICAgIC53aXRoVXJsKGAke3NpZ25hbFJCYXNlfSR7aHViRW5kcG9pbnQuc3RhcnRzV2l0aCgnLycpID8gaHViRW5kcG9pbnQgOiAoJy8nICsgaHViRW5kcG9pbnQpfWAsIHtcclxuICAgICAgICAgICAgICAgIGFjY2Vzc1Rva2VuRmFjdG9yeTogKCkgPT4gdG9rZW5cclxuICAgICAgICAgICAgfSBhcyBJSHR0cENvbm5lY3Rpb25PcHRpb25zKVxyXG4gICAgICAgICAgICAud2l0aEF1dG9tYXRpY1JlY29ubmVjdCgpXHJcbiAgICAgICAgICAgIC5idWlsZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGFydCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jb25uZWN0aW9uLnN0YXRlID09PSBIdWJDb25uZWN0aW9uU3RhdGUuRGlzY29ubmVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmNvbm5lY3Rpb24uc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBXU1MgZW5kcG9pbnQgLSAke3RoaXMuaHViRW5kcG9pbnR9IC0gaGFzIHN0YXJ0ZWQhYClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQWxyZWFkeSBjb25uZWN0ZWQhXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuYXNzZXJ0KHRoaXMuY29ubmVjdGlvbi5zdGF0ZSA9PT0gSHViQ29ubmVjdGlvblN0YXRlLkRpc2Nvbm5lY3RlZCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoYXN5bmMgKCkgPT4gYXdhaXQgdGhpcy5zdGFydCgpLCA1MDAwKTsgLy8gUmV0cnkgaW4gNSBzZWNvbmRzXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuIFxyXG4gICAgcHVibGljIGRpc3Bvc2UgPSAoKSA9PiB0aGlzLmNvbm5lY3Rpb24uc3RvcCgpO1xyXG4gICAgcHVibGljIG9uQ2xvc2UgPSAoY2FsbGJhY2s6IChlcnJvcj86IEVycm9yIHwgdW5kZWZpbmVkKSA9PiB2b2lkKSA9PiB0aGlzLmNvbm5lY3Rpb24ub25jbG9zZShjYWxsYmFjayk7XHJcbn0iLCJpbXBvcnQgeyBCYXNlTW9uaXRvckh1YkNvbm5lY3Rpb24yIH0gZnJvbSBcIi4vQmFzZU1vbml0b3JIdWJDb25uZWN0aW9uMlwiO1xyXG5pbXBvcnQgeyBzZW5kTm90aWZpY2F0aW9uMiB9IGZyb20gXCIuL1NpZ25hbFJDb25zdGFudHNcIjtcclxuaW1wb3J0IHsgU3RvcmVkTm90aWZpY2F0aW9uMiB9IGZyb20gXCIuLy4uL2ludGVyZmFjZXMvU3RvcmVkTm90aWZpY2F0aW9uMlwiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25zSHViQ29ubmVjdGlvbjIgZXh0ZW5kcyBCYXNlTW9uaXRvckh1YkNvbm5lY3Rpb24yIHtcclxuICAgIFxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IE5vdGlmaWNhdGlvbnNIdWJDb25uZWN0aW9uMjtcclxuICAgIFxyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcihzaWduYWxSQmFzZSwgdG9rZW4pIHtcclxuICAgICAgICBzdXBlcihcIi9ub3RpZmljYXRpb24yXCIsIHNpZ25hbFJCYXNlLCB0b2tlbik7XHJcbiAgICAgICAgYWxlcnQoJ3Rlc3QnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGluaXQoc2lnbmFsUkJhc2UsIHRva2VuKSB7XHJcbiAgICAgICAgaWYgKCFOb3RpZmljYXRpb25zSHViQ29ubmVjdGlvbjIuaW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgTm90aWZpY2F0aW9uc0h1YkNvbm5lY3Rpb24yLmluc3RhbmNlID0gbmV3IE5vdGlmaWNhdGlvbnNIdWJDb25uZWN0aW9uMihzaWduYWxSQmFzZSwgdG9rZW4pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6IE5vdGlmaWNhdGlvbnNIdWJDb25uZWN0aW9uMiB7XHJcbiAgICAgICAgcmV0dXJuIE5vdGlmaWNhdGlvbnNIdWJDb25uZWN0aW9uMi5pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIE9uUmVjZWl2ZU5vdGlmaWNhdGlvbiA9IChjYWxsYmFjazogKHN0b3JlZE5vdGlmOiBTdG9yZWROb3RpZmljYXRpb24yKSA9PiB2b2lkKSA9PiB7XHJcbiAgICAgICAgTm90aWZpY2F0aW9uc0h1YkNvbm5lY3Rpb24yLmluc3RhbmNlLmNvbm5lY3Rpb24ub24oc2VuZE5vdGlmaWNhdGlvbjIsIChzdG9yZWROb3RpZjogU3RvcmVkTm90aWZpY2F0aW9uMikgPT4gY2FsbGJhY2soc3RvcmVkTm90aWYpKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgT2ZmUmVjZWl2ZU5vdGlmaWNhdGlvbiA9ICgpID0+IE5vdGlmaWNhdGlvbnNIdWJDb25uZWN0aW9uMi5pbnN0YW5jZS5jb25uZWN0aW9uLm9mZihzZW5kTm90aWZpY2F0aW9uMik7XHJcblxyXG4gXHJcbn0iLCIvLyBOb3RpZmljYXRpb24gSHViXHJcbmV4cG9ydCBjb25zdCBzZW5kTm90aWZpY2F0aW9uMiA9IFwiU2VuZE5vdGlmaWNhdGlvblwiO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmhtZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlID0gT2JqZWN0LmNyZWF0ZShtb2R1bGUpO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsICdleHBvcnRzJywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0c2V0OiAoKSA9PiB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0VTIE1vZHVsZXMgbWF5IG5vdCBhc3NpZ24gbW9kdWxlLmV4cG9ydHMgb3IgZXhwb3J0cy4qLCBVc2UgRVNNIGV4cG9ydCBzeW50YXgsIGluc3RlYWQ6ICcgKyBtb2R1bGUuaWQpO1xuXHRcdH1cblx0fSk7XG5cdHJldHVybiBtb2R1bGU7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtfbGVhaF9nb3Jvc3BlX2xnX25wbV90ZXN0XzIyMDJcIl0gPSBzZWxmW1wid2VicGFja0NodW5rX2xlYWhfZ29yb3NwZV9sZ19ucG1fdGVzdF8yMjAyXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9pbmRleC50c1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9