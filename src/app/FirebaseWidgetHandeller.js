import SPChatAuthEventsHandeller from "../core/SPChatAuthEventsHandeller";
export default class FirebaseWidgetHandeller extends SPChatAuthEventsHandeller {
	onSubmit() {
		console.log('..app.. SPChatWidgetEventsHandeller');
	}
	onMenuToggle() {}
	removeTodo() {}
	addTodos() {}
	updateText() {}
	onBotStatus() {}
	onAttachment() {}
	onInputSubmit() {}
	onInputChange() {}
}
