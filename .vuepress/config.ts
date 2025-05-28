import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { viteBundler } from '@vuepress/bundler-vite';
import { webpackBundler } from '@vuepress/bundler-webpack';
import markdownItWikilinks from 'markdown-it-wikilinks';
import markdownItContainer from 'markdown-it-container';

export default defineUserConfig({
  base: "/tuxie-library/",
  title: "Tuxie's Library",
  description: "Linux Wiki",
  bundler: viteBundler(),
  
  // bundler: webpackBundler(),
  head: [
      [
        "script",
        {
          async: true,
          src: "https://www.googletagmanager.com/gtag/js?id=G-LCT48BR4CV",
        },
      ],
      [
        "script",
        {},
        `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-LCT48BR4CV');
        `,
      ],
    ],

  theme: recoTheme({
    logo: "/skibidiPenguin.jpg",
    docsRepo: "https://github.com/Lunear01/tuxie-library/tree/gh-pages",
    docsBranch: "main",
    docsDir: "example",
    lastUpdatedText: "",
    series: {
      "/docs/md/": [
        {
          text: "Linux App Library",
          children: ["linuxAppsLibrary","editorsChoice", "essentials", "popular", "gnomie", "FirefoxBasedUser.jsTweaks", 
            "Terminal-Customization-(Bash)"
          ],  
        },
        {
          text: "Linux Guides",
          children: ["linuxGuides","ubuntu_debian","fedora", "arch"],  
        }
      ],
    },
    navbar: [
      { text: "Home", link: "/" },
      {
        text: "Docs",
        children: [
          { text: "Linux App Library", link: "/docs/md/linuxAppsLibrary.md" },
          { text: "Linux Guide", link: "/docs/md/linuxGuides" },
        ],
      },
    ],
    bulletin: {
      title: "Welcome!",
      body:[
        {
          type: "text",
          content: "🐧 Welcome to our Linux wiki! Built by two uni students 👩‍💻👨‍💻, this doc tracks our Linux adventures across distros—from 📖 basics to 🛠️ scripting, 📦 package mgmt, 🖥️ DEs, and 🔧 troubleshooting. Whether you're a newbie or a terminal wizard, we hope our notes help! 🚀 Dive in!",
          style: "font-size: 12px;",
        },
        {
          type: "hr",
        },
        {
          type: "title",
          content: "GitHub and Discord",
        },
        {
          type: "text",
          content: `
          <ul>
            <li><a href="https://github.com/aier9500/qoolLinuxLib">Github Repository<a/></li>
            <li><a href="https://discord.gg/WkeNeu8NGt">Join Our Discord<a/></li>
          </ul>`,
          style: "font-size: 12px;",
        },
        {
          type: "hr",
        }
      ],
    },
  }),
});