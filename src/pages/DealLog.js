import {Layout, Breadcrumb,Table,Button} from 'antd'
import { useState } from 'react';
import AdvanceSearch from '../components/AdvanceSearch';

const DealLog = () => {

  const [pageState, setPageState] = useState({
    dataSource:[],
    total:0,//总的记录数
    pageSize:7,
    pageNumber:1,
    searchContent:"",//搜索条件
    showCheckMessageDialog:false,//控制添加商品的显示与隐藏
    editData:{},//要查看的数据
  })

  const loadDate = () => {
    const params={
      pageSize: pageState.pageSize,
      pageNumber: pageState.pageNumber,
      search: pageState.searchContent,
    }
  }

  //分页
  const changePage=(page,pageSize)=>{
    const newData = {...pageState}
    newData.pageSize = pageSize
    newData.pageNumber = page
    setPageState(newData,()=>{
        loadDate();
    });
  }

  //搜索
  const onSearch = (values) => {
    // this.setState((preState)=>{
    //     preState.searchContent=values;
    // },()=>{
    //     this.loadDate();
    // })
  }

  //获取要查看的数据
  const handleCheck=(pid)=>{
    // console.log(pid);
    // this.setState({
    //     editData:pid,
    //     showCheckMessageDialog:true,
    // })
  }

  //展示要编辑的数据
  const showCheckDialog=(flag)=>{
    if(flag){
        return(
            <h2>CheckMessage...</h2>
        )
    }
  }

  //关闭查看详情窗口
  const closeCheckDialog=()=>{
    // this.setState({showCheckMessageDialog:false})
  }

  const columns = [
      {
          title: '交易类型',
          dataIndex: 'deal_type',
          key: 'deal_type',
      },
      {
          title: '付款人',
          dataIndex: 'pay_name',
          key: 'pay_name',
      },
      {
          title: '付款人账户',
          dataIndex: 'pay_card_number',
          key: 'pay_card_number',
      },
      {
          title: '收款人',
          dataIndex: 'receiver',
          key: 'receiver',
      },
      {
          title: '收款人账户',
          dataIndex: 'receiver_card_number',
          key: 'receiver_card_number',
      },
      {
          title: '交易金额',
          dataIndex: 'transaction_amount',
          key: 'transaction_amount',
      },
      {
          title: '创建时间',
          dataIndex: 'create_time',
          key: 'create_time',
      },
      {
          title: '备注',
          dataIndex: 'remark',
          key: 'remark',
      },
      {
          title: '操作',
          dataIndex: 'id',
          key: 'id',
          render:(_,record)=>(<Button 
              type="primary" 
              onClick={()=>{this.handleCheck(record)}}
          >查看详情</Button>),
      },
  ]

  return (
    <div>
        <Layout>
            <Breadcrumb style={{ margin: '16px 0'}}>
                <Breadcrumb.Item>客户端</Breadcrumb.Item>
                <Breadcrumb.Item>数据查询</Breadcrumb.Item>
                <Breadcrumb.Item>交易记录</Breadcrumb.Item>
            </Breadcrumb>
        </Layout>
        <AdvanceSearch  onSearch={onSearch}></AdvanceSearch>
        <Table 
            dataSource={pageState.dataSource} 
            columns={columns} 
            rowKey="id" 
            size={'small'}
            style={{marginTop:20}}
            pagination={{
                pageSize: pageState.pageSize,
                defaultCurrent: pageState.pageNumber,
                onChange: changePage,
                total: pageState.total,
        }} />
        {/* <CheckMessage 
            visible={this.state.showCheckMessageDialog} 
            close={this.closeCheckDialog}
            data={this.state.editData}
        ></CheckMessage> */}
        {showCheckDialog(pageState.showCheckMessageDialog)}
    </div>
  )
}

export default DealLog