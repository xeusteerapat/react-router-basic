import React, { Component } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

const demoTopLogo = {
  width: '120px',
  height: '31px',
  background: 'rgba(255, 255, 255, 0.2)',
  margin: '16px 24px 16px 0',
  float: 'left'
};

export default class LogIn extends Component {
  onFinish = values => {
    console.log('Received values of form: ', values);
  };
  render() {
    return (
      <div>
        <h1>My Blog</h1>
        <div>
          <Layout className="layout" style={{ margin: '0 auto' }}>
            <Header>
              <div style={demoTopLogo} />
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">
                  <Link to="/resume">Resume</Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="/login">Log in</Link>
                </Menu.Item>
                <Menu.Item key="3">About</Menu.Item>
                <Menu.Item key="4">Contact</Menu.Item>
              </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <Form
                name="normal_login"
                style={{ maxWidth: '400px', margin: '0 auto' }}
                initialValues={{
                  remember: true
                }}
                onFinish={this.onFinish}
              >
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Username!'
                    }
                  ]}
                >
                  <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Username"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Password!'
                    }
                  ]}
                >
                  <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Item>
                <Form.Item>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item>

                  <a style={{ float: 'right' }} href="">
                    Forgot password
                  </a>
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{ width: '100%' }}
                  >
                    Log in
                  </Button>
                  Or <a href="">register now!</a>
                </Form.Item>
              </Form>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Copy right ©2020 Created Teerapat
            </Footer>
          </Layout>
        </div>
      </div>
    );
  }
}
