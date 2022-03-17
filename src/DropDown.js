import React from 'react';
import Form from 'react-bootstrap/Form';
import './DropDown.css'

class DropDown extends React.Component {
  handleHorns = (event) => {
    console.log(event.target.value);
    this.props.handleSelect(event.target.value);
  }
  render() {
    return(
      <>
      <Form className="form">
        <Form.Group controlId="horns">
          <Form.Label>Number of Horns</Form.Label>
          <Form.Select onInput={this.handleHorns}>
            <option value="all">All</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="100">100</option>
          </Form.Select>
        </Form.Group>
      </Form>
      </>
    );
  }
}

export default DropDown;