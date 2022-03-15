import React from 'react';
import HornedBeast from './HornedBeast';

class Main extends React.Component {
  render() {
    return (
      <>
        <HornedBeast 
          title="beast 1" 
          url ="url 1" 
          description="description 1"
        />
        <HornedBeast 
          title="beast 2" 
          url ="url 2" 
          description="description 2"
        />
      </>
    );
  }
}

export default Main;