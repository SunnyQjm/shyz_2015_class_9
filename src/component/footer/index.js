import React from 'react';
import {Layout} from 'antd';
import styled from 'styled-components';

const {Footer} = Layout;

const MyFoot = styled(Footer)`
    flex-grow: 0;
    background-color: #282828;
    color: white;
`;

class MyFooter extends React.Component{
    render(){
        return (
            <MyFoot style={{textAlign: 'center'}}>
                Copyright ©2018 Created by Ming.J
            </MyFoot>
        );
    }
}

export default MyFooter;