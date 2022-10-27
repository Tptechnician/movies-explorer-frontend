class MainApi {
  constructor(data) {
    this._url = data.url;
    this._headers = data.headers;
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Error: ${res.status}`);
    }
    return res.json();
  }

  register(data) {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        password: data.password,
        email: data.email,
      }),
    }).then(this._getResponseData);
  }

  authorize(data) {
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({
        password: data.password,
        email: data.email,
      }),
    }).then(this._getResponseData);
  }

  updateUser(data) {
    return fetch(`${this._url}/users/me`, {
      credentials: 'include',
      headers: this._headers,
      method: 'PATCH',
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      }),
    }).then(this._getResponseData);
  }

  checkToken() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: this._headers,
    }).then(this._getResponseData);
  }

  loggedOut() {
    return fetch(`${this._url}/signout`, {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
    }).then(this._getResponseData);
  }

  changeSavedMoviesStatus(movie, saved, id) {
    if (saved) {
      return this.deleteMovies(id);
    } else {
      return this.addMovies(movie);
    }
  }

  deleteMovies(id) {
    return fetch(`${this._url}/movies/${id}`, {
      credentials: 'include',
      headers: this._headers,
      method: 'DELETE',
    }).then(this._getResponseData);
  }

  addMovies(movie) {
    return fetch(`${this._url}/movies`, {
      credentials: 'include',
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
        image: `https://api.nomoreparties.co${movie.image.url}`,
        trailerLink: movie.trailerLink,
        thumbnail: `https://api.nomoreparties.co${movie.image.url}`,
        movieId: movie.id,
      }),
    }).then(this._getResponseData);
  }

  getSavedMovies() {
    return fetch(`${this._url}/movies`, {
      credentials: 'include',
      headers: this._headers,
      method: 'GET',
    }).then(this._getResponseData);
  }
}

const mainApi = new MainApi({
  url: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default mainApi;
