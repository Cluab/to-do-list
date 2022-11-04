"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./my-font.woff2 */ \"./src/my-font.woff2\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./my-font.woff */ \"./src/my-font.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\r\\n  font-family: 'MyFont';\\r\\n  src:\\r\\n    url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format('woff2'),\\r\\n    url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format('woff');\\r\\n  font-weight: 600;\\r\\n  font-style: normal;\\r\\n}\\r\\n\\r\\n.none {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.show {\\r\\n  display: contents;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background-color: white;\\r\\n  height: 100vh;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  font-family: 'Open Sans', sans-serif;\\r\\n}\\r\\n\\r\\n.containar {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  box-shadow: 3px 5px #eeeded;\\r\\n  min-width: 400px;\\r\\n  max-width: 500px;\\r\\n  border: 0.5px solid rgba(0, 0, 0, 0.116);\\r\\n}\\r\\n\\r\\n.containar h1 {\\r\\n  font-size: 16px;\\r\\n  font-weight: 550;\\r\\n  font-family: 'Open Sans', sans-serif;\\r\\n  color: rgba(0, 0, 0, 0.651);\\r\\n  display: flex;\\r\\n  align-items: flex-start;\\r\\n  width: 93%;\\r\\n  border: 0.5px solid rgba(0, 0, 0, 0.116);\\r\\n  padding: 15px;\\r\\n  margin: 0%;\\r\\n}\\r\\n\\r\\n.addlist {\\r\\n  padding-left: 20px;\\r\\n  min-width: 425px;\\r\\n  max-width: 500px;\\r\\n  height: 40px;\\r\\n  padding-right: 10px;\\r\\n  padding-right: 0%;\\r\\n  margin: 0%;\\r\\n  border: none;\\r\\n  border-top: 0.5px solid rgba(0, 0, 0, 0.116);\\r\\n}\\r\\n\\r\\n#mission {\\r\\n  list-style: none;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  padding: 0;\\r\\n  min-width: 400px;\\r\\n  max-width: 500px;\\r\\n  margin: 0%;\\r\\n}\\r\\n\\r\\n#mission li {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  font-weight: 400;\\r\\n  color: rgb(56, 56, 56);\\r\\n  gap: 10px;\\r\\n  border-top: 0.5px solid rgba(0, 0, 0, 0.116);\\r\\n  min-width: 420px;\\r\\n  max-width: 500px;\\r\\n}\\r\\n\\r\\n#mission li div i {\\r\\n  color: rgb(116, 8, 8);\\r\\n  padding-top: 10px;\\r\\n  padding-left: 7em;\\r\\n}\\r\\n\\r\\n.clear {\\r\\n  height: 50px;\\r\\n  width: 100%;\\r\\n  font-size: 15px;\\r\\n  border: 0.5px solid rgba(0, 0, 0, 0.116);\\r\\n  color: rgba(0, 0, 0, 0.377);\\r\\n}\\r\\n\\r\\n#edit {\\r\\n  border: none;\\r\\n  height: 40px;\\r\\n  font-size: 17px;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_locolstorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/locolstorage.js */ \"./src/modules/locolstorage.js\");\n/* harmony import */ var _modules_add_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/add.js */ \"./src/modules/add.js\");\n/* harmony import */ var _modules_status_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/status.js */ \"./src/modules/status.js\");\n\n\n\n\n\n// added input to active event listener\nconst input = document.getElementById('input');\ndocument.addEventListener('DOMContentLoaded', _modules_add_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\ninput.addEventListener('keypress', (event) => {\n  if (event.key === 'Enter') {\n    if (input.value === '') return;\n    event.preventDefault();\n    const addedwork = input.value;\n    const retrieveData = localStorage.getItem('list');\n    // created the index for Local storage\n    let ind = 1;\n    if (retrieveData) {\n      const previousData = JSON.parse(retrieveData);\n      for (let i = 0; i < previousData.length; i += 1) {\n        ind += 1;\n      }\n    }\n    const list = new _modules_add_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](addedwork, ind);\n    _modules_locolstorage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getlist();\n    _modules_locolstorage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addlist(list);\n    _modules_add_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addToList(list);\n    // empty's the value of the input\n    input.value = '';\n  }\n});\n\n// retrieves any data from local storage\nconst retrieveData = localStorage.getItem('list');\nconst body = document.querySelector('body');\nbody.onload = () => {\n  if (retrieveData) {\n    const previousData = JSON.parse(retrieveData);\n    for (let i = 0; i < previousData.length; i += 1) {\n      _modules_add_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addToList(previousData[i]);\n    }\n    (0,_modules_status_js__WEBPACK_IMPORTED_MODULE_3__.check)();\n  }\n};\n\n// actives the clear button when it clicked\ndocument.querySelector('.clear').addEventListener('click', () => {\n  _modules_add_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].deletetask();\n  _modules_locolstorage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].removework();\n});\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/add.js":
/*!****************************!*\
  !*** ./src/modules/add.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ToDoInfo)\n/* harmony export */ });\n/* harmony import */ var _edit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit.js */ \"./src/modules/edit.js\");\n/* harmony import */ var _status_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./status.js */ \"./src/modules/status.js\");\n\n\n// here is where i created the to do list functions\nclass ToDoInfo {\n  // created constructor\n  constructor(description, ind) {\n    this.description = description;\n    this.completed = false;\n    this.index = ind;\n  }\n\n  static Add = (description) => {\n    ToDoInfo(description);\n  };\n\n  // created the add function to html document\n  static addToList = (list) => {\n    const mission = document.getElementById('mission');\n    const li = document.createElement('li');\n    const div = document.createElement('div');\n    const checkbox = document.createElement('input');\n    const work = document.createElement('input');\n    const icon = document.createElement('i');\n    icon.setAttribute('class', 'fa-solid fa-trash');\n    div.setAttribute('class', 'none');\n    checkbox.type = 'checkbox';\n    work.type = 'text';\n    work.setAttribute('id', 'edit');\n    checkbox.setAttribute('id', list.index);\n    // added the edit function so it changes in local storage description\n    work.addEventListener('input', () => {\n      (0,_edit_js__WEBPACK_IMPORTED_MODULE_0__.call)(list.index, work.value);\n    });\n    // updates the checkboxes in local storage\n    checkbox.addEventListener('input', () => {\n      (0,_status_js__WEBPACK_IMPORTED_MODULE_1__.status)(list.index, checkbox.checked);\n    });\n    // added the show icon\n    li.addEventListener('dblclick', () => {\n      (0,_edit_js__WEBPACK_IMPORTED_MODULE_0__.removes)(list.index, li, work, div);\n    });\n    // added the remove icon\n    li.addEventListener('click', () => {\n      (0,_edit_js__WEBPACK_IMPORTED_MODULE_0__.norm)(list.index, li, work, div);\n    });\n\n    checkbox.setAttribute('class', 'checkedbox');\n    work.value = list.description;\n    li.appendChild(checkbox);\n    li.appendChild(work);\n    div.appendChild(icon);\n    li.appendChild(div);\n    mission.appendChild(li);\n  };\n  // added the delete function from the list\n\n  static deletetask = () => {\n    const retrieveData = localStorage.getItem('list');\n    const data = JSON.parse(retrieveData);\n    const checkbox = document.querySelectorAll('.checkedbox');\n    let count = 0;\n    checkbox.forEach((onebyone) => {\n      if (onebyone.checked === true) {\n        // made sure that the value of check boxs changes the completed in local storage to true\n        data[count].completed = onebyone.checked;\n        onebyone.parentElement.remove();\n        localStorage.setItem('list', JSON.stringify(data));\n        count += 1;\n      } else if (onebyone.checked === false) {\n        // made sure that the value of check boxs changes the completed in local storage to false\n        data[count].completed = onebyone.checked;\n        localStorage.setItem('list', JSON.stringify(data));\n        count += 1;\n      }\n    });\n  };\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/add.js?");

