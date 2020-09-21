import { h, Component } from "preact";
// import uniqid from "uniqid";
// var uniqid = require('uniqid');
import db from "../firebase/firestore";
import { SPChatWidgetEventsHandeller } from "../core/SPChatWidgetEventsHandeller";
import DashboardTrigger from "../core/SPChatDashboardEventsHandeller";
import ScreenTrigger from "../core/SPChatScreenEventsHandeller";
import IntroTrigger from "../core/SPChatIntroEventsHandeller";
import AuthTrigger from "../core/SPChatAuthEventsHandeller";
import { firebaseEvents } from "../app/firebaseEvents";
// import { connect } from "preact-redux";
// import reduce from "../store/reducers";
// import * as actions from "../store/actions";
import ChatWidget from "./chat-widget";
import ChatDashboard from "./ChatDashboard";
import ChatIntro from "./ChatIntro";
import ChatButton from "./ChatButton";
import style from "./style";

import firebase from "firebase/app";
import "firebase/firestore";

function isRTL(s) {
	const rtlChars = "\u0591-\u07FF\u200F\u202B\u202E\uFB1D-\uFDFD\uFE70-\uFEFC";
	const rtlDirCheck = new RegExp(`^[^${rtlChars}]*?[${rtlChars}]`);
	return rtlDirCheck.test(s);
}

// @connect(reduce, actions)
class AppComponent extends Component {
	addTodos = () => {
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
		// console.log("updateing...", e);

		this.setState({ query: e.target.value });
	};

	onSubmit = (e) => {
		// const app = new firebaseEvents();
		// const app2 = new SPChatWidgetEventsHandeller();
		// console.log("cl", app);
		// console.log("cl", app.signIn);
		// console.log("cl2", app2);
		// console.log("cl2", app2.onSubmit);
		const data = {
			id: Date.now(),
			text: this.state.query,
			name: "Shapon Pal",
			time: "12 Jun, 2019",
			avater: "",
			type: "c",
			profilePicUrl: "this.getProfilePicUrl()",
			// timestamp: '',
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		};

		db.collection("messages")
			.add(data)
			.then(function (docRef) {
				console.log("Document written with ID: ", docRef.id);
			})
			.catch(function (error) {
				console.error("Error adding document: ", error);
			});

		console.log(db);

		this.setState({
			messages: {
				data: [...this.state.messages.data, data],
			},
			query: "",
		});
	};

	updateItem(id, newData) {
		var index = this.state.messages.data.findIndex((x) => x.id === id);
		if (index === -1) {
			this.setState({
				messages: {
					data: [...this.state.messages.data, newData],
				},
			});
		} else {
			var data = this.state.messages.data.filter((x) => x.id !== id);
			this.setState({
				messages: {
					data: [...data, newData],
				},
			});
		}
	}

	// Loads chat messages history and listens for upcoming ones.
	loadMessages() {
		console.log("from loadMessages");
		// Create the query to load the last 12 messages and listen for new ones.
		var query = db
			.collection("messages")
			.orderBy("timestamp", "desc")
			.limit(12);

		// Start listening to the query.
		query.onSnapshot(function (snapshot) {
			snapshot.docChanges().forEach(function (change) {
				console.log("change");
				console.log(change);
				var message = change.doc.data();
				console.log(message);
				console.log(this.state.messages);
				var data = this.state.messages.data.filter((x) => x.id !== message.id);

				if (change.type === "removed") {
					//deleteMessage(change.doc.id);
					this.setState({
						messages: {
							data: [...data],
						},
					});
				} else {
					
					message.sent = 1;
					message.seen = '12 jun 2010';
					
					this.setState({
						messages: {
							data: [...data, message],
						},
					});
					// displayMessage(
					// 	change.doc.id,
					// 	message.timestamp,
					// 	message.name,
					// 	message.text,
					// 	message.profilePicUrl,
					// 	message.imageUrl
					// );
				}
			});
		});
	}

	// Button Click
	onChatButtonClick = () => {
		console.log("clicked Button");
		// this.props.addTodo(this.state.text);
		// this.setState({ text: "" });
	};
	// Button Hover
	onChatButtonHover = () => {
		console.log("Hover Button");
		// this.props.addTodo(this.state.text);
		// this.setState({ text: "" });
	};

