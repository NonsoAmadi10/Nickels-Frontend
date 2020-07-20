import React from 'react'

import { Layout } from 'antd';


const { Header } = Layout;
function NavBar() {
    return (
        <>
            <Header className="site-layout-sub-header-background" style={{ padding: 0, backgroundColor: '#e6dae6', boxShadow: '1px 30px 23px -10px rgba(194,188,194,1)' }} />
        </>
    )
}


export default NavBar;