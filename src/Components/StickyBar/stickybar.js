import React from 'react'
import './Guides.scss';

function stickybar() {
    return (<>
        <div class="sticky-bar sticky-bar--active">
            Save on Your Move</div><div class="sticky-bar__menu">
            <a href="https://www.comparemymove.com/compare/conveyancing" data-done="https://www.comparemymove.com/your/matches/conveyancing" data-service="conveyancing" class="sticky-bar__link trk--sticky-conveyancing">
                <span class="sticky-bar__link__desktop">
                    Compare Conveyancing
                </span>
                <span class="sticky-bar__link__mobile">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#FFF" fill-rule="nonzero" d="M48 16.5c0 3-.734 5.766-2.203 8.297a16.254 16.254 0 0 1-6 6C37.266 32.266 34.5 33 31.5 33c-1.063 0-2.094-.094-3.094-.281l-2.25 2.531c-.437.5-1 .75-1.687.75h-3.47v3.75a2.17 2.17 0 0 1-.655 1.594A2.17 2.17 0 0 1 18.75 42H15v3.75a2.17 2.17 0 0 1-.656 1.594A2.17 2.17 0 0 1 12.75 48H2.25a2.17 2.17 0 0 1-1.594-.656A2.17 2.17 0 0 1 0 45.75v-7.312c0-.625.219-1.157.656-1.594l15.188-15.188A16.205 16.205 0 0 1 15 16.5c0-3 .734-5.766 2.203-8.297a16.254 16.254 0 0 1 6-6C25.734.734 28.5 0 31.5 0c3 0 5.766.734 8.297 2.203a16.254 16.254 0 0 1 6 6C47.266 10.734 48 13.5 48 16.5zM31.5 12c0 1.25.437 2.313 1.312 3.188S34.75 16.5 36 16.5c1.25 0 2.312-.437 3.187-1.312S40.5 13.25 40.5 12c0-1.25-.438-2.312-1.313-3.187S37.25 7.5 36 7.5c-1.25 0-2.313.438-3.188 1.313S31.5 10.75 31.5 12z"></path></svg>
                    <span>Conveyancing</span>
                </span>
            </a>
            <a href="https://www.comparemymove.com/compare/surveying" data-done="https://www.comparemymove.com/your/matches/surveying" data-service="surveying" class="sticky-bar__link trk--sticky-surveying">
                <span class="sticky-bar__link__desktop">
                    Compare Surveying
                </span>
                <span class="sticky-bar__link__mobile">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 48"><path fill="#FFF" fill-rule="nonzero" d="M31.5 6c1.25 0 2.312.438 3.187 1.313S36 9.25 36 10.5v33c0 1.25-.438 2.312-1.313 3.187S32.75 48 31.5 48h-27c-1.25 0-2.313-.438-3.188-1.313S0 44.75 0 43.5v-33c0-1.25.437-2.312 1.312-3.187S3.25 6 4.5 6H12c0-1.625.594-3.031 1.781-4.219C14.97.594 16.375.001 18 .001c1.625 0 3.031.593 4.219 1.78 1.187 1.188 1.78 2.594 1.78 4.22h7.5zM9 39.75a2.17 2.17 0 0 0 1.594-.656 2.17 2.17 0 0 0 .656-1.594 2.17 2.17 0 0 0-.656-1.594A2.17 2.17 0 0 0 9 35.25a2.17 2.17 0 0 0-1.594.656A2.17 2.17 0 0 0 6.75 37.5c0 .625.219 1.156.656 1.594A2.17 2.17 0 0 0 9 39.75zm0-9a2.17 2.17 0 0 0 1.594-.656 2.17 2.17 0 0 0 .656-1.594 2.17 2.17 0 0 0-.656-1.594A2.17 2.17 0 0 0 9 26.25a2.17 2.17 0 0 0-1.594.656A2.17 2.17 0 0 0 6.75 28.5c0 .625.219 1.156.656 1.594A2.17 2.17 0 0 0 9 30.75zm0-9a2.17 2.17 0 0 0 1.594-.656 2.17 2.17 0 0 0 .656-1.594 2.17 2.17 0 0 0-.656-1.594A2.17 2.17 0 0 0 9 17.25a2.17 2.17 0 0 0-1.594.656A2.17 2.17 0 0 0 6.75 19.5c0 .625.219 1.156.656 1.594A2.17 2.17 0 0 0 9 21.75zm9-18a2.17 2.17 0 0 0-1.594.656A2.17 2.17 0 0 0 15.75 6c0 .625.219 1.156.656 1.594A2.17 2.17 0 0 0 18 8.25a2.17 2.17 0 0 0 1.594-.656A2.17 2.17 0 0 0 20.25 6a2.17 2.17 0 0 0-.656-1.594A2.17 2.17 0 0 0 18 3.75zm12 34.5v-1.5a.717.717 0 0 0-.234-.516.717.717 0 0 0-.516-.234h-13.5a.717.717 0 0 0-.516.234.717.717 0 0 0-.234.516v1.5c0 .188.078.36.234.516a.717.717 0 0 0 .516.234h13.5c.187 0 .36-.078.516-.234A.717.717 0 0 0 30 38.25zm0-9v-1.5a.717.717 0 0 0-.234-.516.717.717 0 0 0-.516-.234h-13.5a.717.717 0 0 0-.516.234.717.717 0 0 0-.234.516v1.5c0 .188.078.36.234.516a.717.717 0 0 0 .516.234h13.5c.187 0 .36-.078.516-.234A.717.717 0 0 0 30 29.25zm0-9v-1.5a.717.717 0 0 0-.234-.516.717.717 0 0 0-.516-.234h-13.5a.717.717 0 0 0-.516.234.717.717 0 0 0-.234.516v1.5c0 .188.078.36.234.516a.717.717 0 0 0 .516.234h13.5c.187 0 .36-.078.516-.234A.717.717 0 0 0 30 20.25z"></path></svg>
                    <span>Surveying</span>
                </span>
            </a>
            <a href="https://www.comparemymove.com/compare/removals" data-done="https://www.comparemymove.com/your/matches/removals" data-service="removals" class="sticky-bar__link trk--sticky-removals">
                <span class="sticky-bar__link__desktop">
                    Compare Removals
                </span>
                <span class="sticky-bar__link__mobile">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 48"><path fill="#FFF" fill-rule="nonzero" d="M58.5 33c.437 0 .797.14 1.078.422.281.281.422.64.422 1.078v3c0 .437-.14.797-.422 1.078-.281.281-.64.422-1.078.422H54c0 2.5-.875 4.625-2.625 6.375S47.5 48 45 48s-4.625-.875-6.375-2.625S36 41.5 36 39H24c0 2.5-.875 4.625-2.625 6.375S17.5 48 15 48s-4.625-.875-6.375-2.625S6 41.5 6 39H4.5c-1.25 0-2.313-.438-3.188-1.313S0 35.75 0 34.5v-30c0-1.25.437-2.313 1.312-3.188S3.25 0 4.5 0h30c1.25 0 2.312.437 3.187 1.312S39 3.25 39 4.5V9h4.125c1.25 0 2.312.437 3.187 1.312l9.375 9.375c.875.875 1.313 1.938 1.313 3.188V33h1.5zM15 43.5c1.25 0 2.312-.438 3.187-1.313S19.5 40.25 19.5 39c0-1.25-.438-2.313-1.313-3.188S16.25 34.5 15 34.5c-1.25 0-2.313.437-3.188 1.312S10.5 37.75 10.5 39c0 1.25.437 2.312 1.312 3.187S13.75 43.5 15 43.5zm30 0c1.25 0 2.312-.438 3.187-1.313S49.5 40.25 49.5 39c0-1.25-.438-2.313-1.313-3.188S46.25 34.5 45 34.5c-1.25 0-2.313.437-3.188 1.312S40.5 37.75 40.5 39c0 1.25.437 2.312 1.312 3.187S43.75 43.5 45 43.5zM52.5 24v-1.125L43.125 13.5H39V24h13.5z"></path></svg>
                    <span>Removals</span>
                </span>
            </a>
            <a href="https://www.comparemymove.com/compare/storage" data-done="https://www.comparemymove.com/your/matches/storage" data-service="storage" class="sticky-bar__link trk--sticky-storage">
                <span class="sticky-bar__link__desktop">
                    Compare Storage
                </span>
                <span class="sticky-bar__link__mobile">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-prefix="fas" data-icon="warehouse" class="svg-inline--fa fa-warehouse fa-w-20" viewBox="0 0 640 512">
                        <path fill="#FFF" d="M504 352H136.4c-4.4 0-8 3.6-8 8l-.1 48c0 4.4 3.6 8 8 8H504c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm0 96H136.1c-4.4 0-8 3.6-8 8l-.1 48c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm0-192H136.6c-4.4 0-8 3.6-8 8l-.1 48c0 4.4 3.6 8 8 8H504c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm106.5-139L338.4 3.7a48.15 48.15 0 0 0-36.9 0L29.5 117C11.7 124.5 0 141.9 0 161.3V504c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8V256c0-17.6 14.6-32 32.6-32h382.8c18 0 32.6 14.4 32.6 32v248c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8V161.3c0-19.4-11.7-36.8-29.5-44.3z"></path>
                    </svg><span>Storage</span>
                </span>
            </a></div>
    </>
    )
}