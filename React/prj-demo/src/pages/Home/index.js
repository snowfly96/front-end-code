import React, { useState } from 'react'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons'
import { Layout, Menu, Button, theme } from 'antd'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './index.css'

const { Header, Sider, Content } = Layout
const Home = () => {
    const [collapsed, setCollapsed] = useState(false)
    const [selectedKey, setSelectedKey] = useState('todolist')
    const navigate = useNavigate()
    const {
        token: { colorBgContainer },
    } = theme.useToken()

    const onClickMenu = (e) => {
        setSelectedKey(e.key)
        navigate('/home/' + e.key)
    }
    return (
        <Layout className='home-layout'>
            <Sider trigger={null} collapsible collapsed={collapsed} theme='light'>
                <div className="demo-logo-vertical" />
                <Menu
                    theme="light"
                    mode="inline"
                    defaultSelectedKeys={['todolist']}
                    onClick={onClickMenu}
                    selectedKeys={[selectedKey]}
                    items={[
                        {
                            key: 'todolist',
                            icon: <UserOutlined />,
                            label: '任务列表',
                        },
                        {
                            key: 'clock',
                            icon: <VideoCameraOutlined />,
                            label: '倒计时',
                        },
                        {
                            key: 'watch',
                            icon: <UploadOutlined />,
                            label: '高性能秒表',
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                            float: 'left'
                        }}
                    />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    <Outlet></Outlet>
                </Content>
            </Layout>
        </Layout>
    )
}
export default Home