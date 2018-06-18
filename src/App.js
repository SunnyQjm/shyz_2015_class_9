import React, {Component} from 'react';
import es6 from 'es6-shim';      //md,有些浏览器还不支持es6
import './App.css';
import 'antd/dist/antd.css';
import {enquireScreen} from 'enquire-js';
import {
    Layout
} from 'antd'
import {
    Nav,
    Footer,
    WelcomeComponent,
    ActivitiesComponent,
    MembersComponent,
    MoreComponent,
} from './component'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

let isMobile;
enquireScreen((b) => {
    isMobile = b;
});

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobile,
            selectedKey: Nav.NavKeys.welcome
        };
    }

    componentDidMount() {
        // 适配手机屏幕;
        enquireScreen((b) => {
            this.setState({isMobile: !!b});
        });
    }

    render() {
        return (
            <Router
                basename={'/shyz_2015_class_9'}
            >
                <Layout style={{
                    backgroundColor: '#13171a',
                    minHeight: '100%',
                }}>
                    <Nav isMobile={this.state.isMobile}/>

                    <Route exact path={'/'} component={WelcomeComponent}/>
                    <Route path={'/members'} component={MembersComponent}/>
                    <Route path={'/more'} component={MoreComponent}/>

                    <Footer/>
                </Layout>
            </Router>
        );
    }
}

export default App;
