import { Button, TextField, Box } from '@mui/material';
import translations from '../../translations/translations.json';

const SignUpForm = () => {
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		console.log({
			email: data.get('email'),
			password: data.get('password'),
		});
	};

	return (
		<Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
			<TextField
				margin="normal"
				autoFocus
				required
				fullWidth
				id="userName"
				label={translations.cz.username}
				name="userName"
				autoComplete="off"
				sx={{ color: 'inherit' }}
			/>
			<TextField
				margin="normal"
				required
				fullWidth
				id="email"
				label={translations.cz.email}
				name="email"
				autoComplete="email"
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
				autoComplete="new-password"
				sx={{ color: 'inherit' }}
			/>
			<Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
				{translations.cz.signUp}
			</Button>
		</Box>
	);
};

export default SignUpForm;
