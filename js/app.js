'use strict';
console.log('hi');
var allPets = [];  // Array to hold all pet objects

// Pet constructor
function Pets(name, imageName, age, weight, isGoodWithKids, isGoodWithDogs, isGoodWithCats, isGoodWithMail, personality) {
    this.name = name;
    this.imageName = imageName;
    this.age = age;
    this.weight = weight;
    this.isGoodWithKids = isGoodWithKids;
    this.isGoodWithDogs = isGoodWithDogs;
    this.isGoodWithCats = isGoodWithCats;
    this.isGoodWithMail = isGoodWithMail;
    this.personality = personality;
    this.createPet = this.render();
    Pets.allPets.push(this);
}

Pets.prototype.render = function() {
    // individual pet profiles
    var parentElement = document.getElementById('pet-profiles');
    var article = document.createElement('article');
    parentElement.appendChild(article);
    // name rendered as card title
    var title = document.createElement('h2');
    title.textContent = this.name;
    article.appendChild(title);
    // image set into card
    var img = document.createElement('img');
    img.setAttribute('src', 'images/' + this.imageName + '.jpg');
    img.setAttribute('alt', 'Adopt ' + this.name + 'NOW!');
    article.appendChild(img);
    // unordered list for pet description
    var description = document.createElement('ul');
    article.appendChild(description);
    // age rendered
    var old = document.createElement('li');
    old.textContent = this.age;
    description.appendChild(old);
    // weight rendered
    var heavy = document.createElement('li')
    heavy.textContent = this.weight;
    description.appendChild(heavy);
    // good with kids or not
    var kids = document.createElement('li');
    kids.textContent = this.isGoodWithKids;
    description.appendChild(kids);
    // good with dogs or not
    var doggos = document.createElement('li');
    doggos.textContent = this.isGoodWithDogs;
    description.appendChild(doggos);
    // good with cats or not
    var kitties = document.createElement('li');
    kitties.textContent = this.isGoodWithCats;
    description.appendChild(kitties);
    // good with mailmen or not
    var postal = document.createElement('li');
    postal.textContent = this.isGoodWithMail;
    description.appendChild(postal);
    // personality paragraph
    var personaParagraph = document.createElement('p');
    personaParagraph.textContent = this.personality;
    article.appendChild(personaParagraph);
}

new Pets('Norabelle', 'images/doofus.jpg', '3 years', '14 lbs', true, true, true, true, 'Nora is a curious cat, as long as you have kitty snacks.  She is goofy and playful, but also humble and likes here long naps in the sun.');


// (name, imageName, age, weight, isGoodWithKids, isGoodWithDogs, isGoodWithCats, isGoodWithMail, personality)