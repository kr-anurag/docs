/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  // But you can create a sidebar manually

  onboarding: [
    { type: "autogenerated", dirName: "." },
    { type: "link", label: "Guides", href: "/guides" },

    {
      type: "category",
      label: "SDK References",
      className: "bottom-menu-group",
      collapsible: false,
      items: [
        {
          type: "link",
          label: "JavaScript / TypeScript",
          href: "/typescript",
        },
        {
          type: "link",
          label: "React.JS",
          href: "/react",
        },
        {
          type: "link",
          label: "Python",
          href: "/python",
        },
        {
          type: "link",
          label: "Go",
          href: "/go",
        },
        {
          type: "link",
          label: "Solidity",
          href: "/contracts",
        },
      ],
    },
  ],
};

module.exports = sidebars;
