import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View } from "react-native";
import citiesData from "../data/cities.json"

const Cities = () => {
  
  return (
    <LinearGradient
      colors={["#00457d", "#05051f"]}
      style={styles.container}
    >
      {
        citiesData.map((city) => (
          <View style={styles.listItem}>
            <Text
              style={styles.cityName}
            >
              {city.city}
            </Text>
          </View>
        ))
      }
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    gap: 16,
  },
  listItem: {
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    paddingVertical: 21,
  
  },
  cityName: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "MontSerrat_500Medium",
  }
});

export default Cities;