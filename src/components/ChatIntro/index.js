import { h, Component } from "preact";
import GeneralIntro from "./GeneralIntro";
// import ButtonImage from "./buttonImage";
import style from "./style.less";

class ChatIntroContainer extends Component {
	render() {
		console.log(this.props)
		const store = this.props.store;
		return (
			<div class={style.ChatIntroContainer}>
				<GeneralIntro
					type={store.chatIntroType}
					onClick={store.onChatButtonClick}
				/>
			</div>
		);
	}
}

export default ChatIntroContainer;
