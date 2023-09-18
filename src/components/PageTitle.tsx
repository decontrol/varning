type PageTitleProps = {
	text: string
	size: number
}

const PageTitle = ({ text, size }: PageTitleProps) => {
	const classes = `header-md text-center leading-10 text-2xl md:text-${size}xl text-red-500 font-header mt-4 mb-3`
	return <h2 className={classes}>{text}</h2>
}
export default PageTitle
