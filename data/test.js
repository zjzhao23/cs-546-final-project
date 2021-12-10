const userobj = {
  firstname: "What's",
  lastname: "Cooking?",
  email: "team@whatscooking.com",
  username: "whatscooking",
  age: 32,
  passwordHash: "$2a$08$XdvNkfdNIL8F8xsuIUeSbNOFgK0M0iV5HOskfVn7.PWncShU.O",
  myFavoriteRecipe: [
    "c0d27a2-c0d2-4f8c-b27a-6a1d4b5b6310",
    "968e97a2-c0d2-4f8c-b27a-6a1d4b5b9476",
  ],
  myRecipes: ["c0d27a2-c0d2-4f8c-b27a-6a1d4b5b6310"],
  myReviews: [
    "9vd99ce2-c0d2-4f8c-b27a-6a1d4b5b5063",
    "695d97a2-c0d2-4f8c-b27a-6a1d4b5b6927",
  ],
};

const reviewObj = {
  // _id: "9vd99ce2-c0d2-4f8c-b27a-6a1d4b5b5063",
  rating: 4,
  reviewText: "First time trying this.",
  likes: [],
  dislikes: [],
  comments: [],
  dateOfReview: new Date(),
};

const commentObj = {
  // _id: "c0o27m2-m0e2-4n8t-b27a-6ad9v9wb9471",
  name: "John_D",
  comment: "Nice try.",
  dateOfComment: new Date(),
};

