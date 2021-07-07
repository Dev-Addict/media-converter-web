import {createContext} from 'react';

import {Media} from '../../../types';

export interface MediasContextType {
	medias: Media[];
	addMedias(...media: Media[]): void;
	removeMedia(id: string): void;
}

export const MediasContext = createContext<MediasContextType>({
	medias: [],
	addMedias: () => {},
	removeMedia: () => {},
});
