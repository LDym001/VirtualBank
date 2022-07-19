import { Button, Form, Input, Layout,Steps } from 'antd';
import React,{useState} from 'react';
import { Link, Routes,Route } from 'react-router-dom';
import ComFirm from '../components/ComFirm'
const { Content } = Layout;
const { Step } = Steps;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const FormDetail = () => {

  const [inputData,setInputData] = useState({});
// 付账人名
const payNameHandle = (e) => {
  setInputData(e.target.value);
}
// 付款卡号
const payCardNumerHandle = (e) => {
  setInputData(e.target.value);
}
// 收款人
const receiverHandle = (e) => {
  setInputData(e.target.value);
}
// 收款卡号
const receiverCardNumberHandle = (e) => {
  setInputData(e.target.value);
}
// 交易金额
const transactionAmountHandle = (e) => {
  setInputData(e.target.value);
}
// 备注
const remarkHandle = (e) => {
  setInputData(e.target.value);
}
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log(values);
  };
// 点击下一步，发送数据
const submitHandle = () => {
  console.log(inputData);
}

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Layout>
      <Content
        className="site-layout-background"
      >
        <Steps size="small" current={0} style={{marginBottom:60,width:"80%",marginLeft:30}}>
          <Step title="填写转账信息" />
          <Step title="确认信息" />
          <Step title="转账成功" />
        </Steps>
        
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
          <Form.Item
            name="payName"
            label="付款人名"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input style={{ width: 450 }} onChange={payNameHandle} value={inputData.payName}/>
          </Form.Item>

          <Form.Item
            name="payCardNumer"
            label="付款卡号"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input style={{ width: 450 }} onChange={payCardNumerHandle} value={inputData.payCardNumber}/>
          </Form.Item>

          <Form.Item
            name="receiver"
            label="收款人"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input style={{ width: 450 }} onChange={receiverHandle} value={inputData.receiver}/>
          </Form.Item>
          <Form.Item
            name="receiverCardNumber"
            label="收款卡号"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input style={{ width: 450 }} onChange={receiverCardNumberHandle} value={inputData.receiver}/>
          </Form.Item>
          <Form.Item
            name="transactionAmount"
            label="交易金额"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input style={{ width: 450 }} onChange={transactionAmountHandle} value={inputData.transactionAmount}/>
          </Form.Item>

          <Form.Item name="remark" label="备注">
            <Input style={{ width: 450 }} onChange={remarkHandle} value={inputData.remark}/>
          </Form.Item>
          <Form.Item {...tailLayout}>
            {/* <Button type="primary" htmlType="submit" onChange={submitHandle}>下一步</Button> */}
            <Link to="comfirm"><Button type="primary" htmlType="submit">下一步</Button></Link>
            <Button htmlType="button" onClick={onReset}>
              重置
            </Button>
          </Form.Item>
        </Form>
      </Content>
    </Layout>

  );
};

export default FormDetail;