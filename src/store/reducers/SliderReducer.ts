import {SliderState} from '../'
import { Action } from 'redux';

const slidesCount = 3;
const transitionTime = 1000;

let stateInitial : SliderState = {
    currSlide: 0,
    transitionDuration: transitionTime,
    sliderWidth: document.documentElement.clientWidth,
    hiddenChange: false
};


const SliderReducer = (state = stateInitial, action : any) => {

    let width = document.documentElement.clientWidth;

    switch (action.type) {
        case 'CHANGE_SLIDE': {
            

            return {...state, currSlide: state.currSlide + 1 , transitionDuration: transitionTime, sliderWidth: width};
            break;
        }
        case 'CHANGE_SLIDE_HIDDEN': {
            return {...state, currSlide: 0 , transitionDuration: transitionTime, sliderWidth: width};
            break;
        }
        default: {
            return state;
        }
    }
};

export default SliderReducer;