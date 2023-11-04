import { Avatar, Link, Grid, Box, Typography, Container, Paper } from '@mui/material';
import { AppRegistrationRounded } from '@mui/icons-material';
import SignUpForm from '../components/form/SignUpForm';
import Copyright from '../components/copyright/Copyright';
import translations from '../translations/translations.json';

const SignUpPage = () => {
	return (
		<Container
			maxWidth="xs"
			sx={{
				height: `100vh`,
				display: 'flex',
				justifyContent: 'center',
				flexDirection: 'column',
				alignItems: 'center',
			}}
		>
			<Paper elevation={6} square>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						padding: '3rem',
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
						<AppRegistrationRounded />
					</Avatar>
					<Typography component="h1" variant="h5">
						{translations.cz.signUp}
					</Typography>
					<SignUpForm />
					<Grid container justifyContent="center" marginTop={3}>
						<Grid item>
							<Link href="/" variant="body2">
								{translations.cz.alreadyHaveAccount}
							</Link>
						</Grid>
					</Grid>
					<Copyright />
				</Box>
			</Paper>
		</Container>
	);
};

export default SignUpPage;
