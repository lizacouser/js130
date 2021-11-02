// OLOO account prototype
// The created object should not have access to
// the function that anonymizes a user other than
// through the init and reanonymize methods

let Account = (function() {
  let userEmail;
  let userPassword;
  let userFirstName;
  let userLastName;

  function anonymize() {
    const CHARS = "ABCDEFGHIJKLMNOPQRZTUVWXYZabcdefghijklmnopqrestuvwxyz1234567890"
    const DISPLAY_NAME_LENGTH = 16;
    let newDisplayName = '';

    for (let charInd = 0; charInd < DISPLAY_NAME_LENGTH; charInd += 1) {
      let randomIndex = Math.floor(Math.random() * CHARS.length);
      newDisplayName += CHARS[randomIndex];
    }

    return newDisplayName;
  };

  function validPassword(passwordAttempt){
    return userPassword === passwordAttempt;
  }

  return {
    init(email, password, firstName, lastName) {
      userEmail = email;
      userPassword = password;
      userFirstName = firstName;
      userLastName = lastName;
      this.displayName = anonymize();
      return this;
    },

    reanonymize(password) {
      if (validPassword(password)) {
        this.displayName = anonymize();
        return true;
      } else {
        return 'Invalid Password';
      }
    },

    resetPassword(currentPassword, newPassword) {
      if (validPassword(currentPassword)) {
        userPassword = newPassword;
        return true;
      } else {
        return 'Invalid Password';
      }
    }, 

    firstName(password) {
      if (validPassword(password)) {
        return userFirstName;
      } else {
        return 'Invalid Password';
      }
    },
  
    lastName(password) {
      if (validPassword(password)) {
        return userLastName;
      } else {
        return 'Invalid Password';
      }
    },

    email(password) {
      if (validPassword(password)) {
        return userEmail;
      } else {
        return 'Invalid Password';
      }
    },
  }
})();

let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

let displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs false