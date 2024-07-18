let numbers = [];

for (let i = 1; i<=30; i++) {
    numbers.push(i);
}

let konten_el = document.getElementById("konten-holder");

const display = (arr = numbers) => {
  konten_el.innerHTML = "";

  arr.forEach(num => {
    konten_el.innerHTML += `
      <div class="card col-md-3">
        <div class="card-body">
          <h4>${num}</h4>
        </div>
      </div>
    `
  })
}
 display();

function showGanjil() {
  let filtered_nums = numbers.filter(num => num % 2 !== 0);

  konten_el.innerHTML = "";

  display(filtered_nums);
}

function showGenap() {
  let filtered_nums = numbers.filter(num => num % 2 !== 1);

  konten_el.innerHTML = "";
  display(filtered_nums);
}

function showAll() {
  display();
}
