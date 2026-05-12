import mars from "../assets/planets/Mars.png";
import purple from "../assets/planets/purple.png";
import planet from "../assets/planets/jupiter.png";
import blue from "../assets/planets/uranus.png";
import sun from "../assets/planets/sun.png";

import {
  facebook,
  instagram,
  visa,
  masterCard,
  paypal,
  whatsUp,
} from "../assets/pay";
import {
  earthTexture,
  jupiterTexture,
  marsTexture,
  mercuryTexture,
  neptuneTexture,
  saturnTexture,
  sunTexture,
  uranusTexture,
  venusTexture,
} from "../assets/planetsTexture";

export const navLinks = [
  {
    id: "#about",
    title: "About",
  },

  {
    id: "/View3D",
    title: "Product",
  },
  {
    id: "#contact",
    title: "Contact",
  },
  {
    id: "/register",
    title: "Register",
  },
  {
    id: "/order",
    title: "order",
  },
];

const footer = {
  contactInfo: {
    email: "info@chocolatestore.com",
    phone: "+123456789",
    address: "123 Chocolate Ave, Cocoa City",
  },
  socialMedia: {
    Instagram: {
      url: "https://instagram.com/chocolatestore",
      icon: instagram,
    },
    Facebook: {
      url: "https://instagram.com/chocolatestore",
      icon: facebook,
    },
    WhatsUp: {
      url: "https://instagram.com/chocolatestore",
      icon: whatsUp,
    },
  },
  quickLinks: [
    { name: "Shop", url: "/shop" },
    { name: "About Us", url: "/about" },
    { name: "FAQ", url: "/faq" },
    { name: "Privacy Policy", url: "/privacy-policy" },
    { name: "Terms of Service", url: "/terms-of-service" },
  ],
  newsletterSignup: {
    placeholder: "Enter your email",
    buttonText: "Subscribe",
    submitUrl: "/subscribe",
  },
  paymentMethods: [
    { name: "Visa", iconUrl: visa },
    { name: "MasterCard", iconUrl: masterCard },
    { name: "PayPal", iconUrl: paypal },
  ],
  storeHours: {
    weekdays: "Mon - Fri: 9 AM - 6 PM",
    weekends: "Sat - Sun: 10 AM - 4 PM",
  },
  copyright: "© 2024 Chocolate Store. All rights reserved.",
};

const uniqueSellingPoints = [
  {
    title: "PlanetInspired",
    description:
      "Each chocolate is carefully crafted to resemble a planet in the solar system, making your chocolates both delicious and visually stunning.",
    icon: blue,
  },
  {
    title: "Handcrafted",
    description:
      "Made from high-quality, ethically sourced ingredients, every chocolate offers a gourmet experience with a variety of rich, unique flavors inspired by the characteristics of different planets.",
    icon: purple,
  },
  {
    title: "Interactive Space Journey",
    description:
      "Customers can explore the solar system through chocolate, with each planet representing a different taste adventure. It's more than just a treat—it's an interstellar experience!",
    icon: sun,
  },
  {
    title: "Eco-Friendly Packaging",
    description:
      "The store is committed to sustainability by using biodegradable, eco-friendly packaging that reflects the company's respect for the planet.",
    icon: planet,
  },
  {
    title: "3D Designs",
    description:
      "Our chocolates feature innovative 3D designs that match the unique appearances of each planet, providing a visually captivating and delightful treat.",
    icon: mars,
  },
];
const comments = [
  {
    name: "Sara",
    comment: "It is really the best experience I ever had!",
    photo: instagram,
  },
  {
    name: "John",
    comment: "I absolutely loved the design and service!",
    photo: instagram,
  },
  {
    name: "Emily",
    comment: "Amazing quality, I will definitely recommend it!",
    photo: instagram,
  },
  {
    name: "Michael",
    comment: "A truly unique and enjoyable experience.",
    photo: instagram,
  },
  {
    name: "Olivia",
    comment: "Hands down, the best I’ve tried in a long time!",
    photo: instagram,
  },
];
// const solarSystem = {
//   sun: {
//     planetPosition: [0, 0, 1],
//     planetSize: 1.5,
//     torusPosition: [0, 0, 0],
//     torusSize: 1.9,
//     texture: sunTexture
//   },
//   planet1: {
//     planetPosition: [0, 5, .5],
//     planetSize: 0.7,
//     torusPosition: [0, 5, 0],
//     torusSize: 0.8,
//     texture: marsTexture
//   },
//   planet2: {
//     planetPosition: [0, -5, .5],
//     planetSize: 0.7,
//     torusPosition: [0, -5, 0],
//     torusSize: 0.8,
//     texture: venusTexture
//   },
//   planet3: {
//     planetPosition: [5, 0, .5],
//     planetSize: 0.7,
//     torusPosition: [5, 0, 0],
//     torusSize: 0.8,
//     texture: jupiterTexture
//   },
//   planet4: {
//     planetPosition: [-5, 0, .5],
//     planetSize: 0.7,
//     torusPosition: [-5, 0, 0],
//     torusSize: 0.8,
//     texture: uranusTexture
//   },
//   planet5: {
//     planetPosition: [-3.5, 3.5, .5],
//     planetSize: 0.7,
//     torusPosition: [-3.5, 3.5, 0],
//     torusSize: 0.8,
//     texture: saturnTexture
//   },
//   planet6: {
//     planetPosition: [3.5, 3.5, .5],
//     planetSize: 0.7,
//     torusPosition: [3.5, 3.5, 0],
//     torusSize: 0.8,
//     texture: mercuryTexture
//   },
//   planet7: {
//     planetPosition: [-3.5, -3.5, .5],
//     planetSize: 0.7,
//     torusPosition: [-3.5, -3.5, 0],
//     torusSize: 0.8,
//     texture: neptuneTexture
//   },
//   planet8: {
//     planetPosition: [3.5, -3.5, .5],
//     planetSize: 0.7,
//     torusPosition: [3.5, -3.5, 0],
//     torusSize: 0.8,
//     texture: earthTexture
//   }
// };

