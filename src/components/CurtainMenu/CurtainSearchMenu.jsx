import { useEffect, useRef, useState } from "react"
import { IoCloseOutline, IoSearchOutline } from "react-icons/io5"
import CurtainMenuHeader from "./CurtainMenuHeader/CurtainMenuHeader"

const CurtainSearchMenu = ({
    data,
    menuStatus,
    closeFunction
}) => {
    const [searchInputValue, setSearchInputValue] = useState('')
    const searchInput = useRef(null)
    
    // INPUT VALUE HANDLER
    const searchHandler = (e) => {
        setSearchInputValue(e.target.value)
    }

    // BACK BUTTON HANDLER
    const backFunction = (closeFunction) => {
        setSearchInputValue('')
        closeFunction()
    }

    useEffect(() => {
        if(menuStatus) {
            searchInput.current.focus()        
        }
    })

    return (
        <div className={`curtain__menu curtain__menu--top ${menuStatus ? 'curtain__menu--active' : ''}`}>
            <CurtainMenuHeader title="Search" variant="close" closeFunction={()=>backFunction(closeFunction)}/>
            <form className="responsive">
                <div className="relative flex items-center flex-grow h-16 max-w-3xl mx-auto space-x-2">
                    <input className="flex flex-grow h-12 px-2 pr-12 text-sm border-b border-gray-300 md:text-base" placeholder="Search Products..." type="text" value={searchInputValue} ref={searchInput} onChange={(e) => searchHandler(e)} />
                    <div className="absolute right-0 flex items-center space-x-3 text-xl text-gray-500">
                        {
                            searchInputValue.length > 0 ? (
                                <div className="text-base text-red-600" onClick={()=>setSearchInputValue('')}>
                                    <IoCloseOutline/>
                                </div>
                            ) : ''
                        }
                        <IoSearchOutline/>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CurtainSearchMenu
