import React, {ChangeEventHandler} from 'react';

import {useMedias} from '../../../hooks';
import {Media} from '../../../types';

export const MediasInput = React.forwardRef<HTMLInputElement>((_, ref) => {
	const {addMedias} = useMedias();

	const onChange =
		(): ChangeEventHandler<HTMLInputElement> =>
		({target: {files}}) =>
			files && addMedias(...Array.from(files).map((file) => new Media(file)));

	return (
		<input
			style={{display: 'none'}}
			type="file"
			accept="image/*,video/*,audio/*"
			multiple
			onChange={onChange()}
			ref={ref}
		/>
	);
});
