import { h, Component } from "preact";
import { connect } from "preact-redux";
import reduce from "../store/reducers/reducers";
import * as actions from "../store/actions/actions";
import ChatWidget from "./chat-widget";
import ChatDashboard from "./ChatDashboard";
import ChatIntro from "./ChatIntro";
import ChatButton from "./ChatButton";
import style from "./style";

//const app = new firebaseEvents();

// @connect(reduce, actions)
class AppComponent extends Component {
	addTodos = () => {
		console.log("add...", this.state);
		// console.log('event...', app);
		// saveMessage(this.state.text)
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

	// state
	state = {
		router: "chatWidget",
		chatButton: true,
		chatWidget: {
			header: {
				isLogedIn: false,
				onLogedIn: this.onLogedIn,
				onLogedOut: this.onLogedOut,
				operators: [
					{ name: "Shapon Pal", avater: "" },
					{ name: "Shapon Pal2", avater: "" },
					{ name: "Shapon Pal3", avater: "" },
					{ name: "Shapon Pal4", avater: "" },
				],
				chatText: "Chat With",
				onMenuToggle: this.onMenuToggle,
				onCloseWidget: this.onCloseWidget,
			},
			todos: [],
			removeTodo: this.removeTodo,
			text: "",
			addTodos: this.addTodos,
			updateText: this.updateText,
			footer: {
				placeholder: "Type here....",
				onBotStatus: this.onMenuToggle,
				onMenuExpend: this.onCloseWidget,
				onAttachment: this.onCloseWidget,
				onInputSubmit: this.addTodos,
				onInputChange: this.updateText,
			},
		},
		chatDashboard: {
			header: {
				isLogedIn: false,
				onLogedIn: this.onLogedIn,
				onLogedOut: this.onLogedOut,
				operators: [
					{ name: "Shapon Pal", avater: "" },
					{ name: "Shapon Pal2", avater: "" },
					{ name: "Shapon Pal3", avater: "" },
					{ name: "Shapon Pal4", avater: "" },
				],
				chatText: "Chat With",
				onMenuToggle: this.onMenuToggle,
				onCloseWidget: this.onCloseWidget,
			},
			todos: [],
			removeTodo: this.removeTodo,
			text: "",
			addTodos: this.addTodos,
			updateText: this.updateText,
			footer: {
				placeholder: "Type here....",
				onBotStatus: this.onMenuToggle,
				onMenuExpend: this.onCloseWidget,
				onAttachment: this.onCloseWidget,
				onInputSubmit: this.addTodos,
				onInputChange: this.updateText,
			},
		},
		chatButton: {
			onChatButtonClick: this.onChatButtonClick,
			onChatButtonHover: this.onChatButtonHover,
			buttonType: "chatICON",
		},
		chatIntro: {
			onChatButtonClick: this.onChatButtonClick,
			chatIntroType: "general",
		},
	};

	render() {
		console.log(this.state);
		console.log(this.state.chatIntro);
		return (
			<div class={style.chatContainer}>
				{this.state.router === "chatWidget" && (
					<ChatWidget store={this.state.chatWidget} />
				)}

				{this.state.router === "chatIntro" && (
					<ChatIntro store={this.state.chatIntro} />
				)}

				{this.state.router === "chatDashboard" && (
					<ChatDashboard store={this.state.chatDashboard} />
				)}

				{this.state.chatButton && (
					<ChatButton store={this.state.chatButton} />
				)}
			</div>
		);
	}
}

export default AppComponent;
