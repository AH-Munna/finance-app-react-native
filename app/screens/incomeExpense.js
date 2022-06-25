import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { connect } from 'react-redux';
import { addExpense, addIncome } from "../redux/ActionCreator";

const mapDispatchToProps = dispatchEvent => {
    return {
        addIncome: incObj => dispatchEvent(addIncome(incObj)),
        addExpense: expObj => dispatchEvent(addExpense(expObj)),
    }
}

const IncomeExpense = props => {
    const account = props.route.params.acc;
    const type = props.route.params.i ? "Income" : "Expense";
    const [value, setValue] = useState("");
    const handleAdding = () => {
        if (!value.length) return alert('type the required number');
        if (isNaN(value)) return alert("Only number accepted");

        const valueObj = { value: value, accId: account.id }
        type === 'Income' ? props.addIncome(valueObj) : props.addExpense(valueObj);
    }
    return (
        <View>
            <Text style={{ alignSelf: 'center', marginTop: 30 }}>Update</Text>
            <Text style={{ fontSize: 40, alignSelf: 'center', color: 'grey' }}>{type}</Text>

            <View>
                <TextInput
                    keyboardType='numeric'
                    onChangeText={num => setValue(num)}
                    style={styles.input}
                    value={value}
                    placeholder="20,000"
                />
                <TouchableOpacity style={styles.btnContainer} onPress={handleAdding}>
                    <Text style={styles.btnStyle}>{type === 'Income' ? "Update Income" : "Update Expense"}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        width: "85%",
        padding: 5,
        backgroundColor: "#eee",
        borderBottomWidth: 2,
        borderColor: "#009688",
        borderRadius: 4,
        marginTop: 30,
        marginBottom: 20,
        alignSelf: 'center'
    },
    label: {
        fontSize: 18,
        marginTop: 10,
    },
    topText: {
        fontSize: 32,
        color: "green",
        marginTop: 20,
        marginBottom: 40,
        fontWeight: "bold",
    },
    picker: {
        backgroundColor: 'wheat',
        width: 150,
        height: 50,
        marginLeft: 20,
    },
    pickerLabel: {
        marginStart: 30,
        marginTop: 15,
        fontSize: 20,
    },
    btnStyle: {
        fontSize: 18,
        color: "#fff",
        alignSelf: "center"
    },
    btnContainer: {
        flexDirection: "row",
        width: 200,
        height: 50,
        paddingVertical: 5,
        backgroundColor: "rgb(0, 167, 153)",
        borderRadius: 5,
        marginTop: 20,
        justifyContent: "center",
        alignSelf: 'center',
    }
})

export default connect(null, mapDispatchToProps)(IncomeExpense);