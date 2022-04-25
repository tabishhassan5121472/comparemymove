import React from 'react';
import './Guide.scss'

function Guides() {
    return (<>
        <div class="standard-body bg--none text-colour--body align--center mrgn--none pad--default border-btm--none border-top--none frank-headings">
            <div class="container">
                <h2 class="rebrand-heading rebrand-heading--deep-purple">
                    Helping You Every Step of Your Move</h2>
                <p class="large-copy">Our advice centre features expertly reviewed guides on buying, selling and moving house.</p>
            </div></div>
        <section class="advice-features pad--no-top"><div class="container">
            <div class="advice-features__wrap">
                <div class="advice-features__block advice-features__block--dark">
                    <span class="advice-features__block__heading">Useful Calculators</span>
                    <ul><li>
                        <a href="/">Cost of Moving House Calculator</a></li><li>
                            <a href="/">Stamp Duty Calculator</a></li><li>
                            <a href="/">Help to Buy Calculator</a></li></ul></div><div class="advice-features__block">
                    <span class="advice-features__block__heading">Guides on Costs</span><ul><li>
                        <a href="/">What is the Cost of Selling a House?</a></li><li>
                            <a href="/">Removal Company Costs</a></li><li>
                            <a href="/">How Much Do Self Storage Units Cost?</a></li><li>
                            <a href="/">Average Conveyancing Costs</a></li><li>
                            <a href="/">How Much Does a House Survey Cost in 2022?</a></li></ul></div><div class="advice-features__block">
                    <span class="advice-features__block__heading">Helpful Guides</span><ul><li>
                        <a href="/">What is a Building Survey (Level 3) or Full Structural Survey?</a></li><li>
                            <a href="/">What is a HomeBuyer Report? (Level 2 Survey)</a></li><li>
                            <a href="/">The UK's 10 Best Movers and Packers</a></li><li>
                            <a href="/">What Happens on Completion Day?</a></li><li>
                            <a href="">Moving House Checklist: Top Tips for a Stress Free Move</a></li></ul></div></div></div></section>
    </>)
}

export default Guides;