import { Button, Descriptions,Input,Form,Space,Steps} from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Comfirm = () => {
  const [size, setSize] = useState('default');

  const onChange = (e) => {
    console.log('size checked', e.target.value);
    setSize(e.target.value);
  };
  const { Step } = Steps;
  return (
    <div>
     <div style={{marginLeft:80}}>
     <Steps size="small" current={1} style={{marginBottom:60,width:"80%",marginLeft:10}}>
    <Step title="填写转账信息" />
    <Step title="确认信息" />
    <Step title="转账成功" />
    </Steps>
      <Descriptions
        bordered
        title="确认转账信息"
        size={size}
        style={{width:500}}
      >
        <Descriptions.Item label="付款人">张三</Descriptions.Item>
        <Descriptions.Item label="收款人">李四</Descriptions.Item>
       
      </Descriptions>
      <Descriptions
        bordered
        size={size}
        style={{width:500}}
      >
        <Descriptions.Item label="收款账号">66111111</Descriptions.Item>
        <Descriptions.Item label="转账金额">￥8000.00</Descriptions.Item>
     </Descriptions> 

     <Space direction="vertical">
    请输入支付密码：
    <Input.Password
      placeholder="input password"
      iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
    />
  </Space>
     <Form>
        <Link to="/client/transfer/transfersuc"><Button type="primary" htmlType="submit">
          确认转账
        </Button>
        </Link>
        <Button htmlType="button">
         返回上一页
        </Button>
        </Form>
        </div>
    </div>
  );
};

export default Comfirm;