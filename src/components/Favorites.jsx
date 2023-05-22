import React, { useState } from 'react';

export default function Favorites({ favorites }) {
  console.log(favorites.map((el) => el.Book));
  const [books, setBooks] = useState(favorites || []);

  return (

    <div className="container2">
      <div className="row g-2">
        {books && books?.map((el) => (
          <div key={el.Book.id} className="col-md-4">
            <div className="card2">
              <img src={el.Book.photo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{el.Book.title}</h5>
                <p className="card-text">
                  {`${el.Book.about}`}

                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Автор:
                  {' '}
                  <span className="authorText">{el.Book.author}</span>
                </li>
                <p id="bold" className="card-text">
                  {`${'⭐'.repeat(el.Book.rating)} ${el.Book.rating}.0`}
                </p>
                <a href={`/book/${el.book_id}`} className="btn btn-primary">Перейти к обсуждению</a>
              </ul>
              <div className="card-body" />
            </div>

          </div>

        ))}
      </div>
    </div>
  );
}
