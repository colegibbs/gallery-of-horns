import React from 'react';

class HornedBeast extends React.Component {
  render() {
    const photo = this.props.url;
    return(
      <>
          <h3>{this.props.title}</h3>
          <img src={photo} alt={this.props.alt} title={this.props.title}/>
          <p>{this.props.description}</p>
      </>
    );
  }
}

export default HornedBeast;