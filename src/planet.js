export default class Planet {
  constructor(name, ageModifier) {
  this.name = name;
  this.ageModifier = ageModifier;
    }
    checkType(age) {
      let planetAge = age / this.ageModifier;
      return planetAge;
    }
  };