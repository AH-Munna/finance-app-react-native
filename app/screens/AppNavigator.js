import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AccountDetail from './AccountDetail.js';
import Accounts from './Accounts.js';
import AddAccount from './AddAccount.js';
import IncomeExpense from './incomeExpense.js';

const Stack = createNativeStackNavigator();

const AppNavigator = props => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Accounts" component={Accounts} />
            <Stack.Screen name="Add Account" component={AddAccount} />
            <Stack.Screen name="Manage Account" component={AccountDetail} />
            <Stack.Screen name="Income Expenses" component={IncomeExpense} />
        </Stack.Navigator>
    );
}

export default AppNavigator;