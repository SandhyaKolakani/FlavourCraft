const NonVegRecipes = [
{
  id: 201,
  category: "NonVeg",
  name: "Chicken Curry",
  image: "/chickencurry.jpg",
  ingredients: [
    { icon: "🍗", item: "Chicken", quantity: "500g" },
    { icon: "🧅", item: "Onion", quantity: "2 chopped" },
    { icon: "🍅", item: "Tomato", quantity: "2 chopped" },
    { icon: "🧄", item: "Ginger garlic paste", quantity: "1 tbsp" },
    { icon: "🌶️", item: "Chili powder", quantity: "1 tbsp" }
  ],
  instructions: [
    "Heat oil and sauté onions.",
    "Add ginger garlic paste and tomatoes.",
    "Add spices and chicken pieces.",
    "Cook until chicken becomes tender.",
    "Serve hot with rice."
  ]
},

{
  id: 202,
  category: "NonVeg",
  name: "Fish Curry",
  image: "/fishcurry.jpg",
  ingredients: [
    { icon: "🐟", item: "Fish pieces", quantity: "500g" },
    { icon: "🧅", item: "Onion", quantity: "1 sliced" },
    { icon: "🍅", item: "Tomato", quantity: "2" },
    { icon: "🌶️", item: "Chili powder", quantity: "1 tbsp" },
    { icon: "🧂", item: "Salt", quantity: "to taste" }
  ],
  instructions: [
    "Heat oil and sauté onions.",
    "Add tomatoes and spices.",
    "Add fish pieces carefully.",
    "Cook until fish is done.",
    "Serve hot with rice."
  ]
},

{
  id: 203,
  category: "NonVeg",
  name: "Mutton Curry",
  image: "/muttoncurry.jpg",
  ingredients: [
    { icon: "🥩", item: "Mutton", quantity: "500g" },
    { icon: "🧅", item: "Onions", quantity: "2" },
    { icon: "🍅", item: "Tomatoes", quantity: "2" },
    { icon: "🧄", item: "Ginger garlic paste", quantity: "1 tbsp" },
    { icon: "🌶️", item: "Chili powder", quantity: "1 tbsp" }
  ],
  instructions: [
    "Heat oil and sauté onions.",
    "Add ginger garlic paste.",
    "Add tomatoes and spices.",
    "Add mutton and cook until tender.",
    "Serve hot."
  ]
},

{
  id: 204,
  category: "NonVeg",
  name: "Chicken Fry",
  image: "/chickenfry.jpg",
  ingredients: [
    { icon: "🍗", item: "Chicken", quantity: "500g" },
    { icon: "🌶️", item: "Chili powder", quantity: "1 tbsp" },
    { icon: "🧄", item: "Ginger garlic paste", quantity: "1 tbsp" },
    { icon: "🧂", item: "Salt", quantity: "to taste" },
    { icon: "🍃", item: "Curry leaves", quantity: "few" }
  ],
  instructions: [
    "Marinate chicken with spices.",
    "Heat oil in pan.",
    "Add curry leaves and chicken.",
    "Fry until chicken becomes crispy.",
    "Serve hot."
  ]
},

{
  id: 205,
  category: "NonVeg",
  name: "Fish Fry",
  image: "/fishfry.jpg",
  ingredients: [
    { icon: "🐟", item: "Fish slices", quantity: "500g" },
    { icon: "🌶️", item: "Chili powder", quantity: "1 tbsp" },
    { icon: "🧄", item: "Ginger garlic paste", quantity: "1 tbsp" },
    { icon: "🍋", item: "Lemon juice", quantity: "1 tbsp" },
    { icon: "🧂", item: "Salt", quantity: "to taste" }
  ],
  instructions: [
    "Marinate fish with spices and lemon juice.",
    "Heat oil in pan.",
    "Shallow fry fish pieces.",
    "Cook until golden brown.",
    "Serve hot."
  ]
},

{
  id: 206,
  category: "NonVeg",
  name: "Mutton Fry",
  image: "/muttonfry.jpg",
  ingredients: [
    { icon: "🥩", item: "Mutton", quantity: "500g" },
    { icon: "🧅", item: "Onions", quantity: "2" },
    { icon: "🌶️", item: "Chili powder", quantity: "1 tbsp" },
    { icon: "🧄", item: "Ginger garlic paste", quantity: "1 tbsp" },
    { icon: "🧂", item: "Salt", quantity: "to taste" }
  ],
  instructions: [
    "Cook mutton until tender.",
    "Heat oil and sauté onions.",
    "Add spices and cooked mutton.",
    "Fry until dry.",
    "Serve hot."
  ]
},
{
  id: 207,
  category: "NonVeg",
  name: "Prawn Curry",
  image: "/prawncurry.jpg",
  ingredients: [
    { icon: "🦐", item: "Prawns", quantity: "500g" },
    { icon: "🧅", item: "Onions", quantity: "2 chopped" },
    { icon: "🍅", item: "Tomatoes", quantity: "2 chopped" },
    { icon: "🧄", item: "Ginger garlic paste", quantity: "1 tbsp" },
    { icon: "🌶️", item: "Chili powder", quantity: "1 tbsp" }
  ],
  instructions: [
    "Heat oil and sauté onions.",
    "Add ginger garlic paste and tomatoes.",
    "Add spices and prawns.",
    "Cook for 8–10 minutes.",
    "Serve hot with rice."
  ]
},

{
  id: 208,
  category: "NonVeg",
  name: "Crab Curry",
  image: "/crabcurry.jpg",
  ingredients: [
    { icon: "🦀", item: "Crab", quantity: "500g" },
    { icon: "🧅", item: "Onion", quantity: "2 chopped" },
    { icon: "🍅", item: "Tomatoes", quantity: "2" },
    { icon: "🌶️", item: "Chili powder", quantity: "1 tbsp" },
    { icon: "🧄", item: "Ginger garlic paste", quantity: "1 tbsp" }
  ],
  instructions: [
    "Heat oil and sauté onions.",
    "Add ginger garlic paste and tomatoes.",
    "Add spices and crab pieces.",
    "Cook until crab is tender.",
    "Serve hot."
  ]
},

{
  id: 209,
  category: "NonVeg",
  name: "Egg Curry",
  image: "/eggcurry.jpg",
  ingredients: [
    { icon: "🥚", item: "Boiled eggs", quantity: "4" },
    { icon: "🧅", item: "Onions", quantity: "2" },
    { icon: "🍅", item: "Tomatoes", quantity: "2" },
    { icon: "🌶️", item: "Chili powder", quantity: "1 tbsp" },
    { icon: "🧂", item: "Salt", quantity: "to taste" }
  ],
  instructions: [
    "Heat oil and sauté onions.",
    "Add tomatoes and spices.",
    "Add boiled eggs.",
    "Cook for few minutes.",
    "Serve hot."
  ]
},

{
  id: 210,
  category: "NonVeg",
  name: "Chicken 65",
  image: "/chicken65.jpg",
  ingredients: [
    { icon: "🍗", item: "Chicken", quantity: "500g" },
    { icon: "🌶️", item: "Chili powder", quantity: "1 tbsp" },
    { icon: "🧄", item: "Ginger garlic paste", quantity: "1 tbsp" },
    { icon: "🥚", item: "Egg", quantity: "1" },
    { icon: "🧂", item: "Salt", quantity: "to taste" }
  ],
  instructions: [
    "Marinate chicken with spices and egg.",
    "Heat oil for deep frying.",
    "Fry chicken pieces until crispy.",
    "Drain excess oil.",
    "Serve hot."
  ]
},

{
  id: 211,
  category: "NonVeg",
  name: "Pepper Chicken",
  image: "/pepperchicken.jpg",
  ingredients: [
    { icon: "🍗", item: "Chicken", quantity: "500g" },
    { icon: "🧂", item: "Salt", quantity: "to taste" },
    { icon: "🧄", item: "Ginger garlic paste", quantity: "1 tbsp" },
    { icon: "⚫", item: "Black pepper", quantity: "1 tbsp" },
    { icon: "🧅", item: "Onion", quantity: "1 chopped" }
  ],
  instructions: [
    "Heat oil and sauté onions.",
    "Add ginger garlic paste.",
    "Add chicken pieces.",
    "Add pepper powder and cook well.",
    "Serve hot."
  ]
},

{
  id: 212,
  category: "NonVeg",
  name: "Prawn Fry",
  image: "/prawnfry.jpg",
  ingredients: [
    { icon: "🦐", item: "Prawns", quantity: "500g" },
    { icon: "🌶️", item: "Chili powder", quantity: "1 tbsp" },
    { icon: "🧄", item: "Ginger garlic paste", quantity: "1 tbsp" },
    { icon: "🍃", item: "Curry leaves", quantity: "few" },
    { icon: "🧂", item: "Salt", quantity: "to taste" }
  ],
  instructions: [
    "Marinate prawns with spices.",
    "Heat oil in a pan.",
    "Add curry leaves and prawns.",
    "Fry until cooked and dry.",
    "Serve hot."
  ]
},
{
  id: 213,
  category: "NonVeg",
  name: "Chicken Biryani",
  image: "/chickenbiryani.jpg",
  ingredients: [
    { icon: "🍗", item: "Chicken", quantity: "500g" },
    { icon: "🍚", item: "Basmati Rice", quantity: "2 cups" },
    { icon: "🧅", item: "Onions", quantity: "2 sliced" },
    { icon: "🧄", item: "Ginger garlic paste", quantity: "1 tbsp" },
    { icon: "🌶️", item: "Biryani masala", quantity: "1 tbsp" }
  ],
  instructions: [
    "Cook rice separately.",
    "Cook chicken with spices.",
    "Layer rice and chicken.",
    "Cook on dum for 10 minutes.",
    "Serve hot."
  ]
},

{
  id: 214,
  category: "NonVeg",
  name: "Mutton Biryani",
  image: "/muttonbiryani.jpg",
  ingredients: [
    { icon: "🥩", item: "Mutton", quantity: "500g" },
    { icon: "🍚", item: "Basmati Rice", quantity: "2 cups" },
    { icon: "🧅", item: "Onions", quantity: "2" },
    { icon: "🌶️", item: "Biryani masala", quantity: "1 tbsp" },
    { icon: "🧄", item: "Ginger garlic paste", quantity: "1 tbsp" }
  ],
  instructions: [
    "Cook mutton with spices.",
    "Cook rice separately.",
    "Layer rice and mutton.",
    "Cook on dum.",
    "Serve hot."
  ]
},

{
  id: 215,
  category: "NonVeg",
  name: "Egg Biryani",
  image: "/eggbiryani.jpg",
  ingredients: [
    { icon: "🥚", item: "Boiled Eggs", quantity: "4" },
    { icon: "🍚", item: "Rice", quantity: "2 cups" },
    { icon: "🧅", item: "Onions", quantity: "2" },
    { icon: "🌶️", item: "Biryani masala", quantity: "1 tbsp" },
    { icon: "🧄", item: "Ginger garlic paste", quantity: "1 tbsp" }
  ],
  instructions: [
    "Cook rice.",
    "Prepare masala gravy.",
    "Add boiled eggs.",
    "Mix with rice.",
    "Serve hot."
  ]
},

{
  id: 216,
  category: "NonVeg",
  name: "Chicken Lollipop",
  image: "/chickenlollipop.jpg",
  ingredients: [
    { icon: "🍗", item: "Chicken wings", quantity: "10 pieces" },
    { icon: "🌶️", item: "Chili powder", quantity: "1 tbsp" },
    { icon: "🧄", item: "Ginger garlic paste", quantity: "1 tbsp" },
    { icon: "🥚", item: "Egg", quantity: "1" },
    { icon: "🧂", item: "Salt", quantity: "to taste" }
  ],
  instructions: [
    "Marinate chicken wings.",
    "Dip in egg mixture.",
    "Deep fry in hot oil.",
    "Cook until crispy.",
    "Serve with sauce."
  ]
},

{
  id: 217,
  category: "NonVeg",
  name: "Chicken Manchurian",
  image: "/chickenmanchurian.jpg",
  ingredients: [
    { icon: "🍗", item: "Chicken", quantity: "300g" },
    { icon: "🧄", item: "Garlic", quantity: "1 tbsp" },
    { icon: "🌶️", item: "Chili sauce", quantity: "2 tbsp" },
    { icon: "🥣", item: "Soy sauce", quantity: "1 tbsp" },
    { icon: "🧅", item: "Spring onion", quantity: "2 tbsp" }
  ],
  instructions: [
    "Fry chicken pieces.",
    "Heat oil and sauté garlic.",
    "Add sauces.",
    "Mix chicken with sauce.",
    "Serve hot."
  ]
},

{
  id: 218,
  category: "NonVeg",
  name: "Apollo Fish",
  image: "/apollofish.jpg",
  ingredients: [
    { icon: "🐟", item: "Fish cubes", quantity: "400g" },
    { icon: "🌶️", item: "Chili powder", quantity: "1 tbsp" },
    { icon: "🧄", item: "Garlic", quantity: "1 tbsp" },
    { icon: "🥚", item: "Egg", quantity: "1" },
    { icon: "🧂", item: "Salt", quantity: "to taste" }
  ],
  instructions: [
    "Marinate fish pieces.",
    "Deep fry until crispy.",
    "Toss with garlic and spices.",
    "Cook for few minutes.",
    "Serve hot."
  ]
},

{
  id: 219,
  category: "NonVeg",
  name: "Egg Fry",
  image: "/eggfry.jpg",
  ingredients: [
    { icon: "🥚", item: "Boiled eggs", quantity: "4" },
    { icon: "🧅", item: "Onions", quantity: "1" },
    { icon: "🌶️", item: "Chili powder", quantity: "1 tsp" },
    { icon: "🍃", item: "Curry leaves", quantity: "few" },
    { icon: "🧂", item: "Salt", quantity: "to taste" }
  ],
  instructions: [
    "Heat oil and add curry leaves.",
    "Add onions and fry.",
    "Add boiled eggs.",
    "Add spices and fry well.",
    "Serve hot."
  ]
},

{
  id: 220,
  category: "NonVeg",
  name: "Keema Curry",
  image: "/keemacurry.jpg",
  ingredients: [
    { icon: "🥩", item: "Minced mutton", quantity: "500g" },
    { icon: "🧅", item: "Onions", quantity: "2" },
    { icon: "🍅", item: "Tomatoes", quantity: "2" },
    { icon: "🧄", item: "Ginger garlic paste", quantity: "1 tbsp" },
    { icon: "🌶️", item: "Chili powder", quantity: "1 tbsp" }
  ],
  instructions: [
    "Heat oil and sauté onions.",
    "Add ginger garlic paste.",
    "Add tomatoes and spices.",
    "Add minced mutton.",
    "Cook until done."
  ]
},
{
  id: 221,
  category: "NonVeg",
  name: "Prawn Biryani",
  image: "/prawnbiryani.jpg",
  ingredients: [
    { icon: "🦐", item: "Prawns", quantity: "500g" },
    { icon: "🍚", item: "Basmati Rice", quantity: "2 cups" },
    { icon: "🧅", item: "Onions", quantity: "2 sliced" },
    { icon: "🧄", item: "Ginger garlic paste", quantity: "1 tbsp" },
    { icon: "🌶️", item: "Biryani masala", quantity: "1 tbsp" }
  ],
  instructions: [
    "Cook rice separately.",
    "Cook prawns with spices.",
    "Layer rice and prawn masala.",
    "Cook on dum.",
    "Serve hot."
  ]
},

{
  id: 222,
  category: "NonVeg",
  name: "Fish Biryani",
  image: "/fishbiryani.jpg",
  ingredients: [
    { icon: "🐟", item: "Fish pieces", quantity: "400g" },
    { icon: "🍚", item: "Rice", quantity: "2 cups" },
    { icon: "🧅", item: "Onions", quantity: "2" },
    { icon: "🌶️", item: "Biryani masala", quantity: "1 tbsp" },
    { icon: "🧄", item: "Ginger garlic paste", quantity: "1 tbsp" }
  ],
  instructions: [
    "Cook rice separately.",
    "Prepare fish masala.",
    "Layer fish and rice.",
    "Cook for few minutes.",
    "Serve hot."
  ]
},

{
  id: 223,
  category: "NonVeg",
  name: "Chicken Kabab",
  image: "/chickenkabab.jpg",
  ingredients: [
    { icon: "🍗", item: "Chicken", quantity: "400g" },
    { icon: "🧄", item: "Ginger garlic paste", quantity: "1 tbsp" },
    { icon: "🌶️", item: "Chili powder", quantity: "1 tsp" },
    { icon: "🍋", item: "Lemon juice", quantity: "1 tbsp" },
    { icon: "🧂", item: "Salt", quantity: "to taste" }
  ],
  instructions: [
    "Marinate chicken with spices.",
    "Skewer chicken pieces.",
    "Grill or roast until cooked.",
    "Turn occasionally.",
    "Serve hot."
  ]
},

{
  id: 224,
  category: "NonVeg",
  name: "Tandoori Chicken",
  image: "/tandoorichicken.jpg",
  ingredients: [
    { icon: "🍗", item: "Chicken", quantity: "500g" },
    { icon: "🥛", item: "Curd", quantity: "1 cup" },
    { icon: "🌶️", item: "Tandoori masala", quantity: "1 tbsp" },
    { icon: "🧄", item: "Ginger garlic paste", quantity: "1 tbsp" },
    { icon: "🍋", item: "Lemon juice", quantity: "1 tbsp" }
  ],
  instructions: [
    "Marinate chicken in curd and spices.",
    "Keep for 2 hours.",
    "Grill or bake chicken.",
    "Cook until tender.",
    "Serve hot."
  ]
},

{
  id: 225,
  category: "NonVeg",
  name: "Chicken Pakodi",
  image: "/chickenpakodi.jpg",
  ingredients: [
    { icon: "🍗", item: "Chicken pieces", quantity: "400g" },
    { icon: "🌾", item: "Gram flour", quantity: "1 cup" },
    { icon: "🌶️", item: "Chili powder", quantity: "1 tsp" },
    { icon: "🧄", item: "Ginger garlic paste", quantity: "1 tbsp" },
    { icon: "🧂", item: "Salt", quantity: "to taste" }
  ],
  instructions: [
    "Mix chicken with flour and spices.",
    "Heat oil for frying.",
    "Drop small pieces into oil.",
    "Fry until crispy.",
    "Serve hot."
  ]
},

{
  id: 226,
  category: "NonVeg",
  name: "Prawn Masala",
  image: "/prawnmasala.jpg",
  ingredients: [
    { icon: "🦐", item: "Prawns", quantity: "500g" },
    { icon: "🧅", item: "Onions", quantity: "2" },
    { icon: "🍅", item: "Tomatoes", quantity: "2" },
    { icon: "🌶️", item: "Chili powder", quantity: "1 tbsp" },
    { icon: "🧄", item: "Ginger garlic paste", quantity: "1 tbsp" }
  ],
  instructions: [
    "Heat oil and sauté onions.",
    "Add tomatoes and spices.",
    "Add prawns and cook.",
    "Cook until masala thickens.",
    "Serve hot."
  ]
},

{
  id: 227,
  category: "NonVeg",
  name: "Crab Fry",
  image: "/crabfry.jpg",
  ingredients: [
    { icon: "🦀", item: "Crab", quantity: "500g" },
    { icon: "🌶️", item: "Chili powder", quantity: "1 tbsp" },
    { icon: "🧄", item: "Garlic", quantity: "1 tbsp" },
    { icon: "🍃", item: "Curry leaves", quantity: "few" },
    { icon: "🧂", item: "Salt", quantity: "to taste" }
  ],
  instructions: [
    "Heat oil and add curry leaves.",
    "Add garlic and crab pieces.",
    "Add spices.",
    "Cook until dry.",
    "Serve hot."
  ]
},

{
  id: 228,
  category: "NonVeg",
  name: "Chicken Roast",
  image: "/chickenroast.jpg",
  ingredients: [
    { icon: "🍗", item: "Chicken", quantity: "500g" },
    { icon: "🧄", item: "Ginger garlic paste", quantity: "1 tbsp" },
    { icon: "🌶️", item: "Chili powder", quantity: "1 tbsp" },
    { icon: "🧅", item: "Onion", quantity: "1 chopped" },
    { icon: "🧂", item: "Salt", quantity: "to taste" }
  ],
  instructions: [
    "Marinate chicken with spices.",
    "Heat oil and add onions.",
    "Add chicken pieces.",
    "Cook until roasted.",
    "Serve hot."
  ]
},

{
  id: 229,
  category: "NonVeg",
  name: "Pepper Mutton",
  image: "/peppermutton.jpg",
  ingredients: [
    { icon: "🥩", item: "Mutton", quantity: "500g" },
    { icon: "⚫", item: "Black pepper", quantity: "1 tbsp" },
    { icon: "🧄", item: "Ginger garlic paste", quantity: "1 tbsp" },
    { icon: "🧅", item: "Onion", quantity: "1 chopped" },
    { icon: "🧂", item: "Salt", quantity: "to taste" }
  ],
  instructions: [
    "Cook mutton until tender.",
    "Heat oil and sauté onions.",
    "Add pepper and spices.",
    "Add mutton and cook well.",
    "Serve hot."
  ]
},

{
  id: 230,
  category: "NonVeg",
  name: "Egg Masala",
  image: "/eggmasala.jpg",
  ingredients: [
    { icon: "🥚", item: "Boiled eggs", quantity: "4" },
    { icon: "🧅", item: "Onions", quantity: "2" },
    { icon: "🍅", item: "Tomatoes", quantity: "2" },
    { icon: "🌶️", item: "Chili powder", quantity: "1 tbsp" },
    { icon: "🧂", item: "Salt", quantity: "to taste" }
  ],
  instructions: [
    "Heat oil and sauté onions.",
    "Add tomatoes and spices.",
    "Add boiled eggs.",
    "Cook for few minutes.",
    "Serve hot."
  ]
},

{
  id: 231,
  category: "NonVeg",
  name: "Chicken Majestic",
  image: "/chickenmajestic.jpg",
  ingredients: [
    { icon: "🍗", item: "Chicken", quantity: "400g" },
    { icon: "🌶️", item: "Green chilies", quantity: "3" },
    { icon: "🥛", item: "Curd", quantity: "1/2 cup" },
    { icon: "🧄", item: "Garlic", quantity: "1 tbsp" },
    { icon: "🧂", item: "Salt", quantity: "to taste" }
  ],
  instructions: [
    "Fry chicken pieces.",
    "Prepare curd and chili sauce.",
    "Mix chicken with sauce.",
    "Cook for few minutes.",
    "Serve hot."
  ]
},

{
  id: 232,
  category: "NonVeg",
  name: "Prawn 65",
  image: "/prawn65.jpg",
  ingredients: [
    { icon: "🦐", item: "Prawns", quantity: "400g" },
    { icon: "🌶️", item: "Chili powder", quantity: "1 tbsp" },
    { icon: "🥚", item: "Egg", quantity: "1" },
    { icon: "🌾", item: "Corn flour", quantity: "2 tbsp" },
    { icon: "🧂", item: "Salt", quantity: "to taste" }
  ],
  instructions: [
    "Marinate prawns with spices.",
    "Mix with egg and flour.",
    "Deep fry until crispy.",
    "Drain oil.",
    "Serve hot."
  ]
},

{
  id: 233,
  category: "NonVeg",
  name: "Fish Tikka",
  image: "/fishtikka.jpg",
  ingredients: [
    { icon: "🐟", item: "Fish cubes", quantity: "400g" },
    { icon: "🥛", item: "Curd", quantity: "1/2 cup" },
    { icon: "🌶️", item: "Tikka masala", quantity: "1 tbsp" },
    { icon: "🍋", item: "Lemon juice", quantity: "1 tbsp" },
    { icon: "🧂", item: "Salt", quantity: "to taste" }
  ],
  instructions: [
    "Marinate fish with spices and curd.",
    "Skewer fish pieces.",
    "Grill or bake.",
    "Cook until tender.",
    "Serve hot."
  ]
},

{
  id: 234,
  category: "NonVeg",
  name: "Mutton Keema Fry",
  image: "/keemafry.jpg",
  ingredients: [
    { icon: "🥩", item: "Minced mutton", quantity: "400g" },
    { icon: "🧅", item: "Onions", quantity: "1" },
    { icon: "🌶️", item: "Chili powder", quantity: "1 tsp" },
    { icon: "🧄", item: "Garlic", quantity: "1 tbsp" },
    { icon: "🧂", item: "Salt", quantity: "to taste" }
  ],
  instructions: [
    "Heat oil and fry onions.",
    "Add garlic and spices.",
    "Add minced mutton.",
    "Cook until dry.",
    "Serve hot."
  ]
},

{
  id: 235,
  category: "NonVeg",
  name: "Egg Bhurji",
  image: "/eggbhurji.jpg",
  ingredients: [
    { icon: "🥚", item: "Eggs", quantity: "4" },
    { icon: "🧅", item: "Onions", quantity: "1 chopped" },
    { icon: "🍅", item: "Tomato", quantity: "1 chopped" },
    { icon: "🌶️", item: "Chili powder", quantity: "1 tsp" },
    { icon: "🧂", item: "Salt", quantity: "to taste" }
  ],
  instructions: [
    "Heat oil and sauté onions.",
    "Add tomatoes and spices.",
    "Break eggs into pan.",
    "Scramble and cook well.",
    "Serve hot."
  ]
}

];

export default NonVegRecipes;