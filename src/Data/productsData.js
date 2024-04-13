import girCowGhee from "../assets/products/gir_cow_ghee.jpg";
import nutButter from "../assets/products/nut_butter.jpg";
import nutButterDarkChocolate from "../assets/products/nutbutter_dark_chocolate .jpg";
import nutButterMixedSeed from "../assets/products/nutbutter_mixed_seed.jpg";
import stonePressedBlackMustardOil from "../assets/products/stone_pressed_blackmustard_oil.jpg";
import groundNutOil from "../assets/products/stone_pressed_groundnut_oil.jpg";
import coconutOil from "../assets/products/stone_pressed_coconut_oil.png";
import wildForestHoney from "../assets/products/wildforest_honey.jpg";
import multiFloraHoney from "../assets/products/multiflora_honey.jpg";
import amlaprash from "../assets/products/amlaprash.jpg";
import BestSeller from "../components/Home/BestSeller";

export const products = [
  {
    name: "Gir Cow A2 ghee - made from curd",
    actualPrice: 1475,
    discountedPrice: 1350,
    availability: true,
    options: ["1Ltr", "500ml", "2Ltr", "5Ltr"],
    Description:
      "A2 Gir Cow Ghee is made using fresh Gir cow milk. The Cows are free-grazed. The milk from them is brought to a boil and naturally cooled down to room temperature and inoculated with a natural starter culture and left overnight to make curd. The curd is churned using the traditional 'Bilona method'",
    key_Benifits:
      "-has anti-bacterial, antifungal and antioxidant properties. -Ghee aids digestion and builds gut health. -Ghee acts as a lubricant for joints. -It has a high smoking point and helps in better absorption of protein. -Vitamins A, E, K prevalent in ghee are vital for brain, skeletal and physical health. -Ghee is excellent for skin, hair and eye health too.",
    ingredients: "A2 Gir Cow Milk",
    image: girCowGhee,
    category: "Ghee",
    BestSeller: true,
    id: 1,
  },
  {
    name: "Stone Pressed Black Mustard Oil",
    actualPrice: 500,
    discountedPrice: 380,
    availability: true,
    options: ["800ml", "4Ltr"],
    Description:
      "Made from high-quality mustard seeds that have been cold pressed and extracted without the use of any chemicals or solvents, this oil is a healthier and more flavorful alternative to traditional cooking oils.",
    key_Benifits:
      "-Nourishment -Skin & Hair -Boosts immunity -Good for Heart -Boosts immunity -High Smoke Point",
    ingredients: "Black mustard seeds",
    image: stonePressedBlackMustardOil,
    category: "Oil",
    BestSeller: true,
    id: 2,
  },
  {
    name: "Nut Butter",
    actualPrice: 390,
    discountedPrice: 390,
    availability: false,
    options: ["300g"],
    Description:
      "Our unique combination of almonds, peanuts, and cashews offers a perfect balance of MUFA's and Omega-3, promoting a heart-healthy diet. Unlike some commercial nut butters, Rosier is free from unnecessary additives, fillers, and preservatives, guaranteeing a pure and natural experience.",
    key_Benifits:
      "Lab reports confirm a substantial protein content of 27gm per 100gm, making Rosier Nut Butter an excellent source of healthy fats. While it may not be a primary protein source, its nutritional profile supports a well-rounded and balanced diet.",
    ingredients: "Almonds, Peanuts, Cashews, Honey, Salt",
    image: nutButter,
    category: "Butter",
    BestSeller: true,
    id: 3,
  },
  {
    name: "Wild Forest Honey",
    actualPrice: 699,
    discountedPrice: 580,
    availability: false,
    options: ["500g", "1kg"],
    Description:
      "Wild Flower Honey is a multi-floral honey, responsibly collected from bees feeding on wild forest flowers nectar from the forest of the Himalayas. The honey is rich in bio-diverse vitamins, minerals, and amino acids boosting good health. 100% Natural | Ayurvedic | No added sugar",
    key_Benifits:
      " Rich in Vitamin C,B2,B3,B5 and B6., Anti-viral and Anti-fungal., Helps in curing cough and cold., Good for skin.",
    ingredients: "Raw Honey",
    image: wildForestHoney,
    category: "Honey",
    BestSeller: true,
    id: 4,
  },
  {
    name: "Amlaprash",
    actualPrice: 699,
    discountedPrice: 630,
    availability: false,
    options: ["500g", "1kg"],
    Description:
      "Made using hand picked amla fruit and A2 Gir cow ghee. Naturally sweetened with desi khand. Contains no refined sugar. Handmade. An immunity boosting sweet jam consisting of native ingredients. This product contains no additives, is free from artificial preservatives, synthetic fillers or binders. 100% natural.",
    key_Benifits:
      " -Great for digestion -Potent antioxidant -Anti-ageing -Boosts the immune system -Helps boost haemoglobin levels -Helps maintain healthy skin, hair, teeth and bones",
    ingredients: "Amla and A2 gir cow ghee",
    image: amlaprash,
    category: "Jam",
    BestSeller: false,
    id: 5,
  },
  {
    name: "Multiflora Honey",
    actualPrice: 699,
    discountedPrice: 580,
    availability: true,
    options: ["500g", "1kg"],
    Description:
      "Multi-flora honey is produced by the bees in the vast Himalayan forest. The bees in this region collect nectar from multiple flowers to collect honey in their comb. This is the purest form of honey free from any kind of pollution. Since the Himalayan forests are rich in medicinal and herbal plants, the multi-flora honey has some amazing health benefits to offer and is an absolutely perfect for medicinal uses. Some blossoms found in the northern forests are curry leaves tree flowers, Bansa Flower, starflower, furly flowers etc.",
    key_Benifits:
      "-Prevents acid refluxes -Fights various infections -Enhances and promotes the immune system -Beautifies the hair and skin -Lowers the risk of heart diseases.",
    ingredients: "Raw honey",
    image: multiFloraHoney,
    category: "Honey",
    BestSeller: true,
    id: 6,
  },
  {
    name: "Nut Butter dark Chocolate",
    actualPrice: 390,
    discountedPrice: 390,
    availability: true,
    options: ["300g"],
    Description: "",
    key_Benifits: "",
    ingredients: "",
    image: nutButterDarkChocolate,
    category: "Butter",
    BestSeller: true,
    id: 7,
  },
  {
    name: "Nut Butter Mixed Seeds",
    actualPrice: 390,
    discountedPrice: 390,
    availability: true,
    options: ["300g"],
    Description: "",
    key_Benifits: "",
    ingredients: "",
    image: nutButterMixedSeed,
    category: "Butter",
    BestSeller: false,
    id: 8,
  },
  {
    name: "Stone Pressed Groundnut Oil",
    actualPrice: 599,
    discountedPrice: 489,
    availability: true,
    options: ["800ml", "4Ltr"],
    Description:
      "Our all-natural Stone Cold Pressed Groundnut Cooking Oil is a perfect addition to your kitchen pantry! Made from high-quality groundnuts that have been cold pressed and extracted without the use of any chemicals or solvents, this oil is a healthier and more flavorful alternative to traditional cooking oils.",
    key_Benifits:
      "Our unique cold-pressing process ensures that all the natural nutrients and flavors of the groundnuts are preserved, resulting in a pure, unrefined oil that is packed with essential fatty acids, antioxidants, and vitamins. This oil is also free from cholesterol and trans fats, making it a heart-healthy choice for your daily cooking needs.",
    ingredients: "Groundnuts",
    image: groundNutOil,
    category: "Oil",
    BestSeller: true,
    id: 9,
  },
  {
    name: "Stone Pressed Virgin Coconut Oil",
    actualPrice: 599,
    discountedPrice: 455,
    availability: true,
    options: ["800ml"],
    Description:
      "Introducing our all-natural Extra Virgin wood Pressed Coconut Oil, a versatile and healthy addition to your kitchen pantry! Made from fresh, high-quality coconuts that have been cold pressed and extracted without the use of any chemicals or solvents, this oil is a pure, unrefined, and nutrient-rich alternative to traditional cooking oils.",
    key_Benifits:
      "Our unique cold-pressing process ensures that all the natural nutrients and flavors of the coconuts are preserved, resulting in an oil that is packed with medium-chain triglycerides (MCTs), antioxidants, and vitamins. This oil is also free from cholesterol and trans fats, making it a heart-healthy choice for your daily cooking needs.",
    ingredients: "Coconuts",
    image: coconutOil,
    category: "Oil",
    BestSeller: true,
    id: 10,
  },
];
