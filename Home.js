import React, {Component} from "react";
import Header from "./Header.js";
import {Grid, Row, Col} from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <Grid fluid>
        <Row>
          <Col md={3} sm={4} xs={12}>
            <Header />
          </Col>
          <Col md={9} sm={8} xs={12}>
            {this.props.children}
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Home;
