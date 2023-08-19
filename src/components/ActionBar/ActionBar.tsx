import { FormEvent, ChangeEvent } from 'react';
import styles from './ActionBar.module.css';

import { PlusCircle } from '@phosphor-icons/react';

interface IActionBarProps {
	onHandleNewTask: (event: FormEvent) => void;
	onHandleNewTaskText: (event: ChangeEvent<HTMLInputElement>) => void;
	newTaskText: string;
}

export function ActionBar({
	onHandleNewTask,
	onHandleNewTaskText,
	newTaskText,
}: IActionBarProps) {
	return (
		<form onSubmit={onHandleNewTask} className={styles.actionbar}>
			<input
				name="task"
				placeholder="New task..."
				value={newTaskText}
				onChange={onHandleNewTaskText}
				type="text"
				required
			/>
			<button type="submit">
				Create <PlusCircle />
			</button>
		</form>
	);
}
