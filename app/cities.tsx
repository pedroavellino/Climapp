import { LinearGradient } from "expo-linear-gradient";
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import citiesData from "../data/cities.json"
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";

const Cities = () => {

  const router = useRouter();

  const [search, setSearch] = useState("");

  const [filteredCities, setFilteredCities] = useState(citiesData);

  useEffect(() => {
    const newFilteredCities = citiesData.filter(city =>
      city.city.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );

    setFilteredCities(newFilteredCities)
  }, [search])
  
  return (
    <LinearGradient
      colors={["#00457d", "#05051f"]}
      style={styles.container}
    >
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.inputText}
          placeholder="Digite a cidade"
          placeholderTextColor={"#FFF"}  
          value={search}
          onChangeText={(value) => setSearch(value)}
        />
        <MaterialIcons 
          name="search" 
          size={20} 
          color={"#FFF"}
        />
      </View>
      <ScrollView>
        <View style={styles.scrollList}>
          {
            filteredCities.map((city) => (
              <TouchableOpacity 
                onPress={() => {
                  router.push(`/${city.city}`)
                }}
                key={city.city}
                style={styles.listItem}>
                <Image source={require("../assets/images/clouds.png")}/>
                <Text
                  style={styles.cityName}
                >
                  {city.city.replace(", ", " - ")}
                </Text>
                <Text
                  style={styles.cityTemp}
                >
                  {city.temp}
                </Text>
              </TouchableOpacity>
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
    paddingTop: 50,
    gap: 40,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderRadius: 24,
  },
  inputText: {
    color: "#FFF",
    fontSize: 16,
    fontFamily: "Montserrat_500Medium"
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