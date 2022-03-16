import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import Modal from 'react-bootstrap/Modal';
import './App.css';
import data from './data.json';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    }
  }
  hideModal = () => {
    this.setState({
      showModal:false,
    });
  }
  showModal = (urlImage) => {
    this.setState({
      showModal: true,
      urlImage: urlImage
    });
  }
  render() {
    return (
      <>
        <Header/>
        <Main
          data={data}
          showModal={this.showModal}
        />
        <Footer/>
        <Modal show ={this.state.showModal} onHide={this.hideModal}>
          <Modal.Header closeButton>
          <Modal.Title>Test Title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src ={this.state.urlImage} alt ='beast'></img>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default App;