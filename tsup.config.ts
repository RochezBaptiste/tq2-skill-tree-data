import { defineConfig } from "tsup";

const masteries = ["core", "earth", "forge", "rogue", "spirit", "storm", "warfare"];

export default defineConfig({
  entry: {
    index: "src/index.ts",
    ...Object.fromEntries(masteries.map((id) => [id, `src/data/${id}/index.ts`])),
  },
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
