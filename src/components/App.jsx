import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Auth from './Reg&Auth/Auth';
import Reg from './Reg&Auth/Reg';
import Navbar from './Navbar';
import Home from './Home';
import AddBook from './AddBook';
import Book from './Books/Book';
import Favorites from './Favorites';

export default function App({
  user, oneBook, allComments, favorites, allBooks, favoriteOneBook,
}) {
  const [currentUser, setCurrentUser] = useState(user || null);
  return (
    <div className="container" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
      <Navbar currentUser={currentUser} setUser={setCurrentUser} />
      <Routes>
        <Route path="/" element={<Home user={currentUser} allBooks={allBooks} />} />
        <Route path="/reg" element={<Reg setUser={setCurrentUser} />} />
        <Route path="/auth" element={<Auth setUser={setCurrentUser} />} />
        <Route path="/addBook" element={<AddBook user={user} />} />
        <Route path="/favorites" element={<Favorites favorites={favorites} />} />
        <Route path="/book/:id" element={<Book favoriteOneBook={favoriteOneBook} user={user} oneBook={oneBook} allComments={allComments} />} />
      </Routes>
    </div>

  );
}
