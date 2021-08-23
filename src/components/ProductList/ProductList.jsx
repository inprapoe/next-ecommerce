import ProductCard from "./ProductCard/ProductCard"
import ProductListHeader from "./ProductListHeader/ProductListHeader"

const ProductList = ({
    title, 
    subtitle,
    products,
    slice = []
}) => {
    console.log(slice, 'slice');
    return (
        <div className="relative flex flex-col flex-grow-0 space-y-8 responsive">
            <div className="flex flex-col">
                <ProductListHeader title={title} subtitle={subtitle}/>
            </div>
            <ul className="grid grid-cols-2 overflow-x-hidden gap-x-2 gap-y-4 md:gap-x-4 md:gap-y-6 lg:grid-cols-4 lg:gap-x-6 lg:gapy-8">
                {
                    products.slice(...slice).map((product, index) => 
                        <li key={`${title}${index+1}`}>
                            {
                                <ProductCard product={product}/>
                            }
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default ProductList
