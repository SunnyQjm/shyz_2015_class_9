import React from 'react';
import {
    BaseContent,
    TitleWhiteSpan,
} from '../base';
import {
    Card,
    Avatar,
    Divider,
    BackTop
} from 'antd'
import styled from 'styled-components';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import {OverPack, Parallax} from 'rc-scroll-anim';

const {Meta} = Card;
const MembersContent = styled(BaseContent)`
    color: white;
    width: 100%;
    flex-wrap: wrap;
`;

const TeacherBody = styled.div`
    width: 100%;
    flex-wrap: wrap;
`;

class MembersComponent extends React.Component {
    render() {
        let teachers = [];
        let students = [];
        for (let i = 0; i < 7; i++) {
            teachers.push(
                <TweenOne
                    animation={[
                        {
                            scale: 0.5,
                            y: -100,
                            opacity: 0,
                            type: 'from',
                            duration: 1000
                        },
                    ]}
                >
                    <Card
                        key={i}
                        style={{
                            width: 300,
                            margin: 5
                        }}
                        cover={<img alt="example"
                                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                    style={{
                                        backgroundSize: 'cover'
                                    }}/>}
                        // actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                    >
                        <Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}
                            title={`Teacher${i}`}
                            description="I am a teacher"
                        />
                    </Card>
                </TweenOne>
            );
        }
        for (let i = 0; i < 56; i++) {
            students.push(
                <Parallax
                    animation={{x: 0, opacity: 1, playScale: [-0.3, 0.2], scale: 1}}
                    style={{transform: 'scale(0, 0)', opacity: 0, scale: 0}}
                >
                    <Card
                        hoverable={true}
                        style={{
                            width: 300,
                            margin: 5
                        }}
                        cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                    style={{
                                        backgroundSize: 'cover'
                                    }}/>}
                    >
                        <Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}
                            title={`Student${i}`}
                            description="I am a Student"
                        />
                    </Card>
                </Parallax>
            );
        }

        return (
            <MembersContent>
                <BackTop/>
                <QueueAnim
                    duration={1000}
                >
                    <Divider

                        key={'0'}
                        orientation={'left'}
                    > <TitleWhiteSpan>Teachers</TitleWhiteSpan></Divider>
                </QueueAnim>
                {teachers}
                <Parallax
                    animation={{x: 0, opacity: 1, playScale: [0.5, 0.8]}}
                    style={{transform: 'translateX(-100px)', opacity: 0.5}}
                >
                    <Divider
                        orientation={'right'}
                    > <TitleWhiteSpan>Students</TitleWhiteSpan></Divider>
                </Parallax>
                {students}
            </MembersContent>
        );
    }
}

export default MembersComponent;
