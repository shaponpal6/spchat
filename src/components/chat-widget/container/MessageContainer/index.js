import { h, Component } from "preact";
import style from "./style";

import Avater from "../Avater";
import DateTime from "../DateTime";
import Sender from "../Sender";
import Message from "../Message";

export default class MessageContainer extends Component {
	remove = () => {
		let { onRemove, todo } = this.props;
		onRemove(todo);
	};

	render({ todo }) {
		console.log(this.props);
		return (
			<li>
				<div class={style.messageWrapper}>
					<Avater avaterUrl={todo.text} avaterAlt={todo.text} />
					<div class={style.messageWrap}>
						<Sender avaterUrl={todo.text} avaterAlt={todo.text} />
						<Message avaterUrl={todo.text} avaterAlt={todo.text} />
					</div>
				</div>
				<DateTime avaterUrl={todo.text} avaterAlt={todo.text} />
				{/* <button onClick={this.remove}>×</button> */}
			</li>
		);
	}
}
