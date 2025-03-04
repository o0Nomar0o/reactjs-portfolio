import React from "react";
import { useLenis } from "lenis/react";

const NavItems = ({ items, style }) => {
  const lenis = useLenis();

  const handleClick = (event, id) => {
    event.preventDefault(); // Prevent default jump behavior
    const element = document.getElementById(id);
    if (element && lenis) {
      lenis.scrollTo(element, {
        offset: 0,  // Adjust offset as needed
        duration: 1.5,  // Duration in seconds
        easing: (t) => t,  // Easing function
      });
    }
  };

  return (
    <nav className="nav-list-container">
      <ul className="nav-list">
        {items.map((item, i) => (
          <li className={style} key={i}>
            <a
              className="links"
              href={`#${item.toLowerCase()}`}
              onClick={(e) => handleClick(e, item.toLowerCase())}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavItems;
