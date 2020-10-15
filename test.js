// const shufflePlayers = (array) => {
//   let shuffledArr = [];
//   for (i = 0; i < array.length; i++) {
//     let randomNumber = Math.floor(Math.random() * array.length);
//     array.push(array[randomNumber]);
//     array.splice(array[randomNumber], 1);
//   }
//   return array;
// };

const shufflePlayers = (array) => {
  let shuffledArr = [];

  while (shuffledArr.length < array.length) {
    // genero indice random
    let randomIndex = Math.floor(Math.random() * array.length);
    // se nell'array mescolato c'è già un elemento dell'array non mescolato corrispondente all'indice random, vado anvati
    if (shuffledArr.includes(array[randomIndex])) {
      console.log('item is included');
      continue;
    } else {
      // se non c'è, lo pusho
      shuffledArr.push(array[randomIndex]);
      // continuo finchè l'array mescoltato non ha la stessa lunghezza di quello non mescolato
    }
  }

  return shuffledArr;
};

console.log(
  shufflePlayers([
    '1sergio',
    '2sara',
    '3giorgio',
    '4maria',
    '6luca',
    '7sdfsf',
    '8dsad',
  ])
);

// prendere la lista
// numero random per la lunghezza dell''array
//  darle una mescolata

// dividerla per il numero di gruppi che ho (ogni gruppo, un array)
// e da ogni array, pusho nella lista con dei loop singoli (uno per array)
