const isbn_regex = /^(?=(?:[^0-9]*[0-9]){10}(?:(?:[^0-9]*[0-9]){3})?$)[\d-]+$/;

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Write ISBN: ', isbn => {
  console.log(`Check ${isbn_regex.test(isbn)}!`);
  readline.close();
});


