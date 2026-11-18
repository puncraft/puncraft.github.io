// ============================================================
//  Puncraft.ca landing page settings
//  Edit this file to change what shows up on the page.
//  You never need to touch index.html.
//
//  Rules of thumb:
//   - Text goes inside "double quotes".
//   - Every item in a list ends with a comma.
//   - To add a link, copy one { ... } block, paste it, and edit it.
//   - To remove a link, delete its whole { ... }, block.
//   - Links show up in the order they are listed here.
// ============================================================

window.SITE = {
  title: "Puncraft.ca",
  tagline: "Currently: building something.",
  avatar: "👨‍💻",           // any emoji or a short bit of text
  sectionLabel: "Projects & Links",

  links: [
    {
      name: "Quicher",
      description: "QR & barcode generator. No ads.",
      icon: "▦",
      url: "https://qr.puncraft.ca",
    },
    {
      name: "Feed The Week",
      description: "Meal planning. Local LAN only.",
      icon: "🍽️",
      url: "http://diskstation:5031",
    },
    {
      name: "Gravity Wheel",
      description: "Star gravity sim. Tweakable.",
      icon: "🎡",
      url: "/gravitywheel/",
    },
    {
      name: "Space Cadet Typing",
      description: "Typing game for kids. Build a rocket.",
      icon: "🚀",
      url: "/typingtutor/",
    },
    {
      name: "Gitea",
      description: "Git hosting. Local LAN only.",
      icon: "🍵",
      url: "http://diskstation:3000",
    },
  ],
};
