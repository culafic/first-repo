const fetch = require("node-fetch");
const URL = "https://api.punkapi.com/v2/beers/1";

const button = document.getElementById("beer");

let dataResponse = null;

const feelMeUpBro = () => {
  const data = fetch(URL).then(res => {
    const data = res.json().then(i => {
      const n = document.createElement("pre");
      document.body.appendChild(n);
      n.innerHTML = `${JSON.stringify(i)}`;
    });
  });
};

document.addEventListener("click", feelMeUpBro);
