import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function TopUp() {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>  
        {/* Top Container */}
        <View> 
            <View>
                <Text style={styles.label}>Amount</Text>
                <View style={styles.inputContainer}>
                    <Text style={styles.currency}>IDR</Text>
                    <TextInput
                        style={styles.amountInput}
                        placeholder="0"
                        keyboardType="numeric"
                        defaultValue="100.000"
                    />
                </View>
                <View style={styles.separator} />
            </View>

            <TouchableOpacity style={styles.dropdownContainer}>
                <Text style={styles.text}>BYOND Pay</Text>
                <Ionicons name="chevron-down" size={20} color="black" />
            </TouchableOpacity>

            <View>
                <Text style={styles.label}>Notes</Text>
                <View style={styles.textContainer}>
                    <TextInput style={styles.textInput} />
                </View>
                <View style={styles.separator} />
            </View>
        </View>

        {/* Bottom Container */}
        <View> 
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btntxt}>Top Up</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    paddingHorizontal: 20,
    backgroundColor: "white",
  },
  innerContainer: {
    flex: 1, 
    justifyContent: "space-around", 
  },
  label: {
    fontSize: 14,
    color: "#B0B0B0",
    marginBottom: 5,
    marginTop: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 381,
    height: 100,
  },
  currency: {
    fontSize: 16,
    fontWeight: "400",
    marginRight: 8,
  },
  amountInput: {
    fontSize: 36,
    fontWeight: "400",
    color: "black",
    width: 173,
    height: 49,
  },
  separator: {
    height: 1,
    backgroundColor: "#E0E0E0",
    marginTop: 5,
    marginBottom: 50,
  },
  dropdownContainer: {
    flexDirection: "row", 
    justifyContent: "space-between",
    alignItems: "center", 
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 50,
  },
  text: {
    fontSize: 16,
    color: "black",
  },
  textInput: {
    fontSize: 18,
    fontWeight: "400",
    color: "black",
    width: 173,
    height: 20,
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 381,
    height: 50,
  },
  btntxt:{
    color:"white",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
  },
  btn:{
    backgroundColor: "#0061FF",
    width: 339,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  },
});
