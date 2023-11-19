import BurgerMenuButton from "./BurgerMenuButton"

const HeaderComponents = () => {
    return (
        <header className="w-full bg-white relative z-10">
            <div className="max-container flex justify-between items-center py-3">
                <h1 className="uppercase font-OpenSans 
                text-2xl text-colorThree tracking-4px">
                    Velocity
                </h1>
                <ul className="flex gap-10 max-sm:hidden">
                    <li>
                        <a
                            className="text-base font-normal
                        leading-normal hover:text-colorThree"
                            href="/">Home
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-base font-normal
                        leading-normal hover:text-colorThree"
                            href="/">Contact</a>
                    </li>
                </ul>
                <BurgerMenuButton/>
            </div>
        </header>
    )
}

export default HeaderComponents