	// state
	state2 = {
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
			buttonName: "chatICON",
		},
		chatIntro: {
			onChatButtonClick: this.onChatButtonClick,
			chatIntroType: "general",
		},
	};
	// state
	state = {
		router: "chatWidget",
		isLogedIn: true,
		chatButton: true,
		operators: [
			{ name: "Shapon Pal", avater: "" },
			{ name: "Shapon Pal2", avater: "" },
			{ name: "Shapon Pal3", avater: "" },
			{ name: "Shapon Pal4", avater: "" },
		],
		locales: {
			chatWith: "Chat With222",
			writeMessage: "Write Message here..",
		},
		messages: {
			messageId: 111,
			data: [
				{
					id: "dkdxkd",
					text: "Hello there!!",
					name: "Shapon Pal",
					time: "12 Jun, 2019",
					avater: "",
					type: "c",
				},
				{
					id: "dkdedxkd",
					text: "Hello there!!",
					name: "Shapon Pal",
					time: "12 Jun, 2019",
					avater: "",
					type: "c",
				},
				{
					id: "dkdwwxkd",
					text: "Hello there!!",
					name: "Shapon Pal",
					time: "12 Jun, 2019",
					avater: "",
					type: "c",
				},
			],
		},
		query: "",
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
			buttonName: "chatICON",
		},
		chatIntro: {
			onChatButtonClick: this.onChatButtonClick,
			chatIntroType: "general",
		},
	};

	//   dismissNotification = () => !isActiveSession();

	initWidget() {
		//   setWidgetLanguage();
		//   const { minimized, iframe: { visible } } = this.props;
		//   parentCall(minimized ? 'minimizeWindow' : 'restoreWindow');
		//   parentCall(visible ? 'showWidget' : 'hideWidget');
		//   visibility.addListener(this.handleVisibilityChange);
		//   this.handleVisibilityChange();
		//   window.addEventListener('beforeunload', () => {
		// 	  visibility.removeListener(this.handleVisibilityChange);
		//   });
		//   I18n.on('change', this.handleLanguageChange);
	}

	async initialize() {
		//   // TODO: split these behaviors into composable components
		//   await Connection.init();
		//   this.handleTriggers();
		//   CustomFields.init();
		//   Hooks.init();
		//   userPresence.init();
		//   this.initWidget();
		//   this.setState({ initialized: true });
		//   parentCall('ready');
	}

	async finalize() {
		//   CustomFields.reset();
		//   userPresence.reset();
		//   visibility.removeListener(this.handleVisibilityChange);
		//   I18n.off('change', this.handleLanguageChange);
	}

	componentDidMount() {
		this.initialize();
	}

	componentWillUnmount() {
		this.finalize();
	}

	componentDidUpdate() {
		this.loadMessages();
		document.dir = isRTL("Yes") ? "rtl" : "ltr";
	}

	render() {
		// console.log("props...", this.props);
		// console.log("state..", this.state);

		const onEventsHandlerProps = {
			onSignIn: AuthTrigger.signIn,
			onSignOut: AuthTrigger.signOut,
			onSubmit: this.onSubmit,
			onMenuToggle: ScreenTrigger.onMenuToggle,
			onCloseWidget: ScreenTrigger.onCloseWidget,
			removeMessage: this.removeTodo,
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
				{this.state.router === "chatWidget" && (
					<ChatWidget
						store={this.state.chatWidget}
						{...this.state}
						{...onEventsHandlerProps}
					/>
				)}

				{this.state.router === "chatIntro" && (
					<ChatIntro store={this.state.chatIntro} {...onEventsHandlerProps} />
				)}

				{this.state.router === "chatDashboard" && (
					<ChatDashboard
						store={this.state.chatDashboard}
						{...onEventsHandlerProps}
					/>
				)}

				{this.state.chatButton && (
					<ChatButton store={this.state.chatButton} {...onEventsHandlerProps} />
				)}
			</div>
		);
	}
}

export default AppComponent;
