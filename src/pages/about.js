import React from "react";

import PersonList from "./ajaxcall";

export default ({ data }) => (
  <div className="page">
    <h1 className="title">About {data.site.siteMetadata.title}</h1>
    <p>
      Vivamus varius ultricies justo, suscipit porta lectus ullamcorper non.
      Vivamus eu leo id urna egestas pellentesque et vitae velit. Vestibulum
      magna turpis, faucibus quis volutpat ac, molestie vel ante.
    </p>
  </div>
);

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
