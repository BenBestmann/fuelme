import React from 'react';
import axios from 'axios';
import IngredientsTable from './IngredientsTable';

class IngredientsPage extends React.Component {

	constructor() {
		super();
		this.state = {
			ingredients: []
		}
	}

	componentWillMount() {
		this.fetchIngredients();
	}

	fetchIngredients() {
		axios.get('https://fuel-me.herokuapp.com/api/ingredients')
			.then(result => this.setState({ ingredients: result.data }))
			.catch(error => console.log(error));
	}

	render() {
		return (
			<div>
				<h1>Zutaten</h1>
				<IngredientsTable data={this.state.ingredients} />
			</div>
		);
	}

}

export default IngredientsPage;
