import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Layout, Menu, Icon, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import Logout from '../Admins/Logout';

const { Header, Sider, Content, Footer } = Layout;
const PUBLIC_URL = process.env.PUBLIC_URL;
class GlobalLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSpreadByToggle: false,
        }
    }

    setCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ isSpreadByToggle: !collapsed });
    };

    render() {
        const url = this.props.history.location.pathname;
        const firstPartUrl = url.split('/')[1];
        const { isSpreadByToggle } = this.state;

        return (
            <Layout id="global-layout" style={{ minHeight: '100vh' }}>
                <Sider
                    className={`global-layout__sider ${isSpreadByToggle ? "sider-spread" : null}`}
                    breakpoint="lg"
                    collapsedWidth="0"
                    onCollapse={(collapsed, type) => {
                        if (type === 'clickTrigger') {
                            this.setCollapse(collapsed);
                        }
                    }}
                >
                    <div className="logo">
                        <img src={`${PUBLIC_URL}/logo.png`} alt="logo" />
                    </div>
                    <Menu theme="light" defaultSelectedKeys={['home']} selectedKeys={[firstPartUrl] || ['home']}>
                        <Menu.Item key="home">
                            <Link to='/home'>
                                <Icon type='pie-chart' />
                                <span>Home</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="customers">
                            <Link to='/customers'>
                                <Icon type="usergroup-add" />
                                <span>Customer</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="businesses">
                            <Link to='/businesses'>
                                <Icon type="tool" />
                                <span>Business</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="orders">
                            <Link to='/orders'>
                                <Icon type="container" />
                                <span>Order</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="categories">
                            <Link to='/categories'>
                                <Icon type="switcher" />
                                <span>Category</span>
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Sider >
                <Layout>
                    <Header className={`global-layout__header ${isSpreadByToggle ? "layout-mask" : null}`}>
                        <Row type="flex" justify="start" align="middle" gutter={8}>
                            <Col span={12} md={16} style={{ textAlign: "left" }}>
                                <h4>JR CMS</h4>
                            </Col>
                            <Col span={12} md={8} style={{ textAlign: "right" }}>
                                <div className="global-layout__header__container">
                                    <div className="global-layout__header__item">
                                        <Logout />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Header>
                    <Content className={`global-layout__content ${isSpreadByToggle ? "layout-mask" : null}`}>
                        {this.props.children}
                    </Content>
                    <Footer className={`global-layout__footer ${isSpreadByToggle ? "layout-mask" : null}`}>
                        JR Handyman CMS by Leo
                        </Footer>
                </Layout>
            </Layout >
        )
    }
}

export default withRouter(GlobalLayout);