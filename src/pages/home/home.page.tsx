import React, {useEffect, useRef} from 'react';
import {useHistory} from 'react-router-dom';

import {Logo} from '../../assets';
import {
	Button,
	Filler,
	Heading,
	Link,
	MediasInput,
	Page,
} from '../../components';
import {useMedias} from '../../hooks';
import {HeadingTag, Size} from '../../types';
import styles from './home.module.scss';

export const HomePage = () => {
	const history = useHistory();

	const mediasInputRef = useRef<HTMLInputElement>(null);

	const {medias} = useMedias();

	const onSelectFilesClick = () => () => {
		mediasInputRef.current?.click();
	};

	useEffect(() => {
		if (medias.length) history.push('/convert');
	}, [medias]);

	return (
		<Page className={styles.container}>
			<MediasInput ref={mediasInputRef} />
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
			<Button size={Size.BIG} primary onClick={onSelectFilesClick()}>
				Select Files
			</Button>
			<Filler />
			<Link to="/formats" size={Size.LARGE} primary>
				Supported Formats
			</Link>
		</Page>
	);
};
