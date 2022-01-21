import React from 'react'
import { View } from 'react-native'
import GridCell from './gridCell'
import Dimensions from '../utils/dimensions'

function GridRow () {
  return (
    <View style={styles.container}>
      <GridCell />
      <GridCell />
      <GridCell />
      <GridCell />
    </View>
  )
}

const { width } = Dimensions.get('window');
const MARGIN_WIDTH = Dimensions.size["2"];
const ITEM_WIDTH = (width - Dimensions.size["10"] - MARGIN_WIDTH * 10) / 4;

const styles = {
  container: {
    height: ITEM_WIDTH,
    marginVertical: Dimensions.size["2"],
    flexDirection: 'row',
  }
}


export default GridRow
