import tour1 from './images/tour-1.jpg';
import tour2 from './images/tour-2.jpg';
import tour3 from './images/tour-3.jpg';
import tour4 from './images/tour-4.jpg';
const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
  { id: 5, href: "#products", text: "products" },
];
export {pageLinks};
const socialLinks = [
  {
    id: 1,
    href: "https://www.facebook.com",
    icon: "fab fa-facebook",
    target: "_blank",
  },
  {
    id: 2,
    href: "https://www.twitter.com",
    icon: "fab fa-twitter",
    target: "_blank",
  },
  {
    id: 3,
    href: "https://www.instagram.com",
    icon: "fab fa-instagram",
    target: "_blank",
  },
];
export {socialLinks};
export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    slogan:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    slogan:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "comfort",
    slogan:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
];


// export { services };

const tour = [
  {
    id: 1,
    image: tour1,
    date: "august 26th, 2020",
    title: "tibet adventure",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
    icon: "fas fa-map",
    country : "china",
    duration: "6 days",
    expense: "from $2100",
  },
  {
    id: 2,
    image: tour2,
    date: "august 26th, 2020",
    title: "tibet adventure",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
    icon: "fas fa-map",
    country : "china",
    duration: "6 days",
    expense: "from $2100",
  },
  {
    id: 3,
    image: tour3,
    date: "august 26th, 2020",
    title: "tibet adventure",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
    icon: "fas fa-map",
    country : "china",
    duration: "6 days",
    expense: "from $2100",
  },
  {
    id: 4,
    image: tour4,
    date: "august 26th, 2020",
    title: "tibet adventure",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
    icon: "fas fa-map",
    country : "china",
    duration: "6 days",
    expense: "from $2100",
  },
];
export { tour };
