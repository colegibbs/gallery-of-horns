import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './HornedBeast.css'

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: 0,
    }
  }
  handleVotes = () => {
    this.setState({
      votes: this.state.votes + 1,
    });
  }
  handleShowModal = () => {
    this.props.showModal(this.props.imageURL, this.props.title);
  }
  render() {
    return(
      <article>
        <Card id="card">
          <Card.Img 
            id="card-img"
            variant="top" 
            src={this.props.imageURL} 
            alt={this.props.alt} 
            title={this.props.title}
            onClick={this.handleShowModal}
          />
          <Card.Body>
            <Card.Title>{this.props.title}   {this.state.votes ? `${this.state.votes}❤️` : ''}</Card.Title>
            <Card.Text>
              {this.props.description}
            </Card.Text>
            <Button 
              onClick={this.handleVotes} 
              variant="primary"
              >
                Vote For {this.props.title}
            </Button>
          </Card.Body>
        </Card>
      </article>
    );
  }
}

export default HornedBeast;