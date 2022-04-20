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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/movie-background.jpg */ \"./src/images/movie-background.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Lato&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n  list-style-type: none;\\n  text-decoration: none;\\n}\\n\\nbody {\\n  background-color: #000;\\n  color: #fff;\\n  width: 100%;\\n  height: 100%;\\n}\\n\\nbutton {\\n  cursor: pointer;\\n}\\n\\nheader {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n  margin: 0 100px 0 100px;\\n}\\n\\n.myLogo {\\n  width: 90px;\\n  border-radius: 30%;\\n}\\n\\nh1 {\\n  font-family: \\\" Lato \\\", sans-serif;\\n}\\n\\n.nav {\\n  display: flex;\\n}\\n\\n.nav h2 {\\n  font-size: 30px;\\n}\\n\\n.nav-list {\\n  display: flex;\\n  padding-top: 10px;\\n}\\n\\n.nav-item {\\n  color: #fff;\\n  padding: 20px;\\n  font-size: 20px;\\n  font-weight: 600;\\n}\\n\\n#active {\\n  color: red;\\n}\\n\\n.mainContainer {\\n  display: grid;\\n  grid-template-columns: repeat(4, 1fr);\\n  gap: 20px;\\n  justify-content: center;\\n}\\n\\n.countLikes {\\n  pointer-events: none;\\n  background: none;\\n  border: none;\\n  color: #fff;\\n}\\n\\n.sMovie {\\n  width: 95%;\\n  margin: 10px;\\n  padding: 15px;\\n  border-radius: 15px;\\n}\\n\\n.activity {\\n  display: flex;\\n  margin: 0 20px 0 20px;\\n  padding-left: 20px;\\n  padding-bottom: 10px;\\n}\\n\\n.activity h3 {\\n  margin-left: -15px;\\n}\\n\\n.allMovies {\\n  border: 1.5px solid #fff;\\n  border-radius: 0.7rem;\\n}\\n\\n.like-container {\\n  width: 10px;\\n  height: 10px;\\n  margin-left: 5rem;\\n}\\n\\n.comment-btn {\\n  display: flex;\\n  padding: 10px;\\n  margin-left: 5px;\\n  margin-bottom: 0.9rem;\\n  box-shadow: 2px 2px 2px #f1efee;\\n  border: 2px solid #0a0a0a;\\n  border-radius: 5px;\\n}\\n\\n.comment-popup {\\n  z-index: 1;\\n  position: fixed;\\n  left: 50%;\\n  top: 50%;\\n  width: 60%;\\n  margin: 0.5rem auto;\\n  display: none;\\n  transform: translate(-50%, -50%);\\n  transition: 1s;\\n  height: 100%;\\n  overflow-y: scroll;\\n}\\n\\n.comment-popup .shows {\\n  position: relative;\\n  border: 3px solid #f1efee;\\n  border-radius: 0.4rem;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  flex-direction: column;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n  background-position: center;\\n}\\n\\n.shows .close-btn {\\n  position: absolute;\\n  right: 1rem;\\n  top: 0.5rem;\\n  background: none;\\n  font-size: 2rem;\\n  border: none;\\n  color: #dfd7d2;\\n}\\n\\n.shows-image {\\n  margin-top: 1.6rem;\\n}\\n\\n.shows-text {\\n  margin: 1rem 0;\\n  width: 80%;\\n}\\n\\n.shows-title h2 {\\n  text-align: center;\\n  color: #fff;\\n  margin-bottom: 0.5rem;\\n}\\n\\n.details {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  color: #e7e5e5;\\n  text-align: justify;\\n  font-size: 17px;\\n}\\n\\n.comments {\\n  width: 500px;\\n  color: #fff;\\n}\\n\\n.comment-title {\\n  text-align: center;\\n  color: #f8f8f8;\\n}\\n\\n.comments-list {\\n  margin: 10px auto;\\n  padding-left: 1.3rem;\\n}\\n\\n.commentInput {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  flex-direction: column;\\n}\\n\\n.comment-popup .shows .commentInput h3 {\\n  color: #f8f8f8;\\n  padding: 0.5rem 0 0.6rem;\\n}\\n\\n.commentsInput {\\n  width: 100%;\\n}\\n\\n.form {\\n  width: 100%;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  flex-direction: column;\\n}\\n\\n.input-name,\\n.input-text {\\n  width: 170%;\\n  padding: 0.4rem;\\n  font-size: 0.9rem;\\n  color: #080808;\\n  margin-bottom: 0.5rem;\\n}\\n\\n.addComment-btn {\\n  padding: 1rem;\\n  font-size: 0.7rem;\\n  text-align: center;\\n  color: #fff;\\n  border-radius: 5px;\\n  width: 100%;\\n  background-color: #807b7a;\\n  box-shadow: 2px 2px 2px #f1efee;\\n  margin-bottom: 1rem;\\n}\\n\\n.footer {\\n  margin-top: 2rem;\\n  width: 100%;\\n}\\n\\n.footer-container {\\n  border-top: 1px solid #fff;\\n  color: #b6b2b1;\\n  padding: 1rem 0;\\n  font-size: 1.15rem;\\n}\\n\\n.footer,\\n.footer-tex {\\n  text-align: right;\\n  padding: 1rem;\\n}\\n\\n.author {\\n  font-weight: 700;\\n  color: #fff;\\n}\\n\\n.author:hover {\\n  font-size: 1.18rem;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-groupe-capstone/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://javascript-groupe-capstone/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://javascript-groupe-capstone/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javascript-groupe-capstone/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-groupe-capstone/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascript-groupe-capstone/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascript-groupe-capstone/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascript-groupe-capstone/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascript-groupe-capstone/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascript-groupe-capstone/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascript-groupe-capstone/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/utils.js */ \"./src/modules/utils.js\");\n/* harmony import */ var _modules_display_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/display.js */ \"./src/modules/display.js\");\n/* harmony import */ var _modules_controlls_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/controlls.js */ \"./src/modules/controlls.js\");\n/* harmony import */ var _modules_comments_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/comments.js */ \"./src/modules/comments.js\");\n/* harmony import */ var _modules_likes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/likes.js */ \"./src/modules/likes.js\");\n/* harmony import */ var _modules_involvementApi_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/involvementApi.js */ \"./src/modules/involvementApi.js\");\n/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/logo.png */ \"./src/images/logo.png\");\n\n\n\n\n\n\n\n\n\n_modules_utils_js__WEBPACK_IMPORTED_MODULE_1__.logo.innerHTML = `<a href='#'><img class='myLogo' src='${_images_logo_png__WEBPACK_IMPORTED_MODULE_7__}'></a>`;\n\nconst seePopup = (array) => {\n  const commentBtn = document.querySelectorAll('.comment-btn');\n  commentBtn.forEach((btn) => {\n    btn.addEventListener('click', async () => {\n      const itemId = btn.id;\n      const itemname = btn.getAttribute('itemname');\n      (0,_modules_controlls_js__WEBPACK_IMPORTED_MODULE_3__.displayPopup)();\n      await (0,_modules_comments_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(array[itemId - 1], _modules_involvementApi_js__WEBPACK_IMPORTED_MODULE_6__.getComment);\n      const hidePopup = document.querySelector('.close-btn');\n      hidePopup.addEventListener('click', _modules_controlls_js__WEBPACK_IMPORTED_MODULE_3__.closePopup);\n\n      const form = document.querySelector('.form');\n      form.addEventListener('submit', async (e) => {\n        e.preventDefault();\n        const inputName = document.querySelector('.input-name');\n        const inputComment = document.querySelector('.input-text');\n        const newComment = {\n          item_id: itemname,\n          username: inputName.value,\n          comment: inputComment.value,\n        };\n        await (0,_modules_involvementApi_js__WEBPACK_IMPORTED_MODULE_6__.sendComment)(newComment);\n        await (0,_modules_comments_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(array[itemId - 1], _modules_involvementApi_js__WEBPACK_IMPORTED_MODULE_6__.getComment);\n        form.reset();\n        const hidePopup = document.querySelector('.close-btn');\n        hidePopup.addEventListener('click', _modules_controlls_js__WEBPACK_IMPORTED_MODULE_3__.closePopup);\n      });\n    });\n  });\n};\n\nconst gen = async () => {\n  const list = await (0,_modules_utils_js__WEBPACK_IMPORTED_MODULE_1__.fetchShows)();\n  await (0,_modules_display_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(list);\n  seePopup(list);\n};\ngen();\n\n_modules_utils_js__WEBPACK_IMPORTED_MODULE_1__.itemContainer.addEventListener('click', async (e) => {\n  if (e.target.className === 'fa fa-heart-o') {\n    const string = e.target.id;\n    const id = parseInt(string, 10);\n    await (0,_modules_likes_js__WEBPACK_IMPORTED_MODULE_5__.postLikes)(id);\n    const container = e.target.parentElement.nextElementSibling;\n    await (0,_modules_likes_js__WEBPACK_IMPORTED_MODULE_5__.updateLikes)(id, container);\n  }\n});\n\n\n//# sourceURL=webpack://javascript-groupe-capstone/./src/index.js?");

