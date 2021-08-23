import Link from 'next/link'
import { useState } from 'react';
import { IoChevronForwardOutline, IoPersonOutline } from 'react-icons/io5';
import { useGetCategories } from '../../customHooks/useGetCategories';
import Button from '../Button/Button';
import CurtainCategoriesMenu from './CurtainCategoriesMenu';
import CurtainMenuHeader from './CurtainMenuHeader/CurtainMenuHeader';

const CurtainMainMenu = ({
    data,
    menuStatus,
    closeFunction
}) => {       
    const [categoriesMenu, setCategoriesMenu] = useState(false)
    const categories = useGetCategories(data)

    return (
        <div className={`curtain__menu curtain__menu--bottom ${menuStatus ? 'curtain__menu--active' : ''}`}>
            <CurtainMenuHeader title="Main Menu" variant="close" closeFunction={closeFunction}/>
            <div className="space-y-8">
                <ul className="flex flex-col flex-grow text-base responsive">
                    <li className="flex items-center justify-between py-4 space-x-2 border-b border-gray-200">
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
                        <div className="text-xl">
                            <IoPersonOutline/>
                        </div>
                    </li>     
                </ul>
                <ul className="flex flex-col flex-grow text-base responsive">
                    <li onClick={closeFunction}>
                        <Link href='/'>
                            <div className="py-4 border-b border-gray-200 link-text link-text--primary">
                                Home
                            </div>    
                        </Link>
                    </li>
                    <li>
                        <div className="flex items-center justify-between w-full py-4 border-b border-gray-200 link-text link-text--primary" onClick={()=>setCategoriesMenu(true)}>
                            <span className="">Categories</span>
                            <IoChevronForwardOutline/>
                        </div>
                        <CurtainCategoriesMenu categories={categories} menuStatus={categoriesMenu} closeFunction={()=>setCategoriesMenu(false)}/>   
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default CurtainMainMenu
