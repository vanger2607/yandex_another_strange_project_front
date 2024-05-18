"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/games/[id]/page",{

/***/ "(app-pages-browser)/./app/games/[id]/page.js":
/*!********************************!*\
  !*** ./app/games/[id]/page.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GamePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Game_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Game.module.css */ \"(app-pages-browser)/./app/games/[id]/Game.module.css\");\n/* harmony import */ var _Game_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Game_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _api_api_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/api-utils */ \"(app-pages-browser)/./app/api/api-utils.js\");\n/* harmony import */ var _store_app_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/app-store */ \"(app-pages-browser)/./app/store/app-store.js\");\n/* harmony import */ var _app_api_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/api/config */ \"(app-pages-browser)/./app/api/config.js\");\n/* harmony import */ var _components_Preloader_Preloader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Preloader/Preloader */ \"(app-pages-browser)/./app/components/Preloader/Preloader.jsx\");\n/* harmony import */ var _components_NotFound_NotFound__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/NotFound/NotFound */ \"(app-pages-browser)/./app/components/NotFound/NotFound.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction GamePage(props) {\n    _s();\n    const [game, setGame] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const authContext = (0,_store_app_store__WEBPACK_IMPORTED_MODULE_3__.useStore)();\n    const [preloaderVisible, setPreloaderVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [isVoted, setIsVoted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function fetchData() {\n            setPreloaderVisible(true);\n            const game = await (0,_api_api_utils__WEBPACK_IMPORTED_MODULE_2__.getNormalizedGameDataById)(_app_api_config__WEBPACK_IMPORTED_MODULE_4__.endpoints.games, props.params.id);\n            (0,_api_api_utils__WEBPACK_IMPORTED_MODULE_2__.isResponseOk)(game) ? setGame(game) : setGame(null);\n            setPreloaderVisible(false);\n        }\n        fetchData();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Данные о пользователе получаем из контекста authContext.user\n        authContext.user && game ? setIsVoted((0,_api_api_utils__WEBPACK_IMPORTED_MODULE_2__.checkIfUserVoted)(game, authContext.user[\"_id\"])) : setIsVoted(false);\n    }, [\n        authContext.user,\n        game\n    ]);\n    const handleVote = async ()=>{\n        const user = authContext.user;\n        console.log(\"dear user2 \".concat(JSON.stringify(user)));\n        const jwt = authContext.token; // Данные о токене получаем из контекста\n        let usersIdArray = game.users.length ? game.users.map((user)=>user.id) : [];\n        usersIdArray.push(authContext.user); // Данные о пользователе получаем из контекста\n        console.log(\"array: \".concat(JSON.stringify(usersIdArray)));\n        console.log(\"user: \".concat(JSON.stringify(authContext.user)));\n        const response = await (0,_api_api_utils__WEBPACK_IMPORTED_MODULE_2__.vote)(\"\".concat(_app_api_config__WEBPACK_IMPORTED_MODULE_4__.endpoints.games, \"/\").concat(game.id), jwt, usersIdArray);\n        console.log(\"дождались \".concat(authContext.user));\n        if ((0,_api_api_utils__WEBPACK_IMPORTED_MODULE_2__.isResponseOk)(response)) {\n            setGame(()=>{\n                setIsVoted(true);\n                return {\n                    ...game,\n                    // Данные о пользователе получаем из контекста\n                    users: [\n                        ...game.users,\n                        authContext.user\n                    ],\n                    users_permissions_users: [\n                        ...game.users,\n                        authContext.user\n                    ]\n                };\n            });\n        }\n    };\n    return game ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"main-inner\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: (_Game_module_css__WEBPACK_IMPORTED_MODULE_7___default().game),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                    className: (_Game_module_css__WEBPACK_IMPORTED_MODULE_7___default().game__iframe),\n                    src: game.link\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\vange\\\\pindie\\\\app\\\\games\\\\[id]\\\\page.js\",\n                    lineNumber: 87,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\vange\\\\pindie\\\\app\\\\games\\\\[id]\\\\page.js\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: (_Game_module_css__WEBPACK_IMPORTED_MODULE_7___default().about),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: (_Game_module_css__WEBPACK_IMPORTED_MODULE_7___default().about__title),\n                        children: game.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vange\\\\pindie\\\\app\\\\games\\\\[id]\\\\page.js\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Game_module_css__WEBPACK_IMPORTED_MODULE_7___default().about__content),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (_Game_module_css__WEBPACK_IMPORTED_MODULE_7___default().about__description),\n                                children: game.description\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vange\\\\pindie\\\\app\\\\games\\\\[id]\\\\page.js\",\n                                lineNumber: 94,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_Game_module_css__WEBPACK_IMPORTED_MODULE_7___default().about__author),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        \"Автор:\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: (_Game_module_css__WEBPACK_IMPORTED_MODULE_7___default().about__accent),\n                                            children: game.developer\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\vange\\\\pindie\\\\app\\\\games\\\\[id]\\\\page.js\",\n                                            lineNumber: 99,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\vange\\\\pindie\\\\app\\\\games\\\\[id]\\\\page.js\",\n                                    lineNumber: 97,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vange\\\\pindie\\\\app\\\\games\\\\[id]\\\\page.js\",\n                                lineNumber: 96,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\vange\\\\pindie\\\\app\\\\games\\\\[id]\\\\page.js\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Game_module_css__WEBPACK_IMPORTED_MODULE_7___default().about__vote),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (_Game_module_css__WEBPACK_IMPORTED_MODULE_7___default()[\"about__vote-amount\"]),\n                                children: [\n                                    \"За игру уже проголосовали:\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_Game_module_css__WEBPACK_IMPORTED_MODULE_7___default().about__accent),\n                                        children: game.users.length\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\vange\\\\pindie\\\\app\\\\games\\\\[id]\\\\page.js\",\n                                        lineNumber: 107,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\vange\\\\pindie\\\\app\\\\games\\\\[id]\\\\page.js\",\n                                lineNumber: 105,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                disabled: !authContext.isAuth || isVoted,\n                                className: \"button \".concat((_Game_module_css__WEBPACK_IMPORTED_MODULE_7___default()[\"about__vote-button\"])),\n                                onClick: handleVote,\n                                children: isVoted ? \"Голос учтён\" : \"Голосовать\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vange\\\\pindie\\\\app\\\\games\\\\[id]\\\\page.js\",\n                                lineNumber: 110,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\vange\\\\pindie\\\\app\\\\games\\\\[id]\\\\page.js\",\n                        lineNumber: 104,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\vange\\\\pindie\\\\app\\\\games\\\\[id]\\\\page.js\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\vange\\\\pindie\\\\app\\\\games\\\\[id]\\\\page.js\",\n        lineNumber: 85,\n        columnNumber: 5\n    }, this) : preloaderVisible ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Preloader_Preloader__WEBPACK_IMPORTED_MODULE_5__.Preloader, {}, void 0, false, {\n        fileName: \"C:\\\\Users\\\\vange\\\\pindie\\\\app\\\\games\\\\[id]\\\\page.js\",\n        lineNumber: 121,\n        columnNumber: 5\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"main-inner\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NotFound_NotFound__WEBPACK_IMPORTED_MODULE_6__.NotFound, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\vange\\\\pindie\\\\app\\\\games\\\\[id]\\\\page.js\",\n            lineNumber: 124,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\vange\\\\pindie\\\\app\\\\games\\\\[id]\\\\page.js\",\n        lineNumber: 123,\n        columnNumber: 5\n    }, this);\n}\n_s(GamePage, \"RwORXcbqNtXwYyEI1kBENGw67Vo=\", false, function() {\n    return [\n        _store_app_store__WEBPACK_IMPORTED_MODULE_3__.useStore\n    ];\n});\n_c = GamePage;\nvar _c;\n$RefreshReg$(_c, \"GamePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nYW1lcy9baWRdL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUU0QztBQUdMO0FBRWtCO0FBQ1I7QUFFSjtBQUtoQjtBQUVvQztBQUVIO0FBRS9DLFNBQVNXLFNBQVNDLEtBQUs7O0lBQ3BDLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHYiwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNYyxjQUFjViwwREFBUUE7SUFFNUIsTUFBTSxDQUFDVyxrQkFBa0JDLG9CQUFvQixHQUFHaEIsK0NBQVFBLENBQUM7SUFFekQsTUFBTSxDQUFDaUIsU0FBU0MsV0FBVyxHQUFHbEIsK0NBQVFBLENBQUM7SUFFdkNELGdEQUFTQSxDQUFDO1FBQ1IsZUFBZW9CO1lBQ2JILG9CQUFvQjtZQUNwQixNQUFNSixPQUFPLE1BQU1OLHlFQUF5QkEsQ0FDMUNELHNEQUFTQSxDQUFDZSxLQUFLLEVBQ2ZULE1BQU1VLE1BQU0sQ0FBQ0MsRUFBRTtZQUVqQnBCLDREQUFZQSxDQUFDVSxRQUFRQyxRQUFRRCxRQUFRQyxRQUFRO1lBQzdDRyxvQkFBb0I7UUFDdEI7UUFDQUc7SUFDRixHQUFHLEVBQUU7SUFFTHBCLGdEQUFTQSxDQUFDO1FBRVIsK0RBQStEO1FBQy9EZSxZQUFZUyxJQUFJLElBQUlYLE9BQ2hCTSxXQUFXWCxnRUFBZ0JBLENBQUNLLE1BQU1FLFlBQVlTLElBQUksQ0FBQyxNQUFNLEtBQ3pETCxXQUFXO0lBQ2pCLEdBQUc7UUFBQ0osWUFBWVMsSUFBSTtRQUFFWDtLQUFLO0lBRTNCLE1BQU1ZLGFBQWE7UUFDakIsTUFBTUQsT0FBT1QsWUFBWVMsSUFBSTtRQUM3QkUsUUFBUUMsR0FBRyxDQUFDLGNBQW1DLE9BQXJCQyxLQUFLQyxTQUFTLENBQUNMO1FBQ3pDLE1BQU1NLE1BQU1mLFlBQVlnQixLQUFLLEVBQUUsd0NBQXdDO1FBQ3ZFLElBQUlDLGVBQWVuQixLQUFLb0IsS0FBSyxDQUFDQyxNQUFNLEdBQ2hDckIsS0FBS29CLEtBQUssQ0FBQ0UsR0FBRyxDQUFDLENBQUNYLE9BQVNBLEtBQUtELEVBQUUsSUFDaEMsRUFBRTtRQUNOUyxhQUFhSSxJQUFJLENBQUNyQixZQUFZUyxJQUFJLEdBQUcsOENBQThDO1FBQ25GRSxRQUFRQyxHQUFHLENBQUMsVUFBdUMsT0FBN0JDLEtBQUtDLFNBQVMsQ0FBQ0c7UUFDckNOLFFBQVFDLEdBQUcsQ0FBQyxTQUEwQyxPQUFqQ0MsS0FBS0MsU0FBUyxDQUFDZCxZQUFZUyxJQUFJO1FBQ3BELE1BQU1hLFdBQVcsTUFBTWpDLG9EQUFJQSxDQUN6QixHQUFzQlMsT0FBbkJQLHNEQUFTQSxDQUFDZSxLQUFLLEVBQUMsS0FBVyxPQUFSUixLQUFLVSxFQUFFLEdBQzdCTyxLQUNBRTtRQUVJTixRQUFRQyxHQUFHLENBQUMsYUFBOEIsT0FBakJaLFlBQVlTLElBQUk7UUFDL0MsSUFBSXJCLDREQUFZQSxDQUFDa0MsV0FBVztZQUMxQnZCLFFBQVE7Z0JBQ05LLFdBQVc7Z0JBQ1gsT0FBTztvQkFDTCxHQUFHTixJQUFJO29CQUNQLDhDQUE4QztvQkFDOUNvQixPQUFPOzJCQUFJcEIsS0FBS29CLEtBQUs7d0JBQUVsQixZQUFZUyxJQUFJO3FCQUFDO29CQUN4Q2MseUJBQXlCOzJCQUNwQnpCLEtBQUtvQixLQUFLO3dCQUNibEIsWUFBWVMsSUFBSTtxQkFDakI7Z0JBQ0g7WUFDRjtRQUVGO0lBQ0Y7SUFFQSxPQUFPWCxxQkFDTCw4REFBQzBCO1FBQUtDLFdBQVU7OzBCQUNkLDhEQUFDQztnQkFBUUQsV0FBV3RDLDhEQUFjOzBCQUNoQyw0RUFBQ3dDO29CQUFPRixXQUFXdEMsc0VBQXNCO29CQUFFeUMsS0FBSzlCLEtBQUsrQixJQUFJOzs7Ozs7Ozs7OzswQkFHM0QsOERBQUNIO2dCQUFRRCxXQUFXdEMsK0RBQWU7O2tDQUNqQyw4REFBQzJDO3dCQUFHTCxXQUFXdEMsc0VBQXNCO2tDQUFHVyxLQUFLaUMsS0FBSzs7Ozs7O2tDQUVsRCw4REFBQ0M7d0JBQUlQLFdBQVd0Qyx3RUFBd0I7OzBDQUN0Qyw4REFBQzhDO2dDQUFFUixXQUFXdEMsNEVBQTRCOzBDQUFHVyxLQUFLb0MsV0FBVzs7Ozs7OzBDQUU3RCw4REFBQ0Y7Z0NBQUlQLFdBQVd0Qyx1RUFBdUI7MENBQ3JDLDRFQUFDOEM7O3dDQUFFO3NEQUVELDhEQUFDRTs0Q0FBS1YsV0FBV3RDLHVFQUF1QjtzREFBR1csS0FBS3NDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUsvRCw4REFBQ0o7d0JBQUlQLFdBQVd0QyxxRUFBcUI7OzBDQUNuQyw4REFBQzhDO2dDQUFFUixXQUFXdEMsK0VBQTRCOztvQ0FBRTtrREFFMUMsOERBQUNnRDt3Q0FBS1YsV0FBV3RDLHVFQUF1QjtrREFBR1csS0FBS29CLEtBQUssQ0FBQ0MsTUFBTTs7Ozs7Ozs7Ozs7OzBDQUc5RCw4REFBQ2tCO2dDQUNDQyxVQUFVLENBQUN0QyxZQUFZdUMsTUFBTSxJQUFJcEM7Z0NBQ2pDc0IsV0FBVyxVQUF1QyxPQUE3QnRDLCtFQUE0QjtnQ0FDakRxRCxTQUFTOUI7MENBRVJQLFVBQVUsZ0JBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQUtqQ0YsaUNBQ0YsOERBQUNQLHNFQUFTQTs7Ozs2QkFFViw4REFBQzhCO1FBQUtDLFdBQVU7a0JBQ2QsNEVBQUM5QixtRUFBUUE7Ozs7Ozs7Ozs7QUFHZjtHQXpHd0JDOztRQUVGTixzREFBUUE7OztLQUZOTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvZ2FtZXMvW2lkXS9wYWdlLmpzPzJlZjIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5cclxuaW1wb3J0IFN0eWxlcyBmcm9tIFwiLi9HYW1lLm1vZHVsZS5jc3NcIjtcclxuXHJcbmltcG9ydCB7IGlzUmVzcG9uc2VPaywgdm90ZSB9IGZyb20gXCIuLi8uLi9hcGkvYXBpLXV0aWxzXCI7XHJcbmltcG9ydCB7IHVzZVN0b3JlIH0gZnJvbSBcIi4uLy4uL3N0b3JlL2FwcC1zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgZW5kcG9pbnRzIH0gZnJvbSBcIkAvYXBwL2FwaS9jb25maWdcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgZ2V0Tm9ybWFsaXplZEdhbWVEYXRhQnlJZCxcclxuICBjaGVja0lmVXNlclZvdGVkLFxyXG59IGZyb20gXCIuLi8uLi9hcGkvYXBpLXV0aWxzXCI7XHJcblxyXG5pbXBvcnQgeyBQcmVsb2FkZXIgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9QcmVsb2FkZXIvUHJlbG9hZGVyXCI7XHJcblxyXG5pbXBvcnQgeyBOb3RGb3VuZCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL05vdEZvdW5kL05vdEZvdW5kXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lUGFnZShwcm9wcykge1xyXG4gIGNvbnN0IFtnYW1lLCBzZXRHYW1lXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IGF1dGhDb250ZXh0ID0gdXNlU3RvcmUoKTtcclxuXHJcbiAgY29uc3QgW3ByZWxvYWRlclZpc2libGUsIHNldFByZWxvYWRlclZpc2libGVdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIGNvbnN0IFtpc1ZvdGVkLCBzZXRJc1ZvdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YSgpIHtcclxuICAgICAgc2V0UHJlbG9hZGVyVmlzaWJsZSh0cnVlKTtcclxuICAgICAgY29uc3QgZ2FtZSA9IGF3YWl0IGdldE5vcm1hbGl6ZWRHYW1lRGF0YUJ5SWQoXHJcbiAgICAgICAgZW5kcG9pbnRzLmdhbWVzLFxyXG4gICAgICAgIHByb3BzLnBhcmFtcy5pZFxyXG4gICAgICApO1xyXG4gICAgICBpc1Jlc3BvbnNlT2soZ2FtZSkgPyBzZXRHYW1lKGdhbWUpIDogc2V0R2FtZShudWxsKTtcclxuICAgICAgc2V0UHJlbG9hZGVyVmlzaWJsZShmYWxzZSk7XHJcbiAgICB9XHJcbiAgICBmZXRjaERhdGEoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG4gICAgLy8g0JTQsNC90L3Ri9C1INC+INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtSDQv9C+0LvRg9GH0LDQtdC8INC40Lcg0LrQvtC90YLQtdC60YHRgtCwIGF1dGhDb250ZXh0LnVzZXJcclxuICAgIGF1dGhDb250ZXh0LnVzZXIgJiYgZ2FtZVxyXG4gICAgICA/IHNldElzVm90ZWQoY2hlY2tJZlVzZXJWb3RlZChnYW1lLCBhdXRoQ29udGV4dC51c2VyW1wiX2lkXCJdKSlcclxuICAgICAgOiBzZXRJc1ZvdGVkKGZhbHNlKTtcclxuICB9LCBbYXV0aENvbnRleHQudXNlciwgZ2FtZV0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVWb3RlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgdXNlciA9IGF1dGhDb250ZXh0LnVzZXI7XHJcbiAgICBjb25zb2xlLmxvZyhgZGVhciB1c2VyMiAke0pTT04uc3RyaW5naWZ5KHVzZXIpfWApXHJcbiAgICBjb25zdCBqd3QgPSBhdXRoQ29udGV4dC50b2tlbjsgLy8g0JTQsNC90L3Ri9C1INC+INGC0L7QutC10L3QtSDQv9C+0LvRg9GH0LDQtdC8INC40Lcg0LrQvtC90YLQtdC60YHRgtCwXHJcbiAgICBsZXQgdXNlcnNJZEFycmF5ID0gZ2FtZS51c2Vycy5sZW5ndGhcclxuICAgICAgPyBnYW1lLnVzZXJzLm1hcCgodXNlcikgPT4gdXNlci5pZClcclxuICAgICAgOiBbXTtcclxuICAgIHVzZXJzSWRBcnJheS5wdXNoKGF1dGhDb250ZXh0LnVzZXIpOyAvLyDQlNCw0L3QvdGL0LUg0L4g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9C1INC/0L7Qu9GD0YfQsNC10Lwg0LjQtyDQutC+0L3RgtC10LrRgdGC0LBcclxuICAgIGNvbnNvbGUubG9nKGBhcnJheTogJHtKU09OLnN0cmluZ2lmeSh1c2Vyc0lkQXJyYXkpfWApO1xyXG4gICAgY29uc29sZS5sb2coYHVzZXI6ICR7SlNPTi5zdHJpbmdpZnkoYXV0aENvbnRleHQudXNlcil9YCk7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHZvdGUoXHJcbiAgICAgIGAke2VuZHBvaW50cy5nYW1lc30vJHtnYW1lLmlkfWAsXHJcbiAgICAgIGp3dCxcclxuICAgICAgdXNlcnNJZEFycmF5XHJcblxyXG4gICAgKTsgICAgY29uc29sZS5sb2coYNC00L7QttC00LDQu9C40YHRjCAke2F1dGhDb250ZXh0LnVzZXJ9YCk7XHJcbiAgICBpZiAoaXNSZXNwb25zZU9rKHJlc3BvbnNlKSkge1xyXG4gICAgICBzZXRHYW1lKCgpID0+IHtcclxuICAgICAgICBzZXRJc1ZvdGVkKHRydWUpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5nYW1lLFxyXG4gICAgICAgICAgLy8g0JTQsNC90L3Ri9C1INC+INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtSDQv9C+0LvRg9GH0LDQtdC8INC40Lcg0LrQvtC90YLQtdC60YHRgtCwXHJcbiAgICAgICAgICB1c2VyczogWy4uLmdhbWUudXNlcnMsIGF1dGhDb250ZXh0LnVzZXJdLFxyXG4gICAgICAgICAgdXNlcnNfcGVybWlzc2lvbnNfdXNlcnM6IFtcclxuICAgICAgICAgICAgLi4uZ2FtZS51c2VycyxcclxuICAgICAgICAgICAgYXV0aENvbnRleHQudXNlcixcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiBnYW1lID8gKFxyXG4gICAgPG1haW4gY2xhc3NOYW1lPVwibWFpbi1pbm5lclwiPlxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e1N0eWxlc1tcImdhbWVcIl19PlxyXG4gICAgICAgIDxpZnJhbWUgY2xhc3NOYW1lPXtTdHlsZXNbXCJnYW1lX19pZnJhbWVcIl19IHNyYz17Z2FtZS5saW5rfT48L2lmcmFtZT5cclxuICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtTdHlsZXNbXCJhYm91dFwiXX0+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT17U3R5bGVzW1wiYWJvdXRfX3RpdGxlXCJdfT57Z2FtZS50aXRsZX08L2gyPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzW1wiYWJvdXRfX2NvbnRlbnRcIl19PlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtTdHlsZXNbXCJhYm91dF9fZGVzY3JpcHRpb25cIl19PntnYW1lLmRlc2NyaXB0aW9ufTwvcD5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzW1wiYWJvdXRfX2F1dGhvclwiXX0+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgINCQ0LLRgtC+0YA6XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtTdHlsZXNbXCJhYm91dF9fYWNjZW50XCJdfT57Z2FtZS5kZXZlbG9wZXJ9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlc1tcImFib3V0X192b3RlXCJdfT5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17U3R5bGVzW1wiYWJvdXRfX3ZvdGUtYW1vdW50XCJdfT5cclxuICAgICAgICAgICAg0JfQsCDQuNCz0YDRgyDRg9C20LUg0L/RgNC+0LPQvtC70L7RgdC+0LLQsNC70Lg6XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17U3R5bGVzW1wiYWJvdXRfX2FjY2VudFwiXX0+e2dhbWUudXNlcnMubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGRpc2FibGVkPXshYXV0aENvbnRleHQuaXNBdXRoIHx8IGlzVm90ZWR9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGJ1dHRvbiAke1N0eWxlc1tcImFib3V0X192b3RlLWJ1dHRvblwiXX1gfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVWb3RlfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7aXNWb3RlZCA/IFwi0JPQvtC70L7RgSDRg9GH0YLRkdC9XCIgOiBcItCT0L7Qu9C+0YHQvtCy0LDRgtGMXCJ9XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9tYWluPlxyXG4gICkgOiBwcmVsb2FkZXJWaXNpYmxlID8gKFxyXG4gICAgPFByZWxvYWRlciAvPlxyXG4gICkgOiAoXHJcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJtYWluLWlubmVyXCI+XHJcbiAgICAgIDxOb3RGb3VuZD48L05vdEZvdW5kPlxyXG4gICAgPC9tYWluPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU3R5bGVzIiwiaXNSZXNwb25zZU9rIiwidm90ZSIsInVzZVN0b3JlIiwiZW5kcG9pbnRzIiwiZ2V0Tm9ybWFsaXplZEdhbWVEYXRhQnlJZCIsImNoZWNrSWZVc2VyVm90ZWQiLCJQcmVsb2FkZXIiLCJOb3RGb3VuZCIsIkdhbWVQYWdlIiwicHJvcHMiLCJnYW1lIiwic2V0R2FtZSIsImF1dGhDb250ZXh0IiwicHJlbG9hZGVyVmlzaWJsZSIsInNldFByZWxvYWRlclZpc2libGUiLCJpc1ZvdGVkIiwic2V0SXNWb3RlZCIsImZldGNoRGF0YSIsImdhbWVzIiwicGFyYW1zIiwiaWQiLCJ1c2VyIiwiaGFuZGxlVm90ZSIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5Iiwiand0IiwidG9rZW4iLCJ1c2Vyc0lkQXJyYXkiLCJ1c2VycyIsImxlbmd0aCIsIm1hcCIsInB1c2giLCJyZXNwb25zZSIsInVzZXJzX3Blcm1pc3Npb25zX3VzZXJzIiwibWFpbiIsImNsYXNzTmFtZSIsInNlY3Rpb24iLCJpZnJhbWUiLCJzcmMiLCJsaW5rIiwiaDIiLCJ0aXRsZSIsImRpdiIsInAiLCJkZXNjcmlwdGlvbiIsInNwYW4iLCJkZXZlbG9wZXIiLCJidXR0b24iLCJkaXNhYmxlZCIsImlzQXV0aCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/games/[id]/page.js\n"));

/***/ })

});