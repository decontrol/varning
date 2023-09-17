type PageTitleProps = {
	text: string
}

const PageTitle = ({ text }: PageTitleProps) => {
	const classes = `header-md text-center text-2xl lg:text-4xl text-red-500 font-header mt-4 mb-0`
	return <h2 className={classes}>{text}</h2>
}
export default PageTitle
