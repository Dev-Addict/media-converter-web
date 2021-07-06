import React from 'react';

import {Logo} from '../../../assets';
import {GitHub} from './github.component';
import styles from './header.module.scss';

export const Header = () => {
	return (
		<div className={styles.container}>
			<div className={styles.logo}>
				<div>MC</div>
				<Logo />
			</div>
			<GitHub />
		</div>
	);
};
