import React, { useState, useEffect, version } from 'react'
import { View, Text, FlatList, Image, ScrollView } from 'react-native'
import api from '../../services/api'

// import api from '../../services/api'
import Style from './style'

export default function Feed() {

	const [feed, setFeed] = useState([])

	async function handleReloadPost() {
		const response = await fetch('http://localhost:3000/feed?_expand=author&_limit=5&_page=1')

		const data = await response.json()
		console.log(data)
		setFeed([...feed, ...data])

	}

	useEffect(() => {
		// handleReloadPost()

	}, [])
	return (
		<View style={Style.container}>
			<ScrollView>
				<View>
					<View style={Style.header}>
						<Image source={{ uri: "https://avatars0.githubusercontent.com/u/4669899?s=50&v=4" }} style={Style.avatar} />
						<Text style={Style.userName}>Jhonnas Keven</Text>
					</View>
					<View>
						<Image source={{ uri: "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/instagram-clone/5.jpeg" }} style={{
							width: '100%',
							aspectRatio: 0.834
						}} />
					</View>
					<View style={Style.description}> 
						<Text>
							<Text style={Style.userName}>Jhonnas Keven </Text>
						 Code, code and more code!
					</Text>
					</View>
				</View>
				
				<View>
					<View style={Style.header}>
						<Image source={{ uri: "https://avatars0.githubusercontent.com/u/4669899?s=50&v=4" }} style={Style.avatar} />
						<Text style={Style.userName}>Jhonnas Keven</Text>
					</View>
					<View>
						<Image source={{ uri: "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/instagram-clone/5.jpeg" }} style={{
							width: '100%',
							aspectRatio: 0.834
						}} />
					</View>
					<View style={Style.description}> 
						<Text>
							<Text style={Style.userName}>Jhonnas Keven </Text>
						 Code, code and more code!
					</Text>
					</View>
				</View>

				<View>
					<View style={Style.header}>
						<Image source={{ uri: "https://avatars0.githubusercontent.com/u/4669899?s=50&v=4" }} style={Style.avatar} />
						<Text style={Style.userName}>Jhonnas Keven</Text>
					</View>
					<View>
						<Image source={{ uri: "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/instagram-clone/5.jpeg" }} style={{
							width: '100%',
							aspectRatio: 0.834
						}} />
					</View>
					<View style={Style.description}> 
						<Text>
							<Text style={Style.userName}>Jhonnas Keven </Text>
						 Code, code and more code!
					</Text>
					</View>
				</View>

				<View>
					<View style={Style.header}>
						<Image source={{ uri: "https://avatars0.githubusercontent.com/u/4669899?s=50&v=4" }} style={Style.avatar} />
						<Text style={Style.userName}>Jhonnas Keven</Text>
					</View>
					<View>
						<Image source={{ uri: "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/instagram-clone/5.jpeg" }} style={{
							width: '100%',
							aspectRatio: 0.834
						}} />
					</View>
					<View style={Style.description}> 
						<Text>
							<Text style={Style.userName}>Jhonnas Keven </Text>
						 Code, code and more code!
					</Text>
					</View>
				</View>

				<View>
					<View style={Style.header}>
						<Image source={{ uri: "https://avatars0.githubusercontent.com/u/4669899?s=50&v=4" }} style={Style.avatar} />
						<Text style={Style.userName}>Jhonnas Keven</Text>
					</View>
					<View>
						<Image source={{ uri: "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/instagram-clone/5.jpeg" }} style={{
							width: '100%',
							aspectRatio: 0.834
						}} />
					</View>
					<View style={Style.description}> 
						<Text>
							<Text style={Style.userName}>Jhonnas Keven </Text>
						 Code, code and more code!
					</Text>
					</View>
				</View>
				
			</ScrollView>
		</View>
	)
}
