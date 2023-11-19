import React from 'react'

const TabButton = ({ title }) => {
    return (
        <div className='px-8 hover:bg-bg bg-colorTwo 
        max-w-[200px] rounded-4px'>
            <a
                href='/'
                className='text-base font-normal
        font-OpenSans uppercase tracking-2px text-mainColor'>
                {title}
            </a>
        </div>
    )
}

export default TabButton
