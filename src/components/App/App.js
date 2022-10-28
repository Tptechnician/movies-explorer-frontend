import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './App.css';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import MainApi from '../../utils/MainApi';
import Popup from '../Popup/Popup';
import Preloader from '../Preloader/Preloader';

function App() {
  const { pathname } = useLocation();
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [popupTitle, setPopupTitle] = useState('');
  const history = useHistory();

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function togglePopup() {
    setPopupOpen(!isPopupOpen);
  }

  function handleRegistration(data) {
    setIsLoading(true);
    MainApi.register(data)
      .then((data) => {
        history.push('/signin');
      })
      .catch((err) => {
        setPopupTitle('Что-то пошло не так! Ошибка регистрации.');
        togglePopup();
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleAuthorization(data) {
    setIsLoading(true);
    MainApi.authorize(data)
      .then((data) => {
        localStorage.setItem('loggedIn', 'true');
        setCurrentUser(data.user);
        setSavedMovies(getMovies());
        setLoggedIn(true);
        history.push('/movies');
      })
      .catch((err) => {
        setPopupTitle('Что-то пошло не так! Ошибка авторизации.');
        togglePopup();
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleUpdateUser(data) {
    setIsLoading(true);
    MainApi.updateUser(data)
      .then((updatedUser) => {
        setCurrentUser(updatedUser);
      })
      .catch((err) => {
        setPopupTitle('Что-то пошло не так! Ошибка обновления пользователя.');
        togglePopup();
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleCheckToken() {
    MainApi.checkToken().then(
      (data) => {
        setCurrentUser(data);
        getMovies();
        setLoggedIn(true);
        history.push('/movies');
      },
      (err) => {
        console.log(err);
      },
    );
  }

  useEffect(() => {
    const loggedIn = localStorage.getItem('loggedIn');
    if (loggedIn) {
      handleCheckToken();
    }
  }, []);

  function handleLoggedOut() {
    MainApi.loggedOut().then(
      (res) => {
        setLoggedIn(false);
        setCurrentUser({});
        localStorage.removeItem('loggedIn');
        localStorage.removeItem('movies');
        localStorage.removeItem('moviesInputSearch');
        localStorage.removeItem('moviesInputCheckbox');
        history.push('/');
      },
      (err) => {
        console.log(err);
      },
    );
  }

  function getMovies() {
    MainApi.getSavedMovies()
      .then((savedMovies) => {
        setSavedMovies(savedMovies);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function toggleSavedMovies(movie, saved, id) {
    MainApi.changeSavedMoviesStatus(movie, saved, id)
      .then((newMovies) => {
        if (newMovies) {
          getMovies();
        }
      })
      .catch((err) => {
        setPopupTitle('Что-то пошло не так! Ошибка сохранения или удаления фильма.');
        togglePopup();
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='app'>
        {pathname === '/' ||
        pathname === '/movies' ||
        pathname === '/saved-movies' ||
        pathname === '/profile' ? (
          <Header loggedIn={loggedIn} onToggleMenu={toggleMenu} />
        ) : (
          ''
        )}
        <Switch>
          <Route exact path='/'>
            {isLoading ? <Preloader /> : <Main />}
          </Route>
          <Route exact path='/signup'>
            <Register onSubmit={handleRegistration} />
          </Route>
          <Route exact path='/signin'>
            <Login onSubmit={handleAuthorization} />
          </Route>
          <ProtectedRoute
            path='/profile'
            component={Profile}
            loggedIn={loggedIn}
            isLoading={isLoading}
            loggedOut={handleLoggedOut}
            updateUser={handleUpdateUser}
          />
          <ProtectedRoute
            path='/movies'
            component={Movies}
            loggedIn={loggedIn}
            isLoading={isLoading}
            toggleSavedMovies={toggleSavedMovies}
            savedMovies={savedMovies}
          />
          <ProtectedRoute
            path='/saved-movies'
            component={SavedMovies}
            loggedIn={loggedIn}
            isLoading={isLoading}
            toggleSavedMovies={toggleSavedMovies}
            savedMovies={savedMovies}
          />
          <Route path='*'>
            <PageNotFound />
          </Route>
        </Switch>
        {pathname === '/' || pathname === '/movies' || pathname === '/saved-movies' ? (
          <Footer />
        ) : (
          ''
        )}
        <Popup title={popupTitle} isOpen={isPopupOpen} onTogglePopup={togglePopup} />
        <Menu isOpen={isMenuOpen} onToggleMenu={toggleMenu} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
