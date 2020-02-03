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
            background: 'linear-gradient(to bottom, rgba(30, 30, 30, .5) 0%, rgba(30, 30, 30, .5) 100%), url("./images/Prelevement_A_Domicile.jpg") no-repeat center',
            backgroundSize: 'cover'
        };

        return (
            <li className="slider-item" style={sliderItemBg} >
                <div className="slider-content">
                    <div className="container slider-content-container">
                        <h1 className="slider-text1">#3 <span className="text-highlight">Notre Offre Clientele</span></h1>
                        <h2 className="slider-text2">Pris du Sang A Domicile</h2>
                        <p className="slider-text3">Prendre un rendez vous de prelevement a domicile en ligne</p>
                        <div className="slider-btn-container">
                            <ScrollLink className="btn home-btn" to="work" {...scrollOptions}>Voir Maintenant</ScrollLink>
                            <ScrollLink className="btn home-btn" to="contact" {...scrollOptions}>Rendez-vous</ScrollLink>
                        </div>
                    </div>
                </div>
            </li>
        );
    }
}
