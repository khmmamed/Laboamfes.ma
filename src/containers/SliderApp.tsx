import * as React from 'react';
import SliderItem from '../components/slider/SliderItem1'

export interface SliderAppProps {
}

export default function SliderApp(props: SliderAppProps) {
    return (
        <div className="slider-container">
            <div className="container">
                <div className="slider-nav-container">
                    <span className="slider-nav-left" >
                        <i className="fa fa-angle-left" style={{ fontSize: '40px' }} />
                    </span>
                    <span className="slider-nav-right" >
                        <i className="fa fa-angle-right" style={{ fontSize: '40px' }} />
                    </span>
                </div>
            </div>
            <ul className="slider">
                <SliderItem />
            </ul>
        </div>
    );
}
