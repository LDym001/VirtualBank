import { Form ,Input,Button, message} from 'antd'

const Withdraw = () => {
  const onFinish = () => {}
  const onFinishFailed = () => {}

  return (
    <div>
        <Form 
            // labelAlign={{text-align: justify}}
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 16 }}
            onFinish={onFinish} 
            onFinishFailed={onFinishFailed} 
            style={{marginLeft:300,marginRight:300}}
        >

            <Form.Item 
            label='金&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;额' 
            name="price" 
            rules={[{required:true,message:"请输入取款金额"}]}
                >
                    <Input/>
            </Form.Item>
            <Form.Item 
            label='账&nbsp;&thinsp;户&thinsp;&nbsp;名' 
            name="accountName" 
            rules={[{required:true,message:"请输入账户名"}]}
                >
                    <Input/>
            </Form.Item>
            <Form.Item 
            label='取出卡号' 
            name="cardNumber" 
            rules={[{required:true,message:"请输入卡号"}]}
                >
                    <Input/>
            </Form.Item>
            <Form.Item 
            label='密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码' 
            name="password" 
            rules={[{required:true,message:"请输入密码"}]}
                >
                    <Input/>
            </Form.Item>
            <Form.Item 
            label='备&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注' 
            name="remark" 
                >
                    <Input/>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType='submit' style={{marginLeft:290,width:100}}>确认</Button>
            </Form.Item>
        </Form>
    </div>
  )
}

export default Withdraw