import React, { useState, useEffect, useCallback } from 'react'
import { View, Text, FlatList, Image } from 'react-native'
import { Feather } from '@expo/vector-icons'

import Style from './style'
import { Loading } from './style'
import LazyImage from '../../components/LazyImage'

export default function Feed() {

	const [feed, setFeed] = useState([])
	const [page, setPage] = useState(1)
	const [total, setTotal] = useState(0)
	const [loading, setLoading] = useState(false)
	const [refreshing, setRefreshing] = useState(false)
	const [viewable, setViewable] = useState([])

	async function handleLoadPage(numberPage = page, shouldRefres = false) {
		
		if (total && page > total) return;
		setLoading(true)
		
		const response = await fetch(`http://localhost:3000/feed?_expand=author&_limit=5&_page=${numberPage}`)
		const data = await response.json()
		const totalItems = response.headers.get('X-Total-Count')

		setTotal(Math.floor(Number(totalItems) / 5))

		setFeed(shouldRefres ? data : [...feed, ...data])
		setPage(page + 1)
		setLoading(false)
	}

	async function refreshingList() {
		setRefreshing(true)

		await handleLoadPage(1, true)
		setRefreshing(false)
	}

	const hadleViewableChanged = useCallback(({ changed }) => {
		setViewable(changed.map( ({ item }) => item.id))
	}, [])

	useEffect(() => {
		handleLoadPage()

	}, [])

	return (
		<View style={Style.container}>
			<FlatList
				data={feed}
				keyExtractor={item => String(item.id)}
				refreshing={refreshing}
				onRefresh={refreshingList}
				onEndReached={() => handleLoadPage()}
				onViewableItemsChanged={hadleViewableChanged}
				viewabilityConfig={{
					viewAreaCoveragePercentThreshold: 20,
					minimumViewTime: 500
				}}
				onEndReachedThreshold={0.1}
				ListFooterComponent={loading && <Loading />}
				renderItem={({ item }) => (
					<>
						<View style={Style.header}>
							<View style={Style.headerInfo}>
								<Image source={{ uri: item.author.avatar }} style={Style.avatar} />
								<Text style={Style.userName}>{item.author.name}</Text>
							</View>
							<Feather name="more-vertical" size={22} style={Style.iconDistance} />
						</View>
						<LazyImage
							image={{ uri: item.image }}
							small={{ uri: item.small }}
							aspectRation={item.aspectRatio}
							ShoudLoad={viewable.includes(item.id)}
						/>
						<View style={Style.icons}>
							<View style={Style.iconsLeft}>
								<Feather name="heart" size={25} style={Style.iconDistance} />
								<Feather name="message-circle" size={25} style={Style.iconDistance} />
								<Feather name="send" size={25} />
							</View>
							<Feather name="bookmark" size={25} />
						</View>
						<View style={Style.description}>
							<Text>
								<Text style={Style.userName}>{item.author.name} </Text>
								{item.description}
							</Text>
						</View>
					</>
				)}
			/>
		</View>
	)
}
