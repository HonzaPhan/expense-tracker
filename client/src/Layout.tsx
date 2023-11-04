import { StrictMode } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import SignInPage from './pages/SignIn';

const router = createBrowserRouter([
	{
		path: '/',
		element: <SignInPage />,
	},
]);

const Layout = () => {
	return (
		<StrictMode>
			<RouterProvider router={router} />
		</StrictMode>
	);
};

export default Layout;
