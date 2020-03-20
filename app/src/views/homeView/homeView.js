import React from "react";
import Background from "../../images/background.png";
import "../homeView/homeView.css";

const allCitats = [
  "Dorastanie w towarzystwie psa zmniejsza prawdopodobieństwo wystąpienia alergii i astmy",
  "Kontakt z psem powoduje znaczne zmniejszenie poziomu stresu",
  "Fakt dbania o swojego czworonożnego przyjaciela sprzyja budowaniu lepszej samooceny, polepsza nastrój i zwiększa poczucie pewności siebie. To wspaniale czuć się potrzebnym!",
  "Spacery z psem wpływają na polepszenie kondycji:)",
  "Pies towarzyszący diabetykowi potrafi wyczuć zmianę poziomu cukru we krwi właściciela i ostrzec go",
  "Psy to coś więcej niż tylko nasi najlepsi przyjaciele. Platon powiedział kiedyś, że „pies ma duszę filozofa”.",
  "Możesz obniżyć swoje ciśnienie krwi tylko przez pogłaskanie swojego pupila.",
  "Dzieci, które mają problem z nawiązaniem kontaktu z rówieśnikami i dorosłymi, z większą łatwością nawiązują więź ze swoimi psami.",
  "Pies zawsze będzie Cię bezinteresownie kochać, bez względu na to, co się stanie",
  "To, jak traktujemy naszego psa, wpływa na jego osobowość.",
  "Psy bezwarunkowo kochają swoich opiekunów, robią wszystko, aby ich chronić.",
  "Pozytywne nastawienie psów jest zaraźliwe. Psia radość sprawi, że i ty zaczniesz doceniać w życiu nawet te małe rzeczy.",
  "Psu jest wszystko jedno, czy jesteś biedny, czy bogaty. Daj mu serce, a on odda ci swoje."
];

class HomeView extends React.Component {
  getCitat = () => {
    let newCitat = Math.floor(Math.random() * allCitats.length);
    return allCitats[newCitat];
  };

  render() {
    debugger;
    return (
      <div className="picture">
        <img className="background__img" src={Background} />
        <p className="citat">{this.getCitat()} </p>{" "}
      </div>
    );
  }
}

export default HomeView;
