import * as React from 'react';
import { connect } from 'react-redux'
import { LabFesState, SliderState } from '../store';

import SliderItem1 from '../components/slider/SliderItem1'
import SliderItem2 from '../components/slider/SliderItem2'
import SliderItem3 from '../components/slider/SliderItem3'
import SliderItem4 from '../components/slider/SliderItem4'
import SliderItem5 from '../components/slider/SliderItem5'
import { bindActionCreators, Dispatch } from 'redux';

import * as actions from '../store/actions/sliderActions'

export interface SliderAppProps {

}

interface dispatchProps {
  dispatch : Dispatch
}

type Props = SliderAppProps & SliderState & dispatchProps;

class SliderApp extends React.Component<Props> {

  constructor(props : Props){
    super(props);
  }

  componentDidMount() {

  }
  switchAuto(){
    setTimeout(()=>this.props.dispatch({type: 'CHANGE_SLIDE', payload: 'next'}), 2000)
  }
  public render() {

    setTimeout(()=>{
      if(this.props.currSlide === 0)
        this.props.dispatch({type: 'CHANGE_SLIDE'})
      else if(this.props.currSlide === 1){
        this.props.dispatch({type: 'CHANGE_SLIDE'})
      }
      else if(this.props.currSlide === 2){
        this.props.dispatch({type: 'CHANGE_SLIDE'})
      }
      else if(this.props.currSlide === 3){
        this.props.dispatch({type: 'CHANGE_SLIDE'})
      }
      else {
        this.props.dispatch({type: 'CHANGE_SLIDE_HIDDEN'})
      }
    }, 6000)


    let sliderOffset = this.props.currSlide * this.props.sliderWidth;
    let sliderOptions = {
      transform: `translate3d(${-sliderOffset}px, 0px, 0px)`,
      transitionDuration: `${this.props.transitionDuration}ms`
    };
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
        <ul style={sliderOptions} className="slider">
          <SliderItem1 />
          <SliderItem2 />
          <SliderItem3 />
          <SliderItem4 />
          <SliderItem5 />
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