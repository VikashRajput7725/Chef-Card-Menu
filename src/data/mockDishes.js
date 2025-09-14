// src/data/mockDishes.js

export const dishData = [
  {
    categoryId: 1,
    mealType: "STARTER",
    type: "VEG",
    description: "Crispy fried vegetables served with tangy sauce.",
    image:
      "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=500&q=60",
    category: {
      id: 2,
      name: "Appetizers",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/appetizers.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "APPETIZER",
    forChefit: true,
    forParty: true,
    id: 31,
    name: "Vegetable Pakora",
  },
  {
    categoryId: 1,
    mealType: "STARTER",
    type: "NON_VEG",
    description: "Spicy chicken wings with secret sauce.",
    image:
      "https://images.unsplash.com/photo-1561758033-48d52648ae8b?auto=format&fit=crop&w=500&q=60",
    category: {
      id: 2,
      name: "Appetizers",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/appetizers.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "APPETIZER",
    forChefit: true,
    forParty: true,
    id: 32,
    name: "Chicken Wings",
  },
  {
    categoryId: 1,
    mealType: "MAIN COURSE",
    type: "VEG",
    description: "Paneer cubes in spicy onion gravy with capsicum cubes.",
    image:
      "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=500&q=60",
    category: {
      id: 1,
      name: "North Indian",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    id: 1,
    name: "Kadhai Paneer",
  },
  {
    categoryId: 1,
    mealType: "MAIN COURSE",
    type: "NON_VEG",
    description: "Chicken cooked in rich gravy with butter and cream.",
    image:
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=500&q=60",
    category: {
      id: 1,
      name: "North Indian",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    id: 33,
    name: "Butter Chicken",
  },
  {
    categoryId: 1,
    mealType: "DESSERT",
    type: "VEG",
    description: "Creamy rice pudding with nuts and saffron.",
    image:
      "https://images.unsplash.com/photo-1602351443600-5fe67d4c1ae0?auto=format&fit=crop&w=500&q=60",
    category: {
      id: 3,
      name: "Sweets",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/sweets.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "SWEET",
    forChefit: true,
    forParty: true,
    id: 34,
    name: "Kheer",
  },
  {
    categoryId: 1,
    mealType: "SIDES",
    type: "VEG",
    description: "Fluffy baked bread with butter.",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=500&q=60",
    category: {
      id: 4,
      name: "Breads",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/breads.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "BREAD",
    forChefit: true,
    forParty: true,
    id: 35,
    name: "Naan",
  },
  {
    categoryId: 20,
    mealType: "MAIN_COURSE",
    type: "VEG",
    description:
      "A delicious curry made with spinach and paneer, rich in flavor and nutrients.",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: {
      id: 1,
      name: "Main Course",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/main_course.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "GRAVY",
    forChefit: true,
    forParty: true,
    nameHi: "पालक पनीर",
    nameBn: "",
    id: 20,
    name: "Palak Paneer",
  },
  {
    categoryId: 21,
    mealType: "STARTER",
    type: "NON_VEG",
    description:
      "Crispy, spicy chicken wings marinated in Indian spices and deep-fried to perfection.",
    image:
      "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: {
      id: 2,
      name: "Appetizers",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/appetizers.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "FRIED",
    forChefit: true,
    forParty: true,
    nameHi: "मसाला चिकन विंग्स",
    nameBn: "",
    id: 21,
    name: "Masala Chicken Wings",
  },
  {
    categoryId: 22,
    mealType: "MAIN_COURSE",
    type: "SEA_FOOD",
    description:
      "Butter garlic flavored prawns cooked to perfection with aromatic herbs.",
    image:
      "https://images.unsplash.com/photo-1559847844-d4a52bc7b9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: {
      id: 1,
      name: "Main Course",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/main_course.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "GRAVY",
    forChefit: true,
    forParty: true,
    nameHi: "बटर गार्लिक प्रॉन",
    nameBn: "",
    id: 22,
    name: "Butter Garlic Prawns",
  },
  {
    categoryId: 23,
    mealType: "BREAD",
    type: "VEG",
    description:
      "Flaky, layered flatbread brushed with butter and cooked in tandoor.",
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: {
      id: 3,
      name: "Breads",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/breads.png",
      isRecommendedForMealSuggestion: false,
    },
    dishType: "BREAD",
    forChefit: true,
    forParty: true,
    nameHi: "लच्छा पराठा",
    nameBn: "",
    id: 23,
    name: "Lachha Paratha",
  },
  {
    categoryId: 24,
    mealType: "RICE",
    type: "VEG",
    description: "Flavorful rice cooked with vegetables and aromatic spices.",
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: {
      id: 4,
      name: "Rice",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/rice.png",
      isRecommendedForMealSuggestion: false,
    },
    dishType: "RICE",
    forChefit: true,
    forParty: true,
    nameHi: "वेज पुलाव",
    nameBn: "",
    id: 24,
    name: "Veg Pulao",
  },
  {
    categoryId: 25,
    mealType: "DESSERT",
    type: "VEG",
    description:
      "Creamy, rich dessert made with milk, sugar, and nuts, slow-cooked to perfection.",
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: {
      id: 5,
      name: "Desserts",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/desserts.png",
      isRecommendedForMealSuggestion: false,
    },
    dishType: "SWEET",
    forChefit: true,
    forParty: true,
    nameHi: "रबड़ी",
    nameBn: "",
    id: 25,
    name: "Rabri",
  },
  {
    categoryId: 26,
    mealType: "STARTER",
    type: "VEG",
    description: "Crispy fried baby corn tossed in spicy schezwan sauce.",
    image:
      "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: {
      id: 2,
      name: "Appetizers",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/appetizers.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "FRIED",
    forChefit: true,
    forParty: true,
    nameHi: "स्चेज़वान बेबी कॉर्न",
    nameBn: "",
    id: 26,
    name: "Schezwan Baby Corn",
  },
  {
    categoryId: 27,
    mealType: "MAIN_COURSE",
    type: "NON_VEG",
    description:
      "Chicken cooked in rich, creamy cashew nut gravy with aromatic spices.",
    image:
      "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: {
      id: 1,
      name: "Main Course",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/main_course.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "GRAVY",
    forChefit: true,
    forParty: true,
    nameHi: "चिकन काजू मसाला",
    nameBn: "",
    id: 27,
    name: "Chicken Kaju Masala",
  },
  {
    categoryId: 28,
    mealType: "BREAD",
    type: "VEG",
    description:
      "Stuffed bread with spiced potato filling, cooked with butter.",
    image:
      "https://images.unsplash.com/photo-1630918037678-a8f7e0fbd5e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: {
      id: 3,
      name: "Breads",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/breads.png",
      isRecommendedForMealSuggestion: false,
    },
    dishType: "BREAD",
    forChefit: true,
    forParty: true,
    nameHi: "आलू पराठा",
    nameBn: "",
    id: 28,
    name: "Aloo Paratha",
  },
  {
    categoryId: 29,
    mealType: "RICE",
    type: "NON_VEG",
    description:
      "Fragrant basmati rice cooked with chicken and aromatic spices.",
    image:
      "https://images.unsplash.com/photo-1633944095266-8f6c22823c7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: {
      id: 4,
      name: "Rice",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/rice.png",
      isRecommendedForMealSuggestion: false,
    },
    dishType: "BIRYANI",
    forChefit: true,
    forParty: true,
    nameHi: "चिकन बिरयानी",
    nameBn: "",
    id: 29,
    name: "Chicken Biryani",
  },
  {
    categoryId: 30,
    mealType: "DESSERT",
    type: "VEG",
    description:
      "Sweet fried dough balls soaked in sugar syrup, a popular Indian dessert.",
    image:
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: {
      id: 5,
      name: "Desserts",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/desserts.png",
      isRecommendedForMealSuggestion: false,
    },
    dishType: "SWEET",
    forChefit: true,
    forParty: true,
    nameHi: "गुलाब जामुन",
    nameBn: "",
    id: 30,
    name: "Gulab Jamun",
  },
  {
    categoryId: 31,
    mealType: "STARTER",
    type: "VEG",
    description: "Crispy fried vegetables served with tangy sauce.",
    image:
      "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: {
      id: 2,
      name: "Appetizers",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/appetizers.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "FRIED",
    forChefit: true,
    forParty: true,
    nameHi: "वेज पकौड़ा",
    nameBn: "",
    id: 31,
    name: "Vegetable Pakora",
  },
  {
    categoryId: 32,
    mealType: "MAIN_COURSE",
    type: "VEG",
    description:
      "Mixed vegetables cooked in rich, creamy gravy with nuts and raisins.",
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: {
      id: 1,
      name: "Main Course",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/main_course.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "GRAVY",
    forChefit: true,
    forParty: true,
    nameHi: "मिक्स वेज कोरमा",
    nameBn: "",
    id: 32,
    name: "Mix Veg Korma",
  },
  {
    categoryId: 33,
    mealType: "DRINKS",
    type: "VEG",
    description: "Refreshing mint-based drink with spices and lemon.",
    image:
      "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: {
      id: 6,
      name: "Beverages",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/beverages.png",
      isRecommendedForMealSuggestion: false,
    },
    dishType: "BEVERAGE",
    forChefit: true,
    forParty: true,
    nameHi: "पुदीना शरबत",
    nameBn: "",
    id: 33,
    name: "Pudina Sharbat",
  },
  {
    categoryId: 34,
    mealType: "STARTER",
    type: "NON_VEG",
    description: "Crispy fried fish marinated in spices and gram flour.",
    image:
      "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: {
      id: 2,
      name: "Appetizers",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/appetizers.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "FRIED",
    forChefit: true,
    forParty: true,
    nameHi: "मछली पकौड़ा",
    nameBn: "",
    id: 34,
    name: "Fish Pakora",
  },
  {
    categoryId: 35,
    mealType: "MAIN_COURSE",
    type: "VEG",
    description: "Kidney beans curry cooked with spices and herbs.",
    image:
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: {
      id: 1,
      name: "Main Course",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/main_course.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "GRAVY",
    forChefit: true,
    forParty: true,
    nameHi: "राजमा",
    nameBn: "",
    id: 35,
    name: "Rajma",
  },
  {
    categoryId: 36,
    mealType: "BREAD",
    type: "VEG",
    description: "Whole wheat flatbread cooked on tawa with ghee.",
    image:
      "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: {
      id: 3,
      name: "Breads",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/breads.png",
      isRecommendedForMealSuggestion: false,
    },
    dishType: "BREAD",
    forChefit: true,
    forParty: true,
    nameHi: "रोटी",
    nameBn: "",
    id: 36,
    name: "Roti",
  },
  {
    categoryId: 37,
    mealType: "STARTER",
    type: "VEG",
    description: "Delicious potato patties stuffed with spices and herbs.",
    image:
      "https://images.unsplash.com/photo-1604908177522-4328d72dbde3?auto=format&fit=crop&w=500&q=80",
    category: {
      id: 2,
      name: "Appetizers",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/appetizers.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "FRIED",
    forChefit: true,
    forParty: true,
    id: 37,
    name: "Aloo Tikki",
  },
  {
    categoryId: 38,
    mealType: "MAIN_COURSE",
    type: "NON_VEG",
    description:
      "Tender chicken cooked with creamy yogurt and aromatic spices.",
    image:
      "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=500&q=80",
    category: {
      id: 1,
      name: "Main Course",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/main_course.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "GRAVY",
    forChefit: true,
    forParty: true,
    id: 38,
    name: "Chicken Korma",
  },
  {
    categoryId: 39,
    mealType: "STARTER",
    type: "NON_VEG",
    description: "Juicy chicken skewers grilled with herbs and spices.",
    image:
      "https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=500&q=80",
    category: {
      id: 2,
      name: "Appetizers",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/appetizers.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "GRILLED",
    forChefit: true,
    forParty: true,
    id: 39,
    name: "Chicken Tikka",
  },
  {
    categoryId: 40,
    mealType: "BREAD",
    type: "VEG",
    description: "Crispy deep-fried Indian bread perfect with curries.",
    image:
      "https://images.unsplash.com/photo-1598514982081-473c7c6b80c3?auto=format&fit=crop&w=500&q=80",
    category: {
      id: 3,
      name: "Breads",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/breads.png",
      isRecommendedForMealSuggestion: false,
    },
    dishType: "BREAD",
    forChefit: true,
    forParty: true,
    id: 40,
    name: "Poori",
  },
  {
    categoryId: 41,
    mealType: "RICE",
    type: "VEG",
    description:
      "Traditional Indian rice dish cooked with lentils and mild spices.",
    image:
      "https://images.unsplash.com/photo-1627308595229-7830a5c91f9c?auto=format&fit=crop&w=500&q=80",
    category: {
      id: 4,
      name: "Rice",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/rice.png",
      isRecommendedForMealSuggestion: false,
    },
    dishType: "RICE",
    forChefit: true,
    forParty: true,
    id: 41,
    name: "Khichdi",
  },
  {
    categoryId: 42,
    mealType: "MAIN_COURSE",
    type: "VEG",
    description: "Delicious chole cooked with traditional Indian spices.",
    image:
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=500&q=80",
    category: {
      id: 1,
      name: "Main Course",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/main_course.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    id: 42,
    name: "Chole Masala",
  },
  {
    categoryId: 43,
    mealType: "DESSERT",
    type: "VEG",
    description: "Soft cottage cheese dumplings soaked in sugar syrup.",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=500&q=80",
    category: {
      id: 5,
      name: "Desserts",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/desserts.png",
      isRecommendedForMealSuggestion: false,
    },
    dishType: "SWEET",
    forChefit: true,
    forParty: true,
    id: 43,
    name: "Rasgulla",
  },
  {
    categoryId: 44,
    mealType: "STARTER",
    type: "VEG",
    description: "Crispy deep-fried dumplings filled with mixed veggies.",
    image:
      "https://images.unsplash.com/photo-1630660728637-23b17e882ec9?auto=format&fit=crop&w=500&q=80",
    category: {
      id: 2,
      name: "Appetizers",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/appetizers.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "FRIED",
    forChefit: true,
    forParty: true,
    id: 44,
    name: "Veg Momos",
  },
  {
    categoryId: 45,
    mealType: "DRINKS",
    type: "VEG",
    description: "Traditional Indian yogurt-based refreshing drink.",
    image:
      "https://images.unsplash.com/photo-1601312377637-9f97a72cba07?auto=format&fit=crop&w=500&q=80",
    category: {
      id: 6,
      name: "Beverages",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/beverages.png",
      isRecommendedForMealSuggestion: false,
    },
    dishType: "BEVERAGE",
    forChefit: true,
    forParty: true,
    id: 45,
    name: "Sweet Lassi",
  },
  {
    categoryId: 46,
    mealType: "MAIN_COURSE",
    type: "VEG",
    description: "Paneer cubes cooked with spinach puree and spices.",
    image:
      "https://images.unsplash.com/photo-1617196038657-91a0e224fe5a?auto=format&fit=crop&w=500&q=80",
    category: {
      id: 1,
      name: "Main Course",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/main_course.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "GRAVY",
    forChefit: true,
    forParty: true,
    id: 46,
    name: "Saag Paneer",
  },
  {
    categoryId: 47,
    mealType: "STARTER",
    type: "NON_VEG",
    description: "Crispy fried prawns tossed with garlic and butter.",
    image:
      "https://images.unsplash.com/photo-1625642163137-021b0a8b24e7?auto=format&fit=crop&w=500&q=80",
    category: {
      id: 2,
      name: "Appetizers",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/appetizers.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "FRIED",
    forChefit: true,
    forParty: true,
    id: 47,
    name: "Garlic Butter Prawns",
  },
  {
    categoryId: 48,
    mealType: "RICE",
    type: "NON_VEG",
    description: "Delicious biryani made with mutton and Indian spices.",
    image:
      "https://images.unsplash.com/photo-1600185365679-fc87b6fc82b1?auto=format&fit=crop&w=500&q=80",
    category: {
      id: 4,
      name: "Rice",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/rice.png",
      isRecommendedForMealSuggestion: false,
    },
    dishType: "BIRYANI",
    forChefit: true,
    forParty: true,
    id: 48,
    name: "Mutton Biryani",
  },
  {
    categoryId: 49,
    mealType: "DESSERT",
    type: "VEG",
    description: "Traditional Indian sweet made of gram flour and ghee.",
    image:
      "https://images.unsplash.com/photo-1664261873830-9c7d6c5dcf71?auto=format&fit=crop&w=500&q=80",
    category: {
      id: 5,
      name: "Desserts",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/desserts.png",
      isRecommendedForMealSuggestion: false,
    },
    dishType: "SWEET",
    forChefit: true,
    forParty: true,
    id: 49,
    name: "Besan Ladoo",
  },
  {
    categoryId: 50,
    mealType: "DRINKS",
    type: "VEG",
    description: "Chilled mango smoothie with a hint of cardamom.",
    image:
      "https://images.unsplash.com/photo-1625662174170-c5b832c830d8?auto=format&fit=crop&w=500&q=80",
    category: {
      id: 6,
      name: "Beverages",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/beverages.png",
      isRecommendedForMealSuggestion: false,
    },
    dishType: "BEVERAGE",
    forChefit: true,
    forParty: true,
    id: 50,
    name: "Mango Lassi",
  },
  {
    categoryId: 51,
    mealType: "STARTER",
    type: "VEG",
    description: "Crispy golden fried paneer cubes tossed in tangy sauce.",
    image:
      "https://images.unsplash.com/photo-1631003224815-75ef438ee8cc?auto=format&fit=crop&w=500&q=80",
    category: {
      id: 2,
      name: "Appetizers",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/appetizers.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "FRIED",
    forChefit: true,
    forParty: true,
    id: 51,
    name: "Crispy Chilli Paneer",
  },
  {
    categoryId: 52,
    mealType: "MAIN_COURSE",
    type: "NON_VEG",
    description:
      "Tender lamb pieces slow-cooked with aromatic spices and herbs.",
    image:
      "https://images.unsplash.com/photo-1631162585175-4e1ffbfef5e7?auto=format&fit=crop&w=500&q=80",
    category: {
      id: 1,
      name: "Main Course",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/main_course.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "GRAVY",
    forChefit: true,
    forParty: true,
    id: 52,
    name: "Rogan Josh",
  },
  {
    categoryId: 53,
    mealType: "RICE",
    type: "VEG",
    description: "Fragrant basmati rice cooked with saffron and dry fruits.",
    image:
      "https://images.unsplash.com/photo-1617196038657-91a0e224fe5a?auto=format&fit=crop&w=500&q=80",
    category: {
      id: 4,
      name: "Rice",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/rice.png",
      isRecommendedForMealSuggestion: false,
    },
    dishType: "RICE",
    forChefit: true,
    forParty: true,
    id: 53,
    name: "Zafrani Pulao",
  },
  {
    categoryId: 54,
    mealType: "DRINKS",
    type: "VEG",
    description: "Refreshing coconut water served chilled.",
    image:
      "https://images.unsplash.com/photo-1563720222374-cd6b6e96d4a6?auto=format&fit=crop&w=500&q=80",
    category: {
      id: 6,
      name: "Beverages",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/beverages.png",
      isRecommendedForMealSuggestion: false,
    },
    dishType: "BEVERAGE",
    forChefit: true,
    forParty: true,
    id: 54,
    name: "Coconut Water",
  },
  {
    categoryId: 55,
    mealType: "BREAD",
    type: "VEG",
    description: "Crispy puffed bread, perfect with curries or chole.",
    image:
      "https://images.unsplash.com/photo-1640959670800-912bfa2f1e13?auto=format&fit=crop&w=500&q=80",
    category: {
      id: 3,
      name: "Breads",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/breads.png",
      isRecommendedForMealSuggestion: false,
    },
    dishType: "BREAD",
    forChefit: true,
    forParty: true,
    id: 55,
    name: "Bhatura",
  },
  {
    categoryId: 56,
    mealType: "STARTER",
    type: "NON_VEG",
    description: "Crispy fried chicken drumsticks marinated in spices.",
    image:
      "https://images.unsplash.com/photo-1625642163137-021b0a8b24e7?auto=format&fit=crop&w=500&q=80",
    category: {
      id: 2,
      name: "Appetizers",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/appetizers.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "FRIED",
    forChefit: true,
    forParty: true,
    id: 56,
    name: "Fried Chicken Drumsticks",
  },
  {
    categoryId: 57,
    mealType: "DESSERT",
    type: "VEG",
    description: "Sweet carrot pudding cooked in ghee and milk.",
    image:
      "https://images.unsplash.com/photo-1631079553414-924f7c8de1aa?auto=format&fit=crop&w=500&q=80",
    category: {
      id: 5,
      name: "Desserts",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/desserts.png",
      isRecommendedForMealSuggestion: false,
    },
    dishType: "SWEET",
    forChefit: true,
    forParty: true,
    id: 57,
    name: "Gajar Ka Halwa",
  },
  {
    categoryId: 58,
    mealType: "MAIN_COURSE",
    type: "VEG",
    description: "Cottage cheese cooked in tomato and cashew nut gravy.",
    image:
      "https://images.unsplash.com/photo-1600674944935-f575dbfdd013?auto=format&fit=crop&w=500&q=80",
    category: {
      id: 1,
      name: "Main Course",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/main_course.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "GRAVY",
    forChefit: true,
    forParty: true,
    id: 58,
    name: "Shahi Paneer",
  },
  {
    categoryId: 59,
    mealType: "STARTER",
    type: "VEG",
    description: "Crispy fried chickpea patties served with chutney.",
    image:
      "https://images.unsplash.com/photo-1622519407655-7e14af3ff1d9?auto=format&fit=crop&w=500&q=80",
    category: {
      id: 2,
      name: "Appetizers",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/appetizers.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "FRIED",
    forChefit: true,
    forParty: true,
    id: 59,
    name: "Falafel",
  },
  {
    categoryId: 60,
    mealType: "DRINKS",
    type: "VEG",
    description: "Freshly squeezed lemonade with a hint of mint.",
    image:
      "https://images.unsplash.com/photo-1600272457874-2f33f7d9d0bc?auto=format&fit=crop&w=500&q=80",
    category: {
      id: 6,
      name: "Beverages",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/beverages.png",
      isRecommendedForMealSuggestion: false,
    },
    dishType: "BEVERAGE",
    forChefit: true,
    forParty: true,
    id: 60,
    name: "Mint Lemonade",
  },
  {
    categoryId: 61,
    mealType: "MAIN_COURSE",
    type: "NON_VEG",
    description: "Grilled fish cooked with spicy tandoori masala.",
    image:
      "https://images.unsplash.com/photo-1598799396854-7d5aaec3d9fb?auto=format&fit=crop&w=500&q=80",
    category: {
      id: 1,
      name: "Main Course",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/main_course.png",
      isRecommendedForMealSuggestion: true,
    },
    dishType: "GRILLED",
    forChefit: true,
    forParty: true,
    id: 61,
    name: "Tandoori Fish",
  },
  {
    categoryId: 62,
    mealType: "BREAD",
    type: "VEG",
    description: "Traditional crispy papad made from lentils.",
    image:
      "https://images.unsplash.com/photo-1640959635038-b3af3a442ec1?auto=format&fit=crop&w=500&q=80",
    category: {
      id: 3,
      name: "Breads",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/breads.png",
      isRecommendedForMealSuggestion: false,
    },
    dishType: "BREAD",
    forChefit: true,
    forParty: true,
    id: 62,
    name: "Papad",
  },
  {
    categoryId: 63,
    mealType: "RICE",
    type: "VEG",
    description: "Curd mixed with rice and tempered with spices.",
    image:
      "https://images.unsplash.com/photo-1587735200311-2f74198e7e45?auto=format&fit=crop&w=500&q=80",
    category: {
      id: 4,
      name: "Rice",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/rice.png",
      isRecommendedForMealSuggestion: false,
    },
    dishType: "RICE",
    forChefit: true,
    forParty: true,
    id: 63,
    name: "Curd Rice",
  },
  {
    categoryId: 64,
    mealType: "DESSERT",
    type: "VEG",
    description: "Classic Indian dessert made of condensed milk and coconut.",
    image:
      "https://images.unsplash.com/photo-1603781447393-7d0e0bfc7e5b?auto=format&fit=crop&w=500&q=80",
    category: {
      id: 5,
      name: "Desserts",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/desserts.png",
      isRecommendedForMealSuggestion: false,
    },
    dishType: "SWEET",
    forChefit: true,
    forParty: true,
    id: 64,
    name: "Coconut Barfi",
  },
  {
    categoryId: 65,
    mealType: "DRINKS",
    type: "VEG",
    description: "Traditional Indian drink made with buttermilk and spices.",
    image:
      "https://images.unsplash.com/photo-1622519407655-7e14af3ff1d9?auto=format&fit=crop&w=500&q=80",
    category: {
      id: 6,
      name: "Beverages",
      image:
        "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/beverages.png",
      isRecommendedForMealSuggestion: false,
    },
    dishType: "BEVERAGE",
    forChefit: true,
    forParty: true,
    id: 65,
    name: "Masala Chaas",
  },
];

export const ingredientData = {
  1: [
    { name: "Paneer", quantity: "200g" },
    { name: "Onions", quantity: "2 medium" },
    { name: "Capsicum", quantity: "1" },
    { name: "Tomatoes", quantity: "3" },
    { name: "Spices", quantity: "as needed" },
  ],
  31: [
    { name: "Mixed Vegetables", quantity: "2 cups" },
    { name: "Chickpea Flour", quantity: "1 cup" },
    { name: "Spices", quantity: "as needed" },
    { name: "Oil", quantity: "for frying" },
  ],
  32: [
    { name: "Chicken Wings", quantity: "500g" },
    { name: "Hot Sauce", quantity: "3 tbsp" },
    { name: "Butter", quantity: "2 tbsp" },
    { name: "Garlic", quantity: "4 cloves" },
  ],
  33: [
    { name: "Chicken", quantity: "500g" },
    { name: "Butter", quantity: "4 tbsp" },
    { name: "Cream", quantity: "1/2 cup" },
    { name: "Tomato Puree", quantity: "1 cup" },
    { name: "Spices", quantity: "as needed" },
  ],
  34: [
    { name: "Rice", quantity: "1/2 cup" },
    { name: "Milk", quantity: "1 liter" },
    { name: "Sugar", quantity: "1/2 cup" },
    { name: "Nuts", quantity: "2 tbsp" },
    { name: "Saffron", quantity: "a pinch" },
  ],
  35: [
    { name: "Flour", quantity: "2 cups" },
    { name: "Yogurt", quantity: "1/4 cup" },
    { name: "Yeast", quantity: "1 tsp" },
    { name: "Butter", quantity: "for brushing" },
  ],

  51: [
    { name: "Paneer", quantity: "200g" },
    { name: "Capsicum", quantity: "1 medium" },
    { name: "Soy Sauce", quantity: "2 tbsp" },
    { name: "Corn Flour", quantity: "1 tbsp" },
  ],
  52: [
    { name: "Lamb", quantity: "500g" },
    { name: "Onions", quantity: "2 medium" },
    { name: "Yogurt", quantity: "1/2 cup" },
    { name: "Spices", quantity: "as needed" },
  ],
  53: [
    { name: "Basmati Rice", quantity: "2 cups" },
    { name: "Saffron", quantity: "a pinch" },
    { name: "Dry Fruits", quantity: "1/4 cup" },
  ],
  54: [{ name: "Fresh Coconut", quantity: "1 whole" }],
  55: [
    { name: "Flour", quantity: "2 cups" },
    { name: "Yeast", quantity: "1 tsp" },
    { name: "Water", quantity: "as needed" },
  ],
  57: [
    { name: "Carrots", quantity: "500g" },
    { name: "Milk", quantity: "2 cups" },
    { name: "Ghee", quantity: "3 tbsp" },
    { name: "Sugar", quantity: "1/2 cup" },
  ],
  58: [
    { name: "Paneer", quantity: "200g" },
    { name: "Cashew Nuts", quantity: "10 pcs" },
    { name: "Tomatoes", quantity: "3" },
    { name: "Spices", quantity: "as needed" },
  ],
  60: [
    { name: "Lemon Juice", quantity: "3 tbsp" },
    { name: "Mint Leaves", quantity: "10" },
    { name: "Sugar", quantity: "2 tbsp" },
    { name: "Water", quantity: "1 cup" },
  ],
  61: [
    { name: "Fish", quantity: "500g" },
    { name: "Tandoori Masala", quantity: "2 tbsp" },
    { name: "Lemon Juice", quantity: "1 tbsp" },
  ],
  63: [
    { name: "Cooked Rice", quantity: "2 cups" },
    { name: "Curd", quantity: "1 cup" },
    { name: "Curry Leaves", quantity: "8-10" },
    { name: "Mustard Seeds", quantity: "1 tsp" },
  ],
  64: [
    { name: "Coconut", quantity: "1 cup grated" },
    { name: "Condensed Milk", quantity: "1/2 cup" },
    { name: "Cardamom Powder", quantity: "1 tsp" },
  ],
  65: [
    { name: "Buttermilk", quantity: "2 cups" },
    { name: "Ginger", quantity: "1 tsp grated" },
    { name: "Curry Leaves", quantity: "5-6" },
    { name: "Salt", quantity: "as needed" },
  ],
};
