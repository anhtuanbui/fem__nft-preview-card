import React, { Component } from 'react';
import equil from '../../images/image-equilibrium.jpg';
import avatar from '../../images/image-avatar.png';
import clock from '../../images/icon-clock.svg';
import eth from '../../images/icon-ethereum.svg';
import view from '../../images/icon-view.svg';
import './Card.scss';

export default class Card extends Component {
    render() {
        return (
            <div className='main'>
                <div className="card">
                    <div className="card__image">
                        <img src={equil} alt="block" />
                        <div className="card__overlay">
                            <img src={view} alt={view.name} />
                        </div>
                    </div>
                    <h2 className='card__title'>Equilibrium <span>#3429</span></h2>
                    <p className='card__description'>Our Equilibrium collection promotes balance and calm.</p>
                    <div className='card__second'>
                        <p className='card__eth'><img src={eth} alt="" aria-hidden='true'/> 0.041 ETH</p>
                        <p className='card__time'><img src={clock} alt="" aria-hidden='true' />3 days left</p>
                    </div>
                    <hr />
                    <div className='card__third'>
                        <img className='card__author' src={avatar} alt="author" />
                        <p className='card__author-name'>Creation of <span>Jules Wyvern</span></p>
                    </div>
                </div>
            </div>
        )
    }
}
