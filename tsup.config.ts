import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  clean: true,
  splitting: false,
  esbuildOptions(options) {
    options.alias = {
      "@/app/types": "./src/types.ts",
      "@/app/data": "./src/data",
    };
  },
});
