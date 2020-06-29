import React from "react";
import "../peopleView/peopleView.css";
import Person from "./person/Person";
import { getAllDogs } from "../../services/getPeople";
import Doggie from "../../components/piesek/Piesek";

class PeopleView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: [],
    };
  }

  componentDidMount() {
    let dogs = getAllDogs();
    this.setState({
      dogs: dogs,
    });
  }
  render() {
    if (this.state.dogs.length === 0) {
      return <Doggie />;
    }

    const allDogs = this.state.dogs.map((dog, index) => {
      return <Person name={dog.name} picture={dog.image} key={index} />;
    });
    return <article className="items__wrapper">{allDogs}</article>;
  }
}

export default PeopleView;
