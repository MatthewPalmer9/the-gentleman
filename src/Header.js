import React, {Component} from 'react';

export default class Header extends Component {
    render() {
        return (
            <header className="text-gray-700 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
                <a href="/" className="animate fadeInLeft mr-5">Home</a>
                <a href="#" className="animate fadeInLeft mr-5">About</a>
                <a href="#" className="animate fadeInLeft mr-5 ">Store</a>
                <a href="#" className="animate fadeInLeft mr-5">Careers</a>
                <a href="#" className="animate fadeInLeft mr-5">Support</a>
                </nav>
                <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
                <span className="animate title fadeInTop nowrap ml-3 text-xl">THE GENTLEMAN</span>
                </a>
                <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
                <a href="#" className="animate signUp fadeInRight inline-flex items-center border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">
                    Sign Up
                </a>
                <span>&nbsp;&nbsp;&nbsp;</span>
                <a href="#" className="animate fadeInRight logIn inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">
                    Log In
                </a>
                </div>
            </div>
            </header>
        )
    }
}