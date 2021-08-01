import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className="cards">
      <h1>Check our campaigns and other social drives.</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/blood.jpeg"
              text="Blood donation drive "
              label="Recent"
              path="/services"
            />
            <CardItem
              src="images/books.jpg"
              text="Books at resale "
              label="Ongoing"
              path="/services"
            />
          </ul>
          <h1>Upcoming social events</h1>
          <br />
          <br />
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vivamus at augue eget arcu dictum varius."
              label="Upcoming"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vivamus at augue eget arcu dictum varius."
              label="Upcoming"
              path="/products"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vivamus at augue eget arcu dictum varius."
              label="Upcoming"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
