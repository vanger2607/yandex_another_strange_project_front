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

/***/ "(app-pages-browser)/./app/api/api-utils.js":
/*!******************************!*\
  !*** ./app/api/api-utils.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authorize: function() { return /* binding */ authorize; },\n/* harmony export */   checkIfUserVoted: function() { return /* binding */ checkIfUserVoted; },\n/* harmony export */   getData: function() { return /* binding */ getData; },\n/* harmony export */   getJWT: function() { return /* binding */ getJWT; },\n/* harmony export */   getMe: function() { return /* binding */ getMe; },\n/* harmony export */   getNormalizedGameDataById: function() { return /* binding */ getNormalizedGameDataById; },\n/* harmony export */   getNormalizedGamesDataByCategory: function() { return /* binding */ getNormalizedGamesDataByCategory; },\n/* harmony export */   isResponseOk: function() { return /* binding */ isResponseOk; },\n/* harmony export */   normalizeData: function() { return /* binding */ normalizeData; },\n/* harmony export */   register: function() { return /* binding */ register; },\n/* harmony export */   removeJWT: function() { return /* binding */ removeJWT; },\n/* harmony export */   setJWT: function() { return /* binding */ setJWT; },\n/* harmony export */   vote: function() { return /* binding */ vote; }\n/* harmony export */ });\nconst isResponseOk = (response)=>{\n    return !(response instanceof Error);\n};\nconst normalizeDataObject = (obj)=>{\n    let str = JSON.stringify(obj);\n    str = str.replaceAll(\"_id\", \"id\");\n    const newObj = JSON.parse(str);\n    const result = {\n        ...newObj,\n        category: newObj.categories\n    };\n    return result;\n};\nconst normalizeData = (data)=>{\n    return data.map((item)=>{\n        return normalizeDataObject(item);\n    });\n};\nconst getData = async (url)=>{\n    try {\n        const response = await fetch(url);\n        if (response.status !== 200) {\n            console.log(\"все плохо\");\n            throw new Error(\"Ошибка получения данных\");\n        }\n        console.log(url);\n        const data = await response.json();\n        console.log(\"response: \".concat(JSON.stringify(data)));\n        return data;\n    } catch (error) {\n        console.log(\"все плохо \".concat(error));\n        return error;\n    }\n};\nconst getNormalizedGamesDataByCategory = async (url, category)=>{\n    try {\n        const data = await getData(\"\".concat(url, \"?categories.name=\").concat(category));\n        // Применяем функцию нормализации для работы с массивом\n        if (!data.length) {\n            return [\n                {\n                    _id: \"0\",\n                    title: \"games leave chat\",\n                    description: \"our site dosn't have any games with this category yet. Don't be upset sooner or later someone add it.\",\n                    developer: \"vanger\",\n                    image: \"https://pm1.aminoapps.com/6970/2471b8384bca07a9fdcbae58fd80490713fe7f27r1-892-892v2_hq.jpg\",\n                    users: []\n                }\n            ];\n        }\n        return isResponseOk(data) ? normalizeData(data) : data;\n    } catch (error) {\n        return error;\n    }\n};\nconst getNormalizedGameDataById = async (url, id)=>{\n    const data = await getData(\"\".concat(url, \"/\").concat(id));\n    console.log(\"game: \".concat(JSON.stringify(data)));\n    return isResponseOk(data) ? normalizeDataObject(data) : data;\n};\nconst register = async (url, data)=>{\n    try {\n        const response = await fetch(url, {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(data)\n        });\n        if (response.status !== 200) {\n            throw new Error(\"Ошибка регистрации!\");\n        }\n        const result = await response.json();\n        return result;\n    } catch (error) {\n        return error;\n    }\n};\nconst authorize = async (url, data)=>{\n    console.log(\" auth-url: \".concat(url, \" /n data: \").concat(data));\n    try {\n        const response = await fetch(url, {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(data)\n        });\n        console.log(\"response: \".concat(response));\n        if (response.status !== 200) {\n            console.log(response.status);\n            throw new Error(\"Ошибка авторизации\");\n        }\n        const result = await response.json();\n        return result;\n    } catch (error) {\n        return error;\n    }\n};\nconst getMe = async (url, jwt)=>{\n    url += \"-1\";\n    try {\n        // Выполняем запрос\n        const response = await fetch(url, {\n            // Запрос выполняется методом GET\n            method: \"GET\",\n            // JWT-токен передаётся в специальном заголовке Authorization\n            headers: {\n                Authorization: \"Bearer \".concat(jwt)\n            }\n        });\n        if (response.status !== 200) {\n            throw new Error(\"Ошибка получения данных\");\n        }\n        const result = await response.json();\n        return result;\n    } catch (error) {\n        return error;\n    }\n};\nconst setJWT = (jwt)=>{\n    localStorage.setItem(\"jwt\", jwt);\n};\nconst getJWT = ()=>{\n    return localStorage.getItem(\"jwt\");\n};\nconst removeJWT = ()=>{\n    localStorage.removeItem(\"jwt\");\n};\nconst checkIfUserVoted = (game, userId)=>{\n    return game.users.find((user)=>user.id === userId);\n};\nconst vote = async (url, jwt, usersArray)=>{\n    try {\n        const response = await fetch(url, {\n            method: \"PUT\",\n            headers: {\n                \"Content-Type\": \"application/json\",\n                Authorization: \"Bearer \".concat(jwt)\n            },\n            body: JSON.stringify({\n                users: usersArray\n            })\n        });\n        if (response.status !== 200) {\n            throw new Error(\"Ошибка голосования\");\n        }\n        const result = await response.json();\n        return result;\n    } catch (error) {\n        return error;\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hcGkvYXBpLXV0aWxzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTyxNQUFNQSxlQUFlLENBQUNDO0lBQzNCLE9BQU8sQ0FBRUEsQ0FBQUEsb0JBQW9CQyxLQUFJO0FBQ25DLEVBQUU7QUFFRixNQUFNQyxzQkFBc0IsQ0FBQ0M7SUFDM0IsSUFBSUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDSDtJQUV6QkMsTUFBTUEsSUFBSUcsVUFBVSxDQUFDLE9BQU87SUFFNUIsTUFBTUMsU0FBU0gsS0FBS0ksS0FBSyxDQUFDTDtJQUMxQixNQUFNTSxTQUFTO1FBQUUsR0FBR0YsTUFBTTtRQUFFRyxVQUFVSCxPQUFPSSxVQUFVO0lBQUM7SUFDeEQsT0FBT0Y7QUFDVDtBQUVPLE1BQU1HLGdCQUFnQixDQUFDQztJQUM1QixPQUFPQSxLQUFLQyxHQUFHLENBQUMsQ0FBQ0M7UUFDZixPQUFPZCxvQkFBb0JjO0lBQzdCO0FBQ0YsRUFBRTtBQUVLLE1BQU1DLFVBQVUsT0FBT0M7SUFDNUIsSUFBSTtRQUNGLE1BQU1sQixXQUFXLE1BQU1tQixNQUFNRDtRQUU3QixJQUFJbEIsU0FBU29CLE1BQU0sS0FBSyxLQUFLO1lBQzNCQyxRQUFRQyxHQUFHLENBQUM7WUFDWixNQUFNLElBQUlyQixNQUFNO1FBQ2xCO1FBQ0FvQixRQUFRQyxHQUFHLENBQUNKO1FBQ1osTUFBTUosT0FBTyxNQUFNZCxTQUFTdUIsSUFBSTtRQUNoQ0YsUUFBUUMsR0FBRyxDQUFDLGFBQWtDLE9BQXJCakIsS0FBS0MsU0FBUyxDQUFDUTtRQUN4QyxPQUFPQTtJQUNULEVBQUUsT0FBT1UsT0FBTztRQUNkSCxRQUFRQyxHQUFHLENBQUMsYUFBbUIsT0FBTkU7UUFDekIsT0FBT0E7SUFDVDtBQUNGLEVBQUU7QUFFSyxNQUFNQyxtQ0FBbUMsT0FBT1AsS0FBS1A7SUFDMUQsSUFBSTtRQUNGLE1BQU1HLE9BQU8sTUFBTUcsUUFBUSxHQUEwQk4sT0FBdkJPLEtB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LEtBQUtrQjtBQUMvQyxFQUFFO0FBQ0ssTUFBTUcsT0FBTyxPQUFPckMsS0FBS3VCLEtBQUtlO0lBQ25DLElBQUk7UUFDRixNQUFNeEQsV0FBVyxNQUFNbUIsTUFBTUQsS0FBSztZQUNoQ2tCLFFBQVE7WUFDUkMsU0FBUztnQkFDUCxnQkFBZ0I7Z0JBQ2hCSyxlQUFlLFVBQWMsT0FBSkQ7WUFDM0I7WUFDQUgsTUFBTWpDLEtBQUtDLFNBQVMsQ0FBQztnQkFBRTBCLE9BQU93QjtZQUFXO1FBQzNDO1FBQ0EsSUFBSXhELFNBQVNvQixNQUFNLEtBQUssS0FBSztZQUMzQixNQUFNLElBQUluQixNQUFNO1FBQ2xCO1FBQ0EsTUFBTVMsU0FBUyxNQUFNVixTQUFTdUIsSUFBSTtRQUNsQyxPQUFPYjtJQUNULEVBQUUsT0FBT2MsT0FBTztRQUNkLE9BQU9BO0lBQ1Q7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9hcGkvYXBpLXV0aWxzLmpzPzNlMjEiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmV4cG9ydCBjb25zdCBpc1Jlc3BvbnNlT2sgPSAocmVzcG9uc2UpID0+IHtcclxuICByZXR1cm4gIShyZXNwb25zZSBpbnN0YW5jZW9mIEVycm9yKTtcclxufTtcclxuXHJcbmNvbnN0IG5vcm1hbGl6ZURhdGFPYmplY3QgPSAob2JqKSA9PiB7XHJcbiAgbGV0IHN0ciA9IEpTT04uc3RyaW5naWZ5KG9iaik7XHJcblxyXG4gIHN0ciA9IHN0ci5yZXBsYWNlQWxsKFwiX2lkXCIsIFwiaWRcIik7XHJcblxyXG4gIGNvbnN0IG5ld09iaiA9IEpTT04ucGFyc2Uoc3RyKTtcclxuICBjb25zdCByZXN1bHQgPSB7IC4uLm5ld09iaiwgY2F0ZWdvcnk6IG5ld09iai5jYXRlZ29yaWVzIH07XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBub3JtYWxpemVEYXRhID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4gZGF0YS5tYXAoKGl0ZW0pID0+IHtcclxuICAgIHJldHVybiBub3JtYWxpemVEYXRhT2JqZWN0KGl0ZW0pO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldERhdGEgPSBhc3luYyAodXJsKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICAgXHJcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHtcclxuICAgICAgY29uc29sZS5sb2coXCLQstGB0LUg0L/Qu9C+0YXQvlwiKVxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCLQntGI0LjQsdC60LAg0L/QvtC70YPRh9C10L3QuNGPINC00LDQvdC90YvRhVwiKTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKHVybClcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICBjb25zb2xlLmxvZyhgcmVzcG9uc2U6ICR7SlNPTi5zdHJpbmdpZnkoZGF0YSl9YClcclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhg0LLRgdC1INC/0LvQvtGF0L4gJHtlcnJvcn1gKVxyXG4gICAgcmV0dXJuIGVycm9yO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXROb3JtYWxpemVkR2FtZXNEYXRhQnlDYXRlZ29yeSA9IGFzeW5jICh1cmwsIGNhdGVnb3J5KSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXREYXRhKGAke3VybH0/Y2F0ZWdvcmllcy5uYW1lPSR7Y2F0ZWdvcnl9YCk7XHJcbiAgICAvLyDQn9GA0LjQvNC10L3Rj9C10Lwg0YTRg9C90LrRhtC40Y4g0L3QvtGA0LzQsNC70LjQt9Cw0YbQuNC4INC00LvRjyDRgNCw0LHQvtGC0Ysg0YEg0LzQsNGB0YHQuNCy0L7QvFxyXG4gICAgaWYgKCFkYXRhLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gW3tcclxuICAgICAgICBfaWQ6IFwiMFwiLFxyXG4gICAgICAgICB0aXRsZTogXCJnYW1lcyBsZWF2ZSBjaGF0XCIsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJvdXIgc2l0ZSBkb3NuJ3QgaGF2ZSBhbnkgZ2FtZXMgd2l0aCB0aGlzIGNhdGVnb3J5IHlldC4gRG9uJ3QgYmUgdXBzZXQgc29vbmVyIG9yIGxhdGVyIHNvbWVvbmUgYWRkIGl0LlwiLFxyXG4gICAgICAgICAgZGV2ZWxvcGVyOiBcInZhbmdlclwiLFxyXG4gICAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9wbTEuYW1pbm9hcHBzLmNvbS82OTcwLzI0NzFiODM4NGJjYTA3YTlmZGNiYWU1OGZkODA0OTA3MTNmZTdmMjdyMS04OTItODkydjJfaHEuanBnXCIsXHJcbiAgICAgICAgdXNlcnM6IFtdfV1cclxuICAgIH1cclxuICAgIHJldHVybiBpc1Jlc3BvbnNlT2soZGF0YSkgPyBub3JtYWxpemVEYXRhKGRhdGEpIDogZGF0YTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIGVycm9yO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXROb3JtYWxpemVkR2FtZURhdGFCeUlkID0gYXN5bmMgKHVybCwgaWQpID0+IHtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0RGF0YShgJHt1cmx9LyR7aWR9YCk7XHJcbiAgY29uc29sZS5sb2coYGdhbWU6ICR7SlNPTi5zdHJpbmdpZnkoZGF0YSl9YClcclxuICByZXR1cm4gaXNSZXNwb25zZU9rKGRhdGEpID8gbm9ybWFsaXplRGF0YU9iamVjdChkYXRhKSA6IGRhdGE7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVnaXN0ZXIgPSBhc3luYyAodXJsLCBkYXRhKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICB9KTtcclxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDIwMCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCLQntGI0LjQsdC60LAg0YDQtdCz0LjRgdGC0YDQsNGG0LjQuCFcIik7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gZXJyb3I7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhvcml6ZSA9IGFzeW5jICh1cmwsIGRhdGEpID0+IHtcclxuICBjb25zb2xlLmxvZyhgIGF1dGgtdXJsOiAke3VybH0gL24gZGF0YTogJHtkYXRhfWApO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgXHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKGByZXNwb25zZTogJHtyZXNwb25zZX1gKTtcclxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDIwMCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5zdGF0dXMpXHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcItCe0YjQuNCx0LrQsCDQsNCy0YLQvtGA0LjQt9Cw0YbQuNC4XCIpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIGVycm9yO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRNZSA9IGFzeW5jICh1cmwsIGp3dCwpID0+IHtcclxuICB1cmwgKz0gXCItMVwiXHJcbiAgdHJ5IHtcclxuICAgIC8vINCS0YvQv9C+0LvQvdGP0LXQvCDQt9Cw0L/RgNC+0YFcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XHJcbiAgICAgIC8vINCX0LDQv9GA0L7RgSDQstGL0L/QvtC70L3Rj9C10YLRgdGPINC80LXRgtC+0LTQvtC8IEdFVFxyXG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgIC8vIEpXVC3RgtC+0LrQtdC9INC/0LXRgNC10LTQsNGR0YLRgdGPINCyINGB0L/QtdGG0LjQsNC70YzQvdC+0Lwg0LfQsNCz0L7Qu9C+0LLQutC1IEF1dGhvcml6YXRpb25cclxuICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7and0fWAgfSxcclxuICAgIH0pO1xyXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcItCe0YjQuNCx0LrQsCDQv9C+0LvRg9GH0LXQvdC40Y8g0LTQsNC90L3Ri9GFXCIpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIGVycm9yO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRKV1QgPSAoand0KSA9PiB7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJqd3RcIiwgand0KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRKV1QgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiand0XCIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZUpXVCA9ICgpID0+IHtcclxuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImp3dFwiKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjaGVja0lmVXNlclZvdGVkID0gKGdhbWUsIHVzZXJJZCkgPT4ge1xyXG4gIHJldHVybiBnYW1lLnVzZXJzLmZpbmQoKHVzZXIpID0+IHVzZXIuaWQgPT09IHVzZXJJZCk7XHJcbn07XHJcbmV4cG9ydCBjb25zdCB2b3RlID0gYXN5bmMgKHVybCwgand0LCB1c2Vyc0FycmF5KSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtqd3R9YCxcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB1c2VyczogdXNlcnNBcnJheSB9KSxcclxuICAgIH0pO1xyXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcItCe0YjQuNCx0LrQsCDQs9C+0LvQvtGB0L7QstCw0L3QuNGPXCIpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIGVycm9yO1xyXG4gIH1cclxufTtcclxuIl0sIm5hbWVzIjpbImlzUmVzcG9uc2VPayIsInJlc3BvbnNlIiwiRXJyb3IiLCJub3JtYWxpemVEYXRhT2JqZWN0Iiwib2JqIiwic3RyIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcGxhY2VBbGwiLCJuZXdPYmoiLCJwYXJzZSIsInJlc3VsdCIsImNhdGVnb3J5IiwiY2F0ZWdvcmllcyIsIm5vcm1hbGl6ZURhdGEiLCJkYXRhIiwibWFwIiwiaXRlbSIsImdldERhdGEiLCJ1cmwiLCJmZXRjaCIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJqc29uIiwiZXJyb3IiLCJnZXROb3JtYWxpemVkR2FtZXNEYXRhQnlDYXRlZ29yeSIsImxlbmd0aCIsIl9pZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJkZXZlbG9wZXIiLCJpbWFnZSIsInVzZXJzIiwiZ2V0Tm9ybWFsaXplZEdhbWVEYXRhQnlJZCIsImlkIiwicmVnaXN0ZXIiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsImF1dGhvcml6ZSIsImdldE1lIiwiand0IiwiQXV0aG9yaXphdGlvbiIsInNldEpXVCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJnZXRKV1QiLCJnZXRJdGVtIiwicmVtb3ZlSldUIiwicmVtb3ZlSXRlbSIsImNoZWNrSWZVc2VyVm90ZWQiLCJnYW1lIiwidXNlcklkIiwiZmluZCIsInVzZXIiLCJ2b3RlIiwidXNlcnNBcnJheSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/api/api-utils.js\n"));

/***/ })

});