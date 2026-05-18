const Desserts = [

{
  id: 701,
  category: "desserts",
  name: "Brownie with Ice Cream",
  image: "/brownieicecream.jpg",
  ingredients: [
    { icon: "🍫", item: "Chocolate Brownie", quantity: "1 piece" },
    { icon: "🍦", item: "Vanilla Ice Cream", quantity: "1 scoop" },
    { icon: "🍯", item: "Chocolate Syrup", quantity: "2 tbsp" }
  ],
  instructions: [
    "Bake or heat the chocolate brownie.",
    "Place brownie on a dessert plate.",
    "Add a scoop of vanilla ice cream on top.",
    "Drizzle chocolate syrup over it.",
    "Serve immediately."
  ]
},

{
  id: 702,
  category: "desserts",
  name: "Chocolate Lava Cake",
  image: "/lavacake.jpg",
  ingredients: [
    { icon: "🍫", item: "Dark Chocolate", quantity: "150 g" },
    { icon: "🌾", item: "Flour", quantity: "1 cup" },
    { icon: "🥚", item: "Eggs", quantity: "2" },
    { icon: "🧈", item: "Butter", quantity: "80 g" }
  ],
  instructions: [
    "Melt butter and dark chocolate together.",
    "Whisk eggs and sugar until fluffy.",
    "Mix flour and melted chocolate mixture.",
    "Pour batter into baking molds.",
    "Bake briefly so center stays molten."
  ]
},

{
  id: 703,
  category: "desserts",
  name: "New York Cheesecake",
  image: "/cheesecake.jpg",
  ingredients: [
    { icon: "🧀", item: "Cream Cheese", quantity: "250 g" },
    { icon: "🍪", item: "Biscuit Base", quantity: "1 cup" },
    { icon: "🧈", item: "Butter", quantity: "50 g" },
    { icon: "🍬", item: "Sugar", quantity: "1/2 cup" }
  ],
  instructions: [
    "Crush biscuits and mix with melted butter.",
    "Press mixture into cake pan to form base.",
    "Beat cream cheese and sugar until smooth.",
    "Pour mixture onto biscuit base.",
    "Bake and chill before serving."
  ]
},

{
  id: 704,
  category: "desserts",
  name: "Oreo Ice Cream",
  image: "/oreoicecream.jpg",
  ingredients: [
    { icon: "🍪", item: "Oreo Biscuits", quantity: "6 crushed" },
    { icon: "🍦", item: "Cream", quantity: "1 cup" },
    { icon: "🥛", item: "Milk", quantity: "1 cup" },
    { icon: "🍬", item: "Sugar", quantity: "1/2 cup" }
  ],
  instructions: [
    "Mix cream, milk and sugar together.",
    "Add crushed Oreo biscuits.",
    "Blend mixture until smooth.",
    "Pour into container and freeze.",
    "Serve chilled."
  ]
},

{
  id: 705,
  category: "desserts",
  name: "Chocolate Mousse",
  image: "/chocolatemousse.jpg",
  ingredients: [
    { icon: "🍫", item: "Dark Chocolate", quantity: "200 g" },
    { icon: "🍦", item: "Whipping Cream", quantity: "1 cup" },
    { icon: "🍬", item: "Sugar", quantity: "2 tbsp" }
  ],
  instructions: [
    "Melt dark chocolate gently.",
    "Whip cream until fluffy.",
    "Fold melted chocolate into whipped cream.",
    "Add sugar and mix lightly.",
    "Refrigerate before serving."
  ]
},

{
  id: 706,
  category: "desserts",
  name: "Blueberry Cheesecake",
  image: "/blueberrycheesecake.jpg",
  ingredients: [
    { icon: "🫐", item: "Blueberries", quantity: "1/2 cup" },
    { icon: "🧀", item: "Cream Cheese", quantity: "200 g" },
    { icon: "🍪", item: "Biscuit Base", quantity: "1 cup" },
    { icon: "🧈", item: "Butter", quantity: "50 g" }
  ],
  instructions: [
    "Prepare biscuit base with butter.",
    "Beat cream cheese and sugar together.",
    "Pour filling over base.",
    "Top with blueberry mixture.",
    "Bake and chill before serving."
  ]
},

{
  id: 707,
  category: "desserts",
  name: "Caramel Ice Cream",
  image: "/caramelicecream.jpg",
  ingredients: [
    { icon: "🍯", item: "Caramel Sauce", quantity: "3 tbsp" },
    { icon: "🥛", item: "Milk", quantity: "2 cups" },
    { icon: "🍦", item: "Cream", quantity: "1 cup" },
    { icon: "🍬", item: "Sugar", quantity: "1/2 cup" }
  ],
  instructions: [
    "Mix milk, cream and sugar.",
    "Add caramel sauce and stir well.",
    "Blend mixture smoothly.",
    "Freeze for several hours.",
    "Serve chilled."
  ]
},

{
  id: 708,
  category: "desserts",
  name: "Nutella Cake",
  image: "/nutellacake.jpg",
  ingredients: [
    { icon: "🍫", item: "Nutella", quantity: "1/2 cup" },
    { icon: "🌾", item: "Flour", quantity: "2 cups" },
    { icon: "🥚", item: "Eggs", quantity: "3" },
    { icon: "🍬", item: "Sugar", quantity: "1 cup" }
  ],
  instructions: [
    "Mix eggs and sugar until fluffy.",
    "Add flour and Nutella.",
    "Prepare smooth batter.",
    "Pour into cake tin.",
    "Bake until soft and moist."
  ]
},

{
  id: 709,
  category: "desserts",
  name: "Tiramisu",
  image: "/tiramisu.jpg",
  ingredients: [
    { icon: "☕", item: "Coffee", quantity: "1 cup" },
    { icon: "🍪", item: "Ladyfinger Biscuits", quantity: "200 g" },
    { icon: "🧀", item: "Mascarpone Cheese", quantity: "200 g" },
    { icon: "🍬", item: "Sugar", quantity: "1/2 cup" }
  ],
  instructions: [
    "Dip ladyfingers in coffee.",
    "Layer biscuits in a dish.",
    "Spread mascarpone mixture over them.",
    "Repeat layers.",
    "Chill before serving."
  ]
},

{
  id: 710,
  category: "desserts",
  name: "Lotus Biscoff Cheesecake",
  image: "/biscoffcheesecake.jpg",
  ingredients: [
    { icon: "🍪", item: "Biscoff Biscuits", quantity: "1 cup" },
    { icon: "🍯", item: "Biscoff Spread", quantity: "1/2 cup" },
    { icon: "🧀", item: "Cream Cheese", quantity: "200 g" },
    { icon: "🧈", item: "Butter", quantity: "50 g" }
  ],
  instructions: [
    "Crush biscuits and mix with butter.",
    "Press into cake base.",
    "Beat cream cheese and Biscoff spread.",
    "Pour mixture over base.",
    "Chill before serving."
  ]
},

{
  id: 711,
  category: "desserts",
  name: "Vanilla Ice Cream",
  image: "/vanillaicecream.jpg",
  ingredients: [
    { icon: "🥛", item: "Milk", quantity: "2 cups" },
    { icon: "🍦", item: "Cream", quantity: "1 cup" },
    { icon: "🍬", item: "Sugar", quantity: "1/2 cup" },
    { icon: "🌼", item: "Vanilla Essence", quantity: "1 tsp" }
  ],
  instructions: [
    "Mix milk, cream and sugar.",
    "Add vanilla essence.",
    "Blend until smooth.",
    "Freeze for 5 hours.",
    "Serve chilled."
  ]
},

{
  id: 712,
  category: "desserts",
  name: "Chocolate Ice Cream",
  image: "/chocolateicecream.jpg",
  ingredients: [
    { icon: "🍫", item: "Cocoa Powder", quantity: "3 tbsp" },
    { icon: "🥛", item: "Milk", quantity: "2 cups" },
    { icon: "🍦", item: "Cream", quantity: "1 cup" },
    { icon: "🍬", item: "Sugar", quantity: "1/2 cup" }
  ],
  instructions: [
    "Mix cocoa powder with milk.",
    "Add cream and sugar.",
    "Blend well.",
    "Freeze until set.",
    "Serve cold."
  ]
},

{
  id: 713,
  category: "desserts",
  name: "Strawberry Ice Cream",
  image: "/strawberryicecream.jpg",
  ingredients: [
    { icon: "🍓", item: "Strawberries", quantity: "1 cup" },
    { icon: "🥛", item: "Milk", quantity: "2 cups" },
    { icon: "🍦", item: "Cream", quantity: "1 cup" },
    { icon: "🍬", item: "Sugar", quantity: "1/2 cup" }
  ],
  instructions: [
    "Blend strawberries into puree.",
    "Mix with milk, cream and sugar.",
    "Blend smoothly.",
    "Freeze mixture.",
    "Serve chilled."
  ]
},

{
  id: 714,
  category: "desserts",
  name: "Mango Ice Cream",
  image: "/mangoicecream.jpg",
  ingredients: [
    { icon: "🥭", item: "Mango Pulp", quantity: "1 cup" },
    { icon: "🥛", item: "Milk", quantity: "2 cups" },
    { icon: "🍦", item: "Cream", quantity: "1 cup" },
    { icon: "🍬", item: "Sugar", quantity: "1/2 cup" }
  ],
  instructions: [
    "Mix mango pulp with milk.",
    "Add cream and sugar.",
    "Blend well.",
    "Freeze until firm.",
    "Serve chilled."
  ]
},

{
  id: 715,
  category: "desserts",
  name: "Butterscotch Ice Cream",
  image: "/butterscotchicecream.jpg",
  ingredients: [
    { icon: "🍬", item: "Butterscotch Chips", quantity: "1/2 cup" },
    { icon: "🥛", item: "Milk", quantity: "2 cups" },
    { icon: "🍦", item: "Cream", quantity: "1 cup" },
    { icon: "🍯", item: "Caramel Syrup", quantity: "2 tbsp" }
  ],
  instructions: [
    "Mix milk, cream and caramel.",
    "Add butterscotch chips.",
    "Blend mixture.",
    "Freeze for several hours.",
    "Serve cold."
  ]
},

{
  id: 716,
  category: "desserts",
  name: "Chocolate Cake",
  image: "/chocolatecake.jpg",
  ingredients: [
    { icon: "🍫", item: "Chocolate", quantity: "200 g" },
    { icon: "🌾", item: "Flour", quantity: "2 cups" },
    { icon: "🥚", item: "Eggs", quantity: "3" },
    { icon: "🧈", item: "Butter", quantity: "100 g" },
    { icon: "🍬", item: "Sugar", quantity: "1 cup" }
  ],
  instructions: [
    "Prepare chocolate cake batter.",
    "Pour batter into cake tin.",
    "Bake until soft and fluffy.",
    "Cool the cake.",
    "Serve sliced."
  ]
},

{
  id: 717,
  category: "desserts",
  name: "Black Forest Cake",
  image: "/blackforestcake.jpg",
  ingredients: [
    { icon: "🍫", item: "Chocolate Sponge", quantity: "2 layers" },
    { icon: "🍒", item: "Cherries", quantity: "1/2 cup" },
    { icon: "🍦", item: "Whipped Cream", quantity: "1 cup" },
    { icon: "🍬", item: "Sugar", quantity: "1/2 cup" }
  ],
  instructions: [
    "Place first sponge layer.",
    "Spread whipped cream.",
    "Add cherries.",
    "Cover with second layer.",
    "Decorate and serve."
  ]
},

{
  id: 718,
  category: "desserts",
  name: "Red Velvet Cake",
  image: "/redvelvetcake.jpg",
  ingredients: [
    { icon: "🌾", item: "Flour", quantity: "2 cups" },
    { icon: "🥚", item: "Eggs", quantity: "3" },
    { icon: "🧀", item: "Cream Cheese", quantity: "200 g" },
    { icon: "🍬", item: "Sugar", quantity: "1 cup" }
  ],
  instructions: [
    "Prepare red velvet batter.",
    "Bake cake layers.",
    "Prepare cream cheese frosting.",
    "Spread frosting between layers.",
    "Serve chilled."
  ]
},

{
  id: 719,
  category: "desserts",
  name: "Pineapple Cake",
  image: "/pineapplecake.jpg",
  ingredients: [
    { icon: "🍍", item: "Pineapple", quantity: "1 cup" },
    { icon: "🌾", item: "Flour", quantity: "2 cups" },
    { icon: "🍦", item: "Whipped Cream", quantity: "1 cup" },
    { icon: "🍬", item: "Sugar", quantity: "1 cup" }
  ],
  instructions: [
    "Bake sponge cake.",
    "Layer whipped cream.",
    "Add pineapple pieces.",
    "Decorate cake.",
    "Serve fresh."
  ]
},

{
  id: 720,
  category: "desserts",
  name: "Strawberry Cake",
  image: "/strawberrycake.jpg",
  ingredients: [
    { icon: "🍓", item: "Strawberries", quantity: "1 cup" },
    { icon: "🌾", item: "Flour", quantity: "2 cups" },
    { icon: "🥚", item: "Eggs", quantity: "3" },
    { icon: "🍬", item: "Sugar", quantity: "1 cup" }
  ],
  instructions: [
    "Prepare strawberry batter.",
    "Bake cake layers.",
    "Spread strawberry cream.",
    "Decorate with berries.",
    "Serve chilled."
  ]
},

{
  id: 721,
  category: "desserts",
  name: "Molten Chocolate Cake",
  image: "/moltenchocolatecake.jpg",
  ingredients: [
    { icon: "🍫", item: "Dark Chocolate", quantity: "200 g" },
    { icon: "🧈", item: "Butter", quantity: "100 g" },
    { icon: "🥚", item: "Eggs", quantity: "2" },
    { icon: "🌾", item: "Flour", quantity: "1/2 cup" }
  ],
  instructions: [
    "Melt chocolate and butter.",
    "Mix eggs and flour.",
    "Prepare batter.",
    "Bake shortly to keep center molten.",
    "Serve warm."
  ]
},

{
  id: 722,
  category: "desserts",
  name: "Belgian Chocolate Ice Cream",
  image: "/belgianchocolateicecream.jpg",
  ingredients: [
    { icon: "🍫", item: "Belgian Chocolate", quantity: "150 g" },
    { icon: "🥛", item: "Milk", quantity: "2 cups" },
    { icon: "🍦", item: "Cream", quantity: "1 cup" },
    { icon: "🍬", item: "Sugar", quantity: "1/2 cup" }
  ],
  instructions: [
    "Melt Belgian chocolate.",
    "Mix with milk and cream.",
    "Add sugar.",
    "Freeze mixture.",
    "Serve cold."
  ]
},

{
  id: 723,
  category: "desserts",
  name: "Ferrero Rocher Cake",
  image: "/ferrerorochercake.jpg",
  ingredients: [
    { icon: "🍫", item: "Ferrero Rocher", quantity: "6 pieces" },
    { icon: "🌾", item: "Flour", quantity: "2 cups" },
    { icon: "🥚", item: "Eggs", quantity: "3" },
    { icon: "🍬", item: "Sugar", quantity: "1 cup" }
  ],
  instructions: [
    "Prepare chocolate cake batter.",
    "Bake cake layers.",
    "Add Ferrero filling.",
    "Frost cake.",
    "Serve slices."
  ]
},

{
  id: 724,
  category: "desserts",
  name: "Rainbow Cake",
  image: "/rainbowcake.jpg",
  ingredients: [
    { icon: "🌾", item: "Flour", quantity: "2 cups" },
    { icon: "🥚", item: "Eggs", quantity: "3" },
    { icon: "🍬", item: "Sugar", quantity: "1 cup" },
    { icon: "🧈", item: "Butter", quantity: "100 g" }
  ],
  instructions: [
    "Divide batter into colors.",
    "Bake colored layers.",
    "Stack layers with cream.",
    "Decorate cake.",
    "Serve slices."
  ]
},

{
  id: 725,
  category: "desserts",
  name: "Cookie Dough Ice Cream",
  image: "/cookiedoughicecream.jpg",
  ingredients: [
    { icon: "🍪", item: "Cookie Dough", quantity: "1/2 cup" },
    { icon: "🍦", item: "Cream", quantity: "1 cup" },
    { icon: "🥛", item: "Milk", quantity: "1 cup" },
    { icon: "🍬", item: "Sugar", quantity: "1/2 cup" }
  ],
  instructions: [
    "Mix milk, cream and sugar.",
    "Add cookie dough chunks.",
    "Blend lightly.",
    "Freeze mixture.",
    "Serve chilled."
  ]
},

{
  id: 726,
  category: "desserts",
  name: "Death by Chocolate",
  image: "/deathbychocolate.jpg",
  ingredients: [
    { icon: "🍫", item: "Chocolate Cake Layers", quantity: "2" },
    { icon: "🍦", item: "Chocolate Ice Cream", quantity: "1 scoop" },
    { icon: "🍯", item: "Chocolate Syrup", quantity: "3 tbsp" }
  ],
  instructions: [
    "Place chocolate cake layer.",
    "Add chocolate ice cream.",
    "Drizzle chocolate syrup.",
    "Add another layer.",
    "Serve immediately."
  ]
},

{
  id: 727,
  category: "desserts",
  name: "Oreo Cheesecake",
  image: "/oreocheesecake.jpg",
  ingredients: [
    { icon: "🍪", item: "Oreo Biscuits", quantity: "8 crushed" },
    { icon: "🧀", item: "Cream Cheese", quantity: "200 g" },
    { icon: "🧈", item: "Butter", quantity: "50 g" },
    { icon: "🍬", item: "Sugar", quantity: "1/2 cup" }
  ],
  instructions: [
    "Make Oreo biscuit base.",
    "Prepare cream cheese filling.",
    "Mix crushed Oreos.",
    "Pour over base.",
    "Chill before serving."
  ]
},

{
  id: 728,
  category: "desserts",
  name: "Salted Caramel Cake",
  image: "/saltedcaramelcake.jpg",
  ingredients: [
    { icon: "🍯", item: "Caramel Sauce", quantity: "1/2 cup" },
    { icon: "🌾", item: "Flour", quantity: "2 cups" },
    { icon: "🥚", item: "Eggs", quantity: "3" },
    { icon: "🧈", item: "Butter", quantity: "100 g" }
  ],
  instructions: [
    "Prepare cake batter.",
    "Bake cake layers.",
    "Add salted caramel frosting.",
    "Decorate cake.",
    "Serve slices."
  ]
},

{
  id: 729,
  category: "desserts",
  name: "Chocolate Chip Ice Cream",
  image: "/chocochipicecream.jpg",
  ingredients: [
    { icon: "🍫", item: "Chocolate Chips", quantity: "1/2 cup" },
    { icon: "🥛", item: "Milk", quantity: "2 cups" },
    { icon: "🍦", item: "Cream", quantity: "1 cup" },
    { icon: "🍬", item: "Sugar", quantity: "1/2 cup" }
  ],
  instructions: [
    "Mix milk, cream and sugar.",
    "Add chocolate chips.",
    "Blend mixture.",
    "Freeze until firm.",
    "Serve chilled."
  ]
},

{
  id: 730,
  category: "desserts",
  name: "Strawberry Cheesecake",
  image: "/strawberrycheesecake.jpg",
  ingredients: [
    { icon: "🍓", item: "Strawberries", quantity: "1 cup" },
    { icon: "🧀", item: "Cream Cheese", quantity: "200 g" },
    { icon: "🍪", item: "Biscuit Base", quantity: "1 cup" },
    { icon: "🧈", item: "Butter", quantity: "50 g" }
  ],
  instructions: [
    "Prepare biscuit base.",
    "Mix cream cheese filling.",
    "Add strawberry topping.",
    "Chill the cake.",
    "Serve slices."
  ]
},

{
  id: 731,
  category: "desserts",
  name: "Banana Split",
  image: "/bananasplit.jpg",
  ingredients: [
    { icon: "🍌", item: "Banana", quantity: "1 sliced" },
    { icon: "🍦", item: "Vanilla Ice Cream", quantity: "1 scoop" },
    { icon: "🍓", item: "Strawberry Ice Cream", quantity: "1 scoop" },
    { icon: "🍫", item: "Chocolate Syrup", quantity: "2 tbsp" }
  ],
  instructions: [
    "Slice banana lengthwise.",
    "Place ice cream scoops between slices.",
    "Drizzle chocolate syrup.",
    "Add toppings if desired.",
    "Serve immediately."
  ]
},

{
  id: 732,
  category: "desserts",
  name: "Waffle with Ice Cream",
  image: "/waffleicecream.jpg",
  ingredients: [
    { icon: "🧇", item: "Waffle", quantity: "1 piece" },
    { icon: "🍦", item: "Vanilla Ice Cream", quantity: "1 scoop" },
    { icon: "🍯", item: "Honey", quantity: "2 tbsp" },
    { icon: "🍓", item: "Strawberries", quantity: "4 sliced" }
  ],
  instructions: [
    "Prepare warm waffle.",
    "Place ice cream on top.",
    "Add honey drizzle.",
    "Top with strawberries.",
    "Serve hot."
  ]
},

{
  id: 733,
  category: "desserts",
  name: "Chocolate Truffle Cake",
  image: "/chocolatetrufflecake.jpg",
  ingredients: [
    { icon: "🍫", item: "Dark Chocolate", quantity: "200 g" },
    { icon: "🌾", item: "Flour", quantity: "2 cups" },
    { icon: "🥚", item: "Eggs", quantity: "3" },
    { icon: "🧈", item: "Butter", quantity: "100 g" }
  ],
  instructions: [
    "Prepare chocolate batter.",
    "Bake cake layers.",
    "Add truffle frosting.",
    "Decorate cake.",
    "Serve slices."
  ]
},

{
  id: 734,
  category: "desserts",
  name: "Gelato",
  image: "/gelato.jpg",
  ingredients: [
    { icon: "🥛", item: "Milk", quantity: "2 cups" },
    { icon: "🍦", item: "Cream", quantity: "1/2 cup" },
    { icon: "🍬", item: "Sugar", quantity: "1/2 cup" },
    { icon: "🌼", item: "Vanilla Essence", quantity: "1 tsp" }
  ],
  instructions: [
    "Mix milk and sugar.",
    "Add cream and vanilla.",
    "Blend smoothly.",
    "Freeze mixture.",
    "Serve chilled."
  ]
},

{
  id: 735,
  category: "desserts",
  name: "Matcha Ice Cream",
  image: "/matchaicecream.jpg",
  ingredients: [
    { icon: "🍵", item: "Matcha Powder", quantity: "2 tsp" },
    { icon: "🥛", item: "Milk", quantity: "2 cups" },
    { icon: "🍦", item: "Cream", quantity: "1 cup" },
    { icon: "🍬", item: "Sugar", quantity: "1/2 cup" }
  ],
  instructions: [
    "Mix matcha powder with milk.",
    "Add cream and sugar.",
    "Blend well.",
    "Freeze mixture.",
    "Serve cold."
  ]
},

{
  id: 736,
  category: "desserts",
  name: "Red Velvet Cheesecake",
  image: "/redvelvetcheesecake.jpg",
  ingredients: [
    { icon: "🧀", item: "Cream Cheese", quantity: "200 g" },
    { icon: "🍰", item: "Red Velvet Cake Base", quantity: "1 layer" },
    { icon: "🍬", item: "Sugar", quantity: "1/2 cup" },
    { icon: "🧈", item: "Butter", quantity: "50 g" }
  ],
  instructions: [
    "Prepare cheesecake filling.",
    "Place red velvet base.",
    "Add cream cheese layer.",
    "Bake or chill.",
    "Serve slices."
  ]
},

{
  id: 737,
  category: "desserts",
  name: "Chocolate Sundae",
  image: "/chocolatesundae.jpg",
  ingredients: [
    { icon: "🍦", item: "Vanilla Ice Cream", quantity: "2 scoops" },
    { icon: "🍫", item: "Chocolate Syrup", quantity: "3 tbsp" },
    { icon: "🥜", item: "Nuts", quantity: "2 tbsp" },
    { icon: "🍒", item: "Cherry", quantity: "1" }
  ],
  instructions: [
    "Place ice cream in bowl.",
    "Pour chocolate syrup.",
    "Add nuts topping.",
    "Place cherry on top.",
    "Serve immediately."
  ]
},

{
  id: 738,
  category: "desserts",
  name: "Caramel Cheesecake",
  image: "/caramelcheesecake.jpg",
  ingredients: [
    { icon: "🧀", item: "Cream Cheese", quantity: "200 g" },
    { icon: "🍯", item: "Caramel Sauce", quantity: "1/2 cup" },
    { icon: "🍪", item: "Biscuit Base", quantity: "1 cup" },
    { icon: "🧈", item: "Butter", quantity: "50 g" }
  ],
  instructions: [
    "Prepare biscuit base.",
    "Add cream cheese mixture.",
    "Pour caramel topping.",
    "Chill cake.",
    "Serve slices."
  ]
},

{
  id: 739,
  category: "desserts",
  name: "Oreo Sundae",
  image: "/oreosundae.jpg",
  ingredients: [
    { icon: "🍦", item: "Vanilla Ice Cream", quantity: "2 scoops" },
    { icon: "🍪", item: "Oreo Biscuits", quantity: "4 crushed" },
    { icon: "🍫", item: "Chocolate Syrup", quantity: "2 tbsp" }
  ],
  instructions: [
    "Add ice cream to bowl.",
    "Sprinkle crushed Oreos.",
    "Drizzle chocolate syrup.",
    "Mix lightly.",
    "Serve chilled."
  ]
},

{
  id: 740,
  category: "desserts",
  name: "Blueberry Ice Cream",
  image: "/blueberryicecream.jpg",
  ingredients: [
    { icon: "🫐", item: "Blueberries", quantity: "1 cup" },
    { icon: "🥛", item: "Milk", quantity: "2 cups" },
    { icon: "🍦", item: "Cream", quantity: "1 cup" },
    { icon: "🍬", item: "Sugar", quantity: "1/2 cup" }
  ],
  instructions: [
    "Blend blueberries into puree.",
    "Mix with milk, cream and sugar.",
    "Blend smoothly.",
    "Freeze mixture.",
    "Serve cold."
  ]
}

];

export default Desserts;