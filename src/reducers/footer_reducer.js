import { SHOW_MENU, HIDE_MENU } from '../actions/action_types';

export default function(state = {}, action) {
    switch(action.type) {
        case SHOW_MENU:
            return {
                ...state,
                showMenu: true
            };
        case HIDE_MENU:
            return {
                ...state,
                showMenu: false
            };
        default:
            return state;
    }
}