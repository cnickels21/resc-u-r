'use strict';

// team cards rendered to about us page
for (var i = 0; i < allPets.length; i++) {
    if (allPets[i].name === 'Matt Barnhart') {
        renderTeam();
    }
    if (allPets[i].name === 'Marie Antons') {
        renderTeam();
    }
    if (allPets[i].name === 'Chase Nickels') {
        renderTeam();
    }
}

function renderTeam() {
    // individual pet profiles
    var parentElement = document.getElementById('team-cards');
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