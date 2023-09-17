type PageTitleProps = {
	text: string
	size: number
}

const PageTitle = ({ text, size }: PageTitleProps) => {
	const classes = `header-md text-center text-2xl lg:text-${size}xl text-red-500 font-header mt-4 mb-0`
	return <h2 className={classes}>{text}</h2>
}
export default PageTitle
