import { h, Component } from "preact";
import SignInOut from "./signInOut";
import style from "./style.less";

export default class ActionButtons extends Component {
	render() {
		return (
			<div class={style.actionContainer}>
				<button class={style.actionBUtton}>...</button>
				<div class={style.actionsList}>
					{this.props.isLogedIn ? (
						<SignInOut text="Log Out" onClick={this.props.onLogedOut} />
					) : (
						<SignInOut text="Log In" onClick={this.props.onLogedIn} />
					)}
				</div>
			</div>
		);
	}
}
