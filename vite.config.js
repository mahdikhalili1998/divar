import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const path = [
  "src",
  "services",
  "styles",
  "util",
  "assets",
  "components",
  "configs",
  "pages",
  "Router",
];
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      ...path.reduce(
        (acc, cur) => ({
          ...acc,
          [cur]: `/${cur === "src" ? cur : "src/" + cur}`,
        }),
        ""
      ),
    },
  },
});
