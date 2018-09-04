import React from "react";
import Link from "gatsby-link";

import "./style.css";

export default ({ children, data }) => (
  <div>
    <div className="header-nav">
      <div className="header-nav-wrapper">
        <Link to={`/`}>
          {/*<h3
            display={`inline-block`}
            fontStyle={`normal`}
            className="blog-name"
          >
            {data.site.siteMetadata.title}
          </h3>*/}
          <img className="logo" src={require("../images/logo.svg")} />
        </Link>
        <div>
          <Link className={" link-to"} to={`/about/`}>
            About
          </Link>
          <Link className={" link-to"} to={`/contact/`}>
            Contact
          </Link>
          {/*<Link className={" link-to"} to={`/user-list/`}>
            Json-Data
          </Link>
          <Link className={" link-to"} to={`/scuderia/`}>
            Array/Props
          </Link>
          <Link className={" link-to"} to={`/dado/`}>
            Dado
        </Link>*/}
        </div>
      </div>
    </div>
    <div className="blog-container">{children()}</div>
  </div>
);

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
