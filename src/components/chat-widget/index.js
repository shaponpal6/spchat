import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import reduce from '../reducers';
import * as actions from '../actions';
import TodoItem from './todo-item';
import Header from './chat-widget/header';
import Footer from './chat-widget/footer';
import ChatContainer from './chat-widget/container';
import ComponentsManager from './components-manager';
import './style'

class ChatWidget extends Component { 
	addTodos = () => {
		this.props.addTodo(this.state.text);
		this.setState({ text: '' });
	};

	removeTodo = (todo) => {
		console.log(this.props);
		console.log(todo);
		this.props.removeTodo(todo);
	}; 

	updateText = (e) => {
		this.setState({ text: e.target.value });
	};


	render({ todos }, { text }) {
		
		return (
			<div id="app">
				<Header/>
				<ChatContainer store={todos} removeToDo={this.removeTodo} />
				<Footer value={text}  onSubmit={this.addTodos} onInput={this.updateText}/>
			</div>
		);
	}
}

export default ChatWidget;
