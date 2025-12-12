import { useLocalSearchParams } from "expo-router";
import { View } from "react-native"

const CityDetails = () => {

  const searcjhParams = useLocalSearchParams();

  console.log(searcjhParams);

  return (
    <View>

    </View>
  )
}

export default CityDetails;