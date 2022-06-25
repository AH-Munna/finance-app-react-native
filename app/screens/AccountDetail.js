import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        income: state.state.income,
        expense: state.state.expense,
    }
}

const AccountDetail = props => {
    const account = props.route.params.acc;
    let income = 0;
    let expense = 0;

    if (props.income && props.income.length)
        for (let item of props.income)
            if (item.accId === account.id) {
                income = item.value;
                debugger
            };
    if (props.income && props.income.length)
        for (let item of props.expense)
            if (item.accId === account.id) {
                expense = item.value;
                debugger
            }
    return (
        <View>
            <Text style={{ alignSelf: 'center', marginTop: 20 }}>Account Name</Text>
            <Text style={{
                fontSize: 42,
                color: 'green',
                fontWeight: "bold",
                alignSelf: 'center',
            }}>{account.name}</Text>
            <Text style={{ alignSelf: 'center', marginTop: 10 }} numberOfLines={2}>{account.description}</Text>

            <View style={{ alignItems: 'center', marginTop: 30 }}>
                <Text style={{ fontSize: 30 }}>Income</Text>
                <Text style={{ fontSize: 32, color: 'green' }}>{income}</Text>
                <TouchableOpacity style={styles.btnContainer2}
                    onPress={() => props.navigation.navigate('Income Expenses', { acc: account, i: true })}
                >
                    <Text style={styles.btnStyle}>Edit Income</Text>
                </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center', marginTop: 30 }}>
                <Text style={{ fontSize: 30 }}>Expense</Text>
                <Text style={{ fontSize: 32, color: 'green' }}>{expense}</Text>
                <TouchableOpacity style={styles.btnContainer2}
                    onPress={() => props.navigation.navigate('Income Expenses', { acc: account, i: false })}
                >
                    <Text style={styles.btnStyle}>Edit Expense</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    btnStyle: {
        fontSize: 22,
        color: "#fff",
        alignSelf: "center"
    },
    btnContainer: {
        width: 200,
        height: 60,
        paddingVertical: 5,
        backgroundColor: "rgb(37, 178, 91)",
        borderRadius: 5,
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
        elevation: 5,
    },
    btnContainer2: {
        width: 300,
        height: 60,
        paddingVertical: 5,
        backgroundColor: "rgb(0, 110, 212)",
        borderRadius: 5,
        marginTop: 5,
        justifyContent: "center",
        alignItems: "center",
        elevation: 5,
    }
})

export default connect(mapStateToProps)(AccountDetail);