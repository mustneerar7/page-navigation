import { styles } from "../styles";
import { Text, View, TouchableOpacity } from "react-native";

// Component representing a card in listview.
const CardView = ({ param, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Profile", { name: param })}
    >
      <View style={styles.cardContainer}>
        <Text style={styles.cardContent}>{param}</Text>
      </View>
    </TouchableOpacity>
  );
};

export { CardView };
