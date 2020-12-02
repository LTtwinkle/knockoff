import { Button, Menu } from 'antd';
import React from 'react';
import { FormattedMessage } from 'umi';

interface IMenuBarProps {
  menuData: object[];
}

const { SubMenu } = Menu;

function RenderMenu(menu: object[]) {
  return menu?.map((item: any) => {
    if(item.path && !item?.hideInMenu) {
      return (
        <Menu.Item key={item.name}>
          <FormattedMessage id={`menu.${item.name}`} defaultMessage={item.name} />
        </Menu.Item>
      );
    }
    return null;
  })
}

export default function MenuBar(props: IMenuBarProps) {
  const { menuData } = props;
  console.log(menuData)

  return (
    <Menu
      style={{ width: 160 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
    >
      {RenderMenu(menuData)}
    </Menu>
  )
}