import { h, Component } from "preact";
import Message from "../message";
import style from "./style.less";

export default class ChatContainer extends Component {

	render() {
		const todos = this.props.store;
		return (
			<div class={style.container}>
				<ul>
					{todos.map((todo) => (
						<Message key={todo.id} todo={todo} onRemove={this.props.removeToDo} />
					))}
				</ul>
			</div>
		);
	}
}
