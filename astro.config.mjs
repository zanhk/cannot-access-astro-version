import cloudflare from "@astrojs/cloudflare";
import markdoc from "@astrojs/markdoc";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import keystatic from "@keystatic/astro";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://test.sites.dev",
	integrations: [react(), markdoc(), tailwind(), icon(), keystatic()],
	output: "hybrid",
	adapter: cloudflare(),
});
