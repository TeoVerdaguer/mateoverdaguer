import { 
  site1,
  site2,
  site3,
  site4,
  site5,
  site6,
  site8,
  site9,
  email,
  phone,
  linkedin,
  github 
} from '../assets/images';

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#resume", label: "Resume" },
  { href: "#projects", label: "My Portfolio" },
  { href: "#contact", label: "Contact Me" },
];

export const sites = [
  {
    id: 9,
    title: 'Tipeando',
    img: site9,
    alt: 'Screenshot of Tipeando website',
    link: 'https://tipeando.app',
    desc: 'A modern and secure solution for tipping.'
  },
  {
    id: 1,
    title: 'Eliana Barrionuevo portfolio',
    img: site1,
    alt: 'Screenshot of Eliana Barrionuevo portfolio website',
    link: 'https://elianabarrionuevo.netlify.app/',
    desc: 'Portfolio website for Eliana (graphic designer).'
  },
  {
    id: 8,
    title: 'Risto landing page',
    img: site8,
    alt: 'Screenshot of Risto landing page',
    link: 'https://risto-landing-page.netlify.app/',
    desc: 'Landing page for a Restaurant reservations app I developed using React Native'
  },
  {
    id: 2,
    title: 'Nike website using tailwind CSS',
    img: site2,
    alt: 'Screenshot of Nike website using tailwind CSS',
    link: 'https://nike-website-tailwind.netlify.app/',
    desc: 'Nike website redesign I developed in a tailwind course.'
  },
  {
    id: 3,
    title: 'Ecommerce - Code challenge for Aerolab',
    img: site3,
    alt: 'Screenshot of Ecommerce site for Aerolab',
    link: 'https://aerolab-code-challenge.netlify.app/',
    desc: 'Ecommerce website I developed for a code challenge for Aerolab.'
  },
  {
    id: 4,
    title: 'Capture website - JS animations course',
    img: site4,
    alt: 'Screenshot of Capture website',
    link: 'https://js-animations.netlify.app/',
    desc: 'Website I developed for a JavaScript animations course from "developedbyed".'
  },
  {
    id: 5,
    title: 'ER Repuestos - Ecommerce site',
    img: site5,
    alt: 'Screenshot of ER Repuestos website',
    link: 'https://erepuestos.netlify.app/',
    desc: 'Ecommerce website I developed for an auto parts company.'
  },
  {
    id: 6,
    title: 'MET Industrial - Landing page',
    img: site6,
    alt: 'Screenshot of MET Industrial website',
    link: 'https://metindustrial.netlify.app/',
    desc: 'Landing page I developed for a metalworking company.'
  },
  // {
  //   id: 7,
  //   title: 'Deliciousss website - React course',
  //   img: site7,
  //   alt: 'Screenshot of Delicious website',
  //   link: 'https://deliciousss-reactapp.netlify.app/',
  //   desc: 'Website I developed in a React course from "developedbyed".'
  // }
];

export const contactLinks = [
  {
    id: 1,
    icon: email,
    link: 'mailto:mateoverdaguer123@gmail.com',
    label: 'email icon'
  },
  {
    id: 2,
    icon: phone,
    link: 'tel:+5493518010846',
    label: 'phone icon'
  },
  {
    id: 3,
    icon: linkedin,
    link: 'https://www.linkedin.com/in/mateo-verdaguer/',
    label: 'linkedin icon'
  },
  {
    id: 4,
    icon: github,
    link: 'https://github.com/TeoVerdaguer',
    label: 'github icon'
  },
]
