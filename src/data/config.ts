const config = {
  title: "XERA-2011",
  description: {
    long: "A full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, and more. Let's build something amazing together!",
    short: "A full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "XERA 2011",
  email: "q1138006034@gmail.com",
  site: "https://xera-2011.github.io",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/",
    linkedin: "https://www.linkedin.com/",
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
    github: "https://github.com/",
  },
};
export { config };
