/* eslint-disable max-lines-per-function */
/*
P:
-OLOO account prototype object
-anonymyzes user objects on init
-created object has no access to anonymizer function
-anonymize function creates 16 char sequence of letters & numbers
-properties:
  -init sets email, password, firstName, lastName, displayName (16 char seq)
  -reanonymize generates new 16 char seq, reassigns to displayName if valid pw
    -returns true if successful, invalid password if not valie
  -resetPassword asks for new password and reassigns to pw prop
    -to reset password, user must provide curernt pw
    -returns true if successful, invliad password if not valid
  -firstName returns first name if password valid
  -lastName returns last name if password valid
  -email returns email if password valid
  -displayName returns displayName

*/


let Account = (function() {
  let userEmail;
  let userPassword;
  let userFirstName;
  let userLastName;

  const NUM_DIGITS = 16;
  const CHARS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

  const makeDisplayName = (function() {
    let displayName = "";

    return function() {
      for (let digit = 0; digit < NUM_DIGITS; digit += 1) {
        let randomIndex = Math.floor(Math.random() * CHARS.length);
        displayName += CHARS[randomIndex];
      }
      return displayName;
    };
  })();

  const isValidPassword = (function() {
    return function(password) {
      return password === userPassword;
    };
  })();

  return {
    init(email, password, firstName, lastName) {
      userEmail = email;
      userPassword = password;
      userFirstName = firstName;
      userLastName = lastName;
      this.displayName = makeDisplayName();
      return this;
    },

    reanonymize(password) {
      if (isValidPassword(password)) {
        this.displayName = makeDisplayName();
        return true;
      } else {
        return 'Invalid Password';
      }
    },

    resetPassword(currentPassword, newPassword) {
      if (isValidPassword(currentPassword)) {
        userPassword = newPassword;
        return true;
      } else {
        return 'Invalid Password';
      }
    },

    firstName(password) {
      if (isValidPassword(password)) {
        return userFirstName;
      } else {
        return 'Invalid Password';
      }
    },

    lastName(password) {
      if (isValidPassword(password)) {
        return userLastName;
      } else {
        return 'Invalid Password';
      }
    },

    email(password) {
      if (isValidPassword(password)) {
        return userEmail;
      } else {
        return 'Invalid Password';
      }
    },

    displayName() {
      return this.displayName;
    }
  };
})();

let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'));    // logs 'Invalid Password'
console.log(fooBar.resetPassword('123456', 'abc')); // logs true

let displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs false


// let Account = (function() {
//   function generateSequence() {
//     const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     let sequence = "";
//     for (let digit = 0; digit < 16; digit += 1) {
//       let randomIndex = Math.floor(Math.random() * chars.length);
//       sequence += chars[randomIndex];
//     }
//     return sequence;
//   }

//   function isValidPassword(attemptedPassword, correctPassword) {
//     return attemptedPassword === correctPassword;
//   }

//   return {
//     init(email, password, firstName, lastName) {
//       this.mail = email;
//       this.password = password;
//       this.first = firstName;
//       this.last = lastName;
//       this.displayName = generateSequence(); // some method
//       return this;
//     },

//     reanonymize(pw) {
//       if (isValidPassword(pw, this.password)) {
//         this.displayName = generateSequence();
//         return true;
//       } else {
//         return "Invalid Password";
//       }
//     },

//     resetPassword(pw, newPassword) {
//       if (isValidPassword(pw, this.password)) {
//         this.password = newPassword;
//         return true;
//       } else {
//         return "Invalid Password";
//       }
//     },

//     firstName(pw) {
//       if (isValidPassword(pw, this.password)) {
//         return this.first;
//       } else {
//         return "Invalid Password";
//       }
//     },

//     lastName(pw) {
//       if (isValidPassword(pw, this.password)) {
//         return this.last;
//       } else {
//         return "Invalid Password";
//       }
//     },

//     email(pw) {
//       if (isValidPassword(pw, this.password)) {
//         return this.mail;
//       } else {
//         return "Invalid Password";
//       }
//     },
//   };
// })();

// let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
// console.log(fooBar.firstName);                     // returns the firstName function
// console.log(fooBar.email);                         // returns the email function
// console.log(fooBar.firstName('123456'));           // logs 'foo'
// console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
// console.log(fooBar.displayName);                   // logs 16 character sequence
// console.log(fooBar.resetPassword('123', 'abc'));    // logs 'Invalid Password';
// console.log(fooBar.resetPassword('123456', 'abc')); // logs true

// let displayName = fooBar.displayName;
// fooBar.reanonymize('abc');                         // returns true
// console.log(displayName === fooBar.displayName);   // logs false