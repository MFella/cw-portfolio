import { defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { qwikSpeakInline } from 'qwik-speak/inline';

export default defineConfig(() => {
  return {
    plugins: [qwikCity(), qwikVite(),
      qwikSpeakInline({
        assetsPath: 'i18n',
        supportedLangs: ['en-US', 'pl-PL'],
        defaultLang: 'pl-PL'
    }),
    tsconfigPaths()],
    preview: {
      headers: {
        'Cache-Control': 'public, max-age=600',
      },
    },
  };
});
