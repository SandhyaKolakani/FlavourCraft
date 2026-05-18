const ChineseRecipes = [

{
  id: 1001,
  category: "chinese",
  name: "Veg Fried Rice",
  image: "/vegfriedrice.jpg",
  ingredients: [
    { icon: "🍚", item: "Cooked Rice", quantity: "2 cups" },
    { icon: "🥕", item: "Mixed Vegetables", quantity: "1 cup" },
    { icon: "🧄", item: "Garlic", quantity: "3 cloves" },
    { icon: "🥢", item: "Soy Sauce", quantity: "1 tbsp" }
  ],
  instructions: [
    "Heat oil in wok.",
    "Saute garlic and vegetables.",
    "Add cooked rice.",
    "Add soy sauce and mix well.",
    "Serve hot."
  ]
},

{
  id: 1002,
  category: "chinese",
  name: "Hakka Noodles",
  image: "/hakkanoodles.jpg",
  ingredients: [
    { icon: "🍜", item: "Noodles", quantity: "200 g" },
    { icon: "🥕", item: "Vegetables", quantity: "1 cup" },
    { icon: "🧄", item: "Garlic", quantity: "3 cloves" },
    { icon: "🥢", item: "Soy Sauce", quantity: "1 tbsp" }
  ],
  instructions: [
    "Boil noodles until soft.",
    "Saute garlic and vegetables.",
    "Add boiled noodles.",
    "Add soy sauce and toss.",
    "Serve hot."
  ]
},

{
  id: 1003,
  category: "chinese",
  name: "Veg Manchurian",
  image: "/vegmanchurian.jpg",
  ingredients: [
    { icon: "🥕", item: "Mixed Vegetables", quantity: "1 cup" },
    { icon: "🌾", item: "Corn Flour", quantity: "3 tbsp" },
    { icon: "🧄", item: "Garlic", quantity: "2 cloves" },
    { icon: "🥢", item: "Soy Sauce", quantity: "1 tbsp" }
  ],
  instructions: [
    "Prepare vegetable balls.",
    "Deep fry until golden.",
    "Prepare sauce with garlic and soy sauce.",
    "Add fried balls.",
    "Cook and serve."
  ]
},

{
  id: 1004,
  category: "chinese",
  name: "Schezwan Fried Rice",
  image: "/schezwanfriedrice.jpg",
  ingredients: [
    { icon: "🍚", item: "Cooked Rice", quantity: "2 cups" },
    { icon: "🌶️", item: "Schezwan Sauce", quantity: "2 tbsp" },
    { icon: "🥕", item: "Vegetables", quantity: "1 cup" },
    { icon: "🧄", item: "Garlic", quantity: "2 cloves" }
  ],
  instructions: [
    "Heat oil in wok.",
    "Saute garlic and vegetables.",
    "Add rice and schezwan sauce.",
    "Mix well.",
    "Serve hot."
  ]
},

{
  id: 1005,
  category: "chinese",
  name: "Chilli Paneer",
  image: "/chillipaneer.jpg",
  ingredients: [
    { icon: "🧀", item: "Paneer", quantity: "200 g" },
    { icon: "🫑", item: "Capsicum", quantity: "1" },
    { icon: "🧅", item: "Onion", quantity: "1" },
    { icon: "🥢", item: "Soy Sauce", quantity: "1 tbsp" }
  ],
  instructions: [
    "Fry paneer cubes.",
    "Saute onions and capsicum.",
    "Add soy sauce and spices.",
    "Add paneer and toss.",
    "Serve hot."
  ]
},

{
  id: 1006,
  category: "chinese",
  name: "Spring Rolls",
  image: "/springrolls.jpg",
  ingredients: [
    { icon: "🌾", item: "Spring Roll Sheets", quantity: "10" },
    { icon: "🥕", item: "Vegetables", quantity: "1 cup" },
    { icon: "🧄", item: "Garlic", quantity: "2 cloves" },
    { icon: "🥢", item: "Soy Sauce", quantity: "1 tsp" }
  ],
  instructions: [
    "Prepare vegetable filling.",
    "Fill mixture in roll sheets.",
    "Roll tightly.",
    "Deep fry until crispy.",
    "Serve hot."
  ]
},

{
  id: 1007,
  category: "chinese",
  name: "Hot and Sour Soup",
  image: "/hotsoursoup.jpg",
  ingredients: [
    { icon: "🥕", item: "Vegetables", quantity: "1 cup" },
    { icon: "🌾", item: "Corn Flour", quantity: "1 tbsp" },
    { icon: "🥢", item: "Soy Sauce", quantity: "1 tbsp" },
    { icon: "🌶️", item: "Chilli Sauce", quantity: "1 tsp" }
  ],
  instructions: [
    "Boil vegetables in water.",
    "Add soy sauce and chilli sauce.",
    "Mix corn flour slurry.",
    "Cook until thick.",
    "Serve hot."
  ]
},

{
  id: 1008,
  category: "chinese",
  name: "Chicken Manchurian",
  image: "/chickenmanchurian.jpg",
  ingredients: [
    { icon: "🍗", item: "Chicken", quantity: "250 g" },
    { icon: "🌾", item: "Corn Flour", quantity: "3 tbsp" },
    { icon: "🧄", item: "Garlic", quantity: "2 cloves" },
    { icon: "🥢", item: "Soy Sauce", quantity: "1 tbsp" }
  ],
  instructions: [
    "Marinate chicken pieces.",
    "Deep fry until golden.",
    "Prepare sauce with garlic and soy sauce.",
    "Add fried chicken.",
    "Cook and serve."
  ]
},

{
  id: 1009,
  category: "chinese",
  name: "Chilli Chicken",
  image: "/chillichicken.jpg",
  ingredients: [
    { icon: "🍗", item: "Chicken", quantity: "250 g" },
    { icon: "🫑", item: "Capsicum", quantity: "1" },
    { icon: "🧅", item: "Onion", quantity: "1" },
    { icon: "🥢", item: "Soy Sauce", quantity: "1 tbsp" }
  ],
  instructions: [
    "Fry chicken pieces.",
    "Saute onions and capsicum.",
    "Add soy sauce and chilli sauce.",
    "Mix with chicken.",
    "Serve hot."
  ]
},

{
  id: 1010,
  category: "chinese",
  name: "Schezwan Noodles",
  image: "/schezwannoodles.jpg",
  ingredients: [
    { icon: "🍜", item: "Noodles", quantity: "200 g" },
    { icon: "🌶️", item: "Schezwan Sauce", quantity: "2 tbsp" },
    { icon: "🥕", item: "Vegetables", quantity: "1 cup" },
    { icon: "🧄", item: "Garlic", quantity: "2 cloves" }
  ],
  instructions: [
    "Boil noodles.",
    "Saute garlic and vegetables.",
    "Add noodles and schezwan sauce.",
    "Toss well.",
    "Serve hot."
  ]
},

{
  id: 1011,
  category: "chinese",
  name: "Veg Chow Mein",
  image: "/vegchowmein.jpg",
  ingredients: [
    { icon: "🍜", item: "Noodles", quantity: "200 g" },
    { icon: "🥕", item: "Mixed Vegetables", quantity: "1 cup" },
    { icon: "🧄", item: "Garlic", quantity: "2 cloves" },
    { icon: "🥢", item: "Soy Sauce", quantity: "1 tbsp" }
  ],
  instructions: [
    "Boil noodles until soft.",
    "Saute garlic and vegetables.",
    "Add noodles and soy sauce.",
    "Toss well.",
    "Serve hot."
  ]
},

{
  id: 1012,
  category: "chinese",
  name: "Chicken Fried Rice",
  image: "/chickenfriedrice.jpg",
  ingredients: [
    { icon: "🍚", item: "Cooked Rice", quantity: "2 cups" },
    { icon: "🍗", item: "Chicken", quantity: "200 g" },
    { icon: "🥕", item: "Vegetables", quantity: "1/2 cup" },
    { icon: "🥢", item: "Soy Sauce", quantity: "1 tbsp" }
  ],
  instructions: [
    "Cook chicken pieces.",
    "Saute vegetables.",
    "Add rice and chicken.",
    "Add soy sauce and toss.",
    "Serve hot."
  ]
},

{
  id: 1013,
  category: "chinese",
  name: "Paneer Fried Rice",
  image: "/paneerfriedrice.jpg",
  ingredients: [
    { icon: "🍚", item: "Cooked Rice", quantity: "2 cups" },
    { icon: "🧀", item: "Paneer", quantity: "150 g" },
    { icon: "🥕", item: "Vegetables", quantity: "1 cup" },
    { icon: "🥢", item: "Soy Sauce", quantity: "1 tbsp" }
  ],
  instructions: [
    "Fry paneer cubes.",
    "Saute vegetables.",
    "Add cooked rice.",
    "Add paneer and soy sauce.",
    "Serve hot."
  ]
},

{
  id: 1014,
  category: "chinese",
  name: "Garlic Noodles",
  image: "/garlicnoodles.jpg",
  ingredients: [
    { icon: "🍜", item: "Noodles", quantity: "200 g" },
    { icon: "🧄", item: "Garlic", quantity: "4 cloves" },
    { icon: "🧈", item: "Butter", quantity: "1 tbsp" },
    { icon: "🥢", item: "Soy Sauce", quantity: "1 tsp" }
  ],
  instructions: [
    "Boil noodles.",
    "Saute garlic in butter.",
    "Add noodles.",
    "Add soy sauce.",
    "Mix well and serve."
  ]
},

{
  id: 1015,
  category: "chinese",
  name: "Dragon Chicken",
  image: "/dragonchicken.jpg",
  ingredients: [
    { icon: "🍗", item: "Chicken", quantity: "250 g" },
    { icon: "🌶️", item: "Red Chillies", quantity: "3" },
    { icon: "🧄", item: "Garlic", quantity: "3 cloves" },
    { icon: "🥢", item: "Soy Sauce", quantity: "1 tbsp" }
  ],
  instructions: [
    "Fry chicken strips.",
    "Saute garlic and chillies.",
    "Add soy sauce.",
    "Mix chicken with sauce.",
    "Serve hot."
  ]
},

{
  id: 1016,
  category: "chinese",
  name: "Sweet Corn Soup",
  image: "/sweetcornsoup.jpg",
  ingredients: [
    { icon: "🌽", item: "Sweet Corn", quantity: "1 cup" },
    { icon: "🥕", item: "Carrots", quantity: "1/4 cup" },
    { icon: "🌾", item: "Corn Flour", quantity: "1 tbsp" },
    { icon: "🧂", item: "Salt", quantity: "1 tsp" }
  ],
  instructions: [
    "Boil vegetables in water.",
    "Add sweet corn.",
    "Add corn flour slurry.",
    "Cook until thick.",
    "Serve hot."
  ]
},

{
  id: 1017,
  category: "chinese",
  name: "Veg Momos",
  image: "/vegmomos.jpg",
  ingredients: [
    { icon: "🌾", item: "Maida Dough", quantity: "2 cups" },
    { icon: "🥕", item: "Vegetables", quantity: "1 cup" },
    { icon: "🧄", item: "Garlic", quantity: "2 cloves" },
    { icon: "🥢", item: "Soy Sauce", quantity: "1 tsp" }
  ],
  instructions: [
    "Prepare vegetable filling.",
    "Fill in momo wrappers.",
    "Shape into dumplings.",
    "Steam for 10 minutes.",
    "Serve hot."
  ]
},

{
  id: 1018,
  category: "chinese",
  name: "Chicken Momos",
  image: "/chickenmomos.jpg",
  ingredients: [
    { icon: "🌾", item: "Momo Dough", quantity: "2 cups" },
    { icon: "🍗", item: "Minced Chicken", quantity: "200 g" },
    { icon: "🧄", item: "Garlic", quantity: "2 cloves" },
    { icon: "🥢", item: "Soy Sauce", quantity: "1 tsp" }
  ],
  instructions: [
    "Prepare chicken filling.",
    "Fill momo wrappers.",
    "Shape dumplings.",
    "Steam for 10 minutes.",
    "Serve hot."
  ]
},

{
  id: 1019,
  category: "chinese",
  name: "Paneer Noodles",
  image: "/paneernoodles.jpg",
  ingredients: [
    { icon: "🍜", item: "Noodles", quantity: "200 g" },
    { icon: "🧀", item: "Paneer", quantity: "150 g" },
    { icon: "🥕", item: "Vegetables", quantity: "1 cup" },
    { icon: "🥢", item: "Soy Sauce", quantity: "1 tbsp" }
  ],
  instructions: [
    "Boil noodles.",
    "Saute vegetables.",
    "Add paneer cubes.",
    "Add noodles and soy sauce.",
    "Serve hot."
  ]
},

{
  id: 1020,
  category: "chinese",
  name: "Veg Spring Roll Noodles",
  image: "/springrollnoodles.jpg",
  ingredients: [
    { icon: "🍜", item: "Noodles", quantity: "200 g" },
    { icon: "🥕", item: "Vegetables", quantity: "1 cup" },
    { icon: "🧄", item: "Garlic", quantity: "2 cloves" },
    { icon: "🥢", item: "Soy Sauce", quantity: "1 tbsp" }
  ],
  instructions: [
    "Boil noodles.",
    "Saute vegetables and garlic.",
    "Add noodles.",
    "Add soy sauce.",
    "Mix and serve."
  ]
},

{
  id: 1021,
  category: "chinese",
  name: "Honey Chilli Potatoes",
  image: "/honeychillipotatoes.jpg",
  ingredients: [
    { icon: "🥔", item: "Potatoes", quantity: "2" },
    { icon: "🍯", item: "Honey", quantity: "2 tbsp" },
    { icon: "🌶️", item: "Chilli Sauce", quantity: "1 tbsp" },
    { icon: "🥢", item: "Soy Sauce", quantity: "1 tsp" }
  ],
  instructions: [
    "Cut potatoes into strips.",
    "Deep fry until crispy.",
    "Prepare sauce with honey and chilli.",
    "Mix potatoes in sauce.",
    "Serve hot."
  ]
},

{
  id: 1022,
  category: "chinese",
  name: "Gobi Manchurian",
  image: "/gobimanchurian.jpg",
  ingredients: [
    { icon: "🥦", item: "Cauliflower", quantity: "1 cup" },
    { icon: "🌾", item: "Corn Flour", quantity: "3 tbsp" },
    { icon: "🧄", item: "Garlic", quantity: "2 cloves" },
    { icon: "🥢", item: "Soy Sauce", quantity: "1 tbsp" }
  ],
  instructions: [
    "Prepare cauliflower florets.",
    "Dip in batter and fry.",
    "Prepare sauce.",
    "Add fried gobi.",
    "Cook and serve."
  ]
},

{
  id: 1023,
  category: "chinese",
  name: "Chicken Lollipop",
  image: "/chickenlollipop.jpg",
  ingredients: [
    { icon: "🍗", item: "Chicken Wings", quantity: "300 g" },
    { icon: "🌾", item: "Corn Flour", quantity: "2 tbsp" },
    { icon: "🌶️", item: "Chilli Sauce", quantity: "1 tbsp" },
    { icon: "🥢", item: "Soy Sauce", quantity: "1 tsp" }
  ],
  instructions: [
    "Marinate chicken wings.",
    "Deep fry until crispy.",
    "Prepare spicy sauce.",
    "Coat chicken with sauce.",
    "Serve hot."
  ]
},

{
  id: 1024,
  category: "chinese",
  name: "Chicken Chow Mein",
  image: "/chickenchowmein.jpg",
  ingredients: [
    { icon: "🍜", item: "Noodles", quantity: "200 g" },
    { icon: "🍗", item: "Chicken", quantity: "200 g" },
    { icon: "🥕", item: "Vegetables", quantity: "1 cup" },
    { icon: "🥢", item: "Soy Sauce", quantity: "1 tbsp" }
  ],
  instructions: [
    "Boil noodles.",
    "Cook chicken pieces.",
    "Saute vegetables.",
    "Add noodles and sauce.",
    "Serve hot."
  ]
},

{
  id: 1025,
  category: "chinese",
  name: "Veg Clear Soup",
  image: "/vegclearsoup.jpg",
  ingredients: [
    { icon: "🥕", item: "Vegetables", quantity: "1 cup" },
    { icon: "🧄", item: "Garlic", quantity: "2 cloves" },
    { icon: "🧂", item: "Salt", quantity: "1 tsp" },
    { icon: "💧", item: "Water", quantity: "3 cups" }
  ],
  instructions: [
    "Boil vegetables in water.",
    "Add garlic and salt.",
    "Simmer for 10 minutes.",
    "Strain soup.",
    "Serve hot."
  ]
},

{
  id: 1026,
  category: "chinese",
  name: "Chilli Garlic Noodles",
  image: "/chilligarlicnoodles.jpg",
  ingredients: [
    { icon: "🍜", item: "Noodles", quantity: "200 g" },
    { icon: "🌶️", item: "Red Chillies", quantity: "2" },
    { icon: "🧄", item: "Garlic", quantity: "4 cloves" },
    { icon: "🥢", item: "Soy Sauce", quantity: "1 tbsp" }
  ],
  instructions: [
    "Boil noodles.",
    "Saute garlic and chillies.",
    "Add noodles.",
    "Add soy sauce.",
    "Serve hot."
  ]
},

{
  id: 1027,
  category: "chinese",
  name: "Egg Fried Rice",
  image: "/eggfriedrice.jpg",
  ingredients: [
    { icon: "🍚", item: "Cooked Rice", quantity: "2 cups" },
    { icon: "🥚", item: "Eggs", quantity: "2" },
    { icon: "🥕", item: "Vegetables", quantity: "1/2 cup" },
    { icon: "🥢", item: "Soy Sauce", quantity: "1 tbsp" }
  ],
  instructions: [
    "Scramble eggs.",
    "Saute vegetables.",
    "Add rice and eggs.",
    "Add soy sauce.",
    "Serve hot."
  ]
},

{
  id: 1028,
  category: "chinese",
  name: "Egg Noodles",
  image: "/eggnoodles.jpg",
  ingredients: [
    { icon: "🍜", item: "Noodles", quantity: "200 g" },
    { icon: "🥚", item: "Eggs", quantity: "2" },
    { icon: "🥕", item: "Vegetables", quantity: "1/2 cup" },
    { icon: "🥢", item: "Soy Sauce", quantity: "1 tbsp" }
  ],
  instructions: [
    "Boil noodles.",
    "Scramble eggs.",
    "Saute vegetables.",
    "Add noodles and sauce.",
    "Serve hot."
  ]
},

{
  id: 1029,
  category: "chinese",
  name: "Chilli Mushroom",
  image: "/chillimushroom.jpg",
  ingredients: [
    { icon: "🍄", item: "Mushrooms", quantity: "200 g" },
    { icon: "🫑", item: "Capsicum", quantity: "1" },
    { icon: "🧅", item: "Onion", quantity: "1" },
    { icon: "🥢", item: "Soy Sauce", quantity: "1 tbsp" }
  ],
  instructions: [
    "Saute mushrooms.",
    "Add onions and capsicum.",
    "Add soy sauce.",
    "Cook for few minutes.",
    "Serve hot."
  ]
},

{
  id: 1030,
  category: "chinese",
  name: "Veg Dragon Noodles",
  image: "/vegdragonnoodles.jpg",
  ingredients: [
    { icon: "🍜", item: "Noodles", quantity: "200 g" },
    { icon: "🌶️", item: "Chilli Sauce", quantity: "1 tbsp" },
    { icon: "🥕", item: "Vegetables", quantity: "1 cup" },
    { icon: "🧄", item: "Garlic", quantity: "3 cloves" }
  ],
  instructions: [
    "Boil noodles.",
    "Saute garlic and vegetables.",
    "Add noodles and chilli sauce.",
    "Toss well.",
    "Serve hot."
  ]
}

];

export default ChineseRecipes;