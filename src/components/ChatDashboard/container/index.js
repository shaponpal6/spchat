import { h, Component } from "preact";
import MessageContainer from "./MessageContainer";
import style from "./style.less";

export default class ChatContainer extends Component {

	render() {
		const todos = this.props.store;
		return (
			<div class={style.messageContainer}>
				<ul class={style.messages}>
					{todos.map((todo) => (
						<MessageContainer key={todo.id} todo={todo} onRemove={this.props.removeToDo} />
					))}
				</ul>
			</div>
		);
	}
}
