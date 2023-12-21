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
    image: './event.png',
    title: 'Virtual Events and Conferences',
    description: 'Embedding tools for hosting virtual events and conferences directly on their website, where attendees can navigate a virtual space, interact with others, attend talks or presentations, and engage with interactive booths.'
  },
  {
    id: 5,
    image: './education.png',
    title: 'Educational and Training Modules',
    description: 'Companies can offer immersive educational experiences or training modules using VR/AR, where employees or customers can learn about products or skills in an engaging, hands-on virtual environment.'
  },
  {
    id: 6,
    image: './avatar.png',
    title: 'Customizable Avatars',
    description: 'For a more personalized experience, websites can include options for users to create and customize their own avatars, which they can use to interact within the virtual space provided by the company.'
  },
  {
    id: 7,
    image: './social.png',
    title: 'Social Interaction Spaces:',
    description: ' Embedding social spaces where users can interact with each other and the company representatives in real time, offering a more engaging and personal customer service experience.'
  },
  {
    id: 8,
    image: './gamming.png',
    title: 'Gamification Elements',
    description: 'Integrating game-like elements such as challenges, quests, or rewards to make the browsing experience more engaging and entertaining.'
  },
  {
    id: 9,
    image: './3dbot.png',
    title: 'AI Chatbots in 3D',
    description: 'Advanced AI chatbots in 3D format can be embedded to assist visitors, providing information, answering queries, and guiding them through the website in an interactive way.'
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
