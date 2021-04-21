/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'FastJ',
  tagline: 'The open-source, 2D Java game engine.',
  url: 'https://lucasstarsz.github.io/fastj',
  baseUrl: '/',
  noIndex: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/fastj/fastj_icon.png',
  organizationName: 'lucasstarsz', // Usually your GitHub org/user name.
  projectName: 'FastJ', // Usually your repo name.
  themeConfig: {
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
      // title: 'FastJ',
      logo: {
        alt: 'FastJ Logo',
        src: 'svg/fastj_icon.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Tutorials',
        },
        { 
          to: '/blog', 
          label: 'News', 
          position: 'left' 
        },
        {
          href: 'https://github.com/lucasstarsz/FastJ/',
          label: 'GitHub',
          image: '/static/img/github-logo.png',
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
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'News',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/lucasstarsz/FastJ/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Andrew Dey. Built with Docusaurus.
      <br/>
      Hand + Feather, Windows, macOS, and Linux icons originally made by <a href="https://www.freepik.com" 
      title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>, and modified by me.`,
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
            'https://github.com/lucasstarsz/FastJ/',
        },
        news: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/lucasstarsz/FastJ/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
