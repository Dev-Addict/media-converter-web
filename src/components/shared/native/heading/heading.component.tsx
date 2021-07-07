import React, {DetailedHTMLProps, FC, HTMLAttributes} from 'react';

import styles from './heading.module.scss';
import {HeadingTag} from '../../../../types';
import {renderClasses} from '../../../../utils';

interface Props
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLHeadingElement>,
		HTMLHeadingElement
	> {
	tag?: HeadingTag;
	primary?: boolean;
	secondary?: boolean;
	danger?: boolean;
	safe?: boolean;
}

export const Heading: FC<Props> = ({
	tag = 3,
	primary,
	secondary,
	danger,
	safe,
	className,
	...props
}) => {
	const tagProps: DetailedHTMLProps<
		HTMLAttributes<HTMLHeadingElement>,
		HTMLHeadingElement
	> = {
		className: renderClasses(styles.heading, {
			[className || '']: Boolean(className),
			[styles.primary]: primary,
			[styles.secondary]: secondary,
			[styles.danger]: danger,
			[styles.safe]: safe,
		}),
		...props,
	};

	const Tag = `h${tag}`;

	return <Tag {...tagProps} />;
};
