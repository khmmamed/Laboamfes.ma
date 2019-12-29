import { store } from '../../index'

let switchAutoTimerId : any;
let switchAutoEnableTimerId : any;

export const switchAuto = () => {
    setTimeout(()=>console.log('next'), 2000) 
};
