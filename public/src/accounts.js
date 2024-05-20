function findAccountById(accounts, id) {
  // Use the find() method to search for an account with the given ID
  return accounts.find(account => account.id === id);
}


function sortAccountsByLastName(accounts) {
  // Use the sort() method to sort the accounts by last name
  return accounts.sort((a, b) => a.name.last.localeCompare(b.name.last));
}


function getAccountFullNames(accounts) {
  // Use map() to transform each account object into its full name
  return accounts.map(account => `${account.name.first} ${account.name.last}`);
}


// NOTE: YOU DON'T HAVE TO EDIT THE FUNCTIONS BELOW
function getTotalNumberOfBorrows(account, books) {
  return books.reduce((acc, book) => {
    const count = book.borrows.reduce((borrowAcc, borrow) => {
      return borrow.id === account.id ? borrowAcc + 1 : borrowAcc;
    }, 0);

    return acc + count;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  return books
    .filter((book) => {
      const recent = book.borrows[0];
      return !recent.returned && recent.id === account.id;
    })
    .map((book) => {
      const author = authors.find((author) => author.id === book.authorId);
      return { ...book, author };
    });
}

function findAccountById(accounts, id) {
  // Use the find() method to search for an account with the given id
  return accounts.find(account => account.id === id);
}

function sortAccountsByLastName(accounts) {
  // Use the sort() method to sort the array of account objects by last name
  accounts.sort((accountA, accountB) => {
      // Extract the last names from the account objects
      const lastNameA = accountA.name.last.toLowerCase();
      const lastNameB = accountB.name.last.toLowerCase();
      // Compare the last names and return the result
      if (lastNameA < lastNameB) return -1;
      if (lastNameA > lastNameB) return 1;
      return 0;
  });
  // Return the sorted array of account objects
  return accounts;
}

function getAccountFullNames(accounts) {
  // Use the map() method to transform each account object into a string representing the full name
  return accounts.map(account => `${account.name.first} ${account.name.last}`);
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getAccountFullNames,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
