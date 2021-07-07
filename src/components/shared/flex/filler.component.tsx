import React, {DetailedHTMLProps, FC, HTMLAttributes} from 'react';

interface Props
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	flex?: number;
	minHeight?: number;
	minWidth?: number;
}

export const Filler: FC<Props> = ({
	flex = 1,
	minHeight,
	minWidth,
	style,
	...props
}) => {
	return (
		<div
			style={{
				flex,
				minHeight,
				minWidth,
				...style,
			}}
			{...props}
		/>
	);
};
