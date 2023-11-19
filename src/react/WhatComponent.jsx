
import TwoCardSection from "./TwocardSection"
import { sectionTwoCard } from "./data"


const WhatComponent = () => {
    return (
        <div className='pt-20 flex flex-col max-container'>
            <div className="flex flex-col justify-center
       items-center gap-4 pb-[62px] max-sm:text-center">
                <h1 className="uppercase text-colorTwo
                text-3xl font-normal tracking-5px">
                    what we do
                </h1>
                <p className="text-colorTwo font-normal
                text-base tracking-3px uppercase leading-5">
                    This is some text inside of a div block.
                </p>
            </div>
            <div className="flex justify-center flex-wrap gap-5 pb-[80px]">
                {sectionTwoCard.map(card => (
                    <TwoCardSection
                        logo={card.logo}
                        title={card.title}
                        text={card.text}
                    />
                ))}
            </div>
        </div>
    )
}

export default WhatComponent
