'use strict';

// https://medium.com/@zackcreach/shred-the-gnar-how-to-write-decode-regex-for-email-validation-9a970fa91641 used this to read more about regex. 
// Grab the email input field and also the update div below it
// Why: to listen for changes in the input field, and show live updates in the update label!
const email = document.querySelector('.email');
const update = document.querySelector('.update');
// Listen to any change to the input we selected above
// Why: to validate the string as we type (on each keystroke)

function inputEmail(e) {
  const input = e.target.value;
  // Check if the input is NOT blank first, and if it's not, make sure it matches our regex test
  // Why: because we don't want to start validating before the user has started typing; after that it's fair game
  if (input && /(^\w.*@\w+\.\w)/.test(input)) {
    update.textContent = 'Valid Email!';
    update.classList.add('success');
    update.classList.remove('failure');
  } else {
    update.textContent = 'Keep Going...';
    update.classList.remove('success');
    update.classList.add('failure');
  }
}
email.addEventListener('input', inputEmail);

// Pet roulette

var rouletteButton = document.getElementById('roulette-button');
rouletteButton.addEventListener('click', petRoulette);
var randomInt = Math.floor(Math.random() * allPets.length);

function petRoulette() {
  var i = randomInt;
  var hideForm = document.getElementById('form-div');
  hideForm.classList.add('hide');

  // individual pet profiles
  var parentElement = document.getElementById('match-profiles');
  var article = document.createElement('article');
  parentElement.appendChild(article);
  // name rendered as card title
  var title = document.createElement('h2');
  title.textContent = allPets[i].name;
  article.appendChild(title);
  // image set into card

  var cardContainer = document.createElement('div');
  cardContainer.classList.add('card-container');
  article.appendChild(cardContainer);

  var card = document.createElement('div');
  card.classList.add('card');
  cardContainer.appendChild(card);

  var side = document.createElement('div');
  side.classList.add('side');
  card.appendChild(side);

  var img = document.createElement('img');
  img.setAttribute('src', 'images/' + allPets[i].imageName + '.jpg');
  img.setAttribute('alt', 'Adopt ' + allPets[i].name + 'NOW!');
  side.appendChild(img);

  var sideBack = document.createElement('div');
  sideBack.classList.add('side', 'back');
  card.appendChild(sideBack);

  var stats = document.createElement('ul');
  sideBack.appendChild(stats);
  // age rendered
  var old = document.createElement('li');
  old.textContent = `Age: ${allPets[i].age}`;
  stats.appendChild(old);
  // weight rendered
  var heavy = document.createElement('li')
  heavy.textContent = `Weight: ${allPets[i].weight}`;
  stats.appendChild(heavy);

  // unordered list for pet description
  var doggos = document.createElement('li');
  if (allPets[i].isGoodWithDogs === true) {
    doggos.textContent = 'Enjoys being around dogs';
  } else if (allPets[i].isGoodWithDogs === false) {
    doggos.textContent = 'Does not like dogs';
  }
  stats.appendChild(doggos);
  // good with cats or not
  var kitties = document.createElement('li');
  if (allPets[i].isGoodWithCats === true) {
    kitties.textContent = 'Enjoys being around cats';
  } else if (allPets[i].isGoodWithCats === false) {
    kitties.textContent = 'Does not like cats';
  }
  stats.appendChild(kitties);
  // good with kids or not
  var kids = document.createElement('li');
  if (allPets[i].isGoodWithKids === true) {
    kids.textContent = 'Enjoys being around kids';
  } else if (allPets[i].isGoodWithKids === false) {
    kids.textContent = 'Does not like kids';
  }
  stats.appendChild(kids);
  // good with mailmen or not
  var postal = document.createElement('li');
  if (allPets[i].isGoodWithMail === true) {
    postal.textContent = 'Won\'t attack postal carriers';
  } else if (allPets[i].isGoodWithMail === false) {
    postal.textContent = 'Postal carriers beware!';
  }
  stats.appendChild(postal);
  // personality paragraph
  var personaParagraph = document.createElement('p');
  personaParagraph.textContent = allPets[i].personality;
  article.appendChild(personaParagraph);

  document.getElementById('petForm').reset();
}

// Form submission function

