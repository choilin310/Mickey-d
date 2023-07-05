// Create some seed data and export it from this file
const users = [
  {
    username: "Brandon",
    email: "Brandon@gmail.com",
    password: 12345678,
    adm: false,
  },
  {
    username: "Jeffrey",
    email: "Jeffrey@gmail.com",
    password: 12345678,
    adm: false,
  },
  {
    username: "Elliot",
    email: "Elliot@gmail.com",
    password: 12345678,
    adm: false,
  },
  {
    username: "Brian",
    email: "Brian@gmail.com",
    password: 12345678,
    adm: false,
  },
  {
    username: "admin",
    email: "admin@admin",
    password: "admin",
    adm: true,
  },
];

const products = [
  {
    product_name: "The Angus Burger",
    price: (3, 2),
    description: "made from cow",
    category: "Sandwiches",
  },
  {
    product_name: "The Chicken Burger",
    price: (3, 2),
    description: "made from chicken",
    category: "Sandwiches",
  },
  {
    product_name: "The Pork Burger",
    price: (3, 2),
    description: "made from pig",
    category: "Sandwiches",
  },
  {
    product_name: "The fish Burger",
    price: (3, 2),
    description: "made from fish",
    category: "Sandwiches",
  },
  {
    product_name: "Coke cola",
    price: (3, 2),
    description: "crispy fizziness",
    category: "Beverages",
  },
  {
    product_name: "Dr.pepper",
    price: (3, 2),
    description: "23 amazing flavors",
    category: "Beverages",
  },
  {
    product_name: "Mountain dew",
    price: (1, 2),
    description: "comes from mount everest",
    category: "Beverages",
  },
  {
    product_name: "Fries",
    price: (2, 2),
    description: "pentagon fries",
    category: "Sides",
  },
  {
    product_name: "fruits cups",
    price: (1, 2),
    description: "comes from mount everest",
    category: "Sides",
  },
  {
    product_name: "ice cream cone",
    price: (1, 2),
    description: "toothpaste",
    category: "Ice Cream",
  },
  {
    product_name: "sundaes",
    price: (1, 2),
    description: "made straight from the udders of cow",
    category: "Ice Cream",
  },

  {
    product_name: "Two for $3",
    price: (1, 2),
    description: "get two burgers for the price of 4",
    category: "Deals",
  },
  {
    product_name: "Grimace birthday meal",
    price: (1, 2),
    description: "made with real babies... cow babies",
    category: "Deals",
  },
];

const inventories = [
  { product_id: 1, quantity: 100 },
  { product_id: 2, quantity: 100 },
  { product_id: 3, quantity: 100 },
  { product_id: 4, quantity: 100 },
  { product_id: 5, quantity: 100 },
  { product_id: 6, quantity: 100 },
  { product_id: 7, quantity: 100 },
  { product_id: 8, quantity: 100 },
  { product_id: 9, quantity: 100 },
  { product_id: 10, quantity: 100 },
  { product_id: 11, quantity: 100 },
  { product_id: 12, quantity: 100 },
  { product_id: 13, quantity: 100 },
];
const cart_items = [
  { shoppingcart_id: 1, product_id: 1, count: 10 },
  { shoppingcart_id: 3, product_id: 2, count: 9 },
  { shoppingcart_id: null, product_id: 3, count: null },
  { shoppingcart_id: null, product_id: 4, count: null },
  { shoppingcart_id: null, product_id: 5, count: null },
];

const shopping_carts = [
  { status: null, user_id: 1 },
  { status: null, user_id: 2 },
  { status: null, user_id: 3 },
  { status: null, user_id: 4 },
];

// ]
module.exports = {
  users,
  inventories,
  cart_items,
  shopping_carts,
  products,
};
