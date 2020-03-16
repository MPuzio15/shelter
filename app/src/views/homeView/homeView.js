import React from "react";
import Background from "../../images/background.png";
import "../homeView/homeView.css";

const allCitats = [
  "Dorastanie w towarzystwie psa zmniejsza prawdopodobieństwo wystąpienia alergii i astmy",
  "Kontakt z psem powoduje znaczne zmniejszenie poziomu stresu",
  "fakt dbania o swojego czworonożnego przyjaciela sprzyja budowaniu lepszej samooceny, polepsza nastrój i zwiększa poczucie pewności siebie. To wspaniale czuć się potrzebnym!",
  "Spacery z psem wpływają na polepszenie kondycji:)",
  "Pies towarzyszący diabetykowi na przykład, potrafi wyczuć zmianę poziomu cukru we krwi właściciela i ostrzec go"
];

class HomeView extends React.Component {
  state = {
    index: 0
  };

  getNewIndex = () => {
    debugger;
    this.setState(() => ({
      index: this.state.index + 1
    }));
  };

  componentDidMount = () => {
    debugger;
    this.getNewIndex();
  };

  render() {
    return (
      <>
        <img className="background__img" src={Background} />
        <p className="citat">{allCitats[this.state.index]} </p>
      </>
    );
  }
}

export default HomeView;
