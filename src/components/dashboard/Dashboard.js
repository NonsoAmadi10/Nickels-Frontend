/*eslint-disable*/
import React from 'react'
import { Layout, Card, Progress, Divider, Row, Col } from 'antd';
import SideBar from '../sidebar/SideBar';
import { connect } from 'react-redux';
import Balance from '../commons/Balance';
import VirtualCard from '../commons/Card';
import { getWallet } from '../../actions/wallets/walletActions';

const { Content, Footer } = Layout;

class Dashboard extends React.Component {

	state = {
		loading: true,
	};

	async componentDidMount() {
		setTimeout(() => this.setState({ loading: false }), 3000);
		await this.props.getWallet()
	}

	render() {

		const { loading } = this.state;
		const style = { background: '#0092ff', padding: '8px 0' };
		return (

			<Layout >
				<SideBar active={['1']} />
				<Layout className="site-layout">
					<Content style={{ margin: "10px", minHeight: '100vh', backgroundColor: 'inherit' }}>

						<div className="p-3">
							<h4 className="fine-text"> Overview </h4>

							<hr className="w-100" />
						</div>

						<div>

							<Balance />
						</div>

					</Content>
					<Footer style={{ textAlign: 'center' }}>Nickels ©2020 Created by Houdini</Footer>
				</Layout>
			</Layout>

		);
	}
}

export default connect(null, { getWallet })(Dashboard);