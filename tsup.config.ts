import { defineConfig } from 'tsup';

export default defineConfig({
  dts: false,
  entry: ['src/index.ts'],
  external: ['vscode'],
  format: ['cjs'],
  shims: false
});
