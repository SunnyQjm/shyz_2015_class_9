import React from 'react';
import {
    BaseContent
} from '../base';
import styled from 'styled-components';

const MoreContent = styled(BaseContent)`
    color: white;
`;

class MoreComponent extends React.Component {
    render() {
        return (
            <MoreContent>
                MoreComponent
            </MoreContent>
        );
    }
}

export default MoreComponent;