import styles from './ActionBar.module.css';

import { PlusCircle } from '@phosphor-icons/react';

export function ActionBar() {
	return (
		<div className={styles.actionbar}>
			<input type="text" />
			<button type="submit">
				Create <PlusCircle />
			</button>
		</div>
	);
}
