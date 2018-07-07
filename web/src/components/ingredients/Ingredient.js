import React from 'react';

class Ingredient extends React.Component {

	render() {
		return(
			<tr>
				<td>{this.props.data.name}</td>
				<td>{this.props.data.createdAt}</td>
			</tr>
		);
	}

}

export default Ingredient;
