import React from 'react'
import './Asseen.scss';
import image1 from '../../assets/AsSeen/1.png';
import image2 from '../../assets/AsSeen/2.png';
import image3 from '../../assets/AsSeen/3.png';
import image4 from '../../assets/AsSeen/4.png';
import image5 from '../../assets/AsSeen/5.png';
import image6 from '../../assets/AsSeen/6.png';
import image7 from '../../assets/AsSeen/7.png';
import image8 from '../../assets/AsSeen/8.png';
import image9 from '../../assets/AsSeen/9.png';


import "./Asseen.scss"
export default function Asseen() {
    return (
        <>
            <section class="b2b-services-header"><div class="container"><div class="b2b-services-header__content"><h2 class="b2b-services-header__heading">
                Win Work With Compare My Move</h2><p class="b2b-services-header__subheading">
                    Are you a reputable conveyancing, removal, surveying or storage company? Join our network to start growing your business</p></div><div class="b2b-services-header__buttons">
                    <a href="" class="b2b-services-header__buttons__button js-b2b-swapping" data-btob-type="conveyancing">
                        <img src={image6} alt="Conveyancing" class="b2b-services-header__buttons__button__img ls-is-cached lazyloaded" width="150" height="134" />Conveyancing
                    </a>
                    <a href="" class="b2b-services-header__buttons__button js-b2b-swapping" data-btob-type="removals">
                        <img src={image7} alt="Removals" class="b2b-services-header__buttons__button__img ls-is-cached lazyloaded" width="150" height="134" />Removals
                    </a>
                    <a href="" class="b2b-services-header__buttons__button js-b2b-swapping" data-btob-type="surveying">
                        <img src={image8} data-src="/assets/img/svg/papersheets-surveying.svg" alt="Surveying" class="b2b-services-header__buttons__button__img ls-is-cached lazyloaded" width="150" height="113" />Surveying</a>
                    <a href="" class="b2b-services-header__buttons__button js-b2b-swapping" data-btob-type="storage">
                        <img src={image9} data-src="" alt="Storage" class="b2b-services-header__buttons__button__img ls-is-cached lazyloaded" width="150" height="150" />Storage
                    </a></div></div></section>
            <section class="pad--shrink mrgn--none align--center">
                <div class="seen-in__container">
                    <span class="seen-in__title">As seen in:</span>
                    <a href="/" target="_blank" rel="noopener" class="seen-in__logo">
                        <img src={image1} data-src="" alt="" width="176" height="34" />
                    </a>
                    <a href="/" target="_blank" rel="noopener" class="seen-in__logo--bt">
                        <img src={image2} alt="" width="46" height="46" />
                    </a>
                    <a href="/" target="_blank" rel="" class="seen-in__logo">
                        <img src={image3} alt="" width="205" height="42" /></a>
                    <a href="/" target="_blank" rel="" class="seen-in__logo">
                        <img src={image4} alt="" width="222" height="36" /></a>
                    <a href="/" target="_blank" rel="" class="seen-in__logo">
                        <img src={image5} alt="" width="215" height="41" /></a></div></section>
        </>
    )
}
