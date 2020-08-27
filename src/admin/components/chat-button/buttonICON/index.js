import { h, Component } from "preact";
// import ButtonICON from "./buttonICON";
// import ButtonImage from "./buttonImage";
import style from "./style.less";

class ButtonICON extends Component {
	render() {
		console.log(this.props);
		const store = this.props;
		return (
			<button
				class={style.chatButton}
				buttonType={store.buttonType}
				onHover={store.onHover}
				onClick={store.onClick}
			>Chat Button</button>
		);
	}
}

export default ButtonICON;
