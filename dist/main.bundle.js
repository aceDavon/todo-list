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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/bg.webp */ \"./src/img/bg.webp\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html {\\n  scroll-behavior: smooth;\\n  box-sizing: border-box;\\n}\\n\\n*,\\n*::before,\\n*::after {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: inherit;\\n  transition-duration: 0.25s;\\n}\\n\\n#entry {\\n  border-top: 25px solid black;\\n  border-bottom: 25px solid black;\\n  position: relative;\\n  height: 100vh;\\n  bottom: 0;\\n  top: 0;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n}\\n\\nspan {\\n  font-size: larger;\\n  font-weight: 400;\\n  padding: 8px 4px;\\n}\\n\\n.input-content {\\n  position: relative;\\n}\\n\\n.input-content img {\\n  width: 25px;\\n  position: absolute;\\n  right: 12px;\\n  cursor: pointer;\\n}\\n\\n.list {\\n  position: relative;\\n  width: 45%;\\n  margin: 45px auto;\\n  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.318);\\n  list-style-type: none;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 5px;\\n  border-radius: 8px;\\n  background-color: whitesmoke;\\n}\\n\\n.list > * {\\n  border-bottom: 1px solid #dedede;\\n}\\n\\n.list-item {\\n  font-size: medium;\\n  text-transform: capitalize;\\n  display: flex;\\n  flex-direction: row-reverse;\\n  justify-content: flex-end;\\n  align-items: center;\\n  gap: 8px;\\n  padding: 6px 2px;\\n  position: relative;\\n}\\n\\n.list-item img {\\n  position: absolute;\\n  right: 8px;\\n  cursor: move;\\n}\\n\\n.hang {\\n  position: absolute;\\n  left: 0;\\n  right: 0;\\n  top: 0;\\n  bottom: 0;\\n}\\n\\n.empty {\\n  text-align: center;\\n}\\n\\n.empty img,\\n.empty > input {\\n  display: none;\\n}\\n\\n.hide {\\n  display: none;\\n}\\n\\n.empty.hide {\\n  visibility: hidden;\\n}\\n\\n.hidden {\\n  visibility: hidden;\\n  height: 0.5px;\\n}\\n\\n.hidden:focus {\\n  outline: 1px solid #dedede;\\n  background-color: antiquewhite;\\n}\\n\\n.hidden.show {\\n  visibility: visible;\\n  width: 95%;\\n  margin: auto;\\n  border: 1px solid black;\\n  padding: 12px 3px;\\n}\\n\\n#addNew {\\n  width: 100%;\\n  margin: 4px auto;\\n  padding: 5px 3px;\\n  border: none;\\n  border-bottom: 1px solid #dedede;\\n  font-style: italic;\\n}\\n\\n#addNew:focus {\\n  outline: 1px solid #dedede;\\n  width: 98%;\\n  margin: auto;\\n}\\n\\nfooter {\\n  background-color: #dedede;\\n  width: 100%;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  padding: 10px 0;\\n  border-radius: 0  0 8px 8px;\\n}\\n\\n#clear {\\n  border: none;\\n  background-color: inherit;\\n  cursor: pointer;\\n  text-transform: capitalize;\\n}\\n\\n@media screen and (max-width: 765px) {\\n  .list {\\n    width: 85%;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Actions/actions.js":
/*!********************************!*\
  !*** ./src/Actions/actions.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Edit\": () => (/* binding */ Edit),\n/* harmony export */   \"Remove\": () => (/* binding */ Remove),\n/* harmony export */   \"resetId\": () => (/* binding */ resetId)\n/* harmony export */ });\n/* harmony import */ var _Controller_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Controller/controller.js */ \"./src/Controller/controller.js\");\n\n\nconst Edit = () => {\n  const items = document.querySelectorAll('.list-item');\n  items.forEach((el, i) => {\n    el.addEventListener('click', () => {\n      (0,_Controller_controller_js__WEBPACK_IMPORTED_MODULE_0__.Update)(i);\n    });\n  });\n};\n\nconst resetId = () => {\n  const local = JSON.parse(localStorage.getItem('todo'));\n  const arr = [];\n\n  local.forEach((item) => {\n    const newId = { ...item, id: arr.length + 1 };\n    arr.push(newId);\n    localStorage.setItem('todo', JSON.stringify(arr));\n  });\n};\n\nconst Complete = (id) => {\n  const local = JSON.parse(localStorage.getItem('todo'));\n\n  local.forEach((item) => {\n    if (item.id == id) {\n      if (!item.completed) {\n        item.completed = !item.completed;\n      }\n    }\n    localStorage.setItem('todo', JSON.stringify(local));\n  });\n};\n\nconst Remove = (e, id) => {\n  const local = JSON.parse(localStorage.getItem('todo'));\n  const btn = document.getElementById('clear');\n\n  if (local.length > 1) {\n    btn.addEventListener('click', () => {\n      e.preventDefault();\n      (0,_Controller_controller_js__WEBPACK_IMPORTED_MODULE_0__.Delete)(id);\n      resetId();\n      window.location.reload();\n    });\n  } else {\n    localStorage.removeItem('todo');\n    window.location.reload();\n  }\n  Complete(id);\n};\n\n\n//# sourceURL=webpack://todo-list/./src/Actions/actions.js?");

