module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "JkW7");
/******/ })
/************************************************************************/
/******/ ({

/***/ "++uR":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"header":"header__3bSSF"};

/***/ }),

/***/ "+4aq":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"chatWidget":"chatWidget__13Lo6"};

/***/ }),

/***/ "7qrb":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"actionBUtton":"actionBUtton__4-8Ic"};

/***/ }),

/***/ "BC8T":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"container":"container__1WsfE"};

/***/ }),

/***/ "Ca0b":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"footer":"footer__oCiMP"};

/***/ }),

/***/ "EbM4":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "FUu+":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "677bc517224dbbb71f15831540091942.svg";

/***/ }),

/***/ "FdyF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "914173c03e7e99f055d0f7ea808e46ac.png";

/***/ }),

/***/ "JQcY":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"messageContent":"messageContent__12vhR"};

/***/ }),

/***/ "JZ8d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};

/***/ }),

/***/ "Jamx":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"header":"header__1EfUK"};

/***/ }),

/***/ "JkW7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var actions_namespaceObject = {};
__webpack_require__.d(actions_namespaceObject, "addTodo", function() { return addTodo; });
__webpack_require__.d(actions_namespaceObject, "removeTodo", function() { return removeTodo; });

// EXTERNAL MODULE: ../node_modules/preact/dist/preact.min.js
var preact_min = __webpack_require__("KM04");
var preact_min_default = /*#__PURE__*/__webpack_require__.n(preact_min);

// EXTERNAL MODULE: ../node_modules/preact-redux/dist/preact-redux.js
var preact_redux = __webpack_require__("m/cc");
var preact_redux_default = /*#__PURE__*/__webpack_require__.n(preact_redux);

// EXTERNAL MODULE: ../node_modules/redux/es/index.js + 16 modules
var es = __webpack_require__("fpuT");

// CONCATENATED MODULE: ./store/store.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }



var ACTIONS = {
	ADD_TODO: function ADD_TODO(_ref, _ref2) {
		var text = _ref2.text;

		var todos = _ref.todos,
		    state = _objectWithoutProperties(_ref, ['todos']);

		return _extends({
			todos: [].concat(todos, [{
				id: Math.random().toString(36).substring(2),
				text: text
			}])
		}, state);
	},

	REMOVE_TODO: function REMOVE_TODO(_ref3, _ref4) {
		var todo = _ref4.todo;

		var todos = _ref3.todos,
		    state = _objectWithoutProperties(_ref3, ['todos']);

		return _extends({
			todos: todos.filter(function (i) {
				return i !== todo;
			})
		}, state);
	}
};

var INITIAL = {
	todos: []
};

/* harmony default export */ var store_store = (Object(es["createStore"])(function (state, action) {
	return action && ACTIONS[action.type] ? ACTIONS[action.type](state, action) : state;
}, INITIAL));

// export default createStore( (state, action) => (
// 	action && ACTIONS[action.type] ? ACTIONS[action.type](state, action) : state
// ), INITIAL, typeof devToolsExtension==='function' ? devToolsExtension() : undefined);
// CONCATENATED MODULE: ./store/reducers/reducers.js

var EMPTY = {};

/* harmony default export */ var reducers = (function (store) {
  return store || EMPTY;
});
// CONCATENATED MODULE: ./store/actions/actions.js

function addTodo(text) {
	return {
		type: 'ADD_TODO',
		text: text
	};
}

function removeTodo(todo) {
	return {
		type: 'REMOVE_TODO',
		todo: todo
	};
}
// EXTERNAL MODULE: ./components/chat-widget/header/actionButtons/signInOut/style.less
var style = __webpack_require__("7qrb");
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// CONCATENATED MODULE: ./components/chat-widget/header/actionButtons/signInOut/index.js


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var signInOut_SignInOut = function (_Component) {
	_inherits(SignInOut, _Component);

	function SignInOut() {
		_classCallCheck(this, SignInOut);

		return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	}

	SignInOut.prototype.render = function render() {
		return Object(preact_min["h"])(
			'button',
			{ onClick: this.props.onClick, 'class': style_default.a.actionBUtton },
			this.props.text
		);
	};

	return SignInOut;
}(preact_min["Component"]);


// EXTERNAL MODULE: ./components/CommonContainer/ButtonComponent/style.less
var ButtonComponent_style = __webpack_require__("tDRe");
var ButtonComponent_style_default = /*#__PURE__*/__webpack_require__.n(ButtonComponent_style);

// EXTERNAL MODULE: ./images/close.svg
var images_close = __webpack_require__("FUu+");
var close_default = /*#__PURE__*/__webpack_require__.n(images_close);

// CONCATENATED MODULE: ./components/CommonContainer/ButtonComponent/index.js





/* harmony default export */ var ButtonComponent = (function (props) {
	return Object(preact_min["h"])(
		"div",
		{
			"class": props.className ? props.className : ButtonComponent_style_default.a.defaultButton,
			onClick: props.onClick
		},
		Object(preact_min["h"])("img", { src: props.imageSrc })
	);
});
// EXTERNAL MODULE: ./images/menu.svg
var menu = __webpack_require__("MM80");
var menu_default = /*#__PURE__*/__webpack_require__.n(menu);

// EXTERNAL MODULE: ./components/chat-widget/header/actionButtons/style.less
var actionButtons_style = __webpack_require__("OCR7");
var actionButtons_style_default = /*#__PURE__*/__webpack_require__.n(actionButtons_style);

// CONCATENATED MODULE: ./components/chat-widget/header/actionButtons/index.js


function actionButtons__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function actionButtons__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function actionButtons__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var actionButtons_ActionButtons = function (_Component) {
	actionButtons__inherits(ActionButtons, _Component);

	function ActionButtons() {
		actionButtons__classCallCheck(this, ActionButtons);

		return actionButtons__possibleConstructorReturn(this, _Component.apply(this, arguments));
	}

	ActionButtons.prototype.render = function render() {
		return Object(preact_min["h"])(
			"div",
			{ "class": actionButtons_style_default.a.actionContainer },
			Object(preact_min["h"])(ButtonComponent, { className: actionButtons_style_default.a.actionBUtton, onClick: this.props.onMenuToggle, imageSrc: menu_default.a }),
			Object(preact_min["h"])(
				"div",
				{ "class": actionButtons_style_default.a.actionsList },
				this.props.isLogedIn ? Object(preact_min["h"])(signInOut_SignInOut, { text: "Log Out", onClick: this.props.onLogedOut }) : Object(preact_min["h"])(signInOut_SignInOut, { text: "Log In", onClick: this.props.onLogedIn })
			)
		);
	};

	return ActionButtons;
}(preact_min["Component"]);


// EXTERNAL MODULE: ./components/CommonContainer/ImageComponent/style.less
var ImageComponent_style = __webpack_require__("f/l0");
var ImageComponent_style_default = /*#__PURE__*/__webpack_require__.n(ImageComponent_style);

// EXTERNAL MODULE: ./images/avater.png
var avater = __webpack_require__("FdyF");
var avater_default = /*#__PURE__*/__webpack_require__.n(avater);

// CONCATENATED MODULE: ./components/CommonContainer/ImageComponent/index.js





/* harmony default export */ var ImageComponent = (function (props) {
	return Object(preact_min["h"])("img", {
		"class": props.className ? props.className : ImageComponent_style_default.a.imageDefaultStyle,
		src: props.imageSrc ? props.imageSrc : avater_default.a,
		alt: props.imageAlt ? props.imageAlt : ""
	});
});
// EXTERNAL MODULE: ./components/chat-widget/header/OperatorsList/style.less
var OperatorsList_style = __webpack_require__("YoAl");
var OperatorsList_style_default = /*#__PURE__*/__webpack_require__.n(OperatorsList_style);

// CONCATENATED MODULE: ./components/chat-widget/header/OperatorsList/index.js





/* harmony default export */ var OperatorsList = (function (props) {
	var list = props.operators.map(function (operator) {
		return Object(preact_min["h"])(
			"div",
			{ "class": OperatorsList_style_default.a.avaterImage },
			Object(preact_min["h"])(ImageComponent, {
				className: null,
				imageSrc: operator.avater,
				imageAlt: operator.name
			})
		);
	});

	var names = props.operators.map(function (operator) {
		return operator.name + ', ';
	});

	return Object(preact_min["h"])(
		"div",
		{ "class": OperatorsList_style_default.a.headerLeft },
		Object(preact_min["h"])(
			"div",
			{ "class": OperatorsList_style_default.a.operatorsList },
			list
		),
		Object(preact_min["h"])(
			"div",
			{ "class": OperatorsList_style_default.a.operatorsNameList },
			Object(preact_min["h"])(
				"p",
				{ "class": OperatorsList_style_default.a.chatText },
				props.chatText
			),
			Object(preact_min["h"])(
				"p",
				null,
				names
			)
		)
	);
});
// EXTERNAL MODULE: ./components/chat-widget/header/style.less
var header_style = __webpack_require__("++uR");
var header_style_default = /*#__PURE__*/__webpack_require__.n(header_style);

// CONCATENATED MODULE: ./components/chat-widget/header/index.js


