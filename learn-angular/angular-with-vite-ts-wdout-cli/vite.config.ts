import { defineConfig } from "vite";
import typescript from "@rollup/plugin-typescript";

export default defineConfig({
  plugins: [
    typescript({
      tsconfig: "./tsconfig.json", // Specify your tsconfig.json file
      target: "esnext", // Ensure ESNext for decorators
      module: "esnext",
    }),
  ],
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment",
    tsconfigRaw: {
      compilerOptions: {
        experimentalDecorators: true,
        emitDecoratorMetadata: true
      },
    },
  },
});
