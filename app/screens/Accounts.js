import { Text, View, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        accounts: state.state.account,
    }
}

const Accounts = props => {
    const renderItem = ({ item }) => (
        <View style={{ alignItems: 'center' }}>
            <TouchableOpacity style={styles.btnContainer2}
                onPress={() => props.navigation.navigate('Manage Account', { acc: item })}>
                <Text style={styles.btnStyle}>{item.name}</Text>
            </TouchableOpacity>
        </View>
    );
    return (
        <View>
            <View style={{ alignItems: 'center', marginVertical: 20 }}>
                <Text style={{ fontSize: 48, color: 'rgb(53, 255, 144)', fontWeight: 'bold' }}>Your Accounts</Text>
            </View>

            <FlatList
                data={props.accounts}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />

            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity style={styles.btnContainer}
                    onPress={() => props.navigation.navigate('Add Account')}>
                    <Text style={styles.btnStyle}>Create account</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
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
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
        elevation: 5,
    }
})

export default connect(mapStateToProps)(Accounts);