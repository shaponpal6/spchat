import { h } from "preact";
import style from "./style.less";
import imageDefault from "../../../images/avater.png";

export default (props) => {
	return (
		<img
			class={props.className ? props.className : style.imageDefaultStyle}
			src={props.imageSrc ? props.imageSrc : imageDefault}
			alt={props.imageAlt ? props.imageAlt : ""}
		/>
	);
};
