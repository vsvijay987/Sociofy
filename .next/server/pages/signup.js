(function() {
var exports = {};
exports.id = "pages/signup";
exports.ids = ["pages/signup"];
exports.modules = {

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\vsvij\\Documents\\sociofy-pesto\\pages\\signup.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const signup = () => {
  const {
    0: user,
    1: setUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const {
    name,
    email,
    password,
    confirmPassword
  } = user;
  const {
    0: showPassword,
    1: setShowPassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: showConfirmPassword,
    1: setShowConfirmPassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: errorMsg,
    1: setErrorMsg
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: formLoading,
    1: setFormLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: submitDisabled,
    1: setSubmitDisabled
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const isUser = Object.values({
      name,
      email,
      password,
      confirmPassword
    }).every(item => Boolean(item));
    isUser ? setSubmitDisabled(false) : setSubmitDisabled(true);
  }, [user]);

  const handleSubmit = e => e.preventDefault();

  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    setUser(prev => _objectSpread(_objectSpread({}, prev), {}, {
      [name]: value
    }));
  };

  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("div", {
    className: "font-link",
    style: {
      textAlign: 'center',
      fontSize: '50px',
      paddingBottom: '20px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, "Sociofy")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Grid, {
    centered: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Grid.Row, {
    columns: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Grid.Column, {
    width: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
    src: "https://res.cloudinary.com/codeamphi/image/upload/v1640797702/signup_vb3brx.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Grid.Column, {
    textAlign: "center",
    width: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form, {
    loading: formLoading,
    error: errorMsg !== null,
    onSubmit: handleSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    error: true,
    header: "Oops!",
    content: errorMsg,
    onDismiss: () => setErrorMsg(null),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 15
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 15
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "https://res.cloudinary.com/codeamphi/image/upload/v1640798021/sociofy_ylysdp.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "font-link",
    style: {
      fontSize: '20px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 19
    }
  }, "CREATE NEW ACCOUNT")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    required: true,
    placeholder: "Name",
    name: "name",
    value: name,
    onChange: handleChange,
    fluid: true,
    icon: "user",
    iconPosition: "left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 17
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    required: true,
    placeholder: "Email",
    name: "email",
    value: email,
    onChange: handleChange,
    fluid: true,
    icon: "envelope",
    iconPosition: "left",
    type: "email",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    placeholder: "Password",
    name: "password",
    value: password,
    onChange: handleChange,
    fluid: true,
    icon: {
      name: "eye",
      circular: true,
      link: true,
      onClick: () => setShowPassword(!showPassword)
    },
    iconPosition: "left",
    type: showPassword ? "text" : "password",
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 17
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    placeholder: "Confirm Password",
    name: "confirmPassword",
    value: confirmPassword,
    onChange: handleChange,
    fluid: true,
    icon: {
      name: "eye",
      circular: true,
      link: true,
      onClick: () => setShowConfirmPassword(!showConfirmPassword)
    },
    iconPosition: "left",
    type: showConfirmPassword ? "text" : "password",
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 17
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
    hidden: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 17
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
    icon: "signup",
    content: "Signup",
    type: "submit",
    style: {
      backgroundColor: "#B23B79",
      color: "white"
    },
    disabled: submitDisabled,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 17
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
    hidden: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "font-link",
    style: {
      fontSize: '15px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 17
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 71
    }
  }, "Already have an account, ", __jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
    href: "/login",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 99
    }
  }, "Login here")))))))), __jsx("div", {
    className: "font-link",
    style: {
      textAlign: 'center',
      fontSize: '50px',
      padding: '20px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 9
    }
  }, "Be Social, Go Social")));
};

