
import { Stack } from "expo-router";
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle:"TRUE VISION",
          headerTitleAlign:"center",
          headerTitleStyle:{
            color:"#333333",
            fontFamily:"times new roman",
            fontSize:20,
            fontWeight:"bold"
          }
        }}
      >
      </Stack.Screen>
      <Stack.Screen
        name="about"
        options={{
          headerTitle:"About Me",
          headerTitleAlign:"center",
           headerTitleStyle:{
            color:"#333333",
            fontFamily:"times new roman",
            fontSize:20,
            fontWeight:"bold"
          }
        }}
      >
      </Stack.Screen>
    </Stack>
  );
}
