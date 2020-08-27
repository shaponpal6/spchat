import { h, Component } from "preact";
import { connect } from "preact-redux";
import reduce from "../store/reducers";
import * as actions from "../store/actions";
// import TodoItem from "./todo-item";
// import Header from "./chat-widget/header";
// import Footer from "./chat-widget/footer";
// import ChatContainer from "./chat-widget/container";
import ComponentsManager from "./components-manager";
import "./style";

@connect(reduce, actions)
class App extends Component {
	// constructor() {
	// 	super();

	// 	this.state = {
	// 		store: [],
	// 	};
	// }

	componentDidMount() {
		// fetch("https://localhost:3000/api/aye")
		// 	.then((response) => response.json())
		// 	.then((json) => {
		// 		this.setState({ jsonReturnedValue: json });
		// 	});
	}

	addTodos = () => {
		this.props.addTodo(this.state.text);
		this.setState({ text: "" });
	};

	removeTodo = (todo) => {
		this.props.removeTodo(todo);
	};

	updateText = (e) => {
		this.setState({ text: e.target.value });
	};

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

	render({ todos }, { text }) {
		return (
			<div id="app">
				<ComponentsManager
					store={{
						chatWidget: {
							todos,
							removeTodo: this.removeTodo,
							text,
							addTodos: this.addTodos,
							updateText: this.updateText,
						},
						chatDashboard: {
							todos,
							removeTodo: this.removeTodo,
							text,
							addTodos: this.addTodos,
							updateText: this.updateText,
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
					}}
				/>

				{/* <Header />
				<ChatContainer store={todos} removeToDo={this.removeTodo} />
				<Footer
					value={text}
					onSubmit={this.addTodos}
					onInput={this.updateText}
				/> */}
			</div>
		);
	}
}

export default App;
