import React, { Component } from 'react'
import { Button, Form, Input, message } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import logo from '../assets/logo.png'
import loginregbg from '../assets/loginregbg.png'
import './Login.less'
import { loginReg } from '../api/index'

export default class Login extends Component {
    render() {
        const onFinish = async (values) => {
            let loginObj = {
                name: values.username,
                password: values.password,
            }
            const result = await loginReg(loginObj)
            const { code } = result
            if (code !== 1000) {
                return message.error('用户名或密码错误！', 1);
            } else if (code === 1000) {
                const key = 'success';
                message.loading({ content: '登录中...', key });
                setTimeout(() => {
                    message.success({ content: '登录成功!', key, duration: 2 });
                }, 500);
            }

        };

        return (
            <div className='login'>
                <img className='loginregbg' src={loginregbg} alt="" />
                <div className='login_box'>
                    <div className='main'>
                        <img src={logo} alt="" />
                        <Form
                            name="basic"
                            wrapperCol={{
                                span: 22,
                            }}
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                            autoComplete="off"
                        >
                            <Form.Item className='formitem'
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: '请输入用户名',
                                    }, {
                                        min: 3,
                                        max: 12,
                                        message: '用户名长度在 5 到 12 个字符'
                                    },
                                    {
                                        pattern: /^\w+$/,
                                        message: '用户名必须由字母、数字或下划线组成'
                                    }
                                ]}
                            >
                                <Input size='large' placeholder='请输入用户名' prefix={<UserOutlined className="site-form-item-icon" />} />
                            </Form.Item>

                            <Form.Item className='formitem'
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: '请输入密码',
                                    }, {
                                        min: 6,
                                        max: 12,
                                        message: '密码长度为6~12位'
                                    }, {
                                        pattern: /^\w+$/,
                                        message: '密码必须由字母、数字或下划线组成'
                                    }
                                ]}
                            >
                                <Input.Password size='large' placeholder='请输入密码' prefix={<LockOutlined className="site-form-item-icon" />} />
                            </Form.Item>
                            <Form.Item className='formitem'>
                                <Link to='/register'>还没账号？立即注册</Link>
                            </Form.Item>

                            <Form.Item className='formitem'>
                                <Button size='large' type="primary" htmlType="submit" block>
                                    登录
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}
