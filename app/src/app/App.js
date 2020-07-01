import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeView from "../views/homeView/homeView";
import PeopleView from "../views/peopleView/peopleView";
import ContactView from "../views/contactView/contactView";
import Navigation from "../components/navigation/Navigation";
import Footer from "../components/footer/footer"

class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navigation />
          <Switch>
            <Route exact path="/" component={HomeView} />
            <Route path="/people" component={PeopleView} />
            <Route path="/contact" component={ContactView} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </>
    );
  }
}

export default App;
