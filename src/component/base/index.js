import React from 'react';
import {
    Layout
} from 'antd';
import styled from 'styled-components';

const {
    Content
} = Layout;

const titleSize = '1.8em';

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

const TitleWhiteSpan = styled(WhiteSpan)`
    font-size: ${titleSize};
`;

const SingleSpan = styled.span`
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
`;
export {
    BaseContent,
    WhiteSpan,
    SingleSpan,
    TitleWhiteSpan
}