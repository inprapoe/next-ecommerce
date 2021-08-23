import Image from "next/image"
import ProductList from "../ProductList/ProductList"

const ProductFeed = ({ products }) => {
    return (
        <section className="py-20 lg:py-24">
            <div className="flex flex-col space-y-10 lg:space-y-16 ">

                <ProductList products={products} title="Trending Products" subtitle="Top View In This Week" slice={[0, 4]}/>
                
                <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-4 md:gap-6 lg:gap-8 responsive md:grid-cols-2">
                    <div className="w-full bg-gray-100 pt-120p lg:pt-60p lg:col-span-2"></div>
                    <div className="w-full bg-gray-100 pt-120p lg:pt-60p lg:col-span-2"></div>
                    <div className="w-full bg-gray-100 pt-120p lg:pt-60p"></div>
                    <div className="w-full bg-gray-100 pt-120p lg:pt-60p"></div>
                    <div className="w-full bg-gray-100 md:col-span-2 pt-120p md:pt-60p"></div>
                </div>

                <div className="relative pt-60p md:pt-50p lg:pt-40p 2xl:pt-35p">
                    <div className="absolute inset-0">
                        <Image className="object-cover object-center w-full h-full" src={`/images/banner/banner2.jpg`}layout="fill"/>
                    </div>
                </div>
                
                <ProductList products={products} title="Best Seller Product" subtitle="Top View In This Week" slice={[4, products.length]}/>
               
            </div>            
        </section>
    )
}

export default ProductFeed
