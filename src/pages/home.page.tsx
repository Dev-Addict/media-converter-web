import React from 'react';

import {Button, Page} from '../components';
import {Size} from '../types';
import styles from './home.module.scss';

export const HomePage = () => {
	return (
		<Page className={styles.container}>
			<Button size={Size.BIG} primary>
				Select Media
			</Button>
		</Page>
	);
};
