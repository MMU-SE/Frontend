/* eslint-disable unicorn/filename-case */
/* eslint-disable unicorn/prevent-abbreviations */

/// <reference types="vite/client" />

declare module '@mui/material/styles' {
	interface Palette {
		lightGrey: Palette['primary']
		mediumGrey: Palette['primary']
		darkGrey: Palette['primary']
		yellow: Palette['primary']
		lightBlue: Palette['primary']
		mediumBlue: Palette['primary']
		darkBlue: Palette['primary']
	}
	interface PaletteOptions {
		lightGrey: PaletteOptions['primary']
		mediumGrey: PaletteOptions['primary']
		darkGrey: PaletteOptions['primary']
		yellow: PaletteOptions['primary']
		lightBlue: PaletteOptions['primary']
		mediumBlue: PaletteOptions['primary']
		darkBlue: PaletteOptions['primary']
	}
}

export {}
