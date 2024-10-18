import { View, Text } from 'react-native'
import React from 'react'
import Counter from './Counter'

const index = () => {
  return (
    <View>
      {/* <Text>index</Text> */}
      <Counter Children={<Text>Children</Text>} />
    </View>
  )
}

export default index;