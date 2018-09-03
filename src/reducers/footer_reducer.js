import { SHOW_MENU, HIDE_MENU } from '../actions/action_types';

export default function(state = {}, action) {
    switch(action.type) {
        case SHOW_MENU:
            console.log('showing menu');
            return {
                ...state,
                showMenu: true
            };
        case HIDE_MENU:
            console.log('hiding menu');
            return {
                ...state,
                showMenu: false
            };
        default:
            return state;
    }
}