/***/ }),

/***/ "./src/Controller/ElementCreator.js":
/*!******************************************!*\
  !*** ./src/Controller/ElementCreator.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NewTextNode\": () => (/* binding */ NewTextNode),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst ElementCreator = (type) => document.createElement(type);\n\nconst NewTextNode = (el) => document.createTextNode(el);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ElementCreator);\n\n\n//# sourceURL=webpack://todo-list/./src/Controller/ElementCreator.js?");

/***/ }),

/***/ "./src/Controller/controller.js":
/*!**************************************!*\
  !*** ./src/Controller/controller.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Create\": () => (/* binding */ Create),\n/* harmony export */   \"Delete\": () => (/* binding */ Delete),\n/* harmony export */   \"InitialState\": () => (/* binding */ InitialState),\n/* harmony export */   \"Read\": () => (/* binding */ Read),\n/* harmony export */   \"Update\": () => (/* binding */ Update)\n/* harmony export */ });\n/* harmony import */ var _View_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../View/view.js */ \"./src/View/view.js\");\n\n\nconst local = JSON.parse(localStorage.getItem('todo'));\n\nconst InitialState = ({ styles, parent, child }) => {\n  const tasks = { description: 'Please add a task to your list' };\n  const others = [styles, tasks];\n  return (0,_View_view_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(parent, child, others);\n};\n\nconst saveLocal = (data) => {\n  const local = JSON.parse(localStorage.getItem('todo'));\n\n  if (local === null) {\n    localStorage.setItem('todo', JSON.stringify(data));\n  } else {\n    data.map((x, i) => {\n      x.id = i + 1;\n      local.push(x);\n    });\n    localStorage.setItem('todo', JSON.stringify(data));\n    document.location.reload();\n  }\n};\n\nconst Create = () => {\n  const inputValue = document.getElementById('addNew');\n  const btn = document.getElementById('submit');\n  let arr = JSON.parse(localStorage.getItem('todo'));\n\n  btn.addEventListener('click', () => {\n    const obj = {};\n\n    obj.completed = false;\n    obj.description = inputValue.value;\n    obj.id = arr !== null && arr.length + 1;\n    if (arr !== null) {\n      arr.push(obj);\n    } else {\n      arr = [obj];\n    }\n    saveLocal(arr);\n    window.location.reload();\n  });\n};\n\nconst Read = ({\n  styles, kebab, parent, child,\n}) => {\n  if (local) {\n    for (let i = 0; i <= local.length - 1; i++) {\n      const tasks = local[i];\n      const others = [styles, tasks, kebab];\n      (0,_View_view_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(parent, child, others);\n    }\n  } else {\n    styles = 'empty';\n    InitialState({ styles, parent, child });\n  }\n};\n\nconst Update = (id) => {\n  const data = JSON.parse(localStorage.getItem('todo'));\n  const target = document.querySelectorAll('.list-item');\n  const input = document.querySelectorAll('.hidden');\n\n  data.map((x) => {\n    target[id].innerHTML = '';\n    input[id].classList.add('show');\n    input[id].value = x.description;\n    input[id].id = 'edit';\n    target[id].classList.add('hide');\n    const inputValue = document.getElementById('edit');\n    inputValue.addEventListener('focusout', () => {\n      const newData = data.map((x) => (x.id === id + 1\n        ? { ...x, description: inputValue.value }\n        : x));\n      localStorage.setItem('todo', JSON.stringify(newData));\n      window.location.reload();\n    });\n  });\n};\n\nconst Delete = (id) => {\n  const local = JSON.parse(localStorage.getItem('todo'));\n  const arr = [];\n  local.forEach((item) => {\n    if (item.id != id) {\n      arr.push(item);\n      localStorage.setItem('todo', JSON.stringify(arr));\n    }\n  });\n};\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/Controller/controller.js?");

/***/ }),

