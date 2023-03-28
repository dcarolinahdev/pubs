const bars = [
  {
    id: 1,
    name: "The Rusty Anchor",
    city: "New York",
    address: "123 Main St",
    liquor: ["Beer", "Wine", "Vodka"]
  },
  {
    id: 2,
    name: "The Tipsy Teapot",
    city: "Los Angeles",
    address: "456 Elm St",
    liquor: ["Tequila", "Gin", "Rum", "Whiskey"]
  },
  {
    id: 3,
    name: "The Frothy Mug",
    city: "Chicago",
    address: "789 Oak St",
    liquor: ["Beer", "Vodka", "Rum"]
  },
  {
    id: 4,
    name: "The Corkscrew",
    city: "San Francisco",
    address: "1010 Pine St",
    liquor: ["Wine", "Champagne", "Vodka"]
  },
  {
    id: 5,
    name: "The Hoppy Hare",
    city: "Boston",
    address: "1111 Maple St",
    liquor: ["Beer", "Gin", "Whiskey"]
  },
  {
    id: 6,
    name: "The Grape Escape",
    city: "Seattle",
    address: "1212 Cedar St",
    liquor: ["Wine", "Champagne"]
  },
  {
    id: 7,
    name: "The Buzzing Bee",
    city: "Houston",
    address: "1313 Walnut St",
    liquor: ["Tequila", "Gin", "Rum"]
  },
  {
    id: 8,
    name: "The Smoky Lounge",
    city: "Miami",
    address: "1414 Chestnut St",
    liquor: ["Whiskey", "Vodka"]
  },
  {
    id: 9,
    name: "The Tipsy Turtle",
    city: "Denver",
    address: "1515 Pine St",
    liquor: ["Beer", "Tequila", "Rum"]
  },
  {
    id: 10,
    name: "The Drunken Donkey",
    city: "Portland",
    address: "1616 Oak St",
    liquor: ["Whiskey", "Vodka", "Gin"]
  }
];

const beverages = [
  {
    id: 1,
    name: "Pilsner Urquell",
    type: "Beer",
    alcohol: 4.4
  },
  {
    id: 2,
    name: "Budweiser",
    type: "Beer",
    alcohol: 5
  },
  {
    id: 3,
    name: "Cabernet Sauvignon",
    type: "Wine",
    alcohol: 13.5
  },
  {
    id: 4,
    name: "Grey Goose",
    type: "Vodka",
    alcohol: 40
  },
  {
    id: 5,
    name: "Jack Daniel's",
    type: "Whiskey",
    alcohol: 40
  },
  {
    id: 6,
    name: "Margarita",
    type: "Tequila",
    alcohol: 10
  },
  {
    id: 7,
    name: "Gin and Tonic",
    type: "Gin",
    alcohol: 10
  },
  {
    id: 8,
    name: "Rum and Coke",
    type: "Rum",
    alcohol: 10
  },
  {
    id: 9,
    name: "Screwdriver",
    type: "Vodka",
    alcohol: 10
  },
  {
    id: 10,
    name: "Moscow Mule",
    type: "Vodka",
    alcohol: 10
  }
];

const servidas = [
  { "bar_id": 1, "beverage_id": 2, "quantity": 10, "price": 5.99 },
  { "bar_id": 1, "beverage_id": 5, "quantity": 7, "price": 8.50 },
  { "bar_id": 2, "beverage_id": 1, "quantity": 15, "price": 3.99 },
  { "bar_id": 2, "beverage_id": 3, "quantity": 5, "price": 12.99 },
  { "bar_id": 3, "beverage_id": 4, "quantity": 3, "price": 15.00 },
  { "bar_id": 3, "beverage_id": 5, "quantity": 2, "price": 12.50 },
  { "bar_id": 4, "beverage_id": 8, "quantity": 9, "price": 7.25 },
  { "bar_id": 4, "beverage_id": 9, "quantity": 11, "price": 6.50 },
  { "bar_id": 5, "beverage_id": 6, "quantity": 13, "price": 10.50 },
  { "bar_id": 5, "beverage_id": 7, "quantity": 8, "price": 9.00 },
  { "bar_id": 6, "beverage_id": 10, "quantity": 20, "price": 7.99 },
  { "bar_id": 7, "beverage_id": 1, "quantity": 18, "price": 4.50 },
  { "bar_id": 7, "beverage_id": 2, "quantity": 6, "price": 6.99 },
  { "bar_id": 8, "beverage_id": 4, "quantity": 4, "price": 17.50 },
  { "bar_id": 8, "beverage_id": 5, "quantity": 3, "price": 14.00 },
  { "bar_id": 9, "beverage_id": 7, "quantity": 12, "price": 8.50 },
  { "bar_id": 9, "beverage_id": 8, "quantity": 6, "price": 6.75 },
  { "bar_id": 10, "beverage_id": 3, "quantity": 9, "price": 14.99 },
  { "bar_id": 10, "beverage_id": 6, "quantity": 7, "price": 11.50 },
  { "bar_id": 10, "beverage_id": 9, "quantity": 5, "price": 5.99 }
];

// punto 1

for (let i = 0; i < servidas.length; i++) {
  arrayName = bars[servidas[i].bar_id - 1].liquor
  typeName = beverages[servidas[i].beverage_id - 1].type

  if (arrayName.includes(typeName) == false) {
    servidas.splice(i, 1)
    i -= 1;
  }

}
console.log(servidas);

// punto 2
const barName = bars.map(bar => bar.name);
const beverageName = beverages.map(beverage => beverage.name);
const quantityFilter = servidas.map(servidas => servidas.quantity)
const price = servidas.map(servidas => servidas.price)

const filtrado_servidas = servidas.map(servida => {
  return {

    bar_name: barName[servida.bar_id - 1],
    beverage_name: beverageName[servida.beverage_id - 1],
    quantity: servida.quantity,
    price: servida.price
  }
});

console.log(filtrado_servidas);

function addCards(filtrado_servidas) {
  const cards = document.getElementById('cards');
  for (let i = 0; i < filtrado_servidas.length; i++) {
    let id = `cards${i + 1}`
    let tempCard = createCard(id, filtrado_servidas[i]);
    cards.appendChild(tempCard)
  }
}


function createCard(id, filtrado_servidas) {
  let div = document.createElement('div');
  div.className = 'card container text-center'
  div.style = 'width:18rem'
  div.innerHTML = `
  <img src="https://st3.depositphotos.com/1063437/13221/i/450/depositphotos_132218858-stock-photo-bottles-of-assorted-hard-liquor.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Liquor: ${filtrado_servidas.beverage_name}</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Bar: ${filtrado_servidas.bar_name}</li>
    <li class="list-group-item">Quantity: ${filtrado_servidas.quantity}</li>
    <li class="list-group-item">Pirce: ${filtrado_servidas.price}</li>
    <li class="list-group-item"></li>
  </ul>
  `
  return div

}

addCards(filtrado_servidas);

const inputContainer = document.getElementById('inputContainer');
const inputPrice = document.createElement('input');
inputPrice.type = 'text';
inputContainer.appendChild(inputPrice);

const selectBar = document.createElement('select');
barName.forEach((item) => {
  const option = document.createElement('option');
  option.value = item;
  option.text = item;
  selectBar.appendChild(option);
})
inputContainer.appendChild(selectBar);

// funcion filtrar precio
inputPrice.onchange = function () {
  const filtrado = filtrado_servidas.filter((item) => {
    item.price <= parseFloat(inputPrice.value)
    console.log(item.price);
    console.log(inputPrice.value);

  })
  addCards(filtrado);
  console.log(filtrado);
}




















