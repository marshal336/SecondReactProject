import { bgVelocity } from "../assets/img/images"
import Button from "./Button"


const VelocityComponent = () => {
    return (
        <div className='flex justify-center items-center
         flex-col bg-slate-600'>
            <h1 className='text-center text-mainColor
            font-normal text-6xl tracking-4px
            font-OpenSans leading-[60px] pt-[184px] pb-[109px] 
            max-lg:pt-[130px] max-lg:pb-[50px] max-lg:text-3xl max-sm:text-2xl
            max-sm:leading-6 max-sm:pt-14'>
                This is Velocity
            </h1>
            <div className="flex gap-5 max-lg:flex-col-reverse
            max-lg:justify-center pb-[200px]">
                <Button
                    label='sign up'
                    background={'bg-colorThree'}
                    widthTwo={'px-[20px]'}
                />
                <Button
                    label='Learn more'
                    widthOne={'px-[30px]'}
                />
            </div>
        </div>
    )
}

export default VelocityComponent
