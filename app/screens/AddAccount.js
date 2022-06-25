import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { addAccount } from "../redux/ActionCreator";
import { connect } from 'react-redux';

const mapDispatchToProps = dispatchEvent => {
    return {
        addAccount: accObj => dispatchEvent(addAccount(accObj))
    }
}

const AddAccount = props => {
    const [name, setName] = useState("");
    const [accType, setAccType] = useState("ban");
    const [desc, setDesc] = useState("");

    const handleAddingAccount = () => {
        if (!name.length) return alert("Account name is required");
        if (name.length < 5) return alert("Name to short");

        const accObj = { name: name, description: desc, accountType: accType, id: Math.random() }
        props.addAccount(accObj);
        props.navigation.navigate('Accounts');
    }
    return (
        <View style={{ alignItems: 'center' }}>
            <Text style={styles.topText}>Add a new account</Text>
            <Text style={styles.label}>Account Name</Text>
            <TextInput
                onChangeText={text => setName(text)}
                style={styles.input}
                placeholder="acc. name..."
                value={name}
            />
            <Text style={styles.label}>Description</Text>
            <TextInput
                multiline={true}
                numberOfLines={3}
                onChangeText={text => setDesc(text)}
                style={styles.input}
                placeholder="(optional)"
                value={desc}
            />

            <View style={{ flexDirection: "row" }}>
                <Text style={styles.pickerLabel}>Account Type</Text>
                <Picker
                    style={styles.picker}
                    selectedValue={accType}
                    onValueChange={itemValue =>
                        setAccType(itemValue)
                    }>
                    <Picker.Item label="Bank" value="ban" />
                    <Picker.Item label="Credit Card" value="cre" />
                    <Picker.Item label="Paypal" value="pay" />
                    <Picker.Item label="Debit Card" value="deb" />
                </Picker>
            </View>
            <TouchableOpacity style={styles.btnContainer} onPress={handleAddingAccount}>
                <Text style={styles.btnStyle}>Create Account</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        width: "85%",
        padding: 5,
        backgroundColor: "#eee",
        borderBottomWidth: 2,
        borderColor: "#009688",
        borderRadius: 4,
        marginBottom: 20,
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
        marginTop: 50,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default connect(null, mapDispatchToProps)(AddAccount);