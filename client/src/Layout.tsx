import { StrictMode } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import SignInPage from './pages/SignIn';
import SignUpPage from './pages/SignUp';

const router = createBrowserRouter([
	{
		path: '/',
		element: <SignInPage />,
	},
	{
		path: '/sign-up',
		element: <SignUpPage />,
	}
]);

const Layout = () => {
	return (
		<StrictMode>
			<RouterProvider router={router} />
		</StrictMode>
	);
};

export default Layout;
