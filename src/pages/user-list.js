import React from "react";

import PersonList from "./ajaxcall";

export default ({ data }) =>
  <div className="page">
    <h1 className="title">Data from file.json</h1>
    <PersonList />
  </div>

