import React, { useState } from 'react';

export default function Book({ user, oneBook, allComments, favoriteOneBook }) {
  const [comments, setComments] = useState(allComments);
  const closeModalRef = React.useRef(null);
  

  const favHandler = (e) => {
    e.preventDefault();
    fetch('/api/addFavorite', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ book_id: oneBook.id, user_id: user.id }),
    });
    // .then((res) => res.json())
  };

  const writeComment = (e) => {
    e.preventDefault();
    fetch(`/book/${oneBook.id}/newcomment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    })
      .then((res) => res.json())
      .then((data) => setComments(data));

    closeModalRef.current.click();
  };
  return (
    <>

      <div className="card" style={{ margin: '1rem', flexDirection: 'row' }}>
        <img style={{ textAlign: 'center', margin: '1rem' }} src={oneBook.photo} className="img-fluid rounded-start" alt="..." />
        <div className="col-md-8">

          <div style={{ textAlign: 'center' }} className="card-body">
            <h5 style={{ fontFamily: 'monospace', textDecoration: 'underline' }} className="card-title">{oneBook.title}</h5>
            <p className="card-text">
              Автор:
              {' '}
              {oneBook.author}
            </p>
            <p className="card-text">
              Описание:
              {' '}
              {oneBook.about}
            </p>
            <p className="card-text">
              Рейтинг:
              {' '}
              {`${'⭐'.repeat(oneBook.rating)} ${oneBook.rating}.0`}
            </p>
            <button onClick={favHandler} type="button" className="btn btn-primary btn-sm">Добавить в избранное</button>
          </div>
        </div>
      </div>
      {comments?.map((el, index) => (
        <div style={{ margin: '1rem' }} className="card" key={el.id}>
          <div className="card-header">
            Комментарий номер
            {' '}
            {index + 1}
          </div>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p>{el.describe}</p>
              <footer className="blockquote-footer">
                Комментарий от пользователя
                {' '}
                <cite title="Source Title">{el.User?.username}</cite>
              </footer>
            </blockquote>
          </div>
        </div>
      ))}
      <div />
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" style={{ margin: '1rem' }}>Оставить новый комментарий</button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Пожалуйста заполните поле ниже</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <form onSubmit={writeComment}>
                <div className="mb-3">
                  <label htmlFor="message-text" className="col-form-label">Текст вашего комментария:</label>
                  <textarea name="describe" className="form-control" id="message-text" />
                  <input name="user_id" value={user.id} onChange={() => {}} hidden />
                  <input name="book_id" value={oneBook.id} onChange={() => {}} hidden />
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" ref={closeModalRef}>Закрыть</button>
                  <button type="submit" className="btn btn-primary">Отправить</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
