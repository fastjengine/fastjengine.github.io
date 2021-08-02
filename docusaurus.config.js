/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'FastJ',
  tagline: 'The open-source, 2D Java game engine.',
  url: 'https://tech.fastj',
  baseUrl: '/',
  noIndex: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/fastj/fastj_icon.png',
  organizationName: 'fastjengine', // Usually your GitHub org/user name.
  projectName: 'fastjengine.github.io', // Usually your repo name.
  themeConfig: {
    prism: {
      additionalLanguages: ['java', 'groovy', 'kotlin'],
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
      switchConfig: {
        darkIcon: '🌙',
        lightIcon: '❄️'
      }
    },
    navbar: {
      logo: {
        alt: 'FastJ Logo',
        src: 'svg/fastj_icon.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Wiki',
        },
        {
          href: 'https://javadoc.io/doc/io.github.lucasstarsz.fastj/fastj-library',
          label: 'API Docs',
          position: 'left',
        },
        { 
          to: '/news', 
          label: 'News', 
          position: 'left' 
        },
        {
          href: 'https://github.com/fastjengine/FastJ/',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Wiki',
              to: '/wiki/intro',
            },
            {
              label: 'API Docs',
              href: 'https://javadoc.io/doc/io.github.lucasstarsz.fastj/fastj-library',
            },
          ],
        },
        // TODO: Create Discord
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'Twitter',
        //       href: 'https://twitter.com/docusaurus',
        //     },
        //   ],
        // },
        {
          title: 'More',
          items: [
            {
              label: 'News',
              to: '/news',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/fastjengine/FastJ/',
            },
          ],
        },
      ],
      copyright: 
      `Copyright © ${new Date().getFullYear()} Andrew Dey. Built with Docusaurus.
      <br/>
      Hand + Feather, Windows, macOS, and Linux icons originally made by 
      <a href="https://www.freepik.com" title="Freepik">Freepik</a> 
      from 
      <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>, 
      and modified by me.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        wiki: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/fastjengine/FastJ/',
        },
        news: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/fastjengine/FastJ/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        blog: {
          path: 'news',
          routeBasePath: 'news',
          postsPerPage: 7,
          blogDescription: 'Keep up with the latest news on the FastJ Game Engine.',
        },
        docs: {
          path: 'wiki',
          routeBasePath: 'wiki',
        }
      },
    ],
  ],
};