function header__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function header__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function header__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var header_Header = function (_Component) {
	header__inherits(Header, _Component);

	function Header() {
		header__classCallCheck(this, Header);

		return header__possibleConstructorReturn(this, _Component.apply(this, arguments));
	}

	Header.prototype.render = function render() {
		var store = this.props.store;
		return Object(preact_min["h"])(
			"header",
			{ "class": header_style_default.a.header },
			Object(preact_min["h"])(OperatorsList, {
				operators: store.operators,
				chatText: store.chatText,
				onLogedOut: store.onLogedOut
			}),
			Object(preact_min["h"])(actionButtons_ActionButtons, {
				isLogedIn: store.isLogedIn,
				onLogedIn: store.onLogedIn,
				onLogedOut: store.onLogedOut,
				onMenuToggle: store.onMenuToggle
			}),
			Object(preact_min["h"])(ButtonComponent, {
				imageSrc: close_default.a,
				className: null,
				onClick: store.onCloseWidget
			})
		);
	};

	return Header;
}(preact_min["Component"]);


// EXTERNAL MODULE: ./components/chat-widget/footer/style.less
var footer_style = __webpack_require__("uME6");
var footer_style_default = /*#__PURE__*/__webpack_require__.n(footer_style);

// EXTERNAL MODULE: ./images/ninja.png
var ninja = __webpack_require__("o6di");
var ninja_default = /*#__PURE__*/__webpack_require__.n(ninja);

// CONCATENATED MODULE: ./components/chat-widget/footer/index.js






/* harmony default export */ var footer = (function (props) {
	var store = props.store;
	return Object(preact_min["h"])(
		"div",
		{ "class": footer_style_default.a.footer },
		Object(preact_min["h"])(ButtonComponent, { className: "", imageSrc: ninja_default.a, onClick: store.onBotStatus }),
		Object(preact_min["h"])(ButtonComponent, { className: "", imageSrc: ninja_default.a, onClick: store.onAttachment }),
		Object(preact_min["h"])(ButtonComponent, { className: "", imageSrc: ninja_default.a, onClick: store.onMenuExpend }),
		Object(preact_min["h"])(
			"form",
			{ onSubmit: store.onInputSubmit, action: "javascript:" },
			Object(preact_min["h"])("input", {
				value: props.value,
				onInput: store.onInputChange,
				placeholder: store.placeholder
			})
		)
	);
});
// EXTERNAL MODULE: ./components/chat-widget/container/MessageContainer/style.less
var MessageContainer_style = __webpack_require__("eurv");
var MessageContainer_style_default = /*#__PURE__*/__webpack_require__.n(MessageContainer_style);

// EXTERNAL MODULE: ./components/chat-widget/container/Avater/style.less
var Avater_style = __webpack_require__("cwTZ");
var Avater_style_default = /*#__PURE__*/__webpack_require__.n(Avater_style);

// CONCATENATED MODULE: ./components/chat-widget/container/Avater/index.js





var Avater__ref = Object(preact_min["h"])(ImageComponent, null);

/* harmony default export */ var Avater = (function (props) {
	return Object(preact_min["h"])(
		"div",
		{ "class": Avater_style_default.a.avatarWrapper },
		Avater__ref
	);
});
// EXTERNAL MODULE: ./components/chat-widget/container/DateTime/style.less
var DateTime_style = __webpack_require__("sXsf");
var DateTime_style_default = /*#__PURE__*/__webpack_require__.n(DateTime_style);

// CONCATENATED MODULE: ./components/chat-widget/container/DateTime/index.js




/* harmony default export */ var DateTime = (function (props) {
	return Object(preact_min["h"])(
		"div",
		{ "class": DateTime_style_default.a.dateTime },
		"5 OCT AT 5:25 PM"
	);
});
// EXTERNAL MODULE: ./components/chat-widget/container/Sender/style.less
var Sender_style = __webpack_require__("K2M+");
var Sender_style_default = /*#__PURE__*/__webpack_require__.n(Sender_style);

// CONCATENATED MODULE: ./components/chat-widget/container/Sender/index.js




/* harmony default export */ var Sender = (function (props) {
	return Object(preact_min["h"])(
		"p",
		{ "class": Sender_style_default.a.sender },
		props.avaterAlt
	);
});
// EXTERNAL MODULE: ./components/chat-widget/container/Message/style.less
var Message_style = __webpack_require__("JQcY");
var Message_style_default = /*#__PURE__*/__webpack_require__.n(Message_style);

// CONCATENATED MODULE: ./components/chat-widget/container/Message/index.js




/* harmony default export */ var Message = (function (props) {
	return Object(preact_min["h"])(
		"div",
		{ "class": Message_style_default.a.messageContent },
		props.avaterAlt
	);
});
// CONCATENATED MODULE: ./components/chat-widget/container/MessageContainer/index.js


function MessageContainer__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function MessageContainer__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function MessageContainer__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var MessageContainer_MessageContainer = function (_Component) {
	MessageContainer__inherits(MessageContainer, _Component);

	function MessageContainer() {
		var _temp, _this, _ret;

		MessageContainer__classCallCheck(this, MessageContainer);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = MessageContainer__possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.remove = function () {
			var _this$props = _this.props,
			    onRemove = _this$props.onRemove,
			    todo = _this$props.todo;

			onRemove(todo);
		}, _temp), MessageContainer__possibleConstructorReturn(_this, _ret);
	}

	MessageContainer.prototype.render = function render(_ref) {
		var todo = _ref.todo;

		console.log(this.props);
		return Object(preact_min["h"])(
			"li",
			null,
			Object(preact_min["h"])(
				"div",
				{ "class": MessageContainer_style_default.a.messageWrapper },
				Object(preact_min["h"])(Avater, { avaterUrl: todo.text, avaterAlt: todo.text }),
				Object(preact_min["h"])(
					"div",
					{ "class": MessageContainer_style_default.a.messageWrap },
					Object(preact_min["h"])(Sender, { avaterUrl: todo.text, avaterAlt: todo.text }),
					Object(preact_min["h"])(Message, { avaterUrl: todo.text, avaterAlt: todo.text })
				)
			),
			Object(preact_min["h"])(DateTime, { avaterUrl: todo.text, avaterAlt: todo.text })
		);
	};

	return MessageContainer;
}(preact_min["Component"]);


// EXTERNAL MODULE: ./components/chat-widget/container/style.less
var container_style = __webpack_require__("XhC6");
var container_style_default = /*#__PURE__*/__webpack_require__.n(container_style);

// CONCATENATED MODULE: ./components/chat-widget/container/index.js


function container__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function container__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function container__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var container_ChatContainer = function (_Component) {
	container__inherits(ChatContainer, _Component);

	function ChatContainer() {
		container__classCallCheck(this, ChatContainer);

		return container__possibleConstructorReturn(this, _Component.apply(this, arguments));
	}

	ChatContainer.prototype.render = function render() {
		var _this2 = this;

		var todos = this.props.store;
		return Object(preact_min["h"])(
			"div",
			{ "class": container_style_default.a.messageContainer },
			Object(preact_min["h"])(
				"ul",
				{ "class": container_style_default.a.messages },
				todos.map(function (todo) {
					return Object(preact_min["h"])(MessageContainer_MessageContainer, { key: todo.id, todo: todo, onRemove: _this2.props.removeToDo });
				})
			)
		);
	};

	return ChatContainer;
}(preact_min["Component"]);


// EXTERNAL MODULE: ./components/chat-widget/style.less
var chat_widget_style = __webpack_require__("+4aq");
var chat_widget_style_default = /*#__PURE__*/__webpack_require__.n(chat_widget_style);

// CONCATENATED MODULE: ./components/chat-widget/index.js


function chat_widget__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function chat_widget__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function chat_widget__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


// import { connect } from 'preact-redux';
// import reduce from '../reducers';
// import * as actions from '../actions';
// import TodoItem from './todo-item';



// import ComponentsManager from './components-manager';


var chat_widget_ChatWidget = function (_Component) {
	chat_widget__inherits(ChatWidget, _Component);

	function ChatWidget() {
		chat_widget__classCallCheck(this, ChatWidget);

		return chat_widget__possibleConstructorReturn(this, _Component.apply(this, arguments));
	}

	ChatWidget.prototype.render = function render() {
		var store = this.props.store;

		return Object(preact_min["h"])(
			"div",
			{ "class": chat_widget_style_default.a.chatWidget },
			Object(preact_min["h"])(header_Header, { store: store.header }),
			Object(preact_min["h"])(container_ChatContainer, { store: store.todos, removeToDo: store.removeTodo }),
			Object(preact_min["h"])(footer, {
				store: store.footer,
				value: store.text,
				onSubmit: store.addTodos,
				onInput: store.updateText
			})
		);
	};

	return ChatWidget;
}(preact_min["Component"]);

/* harmony default export */ var chat_widget = (chat_widget_ChatWidget);
// EXTERNAL MODULE: ./components/ChatDashboard/header/style.less
var ChatDashboard_header_style = __webpack_require__("Jamx");
var ChatDashboard_header_style_default = /*#__PURE__*/__webpack_require__.n(ChatDashboard_header_style);

// CONCATENATED MODULE: ./components/ChatDashboard/header/index.js


function ChatDashboard_header__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ChatDashboard_header__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function ChatDashboard_header__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var header__ref = Object(preact_min["h"])(
	'h1',
	null,
	'Preact App'
);

