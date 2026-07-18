import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Cursor 知識ベース',
  tagline: 'iPhoneだけで開発・デプロイする方法',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true,
  },

  url: 'https://couror-outputs.vercel.app',
  baseUrl: '/',

  organizationName: 'RyoNakano1828',
  projectName: 'Couror_outputs',

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/RyoNakano1828/Couror_outputs/tree/master/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/RyoNakano1828/Couror_outputs/tree/master/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Cursor 知識ベース',
      logo: {
        alt: 'Cursor 知識ベース',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'ガイド',
        },
        {to: '/blog', label: 'ブログ', position: 'left'},
        {
          href: 'https://github.com/RyoNakano1828/Couror_outputs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'ガイド',
          items: [
            {
              label: 'はじめに',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'リンク',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/RyoNakano1828/Couror_outputs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} RyoNakano1828. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
