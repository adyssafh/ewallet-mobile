import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function TnC() {
  return (
    // <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.screen}>
        <Text style={styles.text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          {"\n\n"}
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </Text>
      </View>
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "white",
    flex: 1,
    padding: 20, 
  },
//   scrollContainer: {
//     flexGrow: 1,
//     padding: 20,
//   },
  text: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 24, 
    textAlign: "justify", 
  },
});