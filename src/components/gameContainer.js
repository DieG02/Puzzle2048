import React from 'react'
import { View }  from 'react-native'
import GameMessage from './gameMessage'
import GridContainer from './gridContainer'
import TileContainer from './tileContainer'
import Dimensions from '../utils/dimensions'

function GameContainer (props) {
	return (
		<View style={styles.container}>
			<GridContainer />
			<TileContainer tiles={props.tiles} />
			<GameMessage
				won={props.won}
				over={props.over}
				onKeepGoing={props.onKeepGoing}
				onTryAagin={props.onTryAagin}
			/>
		</View>
	)
}

const { width } = Dimensions.get('window');
const styles = {
	container: {
		width: width - Dimensions.size['10'],
		height: width - Dimensions.size['10'],
		backgroundColor: '#bbada0',
		borderRadius: Dimensions.size['2'],
		marginTop: Dimensions.size['12'],
	}
}

export default GameContainer
