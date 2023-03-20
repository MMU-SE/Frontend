/* eslint-disable unicorn/prevent-abbreviations */

interface ImportMetaEnv {
	VITE_API_BASE_URL: string
	VITE_FIREBASE_API_KEY: string
	VITE_FIREBASE_PROJECT_ID: string
	VITE_FIREBASE_MESSAGING_ID: string
	VITE_FIREBASE_APP_ID: string
	VITE_FIREBASE_SAML_PROVIDER_ID: string
}

interface ImportMeta {
	env: ImportMetaEnv
}
