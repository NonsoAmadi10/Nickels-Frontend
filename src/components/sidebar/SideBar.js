import React, { useState, Fragment } from 'react';

import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom'

import { FaWallet } from 'react-icons/fa'
import { GoDashboard } from 'react-icons/go';
import { GiPiggyBank } from 'react-icons/gi';
import { BsCreditCard } from 'react-icons/bs';

const { Sider } = Layout;

function SideBar(props) {
    const [collapsed, setCollapsed] = useState(false);

    const toggle = () => setCollapsed(!collapsed);

    return (
        <Fragment style={{
            boxShadow: "13px 0px 26px 2px rgba(222,222,222,1)"
        }}>
            <Sider collapsible collapsed={collapsed} onCollapse={toggle}>
                <div className="logo text-center p-3">
                    {
                        !collapsed ? <h3 className="navbar-brand brand text-light"> Nickels </h3> : <h3 className="brand text-light">N</h3>
                    }
                </div>
                <Menu theme="dark" defaultSelectedKeys={'/dashboard'} mode="inline">
                    <Menu.Item key="/dashboard" icon={<GoDashboard className="m-2" />}>
                        <Link to="/dashboard">{!collapsed ? <span>Dashboard</span> : ''}</Link>
                    </Menu.Item>
                    <Menu.Item key="/wallet" icon={<FaWallet className="m-2" />}>
                        <Link to="/wallet"> {!collapsed ? <span>Wallet</span> : ''}</Link>
                    </Menu.Item>
                    <Menu.Item key="/savings" icon={<GiPiggyBank className="m-2" />}>
                        <Link to="/savings"> {!collapsed ? <span>Savings</span> : ''}</Link>
                    </Menu.Item>
                    <Menu.Item key="/cards" icon={<BsCreditCard className="m-2" />}>
                        <Link to="/cards"> {!collapsed ? <span>Cards</span> : ''}</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
        </Fragment >
    )
}


export default SideBar;