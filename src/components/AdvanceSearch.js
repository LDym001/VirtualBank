import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row, Select } from 'antd';
import React, { useState } from 'react';
import './AdvanceSearch.css'
const { Option } = Select;

const AdvanceSearch = (props) => {
    const [expand, setExpand] = useState(false);
    const [form] = Form.useForm();
    function getItem(label, key, name) {
        return {
        key,
        label,
        name,
        };
    }
    const items3=[
        getItem('收款人', '1', 'receiver'),
        getItem('交易类型', '2', 'deal_type' ),
        getItem('卡号', '3' ,'card-number'),
        getItem('付款人', '4', 'pay_name'),
        getItem('交易状态', '5', 'status'),
        getItem('备注', '6' , 'remark'),
    ]
    const getFields = () => {
    const count = expand ? 6 : 3;
    const children = [];
    const labelArr = items3.map(item => {
        return item.label
    })
    const nameArr = items3.map(item => {
        return item.name
    })

    for (let i = 0; i < count; i++) {
      children.push(
        <Col span={8} key={i}>
          <Form.Item
            name={`${nameArr[i]}`}
            label={`${labelArr[i]}`}
          >
            
            { i === 1 ?(
              <Select >
                <Option value="0">充值</Option>
                <Option value="1">提现</Option>
                <Option value="2">转账</Option>
              </Select>
            ): i % 3 !== 1 ? (
              <Input placeholder="请输入" />
            ) : (
              <Select >
                <Option value="0">成功</Option>
                <Option value="1">
                  失败
                </Option>
              </Select>
            )}
          </Form.Item>
         </Col>,        
      );
    }

    return children;
  };

  

    const onFinish = (values) => {
        // console.log('Received values of form: ', values);
        props.onSearch(values);
        
    };

  return (
    <Form
      form={form}
      name="advanced_search"
      className="ant-advanced-search-form"
      onFinish={onFinish}
    >
      <Row gutter={24}>{getFields()}</Row>
      <Row>
        <Col
          span={24}
          style={{
            textAlign: 'right',
          }}
        >
          <Button type="primary" htmlType="submit">
            查询
          </Button>
          <Button
            style={{
              margin: '0 8px',
            }}
            onClick={() => {
              form.resetFields();
            }}
          >
            重置
          </Button>
          <a style={{fontSize: 12}}
            onClick={() => {
              setExpand(!expand);
            }}
          >
            {expand ? <UpOutlined /> : <DownOutlined />} 
            {expand ? '收起' : '展开'} 
          </a>
        </Col>
      </Row>
    </Form>
  );
};


export default AdvanceSearch;