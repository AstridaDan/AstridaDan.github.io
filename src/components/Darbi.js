import React from 'react';
import CardItem from './DarbiItems';
import './Darbi.css';

function Darbi() {
    return (
        <div className='bildes'> 
            <div className='darbi__container'>
                <div className='darbi__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-a.jpeg'
                            text='Black and White HOVER effect with CSS'
                        />
                         <CardItem
                            src='images/img-c.jpeg'
                            text='Black and White'
                        />
                         <CardItem
                            src='images/img-d.jpg'
                            text='Black and White HOVER effect with CSS'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-b.jpeg'
                            text='Here is a 4 photo line'
                        />
                        <CardItem
                            src='images/img-9.jpg'
                            text='Effect'
                        />
                        <CardItem
                            src='images/img-4.jpg'
                            text='Hover'
                        />
                        <CardItem
                            src='images/img-1.jpg'
                            text='here'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-6.jpg'
                            text='Try'
                        />
                        <CardItem
                            src='images/img-3.jpg'
                            text='it!'
                        />
                    </ul>
                    <h2>...Here you can put some comment</h2>
                </div>
            </div>
        </div>
    );
}

export default Darbi;
