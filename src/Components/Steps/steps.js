import React from 'react';
import './steps.scss';
import image1 from '../../assets/Steps/step1.png';
import image2 from '../../assets/Steps/step2.png';
import image3 from '../../assets/Steps/step3.png';
import image4 from '../../assets/Steps/step4.png';


function Steps() {
    return (
        <div>

            <section class="icon-cards bg--off-white text-colour--deep-purple mrgn--none pad--default border-btm--none border-top--none tri--none">
                <div class="container">
                    <h2 class="icon-cards__heading">
                        Compare Industry Professionals in&nbsp;Minutes</h2>
                    <div class="icon-cards__wrap icon-cards__wrap--no-btn">
                        <div class="icon-cards__card">
                            <div class="icon-cards__card__body">
                                <h3 class="">
                                    Step One
                                </h3>
                                <p>
                                    Fill out a quick and easy form for the service you need
                                </p>
                            </div>
                            <div class="icon-cards__card__icon">
                                <img src={image1} width="150" height="150" alt="Form Bubble" class=" lazyloaded" />
                            </div>
                        </div>
                        <div class="icon-cards__card">
                            <div class="icon-cards__card__body">
                                <h3 class="">
                                    Step Two
                                </h3>
                                <p>
                                    We'll match you with professional surveyors, conveyancers, removal or storage companies in your area
                                </p>
                            </div>
                            <div class="icon-cards__card__icon">
                                <img src={image2} width="150" height="150" alt="Verified Bubble" class=" lazyloaded" />
                            </div>
                        </div>
                        <div class="icon-cards__card">
                            <div class="icon-cards__card__body">
                                <h3 class="">
                                    Step Three
                                </h3>
                                <p>
                                    Your matches will contact you to learn more about your requirements
                                </p>
                            </div>
                            <div class="icon-cards__card__icon">
                                <img src={image3} width="150" height="150" alt="Contact Bubble" class=" lazyloaded" />
                            </div>
                        </div>
                        <div class="icon-cards__card">
                            <div class="icon-cards__card__body">
                                <h3 class="">
                                    Step Four
                                </h3>
                                <p>
                                    Read partner reviews, compare costs and make your choice
                                </p>
                            </div>
                            <div class="icon-cards__card__icon">
                                <img src={image4} width="150" height="150" alt="Save Bubble" class=" lazyloaded" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
}

export default Steps;