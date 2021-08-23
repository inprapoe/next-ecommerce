import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import CurrencyFormat from "react-currency-format"
import { IoStar } from "react-icons/io5"
import { useGetRandomNumber } from "../../../customHooks/useGetRandomNumber"
import useMapArray from "../../../customHooks/useMapArray"
import useTitleCase from "../../../customHooks/useTitleCase"
import ProductCardActionLarge from "./ProductCardAction/ProductCardActionLarge"
import ProductCardActionSmall from "./ProductCardAction/ProductCardActionSmall"

const MAX_RATING = 5;
const MIN_RATING = 1;

const MAX_DISCOUNT = 50;
const MIN_DISCOUNT = 0;

const ProductCard = ({product}) => {
    
    const [price] = useState(
        product.price
    ) 
    const [rating] = useState(
        useGetRandomNumber(MIN_RATING, MAX_RATING)
    )
    const [discount] = useState(
        rating > 3 ? useGetRandomNumber(MIN_DISCOUNT, MAX_DISCOUNT) : 0
    )
    

    

    return (
        <div id={`product${product.id}`} className="relative flex flex-col w-full group">
            <div className="relative w-full mb-4 pt-130p">
                
                <Link href={`/product/${product.id}`}>
                    <div className="absolute inset-0 flex items-center justify-center cursor-pointer">
                        <Image src={product.image} height={200} width={200} objectFit="contain"/>
                    </div>
                </Link>

                <ProductCardActionSmall/>

                <ProductCardActionLarge/>

                {
                    discount ? (
                        <div className="absolute px-2 py-1 text-sm font-medium bg-yellow-300 rounded-md left-6 top-6">
                            Sale
                        </div>
                    ) : ''
                }

            </div>
            <div className="flex flex-col space-y-2">
                <Link href={`/categories/${product.category.replace(' ', '-').replace(`'`, '')}`}>
                    <span className="text-sm text-gray-500 link-text link-text--secondary">{useTitleCase(product.category)}</span>
                </Link>
                <Link href={`/product/${product.id}`}>
                    <h4 className="font-bold leading-snug link-text link-text--primary lc-2l">{product.title}</h4>
                </Link>
                <div className="flex flex-col items-start flex-grow w-full space-y-1">
                    {
                        discount > 0 ? (
                           <div className="flex items-center space-x-2">
                                <div className="px-2 py-1 text-xs font-semibold text-white bg-gray-900 rounded-md">
                                    -{discount}%
                                </div>
                                <div >{
                                     <CurrencyFormat className="text-base text-gray-500 line-through" value={price} decimalScale={2} prefix={'$'}/>
                                }</div>
                           </div>
                        ) : ''
                    }                    
                    <span className="font-medium">{
                        <CurrencyFormat value={ discount ? price - (price * discount / 100) : price} decimalScale={2} prefix={'$'}/>
                    }</span>
                </div>
                <div className="flex items-center text-sm text-yellow-400 space-x-0.5">
                    {useMapArray(rating, <IoStar/>)}
                </div>
            </div>
        </div>
    )
}

export default ProductCard
