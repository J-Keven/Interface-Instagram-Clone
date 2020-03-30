import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'

export default StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 10,
	},
	header: {
		padding: 15,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	},
	headerInfo: {
		flexDirection: "row",
		alignItems: "center"
	},
	userName: {
		color: '#333',
		fontWeight: "bold"
	},
	avatar: {
		width: 32,
		height: 32,
		borderRadius: 16,
		marginRight: 10
	},
	icons: {
		flexDirection: "row",
		padding: 15,
		lineHeight: 18,
		justifyContent: "space-between",
		alignItems: "center"
	},
	iconsLeft: {
		flexDirection: "row",
	},
	iconDistance: {
		marginRight: 10,

	},
	description: {
		paddingHorizontal: 15,
		lineHeight: 18,
	}
})

export const  Loading = styled.ActivityIndicator.attrs({
	size: 'small',
	color: '#999'
})`
	margin: 30px 0;
`;