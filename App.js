import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList, //For lazy loading of lists
  ImageBackground,
} from "react-native";
import { StatusBar } from "expo-status-bar";

import GoalInput from "./Components/GoalInput";
import GoalItem from "./Components/GoalItem";

export default function App() {
  // const [enteredGoalText, setGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  function setAddGoalHandler() {
    setModalVisible(true);
  }

  function closeAddGoalHandler() {
    setModalVisible(false);
  }

  // function goalInputHandler(enteredText) {
  //   setGoal(enteredText);
  // }

  function addGoalHandler(enteredGoalText) {
    // console.log(enteredGoalText);
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() }, //make the item as object with key and text properties
    ]);
    closeAddGoalHandler();
  }

  function onDeleteHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id); //fliter method is built-in JS methos,
      //that filters an array based on the parameter provided, ie it gives new array minus that value
      // based on a condition.
    });
  }

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        {/* <View style={styles.inputContainer}>
        <TextInput
          style={styles.textstyle}
          placeholder="Enter Goal"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" color={"purple"} onPress={addGoalHandler} />
      </View> */}

        <Button
          title="Add New Goal"
          color="#5e0acc"
          onPress={setAddGoalHandler}
        />
        {modalVisible && (
          <GoalInput
            visible={modalVisible}
            onAddGoal={addGoalHandler}
            closeModal={closeAddGoalHandler}
          />
        )}
        <View style={styles.goalContainer}>
          <ImageBackground
            source={require("../RNCourse/assets/images/goals3.jpg")}
            style={styles.image}
            // resizeMode="cover"
          >
            <FlatList
              data={courseGoals}
              renderItem={(itemData) => {
                return (
                  <GoalItem
                    text={itemData.item.text}
                    id={itemData.item.id}
                    onDeleteItem={onDeleteHandler}
                  />
                );
                // <Text style={styles.listStyle}>
                //   {itemData.item.text}-{itemData.item.id}
                // </Text>
              }}
              keyExtractor={(item, index) => {
                return item.id;
              }} //Used when the item object does not have a key prop but instead have another prop that can be
              // used as key. Here we make the id prop as kep prop
            />

            {/* <ScrollView>
          {courseGoals.map((goal) => (
            <Text key={goal} style={styles.listStyle}>
              {goal}
            </Text> //The rounded corners will notbe shown in iOS, as it doesnt support rounded corners on Text
            // Text tags. A workaround is to put the Text tags in a View tag and add the styling to it.
          ))}
        </ScrollView> */}
          </ImageBackground>
        </View>

        <View>
          <Text style={styles.footer}>Click on the goal to remove it.</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    paddingTop: 60,
    backgroundColor: "#7fffd4", //"#1e085a",
  },
  image: {
    flex: 1,
    // borderRadius: 10,
    // opacity: 0.3,
  },
  // inputContainer: {
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  //   marginBottom: 20,
  //   padding: 15,
  //   // paddingBottom:40,
  //   // paddingTop:40,
  //   borderColor: "black",
  //   borderWidth: 2,
  //   flex: 1,
  //   // height: 30,
  // },
  // textstyle: {
  //   borderWidth: 1,
  //   borderColor: "black",
  //   width: "60%",
  //   backgroundColor: "#cccccc",
  //   paddingLeft: 10,
  //   height: 40,
  //   marginRight: 20,
  // },
  goalContainer: {
    flex: 6,
    borderColor: "red",
    borderRadius: 10,
    borderWidth: 2,
    marginTop: 20,
  },
  // listStyle: {
  //   borderWidth: 2,
  //   borderColor: "green",
  //   borderRadius: 5,
  //   marginBottom: 10,
  //   margin: 3,
  //   color: "white", //There is no cascadding in styling ie that the children tags do not inherit the styles
  //   // of parent tags. so we have to put styling individually on all items.
  //   backgroundColor: "#5e0acc",
  //   paddingLeft: 4,
  //   fontSize: 16,
  // },
  footer: {
    color: "#5e0acc",
    marginTop: 5,
    // justifyContent: "center",
  },
});
