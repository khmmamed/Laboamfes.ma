import * as React from 'react';
import { Link as ScrollLink } from 'react-scroll';

export interface SliderItem2Props {
}

export default class SliderItem2 extends React.Component<SliderItem2Props> {

    public render() {

        let scrollOptions = {
            duration: 1000,
            offset: -100,
            smooth: true,
            spy: true
        };

        let sliderItemBg = {
            background: 'linear-gradient(to bottom, rgba(30, 30, 30, .5) 0%, rgba(30, 30, 30, .5) 100%), url("./images/Laboratoire-Fes-2.jpg") no-repeat center',
            backgroundSize: 'cover'
        };

        return (
            <li className="slider-item" style={sliderItemBg} >
                <div className="slider-content">
                    <div className="container slider-content-container">
                        <h1 className="slider-text1">#2 <span className="text-highlight">Notre Assurance de Qualite</span></h1>
                        <h2 className="slider-text2">Nos Automates Biologiques</h2>
                        <p className="slider-text3">Nous disposons des derniers Technologies des Automates</p>
                        <div className="slider-btn-container">
                            <ScrollLink className="btn home-btn" to="PourQuoi-Nous" {...scrollOptions}>Explore Nos Automates</ScrollLink>
                            <ScrollLink className="btn home-btn" to="contact" {...scrollOptions}>Rendez-Vous</ScrollLink>
                        </div>
                    </div>
                </div>
            </li>
        );
    }
}
