import { h, render, Component } from "preact";
import { Provider } from "preact-redux";
import store from "./store/store";
import AppComponent from "./components/app";
import "./style";
// import firebase from './firebase';
//import events from './core/firebaseEvents';

// console.log(firebase);

// export default () => (
// 	<div class="chatWidgetEntryPoint">
// 		<Provider store={store}>
// 			<AppComponent />
// 		</Provider>
// 	</div>
// );



class App extends Component {
	
	render() {
		return (
			<div class="chatWidgetEntryPoint">
				<Provider store={store}>
					<AppComponent />
				</Provider>
			</div>
		);
	}
}

render(<App />, document.body);
