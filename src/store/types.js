import {
  earthTexture,
  jupiterTexture,
  marsTexture,
  mercuryTexture,
  neptuneTexture,
  saturnTexture,
  sunTexture,
  uranusTexture,
  venusSurfaceTexture,
} from "../assets/planetsTexture";
const europeanCountries = {
  France: ["Paris", "Marseille", "Lyon", "Nice", "Toulouse"],
  Germany: ["Berlin", "Munich", "Hamburg", "Frankfurt", "Cologne"],
  Italy: ["Rome", "Milan", "Naples", "Florence", "Venice"],
  Spain: ["Madrid", "Barcelona", "Valencia", "Seville", "Bilbao"],
  Portugal: ["Lisbon", "Porto", "Braga", "Coimbra", "Faro"],
  Netherlands: ["Amsterdam", "Rotterdam", "The Hague", "Utrecht", "Eindhoven"],
  Belgium: ["Brussels", "Antwerp", "Ghent", "Bruges", "Liège"],
  Switzerland: ["Bern", "Zurich", "Geneva", "Basel", "Lausanne"],
  Austria: ["Vienna", "Salzburg", "Graz", "Innsbruck", "Linz"],
  Sweden: ["Stockholm", "Gothenburg", "Malmö", "Uppsala", "Västerås"],
};

const nutrition = {
  Mercury: {
    sugar: "8 g",
    protein: "3 g",
    fat: "9 g",
    carbs: "12 g",
    fiber: "2 g",
    zinc: "0.3 mg",
    iron: "2 mg",
    magnesium: "60 mg",
    vitaminC: "3 mg",
    notable: "Antioxidants, Capsaicin, Orange zest freshness",
  },
  Venus: {
    sugar: "14 g",
    protein: "4 g",
    fat: "11 g",
    carbs: "16 g",
    fiber: "1.5 g",
    zinc: "0.8 mg",
    iron: "1.5 mg",
    vitaminE: "2 mg",
    calcium: "35 mg",
    potassium: "180 mg",
    notable: "Healthy fats, Rose antioxidants, Caramel energy",
  },
  Earth: {
    sugar: "10 g",
    protein: "3 g",
    fat: "8 g",
    carbs: "14 g",
    fiber: "2.5 g",
    zinc: "0.4 mg",
    iron: "2.5 mg",
    magnesium: "55 mg",
    vitaminB6: "0.1 mg",
    potassium: "200 mg",
    notable: "Almond omega fats, Sea salt minerals, Vanilla antioxidants",
  },
  Mars: {
    sugar: "12 g",
    protein: "5 g",
    fat: "10 g",
    carbs: "15 g",
    fiber: "2 g",
    zinc: "0.7 mg",
    iron: "2 mg",
    caffeine: "20 mg",
    magnesium: "50 mg",
    vitaminB2: "0.2 mg",
    notable: "Cocoa antioxidants, Energy boost, Hazelnut oils",
  },
  Jupiter: {
    sugar: "16 g",
    protein: "4 g",
    fat: "12 g",
    carbs: "18 g",
    fiber: "2.5 g",
    zinc: "0.6 mg",
    iron: "2 mg",
    magnesium: "40 mg",
    calcium: "45 mg",
    potassium: "210 mg",
    notable: "Pecan fats, Caramel energy, Colossal richness",
  },
  Saturn: {
    sugar: "15 g",
    protein: "3 g",
    fat: "11 g",
    carbs: "17 g",
    fiber: "1.8 g",
    zinc: "0.4 mg",
    calcium: "50 mg",
    iron: "1.2 mg",
    vitaminC: "2 mg",
    potassium: "190 mg",
    notable: "Citrusy freshness, Golden sugar, Dual chocolate mix",
  },
  Uranus: {
    sugar: "9 g",
    protein: "2.5 g",
    fat: "7 g",
    carbs: "11 g",
    fiber: "2 g",
    zinc: "0.5 mg",
    iron: "1.8 mg",
    magnesium: "45 mg",
    vitaminK: "1 mcg",
    calcium: "25 mg",
    notable: "Mint coolness, Crispy crunch, Light texture",
  },
  Neptune: {
    sugar: "11 g",
    protein: "3 g",
    fat: "9 g",
    carbs: "13 g",
    fiber: "2.2 g",
    zinc: "0.4 mg",
    iron: "2 mg",
    magnesium: "50 mg",
    vitaminA: "30 IU",
    potassium: "175 mg",
    notable: "Blueberry antioxidants, Ocean minerals, Deep cocoa taste",
  },
  Sun: {
    sugar: "18 g",
    protein: "4 g",
    fat: "13 g",
    carbs: "20 g",
    fiber: "1.5 g",
    zinc: "0.6 mg",
    iron: "2 mg",
    calcium: "40 mg",
    magnesium: "35 mg",
    vitaminD: "trace",
    gold: "trace",
    notable: "Golden caramel, Vanilla aroma, Radiant warmth",
  },
};

