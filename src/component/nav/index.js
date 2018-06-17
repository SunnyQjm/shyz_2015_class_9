import React from 'react'
import {
    Menu,
    Icon,
    Dropdown,
} from 'antd'
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
    Link
} from 'react-router-dom'

const {Item} = Menu;

const Logo = styled.div`
    height: 63px;
    padding: 0;
    float: left;
    display: flex;
    justify-content: center;
    align-items: center; 
    flex-grow: 0;
`;

const Header = styled.div`
    background-color: #13181b ;
    padding: 0 34px;
    flex-grow: 0;
    display: flex;
    height: 72px;
    align-items: center;
`;

const MyMenu = styled(Menu)`
    line-height: 64px;
    background-color: transparent;
    display: flex;
`;

const MyItem = styled(Item)`

`;

const MyDropDown = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-grow: 1;
`;


const WELCOME_KEY = '/';
const MEMBERS_KEY = '/members';
const MORE_KEY = '/more';

const menuItems = [
    <MyItem key={WELCOME_KEY}><Link to="/">Welcome</Link></MyItem>,
    <MyItem key={MEMBERS_KEY}><Link to="/members">Members</Link></MyItem>,
    <MyItem key={MORE_KEY}><Link to="/more">More</Link></MyItem>
];

class Nav extends React.Component {

    constructor(props){
        super(props);
        this.handleMobileMenuClick = this.handleMobileMenuClick.bind(this);
    }

    handleMobileMenuClick(e){
        const {onSelect} = this.props;
        onSelect && onSelect(e);
    }

    render() {
        const {isMobile, onSelect} = this.props;

        // 根据当前地址栏的URL，判断当前应该是哪个菜单项被选中
        let selectedKey = '/' + document.location.pathname.split('/').pop();

        let dropDownMenu = (
            <Menu
                theme={'dark'}
                selectedKeys={[selectedKey]}
                onClick={this.handleMobileMenuClick}
            >
                {menuItems}
            </Menu>
        );
        let menu = isMobile ?
            <MyDropDown>
                <Dropdown overlay={dropDownMenu} trigger={['click']} style={{
                    color: 'white',
                }}>
                <span style={{
                    color: 'white',
                    fontSize: '1.8em'
                }}>
                    <Icon type="bars"/>
                </span>
                </Dropdown>
            </MyDropDown>
            :
            <MyMenu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={[selectedKey]}
                onSelect={onSelect}
            >
                {menuItems}
            </MyMenu>;
        return (
            <Header>
                <Logo>
                    <img src={require('../../img/icon.png')} style={{
                        width: '30px',
                        height: '30px',
                        marginRight: '20px'
                    }}/>
                </Logo>
                {menu}
            </Header>
        );
    }
}

Nav.propTypes = {
    isMobile: PropTypes.bool,
    defaultSelectedKey: PropTypes.string,
    onSelect: PropTypes.func,
};

Nav.defaultProps = {
    isMobile: false,
    defaultSelectedKey: WELCOME_KEY,
    onSelect: (item, key, selectedKeys ) => {}
};

Nav.NavKeys = {
    welcome: WELCOME_KEY,
    members: MEMBERS_KEY,
    more: MORE_KEY,
};

export default Nav;