/***/ }),

/***/ "./src/modules/comments.js":
/*!*********************************!*\
  !*** ./src/modules/comments.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _commentsCounter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentsCounter.js */ \"./src/modules/commentsCounter.js\");\n\n\nconst showPopup = async (data, updateComment) => {\n  const comments = await updateComment(data.name);\n  const commentNum = (0,_commentsCounter_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(comments);\n  const movieName = data.name;\n  const movieImage = data.image.medium;\n  const movieSummary = data.summary;\n  const commentPopup = document.querySelector('#popup');\n  commentPopup.classList.add('comment-popup');\n  commentPopup.innerHTML = `<div class=\"shows\">\n                              <button type=\"button\" class=\"close-btn clickable\">&times;</button>\n                              <div class=\"shows-image\">\n                                <img src=\"${movieImage}\" alt=\"show-image\">\n                              </div>\n                              <div class=\"shows-text\">\n                                <div class=\"shows-title\">\n                                  <h2>${movieName}</h2>\n                                </div>\n                                <div class=\"details\">\n                                  <p>${movieSummary}</p>\n                                </div>\n                              </div>\n                              <div class=\"comments\">\n                                <div class=\"comment-title\">\n                                  <h3>Comments <span>(${commentNum || 0})</span></h3>\n                                </div>\n                                <ul class=\"comments-list\">${comments.map((comment) => `<li class=\"comment-item\">\n    <span class=\"creation-date\">${comment.creation_date}</span>\n    <span class=\"username\"> ${comment.username}:</span>\n    <span class=\"comment-msg\"> ${comment.comment}</span></li>`).join('')}                                  \n                                </ul>\n                              </div>\n                              <div class=\"commentInput\">\n                                <h3 class=\"inputTitle\">Add comments</h3>\n                                <div class=\"commentsInput\">\n                                  <form class=\"form\">\n                                    <input class=\"input-name\" type=\"text\" placeholder=\"Your name\" required>\n                                    <textarea class=\"input-text\" type=\"text\" col=\"30\" rows=\"4\" placeholder=\"Your insights\" required></textarea>\n                                    <button type=\"submit\" class=\"addComment-btn clickable\">Add Comment</button>\n                                  </form>\n                                </div>\n                              </div>\n                            </div>`;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showPopup);\n\n\n//# sourceURL=webpack://javascript-groupe-capstone/./src/modules/comments.js?");

