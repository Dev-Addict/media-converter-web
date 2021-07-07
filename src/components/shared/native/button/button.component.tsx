import React, {DetailedHTMLProps, FC, HTMLAttributes} from 'react';

import {renderClasses} from '../../../../utils';
import styles from './button.module.scss';
import {Size} from '../../../../types';

interface Props
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	size?: Size;
	primary?: boolean;
	secondary?: boolean;
	danger?: boolean;
	invert?: boolean;
	safe?: boolean;
}

export const Button: FC<Props> = ({
	className,
	size,
	primary,
	secondary,
	danger,
	invert,
	safe,
	...props
}) => {
	return (
		<button
			className={renderClasses(styles.button, {
				[className || '']: Boolean(className),
				[styles.mini]: size === Size.MINI,
				[styles.tiny]: size === Size.TINY,
				[styles.small]: size === Size.SMALL,
				[styles.medium]: size === Size.MEDIUM,
				[styles.large]: size === Size.LARGE,
				[styles.big]: size === Size.BIG,
				[styles.huge]: size === Size.HUGE,
				[styles.massive]: size === Size.MASSIVE,
				[styles.primary]: primary,
				[styles.secondary]: secondary,
				[styles.danger]: danger,
				[styles.safe]: safe,
				[styles.invert]: invert,
			})}
			{...props}
		/>
	);
};
