type PageTitleProps = {
	text: string
	size: number
}

const PageTitle = ({ text, size }: PageTitleProps) => {
	const classes = `text-3xl lg:text-${size}xl text-red-500 mb-4`
	return <h2 className={classes}>{text}</h2>
}
export default PageTitle
