import { h, Component } from "preact";
import { connect } from "preact-redux";
import reduce from "../store/reducers";
import * as actions from "../store/actions";
import ChatWidget from "./chat-widget";
import ChatDashboard from "./ChatDashboard";
import ChatIntro from "./ChatIntro";
import ChatButton from "./ChatButton";
import style from "./style";

function isRTL(s) {
	const rtlChars = "\u0591-\u07FF\u200F\u202B\u202E\uFB1D-\uFDFD\uFE70-\uFEFC";
	const rtlDirCheck = new RegExp(`^[^${rtlChars}]*?[${rtlChars}]`);

	return rtlDirCheck.test(s);
}

@connect(reduce, actions)
class AppComponent extends Component {
	state = {
		initialized: false,
		i118n : {...this.props}
	};

	addTodos = () => {
		console.log("proppp...", this.props);
		console.log("add......", this.state);
		// console.log('event...', app);
		// saveMessage(this.state.text);
		this.props.addTodo(this.state.text);
		this.setState({ text: "" });
	};

	removeTodo = (todo) => {
		this.props.removeTodo(todo);
	};

	//onLogedIn
	onLogedIn = () => {
		console.log("onLogedIn");
		app.signIn();
	};

	//onLogedOut
	onLogedOut = () => {
		console.log("onLogedOut");
		app.signOut;
	};
	// onMenuToggle
	onMenuToggle = () => {
		console.log("onCloseWidget111");
	};
	//onCloseWidget
	onCloseWidget = () => {
		console.log("onCloseWidget");
	};

	updateText = (e) => {
		console.log("updateing...", e);

		this.setState({ text: e.target.value });
	};

	// Button Click
	onChatButtonClick = () => {
		console.log("clicked Button");
		// this.props.addTodo(this.state.text);
		// this.setState({ text: "" });
		console.log();
	};
	// Button Hover
	onChatButtonHover = () => {
		console.log("Hover Button");
		// this.props.addTodo(this.state.text);
		// this.setState({ text: "" });
	};

	render() {
		console.log("props...", this.props);
		console.log("state..", this.props);

		const onEventsHandlerProps = {
			...this.state,
			onLogedIn: this.onLogedIn,
			onLogedOut: this.onLogedOut,
			onMenuToggle: this.onMenuToggle,
			onCloseWidget: this.onCloseWidget,
			removeTodo: this.removeTodo,
			addTodos: this.addTodos,
			updateText: this.updateText,
			onBotStatus: this.onMenuToggle,
			onMenuExpend: this.onCloseWidget,
			onAttachment: this.onCloseWidget,
			onInputSubmit: this.addTodos,
			onInputChange: this.updateText,
			onChatButtonClick: this.onChatButtonClick,
			onChatButtonHover: this.onChatButtonHover,
		};

		return (
			<div class={style.chatContainer}>
				{this.props.router === "chatWidget" && (
					<ChatWidget store={this.props.chatWidget} {...onEventsHandlerProps} />
				)}

				{this.props.router === "chatIntro" && (
					<ChatIntro store={this.props.chatIntro} {...onEventsHandlerProps}/>
				)}

				{this.props.router === "chatDashboard" && (
					<ChatDashboard store={this.props.chatDashboard} {...onEventsHandlerProps}/>
				)}

				{this.props.chatButton && <ChatButton store={this.props.chatButton} {...onEventsHandlerProps}/>}
			</div>
		);
	}
}

export default AppComponent;
