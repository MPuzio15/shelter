import React from "react";
import "./Form.css";

class Form extends React.Component {
  state = {
    username: "",
    email: "",
    phone: "",
    additionalInfo: "",
    message: ""
  };

  handlChange = e => {
    e.preventDefault();
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      message: "Formularz został wysłany"
    });
    const item = {
      username: this.state.username,
      email: this.state.email,
      phone: this.state.phone,
      additionalInfo: this.state.additionalInfo
    };
    console.log(item);
  };

  componentDidUpdate() {
    if (this.state.message != "") {
      setTimeout(
        () =>
          this.setState({
            message: ""
          }),
        3000
      );
    }
  }

  render() {
    return (
      <div className="form__wrapper">
        <form className="form__form" onSubmit={this.handleSubmit} noValidate>
          <div className="form__header__wrapper">
            <h3 className="form__header">Formularz</h3>
          </div>
          <div className="inputs">
            <div className="form__item">
              <input
                type="text"
                placeholder="Twoje imię"
                name="username"
                value={this.state.username}
                onChange={this.handlChange}
              />
            </div>
            <div className="form__item">
              <input
                type="email"
                placeholder="Twój adres e-mail"
                name="email"
                value={this.state.email}
                onChange={this.handlChange}
              />
            </div>
            <div className="form__item">
              <input
                type="phone"
                placeholder="Twój numer telefonu"
                name="phone"
                value={this.state.phone}
                onChange={this.handlChange}
              />
            </div>
            <div className="form__item">
              <textarea
                type="text"
                placeholder="Dodatkowe informacje"
                name="additionalInfo"
                value={this.state.additionalInfo}
                onChange={this.handlChange}
              />
            </div>
          </div>
          <div className="submit__button">
            <button className="form__button" type="submit">
              Submit
          </button>
          </div>
        </form>
        {this.state.message && (
          <h6 className="form__message">{this.state.message}</h6>
        )}
      </div>
    );
  }
}

export default Form;
