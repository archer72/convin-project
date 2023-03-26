import React from 'react';
import Link from 'next/link';
import { Menu } from 'antd';

const Navbar = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="1">
        <Link href="/">Content</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link href="/buckets">Buckets</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;