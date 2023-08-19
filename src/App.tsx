import { ActionBar } from './components/ActionBar/ActionBar';
import { Header } from './components/Header/Header';
import { TaskBoard } from './components/TaskBoard/TaskBoard';

import './global.css';

function App() {
	return (
		<>
			<Header />
			<ActionBar />
			<TaskBoard />
		</>
	);
}

export default App;
