import React from 'react';
import { Table, Icon } from 'antd';

const IngredientsTable = (props) => {

	const renderBool = (value) => {
		if(value === null) {
			return <Icon type="question" />
		}
		if(value) {
			return <Icon type="check" />
		} else {
			return <Icon type="close" />
		}
	};

	const columns = [{
		title: 'Name',
		dataIndex: 'name'
	}, {
		title: 'Bezugsquelle',
		dataIndex: 'preferredSupplier'
	}, {
		title: 'Basic',
		dataIndex: 'isBasic',
		render: renderBool
	}, {
		title: 'Saison',
		dataIndex: 'season',
		render: value => value.toString()
	}, {
		title: 'Fleisch',
		dataIndex: 'isMeat',
		render: renderBool
	}, {
		title: 'Fisch',
		dataIndex: 'isFish',
		render: renderBool
	}, {
		title: 'Veggie',
		dataIndex: 'isVegetarian',
		render: renderBool
	}, {
		title: 'Vegan',
		dataIndex: 'isVegan',
		render: renderBool
	}, {
		title: 'Lactose',
		dataIndex: 'hasLactose',
		render: renderBool
	}, {
		title: 'Gluten',
		dataIndex: 'hasGluten',
		render: renderBool
	}];

	const data = props.data;

	return(<Table columns={columns} dataSource={data} size="small" bordered />);

};

export default IngredientsTable;
