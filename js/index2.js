let numbers = [];
// let images = ["pikachu.png","bulbasaur2.jpg","squirtle.png","charmander.png"];
let images = [
    {url   : "pikachu.png",
    type : "electric",
    name : "Pikachu"},
    {url : "bulbasaur2.jpg",
    type : "grass",
    name : "Bulbasaur"},
    {url : "squirtle.png",
    type : "water",
    name : "Squirtle"},
    {url : "charmander.png",
    type : "fire",
    name : "Charmander"},
    {url : "chikorita.jpg",
    type : "grass",
    name : "Chikorita"},
    {url : "cyndaquil.jpg",
    type : "fire",
    name : "Cyndaquil"},
    {url : "totodile.jpg",
    type : "water",
    name : "Totodile"}
];


for (let i = 1; i<=30; i++) {
    numbers.push(i);
}

let konten_el = document.getElementById("konten-holder");

konten_el.innerHTML += `
<div class="card col-md-3">
<div class="card-body">
  <h4>${images}</h4>
</div>
</div>
`



const display = (arr = images) => {
  konten_el.innerHTML = "";

  arr.forEach(images => {
    konten_el.innerHTML += `
      <div class="card col-md-3">
        <div class="card-body">
        <img src="images/${images.url}" class="card-img-top" alt="Profile Images">
        <h3>${images.name}</h3>
        </div>
      </div>
    `
  })
}
 display();

function showType(type) {
  let filtered_images = images.filter(images => images.type === type);

  konten_el.innerHTML = "";

  display(filtered_images);
}

function showGenap() {
  let filtered_nums = numbers.filter(num => num % 2 !== 1);

  konten_el.innerHTML = "";
  display(filtered_nums);
}

function showAll() {
  display();
}
