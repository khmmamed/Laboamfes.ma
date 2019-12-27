import * as React from 'react';

export interface SliderItem1Props {
}

export default class SliderItem1 extends React.Component<SliderItem1Props> {
    public render() {
        return (
            <li className="slider-item" >
                <div className="slider-content">
                    <div className="container slider-content-container">
                        <h1 className="slider-text1">#3 The ham is <span className="text-highlight">a psd template</span></h1>
                        <h2 className="slider-text2">We are professionals</h2>
                        <p className="slider-text3">Zril mandamus eos ne, sed audire facilisis ex</p>
                        <div className="slider-btn-container">
                            image 1
                        </div>
                    </div>
                </div>
            </li>
        );
    }
}
