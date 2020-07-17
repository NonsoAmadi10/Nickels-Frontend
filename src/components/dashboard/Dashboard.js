/*eslint-disable*/
import React from 'react'
import { Layout, Card, Progress } from 'antd';
import SideBar from '../sidebar/SideBar';
import NavBar from './NavBar';
import { Container, Row, Col } from 'reactstrap';
import { DollarOutlined, UserOutlined, CreditCardOutlined, RotateRightOutlined } from '@ant-design/icons';

const { Content, Footer } = Layout;

class Dashboard extends React.Component {

	state = {
		loading: true,
	};

	componentDidMount() {
		setTimeout(() => this.setState({ loading: false }), 3000)
	}

	render() {

		const { loading } = this.state;
		return (

			<Layout >
				<SideBar />
				<Layout>
					<NavBar />
					<Content style={{ margin: '24px', height: '100vh', backgroundColor: '#fdfdfd' }}>
						<Container>
							<Row>
								<Col xs="12" md="4" className="m-sm-2">
									<Card title="Card title" bordered={false} loading={loading} className="shadow">
										Card content
						  </Card>
								</Col>
								<Col sm="12" md="4" className="m-sm-2">
									<Card title="Card title" bordered={false} loading={loading} className="shadow">
										Card content
						  </Card>
								</Col>
								<Col sm="12" md="4" className="m-sm-2">
									<Card title="Card title" bordered={true} loading={loading} className="shadow d-flex align-items-center justify-content-center flex-column rounded">
										<Progress type="circle" percent={30} width={80} />
									</Card>
								</Col>
							</Row>
						</Container>
					</Content>
					<Footer style={{ textAlign: 'center' }}>Nickels ©2020 Created by Houdini</Footer>
				</Layout>
			</Layout>

		);
	}
}

export default Dashboard;