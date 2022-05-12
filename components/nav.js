import React from "react";
import Link from "next/link";
import useWindowSize from "../util/useWindowSize";
import { Scrollchor, linear } from 'react-scrollchor';
import HomeButton from '../public/img/homebutton.png';

const Nav = ({ pages }) => {
  const isMobile = useWindowSize();
  return (
      <nav className="navbar">
        <ul className="header">
          <Link href="/">
            <img
              src='/img/homebutton.png'
              />
          </Link>
            {pages.slice(1).map((page) => {
              return (
                isMobile ?
                  <li key={page.id}>
                    <Link href={`/${page.attributes.Slug}`}>
                      {page.attributes.Title}
                    </Link>
                  </li>
                  :
                  <li key={page.id}>
                    <Scrollchor to={`#${page.attributes.Slug}`} animate={{ duration: 200, easing: linear }}>
                      {page.attributes.Title}
                    </Scrollchor>
                  </li>
                );
              })}
            </ul>
          </nav>
  );
};

export default Nav;
