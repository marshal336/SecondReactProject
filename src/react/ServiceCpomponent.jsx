import ServiceCard from "./ServiceCard"
import { service } from "./data"


const ServiceCpomponent = () => {
    return (
        <div className="flex flex-col pt-[77px] bg-bg2">
            <div className="flex flex-col text-center gap-4">
                <h3 className="uppercase text-3xl font-normal
                tracking-5px font-OpenSans text-mainColor">
                    services
                </h3>
                <p className="uppercase font-normal text-base
                text-mainColor pb-14">
                    This is some text inside of a div block.
                </p>
            </div>
            <div className="flex justify-center
            items-center flex-wrap pb-24">
                {service.map(service => (
                    <ServiceCard
                        logo={service.logo}
                        title={service.title}
                        text={service.text}
                    />
                ))}
            </div>
        </div>
    )
}

export default ServiceCpomponent
