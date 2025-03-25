import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Checkbox } from "react-native-paper"; 

export default function Register() {
  const router = useRouter();
  const [checked, setChecked] = useState(false); 

  return (
    <View style={styles.screen}>
      <Image style={styles.logo} source={require("/Users/adyssafairuzhusniyyah/ewallet-mobile/ewallet-mobile/assets/images/Vector.png")} />
      <TextInput style={styles.input} placeholder="Full Name">Full Name</TextInput>
      <TextInput style={styles.input} placeholder="Email">Email</TextInput>
      <TextInput style={styles.input} placeholder="Password">Password</TextInput>
      <TextInput style={styles.input} placeholder="Avatar Url">Avatar Url</TextInput>

      <View style={styles.checkboxContainer}>
        <Checkbox
          status={checked ? "checked" : "unchecked"}
          onPress={() => setChecked(!checked)}
          color="#0061FF"
        />
        <Text style={styles.checkboxLabel}>
          I have read and agree to the <Text style={{ color: "#0061FF" }} onPress={() => router.push("/tnc")}>Terms and Conditions *</Text>
        </Text>
      </View>

      <TouchableOpacity style={[styles.btn, !checked && styles.btnDisabled]} onPress={() => checked && router.push("/")}>
        <Text style={styles.btntxt}>Register</Text>
      </TouchableOpacity>

      <View style={styles.subtextContainer}>
        <Text style={styles.subtext}>
          Have an account? <Text style={{ color: "#0061FF" }} onPress={() => router.push("/")}>Login here</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    backgroundColor: "#FAFBFD",
    color: "black",
    width: 339,
    height: 60,
    borderRadius: 10,
    marginTop: 20,
    padding: 20,
    fontSize: 16,
    fontWeight: "600",
  },
  btntxt: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
  },
  btn: {
    backgroundColor: "#0061FF",
    width: 339,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  btnDisabled: {
    backgroundColor: "#A0A0A0", 
  },
  logo: {
    width: 233,
    height: 57,
    position: "absolute",
    top: 20,
    alignSelf: "center",
    resizeMode: "contain",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    width: 339,
  },
  checkboxLabel: {
    fontSize: 14,
    color: "black",
    flexShrink: 1, 
  },
  subtextContainer: {
    width: 339,
    alignItems: "flex-start",
    marginTop: 20,
  },
  subtext: {
    fontSize: 14,
    color: "black",
    textAlign: "left",
  },
});
