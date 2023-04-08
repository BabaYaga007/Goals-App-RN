import react from 'react';
import { StyleSheet, View, Text } from 'react-native';
// import App from './App2';

export default function App () {
    return (
        // <App />
        <View style={styles.container}>
        <View style={styles.viewbox1} >
            <Text >1</Text>
        </View>
        <View style={styles.viewbox2} >
            <Text>2</Text>
        </View>
        <View style={styles.viewbox3} >
            <Text>3</Text>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin:30,
        marginTop: 50,
        flexDirection: 'column-reverse',
        
    },
    viewbox1: {
        width:100,
        height:100,
        backgroundColor:'red',
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewbox2: {
        width:100,
        height:100,
        backgroundColor:'blue',
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewbox3: {
        width:100,
        height:100,
        backgroundColor:'green',
        justifyContent: 'center',
        alignItems: 'center',
    }

}
);