var customerName = 'bob';

function upperCaseCustomerName() {
  return customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'someone';

function changeLeastFavoriteCustomer() {
  // This will throw an error because you can't change the value of a constant
  leastFavoriteCustomer = 'someone else';
}

// Test the functions
console.log(upperCaseCustomerName()); // Outputs: "BOB"