const english = {
  Mercury: {
    name: "Mercury",
    description:
      "Dare to taste the chocolate forged in the flames of Mercury? This fiery treat is hotter than the sun!",
    ingredients: [
      "Dark chocolate",
      "Chili",
      "Cinnamon",
      "Fiery orange zest",
      "Volcanic lava extract",
    ],
    model: "./MercuryModel/Mercury.gltf",
    position: [-30, 0, -30], // Updated position from loc
    size: 2,
    isOpen: false,
    color: "#bdbdbd", // Gray like Mercury
    index: 0,
    texture: mercuryTexture,
  },
  Venus: {
    name: "Venus",
    description:
      "Venus: Where passion meets chocolate perfection. Get ready to fall in love with every silky bite!",
    ingredients: [
      "Milk chocolate",
      "Velvety caramel center",
      "Rose essence",
      "Crushed hazelnuts",
      "Morning dew drops",
    ],
    model: "./VenusModel/Venus.gltf",
    position: [-30, 0, 30], // Updated position from loc
    size: 2,
    isOpen: false,
    color: "#d4af37", // Gold-like for Venus
    index: 1,
    texture: venusSurfaceTexture,
  },
  Earth: {
    name: "Earth",
    description:
      "Earth’s chocolate—pure, rich, and real. Are you ready to experience the taste of home like never before?",
    ingredients: [
      "Rich dark chocolate",
      "Roasted almonds",
      "Sea salt",
      "Organic vanilla",
      "Earth’s rich soil essence",
    ],
    model: "./Earth Model/earth.gltf",
    position: [10, 0, -40], // Updated position from loc
    size: 2,
    isOpen: false,
    color: "#1f8b4c", // Green and blue-like for Earth
    index: 2,
    texture: earthTexture,
  },
  Mars: {
    name: "Mars",
    description:
      "Craving adventure? Take a bite of Mars, and let this bold, cosmic chocolate ignite your senses!",
    ingredients: [
      "Milk chocolate",
      "Crunchy hazelnut praline",
      "Espresso",
      "Roasted cocoa nibs",
      "Mars red dust",
    ],
    model: "./MarsModel/Mars.gltf",
    position: [20, 0, 25], // Updated position from loc
    size: 2,
    isOpen: false,
    color: "#b22222", // Red for Mars
    index: 3,
    texture: marsTexture,
  },
  Jupiter: {
    name: "Jupiter",
    description:
      "Brace yourself for the mighty Jupiter! A colossal chocolate experience that’s as grand as the gas giant itself.",
    ingredients: [
      "Triple-layered chocolate",
      "Caramel",
      "Nougat",
      "Crushed pecans",
      "Jupiter’s storm particles",
    ],
    model: "./JupiterModel/Jupiter.gltf",
    position: [-10, 0, 40], // Updated position from loc
    size: 2,
    isOpen: false,
    color: "#d2691e", // Brownish for Jupiter
    index: 4,
    texture: jupiterTexture,
  },
  Saturn: {
    name: "Saturn",
    description:
      "Saturn’s rings hold a secret… a galaxy of flavors waiting to be discovered. One bite, and you’ll be orbiting!",
    ingredients: [
      "White chocolate",
      "Dark chocolate swirls",
      "Citrus mousse",
      "Golden sugar crystals",
      "Saturn’s ring dust",
    ],
    model: "./SaturnModel/Saturn.gltf",
    position: [37, 0, 5], // Updated position from loc
    size: 2,
    isOpen: false,
    color: "#f4a460", // Pale yellow and brownish for Saturn
    index: 5,
    texture: saturnTexture,
  },
  Uranus: {
    name: "Uranus",
    description:
      "Cold, crisp, and out of this world. Uranus brings an unexpected twist that will leave your taste buds floating!",
    ingredients: [
      "Dark chocolate",
      "Mint",
      "Crispy rice pearls",
      "Mint ganache",
      "Uranus’s icy breeze",
    ],
    model: "./UranusModel/Uranus.gltf",
    position: [-57, 0, -20], // Updated position from loc
    size: 2,
    isOpen: false,
    color: "#afeeee", // Light blue for Uranus
    index: 6,
    texture: uranusTexture,
  },
  Neptune: {
    name: "Neptune",
    description:
      "Dive into the depths of Neptune’s ocean with deep, decadent dark chocolate. Can you handle the depth of this delight?",
    ingredients: [
      "Deep dark chocolate",
      "Sea salt",
      "Blueberry",
      "Chocolate drizzle",
      "Neptune’s deep ocean water",
    ],
    model: "./NeptuneModel/Neptune.gltf",
    position: [30, 0, -30], // Updated position from loc
    size: 2,
    isOpen: false,
    color: "#4169e1", // Blue for Neptune
    index: 7,
    texture: neptuneTexture,
  },
  // 'Pluto': {
  //   name: "Pluto",
  //   description: "Don’t underestimate Pluto! This small but mighty chocolate will take your taste buds on an unforgettable journey to the edges of the solar system.",
  //   ingredients: [
  //     "Dark chocolate truffles",
  //     "Rich fudge",
  //     "Bourbon vanilla",
  //     "Chocolate flakes",
  //     "Pluto’s frozen snow"
  //   ],
  //   model: "./MercuryModel/Mercury.gltf",
  //   position: [-135, 0, 30], // Updated position from loc
  //   size: 2,
  //   isOpen: false,
  //   color: '#b0c4de', // Light icy blue for Pluto
  //   index:8,
  // },
  Sun: {
    name: "Sun",
    description:
      "The ultimate luxury reserved only for our VIP customers. Experience the brilliance and warmth of the Sun in every lavish bite!",
    ingredients: [
      "Golden caramel",
      "24-carat gold flakes",
      "Sun-dried vanilla beans",
      "Silky chocolate",
      "Essence of the Sun",
    ],
    model: "./SunModel/Sun.gltf",
    position: [0, 0, 0], // Updated position from loc
    size: 2,
    isOpen: false,
    color: "#ffdf00", // Bright yellow for the Sun
    index: 8,
    texture: sunTexture,
  },
};

export { english, nutrition, europeanCountries };
