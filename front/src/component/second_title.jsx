import React from 'react';
import Typical from 'react-typical';

const steps = [
  'Iris Technologies', 1000,
  ' Website and Services  ', 1000
  
];


  const Titre2 = () => {
    return (
      <div>
        <Typical wrapper="span" steps={steps} loop={1} className={'caca'} style={{ color: 'white' }} />
      </div>
    );
  };
  

export default Titre2;

