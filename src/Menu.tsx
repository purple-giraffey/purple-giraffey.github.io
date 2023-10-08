import React from 'react';
import FadeIn from 'react-fade-in';

import './App.css';

function Menu(props: { goBack: any }) {
    return (
        <div className="Invitation">
            <FadeIn transitionDuration={800} delay={500}>
                <div className='invitation-frame'>
                    <div className='invitation-body'>
                        <h3 className='accent'>
                            Drinks Menu
                        </h3>
                        <div>
                            <ul className='menu-items'>
                                <li>Скопско</li>
                                <li>Скопско Smooth</li>
                                <li>Златен Даб</li>
                                <li>Амстел</li>
                                <li>Хајнекен безалкохолно</li>
                                <li>Кромбахер пилс</li>
                                <li>Кромбахер матно</li>
                                <li>Кромбахер темно</li>
                                <li>J&B</li>
                                <li>Jameson</li>
                                <li>Jim Beam</li>
                                <li>Gordon's</li>
                                <li>Smirnoff</li>
                                <li>Finlandia</li>
                                <li>Captain Morgan Gold</li>
                                <li>Кампари-Тоник</li>
                                <li>Џин-Тоник</li>
                                <li>Бело вино (наливно)</li>
                                <li>Црвено вино (наливно)</li>
                                <li>Кока Кола</li>
                                <li>Кока Кола Зеро</li>
                                <li>Швепс</li>
                                <li>Тоник</li>
                                <li>Сок од портокал</li>
                                <li>Сок од боровница</li>
                                <li>Сок од јаболко</li>
                                <li>Вода (кисела/обична)</li>
                            </ul>
                        </div>
                        <p className='menu-link'>← <a onClick={() => props.goBack()}>Go back</a></p>

                    </div>
                </div>
            </FadeIn >
        </div >
    );
}

export default Menu;
