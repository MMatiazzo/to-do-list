import { Trash } from '@phosphor-icons/react';
import styles from './TaskCard.module.css';

interface ITaskCard {
	active: boolean;
	task: string;
	handleActiveTask: (task: string) => void;
}

export function TaskCard({ task, active, handleActiveTask }: ITaskCard) {
	return (
		<div className={styles.taskCard}>
			<label className={styles.checkbox}>
				<input
					onChange={() => handleActiveTask(task)}
					checked={active}
					type="checkbox"
				/>
			</label>
			<p className={active ? styles.taskConcludedText : ''}>{task}</p>
			<Trash />
		</div>
	);
}
