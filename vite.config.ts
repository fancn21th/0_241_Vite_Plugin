import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    {
      name: "html-partials",
      transformIndexHtml: {
        order: "pre",
        async handler(html) {
          console.log(html);
        },
      },
    },
  ],
});
