import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import ModalHandler from './ModalHandler.js';

class HeaderMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = { showModal: false };
    }

    openModal = () => { this.setState({ showModal: true }); }
    closeModal = () => { this.setState({ showModal: false }); }

    render() {

        return (
            <div className="aboutBtn" >
                <Modal isOpen={this.state.showModal} overlayClassName="Overlay">
                    <ModalHandler page="about" closeModal={this.closeModal}></ModalHandler>
                </Modal>
                <button onClick={this.openModal}>About</button>
            </div>
        );
    }
}
export default HeaderMenu;