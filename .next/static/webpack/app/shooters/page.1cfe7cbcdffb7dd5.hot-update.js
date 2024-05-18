"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/shooters/page",{

/***/ "(app-pages-browser)/./app/api/api-utils.js":
/*!******************************!*\
  !*** ./app/api/api-utils.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authorize: function() { return /* binding */ authorize; },\n/* harmony export */   checkIfUserVoted: function() { return /* binding */ checkIfUserVoted; },\n/* harmony export */   getData: function() { return /* binding */ getData; },\n/* harmony export */   getJWT: function() { return /* binding */ getJWT; },\n/* harmony export */   getMe: function() { return /* binding */ getMe; },\n/* harmony export */   getNormalizedGameDataById: function() { return /* binding */ getNormalizedGameDataById; },\n/* harmony export */   getNormalizedGamesDataByCategory: function() { return /* binding */ getNormalizedGamesDataByCategory; },\n/* harmony export */   isResponseOk: function() { return /* binding */ isResponseOk; },\n/* harmony export */   normalizeData: function() { return /* binding */ normalizeData; },\n/* harmony export */   register: function() { return /* binding */ register; },\n/* harmony export */   removeJWT: function() { return /* binding */ removeJWT; },\n/* harmony export */   setJWT: function() { return /* binding */ setJWT; },\n/* harmony export */   vote: function() { return /* binding */ vote; }\n/* harmony export */ });\nconst isResponseOk = (response)=>{\n    return !(response instanceof Error);\n};\nconst normalizeDataObject = (obj)=>{\n    let str = JSON.stringify(obj);\n    str = str.replaceAll(\"_id\", \"id\");\n    const newObj = JSON.parse(str);\n    const result = {\n        ...newObj,\n        category: newObj.categories\n    };\n    return result;\n};\nconst normalizeData = (data)=>{\n    return data.map((item)=>{\n        return normalizeDataObject(item);\n    });\n};\nconst getData = async (url)=>{\n    try {\n        const response = await fetch(url);\n        if (response.status !== 200) {\n            throw new Error(\"Ошибка получения данных\");\n        }\n        const data = await response.json();\n        console.log(\"response: \".concat(JSON.stringify(data)));\n        return data;\n    } catch (error) {\n        console.log(\"все плохо \".concat(error));\n        return error;\n    }\n};\nconst getNormalizedGamesDataByCategory = async (url, category)=>{\n    try {\n        const data = await getData(\"\".concat(url, \"?categories.name=\").concat(category));\n        // Применяем функцию нормализации для работы с массивом\n        if (!data.length) {\n            return [\n                {\n                    _id: \"0\",\n                    title: \"games leave chat\",\n                    description: \"our site dosn't have any games with this category yet. Don't be upset sooner or later someone add it.\",\n                    developer: \"vanger\",\n                    image: \"https://pm1.aminoapps.com/6970/2471b8384bca07a9fdcbae58fd80490713fe7f27r1-892-892v2_hq.jpg\",\n                    users: []\n                }\n            ];\n        }\n        return isResponseOk(data) ? normalizeData(data) : data;\n    } catch (error) {\n        return error;\n    }\n};\nconst getNormalizedGameDataById = async (url, id)=>{\n    const data = await getData(\"\".concat(url, \"/\").concat(id));\n    console.log(\"game: \".concat(JSON.stringify(data)));\n    return isResponseOk(data) ? normalizeDataObject(data) : data;\n};\nconst register = async (url, data)=>{\n    try {\n        const response = await fetch(url, {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(data)\n        });\n        if (response.status !== 200) {\n            throw new Error(\"Ошибка регистрации!\");\n        }\n        const result = await response.json();\n        return result;\n    } catch (error) {\n        return error;\n    }\n};\nconst authorize = async (url, data)=>{\n    console.log(\" auth-url: \".concat(url, \" /n data: \").concat(data));\n    try {\n        const response = await fetch(url, {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(data)\n        });\n        console.log(\"response: \".concat(response));\n        if (response.status !== 200) {\n            console.log(response.status);\n            throw new Error(\"Ошибка авторизации\");\n        }\n        const result = await response.json();\n        return result;\n    } catch (error) {\n        return error;\n    }\n};\nconst getMe = async (url, jwt)=>{\n    url += \"-1\";\n    try {\n        // Выполняем запрос\n        const response = await fetch(url, {\n            // Запрос выполняется методом GET\n            method: \"GET\",\n            // JWT-токен передаётся в специальном заголовке Authorization\n            headers: {\n                Authorization: \"Bearer \".concat(jwt)\n            }\n        });\n        if (response.status !== 200) {\n            throw new Error(\"Ошибка получения данных\");\n        }\n        const result = await response.json();\n        return result;\n    } catch (error) {\n        return error;\n    }\n};\nconst setJWT = (jwt)=>{\n    localStorage.setItem(\"jwt\", jwt);\n};\nconst getJWT = ()=>{\n    return localStorage.getItem(\"jwt\");\n};\nconst removeJWT = ()=>{\n    localStorage.removeItem(\"jwt\");\n};\nconst checkIfUserVoted = (game, userId)=>{\n    return game.users.find((user)=>user.id === userId);\n};\nconst vote = async (url, jwt, usersArray)=>{\n    try {\n        const response = await fetch(url, {\n            method: \"PUT\",\n            headers: {\n                \"Content-Type\": \"application/json\",\n                Authorization: \"Bearer \".concat(jwt)\n            },\n            body: JSON.stringify({\n                users: usersArray\n            })\n        });\n        if (response.status !== 200) {\n            throw new Error(\"Ошибка голосования\");\n        }\n        const result = await response.json();\n        return result;\n    } catch (error) {\n        return error;\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hcGkvYXBpLXV0aWxzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTyxNQUFNQSxlQUFlLENBQUNDO0lBQzNCLE9BQU8sQ0FBRUEsQ0FBQUEsb0JBQW9CQyxLQUFJO0FBQ25DLEVBQUU7QUFFRixNQUFNQyxzQkFBc0IsQ0FBQ0M7SUFDM0IsSUFBSUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDSDtJQUV6QkMsTUFBTUEsSUFBSUcsVUFBVSxDQUFDLE9BQU87SUFFNUIsTUFBTUMsU0FBU0gsS0FBS0ksS0FBSyxDQUFDTDtJQUMxQixNQUFNTSxTQUFTO1FBQUUsR0FBR0YsTUFBTTtRQUFFRyxVQUFVSCxPQUFPSSxVQUFVO0lBQUM7SUFDeEQsT0FBT0Y7QUFDVDtBQUVPLE1BQU1HLGdCQUFnQixDQUFDQztJQUM1QixPQUFPQSxLQUFLQyxHQUFHLENBQUMsQ0FBQ0M7UUFDZixPQUFPZCxvQkFBb0JjO0lBQzdCO0FBQ0YsRUFBRTtBQUVLLE1BQU1DLFVBQVUsT0FBT0M7SUFDNUIsSUFBSTtRQUNGLE1BQU1sQixXQUFXLE1BQU1tQixNQUFNRDtRQUU3QixJQUFJbEIsU0FBU29CLE1BQU0sS0FBSyxLQUFLO1lBQzNCLE1BQU0sSUFBSW5CLE1BQU07UUFDbEI7UUFFQSxNQUFNYSxPQUFPLE1BQU1kLFNBQVNxQixJQUFJO1FBQ2hDQyxRQUFRQyxHQUFHLENBQUMsYUFBa0MsT0FBckJsQixLQUFLQyxTQUFTLENBQUNRO1FBQ3hDLE9BQU9BO0lBQ1QsRUFBRSxPQUFPVSxPQUFPO1FBQ2RGLFFBQVFDLEdBQUcsQ0FBQyxhQUFtQixPQUFOQztRQUN6QixPQUFPQTtJQUNUO0FBQ0YsRUFBRTtBQUVLLE1BQU1DLG1DQUFtQyxPQUFPUCxLQUFLUDtJQUMxRCxJQUFJO1FBQ0YsTUFBTUcsT0FBTyxNQUFNRyxRQUFRLEdBQTBCTixPQUF2Qk8sS0FBSSxxQkFBNEIsT0FBVFA7UUFDckQsdURBQXVEO1FBQ3ZELElBQUksQ0FBQ0cs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dUIsS0FBS2U7SUFDbkMsSUFBSTtRQUNGLE1BQU14RCxXQUFXLE1BQU1tQixNQUFNRCxLQUFLO1lBQ2hDa0IsUUFBUTtZQUNSQyxTQUFTO2dCQUNQLGdCQUFnQjtnQkFDaEJLLGVBQWUsVUFBYyxPQUFKRDtZQUMzQjtZQUNBSCxNQUFNakMsS0FBS0MsU0FBUyxDQUFDO2dCQUFFMEIsT0FBT3dCO1lBQVc7UUFDM0M7UUFDQSxJQUFJeEQsU0FBU29CLE1BQU0sS0FBSyxLQUFLO1lBQzNCLE1BQU0sSUFBSW5CLE1BQU07UUFDbEI7UUFDQSxNQUFNUyxTQUFTLE1BQU1WLFNBQVNxQixJQUFJO1FBQ2xDLE9BQU9YO0lBQ1QsRUFBRSxPQUFPYyxPQUFPO1FBQ2QsT0FBT0E7SUFDVDtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2FwaS9hcGktdXRpbHMuanM/M2UyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZXhwb3J0IGNvbnN0IGlzUmVzcG9uc2VPayA9IChyZXNwb25zZSkgPT4ge1xyXG4gIHJldHVybiAhKHJlc3BvbnNlIGluc3RhbmNlb2YgRXJyb3IpO1xyXG59O1xyXG5cclxuY29uc3Qgbm9ybWFsaXplRGF0YU9iamVjdCA9IChvYmopID0+IHtcclxuICBsZXQgc3RyID0gSlNPTi5zdHJpbmdpZnkob2JqKTtcclxuXHJcbiAgc3RyID0gc3RyLnJlcGxhY2VBbGwoXCJfaWRcIiwgXCJpZFwiKTtcclxuXHJcbiAgY29uc3QgbmV3T2JqID0gSlNPTi5wYXJzZShzdHIpO1xyXG4gIGNvbnN0IHJlc3VsdCA9IHsgLi4ubmV3T2JqLCBjYXRlZ29yeTogbmV3T2JqLmNhdGVnb3JpZXMgfTtcclxuICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZURhdGEgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiBkYXRhLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgcmV0dXJuIG5vcm1hbGl6ZURhdGFPYmplY3QoaXRlbSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RGF0YSA9IGFzeW5jICh1cmwpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICBcclxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDIwMCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCLQntGI0LjQsdC60LAg0L/QvtC70YPRh9C10L3QuNGPINC00LDQvdC90YvRhVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgY29uc29sZS5sb2coYHJlc3BvbnNlOiAke0pTT04uc3RyaW5naWZ5KGRhdGEpfWApXHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coYNCy0YHQtSDQv9C70L7RhdC+ICR7ZXJyb3J9YClcclxuICAgIHJldHVybiBlcnJvcjtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Tm9ybWFsaXplZEdhbWVzRGF0YUJ5Q2F0ZWdvcnkgPSBhc3luYyAodXJsLCBjYXRlZ29yeSkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0RGF0YShgJHt1cmx9P2NhdGVnb3JpZXMubmFtZT0ke2NhdGVnb3J5fWApO1xyXG4gICAgLy8g0J/RgNC40LzQtdC90Y/QtdC8INGE0YPQvdC60YbQuNGOINC90L7RgNC80LDQu9C40LfQsNGG0LjQuCDQtNC70Y8g0YDQsNCx0L7RgtGLINGBINC80LDRgdGB0LjQstC+0LxcclxuICAgIGlmICghZGF0YS5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIFt7XHJcbiAgICAgICAgX2lkOiBcIjBcIixcclxuICAgICAgICAgdGl0bGU6IFwiZ2FtZXMgbGVhdmUgY2hhdFwiLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246IFwib3VyIHNpdGUgZG9zbid0IGhhdmUgYW55IGdhbWVzIHdpdGggdGhpcyBjYXRlZ29yeSB5ZXQuIERvbid0IGJlIHVwc2V0IHNvb25lciBvciBsYXRlciBzb21lb25lIGFkZCBpdC5cIixcclxuICAgICAgICAgIGRldmVsb3BlcjogXCJ2YW5nZXJcIixcclxuICAgICAgICAgIGltYWdlOiBcImh0dHBzOi8vcG0xLmFtaW5vYXBwcy5jb20vNjk3MC8yNDcxYjgzODRiY2EwN2E5ZmRjYmFlNThmZDgwNDkwNzEzZmU3ZjI3cjEtODkyLTg5MnYyX2hxLmpwZ1wiLFxyXG4gICAgICAgIHVzZXJzOiBbXX1dXHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXNSZXNwb25zZU9rKGRhdGEpID8gbm9ybWFsaXplRGF0YShkYXRhKSA6IGRhdGE7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiBlcnJvcjtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Tm9ybWFsaXplZEdhbWVEYXRhQnlJZCA9IGFzeW5jICh1cmwsIGlkKSA9PiB7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGdldERhdGEoYCR7dXJsfS8ke2lkfWApO1xyXG4gIGNvbnNvbGUubG9nKGBnYW1lOiAke0pTT04uc3RyaW5naWZ5KGRhdGEpfWApXHJcbiAgcmV0dXJuIGlzUmVzcG9uc2VPayhkYXRhKSA/IG5vcm1hbGl6ZURhdGFPYmplY3QoZGF0YSkgOiBkYXRhO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyID0gYXN5bmMgKHVybCwgZGF0YSkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgfSk7XHJcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwi0J7RiNC40LHQutCwINGA0LXQs9C40YHRgtGA0LDRhtC40LghXCIpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIGVycm9yO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhdXRob3JpemUgPSBhc3luYyAodXJsLCBkYXRhKSA9PiB7XHJcbiAgY29uc29sZS5sb2coYCBhdXRoLXVybDogJHt1cmx9IC9uIGRhdGE6ICR7ZGF0YX1gKTtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgIFxyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhgcmVzcG9uc2U6ICR7cmVzcG9uc2V9YCk7XHJcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2Uuc3RhdHVzKVxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCLQntGI0LjQsdC60LAg0LDQstGC0L7RgNC40LfQsNGG0LjQuFwiKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiBlcnJvcjtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0TWUgPSBhc3luYyAodXJsLCBqd3QsKSA9PiB7XHJcbiAgdXJsICs9IFwiLTFcIlxyXG4gIHRyeSB7XHJcbiAgICAvLyDQktGL0L/QvtC70L3Rj9C10Lwg0LfQsNC/0YDQvtGBXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xyXG4gICAgICAvLyDQl9Cw0L/RgNC+0YEg0LLRi9C/0L7Qu9C90Y/QtdGC0YHRjyDQvNC10YLQvtC00L7QvCBHRVRcclxuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAvLyBKV1Qt0YLQvtC60LXQvSDQv9C10YDQtdC00LDRkdGC0YHRjyDQsiDRgdC/0LXRhtC40LDQu9GM0L3QvtC8INC30LDQs9C+0LvQvtCy0LrQtSBBdXRob3JpemF0aW9uXHJcbiAgICAgIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2p3dH1gIH0sXHJcbiAgICB9KTtcclxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDIwMCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCLQntGI0LjQsdC60LAg0L/QvtC70YPRh9C10L3QuNGPINC00LDQvdC90YvRhVwiKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiBlcnJvcjtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0SldUID0gKGp3dCkgPT4ge1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiand0XCIsIGp3dCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0SldUID0gKCkgPT4ge1xyXG4gIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImp3dFwiKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVKV1QgPSAoKSA9PiB7XHJcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJqd3RcIik7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY2hlY2tJZlVzZXJWb3RlZCA9IChnYW1lLCB1c2VySWQpID0+IHtcclxuXHJcbiAgcmV0dXJuIGdhbWUudXNlcnMuZmluZCgodXNlcikgPT4gdXNlci5pZCA9PT0gdXNlcklkKTtcclxufTtcclxuZXhwb3J0IGNvbnN0IHZvdGUgPSBhc3luYyAodXJsLCBqd3QsIHVzZXJzQXJyYXkpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcclxuICAgICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2p3dH1gLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHVzZXJzOiB1c2Vyc0FycmF5IH0pLFxyXG4gICAgfSk7XHJcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwi0J7RiNC40LHQutCwINCz0L7Qu9C+0YHQvtCy0LDQvdC40Y9cIik7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gZXJyb3I7XHJcbiAgfVxyXG59O1xyXG4iXSwibmFtZXMiOlsiaXNSZXNwb25zZU9rIiwicmVzcG9uc2UiLCJFcnJvciIsIm5vcm1hbGl6ZURhdGFPYmplY3QiLCJvYmoiLCJzdHIiLCJKU09OIiwic3RyaW5naWZ5IiwicmVwbGFjZUFsbCIsIm5ld09iaiIsInBhcnNlIiwicmVzdWx0IiwiY2F0ZWdvcnkiLCJjYXRlZ29yaWVzIiwibm9ybWFsaXplRGF0YSIsImRhdGEiLCJtYXAiLCJpdGVtIiwiZ2V0RGF0YSIsInVybCIsImZldGNoIiwic3RhdHVzIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImdldE5vcm1hbGl6ZWRHYW1lc0RhdGFCeUNhdGVnb3J5IiwibGVuZ3RoIiwiX2lkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImRldmVsb3BlciIsImltYWdlIiwidXNlcnMiLCJnZXROb3JtYWxpemVkR2FtZURhdGFCeUlkIiwiaWQiLCJyZWdpc3RlciIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiYXV0aG9yaXplIiwiZ2V0TWUiLCJqd3QiLCJBdXRob3JpemF0aW9uIiwic2V0SldUIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImdldEpXVCIsImdldEl0ZW0iLCJyZW1vdmVKV1QiLCJyZW1vdmVJdGVtIiwiY2hlY2tJZlVzZXJWb3RlZCIsImdhbWUiLCJ1c2VySWQiLCJmaW5kIiwidXNlciIsInZvdGUiLCJ1c2Vyc0FycmF5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/api/api-utils.js\n"));

/***/ })

});