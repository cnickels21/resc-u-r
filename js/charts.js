var petLikes = [];
var isGoodWith = ['Likes Dogs', 'Likes Cats', 'Likes Kids', 'Likes Postal Carriers'];
var dogs = 0;
var cats = 0;
var kids = 0;
var postalCarriers = 0;

function getPetLikes() {
  for (var i = 0; i < allPets.length ; i++) {
    if (allPets[i].isGoodWithDogs === true) {
      dogs++;
    }
    if (allPets[i].isGoodWithCats === true) {
      cats++;
    }
    if (allPets[i].isGoodWithKids === true) {
      kids++;
    }
    if (allPets[i].isGoodWithMail === true) {
      postalCarriers++;
    }
  }

  petLikes.push(dogs);
  petLikes.push(cats);
  petLikes.push(kids);
  petLikes.push(postalCarriers);
}

getPetLikes();
runDoughnutChart();

function runDoughnutChart() {
  var ctx = document.getElementById('petChart').getContext('2d');
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: isGoodWith,
      datasets: [{
        label: 'Who are our pets good with?',
        data: petLikes,
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 2
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            stepSize: 1
          }
        }]
      }
    }
  });
}
