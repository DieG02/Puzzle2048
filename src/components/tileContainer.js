import React from 'react'
import { View } from 'react-native'
import Tile from './tile'
import Dimensions from '../utils/dimensions'

function TileContainer (props) {
  const children = props.tiles
  return (
    <View style={styles.container}>
      {children.map((item) => {
        return <Tile x={item.x} y={item.y} value={item.value} key={item.prog} />
      })}
    </View>
  )
}

const { width } = Dimensions.get('window');
const styles = {
  container: {
    width: width - Dimensions.size["10"],
    height: width - Dimensions.size["10"],
    position: 'absolute',
    left: 0,
    top: 0,
    overflow: 'hidden',
  }
}

export default TileContainer
