import { h } from "preact";
import style from "./style.less";
import ImageComponent from "../../../CommonContainer/ImageComponent";

export default (props) => {
	return <div class={style.avatarWrapper}>
		<ImageComponent/>
	</div>;
};
