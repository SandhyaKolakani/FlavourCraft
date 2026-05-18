const SweetsRecipes = [

{
  id: 1301,
  category: "sweets",
  name: "Gulab Jamun",
  image: "/gulabjamun.jpg",
  ingredients: [
    { icon: "🥛", item: "Milk Powder", quantity: "1 cup" },
    { icon: "🌾", item: "Flour", quantity: "2 tbsp" },
    { icon: "🥛", item: "Milk", quantity: "1/4 cup" },
    { icon: "🍬", item: "Sugar Syrup", quantity: "1 cup" }
  ],
  instructions: [
    "Prepare dough with milk powder and flour.",
    "Make small balls.",
    "Deep fry until golden brown.",
    "Soak in warm sugar syrup.",
    "Serve warm."
  ]
},

{
  id: 1302,
  category: "sweets",
  name: "Rasgulla",
  image: "/rasgulla.jpg",
  ingredients: [
    { icon: "🥛", item: "Milk", quantity: "1 litre" },
    { icon: "🍋", item: "Lemon Juice", quantity: "2 tbsp" },
    { icon: "🍬", item: "Sugar", quantity: "1 cup" },
    { icon: "💧", item: "Water", quantity: "2 cups" }
  ],
  instructions: [
    "Boil milk and add lemon juice.",
    "Separate paneer from whey.",
    "Make small balls.",
    "Cook in sugar syrup.",
    "Serve chilled."
  ]
},

{
  id: 1303,
  category: "sweets",
  name: "Kaju Katli",
  image: "/kajukatli.jpg",
  ingredients: [
    { icon: "🥜", item: "Cashews", quantity: "1 cup" },
    { icon: "🍬", item: "Sugar", quantity: "1/2 cup" },
    { icon: "💧", item: "Water", quantity: "1/4 cup" }
  ],
  instructions: [
    "Grind cashews into powder.",
    "Prepare sugar syrup.",
    "Mix cashew powder into syrup.",
    "Roll into thin sheet.",
    "Cut into diamond shapes."
  ]
},

{
  id: 1304,
  category: "sweets",
  name: "Jalebi",
  image: "/jalebi.jpg",
  ingredients: [
    { icon: "🌾", item: "Maida", quantity: "1 cup" },
    { icon: "🍬", item: "Sugar", quantity: "1 cup" },
    { icon: "🧂", item: "Baking Soda", quantity: "1 pinch" },
    { icon: "🧈", item: "Oil", quantity: "for frying" }
  ],
  instructions: [
    "Prepare batter with flour.",
    "Make sugar syrup.",
    "Pipe batter into hot oil.",
    "Fry until crisp.",
    "Dip in sugar syrup."
  ]
},

{
  id: 1305,
  category: "sweets",
  name: "Rava Kesari",
  image: "/ravakesari.jpg",
  ingredients: [
    { icon: "🌾", item: "Rava", quantity: "1 cup" },
    { icon: "🍬", item: "Sugar", quantity: "1 cup" },
    { icon: "🧈", item: "Ghee", quantity: "3 tbsp" },
    { icon: "🥜", item: "Cashews", quantity: "10 pieces" }
  ],
  instructions: [
    "Roast rava in ghee.",
    "Add hot water.",
    "Cook until soft.",
    "Add sugar and mix.",
    "Garnish with cashews."
  ]
},

{
  id: 1306,
  category: "sweets",
  name: "Gajar Halwa",
  image: "/gajarhalwa.jpg",
  ingredients: [
    { icon: "🥕", item: "Carrot", quantity: "2 cups grated" },
    { icon: "🥛", item: "Milk", quantity: "1 cup" },
    { icon: "🍬", item: "Sugar", quantity: "1/2 cup" },
    { icon: "🧈", item: "Ghee", quantity: "2 tbsp" }
  ],
  instructions: [
    "Cook grated carrots in milk.",
    "Add sugar and cook.",
    "Stir continuously.",
    "Add ghee and nuts.",
    "Serve warm."
  ]
},

{
  id: 1307,
  category: "sweets",
  name: "Mysore Pak",
  image: "/mysorepak.jpg",
  ingredients: [
    { icon: "🌾", item: "Gram Flour", quantity: "1 cup" },
    { icon: "🍬", item: "Sugar", quantity: "1 cup" },
    { icon: "🧈", item: "Ghee", quantity: "1 cup" }
  ],
  instructions: [
    "Prepare sugar syrup.",
    "Add gram flour slowly.",
    "Stir continuously.",
    "Add ghee gradually.",
    "Pour into tray and cut."
  ]
},

{
  id: 1308,
  category: "sweets",
  name: "Coconut Ladoo",
  image: "/coconutladoo.jpg",
  ingredients: [
    { icon: "🥥", item: "Grated Coconut", quantity: "1 cup" },
    { icon: "🥛", item: "Condensed Milk", quantity: "1/2 cup" },
    { icon: "🌿", item: "Cardamom Powder", quantity: "1/4 tsp" }
  ],
  instructions: [
    "Heat coconut in pan.",
    "Add condensed milk.",
    "Mix well.",
    "Shape into balls.",
    "Serve."
  ]
},

{
  id: 1309,
  category: "sweets",
  name: "Rasmalai",
  image: "/rasmalai.jpg",
  ingredients: [
    { icon: "🥛", item: "Milk", quantity: "1 litre" },
    { icon: "🧀", item: "Paneer Balls", quantity: "8 pieces" },
    { icon: "🍬", item: "Sugar", quantity: "1/2 cup" },
    { icon: "🌿", item: "Cardamom", quantity: "1/4 tsp" }
  ],
  instructions: [
    "Boil milk and reduce slightly.",
    "Add sugar and cardamom.",
    "Add paneer balls.",
    "Cook for 5 minutes.",
    "Serve chilled."
  ]
},

{
  id: 1310,
  category: "sweets",
  name: "Kheer",
  image: "/kheer.jpg",
  ingredients: [
    { icon: "🍚", item: "Rice", quantity: "1/4 cup" },
    { icon: "🥛", item: "Milk", quantity: "1 litre" },
    { icon: "🍬", item: "Sugar", quantity: "1/2 cup" },
    { icon: "🥜", item: "Nuts", quantity: "2 tbsp" }
  ],
  instructions: [
    "Boil milk in a pan.",
    "Add soaked rice.",
    "Cook until rice softens.",
    "Add sugar and nuts.",
    "Serve warm or chilled."
  ]
},

{
  id: 1311,
  category: "sweets",
  name: "Badam Halwa",
  image: "/badamhalwa.jpg",
  ingredients: [
    { icon: "🥜", item: "Almonds", quantity: "1 cup" },
    { icon: "🍬", item: "Sugar", quantity: "1/2 cup" },
    { icon: "🧈", item: "Ghee", quantity: "3 tbsp" }
  ],
  instructions: [
    "Soak and grind almonds.",
    "Cook paste in pan.",
    "Add sugar and ghee.",
    "Stir continuously.",
    "Serve hot."
  ]
},

{
  id: 1312,
  category: "sweets",
  name: "Milk Cake",
  image: "/milkcake.jpg",
  ingredients: [
    { icon: "🥛", item: "Milk", quantity: "1 litre" },
    { icon: "🍬", item: "Sugar", quantity: "1/2 cup" },
    { icon: "🍋", item: "Lemon Juice", quantity: "1 tbsp" }
  ],
  instructions: [
    "Boil milk until thick.",
    "Add lemon juice.",
    "Add sugar and cook.",
    "Pour into tray.",
    "Cut into pieces."
  ]
},

{
  id: 1313,
  category: "sweets",
  name: "Peda",
  image: "/peda.jpg",
  ingredients: [
    { icon: "🥛", item: "Milk Powder", quantity: "1 cup" },
    { icon: "🥛", item: "Condensed Milk", quantity: "1/2 cup" },
    { icon: "🌿", item: "Cardamom", quantity: "1/4 tsp" }
  ],
  instructions: [
    "Mix milk powder and condensed milk.",
    "Cook mixture in pan.",
    "Add cardamom.",
    "Shape into small balls.",
    "Serve."
  ]
},

{
  id: 1314,
  category: "sweets",
  name: "Boondi Ladoo",
  image: "/boondiladoo.jpg",
  ingredients: [
    { icon: "🌾", item: "Gram Flour", quantity: "1 cup" },
    { icon: "🍬", item: "Sugar", quantity: "1 cup" },
    { icon: "🧈", item: "Oil", quantity: "for frying" }
  ],
  instructions: [
    "Prepare gram flour batter.",
    "Fry small boondi balls.",
    "Soak in sugar syrup.",
    "Shape into ladoos.",
    "Serve."
  ]
},

{
  id: 1315,
  category: "sweets",
  name: "Kalakand",
  image: "/kalakand.jpg",
  ingredients: [
    { icon: "🥛", item: "Milk", quantity: "1 litre" },
    { icon: "🍬", item: "Sugar", quantity: "1/2 cup" },
    { icon: "🥜", item: "Pistachios", quantity: "1 tbsp" }
  ],
  instructions: [
    "Boil milk until thick.",
    "Add sugar and cook.",
    "Pour mixture into tray.",
    "Garnish with pistachios.",
    "Cut into squares."
  ]
},

{
  id: 1316,
  category: "sweets",
  name: "Cham Cham",
  image: "/chamcham.jpg",
  ingredients: [
    { icon: "🥛", item: "Milk", quantity: "1 litre" },
    { icon: "🍬", item: "Sugar Syrup", quantity: "1 cup" },
    { icon: "🥥", item: "Coconut", quantity: "2 tbsp" }
  ],
  instructions: [
    "Prepare paneer from milk.",
    "Shape into oval pieces.",
    "Cook in sugar syrup.",
    "Roll in coconut.",
    "Serve."
  ]
},

{
  id: 1317,
  category: "sweets",
  name: "Basundi",
  image: "/basundi.jpg",
  ingredients: [
    { icon: "🥛", item: "Milk", quantity: "1 litre" },
    { icon: "🍬", item: "Sugar", quantity: "1/3 cup" },
    { icon: "🥜", item: "Nuts", quantity: "2 tbsp" }
  ],
  instructions: [
    "Boil milk and reduce.",
    "Add sugar.",
    "Add nuts.",
    "Cook until thick.",
    "Serve chilled."
  ]
},

{
  id: 1318,
  category: "sweets",
  name: "Sandesh",
  image: "/sandesh.jpg",
  ingredients: [
    { icon: "🧀", item: "Paneer", quantity: "1 cup" },
    { icon: "🍬", item: "Sugar", quantity: "1/4 cup" },
    { icon: "🌿", item: "Cardamom", quantity: "1 pinch" }
  ],
  instructions: [
    "Mash paneer well.",
    "Add sugar and cardamom.",
    "Cook lightly.",
    "Shape into pieces.",
    "Serve."
  ]
}

];

export default SweetsRecipes;