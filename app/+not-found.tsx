import React from 'react'
import { View,Text } from 'react-native'
import { styles } from '@/assets/styles'
import { Link } from 'expo-router'
const notFound = () => {
  return (
     <View style={styles.container}>
      <Text style={styles.text}>Not Found</Text>
      <Link 
          href={"./"}
          style={styles.button}
        >Click Me
      </Link>
    </View>
  )
}

export default notFound