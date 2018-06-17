import React from 'react'
import {
    Menu,
    Icon,
    Dropdown,
} from 'antd'
import styled from 'styled-components';
import PropTypes from 'prop-types';

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


const WELCOME_KEY = 'WELCOME_KEY';
const MEMBERS_KEY = 'MEMBERS_KEY';
const MORE_KEY = 'MORE_KEY';



class Nav extends React.Component {

    constructor(props){
        super(props);
        this.handleMobileMenuClick = this.handleMobileMenuClick.bind(this);
    }

    handleMobileMenuClick(e){
        const {onSelect} = this.props;
        onSelect(e);
    }

    render() {
        const {defaultSelectedKey, isMobile, onSelect} = this.props;
        let dropDownMenu = (
            <Menu
                theme={'dark'}
                selectedKeys={[defaultSelectedKey]}
                onClick={this.handleMobileMenuClick}
            >
                <MyItem key={WELCOME_KEY}>Welcome</MyItem>
                <MyItem key={MEMBERS_KEY}>Members</MyItem>
                <MyItem key={MORE_KEY}>More</MyItem>
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
                defaultSelectedKeys={[defaultSelectedKey]}
                onSelect={onSelect}
            >
                <MyItem key={WELCOME_KEY}>Welcome</MyItem>
                <MyItem key={MEMBERS_KEY}>Members</MyItem>
                <MyItem key={MORE_KEY}>More</MyItem>
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