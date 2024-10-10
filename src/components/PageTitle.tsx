import { ReactNode } from 'react';

type PageTitleProps = {
	children: ReactNode;
};

const PageTitle = ({ children }: PageTitleProps) => {
	const classes = `header-md text-center leading-10 text-2xl md:text-3xl md:leading-[64px] text-vgreylight font-header mt-4 mb-3`;
	return <h2 className={classes}>{children}</h2>;
};
export default PageTitle;
