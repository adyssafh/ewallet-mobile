import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Transfer() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tobg}>
        <Text style={styles.totxt}>To: 9000008940208</Text>
      </View>

      <View style={styles.paddedContainer}>
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
          <View style={styles.balanceContainer}>
            <Text style={styles.balancetxt}>Balance</Text>
            <Text style={styles.balanceamount}>IDR 10.000.000</Text>
          </View>
        </View>

        <View>
          <Text style={styles.label}>Notes</Text>
          <View style={styles.textContainer}>
            <TextInput />
          </View>
          <View style={styles.separator} />
        </View>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btntxt}>Transfer</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  paddedContainer: {
    flex: 1,
    paddingHorizontal: 20, 
    justifyContent: "space-around",
  },
  tobg: {
    backgroundColor: "#0061FF",
    width: "100%",
    height: 51,
    justifyContent: "center",
    alignItems: "center",
  },
  totxt: {
    fontSize: 16,
    fontWeight: "400",
    color: "white",
  },
  label: {
    fontSize: 14,
    color: "#B0B0B0",
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
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
    flex: 1,
    height: 49,
  },
  separator: {
    height: 1,
    backgroundColor: "#E0E0E0",
    marginTop: 5,
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 50,
  },
  btntxt: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
  },
  btn: {
    backgroundColor: "#0061FF",
    width: "100%",
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  balanceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  balancetxt: {
    fontSize: 12,
    color: "#B3B3B3"
  },
  balanceamount: {
    fontSize: 12,
    color: "#0061FF"
  }
});
