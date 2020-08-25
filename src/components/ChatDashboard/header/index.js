import { h, Component } from 'preact';
import style from './style.less';

export default class Header extends Component {
	render() {
		console.log(style);
		return (
			<header class={style.header}>
				<h1>Preact App</h1>
			</header>
		);
	}
}
