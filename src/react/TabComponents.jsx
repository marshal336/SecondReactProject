import React from 'react'
import { tabSectionButton } from './data'
import TabButton from './TabButton'
import { bgHuman } from '../assets/img/images'

const TabComponents = () => {
    return (
        <div className='max-container pt-20 pb-24'>
            <div className="flex flex-col text-center gap-4">
                <h3 className="uppercase text-3xl font-normal
                tracking-5px font-OpenSans text-colorTwo max-sm:text-xl">
                    Tab Section
                </h3>
                <p className="uppercase font-normal text-base
                text-colorTwo pb-14 tracking-3px">
                    This is some text inside of a div block.
                </p>
            </div>
            <div className='flex gap-5 justify-center items-center 
            flex-wrap pb-14'>
                {tabSectionButton.map(btn => (
                    <TabButton
                        title={btn.title}
                    />
                ))}
            </div>
            <div className='pb-4'>
                <img
                    src={bgHuman}
                    className='w-full'
                />
            </div>
            <div className="flex flex-col text-center gap-4">
                <h3 className="uppercase text-3xl font-normal
                tracking-5px font-OpenSans text-colorTwo max-sm:text-xl">
                    Some Title Here
                </h3>
                <p className="font-normal text-base
                text-colorTwo pb-14 tracking-3px max-w-[709px] m-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                </p>
            </div>
        </div>
    )
}

export default TabComponents
