const countries = [
  "India",
  "United States",
  "France",
  "Japan",
  "Brazil",
  "Australia",
  "Germany",
  "Canada",
  "Italy",
  "South Korea",
];
const capitals = [
  "New Delhi",
  "Washington, D.C.",
  "Paris",
  "Tokyo",
  "Brasília",
  "Canberra",
  "Berlin",
  "Ottawa",
  "Rome",
  "Seoul",
];

const concat = function (a, b) {
  return a.concat(" =>> ", b);
};

const mergeArray = function (array1, array2) {
  const mergedArray = [];

  for (let index = 0; index < countries.length; index++) {
    const element = concat(array1[index], array2[index]);

    mergedArray.push(element);
  }

  return mergedArray;
};

const capital = function () {
  const country = prompt("enter country:");

  return capitals[countries.indexOf(country)];
};

const whatToDo = function () {
  const wantAllCountriesWithCapital = confirm(
    "do you want all countries with capitals:"
  );

  if (wantAllCountriesWithCapital) {
    return mergeArray(countries, capitals);
  }

  return capital();
};

console.log(whatToDo());
