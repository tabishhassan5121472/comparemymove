import React from 'react'
import '../../Components/Header/HeaderTop.scss';
import image1 from '../../assets/Stickybar/1.png';
import image2 from '../../assets/Stickybar/2.png';
import image3 from '../../assets/Stickybar/3.png';
import image4 from '../../assets/Stickybar/4.png';
import './stickybar.scss'

export default function Stickybar() {
    return (<>
        <div class="sticky-bar sticky-bar--active">
            Save on Your Move</div>
        <div class="sticky-bar__menu">
            <a href="/" class="sticky-bar__link trk--sticky-conveyancing">
                <span class="sticky-bar__link__desktop">
                    Compare Conveyancing
                </span>
                <span class="sticky-bar__link__mobile">
                    <img src={image1} alt="" />
                    <span>Conveyancing</span>
                </span>
            </a>
            <a href="/" class="sticky-bar__link trk--sticky-surveying">
                <span class="sticky-bar__link__desktop">
                    Compare Surveying
                </span>
                <span class="sticky-bar__link__mobile">
                    <img src={image2} alt="" />
                    <span>Surveying</span>
                </span>
            </a>
            <a href="/" class="sticky-bar__link trk--sticky-removals">
                <span class="sticky-bar__link__desktop">
                    Compare Removals
                </span>
                <span class="sticky-bar__link__mobile">
                    <img src={image3} alt="" />
                    <span>Removals</span>
                </span>
            </a>
            <a href="/" class="sticky-bar__link trk--sticky-storage">
                <span class="sticky-bar__link__desktop">
                    Compare Storage
                </span>
                <span class="sticky-bar__link__mobile">
                    <img src={image4} alt="" />
                    <span>Storage</span>
                </span>
            </a>
        </div>
    </>
    )
}