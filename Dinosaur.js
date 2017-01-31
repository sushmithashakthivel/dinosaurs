import React, {Component} from "react";
import {Panel} from "react-bootstrap";

class Dinosaur extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dinosaurs: {}
    }
  }
  componentDidMount() {
    const proxy = this;
    fetch("https://dinosaur-facts.firebaseio.com/dinosaurs.json", {
      method: "GET"
    })
    .then((res) => res.json())
    .then(json => {
      proxy.setState({
        dinosaurs: json
      });
    });
  }
  render() {
    const name = this.props.params.id;
    if (Object.keys(this.state.dinosaurs).length) {
      const dinosaur = this.state.dinosaurs[name];
      return (
        <Panel header={name.toUpperCase()}>
          <ul>
            <li>Order: {dinosaur.order}</li>
            <li>Appeared: {dinosaur.appeared}</li>
            <li>Vanished: {dinosaur.vanished}</li>
            <li>Height: {dinosaur.height}</li>
            <li>Weight: {dinosaur.weight}</li>
            <li>Length: {dinosaur.length}</li>
          </ul>
        </Panel>
      );
    } else {
      return null;
    }
  }
}

export default Dinosaur;
