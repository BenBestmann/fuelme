import React from 'react';
import axios from 'axios';

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

	listIngredients() {
		return this.state.ingredients.map((ingredient) => {
			return <li id={ingredient.id}>{ingredient.name}</li>
		});
	}

	render() {
		return (
			<div>
				<h1>Zutaten</h1>
				<ul>{this.listIngredients()}</ul>
			</div>
		);
	}

}

export default IngredientsPage;
