import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import reduce from '../reducers';
import * as actions from '../actions';
import TodoItem from './todo-item';
import Header from './chat-header';
import Footer from './chat-footer';
import ChatContainer from './chat-container';
import './style'

class ComponentsManager extends Component {
	
	render() {
		return (
			<div id="app">
				<Header/>
				<ChatContainer store={todos} removeToDo={this.removeTodo} />
				<Footer value={text}  onSubmit={this.addTodos} onInput={this.updateText}/>
			</div>
		);
	}
}

export default ComponentsManager;
