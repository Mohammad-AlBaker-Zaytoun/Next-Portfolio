// Single source for the services shown on /services and offered in the
// contact form, so the two never drift apart.
export const services = [
  {
    num: "01",
    title: "Full-Stack Web Development",
    description:
      "Next.js and React front ends with Node.js or PHP back ends, from landing pages to complete e-commerce platforms.",
  },
  {
    num: "02",
    title: "Mobile App Development",
    description:
      "Flutter apps for Android and iOS, plus native Android development in Java.",
  },
  {
    num: "03",
    title: "Backend, APIs & Databases",
    description:
      "Fast, reliable APIs, system integrations and SQL Server databases, including stored procedures, triggers and performance tuning.",
  },
  {
    num: "04",
    title: "Messaging & CPaaS Integrations",
    description:
      "WhatsApp Cloud API, Messenger and Instagram, SMS and OTP, and VoIP, built for businesses and banks.",
  },
  {
    num: "05",
    title: "Linux Servers & Networking",
    description:
      "Setting up and maintaining Ubuntu servers, deployments and networks.",
  },
  {
    num: "06",
    title: "Payments & E-commerce Integrations",
    description:
      "Payment, shipping and marketplace integrations such as Whish, iCarry and OLX, backed by my own open-source SDKs.",
  },
  {
    num: "07",
    title: "AI & Machine Learning",
    description:
      "AI features built into products, such as automatic ticket classification and smart assistants, plus data analysis.",
  },
  {
    num: "08",
    title: "Technical Consulting",
    description:
      "Architecture reviews, performance fixes and technical guidance for development teams.",
  },
];

export const OTHER_SERVICE = "Something else";

export const contactHref = (title) =>
  `/contact?service=${encodeURIComponent(title)}`;
