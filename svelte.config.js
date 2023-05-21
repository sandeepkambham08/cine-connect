import adapterAuto from '@sveltejs/adapter-auto';
import adapterNode from '@sveltejs/adapter-node';
import adapterStatic from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { loadEnv } from 'vite';

/** @type {{BUILD_MODE: "SPA" | "SSR", BUILD_BASE: string}} */
const env = loadEnv(
  process.env.NODE_ENV ?? 'development',
  process.cwd(),
  'BUILD'
);

/** @returns {import('@sveltejs/kit').KitConfig} */
function kit() {
  switch (env.BUILD_MODE) {
    case 'SSR':
      return {
        adapter: adapterNode(),
        paths: { base: env.BUILD_BASE }
      };

    case 'SPA':
      return {
        adapter: adapterStatic({
          fallback: '404.html'
        }),
        paths: { base: env.BUILD_BASE }
      };

    default:
      return {
        adapter: adapterAuto()
      };
  }
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess({ postcss: true }),
  kit: kit()
};

export default config;
