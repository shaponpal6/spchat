import { h, Component } from "preact";
// import { connect } from "preact-redux";
// import reduce from "../reducers";
// import * as actions from "../actions";
// import TodoItem from "./todo-item";
// import Header from "../chat-widget/header";
// import Footer from "../chat-widget/footer";
// import ChatContainer from "../chat-widget/container";
//ChatWidget
import ChatWidget from "../chat-widget"
//ChatDashboard
import ChatDashboard from "../ChatDashboard"
// Button
import ChatButton from "../chat-button";
//ChatIntroContainer
import ChatIntroContainer from "../ChatIntroContainer";
import "./style";

class ComponentsManager extends Component {
	render() {
		console.log(this.props)
		const store = this.props.store;
		return (
			<div id="app">
				{/* <Header />
				<ChatContainer
					store={store.todos}
					removeToDo={store.removeTodo}
				/>
				<Footer
					value={store.text}
					onSubmit={store.addTodos}
					onInput={store.updateText}
				/> */}
				<ChatWidget store={store.chatWidget} />
				<ChatDashboard store={store.chatDashboard} />
				<ChatIntroContainer store={store.chatIntro} />
				<ChatButton store={store.chatButton} />
			</div>
		);
	}
}

export default ComponentsManager;
