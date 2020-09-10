import { h } from "preact";
import style from "./style.less";

export default (props) => {
	return <p class={style.sender}>{props.avaterAlt}</p>;
};
