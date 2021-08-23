import { IoCartOutline, IoHeartOutline, IoShareSocialOutline } from "react-icons/io5"
import Button from "../../../Button/Button"

const ProductCardActionLarge = () => {
    return (
        <>
            <div className="absolute top-0 right-0 flex-col items-end justify-between hidden p-6 text-2xl transition duration-300 opacity-0 group-hover:opacity-100 lg:flex">
                <div className="flex flex-col space-y-2">
                    <Button className="text-gray-500 shadow" buttonSize='nav' buttonColor="white-yellow" title="Add to Favorite">
                        <IoHeartOutline/>
                    </Button>
                    <Button className="text-gray-500 shadow" buttonSize='nav' buttonColor="white-yellow" title="Share">
                        <IoShareSocialOutline/>
                    </Button>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 flex-col items-end justify-between hidden p-6 text-2xl transition duration-300 opacity-0 group-hover:opacity-100 lg:flex">
                <Button className="w-full transition duration-300 transform translate-y-2 group-hover:translate-y-0" buttonColor="black">
                    <IoCartOutline className="mr-2 text-xl"/>
                    <span>Add to Cart</span>
                </Button>
            </div>
        </>
    )
}

export default ProductCardActionLarge
