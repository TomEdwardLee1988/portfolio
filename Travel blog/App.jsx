import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card.jsx';
import data from './data.js';

// Here I'm mapping over the data array, and adding props to all the cards - Then I need to call {cards} to render, rather than <Card />, as that has the props applied to it.

function App() {
  const cards = data.map((item) => {
    return (
      <Card
        image={item.image}
        date={item.date}
        country={item.country}
        attraction={item.attraction}
        text={item.info}
      />
    );
  });
  return <div>{cards}</div>;
}

export default App;