var ChatDashboard_header_Header = function (_Component) {
	ChatDashboard_header__inherits(Header, _Component);

	function Header() {
		ChatDashboard_header__classCallCheck(this, Header);

		return ChatDashboard_header__possibleConstructorReturn(this, _Component.apply(this, arguments));
	}

	Header.prototype.render = function render() {
		console.log(ChatDashboard_header_style_default.a);
		return Object(preact_min["h"])(
			'header',
			{ 'class': ChatDashboard_header_style_default.a.header },
			header__ref
		);
	};

	return Header;
}(preact_min["Component"]);


// EXTERNAL MODULE: ./components/ChatDashboard/footer/style.less
var ChatDashboard_footer_style = __webpack_require__("Ca0b");
var ChatDashboard_footer_style_default = /*#__PURE__*/__webpack_require__.n(ChatDashboard_footer_style);

// CONCATENATED MODULE: ./components/ChatDashboard/footer/index.js


function footer__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function footer__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function footer__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var footer_Footer = function (_Component) {
	footer__inherits(Footer, _Component);

	function Footer() {
		footer__classCallCheck(this, Footer);

		return footer__possibleConstructorReturn(this, _Component.apply(this, arguments));
	}

	Footer.prototype.render = function render() {
		return Object(preact_min["h"])(
			"div",
			{ "class": ChatDashboard_footer_style_default.a.footer },
			Object(preact_min["h"])(
				"form",
				{ onSubmit: this.props.onSubmit, action: "javascript:" },
				Object(preact_min["h"])("input", {
					value: this.props.value,
					onInput: this.props.onInput,
					placeholder: "New Message...."
				})
			)
		);
	};

	return Footer;
}(preact_min["Component"]);


// CONCATENATED MODULE: ./components/ChatDashboard/message/index.js


function message__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function message__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function message__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var message_TodoItem = function (_Component) {
	message__inherits(TodoItem, _Component);

	function TodoItem() {
		var _temp, _this, _ret;

		message__classCallCheck(this, TodoItem);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = message__possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.remove = function () {
			var _this$props = _this.props,
			    onRemove = _this$props.onRemove,
			    todo = _this$props.todo;

			onRemove(todo);
		}, _temp), message__possibleConstructorReturn(_this, _ret);
	}

	// shouldComponentUpdate({ todo, onRemove }) {
	// 	return todo !== this.props.todo || onRemove !== this.props.onRemove;
	// }

	TodoItem.prototype.render = function render(_ref) {
		var todo = _ref.todo;

		return Object(preact_min["h"])(
			'li',
			null,
			Object(preact_min["h"])(
				'button',
				{ onClick: this.remove },
				'\xD7'
			),
			' ' + todo.text
		);
	};

	return TodoItem;
}(preact_min["Component"]);


// EXTERNAL MODULE: ./components/ChatDashboard/container/style.less
var ChatDashboard_container_style = __webpack_require__("BC8T");
var ChatDashboard_container_style_default = /*#__PURE__*/__webpack_require__.n(ChatDashboard_container_style);

// CONCATENATED MODULE: ./components/ChatDashboard/container/index.js


function ChatDashboard_container__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ChatDashboard_container__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function ChatDashboard_container__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var ChatDashboard_container_ChatContainer = function (_Component) {
	ChatDashboard_container__inherits(ChatContainer, _Component);

	function ChatContainer() {
		ChatDashboard_container__classCallCheck(this, ChatContainer);

		return ChatDashboard_container__possibleConstructorReturn(this, _Component.apply(this, arguments));
	}

	ChatContainer.prototype.render = function render() {
		var _this2 = this;

		var todos = this.props.store;
		return Object(preact_min["h"])(
			"div",
			{ "class": ChatDashboard_container_style_default.a.container },
			Object(preact_min["h"])(
				"ul",
				null,
				todos.map(function (todo) {
					return Object(preact_min["h"])(message_TodoItem, { key: todo.id, todo: todo, onRemove: _this2.props.removeToDo });
				})
			)
		);
	};

	return ChatContainer;
}(preact_min["Component"]);


// EXTERNAL MODULE: ./components/ChatDashboard/style.less
var ChatDashboard_style = __webpack_require__("rEZR");
var ChatDashboard_style_default = /*#__PURE__*/__webpack_require__.n(ChatDashboard_style);

// CONCATENATED MODULE: ./components/ChatDashboard/index.js


function ChatDashboard__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ChatDashboard__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function ChatDashboard__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


// import { connect } from 'preact-redux';
// import reduce from '../reducers';
// import * as actions from '../actions';
// import TodoItem from './todo-item';



// import ComponentsManager from './components-manager';


var _ref3 = Object(preact_min["h"])(ChatDashboard_header_Header, null);

var ChatDashboard_ChatDashboard = function (_Component) {
	ChatDashboard__inherits(ChatDashboard, _Component);

	function ChatDashboard() {
		ChatDashboard__classCallCheck(this, ChatDashboard);

		return ChatDashboard__possibleConstructorReturn(this, _Component.apply(this, arguments));
	}

	ChatDashboard.prototype.render = function render(_ref, _ref2) {
		var todos = _ref.todos;
		var text = _ref2.text;

		var store = this.props.store;

		return Object(preact_min["h"])(
			'div',
			{ 'class': ChatDashboard_style_default.a.chatDashboard },
			_ref3,
			Object(preact_min["h"])(ChatDashboard_container_ChatContainer, {
				store: store.todos,
				removeToDo: store.removeTodo
			}),
			Object(preact_min["h"])(footer_Footer, {
				value: store.text,
				onSubmit: store.addTodos,
				onInput: store.updateText
			})
		);
	};

	return ChatDashboard;
}(preact_min["Component"]);

/* harmony default export */ var components_ChatDashboard = (ChatDashboard_ChatDashboard);
// EXTERNAL MODULE: ./components/chat-button/buttonICON/style.less
var buttonICON_style = __webpack_require__("z2/9");
var buttonICON_style_default = /*#__PURE__*/__webpack_require__.n(buttonICON_style);

// CONCATENATED MODULE: ./components/chat-button/buttonICON/index.js


function buttonICON__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function buttonICON__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function buttonICON__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


// import ButtonICON from "./buttonICON";
// import ButtonImage from "./buttonImage";


var buttonICON_ButtonICON = function (_Component) {
	buttonICON__inherits(ButtonICON, _Component);

	function ButtonICON() {
		buttonICON__classCallCheck(this, ButtonICON);

		return buttonICON__possibleConstructorReturn(this, _Component.apply(this, arguments));
	}

	ButtonICON.prototype.render = function render() {
		console.log(this.props);
		var store = this.props;
		return Object(preact_min["h"])(
			"button",
			{
				"class": buttonICON_style_default.a.chatButton,
				buttonType: store.buttonType,
				onHover: store.onHover,
				onClick: store.onClick
			},
			"Chat Button"
		);
	};

	return ButtonICON;
}(preact_min["Component"]);

/* harmony default export */ var buttonICON = (buttonICON_ButtonICON);
// EXTERNAL MODULE: ./components/chat-button/style.less
var chat_button_style = __webpack_require__("cSGK");
var chat_button_style_default = /*#__PURE__*/__webpack_require__.n(chat_button_style);

// CONCATENATED MODULE: ./components/chat-button/index.js


function chat_button__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function chat_button__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function chat_button__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



// import ButtonImage from "./buttonImage";


var chat_button_ChatButton = function (_Component) {
	chat_button__inherits(ChatButton, _Component);

	function ChatButton() {
		chat_button__classCallCheck(this, ChatButton);

		return chat_button__possibleConstructorReturn(this, _Component.apply(this, arguments));
	}

	ChatButton.prototype.render = function render() {
		console.log(this.props);
		var store = this.props.store;
		return Object(preact_min["h"])(
			"div",
			{ "class": chat_button_style_default.a.chatButton },
			Object(preact_min["h"])(buttonICON, {
				buttonType: store.buttonType,
				onHover: store.onChatButtonHover,
				onClick: store.onChatButtonClick
			})
		);
	};

	return ChatButton;
}(preact_min["Component"]);

/* harmony default export */ var chat_button = (chat_button_ChatButton);
// EXTERNAL MODULE: ./components/ChatIntroContainer/GeneralIntro/style.less
var GeneralIntro_style = __webpack_require__("lSkk");
var GeneralIntro_style_default = /*#__PURE__*/__webpack_require__.n(GeneralIntro_style);

// CONCATENATED MODULE: ./components/ChatIntroContainer/GeneralIntro/index.js


function GeneralIntro__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function GeneralIntro__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function GeneralIntro__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


// import ButtonICON from "./buttonICON";
// import ButtonImage from "./buttonImage";


var GeneralIntro__ref = Object(preact_min["h"])(
	"h2",
	null,
	"Chat general Intro"
);

var GeneralIntro_GeneralIntro = function (_Component) {
	GeneralIntro__inherits(GeneralIntro, _Component);

	function GeneralIntro() {
		GeneralIntro__classCallCheck(this, GeneralIntro);

		return GeneralIntro__possibleConstructorReturn(this, _Component.apply(this, arguments));
	}

	GeneralIntro.prototype.render = function render() {
		console.log(this.props);
		var store = this.props;
		return Object(preact_min["h"])(
			"div",
			{ "class": GeneralIntro_style_default.a.generalIntro },
			GeneralIntro__ref,
			Object(preact_min["h"])(
				"button",
				{
					"class": GeneralIntro_style_default.a.chatIntroButton,
					onClick: store.onClick
				},
				"General Chat Button"
			)
		);
	};

	return GeneralIntro;
}(preact_min["Component"]);

