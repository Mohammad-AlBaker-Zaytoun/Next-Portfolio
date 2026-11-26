// Resume content, shared by /resume. Keep the CV PDF
// (public/assets/cv/mzaytoun-cv.pdf) in step when this changes.

export const about = {
  title: "About me",
  description:
    "Senior software engineer and team lead with 8+ years of experience. I build messaging platforms on WhatsApp, Instagram and SMS that handle millions of messages, and I lead the teams behind them. I led and mentored a team of about 25 engineers on Protel's omni-channel CPaaS platform (WhatsApp, Messenger, Instagram, SMS and VoIP) using PHP, Laravel, Node.js, SQL Server and Docker on Linux. I also build full-stack products with Next.js and Flutter, connect payments and shipping, and put AI and machine learning into real features.",
  info: [
    { fieldName: "Name", fieldValue: "Mohammad Zaytoun" },
    { fieldName: "Phone", fieldValue: "(+961) 71 480 594" },
    { fieldName: "Experience", fieldValue: "8+ Years" },
    { fieldName: "Nationality", fieldValue: "Lebanese" },
    { fieldName: "Email", fieldValue: "mabzaytoun@gmail.com" },
    { fieldName: "Open to", fieldValue: "Full-time remote roles" },
    { fieldName: "Languages", fieldValue: "English, Arabic" },
  ],
};

export const experience = {
  title: "My experience",
  description:
    "The roles that shaped how I build, lead and ship software, newest first.",
  items: [
    {
      company: "Protel S.A.L Offshore",
      position: "Senior Software Engineer",
      duration: "March 2023 - December 2026",
      summary:
        "Led and mentored a team of about 25 engineers on the omni-channel CPaaS platform. Took over the struggling WhatsApp Campaigns feature and rebuilt it end to end, moving sending to Linux system workers with guard services so campaigns reach millions of recipients, and leading a mobile-first UX redesign. Built the internal Meta microservices with Laravel and Docker, and, alone or with small teams, the OTP, ticketing, HR, voucher and FlashCalls systems.",
    },
    {
      company: "Flyesim",
      position: "Senior Technical Consultant",
      duration: "November 2025 - Present",
      summary:
        "Advise on backend architecture, performance and API security, and review major technical work before it starts.",
    },
    {
      company: "Zaytoun Solutions",
      position: "Founder & CEO",
      duration: "January 2025 - Present",
      summary:
        "Built and run the company platform: website, e-commerce store, academy, admin back office and Flutter store app, on our own Linux servers.",
    },
    {
      company: "Flyesim",
      position: "Backend Development Team Lead & Integration Specialist",
      duration: "January 2024 - November 2025",
      summary:
        "Led a 10+ person backend team building a complete eSIM platform with multi-carrier support and Stripe and Amazon Pay payments.",
    },
    {
      company: "Al Maaref University",
      position: "Teaching Assistant",
      duration: "February 2020 - April 2022",
      summary:
        "Ran C++ and Java labs on programming fundamentals, OOP and data structures.",
    },
    {
      company: "IT, networking & hardware",
      position: "Earlier roles",
      duration: "2015 - 2025",
      summary:
        "Head of IT at Lancaster Tamar Hotel (network, Windows servers, Active Directory, backups), broadcast IT at LouLoua TV and Al Bachaer Radio, rig building at Mining Tech, and my own computer repair and design businesses.",
    },
  ],
};

export const education = {
  title: "My education",
  description:
    "The degree, honors and certifications behind my work.",
  items: [
    {
      institution: "Al Maaref University",
      degree: "BSc in Computer Science",
      duration: "2019 - 2022",
      details: "GPA 3.5/4 · Dean's Honor List",
    },
  ],
  honors: [
    { title: "Top 10, AUB Hackathon \"Hack The Fake\"", year: "2020" },
  ],
};

export const certifications = [
  {
    institution: "Forward MENA",
    certificate: "Advanced Full Stack Development with AI",
  },
  {
    institution: "Cisco Networking Academy",
    certificate: "PCAP: Programming Essentials in Python",
  },
  {
    institution: "Cisco Networking Academy",
    certificate: "Introduction to Cybersecurity",
  },
  {
    institution: "IEEE",
    certificate:
      "IEEE Lebanon Entrepreneurship Summit: Smart & Sustainable Cities",
  },
  {
    institution: "Udemy",
    certificate: "Learn Ethical Hacking From A-Z: Beginner To Expert",
  },
  {
    institution: "Udemy",
    certificate: "MySQL Database Development Mastery",
  },
  {
    institution: "Udemy",
    certificate: "Object Oriented Programming Basics to Advanced (Java OOP)",
  },
];
