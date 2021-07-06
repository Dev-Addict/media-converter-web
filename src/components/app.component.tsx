import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import {Header} from './main';
import {HomePage} from '../pages';

export const App = () => {
	return (
		<Router>
			<Header />
			<div>
				<Switch>
					<Route path="/" exact>
						<HomePage />
					</Route>
				</Switch>
			</div>
		</Router>
	);
};
