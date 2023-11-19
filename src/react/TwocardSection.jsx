
const TwoCardSection = ({ logo, title, text }) => {
    return (
        <div className="flex flex-col justify-center items-centers
        border border-gray-200 text-center 
        max-w-[300px] p-4 rounded-4px">
            <div className="pt-[36px]">
                <img
                    src={logo}
                    width={94}
                    height={94}
                    className='bg-cover m-auto pb-[19px]'
                />
            </div>
            <h4 className='text-colorTwo tracking-5px
            text-2xl font-normal font-OpenSans leading-8
            pb-[14px]'>
                {title}
            </h4>
            <p className="text-base font-normal
            font-OpenSans text-colorOne">
                {text}
            </p>
        </div>
    )
}

export default TwoCardSection
