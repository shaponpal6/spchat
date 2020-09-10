import { h } from "preact";
import style from "./style.less";
import Button from "../../CommonContainer/ButtonComponent";
import ninja from "../../../images/ninja.png";

export default (props) => {
	const store = props.store;
	return (
		<div class={style.footer}>
			
			<Button className="" imageSrc={ninja}  onClick={store.onBotStatus}/> 
			<Button className="" imageSrc={ninja}  onClick={store.onAttachment}/> 
			<Button className="" imageSrc={ninja}  onClick={store.onMenuExpend}/> 

			<form onSubmit={store.onInputSubmit} action="javascript:">
				<input
					value={props.value}
					onInput={store.onInputChange}
					placeholder={store.placeholder}
				/>
			</form>
		</div>
	);
};
