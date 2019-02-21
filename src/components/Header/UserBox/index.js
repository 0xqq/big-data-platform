import React from 'react';
import { Menu, Dropdown, Icon, Avatar } from 'antd';
import 'antd/dist/antd.css';
import styles from './index.module.scss';

const menu = (
    <Menu className={styles.menu}>
        <Menu.Item className={styles.menuItem}>
            <div>退出登录</div>
        </Menu.Item>
    </Menu>
);

function UserBox() {
    return (
        <Dropdown overlay={menu}>
            <div className={styles.dropdownButton} href="#">
                <Avatar style={{ backgroundColor: '#87d068' }} className={styles.avatar} icon="user" />
                <span>admin</span>
                <Icon type="down" />
            </div>
        </Dropdown>
    );
}

export default UserBox;
