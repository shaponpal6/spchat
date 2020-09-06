import { h, Component } from "preact";
import ActionButtons from "./actionButtons";
import OperatorsList from "./OperatorsList";
import ButtonComponent from "../../CommonContainer/ButtonComponent";
import CloseIcon from "../../../images/close.svg"
import style from "./style.less";

export default class Header extends Component {
	render() {
		const store = this.props.store;
		return (
			<header class={style.header}>
				<OperatorsList
					operators={store.operators}
					chatText={store.chatText}
					onLogedOut={store.onLogedOut}
				/>

				<ActionButtons
					isLogedIn={store.isLogedIn}
					onLogedIn={store.onLogedIn}
					onLogedOut={store.onLogedOut}
					onMenuToggle={store.onMenuToggle}
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
