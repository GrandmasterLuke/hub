console.log("BASE", process.env.BASE);
module.exports = {
  dest: "build",
  base: process.env.BASE || "/",
  title: "StudyATHome Internationally",
  theme: "@studyathome-internationally/hub",
  themeConfig: {
    // logo: "./assets/img/logos/studyathome-noir.svg",
    nav: [
      { text: "Home", link: "/" },
      { text: "Project Teams", link: "/projectteams/" },
      {
        text: "More",
        items: [
          {
            text: "eLearning Sharing",
            items: [
              { text: "Concepts", link: "/more/e-learning-sharing/concepts/" },
              { text: "Guides", link: "/more/e-learning-sharing/guides/" },
              { text: "Join!", link: "/more/e-learning-sharing/join" }
            ]
          },
          {
            text: "Virtual Project Teams",
            items: [
              { text: "Concepts", link: "/more/virtual-project-teams/concepts/" },
              { text: "Guides", link: "/more/virtual-project-teams/guides/" },
              { text: "Join!", link: "/more/virtual-project-teams/join" }
            ]
          },
          {
            text: "Hub",
            items: [
              // { text: "Concepts", link: "/more/hub/concepts/" },
              { text: "Guides", link: "/more/hub/guides/" }
              // { text: "Join!", link: "/more/hub/join" }
            ]
          },
          {
            text: "StudyATHome Internationally",
            items: [
              { text: "Contact", link: "/more/studyathome/contact" },
              { text: "Partner", link: "/more/studyathome/partner" }
            ]
          },
          {
            text: "General",
            items: [
              { text: "Terms", link: "/more/general/terms" },
              { text: "Privacy", link: "/more/general/privacy" },
              { text: "Help", link: "/more/general/help" },
              { text: "Sitemap", link: "/more/general/sitemap" },
              { text: "About", link: "/more/general/about" }
            ]
          }
        ]
      }
    ],
    displayAllHeaders: true,
    sidebar: {
      "/courses/": false,
      "/more/e-learning-sharing/concepts/": [
        ["concept1.md", "Concept 1"],
        ["concept2.md", "Concept 2"],
        ["concept3.md", "Concept 3"]
      ],
      "/more/e-learning-sharing/guides/": [
        ["guide1.md", "Guide 1"],
        ["guide2.md", "Guide 2"],
        ["guide3.md", "Guide 3"]
      ],
      "/more/virtual-project-teams/concepts/": [
        ["concept1.md", "Concept 1"],
        ["concept2.md", "Concept 2"],
        ["concept3.md", "Concept 3"]
      ],
      "/more/virtual-project-teams/guides/": [
        ["guide1.md", "Guide 1"],
        ["guide2.md", "Guide 2"],
        ["guide3.md", "Guide 3"]
      ],
      "/more/hub/guides/": [
        ["guide1.md", "Guide 1"],
        ["guide2.md", "Guide 2"],
        ["guide3.md", "Guide 3"]
      ]
    }
  }
};
