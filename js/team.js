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
    if  (allPets[i].isGoodWithDogs === true) {
        doggos.textContent = `Enjoys being around dogs`;
    } else if  (allPets[i].isGoodWithDogs === false) {
        doggos.textContent = `Does not like dogs`;
    }
    description.appendChild(doggos);
    // good with cats or not
    var kitties = document.createElement('li');
    if  (allPets[i].isGoodWithCats === true) {
        kitties.textContent = `Enjoys being around cats`;
    } else if  (allPets[i].isGoodWithCats === false) {
        kitties.textContent = `Does not like cats`;
    }
    description.appendChild(kitties);
    // good with kids or not
    var kids = document.createElement('li');
    if  (allPets[i].isGoodWithKids === true) {
        kids.textContent = `Enjoys being around kids`;
    } else if  (allPets[i].isGoodWithKids === false) {
        kids.textContent = `Does not like kids`;
    }
    description.appendChild(kids);
    // good with mailmen or not
    var postal = document.createElement('li');
    if  (allPets[i].isGoodWithMail === true) {
        postal.textContent = `Won't attack postal carriers`;
    } else if  (allPets[i].isGoodWithMail === false) {
        postal.textContent = `Postal carriers beware!`;
    }
    description.appendChild(postal);
    // personality paragraph
    var personaParagraph = document.createElement('p');
    personaParagraph.textContent = allPets[i].personality;
    article.appendChild(personaParagraph);
}