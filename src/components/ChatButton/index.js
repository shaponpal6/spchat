import { h, Component } from "preact";
import ButtonICON from "./buttonICON";
// import ButtonImage from "./buttonImage";
import style from "./style.less";

class ChatButton extends Component {
	render() {
		const store = this.props.store;
		
		return (
			<div class={style.chatButton}>
				<ButtonICON
					buttonType={store.buttonType}
					onHover={store.onChatButtonHover}
					onClick={store.onChatButtonClick}
				/>
			</div>
		);
	}
}

export default ChatButton;
