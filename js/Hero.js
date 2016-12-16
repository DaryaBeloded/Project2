class Hero {
  constructor(name, gender, skill, id) {
    this.name = name;
    this.gender = gender;
    this.skill = skill;
    this.id= id;
  }
  get info(){
    return `name: ${this.name}, gender: ${this.gender}, skill: ${this.skill}`;
  }
}
