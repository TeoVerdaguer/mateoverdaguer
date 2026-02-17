import {
  site1,
  site3,
  site6,
  site8,
  site9,
  site10,
  site11,
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
    id: 11,
    title: 'Globalcare website',
    img: site11,
    alt: 'Screenshot of Globalcare website',
    link: 'https://globalcare-dev.ghits.com.ar/',
    short_desc: 'Globalcare - AI-Powered Procurement & Tenders Management System',
    full_desc: 'I built a custom solution for GlobalCare to digitize and analyze competitive bidding processes. The application uses Artificial Intelligence to parse competitor offers from images, populating a structured database automatically. It empowers employees with organized tender tracking, win/loss analytics, and an LLM-powered chat interface to instantly retrieve information about products, hospitals, and market trends.',
    tags: ['NextJS', 'TypeScript', 'Tailwind CSS', 'AWS']
  },
  {
    id: 9,
    title: 'Marino Repuestos Ecommerce',
    img: site10,
    alt: 'Screenshot of marino respuestos website',
    link: 'https://marinorepuestos.mitiendanube.com/',
    short_desc: 'Marino Repuestos - Automotive E-commerce & Data Pipeline',
    full_desc: 'Led the end-to-end digital transformation for an automotive parts retailer by launching a high-performance Tiendanube store. To manage a catalog of 300+ items, I developed custom Python scripts for batch image processing (compression and standardized renaming) and data cleaning in Excel. Beyond the technical setup, I designed the visual identity using Photoshop and Illustrator, integrated Meta Ads/Catalog, and configured the full operational stack: domain management, Google Analytics, payment gateways, and logistics providers.',
    tags: ['Tiendanube', 'Python', 'Excel', 'Photoshop', 'Illustrator']
  },
  {
    id: 8,
    title: 'Eliana Barrionuevo portfolio',
    img: site1,
    alt: 'Screenshot of Eliana Barrionuevo portfolio website',
    link: 'https://eliana-web-pi.vercel.app/',
    short_desc: 'Portfolio website for a Graphic Designer',
    full_desc: 'I designed and developed a modern, dynamic portfolio website for a graphic designer, focusing on visual storytelling and smooth user interactions. The site features a responsive layout and subtle animations to highlight her creative work while maintaining a professional and elegant aesthetic.',
    tags: ['NextJS', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
  },
  {
    id: 7,
    title: 'Code challenge for Aerolab',
    img: site3,
    alt: 'Screenshot of Ecommerce site for Aerolab',
    link: 'https://aerolab-code-challenge.netlify.app/',
    short_desc: 'Aerolab Frontend Challenge - Points-Based E-commerce',
    full_desc: (
      <span>
        A high-fidelity web application developed as a technical challenge for Aerolab, focused on building a seamless user experience for a loyalty-style e-commerce platform. Using Next.js (or React), I implemented a virtual economy system where users can track points, redeem products, and add credits. Key features include a pixel-perfect UI translated from Figma, advanced product filtering, multi-criteria sorting, and efficient pagination to handle the product catalog.{' '}
        <a
          href="https://aerolab.co/coding-challenge-instructions?utm_campaign=Coding%20Challenge"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 underline break-all"
        >
          <br />
          https://aerolab.co/coding-challenge-instructions
        </a>
      </span>
    ),
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Figma', 'Netlify']
  },
  {
    id: 6,
    title: 'Tipeando Landing Page',
    img: site9,
    alt: 'Screenshot of Tipeando website',
    link: 'https://tipeando.app',
    short_desc: 'Landing Page for Tipeando. A modern and secure solution for tipping.',
    full_desc: 'I designed and developed the official landing page for Tipeando, a fintech solution that digitizes gratuities for the hospitality industry. Built from scratch with Next.js, the site features a high-performance, responsive one-page architecture. I focused on creating an engaging user experience through custom animations and modern UI libraries, ensuring a seamless bridge between the marketing site and the core management platform where restaurant owners and staff manage their digital tips.',
    tags: ['NextJS', 'TypeScript', 'Tailwind CSS']
  },
  {
    id: 5,
    title: 'Risto landing page',
    img: site8,
    alt: 'Screenshot of Risto landing page',
    link: 'https://risto-landing-page.netlify.app/',
    short_desc: 'Risto - Cross-Platform Reservation Ecosystem (Web & Mobile)',
    full_desc: 'I led the design and frontend development for Risto, a comprehensive restaurant booking platform. I built a high-performance landing page using Next.js and developed the native mobile applications from scratch using React Native (iOS & Android). My work focused on implementing complex client-side logic, including Google Maps integration for restaurant discovery, real-time booking flows with multi-parameter selection (date, staff, and seating areas), and seamless Google Authentication. I also integrated Push Notifications to ensure high user retention and booking accuracy.',
    tags: ['React Native', 'NextJS', 'Google Maps', 'Firebase']
  },
  {
    id: 1,
    title: 'MET Industrial - Landing page',
    img: site6,
    alt: 'Screenshot of MET Industrial website',
    link: 'https://metindustrial.netlify.app/',
    short_desc: 'MET Industrial - Corporate Web Redesign & Modernization',
    full_desc: 'Led the end-to-end redesign of the corporate website for MET Industrial, replacing an obsolete legacy system with a modern, high-performance platform. Starting from a Bootstrap foundation, I made all key design decisions to align the site with modern industrial standards. I was responsible for the entire development lifecycle, from UI refinement and content restructuring to the final deployment, resulting in a significantly improved user experience and a stronger digital brand identity..',
    tags: ['Bootstrap', 'HTML', 'CSS', 'JavaScript', 'Netlify']
  }
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
