import React from 'react';
import FadeIn from 'react-fade-in';

import './App.css';

export enum MENU_TYPE {
    KAFANA = 'kafana',
    ZHURKA = 'zhurka'
}

function Menu(props: { goBack: any, menu: string }) {
    return (
        props.menu == MENU_TYPE.ZHURKA ?
            <div className="Invitation">
                <FadeIn transitionDuration={800} delay={500}>
                    <div className='invitation-frame'>
                        <div className='invitation-body'>
                            <h3 className='accent'>
                                Drinks Menu - Groovelyn
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
            </div > : <div className="Invitation">
                <FadeIn transitionDuration={800} delay={500}>
                    <div className='invitation-frame'>
                        <div className='invitation-body'>
                            <h3 className='accent'>
                                Drinks Menu - Lira
                            </h3>
                            <div>
                                <ul className='menu-items'>
                                    <li>Скопско</li>
                                    <li>Скопско Smooth</li>
                                    <li>Амстел</li>
                                    <li>Тиквеш класик</li>
                                    <li>Темјаника</li>
                                    <li>Траминец</li>
                                    <li>Т'га за југ</li>
                                    <li>Сок - газиран</li>
                                    <li>Сок - негазиран</li>
                                    <li>Тиквеш лозова ракија</li>
                                    <li>Узо</li>
                                    <li>Мастика</li>
                                    <li>Шток</li>
                                    <li>Мартини</li>
                                    <li>Кампари</li>
                                    <li>Џин Gordon's</li>
                                    <li>Вотка - Smirnoff</li>
                                    <li>Вотка - Finlandia</li>
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
