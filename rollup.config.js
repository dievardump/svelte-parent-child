import svelte from "rollup-plugin-svelte";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";

import pkg from "./package.json";

export default {
  input: "src/index.js",
  output: [
    { file: pkg.module, format: "es" },
    { file: pkg.main, format: "umd", name: "Srouter" },
  ],
  plugins: [
    svelte(),
    resolve({
      dedupe: ["svelte"],
    }),
    commonjs({ include: "node_modules/**" }),
  ],
  watch: {
    clearScreen: false,
  },
};
