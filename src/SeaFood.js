const SeaFoodRecipes = [

{
  id: 1101,
  category: "seafood",
  name: "Grilled Fish",
  image: "/grilledfish.jpg",
  ingredients: [
    { icon: "🐟", item: "Fish Fillet", quantity: "250 g" },
    { icon: "🧄", item: "Garlic", quantity: "3 cloves" },
    { icon: "🍋", item: "Lemon Juice", quantity: "1 tbsp" },
    { icon: "🧂", item: "Salt & Pepper", quantity: "1 tsp" }
  ],
  instructions: [
    "Marinate fish with lemon and spices.",
    "Preheat grill.",
    "Grill fish for 8–10 minutes.",
    "Flip once while cooking.",
    "Serve hot."
  ]
},

{
  id: 1102,
  category: "seafood",
  name: "Prawn Fry",
  image: "/prawnfry.jpg",
  ingredients: [
    { icon: "🦐", item: "Prawns", quantity: "250 g" },
    { icon: "🌶️", item: "Chilli Powder", quantity: "1 tsp" },
    { icon: "🧄", item: "Garlic Paste", quantity: "1 tsp" },
    { icon: "🧂", item: "Salt", quantity: "1 tsp" }
  ],
  instructions: [
    "Clean prawns.",
    "Marinate with spices.",
    "Heat oil in pan.",
    "Fry prawns until cooked.",
    "Serve hot."
  ]
},

{
  id: 1103,
  category: "seafood",
  name: "Fish Curry",
  image: "/fishcurry.jpg",
  ingredients: [
    { icon: "🐟", item: "Fish Pieces", quantity: "300 g" },
    { icon: "🍅", item: "Tomatoes", quantity: "2" },
    { icon: "🧅", item: "Onion", quantity: "1" },
    { icon: "🌶️", item: "Spices", quantity: "1 tsp" }
  ],
  instructions: [
    "Prepare onion tomato gravy.",
    "Add spices.",
    "Add fish pieces.",
    "Cook for 10 minutes.",
    "Serve hot with rice."
  ]
},

{
  id: 1104,
  category: "seafood",
  name: "Butter Garlic Prawns",
  image: "/buttergarlicprawns.jpg",
  ingredients: [
    { icon: "🦐", item: "Prawns", quantity: "250 g" },
    { icon: "🧈", item: "Butter", quantity: "2 tbsp" },
    { icon: "🧄", item: "Garlic", quantity: "4 cloves" },
    { icon: "🌿", item: "Parsley", quantity: "1 tbsp" }
  ],
  instructions: [
    "Heat butter in pan.",
    "Saute garlic.",
    "Add prawns.",
    "Cook until pink.",
    "Garnish and serve."
  ]
},

{
  id: 1105,
  category: "seafood",
  name: "Fish Fry",
  image: "/fishfry.jpg",
  ingredients: [
    { icon: "🐟", item: "Fish Slices", quantity: "300 g" },
    { icon: "🌶️", item: "Chilli Powder", quantity: "1 tsp" },
    { icon: "🍋", item: "Lemon Juice", quantity: "1 tbsp" },
    { icon: "🧂", item: "Salt", quantity: "1 tsp" }
  ],
  instructions: [
    "Marinate fish with spices.",
    "Heat oil in pan.",
    "Shallow fry fish.",
    "Cook until crispy.",
    "Serve hot."
  ]
},

{
  id: 1106,
  category: "seafood",
  name: "Crab Masala",
  image: "/crabmasala.jpg",
  ingredients: [
    { icon: "🦀", item: "Crab", quantity: "300 g" },
    { icon: "🧅", item: "Onion", quantity: "1" },
    { icon: "🍅", item: "Tomato", quantity: "2" },
    { icon: "🌶️", item: "Spices", quantity: "1 tsp" }
  ],
  instructions: [
    "Saute onions.",
    "Add tomatoes and spices.",
    "Add cleaned crab.",
    "Cook for 15 minutes.",
    "Serve hot."
  ]
},

{
  id: 1107,
  category: "seafood",
  name: "Garlic Butter Lobster",
  image: "/garlicbutterlobster.jpg",
  ingredients: [
    { icon: "🦞", item: "Lobster", quantity: "1" },
    { icon: "🧈", item: "Butter", quantity: "2 tbsp" },
    { icon: "🧄", item: "Garlic", quantity: "4 cloves" },
    { icon: "🍋", item: "Lemon Juice", quantity: "1 tbsp" }
  ],
  instructions: [
    "Boil lobster.",
    "Heat butter with garlic.",
    "Add lobster meat.",
    "Cook for few minutes.",
    "Serve hot."
  ]
},

{
  id: 1108,
  category: "seafood",
  name: "Prawn Biryani",
  image: "/prawnbiryani.jpg",
  ingredients: [
    { icon: "🦐", item: "Prawns", quantity: "250 g" },
    { icon: "🍚", item: "Basmati Rice", quantity: "2 cups" },
    { icon: "🧅", item: "Onion", quantity: "1" },
    { icon: "🌶️", item: "Biryani Masala", quantity: "1 tsp" }
  ],
  instructions: [
    "Cook rice separately.",
    "Prepare prawn masala.",
    "Layer rice and prawns.",
    "Cook on low heat.",
    "Serve hot."
  ]
},

{
  id: 1109,
  category: "seafood",
  name: "Fish Tikka",
  image: "/fishtikka.jpg",
  ingredients: [
    { icon: "🐟", item: "Fish Cubes", quantity: "250 g" },
    { icon: "🥛", item: "Curd", quantity: "1/2 cup" },
    { icon: "🌶️", item: "Spices", quantity: "1 tsp" },
    { icon: "🍋", item: "Lemon", quantity: "1 tbsp" }
  ],
  instructions: [
    "Marinate fish with curd and spices.",
    "Skewer fish pieces.",
    "Grill until cooked.",
    "Flip occasionally.",
    "Serve hot."
  ]
},

{
  id: 1110,
  category: "seafood",
  name: "Calamari Fry",
  image: "/calamarifry.jpg",
  ingredients: [
    { icon: "🦑", item: "Squid Rings", quantity: "250 g" },
    { icon: "🌾", item: "Flour", quantity: "1 cup" },
    { icon: "🌶️", item: "Spices", quantity: "1 tsp" },
    { icon: "🧂", item: "Salt", quantity: "1 tsp" }
  ],
  instructions: [
    "Coat squid rings in flour and spices.",
    "Heat oil.",
    "Deep fry until crispy.",
    "Drain excess oil.",
    "Serve hot."
  ]
},

{
  id: 1111,
  category: "seafood",
  name: "Shrimp Tempura",
  image: "/shrimptempura.jpg",
  ingredients: [
    { icon: "🦐", item: "Shrimp", quantity: "250 g" },
    { icon: "🌾", item: "Tempura Batter", quantity: "1 cup" },
    { icon: "🧂", item: "Salt", quantity: "1 tsp" },
    { icon: "🥢", item: "Soy Sauce", quantity: "2 tbsp" }
  ],
  instructions: [
    "Prepare tempura batter.",
    "Dip shrimp in batter.",
    "Deep fry until golden.",
    "Drain excess oil.",
    "Serve with soy sauce."
  ]
},

{
  id: 1112,
  category: "seafood",
  name: "Tuna Steak",
  image: "/tunasteak.jpg",
  ingredients: [
    { icon: "🐟", item: "Tuna Steak", quantity: "2 pieces" },
    { icon: "🧄", item: "Garlic", quantity: "2 cloves" },
    { icon: "🫒", item: "Olive Oil", quantity: "2 tbsp" },
    { icon: "🧂", item: "Salt & Pepper", quantity: "1 tsp" }
  ],
  instructions: [
    "Season tuna steaks.",
    "Heat olive oil in pan.",
    "Cook tuna 3–4 minutes each side.",
    "Add garlic for flavor.",
    "Serve hot."
  ]
},

{
  id: 1113,
  category: "seafood",
  name: "Fish Tacos",
  image: "/fishtacos.jpg",
  ingredients: [
    { icon: "🐟", item: "Grilled Fish", quantity: "200 g" },
    { icon: "🌮", item: "Taco Shells", quantity: "4" },
    { icon: "🥬", item: "Lettuce", quantity: "1 cup" },
    { icon: "🍋", item: "Lime", quantity: "1" }
  ],
  instructions: [
    "Cook fish fillets.",
    "Place fish in taco shells.",
    "Add lettuce and sauce.",
    "Squeeze lime juice.",
    "Serve immediately."
  ]
},

{
  id: 1114,
  category: "seafood",
  name: "Clam Chowder",
  image: "/clamchowder.jpg",
  ingredients: [
    { icon: "🐚", item: "Clams", quantity: "200 g" },
    { icon: "🥔", item: "Potatoes", quantity: "1 cup" },
    { icon: "🥛", item: "Milk", quantity: "2 cups" },
    { icon: "🧅", item: "Onion", quantity: "1" }
  ],
  instructions: [
    "Saute onions.",
    "Add potatoes and clams.",
    "Pour milk and simmer.",
    "Cook until thick.",
    "Serve hot."
  ]
},

{
  id: 1115,
  category: "seafood",
  name: "Seafood Paella",
  image: "/seafoodpaella.jpg",
  ingredients: [
    { icon: "🍚", item: "Rice", quantity: "2 cups" },
    { icon: "🦐", item: "Shrimp", quantity: "200 g" },
    { icon: "🦑", item: "Squid", quantity: "100 g" },
    { icon: "🫑", item: "Capsicum", quantity: "1" }
  ],
  instructions: [
    "Saute vegetables.",
    "Add seafood.",
    "Add rice and broth.",
    "Cook until rice soft.",
    "Serve hot."
  ]
},

{
  id: 1116,
  category: "seafood",
  name: "Grilled Salmon",
  image: "/grilledsalmon.jpg",
  ingredients: [
    { icon: "🐟", item: "Salmon Fillet", quantity: "2 pieces" },
    { icon: "🍋", item: "Lemon", quantity: "1" },
    { icon: "🧄", item: "Garlic", quantity: "2 cloves" },
    { icon: "🧂", item: "Salt", quantity: "1 tsp" }
  ],
  instructions: [
    "Season salmon with spices.",
    "Preheat grill.",
    "Grill salmon 8 minutes.",
    "Flip once.",
    "Serve hot."
  ]
},

{
  id: 1117,
  category: "seafood",
  name: "Fish Fingers",
  image: "/fishfingers.jpg",
  ingredients: [
    { icon: "🐟", item: "Fish Fillet", quantity: "250 g" },
    { icon: "🍞", item: "Bread Crumbs", quantity: "1 cup" },
    { icon: "🥚", item: "Egg", quantity: "1" },
    { icon: "🧂", item: "Salt", quantity: "1 tsp" }
  ],
  instructions: [
    "Cut fish into strips.",
    "Dip in egg and breadcrumbs.",
    "Deep fry until crispy.",
    "Drain oil.",
    "Serve with sauce."
  ]
},

{
  id: 1118,
  category: "seafood",
  name: "Shrimp Scampi",
  image: "/shrimpscampi.jpg",
  ingredients: [
    { icon: "🦐", item: "Shrimp", quantity: "250 g" },
    { icon: "🧈", item: "Butter", quantity: "2 tbsp" },
    { icon: "🧄", item: "Garlic", quantity: "3 cloves" },
    { icon: "🍋", item: "Lemon Juice", quantity: "1 tbsp" }
  ],
  instructions: [
    "Heat butter in pan.",
    "Saute garlic.",
    "Add shrimp.",
    "Add lemon juice.",
    "Serve hot."
  ]
},

{
  id: 1119,
  category: "seafood",
  name: "Seafood Noodles",
  image: "/seafoodnoodles.jpg",
  ingredients: [
    { icon: "🍜", item: "Noodles", quantity: "200 g" },
    { icon: "🦐", item: "Shrimp", quantity: "150 g" },
    { icon: "🦑", item: "Squid", quantity: "100 g" },
    { icon: "🥢", item: "Soy Sauce", quantity: "1 tbsp" }
  ],
  instructions: [
    "Boil noodles.",
    "Cook seafood.",
    "Add noodles and sauce.",
    "Toss well.",
    "Serve hot."
  ]
},

{
  id: 1120,
  category: "seafood",
  name: "Fish Soup",
  image: "/fishsoup.jpg",
  ingredients: [
    { icon: "🐟", item: "Fish Pieces", quantity: "200 g" },
    { icon: "🥕", item: "Vegetables", quantity: "1 cup" },
    { icon: "🧄", item: "Garlic", quantity: "2 cloves" },
    { icon: "🧂", item: "Salt", quantity: "1 tsp" }
  ],
  instructions: [
    "Boil vegetables.",
    "Add fish pieces.",
    "Season with salt.",
    "Simmer for 10 minutes.",
    "Serve hot."
  ]
},

{
  id: 1121,
  category: "seafood",
  name: "Lobster Thermidor",
  image: "/lobsterthermidor.jpg",
  ingredients: [
    { icon: "🦞", item: "Lobster", quantity: "1" },
    { icon: "🧀", item: "Cheese", quantity: "1/2 cup" },
    { icon: "🥛", item: "Cream", quantity: "1/2 cup" },
    { icon: "🧄", item: "Garlic", quantity: "2 cloves" }
  ],
  instructions: [
    "Cook lobster meat.",
    "Prepare creamy sauce.",
    "Mix lobster with sauce.",
    "Top with cheese.",
    "Bake until golden."
  ]
},

{
  id: 1122,
  category: "seafood",
  name: "Prawn Coconut Curry",
  image: "/prawncoconutcurry.jpg",
  ingredients: [
    { icon: "🦐", item: "Prawns", quantity: "250 g" },
    { icon: "🥥", item: "Coconut Milk", quantity: "1 cup" },
    { icon: "🧅", item: "Onion", quantity: "1" },
    { icon: "🌶️", item: "Spices", quantity: "1 tsp" }
  ],
  instructions: [
    "Saute onions.",
    "Add spices.",
    "Add prawns.",
    "Pour coconut milk.",
    "Cook and serve."
  ]
},

{
  id: 1123,
  category: "seafood",
  name: "Fish Biryani",
  image: "/fishbiryani.jpg",
  ingredients: [
    { icon: "🐟", item: "Fish Pieces", quantity: "250 g" },
    { icon: "🍚", item: "Basmati Rice", quantity: "2 cups" },
    { icon: "🧅", item: "Onion", quantity: "1" },
    { icon: "🌶️", item: "Biryani Masala", quantity: "1 tsp" }
  ],
  instructions: [
    "Cook rice separately.",
    "Prepare fish masala.",
    "Layer rice and fish.",
    "Cook on low flame.",
    "Serve hot."
  ]
},

{
  id: 1124,
  category: "seafood",
  name: "Garlic Crab",
  image: "/garliccrab.jpg",
  ingredients: [
    { icon: "🦀", item: "Crab", quantity: "300 g" },
    { icon: "🧄", item: "Garlic", quantity: "5 cloves" },
    { icon: "🧈", item: "Butter", quantity: "2 tbsp" },
    { icon: "🧂", item: "Salt", quantity: "1 tsp" }
  ],
  instructions: [
    "Heat butter in pan.",
    "Saute garlic.",
    "Add crab pieces.",
    "Cook for 10 minutes.",
    "Serve hot."
  ]
},

{
  id: 1125,
  category: "seafood",
  name: "Shrimp Fried Rice",
  image: "/shrimpfriedrice.jpg",
  ingredients: [
    { icon: "🍚", item: "Cooked Rice", quantity: "2 cups" },
    { icon: "🦐", item: "Shrimp", quantity: "200 g" },
    { icon: "🥕", item: "Vegetables", quantity: "1/2 cup" },
    { icon: "🥢", item: "Soy Sauce", quantity: "1 tbsp" }
  ],
  instructions: [
    "Cook shrimp.",
    "Saute vegetables.",
    "Add rice and shrimp.",
    "Add soy sauce.",
    "Mix and serve."
  ]
},

{
  id: 1126,
  category: "seafood",
  name: "Baked Salmon",
  image: "/bakedsalmon.jpg",
  ingredients: [
    { icon: "🐟", item: "Salmon Fillet", quantity: "2 pieces" },
    { icon: "🍋", item: "Lemon", quantity: "1" },
    { icon: "🫒", item: "Olive Oil", quantity: "1 tbsp" },
    { icon: "🧂", item: "Salt & Pepper", quantity: "1 tsp" }
  ],
  instructions: [
    "Preheat oven.",
    "Season salmon with lemon and spices.",
    "Place on baking tray.",
    "Bake for 15 minutes.",
    "Serve hot."
  ]
},

{
  id: 1127,
  category: "seafood",
  name: "Garlic Butter Fish",
  image: "/garlicbutterfish.jpg",
  ingredients: [
    { icon: "🐟", item: "Fish Fillet", quantity: "250 g" },
    { icon: "🧈", item: "Butter", quantity: "2 tbsp" },
    { icon: "🧄", item: "Garlic", quantity: "3 cloves" },
    { icon: "🌿", item: "Parsley", quantity: "1 tbsp" }
  ],
  instructions: [
    "Heat butter in pan.",
    "Saute garlic.",
    "Add fish fillet.",
    "Cook until golden.",
    "Garnish and serve."
  ]
},

{
  id: 1128,
  category: "seafood",
  name: "Shrimp Pasta",
  image: "/shrimppasta.jpg",
  ingredients: [
    { icon: "🍝", item: "Pasta", quantity: "200 g" },
    { icon: "🦐", item: "Shrimp", quantity: "200 g" },
    { icon: "🧄", item: "Garlic", quantity: "2 cloves" },
    { icon: "🧈", item: "Butter", quantity: "1 tbsp" }
  ],
  instructions: [
    "Cook pasta.",
    "Saute shrimp with garlic.",
    "Add butter.",
    "Mix pasta with shrimp.",
    "Serve hot."
  ]
},

{
  id: 1129,
  category: "seafood",
  name: "Seafood Pizza",
  image: "/seafoodpizza.jpg",
  ingredients: [
    { icon: "🍕", item: "Pizza Base", quantity: "1" },
    { icon: "🦐", item: "Shrimp", quantity: "100 g" },
    { icon: "🧀", item: "Cheese", quantity: "1 cup" },
    { icon: "🍅", item: "Pizza Sauce", quantity: "3 tbsp" }
  ],
  instructions: [
    "Spread sauce on pizza base.",
    "Add shrimp and toppings.",
    "Top with cheese.",
    "Bake for 12 minutes.",
    "Serve hot."
  ]
},

{
  id: 1130,
  category: "seafood",
  name: "Fish Cutlet",
  image: "/fishcutlet.jpg",
  ingredients: [
    { icon: "🐟", item: "Cooked Fish", quantity: "200 g" },
    { icon: "🥔", item: "Potato", quantity: "1" },
    { icon: "🌶️", item: "Spices", quantity: "1 tsp" },
    { icon: "🍞", item: "Bread Crumbs", quantity: "1 cup" }
  ],
  instructions: [
    "Mash fish and potato.",
    "Add spices.",
    "Shape into patties.",
    "Coat with breadcrumbs.",
    "Fry until crispy."
  ]
},

{
  id: 1131,
  category: "seafood",
  name: "Shrimp Curry",
  image: "/shrimpcurry.jpg",
  ingredients: [
    { icon: "🦐", item: "Shrimp", quantity: "250 g" },
    { icon: "🧅", item: "Onion", quantity: "1" },
    { icon: "🍅", item: "Tomato", quantity: "2" },
    { icon: "🌶️", item: "Spices", quantity: "1 tsp" }
  ],
  instructions: [
    "Prepare onion tomato gravy.",
    "Add spices.",
    "Add shrimp.",
    "Cook for 10 minutes.",
    "Serve hot."
  ]
},

{
  id: 1132,
  category: "seafood",
  name: "Fish Sandwich",
  image: "/fishsandwich.jpg",
  ingredients: [
    { icon: "🍞", item: "Bread", quantity: "2 slices" },
    { icon: "🐟", item: "Fish Fillet", quantity: "1 piece" },
    { icon: "🥬", item: "Lettuce", quantity: "2 leaves" },
    { icon: "🧈", item: "Butter", quantity: "1 tbsp" }
  ],
  instructions: [
    "Fry fish fillet.",
    "Toast bread.",
    "Place fish and lettuce between bread.",
    "Add butter or sauce.",
    "Serve warm."
  ]
},

{
  id: 1133,
  category: "seafood",
  name: "Fish Pakora",
  image: "/fishpakora.jpg",
  ingredients: [
    { icon: "🐟", item: "Fish Pieces", quantity: "250 g" },
    { icon: "🌾", item: "Gram Flour", quantity: "1 cup" },
    { icon: "🌶️", item: "Chilli Powder", quantity: "1 tsp" },
    { icon: "🧂", item: "Salt", quantity: "1 tsp" }
  ],
  instructions: [
    "Prepare gram flour batter.",
    "Dip fish pieces.",
    "Deep fry until crispy.",
    "Drain oil.",
    "Serve hot."
  ]
},

{
  id: 1134,
  category: "seafood",
  name: "Seafood Risotto",
  image: "/seafoodrisotto.jpg",
  ingredients: [
    { icon: "🍚", item: "Arborio Rice", quantity: "2 cups" },
    { icon: "🦐", item: "Shrimp", quantity: "150 g" },
    { icon: "🦑", item: "Squid", quantity: "100 g" },
    { icon: "🧀", item: "Parmesan Cheese", quantity: "1/2 cup" }
  ],
  instructions: [
    "Cook rice slowly with broth.",
    "Add seafood.",
    "Stir continuously.",
    "Add cheese.",
    "Serve creamy."
  ]
},

{
  id: 1135,
  category: "seafood",
  name: "Fish Kebab",
  image: "/fishkebab.jpg",
  ingredients: [
    { icon: "🐟", item: "Fish Mince", quantity: "250 g" },
    { icon: "🧅", item: "Onion", quantity: "1" },
    { icon: "🌶️", item: "Spices", quantity: "1 tsp" },
    { icon: "🍞", item: "Bread Crumbs", quantity: "1/2 cup" }
  ],
  instructions: [
    "Mix fish mince and spices.",
    "Shape into kebabs.",
    "Coat with breadcrumbs.",
    "Shallow fry.",
    "Serve hot."
  ]
},

{
  id: 1136,
  category: "seafood",
  name: "Prawn Tempura Sushi",
  image: "/prawntempurasushi.jpg",
  ingredients: [
    { icon: "🍚", item: "Sushi Rice", quantity: "1 cup" },
    { icon: "🦐", item: "Tempura Prawn", quantity: "4" },
    { icon: "🌿", item: "Seaweed", quantity: "2 sheets" },
    { icon: "🥢", item: "Soy Sauce", quantity: "2 tbsp" }
  ],
  instructions: [
    "Spread rice on seaweed sheet.",
    "Place tempura prawn.",
    "Roll tightly.",
    "Slice into pieces.",
    "Serve with soy sauce."
  ]
},

{
  id: 1137,
  category: "seafood",
  name: "Crab Fried Rice",
  image: "/crabfriedrice.jpg",
  ingredients: [
    { icon: "🍚", item: "Cooked Rice", quantity: "2 cups" },
    { icon: "🦀", item: "Crab Meat", quantity: "200 g" },
    { icon: "🥕", item: "Vegetables", quantity: "1/2 cup" },
    { icon: "🥢", item: "Soy Sauce", quantity: "1 tbsp" }
  ],
  instructions: [
    "Cook crab meat.",
    "Saute vegetables.",
    "Add rice and crab.",
    "Add soy sauce.",
    "Mix and serve."
  ]
},

{
  id: 1138,
  category: "seafood",
  name: "Fish Stew",
  image: "/fishstew.jpg",
  ingredients: [
    { icon: "🐟", item: "Fish Pieces", quantity: "250 g" },
    { icon: "🥥", item: "Coconut Milk", quantity: "1 cup" },
    { icon: "🧅", item: "Onion", quantity: "1" },
    { icon: "🌶️", item: "Spices", quantity: "1 tsp" }
  ],
  instructions: [
    "Saute onions.",
    "Add spices.",
    "Add fish pieces.",
    "Pour coconut milk.",
    "Simmer and serve."
  ]
},

{
  id: 1139,
  category: "seafood",
  name: "Shrimp Tacos",
  image: "/shrimptacos.jpg",
  ingredients: [
    { icon: "🦐", item: "Shrimp", quantity: "200 g" },
    { icon: "🌮", item: "Taco Shells", quantity: "4" },
    { icon: "🥬", item: "Lettuce", quantity: "1 cup" },
    { icon: "🍋", item: "Lime", quantity: "1" }
  ],
  instructions: [
    "Cook shrimp with spices.",
    "Place shrimp in taco shells.",
    "Add lettuce and sauce.",
    "Squeeze lime.",
    "Serve fresh."
  ]
},

{
  id: 1140,
  category: "seafood",
  name: "Grilled Shrimp Skewers",
  image: "/grilledshrimpskewers.jpg",
  ingredients: [
    { icon: "🦐", item: "Shrimp", quantity: "250 g" },
    { icon: "🧄", item: "Garlic", quantity: "3 cloves" },
    { icon: "🫒", item: "Olive Oil", quantity: "1 tbsp" },
    { icon: "🧂", item: "Salt & Pepper", quantity: "1 tsp" }
  ],
  instructions: [
    "Marinate shrimp with garlic and oil.",
    "Thread onto skewers.",
    "Grill for 6–8 minutes.",
    "Turn once.",
    "Serve hot."
  ]
}

];

export default SeaFoodRecipes;