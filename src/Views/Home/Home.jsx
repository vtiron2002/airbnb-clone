import React from 'react';
import './home.scss';

import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';

const Home = () => {
  const topCards = new Array(3).fill({
    title: 'Online Experience',
    description:
      'Unique activites we can do together, led by a world of hosts.',
  });

  const bottomCards = new Array(3).fill({
    title: '3 Bedroom Flat in Bournemouth',
    description:
      'Superhost with stunning view of the beachside in Sunny Bournemouth.',
    price: 130,
  });

  return (
    <div className='home'>
      <Banner />

      <div className='home__section'>
        {topCards.map((c, i) => (
          <Card key={i} title={c.title} description={c.description} />
        ))}
      </div>

      <div className='home__section'>
        {bottomCards.map((c, i) => (
          <Card
            key={i}
            title={c.title}
            description={c.description}
            price={c.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
