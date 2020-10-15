document.addEventListener('DOMContentLoaded', function () {
  // array per gli user
  let arrayG1 = [];
  let arrayG2 = [];
  let arrayG3 = [];
  let arrayG4 = [];
  //    console.log('Dom loaded');
  // reference to add user button
  const addUser = document.querySelector('#button-addon2');
  // creo ul
  const userList = document.createElement('ul');
  userList.classList.add('list-group');
  // prendo reference alla col a cui voglio aggingere ul
  const colUL = document.querySelector('.user-col-ul');
  colUL.appendChild(userList);

  // adding click event
  addUser.addEventListener('click', function () {
    // console.log(`i add users`);
    // input reference
    const inputedUser = document.querySelector('.user-value').value;
    //console.log(inputedUser)
    // console.log(userArray);
    if (inputedUser === '') {
      // &qui andra' il modal
      alert('Please insert User');
    } else {
      const liUser = document.createElement('li');
      liUser.classList.add('list-group-item');
      liUser.innerText = inputedUser;
      userList.appendChild(liUser);
      //   empty the input
      document.querySelector('.user-value').value = '';
    }
  });

  const shufflePlayers = (array) => {
    let shuffledArr = [];

    while (shuffledArr.length < array.length) {
      // genero indice random
      let randomIndex = Math.floor(Math.random() * array.length);
      // se nell'array mescolato c'è già un elemento dell'array non mescolato corrispondente all'indice random, vado anvati
      if (shuffledArr.includes(array[randomIndex])) {
        // console.log('item is included');
        continue;
      } else {
        // se non c'è, lo pusho
        shuffledArr.push(array[randomIndex]);
        // continuo finchè l'array mescoltato non ha la stessa lunghezza di quello non mescolato
      }
    }

    return shuffledArr;
  };

  // prendiamo reference bottone fire
  const fireBtn = document.querySelector('#fire-btn');
  //   add click
  fireBtn.addEventListener('click', function () {
    // prendo il value del numero di gruppi
    const numeroGruppi = document.querySelector('#inputGroupSelect02').value;
    // console.log(numeroGruppi);
    // console.log(typeof numeroGruppi);
    // console.log('FIRE BTN WORKS');
    // console.log(numeroGruppi.value);
    // console.log(userList);
    // prendo tutti gli utenti inseriti

    // console.log(shufflePlayers(listItem));
    const players = document.querySelectorAll('li');
    const shuffledPlayers = shufflePlayers(players);
    console.log(players);
    console.log(shuffledPlayers);
    // players.forEach((pla) => {
    //   console.log(pla.innerText);
    // });
    // console.log(shuffledPlayers.slice(0, shuffledPlayers.length / 2));
    // console.log(shuffledPlayers.slice(shuffledPlayers.length / 2));

    switch (numeroGruppi) {
      case '2':
        // console.log(numeroGruppi);
        // console.log(listItem);
        // console.log(typeof listItem);
        // console.log(listItem.length);
        // devo creare due liste

        arrayG1 = shuffledPlayers.slice(0, shuffledPlayers.length / 2);
        arrayG2 = shuffledPlayers.slice(shuffledPlayers.length / 2);

        const lista1 = document.createElement('ul');
        lista1.classList.add('list-group');

        const lista2 = document.createElement('ul');
        lista2.classList.add('list-group');

        // appendo la lista 1 e la lista 2
        document.querySelector('.g-1').appendChild(lista1);
        document.querySelector('.g-2').appendChild(lista2);

        // creo due heading
        const team1 = document.createElement('h3');
        team1.innerText = 'Team One';
        const team2 = document.createElement('h3');
        team2.innerText = 'Team Two';
        // le inserisco prima delle ul nella col
        document
          .querySelector('.g-1')
          .insertBefore(team1, document.querySelector('.g-1 > ul'));
        document
          .querySelector('.g-2')
          .insertBefore(team2, document.querySelector('.g-2 > ul'));
        //

        for (element of arrayG1) {
          const newLi = document.createElement('li');
          newLi.classList.add('list-group-item');
          newLi.innerText = element.innerText;
          lista1.appendChild(newLi);
        }
        for (element of arrayG2) {
          const newLi = document.createElement('li');
          newLi.classList.add('list-group-item');
          newLi.innerText = element.innerText;
          lista2.appendChild(newLi);
        }

        // for (i = 0; i < listItem.length; i++) {
        //   // creo un list item dove metteo l'utente
        //   const utente1 = document.createElement('li');
        //   const utente2 = document.createElement('li');
        //   utente1.value = listItem[i].value;
        //   utente2.value = listItem[i + 1].value;
        //   lista1.appendChild(utente);
        //   lista2.appendChild(utente2);
        // }

        // do {
        //   for (i = 0; i < listItem.length; i++) {
        //     const utente1 = document.createElement('li');
        //     const utente2 = document.createElement('li');
        //     utente1.value = listItem[i].value;
        //     utente2.value = listItem[i + 1].value;
        //     lista1.appendChild(utente1);
        //     lista2.appendChild(utente2);
        //     listItem[i].remove();
        //     listItem[i + 1].remove();
        //     break;
        //   }
        // } while (listItem.length > 0);

        break;
      case '3':
        // console.log('3 sel');

        break;
      case '4':
        // console.log('4 sel');

        break;

      default:
        // console.log('default selected');
        // &qui andrà un modal
        alert('please select a number of groups');
        break;
    }
  });
});
