import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import { Paths } from "./src/constant/viteConfige";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      ...Paths.reduce(
        (acc, cur) => ({
          ...acc,
          [cur]: `/${cur === "src" ? cur : "src/" + cur}`,
        }),
        ""
      ),
    },
  },
});
