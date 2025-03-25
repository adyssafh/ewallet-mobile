import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if(!isLoggedIn){
    return (
      <View
        style={styles.screen}
      >
        <Image style={styles.logo} source={require("/Users/adyssafairuzhusniyyah/ewallet-mobile/ewallet-mobile/assets/images/Vector.png")} />
        <TextInput style={styles.input} placeholder="Email">Email</TextInput>
        <TextInput style={styles.input} placeholder="Password">Password</TextInput>
        <TouchableOpacity style={styles.btn} onPress={() => setIsLoggedIn(true)}>
          <Text style={styles.btntxt}>Login</Text>
        </TouchableOpacity>
  
        <View style={styles.subtextContainer}>
          <Text style={styles.subtext}>
            Don't have an account? <Text style={{ color: "#0061FF" }} onPress={() => router.push("/register")}>Register here</Text>
          </Text>
        </View>
      </View>
    );
  }
  return (
    <View style={styles.screen}>
      <Text>Welcome to the Home Page!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    backgroundColor:"white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input:{
    backgroundColor: "#FAFBFD",
    color: "black",
    width: 339,
    height: 60,
    borderRadius: 10,
    marginTop: 20,
    padding: 20,
    fontSize:16,
    fontWeight:600
  },
  btntxt:{
    color:"white",
    fontSize: 16,
    fontWeight: 700,
    textAlign: "center"
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
  logo:{
    width: 233,
    height: 57,
    position: "absolute",
    top: 20, 
    alignSelf: "center", 
    resizeMode: "contain", 
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
})
