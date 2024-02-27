import React, { Component } from "react";
import "./NavBar.css";

class Counter extends Component {
  render() {
    return (
      <div className="container">
        <div className="card">
          <img
            src={`https://picsum.photos/200/300/?random=1`}
            alt="Placeholder Image 1"
          />
          <h2>Card Title 1</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            euismod libero ac justo consectetur, non aliquet dui fringilla.
          </p>
        </div>
        <div className="card">
          <img
            src={`https://picsum.photos/200/300/?random=2`}
            alt="Placeholder Image 2"
          />
          <h2>Card Title 2</h2>
          <p>
            Sed quis velit mauris. Integer commodo, velit ut rhoncus maximus,
            justo velit mattis orci, eget posuere ligula arcu non libero.
          </p>
        </div>
        <div className="card">
          <img
            src={`https://picsum.photos/200/300/?random=3`}
            alt="Placeholder Image 3"
          />
          <h2>Card Title 3</h2>
          <p>
            Duis tempus, ipsum eu efficitur vehicula, felis magna hendrerit
            libero, sit amet posuere orci leo at velit.
          </p>
        </div>
      </div>
    );
  }
}

export default Counter;
