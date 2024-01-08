import React from "react";
import videoThala from "./vviid.mp4";
import sound from "./sound.mp3";
import Image1 from "./Image1";
import Image2 from "./Image2";
import Image3 from "./Image3";
import Image4 from "./Image4";
import Image5 from "./Image5";
import Image6 from "./Image6";

const App = function () {
  function play() {
    new Audio(sound).play();
  }

  let x, y;

  const [num1, setnum1] = React.useState(12);
  const [num2, setnum2] = React.useState(12);
  const [turn, setturn] = React.useState(7);

  function decrease() {
    if (turn === 1) {
      document.querySelector(".btn--roll").style.opacity = 0;
    }
    setturn(turn - 1);
  }

  function ppo() {
    setnum1(Math.trunc(Math.random() * 6 + 1));
    setnum2(Math.trunc(Math.random() * 6 + 1));
    decrease();
  }

  function refreshPage() {
    window.location.reload(false);
  }

  function seven() {
    if (x + y === 7) {
      console.log("yes");
      document.querySelector(".btn--roll").style.opacity = 0;

      play();
      return (
        <video
          // width="50%"
          className="video"
          src={videoThala}
          autoPlay
          muted
        ></video>
      );
    }
  }

  function decide1() {
    if (num1 === 1) {
      x = 1;
      console.log(x);
      return <Image1 />;
    } else if (num1 === 2) {
      x = 2;
      console.log(x);

      return <Image2 />;
    } else if (num1 === 3) {
      x = 3;
      console.log(x);

      return <Image3 />;
    } else if (num1 === 4) {
      x = 4;
      console.log(x);

      return <Image4 />;
    } else if (num1 === 5) {
      x = 5;
      console.log(x);

      return <Image5 />;
    } else if (num1 === 6) {
      x = 6;
      console.log(x);

      return <Image6 />;
    }
  }
  function decide2() {
    if (num2 === 1) {
      y = 1;
      console.log(y);

      return <Image1 />;
    } else if (num2 === 2) {
      y = 2;
      console.log(y);

      return <Image2 />;
    } else if (num2 === 3) {
      y = 3;
      console.log(y);

      return <Image3 />;
    } else if (num2 === 4) {
      y = 4;
      console.log(y);
      return <Image4 />;
    } else if (num2 === 5) {
      y = 5;
      console.log(y);

      return <Image5 />;
    } else if (num2 === 6) {
      y = 6;
      console.log(y);

      return <Image6 />;
    }
  }

  function print() {
    if (x + y === 7) {
      return "THALA FOR A REASON";
    } else if (turn === 0) {
      return "SORRY, YOU LOST";
    } else {
      return turn;
    }
  }

  return (
    <div className="main">
      <section className="player player--0 player--active">
        <div className="dicee">
          <div className="dices">{decide1()}</div>
        </div>
      </section>
      <section className="player player--1">
        <div className="dicee">
          <div className="dices">{decide2()}</div>
        </div>
      </section>

      <div className="vid"> {seven()}</div>
      <button className="btn btn--new" onClick={refreshPage}>
        🔄 New game
      </button>
      <button className="btn btn--hold">{print()}</button>
      <button className="btn btn--roll" onClick={ppo}>
        🎲 Roll dice 🎲
      </button>
    </div>
  );
};

export default App;
