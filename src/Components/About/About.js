import React from 'react'
import './About.scss';
import image1 from '../../assets/About/mobile.png';


function About() {
    return (<>
        <section class="blocks bg--deep-purple bg-img--none text-colour--white align--left mrgn--none pad--shrink-top-no-btm border-btm--none border-top--none tri--none">
            <div class="container">
                <div class="blocks__wrap blocks--normal">
                    <div class="blocks__block blocks__block--half mrgn--shrink pad--none border-btm--none border-top--none valign--normal blocks__block--has-block">
                        <div class="blocks__block__body">
                            <h2 class="rebrand-heading">
                                About Compare My Move</h2>
                            <p class="large-copy">
                                At Compare My Move, our mission is simple: to help you with
                                <strong>every step
                                </strong>
                                of your moving house journey. We connect you with licensed conveyancers, chartered surveyors, removal and storage companies to
                                <strong>
                                    save you time, money and stress</strong>
                                on your move. We’ve worked hard to build a strong network of trusted professionals to help people move house seamlessly.</p>
                            <p>The process is straightforward, too. You complete a quick and easy form with details of your move for the services you require. We will match you with up to 6 verified and trusted industry professionals so you can compare and save money.
                                You will receive your matches instantly where you can read real reviews and learn more about each company.</p>
                            <p>To ensure you’re only ever matched with quality companies, all partners must pass our strict verification process. All removal companies must have a legitimate and working website, Goods in Transit and Public Liability insurance, whilst surveyors must be RICS regulated and conveyancers must be regulated by the SRA, CLC, LSS, LSNI or CILEx. Storage companies must have Public Liability insurance.
                            </p>
                        </div>
                    </div>
                    <div class="blocks__block blocks__block--half mrgn--no-btm pad--no-btm border-btm--none border-top--none valign--bottom align--center blocks__block--has-block">
                        <div class="blocks__block__img blocks__block__img--mrgn-none">

                            <img src={image1} width="620" height="620" alt="Phone guides 2 1" class=" ls-is-cached lazyloaded" />
                        </div>
                        <div class="blocks__block__body">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}
export default About;