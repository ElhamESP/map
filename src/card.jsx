import React from "react";
import './card.scss';
import Home from'./assets/home.png';
import Spider from'./assets/spider.png';
import Phone from'./assets/phone.png';
import Dot from'./assets/dot.png';
import Tik from'./assets/tik.png';

    function Card(){
    return(
        <div>
        <div className="container">
            <div className="image-section">
                <div className="home-image">
                    <img src={Home} className="home-image"/>
                </div>
            </div>
            <div className="left-section">
                <div className="spider-owner-time-address-section">
                    <div className="address-time-section">
                        <div className="address">
                            100 متری شهرک رازی
                        </div>
                        <div className="time">
                            2 روز پیش
                        </div>
                    </div>
                    <div className="spider-owner-section">
                        <div className="owner">
                            <div className="percent"> 70% </div>
                            مالک
                        </div>
                        <div className="spider">
                            <img src={Spider} className="big-icon-spider"/>

                        </div>
                    </div>
                </div>
                <div className="bottom-section">
                <div className="features">
                    منبع : دیوار | فروش  | 120 متر  |  3 خواب  |  طبقه 2
                </div>
                </div>
            </div>
        </div>
            <div className="container">
                <div className="image-section">
                    <div className="home-image">
                        <img src={Home} className="home-image"/>
                    </div>
                </div>
                <div className="left-section">
                    <div className="spider-owner-time-address-section">
                        <div className="address-time-section">
                            <div className="address">
                                100 متری شهرک رازی
                            </div>
                            <div className="time">
                                2 روز پیش
                            </div>
                        </div>
                        <div className="owner-phone-section">
                            093550501213
                            <img src={Phone} className="phone-image"/>
                            <img src={Dot} className="big-icon-spider"/>

                        </div>
                    </div>
                    <div className="bottom-section">
                    <div className="features">
                        منبع : دیوار | فروش  | 120 متر  |  3 خواب  |  طبقه 2

                    </div>
                        <div className="type">
                          مالک
                        </div>
                        <img src={Tik} className="small-icon"/>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card;