import * as React from 'react';
import { Link as ScrollLink } from 'react-scroll';

export interface SliderItem1Props {
}

export default class SliderItem1 extends React.Component<SliderItem1Props> {

    public render() {

        let scrollOptions = {
            duration: 1000,
            offset: -100,
            smooth: true,
            spy: true
        };

        let sliderItemBg = {
            background: 'linear-gradient(to bottom, rgba(30, 30, 30, .5) 0%, rgba(30, 30, 30, .5) 100%), url("./images/Laboratoire-Fes-1.jpg") no-repeat center',
            backgroundSize: 'cover'
        };

        return (
            <li className="slider-item" style={sliderItemBg} >
                <div className="slider-content">
                    <div className="container slider-content-container">
                        <h1 className="slider-text1">#1 <span className="text-highlight">Notre Approche Qualite</span></h1>
                        <h2 className="slider-text2">Laboratiore Analyses Medicales Fes</h2>
                        <p className="slider-text3">Bienvenue A Notre Laboratoire : Boulevard Biranzaane, Lot 8 Res Nour, Bureau N°11 Ex: Moulin Idrissia ) Atlas, Fès 30000</p>
                        <div className="slider-btn-container">
                            <ScrollLink className="btn home-btn" to="ContactUs" {...scrollOptions}>Localiser Le Laboratoire</ScrollLink>
                            <ScrollLink className="btn home-btn" to="contact" {...scrollOptions}>Prendre Un Rendez-Vous</ScrollLink>
                        </div>
                    </div>
                </div>
            </li>
        );
    }
}
