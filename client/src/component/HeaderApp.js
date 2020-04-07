import React from 'react';
import Modal from 'react-modal';
import ModalHandler from './ModalHandler.js';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import { Layout, Menu } from 'antd';


class HeaderApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = { showModal: false };
    }

    openModal = () => { this.setState({ showModal: true }); }
    closeModal = () => { this.setState({ showModal: false }); }


    render() {
        const { Header } = Layout;
        return (
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <Menu theme='light' mode="horizontal">
                    <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
                    <Menu.Item key="1">Browse</Menu.Item>
                    <Menu.Item key="2">Profile</Menu.Item>
                    <Modal isOpen={this.state.showModal} overlayClassName="Overlay">
                        <ModalHandler page="about" closeModal={this.closeModal}></ModalHandler>
                    </Modal>
                    <Menu.Item key="3" onClick={this.openModal}>About</Menu.Item>
                    <Menu.Item key="4">Logout</Menu.Item>
                </Menu>
            </Header>
        );
    }
}
export default HeaderApp;