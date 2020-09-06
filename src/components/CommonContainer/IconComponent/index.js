import { h } from "preact";
import style from "./style.less";
import imageDefault from "../../../images/close.svg";

export default (props) => {
	return <button class={props.imageClassName ? props.imageClassName : style.imageDefaultStyle}>{imageDefault}</button>;
};
