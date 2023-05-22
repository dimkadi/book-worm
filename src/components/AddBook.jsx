import React, { useState } from 'react';

export default function AddButton({ user }) {
  const [books, setBooks] = useState([]);
  const [newInput, setNewInput] = useState({
    title: '',
    author: '',
    rating: '',
    photo: '',
    user_id: user.id,
  });

  const newInputHandler = (e) => {
    setNewInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    fetch('/api/createBook', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newInput),
    })
      .then((res) => res.json())
      .then((data) => window.location.href = `/book/${data.id}`);
  };

  return (
    <div
      style={{
        marginTop: '3rem', width: '25rem', textAlign: 'center', borderRadius: '0.375rem', borderColor: 'black', borderStyle: 'solid',
      }}
      className="container"
    >
      <form onSubmit={submitHandler}>
        <h2>Заполните поля, что бы добавить книгу</h2>
        <div style={{ margin: 'auto', textAlign: 'center' }}>
          <label htmlFor="exampleInputEmail1" className="form-label" style={{ textAlign: 'left' }}>
            Название книги:
            <input onChange={newInputHandler} name="title" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </label>
        </div>
        <div style={{ margin: 'auto', textAlign: 'center' }}>
          <label htmlFor="exampleInputEmail1" className="form-label" style={{ textAlign: 'left' }}>
            Автор книги:
            <input onChange={newInputHandler} name="author" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </label>
        </div>
        <div style={{ margin: 'auto', textAlign: 'center' }}>
          <label htmlFor="exampleInputEmail1" className="form-label" style={{ textAlign: 'left' }}>
            Url-адрес изображения:
            <input onChange={newInputHandler} name="photo" type="text" className="form-control" id="exampleInputEmail1" placeholder="Укажите url-адрес изображения,которое хотите загрузить" aria-describedby="emailHelp" />
          </label>
        </div>
        <div style={{ margin: 'auto', textAlign: 'center' }}>
          <label htmlFor="exampleInputEmail1" className="form-label" style={{ textAlign: 'left' }}>
            Описание/комментарий к книге:
            <textarea onChange={newInputHandler} name="about" type="text" className="form-control" id="exampleInputEmail1" placeholder="Укажите число от 1 до 5" aria-describedby="emailHelp" />
          </label>
        </div>
        <div style={{ margin: 'auto', textAlign: 'center' }}>
          <label htmlFor="exampleInputEmail1" className="form-label" style={{ textAlign: 'left' }}>
            Рейтинг книги:
            <input onChange={newInputHandler} name="rating" type="text" className="form-control" id="exampleInputEmail1" placeholder="Укажите число от 1 до 5" aria-describedby="emailHelp" />
          </label>
        </div>
        <div style={{ textAlign: 'center' }}>
          <button style={{ margin: '1rem', backgroundColor: 'green' }} type="submit" onClick={(e) => submitHandler(e)} className="btn btn-primary" data-bs-dismiss="modal">Добавить книгу</button>
        </div>
      </form>
    </div>
  );
}
