import React, { Component } from 'react';
import gentleman from './TheGentleman-Logo.jpg';

export default class Picture extends Component {
    render() {
        return(
            <div>
                <section className="main text-gray-700 body-font">
                    <div className="container px-5 mx-auto flex flex-wrap">
                        <div className="lg:w-2/3 mx-auto">
                            <div className="gentleman flex flex-wrap w-full py-32 px-10 relative mb-4">
                                <img alt="gallery" className="animate fadeInBottom gentleman w-full object-cover h-full object-center block absolute inset-0" src={gentleman}></img>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}