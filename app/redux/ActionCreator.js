import { navigate } from '../components/myNavigationRoot.js';
import * as actTypes from './ActionType.js';

export const addAccount = accObj => {
    return {
        type: actTypes.ADD_ACCOUNT,
        payload: accObj,
    }
}

export const addIncome = incObj => {
    return {
        type: actTypes.ADD_INCOME,
        payload: incObj,
    }
}

export const addExpense = expObj => {
    return {
        type: actTypes.ADD_EXPENSE,
        payload: expObj,
    }
}