import { defineConfig } from '@modern-js/module-tools/defineConfig';

export default defineConfig({
  buildConfig: {
    buildType: 'bundleless',
    jsx: 'transform',
    outDir: './dist/transform/bundleless',
  },
});
