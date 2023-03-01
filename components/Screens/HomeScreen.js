import { styles } from "../../styles";
import { Text, View, Pressable } from "react-native";

// Component representing home screen.
const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.mainView}>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("List screen")}
      >
        <Text style={styles.buttonText}>Go to list screen</Text>
      </Pressable>

      <Text style={{margin: 40}}>This application demonstarates basic navigation and flow of data between screens.</Text>
    </View>
  );
};

export { HomeScreen };
