import React from 'react';
import Modal from 'react-bootstrap/Modal';
import './SelectedBeast.css';

class SelectedBeast extends React.Component{
  render() {
    return(
      <Modal 
          show ={this.props.show} 
          onHide={this.props.hideModal}
        >
          <Modal.Header closeButton>
          <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <p>{this.props.description}</p>
            <img 
              src ={this.props.urlImage} 
              alt ={this.props.title}
              id="modal-img">
            </img>
          </Modal.Body>
        </Modal>
    );
  }
}

export default SelectedBeast;