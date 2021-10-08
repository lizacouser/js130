// refactor invocation
// keep definition
// don't need to grab each element by index

function formatName(firstName, middleName, lastName) {
  return `${lastName}, ${firstName} ${middleName[0]}.`;
}

let fullName = ['James', 'Tiberius', 'Kirk'];

console.log(formatName(...fullName));
// logs: Kirk, James T.