import { h, Component } from "preact";
import MessageContainer from "./MessageContainer";
import style from "./style.less";

export default class ChatContainer extends Component {

	render() {
		const messages = this.props.messages;
		return (
			<div class={style.messageContainer}>
				<ul class={style.messages}>
					{messages.data.map((message) => (
						<MessageContainer key={message.id} message={message} onRemove={this.props.removeMessage} />
					))}
				</ul>
			</div>
		);
	}
}
