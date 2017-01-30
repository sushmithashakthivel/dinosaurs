import React, {Component} from "react";
import {Link} from "react-router";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dinosaurLists: []
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
        dinosaurLists: Object.keys(json)
      });
    });
  }
  render() {
    const dinosaur_list = this.state.dinosaurLists.map((dino, key) => {
      return (
        <li key={dino}>
          <Link to={`/dinosaur/${dino}`} style={{textTransform: "capitalize"}}>{dino}</Link>
        </li>
      );
    });
    return (
      <ul>
        {dinosaur_list}
      </ul>
    );
  }
}

export default Header;
