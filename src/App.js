import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import SelectedBeast from './SelectedBeast.js';
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
  showModal = (urlImage, title, description) => {
    this.setState({
      showModal: true,
      urlImage: urlImage,
      title: title,
      description: description,
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
        <SelectedBeast
          show ={this.state.showModal} 
          hideModal={this.hideModal}
          title={this.state.title}
          description={this.state.description}
          urlImage={this.state.urlImage}
        />
        {/* <Modal 
          show ={this.state.showModal} 
          onHide={this.hideModal}
        >
          <Modal.Header closeButton>
          <Modal.Title>{this.state.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <p>{this.state.description}</p>
            <img 
              src ={this.state.urlImage} 
              alt ={this.state.title}
              id="modal-img">
            </img>
            <p>{this.state.description}</p>
          </Modal.Body>
        </Modal> */}
      </>
    );
  }
}

export default App;