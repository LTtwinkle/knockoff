import React from 'react';

interface BasicLayoutProps {
  children: React.ReactNode;
}

export default function BasicLayout(props: BasicLayoutProps) {
  const { children } = props;
  return (
    <div className="mc-app">
      <div className="mc-app-nav">
        <h4>侧边栏</h4>
      </div>
      <div className="mc-app-main">
        <h3>主要内容</h3>
        {children}
      </div>
    </div>
  )
}