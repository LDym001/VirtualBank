import { Form ,Input,Button, message} from 'antd'

const Deposit = () => {
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
            rules={[{required:true,message:"请输入存款金额"}]}
            >
              <Input/>
            </Form.Item>
            <Form.Item 
            label='存入卡号' 
            name="cardNumber" 
            rules={[{required:true,message:"请输入卡号"}]}
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

export default Deposit