import "./navbar.css";
import React, { useEffect } from "react";
import { useState } from "react";

const itemsLeft = ["HOME", "ABOUT"];
const itemsRight = ["PROJECTS", "CONTACT"];

const DropDownMenu = () => {
  return (
    <details className="mobile-menu">
      <ul>
        {items.map((item, i) => (
          <li className="m-nav-item" key={i}>
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
    </details>
  );
};

const NavItems = (props) => {
  return (
    <nav className="nav-list-container">
      <ul className="nav-list">
        {props.items.map((item, i) => (
          <li className={props.style} key={i}>
            <a className="links" href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const NavBar = () => {
  const [style, setStyle] = useState("nav-title");
  const [itemStyle, setItemStyle] = useState("nav-item");
  const [barStyle, setBarStyle] = useState("nav-bar");

  const onScroll = () => {
    setStyle("nav-title-small");
    setItemStyle("nav-item-small");
    setBarStyle("nav-bar-small");
  };

  const onTop = () => {
    setStyle("nav-title");
    setItemStyle("nav-item");
    setBarStyle("nav-bar");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        onScroll();
      } else {
        onTop();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="nav-container">
      <nav className={barStyle}>
        <NavItems items={itemsLeft} style={itemStyle} />
        <header className="nav-header">
          <h1 className={style}> NOMAR </h1>
        </header>
        <NavItems items={itemsRight} style={itemStyle} />
      </nav>
    </div>
  );
};
export default NavBar;
