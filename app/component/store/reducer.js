import {PENAMBAHAN, PENGURANGAN} from './aksi';

const inisialisasi = {
    counter : 0,    
};

export const mainReducer = (state = inisialisasi, action) =>{
    switch(action.type) {
        case PENAMBAHAN:
            return {...state, counter: state.counter + 1};
        case PENGURANGAN:
            return {...state, counter: state.counter - 1};
        default:
            return state;
    }
};