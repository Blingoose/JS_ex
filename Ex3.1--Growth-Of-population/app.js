//? In a small town the population is p0 = 1000 at the beginning of a year.
//?  The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town.
//? How many years does the town need to see its population greater or equal to p = 1200 inhabitants?
//? At the end of the first year there will be: 1000 + 1000 * 0.02 + 50 => 1070 inhabitants
//? At the end of the 2nd year there will be:
//? 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (number of inhabitants is an integer)
//? At the end of the 3rd year there will be: 1141 + 1141 * 0.02 + 50 => 1213
//? It will need 3 entire years.
//? More generally given parameters:
//? - p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)
//? - the function nb_year should return n number of entire years needed to get a population
//? greater or equal to p.
//? - aug is an integer, percent a positive or null number, p0 and p are positive integers (> 0)
//? Examples:
//? nb_year(1500, 5, 100, 5000) -> 15 nb_year(1500000, 2.5, 10000, 2000000) -> 10
//? Note: Don't forget to convert the percent parameter as a percentage in the body of your function:
//? if the parameter percent is 2 you have to convert it to 0.02.

const nb_year = (popu, growthPercent, leaveOrCome, popuTarget) => {
  if (
    typeof popu !== "number" ||
    typeof growthPercent !== "number" ||
    typeof leaveOrCome !== "number" ||
    typeof popuTarget !== "number"
  ) {
    return "Numbers only";
  }
  if (popu <= 0 || growthPercent < 0 || popuTarget <= 0) {
    return "Wrong Input, population must be > 0, precent >= 0, population growth target > 0";
  } else if (
    popu * (growthPercent * 0.01) + leaveOrCome < 0 &&
    popu <= popuTarget
  ) {
    return "Decreasing growth rate: Population growth target cannot be reached.";
  } else if (
    popu * (growthPercent * 0.01) + leaveOrCome > 0 &&
    popu >= popuTarget
  ) {
    return "Increasing growth rate: Population growth target cannot be reached.";
  } else if (popu * (growthPercent * 0.01) + leaveOrCome === 0) {
    return "No Increasing or decreasing growth rate at all, check the numbers.";
  } else {
    let countYears = 0;
    let isTrue = true;
    while (isTrue) {
      countYears++;
      popu += popu * (growthPercent * 0.01) + leaveOrCome;
      if (popu >= popuTarget && leaveOrCome >= 0) {
        isTrue = false;
      } else if (popuTarget >= popu && leaveOrCome < 0) {
        isTrue = false;
      }
    }
    return countYears;
  }
};

//tests
console.log(nb_year(1000, 2, 50, "Error"));
console.log(nb_year(5000, 20, -1000, 6000));
console.log(nb_year(5000, 15, -1000, 10000));
console.log(nb_year(5000, 2, 1000, 3000));
console.log(nb_year(1000, 2, 50, 1200));
console.log(nb_year(3000, 5, -200, 1500));
