// import { h } from "preact";
import style from "./style.less";
import Button from "../../CommonContainer/ButtonComponent";
import ninja from "../../../images/ninja.png";

export default (props) => {
	const store = props.store;
	console.log('props footer', props);
	return (
		<div class={style.footer}>
			
			<Button className="" imageSrc={ninja}  onClick={props.onBotStatus}/> 
			<Button className="" imageSrc={ninja}  onClick={props.onAttachment}/> 
			<Button className="" imageSrc={ninja}  onClick={props.onMenuExpend}/> 

			<form onSubmit={props.onSubmit} action="javascript:">
				<input
					value={props.query}
					onInput={props.onInput}
					placeholder={props.locales.writeMessage}
				/>
			</form>
		</div>
	);
};
