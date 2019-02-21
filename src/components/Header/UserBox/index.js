import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';
import 'antd/dist/antd.css';
import styles from './index.module.scss';

const menu = (
    <Menu>
        <Menu.Item>
            <div>退出登录</div>
        </Menu.Item>
    </Menu>
);

function UserBox() {
    return (
        <Dropdown overlay={menu}>
            <div className={styles.dropdownButton} href="#">
                <span>admin</span><Icon type="down" />
            </div>
        </Dropdown>
    );
}

export default UserBox;
