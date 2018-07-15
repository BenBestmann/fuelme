import React from 'react';
import axios from 'axios';
import IngredientsTable from './IngredientsTable';
import { Row, Col, Button } from 'antd';

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
				<Row align="top">
					<Col span={20}>
						<h1>Zutaten</h1>
					</Col>
					<Col span={4}>
						<div style={{ float: 'right'}}>
							<Button type="primary" shape="circle" icon="plus" size="large" />
						</div>
					</Col>
				</Row>
				<IngredientsTable data={this.state.ingredients} />
			</div>
		);
	}

}

export default IngredientsPage;
