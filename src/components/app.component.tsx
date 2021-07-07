import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {HomePage, NotFoundPage} from '../pages';
import {Header} from './main';
import {MediasProvider} from './contexts';

export const App = () => {
	return (
		<MediasProvider>
			<Router>
				<Header />
				<div>
					<Switch>
						<Route path="/" exact>
							<HomePage />
						</Route>
						<Route path="/">
							<NotFoundPage />
						</Route>
					</Switch>
				</div>
			</Router>
		</MediasProvider>
	);
};
