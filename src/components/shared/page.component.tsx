import React, {FC, DetailedHTMLProps, HTMLAttributes} from 'react';

interface Props
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Page: FC<Props> = ({children, ...props}) => {
	return <div {...props}>{children}</div>;
};
