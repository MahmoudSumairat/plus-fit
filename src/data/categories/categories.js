import upperWear from "./images/upper-wears.jpg";
import lowerWear from "./images/lower-wears.jpg";
import shoes from "./images/shoes.jpg";
import accs from "./images/accs.jpg";

const categories = [
  {
    id: 1,
    key: "upper_wear",
    showInLandingPage: true,
    title: "Upper Wears",
    imageUrl: upperWear,
  },
  {
    id: 2,
    key: "lower_wear",
    showInLandingPage: true,
    title: "Lower Wears",
    imageUrl: lowerWear,
  },
  {
    id: 3,
    key: "shoes",
    showInLandingPage: true,
    title: "Shoes",
    imageUrl: shoes,
  },
  {
    id: 4,
    key: "accessories",
    showInLandingPage: true,
    title: "Accs",
    imageUrl: accs,
  },
];

export default categories;
