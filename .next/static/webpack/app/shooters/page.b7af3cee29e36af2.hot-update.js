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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authorize: function() { return /* binding */ authorize; },\n/* harmony export */   checkIfUserVoted: function() { return /* binding */ checkIfUserVoted; },\n/* harmony export */   getData: function() { return /* binding */ getData; },\n/* harmony export */   getJWT: function() { return /* binding */ getJWT; },\n/* harmony export */   getMe: function() { return /* binding */ getMe; },\n/* harmony export */   getNormalizedGameDataById: function() { return /* binding */ getNormalizedGameDataById; },\n/* harmony export */   getNormalizedGamesDataByCategory: function() { return /* binding */ getNormalizedGamesDataByCategory; },\n/* harmony export */   isResponseOk: function() { return /* binding */ isResponseOk; },\n/* harmony export */   normalizeData: function() { return /* binding */ normalizeData; },\n/* harmony export */   register: function() { return /* binding */ register; },\n/* harmony export */   removeJWT: function() { return /* binding */ removeJWT; },\n/* harmony export */   setJWT: function() { return /* binding */ setJWT; },\n/* harmony export */   vote: function() { return /* binding */ vote; }\n/* harmony export */ });\nconst isResponseOk = (response)=>{\n    return !(response instanceof Error);\n};\nconst normalizeDataObject = (obj)=>{\n    let str = JSON.stringify(obj);\n    str = str.replaceAll(\"_id\", \"id\");\n    const newObj = JSON.parse(str);\n    const result = {\n        ...newObj,\n        category: newObj.categories\n    };\n    return result;\n};\nconst normalizeData = (data)=>{\n    return data.map((item)=>{\n        return normalizeDataObject(item);\n    });\n};\nconst getData = async (url)=>{\n    try {\n        const response = await fetch(url);\n        if (response.status !== 200) {\n            console.log(\"все плохо\");\n            throw new Error(\"Ошибка получения данных\");\n        }\n        console.log(url);\n        const data = await response.json();\n        console.log(\"response: \".concat(JSON.stringify(data)));\n        return data;\n    } catch (error) {\n        console.log(\"все плохо \".concat(error));\n        return error;\n    }\n};\nconst getNormalizedGamesDataByCategory = async (url, category)=>{\n    try {\n        const data = await getData(\"\".concat(url, \"?categories.name=\").concat(category));\n        // Применяем функцию нормализации для работы с массивом\n        if (!data.length) {\n            return [\n                {\n                    _id: \"0\",\n                    title: \"games leave chat\",\n                    description: \"our site dosn't have any games with this category yet. Don't be upset sooner or later someone add it.\",\n                    developer: \"vanger\",\n                    image: \"https://pm1.aminoapps.com/6970/2471b8384bca07a9fdcbae58fd80490713fe7f27r1-892-892v2_hq.jpg\",\n                    users: []\n                }\n            ];\n        }\n        return isResponseOk(data) ? normalizeData(data) : data;\n    } catch (error) {\n        return error;\n    }\n};\nconst getNormalizedGameDataById = async (url, id)=>{\n    const data = await getData(\"\".concat(url, \"/\").concat(id));\n    console.log(\"game: \".concat(JSON.stringify(data)));\n    return isResponseOk(data) ? normalizeDataObject(data) : data;\n};\nconst register = async (url, data)=>{\n    try {\n        const response = await fetch(url, {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(data)\n        });\n        if (response.status !== 200) {\n            throw new Error(\"Ошибка регистрации!\");\n        }\n        const result = await response.json();\n        return result;\n    } catch (error) {\n        return error;\n    }\n};\nconst authorize = async (url, data)=>{\n    console.log(\" auth-url: \".concat(url, \" /n data: \").concat(data));\n    try {\n        const response = await fetch(url, {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(data)\n        });\n        console.log(\"response: \".concat(response));\n        if (response.status !== 200) {\n            console.log(response.status);\n            throw new Error(\"Ошибка авторизации\");\n        }\n        const result = await response.json();\n        return result;\n    } catch (error) {\n        return error;\n    }\n};\nconst getMe = async (url, jwt)=>{\n    url += \"-1\";\n    try {\n        // Выполняем запрос\n        const response = await fetch(url, {\n            // Запрос выполняется методом GET\n            method: \"GET\",\n            // JWT-токен передаётся в специальном заголовке Authorization\n            headers: {\n                Authorization: \"Bearer \".concat(jwt)\n            }\n        });\n        if (response.status !== 200) {\n            throw new Error(\"Ошибка получения данных\");\n        }\n        const result = await response.json();\n        return result;\n    } catch (error) {\n        return error;\n    }\n};\nconst setJWT = (jwt)=>{\n    localStorage.setItem(\"jwt\", jwt);\n};\nconst getJWT = ()=>{\n    return localStorage.getItem(\"jwt\");\n};\nconst removeJWT = ()=>{\n    localStorage.removeItem(\"jwt\");\n};\nconst checkIfUserVoted = (game, userId)=>{\n    console.log(game === null || game === void 0 ? void 0 : game.users);\n    console.log(userId);\n    console.log(game === null || game === void 0 ? void 0 : game.users.find((user)=>user.id === userId));\n    return game.users.find((user)=>user.id === userId);\n};\nconst vote = async (url, jwt, usersArray)=>{\n    try {\n        const response = await fetch(url, {\n            method: \"PUT\",\n            headers: {\n                \"Content-Type\": \"application/json\",\n                Authorization: \"Bearer \".concat(jwt)\n            },\n            body: JSON.stringify({\n                users: usersArray\n            })\n        });\n        if (response.status !== 200) {\n            throw new Error(\"Ошибка голосования\");\n        }\n        const result = await response.json();\n        return result;\n    } catch (error) {\n        return error;\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hcGkvYXBpLXV0aWxzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTyxNQUFNQSxlQUFlLENBQUNDO0lBQzNCLE9BQU8sQ0FBRUEsQ0FBQUEsb0JBQW9CQyxLQUFJO0FBQ25DLEVBQUU7QUFFRixNQUFNQyxzQkFBc0IsQ0FBQ0M7SUFDM0IsSUFBSUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDSDtJQUV6QkMsTUFBTUEsSUFBSUcsVUFBVSxDQUFDLE9BQU87SUFFNUIsTUFBTUMsU0FBU0gsS0FBS0ksS0FBSyxDQUFDTDtJQUMxQixNQUFNTSxTQUFTO1FBQUUsR0FBR0YsTUFBTTtRQUFFRyxVQUFVSCxPQUFPSSxVQUFVO0lBQUM7SUFDeEQsT0FBT0Y7QUFDVDtBQUVPLE1BQU1HLGdCQUFnQixDQUFDQztJQUM1QixPQUFPQSxLQUFLQyxHQUFHLENBQUMsQ0FBQ0M7UUFDZixPQUFPZCxvQkFBb0JjO0lBQzdCO0FBQ0YsRUFBRTtBQUVLLE1BQU1DLFVBQVUsT0FBT0M7SUFDNUIsSUFBSTtRQUNGLE1BQU1sQixXQUFXLE1BQU1tQixNQUFNRDtRQUU3QixJQUFJbEIsU0FBU29CLE1BQU0sS0FBSyxLQUFLO1lBQzNCQyxRQUFRQyxHQUFHLENBQUM7WUFDWixNQUFNLElBQUlyQixNQUFNO1FBQ2xCO1FBQ0FvQixRQUFRQyxHQUFHLENBQUNKO1FBQ1osTUFBTUosT0FBTyxNQUFNZCxTQUFTdUIsSUFBSTtRQUNoQ0YsUUFBUUMsR0FBRyxDQUFDLGFBQWtDLE9BQXJCakIsS0FBS0MsU0FBUyxDQUFDUTtRQUN4QyxPQUFPQTtJQUNULEVBQUUsT0FBT1UsT0FBTztRQUNkSCxRQUFRQyxHQUFHLENBQUMsYUFBbUIsT0FBTkU7UUFDekIsT0FBT0E7SUFDVDtBQUNGLEVBQUU7QUFFSyxNQUFNQyxtQ0FBbUMsT0FBT1AsS0FBS1A7SUFDMUQsSUFBSTtRQUNGLE1BQU1HLE9BQU8sTUFBTUcsUUFBUSxHQUEwQk4sT0FBdkJPLEtB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LEdBQUcsQ0FBQzhCO0lBQ1ovQixRQUFRQyxHQUFHLENBQUM2QixpQkFBQUEsMkJBQUFBLEtBQU1uQixLQUFLLENBQUNxQixJQUFJLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS3BCLEVBQUUsS0FBS2tCO0lBQ25ELE9BQU9ELEtBQUtuQixLQUFLLENBQUNxQixJQUFJLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS3BCLEVBQUUsS0FBS2tCO0FBQy9DLEVBQUU7QUFDSyxNQUFNRyxPQUFPLE9BQU9yQyxLQUFLdUIsS0FBS2U7SUFDbkMsSUFBSTtRQUNGLE1BQU14RCxXQUFXLE1BQU1tQixNQUFNRCxLQUFLO1lBQ2hDa0IsUUFBUTtZQUNSQyxTQUFTO2dCQUNQLGdCQUFnQjtnQkFDaEJLLGVBQWUsVUFBYyxPQUFKRDtZQUMzQjtZQUNBSCxNQUFNakMsS0FBS0MsU0FBUyxDQUFDO2dCQUFFMEIsT0FBT3dCO1lBQVc7UUFDM0M7UUFDQSxJQUFJeEQsU0FBU29CLE1BQU0sS0FBSyxLQUFLO1lBQzNCLE1BQU0sSUFBSW5CLE1BQU07UUFDbEI7UUFDQSxNQUFNUyxTQUFTLE1BQU1WLFNBQVN1QixJQUFJO1FBQ2xDLE9BQU9iO0lBQ1QsRUFBRSxPQUFPYyxPQUFPO1FBQ2QsT0FBT0E7SUFDVDtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2FwaS9hcGktdXRpbHMuanM/M2UyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZXhwb3J0IGNvbnN0IGlzUmVzcG9uc2VPayA9IChyZXNwb25zZSkgPT4ge1xyXG4gIHJldHVybiAhKHJlc3BvbnNlIGluc3RhbmNlb2YgRXJyb3IpO1xyXG59O1xyXG5cclxuY29uc3Qgbm9ybWFsaXplRGF0YU9iamVjdCA9IChvYmopID0+IHtcclxuICBsZXQgc3RyID0gSlNPTi5zdHJpbmdpZnkob2JqKTtcclxuXHJcbiAgc3RyID0gc3RyLnJlcGxhY2VBbGwoXCJfaWRcIiwgXCJpZFwiKTtcclxuXHJcbiAgY29uc3QgbmV3T2JqID0gSlNPTi5wYXJzZShzdHIpO1xyXG4gIGNvbnN0IHJlc3VsdCA9IHsgLi4ubmV3T2JqLCBjYXRlZ29yeTogbmV3T2JqLmNhdGVnb3JpZXMgfTtcclxuICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZURhdGEgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiBkYXRhLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgcmV0dXJuIG5vcm1hbGl6ZURhdGFPYmplY3QoaXRlbSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RGF0YSA9IGFzeW5jICh1cmwpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICBcclxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDIwMCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcItCy0YHQtSDQv9C70L7RhdC+XCIpXHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcItCe0YjQuNCx0LrQsCDQv9C+0LvRg9GH0LXQvdC40Y8g0LTQsNC90L3Ri9GFXCIpO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2codXJsKVxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIGNvbnNvbGUubG9nKGByZXNwb25zZTogJHtKU09OLnN0cmluZ2lmeShkYXRhKX1gKVxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGDQstGB0LUg0L/Qu9C+0YXQviAke2Vycm9yfWApXHJcbiAgICByZXR1cm4gZXJyb3I7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldE5vcm1hbGl6ZWRHYW1lc0RhdGFCeUNhdGVnb3J5ID0gYXN5bmMgKHVybCwgY2F0ZWdvcnkpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldERhdGEoYCR7dXJsfT9jYXRlZ29yaWVzLm5hbWU9JHtjYXRlZ29yeX1gKTtcclxuICAgIC8vINCf0YDQuNC80LXQvdGP0LXQvCDRhNGD0L3QutGG0LjRjiDQvdC+0YDQvNCw0LvQuNC30LDRhtC40Lgg0LTQu9GPINGA0LDQsdC+0YLRiyDRgSDQvNCw0YHRgdC40LLQvtC8XHJcbiAgICBpZiAoIWRhdGEubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiBbe1xyXG4gICAgICAgIF9pZDogXCIwXCIsXHJcbiAgICAgICAgIHRpdGxlOiBcImdhbWVzIGxlYXZlIGNoYXRcIixcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIm91ciBzaXRlIGRvc24ndCBoYXZlIGFueSBnYW1lcyB3aXRoIHRoaXMgY2F0ZWdvcnkgeWV0LiBEb24ndCBiZSB1cHNldCBzb29uZXIgb3IgbGF0ZXIgc29tZW9uZSBhZGQgaXQuXCIsXHJcbiAgICAgICAgICBkZXZlbG9wZXI6IFwidmFuZ2VyXCIsXHJcbiAgICAgICAgICBpbWFnZTogXCJodHRwczovL3BtMS5hbWlub2FwcHMuY29tLzY5NzAvMjQ3MWI4Mzg0YmNhMDdhOWZkY2JhZTU4ZmQ4MDQ5MDcxM2ZlN2YyN3IxLTg5Mi04OTJ2Ml9ocS5qcGdcIixcclxuICAgICAgICB1c2VyczogW119XVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlzUmVzcG9uc2VPayhkYXRhKSA/IG5vcm1hbGl6ZURhdGEoZGF0YSkgOiBkYXRhO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gZXJyb3I7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldE5vcm1hbGl6ZWRHYW1lRGF0YUJ5SWQgPSBhc3luYyAodXJsLCBpZCkgPT4ge1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXREYXRhKGAke3VybH0vJHtpZH1gKTtcclxuICBjb25zb2xlLmxvZyhgZ2FtZTogJHtKU09OLnN0cmluZ2lmeShkYXRhKX1gKVxyXG4gIHJldHVybiBpc1Jlc3BvbnNlT2soZGF0YSkgPyBub3JtYWxpemVEYXRhT2JqZWN0KGRhdGEpIDogZGF0YTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZWdpc3RlciA9IGFzeW5jICh1cmwsIGRhdGEpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgIH0pO1xyXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcItCe0YjQuNCx0LrQsCDRgNC10LPQuNGB0YLRgNCw0YbQuNC4IVwiKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiBlcnJvcjtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYXV0aG9yaXplID0gYXN5bmMgKHVybCwgZGF0YSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGAgYXV0aC11cmw6ICR7dXJsfSAvbiBkYXRhOiAke2RhdGF9YCk7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICBcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coYHJlc3BvbnNlOiAke3Jlc3BvbnNlfWApO1xyXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLnN0YXR1cylcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwi0J7RiNC40LHQutCwINCw0LLRgtC+0YDQuNC30LDRhtC40LhcIik7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gZXJyb3I7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldE1lID0gYXN5bmMgKHVybCwgand0LCkgPT4ge1xyXG4gIHVybCArPSBcIi0xXCJcclxuICB0cnkge1xyXG4gICAgLy8g0JLRi9C/0L7Qu9C90Y/QtdC8INC30LDQv9GA0L7RgVxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcclxuICAgICAgLy8g0JfQsNC/0YDQvtGBINCy0YvQv9C+0LvQvdGP0LXRgtGB0Y8g0LzQtdGC0L7QtNC+0LwgR0VUXHJcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgLy8gSldULdGC0L7QutC10L0g0L/QtdGA0LXQtNCw0ZHRgtGB0Y8g0LIg0YHQv9C10YbQuNCw0LvRjNC90L7QvCDQt9Cw0LPQvtC70L7QstC60LUgQXV0aG9yaXphdGlvblxyXG4gICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtqd3R9YCB9LFxyXG4gICAgfSk7XHJcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwi0J7RiNC40LHQutCwINC/0L7Qu9GD0YfQtdC90LjRjyDQtNCw0L3QvdGL0YVcIik7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gZXJyb3I7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldEpXVCA9IChqd3QpID0+IHtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImp3dFwiLCBqd3QpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEpXVCA9ICgpID0+IHtcclxuICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJqd3RcIik7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlSldUID0gKCkgPT4ge1xyXG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiand0XCIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNoZWNrSWZVc2VyVm90ZWQgPSAoZ2FtZSwgdXNlcklkKSA9PiB7XHJcbiAgY29uc29sZS5sb2coZ2FtZT8udXNlcnMpXHJcbiAgY29uc29sZS5sb2codXNlcklkKVxyXG4gIGNvbnNvbGUubG9nKGdhbWU/LnVzZXJzLmZpbmQoKHVzZXIpID0+IHVzZXIuaWQgPT09IHVzZXJJZCkpXHJcbiAgcmV0dXJuIGdhbWUudXNlcnMuZmluZCgodXNlcikgPT4gdXNlci5pZCA9PT0gdXNlcklkKTtcclxufTtcclxuZXhwb3J0IGNvbnN0IHZvdGUgPSBhc3luYyAodXJsLCBqd3QsIHVzZXJzQXJyYXkpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcclxuICAgICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2p3dH1gLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHVzZXJzOiB1c2Vyc0FycmF5IH0pLFxyXG4gICAgfSk7XHJcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwi0J7RiNC40LHQutCwINCz0L7Qu9C+0YHQvtCy0LDQvdC40Y9cIik7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gZXJyb3I7XHJcbiAgfVxyXG59O1xyXG4iXSwibmFtZXMiOlsiaXNSZXNwb25zZU9rIiwicmVzcG9uc2UiLCJFcnJvciIsIm5vcm1hbGl6ZURhdGFPYmplY3QiLCJvYmoiLCJzdHIiLCJKU09OIiwic3RyaW5naWZ5IiwicmVwbGFjZUFsbCIsIm5ld09iaiIsInBhcnNlIiwicmVzdWx0IiwiY2F0ZWdvcnkiLCJjYXRlZ29yaWVzIiwibm9ybWFsaXplRGF0YSIsImRhdGEiLCJtYXAiLCJpdGVtIiwiZ2V0RGF0YSIsInVybCIsImZldGNoIiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsImpzb24iLCJlcnJvciIsImdldE5vcm1hbGl6ZWRHYW1lc0RhdGFCeUNhdGVnb3J5IiwibGVuZ3RoIiwiX2lkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImRldmVsb3BlciIsImltYWdlIiwidXNlcnMiLCJnZXROb3JtYWxpemVkR2FtZURhdGFCeUlkIiwiaWQiLCJyZWdpc3RlciIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiYXV0aG9yaXplIiwiZ2V0TWUiLCJqd3QiLCJBdXRob3JpemF0aW9uIiwic2V0SldUIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImdldEpXVCIsImdldEl0ZW0iLCJyZW1vdmVKV1QiLCJyZW1vdmVJdGVtIiwiY2hlY2tJZlVzZXJWb3RlZCIsImdhbWUiLCJ1c2VySWQiLCJmaW5kIiwidXNlciIsInZvdGUiLCJ1c2Vyc0FycmF5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/api/api-utils.js\n"));

/***/ })

});