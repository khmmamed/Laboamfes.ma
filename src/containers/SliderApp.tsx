import * as React from 'react';
import { connect } from 'react-redux'
import { LabFesState, SliderState } from '../store';

import SliderItem1 from '../components/slider/SliderItem1'
import SliderItem2 from '../components/slider/SliderItem2'

export interface SliderAppProps {
}

type Props = SliderAppProps ;

class SliderApp extends React.Component<Props> {
  public render() {
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
          <SliderItem1 />
          <SliderItem2 />
        </ul>
      </div>
    );
  }
}

const mapState2Props = ({ slider }: LabFesState) => ({
  currSlide: slider.currSlide,
  transitionDuration: slider.transitionDuration,
  sliderWidth: slider.sliderWidth,
  hiddenChange: slider.hiddenChange
})

export default connect(mapState2Props)(SliderApp);