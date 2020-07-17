import React from 'react';

import { Layout, Menu } from 'antd';
import { DollarOutlined, UserOutlined, CreditCardOutlined, RotateRightOutlined } from '@ant-design/icons';

const { Sider } = Layout;

function SideBar() {
    return (
        <>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={broken => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}

                className="shadow"
            >
                <div className="m-3 text-center logo brand text-light"> Nickels </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} className="d-flex flex-column justify-content-center ">
                    <hr className="w-100 bg-light" />
                    <Menu.Item key="1" icon={<UserOutlined />} >
                        Dashboard
                    </Menu.Item>
                    <hr className="w-100 bg-light" />
                    <Menu.Item key="2" icon={<CreditCardOutlined />}>
                        Wallet
</Menu.Item>
                    <hr className="w-100 bg-light" />
                    <Menu.Item key="3" icon={<DollarOutlined />}>
                        Savings
                    </Menu.Item>
                    <hr className="w-100 bg-light" />
                    <Menu.Item key="4" icon={<RotateRightOutlined />} >
                        Transactions
                    </Menu.Item>
                    <hr className="w-100 bg-light" />
                </Menu>
            </Sider>
        </>
    )
}


export default SideBar;