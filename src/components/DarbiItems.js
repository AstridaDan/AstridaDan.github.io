import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='darbi__item'>
        <Link className='darbi__item__link' >
          <figure className='darbi__item__pic-wrap' >
            <img
              className='darbi__item__img'
              alt='Darbi'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;