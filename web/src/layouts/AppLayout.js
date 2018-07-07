import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon, Avatar } from 'antd';
const { Header, Content, Footer } = Layout;

class AppLayout extends React.Component {

	render() {
		return(
			<Layout className="layout">

				<Header style={{ width: '100%' }}>
					<div className="logo" />
					<Menu theme="dark" mode="horizontal" selectedKeys={[this.context]} style={{ lineHeight: '64px' }}>
						<Menu.Item><Link to="/"><Icon type="home" />Home</Link></Menu.Item>
						<Menu.Item><Link to="/rezepte"><Icon type="book" />Rezepte</Link></Menu.Item>
						<Menu.Item><Link to="/zutaten"><Icon type="filter" />Zutaten</Link></Menu.Item>
					</Menu>
				</Header>

				<Content style={{ padding: '0 50px', marginTop: '20px'}}>
					<div style={{ background: '#fff', padding: 24, minHeight: 280 }}>{ this.props.children }</div>
				</Content>

				<Footer style={{ textAlign: 'right' }}></Footer>
			</Layout>
		);
	}

};

export default AppLayout;
