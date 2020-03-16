import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeView from "../homeView/homeView";
import PeopleView from "../peopleView/peopleView";
import ContactView from "../contactView/contactView";
import Navigation from "../../components/navigation/Navigation";
import Logo from "../../components/logo/Logo";

class Root extends React.Component {
  render() {
    return (
      <>
        <Logo />
        <BrowserRouter>
          <Navigation />
          <Switch>
            <Route exact path="/" component={HomeView} />
            <Route path="/people" component={PeopleView} />
            <Route path="/contact" component={ContactView} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default Root;
