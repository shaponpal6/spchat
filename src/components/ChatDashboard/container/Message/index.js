import { h } from "preact";
import style from "./style.less";

export default (props) => {
	return <div class={style.messageContent}>{props.avaterAlt}</div>;
};
