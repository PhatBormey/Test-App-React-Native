
import { Tabs } from "expo-router";
export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
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
      </Tabs.Screen>
      <Tabs.Screen
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
      </Tabs.Screen>
      <Tabs.Screen
        name="+not-found"
        options={{
          headerTitle:"Not Found",
          headerTitleAlign:"center",
           headerTitleStyle:{
            color:"#333333",
            fontFamily:"times new roman",
            fontSize:20,
            fontWeight:"bold"
          }
        }}
      >
      </Tabs.Screen>
    </Tabs>
  );
}
