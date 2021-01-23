console.log("Connected");

const button1 = document.getElementById('main-btn');
const button2 = document.getElementById('second-btn');
const container = document.querySelector('#container');

console.log(button1);

// button.addEventListener('click', (event) => {
//   //console.log('You clicked me!');
//   console.log(`You clicked me ${event.target.id}!`);
//   console.log(event);
// });

const whatIsTheId = (event) => {
  console.log(`YOU CLICKED ${event.target.id}!`);
  console.log(event);
  if(event.target.id === 'main-btn') {
    container.innerHTML = "You clicked the Main button";
  } else {
    container.innerHTML = "You clicked the Other button";
  }
}


button1.addEventListener('click', whatIsTheId);
button2.addEventListener('click', whatIsTheId);
