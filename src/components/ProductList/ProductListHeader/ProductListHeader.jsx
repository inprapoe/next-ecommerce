const ProductListHeader = ({
    title,
    subtitle
}) => {
    return (
        <div className="flex flex-col items-center justify-center flex-grow space-y-1 lg:space-y-2">
            <h2 className="text-2xl font-semibold lg:text-3xl">{title || 'Title Here'}</h2>
            {
                subtitle && (
                    <h3 className="text-gray-500">{subtitle || 'Subtitle Here'}</h3>
                )
            }
        </div>
    )
}

export default ProductListHeader
