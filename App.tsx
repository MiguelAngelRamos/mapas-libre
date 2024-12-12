import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from './src/theme/paperTheme';
import { GlobalProvider } from './src/context/GlobalContext';
import BottomTabsNavigator from './src/navigation/BottomTabsNavigator';


const App = () => {
  return (
    <GlobalProvider>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <BottomTabsNavigator />
        </NavigationContainer>
      </PaperProvider>
    </GlobalProvider>
  );
};

export default App;
