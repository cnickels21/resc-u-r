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
  allPets.push(this);
}

// creating new pets here
new Pets('Norabelle', 'doofus', '3 years', '14 lbs', true, true, true, true, true, true, true, 'Nora is a curious cat, as long as you have kitty snacks.  She is goofy and playful, but also humble and likes her long naps in the sun.');

new Pets('Dexter', 'goofybutt', '4 1/2 years', '74 lbs 8 oz', true, true, true, true, true, true, false, 'Dexter is very proud and energetic.  He requires a lot of time for running throughout your typical week and is a leader through and through.');

new Pets('Oscar', 'grumpy', '8 years', '12 lbs', false, false, false, false, true, false, false, 'Oscar is dispassionate and disorderly.  He claims his areas as his own and prefers to play with his toys by himself.  As long as he is fed he will take care of himself.');

new Pets('Koa', 'koa', '8 months', '42 lbs', true, true, false, true, false, true, false, 'Koa is extremely energetic and adventurous.  She wants to see the world and wants an owner to share that experience with.  She is also naturally a leader, unless you are leading the way with some butt scratches.');

new Pets('Lady', 'lady', '7 years', '85 lbs', true, true, false, true, false, true, true, 'Lady a gorgeous black German Shepard who is extremely sweet and fun loving. She loves heading to dog parks to find new furry friends but she would be best in a home with no cats. She is warm hearted and loves to spend her evenings snuggling up.');

new Pets('Princess', 'princess', '2 years', '7 lbs', true, false, true, true, false, true, true, 'Princess loves to sleep most of the day and soak up all the affection people have to give her. She is peppy with just the right amount of sass! She  is friendly, chatty, and loves children and would be a great addition to any family home.');

new Pets('Quirky', 'quirky', '10 years', '45 lbs', true, true, false, true, true, true, true, 'Quirky is just that, quirky! She is energetic, bouncy, goofy and very playful. That being said she can handle  just about anything life has to throw at her! Quirky is very intelligent and loves playing fetch.  She loves to greet the postal carrier with plenty of wags and puppy kisses!');

new Pets('River', 'river', '4 years', '23lbs', false, true, true, true, false, true, true, 'River is a sweet little Terrier who loves a great adventure. She is kind, confident and outgoing with just the right amount of spunk. She loves the outdoors but also loves lazy Sundays inside. River prefers homes with no cats but wouldn’t mind another small dog to play with but is perfectly fine on her own.');

new Pets('Skeletor', 'skeletor', '21 years', '8 lbs 4 oz', false, false, true, true, true, true, false, 'Skeletor is old. Old, old, old. But vibrant. So, so, so vibrant. She’s into the relaxed lifestyle. Plenty of pets and plenty of food and She’ll happily own the arm of your couch for the rest of her days.');

new Pets('Rocket', 'sleepy', '7 years', '12 lbs 8 oz', false, true, false, true, false, true, false, 'Rocket is above it all. He’s friendly, but only as far as it serves his needs. He is a hermit king. He is laid back and probably won’t play much. But he may rub against your leg for a morsel of food.');

new Pets('Samwise', 'snowy', '3 years', '60 lbs 8 oz', true, false, false, true, true, true, true, 'Samwise is the perfect dog--fun, loyal, and good-natured. He will never poop on the rug. And he will always play with the children. And the cats. He looooooves cats. And frisbees!');

new Pets('Biff & Buff', 'twins', '2 years', '5 lbs 2 oz and 6 lbs', true, true, true, true, true, true, false, 'Biff and Buff are inseparable siblings. So we insist they be adopted together! They are their own best friends, so worry not about having to give them too much attention. They’re young and curious, so they can be a bit troublesome, but they mean well.');

new Pets('Clyde', 'hedgy', '11 months', '4lbs 9 oz', false, true, false, true, true, true, true, 'Clyde might be a little messy by nature, but he is a ball of joy to have around. What\'s the point in having a hedgehog around? This little guy will show you that he can love as much as the rest of them. Whether struttin\' his stuff or bummin\' in the palms of your hand, he is a great companion to have around!');

new Pets('Jazzy', 'jazzy', '5 years', '13lbs', false, false, true, false, true, false, true, 'Jazzy is a queen, by her own standards. She prefers her high perches and sunbathing the day away so she may seem low maintenance, but don\'t let her catch you not paying attention to her. If you take her home, she will most definitely make you her human. Even so, she can be quite picky and shy around new people.');

new Pets('Squatch', 'squatch', '2 1/2 years', '16 lbs', true, false, false, true, false, true, false, 'Squatch can be a handful when you let him get his energy out. He will run laps around the house if you let him. A chaotic bundle of joy and energy, but skiddish around other dogs. You will need to keep your energy levels up to keep up with this little guy, but he will always be there when you need a friend.');

new Pets('Matt Barnhart', 'matthew', '33 years', '180 lbs', false, true, true, true, true, true, true, 'Matt is an aspiring digital market and software developer. He also enjoys coffee, cooking, and connecting with people. He aspires to making positive changes in his community by supporting people to the best of his abilities!');

new Pets('Marie Antons', 'marie', '28', '190 lbs', true, false, true, true, true, true, true, 'Marie Antons is an emerging software developer and student at DeltaV. I recently moved back to Iowa from the small Atlantic Island of Bermuda. I previously was in the hospitality industry as a chef and chose to shift careers to gain more stability while still being able to utilize my creativity and passion for constant learning.');

new Pets('Chase Nickels', 'chase', '28 1/2 years', '160 lbs', false, true, false, true, true, true, true, 'Chase is a laid back individual with an unappeasable wanderlust.  He loves mountains and large bodies of water, as well as music in the park and dancing in the rain.  He grew up in a small town in northern Wisconsin. Software development, he believes, is a stepping stone towards growing within an ever changing industry and world.');

//store the pet objects
localStorage.setItem('savedPets', JSON.stringify(allPets));
