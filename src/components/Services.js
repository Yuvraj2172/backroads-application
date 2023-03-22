import React from 'react'
import Title from './Title'
import Service from './Service'
import { services } from '../data'
const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title ={"our"} subTitle={"services"}/>
      <div className="section-center services-center">
      {/* <Service   icon={"fas fa-wallet fa-fw"} title={"saving money"} slogan={"Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia."} /> */}
        {services.map((service)=>{
          const {id , icon , title , slogan} = service;
          return (
            <Service key = {id}  icon={icon} title={title} slogan={slogan} />
          );
        })}
        {/* <Service   icon={"fas fa-wallet fa-fw"} title={"saving money"} slogan={"Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia."} /> */}
        
        {/* <Service   icon={"fas fa-tree fa-fw"} title={"endless hiking"} slogan={"Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia."} />

        <Service   icon={"fas fa-socks fa-fw"} title={"amazing comfort"} slogan={"Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia."} /> */}
      </div>
    </section>
  )
}

export default Services
