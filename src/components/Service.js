import React from 'react'

const Service = (props) => {
    const {icon ,title , slogan } = props
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
  )
}

export default Service
