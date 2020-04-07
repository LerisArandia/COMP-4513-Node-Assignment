import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import About from './About.js';
import { Layout, Menu, Modal, Button } from 'antd';


class HeaderApp extends React.Component {
    
    /** *Code From Ant Design Website: https://ant.design/components/modal/ & https://codesandbox.io/s/c6jbr*/
    state = { visible: false };

    showModal = () => {
        this.setState({
          visible: true,
        });
    };

    hideModal = () => {
        this.setState({
          visible: false,
        });
    };
    
    render() {
        const { Header } = Layout;
        return (
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <Menu theme='light' mode="horizontal">
                <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
                    <Menu.Item key="1">Browse</Menu.Item>
                    <Menu.Item key="2">Profile</Menu.Item>
                    <Menu.Item key="3" onClick={this.showModal}>About</Menu.Item>
                    <Modal
                        title="About Us"
                        visible={this.state.visible}
                        onCancel={this.hideModal}
                        closable
                        footer={null}
                    >
                        <About/>
                    </Modal>
                    <Menu.Item key="4">Logout</Menu.Item>
                </Menu>
            </Header>
        );
    }
}
export default HeaderApp;