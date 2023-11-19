
const BurgerMenuButton = () => {

    return (
        <div className="hidden max-sm:block">
            <div className='flex justify-center items-center 
    w-9 h-4 relative'>
                <span className='absolute top-0 bg-black rounded-lg w-7 h-[2px]'></span>
                <span className='absolute bg-black rounded-lg w-7 h-[2px]'></span>
                <span className='absolute bottom-0 bg-black rounded-lg w-7 h-[2px]'></span>
            </div>
        </div>

    )
}

export default BurgerMenuButton
