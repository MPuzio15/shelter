import React from "react";
import Background from "../../images/dog1920.jpg";
import "../homeView/homeView.css";
import { getCitat } from "../../services/getCitat";

class HomeView extends React.Component {
  render() {
    return (
      <div className="picture">
        <p className="citat">{getCitat()} </p>
        <img className="background__img" src={Background} />
      </div>
    );
  }
}

export default HomeView;
