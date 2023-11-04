import { createTheme } from '@mui/material/styles';

const LightTheme = createTheme({
	palette: {
		primary: {
			main: '#ff9e80',
		},
		secondary: {
			main: '#ff80ab',
		},
		background: {
			default: '#F0F0F0',
			paper: '#FFFFFF',
		},
		text: {
			primary: '#333',
		},
	},
	typography: {
		allVariants: {
			color: 'inherit',
		},
	},
	components: {
		MuiTextField: {
			styleOverrides: {
				root: {
					backgroundColor: 'inherit',
				},
			},
		},
	},
});

const DarkTheme = createTheme({
	palette: {
		primary: {
			main: '#ff9e80',
		},
		secondary: {
			main: '#ff80ab',
		},
		background: {
			default: '#121212',
			paper: '#1E1E1E',
		},
		text: {
			primary: '#FFF',
		},
	},
	typography: {
		allVariants: {
			color: 'inherit',
		},
	},
	components: {
		MuiTextField: {
			styleOverrides: {
				root: {
					backgroundColor: 'inherit',
				},
			},
		},
	},
});

export { LightTheme, DarkTheme };
