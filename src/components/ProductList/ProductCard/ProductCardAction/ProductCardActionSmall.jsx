import { IoCartOutline, IoHeartOutline } from "react-icons/io5"
import Button from "../../../Button/Button"

const ProductCardActionSmall = () => {
    return (
        <div className="absolute bottom-0 left-0 right-0 flex justify-center p-2 space-x-2 text-xl lg:hidden">
            <Button className="text-gray-500 shadow" buttonSize='nav' buttonColor="white">
                <IoHeartOutline/>
            </Button>
            <Button className="text-gray-500 shadow" buttonSize='nav' buttonColor="white">
                <IoCartOutline/>
            </Button>
        </div>
    )
}

export default ProductCardActionSmall
