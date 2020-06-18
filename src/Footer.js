import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
                <div className="text-gray-700 body-font">
                    <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <span className="footer ml-3 text-xl">Made with <span className="heart">&#9829;</span> by MRP | Technologies</span>
                        </a>
                        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2020 The Gentleman —
                         <a href="#" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@thegentlemanofficial</a>
                        </p>
                    </div>
                </div>
        )
    }
}