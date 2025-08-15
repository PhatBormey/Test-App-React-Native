import { StyleSheet } from "react-native";
 const colors={
  primary:'#ffffff',
  primary1:'#333333',
  secondary:'#706C61',
  secondary1:'#E1F4F3',
}
export const styles=StyleSheet.create({
    container:{
      flex:1,
      backgroundColor: colors.primary,
      alignItems:'center',
      justifyContent:'center'
    },
    text:{
      color:colors.primary1,
      fontSize:20,
      fontWeight:'bold',
      fontFamily:'times new roman'
    },
    button:{
      color:colors.primary,
      backgroundColor:colors.secondary,
      padding:10,
      borderRadius:10,
      textAlign:"center",
    }
  });
