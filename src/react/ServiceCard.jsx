import React from 'react'
import Button from './Button'

const ServiceCard = ({ logo, title, text }) => {
    return (
        <div className='max-w-[435px] p-4 flex 
        flex-col justify-center items-center'>
            <div className='max-w-[430px]'>
                <img
                    src={logo}
                    className='w-full pb-5'
                />
            </div>
            <div className='text-center'>
                <h3 className='uppercase text-mainColor
            text-2xl font-normal tracking-5px pb-6'>
                    {title}
                </h3>
                <p className='text-mainColor font-normal
                text-xs tracking-3px uppercase leading-5 pb-4'>
                    {text}
                </p>
            </div>
            <Button
                label='Learn more'
                widthOne={'px-[30px]'}
            />
        </div>
    )
}

export default ServiceCard
