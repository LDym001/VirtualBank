import { Button, Divider, Result,Steps } from 'antd';
import React from 'react';
const { Step } = Steps;
const TransferSuc = () => (
  <div>

  <Steps size="small" current={2} style={{marginBottom:60,width:"80%",marginLeft:250,marginTop:40}}>
    <Step title="填写转账信息" />
    <Step title="确认信息" />
    <Step title="转账成功" />
    </Steps>
  <Result
    status="success"
    title="转账成功!"
    subTitle="24小时内到账"
    extra={[
      <Button type="primary" key="console">
       再转一笔
      </Button>,
      <Button key="buy">查看详情</Button>,
    ]}
  />
  </div>
);

export default TransferSuc;