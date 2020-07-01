import React from "react";
import Background from "../../images/dog1920.jpg";
import "../homeView/homeView.css";
import { getCitat } from "../../services/getCitat";

class HomeView extends React.Component {
  render() {
    return (
      <section className='main_wrapper'>
        <div className="picture">
          <p className="citat">{getCitat()} </p>
          <img className="background__img" src={Background} />
        </div>
        <div className="about_us_wrapper">
          <article>
            <h3>O naszym schronisku</h3>

            W naszym schronisku znajduje się wiele spragnionych uczucia i domu psów i kotów,
             które z utęsknieniem czkają na ludzi chcących dać im prawdziwy dom i opiekę.
            Schronisko przyjmuje psy przez całą dobę, a wydaje nowym opiekunom w godzinach 10.00 - 14.00 i 15.00 - 17.00
            przez wszystkie dni tygodnia (w niedziele i święta także).
            Schronisko Cztery Łapy powstało w 1994 roku.
            Od kilku lat prowadzeniem schroniska zajmuje się Krakowskie Towarzystwo Opieki nad Zwierzętami.
            Wspólnym wysiłkiem KTOZ i gminy udało się w przeciągu kilku ostatnich lat doprowadzić do sytuacji,
            w której schronisko jest uważane za jedną z najlepiej prowadzonych placówek tego typu w Polsce.
            Schronisko Cztery Łapy jest utrzymywane przede wszystkim z pieniędzy przekazywanych przez Miasto Kraków.
            Ponadto wspomagane jest ze środków zgromadzonych przez Krakowskie Towarzystwo Opieki nad Zwierzętami
            w Krakowie oraz hojnych darów mieszkańców miasta.
        </article>

        </div>
      </section>
    );
  }
}

export default HomeView;
