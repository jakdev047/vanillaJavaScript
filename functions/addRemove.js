const bookList = [
  "The Hound of the Baskervilles",
  "On The Electrodynamics of Moving Bodies",
  "Philosophiæ Naturalis Principia Mathematica",
  "Disquisitiones Arithmeticae",
];

// add function not change bookList reference
function add(bookArr, bookName) {
  const modifyBookList = [...bookArr];
  modifyBookList.push(bookName);
  return modifyBookList;
}

// remove function not change bookList reference
function remove(bookArr, bookName) {
  const modifyBookList = [...bookArr];
  const book_index = modifyBookList.indexOf(bookName);
  if (book_index >= 0) {
    modifyBookList.splice(book_index, 1);
    return modifyBookList;
  }
}
