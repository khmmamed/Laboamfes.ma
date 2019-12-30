import * as React from 'react';
import AboutApp from '../components/aboutus/AboutApp'

export interface AboutUsProps {
}

export default function AboutUs(props: AboutUsProps) {
    return (
        <section id="about">
            <div className="dark-bg about-container">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-12 col-md-6 about-poster-container">
                            <div className="about-poster">
                                <img src="images/about-img.jpg" alt="qui_somme_nous" />
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 col-md-6">
                                    <div className="title-content">
                                        <h1>Pourquoi Choisir Notre Laboratoire</h1>
                                        <hr /><hr />
                                    </div>
                                    <AboutApp />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
