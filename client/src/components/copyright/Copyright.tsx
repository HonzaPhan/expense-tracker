import { Link, Typography } from "@mui/material";

const Copyright = () => {
	return (
		<Typography variant="body2" align="center" sx={{ mt: `5rem` }}>
			{'Copyright © '}
			<Link color="inherit" href="#">
				Your Website
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

export default Copyright