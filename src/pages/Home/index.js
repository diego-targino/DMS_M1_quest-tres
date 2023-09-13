import { View } from "react-native";
import { styles } from "./style";
import Square from "../../components/Square";

export default function Home() {
  return (
    <View style={styles.container}>
      <Square text="Square 1" color="#7CE0F9" />
      <Square text="Square 2" color="#4DC2C2" />
      <Square text="Square 3" color="#FF637C" />
    </View>
  );
}