/***/ }),

/***/ "./src/modules/commentsCounter.js":
/*!****************************************!*\
  !*** ./src/modules/commentsCounter.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst commentsCounter = (comments) => comments.length;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentsCounter);\n\n//# sourceURL=webpack://javascript-groupe-capstone/./src/modules/commentsCounter.js?");

/***/ }),

/***/ "./src/modules/controlls.js":
/*!**********************************!*\
  !*** ./src/modules/controlls.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closePopup\": () => (/* binding */ closePopup),\n/* harmony export */   \"displayPopup\": () => (/* binding */ displayPopup)\n/* harmony export */ });\nconst commentPopup = document.querySelector('#popup');\n\nconst header = document.querySelector('#header');\nconst main = document.querySelector('#main');\nconst footer = document.querySelector('#footer');\n\nconst displayPopup = () => {\n  header.style.display = 'none';\n  main.style.display = 'none';\n  footer.style.display = 'none';\n  commentPopup.style.display = 'block';\n};\n\nconst closePopup = () => {\n  header.style.display = 'flex';\n  main.style.display = 'grid';\n  footer.style.display = 'block';\n  commentPopup.style.display = 'none';\n};\n\n\n//# sourceURL=webpack://javascript-groupe-capstone/./src/modules/controlls.js?");

/***/ }),

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _likes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./likes.js */ \"./src/modules/likes.js\");\n\n\nconst displayAnime = (anime) => {\n  anime.forEach((e, index) => {\n    const myList = document.querySelector('.mainContainer');\n    if (index < 8) {\n      myList.innerHTML += `\n            <div class=\"allMovies\">\n              <ul class=\"movieImages\">\n                <img class=\"sMovie\" src=\"${e.image.medium}\" alt=\"Movie-pic\">\n              </ul>\n              <div class=\"movieTitle\">\n                \n                <div class=\"activity\">\n                  <h3>${e.name}</h3>\n                  <div class=\"like-container\">\n                    <span>\n                      <span><i id=\"${e.id}\" class=\"fa fa-heart-o\"></i></span>\n                      <input type=\"number\" id=\"${e.id}\" class=\"countLikes\" value=\"\" name=\"\"\n                      <span id=\"${e.id}\">Likes</span>\n                    </span>\n                  </div>\n                </div> \n                <div class=\"commentBtn\">\n                  <button class=\"comment-btn\" id=\"${e.id}\" itemname=\"${e.name}\">Comments</button>\n                </div>\n              </div>\n            </div>\n            `;\n    }\n  });\n\n  (0,_likes_js__WEBPACK_IMPORTED_MODULE_0__.countShowList)();\n\n  const count = document.querySelectorAll('.countLikes');\n  count.forEach((e, index) => {\n    const countLike = index + 1;\n    (0,_likes_js__WEBPACK_IMPORTED_MODULE_0__.updateLikes)(countLike, e);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayAnime);\n\n//# sourceURL=webpack://javascript-groupe-capstone/./src/modules/display.js?");

