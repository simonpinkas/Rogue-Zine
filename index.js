import TextScramble from "./components/TextScramble";

import "./css/reset.css";
import "./css/style.css";

const init = function () {
  const phrases = [
    "ABCESS",
    "VOLUME 0",
    "underground information",
    "forbidden data"
  ];

  const el = document.querySelector(".scrambled");
  const fx = new TextScramble(el);

  let counter = 0;

  const next = () => {
    fx.setText(phrases[counter]).then(() => {
      setTimeout(next, 800);
    });
    counter = (counter + 1) % phrases.length;
  };

  next();
};

init();
