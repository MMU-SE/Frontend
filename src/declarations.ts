/* eslint-disable unicorn/filename-case */
/* eslint-disable unicorn/prevent-abbreviations */

/// <reference types="vite/client" />

declare module '@mui/material/styles' {
	interface Palette {
		black: Palette['primary']
		orange: Palette['primary']
		lightBlue: Palette['primary']
		darkBlue: Palette['primary']
		magenta: Palette['primary']
		beige: Palette['primary']
		white: Palette['primary']
		darkGrey: Palette['primary']
		mediumGrey: Palette['primary']
		lightGrey: Palette['primary']
	}
	interface PaletteOptions {
		black: PaletteOptions['primary']
		orange: PaletteOptions['primary']
		lightBlue: PaletteOptions['primary']
		darkBlue: PaletteOptions['primary']
		magenta: PaletteOptions['primary']
		beige: PaletteOptions['primary']
		white: PaletteOptions['primary']
		darkGrey: PaletteOptions['primary']
		mediumGrey: PaletteOptions['primary']
		lightGrey: PaletteOptions['primary']
	}
}

export {}