function handleFormSubmission(event) {
  event.preventDefault();

  var adopter = document.getElementById('name').value;
  localStorage.setItem('yourName', adopter);

  var userData = [];
  var petValue0 = document.getElementById('petInput0').checked;  //get the value of an element by it's id
  userData.push(petValue0);
  var petValue1 = document.getElementById('petInput2').checked;  //get the value of an element by it's id
  userData.push(petValue1);
  var petValue2 = document.getElementById('petInput4').checked;  //get the value of an element by it's id
  userData.push(petValue2);

  var hideForm = document.getElementById('form-div');
  hideForm.classList.add('hide');

  for (var i = 0; i < allPets.length; i++) {
    if (userData[0] === allPets[i].energy) {
      if (userData[1] === allPets[i].social) {
        if (userData[2] === allPets[i].clean) {
          renderMatch(allPets[i]);
          localStorage.setItem('yourMatches', JSON.stringify(allPets[i]));
        }
      }
    }
  }

  // render user pet matches in place of form
  function renderMatch() {
    // individual pet profiles
    var parentElement = document.getElementById('match-profiles');
    var article = document.createElement('article');
    parentElement.appendChild(article);
    // name rendered as card title
    var title = document.createElement('h2');
    title.textContent = allPets[i].name;
    article.appendChild(title);
    // image set into card
    var cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container');
    article.appendChild(cardContainer);
    var card = document.createElement('div');
    card.classList.add('card');
    cardContainer.appendChild(card);
    var side = document.createElement('div');
    side.classList.add('side');
    card.appendChild(side);
    var img = document.createElement('img');
    img.setAttribute('src', 'images/' + allPets[i].imageName + '.jpg');
    img.setAttribute('alt', 'Adopt ' + allPets[i].name + 'NOW!');
    side.appendChild(img);
    var sideBack = document.createElement('div');
    sideBack.classList.add('side', 'back');
    card.appendChild(sideBack);
    var stats = document.createElement('ul');
    sideBack.appendChild(stats);
    // age rendered
    var old = document.createElement('li');
    old.textContent = `Age: ${allPets[i].age}`;
    stats.appendChild(old);
    // weight rendered
    var heavy = document.createElement('li')
    heavy.textContent = `Weight: ${allPets[i].weight}`;
    stats.appendChild(heavy);

    // unordered list for pet description
    var doggos = document.createElement('li');
    if (allPets[i].isGoodWithDogs === true) {
      doggos.textContent = 'Enjoys being around dogs';
    } else if (allPets[i].isGoodWithDogs === false) {
      doggos.textContent = 'Does not like dogs';
    }
    stats.appendChild(doggos);
    // good with cats or not
    var kitties = document.createElement('li');
    if (allPets[i].isGoodWithCats === true) {
      kitties.textContent = 'Enjoys being around cats';
    } else if (allPets[i].isGoodWithCats === false) {
      kitties.textContent = 'Does not like cats';
    }
    stats.appendChild(kitties);
    // good with kids or not
    var kids = document.createElement('li');
    if (allPets[i].isGoodWithKids === true) {
      kids.textContent = 'Enjoys being around kids';
    } else if (allPets[i].isGoodWithKids === false) {
      kids.textContent = 'Does not like kids';
    }
    stats.appendChild(kids);
    // good with mailmen or not
    var postal = document.createElement('li');
    if (allPets[i].isGoodWithMail === true) {
      postal.textContent = 'Won\'t attack postal carriers';
    } else if (allPets[i].isGoodWithMail === false) {
      postal.textContent = 'Postal carriers beware!';
    }
    stats.appendChild(postal);
    // personality paragraph
    var personaParagraph = document.createElement('p');
    personaParagraph.textContent = allPets[i].personality;
    article.appendChild(personaParagraph);
  }

  document.getElementById('petForm').reset();
}

var formElement = document.getElementById('petForm');
formElement.addEventListener('submit', handleFormSubmission);

// On load message

function welcomeMessage(event) {
  event.preventDefault();
  var returnMessage = localStorage.getItem('yourName');
  if (returnMessage) {
    pageLoad.textContent = `Welcome back, ${returnMessage}!`;
  } else {
    pageLoad.textContent = 'Welcome to Resc-U-r. Find your ideal pet!';
  }
}

var pageLoad = document.getElementById('welcome');
window.addEventListener('load', welcomeMessage);

//Slide show
// https://stackoverflow.com/questions/50788951/loop-through-image-array-with-pure-javascript

(function () {

  const imgArray = [];
  for (var i = 0; i < allPets.length; i++) {
    imgArray.push('../images/' + allPets[i].imageName + '.jpg');
  }

  var index = 0;  // This will keep track of the current array index to use
  var img = document.getElementById('img'); // Get your reference just once, not on each function call
  console.log(imgArray);

  function autoChange() {
    // You only need to ensure that the index isn't out of bounds
    if (index < imgArray.length) {
      img.src = imgArray[index];      // If not, use the index
      index++;                        // Then, increment it
      console.clear();
      console.log(imgArray[index]);
    } else {
      index = 0;  // If so, reset the index
    }
    // Now that the right image is showing, wait 3 seconds and call the function all over again
    setTimeout(autoChange, 3000);
  }
  autoChange();
})();