/***/ }),

/***/ "./src/modules/edit.js":
/*!*****************************!*\
  !*** ./src/modules/edit.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"call\": () => (/* binding */ call),\n/* harmony export */   \"norm\": () => (/* binding */ norm),\n/* harmony export */   \"removes\": () => (/* binding */ removes)\n/* harmony export */ });\n// added the edit function so it changes the local storage description\nconst call = (index, value) => {\n  const retrieveData = localStorage.getItem('list');\n  const data = JSON.parse(retrieveData);\n\n  for (let i = 0; i < data.length; i += 1) {\n    if (data[i].index === index) {\n      data[i].description = value;\n      localStorage.setItem('list', JSON.stringify(data));\n    }\n  }\n};\n// when double clicked on the li the icon appears\nconst removes = (index, li, work, icon) => {\n  li.style.backgroundColor = 'antiquewhite';\n  work.style.backgroundColor = 'antiquewhite';\n  icon.setAttribute('class', 'show');\n  icon.addEventListener('click', () => {\n    const retrieveData = localStorage.getItem('list');\n    const data = JSON.parse(retrieveData);\n    for (let i = 0; i < data.length; i += 1) {\n      if (data[i].index === index) {\n        data.splice(i, 1);\n      }\n      for (let j = 0; j < data.length; j += 1) {\n        // fixes index number of and left list\n        if (data[j].index > 1) {\n          data[j].index = j + 1;\n        }\n      }\n      localStorage.setItem('list', JSON.stringify(data));\n      icon.parentElement.remove();\n    }\n  });\n};\n// when single clicked on li icon disappear\nconst norm = (index, li, work, icon) => {\n  li.style.backgroundColor = 'white';\n  work.style.backgroundColor = 'white';\n  icon.setAttribute('class', 'none');\n};\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/edit.js?");