/***/ "./src/View/view.js":
/*!**************************!*\
  !*** ./src/View/view.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Actions_actions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Actions/actions.js */ \"./src/Actions/actions.js\");\n/* harmony import */ var _Controller_ElementCreator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Controller/ElementCreator.js */ \"./src/Controller/ElementCreator.js\");\n\n\n\nfunction Appendage(el, child, others) {\n  const [styles, tasks, kebab] = others;\n  const { description, id } = tasks;\n  const DomEntry = document.getElementById('entry');\n  const childElement = (0,_Controller_ElementCreator_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(child);\n\n  const box = (0,_Controller_ElementCreator_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('input');\n  const edit = (0,_Controller_ElementCreator_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('input');\n  const img = (0,_Controller_ElementCreator_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('img');\n  img.setAttribute('src', kebab);\n  box.type = 'checkbox';\n  edit.type = 'text';\n  box.setAttribute('class', 'complete');\n  box.addEventListener('change', (e) => (0,_Actions_actions_js__WEBPACK_IMPORTED_MODULE_0__.Remove)(e, id));\n  edit.setAttribute('class', 'hidden');\n  childElement.classList.add(styles);\n  childElement.innerText = description;\n  childElement.id = id;\n  img.onclick = (e) => (0,_Actions_actions_js__WEBPACK_IMPORTED_MODULE_0__.Edit)(e);\n  childElement.appendChild(box);\n  childElement.appendChild(img);\n\n  el.appendChild(childElement);\n  el.appendChild(edit);\n  DomEntry.appendChild(el);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Appendage);\n\n\n//# sourceURL=webpack://todo-list/./src/View/view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _img_kebab_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/kebab.svg */ \"./src/img/kebab.svg\");\n/* harmony import */ var _img_return_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/return.svg */ \"./src/img/return.svg\");\n/* harmony import */ var _Controller_ElementCreator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Controller/ElementCreator.js */ \"./src/Controller/ElementCreator.js\");\n/* harmony import */ var _Controller_controller_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Controller/controller.js */ \"./src/Controller/controller.js\");\n\n\n\n\n\n\nfunction component() {\n  const parent = (0,_Controller_ElementCreator_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('ul');\n  const container = (0,_Controller_ElementCreator_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('div');\n  const inputField = (0,_Controller_ElementCreator_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('input');\n  const returnIcon = (0,_Controller_ElementCreator_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('img');\n  const child = 'li';\n  const styles = 'list-item';\n  const header = (0,_Controller_ElementCreator_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('span');\n  const footer = (0,_Controller_ElementCreator_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('footer');\n  const btn = (0,_Controller_ElementCreator_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('button');\n  btn.id = 'clear';\n  btn.innerText = 'clear all Complete';\n  footer.appendChild(btn);\n  const txt = (0,_Controller_ElementCreator_js__WEBPACK_IMPORTED_MODULE_3__.NewTextNode)(\"Today's List\");\n  header.appendChild(txt);\n  parent.classList.add('list');\n  inputField.setAttribute('type', 'text');\n  inputField.id = 'addNew';\n  inputField.placeholder = 'Add to your list';\n  returnIcon.src = _img_return_svg__WEBPACK_IMPORTED_MODULE_2__;\n  returnIcon.id = 'submit';\n  container.appendChild(returnIcon);\n  container.appendChild(inputField);\n  container.setAttribute('class', 'input-content');\n  parent.appendChild(header);\n  parent.appendChild(container);\n  (0,_Controller_controller_js__WEBPACK_IMPORTED_MODULE_4__.Read)({\n    styles, kebab: _img_kebab_svg__WEBPACK_IMPORTED_MODULE_1__, parent, child,\n  });\n  parent.appendChild(footer);\n  (0,_Controller_controller_js__WEBPACK_IMPORTED_MODULE_4__.Create)();\n}\n\ncomponent();\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/img/bg.webp":
/*!*************************!*\
  !*** ./src/img/bg.webp ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"97d27b609247a3b1667a.webp\";\n\n//# sourceURL=webpack://todo-list/./src/img/bg.webp?");

/***/ }),

/***/ "./src/img/kebab.svg":
/*!***************************!*\
  !*** ./src/img/kebab.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4060799d0e3d97fd5ae7.svg\";\n\n//# sourceURL=webpack://todo-list/./src/img/kebab.svg?");

/***/ }),

/***/ "./src/img/return.svg":
/*!****************************!*\
  !*** ./src/img/return.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b26c5a048915af450e20.svg\";\n\n//# sourceURL=webpack://todo-list/./src/img/return.svg?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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