/***/ }),

/***/ "./src/modules/involvementApi.js":
/*!***************************************!*\
  !*** ./src/modules/involvementApi.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getComment\": () => (/* binding */ getComment),\n/* harmony export */   \"sendComment\": () => (/* binding */ sendComment)\n/* harmony export */ });\nconst url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UA1qh5oDK24p7rhA1W5m/comments';\n\nconst sendComment = async (newData) => {\n  const response = await fetch(`${url}`, {\n    method: 'POST',\n    headers: { 'Content-Type': 'application/json' },\n    body: JSON.stringify(newData),\n  });\n  return response.text;\n};\n\nconst URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UA1qh5oDK24p7rhA1W5m/comments?item_id=';\nconst getComment = async (id) => {\n  const res = await fetch(`${URL}${id}`);\n  const comments = await res.json();\n  if (comments.error) {\n    return [];\n  } return comments;\n};\n\n\n//# sourceURL=webpack://javascript-groupe-capstone/./src/modules/involvementApi.js?");

/***/ }),

/***/ "./src/modules/likes.js":
/*!******************************!*\
  !*** ./src/modules/likes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"countShowList\": () => (/* binding */ countShowList),\n/* harmony export */   \"countShows\": () => (/* binding */ countShows),\n/* harmony export */   \"fetchLikes\": () => (/* binding */ fetchLikes),\n/* harmony export */   \"postLikes\": () => (/* binding */ postLikes),\n/* harmony export */   \"updateLikes\": () => (/* binding */ updateLikes)\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./src/modules/utils.js\");\n\n\nconst fetchLikes = async () => {\n  const res = await fetch(_utils_js__WEBPACK_IMPORTED_MODULE_0__.involvementApi);\n  const likes = await res.json();\n  return likes;\n};\n\nconst postLikes = async (id) => {\n  const res = await fetch(_utils_js__WEBPACK_IMPORTED_MODULE_0__.involvementApi, {\n    method: 'POST',\n    headers: {\n      'Content-type': 'application/json',\n    },\n    body: JSON.stringify({ item_id: id }),\n  });\n  return res;\n};\n\nconst updateLikes = async (id, display) => {\n  const res = await fetch(_utils_js__WEBPACK_IMPORTED_MODULE_0__.involvementApi);\n  const saveLikes = await res.json();\n  saveLikes.forEach((show) => {\n    if (show.item_id === id) {\n      display.value = `${show.likes}`;\n    }\n  });\n};\n\nfunction countShows() {\n  const showContainer = document.querySelector('.mainContainer');\n  const number = showContainer.childElementCount;\n  return number;\n}\n\nconst countShowList = () => {\n  const showContainer = document.querySelector('.mainContainer');\n  const showsList = document.querySelector('.num');\n  const child = showContainer.childElementCount;\n  showsList.textContent = `${countShows()}`;\n  return child;\n};\n\n//# sourceURL=webpack://javascript-groupe-capstone/./src/modules/likes.js?");

/***/ }),

/***/ "./src/modules/utils.js":
/*!******************************!*\
  !*** ./src/modules/utils.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchShows\": () => (/* binding */ fetchShows),\n/* harmony export */   \"involvementApi\": () => (/* binding */ involvementApi),\n/* harmony export */   \"itemContainer\": () => (/* binding */ itemContainer),\n/* harmony export */   \"logo\": () => (/* binding */ logo),\n/* harmony export */   \"showApi\": () => (/* binding */ showApi)\n/* harmony export */ });\nconst involvementApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UA1qh5oDK24p7rhA1W5m/likes';\nconst showApi = 'https://api.tvmaze.com/shows';\nconst logo = document.querySelector('.logo');\nconst itemContainer = document.querySelector('.mainContainer');\n\nconst fetchShows = async () => {\n  const res = await fetch(showApi);\n  const allShows = await res.json();\n  return allShows;\n};\n\n\n\n\n//# sourceURL=webpack://javascript-groupe-capstone/./src/modules/utils.js?");

/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"65191390ed7fe1a0a483.png\";\n\n//# sourceURL=webpack://javascript-groupe-capstone/./src/images/logo.png?");

/***/ }),

/***/ "./src/images/movie-background.jpg":
/*!*****************************************!*\
  !*** ./src/images/movie-background.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e5ac22ab85143b0ffc33.jpg\";\n\n//# sourceURL=webpack://javascript-groupe-capstone/./src/images/movie-background.jpg?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;