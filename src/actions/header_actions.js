import { SHOW_MENU, HIDE_MENU } from './action_types';

export function ShowMenuAction() {
    return {
        type: SHOW_MENU,
        payload: true
    };
}

export function HideMenuAction() {
    return {
        type: HIDE_MENU,
        payload: false
    };
}