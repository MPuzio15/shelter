import React from "react";
import Form from "../../components/form/Form";
import "./contactView.css";

class ContactView extends React.Component {
  render() {
    return (
      <section className="contact_wrapper">
        <div className="messageContact">
          <p>
            Jeżeli chcesz się z nami skontaktować, użyj poniższego formularza.
          </p>
          <p>Odezwiemy się w ciągu 24h.</p>
        </div>
        <Form />
      </section>
    );
  }
}

export default ContactView;