/* harmony default export */ var ChatIntroContainer_GeneralIntro = (GeneralIntro_GeneralIntro);
// EXTERNAL MODULE: ./components/ChatIntroContainer/style.less
var ChatIntroContainer_style = __webpack_require__("ljlw");
var ChatIntroContainer_style_default = /*#__PURE__*/__webpack_require__.n(ChatIntroContainer_style);

// CONCATENATED MODULE: ./components/ChatIntroContainer/index.js


function ChatIntroContainer__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ChatIntroContainer__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function ChatIntroContainer__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



// import ButtonImage from "./buttonImage";


var ChatIntroContainer_ChatIntroContainer = function (_Component) {
	ChatIntroContainer__inherits(ChatIntroContainer, _Component);

	function ChatIntroContainer() {
		ChatIntroContainer__classCallCheck(this, ChatIntroContainer);

		return ChatIntroContainer__possibleConstructorReturn(this, _Component.apply(this, arguments));
	}

	ChatIntroContainer.prototype.render = function render() {
		console.log(this.props);
		var store = this.props.store;
		return Object(preact_min["h"])(
			"div",
			{ "class": ChatIntroContainer_style_default.a.ChatIntroContainer },
			Object(preact_min["h"])(ChatIntroContainer_GeneralIntro, {
				type: store.chatIntroType,
				onClick: store.onChatButtonClick
			})
		);
	};

	return ChatIntroContainer;
}(preact_min["Component"]);

/* harmony default export */ var components_ChatIntroContainer = (ChatIntroContainer_ChatIntroContainer);
// EXTERNAL MODULE: ./components/components-manager/style.less
var components_manager_style = __webpack_require__("cGJX");
var components_manager_style_default = /*#__PURE__*/__webpack_require__.n(components_manager_style);

// CONCATENATED MODULE: ./components/components-manager/index.js


function components_manager__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function components_manager__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function components_manager__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


// import { connect } from "preact-redux";
// import reduce from "../reducers";
// import * as actions from "../actions";
// import TodoItem from "./todo-item";
// import Header from "../chat-widget/header";
// import Footer from "../chat-widget/footer";
// import ChatContainer from "../chat-widget/container";
//ChatWidget

//ChatDashboard

// Button

//ChatIntroContainer



var components_manager_ComponentsManager = function (_Component) {
	components_manager__inherits(ComponentsManager, _Component);

	function ComponentsManager() {
		components_manager__classCallCheck(this, ComponentsManager);

		return components_manager__possibleConstructorReturn(this, _Component.apply(this, arguments));
	}

	ComponentsManager.prototype.render = function render() {
		var store = this.props.store;
		return Object(preact_min["h"])(
			"div",
			{ "class": components_manager_style_default.a.chatWraper },
			Object(preact_min["h"])(chat_widget, { store: store.chatWidget })
		);
	};

	return ComponentsManager;
}(preact_min["Component"]);

/* harmony default export */ var components_manager = (components_manager_ComponentsManager);
// EXTERNAL MODULE: ./components/style.less
var components_style = __webpack_require__("LfPP");
var components_style_default = /*#__PURE__*/__webpack_require__.n(components_style);

// CONCATENATED MODULE: ./components/app.js
var _dec, _class;



function app__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function app__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function app__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






// Firebase
// import {saveMessage} from '../core/firebase/firebaseEvents';

// import TodoItem from "./todo-item";
// import Header from "./chat-widget/header";
// import Footer from "./chat-widget/footer";
// import ChatContainer from "./chat-widget/container";



//const app = new firebaseEvents();

var app_AppComponent = (_dec = Object(preact_redux["connect"])(reducers, actions_namespaceObject), _dec(_class = function (_Component) {
	app__inherits(AppComponent, _Component);

	function AppComponent() {
		var _temp, _this, _ret;

		app__classCallCheck(this, AppComponent);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = app__possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.addTodos = function () {
			console.log("add...", _this.state);
			// console.log('event...', app);
			// saveMessage(this.state.text)
			_this.props.addTodo(_this.state.text);
			_this.setState({ text: "" });
		}, _this.removeTodo = function (todo) {
			_this.props.removeTodo(todo);
		}, _this.onLogedIn = function () {
			console.log("onLogedIn");
			app.signIn();
		}, _this.onLogedOut = function () {
			console.log("onLogedOut");
			app.signOut;
		}, _this.onMenuToggle = function () {
			console.log("onCloseWidget111");
		}, _this.onCloseWidget = function () {
			console.log("onCloseWidget");
		}, _this.updateText = function (e) {
			console.log("updateing...", e);

			_this.setState({ text: e.target.value });
		}, _this.onChatButtonClick = function () {
			console.log("clicked Button");
			// this.props.addTodo(this.state.text);
			// this.setState({ text: "" });
			console.log();
		}, _this.onChatButtonHover = function () {
			console.log("Hover Button");
			// this.props.addTodo(this.state.text);
			// this.setState({ text: "" });
		}, _temp), app__possibleConstructorReturn(_this, _ret);
	}

	//onLogedIn


	//onLogedOut

	// onMenuToggle

	//onCloseWidget


	// Button Click

	// Button Hover


	AppComponent.prototype.render = function render(_ref, _ref2) {
		var todos = _ref.todos;
		var text = _ref2.text;

		return Object(preact_min["h"])(
			"div",
			{ "class": components_style_default.a.chatContainer },
			Object(preact_min["h"])(components_manager, {
				store: {
					chatWidget: {
						header: {
							isLogedIn: false,
							onLogedIn: this.onLogedIn,
							onLogedOut: this.onLogedOut,
							operators: [{ name: "Shapon Pal", avater: "" }, { name: "Shapon Pal2", avater: "" }, { name: "Shapon Pal3", avater: "" }, { name: "Shapon Pal4", avater: "" }],
							chatText: "Chat With",
							onMenuToggle: this.onMenuToggle,
							onCloseWidget: this.onCloseWidget

						},
						todos: todos,
						removeTodo: this.removeTodo,
						text: text,
						addTodos: this.addTodos,
						updateText: this.updateText,
						footer: {
							placeholder: "Type here....",
							onBotStatus: this.onMenuToggle,
							onMenuExpend: this.onCloseWidget,
							onAttachment: this.onCloseWidget,
							onInputSubmit: this.addTodos,
							onInputChange: this.updateText
						}
					},
					chatDashboard: {
						todos: todos,
						removeTodo: this.removeTodo,
						text: text,
						addTodos: this.addTodos,
						updateText: this.updateText
					},
					chatButton: {
						onChatButtonClick: this.onChatButtonClick,
						onChatButtonHover: this.onChatButtonHover,
						buttonType: "chatICON"
					},
					chatIntro: {
						onChatButtonClick: this.onChatButtonClick,
						chatIntroType: "general"
					}
				}
			})
		);
	};

	return AppComponent;
}(preact_min["Component"])) || _class);


/* harmony default export */ var components_app = (app_AppComponent);
// EXTERNAL MODULE: ./style/index.less
var style_0 = __webpack_require__("EbM4");
var style_default_0 = /*#__PURE__*/__webpack_require__.n(style_0);

// CONCATENATED MODULE: ./index.js





// import firebase from './firebase';
//import events from './core/firebaseEvents';

// console.log(firebase);

var index__ref = Object(preact_min["h"])(
	"div",
	{ "class": "chatWidgetEntryPoint" },
	Object(preact_min["h"])(
		preact_redux["Provider"],
		{ store: store_store },
		Object(preact_min["h"])(components_app, null)
	)
);

/* harmony default export */ var index = __webpack_exports__["default"] = (function () {
	return index__ref;
});

/***/ }),

/***/ "K2M+":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"sender":"sender__1xrwH"};

/***/ }),

