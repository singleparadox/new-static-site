import { defineConfig } from 'astro/config';

import expressiveCode from 'astro-expressive-code';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import spectre from './package/src';

import node from '@astrojs/node';
import { spectreDark } from './src/ec-theme';

// https://astro.build/config
export default defineConfig({
  site: 'https://singleparadox.github.io',
  base: '/new-static-site',
  output: 'static',
  integrations: [
    expressiveCode({
      themes: [spectreDark],
    }),
    mdx(),
    sitemap(),
    spectre({
      name: 'Glenn Perez',
      openGraph: {
        home: {
          title: 'Glenn Perez',
          description: 'A minimalistic theme for Astro.'
        },
        blog: {
          title: 'Blog',
          description: 'A place where I put my experiences and thoughts.'
        }
        // projects: {
        //   title: 'Projects'
        // }
      },
      giscus: {
        repository: 'louisescher/spectre',
        repositoryId: 'R_kgDONjm3ig',
        category: 'General',
        categoryId: 'DIC_kwDONjm3is4ClmBF',
        mapping: 'pathname',
        strict: true,
        reactionsEnabled: true,
        emitMetadata: false,
        lang: 'en',
      }
    })
  ],
  // adapter: node({
  //   mode: 'standalone'
  // })
});