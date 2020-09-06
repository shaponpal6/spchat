import { h, Component } from "preact";
// import { connect } from 'preact-redux';
// import reduce from '../reducers';
// import * as actions from '../actions';
// import TodoItem from './todo-item';
import Header from "./header";
import Footer from "./footer";
import ChatContainer from "./container";
// import ComponentsManager from './components-manager';
import style from "./style";

class ChatWidget extends Component {
	render() {
		const store = this.props.store;

		return (
			<div class={style.chatWidget}>
				<Header store={store.header} />
				<ChatContainer store={store.todos} removeToDo={store.removeTodo} />
				<Footer
					store={store.footer}
					value={store.text}
					onSubmit={store.addTodos}
					onInput={store.updateText}
				/>
			</div>
		);
	}
}

export default ChatWidget;
