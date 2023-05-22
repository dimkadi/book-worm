import React from 'react'

export default function FavCard({favorites}) {
  return (
    <div className='container'>
        <div class="card" style="width: 18rem;">
            <img src={favorites[i].Book.photo} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">{favorites[i].Book.title}</h5>
              <p class="card-text">{favorites[i].Book.rating}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
  );
}
