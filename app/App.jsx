import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import importComponent from "react-imported-component";

import { GlobalStyles } from "./styles";
import Home from "./pages/Home";
import LoadingComponent from "./components/Loading";
import ErrorComponent from "./components/Error";
import Header from "./components/Header";

const About = importComponent(() => import("./pages/About"), {
  LoadingComponent,
  ErrorComponent
});

const App = () => (
  <React.Fragment>
    <GlobalStyles />
    <Header />

    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" render={() => <About />} />
      <Redirect to="/" />
    </Switch>
  </React.Fragment>
);
export default App;
