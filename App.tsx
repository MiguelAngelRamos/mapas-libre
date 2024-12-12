import { View, Text } from 'react-native'
import React from 'react'
import GlobalContextProvider from './src/context/GlobalContext'
import { PaperProvider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import BottomTabsNavigator from './src/navigation/BottomTabsNavigator'

const App = () => {
  return (
    <GlobalContextProvider>
      <PaperProvider>
        <NavigationContainer>
          <BottomTabsNavigator />
        </NavigationContainer>
      </PaperProvider>
    </GlobalContextProvider>
  )
}

export default App