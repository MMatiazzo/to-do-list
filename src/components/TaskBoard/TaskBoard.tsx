import { useState, ChangeEvent, FormEvent } from 'react';
import { ActionBar } from '../ActionBar/ActionBar';
import { TaskCard } from '../TaskCard/TaskCard';
import styles from './TaskBoard.module.css';

interface ITaskState {
	active: boolean;
	text: string;
}

export function TaskBoard() {
	const [tasks, setTasks] = useState<ITaskState[]>([]);
	const [newTaskText, setNewTaskText] = useState('');

	function handleNewTask(event: FormEvent) {
		event.preventDefault();

		setTasks([...tasks, { text: newTaskText, active: false }]);

		setNewTaskText('');
	}

	function handleNewTaskText(event: ChangeEvent<HTMLInputElement>) {
		event.target.setCustomValidity('');
		setNewTaskText(event.target.value);
	}

	function changeTaskStatus(task: string) {
		const newTaskArray = tasks.map(({ text, active }) => {
			return { text, active: task === text ? !active : active };
		}, []);

		setTasks(newTaskArray);
	}

	function deleteTask(task: string) {
		const filteredTasks = tasks.filter(({ text }) => text !== task);
		setTasks(filteredTasks);
	}

	function handleTaskStatiscts() {
		const totalTasks = tasks.length;

		if (!totalTasks) return `0`;

		const concludedTasks = tasks.filter(({ active }) => active).length;
		return `${concludedTasks} of ${totalTasks}`;
	}

	return (
		<>
			<ActionBar
				onHandleNewTask={handleNewTask}
				onHandleNewTaskText={handleNewTaskText}
				newTaskText={newTaskText}
			/>
			<div className={styles.taskBoard}>
				<div className={styles.taskLogs}>
					<p>
						Created Tasks{' '}
						<span className={styles.quantity}>{tasks.length}</span>
					</p>
					<p>
						Concluded Tasks{' '}
						<span className={styles.quantity}>{handleTaskStatiscts()}</span>
					</p>
				</div>
				<div className={styles.taskCards}>
					{tasks.map(({ text, active }) => (
						<TaskCard
							key={text}
							task={text}
							active={active}
							onChangeTaskStatus={changeTaskStatus}
							onDeleteTask={deleteTask}
						/>
					))}
				</div>
			</div>
		</>
	);
}
