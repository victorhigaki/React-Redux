import React from 'react';
import Rainbow from '../hoc/Rainbow'

const About = () => {
  return (
    <div className='container'>
      <h4 className='center'>About</h4>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis eos
        natus eligendi eius quaerat! Nulla accusamus ab et culpa in quod libero!
        Exercitationem minus sapiente fuga, vel reprehenderit autem eos.
      </p>
    </div>
  );
};

export default Rainbow(About);
