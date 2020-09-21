import SPChatBaseController from "./SPChatBaseController";
export class SPChatWidgetEventsHandeller extends SPChatBaseController {
	constructor(){
		super();
		console.log('..core super.. SPChatWidgetEventsHandeller');
		this.onSubmit.bind(this);
	}
	onSubmit = (e) => {
		console.log('..core.. SPChatWidgetEventsHandeller', e);
	}

	onMenuToggle() {}
	removeTodo() {}
	updateText() {}
	onBotStatus() {}
	onAttachment() {}
	onInputSubmit() {}
	onInputChange() {}
}
