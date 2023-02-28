let input = document.getElementById("input");
let button = document.getElementById("button");
let greet = document.getElementById("greet");

// function to greet user (homepage)
button.addEventListener ("click", greetingUser);

function greetingUser(event) {
  event.preventDefault();
  greet.textContent = `Nice to meet you, ${input.value}!`
}

const number = window.prompt('Hello, how are you? Please insert a random number!');
window.localStorage.setItem('randomNumber', number);

var counter = 0;
document.getElementById('count').textContent = counter;

function increment() {
  counter += 1;
  document.getElementById('count').value = counter;
}