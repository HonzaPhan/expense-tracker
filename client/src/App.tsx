import { DarkTheme, LightTheme } from './theme';
import { useState } from 'react';
import Layout from './Layout';
import { DarkMode, LightMode } from '@mui/icons-material';
import { Button, CssBaseline, ThemeProvider } from '@mui/material';

const App = () => {
	const [themeState, setThemeState] = useState(LightTheme);

	const toggleTheme = () => {
		setThemeState(themeState === LightTheme ? DarkTheme : LightTheme);
	};

	return (
		<ThemeProvider theme={themeState}>
			<CssBaseline />
			<Layout />
			<Button onClick={toggleTheme} sx={{ position: 'absolute', bottom: 15, left: 15 }} variant="text">
				{themeState === LightTheme ? <DarkMode /> : <LightMode />}
			</Button>
		</ThemeProvider>
	);
};

export default App;
