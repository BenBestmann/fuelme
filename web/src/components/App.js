import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, browserHistory } from 'react-router-dom';
import IngredientsPage from './ingredients/IngredientsPage';

const Home = () => {
	return (<h1>Welcome Home</h1>);
};

const RecipesBox = () => {
	return (<h1>Rezepte verwalten</h1>)
};

class App extends React.Component {

	render() {
		return (
			<Router history={ browserHistory }>
				<div>
					<div>
						<Link to="/">Home</Link>&nbsp;
						<Link to="/rezepte">Rezepte</Link>&nbsp;
						<Link to="/zutaten">Zutaten</Link>
					</div>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/rezepte" component={RecipesBox} />
						<Route path="/zutaten" component={IngredientsPage} />
					</Switch>
				</div>
			</Router>
		);
	}

}

export default App;
