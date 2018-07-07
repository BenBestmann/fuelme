import React from 'react';
import { Route } from 'react-router-dom';

// Inspired by: https://gist.github.com/avinmathew/e82fe7e757b20cb337d5219e0ab8dc2c#file-index-jsx
const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
	<Route {...rest} render={props => (
		<Layout>
			<Component {...props} />
		</Layout>
	)} />
);

export default AppRoute;
