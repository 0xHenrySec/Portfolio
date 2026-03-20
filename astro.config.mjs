import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "Portfolio";
const isUserPagesRepo = repository.endsWith(".github.io");
const base = repository && !isUserPagesRepo ? `/${repository}` : "/";

export default defineConfig({
  site: process.env.SITE_URL ?? "https://0xhenrysec.github.io/Portfolio",
  base,
  output: "static",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});
