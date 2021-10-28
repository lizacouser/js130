/*
P:
-input: n/a
-output:
  -random name
  -doesn't change unless explicitly changed

E:
instance methods:
-name() returns a random name that matches reg-exp /^[A-Z]{2}\d{3}$/
  -must make sure name isn't taken by another robot
-reset()
  -returns a new random name

D:
-input n/a
-output string
-internal, regexp?
-array storing used names

A:
-Robot class
  -static property stores used names
  -constructor() stores a name
  -name() returns a name
  -reset() generates a random name, clears old name from usedNames
*/


class Robot {
  static usedNames = [];
  static ALPHA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  static NUM = '0123456789';

  constructor() {
    this.robotName = this.reset();
  }

  name() {
    return this.robotName;
  }

  reset() {
    let newName = this.generateName();

    if (Robot.usedNames.includes(newName)) {
      newName = this.generateName();
    }

    this.updateUsedNames(newName);

    this.robotName = newName;
    return newName;
  }

  updateUsedNames(newName) {
    Robot.usedNames.push(newName);

    if (Robot.usedNames.includes(this.robotName)) {
      Robot.usedNames.splice(Robot.usedNames.indexOf(this.robotName), 1);
    }
  }

  generateName() {
    let getRandom = (maxVal) => Math.floor(Math.random() * maxVal);
    let newName = '';

    for (let index = 0; index < 2; index ++) {
      newName += Robot.ALPHA[getRandom(Robot.ALPHA.length)];
    }

    for (let index = 0; index < 3; index ++) {
      newName += Robot.NUM[getRandom(Robot.NUM.length)];
    }

    return newName;
  }
}

module.exports = Robot;

