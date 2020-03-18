'use strict';

function handleFormSubmission(event) {
  event.preventDefault();


  var userData = [];
  var petValue0 = document.getElementById('petInput0').checked;  //get the value of an element by it's id
  userData.push(petValue0);
  var petValue1 = document.getElementById('petInput2').checked;  //get the value of an element by it's id
  userData.push(petValue1);
  var petValue2 = document.getElementById('petInput4').checked;  //get the value of an element by it's id
  userData.push(petValue2);



  // localStorage.setItem('userData', JSON.stringify(userData));

  for (var i = 0; i < allPets.length; i++) {
    if (userData[0] === allPets[i].energy) {
      if (userData[1] === allPets[i].social) {
        if (userData[2] === allPets[i].clean) {
          renderMatch(allPets[i]);
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
    var img = document.createElement('img');
    img.setAttribute('src', 'images/' + allPets[i].imageName + '.jpg');
    img.setAttribute('alt', 'Adopt ' + allPets[i].name + 'NOW!');
    article.appendChild(img);
    // unordered list for pet description
    var description = document.createElement('ul');
    article.appendChild(description);
    // age rendered
    var old = document.createElement('li');
    old.textContent = `Age: ${allPets[i].age}`;
    description.appendChild(old);
    // weight rendered
    var heavy = document.createElement('li')
    heavy.textContent = `Weight: ${allPets[i].weight}`;
    description.appendChild(heavy);
    // good with dogs or not
    var doggos = document.createElement('li');
    if (allPets[i].isGoodWithDogs === true) {
      doggos.textContent = `Enjoys being around dogs`;
    } else if (allPets[i].isGoodWithDogs === false) {
      doggos.textContent = `Does not like dogs`;
    }
    description.appendChild(doggos);
    // good with cats or not
    var kitties = document.createElement('li');
    if (allPets[i].isGoodWithCats === true) {
      kitties.textContent = `Enjoys being around cats`;
    } else if (allPets[i].isGoodWithCats === false) {
      kitties.textContent = `Does not like cats`;
    }
    description.appendChild(kitties);
    // good with kids or not
    var kids = document.createElement('li');
    if (allPets[i].isGoodWithKids === true) {
      kids.textContent = `Enjoys being around kids`;
    } else if (allPets[i].isGoodWithKids === false) {
      kids.textContent = `Does not like kids`;
    }
    description.appendChild(kids);
    // good with mailmen or not
    var postal = document.createElement('li');
    if (allPets[i].isGoodWithMail === true) {
      postal.textContent = `Won't attack postal carriers`;
    } else if (allPets[i].isGoodWithMail === false) {
      postal.textContent = `Postal carriers beware!`;
    }
    description.appendChild(postal);
    // personality paragraph
    var personaParagraph = document.createElement('p');
    personaParagraph.textContent = allPets[i].personality;
    article.appendChild(personaParagraph);
  }
  document.getElementById('petForm').reset();
}

var formElement = document.getElementById('petForm');
formElement.addEventListener('submit', handleFormSubmission);

//Slide show

(function () {

  const imgArray = [];
  for (var i = 0; i < allPets.length; i++) {
    imgArray.push('../images/' + allPets[i].imageName + '.jpg');
    console.log(imgArray);
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

