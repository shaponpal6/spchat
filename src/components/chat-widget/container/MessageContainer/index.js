import { h, Component } from "preact";
import style from "./style";

import Avater from "../Avater";
import DateTime from "../DateTime";
import Sender from "../Sender";
import Message from "../Message";

export default class MessageContainer extends Component {
	remove = () => {
		let { onRemove, message } = this.props;
		onRemove(message);
	};

	render({ message }) {
		return (
			<li>
				<div class={style.messageWrapper}>
					<Avater avaterUrl={message.avater} avaterAlt={message.name} />
					<div class={style.messageWrap}>
						<Sender avaterUrl={message.name} avaterAlt={message.name} />
						<Message avaterUrl={message.text} avaterAlt={message.text} />
					</div>
				</div>
				<DateTime dateTime={message.time} />
				<button onClick={this.remove}>×</button>
			</li>
		);
	}
}
