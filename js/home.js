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
        if (this.isGoodWithDogs === true) {
            doggos.textContent = `Enjoys being around dogs`;
        } else if (this.isGoodWithDogs === false) {
            doggos.textContent = `Does not like dogs`;
        }
        description.appendChild(doggos);
        // good with cats or not
        var kitties = document.createElement('li');
        if (this.isGoodWithCats === true) {
            kitties.textContent = `Enjoys being around cats`;
        } else if (this.isGoodWithCats === false) {
            kitties.textContent = `Does not like cats`;
        }
        description.appendChild(kitties);
        // good with kids or not
        var kids = document.createElement('li');
        if (this.isGoodWithKids === true) {
            kids.textContent = `Enjoys being around kids`;
        } else if (this.isGoodWithKids === false) {
            kids.textContent = `Does not like kids`;
        }
        description.appendChild(kids);
        // good with mailmen or not
        var postal = document.createElement('li');
        if (this.isGoodWithMail === true) {
            postal.textContent = `Won't attack postal carriers`;
        } else if (this.isGoodWithMail === false) {
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