//   const solarSystem = {
//   sun: {
//     planetPosition: [0, 0, 0],
//     planetSize: 1.5,
//     torusPosition: [0, 0, 0],
//     torusSize: 1.9,
//     texture: sunTexture
//   },
//   planet1: {
//     planetPosition: [0, 1.5, 3],
//     planetSize: 0.7,
//     torusPosition: [0, 5, 0],
//     torusSize: 0.8,
//     texture: marsTexture
//   },
//   planet2: {
//     planetPosition: [-5, 11, 2],
//     planetSize: 0.7,
//     torusPosition: [0, -5, 0],
//     torusSize: 0.8,
//     texture: venusTexture
//   },
//   planet3: {
//     planetPosition: [-1, 1, -3],
//     planetSize: 0.7,
//     torusPosition: [5, 0, 0],
//     torusSize: 0.8,
//     texture: jupiterTexture
//   },
//   planet4: {
//     planetPosition: [-11, 7, .5],
//     planetSize: 0.7,
//     torusPosition: [-5, 0, 0],
//     torusSize: 0.8,
//     texture: uranusTexture
//   },
//   planet5: {
//     planetPosition: [-5, 3.5, .5],
//     planetSize: 0.7,
//     torusPosition: [-3.5, 3.5, 0],
//     torusSize: 0.8,
//     texture: saturnTexture
//   },
//   planet6: {
//     planetPosition: [3., 7, .5],
//     planetSize: 0.7,
//     torusPosition: [3.5, 3.5, 0],
//     torusSize: 0.8,
//     texture: mercuryTexture
//   },
//   planet7: {
//     planetPosition: [5, 3,3],
//     planetSize: 0.7,
//     torusPosition: [-3.5, -3.5, 0],
//     torusSize: 0.8,
//     texture: neptuneTexture
//   },
//   planet8: {
//     planetPosition: [3.5, -3.5, .5],
//     planetSize: 0.7,
//     torusPosition: [3.5, -3.5, 0],
//     torusSize: 0.8,
//     texture: earthTexture
//   }
// };
const solarSystem = {
  sun: {
    planetPosition: [0, 0, 1],
    planetSize: 1.5,
    torusPosition: [0, 0, 1],
    torusSize: 1.9,
    texture: sunTexture,
  },
  planet1: {
    planetPosition: [0, 5, 0.5],
    planetSize: 0.7,
    torusPosition: [0, 5, 0.5],
    torusSize: 0.8,
    texture: marsTexture,
  },
  planet2: {
    planetPosition: [0, -5, 0.5],
    planetSize: 0.7,
    torusPosition: [0, -5, 0.5],
    torusSize: 0.8,
    texture: venusTexture,
  },
  planet3: {
    planetPosition: [5, 0, 0.5],
    planetSize: 0.7,
    torusPosition: [5, 0, 0.5],
    torusSize: 0.8,
    texture: jupiterTexture,
  },
  planet4: {
    planetPosition: [-5, 0, 0.5],
    planetSize: 0.7,
    torusPosition: [-5, 0, 0.5],
    torusSize: 0.8,
    texture: uranusTexture,
  },
  planet5: {
    planetPosition: [-3.5, 3.5, 0.5],
    planetSize: 0.7,
    torusPosition: [-3.5, 3.5, 0.5],
    torusSize: 0.8,
    texture: saturnTexture,
  },
  planet6: {
    planetPosition: [3.5, 3.5, 0.5],
    planetSize: 0.7,
    torusPosition: [3.5, 3.5, 0.5],
    torusSize: 0.8,
    texture: mercuryTexture,
  },
  planet7: {
    planetPosition: [-3.5, -3.5, 0.5],
    planetSize: 0.7,
    torusPosition: [-3.5, -3.5, 0.5],
    torusSize: 0.8,
    texture: neptuneTexture,
  },
  planet8: {
    planetPosition: [3.5, -3.5, 0.5],
    planetSize: 0.7,
    torusPosition: [3.5, -3.5, 0.5],
    torusSize: 0.8,
    texture: earthTexture,
  },
};
export { footer, uniqueSellingPoints, comments, solarSystem };
