import React from 'react'
import { footerAllLinks, footerSocial, footerUseFullLinks } from './data'

const AboutUsComponent = () => {
    return (
        <div className='flex max-container pb-9
    justify-center items-center flex-wrap gap-5 max-md:flex-col'>
            {footerAllLinks.map(link => (
                <div className='flex flex-col gap-6'>
                    <h3 className='text-xl font-normal 
                    tracking-4px uppercase font-OpenSans text-colorTwo'>
                        {link.title}
                    </h3>
                    <p className='max-w-[293px] leading-6
                     text-colorTwo text-sm'>{link.text}
                    </p>
                </div>
            ))}
            {footerUseFullLinks.map(link => (
                <div className='flex-1 max-w-[250px]'>
                    <h3 className='text-xl font-normal 
                    tracking-4px uppercase font-OpenSans text-colorTwo pb-5'>
                        {link.title}
                    </h3>
                    <ul className='flex flex-col gap-2'>
                        {link.links.map(link => (
                            <li className=' border-b-[1px] border-slate-500'>
                                <a
                                    href=''
                                    className='
                                text-colorTwo text-sm leading-6'>
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
            {footerSocial.map(item => (
                <div className='flex-1 max-w-[270px]'>
                    <h3 className='text-xl font-normal 
                    tracking-4px uppercase font-OpenSans text-colorTwo pb-3'>
                        {item.title}
                    </h3>
                    <ul className='flex flex-col gap-2'>
                        {item.links.map(link => (
                            <li className=' border-b-[1px] border-slate-500'>
                                <a
                                    href=''
                                    className='text-colorTwo text-sm flex gap-3 leading-6'>
                                    <img
                                        src={link.icon}
                                    />
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default AboutUsComponent
