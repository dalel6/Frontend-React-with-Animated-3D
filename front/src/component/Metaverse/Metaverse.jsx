import React from 'react';
import "./Metaverse.css";

const cardsData = [
  {
    id: 1,
    image: './M.png',
    title: 'Virtual Reality Showrooms',
    description: 'Companies can embed VR showrooms on their websites, allowing customers to explore products in a 3D space. This is particularly useful for real estate, automotive, and retail industries, where customers can get a realistic view of products.'
  },
  {
    id: 2,
    image: './Me.png',
    title: 'Augmented Reality Try-Ons',
    description: 'For fashion and accessory brands, AR try-ons can be embedded for customers to see how products would look on them in real time using their webcam or smartphone camera.'
  },
  {
    id: 3,
    image: './3D.png',
    title: 'Interactive 3D Product Demos',
    description: 'Companies can offer 3D models of their products that users can interact with directly on the website. This feature enables customers to view the product from all angles and understand its features better. '
  },
  {
    id: 4,
    image: './event.svg',
    title: 'Virtual Reality Showrooms',
    description: 'Companies can embed VR showrooms on their websites, allowing customers to explore products in a 3D space. This is particularly useful for real estate, automotive, and retail industries, where customers can get a realistic view of products.'
  },
  {
    id: 5,
    image: './Me.png',
    title: 'Augmented Reality Try-Ons',
    description: 'For fashion and accessory brands, AR try-ons can be embedded for customers to see how products would look on them in real time using their webcam or smartphone camera.'
  },
  {
    id: 6,
    image: './3D.png',
    title: 'Interactive 3D Product Demos',
    description: 'Companies can offer 3D models of their products that users can interact with directly on the website. This feature enables customers to view the product from all angles and understand its features better. '
  }
];

const Card = ({ image, title, description }) => {
  return (
    <li className="card cards__item">
      <div className="card__frame">
        <div className="card__picture">
          <img src={image} alt={title} width="120" />
        </div>
        <h2 className="card__title">{title}</h2>
      </div>
      <div className="card__overlay"></div>
      <div className="card__content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </li>
  );
};

const Metaverse = () => {
  return (
    <div className="container">
      <ul className="cards">
        {cardsData.map((card) => (
          <Card key={card.id} image={card.image} title={card.title} description={card.description} />
        ))}
      </ul>
    </div>
  );
};

export default Metaverse;
