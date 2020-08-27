import { h, Component } from "preact";
import style from "./style.less";

export default class Footer extends Component {
	render() {
		return (
			<div class={style.footer}>
				<form onSubmit={this.props.onSubmit} action="javascript:">
					<input
						value={this.props.value}
						onInput={this.props.onInput}
						placeholder="New Message...."
					/>
				</form>
			</div>
		);
	}
}
