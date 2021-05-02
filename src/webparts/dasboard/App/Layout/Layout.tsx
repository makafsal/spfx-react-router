import React from 'react';
import routes from "../Routes/routes";
import { Link } from "react-router-dom";

const Layout: React.FC<IProps> = (props) => {
  return (
    <>
      <nav>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li>
            <Link to={routes.home.path}>Home</Link>
          </li>
          <li>
            <Link to={routes.about.path}>About</Link>
          </li>
          <li>
            <Link to={routes.contact.path}>Contact</Link>
          </li>
        </ul>
      </nav>
      <section>{props.children}</section>
    </>
  );
};

export interface IProps { }

export default Layout;