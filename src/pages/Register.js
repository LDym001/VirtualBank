import React from 'react'
import { Button, Form, Input, message } from 'antd';
import { Link, useNavigate } from "react-router-dom";
import logo from '../assets/logo.png'
import loginregbg from '../assets/loginregbg.png'
import { reqReg } from '../api/index'
import './Register.less'


export default function Register() {
    const navigate = useNavigate()
    const onFinish = async (values) => {
        let regObj = {
            name: values.username,
            password: values.password,
            phone: values.phonenum
        };
        const result = await reqReg(regObj)
        const { code } = result
        if (code !== 1000) {
            return message.error('注册失败！', 2);
        } else if (code === 1000) {
            message.success('注册成功，3秒后自动跳转到登录页！', 2);
            setTimeout(() => {
                navigate('/login')
            }, 3000)
        }

    }

    return (
        <div className='register'>
            <img className='loginregbg' src={loginregbg} alt="" />
            <div className='reg_box'>
                <div className='main'>
                    <img src={logo} alt="" />
                    <Form className='formitem'
                        name="basic"
                        labelCol={{ span: 4 }}
                        wrapperCol={{ span: 18 }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="用户名"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: '用户名不能为空',
                                },
                                {
                                    min: 5,
                                    max: 12,
                                    message: '用户名长度在 5 到 12 个字符'
                                },
                                {
                                    pattern: /^\w+$/,
                                    message: '用户名必须由字母、数字或下划线组成'
                                }
                            ]}
                        >
                            <Input size='large' />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            label="密码"
                            rules={[
                                {
                                    required: true,
                                    message: '密码不能为空',
                                },
                                {
                                    validator: (_, value) => {
                                        if (!value) {
                                            return Promise.reject(new Error('密码不能为空'))
                                        } else if (value.length < 6 || value.length > 12) {
                                            return Promise.reject(new Error('密码长度为6~12位'))
                                        } else if (!(/^\w+$/).test(value)) {
                                            return Promise.reject(new Error('密码必须由字母、数字或下划线组成'))
                                        }
                                        else {
                                            return Promise.resolve()
                                        }
                                    }
                                },
                            ]}
                        >
                            <Input.Password size='large' />
                        </Form.Item>
                        <Form.Item
                            name="confirm"
                            label="确认密码"
                            dependencies={['password']}
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: '再次确认密码',
                                },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }

                                        return Promise.reject(new Error('两次密码不一致'));
                                    },
                                }),
                            ]}
                        >
                            <Input.Password size='large' />

                        </Form.Item>
                        <Form.Item
                            name="phonenum"
                            label="手机号码"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入手机号码',
                                }, {
                                    pattern: /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/,
                                    message: '请输入正确的手机号'
                                }
                            ]}
                        >
                            <Input size='large' />
                        </Form.Item>
                        <Form.Item>
                            <Link to='/login'>已有账号？去登录</Link>
                        </Form.Item>

                        <Form.Item wrapperCol={{ span: 22 }}>

                            <Button size='large' type="primary" htmlType="submit" block>
                                立即注册
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    )

}

// export default class Register extends Component {
//     render() {
//         const onFinish = async (values) => {
//             let regObj = {
//                 username: values.username,
//                 password: values.password,
//                 nickname: values.realname,
//                 phonenum: values.phonenum,
//                 rolename: '住户'
//             };
//             const result = await reqReg(regObj)
//             const { status } = result
//             if (status !== 0) {
//                 return message.error('注册失败！', 2);
//             } else if (status === 0) {

//                 message.success('注册成功，3秒后自动跳转到登录页！', 2);
//                 setTimeout(function () {
//                     useNavigate('/login')
//                 }, 3)
//                 return
//             }

//         }

//         return (
//             <div className='register'>
//                 <img className='loginregbg' src={loginregbg} alt="" />
//                 <div className='reg_box'>
//                     <div className='main'>
//                         <img src={logo} alt="" />
//                         <Form className='formitem'
//                             name="basic"
//                             labelCol={{ span: 4 }}
//                             wrapperCol={{ span: 18 }}
//                             initialValues={{
//                                 remember: true,
//                             }}
//                             onFinish={onFinish}
//                             autoComplete="off"
//                         >
//                             <Form.Item
//                                 label="用户名"
//                                 name="username"
//                                 rules={[
//                                     {
//                                         required: true,
//                                         message: '用户名不能为空',
//                                     },
//                                     {
//                                         min: 5,
//                                         max: 12,
//                                         message: '用户名长度在 5 到 12 个字符'
//                                     },
//                                     {
//                                         pattern: /^\w+$/,
//                                         message: '用户名必须由字母、数字或下划线组成'
//                                     }
//                                 ]}
//                             >
//                                 <Input size='large' />
//                             </Form.Item>

//                             <Form.Item
//                                 name="password"
//                                 label="密码"
//                                 rules={[
//                                     {
//                                         validator: (_, value) => {
//                                             if (!value) {
//                                                 return Promise.reject(new Error('密码不能为空'))
//                                             } else if (value.length < 6 || value.length > 12) {
//                                                 return Promise.reject(new Error('密码长度为6~12位'))
//                                             } else if (!(/^\w+$/).test(value)) {
//                                                 return Promise.reject(new Error('密码必须由字母、数字或下划线组成'))
//                                             }
//                                             else {
//                                                 return Promise.resolve()
//                                             }
//                                         }
//                                     },
//                                 ]}
//                             >
//                                 <Input.Password size='large' />
//                             </Form.Item>
//                             <Form.Item
//                                 name="confirm"
//                                 label="确认密码"
//                                 dependencies={['password']}
//                                 hasFeedback
//                                 rules={[
//                                     {
//                                         required: true,
//                                         message: '再次确认密码',
//                                     },
//                                     ({ getFieldValue }) => ({
//                                         validator(_, value) {
//                                             if (!value || getFieldValue('password') === value) {
//                                                 return Promise.resolve();
//                                             }

//                                             return Promise.reject(new Error('两次密码不一致'));
//                                         },
//                                     }),
//                                 ]}
//                             >
//                                 <Input.Password size='large' />

//                             </Form.Item>
//                             <Form.Item
//                                 label="真实姓名"
//                                 name="realname"
//                                 rules={[
//                                     {
//                                         required: true,
//                                         message: '不能为空',
//                                     },
//                                 ]}
//                             >
//                                 <Input size='large' />
//                             </Form.Item>
//                             <Form.Item
//                                 name="phonenum"
//                                 label="手机号码"
//                                 rules={[
//                                     {
//                                         required: true,
//                                         message: '请输入手机号码',
//                                     }, {
//                                         pattern: /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/,
//                                         message: '请输入正确的手机号'
//                                     }
//                                 ]}
//                             >
//                                 <Input size='large' />
//                             </Form.Item>
//                             <Form.Item>
//                                 <Link to='/login'>已有账号？去登录</Link>
//                             </Form.Item>

//                             <Form.Item wrapperCol={{ span: 22 }}>

//                                 <Button size='large' type="primary" htmlType="submit" block>
//                                     立即注册
//                                 </Button>
//                             </Form.Item>
//                         </Form>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

