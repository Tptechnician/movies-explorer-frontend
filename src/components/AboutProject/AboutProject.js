import React from 'react';
import './AboutProject.css';

function AboutProject() {
  return (
    <section id='about-project' className='about-project'>
      <h2 className='about-project__title'>О проекте</h2>
      <ul className='about-project__info'>
        <li className='about-project__info__list'>
          <h3 className='about-project__info__list__title'>Дипломный проект включал 5 этапов</h3>
          <p className='about-project__info__list__subtitle'>
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные
            доработки.
          </p>
        </li>
        <li className='about-project__info__list'>
          <h3 className='about-project__info__list__title'>На выполнение диплома ушло 5 недель</h3>
          <p className='about-project__info__list__subtitle'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы
            успешно защититься.
          </p>
        </li>
      </ul>
      <div className='about-project__time-bar'>
        <div className='about-project__time-bar__first-column'>
          <p className='about-project__time-bar__first-column__time'>1 неделя</p>
          <p className='about-project__time-bar__first-column__subtitle'>Back-end</p>
        </div>
        <div className='about-project__time-bar__second-column'>
          <p className='about-project__time-bar__second-column__time'>4 недели</p>
          <p className='about-project__time-bar__second-column__subtitle'>Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
