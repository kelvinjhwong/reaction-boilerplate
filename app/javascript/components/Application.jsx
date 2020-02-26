import React from "react";
import { Route } from "react-router-dom";
import TopNav from "./shared/TopNav";
import BoardsDashboardContainer from "./dashboard/BoardsDashboardContainer";
import BoardContainer from "./board/BoardContainer";
import Board from "./board/Board";

const Application = () => {
  return (
    <div>
      <TopNav />
      <Route path="/" exact component={BoardsDashboardContainer} />
      <Route path="/boards/1" exact component={Board} />
    </div>
  );
};

export default Application;
