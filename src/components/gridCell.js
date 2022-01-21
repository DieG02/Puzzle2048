import React from 'react'
import { View }  from 'react-native'
import Dimensions from '../utils/dimensions'

function GridCell () {
  return <View style={styles.container} />
}

const { width } = Dimensions.get('window');
const MARGIN_WIDTH = Dimensions.size["2"];
const ITEM_WIDTH = (width - Dimensions.size["10"] - MARGIN_WIDTH * 10) / 4;

const styles = {
  container: {
    width: ITEM_WIDTH,
    height: ITEM_WIDTH,
    marginHorizontal: MARGIN_WIDTH,
    backgroundColor: 'rgba(238, 228, 218, 0.35)',
    borderRadius: Dimensions.size["1"],
  }
}

export default GridCell
