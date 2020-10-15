document.addEventListener('DOMContentLoaded', function () {
  //    console.log('Dom loaded');
  // reference to add user button
  const addUser = document.querySelector('#button-addon2');
  // creo ul
  const userList = document.createElement('ul');
  // prendo reference alla col a cui voglio aggingere ul
  const colUL = document.querySelector('.col-ul');
  colUL.appendChild(userList);

  // array per gli user
  let arrayG1 = [];
  let arrayG2 = [];
  let arrayG3 = [];
  let arrayG4 = [];

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
      liUser.innerText = inputedUser;
      userList.appendChild(liUser);
      //   empty the input
      document.querySelector('.user-value').value = '';
    }
  });

  // prendiamo reference bottone fire
  const fireBtn = document.querySelector('#fire-btn');
  //   add click
  fireBtn.addEventListener('click', function () {
    // prendo il value del numero di gruppi
    const numeroGruppi = document.querySelector('#inputGroupSelect02');
    // console.log('FIRE BTN WORKS');
    // console.log(numeroGruppi.value);
    // console.log(userList);
    const groupValue = numeroGruppi.value;
    // prendo tutti gli utenti inseriti
    const listItem = document.querySelectorAll('li');

    switch (groupValue) {
      case '2':
        console.log(groupValue);
        // console.log(listItem);
        // console.log(typeof listItem);
        // console.log(listItem.length);
        // devo creare due liste
        const lista1 = document.createElement('ul');

        const lista2 = document.createElement('ul');

        // appendo la lista 1 e la lista 2
        document.querySelector('.g-1').appendChild(lista1);
        document.querySelector('.g-2').appendChild(lista2);

        // do {
        //     let i = 0
        // lista1.appendChild(listItem[i]);
        // lista2.appendChild(listItem[]);
        // } while (listItem.length>0)

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
