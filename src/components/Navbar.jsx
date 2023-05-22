import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import AddButton from './AddBook';

function Navbar({ currentUser, setUser }) {
  const navigate = useNavigate();

  const logoutHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/auth/logout');
    if (response.ok) {
      setUser(null);
      navigate('/');
    }
  };
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Bookworm App</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {!currentUser && (
            <>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/reg">Регистрация</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/auth">Авторизация</NavLink>
              </li>
            </>
            )}
            {currentUser && (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="/favorites">Избранное</a>
                </li>
                <li>
                  <a className="nav-link" href="/addBook">Добавить книгу</a>
                </li>
                <li className="nav-item-logout">
                  <span className="nav-link">
                    Вы авторизованы как
                    {' '}
                    {currentUser?.username}
                  </span>
                </li>
                <li className="nav-item">
                  <a onClick={logoutHandler} className="nav-link" href="/logout">Выход</a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
