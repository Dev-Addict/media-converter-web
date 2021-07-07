import React, {FC, useCallback, useState} from 'react';

import {MediasContext} from './medias.context';
import {Media} from '../../../types';

export const MediasProvider: FC = ({children}) => {
	const [medias, setMedias] = useState<Media[]>([]);

	const addMedias = useCallback(
		(...medias: Media[]) =>
			setMedias((prevMedias) => [...prevMedias, ...medias]),
		[]
	);
	const removeMedia = useCallback(
		(id: string) =>
			setMedias((medias) => medias.filter((media) => media.id !== id)),
		[]
	);

	return (
		<MediasContext.Provider value={{medias, addMedias, removeMedia}}>
			{children}
		</MediasContext.Provider>
	);
};
