import React from 'react'
import { socialLinks } from '../data';
const SocialLinks = ({parentClass, itemClass}) => {
  return (
    <ul className={parentClass}>
          {socialLinks.map((social) => {
            const { id, href, target, icon } = social;
            return (
              <li key={id}>
                <a
                  href={href}
                  target={target}
                  rel="nonreferrer"
                  className={itemClass}
                >
                  <i className={icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
  )
}

export default SocialLinks
