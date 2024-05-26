import cloudflare from "@astrojs/cloudflare";
import markdoc from "@astrojs/markdoc";
import { defineConfig } from "astro/config";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
	site: "https://ideal-7m3.sites.dev",
	integrations: [markdoc()],
	output: "hybrid",
	adapter: cloudflare(),
});
