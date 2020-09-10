import { h, Component } from "preact";
// import ButtonICON from "./buttonICON";
// import ButtonImage from "./buttonImage";
import style from "./style.less";

class GeneralIntro extends Component {
	render() {
		console.log(this.props);
		const store = this.props;
		return (
			<div class={style.generalIntro}>
				<h2>Chat general Intro</h2>
				<button
					class={style.chatIntroButton}
					onClick={store.onClick}
				>
					General Chat Button
				</button>
			</div>
		);
	}
}

export default GeneralIntro;