const ingredientObjs = {
  Vegetables: {
    Beetroot: { p: 2.2, c: 13, f: 0.2 },
    Cabbage: { p: 0.9, c: 4.1, f: 0.1 },
    Artichoke: { p: 2.2, c: 13, f: 0.2 },
    Asparagus: { p: 2.9, c: 5, f: 0.2 },
    Avocado: { p: 2.9, c: 12, f: 21 },
    Beans: { p: 21, c: 63, f: 1.2 },
    Beetroot: { p: 2.2, c: 13, f: 0.2 },
    "Bell Pepper": { p: 1.2, c: 9.1, f: 0.3 },
    "Red Pepper": { p: 1.2, c: 9.1, f: 0.3 },
    "Bitter Gourd": { p: 2.2, c: 13, f: 0.2 },
    Broccoli: { p: 2.2, c: 13, f: 0.2 },
    "Brussels Sprouts": { p: 2.2, c: 13, f: 0.2 },
    "Sweet Corn": { p: 2.2, c: 13, f: 0.2 },
    "Chinese Black Fungus": { p: 2.2, c: 13, f: 0.2 },
    Cabbage: { p: 2.2, c: 13, f: 0.2 },
    Carrot: { p: 2.2, c: 13, f: 0.2 },
    Cauliflower: { p: 2.2, c: 13, f: 0.2 },
    Celery: { p: 2.2, c: 13, f: 0.2 },
    Corn: { p: 2.2, c: 13, f: 0.2 },
    "Baby Corn": { p: 2.2, c: 13, f: 0.2 },
    Cucumber: { p: 2.2, c: 13, f: 0.2 },
    Radish: { p: 2.2, c: 13, f: 0.2 },
    Rice: { p: 2.2, c: 13, f: 0.2 },
    Quinoa: { p: 2.2, c: 13, f: 0.2 },
    Eggplant: { p: 2.2, c: 13, f: 0.2 },
    Fennel: { p: 2.2, c: 13, f: 0.2 },
    Garlic: { p: 2.2, c: 13, f: 0.2 },
    Ginger: { p: 2.2, c: 13, f: 0.2 },
    Spinach: { p: 2.2, c: 13, f: 0.2 },
    Kale: { p: 2.2, c: 13, f: 0.2 },
    Lettuce: { p: 2.2, c: 13, f: 0.2 },
    "Iceberg Lettuce": { p: 2.2, c: 13, f: 0.2 },
    Romaine: { p: 2.2, c: 13, f: 0.2 },
    Mushroom: { p: 2.2, c: 13, f: 0.2 },
    Okra: { p: 2.2, c: 13, f: 0.2 },
    Olive: { p: 2.2, c: 13, f: 0.2 },
    Onion: { p: 2.2, c: 13, f: 0.2 },
    Scallions: { p: 2.2, c: 13, f: 0.2 },
    Parsnip: { p: 2.2, c: 13, f: 0.2 },
    Peas: { p: 2.2, c: 13, f: 0.2 },
    "black beans": { p: 2.2, c: 13, f: 0.2 },
    "Green Chilli": { p: 2.2, c: 13, f: 0.2 },
    Potato: { p: 2.2, c: 13, f: 0.2 },
    Pumpkin: { p: 2.2, c: 13, f: 0.2 },
    Shallots: { p: 2.2, c: 13, f: 0.2 },
    Squash: { p: 2.2, c: 13, f: 0.2 },
    "Sweet Potato": { p: 2.2, c: 13, f: 0.2 },
    Tomato: { p: 2.2, c: 13, f: 0.2 },
    Turnip: { p: 2.2, c: 13, f: 0.2 },
    Yam: { p: 2.2, c: 13, f: 0.2 },
    Zucchini: { p: 2.2, c: 13, f: 0.2 },
    "Baby Spinach": { p: 2.2, c: 13, f: 0.2 },
    "Brown Rice": { p: 2.2, c: 13, f: 0.2 },
    Chickpeas: { p: 2.2, c: 13, f: 0.2 },
    "Pumpkin Seeds": { p: 2.2, c: 13, f: 0.2 },
    "red lentils": { p: 2.2, c: 13, f: 0.2 },
  },
  Dairy: {
    Butter: { p: 2.2, c: 13, f: 0.2 },
    Cream: { p: 2.2, c: 13, f: 0.2 },
    Cheese: { p: 2.2, c: 13, f: 0.2 },
    Parmesan: { p: 2.2, c: 13, f: 0.2 },
    Milk: { p: 2.2, c: 13, f: 0.2 },
    "Condensed Milk": { p: 2.2, c: 13, f: 0.2 },
    Curd: { p: 2.2, c: 13, f: 0.2 },
    Egg: { p: 2.2, c: 13, f: 0.2 },
    Frosting: { p: 2.2, c: 13, f: 0.2 },
    "Greek Yogurt": { p: 2.2, c: 13, f: 0.2 },
    "Heavy Cream": { p: 2.2, c: 13, f: 0.2 },
    "Ice Cream": { p: 2.2, c: 13, f: 0.2 },
    "Sour Cream": { p: 2.2, c: 13, f: 0.2 },
    "Whipped Cream": { p: 2.2, c: 13, f: 0.2 },
    Yogurt: { p: 2.2, c: 13, f: 0.2 },
    Cheddar: { p: 2.2, c: 13, f: 0.2 },
    Eggs: { p: 2.2, c: 13, f: 0.2 },
    Tofu: { p: 2.2, c: 13, f: 0.2 },
    "Half and Half Cream": { p: 2.2, c: 13, f: 0.2 },
  },
  "Herbs & Spices": {
    Asafoetida: { p: 0, c: 0, f: 0 },
    Basil: { p: 0, c: 0, f: 0 },
    "Bay Leaf": { p: 0, c: 0, f: 0 },
    Mustard: { p: 2.2, c: 13, f: 0.2 },
    Cardamom: { p: 0, c: 0, f: 0 },
    Cayenne: { p: 0, c: 0, f: 0 },
    "Celery Seeds": { p: 0, c: 0, f: 0 },
    "Chilli Powder": { p: 0, c: 0, f: 0 },
    Chive: { p: 0, c: 0, f: 0 },
    "Chilli Flakes": { p: 0, c: 0, f: 0 },
    Cilantro: { p: 0, c: 0, f: 0 },
    Cumin: { p: 0, c: 0, f: 0 },
    Cinnamon: { p: 0, c: 0, f: 0 },
    Clove: { p: 0, c: 0, f: 0 },
    Coriander: { p: 0, c: 0, f: 0 },
    Cumin: { p: 0, c: 0, f: 0 },
    "Curry Leaves": { p: 0, c: 0, f: 0 },
    Dill: { p: 0, c: 0, f: 0 },
    Fenugreek: { p: 0, c: 0, f: 0 },
    "Garlic Powder": { p: 0, c: 0, f: 0 },
    "Ginger Powder": { p: 0, c: 0, f: 0 },
    "Red Chilli Powder": { p: 0, c: 0, f: 0 },
    "Ground Coriander": { p: 0, c: 0, f: 0 },
    "Onion Powder": { p: 0, c: 0, f: 0 },
    Oregano: { p: 0, c: 0, f: 0 },
    Paprika: { p: 0, c: 0, f: 0 },
    Parsley: { p: 0, c: 0, f: 0 },
    Rosemary: { p: 0, c: 0, f: 0 },
    Saffron: { p: 0, c: 0, f: 0 },
    "Star Anise": { p: 0, c: 0, f: 0 },
    Tamarind: { p: 0, c: 0, f: 0 },
    Thyme: { p: 0, c: 0, f: 0 },
    Turmeric: { p: 0, c: 0, f: 0 },
    Pepper: { p: 0, c: 0, f: 0 },
    Mooli: { p: 0, c: 0, f: 0 },
    Pesto: { p: 0, c: 0, f: 0 },
    Tortillas: { p: 0, c: 0, f: 0 },
    "Chipotle Paste": { p: 0, c: 0, f: 0 },
    "Tomato Pure": { p: 0, c: 0, f: 0 },
    "Hot Sauce": { p: 0, c: 0, f: 0 },
    Flaxseed: { p: 0, c: 0, f: 0 },
    "Mint Leaves": { p: 0, c: 0, f: 0 },
    Salt: { p: 0, c: 0, f: 0 },
    "Sesame Seeds": { p: 0, c: 0, f: 0 },
    "curry powder": { p: 0, c: 0, f: 0 },
    "cumin seeds": { p: 0, c: 0, f: 0 },
    
  },
  Baking: {
    "Baking Powder": { p: 0, c: 0, f: 0 },
    "Baking Soda": { p: 0, c: 0, f: 0 },
    "Bread Flour": { p: 0, c: 0, f: 0 },
    "Brownie Mix": { p: 0, c: 0, f: 0 },
    "Cocoa Powder": { p: 0, c: 0, f: 0 },
    "Cake Flour": { p: 0, c: 0, f: 0 },
    "Cake Mix": { p: 0, c: 0, f: 0 },
    "Chocolate Chips": { p: 0, c: 0, f: 0 },
    "Corn Flour": { p: 0, c: 0, f: 0 },
    "Coffe Bean": { p: 0, c: 0, f: 0 },
    "Corn Starch": { p: 0, c: 0, f: 0 },
    cornflour: { p: 0, c: 0, f: 0 },
    Flour: { p: 0, c: 0, f: 0 },
    "Food Coloring": { p: 0, c: 0, f: 0 },
    Gelatin: { p: 0, c: 0, f: 0 },
    "Lemon Extract": { p: 0, c: 0, f: 0 },
    "Muffin Mix": { p: 0, c: 0, f: 0 },
    "Pancake Mix": { p: 0, c: 0, f: 0 },
    "Rice Flour": { p: 0, c: 0, f: 0 },
    Yeast: { p: 0, c: 0, f: 0 },
    Sugar: { p: 0, c: 0, f: 0 },
    "Maple Syrup": { p: 0, c: 0, f: 0 },
    "Brown Sugar": { p: 0, c: 0, f: 0 },
    "Chocolate Syrup": { p: 0, c: 0, f: 0 },
    "Caramel Syrup": { p: 0, c: 0, f: 0 },
    "Corn Syrup": { p: 0, c: 0, f: 0 },
    Honey: { p: 0, c: 0, f: 0 },
    Molasses: { p: 0, c: 0, f: 0 },
    Stevia: { p: 0, c: 0, f: 0 },
    Vanilla: { p: 0, c: 0, f: 0 },
    Noodles: { p: 0, c: 0, f: 0 },
    Courgette: { p: 0, c: 0, f: 0 },
    Grain: { p: 0, c: 0, f: 0 },
    "Grain Rice": { p: 0, c: 0, f: 0 },
  },
  "Fruits & Berries": {
    Apple: { p: 0, c: 0, f: 0 },
    Apricot: { p: 0, c: 0, f: 0 },
    Banana: { p: 0, c: 0, f: 0 },
    Blueberry: { p: 0, c: 0, f: 0 },
    Cherry: { p: 0, c: 0, f: 0 },
    "Custard Apple": { p: 0, c: 0, f: 0 },
    Fig: { p: 0, c: 0, f: 0 },
    Grape: { p: 0, c: 0, f: 0 },
    Grapefruit: { p: 0, c: 0, f: 0 },
    Guava: { p: 0, c: 0, f: 0 },
    Kiwi: { p: 0, c: 0, f: 0 },
    Lemon: { p: 0, c: 0, f: 0 },
    Lime: { p: 0, c: 0, f: 0 },
    Lychee: { p: 0, c: 0, f: 0 },
    Mandarin: { p: 0, c: 0, f: 0 },
    Mango: { p: 0, c: 0, f: 0 },
    Orange: { p: 0, c: 0, f: 0 },
    Passionfruit: { p: 0, c: 0, f: 0 },
    Papaya: { p: 0, c: 0, f: 0 },
    Peach: { p: 0, c: 0, f: 0 },
    Pear: { p: 0, c: 0, f: 0 },
    Pineapple: { p: 0, c: 0, f: 0 },
    Plum: { p: 0, c: 0, f: 0 },
    Pomegranate: { p: 0, c: 0, f: 0 },
    Raspberry: { p: 0, c: 0, f: 0 },
    Strawberry: { p: 0, c: 0, f: 0 },
    Watermelon: { p: 0, c: 0, f: 0 },
    chestnuts: { p: 0, c: 0, f: 0 },
    "pine nuts": { p: 0, c: 0, f: 0 },
  },
  Miscellaneous: {
    Oil: { p: 2.2, c: 13, f: 0.2 },
    "Olive Oil": { p: 2.2, c: 13, f: 0.2 },
    "Vegetable Stock": { p: 2.2, c: 13, f: 0.2 },
    "Vegetable Oil": { p: 2.2, c: 13, f: 0.2 },
    "Sesame Oil": { p: 2.2, c: 13, f: 0.2 },
    Vinegar: { p: 2.2, c: 13, f: 0.2 },
    Water: { p: 2.2, c: 13, f: 0.2 },
    "Rose Water": { p: 2.2, c: 13, f: 0.2 },
    "Groundnut Oil": { p: 2.2, c: 13, f: 0.2 },
    "Coconut Oil": { p: 2.2, c: 13, f: 0.2 },
  },
};

module.exports = {
  userobj: userobj,
  reviewObj: reviewObj,
  commentObj: commentObj,
  ingredientObjs: ingredientObjs,
};
