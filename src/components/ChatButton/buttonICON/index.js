import { h, Component } from "preact";
// import ButtonICON from "./buttonICON";
// import ButtonImage from "./buttonImage";
import style from "./style.less";

class ButtonICON extends Component {
	render() {
		const store = this.props;
		return (
			<button
				class={style.chatButton}
				buttonType={store.buttonType}
				onHover={store.onHover}
				onClick={store.onClick}
			>B</button>
		);
	}
}

export default ButtonICON;
