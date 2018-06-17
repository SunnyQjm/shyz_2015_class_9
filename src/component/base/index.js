import React from 'react';
import {
    Layout
} from 'antd';
import styled from 'styled-components';

const {
    Content
} = Layout;


const BaseContent = styled(Content)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 34px;
`;

const WhiteSpan = styled.span`
    color: white;
`;

export {
    BaseContent,
    WhiteSpan,
}