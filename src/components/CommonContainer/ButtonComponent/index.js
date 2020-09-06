import { h } from "preact";
import style from "./style.less";
import imageDefault from "../../../images/close.svg";

export default (props) => {
	return (
		<div
			class={props.className ? props.className : style.defaultButton}
			onClick={props.onClick}
		>
			<img src={props.imageSrc} />
		</div>
	); 
};