/***/ }),

/***/ "./src/modules/locolstorage.js":
/*!*************************************!*\
  !*** ./src/modules/locolstorage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Store)\n/* harmony export */ });\n// here is where i created the local storage functions\nclass Store {\n  // get the local storage tasks or create an empty array\n  static getlist = () => {\n    let list;\n    if (localStorage.getItem('list') === null) {\n      list = [];\n    } else {\n      list = JSON.parse(localStorage.getItem('list'));\n    }\n    return list;\n  };\n\n  // add new tasks to arry\n\n  static addlist = (works) => {\n    const list = Store.getlist();\n    list.push(works);\n    localStorage.setItem('list', JSON.stringify(list));\n  };\n\n  // remove tasks from array\n\n  static removework = () => {\n    const list = Store.getlist();\n    for (let i = 0; i < list.length; i += 1) {\n      if (list[i].completed === true) {\n        // remove any completed with true\n        list.splice(i, 1);\n      }\n    }\n    // make sure that any left over completed are removed\n    if (list.length === 0 || list[0].completed === true) {\n      list.splice(0, 1);\n    } else if (list.length === 1 || list[1].completed === true) {\n      // make sure that any left over completed are removed\n      list.splice(1, 1);\n    }\n    for (let j = 0; j < list.length; j += 1) {\n      // fixes index number of and left list\n      if (list[j].index > 1) {\n        list[j].index = j + 1;\n      }\n    }\n    // set new array as local storage\n    localStorage.setItem('list', JSON.stringify(list));\n  };\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/locolstorage.js?");

/***/ }),

/***/ "./src/modules/status.js":
/*!*******************************!*\
  !*** ./src/modules/status.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"check\": () => (/* binding */ check),\n/* harmony export */   \"status\": () => (/* binding */ status)\n/* harmony export */ });\n// function to update the completes status when checkbox is checked\nconst status = (index, value) => {\n  const retrieveData = localStorage.getItem('list');\n  const data = JSON.parse(retrieveData);\n\n  for (let i = 0; i < data.length; i += 1) {\n    if (data[i].index === index) {\n      data[i].completed = value;\n      localStorage.setItem('list', JSON.stringify(data));\n      const retrieveData = localStorage.getItem('list');\n      const stat = JSON.parse(retrieveData);\n      value = stat[i].completed;\n    }\n  }\n};\n// updates the checkbox when page is reload\nconst check = () => {\n  const retrieveData = localStorage.getItem('list');\n  const checkbox = document.querySelectorAll('.checkedbox');\n  let count = 0;\n  checkbox.forEach((onebyone) => {\n    const data = JSON.parse(retrieveData);\n    onebyone.checked = data[count].completed;\n    count += 1;\n  });\n};\n\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/status.js?");

/***/ }),

/***/ "./src/my-font.woff":
/*!**************************!*\
  !*** ./src/my-font.woff ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2718396e0853bd6af385.woff\";\n\n//# sourceURL=webpack://to-do-list/./src/my-font.woff?");

/***/ }),

/***/ "./src/my-font.woff2":
/*!***************************!*\
  !*** ./src/my-font.woff2 ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2718396e0853bd6af385.woff2\";\n\n//# sourceURL=webpack://to-do-list/./src/my-font.woff2?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);