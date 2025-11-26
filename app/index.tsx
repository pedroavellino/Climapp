import { StyleSheet, Image, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaterialIcon from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";

export default function Index() {
  
  const router = useRouter();
  
  return (
    <LinearGradient 
      colors={[ "#00457D", "#05051F" ]}
      style={styles.container}  
    >
      <View style={styles.containerInner}>
        <Image source={require("../assets/images/logo.png")}/>
        <Image source={require("../assets/images/weather.png")}/>
        <Text style={styles.title}>Boas-vindas!</Text>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => {
            router.push("/cities");
          }}
        >
          <Text style={styles.textButton}>Entrar</Text>
          <MaterialIcon 
            name="arrow-forward"
            size={24}
            style={styles.arrow}
          />
        </TouchableOpacity>
      </View>
    </LinearGradient>    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 179,
    paddingHorizontal: 32,
  },
  containerInner: {
    justifyContent: "center",
    alignItems: "center",
    gap: 110,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "400",
    fontFamily: "Montserrat_400Regular",
  },
  button: {
    width: "100%",
    backgroundColor: "#7693FF",
    paddingVertical: 8,
    paddingHorizontal: 102,
    borderRadius: 32,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10
  },
  textButton: {
    color: "#01080E",
    fontSize: 28,
    fontWeight: "600",
    fontFamily: "Montserrat_600SemiBold",
  },
  arrow: {
    color: "#01080E",
    marginTop: 5,
  },
})
