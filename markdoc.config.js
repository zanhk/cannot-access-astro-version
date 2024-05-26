import { component, defineMarkdocConfig, nodes } from "@astrojs/markdoc/config";
import shiki from "@astrojs/markdoc/shiki";

export default defineMarkdocConfig({
	nodes: {
		heading: {
			...nodes.heading,
		},
	},
	tags: {},
	extends: [
		shiki({
			langs: ["java", "python", "bash", "latex"],
			wrap: true,
			theme: "github-dark",
		}),
	],
});