/***/ "KM04":
/***/ (function(module, exports, __webpack_require__) {

!function () {
  "use strict";
  function e(e, t) {
    var n,
        o,
        r,
        i,
        l = W;for (i = arguments.length; i-- > 2;) {
      P.push(arguments[i]);
    }t && null != t.children && (P.length || P.push(t.children), delete t.children);while (P.length) {
      if ((o = P.pop()) && void 0 !== o.pop) for (i = o.length; i--;) {
        P.push(o[i]);
      } else "boolean" == typeof o && (o = null), (r = "function" != typeof e) && (null == o ? o = "" : "number" == typeof o ? o += "" : "string" != typeof o && (r = !1)), r && n ? l[l.length - 1] += o : l === W ? l = [o] : l.push(o), n = r;
    }var a = new T();return a.nodeName = e, a.children = l, a.attributes = null == t ? void 0 : t, a.key = null == t ? void 0 : t.key, void 0 !== M.vnode && M.vnode(a), a;
  }function t(e, t) {
    for (var n in t) {
      e[n] = t[n];
    }return e;
  }function n(e, t) {
    e && ("function" == typeof e ? e(t) : e.current = t);
  }function o(n, o) {
    return e(n.nodeName, t(t({}, n.attributes), o), arguments.length > 2 ? [].slice.call(arguments, 2) : n.children);
  }function r(e) {
    !e.__d && (e.__d = !0) && 1 == V.push(e) && (M.debounceRendering || D)(i);
  }function i() {
    var e;while (e = V.pop()) {
      e.__d && x(e);
    }
  }function l(e, t, n) {
    return "string" == typeof t || "number" == typeof t ? void 0 !== e.splitText : "string" == typeof t.nodeName ? !e._componentConstructor && a(e, t.nodeName) : n || e._componentConstructor === t.nodeName;
  }function a(e, t) {
    return e.__n === t || e.nodeName.toLowerCase() === t.toLowerCase();
  }function u(e) {
    var n = t({}, e.attributes);n.children = e.children;var o = e.nodeName.defaultProps;if (void 0 !== o) for (var r in o) {
      void 0 === n[r] && (n[r] = o[r]);
    }return n;
  }function c(e, t) {
    var n = t ? document.createElementNS("http://www.w3.org/2000/svg", e) : document.createElement(e);return n.__n = e, n;
  }function p(e) {
    var t = e.parentNode;t && t.removeChild(e);
  }function s(e, t, o, r, i) {
    if ("className" === t && (t = "class"), "key" === t) ;else if ("ref" === t) n(o, null), n(r, e);else if ("class" !== t || i) {
      if ("style" === t) {
        if (r && "string" != typeof r && "string" != typeof o || (e.style.cssText = r || ""), r && "object" == typeof r) {
          if ("string" != typeof o) for (var l in o) {
            l in r || (e.style[l] = "");
          }for (var l in r) {
            e.style[l] = "number" == typeof r[l] && !1 === E.test(l) ? r[l] + "px" : r[l];
          }
        }
      } else if ("dangerouslySetInnerHTML" === t) r && (e.innerHTML = r.__html || "");else if ("o" == t[0] && "n" == t[1]) {
        var a = t !== (t = t.replace(/Capture$/, ""));t = t.toLowerCase().substring(2), r ? o || e.addEventListener(t, _, a) : e.removeEventListener(t, _, a), (e.__l || (e.__l = {}))[t] = r;
      } else if ("list" !== t && "type" !== t && !i && t in e) {
        try {
          e[t] = null == r ? "" : r;
        } catch (e) {}null != r && !1 !== r || "spellcheck" == t || e.removeAttribute(t);
      } else {
        var u = i && t !== (t = t.replace(/^xlink:?/, ""));null == r || !1 === r ? u ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.removeAttribute(t) : "function" != typeof r && (u ? e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), r) : e.setAttribute(t, r));
      }
    } else e.className = r || "";
  }function _(e) {
    return this.__l[e.type](M.event && M.event(e) || e);
  }function f() {
    var e;while (e = A.shift()) {
      M.afterMount && M.afterMount(e), e.componentDidMount && e.componentDidMount();
    }
  }function d(e, t, n, o, r, i) {
    H++ || (R = null != r && void 0 !== r.ownerSVGElement, B = null != e && !("__preactattr_" in e));var l = h(e, t, n, o, i);return r && l.parentNode !== r && r.appendChild(l), --H || (B = !1, i || f()), l;
  }function h(e, t, n, o, r) {
    var i = e,
        l = R;if (null != t && "boolean" != typeof t || (t = ""), "string" == typeof t || "number" == typeof t) return e && void 0 !== e.splitText && e.parentNode && (!e._component || r) ? e.nodeValue != t && (e.nodeValue = t) : (i = document.createTextNode(t), e && (e.parentNode && e.parentNode.replaceChild(i, e), v(e, !0))), i.__preactattr_ = !0, i;var u = t.nodeName;if ("function" == typeof u) return N(e, t, n, o);if (R = "svg" === u || "foreignObject" !== u && R, u += "", (!e || !a(e, u)) && (i = c(u, R), e)) {
      while (e.firstChild) {
        i.appendChild(e.firstChild);
      }e.parentNode && e.parentNode.replaceChild(i, e), v(e, !0);
    }var p = i.firstChild,
        s = i.__preactattr_,
        _ = t.children;if (null == s) {
      s = i.__preactattr_ = {};for (var f = i.attributes, d = f.length; d--;) {
        s[f[d].name] = f[d].value;
      }
    }return !B && _ && 1 === _.length && "string" == typeof _[0] && null != p && void 0 !== p.splitText && null == p.nextSibling ? p.nodeValue != _[0] && (p.nodeValue = _[0]) : (_ && _.length || null != p) && m(i, _, n, o, B || null != s.dangerouslySetInnerHTML), y(i, t.attributes, s), R = l, i;
  }function m(e, t, n, o, r) {
    var i,
        a,
        u,
        c,
        s,
        _ = e.childNodes,
        f = [],
        d = {},
        m = 0,
        b = 0,
        y = _.length,
        g = 0,
        w = t ? t.length : 0;if (0 !== y) for (var C = 0; C < y; C++) {
      var x = _[C],
          N = x.__preactattr_,
          k = w && N ? x._component ? x._component.__k : N.key : null;null != k ? (m++, d[k] = x) : (N || (void 0 !== x.splitText ? !r || x.nodeValue.trim() : r)) && (f[g++] = x);
    }if (0 !== w) for (var C = 0; C < w; C++) {
      c = t[C], s = null;var k = c.key;if (null != k) m && void 0 !== d[k] && (s = d[k], d[k] = void 0, m--);else if (b < g) for (i = b; i < g; i++) {
        if (void 0 !== f[i] && l(a = f[i], c, r)) {
          s = a, f[i] = void 0, i === g - 1 && g--, i === b && b++;break;
        }
      }s = h(s, c, n, o), u = _[C], s && s !== e && s !== u && (null == u ? e.appendChild(s) : s === u.nextSibling ? p(u) : e.insertBefore(s, u));
    }if (m) for (var C in d) {
      void 0 !== d[C] && v(d[C], !1);
    }while (b <= g) {
      void 0 !== (s = f[g--]) && v(s, !1);
    }
  }function v(e, t) {
    var o = e._component;o ? k(o) : (null != e.__preactattr_ && n(e.__preactattr_.ref, null), !1 !== t && null != e.__preactattr_ || p(e), b(e));
  }function b(e) {
    e = e.lastChild;while (e) {
      var t = e.previousSibling;v(e, !0), e = t;
    }
  }function y(e, t, n) {
    var o;for (o in n) {
      t && null != t[o] || null == n[o] || s(e, o, n[o], n[o] = void 0, R);
    }for (o in t) {
      "children" === o || "innerHTML" === o || o in n && t[o] === ("value" === o || "checked" === o ? e[o] : n[o]) || s(e, o, n[o], n[o] = t[o], R);
    }
  }function g(e, t, n) {
    var o,
        r = F.length;e.prototype && e.prototype.render ? (o = new e(t, n), U.call(o, t, n)) : (o = new U(t, n), o.constructor = e, o.render = w);while (r--) {
      if (F[r].constructor === e) return o.__b = F[r].__b, F.splice(r, 1), o;
    }return o;
  }function w(e, t, n) {
    return this.constructor(e, n);
  }function C(e, t, o, i, l) {
    e.__x || (e.__x = !0, e.__r = t.ref, e.__k = t.key, delete t.ref, delete t.key, void 0 === e.constructor.getDerivedStateFromProps && (!e.base || l ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, i)), i && i !== e.context && (e.__c || (e.__c = e.context), e.context = i), e.__p || (e.__p = e.props), e.props = t, e.__x = !1, 0 !== o && (1 !== o && !1 === M.syncComponentUpdates && e.base ? r(e) : x(e, 1, l)), n(e.__r, e));
  }function x(e, n, o, r) {
    if (!e.__x) {
      var i,
          l,
          a,
          c = e.props,
          p = e.state,
          s = e.context,
          _ = e.__p || c,
          h = e.__s || p,
          m = e.__c || s,
          b = e.base,
          y = e.__b,
          w = b || y,
          N = e._component,
          U = !1,
          S = m;if (e.constructor.getDerivedStateFromProps && (p = t(t({}, p), e.constructor.getDerivedStateFromProps(c, p)), e.state = p), b && (e.props = _, e.state = h, e.context = m, 2 !== n && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(c, p, s) ? U = !0 : e.componentWillUpdate && e.componentWillUpdate(c, p, s), e.props = c, e.state = p, e.context = s), e.__p = e.__s = e.__c = e.__b = null, e.__d = !1, !U) {
        i = e.render(c, p, s), e.getChildContext && (s = t(t({}, s), e.getChildContext())), b && e.getSnapshotBeforeUpdate && (S = e.getSnapshotBeforeUpdate(_, h));var L,
            T,
            P = i && i.nodeName;if ("function" == typeof P) {
          var W = u(i);l = N, l && l.constructor === P && W.key == l.__k ? C(l, W, 1, s, !1) : (L = l, e._component = l = g(P, W, s), l.__b = l.__b || y, l.__u = e, C(l, W, 0, s, !1), x(l, 1, o, !0)), T = l.base;
        } else a = w, L = N, L && (a = e._component = null), (w || 1 === n) && (a && (a._component = null), T = d(a, i, s, o || !b, w && w.parentNode, !0));if (w && T !== w && l !== N) {
          var D = w.parentNode;D && T !== D && (D.replaceChild(T, w), L || (w._component = null, v(w, !1)));
        }if (L && k(L), e.base = T, T && !r) {
          var E = e,
              V = e;while (V = V.__u) {
            (E = V).base = T;
          }T._component = E, T._componentConstructor = E.constructor;
        }
      }!b || o ? A.push(e) : U || (e.componentDidUpdate && e.componentDidUpdate(_, h, S), M.afterUpdate && M.afterUpdate(e));while (e.__h.length) {
        e.__h.pop().call(e);
      }H || r || f();
    }
  }function N(e, t, n, o) {
    var r = e && e._component,
        i = r,
        l = e,
        a = r && e._componentConstructor === t.nodeName,
        c = a,
        p = u(t);while (r && !c && (r = r.__u)) {
      c = r.constructor === t.nodeName;
    }return r && c && (!o || r._component) ? (C(r, p, 3, n, o), e = r.base) : (i && !a && (k(i), e = l = null), r = g(t.nodeName, p, n), e && !r.__b && (r.__b = e, l = null), C(r, p, 1, n, o), e = r.base, l && e !== l && (l._component = null, v(l, !1))), e;
  }function k(e) {
    M.beforeUnmount && M.beforeUnmount(e);var t = e.base;e.__x = !0, e.componentWillUnmount && e.componentWillUnmount(), e.base = null;var o = e._component;o ? k(o) : t && (null != t.__preactattr_ && n(t.__preactattr_.ref, null), e.__b = t, p(t), F.push(e), b(t)), n(e.__r, null);
  }function U(e, t) {
    this.__d = !0, this.context = t, this.props = e, this.state = this.state || {}, this.__h = [];
  }function S(e, t, n) {
    return d(n, e, {}, !1, t, !1);
  }function L() {
    return {};
  }var T = function T() {},
      M = {},
      P = [],
      W = [],
      D = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout,
      E = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
      V = [],
      A = [],
      H = 0,
      R = !1,
      B = !1,
      F = [];t(U.prototype, { setState: function setState(e, n) {
      this.__s || (this.__s = this.state), this.state = t(t({}, this.state), "function" == typeof e ? e(this.state, this.props) : e), n && this.__h.push(n), r(this);
    }, forceUpdate: function forceUpdate(e) {
      e && this.__h.push(e), x(this, 2);
    }, render: function render() {} });var j = { h: e, createElement: e, cloneElement: o, createRef: L, Component: U, render: S, rerender: i, options: M }; true ? module.exports = j : self.preact = j;
}();
//# sourceMappingURL=preact.min.js.map

