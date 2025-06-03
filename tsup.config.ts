import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/**/*.ts'], // Inclua todos os arquivos .ts na pasta src e subpastas
  outDir: 'dist',
  format: ['cjs'], // Ou ['esm', 'cjs'] se precisar de ambos
  clean: true, // Limpa a pasta 'dist' antes de cada build
  dts: true, // Gera arquivos de declaração .d.ts
  sourcemap: true, // Gera sourcemaps para depuração
  // Exclua explicitamente os arquivos que não são código
  // ou defina 'entry' de forma mais específica para apenas os arquivos TS
  // que você quer que sejam compilados/bundlados.
  // entry: {
  //   index: 'src/index.ts', // Se você só tiver um ponto de entrada principal
  // },
  // assets: ['src/database/prisma/schema.prisma'], // Se você quisesse COPIAR, não processar
});