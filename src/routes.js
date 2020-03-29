import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Image } from 'react-native'

import Feed from './pages/Feed'
import Logo from './assets/instagram.png'

export default function Routes() {
	const Stack = createStackNavigator()

	return (
		<NavigationContainer>

			<Stack.Navigator i
				nitialRouteName="FEED" 
				screenOptions={
					{
						headerTitle:() =>  <Image source={Logo} />,
						headerStyle: {
							backgroundColor: '#f5f5f5'
						}
					}
				}
				
			>
				<Stack.Screen 
					name="FEED" 
					component={Feed}
					/>
			</Stack.Navigator>
		</NavigationContainer>	
	)
}
