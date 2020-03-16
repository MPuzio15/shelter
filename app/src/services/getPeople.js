const PERSON_URL = "https://randomuser.me/api/?results=30";
let allPeople = [];
export function getPeople() {
  return fetch(PERSON_URL)
    .then(response => {
      debugger;
      return response.json();
    })
    .then(response => {
      allPeople = response.results;
      return allPeople;
    });
}
