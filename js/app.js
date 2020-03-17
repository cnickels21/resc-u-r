'use strict';

var allPets = [];  // Array to hold all pet objects

// Pet constructor
function Pets(name, imageName, age, weight, energy, social, clean, isGoodWithDogs, isGoodWithCats, isGoodWithKids, isGoodWithMail, personality) {
    this.name = name;
    this.imageName = imageName;
    this.age = age;
    this.weight = weight;
    this.energy = energy;
    this.social = social;
    this.clean = clean;
    this.isGoodWithDogs = isGoodWithDogs;
    this.isGoodWithCats = isGoodWithCats;
    this.isGoodWithKids = isGoodWithKids;
    this.isGoodWithMail = isGoodWithMail;
    this.personality = personality;
    this.createPet = this.render();
    allPets.push(this);
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

// creating new pets here
new Pets('Norabelle', 'doofus', '3 years', '14 lbs', 'energetic', 'friendly', 'neat', true, true, true, true, 'Nora is a curious cat, as long as you have kitty snacks.  She is goofy and playful, but also humble and likes her long naps in the sun.');

new Pets('Dexter', 'goofybutt', '4 1/2 years', '74 lbs 8 oz', 'energetic', 'friendly', 'neat', true, true, true, false, 'Dexter is very proud and energetic.  He requires a lot of time for running throughout your typical week and is a leader through and through.');

new Pets('Oscar', 'grumpy', '8 years', '12 lbs', 'calm', 'shy', 'disorderly', false, true, false, false, 'Oscar is dispassionate and disorderly.  He claims his areas as his own and prefers to play with his toys by himself.  As long as he is fed he will take care of himself.');

new Pets('Koa', 'koa', '8 months', '42 lbs', 'energetic', 'friendly', 'disorderly', true, false, true, false, 'Koa is extremely energetic and adventurous.  She wants to see the world and wants an owner to share that experience with.  She is also naturally a leader, unless you are leading the way with some butt scratches.');

new Pets('Lady', 'lady', '7 years', '85 lbs', 'energetic', 'friendly', 'disorderly', true, false, true, true, 'Lady a gorgeous black German Shepard who is extremely sweet and fun loving. She loves heading to dog parks to find new furry friends but she would be best in a home with no cats. She is warm hearted and loves to spend her evenings snuggling up.');

new Pets('Princess', 'princess', '2 years', '7 lbs', 'energetic', 'friendly', 'neat', true, false, true, true, 'Princess loves to sleep most of the day and soak up all the affection people have to give her. She is peppy with just the right amount of sass! She  is friendly, chatty, and loves children and would be a great addition to any family home.');

new Pets('Quirky', 'quirky', '10 years', '45 lbs', 'energetic', 'friendly', 'disorderly', true, true, true, true, 'Quirky is just that, quirky! She is energetic, bouncy, goofy and very playful. That being said she can handle  just about anything life has to throw at her! Quirky is very intelligent and loves playing fetch.  She loves to greet the postal carrier with plenty of wags and puppy kisses!');

new Pets('River', 'river', '4 years', '3lbs', 'calm', 'friendly', 'neat', true, false, true, true, 'River is a sweet little Terrier who loves a great adventure. She is kind, confident and outgoing with just the right amount of spunk. She loves the outdoors but also loves lazy Sundays inside. River prefers homes with no cats but wouldn’t mind another small dog to play with but is perfectly fine on her own.');

new Pets('Skeletor', 'skeletor', '21 years', '8 lbs 4 oz', 'calm', 'shy', 'neat', true, true, true, false, 'Skeletor is old. Old, old, old. But vibrant. So, so, so vibrant. She’s into the relaxed lifestyle. Plenty of pets and plenty of food and She’ll happily own the arm of your couch for the rest of her days.');

new Pets('Rocket', 'sleepy', '7 years', '12 lbs 8 oz', 'calm', 'friendly', 'disorderly', true, false, true, false, 'Rocket is above it all. He’s friendly, but only as far as it serves his needs. He is a hermit king. He is laid back and probably won’t play much. But he may rub against your leg for a morsel of food.');

new Pets('Samwise', 'snowy', '3 years', '60 lbs 8 oz', 'energetic', 'friendly', 'disorderly', true, true, true, true, 'Samwise is the perfect dog--fun, loyal, and good-natured. He will never poop on the rug. And he will always play with the children. And the cats. He looooooves cats. And frisbees!');

new Pets('Biff and Buff', 'twins', '2 years', '5 lbs 2 oz and 6 lbs', 'energetic', 'friendly', 'neat', true, true, true, false, 'Biff and Buff are inseparable siblings. So we insist they be adopted together! They are their own best friends, so worry not about having to give them too much attention. They’re young and curious, so they can be a bit troublesome, but they mean well.');

localStorage.setItem('savedPets', JSON.stringify(allPets));