import { navigate } from '../components/myNavigationRoot.js';
import * as actTypes from './ActionType.js';

const INITIAL_STATE = {
    account: [],
    income: [],
    expense: [],
}

export const Reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actTypes.ADD_ACCOUNT:
            alert("Account Added.");
            return {
                ...state,
                account: [...state.account, action.payload]
            }
        case actTypes.ADD_INCOME:
            alert("Income updated");
            return {
                ...state,
                income: [...state.income, action.payload]
            }
        case actTypes.ADD_EXPENSE:
            alert("Expense updated");
            return {
                ...state,
                expense: [...state.expense, action.payload]
            }
        default:
            return state;
    }
}