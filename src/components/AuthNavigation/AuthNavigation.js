import React from 'react';
import './AuthNavigation.css';
import { Link, Route, Switch } from 'react-router-dom';

function AuthNavigation() {
  return (
    <Switch>
      <Route path="/">
        <div className="auth-navigation__container">
          <nav>
            <Link className="auth-navigation__link" to="/signup">
              Регистрация
            </Link>
            <Link className="auth-navigation__link-button" to="/signin">
              Войти
            </Link>
          </nav>
        </div>
      </Route>
    </Switch>
  );
}

export default AuthNavigation;
