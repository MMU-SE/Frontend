/* eslint-disable unicorn/prevent-abbreviations */

interface ImportMetaEnv {
	VITE_AUTH0_DOMAIN: string
	VITE_AUTH0_CLIENT_ID: string
	VITE_AUTH0_CALLBACK_URL: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
