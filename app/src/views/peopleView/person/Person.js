import React from "react";
import "./Person.css";

class Person extends React.Component {
  render() {
    const { name, picture } = this.props;
    return (
      <li className="listItem__wrapper">
        <img className="listItem__image" src={picture} alt={name.first} />
        <div>
          <h2 className="listItem__name">{name.first}</h2>
        </div>
      </li>
    );
  }
}
export default Person;
