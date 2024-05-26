import cloudflare from "@astrojs/cloudflare";
import markdoc from "@astrojs/markdoc";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://test.sites.dev",
	integrations: [markdoc()],
	output: "hybrid",
	adapter: cloudflare(),
});
