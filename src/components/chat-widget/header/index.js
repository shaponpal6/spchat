import { h, Component } from 'preact';
import ActionButtons from './actionButtons';
import style from './style.less';

export default class Header extends Component {
	render() {
		const store = this.props.store;
		return (
			<header class={style.header}>
				<h1>Chatbot App</h1>
				<ActionButtons isLogedIn={store.isLogedIn}  onLogedIn={store.onLogedIn}  onLogedOut={store.onLogedOut}/>
			</header>
		);
	}
}
