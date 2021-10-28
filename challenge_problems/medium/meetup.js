/*
P:
-objects that represent meetup date
-input: month + year
-method 'day()' determines exact date of specified month and year
-inputs are case-insensitive strings
'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', and 'Sunday'
'first', 'second', 'third', 'fourth', 'fifth', 'last', and 'teenth'
-teenth means the date ending in 'teenth' (13, 14, 15, 16, 17, 18, 19)

E:
-new Meetup(2013, 3).day('Monday', 'first').toString();
// returns 'Mon Mar 04 2013 00:00:00 GMT-0500 (Eastern Standard Time)'
-etc
returns date as Date object

D:
-constructor()
  -input: number
  -output: object
-day()
  -input: strings
  -output: Date
-dictionary to store date ranges

A:
-store year and month in meetup constructor

-day()
-convert day of week into index?
-convert descriptor into meaningful range
  -slice range based on the month of the year
-look through given range, getting day of week each time
-filter for matching date.
-if only 1 date, store. if multiple matches, return second one.
-if no match, return null.
-return a new Date(year, month, date)

'first' => 1, 2, 3, 4, 5, 6, 7
'second' => 8, 9, 10, 11, 12, 13, 14
'third' => 15, 16, 17, 18, 19, 20, 21
'fourth' => 22, 23, 24, 25, 26, 27, 28
'fifth' => 29, 30, 31
'teenth' => 13, 14, 15, 16, 17, 18, 19
'last' => 22, 23, 24, 25, 26, 27, 28, 29, 30, 31 (dep on month)

*/

"use strict";

class Meetup {
  constructor(year, month) {
    this.year = year;
    this.month = month - 1;
  }

  static DESCRIPTOR_RANGE = {
    first: [1, 2, 3, 4, 5, 6, 7],
    second: [8, 9, 10, 11, 12, 13, 14],
    third: [15, 16, 17, 18, 19, 20, 21],
    fourth: [22, 23, 24, 25, 26, 27, 28],
    fifth: [29, 30, 31],
    last: [22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
    teenth: [13, 14, 15, 16, 17, 18, 19],
  }

  day(weekday, descriptor) {
    let dayIndex = this.getWeekdayIndex(weekday.toLowerCase());
    let dateRange = this.getDateRange(descriptor.toLowerCase());

    let matchingDates = dateRange.filter(date => {
      let testDay = new Date(this.year, this.month, date).getDay()
      return testDay === dayIndex;
    })

    let date = matchingDates.pop();

    if (!date) return null;
    
    return new Date(this.year, this.month, date);
  }

  getDateRange(descriptor) {
    let dateRange = Meetup.DESCRIPTOR_RANGE[descriptor];
    if (descriptor === 'last' || descriptor === 'fifth') {
      dateRange = this.removeEndDays(dateRange);
    }

    return dateRange;
  }

  getWeekdayIndex(day) {
    let days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    return days.indexOf(day);
  }

  getLastDay() {
    // let lastDays = [31, this.checkForLeapYear(), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    // return lastDays[this.month];

    return new Date(this.year, this.month + 1, 0).getDate();
  }

  // checkForLeapYear() {
  //   if (new Date(this.year, 1, 29).getMonth() !== 1) {
  //     return 28;
  //   } else {
  //     return 29;
  //   }
  // }

  removeEndDays(dateRange) {
    let lastDay = this.getLastDay();
    return dateRange.slice(0, dateRange.indexOf(lastDay) + 1);
  }
}

let meetup = new Meetup(2013, 3)
console.log(meetup.day('monday', 'first'));

module.exports = Meetup;