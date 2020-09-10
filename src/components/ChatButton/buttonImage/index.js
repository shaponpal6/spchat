import { h, Component } from "preact";
// import { connect } from "preact-redux";
// import reduce from "../reducers";
// import * as actions from "../actions";
// import TodoItem from "./todo-item";
import Header from "../chat-widget/header";
import Button from "./button";
import ChatContainer from "../chat-widget/container";
import style from "./style.less";

class ComponentsManager extends Component {
	render() {
		console.log(this.props)
		const store = this.props.store;
		return (
			<div class={style.container}>
				<Footer
					value={store.text}
					onSubmit={store.addTodos}
					onInput={store.updateText}
				/>
			</div>
		);
	}
}

export default ComponentsManager;
