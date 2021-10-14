/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: "FastJ",
    tagline: "The open-source, 2D Java game engine.",
    url: "https://tech.fastj",
    baseUrl: "/",
    noIndex: false,
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/fastj/fastj_icon.png",
    organizationName: "fastjengine",
    projectName: "fastjengine.github.io",
    plugins: ["docusaurus-plugin-sass"],
    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            prism: {
                additionalLanguages: ["java", "groovy", "kotlin"],
            },
            colorMode: {
                defaultMode: "dark",
                disableSwitch: false,
                respectPrefersColorScheme: false,
                switchConfig: {
                    darkIcon: "🌙",
                    lightIcon: "❄️",
                },
            },
            navbar: {
                logo: {
                    alt: "FastJ Logo",
                    src: "svg/fastj_icon.svg",
                },
                items: [
                    {
                        type: "doc",
                        docId: "intro",
                        position: "left",
                        label: "Wiki",
                    },
                    {
                        href: "https://javadoc.io/doc/io.github.lucasstarsz.fastj/fastj-library",
                        label: "API Docs",
                        position: "left",
                    },
                    {
                        to: "/news",
                        label: "News",
                        position: "left",
                    },
                    {
                        href: "https://github.com/fastjengine/FastJ/",
                        label: "GitHub",
                        position: "right",
                    },
                ],
            },
            footer: {
                style: "dark",
                links: [
                    {
                        title: "Docs",
                        items: [
                            {
                                label: "Wiki",
                                to: "/wiki/intro",
                            },
                            {
                                label: "API Docs",
                                href: "https://api.fastj.dev",
                            },
                        ],
                    },
                    {
                        title: "Community",
                        items: [
                            {
                                label: "FastJ Discord",
                                href: "https://discord.gg/FTWsYVSDv6",
                            },
                        ],
                    },
                    {
                        title: "More",
                        items: [
                            {
                                label: "News",
                                to: "/news",
                            },
                            {
                                label: "GitHub",
                                href: "https://fastj.dev/",
                            },
                        ],
                    },
                ],
                copyright: `Copyright &copy; ${new Date().getFullYear()} Andrew Dey. Built with Docusaurus.
      <br/>
      Hand + Feather, Windows, macOS, and Linux icons originally made by 
      <a href="https://www.freepik.com" title="Freepik">Freepik</a> 
      from 
      <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>, 
      and modified by me.`,
            },
        }),
    presets: [
        [
            "@docusaurus/preset-classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                theme: {
                    customCss: require.resolve("./src/css/custom.scss"),
                },
                blog: {
                    path: "news",
                    routeBasePath: "news",
                    postsPerPage: 7,
                    blogTitle: "News",
                    blogDescription: "Keep up with the latest news on the FastJ Game Engine.",
                    editUrl: "https://github.com/fastjengine/fastjengine.github.io/edit/main/",
                    showReadingTime: false,
                },
                docs: {
                    path: "wiki",
                    routeBasePath: "wiki",
                    editUrl: "https://github.com/fastjengine/fastjengine.github.io/edit/main/",
                },
            }),
        ],
    ],
};
