import { IoArrowBack, IoCloseOutline } from "react-icons/io5"

const CurtainMenuHeader = ({
    title,
    variant,
    closeFunction
}) => {
    return (
        <div className="flex flex-col items-center py-4 md:py-8 lg:py-12 responsive">
            <div className="flex justify-end flex-grow w-full text-2xl text-gray-500 cursor-pointer" onClick={variant === 'close' ? closeFunction :''}>
                {
                    variant === 'close' 
                    ?<IoCloseOutline/>
                    :<IoArrowBack/>
                }
            </div>
            <h3 className="text-2xl font-semibold lg:text-3xl">{title}</h3>
        </div>
    )
}

export default CurtainMenuHeader
