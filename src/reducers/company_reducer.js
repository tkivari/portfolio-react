import { SHOW_COMPANY } from '../actions/action_types';

export default function(state = {}, action) {
    switch(action.type) {
        case SHOW_COMPANY:
            console.log('showing company');
            return {
                ...state,
                companyId: action.company_id
            };
        default:
            return state;
    }
}