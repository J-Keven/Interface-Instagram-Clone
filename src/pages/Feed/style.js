import { StyleSheet } from 'react-native'


export default StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 10,
	},
	header: {
		padding: 15,
		flexDirection: "row",
		alignItems: "center"
	},
	userName: {
		color: '#333',
		fontWeight: "bold"
	},
	avatar: {
		width: 32, 
		height:32,
		borderRadius: 16,
		marginRight: 10
	},
	description: {
		padding: 15,
		lineHeight: 18,
	}
})