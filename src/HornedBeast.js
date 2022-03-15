import React from 'react';
import './HornedBeast.css'

class HornedBeast extends React.Component {
  render() {
    return(
      <article>
        <h3>{this.props.title}</h3>
        <img src={this.props.imageURL} alt={this.props.alt} title={this.props.title}/>
        <p>{this.props.description}</p>
      </article>
    );
  }
}

export default HornedBeast;