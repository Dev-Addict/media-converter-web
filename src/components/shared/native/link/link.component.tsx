import React, {DetailedHTMLProps, FC, HTMLAttributes} from 'react';
import {Link as NativeLink} from 'react-router-dom';

import styles from './link.module.scss';
import {renderClasses} from '../../../../utils';
import {Size} from '../../../../types';

interface Props
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	to: string;
	size?: Size;
	primary?: boolean;
	secondary?: boolean;
	danger?: boolean;
	safe?: boolean;
}

export const Link: FC<Props> = ({
	children,
	className,
	danger,
	primary,
	safe,
	secondary,
	size,
	to,
	...props
}) => {
	return (
		<div
			className={renderClasses(styles.container, {
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
			})}
			{...props}>
			<NativeLink to={to}>{children}</NativeLink>
		</div>
	);
};
