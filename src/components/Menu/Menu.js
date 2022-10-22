import React, { useEffect } from 'react';
import './Menu.css';
import { Link, Route, Switch } from 'react-router-dom';

function Menu({ isOpen, onToggleMenu }) {
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscClose);
    }
    return () => {
      document.removeEventListener('keydown', handleEscClose);
    };
  }, [isOpen]);

  function handleClickClose(evt) {
    if (evt.target === evt.currentTarget) {
      onToggleMenu();
    }
  }

  function handleEscClose(evt) {
    if (evt.key === 'Escape') {
      onToggleMenu();
    }
  }

  return (
    <div className={`${isOpen ? 'menu menu_open' : 'menu'}`} onClick={handleClickClose}>
      <div className={`${isOpen ? 'menu__content menu__content_open' : 'menu__content'}`}>
        <button className="menu__close" type="button" onClick={onToggleMenu} />
        <Switch>
          <Route path="/">
            <nav className="menu__navigation">
              <Link className="menu__navigation__link-main" to="/" onClick={onToggleMenu}>
                Главная
              </Link>
              <Link className="menu__navigation__link-movies" to="/movies" onClick={onToggleMenu}>
                Фильмы
              </Link>
              <Link
                className="menu__navigation__link-saved-movies"
                to="/saved-movies"
                onClick={onToggleMenu}
              >
                Сохранённые фильмы
              </Link>
              <Link className="menu__navigation__link-button" to="/profile" onClick={onToggleMenu}>
                Аккаунт
              </Link>
            </nav>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Menu;
