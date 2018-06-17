import React from 'react';
import {
    BaseContent,
    WhiteSpan
} from '../base';
import {
    Timeline,
    Card,
    Icon,
    Avatar
} from 'antd'
import styled from 'styled-components';

const {Meta} = Card;
const MembersContent = styled(BaseContent)`
    color: white;
    width: 100%;
    flex-wrap: wrap;
`;

class MembersComponent extends React.Component {
    render(){
        let cards = [];
        for(let i = 0; i < 56; i++){
            cards.push(
                <Card
                    style={{
                        width: 300,
                        margin: 5
                    }}
                    cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                    actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                >
                    <Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title="Card title"
                        description="This is the description"
                    />
                </Card>
            );
        }
        return (
            <MembersContent>
                {cards}
            </MembersContent>
        );
    }
}

export default MembersComponent;
