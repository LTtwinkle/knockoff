import MenuBar from '@/components/menu/MenuBar';
import { connect } from 'dva';
import React from 'react';

interface IBasicLayoutProps {
  children: React.ReactNode;
  route: any;
}

class BasicLayout extends React.Component<IBasicLayoutProps>{
  constructor(props: IBasicLayoutProps) {
    super(props);
  }

  render() {
    const { children, route } = this.props;

    return (
       <div className="mc-app">
        <div className="mc-app-header">
          header
        </div>
        <div className="mc-app-body">
          <div className="mc-app-menu">
            {/* <h4>侧边栏</h4> */}
            <MenuBar menuData={route.routes} />
          </div>
          <div className="mc-app-main">
            <h3>主要内容</h3>
            {children}
          </div>
        </div>
        <div className="mc-app-footer">
          footer
        </div>
      </div>
    )
  }
}

export default BasicLayout;