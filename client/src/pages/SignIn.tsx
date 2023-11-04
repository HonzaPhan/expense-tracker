import { Avatar, Grid, Typography, Box, Paper, Link } from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import SignInForm from '../components/form/SignInForm';
import Copyright from '../components/copyright/Copyright';
import translations from '../translations/translations.json';

const SignInPage = () => {
	return (
		<Grid container component="main" sx={{ height: '100vh' }}>
			<Grid
				item
				xs={false}
				sm={4}
				md={7}
				sx={{
					backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
					backgroundRepeat: 'no-repeat',
					backgroundColor: (t) => (t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900]),
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			/>
			<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
				<Box
					sx={{
						my: 8,
						mx: 4,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Typography component="h1" variant="h4" sx={{ mb: '2rem' }}>
						Expense Tracker
					</Typography>
					<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
						<LockOutlined />
					</Avatar>
					<Typography component="h1" variant="h5">
						{translations.cz.signIn}
					</Typography>
					<SignInForm />
					<Grid container direction="column" justifyContent="center" alignItems="center" spacing={2} marginTop={1}>
						<Grid item xs>
							<Link href="#" variant="body2">
								{translations.cz.forgotPassword}
							</Link>
						</Grid>
						<Grid item>
							<Link href="/sign-up" variant="body2">
								{translations.cz.dontHaveAccount}
							</Link>
						</Grid>
					</Grid>
					<Copyright />
				</Box>
			</Grid>
		</Grid>
	);
};

export default SignInPage;
