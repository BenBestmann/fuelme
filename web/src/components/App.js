import React from 'react';
import { BrowserRouter as Router, Switch, browserHistory } from 'react-router-dom';
import AppLayout from '../layouts/AppLayout';
import IngredientsPage from './ingredients/IngredientsPage';
import RecipesPage from './recipes/RecipesPage';
import AppRoute from '../common/AppRoute';

const Home = () => {
	return (<h1>Welcome Home</h1>);
};

class App extends React.Component {

	render() {
		return (
			<Router history={ browserHistory }>
				<Switch>
					<AppRoute exact path="/" layout={AppLayout} component={Home} />
					<AppRoute path="/rezepte" layout={AppLayout} component={RecipesPage} />
					<AppRoute path="/zutaten" layout={AppLayout} component={IngredientsPage} />
				</Switch>
			</Router>
		);
	}

}

export default App;
