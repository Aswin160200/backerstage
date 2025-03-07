import { INVESTORS_RESPONSE,EDIT_INVESTORS_RESPONSE,ADD_INVESTOR_RESPONSE } from "./ActionTypes";

const initialState = {
    error: "",
    getAllInvestorSuccessfull: "",
    getEditInvestorsDetails:"",
    getAddInvestorsDetails:"",
};

const investors = (state = initialState, action) => {
    switch (action.type) {
        case INVESTORS_RESPONSE:
            state = {
                ...state,
                getAllInvestorSuccessfull: action.payload,
            };
            break;
            case EDIT_INVESTORS_RESPONSE:
                state = {
                    ...state,
                    getEditInvestorsDetails: action.payload,
                };
                break;
                case ADD_INVESTOR_RESPONSE:
                    state = {
                        ...state,
                        getAddInvestorsDetails: action.payload,
                    };
                    break;
            default:
                state={...state}
            break;
    }
    return state;
};

export default investors;
