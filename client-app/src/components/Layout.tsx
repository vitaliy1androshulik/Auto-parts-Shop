import React from 'react';
import { Layout, Menu, theme } from 'antd';
import {Outlet} from "react-router-dom";

const { Header, Content, Footer } = Layout;

const items = new Array(4).fill(null).map((_, index) => ({
    key: index + 1,
    label: `nav ${index + 1}`,
}));

const App: React.FC = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout>
            <Header style={{ display: 'flex', alignItems: 'center' }}>
                <div className="demo-logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={items}
                    style={{ flex: 1, minWidth: 0 }}
                />
            </Header>
            <Content style={{ padding: '0 48px' }}>
                <div
                    style={{
                        background: colorBgContainer,
                        minHeight: 280,
                        padding: 24,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Outlet/>
                </div>
            </Content>
            <Footer style={{  position: 'fixed', bottom: 0, width: '100%', textAlign: 'center' }}>
                Магазин авто-запчастин ©{new Date().getFullYear()} Створено командою ПД-211
            </Footer>
        </Layout>
    );
};

export default App;