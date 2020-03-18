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
        var img = document.createElement('img');
        img.setAttribute('src', 'images/' + this.imageName + '.jpg');
        img.setAttribute('alt', 'Adopt ' + this.name + 'NOW!');
        article.appendChild(img);
        // unordered list for pet description
        var description = document.createElement('ul');
        article.appendChild(description);
        // age rendered
        var old = document.createElement('li');
        old.textContent = `Age: ${this.age}`;
        description.appendChild(old);
        // weight rendered
        var heavy = document.createElement('li')
        heavy.textContent = `Weight: ${this.weight}`;
        description.appendChild(heavy);
        // good with dogs or not
        var doggos = document.createElement('li');
        doggos.textContent = `Is good with dogs: ${this.isGoodWithDogs}`;
        description.appendChild(doggos);
        // good with cats or not
        var kitties = document.createElement('li');
        kitties.textContent = `Is good with cats: ${this.isGoodWithCats}`;
        description.appendChild(kitties);
        // good with kids or not
        var kids = document.createElement('li');
        kids.textContent = `Is good with kids: ${this.isGoodWithKids}`;
        description.appendChild(kids);
        // good with mailmen or not
        var postal = document.createElement('li');
        postal.textContent = `Is good with postal carriers: ${this.isGoodWithMail}`;
        description.appendChild(postal);
        // personality paragraph
        var personaParagraph = document.createElement('p');
        personaParagraph.textContent = this.personality;
        article.appendChild(personaParagraph);
    }
    allPets[i].render();
}




