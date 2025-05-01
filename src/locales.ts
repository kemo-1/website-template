// locales settings for this theme
// Set the languages you want to support on your site.
// https://astro-cms-dpv.pages.dev/setup/

export const DEFAULT_LOCALE_SETTING: string = "ar";

interface LocaleSetting {
	[key: Lowercase<string>]: {
		label: string;
		lang?: string;
		dir?: "rtl" | "ltr";
	};
} // refer: https://starlight.astro.build/reference/configuration/#locales

export const LOCALES_SETTING: LocaleSetting = {
	en: {
		label: "English",
		lang: "en-US",
	},
	ar: {
		label: "العربية",
		dir: "rtl",
	},
};
