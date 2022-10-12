import React from 'react';
import './Techs.css';
import Title from '../Title/Title';

function Techs() {
  return (
    <section className='techs'>
      <Title title={'Технологии'} />
      <h4 className='techs__title'>7 технологий</h4>
      <p className='techs__subtitle'>
        На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
      </p>
      <ul className='techs__list'>
        <li className='techs__list__item'>HTML</li>
        <li className='techs__list__item'>CSS</li>
        <li className='techs__list__item'>JS</li>
        <li className='techs__list__item'>React</li>
        <li className='techs__list__item'>Git</li>
        <li className='techs__list__item'>Express.js</li>
        <li className='techs__list__item'>mongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;
