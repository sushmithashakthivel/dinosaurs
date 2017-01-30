import React from "react";
import {render} from "react-dom";
import {Router, Route, IndexRoute, Redirect, browserHistory} from "react-router";
import Home from "./Home.js";
import Content from "./Content.js";

render(
  <Router history={browserHistory}>
    <Route path="/" component={Home}>
      <IndexRoute component={Content} />
      <Redirect from="*" to="/" />
    </Route>
  </Router>,
document.getElementById("app")
);

