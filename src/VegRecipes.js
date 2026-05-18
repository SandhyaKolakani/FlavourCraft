const VegRecipes = [
  
  {
    id: 101,
    category: "Veg",
    name: "Guthi Vankaya",
    image: "/guthiVankaya.jpg",
    ingredients: [
      { icon: "🍆", item: "Small brinjals", quantity: "8-10" },
      { icon: "🥜", item: "Peanuts", quantity: "2 tbsp" },
      { icon: "🧅", item: "Onion", quantity: "1 small" },
      { icon: "🛢️", item: "Oil", quantity: "2 tbsp" },
      { icon: "🧂", item: "Salt", quantity: "to taste" }
    ],
    instructions: [
      "Prepare stuffing with peanuts, onions, and spices.",
      "Stuff the small brinjals with mixture.",
      "Heat oil and fry stuffed brinjals lightly.",
      "Cook covered till tender.",
      "Serve hot with rice."
    ]
  },
  {
    id: 102,
    category: "Veg",
    name: "Gongura Pachadi",
    image: "/gonguraPachadi.webp",
    ingredients: [
      { icon: "🌿", item: "Gongura leaves", quantity: "2 cups" },
      { icon: "🧂", item: "Salt", quantity: "to taste" },
      { icon: "🛢️", item: "Oil", quantity: "1 tbsp" },
      { icon: "🌶️", item: "Green chilies", quantity: "2" },
      { icon: "🧅", item: "Onion", quantity: "1 small" }
    ],
    instructions: [
      "Wash and chop gongura leaves.",
      "Heat oil, sauté onions and chili.",
      "Add gongura leaves and salt.",
      "Cook till soft and slightly thick.",
      "Serve as a side with rice."
    ]
  },
  {
    id: 103,
    category: "Veg",
    name: "Bendakaya Curry",
    image: "/bendakayaCurry.jpg",
    ingredients: [
      { icon: "🥒", item: "Okra / Bendakaya", quantity: "250g" },
      { icon: "🧅", item: "Onion", quantity: "1 medium" },
      { icon: "🌶️", item: "Green chili", quantity: "2" },
      { icon: "🛢️", item: "Oil", quantity: "2 tbsp" },
      { icon: "🧂", item: "Salt", quantity: "to taste" }
    ],
    instructions: [
      "Wash and chop okra.",
      "Heat oil, sauté onions and chili.",
      "Add okra and salt, cook till soft.",
      "Add turmeric and coriander leaves.",
      "Serve with steamed rice."
    ]
  },
  {
    id: 104,
    category: "Veg",
    name: "Pappu",
    image: "/pappu.jpg",
    ingredients: [
      { icon: "🌱", item: "Toor dal / Yellow lentils", quantity: "1 cup" },
      { icon: "🧅", item: "Onion", quantity: "1 medium" },
      { icon: "🌶️", item: "Green chili", quantity: "2" },
      { icon: "🧂", item: "Salt", quantity: "to taste" },
      { icon: "🛢️", item: "Oil / Ghee", quantity: "2 tbsp" }
    ],
    instructions: [
      "Cook dal until soft.",
      "Heat oil, sauté onions and green chili.",
      "Add cooked dal, salt, and turmeric.",
      "Simmer for 5 minutes.",
      "Garnish with coriander leaves and serve."
    ]
  },
  {
    id: 105,
    category: "Veg",
    name: "Sambar",
    image: "/sambar.jpg",
    ingredients: [
      { icon: "🌱", item: "Toor dal", quantity: "1 cup" },
      { icon: "🥕", item: "Mixed vegetables", quantity: "2 cups" },
      { icon: "🍅", item: "Tamarind pulp", quantity: "2 tbsp" },
      { icon: "🧂", item: "Salt", quantity: "to taste" },
      { icon: "🌶️", item: "Red chili powder", quantity: "1 tsp" }
    ],
    instructions: [
      "Cook dal and vegetables together.",
      "Add tamarind pulp and spices.",
      "Simmer till vegetables are tender.",
      "Tempering with mustard seeds and curry leaves.",
      "Serve hot with rice or idli."
    ]
  },
  {
    id: 106,
    category: "Veg",
    name: "Vankaya Curry",
    image: "/vankayaCurry.jpg",
    ingredients: [
      { icon: "🧅", item: "Onion", quantity: "1 medium" },
      { icon: "🌶️", item: "Green chili", quantity: "2" },
      { icon: "🛢️", item: "Oil", quantity: "2 tbsp" },
      { icon: "🧂", item: "Salt", quantity: "to taste" },
      { icon: "🍆", item: "Brinjal / Eggplant", quantity: "250g" }
    ],
    instructions: [
      "Wash and chop brinjal.",
      "Heat oil and sauté onions and chili.",
      "Add brinjal, salt and turmeric.",
      "Cover and cook till tender.",
      "Garnish with coriander leaves and serve with rice."
    ]
  },
  {
    id: 107,
    category: "Veg",
    name: "Avakai Pachadi",
    image: "/avakai.jpg",
    ingredients: [
      { icon: "🥭", item: "Raw mango", quantity: "1 large" },
      { icon: "🌶️", item: "Red chili powder", quantity: "2 tbsp" },
      { icon: "🧂", item: "Salt", quantity: "2 tsp" },
      { icon: "🛢️", item: "Oil", quantity: "2 tbsp" },
      { icon: "🌿", item: "Mustard seeds", quantity: "1 tsp" }
    ],
    instructions: [
      "Peel and grate mango.",
      "Mix with chili powder, salt, and mustard seeds.",
      "Add hot oil to preserve flavor.",
      "Store in airtight jar.",
      "Serve as pickle with rice."
    ]
  },
  {
    id: 108,
    category: "Veg",
    name: "Tomato Pappu",
    image: "/tomatoPappu.jpg",
    ingredients: [
      { icon: "🌱", item: "Toor dal", quantity: "1 cup" },
      { icon: "🍅", item: "Tomatoes", quantity: "2 large" },
      { icon: "🧅", item: "Onion", quantity: "1 small" },
      { icon: "🛢️", item: "Oil", quantity: "2 tbsp" },
      { icon: "🧂", item: "Salt", quantity: "to taste" }
    ],
    instructions: [
      "Cook dal until soft.",
      "Heat oil, sauté onions.",
      "Add chopped tomatoes and cook till soft.",
      "Mix dal with tomato masala, salt, and turmeric.",
      "Serve hot with rice."
    ]
  },
  {
    id: 109,
    category: "Veg",
    name: "Carrot Beans Poriyal",
    image: "/carrotBeansPoriyal.webp",
    ingredients: [
      { icon: "🥕", item: "Carrots", quantity: "1 cup" },
      { icon: "🥦", item: "Beans", quantity: "1 cup" },
      { icon: "🧂", item: "Salt", quantity: "to taste" },
      { icon: "🛢️", item: "Oil", quantity: "1 tbsp" },
      { icon: "🌿", item: "Grated coconut", quantity: "2 tbsp" }
    ],
    instructions: [
      "Chop and boil carrot and beans till soft.",
      "Heat oil, add mustard seeds and curry leaves.",
      "Add vegetables, salt, and coconut.",
      "Mix well and cook 2 minutes.",
      "Serve as a side dish."
    ]
  },
  {
    id: 110,
    category: "Veg",
    name: "Vegetable Kurma",
    image: "/vegKurma.jpg",
    ingredients: [
      { icon: "🥦", item: "Mixed vegetables", quantity: "2 cups" },
      { icon: "🥥", item: "Coconut milk", quantity: "1 cup" },
      { icon: "🧅", item: "Onion", quantity: "1 medium" },
      { icon: "🌶️", item: "Green chili", quantity: "2" },
      { icon: "🧂", item: "Salt", quantity: "to taste" }
    ],
    instructions: [
      "Heat oil, sauté onions and chili.",
      "Add mixed vegetables and cook 5 minutes.",
      "Add coconut milk, salt, and turmeric.",
      "Simmer till vegetables are tender.",
      "Serve hot with rice or roti."
    ]
  },
  {
  id: 111,
  category: "Veg",
  name: "Majjiga Pulusu",
  image: "/majjigaPulusu.webp",
  ingredients: [
    { icon: "🥛", item: "Buttermilk", quantity: "2 cups" },
    { icon: "🧅", item: "Onion", quantity: "1 small" },
    { icon: "🌶️", item: "Green chili", quantity: "2" },
    { icon: "🌿", item: "Curry leaves", quantity: "few" },
    { icon: "🧂", item: "Salt", quantity: "to taste" }
  ],
  instructions: [
    "Heat oil and add mustard seeds and curry leaves.",
    "Add chopped onions and green chili.",
    "Pour buttermilk and mix well.",
    "Add salt and turmeric.",
    "Simmer for 5 minutes and serve."
  ]
},
{
  id: 112,
  category: "Veg",
  name: "Beerakaya Pachadi",
  image: "/beerakayaPachadi.jpg",
  ingredients: [
    { icon: "🥒", item: "Ridge gourd peel", quantity: "1 cup" },
    { icon: "🌶️", item: "Red chilies", quantity: "2" },
    { icon: "🧄", item: "Garlic", quantity: "2 cloves" },
    { icon: "🧂", item: "Salt", quantity: "to taste" },
    { icon: "🛢️", item: "Oil", quantity: "1 tbsp" }
  ],
  instructions: [
    "Heat oil and fry ridge gourd peels.",
    "Add red chilies and garlic.",
    "Cool and grind to paste.",
    "Add salt and mix well.",
    "Serve with rice."
  ]
},
{
  id: 113,
  category: "Veg",
  name: "Dosakaya Pappu",
  image: "/dosakayaPappu.jpg",
  ingredients: [
    { icon: "🥒", item: "Dosakaya (Yellow cucumber)", quantity: "1 cup chopped" },
    { icon: "🌱", item: "Toor dal", quantity: "1 cup" },
    { icon: "🌶️", item: "Green chili", quantity: "2" },
    { icon: "🧂", item: "Salt", quantity: "to taste" },
    { icon: "🛢️", item: "Oil", quantity: "1 tbsp" }
  ],
  instructions: [
    "Cook dal until soft.",
    "Add chopped dosakaya and chili.",
    "Cook for few minutes.",
    "Add salt and turmeric.",
    "Serve hot with rice."
  ]
},
{
  id: 114,
  category: "Veg",
  name: "Kakarakaya Fry",
  image: "/kakarkayaFry.jpg",
  ingredients: [
    { icon: "🥒", item: "Bitter gourd", quantity: "2 sliced" },
    { icon: "🧅", item: "Onion", quantity: "1 medium" },
    { icon: "🌶️", item: "Chili powder", quantity: "1 tsp" },
    { icon: "🛢️", item: "Oil", quantity: "2 tbsp" },
    { icon: "🧂", item: "Salt", quantity: "to taste" }
  ],
  instructions: [
    "Slice bitter gourd thinly.",
    "Heat oil and sauté onions.",
    "Add bitter gourd slices.",
    "Cook until crispy.",
    "Add salt and chili powder and serve."
  ]
},
{
  id: 115,
  category: "Veg",
  name: "Aratikaya Fry",
  image: "/aratikayaFry.jpg",
  ingredients: [
    { icon: "🍌", item: "Raw banana", quantity: "2" },
    { icon: "🌶️", item: "Red chili powder", quantity: "1 tsp" },
    { icon: "🧂", item: "Salt", quantity: "to taste" },
    { icon: "🛢️", item: "Oil", quantity: "2 tbsp" },
    { icon: "🌿", item: "Curry leaves", quantity: "few" }
  ],
  instructions: [
    "Peel and cut raw banana pieces.",
    "Heat oil and add curry leaves.",
    "Add banana pieces and fry.",
    "Add salt and chili powder.",
    "Cook until golden and crispy."
  ]
},
{
  id: 116,
  category: "Veg",
  name: "Mushroom Curry",
  image: "/mushroomCurry.jpg",
  ingredients: [
    { icon: "🍄", item: "Mushrooms", quantity: "200g" },
    { icon: "🧅", item: "Onion", quantity: "1 medium" },
    { icon: "🍅", item: "Tomato", quantity: "1" },
    { icon: "🛢️", item: "Oil", quantity: "2 tbsp" },
    { icon: "🧂", item: "Salt", quantity: "to taste" }
  ],
  instructions: [
    "Heat oil and sauté onions.",
    "Add tomatoes and cook until soft.",
    "Add mushrooms and spices.",
    "Cook until mushrooms are tender.",
    "Serve with rice or roti."
  ]
},
{
  id: 117,
  category: "Veg",
  name: "Vegetable Biryani",
  image: "/vegBiryani.jpg",
  ingredients: [
    { icon: "🍚", item: "Basmati rice", quantity: "2 cups" },
    { icon: "🥕", item: "Mixed vegetables", quantity: "2 cups" },
    { icon: "🧅", item: "Onions", quantity: "1 sliced" },
    { icon: "🌿", item: "Mint leaves", quantity: "few" },
    { icon: "🧂", item: "Salt", quantity: "to taste" }
  ],
  instructions: [
    "Cook rice partially.",
    "Sauté onions and vegetables.",
    "Add spices and mint leaves.",
    "Layer rice and vegetable mixture.",
    "Cook for 10 minutes and serve."
  ]
},
{
  id: 118,
  category: "Veg",
  name: "Curd Rice",
  image: "/curdRice.jpg",
  ingredients: [
    { icon: "🍚", item: "Cooked rice", quantity: "2 cups" },
    { icon: "🥛", item: "Curd", quantity: "1 cup" },
    { icon: "🌿", item: "Curry leaves", quantity: "few" },
    { icon: "🥜", item: "Peanuts", quantity: "2 tbsp" },
    { icon: "🧂", item: "Salt", quantity: "to taste" }
  ],
  instructions: [
    "Mash cooked rice lightly.",
    "Add curd and mix well.",
    "Prepare tempering with mustard seeds and peanuts.",
    "Mix tempering with rice.",
    "Serve chilled."
  ]
},
{
  id: 119,
  category: "Veg",
  name: "Rasam",
  image: "/rasam.jpg",
  ingredients: [
    { icon: "🍅", item: "Tomatoes", quantity: "2" },
    { icon: "🌿", item: "Coriander leaves", quantity: "few" },
    { icon: "🌶️", item: "Rasam powder", quantity: "1 tsp" },
    { icon: "🍋", item: "Tamarind water", quantity: "1 cup" },
    { icon: "🧂", item: "Salt", quantity: "to taste" }
  ],
  instructions: [
    "Boil tamarind water and tomatoes.",
    "Add rasam powder and salt.",
    "Simmer for few minutes.",
    "Add coriander leaves.",
    "Serve hot with rice."
  ]
},
{
  id: 120,
  category: "Veg",
  name: "Kandi Podi",
  image: "/kandiPodi.jpg",
  ingredients: [
    { icon: "🌱", item: "Toor dal", quantity: "1 cup" },
    { icon: "🌶️", item: "Dry red chilies", quantity: "4" },
    { icon: "🧄", item: "Garlic", quantity: "3 cloves" },
    { icon: "🧂", item: "Salt", quantity: "to taste" },
    { icon: "🛢️", item: "Oil", quantity: "1 tsp" }
  ],
  instructions: [
    "Dry roast dal and red chilies.",
    "Cool the mixture.",
    "Grind with garlic and salt.",
    "Store in airtight container.",
    "Serve with rice and ghee."
  ]
},
{
  id: 121,
  category: "Veg",
  name: "Karivepaku Podi",
  image: "/karivepakuPodi.jpg",
  ingredients: [
    { icon: "🌿", item: "Curry leaves", quantity: "1 cup" },
    { icon: "🌱", item: "Toor dal", quantity: "2 tbsp" },
    { icon: "🌶️", item: "Dry red chilies", quantity: "3" },
    { icon: "🧄", item: "Garlic", quantity: "2 cloves" },
    { icon: "🧂", item: "Salt", quantity: "to taste" }
  ],
  instructions: [
    "Dry roast curry leaves until crisp.",
    "Roast dal and red chilies separately.",
    "Cool the ingredients.",
    "Grind with garlic and salt.",
    "Serve with hot rice and ghee."
  ]
},
{
  id: 122,
  category: "Veg",
  name: "Munagaku Pappu",
  image: "/munagakuPappu.jpg",
  ingredients: [
    { icon: "🌱", item: "Toor dal", quantity: "1 cup" },
    { icon: "🥬", item: "Drumstick leaves", quantity: "1 cup" },
    { icon: "🌶️", item: "Green chilies", quantity: "2" },
    { icon: "🧅", item: "Onion", quantity: "1 small" },
    { icon: "🧂", item: "Salt", quantity: "to taste" }
  ],
  instructions: [
    "Cook dal until soft.",
    "Add drumstick leaves and chilies.",
    "Cook for few minutes.",
    "Add salt and mix well.",
    "Serve with rice."
  ]
},
{
  id: 123,
  category: "Veg",
  name: "Capsicum Masala",
  image: "/capsicumMasala.jpg",
  ingredients: [
    { icon: "🫑", item: "Capsicum", quantity: "2 chopped" },
    { icon: "🧅", item: "Onion", quantity: "1 medium" },
    { icon: "🍅", item: "Tomato", quantity: "1" },
    { icon: "🛢️", item: "Oil", quantity: "2 tbsp" },
    { icon: "🧂", item: "Salt", quantity: "to taste" }
  ],
  instructions: [
    "Heat oil and sauté onions.",
    "Add tomatoes and cook until soft.",
    "Add chopped capsicum.",
    "Cook for 5–7 minutes.",
    "Serve hot with roti or rice."
  ]
},
{
  id: 124,
  category: "Veg",
  name: "Aloo Gobi",
  image: "/alooGobi.jpg",
  ingredients: [
    { icon: "🥔", item: "Potatoes", quantity: "2 diced" },
    { icon: "🥦", item: "Cauliflower", quantity: "1 cup florets" },
    { icon: "🧅", item: "Onion", quantity: "1" },
    { icon: "🛢️", item: "Oil", quantity: "2 tbsp" },
    { icon: "🧂", item: "Salt", quantity: "to taste" }
  ],
  instructions: [
    "Heat oil and sauté onions.",
    "Add potato cubes and cook for 5 minutes.",
    "Add cauliflower florets.",
    "Cook with spices and salt.",
    "Serve hot."
  ]
},
{
  id: 125,
  category: "Veg",
  name: "Potato Kurma",
  image: "/potatoKurma.jpg",
  ingredients: [
    { icon: "🥔", item: "Potatoes", quantity: "3 boiled" },
    { icon: "🧅", item: "Onion", quantity: "1 medium" },
    { icon: "🥥", item: "Coconut paste", quantity: "2 tbsp" },
    { icon: "🌶️", item: "Green chilies", quantity: "2" },
    { icon: "🧂", item: "Salt", quantity: "to taste" }
  ],
  instructions: [
    "Heat oil and sauté onions and chilies.",
    "Add boiled potato pieces.",
    "Add coconut paste and spices.",
    "Simmer for 5 minutes.",
    "Serve with chapati or rice."
  ]
},
{
  id: 126,
  category: "Veg",
  name: "Tomato Rasam",
  image: "/tomatoRasam.jpg",
  ingredients: [
    { icon: "🍅", item: "Tomatoes", quantity: "2" },
    { icon: "🍋", item: "Tamarind water", quantity: "1 cup" },
    { icon: "🌿", item: "Coriander leaves", quantity: "few" },
    { icon: "🌶️", item: "Rasam powder", quantity: "1 tsp" },
    { icon: "🧂", item: "Salt", quantity: "to taste" }
  ],
  instructions: [
    "Boil tamarind water and tomatoes.",
    "Add rasam powder and salt.",
    "Simmer for few minutes.",
    "Add coriander leaves.",
    "Serve hot."
  ]
},
{
  id: 127,
  category: "Veg",
  name: "Paneer Butter Masala",
  image: "/paneerButterMasala.jpg",
  ingredients: [
    { icon: "🧀", item: "Paneer", quantity: "200g cubes" },
    { icon: "🧈", item: "Butter", quantity: "2 tbsp" },
    { icon: "🍅", item: "Tomato puree", quantity: "1 cup" },
    { icon: "🧅", item: "Onion", quantity: "1 small" },
    { icon: "🧂", item: "Salt", quantity: "to taste" }
  ],
  instructions: [
    "Heat butter and sauté onions.",
    "Add tomato puree and cook.",
    "Add paneer cubes and spices.",
    "Simmer for few minutes.",
    "Serve with roti or naan."
  ]
},
{
  id: 128,
  category: "Veg",
  name: "Vegetable Upma",
  image: "/vegUpma.jpg",
  ingredients: [
    { icon: "🌾", item: "Rava / Semolina", quantity: "1 cup" },
    { icon: "🥕", item: "Mixed vegetables", quantity: "1 cup" },
    { icon: "🧅", item: "Onion", quantity: "1 small" },
    { icon: "🌿", item: "Curry leaves", quantity: "few" },
    { icon: "🧂", item: "Salt", quantity: "to taste" }
  ],
  instructions: [
    "Roast rava lightly.",
    "Heat oil and sauté onions and vegetables.",
    "Add water and bring to boil.",
    "Add roasted rava slowly.",
    "Cook until soft and serve."
  ]
},
{
  id: 129,
  category: "Veg",
  name: "Vegetable Pulao",
  image: "/vegPulao.jpg",
  ingredients: [
    { icon: "🍚", item: "Basmati rice", quantity: "2 cups" },
    { icon: "🥕", item: "Mixed vegetables", quantity: "1 cup" },
    { icon: "🧅", item: "Onion", quantity: "1 sliced" },
    { icon: "🌿", item: "Mint leaves", quantity: "few" },
    { icon: "🧂", item: "Salt", quantity: "to taste" }
  ],
  instructions: [
    "Heat oil and sauté onions.",
    "Add vegetables and spices.",
    "Add rice and water.",
    "Cook until rice is done.",
    "Serve hot."
  ]
},
{
  id: 130,
  category: "Veg",
  name: "Corn Masala",
  image: "/cornMasala.jpg",
  ingredients: [
    { icon: "🌽", item: "Sweet corn", quantity: "1 cup" },
    { icon: "🧅", item: "Onion", quantity: "1 small" },
    { icon: "🍅", item: "Tomato", quantity: "1" },
    { icon: "🛢️", item: "Oil", quantity: "1 tbsp" },
    { icon: "🧂", item: "Salt", quantity: "to taste" }
  ],
  instructions: [
    "Heat oil and sauté onions.",
    "Add tomatoes and cook until soft.",
    "Add boiled corn.",
    "Cook with spices.",
    "Serve hot."
  ]
}
 
];

export default VegRecipes;