/***/ }),

/***/ "LfPP":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"chatContainer":"chatContainer__2ygFr"};

/***/ }),

/***/ "LkZ7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ponyfill_js__ = __webpack_require__("JZ8d");
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {
  root = Function('return this')();
}

var result = Object(__WEBPACK_IMPORTED_MODULE_0__ponyfill_js__["a" /* default */])(root);
/* harmony default export */ __webpack_exports__["a"] = (result);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("vwK3")(module)))

/***/ }),

/***/ "MM80":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dd16ff5bf79d00572ed8c8d3950638df.svg";

/***/ }),

/***/ "OCR7":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"actionBUtton":"actionBUtton__1N2Cl","actionContainer":"actionContainer__16_y_","actionsList":"actionsList__j9vPl"};

/***/ }),

/***/ "XhC6":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"messageContainer":"messageContainer__8zIHE","messages":"messages__30XNP"};

/***/ }),

/***/ "YoAl":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"headerLeft":"headerLeft__-aWqU","operatorsList":"operatorsList__1VKq1","avaterImage":"avaterImage__1iNQ0","operatorsNameList":"operatorsNameList__379TM","chatText":"chatText__2PW3J"};

/***/ }),

/***/ "cGJX":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"chatWraper":"chatWraper__djMWs"};

/***/ }),

/***/ "cSGK":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"chatButton":"chatButton__H52ki"};

/***/ }),

/***/ "cwTZ":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"avatarWrapper":"avatarWrapper__3wccu"};

/***/ }),

/***/ "eurv":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"messageWrapper":"messageWrapper__35plZ","messageWrap":"messageWrap__CeCcF"};

/***/ }),

/***/ "f/l0":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"imageDefaultStyle":"imageDefaultStyle__2TxvF"};

/***/ }),

/***/ "fpuT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ../node_modules/lodash-es/_freeGlobal.js
/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ var _freeGlobal = (freeGlobal);
// CONCATENATED MODULE: ../node_modules/lodash-es/_root.js


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();

/* harmony default export */ var _root = (root);
// CONCATENATED MODULE: ../node_modules/lodash-es/_Symbol.js


/** Built-in value references. */
var Symbol = _root.Symbol;

/* harmony default export */ var _Symbol = (Symbol);
// CONCATENATED MODULE: ../node_modules/lodash-es/_getRawTag.js


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _getRawTag_hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = _getRawTag_hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ var _getRawTag = (getRawTag);
// CONCATENATED MODULE: ../node_modules/lodash-es/_objectToString.js
/** Used for built-in method references. */
var _objectToString_objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var _objectToString_nativeObjectToString = _objectToString_objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return _objectToString_nativeObjectToString.call(value);
}

/* harmony default export */ var _objectToString = (objectToString);
// CONCATENATED MODULE: ../node_modules/lodash-es/_baseGetTag.js




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var _baseGetTag_symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return _baseGetTag_symToStringTag && _baseGetTag_symToStringTag in Object(value) ? _getRawTag(value) : _objectToString(value);
}

/* harmony default export */ var _baseGetTag = (baseGetTag);
// CONCATENATED MODULE: ../node_modules/lodash-es/_overArg.js
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

/* harmony default export */ var _overArg = (overArg);
// CONCATENATED MODULE: ../node_modules/lodash-es/_getPrototype.js


/** Built-in value references. */
var getPrototype = _overArg(Object.getPrototypeOf, Object);

/* harmony default export */ var _getPrototype = (getPrototype);
// CONCATENATED MODULE: ../node_modules/lodash-es/isObjectLike.js
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* harmony default export */ var lodash_es_isObjectLike = (isObjectLike);
// CONCATENATED MODULE: ../node_modules/lodash-es/isPlainObject.js




/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    isPlainObject_objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var isPlainObject_hasOwnProperty = isPlainObject_objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!lodash_es_isObjectLike(value) || _baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = _getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = isPlainObject_hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}

/* harmony default export */ var lodash_es_isPlainObject = (isPlainObject);
// EXTERNAL MODULE: ../node_modules/symbol-observable/es/index.js
var es = __webpack_require__("LkZ7");

// CONCATENATED MODULE: ../node_modules/redux/es/createStore.js



/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = {
  INIT: '@@redux/INIT'

  /**
   * Creates a Redux store that holds the state tree.
   * The only way to change the data in the store is to call `dispatch()` on it.
   *
   * There should only be a single store in your app. To specify how different
   * parts of the state tree respond to actions, you may combine several reducers
   * into a single reducer function by using `combineReducers`.
   *
   * @param {Function} reducer A function that returns the next state tree, given
   * the current state tree and the action to handle.
   *
   * @param {any} [preloadedState] The initial state. You may optionally specify it
   * to hydrate the state from the server in universal apps, or to restore a
   * previously serialized user session.
   * If you use `combineReducers` to produce the root reducer function, this must be
   * an object with the same shape as `combineReducers` keys.
   *
   * @param {Function} [enhancer] The store enhancer. You may optionally specify it
   * to enhance the store with third-party capabilities such as middleware,
   * time travel, persistence, etc. The only store enhancer that ships with Redux
   * is `applyMiddleware()`.
   *
   * @returns {Store} A Redux store that lets you read the state, dispatch actions
   * and subscribe to changes.
   */
};function createStore_createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore_createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */
  function getState() {
    return currentState;
  }

  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */
  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected listener to be a function.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  function dispatch(action) {
    if (!lodash_es_isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.INIT });
  }

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */
  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object') {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    }, _ref[es["a" /* default */]] = function () {
      return this;
    }, _ref;
  }

  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({ type: ActionTypes.INIT });

  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[es["a" /* default */]] = observable, _ref2;
}
// CONCATENATED MODULE: ../node_modules/redux/es/utils/warning.js
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning_warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}
// CONCATENATED MODULE: ../node_modules/redux/es/combineReducers.js




function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state. ' + 'If you want this reducer to hold no value, you can return null instead of undefined.';
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!lodash_es_isPlainObject(inputState)) {
    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });

  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });

  if (unexpectedKeys.length > 0) {
    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, { type: ActionTypes.INIT });

    if (typeof initialState === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined. If you don\'t want to set a value for this reducer, ' + 'you can use null instead of undefined.');
    }

    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
    if (typeof reducer(undefined, { type: type }) === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined, but can be null.');
    }
  });
}

/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (false) {
      if (typeof reducers[key] === 'undefined') {
        warning('No reducer provided for key "' + key + '"');
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);

  var unexpectedKeyCache = void 0;
  if (false) {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError = void 0;
  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (false) {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};
    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }
      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}
// CONCATENATED MODULE: ../node_modules/redux/es/bindActionCreators.js
function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(undefined, arguments));
  };
}

/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}
// CONCATENATED MODULE: ../node_modules/redux/es/compose.js
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined, arguments));
    };
  });
}
// CONCATENATED MODULE: ../node_modules/redux/es/applyMiddleware.js
var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};



