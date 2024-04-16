import girCowGhee from "../assets/products/gir_cow_ghee.jpg";
import nutButter from "../assets/products/nut_butter.jpg";
import nutButterDarkChocolate from "../assets/products/nutbutter_dark_chocolate .jpg";
import nutButterMixedSeed from "../assets/products/nutbutter_mixed_seed.jpg";
import stonePressedBlackMustardOil from "../assets/products/stone_pressed_blackmustard_oil.jpg";
import groundNutOil from "../assets/products/stone_pressed_groundnut_oil.jpg";
import coconutOil from "../assets/products/coconut.webp";
import wildForestHoney from "../assets/products/wildforest_honey.jpg";
import multiFloraHoney from "../assets/products/multiflora_honey.jpg";
import amlaprash from "../assets/products/amlaprash.jpg";
import BestSeller from "../components/Home/BestSeller";

export const products = [
  {
    id: 1345763546,
    name: "Gir Cow A2 ghee - made from curd",
    availability: true,
    description: "A2 Gir Cow Ghee is made using fresh Gir cow milk...",
    keyBenefits: [
      "Has anti-bacterial, antifungal and antioxidant properties.",
      "Ghee aids digestion and builds gut health.",
      "Ghee acts as a lubricant for joints.",
      "It has a high smoking point and helps in better absorption of protein.",
      "Vitamins A, E, K prevalent in ghee are vital for brain, skeletal and physical health.",
      "Ghee is excellent for skin, hair and eye health too.",
    ],
    ingredients: "A2 Gir Cow Milk",
    image: girCowGhee,
    category: "Ghee",
    bestSeller: true,
    options: [
      { size: "500ml", actualPrice: 1475, discountedPrice: 1350 },
      { size: "1Ltr", actualPrice: 2000, discountedPrice: 1850 },
      { size: "2Ltr", actualPrice: 3500, discountedPrice: 3200 },
      { size: "5Ltr", actualPrice: 7500, discountedPrice: 6900 },
    ],
  },
  {
    id: 223452345,
    name: "Stone Pressed Black Mustard Oil",
    availability: true,
    description:
      "Made from high-quality mustard seeds that have been cold pressed...",
    keyBenefits: [
      "Nourishment",
      "Skin & Hair",
      "Boosts immunity",
      "Good for Heart",
      "High Smoke Point",
    ],
    ingredients: "Black mustard seeds",
    image: stonePressedBlackMustardOil,
    category: "Oil",
    bestSeller: true,
    options: [
      { size: "800ml", actualPrice: 500, discountedPrice: 380 },
      { size: "4Ltr", actualPrice: 2000, discountedPrice: 1500 },
    ],
  },
  {
    id: 323452435,
    name: "Nut Butter",
    availability: false,
    description:
      "Our unique combination of almonds, peanuts, and cashews offers a perfect balance...",
    keyBenefits: [
      "Lab reports confirm a substantial protein content of 27gm per 100gm...",
      "While it may not be a primary protein source, its nutritional profile supports a well-rounded and balanced diet.",
    ],
    ingredients: "Almonds, Peanuts, Cashews, Honey, Salt",
    image: nutButter,
    category: "Butter",
    bestSeller: true,
    options: [{ size: "300g", actualPrice: 390, discountedPrice: 390 }],
  },
  {
    id: 234565676454,
    name: "Wild Forest Honey",
    availability: false,
    description:
      "Wild Flower Honey is a multi-floral honey, responsibly collected from bees feeding on wild forest flowers nectar...",
    keyBenefits: [
      "Rich in Vitamin C, B2, B3, B5 and B6.",
      "Anti-viral and Anti-fungal.",
      "Helps in curing cough and cold.",
      "Good for skin.",
    ],
    ingredients: "Raw Honey",
    image: wildForestHoney,
    category: "Honey",
    bestSeller: true,
    options: [
      { size: "500g", actualPrice: 699, discountedPrice: 580 },
      { size: "1kg", actualPrice: 1300, discountedPrice: 1100 },
    ],
  },
  {
    id: 10005654365,
    name: "Amlaprash",
    availability: false,
    description: "Made using hand picked amla fruit and A2 Gir cow ghee...",
    keyBenefits: [
      "Great for digestion",
      "Potent antioxidant",
      "Anti-ageing",
      "Boosts the immune system",
      "Helps boost haemoglobin levels",
      "Helps maintain healthy skin, hair, teeth and bones",
    ],
    ingredients: "Amla and A2 gir cow ghee",
    image: amlaprash,
    category: "Jam",
    bestSeller: false,
    options: [
      { size: "500g", actualPrice: 699, discountedPrice: 630 },
      { size: "1kg", actualPrice: 1300, discountedPrice: 1200 },
    ],
  },
  {
    id: 234635463006,
    name: "Multiflora Honey",
    availability: true,
    description:
      "Multi-flora honey is produced by the bees in the vast Himalayan forest...",
    keyBenefits: [
      "Prevents acid refluxes",
      "Fights various infections",
      "Enhances and promotes the immune system",
      "Beautifies the hair and skin",
      "Lowers the risk of heart diseases.",
    ],
    ingredients: "Raw honey",
    image: multiFloraHoney,
    category: "Honey",
    bestSeller: true,
    options: [
      { size: "500g", actualPrice: 699, discountedPrice: 580 },
      { size: "1kg", actualPrice: 1300, discountedPrice: 1100 },
    ],
  },
  {
    id: 778745685346,
    name: "Nut Butter Dark Chocolate",
    availability: true,
    description: "",
    keyBenefits: "",
    ingredients: "",
    image: nutButterDarkChocolate,
    category: "Butter",
    bestSeller: true,
    options: [{ size: "300g", actualPrice: 390, discountedPrice: 390 }],
  },
  {
    id: 1113335468,
    name: "Nut Butter Mixed Seeds",
    availability: true,
    description: "",
    keyBenefits: "",
    ingredients: "",
    image: nutButterMixedSeed,
    category: "Butter",
    bestSeller: false,
    options: [{ size: "300g", actualPrice: 390, discountedPrice: 390 }],
  },
  {
    id: 545637009,
    name: "Stone Pressed Groundnut Oil",
    availability: true,
    description:
      "Our all-natural Stone Cold Pressed Groundnut Cooking Oil is a perfect addition to your kitchen pantry!...",
    keyBenefits: [
      "Our unique cold-pressing process ensures that all the natural nutrients and flavors of the groundnuts are preserved...",
      "This oil is also free from cholesterol and trans fats, making it a heart-healthy choice for your daily cooking needs.",
    ],
    ingredients: "Groundnuts",
    image: groundNutOil,
    category: "Oil",
    bestSeller: true,
    options: [
      { size: "800ml", actualPrice: 599, discountedPrice: 489 },
      { size: "4Ltr", actualPrice: 2400, discountedPrice: 1950 },
    ],
  },
  {
    id: 1349856350,
    name: "Stone Pressed Virgin Coconut Oil",
    availability: true,
    description:
      "Introducing our all-natural Extra Virgin wood Pressed Coconut Oil, a versatile and healthy addition to your kitchen pantry!...",
    keyBenefits: [
      "Our unique cold-pressing process ensures that all the natural nutrients and flavors of the coconuts are preserved...",
      "This oil is also free from cholesterol and trans fats, making it a heart-healthy choice for your daily cooking needs.",
    ],
    ingredients: "Coconuts",
    image: coconutOil,
    category: "Oil",
    bestSeller: true,
    options: [{ size: "800ml", actualPrice: 599, discountedPrice: 455 }],
  },
];
