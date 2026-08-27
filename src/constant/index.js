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

export const navLinks = [
  {
    id: "/",
    title: "Home",
  },
  {
    id: "#about",
    title: "About us",
  },
  {
    id: "#contact",
    title: "Contact",
  },
  {
    id: "/collection",
    title: "collection",
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
    title: "Planet Inspired",
    description:
      "Each chocolate is carefully crafted to resemble a planet in the solar system, making your chocolates both delicious and visually stunning.",
    icon: blue,
    color: "#2C3E90",
  },
  {
    title: "Hand crafted",
    description:
      "Made from high-quality, ethically sourced ingredients, every chocolate offers a gourmet experience with a variety of rich, unique flavors inspired by the characteristics of different planets.",
    icon: purple,
    color: "#7D3C98",
  },
  {
    title: "Interactive Space Journey",
    description:
      "Customers can explore the solar system through chocolate, with each planet representing a different taste adventure. It's more than just a treat—it's an interstellar experience!",
    color: "#FDB813",
    icon: sun,
  },
  {
    title: "Eco-Friendly Packaging",
    description:
      "The store is committed to sustainability by using biodegradable, eco-friendly packaging that reflects the company's respect for the planet.",
    icon: planet,
    color: "#D9A066",
  },
  {
    title: "3D Designs",
    description:
      "Our chocolates feature innovative 3D designs that match the unique appearances of each planet, providing a visually captivating and delightful treat.",
    icon: mars,
    color: "#C1440E",
  },
];

export { footer, uniqueSellingPoints };
