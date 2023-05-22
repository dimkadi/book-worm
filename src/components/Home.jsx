import React, { useEffect, useState } from 'react';

export default function Home({ allBooks }) {
  const [books, setBooks] = useState(allBooks || []);
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="false"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://wallpaperaccess.com/full/3677104.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h1>Добро пожаловать на Bookworm!</h1>
              <p>
                Bookworm это место, где вы можете поделиться своим впечатлением
                о прочитанной книге.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://wallpaperaccess.com/full/4823424.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Большое количество книг</h5>
              <p>
                У нас вы найдете большое количество интересных книг, сможете
                добавить их в избранное, чтобы прочитать позже и добавить
                комментарий к уже прочитанной книге.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://wallpaperaccess.com/full/124482.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Книги - самые лучшие друзья</h5>
              <p>
                Создавайте, обсуждайте, добавляйте, оценивайте, читайте! У вас
                есть полный доступ к необъятным просторам книг. Приятного
                времяпровождения!
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container2">
        <div className="row g-2">
          {books &&
            books?.map((el) => (
              <div key={el.id} className="col-md-4">
                <div id="cardAll" className="card2">
                  <img src={el.photo} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{el.title}</h5>
                    <p className="card-text">
                      {`${el.about.slice(0, 80)}...`}
                      <a href={`/book/${el.id}`} className="card-link">
                        Читать далее{' '}
                      </a>
                    </p>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      Автор:
                      <span className="authorText">{el.author}</span>
                    </li>
                    <p id="bold" className="card-text">
                      {`${'⭐'.repeat(el.rating)} ${el.rating}.0`}
                    </p>
                  </ul>
                  <div className="card-body" />
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
