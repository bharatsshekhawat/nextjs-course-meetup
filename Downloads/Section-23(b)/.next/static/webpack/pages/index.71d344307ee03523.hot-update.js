"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/meetups/MeetupList */ \"./components/meetups/MeetupList.js\");\n\n\nvar DUMMY_MEETUPS = [\n    {\n        id: \"m1\",\n        title: \"A First Meetup\",\n        image: \"https://images.unsplash.com/photo-1517404215738-15263e9f9178?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80\",\n        address: \"Some address 5, 12345 Some City\",\n        description: \"This is a first meetup!\"\n    },\n    {\n        id: \"m2\",\n        title: \"A Second Meetup\",\n        image: \"https://images.unsplash.com/photo-1673205194019-55ac9f0a0899?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80\",\n        address: \"Some address 10, 12345 Some City\",\n        description: \"This is a Second meetup!\"\n    },\n    {\n        id: \"m3\",\n        title: \"A Third Meetup\",\n        image: \"https://images.unsplash.com/photo-1673232141234-889ed2cf341c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80\",\n        address: \"Some address 25, 12345 Some City\",\n        description: \"This is a Third meetup!\"\n    }, \n];\nfunction HomePage(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        meetups: props.meetups\n    }, void 0, false, {\n        fileName: \"/Users/bharatsinghshekhawat/Downloads/Section-23(b)/pages/index.js\",\n        lineNumber: 33,\n        columnNumber: 10\n    }, this);\n}\n_c = HomePage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage); // export async function getServerSideProps(context) {\n //   const req =  context.req;\n //   const res = context.res;\n //   return {\n //     props: {\n //       meetups: DUMMY_MEETUPS\n //     }\n //   };\n // }\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFFMEQ7QUFFMUQsSUFBTUMsYUFBYSxHQUFHO0lBQ3BCO1FBQ0VDLEVBQUUsRUFBRSxJQUFJO1FBQ1JDLEtBQUssRUFBRSxnQkFBZ0I7UUFDdkJDLEtBQUssRUFDSCxnS0FBZ0s7UUFDbEtDLE9BQU8sRUFBRSxpQ0FBaUM7UUFDMUNDLFdBQVcsRUFBRSx5QkFBeUI7S0FDdkM7SUFDRDtRQUNFSixFQUFFLEVBQUUsSUFBSTtRQUNSQyxLQUFLLEVBQUUsaUJBQWlCO1FBQ3hCQyxLQUFLLEVBQ0gsZ0tBQWdLO1FBQ2xLQyxPQUFPLEVBQUUsa0NBQWtDO1FBQzNDQyxXQUFXLEVBQUUsMEJBQTBCO0tBQ3hDO0lBQ0Q7UUFDRUosRUFBRSxFQUFFLElBQUk7UUFDUkMsS0FBSyxFQUFFLGdCQUFnQjtRQUN2QkMsS0FBSyxFQUNILGdLQUFnSztRQUNsS0MsT0FBTyxFQUFFLGtDQUFrQztRQUMzQ0MsV0FBVyxFQUFFLHlCQUF5QjtLQUN2QztDQUNGO0FBRUQsU0FBU0MsUUFBUSxDQUFDQyxLQUFLLEVBQUU7SUFDdkIscUJBQU8sOERBQUNSLHNFQUFVO1FBQUNTLE9BQU8sRUFBRUQsS0FBSyxDQUFDQyxPQUFPOzs7OztZQUFJLENBQUM7QUFDaEQsQ0FBQztBQUZRRixLQUFBQSxRQUFROztBQXVCakIsK0RBQWVBLFFBQVEsRUFBQyxDQUV4QixzREFBc0Q7Q0FDdEQsOEJBQThCO0NBQzlCLDZCQUE2QjtDQUU3QixhQUFhO0NBQ2IsZUFBZTtDQUNmLCtCQUErQjtDQUMvQixRQUFRO0NBQ1IsT0FBTztDQUNQLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XG5cbmltcG9ydCBNZWV0dXBMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdFwiO1xuXG5jb25zdCBEVU1NWV9NRUVUVVBTID0gW1xuICB7XG4gICAgaWQ6IFwibTFcIixcbiAgICB0aXRsZTogXCJBIEZpcnN0IE1lZXR1cFwiLFxuICAgIGltYWdlOlxuICAgICAgXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUxNzQwNDIxNTczOC0xNTI2M2U5ZjkxNzg/aXhsaWI9cmItNC4wLjMmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTExNzAmcT04MFwiLFxuICAgIGFkZHJlc3M6IFwiU29tZSBhZGRyZXNzIDUsIDEyMzQ1IFNvbWUgQ2l0eVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSBmaXJzdCBtZWV0dXAhXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogXCJtMlwiLFxuICAgIHRpdGxlOiBcIkEgU2Vjb25kIE1lZXR1cFwiLFxuICAgIGltYWdlOlxuICAgICAgXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTY3MzIwNTE5NDAxOS01NWFjOWYwYTA4OTk/aXhsaWI9cmItNC4wLjMmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTExNzAmcT04MFwiLFxuICAgIGFkZHJlc3M6IFwiU29tZSBhZGRyZXNzIDEwLCAxMjM0NSBTb21lIENpdHlcIixcbiAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgU2Vjb25kIG1lZXR1cCFcIixcbiAgfSxcbiAge1xuICAgIGlkOiBcIm0zXCIsXG4gICAgdGl0bGU6IFwiQSBUaGlyZCBNZWV0dXBcIixcbiAgICBpbWFnZTpcbiAgICAgIFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE2NzMyMzIxNDEyMzQtODg5ZWQyY2YzNDFjP2l4bGliPXJiLTQuMC4zJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xMjI4JnE9ODBcIixcbiAgICBhZGRyZXNzOiBcIlNvbWUgYWRkcmVzcyAyNSwgMTIzNDUgU29tZSBDaXR5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBhIFRoaXJkIG1lZXR1cCFcIixcbiAgfSxcbl07XG5cbmZ1bmN0aW9uIEhvbWVQYWdlKHByb3BzKSB7XG4gIHJldHVybiA8TWVldHVwTGlzdCBtZWV0dXBzPXtwcm9wcy5tZWV0dXBzfSAvPjtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxuICAgIFwibW9uZ29kYitzcnY6Ly9uZXctdXNlcjAxOjEyQWJoaTEyQGNsdXN0ZXIwLmVkMmluMzkubW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIlxuICApO1xuICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xuXG4gIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbihcIm1lZXR1cHNcIik7XG5cbiAgY29uc3QgbWVldHVwcyA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmZpbmQoKS50b0FycmF5KCk7XG5cbiAgY2xpZW50LmNsb3NlKCk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIG1lZXR1cHM6IG1lZXR1cHMsXG4gICAgfSxcbiAgICByZXZhbGlkYXRlOiAxLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4vLyAgIGNvbnN0IHJlcSA9ICBjb250ZXh0LnJlcTtcbi8vICAgY29uc3QgcmVzID0gY29udGV4dC5yZXM7XG5cbi8vICAgcmV0dXJuIHtcbi8vICAgICBwcm9wczoge1xuLy8gICAgICAgbWVldHVwczogRFVNTVlfTUVFVFVQU1xuLy8gICAgIH1cbi8vICAgfTtcbi8vIH1cbiJdLCJuYW1lcyI6WyJNZWV0dXBMaXN0IiwiRFVNTVlfTUVFVFVQUyIsImlkIiwidGl0bGUiLCJpbWFnZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsIkhvbWVQYWdlIiwicHJvcHMiLCJtZWV0dXBzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});