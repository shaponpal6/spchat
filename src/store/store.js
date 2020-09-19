import { createStore } from 'redux';

let ACTIONS = {
	ADD_TODO: ({ todos, ...state }, { text }) => ({
		todos: [...todos, {
			id: Math.random().toString(36).substring(2),
			text
		}],
		...state
	}),

	REMOVE_TODO: ({ todos, ...state }, { todo }) => ({
		todos: todos.filter( i => i!==todo ),
		...state
	}), 

	ADD_TODO2: ({ todos, ...state }, { text }) => ({
		todos: [...todos, {
			id: Math.random().toString(36).substring(2),
			text
		}],
		...state
	})
};

const INITIAL = {
	router: "chatWidget",
		chatButton: true,
		chatWidget: {
			header: {
				isLogedIn: false,
				operators: [
					{ name: "Shapon Pal", avater: "" },
					{ name: "Shapon Pal2", avater: "" },
					{ name: "Shapon Pal3", avater: "" },
					{ name: "Shapon Pal4", avater: "" },
				],
				chatText: "Chat With",
			},
			todos: [],
			text: "",
			footer: {
				placeholder: "Type here....",
			},
		},
		chatDashboard: {
			header: {
				isLogedIn: false,
				operators: [
					{ name: "Shapon Pal", avater: "" },
					{ name: "Shapon Pal2", avater: "" },
					{ name: "Shapon Pal3", avater: "" },
					{ name: "Shapon Pal4", avater: "" },
				],
				chatText: "Chat With",
			},
			todos: [],
			text: "",
			footer: {
				placeholder: "Type here....",
			},
		},
		chatButton: {
			buttonType: "chatICON",
		},
		chatIntro: {
			chatIntroType: "general",
		},
};

// export default createStore( (state, action) => (
// 	action && ACTIONS[action.type] ? ACTIONS[action.type](state, action) : state
// ), INITIAL);

export default createStore( (state, action) => (
	action && ACTIONS[action.type] ? ACTIONS[action.type](state, action) : state
), INITIAL, typeof devToolsExtension==='function' ? devToolsExtension() : undefined);