/* harmony default export */ __webpack_exports__["default"] = (signup);

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("semantic-ui-react");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js"], function() { return __webpack_exec__("./pages/signup.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbHBoYS0yLy4vcGFnZXMvc2lnbnVwLmpzIiwid2VicGFjazovL2FscGhhLTIvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vYWxwaGEtMi9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9hbHBoYS0yL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9hbHBoYS0yL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9hbHBoYS0yL2V4dGVybmFsIFwic2VtYW50aWMtdWktcmVhY3RcIiIsIndlYnBhY2s6Ly9hbHBoYS0yL2lnbm9yZWR8QzpcXFVzZXJzXFx2c3ZpalxcRG9jdW1lbnRzXFxzb2Npb2Z5LXBlc3RvXFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsic2lnbnVwIiwidXNlciIsInNldFVzZXIiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiY29uZmlybVBhc3N3b3JkIiwic2hvd1Bhc3N3b3JkIiwic2V0U2hvd1Bhc3N3b3JkIiwic2hvd0NvbmZpcm1QYXNzd29yZCIsInNldFNob3dDb25maXJtUGFzc3dvcmQiLCJlcnJvck1zZyIsInNldEVycm9yTXNnIiwiZm9ybUxvYWRpbmciLCJzZXRGb3JtTG9hZGluZyIsInN1Ym1pdERpc2FibGVkIiwic2V0U3VibWl0RGlzYWJsZWQiLCJ1c2VFZmZlY3QiLCJpc1VzZXIiLCJPYmplY3QiLCJ2YWx1ZXMiLCJldmVyeSIsIml0ZW0iLCJCb29sZWFuIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlQ2hhbmdlIiwidmFsdWUiLCJ0YXJnZXQiLCJwcmV2IiwidGV4dEFsaWduIiwiZm9udFNpemUiLCJwYWRkaW5nQm90dG9tIiwiY2lyY3VsYXIiLCJsaW5rIiwib25DbGljayIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwicGFkZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBU0E7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLE1BQU07QUFDbkIsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCQywrQ0FBUSxDQUFDO0FBQy9CQyxRQUFJLEVBQUUsRUFEeUI7QUFFL0JDLFNBQUssRUFBRSxFQUZ3QjtBQUcvQkMsWUFBUSxFQUFFLEVBSHFCO0FBSS9CQyxtQkFBZSxFQUFFO0FBSmMsR0FBRCxDQUFoQztBQU9BLFFBQU07QUFBRUgsUUFBRjtBQUFRQyxTQUFSO0FBQWVDLFlBQWY7QUFBeUJDO0FBQXpCLE1BQTZDTixJQUFuRDtBQUNBLFFBQU07QUFBQSxPQUFDTyxZQUFEO0FBQUEsT0FBZUM7QUFBZixNQUFrQ04sK0NBQVEsQ0FBQyxLQUFELENBQWhEO0FBQ0EsUUFBTTtBQUFBLE9BQUNPLG1CQUFEO0FBQUEsT0FBc0JDO0FBQXRCLE1BQWdEUiwrQ0FBUSxDQUFDLEtBQUQsQ0FBOUQ7QUFDQSxRQUFNO0FBQUEsT0FBQ1MsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJWLCtDQUFRLENBQUMsSUFBRCxDQUF4QztBQUNBLFFBQU07QUFBQSxPQUFDVyxXQUFEO0FBQUEsT0FBY0M7QUFBZCxNQUFnQ1osK0NBQVEsQ0FBQyxLQUFELENBQTlDO0FBQ0EsUUFBTTtBQUFBLE9BQUNhLGNBQUQ7QUFBQSxPQUFpQkM7QUFBakIsTUFBc0NkLCtDQUFRLENBQUMsSUFBRCxDQUFwRDtBQUVBZSxrREFBUyxDQUFDLE1BQU07QUFDZCxVQUFNQyxNQUFNLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjO0FBQUVqQixVQUFGO0FBQVFDLFdBQVI7QUFBZUMsY0FB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QUFBO0FBQUE7QUFBQSw0QkFERixDQWxHRixDQURGO0FBd0dELENBcklEOztBQXVJQSwrREFBZXhDLE1BQWYsRTs7Ozs7Ozs7Ozs7QUNuSkEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7QUNBQSxlIiwiZmlsZSI6InBhZ2VzL3NpZ251cC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgRm9ybSxcclxuICBCdXR0b24sXHJcbiAgTWVzc2FnZSxcclxuICBTZWdtZW50LFxyXG4gIERpdmlkZXIsXHJcbiAgR3JpZCxcclxuICBJbWFnZSxcclxufSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IHNpZ251cCA9ICgpID0+IHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSh7XHJcbiAgICBuYW1lOiBcIlwiLFxyXG4gICAgZW1haWw6IFwiXCIsXHJcbiAgICBwYXNzd29yZDogXCJcIixcclxuICAgIGNvbmZpcm1QYXNzd29yZDogXCJcIixcclxuICB9KTtcclxuXHJcbiAgY29uc3QgeyBuYW1lLCBlbWFpbCwgcGFzc3dvcmQsIGNvbmZpcm1QYXNzd29yZCB9ID0gdXNlcjtcclxuICBjb25zdCBbc2hvd1Bhc3N3b3JkLCBzZXRTaG93UGFzc3dvcmRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzaG93Q29uZmlybVBhc3N3b3JkLCBzZXRTaG93Q29uZmlybVBhc3N3b3JkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZXJyb3JNc2csIHNldEVycm9yTXNnXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtmb3JtTG9hZGluZywgc2V0Rm9ybUxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzdWJtaXREaXNhYmxlZCwgc2V0U3VibWl0RGlzYWJsZWRdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBpc1VzZXIgPSBPYmplY3QudmFsdWVzKHsgbmFtZSwgZW1haWwsIHBhc3N3b3JkLCBjb25maXJtUGFzc3dvcmQgfSkuZXZlcnkoaXRlbSA9PlxyXG4gICAgICBCb29sZWFuKGl0ZW0pXHJcbiAgICApO1xyXG4gICAgaXNVc2VyID8gc2V0U3VibWl0RGlzYWJsZWQoZmFsc2UpIDogc2V0U3VibWl0RGlzYWJsZWQodHJ1ZSk7XHJcbiAgfSwgW3VzZXJdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xyXG4gICAgc2V0VXNlcigocHJldikgPT4gKHsgLi4ucHJldiwgW25hbWVdOiB2YWx1ZSB9KSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1saW5rXCIgc3R5bGU9e3t0ZXh0QWxpZ246ICdjZW50ZXInLCBmb250U2l6ZTogJzUwcHgnLCBwYWRkaW5nQm90dG9tOiAnMjBweCd9fT5cclxuICAgICAgICA8cD5Tb2Npb2Z5PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEdyaWQgY2VudGVyZWQ+XHJcbiAgICAgICAgPEdyaWQuUm93IGNvbHVtbnM9ezJ9PlxyXG4gICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs2fT5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2NvZGVhbXBoaS9pbWFnZS91cGxvYWQvdjE2NDA3OTc3MDIvc2lnbnVwX3ZiM2JyeC5wbmdcIiAvPlxyXG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgIDxHcmlkLkNvbHVtbiB0ZXh0QWxpZ249XCJjZW50ZXJcIiB3aWR0aD17Nn0+XHJcbiAgICAgICAgICAgIDxGb3JtXHJcbiAgICAgICAgICAgICAgbG9hZGluZz17Zm9ybUxvYWRpbmd9XHJcbiAgICAgICAgICAgICAgZXJyb3I9e2Vycm9yTXNnICE9PSBudWxsfVxyXG4gICAgICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgZXJyb3JcclxuICAgICAgICAgICAgICAgIGhlYWRlcj1cIk9vcHMhXCJcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2Vycm9yTXNnfVxyXG4gICAgICAgICAgICAgICAgb25EaXNtaXNzPXsoKSA9PiBzZXRFcnJvck1zZyhudWxsKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxTZWdtZW50PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9jb2RlYW1waGkvaW1hZ2UvdXBsb2FkL3YxNjQwNzk4MDIxL3NvY2lvZnlfeWx5c2RwLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1saW5rXCIgc3R5bGU9e3tmb250U2l6ZTogJzIwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxwPkNSRUFURSBORVcgQUNDT1VOVDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17bmFtZX1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgZmx1aWRcclxuICAgICAgICAgICAgICAgICAgaWNvbj1cInVzZXJcIlxyXG4gICAgICAgICAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCJcclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgZmx1aWRcclxuICAgICAgICAgICAgICAgICAgaWNvbj1cImVudmVsb3BlXCJcclxuICAgICAgICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIGZsdWlkXHJcbiAgICAgICAgICAgICAgICAgIGljb249e3tcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImV5ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNpcmN1bGFyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljazogKCkgPT4gc2V0U2hvd1Bhc3N3b3JkKCFzaG93UGFzc3dvcmQpLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT17c2hvd1Bhc3N3b3JkID8gXCJ0ZXh0XCIgOiBcInBhc3N3b3JkXCJ9XHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb25maXJtIFBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cImNvbmZpcm1QYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb25maXJtUGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIGZsdWlkXHJcbiAgICAgICAgICAgICAgICAgIGljb249e3tcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImV5ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNpcmN1bGFyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljazogKCkgPT4gc2V0U2hvd0NvbmZpcm1QYXNzd29yZCghc2hvd0NvbmZpcm1QYXNzd29yZCksXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPXtzaG93Q29uZmlybVBhc3N3b3JkID8gXCJ0ZXh0XCIgOiBcInBhc3N3b3JkXCJ9XHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPERpdmlkZXIgaGlkZGVuIC8+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGljb249XCJzaWdudXBcIlxyXG4gICAgICAgICAgICAgICAgICBjb250ZW50PVwiU2lnbnVwXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBcIiNCMjNCNzlcIiwgY29sb3I6IFwid2hpdGVcIn19XHJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtzdWJtaXREaXNhYmxlZH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8RGl2aWRlciBoaWRkZW4gLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1saW5rXCIgc3R5bGU9e3tmb250U2l6ZTogJzE1cHgnfX0+PHA+QWxyZWFkeSBoYXZlIGFuIGFjY291bnQsIDxMaW5rIGhyZWY9XCIvbG9naW5cIj5Mb2dpbiBoZXJlPC9MaW5rPjwvcD48L2Rpdj5cclxuICAgICAgICAgICAgICA8L1NlZ21lbnQ+XHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgPC9HcmlkLlJvdz5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtbGlua1wiIHN0eWxlPXt7dGV4dEFsaWduOiAnY2VudGVyJywgZm9udFNpemU6ICc1MHB4JywgcGFkZGluZzogJzIwcHgnfX0+XHJcbiAgICAgICAgPHA+QmUgU29jaWFsLCBHbyBTb2NpYWw8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNpZ251cDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZW1hbnRpYy11aS1yZWFjdFwiKTs7IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==