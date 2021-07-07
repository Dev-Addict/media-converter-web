import React from 'react';

import {Logo} from '../../assets';
import {Button, Filler, Heading, Link, Page} from '../../components';
import {HeadingTag, Size} from '../../types';
import styles from './home.module.scss';

export const HomePage = () => {
	return (
		<Page className={styles.container}>
			<Filler />
			<div className={styles.logo}>
				<Logo />
			</div>
			<Heading tag={HeadingTag.H1}>Media Converter Web</Heading>
			<Heading tag={HeadingTag.H4}>
				Convert your videos, images, and audios types right on your computer.
				without sending them to clouds.
			</Heading>
			<Heading tag={HeadingTag.H3} safe>
				Fast and Secure
			</Heading>
			<Filler flex={0} minHeight={20} />
			<Button size={Size.BIG} primary>
				Select Files
			</Button>
			<Filler />
			<Link to="/formats" size={Size.LARGE} primary>
				Supported Formats
			</Link>
		</Page>
	);
};
