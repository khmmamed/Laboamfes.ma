import * as React from 'react';
import { Link } from 'react-router-dom';

export interface ServiceProps {
}

export default function service (props: ServiceProps) {
    return (
        <section id="Service">
            <div className="light-bg section-offset-bottom">
                <div className="container">
                    <div className="title-content">
                        <h1>Our Services</h1>
                        <hr /><hr />
                    </div>
                    <div className="service-nav-container">
                        <ul className="service-nav">
                            <li className="service-nav-item active" >
                                <Link to="/service/Biochimie-Clinique"><span>Biochimie Clinique</span></Link>
                            </li>
                            <li className="service-nav-item" >
                                <Link to="/service/Hématologie"><span>Hématologie</span></Link>
                            </li>
                            <li className="service-nav-item" >
                                <Link to="/service/Immuno-Hématologie"><span>Immuno-Hématologie</span></Link>
                            </li>
                            <li className="service-nav-item" >
                                <Link to="/service/Hemostase"><span>Hemostase</span></Link>
                            </li>
                            <li className="service-nav-item" >
                                <Link to="/service/Immunoanalyses"><span>Immunoanalyses</span></Link>
                            </li>
                            <li className="service-nav-item" >
                                <Link to="/service/Microbiologie"><span>Microbiologie</span></Link>
                            </li>
                            <li className="service-nav-item" >
                                <Link to="/service/Allergologie"><span>Allergologie</span></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
