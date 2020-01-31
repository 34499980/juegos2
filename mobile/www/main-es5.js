function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-barra-lateral></app-barra-lateral>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/barra-lateral/barra-lateral.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/barra-lateral/barra-lateral.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBarraLateralBarraLateralComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar color=\"primary\">\r\n  <mat-toolbar-row>\r\n    <button mat-icon-button>\r\n      <mat-icon (click)=\"sidenav.toggle()\">menu</mat-icon>\r\n    </button>\r\n    <h1>Juegos</h1>\r\n    <span class=\"menu-spacer\"></span>\r\n    \r\n  </mat-toolbar-row>\r\n\r\n \r\n</mat-toolbar>\r\n\r\n<mat-sidenav-container>\r\n  <mat-sidenav #sidenav>\r\n    <mat-nav-list>\r\n\r\n     <a mat-list-item href=\"user-GENERALA\">Generala</a>\r\n     <a mat-list-item href=\"user-GENERALA-Obligada\">Generala Obligada</a>\r\n     <a mat-list-item href=\"user-TATETI\">TA TE TI</a>       \r\n     \r\n   \r\n\r\n    </mat-nav-list>\r\n  </mat-sidenav>\r\n  <mat-sidenav-content>\r\n    <div style=\"height: 88vh;\">\r\n\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/juegos/Generala/dado.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/juegos/Generala/dado.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppJuegosGeneralaDadoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"forma\">\r\n    {{valor}}\r\n  </div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/juegos/Generala/generala.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/juegos/Generala/generala.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppJuegosGeneralaGeneralaComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"text-align-center\">\r\n  <h1 class=\"text-align-center\">Generala</h1>\r\n <table style=\"width: 50%;\" class='responsive-table' >\r\n  <tr>\r\n    <td>\r\n    <table style=\"width: 20%;\" class='responsive-table'>\r\n       <tr style=\"width: 20%;\">\r\n         <td  *ngFor='let dado of dados ; let i = index' >\r\n          <button  [class.myClass]=\"!dado.selected\" class=\"forma\" (click)=\"Select(i)\"> {{dado.valor}}</button> \r\n         </td>\r\n       </tr>         \r\n    </table>\r\n  </td>\r\n  <td>\r\n    <table style=\"width: 20%; height: 50%;\"border=\"1\" >\r\n      <tr style=\"width: 20%;\" *ngFor='let p of puntaje ; let i = index'>\r\n        <td><a mat-button routerLink=\".\" (click)='MarcarPuntaje(i)'>{{p._nombre}}</a></td><td style=\"width: 50%;\"><a mat-button routerLink=\".\"(click)='MarcarPuntaje(i)'>{{p._valor}}</a></td>\r\n      </tr>\r\n      <tr style=\"width: 20%;\">\r\n        <td><a>Total</a></td><td><a>{{totales}}</a></td>\r\n      </tr>\r\n      \r\n    </table>\r\n  </td>\r\n  </tr>\r\n </table>\r\n <br>\r\n <div style=\"text-align: center\">\r\n  <h1 class=\"text-align-center\">Turno: {{usuario}}</h1>\r\n  <h2 class=\"text-align-center\">Tiros: {{tiros}}</h2>\r\n  <button mat-button color=\"primary\" (click)=\"lanzar()\">{{turno}}</button>\r\n</div>\r\n \r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/juegos/GeneralaObligada/dado.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/juegos/GeneralaObligada/dado.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppJuegosGeneralaObligadaDadoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"forma\">\r\n    {{valor}}\r\n  </div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/juegos/GeneralaObligada/generala.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/juegos/GeneralaObligada/generala.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppJuegosGeneralaObligadaGeneralaComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"text-align-center\">\r\n  <h1 class=\"text-align-center\">Generala Obligada</h1>\r\n <table style=\"width: 50%;\" class='responsive-table' >\r\n  <tr>\r\n    <td>\r\n    <table style=\"width: 20%;\" class='responsive-table'>\r\n       <tr style=\"width: 20%;\">\r\n         <td  *ngFor='let dado of dados ; let i = index' >\r\n          <button  [class.myClass]=\"!dado.selected\" class=\"forma\" (click)=\"Select(i)\"> {{dado.valor}}</button> \r\n         </td>\r\n       </tr>         \r\n    </table>\r\n  </td>\r\n  <td>\r\n    <table style=\"width: 20%; height: 50%;\"border=\"1\" >\r\n      <tr style=\"width: 20%;\" *ngFor='let p of puntaje ; let i = index'>\r\n        <td><a mat-button routerLink=\".\" (click)='MarcarPuntaje(i)'>{{p._nombre}}</a></td><td style=\"width: 50%;\"><a mat-button routerLink=\".\"(click)='MarcarPuntaje(i)'>{{p._valor}}</a></td>\r\n      </tr>\r\n      <tr style=\"width: 20%;\">\r\n        <td><a>Total</a></td><td><a>{{totales}}</a></td>\r\n      </tr>\r\n      \r\n    </table>\r\n  </td>\r\n  </tr>\r\n </table>\r\n <br>\r\n <div style=\"text-align: center\">\r\n  <h1 class=\"text-align-center\">Turno: {{usuario}}</h1>\r\n  <h2 class=\"text-align-center\">Tiros: {{tiros}}</h2>\r\n  <button mat-button color=\"primary\" (click)=\"lanzar()\">{{turno}}</button>\r\n</div>\r\n \r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/juegos/tateti/tateti.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/juegos/tateti/tateti.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppJuegosTatetiTatetiComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div style=\"text-align: center\">\r\n  <h1 class=\"text-align-center\">TA TE TI</h1>\r\n    <button mat-raised-button (click)=\"presion(0,0)\" class=\"casilla\">{{posiciones[0][0]}}</button>\r\n    <button mat-raised-button (click)=\"presion(0,1)\" class=\"casilla\">{{posiciones[0][1]}}</button>\r\n    <button mat-raised-button (click)=\"presion(0,2)\" class=\"casilla\">{{posiciones[0][2]}}</button>\r\n    <br>\r\n    <button mat-raised-button (click)=\"presion(1,0)\" class=\"casilla\">{{posiciones[1][0]}}</button>\r\n    <button mat-raised-button (click)=\"presion(1,1)\" class=\"casilla\">{{posiciones[1][1]}}</button>\r\n    <button mat-raised-button (click)=\"presion(1,2)\" class=\"casilla\">{{posiciones[1][2]}}</button>\r\n    <br>\r\n    <button mat-raised-button (click)=\"presion(2,0)\" class=\"casilla\">{{posiciones[2][0]}}</button>\r\n    <button mat-raised-button (click)=\"presion(2,1)\" class=\"casilla\">{{posiciones[2][1]}}</button>\r\n    <button mat-raised-button (click)=\"presion(2,2)\" class=\"casilla\">{{posiciones[2][2]}}</button>\r\n  </div>\r\n \r\n  <div style=\"text-align: center\">\r\n    <h1 class=\"text-align-center\">Turno:{{usuario}}</h1>\r\n    <button mat-button color=\"primary\" (click)=\"reiniciar()\">Reiniciar</button>\r\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/usuarios/select-users/select-users.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/usuarios/select-users/select-users.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUsuariosSelectUsersSelectUsersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div style=\"text-align: center\">\r\n  <h4 class=\"text-align-center\">{{juego}}</h4>\r\n    <h1 class=\"text-align-center\">Seleccione jugadores</h1>\r\n   <table style=\"width: 100%;\" >\r\n     <tr style=\"width: 100%;\">\r\n       <td class=\"forma\" >\r\n        <mat-form-field class=\"example-full-width\">\r\n            <input matInput placeholder=\"Jugador1\" [(ngModel)]=\"this.jugador1\" >\r\n          </mat-form-field>\r\n       </td>\r\n     </tr>\r\n     <tr style=\"width: 100%;\">\r\n        <td class=\"forma\" >\r\n         <mat-form-field class=\"example-full-width\">\r\n             <input matInput placeholder=\"Jugador2\" [(ngModel)]=\"this.jugador2\" >\r\n           </mat-form-field>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n          <td>\r\n            <div class=\"example-button-row\">\r\n            <button mat-fab color=\"primary\" (click)='IniciarJuego()'>Jugar</button>\r\n            \r\n            </div>\r\n          </td>\r\n      </tr>\r\n   </table>\r\n   <br>  \r\n  </div>\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _juegos_tateti_tateti_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./juegos/tateti/tateti.component */
    "./src/app/juegos/tateti/tateti.component.ts");
    /* harmony import */


    var _juegos_Generala_generala_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./juegos/Generala/generala.component */
    "./src/app/juegos/Generala/generala.component.ts");
    /* harmony import */


    var _usuarios_select_users_select_users_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./usuarios/select-users/select-users.component */
    "./src/app/usuarios/select-users/select-users.component.ts");
    /* harmony import */


    var _juegos_GeneralaObligada_generala_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./juegos/GeneralaObligada/generala.component */
    "./src/app/juegos/GeneralaObligada/generala.component.ts");

    var routes = [{
      path: 'user-TATETI',
      component: _usuarios_select_users_select_users_component__WEBPACK_IMPORTED_MODULE_5__["SelectUsersComponent"],
      data: {
        juego: "TATETI"
      }
    }, {
      path: 'user-GENERALA-Obligada',
      component: _usuarios_select_users_select_users_component__WEBPACK_IMPORTED_MODULE_5__["SelectUsersComponent"],
      data: {
        juego: "GENERALAOBLIGADA"
      }
    }, {
      path: 'user-GENERALA',
      component: _usuarios_select_users_select_users_component__WEBPACK_IMPORTED_MODULE_5__["SelectUsersComponent"],
      data: {
        juego: "GENERALA"
      }
    }, {
      path: 'GENERALA',
      component: _juegos_Generala_generala_component__WEBPACK_IMPORTED_MODULE_4__["GENERALAComponent"]
    }, {
      path: 'GENERALAOBLIGADA',
      component: _juegos_GeneralaObligada_generala_component__WEBPACK_IMPORTED_MODULE_6__["GENERALAObligadaComponent"]
    }, {
      path: 'TATETI',
      component: _juegos_tateti_tateti_component__WEBPACK_IMPORTED_MODULE_3__["TATETIComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Proyecto11';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _barra_lateral_barra_lateral_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./barra-lateral/barra-lateral.component */
    "./src/app/barra-lateral/barra-lateral.component.ts");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/esm2015/sidenav.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/esm2015/list.js");
    /* harmony import */


    var _juegos_juegos_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./juegos/juegos.module */
    "./src/app/juegos/juegos.module.ts");
    /* harmony import */


    var _usuarios_usuarios_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./usuarios/usuarios.module */
    "./src/app/usuarios/usuarios.module.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _barra_lateral_barra_lateral_component__WEBPACK_IMPORTED_MODULE_6__["BarraLateralComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["LayoutModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"], _juegos_juegos_module__WEBPACK_IMPORTED_MODULE_13__["JuegosModule"], _usuarios_usuarios_module__WEBPACK_IMPORTED_MODULE_14__["UsuariosModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/barra-lateral/barra-lateral.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/barra-lateral/barra-lateral.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBarraLateralBarraLateralComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".sidenav-container {\r\n  height: 100%;\r\n}\r\n\r\n.sidenav {\r\n  width: 200px;\r\n}\r\n\r\n.sidenav .mat-toolbar {\r\n  background: inherit;\r\n}\r\n\r\n.mat-toolbar.mat-primary {\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 1;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFycmEtbGF0ZXJhbC9iYXJyYS1sYXRlcmFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx3QkFBZ0I7RUFBaEIsZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTixVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9iYXJyYS1sYXRlcmFsL2JhcnJhLWxhdGVyYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uc2lkZW5hdiB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG4uc2lkZW5hdiAubWF0LXRvb2xiYXIge1xyXG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/barra-lateral/barra-lateral.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/barra-lateral/barra-lateral.component.ts ***!
    \**********************************************************/

  /*! exports provided: BarraLateralComponent */

  /***/
  function srcAppBarraLateralBarraLateralComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BarraLateralComponent", function () {
      return BarraLateralComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var BarraLateralComponent = function BarraLateralComponent(breakpointObserver) {
      _classCallCheck(this, BarraLateralComponent);

      this.breakpointObserver = breakpointObserver;
      this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
        return result.matches;
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])());
    };

    BarraLateralComponent.ctorParameters = function () {
      return [{
        type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]
      }];
    };

    BarraLateralComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-barra-lateral',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./barra-lateral.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/barra-lateral/barra-lateral.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./barra-lateral.component.css */
      "./src/app/barra-lateral/barra-lateral.component.css")).default]
    })], BarraLateralComponent);
    /***/
  },

  /***/
  "./src/app/juegos/Generala/dado.component.css":
  /*!****************************************************!*\
    !*** ./src/app/juegos/Generala/dado.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppJuegosGeneralaDadoComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".forma {\r\n    width: 5rem;  \r\n    height: 5rem;\r\n    font-size: 3rem;\r\n    color:white;\r\n    background-color: black;\r\n    border-radius: 1rem;\r\n    display: -webkit-inline-box;\r\n    display: inline-flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    margin:10px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvanVlZ29zL0dlbmVyYWxhL2RhZG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDJCQUFvQjtJQUFwQixvQkFBb0I7SUFDcEIsd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2Qix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLFdBQVc7RUFDYiIsImZpbGUiOiJzcmMvYXBwL2p1ZWdvcy9HZW5lcmFsYS9kYWRvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybWEge1xyXG4gICAgd2lkdGg6IDVyZW07ICBcclxuICAgIGhlaWdodDogNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46MTBweDtcclxuICB9Il19 */";
    /***/
  },

  /***/
  "./src/app/juegos/Generala/dado.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/juegos/Generala/dado.component.ts ***!
    \***************************************************/

  /*! exports provided: DadoComponent */

  /***/
  function srcAppJuegosGeneralaDadoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DadoComponent", function () {
      return DadoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DadoComponent =
    /*#__PURE__*/
    function () {
      function DadoComponent() {
        _classCallCheck(this, DadoComponent);

        this.selected = true;
      }

      _createClass(DadoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.valor = Math.trunc(Math.random() * 6) + 1;
        }
      }, {
        key: "lanzar",
        value: function lanzar() {
          this.valor = Math.trunc(Math.random() * 6) + 1;
        }
      }]);

      return DadoComponent;
    }();

    DadoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dado',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dado.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/juegos/Generala/dado.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dado.component.css */
      "./src/app/juegos/Generala/dado.component.css")).default]
    })], DadoComponent);
    /***/
  },

  /***/
  "./src/app/juegos/Generala/generala.component.css":
  /*!********************************************************!*\
    !*** ./src/app/juegos/Generala/generala.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppJuegosGeneralaGeneralaComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".forma {\r\n  width: 5rem;  \r\n  height: 5rem;\r\n  font-size: 3rem;\r\n  color:white;\r\n  background-color: black;\r\n  border-radius: 1rem;\r\n  display: -webkit-inline-box;\r\n  display: inline-flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  margin:10px;\r\n  text-align: center;\r\n}\r\n.text-align-center{\r\n  text-align: center;\r\n}\r\n.myClass{\r\n  color : darkgray;\r\n}\r\ntable {\r\n  height: 400px;\r\n  width: 100%;\r\n  border-spacing: collapse;\r\n}\r\ntr {\r\n  padding: 1;\r\n}\r\n@media screen and (max-width: 500px) {\r\n  table tr td:nth-child(3) {\r\n      display: block;\r\n  }\r\n  table tr td:nth-child(1), table tr td:nth-child(2) {\r\n      display: inline-block;\r\n      width: 50px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvanVlZ29zL0dlbmVyYWxhL2dlbmVyYWxhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQiwyQkFBb0I7RUFBcEIsb0JBQW9CO0VBQ3BCLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCx3QkFBd0I7QUFDMUI7QUFFQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0U7TUFDSSxjQUFjO0VBQ2xCO0VBQ0E7TUFDSSxxQkFBcUI7TUFDckIsV0FBVztFQUNmO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9qdWVnb3MvR2VuZXJhbGEvZ2VuZXJhbGEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtYSB7XHJcbiAgd2lkdGg6IDVyZW07ICBcclxuICBoZWlnaHQ6IDVyZW07XHJcbiAgZm9udC1zaXplOiAzcmVtO1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW46MTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnRleHQtYWxpZ24tY2VudGVye1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubXlDbGFzc3tcclxuICBjb2xvciA6IGRhcmtncmF5O1xyXG59XHJcbnRhYmxlIHtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1zcGFjaW5nOiBjb2xsYXBzZTtcclxufVxyXG5cclxudHIge1xyXG4gIHBhZGRpbmc6IDE7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICB0YWJsZSB0ciB0ZDpudGgtY2hpbGQoMykge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgdGFibGUgdHIgdGQ6bnRoLWNoaWxkKDEpLCB0YWJsZSB0ciB0ZDpudGgtY2hpbGQoMikge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHdpZHRoOiA1MHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/juegos/Generala/generala.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/juegos/Generala/generala.component.ts ***!
    \*******************************************************/

  /*! exports provided: GENERALAComponent */

  /***/
  function srcAppJuegosGeneralaGeneralaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GENERALAComponent", function () {
      return GENERALAComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _dado_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./dado.component */
    "./src/app/juegos/Generala/dado.component.ts");
    /* harmony import */


    var src_app_usuarios_usuario_VecUsuarios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/usuarios/usuario/VecUsuarios */
    "./src/app/usuarios/usuario/VecUsuarios.ts");
    /* harmony import */


    var src_app_usuarios_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/usuarios/usuario/usuario.component */
    "./src/app/usuarios/usuario/usuario.component.ts");

    var GENERALAComponent =
    /*#__PURE__*/
    function () {
      function GENERALAComponent() {
        _classCallCheck(this, GENERALAComponent);

        this.dados = [];
        this.usuario = '';
        this.usuarioID = 0;
        this.tiros = 0;
        this.turno = 'Jugar';
        this.vecUser = src_app_usuarios_usuario_VecUsuarios__WEBPACK_IMPORTED_MODULE_3__["VecUsuario"].getInstance();
      }

      _createClass(GENERALAComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.cantidad = 5;

          for (var i = 0; i < this.cantidad; i++) {
            this.dados.push(new _dado_component__WEBPACK_IMPORTED_MODULE_2__["DadoComponent"]());
          }

          for (var _i = 0; _i < this.cantidad; _i++) {
            this.dados[_i].valor = Math.trunc(Math.random() * 6) + 1;
          }

          for (var _i2 = 0; _i2 < this.vecUser["vec"].length; _i2++) {
            this.vecUser["vec"][_i2]._puntajes.push(new src_app_usuarios_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_4__["puntaje"]('1', '-'));

            this.vecUser["vec"][_i2]._puntajes.push(new src_app_usuarios_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_4__["puntaje"]('2', '-'));

            this.vecUser["vec"][_i2]._puntajes.push(new src_app_usuarios_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_4__["puntaje"]('3', '-'));

            this.vecUser["vec"][_i2]._puntajes.push(new src_app_usuarios_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_4__["puntaje"]('4', '-'));

            this.vecUser["vec"][_i2]._puntajes.push(new src_app_usuarios_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_4__["puntaje"]('5', '-'));

            this.vecUser["vec"][_i2]._puntajes.push(new src_app_usuarios_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_4__["puntaje"]('6', '-'));

            this.vecUser["vec"][_i2]._puntajes.push(new src_app_usuarios_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_4__["puntaje"]('Escalera', '-'));

            this.vecUser["vec"][_i2]._puntajes.push(new src_app_usuarios_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_4__["puntaje"]('Full', '-'));

            this.vecUser["vec"][_i2]._puntajes.push(new src_app_usuarios_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_4__["puntaje"]('Poker', '-'));

            this.vecUser["vec"][_i2]._puntajes.push(new src_app_usuarios_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_4__["puntaje"]('Generala', '-'));

            this.vecUser["vec"][_i2]._puntajes.push(new src_app_usuarios_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_4__["puntaje"]('Generala doble', '-'));
          }

          this.cambiarJugador();
        }
      }, {
        key: "lanzar",
        value: function lanzar() {
          if (this.tiros != 3) {
            this.turno = 'Lanzar';

            for (var i = 0; i < this.cantidad; i++) {
              if (this.dados[i].selected == true) this.dados[i].lanzar();
            }

            this.tiros++;
          } else if (this.turno == 'Jugar') {
            this.cambiarJugador();
          }
        }
      }, {
        key: "cambiarJugador",
        value: function cambiarJugador() {
          this.usuario = this.vecUser["vec"][this.usuarioID]._nombre;
          this.usuarioID = this.vecUser["vec"][this.usuarioID]._jugador;
          var count = this.vecUser["vec"].length;

          if (Number(this.usuarioID) == count) {
            this.usuarioID = 0;
          }

          this.turno = 'Jugar';
          this.puntaje = this.vecUser["vec"][this.usuarioID]._puntajes;
          this.totales = this.CalcularTotales(this.vecUser["vec"][this.usuarioID]._puntajes);
          this.ReiniciarDados();
          this.tiros = 0;
        }
      }, {
        key: "Select",
        value: function Select(index) {
          if (this.turno == 'Lanzar') {
            if (this.dados[index].selected == true) {
              this.dados[index].selected = false;
            } else {
              this.dados[index].selected = true;
            }
          }
        }
      }, {
        key: "ReiniciarDados",
        value: function ReiniciarDados() {
          for (var i = 0; i < this.cantidad; i++) {
            this.dados[i].selected = true;
          }
        }
      }, {
        key: "MarcarPuntaje",
        value: function MarcarPuntaje(index) {
          if (this.turno == 'Lanzar') {
            var posicion = Number(this.vecUser["vec"][this.usuarioID]._puntajes[index]._nombre);
            var vecPuntaje = [];
            var numero = this.vecUser["vec"][this.usuarioID]._puntajes[index]._valor = '0';

            if (index <= 5) {
              var numero2 = Number(this.vecUser["vec"][this.usuarioID]._puntajes[index]._nombre);

              for (var i = 0; i < this.cantidad; i++) {
                if (this.dados[i].valor == numero2) vecPuntaje.push(this.dados[i].valor);
              }

              if (vecPuntaje.length != 0) {
                var punto = Number(numero);
                var j = vecPuntaje.length;

                for (var _i3 = 0; _i3 < j; _i3++) {
                  punto += vecPuntaje.pop();
                }

                this.vecUser["vec"][this.usuarioID]._puntajes[index]._valor = String(punto);
              }
            } else {
              for (var _i4 = 0; _i4 < this.cantidad; _i4++) {
                vecPuntaje.push(this.dados[_i4].valor);
              }

              vecPuntaje.sort(); //this.Sort(vecPuntaje);

              switch (this.vecUser["vec"][this.usuarioID]._puntajes[index]._nombre) {
                case 'Escalera':
                  if (this.ValidarEscalera(vecPuntaje)) {
                    if (this.tiros == 1) {
                      this.vecUser["vec"][this.usuarioID]._puntajes[index]._valor = '30';
                    } else {
                      this.vecUser["vec"][this.usuarioID]._puntajes[index]._valor = '25';
                    }
                  } else {
                    this.vecUser["vec"][this.usuarioID]._puntajes[index]._valor = '0';
                  }

                  break;

                case 'Full':
                  if (this.ValidarIguales(vecPuntaje, 'FULL')) {
                    if (this.tiros == 1) {
                      this.vecUser["vec"][this.usuarioID]._puntajes[index]._valor = '35';
                    } else {
                      this.vecUser["vec"][this.usuarioID]._puntajes[index]._valor = '30';
                    }
                  } else {
                    this.vecUser["vec"][this.usuarioID]._puntajes[index]._valor = '0';
                  }

                  break;

                case 'Poker':
                  if (this.ValidarIguales(vecPuntaje, 'POKER')) {
                    if (this.tiros == 1) {
                      this.vecUser["vec"][this.usuarioID]._puntajes[index]._valor = '45';
                    } else {
                      this.vecUser["vec"][this.usuarioID]._puntajes[index]._valor = '40';
                    }
                  } else {
                    this.vecUser["vec"][this.usuarioID]._puntajes[index]._valor = '0';
                  }

                  break;

                case 'Generala':
                  if (this.ValidarIguales(vecPuntaje, 'GENERALA')) {
                    if (this.tiros == 1) {
                      this.vecUser["vec"][this.usuarioID]._puntajes[index]._valor = '100';
                    } else {
                      this.vecUser["vec"][this.usuarioID]._puntajes[index]._valor = '50';
                    }
                  } else {
                    this.vecUser["vec"][this.usuarioID]._puntajes[index]._valor = '0';
                  }

                  break;

                case 'Generala Doble':
                  if (this.ValidarIguales(vecPuntaje, 'GENERALA DOBLE')) {
                    if (this.tiros == 1) {
                      if (this.vecUser["vec"][this.usuarioID]._puntajes[index - 1]._valor == '-') {
                        this.vecUser["vec"][this.usuarioID]._puntajes[index - 1]._valor = '100';
                      } else {
                        this.vecUser["vec"][this.usuarioID]._puntajes[index]._valor = '200';
                      }
                    } else {
                      if (this.vecUser["vec"][this.usuarioID]._puntajes[index - 1]._valor == '-') {
                        this.vecUser["vec"][this.usuarioID]._puntajes[index - 1]._valor = '50';
                      } else {
                        this.vecUser["vec"][this.usuarioID]._puntajes[index]._valor = '100';
                      }
                    }
                  } else {
                    this.vecUser["vec"][this.usuarioID]._puntajes[index]._valor = '0';
                  }

                  break;
              }
            }

            this.totales = this.CalcularTotales(this.vecUser["vec"][this.usuarioID]._puntajes);
            this.turno = 'Jugar';
            this.tiros = 3;

            if (this.ValidarFinal()) {
              alert('El ganador es: ' + this.ganador);
            }
          }
        }
      }, {
        key: "ValidarEscalera",
        value: function ValidarEscalera(array) {
          var i = 0;
          var flag = true;

          while (i < array.length - 1 && flag) {
            if (array[i] != array[i] - 1) {
              flag = false;
            }
          }

          if (array[0] == 1 && array[1] == 3 && array[2] == 4 && array[3] == 5 && array[4] == 6) {
            flag = true;
          }

          return flag;
        }
      }, {
        key: "ValidarIguales",
        value: function ValidarIguales(array, jugada) {
          var flag = false;
          var anterior;
          var cont = 1;
          var cont2 = 0;
          var cont3 = 0;
          var numeros = 0; // let i = 0

          var siguiente = true;

          for (var i = 0; i < array.length - 1; i++) {
            if (array[i] != array[i + 1]) {
              numeros++;
            }

            switch (numeros) {
              case 0:
                cont++;
                break;

              case 1:
                cont2++;
                break;
            }
          }

          flag = false;

          switch (jugada) {
            case 'FULL':
              if (cont == 2 && cont2 == 3 || cont == 2 && cont2 == 3) {
                flag = true;
              }

              break;

            case 'POKER':
              if (cont == 4 || cont2 == 4) {
                flag = true;
              }

              break;

            case 'GENERALA':
              if (cont == 5 || cont2 == 5) {
                flag = true;
              }

              break;

            case 'GENERALA DOBLE':
              if (cont == 5 || cont2 == 5) {
                flag = true;
              }

              break;
          }

          return flag;
        }
      }, {
        key: "CalcularTotales",
        value: function CalcularTotales(array) {
          var total = 0;

          for (var i = 0; i < array.length; i++) {
            if (array[i]._valor != '-') {
              total += Number(array[i]._valor);
            }
          }

          return total;
        }
      }, {
        key: "ValidarFinal",
        value: function ValidarFinal() {
          var bFinal = true;
          var vecGanador = [];

          for (var i = 0; i < this.vecUser["vec"].length; i++) {
            var valor = 0;

            for (var j = 0; j < this.vecUser["vec"][i]._puntajes.length; j++) {
              if (this.vecUser["vec"][i]._puntajes[j]._valor != '-') {
                valor += Number(this.vecUser["vec"][i]._puntajes[j]._valor);
              } else {
                bFinal = false;
                break;
              }

              vecGanador.push(this.vecUser["vec"][i]._nombre, valor);
            }
          }

          if (bFinal) {
            var max = 0;

            for (var _i5 = 0; _i5 < vecGanador.length; _i5++) {
              if (vecGanador[_i5].valor > max) {
                max = vecGanador[_i5].valor;
              }
            }
          }

          return bFinal;
        }
      }]);

      return GENERALAComponent;
    }();

    GENERALAComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-generala',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./generala.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/juegos/Generala/generala.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./generala.component.css */
      "./src/app/juegos/Generala/generala.component.css")).default]
    })], GENERALAComponent);
    /***/
  },

  /***/
  "./src/app/juegos/GeneralaObligada/dado.component.css":
  /*!************************************************************!*\
    !*** ./src/app/juegos/GeneralaObligada/dado.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppJuegosGeneralaObligadaDadoComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".forma {\r\n    width: 5rem;  \r\n    height: 5rem;\r\n    font-size: 3rem;\r\n    color:white;\r\n    background-color: black;\r\n    border-radius: 1rem;\r\n    display: -webkit-inline-box;\r\n    display: inline-flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    margin:10px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvanVlZ29zL0dlbmVyYWxhT2JsaWdhZGEvZGFkby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2YsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsMkJBQW9CO0lBQXBCLG9CQUFvQjtJQUNwQix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsV0FBVztFQUNiIiwiZmlsZSI6InNyYy9hcHAvanVlZ29zL0dlbmVyYWxhT2JsaWdhZGEvZGFkby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm1hIHtcclxuICAgIHdpZHRoOiA1cmVtOyAgXHJcbiAgICBoZWlnaHQ6IDVyZW07XHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOjEwcHg7XHJcbiAgfSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/juegos/GeneralaObligada/dado.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/juegos/GeneralaObligada/dado.component.ts ***!
    \***********************************************************/

  /*! exports provided: DadoComponent */

  /***/
  function srcAppJuegosGeneralaObligadaDadoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DadoComponent", function () {
      return DadoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DadoComponent =
    /*#__PURE__*/
    function () {
      function DadoComponent() {
        _classCallCheck(this, DadoComponent);

        this.selected = true;
      }

      _createClass(DadoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.valor = Math.trunc(Math.random() * 6) + 1;
        }
      }, {
        key: "lanzar",
        value: function lanzar() {
          this.valor = Math.trunc(Math.random() * 6) + 1;
        }
      }]);

      return DadoComponent;
    }();

    DadoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dado',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dado.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/juegos/GeneralaObligada/dado.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dado.component.css */
      "./src/app/juegos/GeneralaObligada/dado.component.css")).default]
    })], DadoComponent);
    /***/
  },

  /***/
  "./src/app/juegos/GeneralaObligada/generala.component.css":
  /*!****************************************************************!*\
    !*** ./src/app/juegos/GeneralaObligada/generala.component.css ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppJuegosGeneralaObligadaGeneralaComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".forma {\r\n    width: 5rem;  \r\n    height: 5rem;\r\n    font-size: 3rem;\r\n    color:white;\r\n    background-color: black;\r\n    border-radius: 1rem;\r\n    display: -webkit-inline-box;\r\n    display: inline-flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    margin:10px;\r\n    text-align: center;\r\n  }\r\n  .text-align-center{\r\n    text-align: center;\r\n  }\r\n  .myClass{\r\n    color : darkgray;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvanVlZ29zL0dlbmVyYWxhT2JsaWdhZGEvZ2VuZXJhbGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDJCQUFvQjtJQUFwQixvQkFBb0I7SUFDcEIsd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2Qix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCIiwiZmlsZSI6InNyYy9hcHAvanVlZ29zL0dlbmVyYWxhT2JsaWdhZGEvZ2VuZXJhbGEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtYSB7XHJcbiAgICB3aWR0aDogNXJlbTsgIFxyXG4gICAgaGVpZ2h0OiA1cmVtO1xyXG4gICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjoxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAudGV4dC1hbGlnbi1jZW50ZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5teUNsYXNze1xyXG4gICAgY29sb3IgOiBkYXJrZ3JheTtcclxuICB9XHJcbiAgIl19 */";
    /***/
  },

  /***/
  "./src/app/juegos/GeneralaObligada/generala.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/juegos/GeneralaObligada/generala.component.ts ***!
    \***************************************************************/

  /*! exports provided: GENERALAObligadaComponent */

  /***/
  function srcAppJuegosGeneralaObligadaGeneralaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GENERALAObligadaComponent", function () {
      return GENERALAObligadaComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _dado_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./dado.component */
    "./src/app/juegos/GeneralaObligada/dado.component.ts");
    /* harmony import */


    var src_app_usuarios_usuario_VecUsuarios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/usuarios/usuario/VecUsuarios */
    "./src/app/usuarios/usuario/VecUsuarios.ts");
    /* harmony import */


    var src_app_usuarios_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/usuarios/usuario/usuario.component */
    "./src/app/usuarios/usuario/usuario.component.ts");

    var GENERALAObligadaComponent =
    /*#__PURE__*/
    function () {
      function GENERALAObligadaComponent() {
        _classCallCheck(this, GENERALAObligadaComponent);

        this.dados = [];
        this.usuario = '';
        this.usuarioID = 0;
        this.tiros = 0;
        this.turno = 'Jugar';
        this.inidiceJuego = 0;
        this.vecUser = src_app_usuarios_usuario_VecUsuarios__WEBPACK_IMPORTED_MODULE_3__["VecUsuario"].getInstance();
      }

      _createClass(GENERALAObligadaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.cantidad = 5;

          for (var i = 0; i < this.cantidad; i++) {
            this.dados.push(new _dado_component__WEBPACK_IMPORTED_MODULE_2__["DadoComponent"]());
          }

          for (var _i6 = 0; _i6 < this.cantidad; _i6++) {
            this.dados[_i6].valor = Math.trunc(Math.random() * 6) + 1;
          }

          for (var _i7 = 0; _i7 < this.vecUser["vec"].length; _i7++) {
            this.vecUser["vec"][_i7]._puntajes.push(new src_app_usuarios_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_4__["puntaje"]('1', '-'));

            this.vecUser["vec"][_i7]._puntajes.push(new src_app_usuarios_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_4__["puntaje"]('2', '-'));

            this.vecUser["vec"][_i7]._puntajes.push(new src_app_usuarios_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_4__["puntaje"]('3', '-'));

            this.vecUser["vec"][_i7]._puntajes.push(new src_app_usuarios_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_4__["puntaje"]('4', '-'));

            this.vecUser["vec"][_i7]._puntajes.push(new src_app_usuarios_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_4__["puntaje"]('5', '-'));

            this.vecUser["vec"][_i7]._puntajes.push(new src_app_usuarios_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_4__["puntaje"]('6', '-'));

            this.vecUser["vec"][_i7]._puntajes.push(new src_app_usuarios_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_4__["puntaje"]('Escalera', '-'));

            this.vecUser["vec"][_i7]._puntajes.push(new src_app_usuarios_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_4__["puntaje"]('Full', '-'));

            this.vecUser["vec"][_i7]._puntajes.push(new src_app_usuarios_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_4__["puntaje"]('Poker', '-'));

            this.vecUser["vec"][_i7]._puntajes.push(new src_app_usuarios_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_4__["puntaje"]('Generala', '-'));

            this.vecUser["vec"][_i7]._puntajes.push(new src_app_usuarios_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_4__["puntaje"]('Generala doble', '-'));
          }

          this.cambiarJugador();
        }
      }, {
        key: "lanzar",
        value: function lanzar() {
          if (this.tiros != 3) {
            this.turno = 'Lanzar';

            for (var i = 0; i < this.cantidad; i++) {
              if (this.dados[i].selected == true) this.dados[i].lanzar();
            }

            this.tiros++;
          } else if (this.turno == 'Jugar') {
            this.cambiarJugador();

            if (this.vecUser["vec"][this.usuarioID]._jugador == this.vecUser["vec"].length) {
              this.inidiceJuego++;
            }
          }
        }
      }, {
        key: "cambiarJugador",
        value: function cambiarJugador() {
          this.usuario = this.vecUser["vec"][this.usuarioID]._nombre;
          this.usuarioID = this.vecUser["vec"][this.usuarioID]._jugador;
          var count = this.vecUser["vec"].length;

          if (Number(this.usuarioID) == count) {
            this.usuarioID = 0;
          }

          this.turno = 'Jugar';
          this.puntaje = this.vecUser["vec"][this.usuarioID]._puntajes;
          this.totales = this.CalcularTotales(this.vecUser["vec"][this.usuarioID]._puntajes);
          this.ReiniciarDados();
          this.tiros = 0;
        }
      }, {
        key: "Select",
        value: function Select(index) {
          if (this.turno == 'Lanzar') {
            if (this.dados[index].selected == true) {
              this.dados[index].selected = false;
            } else {
              this.dados[index].selected = true;
            }
          }
        }
      }, {
        key: "ReiniciarDados",
        value: function ReiniciarDados() {
          for (var i = 0; i < this.cantidad; i++) {
            this.dados[i].selected = true;
          }
        }
      }, {
        key: "MarcarPuntaje",
        value: function MarcarPuntaje(index) {
          if (this.turno == 'Lanzar') {
            var posicion = Number(this.vecUser["vec"][this.usuarioID]._puntajes[this.inidiceJuego]._nombre);
            var vecPuntaje = [];
            var numero = this.vecUser["vec"][this.usuarioID]._puntajes[this.inidiceJuego]._valor = '0';

            if (this.inidiceJuego <= 5) {
              var numero2 = Number(this.vecUser["vec"][this.usuarioID]._puntajes[this.inidiceJuego]._nombre);

              for (var i = 0; i < this.cantidad; i++) {
                if (this.dados[i].valor == numero2) vecPuntaje.push(this.dados[i].valor);
              }

              if (vecPuntaje.length != 0) {
                var punto = Number(numero);
                var j = vecPuntaje.length;

                for (var _i8 = 0; _i8 < j; _i8++) {
                  punto += vecPuntaje.pop();
                }

                this.vecUser["vec"][this.usuarioID]._puntajes[this.inidiceJuego]._valor = String(punto);
              }
            } else {
              for (var _i9 = 0; _i9 < this.cantidad; _i9++) {
                vecPuntaje.push(this.dados[_i9].valor);
              }

              vecPuntaje.sort(); //this.Sort(vecPuntaje);

              switch (this.vecUser["vec"][this.usuarioID]._puntajes[this.inidiceJuego]._nombre) {
                case 'Escalera':
                  if (this.ValidarEscalera(vecPuntaje)) {
                    if (this.tiros == 1) {
                      this.vecUser["vec"][this.usuarioID]._puntajes[this.inidiceJuego]._valor = '30';
                    } else {
                      this.vecUser["vec"][this.usuarioID]._puntajes[this.inidiceJuego]._valor = '25';
                    }
                  } else {
                    this.vecUser["vec"][this.usuarioID]._puntajes[this.inidiceJuego]._valor = '0';
                  }

                  break;

                case 'Full':
                  if (this.ValidarIguales(vecPuntaje, 'FULL')) {
                    if (this.tiros == 1) {
                      this.vecUser["vec"][this.usuarioID]._puntajes[this.inidiceJuego]._valor = '35';
                    } else {
                      this.vecUser["vec"][this.usuarioID]._puntajes[this.inidiceJuego]._valor = '30';
                    }
                  } else {
                    this.vecUser["vec"][this.usuarioID]._puntajes[this.inidiceJuego]._valor = '0';
                  }

                  break;

                case 'Poker':
                  if (this.ValidarIguales(vecPuntaje, 'POKER')) {
                    if (this.tiros == 1) {
                      this.vecUser["vec"][this.usuarioID]._puntajes[this.inidiceJuego]._valor = '45';
                    } else {
                      this.vecUser["vec"][this.usuarioID]._puntajes[this.inidiceJuego]._valor = '40';
                    }
                  } else {
                    this.vecUser["vec"][this.usuarioID]._puntajes[this.inidiceJuego]._valor = '0';
                  }

                  break;

                case 'Generala':
                  if (this.ValidarIguales(vecPuntaje, 'GENERALA')) {
                    if (this.tiros == 1) {
                      this.vecUser["vec"][this.usuarioID]._puntajes[this.inidiceJuego]._valor = '100';
                    } else {
                      this.vecUser["vec"][this.usuarioID]._puntajes[this.inidiceJuego]._valor = '50';
                    }
                  } else {
                    this.vecUser["vec"][this.usuarioID]._puntajes[this.inidiceJuego]._valor = '0';
                  }

                  break;

                case 'Generala Doble':
                  if (this.ValidarIguales(vecPuntaje, 'GENERALA DOBLE')) {
                    if (this.tiros == 1) {
                      this.vecUser["vec"][this.usuarioID]._puntajes[this.inidiceJuego]._valor = '200';
                    } else {
                      this.vecUser["vec"][this.usuarioID]._puntajes[this.inidiceJuego]._valor = '100';
                    }
                  } else {
                    this.vecUser["vec"][this.usuarioID]._puntajes[this.inidiceJuego]._valor = '0';
                  }

                  break;
              }
            }

            this.totales = this.CalcularTotales(this.vecUser["vec"][this.usuarioID]._puntajes);
            this.turno = 'Jugar';
            this.tiros = 3;

            if (this.ValidarFinal()) {
              alert('El ganador es: ' + this.ganador);
            }
          }
        }
      }, {
        key: "ValidarEscalera",
        value: function ValidarEscalera(array) {
          var i = 0;
          var flag = true;

          while (i < array.length - 1 && flag) {
            if (array[i] != array[i] - 1) {
              flag = false;
            }
          }

          if (array[0] == 1 && array[1] == 3 && array[2] == 4 && array[3] == 5 && array[4] == 6) {
            flag = true;
          }

          return flag;
        }
      }, {
        key: "ValidarIguales",
        value: function ValidarIguales(array, jugada) {
          var flag = false;
          var anterior;
          var cont = 1;
          var cont2 = 0;
          var cont3 = 0;
          var numeros = 0; // let i = 0

          var siguiente = true;

          for (var i = 0; i < array.length - 1; i++) {
            if (array[i] != array[i + 1]) {
              numeros++;
            }

            switch (numeros) {
              case 0:
                cont++;
                break;

              case 1:
                cont2++;
                break;
            }
          }

          flag = false;

          switch (jugada) {
            case 'FULL':
              if (cont == 2 && cont2 == 3 || cont == 2 && cont2 == 3) {
                flag = true;
              }

              break;

            case 'POKER':
              if (cont == 4 || cont2 == 4) {
                flag = true;
              }

              break;

            case 'GENERALA':
              if (cont == 5 || cont2 == 5) {
                flag = true;
              }

              break;

            case 'GENERALA DOBLE':
              if (cont == 5 || cont2 == 5) {
                flag = true;
              }

              break;
          }

          return flag;
        }
      }, {
        key: "CalcularTotales",
        value: function CalcularTotales(array) {
          var total = 0;

          for (var i = 0; i < array.length; i++) {
            if (array[i]._valor != '-') {
              total += Number(array[i]._valor);
            }
          }

          return total;
        }
      }, {
        key: "ValidarFinal",
        value: function ValidarFinal() {
          var bFinal = true;
          var vecGanador = [];

          for (var i = 0; i < this.vecUser["vec"].length; i++) {
            var valor = 0;

            for (var j = 0; j < this.vecUser["vec"][i]._puntajes.length; j++) {
              if (this.vecUser["vec"][i]._puntajes[j]._valor != '-') {
                valor += Number(this.vecUser["vec"][i]._puntajes[j]._valor);
              } else {
                bFinal = false;
                break;
              }

              vecGanador.push(this.vecUser["vec"][i]._nombre, valor);
            }
          }

          if (bFinal) {
            var max = 0;

            for (var _i10 = 0; _i10 < vecGanador.length; _i10++) {
              if (vecGanador[_i10].valor > max) {
                max = vecGanador[_i10].valor;
              }
            }
          }

          return bFinal;
        }
      }]);

      return GENERALAObligadaComponent;
    }();

    GENERALAObligadaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-generala',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./generala.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/juegos/GeneralaObligada/generala.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./generala.component.css */
      "./src/app/juegos/GeneralaObligada/generala.component.css")).default]
    })], GENERALAObligadaComponent);
    /***/
  },

  /***/
  "./src/app/juegos/juegos.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/juegos/juegos.module.ts ***!
    \*****************************************/

  /*! exports provided: JuegosModule */

  /***/
  function srcAppJuegosJuegosModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JuegosModule", function () {
      return JuegosModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _tateti_tateti_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./tateti/tateti.component */
    "./src/app/juegos/tateti/tateti.component.ts");
    /* harmony import */


    var _Generala_generala_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./Generala/generala.component */
    "./src/app/juegos/Generala/generala.component.ts");
    /* harmony import */


    var _usuarios_usuarios_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../usuarios/usuarios.module */
    "./src/app/usuarios/usuarios.module.ts");
    /* harmony import */


    var _GeneralaObligada_generala_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./GeneralaObligada/generala.component */
    "./src/app/juegos/GeneralaObligada/generala.component.ts");

    var JuegosModule = function JuegosModule() {
      _classCallCheck(this, JuegosModule);
    };

    JuegosModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_tateti_tateti_component__WEBPACK_IMPORTED_MODULE_4__["TATETIComponent"], _Generala_generala_component__WEBPACK_IMPORTED_MODULE_5__["GENERALAComponent"], _GeneralaObligada_generala_component__WEBPACK_IMPORTED_MODULE_7__["GENERALAObligadaComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _usuarios_usuarios_module__WEBPACK_IMPORTED_MODULE_6__["UsuariosModule"]],
      providers: [],
      exports: [_tateti_tateti_component__WEBPACK_IMPORTED_MODULE_4__["TATETIComponent"], _Generala_generala_component__WEBPACK_IMPORTED_MODULE_5__["GENERALAComponent"], _GeneralaObligada_generala_component__WEBPACK_IMPORTED_MODULE_7__["GENERALAObligadaComponent"]]
    })], JuegosModule);
    /***/
  },

  /***/
  "./src/app/juegos/tateti/tateti.component.css":
  /*!****************************************************!*\
    !*** ./src/app/juegos/tateti/tateti.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppJuegosTatetiTatetiComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".casilla {\r\n    height: 5rem;\r\n    margin: 0.5rem;\r\n    font-size: 3rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvanVlZ29zL3RhdGV0aS90YXRldGkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2p1ZWdvcy90YXRldGkvdGF0ZXRpLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FzaWxsYSB7XHJcbiAgICBoZWlnaHQ6IDVyZW07XHJcbiAgICBtYXJnaW46IDAuNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/juegos/tateti/tateti.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/juegos/tateti/tateti.component.ts ***!
    \***************************************************/

  /*! exports provided: TATETIComponent */

  /***/
  function srcAppJuegosTatetiTatetiComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TATETIComponent", function () {
      return TATETIComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_usuarios_usuario_VecUsuarios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/usuarios/usuario/VecUsuarios */
    "./src/app/usuarios/usuario/VecUsuarios.ts");

    var TATETIComponent =
    /*#__PURE__*/
    function () {
      function TATETIComponent(vecUsers) {
        _classCallCheck(this, TATETIComponent);

        this.vecUsers = vecUsers;
        this.posiciones = [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']];
        this.usuario = '';
        this.jugador = 'O';
        this.vecUser = src_app_usuarios_usuario_VecUsuarios__WEBPACK_IMPORTED_MODULE_2__["VecUsuario"].getInstance();
      }

      _createClass(TATETIComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.usuario = this.vecUser["vec"][0]._nombre;
        }
      }, {
        key: "presion",
        value: function presion(fila, columna) {
          if (this.posiciones[fila][columna] == '-') {
            this.posiciones[fila][columna] = this.jugador;
            this.verificarGano('X');
            this.verificarGano('O');
            this.cambiarJugador();
          }
        }
      }, {
        key: "reiniciar",
        value: function reiniciar() {
          for (var f = 0; f < 3; f++) {
            for (var c = 0; c < 3; c++) {
              this.posiciones[f][c] = '-';
            }
          }
        }
      }, {
        key: "verificarGano",
        value: function verificarGano(ficha) {
          if (this.posiciones[0][0] == ficha && this.posiciones[0][1] == ficha && this.posiciones[0][2] == ficha) alert('Gano:' + this.usuario);
          if (this.posiciones[1][0] == ficha && this.posiciones[1][1] == ficha && this.posiciones[1][2] == ficha) alert('Gano:' + this.usuario);
          if (this.posiciones[2][0] == ficha && this.posiciones[2][1] == ficha && this.posiciones[2][2] == ficha) alert('Gano:' + this.usuario);
          if (this.posiciones[0][0] == ficha && this.posiciones[1][0] == ficha && this.posiciones[2][0] == ficha) alert('Gano:' + this.usuario);
          if (this.posiciones[0][1] == ficha && this.posiciones[1][1] == ficha && this.posiciones[2][1] == ficha) alert('Gano:' + this.usuario);
          if (this.posiciones[0][2] == ficha && this.posiciones[1][2] == ficha && this.posiciones[2][2] == ficha) alert('Gano:' + this.usuario);
          if (this.posiciones[0][0] == ficha && this.posiciones[1][1] == ficha && this.posiciones[2][2] == ficha) alert('Gano:' + this.usuario);
          if (this.posiciones[0][2] == ficha && this.posiciones[1][1] == ficha && this.posiciones[2][0] == ficha) alert('Gano:' + this.usuario);
        }
      }, {
        key: "cambiarJugador",
        value: function cambiarJugador() {
          if (this.jugador == 'O') {
            this.jugador = 'X';
            this.usuario = this.vecUser["vec"][1]._nombre;
          } else {
            this.jugador = 'O';
            this.usuario = this.vecUser["vec"][0]._nombre;
          }
        }
      }]);

      return TATETIComponent;
    }();

    TATETIComponent.ctorParameters = function () {
      return [{
        type: src_app_usuarios_usuario_VecUsuarios__WEBPACK_IMPORTED_MODULE_2__["VecUsuario"]
      }];
    };

    TATETIComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tateti',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tateti.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/juegos/tateti/tateti.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tateti.component.css */
      "./src/app/juegos/tateti/tateti.component.css")).default]
    })], TATETIComponent);
    /***/
  },

  /***/
  "./src/app/usuarios/select-users/select-users.component.css":
  /*!******************************************************************!*\
    !*** ./src/app/usuarios/select-users/select-users.component.css ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUsuariosSelectUsersSelectUsersComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".example-button-row button,\r\n.example-button-row a {\r\n  margin-right: 8px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXN1YXJpb3Mvc2VsZWN0LXVzZXJzL3NlbGVjdC11c2Vycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3VzdWFyaW9zL3NlbGVjdC11c2Vycy9zZWxlY3QtdXNlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWJ1dHRvbi1yb3cgYnV0dG9uLFxyXG4uZXhhbXBsZS1idXR0b24tcm93IGEge1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/usuarios/select-users/select-users.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/usuarios/select-users/select-users.component.ts ***!
    \*****************************************************************/

  /*! exports provided: SelectUsersComponent */

  /***/
  function srcAppUsuariosSelectUsersSelectUsersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectUsersComponent", function () {
      return SelectUsersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _usuario_usuario_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../usuario/usuario.component */
    "./src/app/usuarios/usuario/usuario.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _usuario_VecUsuarios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../usuario/VecUsuarios */
    "./src/app/usuarios/usuario/VecUsuarios.ts");

    var SelectUsersComponent =
    /*#__PURE__*/
    function () {
      function SelectUsersComponent(router, activateRoute) {
        _classCallCheck(this, SelectUsersComponent);

        this.router = router;
        this.activateRoute = activateRoute;
        this.jugador1 = '';
        this.jugador2 = '';
        this.vecUser = _usuario_VecUsuarios__WEBPACK_IMPORTED_MODULE_4__["VecUsuario"].getInstance();
      }

      _createClass(SelectUsersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.activateRoute.data.subscribe(function (data) {
            _this.juego = data.juego, console.log(data);
          });
        }
      }, {
        key: "IniciarJuego",
        value: function IniciarJuego() {
          if (this.jugador1 != '' && this.jugador2 != '') {
            this.vecUser.push(new _usuario_usuario_component__WEBPACK_IMPORTED_MODULE_2__["Usuario"](this.jugador1, 1, this.juego));
            this.vecUser.push(new _usuario_usuario_component__WEBPACK_IMPORTED_MODULE_2__["Usuario"](this.jugador2, 2, this.juego));
            this.router.navigate([this.juego]);
            /*switch(this.juego){
              case 'TATETI':
              this.router.navigate(['TATETI'])
              break;
              case 'GENERALA':
              this.router.navigate(['GENERALA'])
              break;
              case 'GENERALAOBLIGADA':
                this.router.navigate(['GENERALA'])
                break;
            }*/
          } else {
            alert('Ingrese nombre de jugadores!');
          }
        }
      }]);

      return SelectUsersComponent;
    }();

    SelectUsersComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    SelectUsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-select-users',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./select-users.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/usuarios/select-users/select-users.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./select-users.component.css */
      "./src/app/usuarios/select-users/select-users.component.css")).default]
    })], SelectUsersComponent);
    /***/
  },

  /***/
  "./src/app/usuarios/usuario/VecUsuarios.ts":
  /*!*************************************************!*\
    !*** ./src/app/usuarios/usuario/VecUsuarios.ts ***!
    \*************************************************/

  /*! exports provided: VecUsuario */

  /***/
  function srcAppUsuariosUsuarioVecUsuariosTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VecUsuario", function () {
      return VecUsuario;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var VecUsuario_1;

    var VecUsuario = VecUsuario_1 =
    /*#__PURE__*/
    function () {
      function VecUsuario() {
        _classCallCheck(this, VecUsuario);

        this.vec = [];
      }

      _createClass(VecUsuario, [{
        key: "push",
        value: function push(user) {
          this.vec.push(user);
        }
      }, {
        key: "pop",
        value: function pop(user) {
          this.vec.pop();
        }
      }], [{
        key: "getInstance",
        value: function getInstance() {
          if (this.vecUsuario == null) {
            this.vecUsuario = new VecUsuario_1();
          }

          return this.vecUsuario;
        }
      }]);

      return VecUsuario;
    }();

    VecUsuario.vecUsuario = null;
    VecUsuario = VecUsuario_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], VecUsuario);
    /***/
  },

  /***/
  "./src/app/usuarios/usuario/usuario.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/usuarios/usuario/usuario.component.ts ***!
    \*******************************************************/

  /*! exports provided: Usuario, puntaje */

  /***/
  function srcAppUsuariosUsuarioUsuarioComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Usuario", function () {
      return Usuario;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "puntaje", function () {
      return puntaje;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Usuario = function Usuario(nombre, jugador, valor) {
      _classCallCheck(this, Usuario);

      this._puntajes = [];
      this._nombre = nombre;
      this._jugador = jugador;
      /*if(valor != null){
        this.CargarPuntaje(valor)
      }*/
    };

    var puntaje = function puntaje(nombre, valor) {
      _classCallCheck(this, puntaje);

      this._nombre = nombre;
      this._valor = valor;
    };
    /***/

  },

  /***/
  "./src/app/usuarios/usuarios.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/usuarios/usuarios.module.ts ***!
    \*********************************************/

  /*! exports provided: UsuariosModule */

  /***/
  function srcAppUsuariosUsuariosModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsuariosModule", function () {
      return UsuariosModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _select_users_select_users_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./select-users/select-users.component */
    "./src/app/usuarios/select-users/select-users.component.ts");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");

    var UsuariosModule = function UsuariosModule() {
      _classCallCheck(this, UsuariosModule);
    };

    UsuariosModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_select_users_select_users_component__WEBPACK_IMPORTED_MODULE_4__["SelectUsersComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"]],
      providers: [],
      exports: [_select_users_select_users_component__WEBPACK_IMPORTED_MODULE_4__["SelectUsersComponent"]]
    })], UsuariosModule);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\abrenman\Documents\Proyectos\Angular\juegos2\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map