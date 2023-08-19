import { TaskCard } from '../TaskCard/TaskCard';
import styles from './TaskBoard.module.css';

export function TaskBoard() {
	return (
		<div className={styles.taskBoard}>
			<div className={styles.taskLogs}>
				<p>
					Created Tasks <span className={styles.quantity}>5</span>
				</p>
				<p>
					Concluded Tasks <span className={styles.quantity}>2 of 5</span>
				</p>
			</div>
			<div className={styles.taskCards}>
				<TaskCard />
				<TaskCard />
				<TaskCard />
				<TaskCard />
			</div>
		</div>
	);
}
