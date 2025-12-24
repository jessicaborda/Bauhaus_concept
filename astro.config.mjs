// @ts-check

import react from "@astrojs/react";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://jessicaborda.github.io",
	base: "/Bauhaus_concept",
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					api: "modern-compiler", // Recommended for modern Sass
				},
			},
		},
	},

	integrations: [react()],
});
