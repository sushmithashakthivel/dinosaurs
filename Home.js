import React, {Component} from "react";
import {Grid, Row, Col} from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={12}>
            {this.props.children}
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Home;
