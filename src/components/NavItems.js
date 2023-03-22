import React from "react";
const NavItems = (props) => {
  {
    const {id , href , text} = props;
      return (
        <li key={id}>
          <a href={href} className="nav-link">
            {" "}
            {text}{" "}
          </a>
        </li>
      );

  }
};

export default NavItems;
