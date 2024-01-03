let cars = [
  {
    make: "toyota",
    model: "camery",
    year: 2018,
  },
  {
    make: "toyota",
    model: "camery",
    year: 2018,
  },
  {
    make: "toyota",
    model: "camery",
    year: 2018,
  },
];
cars.splice(0, 1);
cars.push({
  make: "honda",
  model: "Cvic",
  year: 2018,
});
cars[1].model = "accord";
console.log(cars);
