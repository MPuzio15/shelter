import apsik from "../images/apsik.jpg";
import baks from "../images/baks.jpg";
import burek from "../images/burek.jpeg";
import dejzi from "../images/dejzi.jpg";
import foks from "../images/foks.jpg";
import klara from "../images/klara.jpg";
import lara from "../images/lara.jpg";
import minik from "../images/minik.jpg";
import nutka from "../images/nutka.jpg";
import puszek from "../images/puszek.jpg";
import timon from "../images/timon.jpg";
import tosia from "../images/tosia.jpg";

const PERSON_URL = "https://randomuser.me/api/?results=10";
let allPeople = [];
export function getPeople() {
  return fetch(PERSON_URL)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      allPeople = response.results;
      return allPeople;
    });
}

let allDogs = [
  {
    id: 1,
    name: "apsik",
    image: apsik,
  },
  {
    id: 2,
    name: "baks",
    image: baks,
  },
  {
    id: 3,
    name: "burek",
    image: burek,
  },
  {
    id: 4,
    name: "dejzi",
    image: dejzi,
  },
  {
    id: 5,
    name: "foks",
    image: foks,
  },
  {
    id: 6,
    name: "klara",
    image: klara,
  },
  {
    id: 7,
    name: "lara",
    image: lara,
  },
  {
    id: 8,
    name: "minik",
    image: minik,
  },
  {
    id: 9,
    name: "nutka",
    image: nutka,
  },
  {
    id: 10,
    name: "puszek",
    image: puszek,
  },
  {
    id: 11,
    name: "timon",
    image: timon,
  },
  {
    id: 12,
    name: "tosia",
    image: tosia,
  },
];
export function getAllDogs() {
  return allDogs;
}
