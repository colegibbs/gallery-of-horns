import React from 'react';
import photo from './profile-photo-100-100 copy.jpeg';

class HornedBeast extends React.Component {
  render() {
    return(
      <>
          <h3>{this.props.title}</h3>
          <img src={photo} alt="beast"/>
          <p>{this.props.description}</p>
      </>
    );
  }
}

export default HornedBeast;