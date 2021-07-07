import React from 'react';

import {Filler, Heading, Page} from '../../../components';
import {InSearchIllustration} from '../../../assets';
import styles from './not-found.module.scss';

export const NotFoundPage = () => {
	return (
		<Page className={styles.container}>
			<div className={styles.illustration}>
				<InSearchIllustration />
			</div>
			<Filler flex={0} minHeight={20} />
			<Heading>Page Not Found!!!</Heading>
		</Page>
	);
};
