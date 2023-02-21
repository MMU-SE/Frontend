/* eslint-disable unicorn/filename-case */
/* eslint-disable unicorn/prevent-abbreviations */

/// <reference types="vite/client" />

declare global {
	interface Window {
		mswStart: () => void
		mswStop: () => void
	}
}

export {}
