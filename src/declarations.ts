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
		darkGrey: Palette['primary']
		mediumGrey: Palette['primary']
		lightGrey: Palette['primary']
		lightIndigo: Palette['primary']
		darkIndigo: Palette['primary']
		textGrey: Palette['primary']
		white: Palette['primary']
		textPrimary: Palette['primary']
		textSecondary: Palette['primary']
		gradient: Palette['primary']
	}
	interface PaletteOptions {
		darkGrey: PaletteOptions['primary']
		mediumGrey: PaletteOptions['primary']
		lightGrey: PaletteOptions['primary']
		lightIndigo: PaletteOptions['primary']
		darkIndigo: PaletteOptions['primary']
		textGrey: PaletteOptions['primary']
		white: PaletteOptions['primary']
		textPrimary: PaletteOptions['primary']
		textSecondary: PaletteOptions['primary']
		gradient: PaletteOptions['primary']
	}
}
