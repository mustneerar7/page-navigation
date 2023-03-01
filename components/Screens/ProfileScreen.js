import { View, Text } from "react-native";
import { styles } from "../../styles";

// Component representing profile screen.
const ProfileScreen = ({ route }) => {
  return (
    <View style={styles.profileScreen}>
      <Text style={styles.profileScreenText}>{route.params.name}</Text>
    </View>
  );
};

export { ProfileScreen };
