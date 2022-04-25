import React from 'react'
import './Panel.scss';
import image1 from '../../assets/Panel/1.png';
import image2 from '../../assets/Panel/2.png';
import image3 from '../../assets/Panel/3.png';
import image4 from '../../assets/Panel/4.png';
import image5 from '../../assets/Panel/5.png';
import image6 from '../../assets/Panel/6.png';

export default function Panel() {
    return (
        <>
            <section class="pad--no-top">
                <div class="container">
                    <div class="expert-panel__wrap">
                        <div class="expert-panel__header">
                            <h3 class="expert-panel__header__heading">
                                Our panel of property industry  experts ensure our content  is accurate and insightful
                            </h3>
                            <p class="expert-panel__header__subheading">
                                We work with accredited and experienced property industry professionals to fact-check all of our content.
                                Be informed throughout your house move.
                            </p>
                            <a href="https://www.comparemymove.com/about-us/editorial-process" class="expert-panel__header__btn">
                                Our Editorial Process</a>
                        </div>
                        <ul class="expert-panel__experts">
                            <li class="expert-panel__expert">
                                <a href="/authors/emma-lunn" class="expert-panel__expert__wrap">
                                    <div class="expert-panel__expert__photo">
                                        <img src={image1} alt="" class=" ls-is-cached lazyloaded" width="100" height="100" />
                                    </div>
                                    <div class="expert-panel__expert__details">
                                        <span class="expert-panel__expert__name">
                                            Emma Lunn
                                        </span>
                                        <span class="expert-panel__expert__job">Freelance Personal Finance Journalist</span></div>
                                </a></li><li class="expert-panel__expert">
                                <a href="/authors/gareth-brooks" class="expert-panel__expert__wrap"><div class="expert-panel__expert__photo">
                                    <img src={image2}
                                        alt="" class=" ls-is-cached lazyloaded" width="100" height="100" /></div><div class="expert-panel__expert__details">
                                        <span class="expert-panel__expert__name">
                                            Gareth Brooks
                                        </span>
                                        <span class="expert-panel__expert__job">Solicitor and Partner of RMNJ Solicitors</span></div>
                                </a></li><li class="expert-panel__expert">
                                <a href="/authors/graham-norwood" class="expert-panel__expert__wrap"><div class="expert-panel__expert__photo">
                                    <img src={image3} alt="" class=" ls-is-cached lazyloaded" width="100" height="100" /></div><div class="expert-panel__expert__details">
                                        <span class="expert-panel__expert__name">
                                            Graham Norwood
                                        </span>
                                        <span class="expert-panel__expert__job">Property Journalist and Editor</span></div>
                                </a></li><li class="expert-panel__expert">
                                <a href="/authors/jayne-dowle" class="expert-panel__expert__wrap"><div class="expert-panel__expert__photo">
                                    <img src={image4} alt="" class=" ls-is-cached lazyloaded" width="100" height="100" /></div><div class="expert-panel__expert__details">
                                        <span class="expert-panel__expert__name">
                                            Jayne Dowle
                                        </span>
                                        <span class="expert-panel__expert__job">Freelance Property Journalist &amp; Copywriter</span></div>
                                </a></li><li class="expert-panel__expert">
                                <a href="/authors/mike-ashton" class="expert-panel__expert__wrap"><div class="expert-panel__expert__photo">
                                    <img src={image5} alt="" class=" ls-is-cached lazyloaded" width="100" height="100" /></div><div class="expert-panel__expert__details">
                                        <span class="expert-panel__expert__name">
                                            Mike Ashton
                                        </span>
                                        <span class="expert-panel__expert__job">Director of Cambridge Building Surveyors</span></div>
                                </a></li><li class="expert-panel__expert">
                                <a href="/authors/steve-jordan" class="expert-panel__expert__wrap"><div class="expert-panel__expert__photo">
                                    <img src={image6} alt="" class=" ls-is-cached lazyloaded" width="100" height="100" /></div><div class="expert-panel__expert__details">
                                        <span class="expert-panel__expert__name">
                                            Steve Jordan
                                        </span>
                                        <span class="expert-panel__expert__job">Owner and Editor of The Mover Magazine</span></div>
                                </a></li></ul></div></div></section>
        </>
    )
}