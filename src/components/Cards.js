import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1 className='darbi'> Card gallery!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-a.jpeg'
                            text='PRESS here to go to gallery'
                            label='Amazing label' 
                            path='/sign-up'
                        />
                        <CardItem
                            src='images/img-c.jpeg'
                            text='Card size depend of content lenght'
                            label='Wou' 
                            path='/sign-up'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-b.jpeg'
                            text='PRESS here to go to gallery'
                            label='Look' 
                            path='/sign-up'
                        />
                        <CardItem
                            src='images/img-9.jpg'
                            text='Card size depend of content lenght'
                            label='Oh my' 
                            path='/sign-up'
                        />
                        <CardItem
                            src='images/img-4.jpg'
                            text='PRESS here to go to gallery'
                            label='LINK'
                            path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
