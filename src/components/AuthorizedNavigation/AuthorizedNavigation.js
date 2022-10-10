import React from 'react';
import './AuthorizedNavigation.css';
import { Link, Route, Switch } from 'react-router-dom';

function AuthorizedNavigation() {
  return (
    <>
      <Switch>
        <Route path="/">
          <div className="authorized-navigation__container">
            <nav>
              <Link className="authorized-navigation__link-movies" to="/movies">
                Фильмы
              </Link>
              <Link className="authorized-navigation__link-saved-movies" to="/saved-movies">
                Сохранённые фильмы
              </Link>
              <Link className="authorized-navigation__link-button" to="/profile">
                Аккаунт
              </Link>
            </nav>
          </div>
        </Route>
      </Switch>
      <button className="authorized-navigation__button-menu" />
    </>
  );
}

export default AuthorizedNavigation;
