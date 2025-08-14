import { Text, View } from "react-native";
import {styles} from "../assets/styles.js"
import { Link } from "expo-router";

const Index=()=> {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World</Text>
      <Link href={"/about"}>Click Me</Link>
    </View>
  );
}
export default Index
 
