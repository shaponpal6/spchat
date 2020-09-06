import { h } from "preact";
import ImageComponent from "../../../CommonContainer/ImageComponent";
import style from "./style.less";

export default (props) => {
	let list = props.operators.map((operator) => (
		<div class={style.avaterImage}>
			<ImageComponent
				className={null}
				imageSrc={operator.avater}
				imageAlt={operator.name}
			/>
		</div>
	));

	let names = props.operators.map((operator) => (
		operator.name + ', '
	));

	return (
		<div class={style.headerLeft}>
			<div class={style.operatorsList}>{list}</div>
			<div class={style.operatorsNameList}>
				<p class={style.chatText}>{props.chatText}</p>
				<p>{names}</p>
			</div>
		</div>
	);
};
