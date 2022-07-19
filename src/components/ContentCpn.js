import { Button, Form, Input, Layout, Table, Space, Modal } from 'antd';
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import React, {useState} from 'react';
const {Content} = Layout


export default function ContentCpn() {
  
  const formRef = React.createRef()
  const columns = [
    {
      title: '应用id',
      dataIndex: 'pgId',
      key: 'pgId',
    },
    {
      title: '应用名称(中文)',
      dataIndex: 'pgNameC',
      key: 'pgNameC',
    },
    {
      title: '应用图标',
      dataIndex: 'pgIcon',
      key: 'pgIcon',
    },
    {
      title: '应用名称(英文)',
      dataIndex: 'pgNameE',
      key: 'pgNameE',
    },
    {
      title: '应用路径',
      dataIndex: 'pgPath',
      key: 'pgPath',
    },
    {
      title: '应用入口',
      dataIndex: 'pgAccess',
      key: 'pgAccess',
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
    },
    {
      title: '应用描述',
      dataIndex: 'pgDesc',
      key: 'pgDesc',
    },
    {
      title: '操作',
      dataIndex: 'operate',
      key: 'operate',
      render: (a, b, index) => (
        <Space size="middle">
            <>
              <Button type="primary" size='small' onClick={() => showModal(b,index)}>
                <span className='change-span'>修改</span>
              </Button>
              <Modal title="修改"
                index={index}
                forceRender={true}
                visible={isMdVisible} 
                onOk={handleOk2} onCancel={handleCancel2}>
                <Form {...layout} ref={formRef} form={form} name="editer-hooks">
                  <Form.Item
                    name="pgId"
                    label="ID"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input disabled="true"/>
                  </Form.Item>
                  <Form.Item
                      name="pgNameC"
                      label="名称"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                    <Input/>
                  </Form.Item>
                  <Form.Item
                      name="pgDesc"
                      label="描述"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                    <Input/>
                  </Form.Item>
                  <Form.Item
                      name="pgIcon"
                      label="图标"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                    <Input/>
                  </Form.Item>
                  <Form.Item
                      name="pgNameE"
                      label="名称"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                    <Input/>
                  </Form.Item>
                  <Form.Item
                      name="pgPath"
                      label="路径"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                    <Input/>
                  </Form.Item>
                  <Form.Item
                      name="pgAccess"
                      label="访问入口"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                    <Input/>
                  </Form.Item>
                  <Form.Item
                      name="createTime"
                      label="创建时间"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                    <Input/>
                  </Form.Item>
                </Form>
              </Modal>
            </>
          <a key={index} href="#" onClick={() => delData(index)}>删除</a>
        </Space>
      )
    }
  ]
  const data = [
    {
      key: '001',
      'pgId': '00000001',
      'pgNameC': '权限管理',
      'pgIcon': '顺德农商银行',
      'pgNameE': 'ref-main-config-def',
      'pgPath': '/ref-main-config-def',
      'pgAccess': 'http://localhost:3000',
      'createTime': '2021-05-31 18:31:03',
      'pgDesc': 'ref-a-config-def',
    },
    {
      key: '002',
      'pgId': '00000002',
      'pgNameC': '权限管理',
      'pgIcon': '顺德农商银行',
      'pgNameE': 'ref-main-config-def',
      'pgPath': '/ref-main-config-def',
      'pgAccess': 'http://localhost:3000',
      'createTime': '2021-05-31 18:31:03',
      'pgDesc': 'ref-b-config-def',
    },
    {
      key: '003',
      'pgId': '00000003',
      'pgNameC': '权限管理',
      'pgIcon': '顺德农商银行',
      'pgNameE': 'ref-main-config-def',
      'pgPath': '/ref-main-config-def',
      'pgAccess': 'http://localhost:3000',
      'createTime': '2021-05-31 18:31:03',
      'pgDesc': 'ref-c-config-def',
    },
    {
      key: '004',
      'pgId': '00000004',
      'pgNameC': '权限管理',
      'pgIcon': '顺德农商银行',
      'pgNameE': 'ref-main-config-def',
      'pgPath': '/ref-main-config-def',
      'pgAccess': 'http://localhost:3000',
      'createTime': '2021-05-31 18:31:03',
      'pgDesc': 'ref-d-config-def',
    },
    {
      key: '005',
      'pgId': '00000005',
      'pgNameC': '权限管理',
      'pgIcon': '顺德农商银行',
      'pgNameE': 'ref-main-config-def',
      'pgPath': '/ref-main-config-def',
      'pgAccess': 'http://localhost:3000',
      'createTime': '2021-05-31 18:31:03',
      'pgDesc': 'ref-e-config-def',
    },
    {
      key: '006',
      'pgId': '00000006',
      'pgNameC': '权限管理',
      'pgIcon': '顺德农商银行',
      'pgNameE': 'ref-main-config-def',
      'pgPath': '/ref-main-config-def',
      'pgAccess': 'http://localhost:3000',
      'createTime': '2021-05-31 18:31:03',
      'pgDesc': 'ref-f-config-def',
    },
    {
      key: '007',
      'pgId': '00000007',
      'pgNameC': '权限管理',
      'pgIcon': '顺德农商银行',
      'pgNameE': 'ref-main-config-def',
      'pgPath': '/ref-main-config-def',
      'pgAccess': 'http://localhost:3000',
      'createTime': '2021-05-31 18:31:03',
      'pgDesc': 'ref-g-config-def',
    },
    {
      key: '008',
      'pgId': '00000008',
      'pgNameC': '权限管理',
      'pgIcon': '顺德农商银行',
      'pgNameE': 'ref-main-config-def',
      'pgPath': '/ref-main-config-def',
      'pgAccess': 'http://localhost:3000',
      'createTime': '2021-05-31 18:31:03',
      'pgDesc': 'ref-h-config-def',
    },
    {
      key: '009',
      'pgId': '00000009',
      'pgNameC': '权限管理',
      'pgIcon': '顺德农商银行',
      'pgNameE': 'ref-main-config-def',
      'pgPath': '/ref-main-config-def',
      'pgAccess': 'http://localhost:3000',
      'createTime': '2021-05-31 18:31:03',
      'pgDesc': 'ref-i-config-def',
    },
    {
      key: '010',
      'pgId': '00000010',
      'pgNameC': '权限管理',
      'pgIcon': '顺德农商银行',
      'pgNameE': 'ref-main-config-def',
      'pgPath': '/ref-main-config-def',
      'pgAccess': 'http://localhost:3000',
      'createTime': '2021-05-31 18:31:03',
      'pgDesc': 'ref-j-config-def',
    },
    {
      key: '011',
      'pgId': '00000011',
      'pgNameC': '权限管理',
      'pgIcon': '顺德农商银行',
      'pgNameE': 'ref-main-config-def',
      'pgPath': '/ref-main-config-def',
      'pgAccess': 'http://localhost:3000',
      'createTime': '2021-05-31 18:31:03',
      'pgDesc': 'ref-k-config-def',
    },
  ]

  const [SourceData, setSourceData] = useState(data)

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isMdVisible, setIsMdVisible] = useState(false)
  const [currentDataIdx,setCurrentIdx] = useState(0)
  //修改数据
  const showModal = (val, idx) => {
    setIsMdVisible(true);
    console.log(val,idx)
    formRef.current.setFieldsValue({
      pgId: val.pgId,
      pgNameC: val.pgNameC,
      pgDesc: val.pgDesc,
      pgIcon: val.pgIcon,
      pgNameE: val.pgNameE,
      pgPath: val.pgPath,
      pgAccess: val.pgAccess,
      createTime: val.createTime
    })
    setCurrentIdx(idx)
    console.log('currentIdx修改完成',currentDataIdx,idx)
  }
  //新增数据
  const changeData = () => {
    setIsModalVisible(true);
  }

  const handleOk = () => {
    setIsModalVisible(false);
  }; 
  const handleOk2 = async () => {
    console.log(currentDataIdx,'获取currentIdx值')
    const newData = [...SourceData]
    setIsMdVisible(false);
    const value = await formRef.current.validateFields()
    newData.splice(currentDataIdx,1,value)
    setSourceData(newData)
  }; 
  const delData = (index) => {
    const newData = [...SourceData]
    newData.splice(index,1)
    setSourceData(newData)
    console.log(SourceData,newData)
  }

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleCancel2 = () => {
    setIsMdVisible(false);
  };

  const [form] = Form.useForm();
  const [form2] = Form.useForm();

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  return (
    <Layout style={{ padding: '10px 24px 20px 24px', minWidth: 680 }}>
      <Content
        className="site-layout-background"
        style={{
          margin: 0,
          minHeight: 280,
          backgroundColor: '#fff',
          boxSizing: 'border-box'
        }}
      >
        <Form
          name="search-form"
          layout="inline"
          style={{
            backgroundColor: '#fff',
            border: '1px solid #f4f4f4',
            height: 50,
            margin: 13,
            minWidth: 680,
            padding: '8px 0 0 15px',
            overflow: 'hidden'
          }}
        >
          <Form.Item
            name="pg-name"
            label="应用名称"
          >
            <Input
              type="text"
              size='small'
            />
          </Form.Item>
          <Form.Item
            name="pgId"
            label="应用ID"
          >
            <Input
              type="text"
              size='small'
            />
          </Form.Item>
          <Form.Item>
            
          </Form.Item>
          <Form.Item>
            <Button className='search-btn' style={{marginRight: '8px'}} type='primary' htmlType="submit" size='small'>
              <SearchOutlined />
              <span style={{marginLeft: 4}}>搜索</span>
            </Button>
            <Button htmlType="submit" size='small'>
              重置
            </Button>
          </Form.Item>
        </Form>
        <div className='form-header' style={{minWidth: 680}}>
          <span>应用表格</span>
          <div>
            <>
              <Button type="primary" size='small' onClick={changeData}>
                <PlusOutlined />
                <span className='add-span'>添加</span>
              </Button>
              <Modal title="新增" 
                visible={isModalVisible} 
                onOk={handleOk} onCancel={handleCancel}>
                <Form {...layout} form={form2} name="control-hooks">
                  <Form.Item
                    name="username"
                    label="名称"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Form>
              </Modal>
            </>
          </div>
        </div>
        <Table bordered='true' size='small' style={{
          margin: 13
        }} columns={columns} dataSource={SourceData} />
      </Content>
    </Layout>
  )
}