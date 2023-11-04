import { Button, Grid, Link, Box, TextField, FormControlLabel, Checkbox } from '@mui/material';

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
				label="Email Address"
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
				label="Password"
				type="password"
				id="password"
				autoComplete="current-password"
				sx={{ color: 'inherit' }}
			/>
			<FormControlLabel control={<Checkbox value="remember" sx={{ color: 'inherit' }} />} label="Remember me" />
			<Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
				Sign In
			</Button>
			<Grid container>
				<Grid item xs>
					<Link href="#" variant="body2">
						Forgot password?
					</Link>
				</Grid>
				<Grid item>
					<Link href="#" variant="body2">
						{"Don't have an account? Sign Up"}
					</Link>
				</Grid>
			</Grid>
		</Box>
	);
};

export default SignInForm;