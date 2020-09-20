import { h, Component } from "preact";
import ActionButtons from "./actionButtons";
import OperatorsList from "./OperatorsList";
import ButtonComponent from "../../CommonContainer/ButtonComponent";
import CloseIcon from "../../../images/close.svg";
import style from "./style.less";

export default class Header extends Component {
	render() {
		const store = this.props.store;
		console.log("1.....props..", this.props);
		return (
			<header class={style.header}>
				<OperatorsList
					operators={this.props.operators}
					chatText={this.props.locales.chatWith}
				/>

				<ActionButtons
					isLogedIn={this.props.isLogedIn}
					onSignIn={this.props.onSignIn}
					onSignOut={this.props.onSignOut}
					onMenuToggle={this.props.onMenuToggle}
				/>

				<ButtonComponent
					imageSrc={CloseIcon}
					className={null}
					onClick={store.onCloseWidget}
				/>
			</header>
		);
	}
}
