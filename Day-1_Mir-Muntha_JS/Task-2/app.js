let person = {
  name: "John",
  age: 30,
  city: "New York",
};
delete person.age;
person.job = "engineer";
person.city = "San Francisco";
console.log(person);
