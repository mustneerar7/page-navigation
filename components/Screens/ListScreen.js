import { View, FlatList } from "react-native";

import { CardView } from "../../components/Card";
import { datasource } from "../../datasource";

// Component representing list screen.
const ListScreen = ({ navigation }) => {
  return (
    <View>
      <FlatList
        data={datasource}
        renderItem={({ item }) => (
          <CardView param={item.key} navigation={navigation} />
        )}
      />
    </View>
  );
};

export { ListScreen };
