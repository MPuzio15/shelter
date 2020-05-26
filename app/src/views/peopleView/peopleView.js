import React from "react";
import "../peopleView/peopleView.css";
import Person from "./person/Person";
import { getPeople } from "../../services/getPeople";
import Doggie from "../../components/piesek/Piesek";

class PeopleView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
    };
  }

  componentDidMount() {
    getPeople().then((allPeople) => {
      this.setState({
        people: allPeople,
      });
    });
  }
  render() {
    if (this.state.people.length === 0) {
      return <Doggie />;
    }

    const allPeople = this.state.people.map((person, index) => {
      return (
        <Person
          name={person.name}
          picture={person.picture.medium}
          key={index}
        />
      );
    });
    return <article className="items__wrapper">{allPeople}</article>;
  }
}

export default PeopleView;
