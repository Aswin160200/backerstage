import { EDIT_INVESTORS, EDIT_INVESTORS_RESPONSE, INVESTORS} from "./ActionTypes";
import {INVESTORS_RESPONSE,ADD_INVESTOR,ADD_INVESTOR_RESPONSE} from "./ActionTypes";

export const getAllInvestors = (allinvestors) => ({
    type: INVESTORS,
    payload: allinvestors,
});

export const getAllInvestorsResponse = (allinvestorsResponse) => ({
    type: INVESTORS_RESPONSE,
    payload: allinvestorsResponse,
});
    
export const editInvestors = (editInvestors) => ({
    type: EDIT_INVESTORS,
    payload: editInvestors,
});

export const editInvestorsResponse = (editInvestorsResponse) => ({
    type: EDIT_INVESTORS_RESPONSE,
    payload: editInvestorsResponse,
});

export const addInvestors = (addInvestors) => ({
    type: ADD_INVESTOR,
    payload: addInvestors,
});

export const addInvestorsResponse = (addInvestorsResponse) => ({
    type: ADD_INVESTOR_RESPONSE,
    payload: addInvestorsResponse,
});