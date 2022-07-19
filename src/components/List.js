import React from 'react';
import { Component } from 'react';
import {Layout, Breadcrumb,Table,Button} from 'antd'
import 'antd/dist/antd.css';
// import axios from 'axios';
// import {API} from '../config'
// import CheckMessage from '../components/message/CheckMessage';
import AdvanceSearch from './AdvanceSearch';


class List extends Component {
    state={
        dataSource:[],
        total:0,//总的记录数
        pageSize:7,
        pageNumber:1,
        searchContent:"",//搜索条件
        showCheckMessageDialog:false,//控制添加商品的显示与隐藏
        editData:{},//要查看的数据
    };
    loadDate=()=>{
        const params={
            pageSize:this.state.pageSize,
            pageNumber:this.state.pageNumber,
            search:this.state.searchContent,

        }
    //     axios.get('/products',{params}).then((res)=>{
    //         // console.log(res);
    //         this.setState({dataSource:res.date.list,total:res.data.totalCount});
    // })
    };

    //分页
    changePage=(page,pageSize)=>{
        // const params={
        //     pageNumber:page,
        //     pageSize:pageSize,
        // };
        // this.loadDate(params);
        this.setState({pageSize:pageSize,pageNumber:page},()=>{
            this.loadDate();
        });
    }

    //搜索
     onSearch = (values) => {
        console.log(values);
        this.setState((preState)=>{
            preState.searchContent=values;
        },()=>{
            this.loadDate();
        })
     };
     //获取要查看的数据
     handleCheck=(pid)=>{
        console.log(pid);
        this.setState({
            editData:pid,
            showCheckMessageDialog:true,
        })
     };
    //请求数据重新渲染
    //  handleCheck=(pid)=>{
    //     console.log(pid);
    //     axios.get('/products',{params:{messageId:pid.key}}).then((res)=>{
    //         this.setState({
    //             editData:res.data,
    //             showCheckMessageDialog:true,
    //         })
    //     })
    //  };
     //展示要编辑的数据
     showCheckDialog=(flag)=>{
        if(flag){
            return(
                // <CheckMessage 
                //     visible={this.state.showCheckMessageDialog} 
                //     close={this.closeCheckDialog}
                //     data={this.state.editData}
                // ></CheckMessage>
                <h2>CheckMessage...</h2>
            )
        }
     }
     //关闭查看详情窗口
     closeCheckDialog=()=>{
        this.setState({showCheckMessageDialog:false})
     }
    componentDidMount(){
        // this.loadDate();
        const dataSource = [
            {
                key: '1',
                deal_type: '付款',
                pay_name: 'aa',
                pay_card_number:'123456789',
                receiver:'王雨芯',
                receiver_card_number:'123456789',
                transaction_amount:123,
                create_time:'2021-2-3',
                remark:'手机',
            },
            {
                key: '2',
                deal_type: '付款',
                pay_name: 'bb',
                pay_card_number:'123456789',
                receiver:'王雨芯',
                receiver_card_number:'123456789',
                transaction_amount:123,
                create_time:'2021-2-3',
                remark:'手机',
            },
            {
                key: '3',
                deal_type: '付款',
                pay_name: 'cc',
                pay_card_number:'123456789',
                receiver:'王雨芯',
                receiver_card_number:'123456789',
                transaction_amount:123,
                create_time:'2021-2-3',
                remark:'手机',
            },
            {
                key: '4',
                deal_type: '付款',
                pay_name: 'dd',
                pay_card_number:'123456789',
                receiver:'王雨芯',
                receiver_card_number:'123456789',
                transaction_amount:123,
                create_time:'2021-2-3',
                remark:'手机',
            },
            {
                key: '5',
                deal_type: '付款',
                pay_name: 'ee',
                pay_card_number:'123456789',
                receiver:'王雨芯',
                receiver_card_number:'123456789',
                transaction_amount:123,
                create_time:'2021-2-3',
                remark:'手机',
            },
            {
                key: '6',
                deal_type: '付款',
                pay_name: 'ff',
                pay_card_number:'123456789',
                receiver:'王雨芯',
                receiver_card_number:'123456789',
                transaction_amount:123,
                create_time:'2021-2-3',
                remark:'手机',
            },
            {
                key: '7',
                deal_type: '付款',
                pay_name: 'aa',
                pay_card_number:'123456789',
                receiver:'王雨芯',
                receiver_card_number:'123456789',
                transaction_amount:123,
                create_time:'2021-2-3',
                remark:'手机',
            },
            {
                key: '8',
                deal_type: '付款',
                pay_name: 'bb',
                pay_card_number:'123456789',
                receiver:'王雨芯',
                receiver_card_number:'123456789',
                transaction_amount:123,
                create_time:'2021-2-3',
                remark:'手机',
            },
            {
                key: '9',
                deal_type: '付款',
                pay_name: 'cc',
                pay_card_number:'123456789',
                receiver:'王雨芯',
                receiver_card_number:'123456789',
                transaction_amount:123,
                create_time:'2021-2-3',
                remark:'手机',
            },
            {
                key: '10',
                deal_type: '付款',
                pay_name: 'dd',
                pay_card_number:'123456789',
                receiver:'王雨芯',
                receiver_card_number:'123456789',
                transaction_amount:123,
                create_time:'2021-2-3',
                remark:'手机',
            },
            {
                key: '11',
                deal_type: '付款',
                pay_name: 'ee',
                pay_card_number:'123456789',
                receiver:'王雨芯',
                receiver_card_number:'123456789',
                transaction_amount:123,
                create_time:'2021-2-3',
                remark:'手机',
            },
            {
                key: '12',
                deal_type: '付款',
                pay_name: 'ff',
                pay_card_number:'123456789',
                receiver:'王雨芯',
                receiver_card_number:'123456789',
                transaction_amount:123,
                create_time:'2021-2-3',
                remark:'手机',
            },
        ];
        this.setState({dataSource});
    }
    
    render(){
        
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
        ];       
        return (
            <div>
                <Layout>
                    <Breadcrumb style={{ margin: '16px 0'}}>
                        <Breadcrumb.Item>客户端</Breadcrumb.Item>
                        <Breadcrumb.Item>数据查询</Breadcrumb.Item>
                        <Breadcrumb.Item>交易记录</Breadcrumb.Item>
                    </Breadcrumb>
                </Layout>
                <AdvanceSearch  onSearch={this.onSearch}></AdvanceSearch>
                <Table 
                    dataSource={this.state.dataSource} 
                    columns={columns} 
                    rowKey="id" 
                    size={'small'}
                    style={{marginTop:20}}
                    pagination={{
                        pageSize:this.state.pageSize,
                        defaultCurrent:this.state.pageNumber,
                        onChange:this.changePage,
                        total:this.state.total,
                }} />
                {/* <CheckMessage 
                    visible={this.state.showCheckMessageDialog} 
                    close={this.closeCheckDialog}
                    data={this.state.editData}
                ></CheckMessage> */}
                {this.showCheckDialog(this.state.showCheckMessageDialog)}
            </div>
        )
    }      
    
}
export default List