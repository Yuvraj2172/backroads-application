import React from 'react'
import { services } from '../data'
const Service = () => {
    // const {icon ,title , slogan } = props
    
  return (
    <div className="section-center services-center">
        {services.map((service)=>{
          const {id , icon , title , slogan} = service;
          return (
            <article className="service">
            <span className="service-icon"><i className={icon} ></i></span>
            <div className="service-info">
              <h4 className="service-title">{title}</h4>
              <p className="service-text">
                {slogan}
              </p>
            </div>
          </article>
          );
        })}
      </div>
    
  )
}

export default Service
