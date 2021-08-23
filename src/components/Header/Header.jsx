import Link from 'next/link'
import { useEffect, useState } from 'react'
import { IoCartOutline, IoMenuOutline, IoPersonOutline, IoSearchOutline } from 'react-icons/io5'
import Button from '../Button/Button'
import CurtainMainMenu from '../CurtainMenu/CurtainMainMenu'
import CurtainSearchMenu from '../CurtainMenu/CurtainSearchMenu'


const Header = ({
    data
}) => {
    
    const [mainMenu, setMainMenu] = useState(false)
    const [searchMenu, setSearchMenu] = useState(false)
    
    useEffect(() => {
        document.body.style.overflow = mainMenu ?? searchMenu ? 'hidden' : ''   
    }) 

    return (
        <header className="sticky top-0 left-0 right-0 z-20 flex w-full">
            <div className=""></div>
            <div className="flex w-full space-x-2 bg-white">
                <div className="flex items-center h-16 space-x-4 transition duration-200 md:h-20 responsive">
                    {/* LOGO */}
                    <div className="flex items-center flex-grow">
                        <Link href="/">
                            <div className="text-3xl font-bold text-center cursor-pointer">RUBOX</div>
                        </Link>
                    </div>                   
                    {/* Menus */}
                    <ul className="flex items-center space-x-4">
                        <li>
                            <div className="relative link-text link-text--primary" onClick={()=>setSearchMenu(true)} >
                                <IoSearchOutline className="text-2xl"/>
                            </div>
                            <CurtainSearchMenu data={data} menuStatus={searchMenu} closeFunction={()=>setSearchMenu(false)} />
                        </li>
                        <li>
                            <Link href="/cart">
                                <div className="relative link-text link-text--primary">
                                    <IoCartOutline className="text-2xl"/>
                                    <div className="absolute flex items-center justify-center h-4 px-1 text-xs font-semibold text-right rounded-full -top-2 -right-2">0</div>
                                </div>
                            </Link>
                        </li>
                        <li className="lg:hidden">
                            <div className="relative link-text link-text--primary" onClick={()=>setMainMenu(true)}>
                                <IoMenuOutline className="text-4xl"/>
                            </div>
                            <CurtainMainMenu data={data} menuStatus={mainMenu} closeFunction={()=>setMainMenu(false)}/>         
                        </li>                      
                    </ul>
                    <div className="items-center justify-between hidden pl-4 space-x-2 border-l border-gray-400 lg:flex">
                        <div className="text-xl">
                            <IoPersonOutline/>
                        </div>
                        <ul className="flex items-center space-x-1">
                            <li>
                                <Link href='/login'>
                                    <div className="link-text link-text--primary">
                                        Login
                                    </div>    
                                </Link>
                            </li>
                            <li>/</li>
                            <li>
                                <Link href='/register'>
                                    <div className="link-text link-text--primary">
                                        Register
                                    </div>    
                                </Link>
                            </li>
                        </ul>    
                    </div>                 
                </div>
            </div>  
        </header>
    )
}

export default Header
 