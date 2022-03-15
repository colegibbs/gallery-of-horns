import React from 'react';
import Button from 'react-bootstrap/Button';
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
  render() {
    return(
      <article>
        <h3>{this.props.title}</h3>
        <p>{this.state.votes ? `${this.state.votes}❤️` : ''}</p>
        <img src={this.props.imageURL} alt={this.props.alt} title={this.props.title}/>
        <p>{this.props.description}</p>
        <Button onClick={this.handleVotes}>Vote For {this.props.title}</Button>
      </article>
    );
  }
}

export default HornedBeast;