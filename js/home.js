'use strict';

function handleFormSubmission(event) {
    event.preventDefault();
    var userData = [];
    var petValue0 = document.getElementById('petInput0').checked;  //get the value of an element by it's id
    userData.push(petValue0);
    var petValue2 = document.getElementById('petInput2').checked;  //get the value of an element by it's id
    userData.push(petValue2);
    var petValue4 = document.getElementById('petInput4').checked;  //get the value of an element by it's id
    userData.push(petValue4);

    console.log(allPets);
    // localStorage.setItem('userData', JSON.stringify(userData));

    for (var i = 0; i = allPets.length; i++) {
        if (userData[0] == allPets[i].energy && userData[2] == allPets[i].social && userData[4] == allPets[i].clean) {
            console.log('hi');
            renderMatch();
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
}

var formElement = document.getElementById('petForm');
formElement.addEventListener('submit', handleFormSubmission);
