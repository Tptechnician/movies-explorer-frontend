import React from 'react';
import './AboutMe.css';
import Title from '../Title/Title';
import imageAuthor from '../../images/about-me-photo-author.jpeg';

function AboutMe() {
  return (
    <section className='about-me'>
      <Title title={'Студент'} />
      <div className='about-me__conteiner'>
        <div className='about-me__conteiner__info'>
          <h4 className='about-me__name'>Павел</h4>
          <p className='about-me__job'>Фронтенд-разработчик, 35 лет</p>
          <p className='about-me__description'>
            Я родился и живу в Богдановиче, планирую переезд в Екатеринбург. У меня есть жена и
            дочь. Я люблю слушать музыку, а ещё увлекаюсь ездой на MTB велосипеде. Во время учебы в
            Яндекс Практикум я реализовал 10 проектных работ на HTML, CSS, JavaScript, Reactjs,
            Nodejs (Expressjs). По каждой работе было проведено код-ревью командой Практикума.
          </p>
          <nav>
            <ul className='about-me__links'>
              <li>
                <a className='about-me__link' href='https://github.com/Tptechnician'>
                  Github
                </a>
              </li>
              <li>
                <a className='about-me__link' href='https://t.me/Tptechnician'>
                  Telegram
                </a>
              </li>
              <li>
                <a className='about-me__link' href='https://vk.com/tptechnician'>
                  Vkontakte
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <img className='about-me__image' src={imageAuthor} alt='photo-author' />
      </div>
    </section>
  );
}

export default AboutMe;
