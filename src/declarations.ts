/* eslint-disable unicorn/filename-case */
/* eslint-disable unicorn/prevent-abbreviations */

/// <reference types="vite/client" />

import 'i18next'
import type { defaultNS, resources } from 'locales'

declare module 'i18next' {
	// Extend the i18next types for autocomplete
	interface CustomTypeOptions {
		defaultNS: typeof defaultNS
		resources: (typeof resources)['en']
	}
}

declare module '@mui/material/styles' {
	interface Palette {
		lightGrey: Palette['primary']
		mediumGrey: Palette['primary']
		darkGrey: Palette['primary']
		yellow: Palette['primary']
		lightBlue: Palette['primary']
		mediumBlue: Palette['primary']
		darkBlue: Palette['primary']
		lightText: Palette['primary']
	}
	interface PaletteOptions {
		lightGrey: PaletteOptions['primary']
		mediumGrey: PaletteOptions['primary']
		darkGrey: PaletteOptions['primary']
		yellow: PaletteOptions['primary']
		lightBlue: PaletteOptions['primary']
		mediumBlue: PaletteOptions['primary']
		darkBlue: PaletteOptions['primary']
		lightText: PaletteOptions['primary']
	}
}
