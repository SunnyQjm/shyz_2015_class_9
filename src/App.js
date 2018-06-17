import React, {Component} from 'react';
import es6 from'es6-shim';      //md,有些浏览器还不支持es6
import './App.css';
import 'antd/dist/antd.css';
import { enquireScreen } from 'enquire-js';
import {
    Layout
} from 'antd'
import {
    Nav,
    Footer,
    WelcomeComponent
} from './component'

let isMobile;
enquireScreen((b) => {
    isMobile = b;
});

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            isMobile,
            selectedKey: Nav.NavKeys.welcome
        };
        this.handleOnSelect = this.handleOnSelect.bind(this);
    }

    componentDidMount(){
        // 适配手机屏幕;
        enquireScreen((b) => {
            this.setState({ isMobile: !!b });
        });
    }

    handleOnSelect(item){
        this.setState({
            selectedKey: item.key
        });
    }
    render() {
        return (
            <Layout style={{
                backgroundColor: '#13171a',
                height: '100%',
            }}>
                <Nav isMobile={this.state.isMobile} onSelect={this.handleOnSelect}
                     defaultSelectedKey={this.state.selectedKey}/>
                <WelcomeComponent/>
                <Footer/>
            </Layout>
        );
    }
}

export default App;
