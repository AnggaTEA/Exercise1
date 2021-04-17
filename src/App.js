import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Navbar, Categories, Keranjang, Produks } from "./components";
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      produks: [],
    };
  }

  componentDidMount() {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      const produks = res.data;
      this.setState({ produks });
    });
  }

  render() {
    const { produks } = this.state;
    return (
      <div className="App">
        <Navbar />
        <div className="mt-2">
          <Container fluid>
            <Row>
              <Categories />
              <Col>
                <h1>Produk</h1>
                <Row>
                  {produks &&
                    produks.map((produk) => (
                      <Produks key={produk.id} produk={produk} />
                    ))}
                </Row>
              </Col>
              <Keranjang />
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

// function App() {
//   return (

//   );
// }

// export default App;
