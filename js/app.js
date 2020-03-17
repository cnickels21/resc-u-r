'use strict';

var allPets = [];  // Array to hold all pet objects

// Pet constructor
function Pets(name, age, weight) {
    this.imageName = imageName;
    this.name = name;
    this.age = age;
    this.weight = weight;
    this.isGoodWithKids = isGoodWithKids;
    this.isGoodWithDogs = isGoodWithDogs;
    this.isGoodWithCats = isGoodwithCats;
    this.isGoodWithMail = isGoodWithMail;
    this.personality = personality;
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
    postal.textContent = this.isGoodWithmail;
    description.appendChild(postal);
    // personality paragraph
    var personaParagraph = document.createElement('p');
    personaParagraph.textContent = this.personality;
    article.appendChild(personaParagraph);
}




// Does well with kids, cats, dogs and mail carriers
// Personality:  Nora is a curious cat, as long as you have kitty snacks.  She is goofy and playful, but also humble and likes here long naps in the sun.


// function Pet(name, breed, imageName, interests, isGoodWithKids, isGoodWithDogs, isGoodWithCats) {
//     this.name = name;
//     this.breed = breed;
//     this.age = this.setAge();
//     this.imageName = imageName;
//     this.interests = interests;
//     this.isGoodWithKids = isGoodWithKids;
//     this.isGoodWithDogs = isGoodWithDogs;
//     this.isGoodWithCats = isGoodWithCats;
//     Pet.allPets.push(this);
//   }
//   Pet.Pets = [];

// Create some DOM elements and then render them in the index
// Pet.prototype.render = function() {
//     grab the parent element
//     var parentElement = document.getElementById('kitten-profiles');
//     create child elements article, h2, p, ul, li interests and image
//     var article = document.createElement('article');
//     parentElement.appendChild(article);
//     var h2 = document.createElement('h2');
//     h2.textContent = this.name;
//     article.appendChild(h2);
//     var petParagraph = document.createElement('p');
//     petParagraph.textContent = `${this.name} is adorable, and is ${this.age} old.`;
//     article.appendChild(petParagraph);
//     var ul = document.createElement('ul');
//     article.appendChild(ul);
//     for(let i = 0; i < this.interests.length; i++) {
//       var li = document.createElement('li');
//       li.textContent = this.interests[i];
//       ul.appendChild(li);
//     }
//     var img = document.createElement('img');
//     img.setAttribute('src', 'images/' + this.imageName + '.jpg');
//     img.setAttribute('alt', 'Adopt ' + this.name + 'NOW!');
//     article.appendChild(img);
//   }  