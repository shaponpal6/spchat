// import { h } from "preact";
import style from "./style.less";
import Button from "../../CommonContainer/ButtonComponent";
import ninja from "../../../images/ninja.png";

export default (props) => {
	const store = props.store;
	console.log('props footer', props);
	return (
		<div class={style.footer}>
			
			<Button className="" imageSrc={ninja}  onClick={store.onBotStatus}/> 
			<Button className="" imageSrc={ninja}  onClick={store.onAttachment}/> 
			<Button className="" imageSrc={ninja}  onClick={store.onMenuExpend}/> 

			<form onSubmit={props.onSubmit} action="javascript:">
				<input
					value={props.value}
					onInput={props.onInput}
					placeholder={store.placeholder}
				/>
			</form>
		</div>
	);
};
