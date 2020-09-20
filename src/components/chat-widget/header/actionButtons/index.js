import { h, Component } from "preact";
import SignInOut from "./signInOut";
import ButtonComponent from "../../../CommonContainer/ButtonComponent";
import MenuIcon from "../../../../images/menu.svg";
import style from "./style.less";

export default class ActionButtons extends Component {
	render() {
		return (
			<div class={style.actionContainer}>
				{/* <button class={style.actionBUtton}>...</button> */}
				<ButtonComponent className={style.actionBUtton}  onClick={this.props.onMenuToggle}  imageSrc={MenuIcon}/>
				<div class={style.actionsList}>
					{this.props.isLogedIn ? (
						<SignInOut text="Log Out" onClick={this.props.onSignOut} />
					) : (
						<SignInOut text="Log In" onClick={this.props.onSignIn} />
					)}
				</div>
			</div>
		);
	}
}
