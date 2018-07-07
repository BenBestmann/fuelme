import React from 'react';
import { Table, Icon } from 'antd';

const IngredientsTable = (props) => {

	const renderBool = (value) => {
		if(value) {
			return <Icon type="check" />
		} else {
			return <Icon type="close" />
		}
	};

	const renderArray = (value) => {
		if(value && Array.isArray(value)) {
			return value.toString();
		}
	};

	const columns = [{
		title: 'Name',
		dataIndex: 'name'
	}, {
		title: 'Kategorie',
		dataIndex: 'category'
	}, {
		title: 'Saison',
		dataIndex: 'season',
		render: renderArray
	}, {
		title: 'Bezugsquelle',
		dataIndex: 'preferredSupplier'
	}, {
		title: 'Tags',
		dataIndex: 'tags',
		render: renderArray
	}, {
		title: 'Basic',
		dataIndex: 'isBasic',
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
