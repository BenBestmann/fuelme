import React from 'react';
import axios from 'axios';

class RecipesPage extends React.Component {

	constructor() {
		super();
		this.state = {
			recipes: []
		}
	}

	componentWillMount() {
		this.fetchIngredients();
	}

	fetchIngredients() {
		axios.get('https://fuel-me.herokuapp.com/api/recipes')
			.then(result => this.setState({ recipes: result.data }))
			.catch(error => console.log(error));
	}

	listRecipes() {
		return this.state.recipes.map((recipe) => {
			return <li id={recipe.id}>{recipe.name}</li>
		});
	}

	render() {
		return (
			<div>
				<h1>Rezepte</h1>
				<ul>{this.listRecipes()}</ul>
			</div>
		);
	}

}

export default RecipesPage;
