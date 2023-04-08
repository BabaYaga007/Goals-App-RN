import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Modal,
  Image,
} from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setGoal] = useState("");
  //   const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setGoal(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setGoal("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goals.png")}
        />
        <TextInput
          style={styles.textstyle}
          placeholder="Enter Goal"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonStyle}>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              color={"purple"}
              onPress={addGoalHandler}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Cancel"
              color={"#f31282"}
              //   borderRadius={10}
              onPress={props.closeModal}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    // flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    padding: 15,
    // paddingBottom:40,
    // paddingTop:40,
    // borderColor: "black",
    // borderWidth: 2,
    flex: 1,
    // height: 30,
    backgroundColor: "#add8e6", //"#7fffd4",
  },
  textstyle: {
    borderWidth: 1,
    borderColor: "black",
    width: "100%",
    backgroundColor: "#cccccc",
    borderRadius: 10,
    paddingLeft: 10,
    // padding: 20,
    height: 50,
    marginHorizontal: 20,
    fontSize: 18,
  },
  buttonStyle: {
    flexDirection: "row",
    marginTop: 20,
    // justifyContent: "space-between",
  },
  button: {
    width: "30%",
    marginHorizontal: 10,
  },
  image: {
    height: 200,
    width: "100%",
    padding: 20,
    opacity: 0.8,
  },
});
