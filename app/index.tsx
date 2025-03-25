import { useRouter } from "expo-router";
import { useState } from "react";
import { BackHandler, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isBalanceHidden, setIsBalanceHidden] = useState<boolean>(false);
  interface Transaction {
    name: string;
    type: string;
    amount: string;
  }

  const transactions: Transaction[] = [
    { name: "Adityo Gizwanda", type: "Transfer", amount: "- 75.000,00" },
    { name: "Adityo Gizwanda", type: "Topup", amount: "+ 75.000,00" },
    { name: "Adityo Gizwanda", type: "Transfer", amount: "- 75.000,00" },
    { name: "Adityo Gizwanda", type: "Transfer", amount: "- 75.000,00" },
  ];

  if(!isLoggedIn){
    return (
      <View
        style={styles.screenLogin}
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
      <View style={styles.header}>
        <View style={styles.profile}>
          <Image
            source={require("/Users/adyssafairuzhusniyyah/ewallet-mobile/ewallet-mobile/assets/images/Group 8.png")}
          />
          <View style={styles.profiletxt}>
            <Text style={styles.name}>
              Chelsea Immanuela
            </Text>
            <Text>Personal Account</Text>
          </View>
        </View>
        
          <Image source={require("/Users/adyssafairuzhusniyyah/ewallet-mobile/ewallet-mobile/assets/images/Vector copy.png")} />
      </View>

      <View style={styles.greeting}>
        <View>
          <Text style={styles.greetingtitle}>
            Good Morning, Chelsea
          </Text>
          <Text style={styles.greetingsub}>
            Check all your incoming and outgoing transactions here
          </Text>
        </View>
        <Image
          source={require("/Users/adyssafairuzhusniyyah/ewallet-mobile/ewallet-mobile/assets/images/Group.png")}
        />
      </View>

      <View style={styles.accountNo}>
        <Text style={{ color: "white", fontSize: 16, fontWeight: 400 }}>Account No.</Text>
        <Text style={{ color: "white", fontSize: 16, fontWeight: 600 }}>100899</Text>
      </View>

      <View style={styles.balance}>
        <View>
          <Text style={{ color: "black", fontSize: 14, fontWeight: 600, marginBottom: 10 }}>Balance</Text>
          <View style={styles.balanceAmount}>
            <Text style={{ color: "black", fontSize: 24, fontWeight: 600, marginRight: 10 }}>
              {isBalanceHidden ? "***************" : "Rp 10.000.000"}
            </Text>
            <TouchableOpacity onPress={() => setIsBalanceHidden(!isBalanceHidden)}>
              <Image source={require("/Users/adyssafairuzhusniyyah/ewallet-mobile/ewallet-mobile/assets/images/view.png")} className="ml-3" />
            </TouchableOpacity>
          </View>
        </View>
        <View>
        
          <TouchableOpacity
            onPress={() => router.push("/topup")} style={styles.cta}
          >
            <Image source={require("/Users/adyssafairuzhusniyyah/ewallet-mobile/ewallet-mobile/assets/images/topup.png")}/>
          </TouchableOpacity>

    
          <TouchableOpacity
            onPress={() => router.push("/transfer")} style={styles.cta}
          >
            <Image source={require("/Users/adyssafairuzhusniyyah/ewallet-mobile/ewallet-mobile/assets/images/transfer.png")} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.container}>
      <Text style={styles.title}>Transaction History</Text>
      <View style={styles.divider} />
      {transactions.map((item, i) => (
        <View key={i} style={styles.transactionItem}>
          <View style={styles.transactionLeft}>
            <View style={styles.avatar} />
            <View style={styles.transactionDetails}>
              <Text style={styles.nametable}>{item.name}</Text>
              <Text style={styles.type}>{item.type}</Text>
              <Text style={styles.date}>08 December 2024</Text>
            </View>
          </View>
          <Text style={[styles.amount, item.amount.startsWith("-") ? styles.negative : styles.positive]}>
            {item.amount}
          </Text>
        </View>
      ))}
    </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  screenLogin:{
    backgroundColor:"white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  screen:{
    backgroundColor:"#FAFBFD",
    // padding: 20
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
  profile:{
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center"
  },
  header:{
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: 20
  },
  profiletxt:{
    marginLeft: 10,
    justifyContent: "center"
  },
  name:{
    fontWeight: 700
  },
  greetingtitle:{
    fontSize: 20,
    fontWeight: 700
  },
  greetingsub:{
    fontSize: 16,
    fontWeight: 400,
    marginTop: 10
  },
  greeting:{
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20
  },
  accountNo:{
    padding: 20,
    width: "90%",
    height: 60,
    borderRadius: 10,
    backgroundColor: "#0061FF",
    flexDirection: "row",  
    justifyContent: "space-between", 
    alignItems: "center",
    alignSelf: "center" 
  },
  accountTitle:{
    fontSize: 16,
    fontWeight: 400,
    color: "white"
  },
  cta:{
    width: 40,
    height: 40,
    backgroundColor: "#0061FF",
    borderRadius: 10,
    justifyContent: "center",  
    alignItems: "center",   
    marginTop: 5  
  },
  balanceAmount:{
    flexDirection: "row",
    // justifyContent: "center",  
    alignItems: "center", 
  },
  balance:{
    padding: 20,
    marginTop: 15,
    width: "90%",
    height: 100,
    borderRadius: 10,
    backgroundColor: "white",
    flexDirection: "row",  
    justifyContent: "space-between", 
    alignItems: "center",
    alignSelf: "center" 
  },
  container: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    margin: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  divider: {
    height: 1,
    backgroundColor: "#E0E0E0",
    marginBottom: 10,
  },
  transactionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  transactionLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#D9D9D9",
    marginRight: 10,
  },
  transactionDetails: {
    justifyContent: "center",
  },
  nametable: {
    fontSize: 16,
    fontWeight: "bold",
  },
  type: {
    fontSize: 14,
    color: "#666",
  },
  date: {
    fontSize: 12,
    color: "#999",
  },
  amount: {
    fontSize: 16,
    fontWeight: "bold",
  },
  negative: {
    color: "black",
  },
  positive: {
    color: "green",
  },
})
