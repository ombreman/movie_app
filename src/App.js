import React from 'react';

function Food({ fav }) {
  return <h1>I like {fav}</h1>
}

function App() {
  return (
    <div>
      <h1>앙념치킨</h1>
      <Food fav="김치" />
      <Food fav="라면" />
      <Food fav="삼겹살" />
      <Food fav="목살" />
    </div>
  );
}

export default App;
