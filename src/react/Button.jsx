
const Button = ({ widthOne, widthTwo, background, backgroundT, label }) => {
    return (
        <a
            href="/"
            className={`py-3 text-center rounded-4px cursor-pointer
            ${widthTwo
                    ? `${widthTwo} ${background} hover:bg-sky-600`
                    : `${widthOne} ${backgroundT} border hover:bg-slate-500`
                }`}>
            <p className="uppercase text-base 
        leading-5 tracking-2px text-mainColor">
                {label}
            </p>
        </a>
    )
}

export default Button
