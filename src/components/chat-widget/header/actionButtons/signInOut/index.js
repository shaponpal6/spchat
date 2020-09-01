import { h, Component } from 'preact';
import style from './style.less';

export default class SignInOut extends Component {
	render() {
		return (
			<button onClick={this.props.onClick} class={style.actionBUtton}>
				{this.props.text} 
			</button>
		);
	}
}

