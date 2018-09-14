import { SHOW_COMPANY } from '../actions/action_types';

export default function(state = {}, action) {
    switch(action.type) {
        case SHOW_COMPANY:
            return {
                ...state,
                company_id: action.payload.company_id
            };
        default:
            return state;
    }
}