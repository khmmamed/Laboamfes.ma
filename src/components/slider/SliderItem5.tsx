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
            background: 'linear-gradient(to bottom, rgba(30, 30, 30, .5) 0%, rgba(30, 30, 30, .5) 100%), url("./images/Personel_Professionel.jpg") no-repeat center',
            backgroundSize: 'cover'
        };

        return (
            <li className="slider-item" style={sliderItemBg} >
                <div className="slider-content">
                    <div className="container slider-content-container">
                        <h1 className="slider-text1">#5 <span className="text-highlight">Notre Approche Qualite</span></h1>
                        <h2 className="slider-text2">Nous Somme Professionelle</h2>
                        <p className="slider-text3">20 ans d'experiences a votre disposition</p>
                        <div className="slider-btn-container">
                            <ScrollLink className="btn home-btn" to="work" {...scrollOptions}>Explorer Notre Equipe</ScrollLink>
                            <ScrollLink className="btn home-btn" to="contact" {...scrollOptions}>Contacter-Nous</ScrollLink>
                        </div>
                    </div>
                </div>
            </li>
        );
    }
}
