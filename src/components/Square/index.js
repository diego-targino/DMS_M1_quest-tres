import { Text, View } from "react-native";
import { styles } from "./style";

export default function Square(props) {
  return (
    <View style={{ ...styles.square, backgroundColor: props.color }}>
      <Text>{props.text}</Text>
    </View>
  );
}
