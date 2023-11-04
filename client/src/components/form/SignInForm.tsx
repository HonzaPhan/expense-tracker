import { Button, Box, TextField, FormControlLabel, Checkbox } from '@mui/material';
import translations from '../../translations/translations.json';

const SignInForm = () => {
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		console.log({
			email: data.get('email'),
			password: data.get('password'),
		});
	};

	return (
		<Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
			<TextField
				margin="normal"
				required
				fullWidth
				id="email"
				label={translations.cz.email}
				name="email"
				autoComplete="email"
				autoFocus
				sx={{ color: 'inherit' }}
			/>
			<TextField
				margin="normal"
				required
				fullWidth
				name="password"
				label={translations.cz.password}
				type="password"
				id="password"
				autoComplete="current-password"
				sx={{ color: 'inherit' }}
			/>
			<FormControlLabel control={<Checkbox value="remember" sx={{ color: 'inherit' }} />} label={translations.cz.rememberMe} />
			<Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
				{translations.cz.signIn}
			</Button>
		</Box>
	);
};

export default SignInForm;
