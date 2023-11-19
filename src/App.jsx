import AboutUsComponent from "./react/AboutUsComponent"
import CopyComponents from "./react/CopyComponents"
import HeaderComponents from "./react/HeaderComponents"
import ServiceCpomponent from "./react/ServiceCpomponent"
import TabComponents from "./react/TabComponents"
import VelocityComponent from "./react/VelocityComponent"
import WhatComponent from "./react/WhatComponent"

function App() {
  return (
    <section>
      <HeaderComponents/>
      <VelocityComponent/>
      <WhatComponent/>
      <ServiceCpomponent/>
      <TabComponents/>
      <AboutUsComponent/>
      <CopyComponents/>
    </section>
  )
}

export default App