/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function (reducer, preloadedState, enhancer) {
      var store = createStore(reducer, preloadedState, enhancer);
      var _dispatch = store.dispatch;
      var chain = [];

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch(action) {
          return _dispatch(action);
        }
      };
      chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(undefined, chain)(store.dispatch);

      return _extends({}, store, {
        dispatch: _dispatch
      });
    };
  };
}
// CONCATENATED MODULE: ../node_modules/redux/es/index.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "createStore", function() { return createStore_createStore; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "combineReducers", function() { return combineReducers; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return bindActionCreators; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return applyMiddleware; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });







/*
* This is a dummy function to check if the function name has been altered by minification.
* If the function has been minified and NODE_ENV !== 'production', warn the user.
*/
function isCrushed() {}

if (false) {
  warning('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
}



/***/ }),

/***/ "lSkk":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"generalIntro":"generalIntro__1pBL-","chatIntroButton":"chatIntroButton__22lhO"};

/***/ }),

/***/ "ljlw":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"ChatIntroContainer":"ChatIntroContainer__11qBM"};

/***/ }),

/***/ "m/cc":
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? module.exports = factory(__webpack_require__("KM04"), __webpack_require__("fpuT")) : typeof define === 'function' && define.amd ? define(['preact', 'redux'], factory) : global.preactRedux = factory(global.preact, global.redux);
})(this, function (preact, redux) {

  var Children = {
    only: function only(children) {
      return children && children[0] || null;
    }
  };

  function proptype() {}
  proptype.isRequired = proptype;

  var PropTypes = {
    element: proptype,
    func: proptype,
    shape: function shape() {
      return proptype;
    }
  };

  var storeShape = PropTypes.shape({
    subscribe: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired
  });

  /**
   * Prints a warning in the console if it exists.
   *
   * @param {String} message The warning message.
   * @returns {void}
   */
  function warning(message) {
    /* eslint-disable no-console */
    if (typeof console !== 'undefined' && typeof console.error === 'function') {
      console.error(message);
    }
    /* eslint-enable no-console */
    try {
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
      /* eslint-disable no-empty */
    } catch (e) {}
    /* eslint-enable no-empty */
  }

  var classCallCheck = function classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  var inherits = function inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  var possibleConstructorReturn = function possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  var didWarnAboutReceivingStore = false;
  function warnAboutReceivingStore() {
    if (didWarnAboutReceivingStore) {
      return;
    }
    didWarnAboutReceivingStore = true;

    warning('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
  }

  var Provider = function (_Component) {
    inherits(Provider, _Component);

    Provider.prototype.getChildContext = function getChildContext() {
      return { store: this.store };
    };

    function Provider(props, context) {
      classCallCheck(this, Provider);

      var _this = possibleConstructorReturn(this, _Component.call(this, props, context));

      _this.store = props.store;
      return _this;
    }

    Provider.prototype.render = function render() {
      var children = this.props.children;

      return Children.only(children);
    };

    return Provider;
  }(preact.Component);

  if (true) {
    Provider.prototype.componentWillReceiveProps = function (nextProps) {
      var store = this.store;
      var nextStore = nextProps.store;

      if (store !== nextStore) {
        warnAboutReceivingStore();
      }
    };
  }

  Provider.childContextTypes = {
    store: storeShape.isRequired
  };

  function shallowEqual(objA, objB) {
    if (objA === objB) {
      return true;
    }

    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);

    if (keysA.length !== keysB.length) {
      return false;
    }

    // Test for A's keys different from B.
    var hasOwn = Object.prototype.hasOwnProperty;
    for (var i = 0; i < keysA.length; i++) {
      if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
        return false;
      }
    }

    return true;
  }

  function wrapActionCreators(actionCreators) {
    return function (dispatch) {
      return redux.bindActionCreators(actionCreators, dispatch);
    };
  }

  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
  function overArg(func, transform) {
    return function (arg) {
      return func(transform(arg));
    };
  }

  /** Built-in value references. */
  var getPrototype = overArg(Object.getPrototypeOf, Object);

  /**
   * Checks if `value` is a host object in IE < 9.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
   */
  function isHostObject(value) {
    // Many host objects are `Object` objects that can coerce to strings
    // despite having improperly defined `toString` methods.
    var result = false;
    if (value != null && typeof value.toString != 'function') {
      try {
        result = !!(value + '');
      } catch (e) {}
    }
    return result;
  }

  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */
  function isObjectLike(value) {
    return !!value && typeof value == 'object';
  }

  /** `Object#toString` result references. */
  var objectTag = '[object Object]';

  /** Used for built-in method references. */
  var funcProto = Function.prototype;
  var objectProto = Object.prototype;
  /** Used to resolve the decompiled source of functions. */
  var funcToString = funcProto.toString;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /** Used to infer the `Object` constructor. */
  var objectCtorString = funcToString.call(Object);

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var objectToString = objectProto.toString;

  /**
   * Checks if `value` is a plain object, that is, an object created by the
   * `Object` constructor or one with a `[[Prototype]]` of `null`.
   *
   * @static
   * @memberOf _
   * @since 0.8.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   * }
   *
   * _.isPlainObject(new Foo);
   * // => false
   *
   * _.isPlainObject([1, 2, 3]);
   * // => false
   *
   * _.isPlainObject({ 'x': 0, 'y': 0 });
   * // => true
   *
   * _.isPlainObject(Object.create(null));
   * // => true
   */
  function isPlainObject(value) {
    if (!isObjectLike(value) || objectToString.call(value) != objectTag || isHostObject(value)) {
      return false;
    }
    var proto = getPrototype(value);
    if (proto === null) {
      return true;
    }
    var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
    return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
  }

  function interopDefault(ex) {
    return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
  }

  function createCommonjsModule(fn, module) {
    return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var index = createCommonjsModule(function (module) {
    /**
     * Copyright 2015, Yahoo! Inc.
     * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
     */
    'use strict';

    var REACT_STATICS = {
      childContextTypes: true,
      contextTypes: true,
      defaultProps: true,
      displayName: true,
      getDefaultProps: true,
      mixins: true,
      propTypes: true,
      type: true
    };

    var KNOWN_STATICS = {
      name: true,
      length: true,
      prototype: true,
      caller: true,
      arguments: true,
      arity: true
    };

    var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';

    module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
      if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components
        var keys = Object.getOwnPropertyNames(sourceComponent);

        /* istanbul ignore else */
        if (isGetOwnPropertySymbolsAvailable) {
          keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
          if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
            try {
              targetComponent[keys[i]] = sourceComponent[keys[i]];
            } catch (error) {}
          }
        }
      }

      return targetComponent;
    };
  });

  var hoistStatics = interopDefault(index);

  function invariant() {}

  var defaultMapStateToProps = function defaultMapStateToProps(state) {
    return {};
  }; // eslint-disable-line no-unused-vars
  var defaultMapDispatchToProps = function defaultMapDispatchToProps(dispatch) {
    return { dispatch: dispatch };
  };
  var defaultMergeProps = function defaultMergeProps(stateProps, dispatchProps, parentProps) {
    return _extends({}, parentProps, stateProps, dispatchProps);
  };

  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }

  var errorObject = { value: null };
  function tryCatch(fn, ctx) {
    try {
      return fn.apply(ctx);
    } catch (e) {
      errorObject.value = e;
      return errorObject;
    }
  }

  // Helps track hot reloading.
  var nextVersion = 0;

  function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
    var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

    var shouldSubscribe = Boolean(mapStateToProps);
    var mapState = mapStateToProps || defaultMapStateToProps;

    var mapDispatch = void 0;
    if (typeof mapDispatchToProps === 'function') {
      mapDispatch = mapDispatchToProps;
    } else if (!mapDispatchToProps) {
      mapDispatch = defaultMapDispatchToProps;
    } else {
      mapDispatch = wrapActionCreators(mapDispatchToProps);
    }

    var finalMergeProps = mergeProps || defaultMergeProps;
    var _options$pure = options.pure;
    var pure = _options$pure === undefined ? true : _options$pure;
    var _options$withRef = options.withRef;
    var withRef = _options$withRef === undefined ? false : _options$withRef;

    var checkMergedEquals = pure && finalMergeProps !== defaultMergeProps;

    // Helps track hot reloading.
    var version = nextVersion++;

    return function wrapWithConnect(WrappedComponent) {
      var connectDisplayName = 'Connect(' + getDisplayName(WrappedComponent) + ')';

      function checkStateShape(props, methodName) {
        if (!isPlainObject(props)) {
          warning(methodName + '() in ' + connectDisplayName + ' must return a plain object. ' + ('Instead received ' + props + '.'));
        }
      }

      function computeMergedProps(stateProps, dispatchProps, parentProps) {
        var mergedProps = finalMergeProps(stateProps, dispatchProps, parentProps);
        if (true) {
          checkStateShape(mergedProps, 'mergeProps');
        }
        return mergedProps;
      }

      var Connect = function (_Component) {
        inherits(Connect, _Component);

        Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
          return !pure || this.haveOwnPropsChanged || this.hasStoreStateChanged;
        };

        function Connect(props, context) {
          classCallCheck(this, Connect);

          var _this = possibleConstructorReturn(this, _Component.call(this, props, context));

          _this.version = version;
          _this.store = props.store || context.store;

          invariant(_this.store, 'Could not find "store" in either the context or ' + ('props of "' + connectDisplayName + '". ') + 'Either wrap the root component in a <Provider>, ' + ('or explicitly pass "store" as a prop to "' + connectDisplayName + '".'));

          var storeState = _this.store.getState();
          _this.state = { storeState: storeState };
          _this.clearCache();
          return _this;
        }

        Connect.prototype.computeStateProps = function computeStateProps(store, props) {
          if (!this.finalMapStateToProps) {
            return this.configureFinalMapState(store, props);
          }

          var state = store.getState();
          var stateProps = this.doStatePropsDependOnOwnProps ? this.finalMapStateToProps(state, props) : this.finalMapStateToProps(state);

          if (true) {
            checkStateShape(stateProps, 'mapStateToProps');
          }
          return stateProps;
        };

        Connect.prototype.configureFinalMapState = function configureFinalMapState(store, props) {
          var mappedState = mapState(store.getState(), props);
          var isFactory = typeof mappedState === 'function';

          this.finalMapStateToProps = isFactory ? mappedState : mapState;
          this.doStatePropsDependOnOwnProps = this.finalMapStateToProps.length !== 1;

          if (isFactory) {
            return this.computeStateProps(store, props);
          }

          if (true) {
            checkStateShape(mappedState, 'mapStateToProps');
          }
          return mappedState;
        };

        Connect.prototype.computeDispatchProps = function computeDispatchProps(store, props) {
          if (!this.finalMapDispatchToProps) {
            return this.configureFinalMapDispatch(store, props);
          }

          var dispatch = store.dispatch;

          var dispatchProps = this.doDispatchPropsDependOnOwnProps ? this.finalMapDispatchToProps(dispatch, props) : this.finalMapDispatchToProps(dispatch);

          if (true) {
            checkStateShape(dispatchProps, 'mapDispatchToProps');
          }
          return dispatchProps;
        };

        Connect.prototype.configureFinalMapDispatch = function configureFinalMapDispatch(store, props) {
          var mappedDispatch = mapDispatch(store.dispatch, props);
          var isFactory = typeof mappedDispatch === 'function';

          this.finalMapDispatchToProps = isFactory ? mappedDispatch : mapDispatch;
          this.doDispatchPropsDependOnOwnProps = this.finalMapDispatchToProps.length !== 1;

          if (isFactory) {
            return this.computeDispatchProps(store, props);
          }

          if (true) {
            checkStateShape(mappedDispatch, 'mapDispatchToProps');
          }
          return mappedDispatch;
        };

        Connect.prototype.updateStatePropsIfNeeded = function updateStatePropsIfNeeded() {
          var nextStateProps = this.computeStateProps(this.store, this.props);
          if (this.stateProps && shallowEqual(nextStateProps, this.stateProps)) {
            return false;
          }

          this.stateProps = nextStateProps;
          return true;
        };

        Connect.prototype.updateDispatchPropsIfNeeded = function updateDispatchPropsIfNeeded() {
          var nextDispatchProps = this.computeDispatchProps(this.store, this.props);
          if (this.dispatchProps && shallowEqual(nextDispatchProps, this.dispatchProps)) {
            return false;
          }

          this.dispatchProps = nextDispatchProps;
          return true;
        };

        Connect.prototype.updateMergedPropsIfNeeded = function updateMergedPropsIfNeeded() {
          var nextMergedProps = computeMergedProps(this.stateProps, this.dispatchProps, this.props);
          if (this.mergedProps && checkMergedEquals && shallowEqual(nextMergedProps, this.mergedProps)) {
            return false;
          }

          this.mergedProps = nextMergedProps;
          return true;
        };

        Connect.prototype.isSubscribed = function isSubscribed() {
          return typeof this.unsubscribe === 'function';
        };

        Connect.prototype.trySubscribe = function trySubscribe() {
          if (shouldSubscribe && !this.unsubscribe) {
            this.unsubscribe = this.store.subscribe(this.handleChange.bind(this));
            this.handleChange();
          }
        };

        Connect.prototype.tryUnsubscribe = function tryUnsubscribe() {
          if (this.unsubscribe) {
            this.unsubscribe();
            this.unsubscribe = null;
          }
        };

        Connect.prototype.componentDidMount = function componentDidMount() {
          this.trySubscribe();
        };

        Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
          if (!pure || !shallowEqual(nextProps, this.props)) {
            this.haveOwnPropsChanged = true;
          }
        };

        Connect.prototype.componentWillUnmount = function componentWillUnmount() {
          this.tryUnsubscribe();
          this.clearCache();
        };

        Connect.prototype.clearCache = function clearCache() {
          this.dispatchProps = null;
          this.stateProps = null;
          this.mergedProps = null;
          this.haveOwnPropsChanged = true;
          this.hasStoreStateChanged = true;
          this.haveStatePropsBeenPrecalculated = false;
          this.statePropsPrecalculationError = null;
          this.renderedElement = null;
          this.finalMapDispatchToProps = null;
          this.finalMapStateToProps = null;
        };

        Connect.prototype.handleChange = function handleChange() {
          if (!this.unsubscribe) {
            return;
          }

          var storeState = this.store.getState();
          var prevStoreState = this.state.storeState;
          if (pure && prevStoreState === storeState) {
            return;
          }

          if (pure && !this.doStatePropsDependOnOwnProps) {
            var haveStatePropsChanged = tryCatch(this.updateStatePropsIfNeeded, this);
            if (!haveStatePropsChanged) {
              return;
            }
            if (haveStatePropsChanged === errorObject) {
              this.statePropsPrecalculationError = errorObject.value;
            }
            this.haveStatePropsBeenPrecalculated = true;
          }

          this.hasStoreStateChanged = true;
          this.setState({ storeState: storeState });
        };

        Connect.prototype.getWrappedInstance = function getWrappedInstance() {
          invariant(withRef, 'To access the wrapped instance, you need to specify ' + '{ withRef: true } as the fourth argument of the connect() call.');

          return this.refs.wrappedInstance;
        };

        Connect.prototype.render = function render() {
          var haveOwnPropsChanged = this.haveOwnPropsChanged;
          var hasStoreStateChanged = this.hasStoreStateChanged;
          var haveStatePropsBeenPrecalculated = this.haveStatePropsBeenPrecalculated;
          var statePropsPrecalculationError = this.statePropsPrecalculationError;
          var renderedElement = this.renderedElement;

          this.haveOwnPropsChanged = false;
          this.hasStoreStateChanged = false;
          this.haveStatePropsBeenPrecalculated = false;
          this.statePropsPrecalculationError = null;

          if (statePropsPrecalculationError) {
            throw statePropsPrecalculationError;
          }

          var shouldUpdateStateProps = true;
          var shouldUpdateDispatchProps = true;
          if (pure && renderedElement) {
            shouldUpdateStateProps = hasStoreStateChanged || haveOwnPropsChanged && this.doStatePropsDependOnOwnProps;
            shouldUpdateDispatchProps = haveOwnPropsChanged && this.doDispatchPropsDependOnOwnProps;
          }

          var haveStatePropsChanged = false;
          var haveDispatchPropsChanged = false;
          if (haveStatePropsBeenPrecalculated) {
            haveStatePropsChanged = true;
          } else if (shouldUpdateStateProps) {
            haveStatePropsChanged = this.updateStatePropsIfNeeded();
          }
          if (shouldUpdateDispatchProps) {
            haveDispatchPropsChanged = this.updateDispatchPropsIfNeeded();
          }

          var haveMergedPropsChanged = true;
          if (haveStatePropsChanged || haveDispatchPropsChanged || haveOwnPropsChanged) {
            haveMergedPropsChanged = this.updateMergedPropsIfNeeded();
          } else {
            haveMergedPropsChanged = false;
          }

          if (!haveMergedPropsChanged && renderedElement) {
            return renderedElement;
          }

          if (withRef) {
            this.renderedElement = preact.h(WrappedComponent, _extends({}, this.mergedProps, {
              ref: 'wrappedInstance'
            }));
          } else {
            this.renderedElement = preact.h(WrappedComponent, this.mergedProps);
          }

          return this.renderedElement;
        };

        return Connect;
      }(preact.Component);

      Connect.displayName = connectDisplayName;
      Connect.WrappedComponent = WrappedComponent;
      Connect.contextTypes = {
        store: storeShape
      };

      if (true) {
        Connect.prototype.componentWillUpdate = function componentWillUpdate() {
          if (this.version === version) {
            return;
          }

          // We are hot reloading!
          this.version = version;
          this.trySubscribe();
          this.clearCache();
        };
      }

      return hoistStatics(Connect, WrappedComponent);
    };
  }

  var lib = {
    Provider: Provider,
    connect: connect
  };

  return lib;
});
//# sourceMappingURL=preact-redux.js.map

/***/ }),

/***/ "o6di":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6c9609f2f9fc1e736615cc8a008630bb.png";

/***/ }),

/***/ "rEZR":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"chatWidget":"chatWidget__2yQAM"};

/***/ }),

/***/ "sXsf":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"dateTime":"dateTime__1y7t4"};

/***/ }),

/***/ "tDRe":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"defaultButton":"defaultButton__1eOPy"};

/***/ }),

/***/ "uME6":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"footer":"footer__1mU2r"};

/***/ }),

/***/ "vwK3":
/***/ (function(module, exports) {

module.exports = function (originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),

/***/ "z2/9":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"chatButton":"chatButton__2s5PV"};

/***/ })

/******/ });
//# sourceMappingURL=ssr-bundle.js.map