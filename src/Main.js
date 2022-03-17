import React from 'react';
import HornedBeast from './HornedBeast';
import './Main.css';

class Main extends React.Component {
  render() {
    console.log(this.props.hornNum);
    console.log(this.props.data[0].horns);
    let selectedBeast;
    if(this.props.hornNum === "all"){
      selectedBeast = this.props.data;
    }
    else {
      selectedBeast = this.props.data.filter((beast) => beast.horns === +this.props.hornNum);
    }
    console.log(selectedBeast);
    let beasts = selectedBeast.map((beast, index) => {
      return(
        <HornedBeast
          title={beast.title}
          imageURL={beast.image_url}
          alt={beast.keyword}
          description={beast.description}
          key={index}
          showModal={this.props.showModal}
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