import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import Music from "../pages/Music";
import Sport from "../pages/Sport";
import Todo from "../pages/Todo";

const MainScreen = () => {
  return (
    <Switch>
      <Route exact path="/movies">
        <Movies />
      </Route>
      {/* <Route exact path="/music">
        <Music />
      </Route> */}
      <Route exact path="/todo">
        <Todo />
      </Route>
      {/* <Route exact path="/Sport">
        <Sport />
      </Route> */}
    </Switch>
  );
};

export default MainScreen;
