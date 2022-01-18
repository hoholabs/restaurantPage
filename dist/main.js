/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n  --color1: orange;\\n  --color2: rgb(70, 192, 192);\\n}\\n\\n#content {\\n  background-color: var(--color1);\\n  border-radius: 5vw;\\n}\\n\\n#nav-bar {\\n  width: 80vw;\\n  height: 20vw;\\n  display: -ms-grid;\\n  display: grid;\\n  -ms-grid-columns: 1fr 1fr 1fr;\\n      grid-template-columns: 1fr 1fr 1fr;\\n  -ms-grid-rows: 15vw 5vw;\\n      grid-template-rows: 15vw 5vw;\\n  margin: 0 auto;\\n}\\n\\n#nav-bar #banner-image {\\n  -ms-grid-column: 1;\\n      grid-column-start: 1;\\n  grid-column-end: 4;\\n  -ms-grid-row: 1;\\n      grid-row-start: 1;\\n  grid-row-end: 3;\\n  width: 80vw;\\n  height: 20vw;\\n  -o-object-fit: cover;\\n     object-fit: cover;\\n  -ms-grid-column-align: center;\\n      justify-self: center;\\n}\\n\\n#nav-bar #home-button {\\n  -ms-grid-column: 1;\\n      grid-column-start: 1;\\n  -ms-grid-row: 2;\\n      grid-row-start: 2;\\n}\\n\\n#nav-bar #menu-button {\\n  -ms-grid-column: 2;\\n      grid-column-start: 2;\\n  -ms-grid-row: 2;\\n      grid-row-start: 2;\\n}\\n\\n#nav-bar #contact-button {\\n  -ms-grid-column: 3;\\n      grid-column-start: 3;\\n  -ms-grid-row: 2;\\n      grid-row-start: 2;\\n}\\n\\n#nav-bar .nav-button {\\n  height: 5vw;\\n  width: 20vw;\\n  border-top-left-radius: 5vw;\\n  border-top-right-radius: 5vw;\\n  border: black;\\n  -ms-grid-column-align: center;\\n      justify-self: center;\\n  background-color: var(--color2);\\n  color: #440f44;\\n}\\n\\n#nav-bar .nav-button:hover {\\n  -webkit-box-shadow: inset 0 12px 16px 0 var(--color1);\\n          box-shadow: inset 0 12px 16px 0 var(--color1);\\n}\\n\\n.header {\\n  margin: auto;\\n  padding: 1em;\\n  font-size: MIN(5vh, 5vw);\\n}\\n\\n.page {\\n  display: -ms-grid;\\n  display: grid;\\n  background-color: #ffdb99;\\n  color: #004545;\\n}\\n\\n#home-page {\\n  height: 100%;\\n  width: 80vw;\\n  margin: 0 auto;\\n  -ms-grid-rows: auto auto auto auto 1em;\\n      grid-template-rows: auto auto auto auto 1em;\\n  -ms-grid-columns: auto auto;\\n      grid-template-columns: auto auto;\\n  -webkit-box-pack: center;\\n      -ms-flex-pack: center;\\n          justify-content: center;\\n}\\n\\n#home-page #home-header {\\n  -ms-grid-row: 1;\\n      grid-row-start: 1;\\n  -ms-grid-column: 1;\\n  -ms-grid-column-span: 2;\\n  grid-column: 1/3;\\n}\\n\\n#home-page #home-blurb {\\n  margin: auto;\\n  -ms-grid-row: 3;\\n      grid-row-start: 3;\\n  -ms-grid-column: 1;\\n  -ms-grid-column-span: 2;\\n  grid-column: 1/3;\\n  white-space: pre-line;\\n  font-size: MIN(3vh, 3vw);\\n  text-align: center;\\n  padding: 1em;\\n}\\n\\n#home-page #hours {\\n  border: 3px solid var(--color2);\\n  border-radius: 1vw;\\n  margin: auto;\\n  -ms-grid-row: 4;\\n      grid-row-start: 4;\\n  font-size: MIN(2vh, 2vw);\\n}\\n\\n#home-page #location {\\n  -ms-grid-row: 4;\\n      grid-row-start: 4;\\n  -ms-grid-column: 2;\\n      grid-column-start: 2;\\n  white-space: pre-line;\\n  -ms-flex-item-align: center;\\n      -ms-grid-row-align: center;\\n      align-self: center;\\n  -ms-grid-column-align: center;\\n      justify-self: center;\\n  font-size: MIN(2vh, 2vw);\\n}\\n\\n#menu-page {\\n  display: -ms-grid;\\n  display: grid;\\n  width: 80vw;\\n  margin: 0 auto;\\n  -ms-grid-rows: auto 1fr 1fr 1em;\\n      grid-template-rows: auto 1fr 1fr 1em;\\n  -ms-grid-columns: 1fr 1fr;\\n      grid-template-columns: 1fr 1fr;\\n  -webkit-box-pack: center;\\n      -ms-flex-pack: center;\\n          justify-content: center;\\n}\\n\\n#menu-page #menu-header {\\n  -ms-grid-row: 1;\\n      grid-row-start: 1;\\n  -ms-grid-column: 1;\\n  -ms-grid-column-span: 2;\\n  grid-column: 1/3;\\n}\\n\\n#menu-page .menu-section {\\n  border: 5px solid var(--color2);\\n  width: 30vw;\\n  margin: auto;\\n  border-radius: 5vw;\\n  margin: MIN(3vh, 3vw);\\n}\\n\\n#menu-page .menu-section h2 {\\n  text-align: center;\\n}\\n\\n#menu-page .menu-section .menu-table {\\n  border-spacing: 3vw .5vw;\\n  margin: auto;\\n  table-layout: fixed;\\n  width: 100%;\\n}\\n\\n#menu-page .menu-section .menu-table td {\\n  width: 25%;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurantpage/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurantpage/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurantpage/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurantpage/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst content = document.getElementById(\"content\");\n\nconst contactPage = document.createElement(\"div\");\ncontactPage.id = \"home-page\";\ncontactPage.className = \"page\";\n\n//contact header\nconst contactHeader = document.createElement(\"h1\");\ncontactHeader.textContent = \"Contact\";\ncontactHeader.className = \"header\";\ncontactHeader.id = \"home-header\";\n\ncontactPage.append(contactHeader);\n\n//home blurb\nconst Blurb = document.createElement(\"p\");\nBlurb.textContent = \"Don't talk to me or my son\\r\\n ever again\\r\\n\\r\\n john.horan@hoholabs.com\";\nBlurb.id = \"home-blurb\";\n\ncontactPage.append(Blurb);\n\n\nfunction loadContact() {\ncontent.append(contactPage);\ndocument.querySelectorAll(\".nav-button\").forEach(element => {\n    element.style.backgroundColor = \"var(--color2)\";      \n});\ndocument.getElementById(\"contact-button\").style.backgroundColor = \"var(--color1)\";\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\n\n//# sourceURL=webpack://restaurantpage/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst content = document.getElementById(\"content\");\n\nconst homePage = document.createElement(\"div\");\nhomePage.id = \"home-page\";\nhomePage.className = \"page\";\n\n//home header\nconst homeHeader = document.createElement(\"h1\");\nhomeHeader.textContent = \"Welcome to Hoho's Diner\";\nhomeHeader.className = \"header\";\nhomeHeader.id = \"home-header\";\n\n//home blurb\nconst homeBlurb = document.createElement(\"p\");\nhomeBlurb.textContent = \"We've got some good food.\\r\\n Eat it!\";\nhomeBlurb.id = \"home-blurb\";\n\n//hours\nconst hoursArray = [\n    { day: \"Sun\", hour: \"9-3\",},\n    { day: \"Mon\", hour: \"11-9\",},\n    { day: \"Tue\", hour: \"11-9\",},\n    { day: \"Wed\", hour: \"11-9\",},\n    { day: \"Thu\", hour: \"11-9\",},\n    { day: \"Fri\", hour: \"11-10\",},\n    { day: \"Sat\", hour: \"7-10\",}\n  ];\n\n//create hours table\nconst hours = document.createElement(\"table\");\nhours.id = \"hours\";\n\nfunction hoursTable (array){\n    array.forEach(element => {\n        //create table elements\n        let tbody = document.createElement(\"tbody\");\n        let tr = document.createElement(\"tr\");\n        let tdDay = document.createElement(\"td\");\n        tdDay.textContent = element.day;\n        let tdHour = document.createElement(\"td\");\n        tdHour.textContent = element.hour;\n\n        //append elements to table\n        tr.append(tdDay);\n        tr.append(tdHour);\n        tbody.append(tr);\n        hours.append(tbody);\n    });\n}\n\nhoursTable(hoursArray);\n\n//location\n\nconst location = document.createElement(\"p\");\nlocation.textContent = \"123 Fake street\\r\\n\";\nlocation.textContent += \"Anytown USA\\r\\n\"\nlocation.id = \"location\"\n\n\nhomePage.append(homeHeader);\nhomePage.append(homeBlurb);\nhomePage.append(hours);\nhomePage.append(location);\n\nfunction loadHome() {\ncontent.append(homePage);\ndocument.querySelectorAll(\".nav-button\").forEach(element => {\n    element.style.backgroundColor = \"var(--color2)\";      \n});\ndocument.getElementById(\"home-button\").style.backgroundColor = \"var(--color1)\";\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://restaurantpage/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _header_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.jpg */ \"./src/header.jpg\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\n\n\nconst content = document.getElementById(\"content\");\n//console.log(content);\n\n//creating the nav bar\n\nconst navBar = document.createElement(\"nav\");\nnavBar.id = 'nav-bar';\n\nconst banner = document.createElement(\"img\")\nbanner.id = 'banner-image';\nbanner.src = _header_jpg__WEBPACK_IMPORTED_MODULE_1__;\n\nconst homeButton = document.createElement(\"button\");\nhomeButton.id = 'home-button';\nhomeButton.textContent = \"HOME\";\nhomeButton.className = \"nav-button\";\n\nconst menuButton = document.createElement(\"button\")\nmenuButton.id = 'menu-button';\nmenuButton.textContent = \"MENU\";\nmenuButton.className = \"nav-button\";\n\nconst contactButton = document.createElement(\"button\");\ncontactButton.id = 'contact-button';\ncontactButton.textContent = \"CONTACT\";\ncontactButton.className = \"nav-button\";\n\nnavBar.append(banner,homeButton, menuButton, contactButton);\n\ncontent.append(navBar);\n\n(0,_home_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n\n//clear page function\nfunction clearPage(){\n    content.innerHTML = '';\n}\n\n//add event listeners to button\n\nhomeButton.addEventListener(\"click\", () => {\n    clearPage();\n    content.append(navBar);\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n});\n\nmenuButton.addEventListener(\"click\", () => {\n    clearPage();\n    content.append(navBar);\n    (0,_menu_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n});\n\ncontactButton.addEventListener(\"click\", () => {\n    clearPage();\n    content.append(navBar);\n    (0,_contact_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n});\n\n\n//# sourceURL=webpack://restaurantpage/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst content = document.getElementById(\"content\");\n\nconst menuPage = document.createElement(\"div\");\nmenuPage.id = \"menu-page\";\nmenuPage.className = \"page\";\n\n//menu header\nconst menuHeader = document.createElement(\"h1\");\nmenuHeader.textContent = \"MENU\";\nmenuHeader.className = \"header\";\nmenuHeader.id = \"menu-header\";\n\nmenuPage.append(menuHeader);\n\n///make menu sections\n\nfunction makeSection(name,array){\n    //create section, assign id and classname\n    const section = document.createElement(\"section\");\n    section.className = \"menu-section\";\n    section.id = `${name.toLowerCase()}-section`;\n\n    //create section header, add textContent\n    const sectionHeader = document.createElement(\"h2\");\n    sectionHeader.textContent = name;\n    \n    //append together\n    section.append(sectionHeader);\n    section.append(itemsTable(array));\n    menuPage.append(section);\n\n    return section;\n}\n\nfunction itemsTable (array){\n\n    let returnTable = document.createElement(\"table\");\n    returnTable.className = \"menu-table\";\n\n    array.forEach(element => {\n        //create table elements\n\n        let tbody = document.createElement(\"tbody\");\n        let tr = document.createElement(\"tr\");\n        let tdName = document.createElement(\"td\");\n        tdName.textContent = element.name;\n        tdName.style.textAlign = \"right\";\n        let tdPrice = document.createElement(\"td\");\n        tdPrice.textContent = element.price;\n\n        //append elements to table\n        tr.append(tdName);\n        tr.append(tdPrice);\n        tbody.append(tr);\n\n        returnTable.append(tbody);\n        \n    });\n    return returnTable;\n}\n\n//Breakfast\nconst breakfastArray = [\n    { name: \"eggs\",         price: \"$1.00\",},\n    { name: \"toast\",        price: \"$1.00\",},\n    { name: \"pancakes\",     price: \"$1.00\",},\n    { name: \"french toast\", price: \"$1.00\",},\n    { name: \"bacon\",        price: \"$1.00\",},\n    { name: \"sausage\",      price: \"$1.00\",},\n    { name: \"ham\",          price: \"$1.00\",}\n  ];\n\nmakeSection(\"Breakfast\",breakfastArray)\n\n//Lunch\nconst lunchArray = [\n    { name: \"sandwich\",         price: \"$7.00\",},\n    { name: \"soup\",        price: \"$5.00\",},\n    { name: \"salad\",     price: \"$145.00\",},\n    { name: \"burger\", price: \"$5.00\",},\n    { name: \"chicken tenders\",        price: \"$6.00\",},\n    { name: \"walleye\",      price: \"$1.00\",},\n    { name: \"shoe\",          price: \"$8.00\",}\n  ];\n  \nmakeSection(\"Lunch\",lunchArray);\n\n//Dinner\nconst dinnerArray = [\n    { name: \"spagett\",         price: \"$5.00\",},\n    { name: \"soup\",        price: \"$16.00\",},\n    { name: \"ham\",     price: \"$4.00\",},\n    { name: \"dinner\", price: \"$1.00\",},\n    { name: \"salad\",        price: \"$8.00\",},\n    { name: \"sausage\",      price: \"$41.00\",},\n    { name: \"breakfast\",          price: \"$851.00\",}\n  ];\n  \nmakeSection(\"Dinner\",dinnerArray);\n\n//Drinks\nconst drinksArray = [\n    { name: \"beer\",         price: \"$1.00\",},\n    { name: \"wine\",        price: \"$1.00\",},\n    { name: \"whisky\",     price: \"$1.00\",},\n    { name: \"vodka\", price: \"$1.00\",},\n    { name: \"bourbon\",        price: \"$1.00\",},\n    { name: \"gin\",      price: \"$1.00\",},\n    { name: \"water\",          price: \"$1.00\",}\n  ];\n  \nmakeSection(\"Drinks\",drinksArray);\n\n\n\n\n\nfunction loadMenu() {\n    content.append(menuPage);\n\n    //reset all nav button background colors to default\n    document.querySelectorAll(\".nav-button\").forEach(element => {\n        element.style.backgroundColor = \"var(--color2)\";      \n    });\n    //set this page's nav button to secondary color\n    document.getElementById(\"menu-button\").style.backgroundColor = \"var(--color1)\";\n    };\n    \n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://restaurantpage/./src/menu.js?");

/***/ }),

/***/ "./src/header.jpg":
/*!************************!*\
  !*** ./src/header.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2fbab0d2395fc124c293.jpg\";\n\n//# sourceURL=webpack://restaurantpage/./src/header.jpg?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;