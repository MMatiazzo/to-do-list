import { Trash } from '@phosphor-icons/react';
import styles from './TaskCard.module.css';

export function TaskCard() {
	return (
		<div className={styles.taskCard}>
			<label className={styles.checkbox}>
				<input type="checkbox" />
			</label>
			<p>TextoTex toTextoTextoTextoT extoTextoTextoTextoTextoT</p>
			<Trash />
		</div>
	);
}
