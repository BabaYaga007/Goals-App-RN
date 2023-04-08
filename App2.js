// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <><View style={styles.container}>
      <View style={styles.text1}>
        <Text>Hello Boys</Text>
      </View>
</View>
<View style={styles.container}>
        <Text style={{ borderColor: 'blue', borderWidth: 5, padding: 10,}}>Another line of Text</Text>
        <Button title='Tap me!' style={styles.text1} />
      </View>
      </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'red',
    borderWidth: 5,
    borderRadius: 20,
    // margin:10,
  },
  text1: {
    margin:20,
    borderBottomColor: 'grey',
    borderWidth:10,
  }
});
