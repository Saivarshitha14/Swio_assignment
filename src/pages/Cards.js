
import React from 'react';
import Card from '../components/Card';

const Cards = () => {
  return (
    <div>
      <h2>Explore Cards</h2>
      <div className="card-container">
        <Card title="Music" description="About Music" image="path_to_music_image" />
        <Card title="Beauty of Music" description="The beauty of music" image="path_to_beauty_image" />
      </div>
    </div>
  );
};

export default Cards;
