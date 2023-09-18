import { ReactNode } from 'react'

type PageTitleProps = {
	size: number
	children: ReactNode
}

const PageTitle = ({ size, children }: PageTitleProps) => {
	const classes = `header-md text-center leading-10 text-2xl md:text-${size}xl md:leading-[64px] text-red-500 font-header mt-4 mb-3`
	return <h2 className={classes}>{children}</h2>
}
export default PageTitle
