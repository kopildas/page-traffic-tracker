import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";

import { defineConfig } from "rollup";

export default defineConfig({
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "es",
    name: "page-traffic-tracker",
  },
  external: ["react", "react-dom"],
  plugins: [
    typescript({ tsconfig: "tsconfig.json" }),
    terser({
      ecma: 2020,
      mangle: { toplevel: true },
      compress: {
        module: true,
        toplevel: true,
        unsafe_arrows: true,
        drop_console: true,
        drop_debugger: true,
      },
      output: { quote_style: 1 },
    }),
  ],
});
