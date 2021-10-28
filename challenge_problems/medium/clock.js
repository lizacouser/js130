/*
P:
-create a clock that is independent of date
-you can add minutes to or subtract minutes from the time
-two clock objects that represent the same time should be equal
  -equal here doesn't necessarily mean the same object
-no using built-in dates/times

E:
-Clock.at(8).toString() returns '08:00'
-Clock.at(11, 9).toString() returns '11:09'
-Clock.at(10).add(3).toString() returns '10:03'
-Clock.at(10).add(61).toString() returns '11:01'
-Clock.at(0).subtract(50).toString() returns '23:10'
-Clock.at(23, 30).add(60).toString() returns '00:30'
-Clock.at(10).add(3061).toString() returns '13:01'
-Clock.at(10, 30).subtract(5).toString() returns '10:25'
-Clock.at(10).subtract(90).toString() returns '8:30'
-Clock.at(15, 37) === Clock.at(15, 37);
-Clock.at(15, 37) !== Clock.at(14, 37);
-Clock.at(15, 37) !== Clock.at(15, 38);
-Clock.at(0, 30).subtract(60).toString() returns '23:30'
-Clock.at(10).subtract(3061).toString() returns '06:59'
-Clock.at(0, 30).subtract(60).toString() returns '23:30'
-no args? invalid args?

D:
class Clock
static method at() creates a clock object at a certain time
constructor stores time?
instance method add() adds minutes to clock
instance method subtract() subtracts minutes from clock
instance method toString() returns a string representation of clock
-at takes numbers as input and returns an array? [10, 5]?
-toString takes an array and returns string padded with 00s
-add takes numbers as input and returns an array
-subtract takes numbers as input and returns an array

A:
at()
-input: hour minute argument (default minute = 0) between 0-23, 0-59
-create a new Clock with time set to arguments
-return clock, which is an object with an hour and minute

add()
-input: any number of minutes
-we have clock, which looks like {hour: 15, minute: 37}
-add number of minutes to 37
-while (minutes >= 60)
  -increment hour
  -subtract 60 from minutes
-if (hour >= 24)
  -hour %= 24

subtract()
-input any number of minutes (100)
-we have {hour: 1, minute: 37}
-subtract number of minutes from 37 (37 - 100 = -63)
-while (minutes < 0)
  -decremement hour {0, -63}, {-1, -3}
  -add 60 to minutes {0, -3}, {-1, 57}
-hi (hour < 0)
  -hour = hour % 24 + 24

toString() 
-we have {hour: 1, minute: 37}
-return `${this.hour.padStart('0', 2)}:${this.minute.padStart('0', 2)}
*/

class Clock {
  constructor(hour, minute) {
    this.hour = hour;
    this.minute = minute;
  }

  static at(hour = 0, minute = 0) {
    return new Clock(hour, minute);
  }

  add(minutesAdded) {
    let minutes = this.minute + minutesAdded
    let hours = this.hour;

    while (minutes >= 60) {
      hours += 1;
      minutes -= 60;
    }

    if (hours >= 24) {
      hours %= 24;
    }

    return new Clock(hours, minutes);
  }

  subtract(minutesSubtracted) {
    let minutes = this.minute - minutesSubtracted;
    let hours = this.hour;

    while (minutes < 0) {
      hours -= 1;
      minutes += 60;
    }

    if (hours < 0) {
      hours = (hours % 24) + 24;
    }

    return new Clock(hours, minutes);
  }

  toString() {
    return `${String(this.hour).padStart(2, '0')}:${String(this.minute).padStart(2, '0')}`
  }

  isEqual(clock) {
    return this.minute === clock.minute &&
           this.hour === clock.hour;
  }
}

module.exports = Clock;