import { Trash } from '@phosphor-icons/react';
import styles from './TaskCard.module.css';

interface ITaskCard {
	active: boolean;
	task: string;
	onChangeTaskStatus: (task: string) => void;
	onDeleteTask: (task: string) => void;
}

export function TaskCard({
	task,
	active,
	onChangeTaskStatus,
	onDeleteTask,
}: ITaskCard) {
	function handleTaskStatus() {
		onChangeTaskStatus(task);
	}

	function handleDeleteTask() {
		onDeleteTask(task);
	}

	return (
		<div className={styles.taskCard}>
			<label className={styles.checkbox}>
				<input onChange={handleTaskStatus} checked={active} type="checkbox" />
			</label>
			<p className={active ? styles.taskConcludedText : ''}>{task}</p>
			<button title="Delete Task">
				<Trash onClick={handleDeleteTask} />
			</button>
		</div>
	);
}
