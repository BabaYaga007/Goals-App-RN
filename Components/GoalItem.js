import { StyleSheet, Text, Pressable } from "react-native";

// function onPressItem() {
//   props.onDeleteItem(props.id);
// }
// // //the above method could be used but alternatively we are using bind().

function GoalItem(props) {
  return (
    <Pressable
      android_ripple={{ color: "#5e0acc" }}
      onPress={props.onDeleteItem.bind(this, props.id)}
    >
      {/* Bind() methods helps to send a value prematurely to a method for future execution  */}
      <Text style={styles.listStyle}>{props.text}</Text>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  listStyle: {
    borderWidth: 2,
    borderColor: "green",
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 5,
    margin: 3,
    color: "white", //There is no cascadding in styling ie that the children tags do not inherit the styles
    // of parent tags. so we have to put styling individually on all items.
    backgroundColor: "#5e0acc",
    paddingLeft: 4,
    fontSize: 20,
    // opacity: 1,
    // height: 25,
  },
});
