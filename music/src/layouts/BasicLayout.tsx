import React from 'react';

interface BasicLayoutProps {
  children: React.ReactNode;
}

export default function BasicLayout(props: BasicLayoutProps) {
  const { children } = props;
  return (
    <>
      124
      {children}
    </>
  )
}