const items = [
  {
    "name": "Classic Burger",
    "description": "Juicy beef patty with lettuce, tomato, and cheese on a sesame seed bun.",
    "calories": 600,
    "price": 9.99
  },
  {
    "name": "Vegetarian Wrap",
    "description": "Grilled vegetables and hummus wrapped in a whole-grain tortilla.",
    "calories": 450,
    "price": 8.49
  },
  {
    "name": "Caesar Salad",
    "description": "Crisp romaine lettuce, croutons, and parmesan cheese with Caesar dressing.",
    "calories": 300,
    "price": 7.99
  },
  {
    "name": "Margherita Pizza",
    "description": "Fresh mozzarella, tomatoes, and basil on a thin crust.",
    "calories": 700,
    "price": 12.99
  },
  {
    "name": "Chicken Alfredo Pasta",
    "description": "Grilled chicken breast with creamy Alfredo sauce over fettuccine.",
    "calories": 800,
    "price": 10.99
  },
  {
    "name": "Shrimp Tacos",
    "description": "Grilled shrimp with cabbage slaw, cilantro, and lime in soft corn tortillas.",
    "calories": 550,
    "price": 11.49
  },
  {
    "name": "Vegan Buddha Bowl",
    "description": "Quinoa, roasted vegetables, avocado, and tahini dressing.",
    "calories": 500,
    "price": 9.99
  },
  {
    "name": "Chocolate Lava Cake",
    "description": "Warm chocolate cake with a gooey molten center, served with vanilla ice cream.",
    "calories": 600,
    "price": 6.99
  }
]

function titleComponent() {
  const container = document.createElement('div');
  container.classList.add("menu--subheader");
  container.innerHTML = `
  <h2 class="subheader--title" >Our food menu</h2> 
  <p class="subheader--description" >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Varius sed pharetra dictum neque massa congue </p>
  `;
  return container;
}
function menuItem(name, description, calories, price) {
  const item = document.createElement('div');
  item.classList.add('list--item');
  item.innerHTML = `
    <div class="item--description">
      <h3 class="description--title">${name}</h3>
      <p class="description--p">${description}</p>
      <p class="description--calories">${calories} calories
   </div>
   <p class="item--price">${price}$</p>
  `;
  return item;
}
function menuComponent() {
  const container = document.createElement('div');
  container.classList.add("menu--list");
  items.forEach(item => {
    container.appendChild(menuItem(item.name, item.description, item.calories, item.price));
  })
  return container;
}

export default function menu() {
  const container = document.createElement('div');
  container.classList.add("menu");
  container.appendChild(titleComponent());
  container.appendChild(menuComponent());
  return container;
}