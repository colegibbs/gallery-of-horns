import React from 'react';
import HornedBeast from './HornedBeast';

class Main extends React.Component {
  render() {
    console.log(this.props);
    let beasts = this.props.data.map((beast, index) => {
      return(
        <HornedBeast
          title={beast.title}
          imageURL={beast.image_url}
          alt={beast.keyword}
          description={beast.description}
          key={index}
        />
      );
    });
    return (
      <main>
        {beasts}
      </main>
    );
  }
}

export default Main;