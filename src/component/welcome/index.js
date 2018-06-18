import React from 'react'
import styled from 'styled-components';
import icon from '../../img/icon.png';
import QueueAnim from 'rc-queue-anim';
import './index.css';
import BannerAnim, {Element} from 'rc-banner-anim';
import 'rc-banner-anim/assets/index.css';
import {
    BaseContent
} from '../base'

const BgElement = Element.BgElement;


const MyContent = styled(BaseContent)`
    padding: 0;
`;

const IndexBody = styled(QueueAnim)`
    display: flex;
    flex-direction: column;
    height: 320px;
    background-color: transparent;
    color: white;
    flex-grow: 100;
    align-items: center;
`;

const MyElement = styled(Element)`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const BigIcon = styled.img`
    width: 128px;
    height: 128px;   
`;

const PoetrySpan = styled.span`
    padding: 5px 0;
`;

class WelcomeComponent extends React.Component {
    render() {
        let bgUrls = [
            'https://upload-images.jianshu.io/upload_images/7222676-08751486c5f21330.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240',
            'https://upload-images.jianshu.io/upload_images/7222676-94683db13dc4fa23.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240',
            'https://upload-images.jianshu.io/upload_images/7222676-0ebbfdd382b30549.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240',
        ];
        let elements = bgUrls.map((value, index) => {
            return <MyElement
                prefixCls="banner-user-elem"
                key={index}
            >
                <BgElement
                    key="bg"
                    className="bg"
                    style={{
                        backgroundImage: `url(${value})`,
                        backgroundSize: 'cover',
                        opacity: 0.5,
                    }}
                />
            </MyElement>
        });
        let banner = (
            <BannerAnim prefixCls="banner-user" autoPlay={true} autoPlaySpeed={5000} style={{
                position: 'relative'
            }} arrow={false} thumb={false}>
                {elements}
            </BannerAnim>
        );
        return (
            <MyContent>
                {banner}
                <IndexBody
                    type={['bottom', 'top']}
                    delay={200}
                    style={{
                        position: 'absolute',
                        zIndex: 100
                    }}
                >
                    <div key={'1'}>
                        <BigIcon src={icon}/>
                    </div>
                    <div style={{
                        fontSize: '1.8em'
                    }} key={'2'}>
                        <PoetrySpan>上杭一中2015届高三九班</PoetrySpan>
                    </div>
                    <PoetrySpan key={'3'}>&nbsp;</PoetrySpan>
                    <PoetrySpan key={'4'}>在最好的年纪</PoetrySpan>
                    <PoetrySpan key={'5'}>我们一起度过了最好的时光</PoetrySpan>
                    <PoetrySpan key={'6'}>任时光荏苒</PoetrySpan>
                    <PoetrySpan key={'7'}>愿我们年少如初</PoetrySpan>
                </IndexBody>
            </MyContent>

        );
    }
}

export default WelcomeComponent;