import Link from "next/link"
import useTitleCase from "../../customHooks/useTitleCase"
import CurtainMenuHeader from "./CurtainMenuHeader/CurtainMenuHeader"

const CurtainCategoriesMenu = ({
    menuStatus,
    closeFunction,
    categories
}) => {
    return (
        <div className={`curtain__menu curtain__menu--right ${menuStatus ? 'curtain__menu--active' : ''}`}>
            <CurtainMenuHeader title="Categories" variant="close" closeFunction={closeFunction}/>
            <ul className="flex flex-col flex-grow text-base font-normal responsive">
                {
                    categories.map((category, index) => 
                        <li key={`mobileCategory${index+1}`}>
                            <Link href={`/categories/${category.replace(' ', '-')}`}>
                                <div className="py-4 border-b link-text link-text--primary">
                                    {useTitleCase(category)}
                                </div>
                            </Link>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default CurtainCategoriesMenu
