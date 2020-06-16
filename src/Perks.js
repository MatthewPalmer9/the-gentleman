import React, { Component } from 'react';
import tuxedo from './tuxedo.jpg'

export default class Perks extends Component {
    render() {
        return(
            <div>
                <section className="perks text-gray-700 body-font">
                    <div className="container px-5 py-24 mx-auto flex flex-wrap">
                        <div className="perkPic lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                        <img alt="feature" class="object-cover object-center h-full w-full" src={tuxedo}></img>
                        </div>
                        <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                        <div className="flex flex-col mb-10 lg:items-start items-center">
                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                                <i class="brain fas fa-brain"></i>
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Comfort for the Body &#38; Mind</h2>
                                <p className="leading-relaxed text-base">Our tuxedos aren't just made for looks. We tailor them for your confidence so that you never have to second guess whether or not you're the classiest man in the building.</p>
                            </div>
                        </div>
                        <div className="flex flex-col mb-10 lg:items-start items-center">
                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                            <i class="tie fas fa-user-tie"></i>
                            </div>
                            <div className="flex-grow">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Convenience</h2>
                            <p className="leading-relaxed text-base">Rest assured knowing our business is centered around you. We are committed to 100% total customer satisfaction, and we are prepared to prove it. Our staff is on standby 24/7 waiting to assist you with all of your needs.</p>
                            
                            </div>
                        </div>
                        <div className="flex flex-col mb-10 lg:items-start items-center">
                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                            <i class="usd fas fa-hand-holding-usd"></i>
                            </div>
                            <div className="flex-grow">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Affordable</h2>
                            <p className="leading-relaxed text-base">You work hard for your money. That's why we've made it convenient for you by offering affordable financing with low monthly payments. *Subject to credit approval.</p>
                            <a href="#" className="mt-3 text-indigo-500 inline-flex items-center">SHOP
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}