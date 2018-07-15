import React from 'react';
import axios from 'axios';
import { List, Avatar } from 'antd';

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
				<List
					size="large"
					header={<div>Header</div>}
					pagination={{
						onChange: (page) => {
							console.log(page);
						},
						pageSize: 10,
					}}
					dataSource={this.state.recipes}
					renderItem={item => (
						<List.Item>
							<List.Item.Meta
								avatar={<Avatar src={item.pictureUrl} />}
								title={<a href="https://ant.design">{item.name}</a>}
								description={item.prepInstructions}
							/>
						</List.Item>
					)}
				/>
			</div>
		);
	}

}

export default RecipesPage;
