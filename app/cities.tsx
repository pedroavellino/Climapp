import { LinearGradient } from "expo-linear-gradient";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import citiesData from "../data/cities.json"

const Cities = () => {
  
  return (
    <LinearGradient
      colors={["#00457d", "#05051f"]}
      style={styles.container}
    >
      <ScrollView>
        <View style={styles.scrollList}>
          {
            citiesData.map((city) => (
              <View style={styles.listItem}>
                <Image source={require("../assets/images/clouds.png")}/>
                <Text
                  style={styles.cityName}
                >
                  {city.city}
                </Text>
                <Text
                  style={styles.cityTemp}
                >
                  {city.temp}
                </Text>
              </View>
            ))
          }
        </View>
      </ScrollView>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  scrollList: {
    gap: 16,
  },
  listItem: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 21,
    paddingHorizontal: 16,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderRadius: 16,
  },
  cityName: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "MontSerrat_500Medium",
  },
  cityTemp: {
    color: "#FFFFFF",
    fontSize: 25,
    fontFamily: "Montserrat_700Bold",
  },
});

export default Cities;