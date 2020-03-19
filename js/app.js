'use strict';

for (var i = 0; i < allPets.length; i++) {
  Pets.prototype.render = function () {
    // individual pet profiles
    var parentElement = document.getElementById('pet-profiles');
    var article = document.createElement('article');
    parentElement.appendChild(article);
    // name rendered as card title
    var title = document.createElement('h2');
    title.textContent = this.name;
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
    img.setAttribute('src', 'images/' + this.imageName + '.jpg');
    img.setAttribute('alt', 'Adopt ' + this.name + 'NOW!');
    side.appendChild(img);

    var sideBack = document.createElement('div');
    sideBack.classList.add('side', 'back');
    card.appendChild(sideBack);

    var stats = document.createElement('ul');
    sideBack.appendChild(stats);
    // age rendered
    var old = document.createElement('li');
    old.textContent = `Age: ${this.age}`;
    stats.appendChild(old);
    // weight rendered
    var heavy = document.createElement('li')
    heavy.textContent = `Weight: ${this.weight}`;
    stats.appendChild(heavy);

    // unordered list for pet description

    var doggos = document.createElement('li');
    if (this.isGoodWithDogs === true) {
      doggos.textContent = `Enjoys being around dogs`;
    } else if (this.isGoodWithDogs === false) {
      doggos.textContent = `Does not like dogs`;
    }
    stats.appendChild(doggos);
    // good with cats or not
    var kitties = document.createElement('li');
    if (this.isGoodWithCats === true) {
      kitties.textContent = `Enjoys being around cats`;
    } else if (this.isGoodWithCats === false) {
      kitties.textContent = `Does not like cats`;
    }
    stats.appendChild(kitties);
    // good with kids or not
    var kids = document.createElement('li');
    if (this.isGoodWithKids === true) {
      kids.textContent = `Enjoys being around kids`;
    } else if (this.isGoodWithKids === false) {
      kids.textContent = `Does not like kids`;
    }
    stats.appendChild(kids);
    // good with mailmen or not
    var postal = document.createElement('li');
    if (this.isGoodWithMail === true) {
      postal.textContent = `Won't attack postal carriers`;
    } else if (this.isGoodWithMail === false) {
      postal.textContent = `Postal carriers beware!`;
    }
    stats.appendChild(postal);
    // personality paragraph
    var personaParagraph = document.createElement('p');
    personaParagraph.textContent = this.personality;
    article.appendChild(personaParagraph);
  }
  allPets[i].render();
}

function welcomeMessage(event) {
    event.preventDefault();
    var returnMessage = localStorage.getItem('yourName');
    if (returnMessage) {
        pageLoad.textContent = `Hey ${returnMessage}! Check out some other options.`;
    } else {
        pageLoad.textContent = `Peruse your options here!`;
    }
}

var pageLoad = document.getElementById('profile-message');
window.addEventListener('load', welcomeMessage);