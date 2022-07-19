import { ProfileOutlined, TransactionOutlined} from '@ant-design/icons';
import { Menu } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function SiderMenu(){
    function getItem(label, key, icon, children, type) {
        return {
        key,
        icon,
        children,
        label,
        type,
        };
    }
    const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
    const items = [
        getItem('交易中心', 'sub1', <TransactionOutlined />, [
          getItem(<Link to='transfer'>转账</Link>, '1'),
          getItem(<Link to='deposit'>存款</Link>, '2'),
          getItem(<Link to='withdraw'>取款</Link>, '3'),
        ]),
        getItem('数据查询', 'sub2', <ProfileOutlined />, [
          getItem(<Link to="deallog">交易记录</Link>, '5'),
        ]),
      ];
      const [openKeys, setOpenKeys] = useState(['sub1']);

      const onOpenChange = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
          setOpenKeys(keys);
        } else {
          setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
      };
    
      return (
        <Menu
          mode="inline"
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          style={{
            width: 200,
          }}
          items={items}
        />
      );
}

export default SiderMenu