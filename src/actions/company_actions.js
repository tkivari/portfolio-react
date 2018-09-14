import { SHOW_COMPANY } from './action_types';

export function ShowCompanyAction(company_id) {
    return {
        type: SHOW_COMPANY,
        payload: {
            company_id
        }
    };
}